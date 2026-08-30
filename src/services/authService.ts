/**
 * Authentication Service — Supabase Auth
 *
 * Supabase handles:
 *   - Email OTP (signInWithOtp) — sends 6-digit code to email
 *   - OTP verification (verifyOtp)
 *   - Password login (signInWithPassword)
 *   - Password reset (resetPasswordForEmail)
 *   - Session management (onAuthStateChange)
 *
 * User profiles + progress stored in Supabase Database (PostgreSQL)
 * with Row Level Security — each user sees only their own data.
 *
 * Setup: Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to GitHub Secrets.
 */
import { supabase, SUPABASE_ENABLED } from "../lib/supabase";
import { UserProfile } from "../types";

export interface StoredUser {
  email: string;
  name: string;
  targetPost: string;
  passwordHash: string;
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

// ============ SUPABASE AUTH: SEND OTP ============

/**
 * Send OTP to email. Supabase sends a 6-digit code via email.
 * No App Password or SMTP needed — Supabase handles it.
 */
export async function sendRegistrationOtp(
  email: string,
  name: string
): Promise<SendOtpResult> {
  if (!SUPABASE_ENABLED || !supabase) {
    const fallbackOtp = Math.floor(100000 + Math.random() * 900000).toString();
    sessionStorage.setItem(
      `wb_gp_client_otp_${email.toLowerCase()}`,
      fallbackOtp
    );
    return {
      success: true,
      message: "Supabase কনফিগার নেই। অফলাইন OTP: " + fallbackOtp,
      emailSent: false,
      devOtp: fallbackOtp,
    };
  }

  try {
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: {
        shouldCreateUser: true,
        data: { name: name.trim() },
      },
    });

    if (error) {
      return { success: false, message: mapSupabaseError(error) };
    }

    return {
      success: true,
      emailSent: true,
      message:
        "আপনার ইমেইলে ৬-সংখ্যার ওটিপি পাঠানো হয়েছে। ইনবক্স বা স্প্যাম ফোল্ডার চেক করুন।",
    };
  } catch (err: any) {
    console.error("Send OTP error:", err);
    const fallbackOtp = Math.floor(100000 + Math.random() * 900000).toString();
    sessionStorage.setItem(
      `wb_gp_client_otp_${email.toLowerCase()}`,
      fallbackOtp
    );
    return {
      success: true,
      message: "নেটওয়ার্ক সমস্যা। অফলাইন OTP: " + fallbackOtp,
      emailSent: false,
      devOtp: fallbackOtp,
    };
  }
}

// ============ SUPABASE AUTH: VERIFY OTP ============

export async function verifyOtp(
  email: string,
  otp: string
): Promise<VerifyOtpResult> {
  if (!SUPABASE_ENABLED || !supabase) {
    const clientOtp = sessionStorage.getItem(
      `wb_gp_client_otp_${email.toLowerCase()}`
    );
    if (clientOtp && clientOtp === otp.trim()) {
      sessionStorage.removeItem(`wb_gp_client_otp_${email.toLowerCase()}`);
      return { success: true, message: "যাচাইকরণ সফল!" };
    }
    return { success: false, message: "ভুল OTP!" };
  }

  try {
    const { data, error } = await supabase.auth.verifyOtp({
      email: email.trim(),
      token: otp.trim(),
      type: "email",
    });

    if (error) {
      return { success: false, message: mapSupabaseError(error) };
    }

    // OTP verified! Save user profile to database
    if (data.user) {
      await saveUserProfileToDb(data.user);
    }

    return { success: true, message: "ইমেইল সফলভাবে যাচাই হয়েছে!" };
  } catch (err: any) {
    const clientOtp = sessionStorage.getItem(
      `wb_gp_client_otp_${email.toLowerCase()}`
    );
    if (clientOtp && clientOtp === otp.trim()) {
      sessionStorage.removeItem(`wb_gp_client_otp_${email.toLowerCase()}`);
      return { success: true, message: "যাচাইকরণ সফল!" };
    }
    return { success: false, message: "ভুল OTP!" };
  }
}

// ============ SUPABASE AUTH: PASSWORD RESET ============

export async function sendResetPasswordOtp(
  email: string
): Promise<SendOtpResult> {
  if (!SUPABASE_ENABLED || !supabase) {
    const fallbackOtp = Math.floor(100000 + Math.random() * 900000).toString();
    sessionStorage.setItem(
      `wb_gp_client_otp_${email.toLowerCase()}`,
      fallbackOtp
    );
    return {
      success: true,
      message: "Supabase কনফিগার নেই। অফলাইন OTP: " + fallbackOtp,
      emailSent: false,
      devOtp: fallbackOtp,
    };
  }

  try {
    // Send OTP for password recovery
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { shouldCreateUser: false },
    });

    if (error) {
      return { success: false, message: mapSupabaseError(error) };
    }

    return {
      success: true,
      emailSent: true,
      message: "পাসওয়ার্ড রিসেট OTP আপনার ইমেইলে পাঠানো হয়েছে।",
    };
  } catch (err: any) {
    return { success: false, message: "নেটওয়ার্ক সমস্যা।" };
  }
}

