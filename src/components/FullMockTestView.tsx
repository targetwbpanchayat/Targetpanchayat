import React, { useState, useEffect } from "react";
import {
  Award,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Sparkles,
  HelpCircle,
  BarChart3,
  Check,
  Send,
  Flag,
  Shuffle,
  Play,
  FileText,
  Search,
  ArrowRight,
  TrendingUp,
  Lock,
  ShieldAlert,
} from "lucide-react";
import confetti from "canvas-confetti";
import { MockTest, MockTestAttempt, SubjectId, UserProgress, UserProfile } from "../types";
import { generateFullMockTest, cleanQuestion, cleanQuestionText } from "../utils/testGenerator";
import { VOLUME6_MOCK_TESTS } from "../data/volume6";
import { MOCK_TESTS } from "../data/mockTests";
import { saveUserProgress } from "../utils/storage";
import { isDemoUser, isMockTestAccessibleInDemo } from "../utils/demoHelper";
import { LockedFeatureModal } from "./LockedFeatureModal";

interface FullMockTestViewProps {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  initialTestId?: string | null;
  user?: UserProfile | null;
  onOpenAuth?: (mode?: "login" | "register") => void;
}

export const FullMockTestView: React.FC<FullMockTestViewProps> = ({
  progress,
  setProgress,
  initialTestId,
  user,
  onOpenAuth,
}) => {
  // Test states: 'list' | 'instructions' | 'exam' | 'result'
  const [activeScreen, setActiveScreen] = useState<"list" | "instructions" | "exam" | "result">("list");
  const [currentTest, setCurrentTest] = useState<MockTest>(() => generateFullMockTest());
  const [testSourceTab, setTestSourceTab] = useState<"vol6" | "curated" | "all">("vol6");

  // Demo lock modal
  const [lockedModalOpen, setLockedModalOpen] = useState(false);
  const [lockedModalTitle, setLockedModalTitle] = useState("মক টেস্টটি ডেমো মোডে লক করা আছে");
  const [lockedModalDesc, setLockedModalDesc] = useState("ডেমো মোডে শুধুমাত্র ১ম ফুল মক টেস্টটি (সেট ১) উন্মুক্ত। সম্পূর্ণ ৩০টি ফুল মক টেস্ট ও মেগা গ্র্যান্ড টেস্ট দিতে আপনার ফ্রি একাউন্ট তৈরি করুন।");
  const [lockedFeatureName, setLockedFeatureName] = useState<string | undefined>(undefined);

  const isDemo = isDemoUser(user);

  const handleOpenLocked = (testTitle?: string) => {
    setLockedModalTitle("মক টেস্টটি ডেমো মোডে লক করা আছে");
    setLockedModalDesc("ডেমো মোডে শুধুমাত্র ১ম ফুল মক টেস্টটি (সেট ১) সম্পূর্ণ উন্মুক্ত। সম্পূর্ণ ৩০টি ফুল মক টেস্ট ও মেগা গ্র্যান্ড টেস্ট দিতে আপনার ফ্রি একাউন্ট তৈরি করুন বা লগইন করুন।");
    setLockedFeatureName(testTitle);
    setLockedModalOpen(true);
  };

  // Exam engine state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(90 * 60);
  const [timeSpentSeconds, setTimeSpentSeconds] = useState(0);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // Result state
  const [latestAttempt, setLatestAttempt] = useState<MockTestAttempt | null>(null);
  const [activeReviewFilter, setActiveReviewFilter] = useState<"all" | "correct" | "wrong" | "unanswered">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const allAvailableTests: MockTest[] = [...VOLUME6_MOCK_TESTS, ...MOCK_TESTS];

  useEffect(() => {
    if (initialTestId) {
      const found = allAvailableTests.find((t) => t.id === initialTestId);
      if (found) {
        setCurrentTest({
          ...found,
          questions: found.questions.map(cleanQuestion),
        });
        setActiveScreen("instructions");
      }
    }
  }, [initialTestId]);

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

  // Generate fresh dynamic full mock test and start
  const handleStartNewDynamicTest = () => {
    if (isDemo) {
      handleOpenLocked("নতুন সাফল করা ডায়নামিক টেস্ট");
      return;
    }
    const freshTest = generateFullMockTest();
    setCurrentTest(freshTest);
    setActiveScreen("instructions");
  };

  // Start exam
  const handleStartExam = (test: MockTest) => {
    if (isDemo && !isMockTestAccessibleInDemo(test.id, user)) {
      handleOpenLocked(test.titleBn);
      return;
    }
    const sanitizedTest: MockTest = {
      ...test,
      questions: test.questions.map(cleanQuestion),
    };
    setCurrentTest(sanitizedTest);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setMarkedForReview({});
    setTimeLeftSeconds(sanitizedTest.durationMinutes * 60);
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

  // Submit test
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
      id: `attempt_${Date.now()}`,
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

    // Save to user progress
    setProgress((prev) => {
      const updatedAttempts = [...(prev.mockTestAttempts || []), attempt];
      const updatedProgress = { ...prev, mockTestAttempts: updatedAttempts };
      saveUserProgress(updatedProgress);
      return updatedProgress;
    });

    setActiveScreen("result");

    try {
      if (percentage >= 60) {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      }
    } catch (e) {}
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // 1. SCREEN: LIST & GENERATOR
  if (activeScreen === "list") {
    let sourcePool = allAvailableTests;
    if (testSourceTab === "vol6") {
      sourcePool = VOLUME6_MOCK_TESTS;
    } else if (testSourceTab === "curated") {
      sourcePool = MOCK_TESTS;
    }

    const displayTests = sourcePool.filter((t) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return t.titleBn.toLowerCase().includes(q) || (t.titleEn && t.titleEn.toLowerCase().includes(q));
      }
      return true;
    });

    const allFullAttempts = (progress.mockTestAttempts || []).filter(
      (a) => a.totalQuestions === 85
    );

    return (
      <div className="space-y-6 pb-12 animate-in fade-in duration-200">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold font-bengali">
              <Sparkles className="w-3.5 h-3.5" />
              <span>পশ্চিমবঙ্গ পঞ্চায়েত রিক্রুটমেন্ট ২০২৬ স্পেশাল</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black font-bengali tracking-tight leading-tight">
              ফুল লেংথ মক টেস্ট (Full Mock Test - 85 Marks)
            </h1>
            <p className="text-slate-200 text-xs sm:text-sm font-bengali leading-relaxed">
              অফিশিয়াল সিলেবাস অনুপাতে বাংলা (২০), ইংরেজি (২০), পাটিগণিত (২৫) এবং সাধারণ জ্ঞান ও পঞ্চায়েত ব্যবস্থা (২০) নিয়ে গঠিত পূর্ণাঙ্গ ৮৫ নম্বরের পরীক্ষা। ৯০ মিনিট সময় ও ০.২৫ নেগেটিভ মার্কিং।
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={handleStartNewDynamicTest}
                className="px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm font-bengali flex items-center gap-2 shadow-lg shadow-emerald-500/30 transition-all hover:scale-102 cursor-pointer"
              >
                <Shuffle className="w-4 h-4" />
                <span>নতুন সাফল করা ৮৫-প্রশ্ন টেস্ট শুরু করুন</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
            <span className="text-xs text-slate-500 font-bengali">মোট প্রশ্ন</span>
            <div className="text-xl font-bold text-slate-900 font-mono-num mt-0.5">৮৫ টি</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
            <span className="text-xs text-slate-500 font-bengali">সময়সীমা</span>
            <div className="text-xl font-bold text-emerald-700 font-mono-num mt-0.5">৯০ মিনিট</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
            <span className="text-xs text-slate-500 font-bengali">নেগেটিভ মার্কিং</span>
            <div className="text-xl font-bold text-rose-600 font-mono-num mt-0.5">-০.২৫ নম্বর</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
            <span className="text-xs text-slate-500 font-bengali">আপনার দেওয়া পরীক্ষা</span>
            <div className="text-xl font-bold text-slate-900 font-mono-num mt-0.5">
              {allFullAttempts.length} টি
            </div>
          </div>
        </div>

        {/* Section title, filter tabs and search */}
        <div className="space-y-4 pt-4 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900 font-bengali flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-600" />
                <span>মক টেস্ট সংকলন (Practice Sets & Curated Mega Tests)</span>
              </h2>
              <p className="text-xs text-slate-500 font-bengali">
                নির্ধারিত ৩০টি ফুল প্র্যাকটিস সেট এবং ৫টি ভলিউমের মেগা গ্র্যান্ড মক টেস্ট থেকে পরীক্ষা দিন
              </p>
            </div>

            <div className="w-full sm:w-72 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="মক টেস্ট খুঁজুন (যেমন: সেট ১, মেগা, পঞ্চায়েত)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 font-bengali focus:outline-none focus:border-emerald-500 shadow-xs"
              />
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => setTestSourceTab("vol6")}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-bengali whitespace-nowrap transition-all cursor-pointer ${
                testSourceTab === "vol6"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              ভলিউম ৬ প্র্যাকটিস সেট (৩০টি)
            </button>
            <button
              onClick={() => setTestSourceTab("curated")}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-bengali whitespace-nowrap transition-all cursor-pointer ${
                testSourceTab === "curated"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              মেগা গ্র্যান্ড ও ভলিউম টেস্ট ({MOCK_TESTS.length}টি)
            </button>
            <button
              onClick={() => setTestSourceTab("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-bengali whitespace-nowrap transition-all cursor-pointer ${
                testSourceTab === "all"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              সকল টেস্ট ({allAvailableTests.length}টি)
            </button>
          </div>
        </div>

        {/* Grid of Sets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {displayTests.map((test) => {
            const isAccessible = isMockTestAccessibleInDemo(test.id, user);
            const previousAttempts = progress.mockTestAttempts?.filter((a) => a.testId === test.id) || [];
            const bestScore = previousAttempts.length > 0
              ? Math.max(...previousAttempts.map((a) => a.percentage))
              : null;

            return (
              <div
                key={test.id}
                className={`bg-white border rounded-2xl p-5 transition-all flex flex-col justify-between space-y-4 ${
                  !isAccessible
                    ? "border-slate-200 bg-slate-50/50 opacity-90"
                    : "border-slate-200 hover:border-emerald-400 hover:shadow-md"
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-bengali">
                      {test.totalQuestions} প্রশ্ন • {test.durationMinutes} মিনিট
                    </span>
                    {!isAccessible ? (
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bengali flex items-center gap-1 border border-amber-200">
                        <Lock className="w-3 h-3" />
                        <span>লক করা</span>
                      </span>
                    ) : bestScore !== null ? (
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono-num">
                        সর্বোচ্চ: {bestScore}%
                      </span>
                    ) : null}
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 font-bengali line-clamp-2 leading-snug">
                    {test.titleBn}
                  </h3>

                  <p className="text-xs text-slate-500 font-bengali line-clamp-2 leading-relaxed">
                    {test.descriptionBn}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[11px] text-slate-500 font-bengali">
                    {test.sections?.map(s => s.subjectName.split(" ")[0]).join(" • ") || "সম্পূর্ণ সিলেবাস"}
                  </div>
                  {isAccessible ? (
                    <button
                      onClick={() => {
                        setCurrentTest({
                          ...test,
                          questions: test.questions.map(cleanQuestion),
                        });
                        setActiveScreen("instructions");
                      }}
                      className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white text-xs font-bold font-bengali transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
                    >
                      <span>শুরু করুন</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleOpenLocked(test.titleBn)}
                      className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold font-bengali transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>আনলক করুন</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <LockedFeatureModal
          isOpen={lockedModalOpen}
          onClose={() => setLockedModalOpen(false)}
          title={lockedModalTitle}
          description={lockedModalDesc}
          featureName={lockedFeatureName}
          onRegister={() => {
            setLockedModalOpen(false);
            if (onOpenAuth) onOpenAuth("register");
          }}
        />
      </div>
    );
  }

  // 2. SCREEN: INSTRUCTIONS
  if (activeScreen === "instructions") {
    const isCurrentAccessible = isMockTestAccessibleInDemo(currentTest.id, user);

    if (!isCurrentAccessible) {
      return (
        <div className="max-w-2xl mx-auto bg-white border-2 border-amber-300 rounded-3xl p-8 space-y-6 shadow-sm text-center animate-in fade-in">
          <div className="w-14 h-14 rounded-2xl bg-amber-100 border border-amber-200 text-amber-700 flex items-center justify-center mx-auto">
            <Lock className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900 font-bengali">
              {currentTest.titleBn} ডেমো অ্যাকাউন্টে লক করা আছে
            </h3>
            <p className="text-sm text-slate-600 font-bengali leading-relaxed">
              ডেমো মোডে শুধুমাত্র ১ম ফুল মক টেস্টটি (সেট ১) সম্পূর্ণ অ্যাক্সেসযোগ্য। এই টেস্ট এবং বাকি ২৯টি ফুল প্র্যাকটিস সেট দিতে অনুগ্রহ করে ফ্রি অ্যাকাউন্ট তৈরি করুন।
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setActiveScreen("list")}
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bengali font-bold text-xs cursor-pointer"
            >
              ← মক টেস্ট তালিকায় ফিরে যান
            </button>
            <button
              onClick={() => {
                if (onOpenAuth) onOpenAuth("register");
              }}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bengali font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 cursor-pointer flex items-center gap-2"
            >
              <span>ফ্রি অ্যাকাউন্ট তৈরি করুন</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      );
    }
    return (
      <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs animate-in fade-in">
        <button
          onClick={() => setActiveScreen("list")}
          className="text-xs text-slate-500 hover:text-slate-900 font-bengali flex items-center gap-1 cursor-pointer font-bold"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>তালিকায় ফিরে যান</span>
        </button>

        <div className="border-b border-slate-100 pb-4">
          <span className="text-xs font-bold text-emerald-700 font-bengali uppercase">
            ফুল লেংথ মক টেস্ট নির্দেশিকা
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-bengali mt-1">
            {currentTest.titleBn}
          </h2>
        </div>

        {/* Quick parameters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <span className="text-xs text-slate-500 font-bengali">মোট প্রশ্ন</span>
            <div className="text-lg font-bold text-slate-900 font-mono-num">{currentTest.totalQuestions}</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <span className="text-xs text-slate-500 font-bengali">মোট নম্বর</span>
            <div className="text-lg font-bold text-slate-900 font-mono-num">{currentTest.totalMarks}</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <span className="text-xs text-slate-500 font-bengali">সময়সীমা</span>
            <div className="text-lg font-bold text-emerald-700 font-mono-num">{currentTest.durationMinutes} মিনিট</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-center">
            <span className="text-xs text-rose-700 font-bengali">ভুল উত্তরের জন্য</span>
            <div className="text-lg font-bold text-rose-700 font-mono-num">-{currentTest.negativeMarkPerWrong}</div>
          </div>
        </div>

        {/* Subject breakdown */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
          <h4 className="text-xs font-bold text-slate-700 font-bengali uppercase">বিভাগভিত্তিক প্রশ্নবণ্টন (Syllabus Sections)</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {currentTest.sections.map((sec, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs bg-white p-2.5 rounded-xl border border-slate-200">
                <span className="font-bengali text-slate-800 font-medium">{sec.subjectName}</span>
                <span className="font-mono-num font-bold text-slate-900">{sec.questionCount} টি প্রশ্ন ({sec.questionCount} নম্বর)</span>
              </div>
            ))}
          </div>
        </div>

        {/* Guidelines */}
        <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-bengali">
          <h4 className="font-bold text-slate-800">পরীক্ষার নিয়মাবলী:</h4>
          <ul className="list-disc list-inside space-y-1.5 leading-relaxed">
            <li>প্রতিটি সঠিক উত্তরের জন্য পাবেন <strong className="text-emerald-700">+১ নম্বর</strong>।</li>
            <li>প্রতিটি ভুল উত্তরের জন্য কাটা যাবে <strong className="text-rose-600">-০.২৫ নম্বর</strong> (Negative Marking)।</li>
            <li>উত্তর না দিলে কোনো নম্বর কাটা যাবে না।</li>
            <li>আপনি যেকোনো সময় প্রশ্নের উত্তর পরিবর্তন করতে পারবেন বা Review-র জন্য মার্ক করতে পারবেন।</li>
            <li>নির্দিষ্ট সময় শেষ হলে পরীক্ষা স্বয়ংক্রিয়ভাবে জমা হয়ে যাবে।</li>
          </ul>
        </div>

        <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
          <button
            onClick={() => setActiveScreen("list")}
            className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold font-bengali hover:bg-slate-50 cursor-pointer"
          >
            বাতিল করুন
          </button>
          <button
            onClick={() => handleStartExam(currentTest)}
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold font-bengali flex items-center gap-2 shadow-md shadow-emerald-600/20 cursor-pointer"
          >
            <Play className="w-4 h-4" />
            <span>পরীক্ষা শুরু করুন (Start Test)</span>
          </button>
        </div>
      </div>
    );
  }

  // 3. SCREEN: EXAM ENGINE
  if (activeScreen === "exam") {
    const q = currentTest.questions[currentQuestionIndex];
    const isMarked = markedForReview[q?.id];
    const selectedOpt = userAnswers[q?.id];
    const answeredCount = Object.keys(userAnswers).length;
    const reviewCount = Object.values(markedForReview).filter(Boolean).length;

    return (
      <div className="space-y-4 pb-12 animate-in fade-in">
        {/* Top Floating Action Bar */}
        <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-3 sm:p-4 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-xs sm:text-sm font-bold text-slate-800 font-bengali">
              প্রশ্ন <span className="font-mono-num text-emerald-700 font-bold">{currentQuestionIndex + 1}</span> / {currentTest.totalQuestions}
            </span>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bengali border border-slate-200">
              {q.subjectId === "bengali" && "বাংলা ভাষা ও সাহিত্য"}
              {q.subjectId === "english" && "English Language"}
              {q.subjectId === "math" && "পাটিগণিত ও গণিত"}
              {q.subjectId === "panchayat" && "পঞ্চায়েত আইন ও প্রশাসন"}
              {q.subjectId === "gk" && "সাধারণ জ্ঞান ও জিকে"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Countdown timer */}
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-bold font-mono-num ${
              timeLeftSeconds < 300
                ? "bg-rose-50 border-rose-300 text-rose-700 animate-pulse"
                : "bg-slate-100 border-slate-300 text-slate-800"
            }`}>
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>{formatTimer(timeLeftSeconds)}</span>
            </div>

            <button
              onClick={() => setShowSubmitModal(true)}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold font-bengali flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>সাবমিট করুন</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Question Box */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs min-h-[420px] flex flex-col justify-between">
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

                {/* 4 Options */}
                <div className="space-y-3 pt-2">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = selectedOpt === optIdx;
                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOptionInExam(q.id, optIdx)}
                        className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm font-bengali flex items-center justify-between transition-all cursor-pointer ${
                          isSelected
                            ? "bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-500/20 shadow-xs"
                            : "bg-slate-50/70 hover:bg-slate-100 border-slate-200 text-slate-800"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-7 h-7 rounded-xl font-mono font-bold text-xs flex items-center justify-center border ${
                            isSelected
                              ? "bg-emerald-600 text-white border-emerald-600"
                              : "bg-white text-slate-600 border-slate-300"
                          }`}>
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{opt}</span>
                        </div>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom question actions */}
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
                    <span>{isMarked ? "মার্ক করা আছে" : "রিভিউয়ের জন্য মার্ক"}</span>
                  </button>

                  {selectedOpt !== undefined && (
                    <button
                      onClick={() => handleClearOption(q.id)}
                      className="px-3 py-2 text-xs font-bengali text-slate-500 hover:text-slate-800 underline cursor-pointer"
                    >
                      উত্তর মুছে ফেলুন
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
                    className="px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold font-bengali disabled:opacity-30 hover:bg-emerald-700 flex items-center gap-1 cursor-pointer"
                  >
                    <span>পরবর্তী</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Question Palette Sidebar */}
          <div className="bg-white border border-slate-200 rounded-3xl p-5 space-y-4 shadow-xs h-fit">
            <h4 className="text-xs font-bold text-slate-900 font-bengali uppercase">প্রশ্ন প্যালেট (Question Palette)</h4>

            <div className="grid grid-cols-2 gap-2 text-[11px] font-bengali text-slate-600 pb-2 border-b border-slate-100">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                <span>উত্তর দেওয়া: {answeredCount}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                <span>রিভিউ: {reviewCount}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-slate-200"></span>
                <span>বাকি: {currentTest.totalQuestions - answeredCount}</span>
              </div>
            </div>

            {/* Questions Number Grid */}
            <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-5 gap-2 max-h-[380px] overflow-y-auto pr-1">
              {currentTest.questions.map((item, idx) => {
                const isAns = userAnswers[item.id] !== undefined;
                const isRev = markedForReview[item.id];
                const isCur = currentQuestionIndex === idx;

                let bgClass = "bg-slate-100 text-slate-700 hover:bg-slate-200";
                if (isAns && isRev) bgClass = "bg-purple-600 text-white";
                else if (isAns) bgClass = "bg-emerald-600 text-white font-bold";
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

        {/* Submit confirmation modal */}
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-5 shadow-2xl">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Send className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-bengali">পরীক্ষা শেষ করে জমা দিতে চান?</h3>
                <p className="text-xs text-slate-500 font-bengali mt-1">
                  জমা দেওয়ার পর আপনি বিশদ ফলাফল এবং প্রতিটি প্রশ্নের সঠিক ব্যাখ্যা দেখতে পাবেন।
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <div>
                  <span className="text-[11px] text-slate-400 font-bengali">উত্তর দিয়েছেন</span>
                  <div className="text-base font-bold text-emerald-700 font-mono-num">{answeredCount}</div>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-bengali">রিভিউ মার্ক</span>
                  <div className="text-base font-bold text-amber-600 font-mono-num">{reviewCount}</div>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-bengali">বাকি প্রশ্ন</span>
                  <div className="text-base font-bold text-slate-600 font-mono-num">{currentTest.totalQuestions - answeredCount}</div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold font-bengali hover:bg-slate-50 cursor-pointer"
                >
                  পরীক্ষায় ফিরুন
                </button>
                <button
                  onClick={handleSubmitTest}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold font-bengali shadow-md shadow-emerald-600/20 cursor-pointer"
                >
                  হ্যাঁ, জমা দিন
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // 4. SCREEN: RESULT & REVIEW
  if (activeScreen === "result" && latestAttempt) {
    const isPassed = latestAttempt.percentage >= 50;

    const filteredReviewQuestions = currentTest.questions.filter((q) => {
      const ans = latestAttempt.userAnswers[q.id];
      if (activeReviewFilter === "correct") return ans === q.correctIndex;
      if (activeReviewFilter === "wrong") return ans !== undefined && ans !== q.correctIndex;
      if (activeReviewFilter === "unanswered") return ans === undefined;
      return true;
    });

    return (
      <div className="space-y-6 pb-12 animate-in fade-in">
        {/* Score Header Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <span className="text-xs font-bold text-emerald-700 font-bengali">মক টেস্ট মূল্যায়ন ও স্কোর কার্ড</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-bengali mt-1">
                {latestAttempt.testTitle}
              </h2>
              <p className="text-xs text-slate-400 font-mono-num mt-0.5">
                তারিখ: {new Date(latestAttempt.date).toLocaleString("bn-BD")} • সময় লেগেছে: {formatTimer(latestAttempt.timeSpentSeconds)}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleStartNewDynamicTest}
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold font-bengali flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>নতুন টেস্ট দিন</span>
              </button>
              <button
                onClick={() => setActiveScreen("list")}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold font-bengali cursor-pointer"
              >
                তালিকায় ফিরুন
              </button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
              <span className="text-xs text-emerald-800 font-bengali font-bold">প্রাপ্ত মোট নম্বর</span>
              <div className="text-2xl sm:text-3xl font-black text-emerald-800 font-mono-num mt-1">
                {latestAttempt.score} <span className="text-xs text-emerald-600 font-normal">/ {latestAttempt.totalMarks}</span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs text-slate-600 font-bengali">শতাংশ (Percentage)</span>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono-num mt-1">
                {latestAttempt.percentage}%
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-center">
              <span className="text-xs text-emerald-700 font-bengali">সঠিক উত্তর (+১)</span>
              <div className="text-2xl font-bold text-emerald-700 font-mono-num mt-1">
                {latestAttempt.correctAnswers}
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-center">
              <span className="text-xs text-rose-700 font-bengali">ভুল উত্তর (-০.২৫)</span>
              <div className="text-2xl font-bold text-rose-700 font-mono-num mt-1">
                {latestAttempt.wrongAnswers}
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs text-slate-500 font-bengali">ছেড়ে দেওয়া প্রশ্ন</span>
              <div className="text-2xl font-bold text-slate-600 font-mono-num mt-1">
                {latestAttempt.unanswered}
              </div>
            </div>
          </div>
        </div>

        {/* Section Review Filters */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h3 className="text-base font-bold text-slate-900 font-bengali">
            প্রশ্ন ও বিশদ সমাধান পর্যালোচনা ({filteredReviewQuestions.length} টি)
          </h3>

          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
            {(
              [
                { id: "all", label: "সব প্রশ্ন" },
                { id: "correct", label: "সঠিক" },
                { id: "wrong", label: "ভুল" },
                { id: "unanswered", label: "ছেড়ে দেওয়া" },
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

        {/* Questions list with detailed Bengali explanations */}
        <div className="space-y-4">
          {filteredReviewQuestions.map((q, idx) => {
            const userAns = latestAttempt.userAnswers[q.id];
            const isCorrect = userAns === q.correctIndex;
            const isWrong = userAns !== undefined && !isCorrect;
            const isUnans = userAns === undefined;

            return (
              <div
                key={q.id}
                className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                      Q#{idx + 1}
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-bengali">
                      {q.subjectId === "bengali" && "বাংলা"}
                      {q.subjectId === "english" && "English"}
                      {q.subjectId === "math" && "গণিত"}
                      {q.subjectId === "panchayat" && "পঞ্চায়েত আইন"}
                      {q.subjectId === "gk" && "সাধারণ জ্ঞান"}
                    </span>
                  </div>

                  {isCorrect && (
                    <span className="text-xs font-bold text-emerald-700 font-bengali flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" /> সঠিক (+১.০)
                    </span>
                  )}
                  {isWrong && (
                    <span className="text-xs font-bold text-rose-700 font-bengali flex items-center gap-1 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                      <XCircle className="w-3.5 h-3.5" /> ভুল উত্তর (-০.২৫)
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

                {/* Explanation */}
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs sm:text-sm text-slate-800 font-bengali space-y-1">
                  <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>বিশদ বাংলা সমাধান:</span>
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
