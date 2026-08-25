import React from "react";
import { 
  Flame, 
  LogOut, 
  User, 
  CheckCircle2, 
  Mail, 
  ShieldCheck, 
  Download, 
  Search,
  BookOpen
} from "lucide-react";
import { UserProfile, UserProgress } from "../types";
import { exportProgressToJson } from "../utils/storage";

interface NavbarProps {
  user: UserProfile | null;
  progress?: UserProgress;
  streak?: number;
  onLogout: () => void;
  onOpenAuth: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  smtpConfigured?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  user,
  progress,
  streak: propStreak,
  onLogout,
  onOpenAuth,
  activeTab,
  setActiveTab,
  smtpConfigured,
}) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const streak = propStreak ?? progress?.dailyStreak?.currentStreak ?? 1;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & App Name */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setActiveTab(user ? "dashboard" : "landing")}
              className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-base sm:text-lg text-slate-900 font-bengali tracking-tight">
                    পশ্চিমবঙ্গ পঞ্চায়েত প্রস্তুতি
                  </span>
                  <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded-full uppercase tracking-wider hidden sm:inline-block">
                    WB GP 2026
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-bengali hidden md:block">
                  কর্মী • সহায়ক • নির্মাণ সহায়ক • এক্সিকিউটিভ অ্যাসিস্ট্যান্ট
                </p>
              </div>
            </button>
          </div>

          {/* Right Action Icons & User profile */}
          <div className="flex items-center gap-2 sm:gap-4">
            {user ? (
              <>
                {/* Daily Streak Badge */}
                <div 
                  className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full text-amber-700 cursor-pointer hover:bg-amber-100 transition-all shadow-xs"
                  title="আপনার দৈনিক পড়ার স্ট্রিক"
                  onClick={() => setActiveTab("report")}
                >
                  <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span className="text-xs font-bold font-mono-num">{streak}</span>
                  <span className="text-xs font-bengali hidden sm:inline">দিন স্ট্রিক</span>
                </div>

                {/* Gmail Verification Pill */}
                <div className="hidden lg:flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full text-emerald-700 text-xs font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Gmail যাচাইকৃত</span>
                </div>

                {/* User Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                      {user.name ? user.name.charAt(0) : "U"}
                    </div>
                    <div className="text-left hidden md:block">
                      <div className="text-xs font-bold text-slate-800 line-clamp-1 max-w-[130px]">
                        {user.name}
                      </div>
                      <div className="text-[10px] text-slate-500 line-clamp-1 max-w-[130px]">
                        {user.targetPost}
                      </div>
                    </div>
                  </button>

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div 
                      className="absolute right-0 mt-2 w-64 rounded-2xl bg-white border border-slate-200 shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="px-3 py-2 border-b border-slate-100 mb-1">
                        <p className="text-xs font-bold text-slate-900">{user.name}</p>
                        <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                          <Mail className="w-3 h-3 text-slate-400" />
                          <span className="truncate">{user.email}</span>
                        </p>
                      </div>

                      <button
                        onClick={() => setActiveTab("settings")}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-colors cursor-pointer"
                      >
                        <User className="w-4 h-4 text-slate-500" />
                        <span>প্রোফাইল ও সেটিংস</span>
                      </button>

                      <button
                        onClick={() => {
                          if (progress) exportProgressToJson(progress);
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-colors cursor-pointer"
                      >
                        <Download className="w-4 h-4 text-emerald-600" />
                        <span>প্রগতি ডাউনলোড (Backup)</span>
                      </button>

                      <div className="my-1 border-t border-slate-100" />

                      <button
                        onClick={onLogout}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>লগআউট করুন</span>
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <button
                onClick={onOpenAuth}
                className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-xl shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>লগইন / ওটিপি রেজিস্ট্রেশন</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
