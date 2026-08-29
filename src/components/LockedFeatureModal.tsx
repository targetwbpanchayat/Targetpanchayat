import React from "react";
import { Lock, Sparkles, CheckCircle2, X, ArrowRight, UserPlus, LogIn, ShieldAlert } from "lucide-react";

interface LockedFeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAuth: (mode?: "login" | "register") => void;
  title?: string;
  description?: string;
  featureName?: string;
}

export const LockedFeatureModal: React.FC<LockedFeatureModalProps> = ({
  isOpen,
  onClose,
  onOpenAuth,
  title = "এই কনটেন্টটি ডেমো মোডে লক করা আছে",
  description = "সম্পূর্ণ সিলেবাস, ৩০টি ফুল মক টেস্ট, ৫,০০০+ অধ্যায়ভিত্তিক MCQ এবং সমস্ত স্টাডি ম্যাটেরিয়াল আনলক করতে আপনার ফ্রি অ্যাকাউন্ট তৈরি করুন বা লগইন করুন।",
  featureName,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-5 shadow-2xl border border-slate-200 relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Lock Icon Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0 shadow-xs">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-[11px] font-bold font-bengali border border-amber-200">
              <ShieldAlert className="w-3 h-3 text-amber-600" />
              <span>ডেমো মোড সীমাবদ্ধতা</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-bengali leading-tight mt-1">
              {title}
            </h3>
          </div>
        </div>

        {/* Feature badge if provided */}
        {featureName && (
          <div className="bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-semibold text-slate-700 font-bengali">
            লক করা আইটেম: <span className="text-emerald-800 font-bold">{featureName}</span>
          </div>
        )}

        <p className="text-xs sm:text-sm text-slate-600 font-bengali leading-relaxed">
          {description}
        </p>

        {/* What full account unlocks */}
        <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 space-y-2.5">
          <div className="text-xs font-bold text-emerald-900 font-bengali flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>ফ্রি একাউন্টে যা যা আনলক হবে:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-bengali">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>৫টি বিষয়ের সম্পূর্ণ অধ্যায় ও থিওরি</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>৩০টি ফুল লেংথ মক টেস্ট (৮৫ মার্কস)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>৫,০০০+ MCQ ও সম্পূর্ণ SAQ ব্যাংক</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>বিগত বছরের প্রশ্নপত্র ও ৬০ দিনের প্ল্যান</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-2">
          <button
            onClick={() => {
              onClose();
              onOpenAuth("register");
            }}
            className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm font-bengali flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
          >
            <UserPlus className="w-4 h-4" />
            <span>ফ্রি অ্যাকাউন্ট রেজিস্টার করুন</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenAuth("login");
            }}
            className="w-full sm:w-auto py-3 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm font-bengali flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <LogIn className="w-4 h-4" />
            <span>লগইন</span>
          </button>
        </div>
      </div>
    </div>
  );
};
