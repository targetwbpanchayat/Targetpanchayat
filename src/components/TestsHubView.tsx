import React, { useState } from "react";
import {
  Award,
  Clock,
  Zap,
  History,
  FileCheck,
  CheckCircle2,
  XCircle,
  AlertCircle,
  RotateCcw,
  Sparkles,
  Search,
  Eye,
  Calendar,
  ChevronRight,
  Lock,
} from "lucide-react";
import { MockTestAttempt, SubjectId, UserProgress, UserProfile } from "../types";
import { FullMockTestView } from "./FullMockTestView";
import { ShortMockTestView } from "./ShortMockTestView";
import { QuizView } from "./QuizView";
import { AnswerSheetModal } from "./AnswerSheetModal";
import { isDemoUser } from "../utils/demoHelper";
import { LockedFeatureModal } from "./LockedFeatureModal";

interface TestsHubViewProps {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  initialSubTab?: "full_mock" | "short_mock" | "quiz" | "history";
  initialTestId?: string | null;
  user?: UserProfile | null;
  onOpenAuth?: (mode?: "login" | "register") => void;
}

export const TestsHubView: React.FC<TestsHubViewProps> = ({
  progress,
  setProgress,
  initialSubTab = "full_mock",
  initialTestId,
  user,
  onOpenAuth,
}) => {
  const isDemo = isDemoUser(user);
  const [activeSubTab, setActiveSubTab] = useState<"full_mock" | "short_mock" | "quiz" | "history">(initialSubTab);
  const [selectedAttemptForReview, setSelectedAttemptForReview] = useState<MockTestAttempt | null>(null);
  const [historySearch, setHistorySearch] = useState("");
  const [lockedModalOpen, setLockedModalOpen] = useState(false);
  const [lockedFeatureName, setLockedFeatureName] = useState("");

  const handleSubTabClick = (tab: "full_mock" | "short_mock" | "quiz" | "history") => {
    if (isDemo && (tab === "short_mock" || tab === "quiz")) {
      setLockedFeatureName(tab === "short_mock" ? "শর্ট মক টেস্ট (৪০ নম্বর)" : "স্পিড কুইজ (১০ নম্বর)");
      setLockedModalOpen(true);
      return;
    }
    setActiveSubTab(tab);
  };

  const attempts = progress?.mockTestAttempts || [];

  const filteredAttempts = attempts.filter((att) => {
    if (!historySearch.trim()) return true;
    return att.testTitle.toLowerCase().includes(historySearch.toLowerCase());
  });

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* Top Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-white/10 text-emerald-300 border border-white/10 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>পশ্চিমবঙ্গ পঞ্চায়েত পরীক্ষা ২০২৬ মক টেস্ট হাব</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-bengali">
              পরীক্ষা ও মূল্যায়ন কেন্দ্র (Tests & Quizzes)
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 font-bengali max-w-xl">
              সম্পূর্ণ সিলেবাস অনুসারী ৮৫ নম্বরের ফুল মক টেস্ট, দ্রুত মূল্যায়নের ৪০ নম্বরের শর্ট মক এবং বিষয়ভিত্তিক স্পিড কুইজ দিন। সমস্ত টেস্টের উত্তরপত্র নিচে স্বয়ংক্রিয়ভাবে সংরক্ষিত থাকে।
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl flex items-center gap-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
                <FileCheck className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <div className="text-xl font-bold font-mono-num text-white leading-tight">
                  {attempts.length} টি
                </div>
                <div className="text-[11px] text-slate-300 font-bengali">দেওয়া টেস্ট সংখ্যা</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Tab Navigation Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-1.5 flex items-center gap-1 shadow-xs overflow-x-auto">
        <button
          onClick={() => handleSubTabClick("full_mock")}
          className={`flex-1 min-w-[130px] flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-bold font-bengali transition-all cursor-pointer ${
            activeSubTab === "full_mock"
              ? "bg-emerald-600 text-white shadow-sm"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
          }`}
        >
          <Award className="w-4 h-4" />
          <span>ফুল মক টেস্ট (৮৫)</span>
        </button>

        <button
          onClick={() => handleSubTabClick("short_mock")}
          className={`flex-1 min-w-[130px] flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-bold font-bengali transition-all cursor-pointer ${
            activeSubTab === "short_mock"
              ? "bg-emerald-600 text-white shadow-sm"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>শর্ট মক টেস্ট (৪০)</span>
          {isDemo && <Lock className="w-3 h-3 text-amber-600 shrink-0" />}
        </button>

        <button
          onClick={() => handleSubTabClick("quiz")}
          className={`flex-1 min-w-[130px] flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-bold font-bengali transition-all cursor-pointer ${
            activeSubTab === "quiz"
              ? "bg-emerald-600 text-white shadow-sm"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>স্পিড কুইজ (১০)</span>
          {isDemo && <Lock className="w-3 h-3 text-amber-600 shrink-0" />}
        </button>

        <button
          onClick={() => handleSubTabClick("history")}
          className={`flex-1 min-w-[150px] flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-bold font-bengali transition-all cursor-pointer ${
            activeSubTab === "history"
              ? "bg-emerald-600 text-white shadow-sm"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
          }`}
        >
          <History className="w-4 h-4" />
          <span>সংরক্ষিত উত্তরপত্র ({attempts.length})</span>
        </button>
      </div>

      {/* Sub-Tab Contents */}
      {activeSubTab === "full_mock" && (
        <FullMockTestView
          progress={progress}
          setProgress={setProgress}
          initialTestId={initialTestId}
          user={user}
          onOpenAuth={onOpenAuth}
        />
      )}

      {activeSubTab === "short_mock" && (
        <ShortMockTestView
          progress={progress}
          setProgress={setProgress}
        />
      )}

      {activeSubTab === "quiz" && (
        <QuizView
          progress={progress}
          setProgress={setProgress}
        />
      )}

      {activeSubTab === "history" && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900 font-bengali">
                  পূর্বের দেওয়া মক টেস্ট ও সংরক্ষিত উত্তরপত্র (Saved Answer Sheets)
                </h2>
                <p className="text-xs text-slate-500 font-bengali mt-0.5">
                  যেকোনো টেস্টের প্রশ্নের সেট ও আপনার দেওয়া উত্তর পুনরায় বিস্তারিত সমাধানসহ দেখতে পারেন।
                </p>
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={historySearch}
                  onChange={(e) => setHistorySearch(e.target.value)}
                  placeholder="টেস্টের নাম খুঁজুন..."
                  className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bengali text-slate-800 focus:outline-none focus:border-emerald-600"
                />
              </div>
            </div>

            {filteredAttempts.length === 0 ? (
              <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200 space-y-3">
                <History className="w-10 h-10 text-slate-400 mx-auto" />
                <h3 className="text-base font-bold text-slate-800 font-bengali">
                  {historySearch ? "কোনো ফলাফল পাওয়া যায়নি" : "এখনো কোনো মক টেস্ট জমা দেননি"}
                </h3>
                <p className="text-xs text-slate-500 font-bengali max-w-sm mx-auto">
                  ফুল মক টেস্ট, শর্ট মক টেস্ট অথবা স্পিড কুইজ দিলে স্বয়ংক্রিয়ভাবে এখানে আপনার উত্তরপত্র ও নম্বর সেভ থাকবে।
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setActiveSubTab("full_mock")}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold font-bengali cursor-pointer shadow-xs"
                  >
                    ফুল মক টেস্ট শুরু করুন
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[...filteredAttempts].reverse().map((att) => {
                  const dateStr = att.date
                    ? new Date(att.date).toLocaleDateString("bn-BD", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : "";

                  const hasQuestionsSaved = Array.isArray(att.questions) && att.questions.length > 0;

                  return (
                    <div
                      key={att.id}
                      className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-emerald-300 transition-all shadow-xs space-y-3.5 flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-full font-bengali">
                            {att.totalQuestions === 85 ? "৮৫ নম্বরের ফুল মক" : att.totalQuestions === 40 ? "৪০ নম্বরের শর্ট মক" : "কুইজ / টেস্ট"}
                          </span>
                          <span className="text-xs text-slate-500 font-mono-num">{dateStr}</span>
                        </div>

                        <h3 className="text-sm sm:text-base font-bold text-slate-900 font-bengali line-clamp-2">
                          {att.testTitle}
                        </h3>

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-2 pt-1 text-center font-mono-num">
                          <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                            <div className="text-[10px] text-slate-500 font-bengali">স্কোর</div>
                            <div className="text-sm font-bold text-emerald-700">
                              {att.score}/{att.totalMarks}
                            </div>
                          </div>
                          <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                            <div className="text-[10px] text-slate-500 font-bengali">শতাংশ</div>
                            <div className="text-sm font-bold text-slate-800">{att.percentage}%</div>
                          </div>
                          <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                            <div className="text-[10px] text-slate-500 font-bengali">সময়</div>
                            <div className="text-sm font-bold text-slate-800">
                              {Math.floor(att.timeSpentSeconds / 60)}মি
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-xs text-slate-600 font-bengali pt-1">
                          <span className="text-emerald-700 font-semibold font-mono-num">
                            ✓ {att.correctAnswers} সঠিক
                          </span>
                          <span className="text-rose-700 font-semibold font-mono-num">
                            ✗ {att.wrongAnswers} ভুল
                          </span>
                          <span className="text-slate-500 font-mono-num">
                            - {att.unanswered} অনুত্তরিত
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedAttemptForReview(att)}
                        className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold font-bengali flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>উত্তরপত্র ও বিশদ সমাধান দেখুন</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Answer Sheet Modal */}
      {selectedAttemptForReview && (
        <AnswerSheetModal
          attempt={selectedAttemptForReview}
          onClose={() => setSelectedAttemptForReview(null)}
        />
      )}

      {/* Locked Feature Modal for Demo Users */}
      <LockedFeatureModal
        isOpen={lockedModalOpen}
        onClose={() => setLockedModalOpen(false)}
        title="টেস্ট ফিচারটি ডেমো মোডে লক করা আছে"
        description="ডেমো অ্যাকাউন্টে ফুল মক টেস্টের প্রথম টেস্ট সেটটি সম্পূর্ণ বিনামূল্যে উন্মুক্ত রয়েছে। শর্ট মক টেস্ট, স্পিড কুইজ এবং সমস্ত মক টেস্ট আনলক করতে আপনার ফ্রি অ্যাকাউন্ট তৈরি করুন।"
        featureName={lockedFeatureName}
        onRegister={() => {
          setLockedModalOpen(false);
          if (onOpenAuth) onOpenAuth("register");
        }}
      />
    </div>
  );
};
