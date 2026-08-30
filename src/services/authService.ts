/**
 * Authentication Service — Firebase Auth + Firestore
 *
 * This module replaces the old Express + nodemailer backend.
 * Firebase Auth handles:
 *   - Email/password registration & login
 *   - Email verification OTP (sent by Firebase automatically)
 *   - Password reset (OTP email sent by Firebase)
 *
 * All user data is stored in Firestore (cloud), keyed by UID.
 * Each user can only read/write their own data (enforced by Security Rules).
 *
 * Backwards-compatible: exports the same function signatures the app
 * already calls (sendRegistrationOtp, verifyOtp, getCurrentUser, etc.),
 * so other components don't need changes.
 */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  applyActionCode,
  onAuthStateChanged,
  updateProfile,
  signOut,
  type User as FirebaseUser,
} from "firebase/auth";
import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db, FIREBASE_ENABLED } from "../lib/firebase";
import { UserProfile } from "../types";

export interface StoredUser {
  email: string;
  name: string;
  targetPost: string;
  passwordHash: string; // kept for interface compat — unused with Firebase
  isVerified: boolean;
  createdAt: string;
}

export interface SendOtpResult {
  success: boolean;
  message: string;
  emailSent?: boolean;
  devOtp?: string;
}

export interface VerifyOtpResult {
  success: boolean;
  message: string;
}

// localStorage keys (used as cache / fallback)
const REGISTERED_USERS_KEY = "wb_gp_users_v2";
const ACTIVE_SESSION_KEY = "wb_gp_current_user_v2";

// ============ LOCAL STORAGE HELPERS (fallback) ============

export function getRegisteredUsers(): StoredUser[] {
  try {
    const raw = localStorage.getItem(REGISTERED_USERS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (err) {
    console.error("Failed to load registered users:", err);
  }
  const demoUsers: StoredUser[] = [
    {
      email: "targetpanchayat@gmail.com",
      name: "রাহুল ব্যানার্জি",
      targetPost: "Gram Panchayat Karmee & Sahayak",
      passwordHash: btoa("panchayat2026"),
      isVerified: true,
      createdAt: new Date().toISOString(),
    },
  ];
  try {
    localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(demoUsers));
  } catch {}
  return demoUsers;
}

export function saveRegisteredUsers(users: StoredUser[]): void {
  try {
    localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(users));
  } catch (err) {
    console.error("Failed to save registered users:", err);
  }
}

// ============ SESSION MANAGEMENT ============

export function getCurrentUser(): UserProfile | null {
  try {
    const raw = localStorage.getItem(ACTIVE_SESSION_KEY);
    if (raw) return JSON.parse(raw);
  } catch (err) {
    console.error("Failed to get current user:", err);
  }
  return null;
}

export function setCurrentUser(user: UserProfile | null): void {
  try {
    if (user) {
      localStorage.setItem(ACTIVE_SESSION_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(ACTIVE_SESSION_KEY);
    }
  } catch (err) {
    console.error("Failed to set current user:", err);
  }
}

// ============ FIREBASE AUTH: REGISTRATION + OTP ============

/**
 * Register a new user with email & password.
 * Firebase automatically sends a verification email (with OTP link) to the user.
 *
 * The flow:
 *   1. Create auth account (email + password)
 *   2. Update display name
 *   3. Send email verification (this is the "OTP" — Firebase sends it)
 *   4. Save user profile to Firestore
 *
 * Returns the created Firebase user + a message.
 */
export async function registerUser(
  email: string,
  password: string,
  name: string,
  targetPost: string
): Promise<{
  success: boolean;
  user?: FirebaseUser;
  message: string;
}> {
  if (!FIREBASE_ENABLED || !auth) {
    return {
      success: false,
      message:
        "Firebase কনফিগার করা হয়নি। অনুগ্রহ করে Firebase প্রজেক্ট সেটআপ করুন।",
    };
  }

  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password);

    // Set display name
    if (cred.user) {
      await updateProfile(cred.user, { displayName: name });
    }

    // Send verification email — this is Firebase's built-in OTP/verification
    await sendEmailVerification(cred.user, {
      url: window.location.origin + "/Targetpanchayat/",
      handleCodeInApp: true,
    });

    // Save user profile to Firestore
    if (db && cred.user) {
      await setDoc(doc(db, "users", cred.user.uid), {
        email: email.toLowerCase().trim(),
        name,
        targetPost,
        isVerified: false,
        createdAt: serverTimestamp(),
      });
    }

    return {
      success: true,
      user: cred.user,
      message:
        "রেজিস্ট্রেশন সফল! আপনার ইমেইলে একটি ভেরিফিকেশন লিংক পাঠানো হয়েছে। ইনবক্স বা স্প্যাম ফোল্ডার চেক করুন এবং লিংকে ক্লিক করে ইমেইল ভেরিফাই করুন।",
    };
  } catch (err: any) {
    console.error("Registration error:", err);
    return {
      success: false,
      message: mapFirebaseAuthError(err),
    };
  }
}

