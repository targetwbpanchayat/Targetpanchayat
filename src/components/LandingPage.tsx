import React, { useState, useEffect } from "react";
import {
  Mail,
  Lock,
  User,
  ArrowRight,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  KeyRound,
  Sparkles,
  BookOpen,
  Award,
  CheckSquare,
  Zap,
  FileText,
  Eye,
  EyeOff,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { UserProfile } from "../types";
import {
  getRegisteredUsers,
  saveRegisteredUsers,
  setCurrentUser,
  sendRegistrationOtp,
  sendResetPasswordOtp,
  verifyOtp,
  registerWithEmail,
  loginUser,
  StoredUser,
} from "../services/authService";

interface LandingPageProps {
  onOpenAuth?: (mode?: "login" | "register") => void;
  onLoginSuccess: (user: UserProfile) => void;
}

// 5 Key Important Web Highlights (No volume jargon, high-value portal features)
const PORTAL_HIGHLIGHTS = [
  {
    id: "syllabus",
    tag: "সম্পূর্ণ সিলেবাস",
    tagColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    iconBg: "bg-emerald-500 text-white",
    Icon: BookOpen,
    title: "পঞ্চায়েত সিলেবাস ভিত্তিক অধ্যায়ওয়ারি স্টাডি নোটস",
    desc: "পঞ্চায়েত আইন ও প্রশাসনিক নিয়মাবলী, বাংলা ব্যাকরণ, ইংরেজি ব্যাকরণ, পার্টিগণিত এবং ইতিহাস-ভূগোল-সংবিধান-বিজ্ঞানের গভীর ধারণামূলক আলোচনা।",
    stats: "৫টি মূল বিষয় • পুঙ্খানুপুঙ্খ থিওরি ও চার্ট",
  },
  {
    id: "mock_test",
    tag: "রিয়েল-টাইম পরীক্ষা",
    tagColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
    iconBg: "bg-indigo-500 text-white",
    Icon: Award,
    title: "ফুল-লেংথ মক টেস্ট ও রিয়েল-টাইম OMR অ্যানালাইসিস",
    desc: "অফিশিয়াল ৮৫ নম্বরের পূর্ণাঙ্গ মক টেস্ট, নির্ধারিত ৮৫ মিনিট সময়সীমা, নেগেটিভ মার্কিং এবং পরীক্ষা শেষে তাৎক্ষণিক বিস্তারিত পারফরম্যান্স রিপোর্ট।",
    stats: "৩০টি ফুল সেট • ওএমআর শিট মোড",
  },
  {
    id: "practice_bank",
    tag: "অনুশীলন ব্যাংক",
    tagColor: "bg-amber-100 text-amber-800 border-amber-200",
    iconBg: "bg-amber-500 text-white",
    Icon: CheckSquare,
    title: "৫,০০০+ অধ্যায়ভিত্তিক MCQ ও সংক্ষিপ্ত প্রশ্নোত্তর (SAQ)",
    desc: "প্রতিটি অধ্যায়ের সাথে তাত্ক্ষণিক এমসিকিউ প্র্যাকটিস, ভুল উত্তরের ব্যাখ্যা, বুকমার্কিং এবং আত্মবিশ্বাসের সাথে রিভিশনের জন্য সাজানো প্রশ্নমালা।",
    stats: "তাত্ক্ষণিক সমাধান • গভীর ব্যাখ্যা",
  },
  {
    id: "pyq_archive",
    tag: "PYQ প্রশ্নপত্র",
    tagColor: "bg-blue-100 text-blue-800 border-blue-200",
    iconBg: "bg-blue-500 text-white",
    Icon: FileText,
    title: "বিগত বছরের প্রশ্নপত্র ও সম্ভাব্য মডেল টেস্ট সিরিজ",
    desc: "২০১৮ সালের আসল পঞ্চায়েত প্রশ্নপত্র এবং সাম্প্রতিক পশ্চিমবঙ্গ পরীক্ষার মানদণ্ড অনুযায়ী তৈরি বিশেষজ্ঞ মডেল প্রশ্নপত্র সরাসরি সমাধান করুন।",
    stats: "আসল প্রশ্নপত্র • সমাধান নির্দেশিকা",
  },
  {
    id: "daily_tracker",
    tag: "স্মার্ট অ্যানালিটিক্স",
    tagColor: "bg-rose-100 text-rose-800 border-rose-200",
    iconBg: "bg-rose-500 text-white",
    Icon: Zap,
    title: "দৈনিক কারেন্ট অ্যাফেয়ার্স ও স্মার্ট স্টাডি ট্র্যাকার",
    desc: "প্রতিদিনের গুরুত্বপূর্ণ জাতীয় ও পশ্চিমবঙ্গ সংবাদ, দৈনিক অনুশীলনের স্ট্রিক ট্র্যাকিং ও পরীক্ষার প্রস্তুতি মূল্যায়নের স্মার্ট অগ্রগতি চার্ট।",
    stats: "প্রতিদিনের আপডেট • স্ট্রিক ট্র্যাকিং",
  },
];

export const LandingPage: React.FC<LandingPageProps> = ({ onLoginSuccess }) => {
  const [authTab, setAuthTab] = useState<"login" | "register" | "forgot">("login");
  const [step, setStep] = useState<"form" | "otp" | "reset_otp">("form");

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [targetPost, setTargetPost] = useState("Gram Panchayat Karmee & Sahayak");
  const [showPassword, setShowPassword] = useState(false);

  // Auto-cycling highlights state
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // OTP state
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpTimer, setOtpTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [devOtpNotice, setDevOtpNotice] = useState<string | null>(null);

  // Status feedback
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Auto cycle highlights every 3.8s in a single tab area without scrolling
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % PORTAL_HIGHLIGHTS.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [isPaused]);

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

  // 1. Handle Registration (Send OTP)
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
      return setError("এই ইমেইল দিয়ে ইতিমধ্যে অ্যাকাউন্ট রয়েছে। অনুগ্রহ করে লগইন করুন।");
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
      setError("ওটিপি পাঠাতে সমস্যা হয়েছে। অনুগ্রহ করে পুনরায় চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  // 2. Handle OTP Verification
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
        // Create account in Supabase Auth
        const regRes = await registerWithEmail(email.trim(), password, name.trim(), targetPost);
        if (regRes.success) {
          const profile: UserProfile = {
            email: email.toLowerCase().trim(),
            name: name.trim() || "পরীক্ষার্থী",
            targetPost,
            joinedDate: new Date().toISOString(),
            isVerified: true,
            isDemo: false,
          };
          setCurrentUser(profile);
          onLoginSuccess(profile);
        } else {
          // Fallback to localStorage if Supabase fails
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
            isDemo: false,
          };
          setCurrentUser(profile);
          onLoginSuccess(profile);
        }
      } else {
        setError(res.message || "ভুল ওটিপি কোড!");
      }
    } catch (err: any) {
      setError("ওটিপি যাচাই করা যায়নি।");
    } finally {
      setLoading(false);
    }
  };

  // 3. Handle Regular Login (Supabase Auth + localStorage fallback)
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim()) return setError("আপনার ইমেইল ঠিকানা দিন।");
    if (!password) return setError("পাসওয়ার্ড দিন।");

    setLoading(true);
    try {
      // Try Supabase Auth first
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
        onLoginSuccess(profile);
      } else {
        // Fallback to localStorage
        const users = getRegisteredUsers();
        const cleanEmail = email.toLowerCase().trim();
        const user = users.find((u) => u.email.toLowerCase() === cleanEmail);

        if (!user) {
          setError("এই ইমেইলে কোনো অ্যাকাউন্ট পাওয়া যায়নি। অনুগ্রহ করে রেজিস্ট্রেশন করুন।");
        } else if (!user.isVerified) {
          setError("আপনার অ্যাকাউন্টটি এখনো যাচাই করা হয়নি। রেজিস্ট্রেশন সম্পূর্ণ করুন।");
        } else if (user.passwordHash !== btoa(password)) {
          setError("ভুল পাসওয়ার্ড! সঠিক পাসওয়ার্ড দিন অথবা পাসওয়ার্ড রিসেট করুন।");
        } else {
          const profile: UserProfile = {
            email: user.email,
            name: user.name,
            targetPost: user.targetPost || "Gram Panchayat Karmee & Sahayak",
            joinedDate: user.createdAt,
            isVerified: true,
            isDemo: false,
          };
          setCurrentUser(profile);
          onLoginSuccess(profile);
        }
      }
    } catch {
      setError("লগইনে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  // 4. Quick Demo Login for preview testing
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
    onLoginSuccess(demoProfile);
  };

  // 5. Handle Forgot Password Request
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
        setStep("reset_otp");
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

  // 6. Handle Reset OTP Confirmation
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
          onLoginSuccess(profile);
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

  const handleResendOtp = async () => {
    if (!canResend) return;
    setLoading(true);
    setError(null);
    try {
      const res =
        step === "otp"
          ? await sendRegistrationOtp(email.trim(), name.trim())
          : await sendResetPasswordOtp(email.trim());

      if (res.success) {
        setSuccessMsg("নতুন ওটিপি সফলভাবে পাঠানো হয়েছে।");
        if (res.devOtp) setDevOtpNotice(`[নতুন ওটিপি]: ${res.devOtp}`);
        setOtpTimer(60);
        setCanResend(false);
      } else {
        setError(res.message);
      }
    } catch {
      setError("পুনরায় ওটিপি পাঠানো যায়নি।");
    } finally {
      setLoading(false);
    }
  };

  const currentItem = PORTAL_HIGHLIGHTS[activeSlide];
  const CurrentIcon = currentItem.Icon;

  return (
    <div className="w-full max-w-5xl mx-auto px-2 sm:px-4 py-2 sm:py-6 flex flex-col justify-center min-h-[calc(100vh-100px)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
        {/* LEFT COLUMN: Important Portal Highlights (Auto-cycling in one single view, no scroll down) */}
        <div className="lg:col-span-6 space-y-4">
          {/* Header Badge & Title */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full text-emerald-800 text-xs font-bold font-bengali shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>পশ্চিমবঙ্গ পঞ্চায়েত পরীক্ষা ২০২৬ • ডিজিটাল প্রস্তুতি প্ল্যাটফর্ম</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-bengali tracking-tight leading-tight">
              টার্গেট গ্রাম পঞ্চায়েত পরীক্ষা ২০২৬
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 font-bengali leading-relaxed">
              সচিব, সহায়ক ও এক্সিকিউটিভ অ্যাসিস্ট্যান্ট পদের পূর্ণাঙ্গ প্রস্তুতি নিন এক প্ল্যাটফর্মে।
            </p>
          </div>

          {/* AUTO-CYCLING SINGLE TAB/CARD (Smooth, auto-rotates the important highlights) */}
          <div
            id="portal-highlights-carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3 relative overflow-hidden transition-all"
          >
            {/* Auto progress bar */}
            <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden absolute top-0 left-0 right-0">
              <motion.div
                key={activeSlide}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.8, ease: "linear" }}
                className="h-full bg-emerald-500"
              />
            </div>

            {/* Top row with Tag & Slide navigation dots */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border font-bengali ${currentItem.tagColor}`}>
                  {currentItem.tag}
                </span>
                <span className="text-[11px] text-slate-400 font-mono-num font-semibold">
                  {activeSlide + 1} / {PORTAL_HIGHLIGHTS.length}
                </span>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() =>
                    setActiveSlide((prev) => (prev === 0 ? PORTAL_HIGHLIGHTS.length - 1 : prev - 1))
                  }
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
                  title="আগের পয়েন্ট"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveSlide((prev) => (prev + 1) % PORTAL_HIGHLIGHTS.length)
                  }
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
                  title="পরের পয়েন্ট"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Animated Content */}
            <div className="min-h-[105px] flex items-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="flex gap-3.5 items-start w-full"
                >
                  <div className={`w-10 h-10 rounded-xl ${currentItem.iconBg} flex items-center justify-center shrink-0 shadow-xs mt-0.5`}>
                    <CurrentIcon className="w-5 h-5" />
                  </div>

                  <div className="space-y-1 flex-1">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 font-bengali leading-snug">
                      {currentItem.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-bengali leading-relaxed">
                      {currentItem.desc}
                    </p>
                    <div className="text-[11px] font-semibold text-emerald-700 font-bengali pt-0.5 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{currentItem.stats}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Interactive pill indicators (Click to switch directly) */}
            <div className="flex items-center gap-1.5 pt-1 border-t border-slate-100">
              {PORTAL_HIGHLIGHTS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    activeSlide === idx
                      ? "w-7 bg-emerald-600"
                      : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                  title={item.tag}
                />
              ))}
              <span className="text-[11px] text-slate-400 font-bengali ml-auto">
                অটোমেটিক পরিবর্তন হচ্ছে
              </span>
            </div>
          </div>

          {/* Quick Features Row */}
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl py-2 px-1 text-slate-700">
              <span className="text-[11px] font-bold font-bengali block">১০০% ফ্রি প্রস্তুতি</span>
              <span className="text-[10px] text-slate-500 font-bengali">সীমাহীন অ্যাক্সেস</span>
            </div>
            <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl py-2 px-1 text-slate-700">
              <span className="text-[11px] font-bold font-bengali block">বাংলা ও ইংরেজি</span>
              <span className="text-[10px] text-slate-500 font-bengali">দ্বিভাষিক প্রশ্নাবলী</span>
            </div>
            <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl py-2 px-1 text-slate-700">
              <span className="text-[11px] font-bold font-bengali block">মোবাইল ফ্রেন্ডলি</span>
              <span className="text-[10px] text-slate-500 font-bengali">যেকোনো ডিভাইসে</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Streamlined Authentication Card */}
        <div className="lg:col-span-6">
          <div className="bg-white border border-slate-200 rounded-3xl shadow-lg shadow-slate-200/60 p-5 sm:p-6 space-y-4">
            {/* Tab Switcher */}
            <div className="flex bg-slate-100 p-1 rounded-2xl border border-slate-200">
              <button
                type="button"
                onClick={() => {
                  setAuthTab("login");
                  setStep("form");
                  setError(null);
                  setSuccessMsg(null);
                }}
                className={`flex-1 py-2 text-xs font-bold font-bengali rounded-xl transition-all cursor-pointer ${
                  authTab === "login"
                    ? "bg-white text-emerald-800 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                লগইন
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthTab("register");
                  setStep("form");
                  setError(null);
                  setSuccessMsg(null);
                }}
                className={`flex-1 py-2 text-xs font-bold font-bengali rounded-xl transition-all cursor-pointer ${
                  authTab === "register"
                    ? "bg-white text-emerald-800 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                নতুন অ্যাকাউন্ট
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthTab("forgot");
                  setStep("form");
                  setError(null);
                  setSuccessMsg(null);
                }}
                className={`flex-1 py-2 text-xs font-bold font-bengali rounded-xl transition-all cursor-pointer ${
                  authTab === "forgot"
                    ? "bg-white text-emerald-800 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                পাসওয়ার্ড রিসেট
              </button>
            </div>

            {/* Feedback Alerts */}
            {error && (
              <div className="p-2.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-start gap-2 font-bengali">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {successMsg && (
              <div className="p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-start gap-2 font-bengali">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{successMsg}</span>
              </div>
            )}

            {devOtpNotice && (
              <div className="p-2.5 bg-amber-50 border border-amber-200 text-amber-900 text-xs rounded-xl font-mono-num">
                {devOtpNotice}
              </div>
            )}

            {/* 1. LOGIN FORM */}
            {authTab === "login" && (
              <form onSubmit={handleLoginSubmit} className="space-y-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 font-bengali flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>ইমেইল আইডি (Email ID)</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="yourname@gmail.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all shadow-2xs"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-700 font-bengali flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-slate-400" />
                      <span>পাসওয়ার্ড</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => setAuthTab("forgot")}
                      className="text-xs text-emerald-700 font-semibold hover:underline cursor-pointer font-bengali"
                    >
                      পাসওয়ার্ড ভুলে গেছেন?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="আপনার পাসওয়ার্ড দিন"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 pr-10 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all shadow-2xs"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-bold text-sm rounded-xl shadow-md shadow-emerald-600/20 transition-all font-bengali flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-1"
                >
                  {loading ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <span>লগইন করুন</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Instant Guest Demo Entry */}
                <div className="pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={handleDemoLogin}
                    className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-all font-bengali flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>অতিথি / ডেমো হিসেবে সরাসরি প্রবেশ করুন</span>
                  </button>
                </div>
              </form>
            )}

            {/* 2. REGISTRATION FORM */}
            {authTab === "register" && step === "form" && (
              <form onSubmit={handleRegisterSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 font-bengali flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <span>নাম</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="আপনার পুরো নাম"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all shadow-2xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 font-bengali flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      <span>ইমেইল</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Gmail ID"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all shadow-2xs"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 font-bengali flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                    <span>টার্গেট পদ (Target Post)</span>
                  </label>
                  <select
                    value={targetPost}
                    onChange={(e) => setTargetPost(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 focus:bg-white font-bengali"
                  >
                    <option value="Gram Panchayat Karmee & Sahayak">গ্রাম পঞ্চায়েত কর্মী ও সহায়ক (Karmee & Sahayak)</option>
                    <option value="Executive Assistant">এক্সিকিউটিভ অ্যাসিস্ট্যান্ট (Executive Assistant)</option>
                    <option value="Panchayat Secretary">গ্রাম পঞ্চায়েত সচিব (Panchayat Secretary)</option>
                    <option value="Nirman Sahayak">নির্মাণ সহায়ক (Nirman Sahayak)</option>
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
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all shadow-2xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 font-bengali">পুনরায় পাসওয়ার্ড</label>
                    <input
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="পুনরায় লিখুন"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all shadow-2xs"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-bold text-sm rounded-xl shadow-md shadow-emerald-600/20 transition-all font-bengali flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <span>ওটিপি পাঠান ও ভেরিফাই করুন</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* 3. OTP VERIFICATION STEP */}
            {(step === "otp" || step === "reset_otp") && (
              <form
                onSubmit={step === "otp" ? handleVerifyOtpSubmit : handleResetPasswordConfirm}
                className="space-y-3"
              >
                <div className="text-center space-y-1">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <KeyRound className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 font-bengali">৬-সংখ্যার ওটিপি কোড লিখুন</h3>
                  <p className="text-xs text-slate-500 font-bengali truncate max-w-xs mx-auto">
                    {email} ঠিকানায় ওটিপি কোড পাঠানো হয়েছে
                  </p>
                </div>

                {/* 6-Digit Inputs */}
                <div className="flex justify-center gap-1.5 sm:gap-2">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`landing-otp-input-${index}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      className="w-9 sm:w-10 h-11 text-center text-base sm:text-lg font-bold font-mono-num bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-600 focus:bg-white"
                    />
                  ))}
                </div>

                {step === "reset_otp" && (
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 font-bengali">নতুন পাসওয়ার্ড</label>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="কমপক্ষে ৬ অক্ষরের পাসওয়ার্ড"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition-all font-bengali flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <span>যাচাই সম্পন্ন করে প্রবেশ করুন</span>
                  )}
                </button>

                <div className="flex items-center justify-between text-xs text-slate-500 font-bengali pt-1">
                  <button
                    type="button"
                    onClick={() => setStep("form")}
                    className="text-slate-600 hover:underline cursor-pointer"
                  >
                    ← পিছনে যান
                  </button>
                  {canResend ? (
                    <button
                      type="button"
                      onClick={handleResendOtp}
                      className="text-emerald-700 font-bold hover:underline cursor-pointer"
                    >
                      পুনরায় ওটিপি পাঠান
                    </button>
                  ) : (
                    <span>{otpTimer} সেক পর পুনরায় পাঠানো যাবে</span>
                  )}
                </div>
              </form>
            )}

            {/* 4. FORGOT PASSWORD STEP */}
            {authTab === "forgot" && step === "form" && (
              <form onSubmit={handleForgotPasswordSubmit} className="space-y-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 font-bengali flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>নিবন্ধিত ইমেইল আইডি (Gmail ID)</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="yourname@gmail.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition-all font-bengali flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <span>রিসেট ওটিপি পাঠান</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
