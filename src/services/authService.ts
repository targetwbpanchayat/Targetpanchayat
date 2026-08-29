import { UserProfile } from "../types";
import emailjs from "@emailjs/browser";

export interface StoredUser {
  email: string;
  name: string;
  targetPost: string;
  passwordHash: string; // Basic hashed/encoded string for local mock DB
  isVerified: boolean;
  createdAt: string;
}

const REGISTERED_USERS_KEY = "wb_gp_users_v2";
const ACTIVE_SESSION_KEY = "wb_gp_current_user_v2";

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

// EmailJS configuration from Vite environment variables
const EMAILJS_SERVICE_ID = import.meta.env?.VITE_EMAILJS_SERVICE_ID as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env?.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY = import.meta.env?.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

// Initialize EmailJS if all keys are present
const emailjsConfigured = Boolean(
  EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY &&
  EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID" &&
  EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID" &&
  EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY"
);

if (emailjsConfigured) {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY! });
}

// Retrieve all local registered users
export function getRegisteredUsers(): StoredUser[] {
  try {
    const raw = localStorage.getItem(REGISTERED_USERS_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error("Failed to load registered users:", err);
  }
  // Default demo user for instant testing if wanted
  const demoUsers: StoredUser[] = [
    {
      email: "targetpanchayat@gmail.com",
      name: "রাহুল ব্যানার্জি",
      targetPost: "Gram Panchayat Karmee & Sahayak",
      passwordHash: btoa("panchayat2026"),
      isVerified: true,
      createdAt: new Date().toISOString(),
    }
  ];
  localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(demoUsers));
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
    if (raw) {
      return JSON.parse(raw);
    }
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

// Client-side OTP generator
function generateOtp(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Store OTP in sessionStorage for verification (with 10 min expiry)
function storeOtp(email: string, otp: string): void {
  const data = { otp, expiresAt: Date.now() + 10 * 60 * 1000 };
  sessionStorage.setItem(`wb_gp_otp_${email.toLowerCase()}`, JSON.stringify(data));
}

// Verify OTP from sessionStorage
function verifyStoredOtp(email: string, otp: string): boolean {
  const raw = sessionStorage.getItem(`wb_gp_otp_${email.toLowerCase()}`);
  if (!raw) return false;
  try {
    const data = JSON.parse(raw);
    if (Date.now() > data.expiresAt) {
      sessionStorage.removeItem(`wb_gp_otp_${email.toLowerCase()}`);
      return false;
    }
    if (data.otp === otp.trim()) {
      sessionStorage.removeItem(`wb_gp_otp_${email.toLowerCase()}`);
      return true;
    }
  } catch {
    // ignore
  }
  return false;
}

// Send OTP via EmailJS (directly from browser, no backend needed)
async function sendOtpViaEmailJS(
  email: string,
  name: string,
  otp: string,
  type: "register" | "reset"
): Promise<boolean> {
  if (!emailjsConfigured) {
    return false;
  }

  try {
    const templateParams = {
      to_email: email,
      to_name: name || "পরীক্ষার্থী",
      email: email,
      name: name || "পরীক্ষার্থী",
      otp_code: otp,
      otp: otp,
      message: `আপনার ওটিপি কোড: ${otp}`,
      subject: type === "register"
        ? `WB GP Prep — রেজিস্ট্রেশন ওটিপি: ${otp}`
        : `WB GP Prep — পাসওয়ার্ড রিসেট ওটিপি: ${otp}`,
      type: type === "register" ? "রেজিস্ট্রেশন" : "পাসওয়ার্ড রিসেট",
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID!,
      EMAILJS_TEMPLATE_ID!,
      templateParams,
      { publicKey: EMAILJS_PUBLIC_KEY! }
    );

    return response.status === 200;
  } catch (err: any) {
    console.error("EmailJS send failed:", err);
    return false;
  }
}

// Send registration OTP
export async function sendRegistrationOtp(email: string, name: string): Promise<SendOtpResult> {
  const otp = generateOtp();
  storeOtp(email, otp);

  const emailSent = await sendOtpViaEmailJS(email, name, otp, "register");

  if (emailSent) {
    return {
      success: true,
      message: "আপনার ইমেইলে ওটিপি পাঠানো হয়েছে। ইনবক্স অথবা স্প্যাম ফোল্ডার চেক করুন।",
      emailSent: true,
    };
  }

  // Fallback: show OTP on screen
  return {
    success: true,
    message: "ইমেইল পাঠানো যায়নি। নিচের OTP কোডটি ব্যবহার করুন।",
    emailSent: false,
    devOtp: otp,
  };
}

// Send password reset OTP
export async function sendResetPasswordOtp(email: string): Promise<SendOtpResult> {
  const otp = generateOtp();
  storeOtp(email, otp);

  const emailSent = await sendOtpViaEmailJS(email, "পরীক্ষার্থী", otp, "reset");

  if (emailSent) {
    return {
      success: true,
      message: "পাসওয়ার্ড রিসেট ওটিপি আপনার ইমেইলে পাঠানো হয়েছে।",
      emailSent: true,
    };
  }

  return {
    success: true,
    message: "ইমেইল পাঠানো যায়নি। নিচের OTP কোডটি ব্যবহার করুন।",
    emailSent: false,
    devOtp: otp,
  };
}

// Verify OTP
export async function verifyOtp(email: string, otp: string): Promise<VerifyOtpResult> {
  if (verifyStoredOtp(email, otp)) {
    return { success: true, message: "যাচাইকরণ সফল!" };
  }
  return { success: false, message: "ভুল ওটিপি! অনুগ্রহ করে সঠিক কোড দিন।" };
}

// Check EmailJS configuration status
export async function checkSmtpStatus(): Promise<{ configured: boolean; user: string | null }> {
  return {
    configured: emailjsConfigured,
    user: emailjsConfigured ? "EmailJS" : null,
  };
}