/**
 * Send registration OTP (verification email) to a user who just registered
 * or who needs to re-verify. This matches the old sendRegistrationOtp signature
 * so the existing AuthModal can call it without changes.
 *
 * Note: With Firebase, the "OTP" is a verification link sent via email.
 * Firebase handles delivery — no App Password or SMTP needed.
 */
export async function sendRegistrationOtp(
  email: string,
  name: string
): Promise<SendOtpResult> {
  if (!FIREBASE_ENABLED || !auth) {
    // Offline fallback (same as old behavior)
    const fallbackOtp = Math.floor(100000 + Math.random() * 900000).toString();
    sessionStorage.setItem(
      `wb_gp_client_otp_${email.toLowerCase()}`,
      fallbackOtp
    );
    return {
      success: true,
      message: "Firebase কনফিগার নেই। অফলাইন মোডে OTP তৈরি হয়েছে।",
      emailSent: false,
      devOtp: fallbackOtp,
    };
  }

  // If user is already signed in (just registered), send verification
  const currentUser = auth.currentUser;
  if (currentUser && currentUser.email?.toLowerCase() === email.toLowerCase()) {
    try {
      await sendEmailVerification(currentUser, {
        url: window.location.origin + "/Targetpanchayat/",
        handleCodeInApp: true,
      });
      return {
        success: true,
        emailSent: true,
        message:
          "ভেরিফিকেশন ইমেইল পাঠানো হয়েছে। ইনবক্স বা স্প্যাম ফোল্ডার চেক করুন।",
      };
    } catch (err: any) {
      return {
        success: false,
        message: mapFirebaseAuthError(err),
      };
    }
  }

  // User not signed in — they need to register first
  return {
    success: false,
    message:
      "প্রথমে রেজিস্ট্রেশন করুন। রেজিস্ট্রেশনের পর স্বয়ংক্রিয়ভাবে ভেরিফিকেশন ইমেইল পাঠানো হবে।",
  };
}

// ============ FIREBASE AUTH: LOGIN ============

export async function loginUser(
  email: string,
  password: string
): Promise<{
  success: boolean;
  user?: FirebaseUser;
  message: string;
}> {
  if (!FIREBASE_ENABLED || !auth) {
    return {
      success: false,
      message: "Firebase কনফিগার করা হয়নি।",
    };
  }

  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    return {
      success: true,
      user: cred.user,
      message: "লগইন সফল!",
    };
  } catch (err: any) {
    console.error("Login error:", err);
    return {
      success: false,
      message: mapFirebaseAuthError(err),
    };
  }
}

// ============ PASSWORD RESET ============

export async function sendResetPasswordOtp(
  email: string
): Promise<SendOtpResult> {
  if (!FIREBASE_ENABLED || !auth) {
    const fallbackOtp = Math.floor(100000 + Math.random() * 900000).toString();
    sessionStorage.setItem(
      `wb_gp_client_otp_${email.toLowerCase()}`,
      fallbackOtp
    );
    return {
      success: true,
      message: "Firebase কনফিগার নেই। অফলাইন মোডে কোড তৈরি হয়েছে।",
      emailSent: false,
      devOtp: fallbackOtp,
    };
  }

  try {
    await sendPasswordResetEmail(auth, email, {
      url: window.location.origin + "/Targetpanchayat/",
      handleCodeInApp: true,
    });
    return {
      success: true,
      emailSent: true,
      message:
        "পাসওয়ার্ড রিসেট লিংক আপনার ইমেইলে পাঠানো হয়েছে। ইনবক্স বা স্প্যাম ফোল্ডার চেক করুন।",
    };
  } catch (err: any) {
    return {
      success: false,
      message: mapFirebaseAuthError(err),
    };
  }
}

// ============ OTP VERIFICATION ============

/**
 * Verify OTP. With Firebase, email verification happens by clicking the link
 * in the email. But if the user enters a 6-digit code (old UI flow), we
 * check the client-side fallback OTP.
 *
 * After email verification link is clicked, Firebase updates the user's
 * emailVerified flag. The app listens via onAuthStateChanged.
 */
