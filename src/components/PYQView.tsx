import React, { useState, useEffect } from "react";
import {
  FileText,
  Calendar,
  CheckCircle2,
  XCircle,
  Clock,
  Sparkles,
  Download,
  BookOpen,
  Play,
  RotateCcw,
  Send,
  Flag,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Eye,
  EyeOff,
} from "lucide-react";
import confetti from "canvas-confetti";
import { PYQ_PAPERS } from "../data/pyqData";
import { MockTestAttempt, PYQPaper, Question, SubjectId, UserProgress } from "../types";
import { saveUserProgress } from "../utils/storage";
import { cleanQuestionText } from "../utils/testGenerator";

interface PYQViewProps {
  progress?: UserProgress;
  setProgress?: React.Dispatch<React.SetStateAction<UserProgress>>;
}

export const PYQView: React.FC<PYQViewProps> = ({ progress, setProgress }) => {
  // Modes: 'browse' | 'exam' | 'result'
  const [viewMode, setViewMode] = useState<"browse" | "exam" | "result">("browse");
  const [selectedPaperId, setSelectedPaperId] = useState<string>("pyq_2018_ea");
  const [expandedSolutions, setExpandedSolutions] = useState<Record<string, boolean>>({});
  const [showAllSolutions, setShowAllSolutions] = useState(false);

  // Active exam state when taking PYQ as test
  const [currentExamPaper, setCurrentExamPaper] = useState<PYQPaper>(PYQ_PAPERS[0]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(90 * 60);
  const [timeSpentSeconds, setTimeSpentSeconds] = useState(0);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [latestAttempt, setLatestAttempt] = useState<MockTestAttempt | null>(null);

  // Timer in exam mode
  useEffect(() => {
    let timer: any = null;
    if (viewMode === "exam") {
      timer = setInterval(() => {
        setTimeLeftSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmitExam();
            return 0;
          }
          return prev - 1;
        });
        setTimeSpentSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [viewMode, userAnswers]);

  const toggleSolution = (id: string) => {
    setExpandedSolutions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleStartExam = (paper: PYQPaper) => {
    setCurrentExamPaper(paper);
    setCurrentQIndex(0);
    setUserAnswers({});
    setMarkedForReview({});
    setTimeLeftSeconds(paper.durationMinutes * 60);
    setTimeSpentSeconds(0);
    setViewMode("exam");
  };

  const handleSubmitExam = () => {
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

    currentExamPaper.questions.forEach((q) => {
      const sub = q.subjectId;
      if (!subjectBreakdown[sub]) {
        subjectBreakdown[sub] = { total: 0, correct: 0, wrong: 0, unanswered: 0, score: 0 };
      }
      subjectBreakdown[sub].total += 1;

      const ansIdx = userAnswers[q.id];
      if (ansIdx === undefined) {
        unansweredCount += 1;
        subjectBreakdown[sub].unanswered += 1;
      } else if (ansIdx === q.correctIndex) {
        correctCount += 1;
        subjectBreakdown[sub].correct += 1;
        subjectBreakdown[sub].score += 1;
      } else {
        wrongCount += 1;
        subjectBreakdown[sub].wrong += 1;
        subjectBreakdown[sub].score -= 0.25;
      }
    });

    const netScore = Math.max(0, Number((correctCount * 1 - wrongCount * 0.25).toFixed(2)));
    const percentage = Math.round((netScore / currentExamPaper.totalMarks) * 100);

    const attempt: MockTestAttempt = {
      id: `pyq_attempt_${Date.now()}`,
      testId: currentExamPaper.id,
      testTitle: `${currentExamPaper.year} ${currentExamPaper.postNameBn}`,
      date: new Date().toISOString(),
      timeSpentSeconds,
      totalQuestions: currentExamPaper.questionsCount,
      attemptedQuestions: correctCount + wrongCount,
      correctAnswers: correctCount,
      wrongAnswers: wrongCount,
      unanswered: unansweredCount,
      score: netScore,
      totalMarks: currentExamPaper.totalMarks,
      percentage,
      subjectBreakdown,
      userAnswers,
    };

    setLatestAttempt(attempt);

    if (setProgress) {
      setProgress((prev) => {
        const updatedAttempts = [...(prev.mockTestAttempts || []), attempt];
        const updated = { ...prev, mockTestAttempts: updatedAttempts };
        saveUserProgress(updated);
        return updated;
      });
    }

    setViewMode("result");
    try {
      if (percentage >= 50) {
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
      }
    } catch (e) {}
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const activePaper = PYQ_PAPERS.find((p) => p.id === selectedPaperId) || PYQ_PAPERS[0];

  // 1. EXAM MODE
  if (viewMode === "exam") {
    const q = currentExamPaper.questions[currentQIndex];
    const isMarked = markedForReview[q?.id];
    const selectedOpt = userAnswers[q?.id];
    const answeredCount = Object.keys(userAnswers).length;
    const reviewCount = Object.values(markedForReview).filter(Boolean).length;

    return (
      <div className="space-y-4 pb-12 animate-in fade-in">
        <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-3 sm:p-4 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-xs sm:text-sm font-bold text-slate-800 font-bengali">
              প্রশ্ন <span className="font-mono-num text-purple-700 font-bold">{currentQIndex + 1}</span> / {currentExamPaper.questionsCount}
            </span>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 text-xs font-bengali border border-purple-200">
              {currentExamPaper.year} {currentExamPaper.postNameBn}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border bg-slate-100 border-slate-300 text-slate-800 text-xs sm:text-sm font-bold font-mono-num">
              <Clock className="w-4 h-4 text-purple-600" />
              <span>{formatTimer(timeLeftSeconds)}</span>
            </div>

            <button
              onClick={() => setShowSubmitModal(true)}
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold font-bengali shadow-sm cursor-pointer"
            >
              সাবমিট
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs min-h-[380px] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono-num pb-2 border-b border-slate-100">
                  <span>WB GP {q.examYear || "2018"}</span>
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
                        onClick={() => setUserAnswers((prev) => ({ ...prev, [q.id]: optIdx }))}
                        className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm font-bengali flex items-center justify-between transition-all cursor-pointer ${
                          isSelected
                            ? "bg-purple-50 border-purple-500 text-purple-950 font-bold ring-2 ring-purple-500/20 shadow-xs"
                            : "bg-slate-50/70 hover:bg-slate-100 border-slate-200 text-slate-800"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-7 h-7 rounded-xl font-mono font-bold text-xs flex items-center justify-center border ${
                            isSelected ? "bg-purple-600 text-white border-purple-600" : "bg-white text-slate-600 border-slate-300"
                          }`}>
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{opt}</span>
                        </div>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-purple-600" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setMarkedForReview((prev) => ({ ...prev, [q.id]: !prev[q.id] }))}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold font-bengali flex items-center gap-1.5 border transition-colors cursor-pointer ${
                    isMarked ? "bg-amber-100 border-amber-300 text-amber-900" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <Flag className="w-3.5 h-3.5" />
                  <span>{isMarked ? "মার্ক করা আছে" : "রিভিউ মার্ক"}</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    disabled={currentQIndex === 0}
                    onClick={() => setCurrentQIndex((prev) => prev - 1)}
                    className="p-2.5 rounded-xl border border-slate-200 text-slate-600 disabled:opacity-30 hover:bg-slate-50 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    disabled={currentQIndex === currentExamPaper.questions.length - 1}
                    onClick={() => setCurrentQIndex((prev) => prev + 1)}
                    className="px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold font-bengali disabled:opacity-30 hover:bg-purple-700 flex items-center gap-1 cursor-pointer"
                  >
                    <span>পরবর্তী</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-5 space-y-4 shadow-xs h-fit">
            <h4 className="text-xs font-bold text-slate-900 font-bengali uppercase">প্রশ্ন প্যালেট</h4>
            <div className="grid grid-cols-5 gap-2 max-h-[340px] overflow-y-auto pr-1">
              {currentExamPaper.questions.map((item, idx) => {
                const isAns = userAnswers[item.id] !== undefined;
                const isRev = markedForReview[item.id];
                const isCur = currentQIndex === idx;

                let bgClass = "bg-slate-100 text-slate-700 hover:bg-slate-200";
                if (isAns) bgClass = "bg-purple-600 text-white font-bold";
                else if (isRev) bgClass = "bg-amber-500 text-white font-bold";

                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentQIndex(idx)}
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

        {showSubmitModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-5 shadow-2xl">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-bengali">পরীক্ষা জমা দিতে চান?</h3>
              <p className="text-xs text-slate-500 font-bengali">
                উত্তর দিয়েছেন {answeredCount} টি, বাকি {currentExamPaper.questionsCount - answeredCount} টি।
              </p>
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold font-bengali hover:bg-slate-50 cursor-pointer"
                >
                  ফিরে যান
                </button>
                <button
                  onClick={handleSubmitExam}
                  className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold font-bengali shadow-md cursor-pointer"
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

  // 2. RESULT MODE
  if (viewMode === "result" && latestAttempt) {
    return (
      <div className="space-y-6 pb-12 animate-in fade-in">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold text-purple-700 font-bengali">অফিশিয়াল প্রশ্নপত্র ফলাফল</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-bengali mt-1">
                {latestAttempt.testTitle}
              </h2>
            </div>
            <button
              onClick={() => setViewMode("browse")}
              className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold font-bengali cursor-pointer"
            >
              প্রশ্নপত্রে ফিরে যান
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-center">
              <span className="text-xs text-purple-800 font-bengali font-bold">প্রাপ্ত নম্বর</span>
              <div className="text-2xl font-black text-purple-800 font-mono-num mt-1">
                {latestAttempt.score} / {latestAttempt.totalMarks}
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs text-slate-600 font-bengali">শতাংশ</span>
              <div className="text-2xl font-black text-slate-900 font-mono-num mt-1">{latestAttempt.percentage}%</div>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
              <span className="text-xs text-emerald-800 font-bengali">সঠিক</span>
              <div className="text-2xl font-bold text-emerald-800 font-mono-num mt-1">{latestAttempt.correctAnswers}</div>
            </div>
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-center">
              <span className="text-xs text-rose-800 font-bengali">ভুল</span>
              <div className="text-2xl font-bold text-rose-800 font-mono-num mt-1">{latestAttempt.wrongAnswers}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. BROWSE & STUDY MODE
  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold font-bengali">
            <FileText className="w-3.5 h-3.5" />
            <span>অফিশিয়াল পূর্ববর্তী বছরের প্রশ্নপত্র (২০১৮)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black font-bengali tracking-tight leading-tight">
            বিগত বছরের প্রশ্নপত্র ও সমাধান (PYQ Bank)
          </h1>
          <p className="text-slate-200 text-xs sm:text-sm font-bengali leading-relaxed">
            পশ্চিমবঙ্গ পঞ্চায়েত রিক্রুটমেন্ট পরীক্ষার আসল প্রশ্নপত্র। প্রতিটি প্রশ্নের সঙ্গে রয়েছে বিস্তারিত বাংলা ব্যাখ্যা। আপনি চাইলে সরাসরি টাইমড টেস্ট হিসেবেও পরীক্ষা দিতে পারেন।
          </p>
        </div>
      </div>

      {/* Select Paper Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {PYQ_PAPERS.map((paper) => {
          const isSelected = selectedPaperId === paper.id;
          return (
            <button
              key={paper.id}
              onClick={() => setSelectedPaperId(paper.id)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                isSelected
                  ? "bg-purple-50 border-purple-500 ring-2 ring-purple-500/20 shadow-xs"
                  : "bg-white hover:bg-slate-50 border-slate-200"
              }`}
            >
              <div className="space-y-1">
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-mono-num">
                  {paper.year} Exam
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-bengali line-clamp-2">
                  {paper.postNameBn}
                </h4>
              </div>
              <div className="text-[11px] text-slate-500 font-mono-num pt-1 border-t border-slate-100">
                {paper.questionsCount} Qs • {paper.totalMarks} Marks
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Paper Controls Bar */}
      <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-xs font-bold text-purple-700 font-bengali uppercase">নির্বাচিত প্রশ্নপত্র</span>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-bengali">
            {activePaper.year} - {activePaper.postNameBn} ({activePaper.questionsCount}টি প্রশ্ন)
          </h2>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => handleStartExam(activePaper)}
            className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold font-bengali flex items-center gap-1.5 shadow-md shadow-purple-600/20 cursor-pointer"
          >
            <Play className="w-4 h-4" />
            <span>মক টেস্ট দিন (Take Exam)</span>
          </button>

          <button
            onClick={() => setShowAllSolutions((prev) => !prev)}
            className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold font-bengali hover:bg-slate-50 flex items-center gap-1.5 cursor-pointer"
          >
            {showAllSolutions ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{showAllSolutions ? "সমাধান লুকান" : "সব সমাধান দেখুন"}</span>
          </button>

          <button
            onClick={() => window.print()}
            className="px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold font-bengali hover:bg-slate-50 flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>PDF</span>
          </button>
        </div>
      </div>

      {/* Questions list with expandable Bengali solutions */}
      <div className="space-y-4">
        {activePaper.questions.map((q, idx) => {
          const isExpanded = showAllSolutions || expandedSolutions[q.id];

          return (
            <div key={q.id} className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                    Q#{idx + 1}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-purple-50 text-purple-800 border border-purple-200 font-bengali">
                    {q.subjectId === "bengali" && "বাংলা"}
                    {q.subjectId === "english" && "English"}
                    {q.subjectId === "math" && "গণিত"}
                    {q.subjectId === "panchayat" && "পঞ্চায়েত"}
                    {q.subjectId === "gk" && "সাধারণ জ্ঞান"}
                  </span>
                </div>

                <button
                  onClick={() => toggleSolution(q.id)}
                  className="text-xs font-bold text-purple-700 hover:text-purple-900 font-bengali cursor-pointer"
                >
                  {isExpanded ? "সমাধান লুকান" : "সঠিক উত্তর ও সমাধান দেখুন"}
                </button>
              </div>

              <h3 className="text-base font-bold text-slate-900 font-bengali leading-relaxed">
                {cleanQuestionText(q.questionBn)}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {q.options.map((opt, optIdx) => {
                  const isRight = q.correctIndex === optIdx;
                  return (
                    <div
                      key={optIdx}
                      className={`p-3 rounded-2xl border text-xs sm:text-sm font-bengali flex items-center justify-between ${
                        isExpanded && isRight
                          ? "bg-emerald-50 border-emerald-400 text-emerald-950 font-bold shadow-xs"
                          : "bg-slate-50 border-slate-200 text-slate-800"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-lg bg-white border border-slate-300 font-mono font-bold text-xs flex items-center justify-center text-slate-700">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{opt}</span>
                      </div>
                      {isExpanded && isRight && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                    </div>
                  );
                })}
              </div>

              {isExpanded && (
                <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200 text-xs sm:text-sm text-slate-800 font-bengali space-y-1 animate-in fade-in">
                  <div className="font-bold text-purple-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                    <span>বিশদ বাংলা সমাধান:</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed pt-0.5">{q.explanationBn}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
