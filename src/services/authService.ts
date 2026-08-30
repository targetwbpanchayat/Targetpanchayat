/**
 * Authentication Service — Google Apps Script OTP + localStorage
 *
 * SIMPLE SETUP (no Firebase, no App Password):
 *   1. Paste google-apps-script/Code.gs into script.google.com
 *   2. Deploy as Web App (Anyone access)
 *   3. Copy the Web App URL
 *   4. Add it as GitHub Secret: VITE_OTP_SERVICE_URL
 *
 * OTP emails are sent from YOUR Gmail via Google Apps Script.
 * User accounts (email/password) are stored in localStorage.
 */
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

// Apps Script Web App URL — from VITE_OTP_SERVICE_URL env var
const OTP_SERVICE_URL = (
  import.meta.env?.VITE_OTP_SERVICE_URL as string | undefined
)?.replace(/\/$/, "") || "";

// ============ LOCAL STORAGE HELPERS ============

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

// ============ OTP: SEND via Apps Script ============

export async function sendRegistrationOtp(
  email: string,
  name: string
): Promise<SendOtpResult> {
  if (!OTP_SERVICE_URL) {
    // No backend — use offline fallback
    const fallbackOtp = Math.floor(100000 + Math.random() * 900000).toString();
    sessionStorage.setItem(
      `wb_gp_client_otp_${email.toLowerCase()}`,
      fallbackOtp
    );
    return {
      success: true,
      message:
        "OTP সার্ভিস কনফিগার করা হয়নি। অফলাইন OTP: " + fallbackOtp,
      emailSent: false,
      devOtp: fallbackOtp,
    };
  }

  try {
    const response = await fetch(OTP_SERVICE_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        action: "send-otp",
        email: email.trim(),
        name: name.trim(),
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return {
        success: data.success,
        message: data.message || "ওটিপি পাঠানো হয়েছে।",
        emailSent: data.emailSent,
      };
    }
    return { success: false, message: "সার্ভার সমস্যা। আবার চেষ্টা করুন।" };
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

export async function sendResetPasswordOtp(
  email: string
): Promise<SendOtpResult> {
  if (!OTP_SERVICE_URL) {
    const fallbackOtp = Math.floor(100000 + Math.random() * 900000).toString();
    sessionStorage.setItem(
      `wb_gp_client_otp_${email.toLowerCase()}`,
      fallbackOtp
    );
    return {
      success: true,
      message: "OTP সার্ভিস কনফিগার নেই। অফলাইন OTP: " + fallbackOtp,
      emailSent: false,
      devOtp: fallbackOtp,
    };
  }

  try {
    const response = await fetch(OTP_SERVICE_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        action: "send-reset-otp",
        email: email.trim(),
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return {
        success: data.success,
        message: data.message || "রিসেট OTP পাঠানো হয়েছে।",
        emailSent: data.emailSent,
      };
    }
    return { success: false, message: "সার্ভার সমস্যা।" };
  } catch (err: any) {
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

// ============ OTP: VERIFY via Apps Script ============

export async function verifyOtp(
  email: string,
  otp: string
): Promise<VerifyOtpResult> {
  if (!OTP_SERVICE_URL) {
    // Offline fallback
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
    const response = await fetch(OTP_SERVICE_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        action: "verify-otp",
        email: email.trim(),
        otp: otp.trim(),
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return {
        success: data.success,
        message: data.message || "যাচাইকরণ সফল!",
      };
    }
    return { success: false, message: "সার্ভার সমস্যা।" };
  } catch (err: any) {
    // Network error — check offline fallback
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

// ============ AUTH STATE (compat) ============

export function onAuthChange(
  callback: (user: UserProfile | null) => void
): () => void {
  callback(getCurrentUser());
  return () => {};
}

export async function logoutUser(): Promise<void> {
  setCurrentUser(null);
}

export async function checkSmtpStatus(): Promise<{
  configured: boolean;
  user: string | null;
}> {
  return {
    configured: Boolean(OTP_SERVICE_URL),
    user: null,
  };
}
