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
  Briefcase,
  Eye,
  EyeOff,
} from "lucide-react";
import { UserProfile } from "../types";
import {
  registerUser,
  loginUser,
  sendRegistrationOtp,
  sendResetPasswordOtp,
  verifyOtp,
  setCurrentUser,
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
  const [showPassword, setShowPassword] = useState(false);

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

  // 1. Handle Registration — Firebase Auth
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    if (!name.trim()) return setError("আপনার সম্পূর্ণ নাম লিখুন।");
    if (!email.trim() || !email.includes("@")) return setError("বৈধ ইমেইল ঠিকানা দিন।");
    if (password.length < 6) return setError("পাসওয়ার্ড অন্তত ৬ অক্ষরের হতে হবে।");
    if (password !== confirmPassword) return setError("পাসওয়ার্ড দুটি মিলছে না।");

    setLoading(true);
    try {
      // Firebase: create account + send verification email
      const res = await registerUser(email.trim(), password, name.trim(), targetPost);
      if (res.success) {
        setSuccessMsg(res.message);
        // Move to OTP verification screen — user needs to click email link
        setMode("otp");
        setOtpTimer(60);
        setCanResend(false);
      } else {
        setError(res.message);
      }
    } catch {
      setError("রেজিস্ট্রেশনে সমস্যা হয়েছে। অনুগ্রহ করে পুনরায় চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  // 2. Handle OTP Verification — check if email is verified
  const handleVerifyOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const fullOtp = otp.join("");
    if (fullOtp.length !== 6) return setError("সম্পূর্ণ ৬-সংখ্যার ওটিপি লিখুন।");

    setLoading(true);
    try {
      const res = await verifyOtp(email.trim(), fullOtp);
      if (res.success) {
        // Email verified! Create user profile
        const profile: UserProfile = {
          email: email.toLowerCase().trim(),
          name: name.trim() || "পরীক্ষার্থী",
          targetPost,
          joinedDate: new Date().toISOString(),
          isVerified: true,
          isDemo: false,
        };
        setCurrentUser(profile);
        handleSuccess(profile);
        onClose();
      } else {
        setError(res.message || "ইমেইল ভেরিফিকেশন সম্পূর্ণ হয়নি।");
      }
    } catch {
      setError("ওটিপি যাচাই করা যায়নি।");
    } finally {
      setLoading(false);
    }
  };

  // 3. Handle Regular Login — Firebase Auth
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim()) return setError("আপনার ইমেইল দিন।");
    if (!password) return setError("পাসওয়ার্ড দিন।");

    setLoading(true);
    try {
      const res = await loginUser(email.trim(), password);
      if (res.success && res.user) {
        const profile: UserProfile = {
          email: res.user.email || email.toLowerCase().trim(),
          name: res.user.displayName || "পরীক্ষার্থী",
          targetPost,
          joinedDate: new Date().toISOString(),
          isVerified: res.user.emailVerified,
          isDemo: false,
        };
        setCurrentUser(profile);
        handleSuccess(profile);
        onClose();
      } else {
        setError(res.message || "লগইন ব্যর্থ।");
      }
    } catch {
      setError("লগইনে সমস্যা হয়েছে।");
    } finally {
      setLoading(false);
    }
  };

  // 4. Quick Demo Login
  const handleDemoLogin = () => {
    const demoProfile: UserProfile = {
      email: "demo@targetpanchayat.wb",
      name: "অতিথি পরীক্ষার্থী (Demo User)",
      targetPost: "Gram Panchayat Karmee & Sahayak",
      joinedDate: new Date().toISOString(),
      isVerified: true,
      isDemo: true,
    };
    setCurrentUser(demoProfile);
    handleSuccess(demoProfile);
    onClose();
  };

  // 5. Handle Forgot Password Request — Firebase password reset
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
        if (res.devOtp) setDevOtpNotice(`[রিসেট ওটিপি]: ${res.devOtp}`);
        setMode("reset_otp");
        setOtpTimer(60);
        setCanResend(false);
      } else {
        setError(res.message);
      }
    } catch {
      setError("পাসওয়ার্ড রিসেট লিংক পাঠানো যায়নি।");
    } finally {
      setLoading(false);
    }
  };

  // 6. Handle Reset OTP Confirm
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
        setSuccessMsg("পাসওয়ার্ড রিসেট সফল! এখন লগইন করুন।");
        setMode("login");
      } else {
        setError(res.message || "ভুল ওটিপি কোড!");
      }
    } catch {
      setError("পাসওয়ার্ড রিসেট ব্যর্থ হয়েছে।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors z-10 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="p-6 pb-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                {mode === "register" && "নতুন অ্যাকাউন্ট তৈরি"}
                {mode === "login" && "লগইন করুন"}
                {mode === "otp" && "ইমেইল যাচাই"}
                {mode === "forgot" && "পাসওয়ার্ড রিসেট"}
                {mode === "reset_otp" && "রিসেট কোড দিন"}
              </h2>
              <p className="text-xs text-slate-500">
                {mode === "register" && "আপনার প্রস্তুতি যাত্রা শুরু করুন"}
                {mode === "login" && "আপনার অ্যাকাউন্টে প্রবেশ করুন"}
                {mode === "otp" && "ইমেইলে পাঠানো লিংক/কোড যাচাই করুন"}
                {mode === "forgot" && "পাসওয়ার্ড ভুলে গেছেন?"}
                {mode === "reset_otp" && "রিসেট কোড দিন"}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 pt-4 max-h-[70vh] overflow-y-auto">
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2 text-red-700 text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}
          {successMsg && (
            <div className="mb-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200 flex items-start gap-2 text-emerald-700 text-sm">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{successMsg}</span>
            </div>
          )}
          {devOtpNotice && (
            <div className="mb-4 p-3 rounded-lg bg-amber-50 border border-amber-200 flex items-start gap-2 text-amber-700 text-xs font-mono">
              <KeyRound className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{devOtpNotice}</span>
            </div>
          )}

          {/* Login Form */}
          {mode === "login" && (
            <form onSubmit={handleLoginSubmit} className="space-y-3.5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">ইমেইল</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="youremail@gmail.com"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none text-sm"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">পাসওয়ার্ড</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none text-sm"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <>লগইন করুন <ArrowRight className="w-4 h-4" /></>}
              </button>
              <button
                type="button"
                onClick={() => { setMode("forgot"); setError(null); setSuccessMsg(null); }}
                className="w-full text-sm text-slate-500 hover:text-emerald-600 transition-colors"
              >
                পাসওয়ার্ড ভুলে গেছেন?
              </button>
              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
                <div className="relative flex justify-center"><span className="bg-white px-3 text-xs text-slate-400">অথবা</span></div>
              </div>
              <button
                type="button"
                onClick={handleDemoLogin}
                className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-500" /> ডেমো হিসেবে দেখুন
              </button>
              <p className="text-center text-sm text-slate-500">
                অ্যাকাউন্ট নেই?{" "}
                <button type="button" onClick={() => { setMode("register"); setError(null); setSuccessMsg(null); }} className="text-emerald-600 font-semibold hover:underline">
                  রেজিস্ট্রেশন করুন
                </button>
              </p>
            </form>
          )}

          {/* Register Form */}
          {mode === "register" && (
            <form onSubmit={handleRegisterSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">সম্পূর্ণ নাম</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="আপনার নাম"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none text-sm"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">ইমেইল</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="youremail@gmail.com"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none text-sm"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">পাসওয়ার্ড</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="ন্যূনতম ৬ অক্ষর"
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none text-sm"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">পাসওয়ার্ড নিশ্চিত করুন</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="পাসওয়ার্ড পুনরায় লিখুন"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none text-sm"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">প্রতিযোগিতার পদ</label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <select
                    value={targetPost}
                    onChange={(e) => setTargetPost(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none text-sm appearance-none bg-white"
                  >
                    <option>Gram Panchayat Karmee & Sahayak</option>
                    <option>Executive Assistant</option>
                    <option>Nirman Sahayak</option>
                    <option>Secretary</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <>রেজিস্ট্রেশন করুন <ArrowRight className="w-4 h-4" /></>}
              </button>
              <p className="text-center text-sm text-slate-500">
                ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
                <button type="button" onClick={() => { setMode("login"); setError(null); setSuccessMsg(null); }} className="text-emerald-600 font-semibold hover:underline">
                  লগইন করুন
                </button>
              </p>
            </form>
          )}

          {/* OTP Verification */}
          {(mode === "otp" || mode === "reset_otp") && (
            <div className="space-y-4">
              <div className="text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                  <Mail className="w-6 h-6" />
                </div>
                <p className="text-sm text-slate-600">
                  আপনার ইমেইল <strong className="text-slate-900">{email}</strong> এ ভেরিফিকেশন লিংক পাঠানো হয়েছে।
                  ইমেইল খুলে লিংকে ক্লিক করুন, তারপর নিচের বাটনে ক্লিক করুন।
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-700 text-center">
                ইমেইল ইনবক্স এবং স্প্যাম ফোল্ডার চেক করুন। লিংকে ক্লিক করার পর "যাচাই করুন" বাটনে ক্লিক করুন।
              </div>

              <form
                onSubmit={mode === "otp" ? handleVerifyOtpSubmit : handleResetPasswordConfirm}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2 text-center">
                    ৬-সংখ্যার ওটিপি (যদি থাকে)
                  </label>
                  <div className="flex gap-1.5 justify-center">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`modal-otp-input-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        className="w-10 h-12 text-center text-lg font-bold rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 text-center mt-2">
                    ইমেইলে লিংক পাঠানো হয়েছে — লিংকে ক্লিক করলেই যাচাই হবে।
                  </p>
                </div>

                {mode === "reset_otp" && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">নতুন পাসওয়ার্ড</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="নতুন পাসওয়ার্ড"
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none text-sm"
                        required
                      />
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <ShieldCheck className="w-4 h-4" />}
                  {mode === "otp" ? "যাচাই করুন" : "পাসওয়ার্ড রিসেট করুন"}
                </button>

                <div className="flex items-center justify-between text-xs">
                  {canResend ? (
                    <button
                      type="button"
                      onClick={async () => {
                        setOtpTimer(60);
                        setCanResend(false);
                        if (mode === "otp") {
                          await sendRegistrationOtp(email.trim(), name.trim());
                        } else {
                          await sendResetPasswordOtp(email.trim());
                        }
                      }}
                      className="text-emerald-600 font-medium hover:underline"
                    >
                      পুনরায় পাঠান
                    </button>
                  ) : (
                    <span className="text-slate-400">পুনরায় পাঠাতে {otpTimer}সে অপেক্ষা করুন</span>
                  )}
                  <button
                    type="button"
                    onClick={() => { setMode("login"); setError(null); setSuccessMsg(null); }}
                    className="text-slate-500 hover:underline"
                  >
                    ফিরে যান
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Forgot Password */}
          {mode === "forgot" && (
            <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
              <div className="text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                  <KeyRound className="w-6 h-6" />
                </div>
                <p className="text-sm text-slate-600">
                  আপনার নিবন্ধিত ইমেইল দিন। আমরা পাসওয়ার্ড রিসেট লিংক পাঠাব।
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">নিবন্ধিত ইমেইল</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="youremail@gmail.com"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none text-sm"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <>রিসেট লিংক পাঠান <ArrowRight className="w-4 h-4" /></>}
              </button>
              <button
                type="button"
                onClick={() => { setMode("login"); setError(null); setSuccessMsg(null); }}
                className="w-full text-sm text-slate-500 hover:text-emerald-600 transition-colors"
              >
                লগইন পেজে ফিরে যান
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
