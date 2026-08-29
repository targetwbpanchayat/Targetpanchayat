import React, { useState, useEffect } from "react";
import {
  Zap,
  Clock,
  CheckCircle2,
  XCircle,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Sparkles,
  Send,
  Flag,
  Shuffle,
  Play,
  ArrowRight,
} from "lucide-react";
import confetti from "canvas-confetti";
import { MockTest, MockTestAttempt, SubjectId, UserProgress } from "../types";
import { generateShortMockTest, cleanQuestion, cleanQuestionText } from "../utils/testGenerator";
import { saveUserProgress } from "../utils/storage";

interface ShortMockTestViewProps {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
}

export const ShortMockTestView: React.FC<ShortMockTestViewProps> = ({
  progress,
  setProgress,
}) => {
  const [activeScreen, setActiveScreen] = useState<"intro" | "exam" | "result">("intro");
  const [currentTest, setCurrentTest] = useState<MockTest>(() => {
    const t = generateShortMockTest();
    return { ...t, questions: t.questions.map(cleanQuestion) };
  });

  // Exam engine state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(40 * 60);
  const [timeSpentSeconds, setTimeSpentSeconds] = useState(0);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // Result state
  const [latestAttempt, setLatestAttempt] = useState<MockTestAttempt | null>(null);
  const [activeReviewFilter, setActiveReviewFilter] = useState<"all" | "correct" | "wrong" | "unanswered">("all");

  // Countdown timer in exam mode
  useEffect(() => {
    let timer: any = null;
    if (activeScreen === "exam") {
      timer = setInterval(() => {
        setTimeLeftSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmitTest();
            return 0;
          }
          return prev - 1;
        });
        setTimeSpentSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [activeScreen, userAnswers]);

  const handleStartNewTest = () => {
    const rawTest = generateShortMockTest();
    const test: MockTest = {
      ...rawTest,
      questions: rawTest.questions.map(cleanQuestion),
    };
    setCurrentTest(test);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setMarkedForReview({});
    setTimeLeftSeconds(test.durationMinutes * 60);
    setTimeSpentSeconds(0);
    setActiveScreen("exam");
  };

  const handleSelectOptionInExam = (qId: string, optionIndex: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [qId]: optionIndex,
    }));
  };

  const handleClearOption = (qId: string) => {
    setUserAnswers((prev) => {
      const copy = { ...prev };
      delete copy[qId];
      return copy;
    });
  };

  const handleToggleReview = (qId: string) => {
    setMarkedForReview((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  const handleSubmitTest = () => {
    setShowSubmitModal(false);

    let correctCount = 0;
    let wrongCount = 0;
    let unansweredCount = 0;

    const subjectBreakdown: Record<
      SubjectId,
      { total: number; correct: number; wrong: number; unanswered: number; score: number }
    > = {
      panchayat: { total: 0, correct: 0, wrong: 0, unanswered: 0, score: 0 },
      bengali: { total: 0, correct: 0, wrong: 0, unanswered: 0, score: 0 },
      english: { total: 0, correct: 0, wrong: 0, unanswered: 0, score: 0 },
      math: { total: 0, correct: 0, wrong: 0, unanswered: 0, score: 0 },
      gk: { total: 0, correct: 0, wrong: 0, unanswered: 0, score: 0 },
    };

    currentTest.questions.forEach((q) => {
      const sub = q.subjectId;
      if (!subjectBreakdown[sub]) {
        subjectBreakdown[sub] = { total: 0, correct: 0, wrong: 0, unanswered: 0, score: 0 };
      }
      subjectBreakdown[sub].total += 1;

      const answeredIdx = userAnswers[q.id];
      if (answeredIdx === undefined) {
        unansweredCount += 1;
        subjectBreakdown[sub].unanswered += 1;
      } else if (answeredIdx === q.correctIndex) {
        correctCount += 1;
        subjectBreakdown[sub].correct += 1;
        subjectBreakdown[sub].score += 1;
      } else {
        wrongCount += 1;
        subjectBreakdown[sub].wrong += 1;
        subjectBreakdown[sub].score -= currentTest.negativeMarkPerWrong;
      }
    });

    const netScore = Math.max(
      0,
      Number((correctCount * 1 - wrongCount * currentTest.negativeMarkPerWrong).toFixed(2))
    );
    const percentage = Math.round((netScore / currentTest.totalMarks) * 100);

    const attempt: MockTestAttempt = {
      id: `attempt_short_${Date.now()}`,
      testId: currentTest.id,
      testTitle: currentTest.titleBn,
      date: new Date().toISOString(),
      timeSpentSeconds,
      totalQuestions: currentTest.totalQuestions,
      attemptedQuestions: correctCount + wrongCount,
      correctAnswers: correctCount,
      wrongAnswers: wrongCount,
      unanswered: unansweredCount,
      score: netScore,
      totalMarks: currentTest.totalMarks,
      percentage,
      subjectBreakdown,
      userAnswers,
      questions: currentTest.questions.map(cleanQuestion),
    };

    setLatestAttempt(attempt);

    setProgress((prev) => {
      const updatedAttempts = [...(prev.mockTestAttempts || []), attempt];
      const updatedProgress = { ...prev, mockTestAttempts: updatedAttempts };
      saveUserProgress(updatedProgress);
      return updatedProgress;
    });

    setActiveScreen("result");

    try {
      if (percentage >= 60) {
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
      }
    } catch (e) {}
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // 1. SCREEN: INTRO / DASHBOARD
  if (activeScreen === "intro") {
    const pastShortAttempts = (progress.mockTestAttempts || []).filter(
      (a) => a.totalQuestions === 40
    );

    return (
      <div className="space-y-6 pb-12 animate-in fade-in duration-200">
        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold font-bengali">
              <Zap className="w-3.5 h-3.5" />
              <span>দ্রুত মূল্যায়ন ও ডেইলি প্র্যাকটিস</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black font-bengali tracking-tight leading-tight">
              শর্ট মক টেস্ট (Short Mock Test - 40 Marks)
            </h1>
            <p className="text-slate-200 text-xs sm:text-sm font-bengali leading-relaxed">
              কম সময়ে সম্পূর্ণ সিলেবাস রিভিশনের জন্য তৈরি ৪০ নম্বরের স্মার্ট মক টেস্ট। প্রতিবার সম্পূর্ণ নতুন ও সাফল করা প্রশ্নপত্র তৈরি হয়: বাংলা (১০), ইংরেজি (১০), পাটিগণিত (১০), জিকে ও পঞ্চায়েত (১০)। সময় ৪০ মিনিট, নেগেটিভ মার্কিং ০.২৫।
            </p>

            <div className="pt-3">
              <button
                onClick={handleStartNewTest}
                className="px-6 py-3.5 rounded-2xl bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold text-sm font-bengali flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all hover:scale-102 cursor-pointer"
              >
                <Play className="w-4 h-4" />
                <span>নতুন ৪০ নম্বরের শর্ট মক টেস্ট শুরু করুন</span>
              </button>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
            <span className="text-xs text-slate-500 font-bengali">মোট প্রশ্ন</span>
            <div className="text-xl font-bold text-slate-900 font-mono-num mt-0.5">৪০ টি</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
            <span className="text-xs text-slate-500 font-bengali">সময়সীমা</span>
            <div className="text-xl font-bold text-blue-600 font-mono-num mt-0.5">৪০ মিনিট</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
            <span className="text-xs text-slate-500 font-bengali">নেগেটিভ মার্কিং</span>
            <div className="text-xl font-bold text-rose-600 font-mono-num mt-0.5">-০.২৫ নম্বর</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
            <span className="text-xs text-slate-500 font-bengali">বিষয়বণ্টন</span>
            <div className="text-xs font-bold text-slate-700 font-bengali mt-1">
              ১০ × ৪ বিভাগ
            </div>
          </div>
        </div>

        {/* Syllabus Distribution */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs">
          <h3 className="text-base font-bold text-slate-900 font-bengali">
            শর্ট মক টেস্টের প্রশ্ন কাঠামো (Subject Ratio)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1">
              <span className="text-xs font-bold text-amber-900 font-bengali">বাংলা ভাষা ও সাহিত্য</span>
              <div className="text-lg font-bold text-amber-900 font-mono-num">১০ টি প্রশ্ন (১০ নম্বর)</div>
              <p className="text-[11px] text-amber-700 font-bengali">ব্যাকরণ, সমাস, কারক, এককথায় প্রকাশ</p>
            </div>
            <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-1">
              <span className="text-xs font-bold text-sky-900 font-bengali">ইংরেজি ভাষা (English)</span>
              <div className="text-lg font-bold text-sky-900 font-mono-num">১০ টি প্রশ্ন (১০ নম্বর)</div>
              <p className="text-[11px] text-sky-700 font-bengali">Grammar, Vocabulary, Voice, Idioms</p>
            </div>
            <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-1">
              <span className="text-xs font-bold text-indigo-900 font-bengali">পাটিগণিত ও গণিত</span>
              <div className="text-lg font-bold text-indigo-900 font-mono-num">১০ টি প্রশ্ন (১০ নম্বর)</div>
              <p className="text-[11px] text-indigo-700 font-bengali">শতকরা, লাভ-ক্ষতি, সুদ, সময়-কার্য</p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1">
              <span className="text-xs font-bold text-emerald-900 font-bengali">জিকে ও পঞ্চায়েত আইন</span>
              <div className="text-lg font-bold text-emerald-900 font-mono-num">১০ টি প্রশ্ন (১০ নম্বর)</div>
              <p className="text-[11px] text-emerald-700 font-bengali">পঞ্চায়েত আইন, প্রশাসন, ইতিহাস, ভূগোল</p>
            </div>
          </div>
        </div>

        {/* Previous short test history */}
        {pastShortAttempts.length > 0 && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 font-bengali">
              বিগত শর্ট মক টেস্টের ফলাফল ({pastShortAttempts.length} টি)
            </h3>
            <div className="divide-y divide-slate-100">
              {pastShortAttempts.slice(-5).reverse().map((att, idx) => (
                <div key={idx} className="py-3 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-800 font-bengali">{att.testTitle}</span>
                    <p className="text-[11px] text-slate-400 font-mono-num">
                      {new Date(att.date).toLocaleDateString("bn-BD")}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <span className="text-sm font-bold text-slate-900 font-mono-num">
                        {att.score} / {att.totalMarks}
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono-num block">
                        ({att.percentage}%)
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // 2. SCREEN: EXAM ENGINE
  if (activeScreen === "exam") {
    const q = currentTest.questions[currentQuestionIndex];
    const isMarked = markedForReview[q?.id];
    const selectedOpt = userAnswers[q?.id];
    const answeredCount = Object.keys(userAnswers).length;
    const reviewCount = Object.values(markedForReview).filter(Boolean).length;

    return (
      <div className="space-y-4 pb-12 animate-in fade-in">
        {/* Top bar */}
        <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-3 sm:p-4 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-xs sm:text-sm font-bold text-slate-800 font-bengali">
              প্রশ্ন <span className="font-mono-num text-blue-700 font-bold">{currentQuestionIndex + 1}</span> / {currentTest.totalQuestions}
            </span>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bengali border border-blue-200">
              {q.subjectId === "bengali" && "বাংলা"}
              {q.subjectId === "english" && "English"}
              {q.subjectId === "math" && "পাটিগণিত"}
              {q.subjectId === "panchayat" && "পঞ্চায়েত আইন"}
              {q.subjectId === "gk" && "সাধারণ জ্ঞান"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-bold font-mono-num ${
              timeLeftSeconds < 180
                ? "bg-rose-50 border-rose-300 text-rose-700 animate-pulse"
                : "bg-slate-100 border-slate-300 text-slate-800"
            }`}>
              <Clock className="w-4 h-4 text-blue-600" />
              <span>{formatTimer(timeLeftSeconds)}</span>
            </div>

            <button
              onClick={() => setShowSubmitModal(true)}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold font-bengali flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>সাবমিট</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs min-h-[380px] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono-num pb-2 border-b border-slate-100">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bengali">
                    প্রশ্ন {currentQuestionIndex + 1}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-700 font-bold">+১.০</span>
                    <span className="text-rose-600 font-bold">-০.২৫</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-bengali leading-relaxed">
                  {cleanQuestionText(q.questionBn)}
                </h3>

                <div className="space-y-3 pt-2">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = selectedOpt === optIdx;
                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOptionInExam(q.id, optIdx)}
                        className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm font-bengali flex items-center justify-between transition-all cursor-pointer ${
                          isSelected
                            ? "bg-blue-50 border-blue-500 text-blue-950 font-bold ring-2 ring-blue-500/20 shadow-xs"
                            : "bg-slate-50/70 hover:bg-slate-100 border-slate-200 text-slate-800"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-7 h-7 rounded-xl font-mono font-bold text-xs flex items-center justify-center border ${
                            isSelected
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-white text-slate-600 border-slate-300"
                          }`}>
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{opt}</span>
                        </div>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleToggleReview(q.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold font-bengali flex items-center gap-1.5 border transition-colors cursor-pointer ${
                      isMarked
                        ? "bg-amber-100 border-amber-300 text-amber-900"
                        : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <Flag className="w-3.5 h-3.5" />
                    <span>{isMarked ? "মার্ক করা আছে" : "রিভিউ মার্ক"}</span>
                  </button>

                  {selectedOpt !== undefined && (
                    <button
                      onClick={() => handleClearOption(q.id)}
                      className="px-3 py-2 text-xs font-bengali text-slate-500 hover:text-slate-800 underline cursor-pointer"
                    >
                      মুছে ফেলুন
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    disabled={currentQuestionIndex === 0}
                    onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                    className="p-2.5 rounded-xl border border-slate-200 text-slate-600 disabled:opacity-30 hover:bg-slate-50 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    disabled={currentQuestionIndex === currentTest.questions.length - 1}
                    onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                    className="px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold font-bengali disabled:opacity-30 hover:bg-blue-700 flex items-center gap-1 cursor-pointer"
                  >
                    <span>পরবর্তী</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Palette */}
          <div className="bg-white border border-slate-200 rounded-3xl p-5 space-y-4 shadow-xs h-fit">
            <h4 className="text-xs font-bold text-slate-900 font-bengali uppercase">প্রশ্ন প্যালেট (৪০টি প্রশ্ন)</h4>

            <div className="grid grid-cols-2 gap-2 text-[11px] font-bengali text-slate-600 pb-2 border-b border-slate-100">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                <span>উত্তর: {answeredCount}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-slate-200"></span>
                <span>বাকি: {currentTest.totalQuestions - answeredCount}</span>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-2 max-h-[340px] overflow-y-auto pr-1">
              {currentTest.questions.map((item, idx) => {
                const isAns = userAnswers[item.id] !== undefined;
                const isRev = markedForReview[item.id];
                const isCur = currentQuestionIndex === idx;

                let bgClass = "bg-slate-100 text-slate-700 hover:bg-slate-200";
                if (isAns && isRev) bgClass = "bg-purple-600 text-white";
                else if (isAns) bgClass = "bg-blue-600 text-white font-bold";
                else if (isRev) bgClass = "bg-amber-500 text-white font-bold";

                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`h-8 rounded-xl font-mono-num text-xs font-medium transition-all cursor-pointer ${bgClass} ${
                      isCur ? "ring-2 ring-slate-900 ring-offset-2 scale-105" : ""
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Submit Modal */}
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-5 shadow-2xl">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <Send className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-bengali">শর্ট মক টেস্ট জমা দিতে চান?</h3>
                <p className="text-xs text-slate-500 font-bengali mt-1">
                  উত্তর দিয়েছেন {answeredCount} টি, বাকি আছে {currentTest.totalQuestions - answeredCount} টি প্রশ্ন।
                </p>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold font-bengali hover:bg-slate-50 cursor-pointer"
                >
                  ফিরে যান
                </button>
                <button
                  onClick={handleSubmitTest}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold font-bengali shadow-md shadow-blue-600/20 cursor-pointer"
                >
                  জমা দিন
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // 3. SCREEN: RESULT & REVIEW
  if (activeScreen === "result" && latestAttempt) {
    const filteredReviewQuestions = currentTest.questions.filter((q) => {
      const ans = latestAttempt.userAnswers[q.id];
      if (activeReviewFilter === "correct") return ans === q.correctIndex;
      if (activeReviewFilter === "wrong") return ans !== undefined && ans !== q.correctIndex;
      if (activeReviewFilter === "unanswered") return ans === undefined;
      return true;
    });

    return (
      <div className="space-y-6 pb-12 animate-in fade-in">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <span className="text-xs font-bold text-blue-700 font-bengali">শর্ট মক টেস্ট স্কোর কার্ড</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-bengali mt-1">
                {latestAttempt.testTitle}
              </h2>
              <p className="text-xs text-slate-400 font-mono-num mt-0.5">
                তারিখ: {new Date(latestAttempt.date).toLocaleString("bn-BD")} • সময়: {formatTimer(latestAttempt.timeSpentSeconds)}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleStartNewTest}
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold font-bengali flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>নতুন ৪০ নম্বরের টেস্ট দিন</span>
              </button>
              <button
                onClick={() => setActiveScreen("intro")}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold font-bengali cursor-pointer"
              >
                ড্যাশবোর্ডে ফিরুন
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-center">
              <span className="text-xs text-blue-800 font-bengali font-bold">প্রাপ্ত নম্বর</span>
              <div className="text-2xl sm:text-3xl font-black text-blue-800 font-mono-num mt-1">
                {latestAttempt.score} <span className="text-xs text-blue-600 font-normal">/ ৪০</span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs text-slate-600 font-bengali">শতাংশ</span>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono-num mt-1">
                {latestAttempt.percentage}%
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-center">
              <span className="text-xs text-emerald-700 font-bengali">সঠিক (+১)</span>
              <div className="text-2xl font-bold text-emerald-700 font-mono-num mt-1">
                {latestAttempt.correctAnswers}
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-center">
              <span className="text-xs text-rose-700 font-bengali">ভুল (-০.২৫)</span>
              <div className="text-2xl font-bold text-rose-700 font-mono-num mt-1">
                {latestAttempt.wrongAnswers}
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs text-slate-500 font-bengali">ছেড়ে দেওয়া</span>
              <div className="text-2xl font-bold text-slate-600 font-mono-num mt-1">
                {latestAttempt.unanswered}
              </div>
            </div>
          </div>
        </div>

        {/* Review list */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h3 className="text-base font-bold text-slate-900 font-bengali">
            প্রশ্ন ও সমাধান পর্যালোচনা ({filteredReviewQuestions.length} টি)
          </h3>

          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
            {(
              [
                { id: "all", label: "সব" },
                { id: "correct", label: "সঠিক" },
                { id: "wrong", label: "ভুল" },
                { id: "unanswered", label: "বাকি" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveReviewFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold font-bengali transition-all cursor-pointer ${
                  activeReviewFilter === tab.id
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredReviewQuestions.map((q, idx) => {
            const userAns = latestAttempt.userAnswers[q.id];
            const isCorrect = userAns === q.correctIndex;
            const isWrong = userAns !== undefined && !isCorrect;
            const isUnans = userAns === undefined;

            return (
              <div key={q.id} className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                      Q#{idx + 1}
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200 font-bengali">
                      {q.subjectId === "bengali" && "বাংলা"}
                      {q.subjectId === "english" && "English"}
                      {q.subjectId === "math" && "গণিত"}
                      {q.subjectId === "panchayat" && "পঞ্চায়েত"}
                      {q.subjectId === "gk" && "জিকে"}
                    </span>
                  </div>

                  {isCorrect && (
                    <span className="text-xs font-bold text-emerald-700 font-bengali flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-full">
                      <CheckCircle2 className="w-3.5 h-3.5" /> সঠিক (+১.০)
                    </span>
                  )}
                  {isWrong && (
                    <span className="text-xs font-bold text-rose-700 font-bengali flex items-center gap-1 bg-rose-50 px-2.5 py-1 rounded-full">
                      <XCircle className="w-3.5 h-3.5" /> ভুল (-০.২৫)
                    </span>
                  )}
                  {isUnans && (
                    <span className="text-xs font-bold text-slate-500 font-bengali bg-slate-100 px-2.5 py-1 rounded-full">
                      ছেড়ে দেওয়া (০)
                    </span>
                  )}
                </div>

                <h4 className="text-sm sm:text-base font-bold text-slate-900 font-bengali leading-relaxed">
                  {cleanQuestionText(q.questionBn)}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = userAns === optIdx;
                    const isRightOption = q.correctIndex === optIdx;

                    let optClass = "bg-slate-50 border-slate-200 text-slate-700";
                    if (isRightOption) {
                      optClass = "bg-emerald-50 border-emerald-400 text-emerald-950 font-bold shadow-xs";
                    } else if (isSelected && !isRightOption) {
                      optClass = "bg-rose-50 border-rose-300 text-rose-950 line-through";
                    }

                    return (
                      <div
                        key={optIdx}
                        className={`p-3 rounded-2xl border text-xs sm:text-sm font-bengali flex items-center justify-between ${optClass}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-lg bg-white border border-slate-300 font-mono font-bold text-xs flex items-center justify-center text-slate-700">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{opt}</span>
                        </div>
                        {isRightOption && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                        {isSelected && !isRightOption && <XCircle className="w-4 h-4 text-rose-600 shrink-0" />}
                      </div>
                    );
                  })}
                </div>

                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs sm:text-sm text-slate-800 font-bengali space-y-1">
                  <div className="font-bold text-blue-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>বিশদ সমাধান:</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed pt-0.5">{q.explanationBn}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
};
