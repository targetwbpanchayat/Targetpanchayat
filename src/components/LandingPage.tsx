import React, { useState, useEffect } from "react";
import {
  Mail,
  Lock,
  User,
  ShieldCheck,
  ArrowRight,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  KeyRound,
  Sparkles,
  BookOpen,
  Award,
  CalendarCheck,
  CheckSquare,
  Zap,
  FileText,
  HelpCircle,
  Flame,
  ChevronRight,
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
import { SUBJECTS } from "../data/subjects";
import { QUESTION_SETS } from "../data/questionSets";

interface LandingPageProps {
  onOpenAuth?: (mode?: "login" | "register") => void;
  onLoginSuccess: (user: UserProfile) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onOpenAuth, onLoginSuccess }) => {
  const [authTab, setAuthTab] = useState<"login" | "register" | "forgot">("login");
  const [step, setStep] = useState<"form" | "otp" | "reset_otp">("form");

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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

  // Countdown timer for OTP
  useEffect(() => {
    let interval: any = null;
    if ((step === "otp" || step === "reset_otp") && otpTimer > 0) {
      interval = setInterval(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
    } else if (otpTimer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [step, otpTimer]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      const pasted = value.replace(/\D/g, "").slice(0, 6);
      if (pasted) {
        const newOtp = [...otp];
        for (let i = 0; i < pasted.length; i++) {
          newOtp[i] = pasted[i];
        }
        setOtp(newOtp);
        const nextInput = document.getElementById(`landing-otp-input-${Math.min(5, pasted.length)}`);
        nextInput?.focus();
      }
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value.replace(/\D/g, "");
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`landing-otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`landing-otp-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  // 1. Handle Registration (Send OTP to Gmail)
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    if (!name.trim()) return setError("আপনার সম্পূর্ণ নাম লিখুন।");
    if (!email.trim() || !email.includes("@")) return setError("সঠিক ইমেইল ঠিকানা দিন (যেমন: yourname@gmail.com)।");
    if (password.length < 6) return setError("পাসওয়ার্ড অন্তত ৬ অক্ষরের হতে হবে।");
    if (password !== confirmPassword) return setError("পাসওয়ার্ড দুটি মিলছে না।");

    const users = getRegisteredUsers();
    const existing = users.find((u) => u.email.toLowerCase() === email.toLowerCase().trim());
    if (existing && existing.isVerified) {
      return setError("এই ইমেইল দিয়ে ইতিমধ্যে একটি অ্যাকাউন্ট রয়েছে। লগইন ট্যাব বেছে নিন।");
    }

    setLoading(true);
    try {
      const res = await sendRegistrationOtp(email.trim(), name.trim());
      if (res.success) {
        setSuccessMsg(res.message);
        if (res.devOtp) {
          setDevOtpNotice(`[টেস্টিং ওটিপি]: ${res.devOtp}`);
        }
        setStep("otp");
        setOtpTimer(60);
        setCanResend(false);
      } else {
        setError(res.message);
      }
    } catch (err: any) {
      setError("ওটিপি পাঠাতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  // 2. Verify Registration OTP
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
        onLoginSuccess(profile);
      } else {
        setError(res.message || "ভুল ওটিপি কোড!");
      }
    } catch (err: any) {
      setError("ওটিপি যাচাই করা যায়নি।");
    } finally {
      setLoading(false);
    }
  };

  // 3. Regular Login
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
      return setError("আপনার অ্যাকাউন্টটি এখনো যাচাই করা হয়নি। রেজিস্ট্রেশন ট্যাবে গিয়ে ওটিপি যাচাই করুন।");
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
    onLoginSuccess(profile);
  };

  // 4. Quick Demo Login for instant test
  const handleDemoLogin = () => {
    const demoProfile: UserProfile = {
      email: "targetpanchayat@gmail.com",
      name: "রাহুল ব্যানার্জি (Demo)",
      targetPost: "Gram Panchayat Karmee & Sahayak",
      joinedDate: new Date().toISOString(),
      isVerified: true,
    };
    setCurrentUser(demoProfile);
    onLoginSuccess(demoProfile);
  };

  // 5. Send Reset Password OTP
  const handleForgotSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    if (!email.trim() || !email.includes("@")) return setError("সঠিক ইমেইল ঠিকানা দিন।");

    const users = getRegisteredUsers();
    const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase().trim());
    if (!user) {
      return setError("এই ইমেইলে কোনো রেজিস্টার্ড অ্যাকাউন্ট নেই।");
    }

    setLoading(true);
    try {
      const res = await sendResetPasswordOtp(email.trim());
      if (res.success) {
        setSuccessMsg(res.message);
        if (res.devOtp) {
          setDevOtpNotice(`[টেস্টিং ওটিপি]: ${res.devOtp}`);
        }
        setStep("reset_otp");
        setOtpTimer(60);
        setCanResend(false);
      } else {
        setError(res.message);
      }
    } catch (err: any) {
      setError("রিসেট ওটিপি পাঠাতে সমস্যা হয়েছে।");
    } finally {
      setLoading(false);
    }
  };

  // 6. Verify Reset OTP & Set New Password
  const handleResetOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const fullOtp = otp.join("");
    if (fullOtp.length !== 6) return setError("সম্পূর্ণ ৬-সংখ্যার ওটিপি লিখুন।");
    if (password.length < 6) return setError("নতুন পাসওয়ার্ড অন্তত ৬ অক্ষরের হতে হবে।");
    if (password !== confirmPassword) return setError("পাসওয়ার্ড দুটি মিলছে না।");

    setLoading(true);
    try {
      const res = await verifyOtp(email.trim(), fullOtp);
      if (res.success) {
        const users = getRegisteredUsers();
        const userIdx = users.findIndex((u) => u.email.toLowerCase() === email.toLowerCase().trim());
        if (userIdx !== -1) {
          users[userIdx].passwordHash = btoa(password);
          saveRegisteredUsers(users);

          const profile: UserProfile = {
            email: users[userIdx].email,
            name: users[userIdx].name,
            targetPost: users[userIdx].targetPost,
            joinedDate: users[userIdx].createdAt,
            isVerified: true,
          };
          setCurrentUser(profile);
          onLoginSuccess(profile);
        }
      } else {
        setError(res.message || "ভুল ওটিপি কোড!");
      }
    } catch (err: any) {
      setError("পাসওয়ার্ড রিসেট করা যায়নি।");
    } finally {
      setLoading(false);
    }
  };

  const examPosts = [
    { nameBn: "গ্রাম পঞ্চায়েত কর্মী (GP Karmee)", minEdu: "৮ম শ্রেণি পাস", marks: "৪৫ নম্বর", duration: "৬০ মিনিট" },
    { nameBn: "গ্রাম পঞ্চায়েত সহায়ক (GP Sahayak)", minEdu: "মাধ্যমিক পাস", marks: "৮৫ নম্বর", duration: "৯০ মিনিট" },
    { nameBn: "নির্মাণ সহায়ক (Nirman Sahayak)", minEdu: "ডিপ্লোমা ইন সিভিল", marks: "৮৫ নম্বর", duration: "৯০ মিনিট" },
    { nameBn: "এক্সিকিউটিভ অ্যাসিস্ট্যান্ট (EA)", minEdu: "স্নাতক পাস", marks: "৮৫ নম্বর", duration: "৯০ মিনিট" },
  ];

  return (
    <div className="space-y-12 pb-16 animate-in fade-in duration-200">
      {/* Top Banner with Light Styling */}
      <section className="text-center pt-4 pb-2 space-y-4">
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-full text-emerald-800 text-xs font-bold shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>পশ্চিমবঙ্গ গ্রাম পঞ্চায়েত রিক্রুটমেন্ট ২০২৬ প্রস্তুতি</span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-bengali leading-tight tracking-tight max-w-4xl mx-auto">
          প্রথমে অ্যাকাউন্ট তৈরি বা লগইন করুন
          <span className="block text-emerald-700 mt-1">সমস্ত স্টাডি মেটেরিয়াল ও মক টেস্টে প্রবেশ করুন</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-600 font-bengali max-w-2xl mx-auto leading-relaxed">
          আপনার জিমেইলে ওটিপি ভেরিফিকেশনের মাধ্যমে নিরাপদ অ্যাকাউন্ট তৈরি করুন অথবা এক ক্লিকে ডেমো অ্যাকাউন্ট দিয়ে সাথে সাথে প্রবেশ করুন।
        </p>
      </section>

      {/* Main Authentication Card */}
      <div className="max-w-md mx-auto bg-white border border-slate-200 rounded-3xl shadow-xl shadow-slate-200/60 p-6 sm:p-8 space-y-6">
        {/* Tab Toggle */}
        <div className="flex bg-slate-100 p-1 rounded-2xl border border-slate-200">
          <button
            onClick={() => {
              setAuthTab("login");
              setStep("form");
              setError(null);
              setSuccessMsg(null);
            }}
            className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-bengali transition-all cursor-pointer ${
              authTab === "login"
                ? "bg-white text-emerald-800 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            লগইন (Login)
          </button>
          <button
            onClick={() => {
              setAuthTab("register");
              setStep("form");
              setError(null);
              setSuccessMsg(null);
            }}
            className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-bengali transition-all cursor-pointer ${
              authTab === "register"
                ? "bg-white text-emerald-800 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            নতুন রেজিস্ট্রেশন
          </button>
          <button
            onClick={() => {
              setAuthTab("forgot");
              setStep("form");
              setError(null);
              setSuccessMsg(null);
            }}
            className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-bengali transition-all cursor-pointer ${
              authTab === "forgot"
                ? "bg-white text-emerald-800 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            পাসওয়ার্ড রিসেট
          </button>
        </div>

        {/* Feedback Messages */}
        {error && (
          <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-2xl flex items-start gap-2.5 font-bengali">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {successMsg && (
          <div className="p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-2xl flex items-start gap-2.5 font-bengali">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>{successMsg}</span>
          </div>
        )}

        {devOtpNotice && (
          <div className="p-3 bg-amber-50 border border-amber-200 text-amber-900 text-xs rounded-xl font-mono-num">
            {devOtpNotice}
          </div>
        )}

        {/* 1. LOGIN FORM */}
        {authTab === "login" && (
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 font-bengali flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>ইমেইল আইডি (Gmail ID)</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="yourname@gmail.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 font-bengali flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-slate-500" />
                  <span>পাসওয়ার্ড</span>
                </label>
                <button
                  type="button"
                  onClick={() => setAuthTab("forgot")}
                  className="text-[11px] text-emerald-700 hover:underline font-bengali cursor-pointer font-semibold"
                >
                  পাসওয়ার্ড ভুলে গেছেন?
                </button>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md shadow-emerald-600/20 transition-all font-bengali flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>লগইন করে ভিতরে প্রবেশ করুন</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="relative flex py-1 items-center">
              <div className="flex-grow border-t border-slate-200"></div>
              <span className="flex-shrink mx-3 text-slate-400 text-xs font-bengali">অথবা দ্রুত প্রবেশ</span>
              <div className="flex-grow border-t border-slate-200"></div>
            </div>

            <button
              type="button"
              onClick={handleDemoLogin}
              className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-semibold text-xs rounded-xl transition-colors font-bengali flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>এক ক্লিকে ডেমো অ্যাকাউন্ট দিয়ে প্রবেশ করুন</span>
            </button>
          </form>
        )}

        {/* 2. REGISTRATION FORM */}
        {authTab === "register" && step === "form" && (
          <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 font-bengali flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-500" />
                <span>আপনার সম্পূর্ণ নাম</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="যেমন: রাহুল সরকার"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 font-bengali flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>Gmail ঠিকানা (ওটিপি পাঠানো হবে)</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="yourname@gmail.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 font-bengali">টার্গেট পদ নির্বাচন করুন</label>
              <select
                value={targetPost}
                onChange={(e) => setTargetPost(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-emerald-600 font-bengali cursor-pointer"
              >
                <option value="Gram Panchayat Karmee & Sahayak">গ্রাম পঞ্চায়েত কর্মী ও সহায়ক</option>
                <option value="Nirman Sahayak">নির্মাণ সহায়ক (Nirman Sahayak)</option>
                <option value="Executive Assistant">এক্সিকিউটিভ অ্যাসিস্ট্যান্ট</option>
                <option value="Panchayat Samiti Level">পঞ্চায়েত সমিতি / অন্যান্য পদ</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 font-bengali">পাসওয়ার্ড</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="কমপক্ষে ৬ অক্ষর"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 font-bengali">পাসওয়ার্ড নিশ্চিত করুন</label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="পুনরায় লিখুন"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md shadow-emerald-600/20 transition-all font-bengali flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Gmail-এ OTP কোড পাঠান</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* 2.1 REGISTRATION OTP STEP */}
        {authTab === "register" && step === "otp" && (
          <form onSubmit={handleVerifyOtpSubmit} className="space-y-4">
            <div className="text-center space-y-1">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base font-bengali">Gmail ওটিপি যাচাইকরণ</h3>
              <p className="text-xs text-slate-600 font-bengali">
                আমরা <span className="font-bold text-emerald-800">{email}</span> ঠিকানায় ৬-সংখ্যার কোড পাঠিয়েছি।
              </p>
            </div>

            {/* 6 OTP Inputs */}
            <div className="flex justify-center gap-2">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  id={`landing-otp-input-${idx}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                  className="w-10 h-12 sm:w-12 sm:h-14 text-center text-lg sm:text-xl font-bold font-mono-num bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-emerald-600 focus:bg-white text-slate-900 transition-all shadow-xs"
                />
              ))}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md shadow-emerald-600/20 transition-all font-bengali flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>যাচাই করে স্টাডি পোর্টালে প্রবেশ করুন</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-between text-xs text-slate-500 font-bengali pt-1">
              <button
                type="button"
                onClick={() => setStep("form")}
                className="text-slate-600 hover:underline cursor-pointer font-medium"
              >
                ইমেইল পরিবর্তন করুন
              </button>
              {canResend ? (
                <button
                  type="button"
                  onClick={handleRegisterSubmit}
                  className="text-emerald-700 font-bold hover:underline cursor-pointer"
                >
                  পুনরায় OTP পাঠান
                </button>
              ) : (
                <span className="font-mono-num text-slate-400">পুনরায় পাঠাতে বাকি: {otpTimer}s</span>
              )}
            </div>
          </form>
        )}

        {/* 3. FORGOT PASSWORD FORM */}
        {authTab === "forgot" && step === "form" && (
          <form onSubmit={handleForgotSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 font-bengali flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>আপনার রেজিস্টার্ড Gmail</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="yourname@gmail.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md shadow-emerald-600/20 transition-all font-bengali flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <KeyRound className="w-4 h-4" />
                  <span>পাসওয়ার্ড রিসেট OTP পাঠান</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* 3.1 RESET PASSWORD OTP & NEW PASSWORD */}
        {authTab === "forgot" && step === "reset_otp" && (
          <form onSubmit={handleResetOtpSubmit} className="space-y-4">
            <div className="text-center space-y-1">
              <h3 className="font-bold text-slate-900 text-sm font-bengali">রিসেট কোড ও নতুন পাসওয়ার্ড</h3>
              <p className="text-xs text-slate-600 font-bengali">{email} এ পাঠানো কোড লিখুন</p>
            </div>

            {/* 6 OTP Inputs */}
            <div className="flex justify-center gap-2">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  id={`landing-otp-input-${idx}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                  className="w-10 h-12 text-center text-lg font-bold font-mono-num bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-emerald-600 text-slate-900"
                />
              ))}
            </div>

            <div className="space-y-2">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="নতুন পাসওয়ার্ড (কমপক্ষে ৬ অক্ষর)"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-sm text-slate-900"
              />
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="নতুন পাসওয়ার্ড নিশ্চিত করুন"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-sm text-slate-900"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition-all font-bengali flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <span>পাসওয়ার্ড পরিবর্তন ও লগইন করুন</span>
              )}
            </button>
          </form>
        )}
      </div>

      {/* Feature Modules Showcase with Light Styling */}
      <section className="space-y-6 max-w-5xl mx-auto px-4">
        <div className="text-center space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-bengali">
            লগইন করার পর যা যা পড়তে ও অনুশীলন করতে পারবেন
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-bengali">
            পশ্চিমবঙ্গ পঞ্চায়েত রিক্রুটমেন্ট পরীক্ষার সিলেবাসভিত্তিক সকল বিষয়
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 shadow-xs hover:border-emerald-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 font-bengali text-base">অধ্যায়ভিত্তিক স্টাডি মেটেরিয়াল</h3>
            <p className="text-xs text-slate-600 font-bengali leading-relaxed">
              পঞ্চায়েত আইন ১৯৭৩, বাংলা ব্যাকরণ, ইংরেজি ও পাটিগণিতের সম্পূর্ণ তথ্যবহুল নোটস।
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 shadow-xs hover:border-teal-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 font-bengali text-base">পূর্ণাঙ্গ টাইমড মক টেস্ট</h3>
            <p className="text-xs text-slate-600 font-bengali leading-relaxed">
              ০.২৫ নেগেটিভ মার্কিং সহ রিয়েল এক্সাম সিমুলেশন, প্রশ্ন প্যালেট, তাৎক্ষণিক স্কোর ও সমাধান।
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 shadow-xs hover:border-amber-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <CalendarCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 font-bengali text-base">স্মার্ট পড়ার প্ল্যান (Study Plan)</h3>
            <p className="text-xs text-slate-600 font-bengali leading-relaxed">
              আপনার পরীক্ষার তারিখ নির্বাচন করুন, সিস্টেম স্বয়ংক্রিয়ভাবে সিলেবাস ভাগ করে দেবে।
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 shadow-xs hover:border-sky-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold">
              <CheckSquare className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 font-bengali text-base">অধ্যায়ভিত্তিক MCQ প্র্যাকটিস</h3>
            <p className="text-xs text-slate-600 font-bengali leading-relaxed">
              প্রতিটি বিষয়ের প্রশ্ন সেট, সঠিক/ভুল চিহ্নিতকরণ, নির্ভুল ব্যাখ্যা এবং বুকমার্ক।
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 shadow-xs hover:border-indigo-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 font-bengali text-base">বিগত বছরের প্রশ্ন (PYQ)</h3>
            <p className="text-xs text-slate-600 font-bengali leading-relaxed">
              ২০১৬, ২০১৮ ও ২০১৯ সালের গ্রাম পঞ্চায়েত কর্মী ও সহায়ক পরীক্ষার আসল প্রশ্ন ও সমাধান।
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 shadow-xs hover:border-emerald-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 font-bengali text-base">Gmail OTP যাচাইকরণ</h3>
            <p className="text-xs text-slate-600 font-bengali leading-relaxed">
              রেজিস্ট্রেশন ও লগইনে জিমেইল ওটিপি যাচাইকরণ — যাতে আপনার প্রগতি সর্বদা সুরক্ষিত থাকে।
            </p>
          </div>
        </div>
      </section>

      {/* Target Posts Table with Light Styling */}
      <section className="max-w-5xl mx-auto px-4 space-y-4">
        <h2 className="text-xl font-bold text-slate-900 font-bengali text-center">
          পশ্চিমবঙ্গ পঞ্চায়েত পদ ও পরীক্ষার ধাঁচ
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm font-bengali">
            <thead className="bg-slate-50 text-slate-700 text-xs border-b border-slate-200">
              <tr>
                <th className="p-3.5">পদের নাম</th>
                <th className="p-3.5">ন্যূনতম যোগ্যতা</th>
                <th className="p-3.5">মোট নম্বর</th>
                <th className="p-3.5">সময়সীমা</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              {examPosts.map((post, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70">
                  <td className="p-3.5 font-bold text-slate-900">{post.nameBn}</td>
                  <td className="p-3.5">{post.minEdu}</td>
                  <td className="p-3.5 font-mono-num text-emerald-700 font-bold">{post.marks}</td>
                  <td className="p-3.5 font-mono-num">{post.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
