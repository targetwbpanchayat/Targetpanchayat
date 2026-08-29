import { UserProfile } from "../types";

// Backend API URL — Render বা অন্য ক্লাউড প্ল্যাটফর্মে ডেপ্লয় করা সার্ভারের URL
// এখানে আপনার Render URL বসান, যেমন: "https://targetpanchayat-api.onrender.com"
// লোকাল ডেভেলপমেন্টের সময় "/api/auth/..." relative path কাজ করবে
const API_BASE_URL =
  (import.meta.env?.VITE_API_BASE_URL as string | undefined)?.replace(/\/$/, "") || "";

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

// Client-side fallback OTP generator (used when no backend is available)
function generateClientFallbackOtp(email: string): string {
  const fallbackOtp = Math.floor(100000 + Math.random() * 900000).toString();
  sessionStorage.setItem(`wb_gp_client_otp_${email.toLowerCase()}`, fallbackOtp);
  return fallbackOtp;
}

// Send OTP via Backend API (connected to Gmail SMTP or development fallback)
export async function sendRegistrationOtp(email: string, name: string): Promise<SendOtpResult> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/send-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name }),
    });

    if (response.ok) {
      const data = await response.json();
      return {
        success: true,
        message: data.message || "ওটিপি সফলভাবে পাঠানো হয়েছে।",
        emailSent: data.emailSent,
        devOtp: data.devOtp,
      };
    }

    // API not available (e.g. GitHub Pages) — use client-side fallback
    console.warn("Backend API not available, using client fallback OTP");
    const fallbackOtp = generateClientFallbackOtp(email);
    return {
      success: true,
      message: "ওটিপি কোড তৈরি হয়েছে (অফলাইন মোড)। নিচের কোডটি ব্যবহার করুন।",
      emailSent: false,
      devOtp: fallbackOtp,
    };
  } catch (err: any) {
    console.warn("API request failed, generating client fallback OTP:", err);
    const fallbackOtp = generateClientFallbackOtp(email);
    return {
      success: true,
      message: "ওটিপি কোড তৈরি হয়েছে (অফলাইন মোড)। নিচের কোডটি ব্যবহার করুন।",
      emailSent: false,
      devOtp: fallbackOtp,
    };
  }
}

export async function sendResetPasswordOtp(email: string): Promise<SendOtpResult> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/reset-password-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      const data = await response.json();
      return {
        success: true,
        message: data.message || "রিসেট ওটিপি পাঠানো হয়েছে।",
        emailSent: data.emailSent,
        devOtp: data.devOtp,
      };
    }

    // API not available — use client-side fallback
    console.warn("Backend API not available, using client fallback OTP");
    const fallbackOtp = generateClientFallbackOtp(email);
    return {
      success: true,
      message: "পাসওয়ার্ড রিসেট কোড তৈরি হয়েছে (অফলাইন মোড)। নিচের কোডটি ব্যবহার করুন।",
      emailSent: false,
      devOtp: fallbackOtp,
    };
  } catch (err: any) {
    const fallbackOtp = generateClientFallbackOtp(email);
    return {
      success: true,
      message: "পাসওয়ার্ড রিসেট কোড তৈরি হয়েছে (অফলাইন মোড)। নিচের কোডটি ব্যবহার করুন।",
      emailSent: false,
      devOtp: fallbackOtp,
    };
  }
}

export async function verifyOtp(email: string, otp: string): Promise<VerifyOtpResult> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/verify-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, message: data.message || "যাচাইকরণ সফল!" };
    }
  } catch (err: any) {
    // Network error — fall through to client fallback check
  }

  // Check client fallback OTP (used when API is not available)
  const clientOtp = sessionStorage.getItem(`wb_gp_client_otp_${email.toLowerCase()}`);
  if (clientOtp && clientOtp === otp.trim()) {
    sessionStorage.removeItem(`wb_gp_client_otp_${email.toLowerCase()}`);
    return { success: true, message: "যাচাইকরণ সফল!" };
  }

  return { success: false, message: "ভুল ওটিপি! অনুগ্রহ করে সঠিক কোড দিন।" };
}

export async function checkSmtpStatus(): Promise<{ configured: boolean; user: string | null }> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/auth/smtp-status`);
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.error("Failed to check SMTP status:", err);
  }
  return { configured: false, user: null };
}
