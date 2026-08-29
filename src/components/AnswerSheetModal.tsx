import React, { useState } from "react";
import {
  X,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Clock,
  Award,
  Filter,
  Check,
  HelpCircle,
  FileText,
  Search,
  BookOpen,
} from "lucide-react";
import { MockTestAttempt, Question } from "../types";
import { cleanQuestionText, cleanOptionText } from "../utils/testGenerator";

interface AnswerSheetModalProps {
  attempt: MockTestAttempt | null;
  onClose: () => void;
}

export const AnswerSheetModal: React.FC<AnswerSheetModalProps> = ({
  attempt,
  onClose,
}) => {
  const [filter, setFilter] = useState<"all" | "correct" | "wrong" | "unanswered">("all");
  const [searchQuery, setSearchQuery] = useState("");

  if (!attempt) return null;

  const questions: Question[] = attempt.questions || [];
  const userAnswers = attempt.userAnswers || {};

  const filteredQuestions = questions.filter((q, idx) => {
    const userSelected = userAnswers[q.id] !== undefined ? userAnswers[q.id] : userAnswers[idx];
    const isCorrect = userSelected === q.correctIndex;
    const isWrong = userSelected !== undefined && userSelected !== -1 && !isCorrect;
    const isUnanswered = userSelected === undefined || userSelected === -1;

    if (filter === "correct" && !isCorrect) return false;
    if (filter === "wrong" && !isWrong) return false;
    if (filter === "unanswered" && !isUnanswered) return false;

    if (searchQuery.trim()) {
      const qText = (q.questionBn || "").toLowerCase();
      const expText = (q.explanationBn || "").toLowerCase();
      const query = searchQuery.toLowerCase();
      if (!qText.includes(query) && !expText.includes(query)) return false;
    }

    return true;
  });

  const formattedDate = attempt.date
    ? new Date(attempt.date).toLocaleDateString("bn-BD", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} মিনিট ${secs} সেকেন্ড`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 flex flex-col max-h-[90vh] overflow-hidden my-auto">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-start justify-between bg-slate-50/80">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 px-2.5 py-0.5 rounded-full font-bengali">
                সংরক্ষিত টেস্ট উত্তরপত্র
              </span>
              <span className="text-xs text-slate-500 font-mono-num">{formattedDate}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 font-bengali">
              {attempt.testTitle}
            </h2>
            <div className="flex items-center gap-4 text-xs text-slate-600 font-bengali pt-1 flex-wrap">
              <span>
                স্কোর:{" "}
                <strong className="text-emerald-700 font-mono-num font-bold">
                  {attempt.score} / {attempt.totalMarks}
                </strong>{" "}
                ({attempt.percentage}%)
              </span>
              <span>
                সময় নেওয়া হয়েছে:{" "}
                <strong className="text-slate-800 font-mono-num">
                  {formatTimer(attempt.timeSpentSeconds)}
                </strong>
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            title="বন্ধ করুন"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Score Summary Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-4 sm:p-5 bg-white border-b border-slate-100">
          <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
            <span className="text-[11px] text-emerald-800 font-bengali font-bold">সঠিক উত্তর</span>
            <div className="text-xl font-black text-emerald-800 font-mono-num mt-0.5">
              {attempt.correctAnswers}
            </div>
          </div>
          <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-center">
            <span className="text-[11px] text-rose-800 font-bengali font-bold">ভুল উত্তর</span>
            <div className="text-xl font-black text-rose-800 font-mono-num mt-0.5">
              {attempt.wrongAnswers}
            </div>
          </div>
          <div className="p-3 rounded-2xl bg-slate-100 border border-slate-200 text-center">
            <span className="text-[11px] text-slate-700 font-bengali font-bold">ছেড়ে দেওয়া প্রশ্ন</span>
            <div className="text-xl font-black text-slate-800 font-mono-num mt-0.5">
              {attempt.unanswered}
            </div>
          </div>
          <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-center">
            <span className="text-[11px] text-amber-800 font-bengali font-bold">চূড়ান্ত প্রাপ্ত নম্বর</span>
            <div className="text-xl font-black text-amber-800 font-mono-num mt-0.5">
              {attempt.score}
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-4 sm:px-6 bg-slate-50/50 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 flex-wrap w-full sm:w-auto">
            <span className="text-xs text-slate-500 font-bengali font-bold mr-1">ফিল্টার:</span>
            {[
              { id: "all", label: `সব (${questions.length})` },
              { id: "correct", label: `সঠিক (${attempt.correctAnswers})` },
              { id: "wrong", label: `ভুল (${attempt.wrongAnswers})` },
              { id: "unanswered", label: `অনুত্তরিত (${attempt.unanswered})` },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                className={`px-3 py-1 rounded-xl text-xs font-bold font-bengali transition-colors cursor-pointer ${
                  filter === btn.id
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="প্রশ্ন খুঁজুন..."
              className="w-full pl-8 pr-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bengali text-slate-800 focus:outline-none focus:border-emerald-600"
            />
          </div>
        </div>

        {/* Questions Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
          {filteredQuestions.length === 0 ? (
            <div className="text-center py-12 text-slate-500 font-bengali space-y-2">
              <HelpCircle className="w-8 h-8 text-slate-400 mx-auto" />
              <p className="text-sm">এই ফিল্টারে কোনো প্রশ্ন পাওয়া যায়নি।</p>
            </div>
          ) : (
            filteredQuestions.map((q, idx) => {
              const originalIndex = questions.findIndex((orig) => orig.id === q.id);
              const displayQNum = originalIndex !== -1 ? originalIndex + 1 : idx + 1;
              const userSelected =
                userAnswers[q.id] !== undefined ? userAnswers[q.id] : userAnswers[idx];
              const isCorrect = userSelected === q.correctIndex;
              const isWrong = userSelected !== undefined && userSelected !== -1 && !isCorrect;
              const isUnanswered = userSelected === undefined || userSelected === -1;

              return (
                <div
                  key={q.id || idx}
                  className={`p-5 rounded-2xl border transition-all ${
                    isCorrect
                      ? "bg-emerald-50/30 border-emerald-200"
                      : isWrong
                      ? "bg-rose-50/30 border-rose-200"
                      : "bg-slate-50/60 border-slate-200"
                  }`}
                >
                  {/* Question Header */}
                  <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-xs font-bold font-mono-num text-slate-800 shadow-2xs">
                        প্রশ্ন #{displayQNum}
                      </span>
                      <span className="text-[11px] font-bold text-slate-600 font-bengali px-2 py-0.5 bg-slate-100 rounded">
                        {q.subjectId === "panchayat" && "পঞ্চায়েত ব্যবস্থা"}
                        {q.subjectId === "bengali" && "বাংলা ব্যাকরণ"}
                        {q.subjectId === "english" && "English"}
                        {q.subjectId === "math" && "পাটিগণিত"}
                        {q.subjectId === "gk" && "সাধারণ জ্ঞান"}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {isCorrect && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold font-bengali">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          সঠিক (+১.০০)
                        </span>
                      )}
                      {isWrong && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-300 text-xs font-bold font-bengali">
                          <XCircle className="w-3.5 h-3.5" />
                          ভুল উত্তর (-০.২৫)
                        </span>
                      )}
                      {isUnanswered && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-300 text-xs font-medium font-bengali">
                          <AlertCircle className="w-3.5 h-3.5" />
                          উত্তর দেওয়া হয়নি (০.০০)
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Question Text (Cleaned) */}
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 font-bengali leading-relaxed mt-1">
                    {cleanQuestionText(q.questionBn)}
                  </h4>

                  {/* Options List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                    {q.options.map((opt, optIdx) => {
                      const isOptionSelected = userSelected === optIdx;
                      const isOptionCorrect = optIdx === q.correctIndex;

                      let optClass = "bg-white border-slate-200 text-slate-800";

                      if (isOptionCorrect) {
                        optClass = "bg-emerald-100/70 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-400";
                      } else if (isOptionSelected && !isOptionCorrect) {
                        optClass = "bg-rose-100/70 border-rose-400 text-rose-950 font-semibold ring-1 ring-rose-400";
                      }

                      return (
                        <div
                          key={optIdx}
                          className={`p-3 rounded-xl border text-xs sm:text-sm font-bengali flex items-center justify-between gap-2 ${optClass}`}
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={`w-5 h-5 rounded-md text-[11px] font-bold flex items-center justify-center shrink-0 ${
                                isOptionCorrect
                                  ? "bg-emerald-600 text-white"
                                  : isOptionSelected
                                  ? "bg-rose-600 text-white"
                                  : "bg-slate-100 text-slate-700"
                              }`}
                            >
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span>{cleanOptionText(opt)}</span>
                          </div>

                          {isOptionCorrect && (
                            <span className="text-[10px] font-bold bg-emerald-200/80 text-emerald-900 px-2 py-0.5 rounded-full shrink-0">
                              সঠিক উত্তর
                            </span>
                          )}
                          {isOptionSelected && !isOptionCorrect && (
                            <span className="text-[10px] font-bold bg-rose-200/80 text-rose-900 px-2 py-0.5 rounded-full shrink-0">
                              আপনার উত্তর
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Detailed Explanation */}
                  {q.explanationBn && (
                    <div className="mt-3 p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-slate-800 font-bengali space-y-1">
                      <div className="flex items-center gap-1.5 text-amber-900 font-bold text-xs">
                        <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
                        <span>বিশদ সমাধান ও নোট:</span>
                      </div>
                      <p className="leading-relaxed text-slate-700">{q.explanationBn}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="text-xs text-slate-500 font-bengali">
            মোট প্রদর্শিত প্রশ্ন: <strong className="font-mono-num text-slate-800">{filteredQuestions.length}</strong> /{" "}
            {questions.length}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold font-bengali cursor-pointer"
          >
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
};
