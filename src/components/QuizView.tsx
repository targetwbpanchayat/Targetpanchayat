import React, { useState, useEffect } from "react";
import {
  Zap,
  Clock,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Award,
} from "lucide-react";
import confetti from "canvas-confetti";
import { SubjectId, Question, UserProgress } from "../types";
import { SUBJECTS } from "../data/subjects";
import { QUESTION_SETS } from "../data/questionSets";
import { saveUserProgress } from "../utils/storage";

interface QuizViewProps {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
}

export const QuizView: React.FC<QuizViewProps> = ({ progress, setProgress }) => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectId>("panchayat");
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userSelections, setUserSelections] = useState<Record<number, number>>({});
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes for speed quiz

  const quizQuestions = QUESTION_SETS.filter((q) => q.subjectId === selectedSubject).slice(0, 10);

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

  const handleStartQuiz = () => {
    setIsQuizActive(true);
    setCurrentQIndex(0);
    setUserSelections({});
    setScore(0);
    setIsFinished(false);
    setTimeLeft(120);
  };

  const handleSelectOption = (optIdx: number) => {
    if (userSelections[currentQIndex] !== undefined) return;

    const q = quizQuestions[currentQIndex];
    const isCorrect = optIdx === q.correctIndex;

    setUserSelections((prev) => ({ ...prev, [currentQIndex]: optIdx }));
    if (isCorrect) setScore((prev) => prev + 1);

    // Auto next after 600ms
    setTimeout(() => {
      if (currentQIndex < quizQuestions.length - 1) {
        setCurrentQIndex((prev) => prev + 1);
      } else {
        handleFinishQuiz();
      }
    }, 600);
  };

  const handleFinishQuiz = () => {
    setIsFinished(true);
    try {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    } catch (e) {}
  };

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-bengali">
          স্পিড কুইজ (Rapid Speed Quiz)
        </h1>
        <p className="text-xs text-slate-500 font-bengali">
          ১০টি প্রশ্নের দ্রুত উত্তর দিয়ে নিজের ক্ষিপ্রতা ও স্মৃতিশক্তি পরীক্ষা করুন
        </p>
      </div>

      {!isQuizActive ? (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <Zap className="w-6 h-6 fill-amber-500" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 font-bengali">কুইজের বিষয় নির্বাচন করুন</h2>
              <p className="text-xs text-slate-500 font-bengali">প্রতিটি কুইজে ১০টি প্রশ্ন এবং ২ মিনিট সময় থাকবে</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SUBJECTS.map((sub) => {
              const isSelected = selectedSubject === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => setSelectedSubject(sub.id)}
                  className={`p-4 rounded-2xl border text-left font-bengali transition-all cursor-pointer ${
                    isSelected
                      ? "bg-amber-50 border-amber-400 text-amber-900 font-bold shadow-xs"
                      : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
                  }`}
                >
                  <div className="text-sm font-bold">{sub.nameBn}</div>
                  <div className="text-[11px] text-slate-500 mt-1">{sub.nameEn}</div>
                </button>
              );
            })}
          </div>

          <button
            onClick={handleStartQuiz}
            className="w-full sm:w-auto px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm rounded-2xl shadow-xs transition-all font-bengali cursor-pointer flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4 text-slate-950" />
            <span>কুইজ শুরু করুন (Start Quiz)</span>
          </button>
        </div>
      ) : isFinished ? (
        <div className="bg-white border border-slate-200 rounded-3xl p-8 text-center space-y-6 max-w-lg mx-auto shadow-xs">
          <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
            <Award className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-slate-900 font-bengali">কুইজ সমাপ্ত!</h2>
            <p className="text-xs text-slate-500 font-bengali">আপনার অর্জিত ফলাফল</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="text-4xl font-extrabold text-emerald-700 font-mono-num">
              {score} / {quizQuestions.length}
            </div>
            <div className="text-xs text-slate-500 font-bengali font-medium">
              সঠিক উত্তর: {Math.round((score / quizQuestions.length) * 100)}%
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={handleStartQuiz}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl font-bengali flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-4 h-4" />
              <span>আবার খেলুন</span>
            </button>
            <button
              onClick={() => setIsQuizActive(false)}
              className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl font-bengali cursor-pointer"
            >
              বিষয় পরিবর্তন করুন
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 max-w-2xl mx-auto shadow-xs">
          {/* Top Timer Bar */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold font-mono-num bg-slate-100 text-slate-800 px-3 py-1 rounded-xl border border-slate-200">
              প্রশ্ন {currentQIndex + 1} / {quizQuestions.length}
            </span>
            <div className="flex items-center gap-1.5 font-mono text-sm font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-xl border border-amber-200">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>{timeLeft}s</span>
            </div>
          </div>

          {/* Question Text */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 font-bengali leading-relaxed">
            {quizQuestions[currentQIndex]?.questionBn}
          </h3>

          {/* 4 Options */}
          <div className="space-y-2.5">
            {quizQuestions[currentQIndex]?.options.map((opt, optIdx) => {
              const isSelected = userSelections[currentQIndex] === optIdx;
              const isCorrect = optIdx === quizQuestions[currentQIndex].correctIndex;
              const isAnswered = userSelections[currentQIndex] !== undefined;

              let cls = "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100";
              if (isAnswered) {
                if (isCorrect) cls = "bg-emerald-50 border-emerald-400 text-emerald-900 font-bold";
                else if (isSelected && !isCorrect) cls = "bg-rose-50 border-rose-300 text-rose-900 font-semibold";
              }

              return (
                <button
                  key={optIdx}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(optIdx)}
                  className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm font-bengali transition-all flex items-center justify-between cursor-pointer ${cls}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-white border border-slate-300 font-mono font-bold text-xs flex items-center justify-center text-slate-700 shadow-xs">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span>{opt}</span>
                  </div>
                  {isAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-600" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
