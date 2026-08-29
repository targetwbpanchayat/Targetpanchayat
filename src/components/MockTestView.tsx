import React, { useState, useEffect } from "react";
import {
  Award,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  RotateCcw,
  Sparkles,
  HelpCircle,
  BarChart3,
  Check,
  Send,
  Flag,
} from "lucide-react";
import confetti from "canvas-confetti";
import { MockTest, MockTestAttempt, Question, SubjectId, UserProgress } from "../types";
import { cleanQuestionText } from "../utils/testGenerator";
import { MOCK_TESTS } from "../data/mockTests";
import { saveUserProgress } from "../utils/storage";

interface MockTestViewProps {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  initialTestId?: string | null;
}

export const MockTestView: React.FC<MockTestViewProps> = ({
  progress,
  setProgress,
  initialTestId,
}) => {
  // Test states: 'list' | 'instructions' | 'exam' | 'result'
  const [activeScreen, setActiveScreen] = useState<"list" | "instructions" | "exam" | "result">("list");
  const [currentTest, setCurrentTest] = useState<MockTest>(MOCK_TESTS[0]);

  // Exam engine state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({}); // questionId -> optionIndex
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(30 * 60);
  const [timeSpentSeconds, setTimeSpentSeconds] = useState(0);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // Result state
  const [latestAttempt, setLatestAttempt] = useState<MockTestAttempt | null>(null);
  const [activeReviewFilter, setActiveReviewFilter] = useState<"all" | "correct" | "wrong" | "unanswered">("all");
  const [testListTab, setTestListTab] = useState<"all" | "vol6_practice" | "pyq" | "mega">("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (initialTestId) {
      const found = MOCK_TESTS.find((t) => t.id === initialTestId);
      if (found) {
        setCurrentTest(found);
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
            handleSubmitTest(); // auto-submit on timeout
            return 0;
          }
          return prev - 1;
        });
        setTimeSpentSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [activeScreen, userAnswers]);

  // Start exam
  const handleStartExam = (test: MockTest) => {
    setCurrentTest(test);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setMarkedForReview({});
    setTimeLeftSeconds(test.durationMinutes * 60);
    setTimeSpentSeconds(0);
    setActiveScreen("exam");
  };

  // Select answer in exam
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

  // Submit test and calculate detailed analytics
  const handleSubmitTest = () => {
    setShowSubmitModal(false);

    let correctCount = 0;
    let wrongCount = 0;
    let unansweredCount = 0;

    const subjectBreakdown: Record<SubjectId, { total: number; correct: number; wrong: number; unanswered: number; score: number }> = {
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
      totalQuestions: currentTest.questions.length,
      attemptedQuestions: correctCount + wrongCount,
      correctAnswers: correctCount,
      wrongAnswers: wrongCount,
      unanswered: unansweredCount,
      score: netScore,
      totalMarks: currentTest.totalMarks,
      percentage,
      subjectBreakdown,
      userAnswers,
    };

    setLatestAttempt(attempt);

    // Save attempt to user progress
    const updatedAttempts = [attempt, ...(progress.mockTestAttempts || [])];
    const updatedProgress: UserProgress = {
      ...progress,
      mockTestAttempts: updatedAttempts,
    };
    setProgress(updatedProgress);
    saveUserProgress(updatedProgress);

    // Trigger celebratory confetti if score >= 60%
    if (percentage >= 60) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (err) {}
    }

    setActiveScreen("result");
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // 1. SCREEN: LIST OF MOCK TESTS
  if (activeScreen === "list") {
    const filteredTests = MOCK_TESTS.filter((t) => {
      // Tab filter
      if (testListTab === "vol6_practice") {
        if (!t.id.startsWith("mock_vol6_practice")) return false;
      } else if (testListTab === "pyq") {
        if (!t.id.startsWith("mock_pyq")) return false;
      } else if (testListTab === "mega") {
        if (t.id.startsWith("mock_vol6_practice") || t.id.startsWith("mock_pyq")) return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = t.titleBn.toLowerCase().includes(q) || t.titleEn.toLowerCase().includes(q);
        const matchCat = t.postCategory.toLowerCase().includes(q);
        return matchTitle || matchCat;
      }

      return true;
    });

    const vol6PracticeCount = MOCK_TESTS.filter((t) => t.id.startsWith("mock_vol6_practice")).length;
    const pyqCount = MOCK_TESTS.filter((t) => t.id.startsWith("mock_pyq")).length;
    const megaCount = MOCK_TESTS.length - vol6PracticeCount - pyqCount;

    return (
      <div className="space-y-6 pb-12 animate-in fade-in duration-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-bengali">
              পূর্ণাঙ্গ মক টেস্ট (Full Length Mock Tests)
            </h1>
            <p className="text-xs text-slate-500 font-bengali">
              ভলিউম ৬ প্র্যাকটিস সেট (৩০টি সেট), ২০১৮ অফিশিয়াল প্রশ্নপত্র ও অধ্যায়ভিত্তিক মেগা মক টেস্ট
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full sm:w-72">
            <input
              type="text"
              placeholder="মক টেস্ট খুঁজুন (উদাঃ সেট ১, EA 2018)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 font-bengali focus:outline-none focus:border-emerald-500 shadow-xs"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
          {[
            { id: "all", label: `সব টেস্ট (${MOCK_TESTS.length})` },
            { id: "vol6_practice", label: `ভলিউম ৬ প্র্যাকটিস সেট (${vol6PracticeCount})` },
            { id: "pyq", label: `অফিশিয়াল প্রশ্নপত্র ২০১৮ (${pyqCount})` },
            { id: "mega", label: `কম্বাইন্ড ও স্পেশাল টেস্ট (${megaCount})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setTestListTab(tab.id as any)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold font-bengali transition-colors cursor-pointer ${
                testListTab === tab.id
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {filteredTests.map((test) => {
            const previousAttempts = progress.mockTestAttempts?.filter((a) => a.testId === test.id) || [];
            const bestScore = previousAttempts.length > 0
              ? Math.max(...previousAttempts.map((a) => a.percentage))
              : null;

            return (
              <div
                key={test.id}
                className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 hover:border-emerald-400 shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200 font-bengali">
                      {test.postCategory}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1 font-mono-num font-medium">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{test.durationMinutes} মিনিট</span>
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-bengali leading-snug">
                    {test.titleBn}
                  </h3>
                  <p className="text-xs text-slate-600 font-bengali leading-relaxed line-clamp-2">
                    {test.descriptionBn}
                  </p>

                  <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-200 text-center">
                    <div>
                      <div className="text-xs font-bold text-slate-800 font-mono-num">{test.totalQuestions}</div>
                      <div className="text-[10px] text-slate-500 font-bengali">প্রশ্ন</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-emerald-700 font-mono-num">{test.totalMarks}</div>
                      <div className="text-[10px] text-slate-500 font-bengali">পূর্ণমান</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-rose-600 font-mono-num">-{test.negativeMarkPerWrong}</div>
                      <div className="text-[10px] text-slate-500 font-bengali">নেগেটিভ</div>
                    </div>
                  </div>

                  {bestScore !== null && (
                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-slate-500 font-bengali">আপনার সেরা স্কোর:</span>
                      <span className="font-bold text-emerald-700 font-mono-num">{bestScore}%</span>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => {
                    setCurrentTest(test);
                    setActiveScreen("instructions");
                  }}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all font-bengali cursor-pointer"
                >
                  মক টেস্ট শুরু করুন →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // 2. SCREEN: INSTRUCTIONS
  if (activeScreen === "instructions") {
    return (
      <div className="max-w-2xl mx-auto space-y-6 pb-12 animate-in fade-in duration-200">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-slate-900 font-bengali">{currentTest.titleBn}</h1>
              <p className="text-xs text-slate-500 font-bengali">পরীক্ষার সাধারণ নিয়মাবলি ও নির্দেশিকা</p>
            </div>
          </div>

          <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-800 font-bengali leading-relaxed">
            <div className="font-bold text-slate-900">📌 নির্দেশাবলি:</div>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>মোট প্রশ্ন সংখ্যা: <strong className="text-slate-900 font-mono-num">{currentTest.totalQuestions}টি</strong></li>
              <li>সময়সীমা: <strong className="text-slate-900 font-mono-num">{currentTest.durationMinutes} মিনিট</strong> (টাইমার শেষ হলে স্বয়ংক্রিয় সাবমিট হবে)</li>
              <li>প্রতিটি সঠিক উত্তরের জন্য: <strong className="text-emerald-700 font-mono-num">+১ নম্বর</strong></li>
              <li>প্রতিটি ভুল উত্তরের জন্য: <strong className="text-rose-600 font-mono-num">-{currentTest.negativeMarkPerWrong} নেগেটিভ মার্কিং</strong></li>
              <li>প্রশ্ন প্যালেটে যে কোনো প্রশ্নে সরাসরি যাওয়া যাবে এবং 'Mark for Review' করা যাবে।</li>
            </ul>
          </div>

          <div className="flex items-center justify-between gap-4 pt-2">
            <button
              onClick={() => setActiveScreen("list")}
              className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl font-bengali cursor-pointer"
            >
              ← পেছনে যান
            </button>
            <button
              onClick={() => handleStartExam(currentTest)}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all font-bengali cursor-pointer"
            >
              আমি প্রস্তুত, পরীক্ষা শুরু করুন →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 3. SCREEN: ACTIVE EXAM INTERFACE
  if (activeScreen === "exam") {
    const q = currentTest.questions[currentQuestionIndex];
    const selectedOpt = userAnswers[q.id];
    const isReviewed = markedForReview[q.id];
    const answeredCount = Object.keys(userAnswers).length;
    const isTimeUrgent = timeLeftSeconds <= 300; // last 5 mins

    return (
      <div className="space-y-4 pb-12 animate-in fade-in duration-150">
        {/* Exam Header Sticky Bar */}
        <div className="bg-white/95 border border-slate-200 rounded-2xl p-4 flex items-center justify-between sticky top-16 z-30 shadow-md backdrop-blur-md">
          <div>
            <h2 className="text-sm font-bold text-slate-900 font-bengali line-clamp-1">
              {currentTest.titleBn}
            </h2>
            <span className="text-[11px] text-slate-500 font-mono-num font-medium">
              উত্তর দেওয়া হয়েছে: {answeredCount}/{currentTest.totalQuestions}
            </span>
          </div>

          {/* Countdown Clock */}
          <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-mono text-sm font-bold border ${
            isTimeUrgent
              ? "bg-rose-50 text-rose-700 border-rose-300 animate-pulse"
              : "bg-emerald-50 text-emerald-800 border-emerald-200"
          }`}>
            <Clock className="w-4 h-4 text-emerald-600" />
            <span>{formatTimer(timeLeftSeconds)}</span>
          </div>

          {/* Submit Exam Button */}
          <button
            onClick={() => setShowSubmitModal(true)}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl font-bengali shadow-xs transition-colors cursor-pointer"
          >
            সাবমিট করুন
          </button>
        </div>

        {/* Exam Body Layout: Question Left (2 cols), Palette Right (1 col) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Question Area (2 cols) */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between min-h-[480px] shadow-xs">
            <div className="space-y-4">
              {/* Question Meta */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold font-mono-num bg-slate-100 text-slate-800 px-3 py-1 rounded-lg border border-slate-200">
                    প্রশ্ন {currentQuestionIndex + 1} / {currentTest.totalQuestions}
                  </span>
                  <span className="text-xs font-bold bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200 font-bengali">
                    {q.subjectId === "panchayat" && "পঞ্চায়েত ব্যবস্থা"}
                    {q.subjectId === "bengali" && "বাংলা ভাষা"}
                    {q.subjectId === "english" && "English"}
                    {q.subjectId === "math" && "পাটিগণিত"}
                    {q.subjectId === "gk" && "সাধারণ জ্ঞান"}
                  </span>
                </div>

                <button
                  onClick={() => handleToggleReview(q.id)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold font-bengali transition-colors cursor-pointer ${
                    isReviewed
                      ? "bg-amber-100 text-amber-800 border border-amber-300"
                      : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <Flag className="w-3.5 h-3.5 text-amber-600" />
                  <span>{isReviewed ? "Marked for Review" : "Mark for Review"}</span>
                </button>
              </div>

              {/* Question Statement */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-bengali leading-relaxed">
                {cleanQuestionText(q.questionBn)}
              </h3>

              {/* 4 Options */}
              <div className="space-y-2.5 pt-2">
                {q.options.map((opt, optIdx) => {
                  const isSelected = selectedOpt === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOptionInExam(q.id, optIdx)}
                      className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm font-bengali transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? "bg-emerald-50 border-emerald-500 text-emerald-900 font-bold shadow-xs"
                          : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-lg font-mono font-bold text-xs flex items-center justify-center ${
                          isSelected ? "bg-emerald-600 text-white" : "bg-white text-slate-700 border border-slate-300"
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

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 gap-2">
              <button
                disabled={currentQuestionIndex === 0}
                onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl font-bengali disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>পূর্ববর্তী</span>
              </button>

              {selectedOpt !== undefined && (
                <button
                  onClick={() => handleClearOption(q.id)}
                  className="text-xs text-rose-600 hover:underline font-bengali font-bold cursor-pointer"
                >
                  উত্তর মুছে ফেলুন (Clear)
                </button>
              )}

              <button
                disabled={currentQuestionIndex === currentTest.questions.length - 1}
                onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl font-bengali disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1 shadow-xs"
              >
                <span>পরবর্তী</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Question Palette (1 col) */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs">
            <h4 className="text-xs font-bold text-slate-800 font-bengali uppercase tracking-wider">
              প্রশ্ন প্যালেট (Question Palette)
            </h4>

            {/* Palette Legend */}
            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 font-bengali pb-2 border-b border-slate-100">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-emerald-600" />
                <span>উত্তর দেওয়া ({answeredCount})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-amber-500" />
                <span>রিভিউ ({Object.keys(markedForReview).filter((k) => markedForReview[k]).length})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-slate-100 border border-slate-300" />
                <span>বাকি প্রশ্ন</span>
              </div>
            </div>

            {/* Question Grid Buttons */}
            <div className="grid grid-cols-5 gap-2 max-h-64 overflow-y-auto pr-1">
              {currentTest.questions.map((item, idx) => {
                const isAns = userAnswers[item.id] !== undefined;
                const isRev = markedForReview[item.id];
                const isCur = currentQuestionIndex === idx;

                let colorClass = "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100";
                if (isAns) colorClass = "bg-emerald-600 text-white font-bold border-emerald-700";
                if (isRev) colorClass = "bg-amber-500 text-slate-950 font-bold border-amber-600";
                if (isCur) colorClass += " ring-2 ring-emerald-500";

                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`h-9 rounded-xl border text-xs font-mono font-semibold transition-all cursor-pointer ${colorClass}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setShowSubmitModal(true)}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all font-bengali cursor-pointer mt-4"
            >
              পরীক্ষা সমাপ্ত ও সাবমিট করুন
            </button>
          </div>
        </div>

        {/* Submit Confirmation Modal */}
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-2xl">
              <h3 className="text-lg font-bold text-slate-900 font-bengali">মক টেস্ট সাবমিট নিশ্চিতকরণ</h3>
              <div className="space-y-2 text-xs sm:text-sm text-slate-700 font-bengali bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <p>মোট প্রশ্ন: <strong className="text-slate-900 font-mono-num">{currentTest.totalQuestions}টি</strong></p>
                <p>উত্তর দেওয়া হয়েছে: <strong className="text-emerald-700 font-mono-num">{answeredCount}টি</strong></p>
                <p>উত্তর না দেওয়া বাকি: <strong className="text-rose-600 font-mono-num">{currentTest.totalQuestions - answeredCount}টি</strong></p>
              </div>
              <p className="text-xs text-slate-500 font-bengali">
                আপনি কি নিশ্চিত যে টেস্টটি এখন সাবমিট করতে চান?
              </p>
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl font-bengali cursor-pointer"
                >
                  পরীক্ষায় ফিরুন
                </button>
                <button
                  onClick={handleSubmitTest}
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl font-bengali cursor-pointer"
                >
                  হ্যাঁ, সাবমিট করুন
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // 4. SCREEN: RESULT & DETAILED QUESTION REVIEW
  if (activeScreen === "result" && latestAttempt) {
    const questionsToReview = currentTest.questions.filter((q) => {
      const ans = latestAttempt.userAnswers[q.id];
      if (activeReviewFilter === "correct") return ans === q.correctIndex;
      if (activeReviewFilter === "wrong") return ans !== undefined && ans !== q.correctIndex;
      if (activeReviewFilter === "unanswered") return ans === undefined;
      return true;
    });

    return (
      <div className="space-y-6 pb-16 animate-in fade-in duration-200">
        {/* Scorecard Hero Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 px-3 py-1 rounded-full font-bengali">
                মক টেস্ট ফলাফল ও মূল্যায়ন
              </span>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-bengali mt-2">
                {latestAttempt.testTitle}
              </h1>
            </div>
            <button
              onClick={() => setActiveScreen("list")}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl font-bengali cursor-pointer"
            >
              সব মক টেস্ট দেখুন
            </button>
          </div>

          {/* 4 Score Metric Blocks */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700 font-mono-num">
                {latestAttempt.score}
              </div>
              <div className="text-xs text-slate-500 font-bengali">প্রাপ্ত নম্বর / {latestAttempt.totalMarks}</div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-700 font-mono-num">
                {latestAttempt.percentage}%
              </div>
              <div className="text-xs text-slate-500 font-bengali">শতাংশ স্কোর</div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700 font-mono-num">
                {latestAttempt.correctAnswers}
              </div>
              <div className="text-xs text-slate-500 font-bengali">সঠিক উত্তর</div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-rose-600 font-mono-num">
                {latestAttempt.wrongAnswers}
              </div>
              <div className="text-xs text-slate-500 font-bengali">ভুল উত্তর (-{Number((latestAttempt.wrongAnswers * 0.25).toFixed(2))})</div>
            </div>
          </div>
        </div>

        {/* Question Solutions & Explanations Review */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-bengali">
              প্রশ্নোত্তর বিশ্লেষণ ও সমাধান (Review & Solutions)
            </h2>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-200 shadow-xs">
              {[
                { id: "all", label: "সব প্রশ্ন" },
                { id: "correct", label: `সঠিক (${latestAttempt.correctAnswers})` },
                { id: "wrong", label: `ভুল (${latestAttempt.wrongAnswers})` },
                { id: "unanswered", label: `উত্তরহীন (${latestAttempt.unanswered})` },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveReviewFilter(f.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold font-bengali transition-colors cursor-pointer ${
                    activeReviewFilter === f.id
                      ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {questionsToReview.map((q, idx) => {
              const userAns = latestAttempt.userAnswers[q.id];
              const isCorrect = userAns === q.correctIndex;
              const isUnanswered = userAns === undefined;

              return (
                <div
                  key={q.id}
                  className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-mono-num text-slate-500">
                      প্রশ্ন #{idx + 1}
                    </span>
                    <span
                      className={`text-xs font-bold font-bengali px-3 py-1 rounded-full border ${
                        isCorrect
                          ? "bg-emerald-100 text-emerald-800 border-emerald-300"
                          : isUnanswered
                          ? "bg-slate-100 text-slate-600 border-slate-200"
                          : "bg-rose-100 text-rose-800 border-rose-300"
                      }`}
                    >
                      {isCorrect ? "✓ সঠিক উত্তর (+১)" : isUnanswered ? "উত্তর দেননি (০)" : "✗ ভুল উত্তর (-০.২৫)"}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 font-bengali">
                    {cleanQuestionText(q.questionBn)}
                  </h3>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {q.options.map((opt, optIdx) => {
                      const isOptionCorrect = optIdx === q.correctIndex;
                      const isOptionUserSelected = userAns === optIdx;

                      let cls = "bg-slate-50 border-slate-200 text-slate-700";
                      if (isOptionCorrect) {
                        cls = "bg-emerald-50 border-emerald-400 text-emerald-900 font-bold";
                      } else if (isOptionUserSelected && !isOptionCorrect) {
                        cls = "bg-rose-50 border-rose-300 text-rose-900 font-semibold";
                      }

                      return (
                        <div
                          key={optIdx}
                          className={`p-3 rounded-xl border text-xs sm:text-sm font-bengali flex items-center justify-between ${cls}`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold">{String.fromCharCode(65 + optIdx)}.</span>
                            <span>{opt}</span>
                          </div>
                          {isOptionCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                          {isOptionUserSelected && !isOptionCorrect && <XCircle className="w-4 h-4 text-rose-600" />}
                        </div>
                      );
                    })}
                  </div>

                  {/* Solution Explanation */}
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs sm:text-sm text-slate-800 font-bengali space-y-1">
                    <span className="font-bold text-emerald-900 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      <span>ব্যাখ্যা (Detailed Explanation):</span>
                    </span>
                    <p className="text-slate-700 leading-relaxed pt-0.5">{q.explanationBn}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return null;
};