// ============ SUPABASE AUTH: PASSWORD LOGIN ============

export async function loginUser(
  email: string,
  password: string
): Promise<{ success: boolean; message: string }> {
  if (!SUPABASE_ENABLED || !supabase) {
    // Fallback to localStorage
    const users = getRegisteredUsers();
    const user = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase().trim()
    );
    if (user && user.passwordHash === btoa(password)) {
      return { success: true, message: "লগইন সফল!" };
    }
    return { success: false, message: "ভুল ইমেইল বা পাসওয়ার্ড।" };
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      return { success: false, message: mapSupabaseError(error) };
    }

    return { success: true, message: "লগইন সফল!" };
  } catch (err: any) {
    return { success: false, message: "নেটওয়ার্ক সমস্যা।" };
  }
}

// ============ SUPABASE AUTH: SIGN UP WITH PASSWORD ============

export async function signUpWithPassword(
  email: string,
  password: string,
  name: string,
  targetPost: string
): Promise<{ success: boolean; message: string }> {
  if (!SUPABASE_ENABLED || !supabase) {
    return { success: false, message: "Supabase কনফিগার করা হয়নি।" };
  }

  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: { name: name.trim(), targetPost },
      },
    });

    if (error) {
      return { success: false, message: mapSupabaseError(error) };
    }

    // Save profile to database
    if (data.user) {
      await saveUserProfileToDb(data.user, name, targetPost);
    }

    return {
      success: true,
      message:
        "রেজিস্ট্রেশন সফল! আপনার ইমেইলে ভেরিফিকেশন OTP পাঠানো হয়েছে।",
    };
  } catch (err: any) {
    return { success: false, message: "নেটওয়ার্ক সমস্যা।" };
  }
}

// ============ SUPABASE: SAVE PROFILE TO DB ============

async function saveUserProfileToDb(
  user: any,
  name?: string,
  targetPost?: string
): Promise<void> {
  if (!supabase) return;

  try {
    const profileName =
      name || user.user_metadata?.name || user.email?.split("@")[0] || "পরীক্ষার্থী";
    const post =
      targetPost || user.user_metadata?.targetPost || "Gram Panchayat Karmee & Sahayak";

    await supabase.from("user_profiles").upsert({
      id: user.id,
      email: user.email?.toLowerCase().trim(),
      name: profileName,
      target_post: post,
      is_verified: true,
      updated_at: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Failed to save user profile to DB:", err);
  }
}

// ============ SUPABASE: AUTH STATE LISTENER ============

export function onAuthChange(
  callback: (user: UserProfile | null) => void
): () => void {
  if (!SUPABASE_ENABLED || !supabase) {
    callback(getCurrentUser());
    return () => {};
  }

  const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
    if (session?.user) {
      let profile: UserProfile | null = null;

      // Try loading from database
      try {
        const { data: profileData } = await supabase
          .from("user_profiles")
          .select("*")
          .eq("id", session.user.id)
          .single();

        if (profileData) {
          profile = {
            email: profileData.email || session.user.email || "",
            name: profileData.name || "পরীক্ষার্থী",
            targetPost: profileData.target_post || "Gram Panchayat Karmee & Sahayak",
            joinedDate: profileData.created_at || new Date().toISOString(),
            isVerified: true,
          };
        }
      } catch (err) {
        console.error("Failed to load profile from DB:", err);
      }

      // Fallback: build from session
      if (!profile) {
        profile = {
          email: session.user.email || "",
          name: session.user.user_metadata?.name || "পরীক্ষার্থী",
          targetPost:
            session.user.user_metadata?.target_post ||
            "Gram Panchayat Karmee & Sahayak",
          joinedDate: session.user.created_at || new Date().toISOString(),
          isVerified: true,
        };
      }

      setCurrentUser(profile);
      callback(profile);
    } else {
      setCurrentUser(null);
      callback(null);
    }
  });

  return () => data.subscription.unsubscribe();
}

// ============ LOGOUT ============

export async function logoutUser(): Promise<void> {
  if (SUPABASE_ENABLED && supabase) {
    try {
      await supabase.auth.signOut();
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
    configured: SUPABASE_ENABLED,
    user: null,
  };
}

// ============ ERROR MAPPING ============

function mapSupabaseError(error: any): string {
  const msg = error?.message || "";
  if (msg.includes("Invalid login credentials")) {
    return "ভুল ইমেইল বা পাসওয়ার্ড।";
  }
  if (msg.includes("User already registered")) {
    return "এই ইমেইল দিয়ে ইতিমধ্যে অ্যাকাউন্ট রয়েছে। লগইন করুন।";
  }
  if (msg.includes("Email not confirmed")) {
    return "ইমেইল ভেরিফাই করা হয়নি। OTP যাচাই করুন।";
  }
  if (msg.includes("rate limit") || msg.includes("too many")) {
    return "অনেকবার চেষ্টা হয়েছে। কিছুক্ষণ পরে চেষ্টা করুন।";
  }
  if (msg.includes("Token has expired") || msg.includes("invalid token")) {
    return "OTP এর মেয়াদ শেষ বা ভুল। পুনরায় OTP পাঠান।";
  }
  return msg || "কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।";
}
