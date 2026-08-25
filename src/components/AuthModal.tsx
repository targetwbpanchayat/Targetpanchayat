import React, { useState, useEffect } from "react";
import {
  Mail,
  Lock,
  User,
  ShieldCheck,
  ArrowRight,
  RefreshCw,
  X,
  AlertCircle,
  CheckCircle2,
  KeyRound,
  Sparkles,
} from "lucide-react";
import { UserProfile } from "../types";
import {
  getRegisteredUsers,
  saveRegisteredUsers,
  setCurrentUser,
  sendRegistrationOtp,
  sendResetPasswordOtp,
  verifyOtp,
  StoredUser,
} from "../services/authService";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: (user: UserProfile) => void;
  onSuccess?: (user: UserProfile) => void;
  initialMode?: "login" | "register";
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  onSuccess,
  initialMode = "login",
}) => {
  const [mode, setMode] = useState<"login" | "register" | "otp" | "forgot" | "reset_otp">(initialMode);
  
  // Form fields
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [targetPost, setTargetPost] = useState("Gram Panchayat Karmee & Sahayak");
  
  // OTP state
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpTimer, setOtpTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [devOtpNotice, setDevOtpNotice] = useState<string | null>(null);

  // Status feedback
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSuccess = (profile: UserProfile) => {
    if (onSuccess) onSuccess(profile);
    if (onLoginSuccess) onLoginSuccess(profile);
  };

  useEffect(() => {
    setMode(initialMode);
    setError(null);
    setSuccessMsg(null);
    setDevOtpNotice(null);
  }, [initialMode, isOpen]);

  // Countdown timer for OTP
  useEffect(() => {
    let interval: any = null;
    if ((mode === "otp" || mode === "reset_otp") && otpTimer > 0) {
      interval = setInterval(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
    } else if (otpTimer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [mode, otpTimer]);

  if (!isOpen) return null;

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      const pasted = value.replace(/\D/g, "").slice(0, 6);
      if (pasted) {
        const newOtp = [...otp];
        for (let i = 0; i < pasted.length; i++) {
          newOtp[i] = pasted[i];
        }
        setOtp(newOtp);
        const nextInput = document.getElementById(`modal-otp-input-${Math.min(5, pasted.length)}`);
        nextInput?.focus();
      }
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value.replace(/\D/g, "");
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`modal-otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`modal-otp-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  // 1. Handle Registration (Step 1 -> Sends OTP to Gmail)
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    if (!name.trim()) return setError("আপনার সম্পূর্ণ নাম লিখুন।");
    if (!email.trim() || !email.includes("@")) return setError("বৈধ ইমেইল ঠিকানা দিন।");
    if (password.length < 6) return setError("পাসওয়ার্ড অন্তত ৬ অক্ষরের হতে হবে।");
    if (password !== confirmPassword) return setError("পাসওয়ার্ড দুটি মিলছে না।");

    const users = getRegisteredUsers();
    const existing = users.find((u) => u.email.toLowerCase() === email.toLowerCase().trim());
    if (existing && existing.isVerified) {
      return setError("এই ইমেইল দিয়ে ইতিমধ্যে একটি অ্যাকাউন্ট রয়েছে। লগইন করুন।");
    }

    setLoading(true);
    try {
      const res = await sendRegistrationOtp(email.trim(), name.trim());
      if (res.success) {
        setSuccessMsg(res.message);
        if (res.devOtp) {
          setDevOtpNotice(`[টেস্টিং ওটিপি]: ${res.devOtp}`);
        }
        setMode("otp");
        setOtpTimer(60);
        setCanResend(false);
      } else {
        setError(res.message);
      }
    } catch (err: any) {
      setError("ওটিপি পাঠাতে সমস্যা হয়েছে। পুনরায় চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  // 2. Handle OTP Verification (Step 2 -> Activates Account)
  const handleVerifyOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const fullOtp = otp.join("");
    if (fullOtp.length !== 6) {
      return setError("সম্পূর্ণ ৬-সংখ্যার ওটিপি লিখুন।");
    }

    setLoading(true);
    try {
      const res = await verifyOtp(email.trim(), fullOtp);
      if (res.success) {
        const users = getRegisteredUsers().filter((u) => u.email.toLowerCase() !== email.toLowerCase().trim());
        const newUser: StoredUser = {
          email: email.toLowerCase().trim(),
          name: name.trim() || "পরীক্ষার্থী",
          targetPost,
          passwordHash: btoa(password),
          isVerified: true,
          createdAt: new Date().toISOString(),
        };
        users.push(newUser);
        saveRegisteredUsers(users);

        const profile: UserProfile = {
          email: newUser.email,
          name: newUser.name,
          targetPost: newUser.targetPost,
          joinedDate: newUser.createdAt,
          isVerified: true,
        };
        setCurrentUser(profile);
        handleSuccess(profile);
        onClose();
      } else {
        setError(res.message || "ভুল ওটিপি কোড!");
      }
    } catch (err: any) {
      setError("ওটিপি যাচাই করা যায়নি।");
    } finally {
      setLoading(false);
    }
  };

  // 3. Handle Regular Login
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim()) return setError("আপনার ইমেইল দিন।");
    if (!password) return setError("পাসওয়ার্ড দিন।");

    const users = getRegisteredUsers();
    const cleanEmail = email.toLowerCase().trim();
    const user = users.find((u) => u.email.toLowerCase() === cleanEmail);

    if (!user) {
      return setError("এই ইমেইলে কোনো অ্যাকাউন্ট পাওয়া যায়নি। অনুগ্রহ করে রেজিস্ট্রেশন করুন।");
    }

    if (!user.isVerified) {
      return setError("আপনার অ্যাকাউন্টটি এখনো যাচাই করা হয়নি। অনুগ্রহ করে পুনরায় রেজিস্টার করে ওটিপি যাচাই করুন।");
    }

    if (user.passwordHash !== btoa(password)) {
      return setError("ভুল পাসওয়ার্ড! সঠিক পাসওয়ার্ড দিন অথবা পাসওয়ার্ড রিসেট করুন।");
    }

    const profile: UserProfile = {
      email: user.email,
      name: user.name,
      targetPost: user.targetPost || "Gram Panchayat Karmee & Sahayak",
      joinedDate: user.createdAt,
      isVerified: true,
    };
    setCurrentUser(profile);
    handleSuccess(profile);
    onClose();
  };

  // 4. Quick Demo Login for instant test
  const handleDemoLogin = () => {
    const demoProfile: UserProfile = {
      email: "targetpanchayat@gmail.com",
      name: "রাহুল ব্যানার্জি",
      targetPost: "Gram Panchayat Karmee & Sahayak",
      joinedDate: new Date().toISOString(),
      isVerified: true,
    };
    setCurrentUser(demoProfile);
    handleSuccess(demoProfile);
    onClose();
  };

  // 5. Handle Forgot Password Request (Sends Reset OTP)
  const handleForgotPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email.trim() || !email.includes("@")) {
      return setError("আপনার নিবন্ধিত ইমেইল ঠিকানা দিন।");
    }

    setLoading(true);
    try {
      const res = await sendResetPasswordOtp(email.trim());
      if (res.success) {
        setSuccessMsg(res.message);
        if (res.devOtp) {
          setDevOtpNotice(`[রিসেট ওটিপি]: ${res.devOtp}`);
        }
        setMode("reset_otp");
        setOtpTimer(60);
        setCanResend(false);
      } else {
        setError(res.message);
      }
    } catch (err: any) {
      setError("পাসওয়ার্ড রিসেট ওটিপি পাঠানো যায়নি।");
    } finally {
      setLoading(false);
    }
  };

  // 6. Handle Reset OTP & Set New Password
  const handleResetPasswordConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const fullOtp = otp.join("");
    if (fullOtp.length !== 6) return setError("সম্পূর্ণ ৬-সংখ্যার ওটিপি লিখুন।");
    if (password.length < 6) return setError("নতুন পাসওয়ার্ড অন্তত ৬ অক্ষরের হতে হবে।");

    setLoading(true);
    try {
      const res = await verifyOtp(email.trim(), fullOtp);
      if (res.success) {
        const users = getRegisteredUsers();
        const userIndex = users.findIndex((u) => u.email.toLowerCase() === email.toLowerCase().trim());
        if (userIndex !== -1) {
          users[userIndex].passwordHash = btoa(password);
          users[userIndex].isVerified = true;
          saveRegisteredUsers(users);

          const profile: UserProfile = {
            email: users[userIndex].email,
            name: users[userIndex].name,
            targetPost: users[userIndex].targetPost,
            joinedDate: users[userIndex].createdAt,
            isVerified: true,
          };
          setCurrentUser(profile);
          handleSuccess(profile);
          onClose();
        } else {
          setError("ব্যবহারকারী খুঁজে পাওয়া যায়নি।");
        }
      } else {
        setError(res.message || "ভুল ওটিপি কোড!");
      }
    } catch (err: any) {
      setError("পাসওয়ার্ড রিসেট ব্যর্থ হয়েছে।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors z-10 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="p-6 pb-4 border-b border-slate-100 bg-gradient-to-br from-slate-50 to-emerald-50/30">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 font-bengali">
                {mode === "login" && "লগইন করুন"}
                {mode === "register" && "নতুন অ্যাকাউন্ট তৈরি"}
                {mode === "otp" && "Gmail ওটিপি যাচাই"}
                {mode === "forgot" && "পাসওয়ার্ড রিসেট"}
                {mode === "reset_otp" && "নতুন পাসওয়ার্ড নির্ধারণ"}
              </h2>
              <p className="text-xs text-slate-500 font-bengali">
                পশ্চিমবঙ্গ গ্রাম পঞ্চায়েত পরীক্ষা প্রস্তুতি
              </p>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          {(mode === "login" || mode === "register") && (
            <div className="flex bg-slate-100 p-1 rounded-xl mt-4 border border-slate-200">
              <button
                type="button"
                onClick={() => { setMode("login"); setError(null); }}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all font-bengali cursor-pointer ${
                  mode === "login"
                    ? "bg-white text-emerald-800 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                লগইন (Login)
              </button>
              <button
                type="button"
                onClick={() => { setMode("register"); setError(null); }}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all font-bengali cursor-pointer ${
                  mode === "register"
                    ? "bg-white text-emerald-800 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                রেজিস্ট্রেশন (Gmail OTP)
              </button>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Alerts */}
          {error && (
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bengali">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {successMsg && (
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bengali">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{successMsg}</span>
            </div>
          )}

          {devOtpNotice && (
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono-num">
              {devOtpNotice}
            </div>
          )}

          {/* 1. LOGIN FORM */}
          {mode === "login" && (
            <form onSubmit={handleLoginSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 font-bengali">
                  ইমেইল ঠিকানা (Gmail ID)
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@gmail.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-700 font-bengali">পাসওয়ার্ড</label>
                  <button
                    type="button"
                    onClick={() => { setMode("forgot"); setError(null); }}
                    className="text-[11px] text-emerald-700 hover:underline font-bengali cursor-pointer font-semibold"
                  >
                    পাসওয়ার্ড ভুলে গেছেন?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition-all font-bengali flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>লগইন করুন</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleDemoLogin}
                className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors font-bengali flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>এক ক্লিকে ডেমো প্রবেশ</span>
              </button>
            </form>
          )}

          {/* 2. REGISTRATION FORM */}
          {mode === "register" && (
            <form onSubmit={handleRegisterSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 font-bengali">পূর্ণ নাম</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="আপনার নাম"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-sm text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 font-bengali">Gmail ঠিকানা (OTP যাবে)</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@gmail.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-sm text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 font-bengali">টার্গেট পদ</label>
                <select
                  value={targetPost}
                  onChange={(e) => setTargetPost(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 font-bengali cursor-pointer"
                >
                  <option value="Gram Panchayat Karmee & Sahayak">গ্রাম পঞ্চায়েত কর্মী ও সহায়ক</option>
                  <option value="Nirman Sahayak">নির্মাণ সহায়ক</option>
                  <option value="Executive Assistant">এক্সিকিউটিভ অ্যাসিস্ট্যান্ট</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-bengali">পাসওয়ার্ড</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="কমপক্ষে ৬ অক্ষর"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-sm text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-bengali">নিশ্চিত করুন</label>
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="পুনরায় লিখুন"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-sm text-slate-900"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition-all font-bengali flex items-center justify-center gap-2 cursor-pointer mt-1"
              >
                {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <span>Gmail-এ OTP পাঠান</span>}
              </button>
            </form>
          )}

          {/* 3. OTP VERIFICATION */}
          {mode === "otp" && (
            <form onSubmit={handleVerifyOtpSubmit} className="space-y-4 text-center">
              <p className="text-xs text-slate-600 font-bengali">
                <span className="font-bold text-emerald-800">{email}</span> ঠিকানায় পাঠানো ৬-সংখ্যার ওটিপি দিন:
              </p>
              <div className="flex justify-center gap-2">
                {otp.map((d, i) => (
                  <input
                    key={i}
                    id={`modal-otp-input-${i}`}
                    type="text"
                    maxLength={1}
                    value={d}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(i, e)}
                    className="w-10 h-12 text-center text-lg font-bold font-mono-num bg-slate-50 border border-slate-300 rounded-xl text-slate-900"
                  />
                ))}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl font-bengali cursor-pointer"
              >
                {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : "ওটিপি যাচাই করে প্রবেশ করুন"}
              </button>
            </form>
          )}

          {/* 4. FORGOT PASSWORD */}
          {mode === "forgot" && (
            <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 font-bengali">রেজিস্টার্ড ইমেইল</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="yourname@gmail.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl font-bengali cursor-pointer"
              >
                {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : "রিসেট কোড পাঠান"}
              </button>
            </form>
          )}

          {/* 5. RESET OTP CONFIRM */}
          {mode === "reset_otp" && (
            <form onSubmit={handleResetPasswordConfirm} className="space-y-4">
              <div className="flex justify-center gap-2">
                {otp.map((d, i) => (
                  <input
                    key={i}
                    id={`modal-otp-input-${i}`}
                    type="text"
                    maxLength={1}
                    value={d}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(i, e)}
                    className="w-10 h-12 text-center text-lg font-bold font-mono-num bg-slate-50 border border-slate-300 rounded-xl text-slate-900"
                  />
                ))}
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="নতুন পাসওয়ার্ড"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-sm text-slate-900"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl font-bengali cursor-pointer"
              >
                {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : "পাসওয়ার্ড পরিবর্তন করুন"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
