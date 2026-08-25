import React, { useState } from "react";
import {
  FileText,
  Calendar,
  CheckCircle2,
  Bookmark,
  Sparkles,
  Filter,
  Download,
  BookOpen,
} from "lucide-react";
import { PYQ_PAPERS } from "../data/pyqData";

export const PYQView: React.FC = () => {
  const [selectedPaperId, setSelectedPaperId] = useState<string>("all");
  const [expandedSolutions, setExpandedSolutions] = useState<Record<string, boolean>>({});

  const toggleSolution = (id: string) => {
    setExpandedSolutions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const selectedPaper = PYQ_PAPERS.find((p) => p.id === selectedPaperId);
  const questionsToShow = selectedPaper
    ? selectedPaper.questions
    : PYQ_PAPERS.flatMap((p) => p.questions);

  // De-duplicate questions by ID if showing all
  const uniqueQuestions = Array.from(new Map(questionsToShow.map((q) => [q.id, q])).values());

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-bengali">
            বিগত বছরের প্রশ্নপত্র (Previous Year Questions)
          </h1>
          <p className="text-xs text-slate-500 font-bengali">
            পশ্চিমবঙ্গ গ্রাম পঞ্চায়েত পরীক্ষার আসল প্রশ্ন ও বিশদ বাংলা সমাধান
          </p>
        </div>

        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold rounded-xl font-bengali flex items-center gap-1.5 transition-colors cursor-pointer w-fit shadow-xs"
        >
          <Download className="w-3.5 h-3.5 text-slate-500" />
          <span>প্রিন্ট / PDF সেভ করুন</span>
        </button>
      </div>

      {/* Paper Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setSelectedPaperId("all")}
          className={`px-4 py-2 rounded-xl text-xs font-bold font-bengali whitespace-nowrap transition-all cursor-pointer ${
            selectedPaperId === "all"
              ? "bg-emerald-600 text-white shadow-xs"
              : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-xs"
          }`}
        >
          সব প্রশ্নপত্র ({PYQ_PAPERS.length})
        </button>
        {PYQ_PAPERS.map((paper) => {
          const isActive = selectedPaperId === paper.id;
          return (
            <button
              key={paper.id}
              onClick={() => setSelectedPaperId(paper.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-bengali whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-xs"
              }`}
            >
              {paper.year} - {paper.postNameBn.split("(")[0]}
            </button>
          );
        })}
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {uniqueQuestions.map((q, idx) => {
          const showSol = expandedSolutions[q.id];

          return (
            <div
              key={q.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold font-mono-num bg-slate-100 text-slate-800 px-2.5 py-0.5 rounded-lg border border-slate-200">
                    WB GP {q.examYear || "2018"}
                  </span>
                  <span className="text-xs font-bold bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200 font-bengali">
                    {q.subjectId === "panchayat" && "পঞ্চায়েত আইন"}
                    {q.subjectId === "bengali" && "বাংলা ব্যাকরণ"}
                    {q.subjectId === "english" && "English"}
                    {q.subjectId === "math" && "পাটিগণিত"}
                    {q.subjectId === "gk" && "সাধারণ জ্ঞান"}
                  </span>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-bengali leading-relaxed">
                {q.questionBn}
              </h3>

              {/* 4 Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {q.options.map((opt, optIdx) => {
                  const isCorrect = optIdx === q.correctIndex;
                  return (
                    <div
                      key={optIdx}
                      className={`p-3.5 rounded-2xl border text-xs sm:text-sm font-bengali flex items-center justify-between ${
                        showSol && isCorrect
                          ? "bg-emerald-50 border-emerald-400 text-emerald-900 font-bold shadow-xs"
                          : "bg-slate-50 border-slate-200 text-slate-800"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-lg bg-white border border-slate-300 font-mono font-bold text-xs flex items-center justify-center text-slate-700 shadow-xs">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{opt}</span>
                      </div>
                      {showSol && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                    </div>
                  );
                })}
              </div>

              {/* Solution Toggle */}
              <div>
                {showSol ? (
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs sm:text-sm text-slate-800 font-bengali space-y-1.5 animate-in fade-in">
                    <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      <span>অফিসিয়াল উত্তর: {String.fromCharCode(65 + q.correctIndex)} ({q.options[q.correctIndex]})</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed pt-1">{q.explanationBn}</p>
                    <button
                      onClick={() => toggleSolution(q.id)}
                      className="text-xs text-slate-500 hover:text-slate-800 font-bengali mt-2 font-bold cursor-pointer"
                    >
                      সমাধান লুকান ▲
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => toggleSolution(q.id)}
                    className="text-xs text-emerald-700 hover:underline font-bengali font-bold cursor-pointer"
                  >
                    সঠিক উত্তর ও বিশদ সমাধান দেখুন ▼
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
