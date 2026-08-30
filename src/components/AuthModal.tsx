import React, { useState, useEffect } from "react";
import {
  Mail, Lock, User, ShieldCheck, ArrowRight, RefreshCw, X,
  AlertCircle, CheckCircle2, KeyRound, Sparkles, Briefcase,
  Eye, EyeOff,
} from "lucide-react";
import { UserProfile } from "../types";
import {
  setCurrentUser, sendResetPasswordOtp, verifyOtp,
  loginUser, registerWithEmail, updatePassword,
} from "../services/authService";
import { getUserProgressAsync, saveUserProgress, getInitialProgress, updateDailyStreak } from "../utils/storage";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: (user: UserProfile) => void;
  onSuccess?: (user: UserProfile) => void;
  initialMode?: "login" | "register" | "update_password";
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLoginSuccess, onSuccess, initialMode = "login" }) => {
  const [mode, setMode] = useState<"login" | "register" | "forgot" | "otp_verify" | "update_password">(initialMode);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [targetPost, setTargetPost] = useState("Gram Panchayat Karmee & Sahayak");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSuccess = async (profile: UserProfile) => {
    const cloudProgress = await getUserProgressAsync(profile.email);
    const updated = updateDailyStreak(cloudProgress);
    saveUserProgress(updated);
    if (onSuccess) onSuccess(profile);
    if (onLoginSuccess) onLoginSuccess(profile);
  };

  useEffect(() => { setMode(initialMode); setError(null); setSuccessMsg(null); }, [initialMode, isOpen]);

  if (!isOpen) return null;

  // 1. Registration — email + password (no OTP)
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); setSuccessMsg(null);
    if (!name.trim()) return setError("আপনার নাম লিখুন অবশ্যই।");
    if (!email.trim() || !email.includes("@")) return setError("সঠিক ইমেইল ঠিকানা লিখুন।");
    if (password.length < 6) return setError("পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।");
    if (password !== confirmPassword) return setError("পাসওয়ার্ড দুটি মিলছে না।");

    setLoading(true);
    try {
      const res = await registerWithEmail(email.trim(), password, name.trim(), targetPost);
      if (res.success) {
        setSuccessMsg(res.message);
        setTimeout(() => { setMode("login"); setError(null); }, 2000);
      } else {
        setError(res.message);
      }
    } catch {
      setError("কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  // 2. Login
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email.trim()) return setError("ইমেইল ঠিকানা লিখুন।");
    if (!password) return setError("পাসওয়ার্ড লিখুন।");

    setLoading(true);
    try {
      const res = await loginUser(email.trim(), password);
      if (res.success) {
        const profile: UserProfile = {
          email: email.toLowerCase().trim(),
          name: name.trim() || "পরীক্ষার্থী",
          targetPost,
          joinedDate: new Date().toISOString(),
          isVerified: true,
          isDemo: false,
        };
        setCurrentUser(profile);
        await handleSuccess(profile);
        onClose();
      } else {
        setError(res.message || "লগইন ব্যর্থ হয়েছে।");
      }
    } catch {
      setError("নেটওয়ার্ক সমস্যা হয়েছে।");
    } finally {
      setLoading(false);
    }
  };

  // 3. Forgot Password — send reset link
  const handleForgotSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email.trim() || !email.includes("@")) return setError("নিবন্ধিত ইমেইল ঠিকানা লিখুন।");

    setLoading(true);
    try {
      const res = await sendResetPasswordOtp(email.trim());
      if (res.success) {
        setSuccessMsg(res.message);
        if (res.devOtp) {
          setSuccessMsg(`[ডেভ OTP]: ${res.devOtp}`);
        }
        setMode("otp_verify");
      } else {
        setError(res.message);
      }
    } catch {
      setError("OTP পাঠাতে সমস্যা হয়েছে।");
    } finally {
      setLoading(false);
    }
  };

  // 3b. Verify OTP — then go to set new password
  const handleVerifyOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!otp.trim() || otp.trim().length !== 6) return setError("৬-অঙ্কের OTP লিখুন।");

    setLoading(true);
    try {
      const res = await verifyOtp(email.trim(), otp.trim());
      if (res.success) {
        setSuccessMsg(res.message);
        setOtp("");
        setMode("update_password");
      } else {
        setError(res.message || "ভুল OTP।");
      }
    } catch {
      setError("OTP যাচাইয়ে সমস্যা হয়েছে।");
    } finally {
      setLoading(false);
    }
  };

  // 3c. Resend OTP
  const handleResendOtp = async () => {
    setError(null); setSuccessMsg(null);
    setLoading(true);
    try {
      const res = await sendResetPasswordOtp(email.trim());
      if (res.success) {
        setSuccessMsg(res.message);
        if (res.devOtp) setSuccessMsg(`[ডেভ OTP]: ${res.devOtp}`);
      } else {
        setError(res.message);
      }
    } catch {
      setError("OTP পাঠাতে সমস্যা।");
    } finally {
      setLoading(false);
    }
  };

  // 4. Update Password (after clicking reset link from email)
  const handleUpdatePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password.length < 6) return setError("নতুন পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।");
    if (password !== confirmPassword) return setError("পাসওয়ার্ড দুটি মিলছে না।");

    setLoading(true);
    try {
      const res = await updatePassword(password, email.trim());
      if (res.success) {
        setSuccessMsg(res.message);
        setTimeout(() => { setMode("login"); setError(null); setPassword(""); setConfirmPassword(""); }, 2000);
      } else {
        setError(res.message);
      }
    } catch {
      setError("পাসওয়ার্ড আপডেটে সমস্যা হয়েছে।");
    } finally {
      setLoading(false);
    }
  };

  // 5. Demo Login
  const handleDemoLogin = () => {
    const demoProfile: UserProfile = {
      email: "demo@targetpanchayat.wb",
      name: "অতিথি ব্যবহারকারী (Demo User)",
      targetPost: "Gram Panchayat Karmee & Sahayak",
      joinedDate: new Date().toISOString(),
      isVerified: true,
      isDemo: true,
    };
    setCurrentUser(demoProfile);
    if (onSuccess) onSuccess(demoProfile);
    if (onLoginSuccess) onLoginSuccess(demoProfile);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden relative">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors z-10 cursor-pointer">
          <X className="w-4 h-4" />
        </button>
        <div className="p-6 pb-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold"><ShieldCheck className="w-5 h-5" /></div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                {mode === "register" && "নতুন অ্যাকাউন্ট তৈরি করুন"}
                {mode === "login" && "লগইন করুন"}
                {mode === "forgot" && "পাসওয়ার্ড রিসেট"}
                {mode === "otp_verify" && "OTP যাচাই করুন"}
                {mode === "update_password" && "নতুন পাসওয়ার্ড সেট করুন"}
              </h2>
              <p className="text-xs text-slate-500">
                {mode === "register" && "ইমেইল ও পাসওয়ার্ড দিয়ে সহজে রেজিস্টার করুন"}
                {mode === "login" && "আপনার অ্যাকাউন্টে লগইন করুন"}
                {mode === "forgot" && "পাসওয়ার্ড ভুলে গেছেন?"}
                {mode === "otp_verify" && "ইমেইলে পাঠানো ৬-অঙ্কের OTP লিখুন"}
                {mode === "update_password" && "নতুন পাসওয়ার্ড দিন"}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 pt-4 max-h-[70vh] overflow-y-auto">
          {error && (<div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2 text-red-700 text-sm"><AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /><span>{error}</span></div>)}
          {successMsg && (<div className="mb-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200 flex items-start gap-2 text-emerald-700 text-sm"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" /><span>{successMsg}</span></div>)}

          {mode === "login" && (
            <form onSubmit={handleLoginSubmit} className="space-y-3.5">
              <div><label className="block text-sm font-medium text-slate-700 mb-1.5">ইমেইল</label><div className="relative"><Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="youremail@gmail.com" className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none text-sm" required /></div></div>
              <div><label className="block text-sm font-medium text-slate-700 mb-1.5">পাসওয়ার্ড</label><div className="relative"><Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none text-sm" required /><button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">{showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button></div></div>
              <button type="submit" disabled={loading} className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer">{loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <> লগইন করুন <ArrowRight className="w-4 h-4" /></>}</button>
              <button type="button" onClick={() => { setMode("forgot"); setError(null); setSuccessMsg(null); }} className="w-full text-sm text-slate-500 hover:text-emerald-600 transition-colors">পাসওয়ার্ড ভুলে গেছেন?</button>
              <div className="relative py-2"><div className="absolute inset-0 flex items-center justify-center"><div className="w-full border-t border-slate-200"></div></div><div className="relative flex justify-center"><span className="bg-white px-3 text-xs text-slate-400">অথবা</span></div></div>
              <button type="button" onClick={handleDemoLogin} className="w-full py-2.5 rounded-xl border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"><Sparkles className="w-4 h-4 text-amber-500" />  গেস্ট হিসেবে দেখুন</button>
              <p className="text-center text-sm text-slate-500">অ্যাকাউন্ট নেই? <button type="button" onClick={() => { setMode("register"); setError(null); setSuccessMsg(null); }} className="text-emerald-600 font-semibold hover:underline">নতুন অ্যাকাউন্ট তৈরি করুন</button></p>
            </form>
          )}

          {mode === "register" && (
            <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
              <div><label className="block text-sm font-medium text-slate-700 mb-1.5">আপনার নাম</label><div className="relative"><User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="আপনার নাম লিখুন" className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none text-sm" required /></div></div>
              <div><label className="block text-sm font-medium text-slate-700 mb-1.5">ইমেইল</label><div className="relative"><Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="youremail@gmail.com" className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none text-sm" required /></div></div>
              <div><label className="block text-sm font-medium text-slate-700 mb-1.5">পাসওয়ার্ড</label><div className="relative"><Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="কমপক্ষে ৬ অক্ষর" className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none text-sm" required /><button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">{showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button></div></div>
              <div><label className="block text-sm font-medium text-slate-700 mb-1.5">পাসওয়ার্ড নিশ্চিত করুন</label><div className="relative"><Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input type={showPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="পাসওয়ার্ড আবার লিখুন" className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none text-sm" required /></div></div>
              <div><label className="block text-sm font-medium text-slate-700 mb-1.5">টার্গেট পদ</label><div className="relative"><Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><select value={targetPost} onChange={(e) => setTargetPost(e.target.value)} className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none text-sm appearance-none bg-white"><option>Gram Panchayat Karmee & Sahayak</option><option>Executive Assistant</option><option>Nirman Sahayak</option><option>Secretary</option></select></div></div>
              <button type="submit" disabled={loading} className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer">{loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <> রেজিস্টার করুন <ArrowRight className="w-4 h-4" /></>}</button>
              <p className="text-center text-sm text-slate-500">ইতিমধ্যে অ্যাকাউন্ট আছে? <button type="button" onClick={() => { setMode("login"); setError(null); setSuccessMsg(null); }} className="text-emerald-600 font-semibold hover:underline">লগইন করুন</button></p>
            </form>
          )}

          {mode === "forgot" && (
            <form onSubmit={handleForgotSubmit} className="space-y-4">
              <div className="text-center"><div className="w-14 h-14 mx-auto rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3"><KeyRound className="w-7 h-3" /></div><p className="text-sm text-slate-600">আপনার ইমেইল <strong className="text-slate-900">{email}</strong> এ পাসওয়ার্ড রিসেট লিংক পাঠানো হবে। ইনবক্স বা স্প্যাম ফোল্ডার চেক করুন।</p></div>
              <div><label className="block text-sm font-medium text-slate-700 mb-1.5">নিবন্ধিত ইমেইল ঠিকানা</label><div className="relative"><Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="youremail@gmail.com" className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none text-sm" required /></div></div>
              <button type="submit" disabled={loading} className="w-full py-2.5 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer">{loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <>রিসেট লিংক পাঠান <ArrowRight className="w-4 h-4" /></>}</button>
              <button type="button" onClick={() => { setMode("login"); setError(null); setSuccessMsg(null); }} className="w-full text-sm text-slate-500 hover:text-emerald-600">লগইন পেজে ফিরুন</button>
            </form>
          )}

          {mode === "otp_verify" && (
            <form onSubmit={handleVerifyOtpSubmit} className="space-y-4">
              <div className="text-center"><div className="w-14 h-14 mx-auto rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3"><ShieldCheck className="w-7 h-7" /></div><p className="text-sm text-slate-600"><strong className="text-slate-900">{email}</strong> এ পাঠানো ৬-অঙ্কের OTP লিখুন।</p></div>
              <div><label className="block text-sm font-medium text-slate-700 mb-1.5">OTP কোড</label><div className="relative"><KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input type="text" inputMode="numeric" pattern="\d*" maxLength={6} value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))} placeholder="••••••" className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none text-sm tracking-[0.5em] text-center font-bold text-lg" required /></div></div>
              <button type="submit" disabled={loading} className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer">{loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <>OTP যাচাই করুন <ArrowRight className="w-4 h-4" /></>}</button>
              <div className="flex items-center justify-between text-sm">
                <button type="button" onClick={handleResendOtp} disabled={loading} className="text-emerald-600 font-medium hover:underline disabled:opacity-50">আবার OTP পাঠান</button>
                <button type="button" onClick={() => { setMode("login"); setError(null); setSuccessMsg(null); setOtp(""); }} className="text-slate-500 hover:text-slate-700">লগইন পেজে ফিরুন</button>
              </div>
            </form>
          )}

          {mode === "update_password" && (
            <form onSubmit={handleUpdatePasswordSubmit} className="space-y-4">
              <div className="text-center"><div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3"><ShieldCheck className="w-7 h-7" /></div><p className="text-sm text-slate-600">আপনার নতুন পাসওয়ার্ড সেট করুন।</p></div>
              <div><label className="block text-sm font-medium text-slate-700 mb-1.5">নতুন পাসওয়ার্ড</label><div className="relative"><Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="কমপক্ষে ৬ অক্ষর" className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none text-sm" required /><button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">{showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button></div></div>
              <div><label className="block text-sm font-medium text-slate-700 mb-1.5">পাসওয়ার্ড নিশ্চিত করুন</label><div className="relative"><Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input type={showPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="পাসওয়ার্ড আবার লিখুন" className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none text-sm" required /></div></div>
              <button type="submit" disabled={loading} className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer">{loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <><ShieldCheck className="w-4 h-4" /> পাসওয়ার্ড আপডেট করুন</>}</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
