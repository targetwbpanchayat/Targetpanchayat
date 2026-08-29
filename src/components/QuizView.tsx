import React, { useState, useEffect } from "react";
import {
  Zap,
  Clock,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  BookOpen,
  Layers,
  ChevronRight,
  HelpCircle,
  Play,
} from "lucide-react";
import confetti from "canvas-confetti";
import { MockTestAttempt, Question, UserProgress } from "../types";
import {
  generateSpeedQuizAllSubjects,
  generateSpeedQuizSubjectWise,
  VOLUME_CATALOGUE,
  VolumeMetadata,
  cleanQuestion,
  cleanQuestionText,
} from "../utils/testGenerator";
import { saveUserProgress } from "../utils/storage";

interface QuizViewProps {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
}

export const QuizView: React.FC<QuizViewProps> = ({ progress, setProgress }) => {
  // Navigation tabs: 'all_subjects' | 'subject_wise'
  const [activeTab, setActiveTab] = useState<"all_subjects" | "subject_wise">("all_subjects");

  // Subject-wise selection state
  const [selectedVolume, setSelectedVolume] = useState<VolumeMetadata>(VOLUME_CATALOGUE[0]);
  const [selectedChapterId, setSelectedChapterId] = useState<string>(VOLUME_CATALOGUE[0].chapters[0].id);
  const [selectedSubChapterId, setSelectedSubChapterId] = useState<string | undefined>(undefined);

  // Active quiz state
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizTitle, setQuizTitle] = useState("সকল বিষয় স্পিড কুইজ");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userSelections, setUserSelections] = useState<Record<number, number>>({});
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes (120s)

  // Timer countdown
  useEffect(() => {
    let timer: any = null;
    if (isQuizActive && !isFinished && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleFinishQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isQuizActive, isFinished, timeLeft]);

  // Start 'All Subjects' Speed Quiz
  const handleStartAllSubjectsQuiz = () => {
    const qs = generateSpeedQuizAllSubjects().map(cleanQuestion);
    setQuestions(qs);
    setQuizTitle("সকল বিষয় স্পিড কুইজ (All 5 Volumes Mixed)");
    setCurrentQIndex(0);
    setUserSelections({});
    setScore(0);
    setIsFinished(false);
    setTimeLeft(120);
    setIsQuizActive(true);
  };

  // Start 'Subject-wise' Speed Quiz
  const handleStartSubjectWiseQuiz = () => {
    const result = generateSpeedQuizSubjectWise(
      selectedVolume.id,
      selectedChapterId,
      selectedSubChapterId
    );
    setQuestions(result.questions.map(cleanQuestion));
    setQuizTitle(result.title);
    setCurrentQIndex(0);
    setUserSelections({});
    setScore(0);
    setIsFinished(false);
    setTimeLeft(120);
    setIsQuizActive(true);
  };

  const handleSelectOption = (optIdx: number) => {
    if (userSelections[currentQIndex] !== undefined) return;

    const q = questions[currentQIndex];
    const isCorrect = optIdx === q.correctIndex;

    setUserSelections((prev) => ({ ...prev, [currentQIndex]: optIdx }));
    if (isCorrect) setScore((prev) => prev + 1);

    // Smooth auto advance after 500ms
    setTimeout(() => {
      if (currentQIndex < questions.length - 1) {
        setCurrentQIndex((prev) => prev + 1);
      } else {
        handleFinishQuiz();
      }
    }, 500);
  };

  const handleFinishQuiz = () => {
    setIsFinished(true);
    try {
      confetti({ particleCount: 75, spread: 60, origin: { y: 0.6 } });
    } catch (e) {}

    // Save attempt to progress
    const totalQ = questions.length;
    const attemptedCount = Object.keys(userSelections).length;
    const correctCount = score;
    const wrongCount = attemptedCount - correctCount;
    const unansweredCount = totalQ - attemptedCount;

    const userAnsMap: Record<string, number> = {};
    questions.forEach((q, idx) => {
      userAnsMap[q.id || `q_${idx}`] = userSelections[idx] !== undefined ? userSelections[idx] : -1;
    });

    const attempt: MockTestAttempt = {
      id: `attempt_quiz_${Date.now()}`,
      testId: `quiz_${Date.now()}`,
      testTitle: quizTitle,
      date: new Date().toISOString(),
      timeSpentSeconds: 120 - timeLeft,
      totalQuestions: totalQ,
      attemptedQuestions: attemptedCount,
      correctAnswers: correctCount,
      wrongAnswers: wrongCount,
      unanswered: unansweredCount,
      score: correctCount,
      totalMarks: totalQ,
      percentage: Math.round((correctCount / totalQ) * 100),
      subjectBreakdown: {
        panchayat: { total: 0, correct: 0, wrong: 0, unanswered: 0, score: 0 },
        bengali: { total: 0, correct: 0, wrong: 0, unanswered: 0, score: 0 },
        english: { total: 0, correct: 0, wrong: 0, unanswered: 0, score: 0 },
        math: { total: 0, correct: 0, wrong: 0, unanswered: 0, score: 0 },
        gk: { total: 0, correct: 0, wrong: 0, unanswered: 0, score: 0 },
      },
      userAnswers: userAnsMap,
      questions: questions.map(cleanQuestion),
    };

    setProgress((prev) => {
      const updatedAttempts = [...(prev.mockTestAttempts || []), attempt];
      const updated = { ...prev, mockTestAttempts: updatedAttempts };
      saveUserProgress(updated);
      return updated;
    });
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // 1. ACTIVE QUIZ PLAYER (During test or after finished)
  if (isQuizActive) {
    if (isFinished) {
      // Results & Solutions Review
      return (
        <div className="max-w-3xl mx-auto space-y-6 pb-12 animate-in fade-in">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs text-center">
            <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
              <Zap className="w-8 h-8 fill-amber-500" />
            </div>

            <div>
              <span className="text-xs font-bold text-amber-700 font-bengali">কুইজ সমাপ্ত</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-bengali mt-1">
                {quizTitle}
              </h2>
              <p className="text-xs text-slate-500 font-bengali mt-1">
                সময় সমাপ্ত বা সমস্ত প্রশ্নের উত্তর দেওয়া হয়েছে
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200">
                <span className="text-xs text-amber-800 font-bengali">মোট স্কোর</span>
                <div className="text-2xl font-black text-amber-800 font-mono-num mt-0.5">
                  {score} / 10
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200">
                <span className="text-xs text-emerald-800 font-bengali">সঠিক উত্তর</span>
                <div className="text-2xl font-black text-emerald-800 font-mono-num mt-0.5">
                  {score}
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200">
                <span className="text-xs text-rose-800 font-bengali">ভুল উত্তর</span>
                <div className="text-2xl font-black text-rose-800 font-mono-num mt-0.5">
                  {Object.keys(userSelections).length - score}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  if (activeTab === "all_subjects") handleStartAllSubjectsQuiz();
                  else handleStartSubjectWiseQuiz();
                }}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs font-bengali flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>নতুন ১০টি প্রশ্নে আবার দিন</span>
              </button>
              <button
                onClick={() => setIsQuizActive(false)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold font-bengali cursor-pointer"
              >
                কুইজ মেনুতে ফিরুন
              </button>
            </div>
          </div>

          {/* Solutions review list */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 font-bengali">
              ১০টি প্রশ্নের বিশদ সমাধান (Explanations):
            </h3>
            {questions.map((q, idx) => {
              const userAns = userSelections[idx];
              const isCorrect = userAns === q.correctIndex;
              const isWrong = userAns !== undefined && !isCorrect;

              return (
                <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 space-y-3 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-mono-num">
                      প্রশ্ন #{idx + 1}
                    </span>
                    {isCorrect && (
                      <span className="text-xs font-bold text-emerald-700 font-bengali flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> সঠিক (+১)
                      </span>
                    )}
                    {isWrong && (
                      <span className="text-xs font-bold text-rose-700 font-bengali flex items-center gap-1">
                        <XCircle className="w-3.5 h-3.5" /> ভুল (০)
                      </span>
                    )}
                    {userAns === undefined && (
                      <span className="text-xs font-bold text-slate-400 font-bengali">
                        উত্তর দেওয়া হয়নি
                      </span>
                    )}
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-slate-900 font-bengali leading-relaxed">
                    {cleanQuestionText(q.questionBn)}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = userAns === optIdx;
                      const isRight = q.correctIndex === optIdx;

                      let c = "bg-slate-50 border-slate-200 text-slate-700";
                      if (isRight) c = "bg-emerald-50 border-emerald-400 text-emerald-950 font-bold shadow-xs";
                      else if (isSelected && !isRight) c = "bg-rose-50 border-rose-300 text-rose-950 line-through";

                      return (
                        <div key={optIdx} className={`p-2.5 rounded-xl border text-xs font-bengali flex items-center justify-between ${c}`}>
                          <span>{opt}</span>
                          {isRight && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-slate-700 font-bengali">
                    <span className="font-bold text-amber-900">সমাধান: </span>
                    {q.explanationBn}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // Active in-progress question
    const q = questions[currentQIndex];
    if (!q) return null;
    const selectedOpt = userSelections[currentQIndex];

    return (
      <div className="max-w-2xl mx-auto space-y-6 pb-12 animate-in fade-in">
        {/* Floating Top Status */}
        <div className="bg-white border border-slate-200 rounded-3xl p-4 sm:p-5 flex items-center justify-between shadow-md">
          <div>
            <span className="text-[11px] font-bold text-amber-700 font-bengali uppercase block">
              {quizTitle}
            </span>
            <span className="text-sm font-bold text-slate-900 font-bengali">
              প্রশ্ন <span className="font-mono-num text-amber-700">{currentQIndex + 1}</span> / 10
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-bold font-mono-num ${
              timeLeft <= 20 ? "bg-rose-50 border-rose-300 text-rose-700 animate-pulse" : "bg-amber-50 border-amber-200 text-amber-900"
            }`}>
              <Clock className="w-4 h-4 text-amber-600" />
              <span>{formatTimer(timeLeft)}</span>
            </div>

            <button
              onClick={handleFinishQuiz}
              className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold font-bengali cursor-pointer"
            >
              শেষ করুন
            </button>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs min-h-[360px] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400 font-bengali">
              <span>কোনো নেগেটিভ মার্কিং নেই (No Negative Marks)</span>
              <span className="font-mono-num font-bold text-emerald-700">+১ নম্বর</span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-bengali leading-relaxed">
              {cleanQuestionText(q.questionBn)}
            </h3>

            <div className="space-y-3 pt-2">
              {q.options.map((opt, optIdx) => {
                const isSelected = selectedOpt === optIdx;
                const isAnswered = selectedOpt !== undefined;
                const isCorrect = isAnswered && optIdx === q.correctIndex;
                const isWrong = isAnswered && isSelected && !isCorrect;

                let optClass = "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800";
                if (isCorrect) optClass = "bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-500/20";
                else if (isWrong) optClass = "bg-rose-50 border-rose-400 text-rose-950 font-bold";

                return (
                  <button
                    key={optIdx}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm font-bengali flex items-center justify-between transition-all cursor-pointer ${optClass}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-xl font-mono font-bold text-xs flex items-center justify-center border bg-white text-slate-700 border-slate-300">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span>{opt}</span>
                    </div>
                    {isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                    {isWrong && <XCircle className="w-4 h-4 text-rose-600" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-slate-100">
            <span className="text-xs text-slate-400 font-bengali">
              অপশনে ক্লিক করলেই সাথে সাথে উত্তর যাচাই হবে
            </span>

            <div className="flex items-center gap-2">
              <button
                disabled={currentQIndex === 0}
                onClick={() => setCurrentQIndex((prev) => prev - 1)}
                className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bengali disabled:opacity-30 hover:bg-slate-50 cursor-pointer"
              >
                আগের প্রশ্ন
              </button>
              <button
                disabled={currentQIndex === questions.length - 1}
                onClick={() => setCurrentQIndex((prev) => prev + 1)}
                className="px-4 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold font-bengali disabled:opacity-30 hover:bg-amber-600 cursor-pointer"
              >
                পরবর্তী
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. MAIN HUB SCREEN (With 2 Tabs: 'All Subjects' & 'Subject-wise')
  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-300/30 text-amber-200 text-xs font-bold font-bengali">
            <Zap className="w-3.5 h-3.5" />
            <span>দ্রুত ক্ষিপ্রতা ও নির্ভুলতা পরীক্ষা</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black font-bengali tracking-tight leading-tight">
            স্পিড কুইজ (Rapid Speed Quiz - 10 Questions)
          </h1>
          <p className="text-slate-200 text-xs sm:text-sm font-bengali leading-relaxed">
            ১০টি বাছাই করা প্রশ্নের জন্য মাত্র ২ মিনিট (১২০ সেকেন্ড) সময়। কোনো নেগেটিভ মার্কিং নেই। আপনার সুবিধামত 'সকল বিষয়' থেকে র্যান্ডম অথবা ৫টি ভলিউমের নির্দিষ্ট অধ্যায় বেছে নিয়ে কুইজ শুরু করুন।
          </p>
        </div>
      </div>

      {/* Two Tab Buttons */}
      <div className="flex items-center gap-3 bg-slate-100 p-1.5 rounded-2xl w-full sm:w-fit">
        <button
          onClick={() => setActiveTab("all_subjects")}
          className={`flex-1 sm:flex-initial px-6 py-3 rounded-xl text-xs sm:text-sm font-bold font-bengali transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === "all_subjects"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>১. সকল বিষয় (All Subjects - 5 Volumes)</span>
        </button>

        <button
          onClick={() => setActiveTab("subject_wise")}
          className={`flex-1 sm:flex-initial px-6 py-3 rounded-xl text-xs sm:text-sm font-bold font-bengali transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === "subject_wise"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <Layers className="w-4 h-4 text-emerald-600" />
          <span>২. বিষয়ভিত্তিক ও অধ্যায়ভিত্তিক (Subject & Chapter Wise)</span>
        </button>
      </div>

      {/* TAB 1: ALL SUBJECTS */}
      {activeTab === "all_subjects" && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs animate-in fade-in">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-slate-900 font-bengali flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <span>সকল ৫টি ভলিউম থেকে র্যান্ডম ১০টি প্রশ্ন (All Subjects Speed Quiz)</span>
            </h3>
            <p className="text-xs text-slate-500 font-bengali leading-relaxed">
              প্রতিবার ক্লিক করার সাথে সাথে ৫টি ভলিউম (বাংলা ২, ইংরেজি ২, গণিত ২, পঞ্চায়েত ২, জিকে ২) থেকে সম্পূর্ণ নতুন ১০টি প্রশ্ন স্বয়ংক্রিয়ভাবে নির্বাচন করে ২ মিনিটের কুইজ তৈরি হবে।
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-center">
              <span className="text-xs text-amber-800 font-bengali">প্রশ্ন সংখ্যা</span>
              <div className="text-xl font-bold text-amber-900 font-mono-num mt-0.5">১০ টি</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs text-slate-500 font-bengali">সময়সীমা</span>
              <div className="text-xl font-bold text-amber-700 font-mono-num mt-0.5">২ মিনিট (১২০ সে.)</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
              <span className="text-xs text-emerald-800 font-bengali">নেগেটিভ মার্কিং</span>
              <div className="text-xl font-bold text-emerald-800 font-bengali mt-0.5">নেই (০)</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs text-slate-500 font-bengali">উৎস</span>
              <div className="text-xs font-bold text-slate-800 font-bengali mt-1.5">ভলিউম ১-৫ মিক্সড</div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={handleStartAllSubjectsQuiz}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm font-bengali flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-all hover:scale-102 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>১০টি প্রশ্নের অল-সাবজেক্ট স্পিড কুইজ শুরু করুন</span>
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: SUBJECT-WISE & CHAPTER-WISE */}
      {activeTab === "subject_wise" && (
        <div className="space-y-6 animate-in fade-in">
          {/* Step 1: Select Volume */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 font-bengali flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-mono text-xs flex items-center justify-center font-bold">1</span>
                <span>প্রথমে ভলিউম নির্বাচন করুন (Select Volume):</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {VOLUME_CATALOGUE.map((vol) => {
                const isSelected = selectedVolume.id === vol.id;
                return (
                  <button
                    key={vol.id}
                    onClick={() => {
                      setSelectedVolume(vol);
                      setSelectedChapterId(vol.chapters[0].id);
                      setSelectedSubChapterId(undefined);
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? `${vol.bgColor} ${vol.borderColor} ring-2 ring-emerald-500/20 shadow-xs`
                        : "bg-white hover:bg-slate-50 border-slate-200"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${vol.bgColor} ${vol.color} border ${vol.borderColor} font-bengali`}>
                        {vol.totalChaptersCount} টি অধ্যায়
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 font-bengali mt-2">
                      {vol.nameBn}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                      {vol.nameEn}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Select Chapter */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 font-bengali flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-mono text-xs flex items-center justify-center font-bold">2</span>
                <span>{selectedVolume.nameBn}-এর অধ্যায় নির্বাচন করুন:</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[360px] overflow-y-auto pr-1">
              {selectedVolume.chapters.map((ch) => {
                const isSelected = selectedChapterId === ch.id;
                return (
                  <button
                    key={ch.id}
                    onClick={() => {
                      setSelectedChapterId(ch.id);
                      setSelectedSubChapterId(undefined);
                    }}
                    className={`p-3.5 rounded-2xl border text-left text-xs font-bengali transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? "bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-500/20 shadow-xs"
                        : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800"
                    }`}
                  >
                    <span>{ch.titleBn}</span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>

            {/* Launch Subject-Wise Quiz Button */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
              <div className="text-xs text-slate-500 font-bengali">
                নির্বাচিত অধ্যায় থেকে ১০টি প্রশ্ন • সময় ২ মিনিট • নেগেটিভ মার্কিং নেই
              </div>

              <button
                onClick={handleStartSubjectWiseQuiz}
                className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm font-bengali flex items-center gap-2 shadow-md shadow-emerald-600/20 cursor-pointer"
              >
                <Play className="w-4 h-4" />
                <span>এই অধ্যায়ের স্পিড কুইজ শুরু করুন</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