export async function verifyOtp(
  email: string,
  otp: string
): Promise<VerifyOtpResult> {
  if (!FIREBASE_ENABLED || !auth) {
    // Check client fallback OTP
    const clientOtp = sessionStorage.getItem(
      `wb_gp_client_otp_${email.toLowerCase()}`
    );
    if (clientOtp && clientOtp === otp.trim()) {
      sessionStorage.removeItem(`wb_gp_client_otp_${email.toLowerCase()}`);
      return { success: true, message: "যাচাইকরণ সফল!" };
    }
    return {
      success: false,
      message: "ভুল OTP! সঠিক কোড দিন।",
    };
  }

  // With Firebase: check if the current user's email is now verified
  // (user would have clicked the verification link in email)
  const currentUser = auth.currentUser;
  if (currentUser) {
    // Force refresh the ID token to get latest emailVerified status
    await currentUser.reload();
    if (currentUser.emailVerified) {
      // Update Firestore user doc
      if (db) {
        try {
          await setDoc(
            doc(db, "users", currentUser.uid),
            { isVerified: true },
            { merge: true }
          );
        } catch {}
      }
      return {
        success: true,
        message: "ইমেইল সফলভাবে যাচাই হয়েছে!",
      };
    }
  }

  // Check client fallback OTP (for offline mode)
  const clientOtp = sessionStorage.getItem(
    `wb_gp_client_otp_${email.toLowerCase()}`
  );
  if (clientOtp && clientOtp === otp.trim()) {
    sessionStorage.removeItem(`wb_gp_client_otp_${email.toLowerCase()}`);
    return { success: true, message: "যাচাইকরণ সফল!" };
  }

  return {
    success: false,
    message:
      "ইমেইল ভেরিফিকেশন সম্পূর্ণ হয়নি। আপনার ইমেইলে পাঠানো লিংকে ক্লিক করুন অথবা সঠিক OTP দিন।",
  };
}

// ============ AUTH STATE LISTENER ============

/**
 * Listen to Firebase auth state changes. Returns an unsubscribe function.
 * The callback receives a UserProfile (or null) derived from the Firebase user.
 */
export function onAuthChange(
  callback: (user: UserProfile | null) => void
): () => void {
  if (!FIREBASE_ENABLED || !auth) {
    callback(getCurrentUser());
    return () => {};
  }

  return onAuthStateChanged(auth, async (fbUser: FirebaseUser | null) => {
    if (fbUser) {
      // Try to load profile from Firestore
      let profile: UserProfile | null = null;

      if (db) {
        try {
          const snap = await getDoc(doc(db, "users", fbUser.uid));
          if (snap.exists()) {
            const data = snap.data();
            profile = {
              email: data.email || fbUser.email || "",
              name: data.name || fbUser.displayName || "পরীক্ষার্থী",
              targetPost: data.targetPost || "Gram Panchayat Karmee & Sahayak",
              joinedDate: data.createdAt?.toDate?.()?.toISOString?.() || new Date().toISOString(),
              isVerified: fbUser.emailVerified,
              avatarId: data.avatarId,
            };
          }
        } catch (err) {
          console.error("Failed to load user profile from Firestore:", err);
        }
      }

      // Fallback: build profile from Firebase auth user
      if (!profile) {
        profile = {
          email: fbUser.email || "",
          name: fbUser.displayName || "পরীক্ষার্থী",
          targetPost: "Gram Panchayat Karmee & Sahayak",
          joinedDate: new Date().toISOString(),
          isVerified: fbUser.emailVerified,
        };
      }

      setCurrentUser(profile);
      callback(profile);
    } else {
      setCurrentUser(null);
      callback(null);
    }
  });
}

// ============ LOGOUT ============

export async function logoutUser(): Promise<void> {
  if (FIREBASE_ENABLED && auth) {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Logout error:", err);
    }
  }
  setCurrentUser(null);
}

// ============ SMTP STATUS CHECK (compat) ============

export async function checkSmtpStatus(): Promise<{
  configured: boolean;
  user: string | null;
}> {
  return {
    configured: FIREBASE_ENABLED,
    user: auth?.currentUser?.email || null,
  };
}

// ============ ERROR MAPPING ============

function mapFirebaseAuthError(err: any): string {
  const code = err?.code || "";
  switch (code) {
    case "auth/email-already-in-use":
      return "এই ইমেইল দিয়ে ইতিমধ্যে একটি অ্যাকাউন্ট রয়েছে। লগইন করুন।";
    case "auth/invalid-email":
      return "ইমেইল ঠিকানাটি বৈধ নয়।";
    case "auth/weak-password":
      return "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।";
    case "auth/user-not-found":
      return "এই ইমেইল দিয়ে কোনো অ্যাকাউন্ট নেই। প্রথমে রেজিস্ট্রেশন করুন।";
    case "auth/wrong-password":
    case "auth/invalid-credential":
      return "ভুল পাসওয়ার্ড। আবার চেষ্টা করুন।";
    case "auth/too-many-requests":
      return "অনেকবার চেষ্টা হয়েছে। কিছুক্ষণ পরে আবার চেষ্টা করুন।";
    case "auth/network-request-failed":
      return "নেটওয়ার্ক সমস্যা। ইন্টারনেট কানেকশন চেক করুন।";
    case "auth/configuration-not-found":
      return "Firebase Authentication সেটআপ সম্পূর্ণ নয়। Firebase কনসোলে Email/Password সাইন-ইন মেথড চালু করুন।";
    default:
      return err?.message || "কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।";
  }
}
