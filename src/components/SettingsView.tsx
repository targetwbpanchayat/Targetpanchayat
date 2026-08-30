import React, { useState } from "react";
import {
  User,
  Shield,
  Download,
  Upload,
  Trash2,
  Mail,
  Check,
} from "lucide-react";
import { UserProfile, UserProgress } from "../types";
import { clearUserData, saveUserProgress, saveUserProfile } from "../utils/storage";

interface SettingsViewProps {
  user: UserProfile;
  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>;
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  onLogout: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  user,
  setUser,
  progress,
  setProgress,
  onLogout,
}) => {
  const [importStatus, setImportStatus] = useState<string | null>(null);

  // Export progress as JSON file
  const handleExportData = () => {
    const exportObject = {
      user,
      progress,
      exportedAt: new Date().toISOString(),
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObject, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `wb_panchayat_progress_${user.email.split("@")[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Import JSON backup
  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.progress) {
          setProgress(parsed.progress);
          saveUserProgress(parsed.progress);
          setImportStatus("ডাটা সফলভাবে ইম্পোর্ট করা হয়েছে!");
          setTimeout(() => setImportStatus(null), 3000);
        }
      } catch (err) {
        setImportStatus("অবৈধ JSON ফাইল। দয়া করে সঠিক ব্যাকআপ ফাইল নির্বাচন করুন।");
      }
    };
    reader.readAsText(file);
  };

  const handleResetProgress = () => {
    if (window.confirm("আপনি কি নিশ্চিত যে সমস্ত প্রগতি ও পরীক্ষার রেকর্ড রিসেট করতে চান?")) {
      const resetProgress: UserProgress = {
        userEmail: user.email,
        completedChapters: [],
        practiceAnswers: {},
        mockTestAttempts: [],
        bookmarkedQuestionIds: [],
        activeStudyPlan: null,
        dailyStreak: {
          currentStreak: 1,
          bestStreak: 1,
          lastActiveDate: new Date().toISOString().split("T")[0],
          activeDays: [new Date().toISOString().split("T")[0]],
        },
        customNotes: {},
      };
      setProgress(resetProgress);
      saveUserProgress(resetProgress);
    }
  };

  return (
    <div className="space-y-6 pb-16 animate-in fade-in duration-200">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-bengali">
          অ্যাকাউন্ট সেটিংস ও ব্যাকআপ (Settings)
        </h1>
        <p className="text-xs text-slate-500 font-bengali">
          আপনার প্রোফাইল, লোকাল ডাটা ব্যাকআপ এবং সার্ভার কনফিগারেশন পরিচালনা করুন
        </p>
      </div>

      {/* User Profile Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">
            {user.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-bengali">{user.name}</h2>
            <div className="text-xs text-slate-500 font-mono-num flex items-center gap-1.5 flex-wrap">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{user.email}</span>
              {user.isVerified && (
                <span className="text-[10px] bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-200 font-bengali font-bold">
                  Gmail Verified ✓
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-bengali">
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
            <span className="text-slate-500">টার্গেট পদ:</span>
            <div className="font-bold text-slate-800 mt-0.5">{user.targetPost || "গ্রাম পঞ্চায়েত কর্মী / সহায়ক"}</div>
          </div>
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
            <span className="text-slate-500">রেজিস্ট্রেশন তারিখ:</span>
            <div className="font-bold text-slate-800 mt-0.5 font-mono-num">
              {new Date(user.joinedDate || Date.now()).toLocaleDateString("bn-IN")}
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={onLogout}
            className="px-4 py-2 bg-rose-50 border border-rose-200 hover:bg-rose-100 text-rose-700 text-xs font-bold rounded-xl font-bengali transition-colors cursor-pointer"
          >
            লগআউট করুন
          </button>
        </div>
      </div>

      {/* Backup & Data Persistence */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs">
        <h2 className="text-base font-bold text-slate-900 font-bengali flex items-center gap-2">
          <Download className="w-4 h-4 text-emerald-600" />
          <span>ডাটা ব্যাকআপ ও রিস্টোর (Offline Data Backup)</span>
        </h2>
        <p className="text-xs text-slate-600 font-bengali leading-relaxed">
          আপনার সমস্ত পড়া সম্পন্ন অধ্যায়, মক টেস্ট স্কোর ও বুকমার্ক করা প্রশ্নগুলি একটি নিরাপদ JSON ফাইলে এক্সপোর্ট বা ইম্পোর্ট করুন। এতে ডিভাইস পরিবর্তন করলেও আপনার প্রগতি হারাবে না।
        </p>

        {importStatus && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-bengali font-medium">
            {importStatus}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={handleExportData}
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl font-bengali flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
          >
            <Download className="w-4 h-4" />
            <span>প্রগ্রেস ব্যাকআপ ডাউনলোড (JSON Export)</span>
          </button>

          <label className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl border border-slate-200 font-bengali flex items-center gap-1.5 transition-colors cursor-pointer">
            <Upload className="w-4 h-4 text-slate-600" />
            <span>ব্যাকআপ ফাইল থেকে ইম্পোর্ট</span>
            <input type="file" accept=".json" onChange={handleImportFile} className="hidden" />
          </label>

          <button
            onClick={handleResetProgress}
            className="px-4 py-2.5 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 text-xs font-bold rounded-xl font-bengali flex items-center gap-1.5 transition-colors cursor-pointer ml-auto"
          >
            <Trash2 className="w-4 h-4" />
            <span>প্রগতি রিসেট করুন</span>
          </button>
        </div>
      </div>

    </div>
  );
};
