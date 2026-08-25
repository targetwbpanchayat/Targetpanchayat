import React, { useState } from "react";
import {
  CheckSquare,
  Search,
  Bookmark,
  CheckCircle2,
  XCircle,
  Clock,
  Sparkles,
  RefreshCw,
  HelpCircle,
  Filter,
  ChevronLeft,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { SubjectId, Question, UserProgress } from "../types";
import { SUBJECTS } from "../data/subjects";
import { QUESTION_SETS } from "../data/questionSets";
import { saveUserProgress } from "../utils/storage";

interface PracticeViewProps {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  initialSubject?: SubjectId | "all";
}

export const PracticeView: React.FC<PracticeViewProps> = ({
  progress,
  setProgress,
  initialSubject = "all",
}) => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectId | "all">(initialSubject);
  const [filterMode, setFilterMode] = useState<"all" | "unattempted" | "incorrect" | "bookmarked">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Selected answer map for current session
  const [sessionAnswers, setSessionAnswers] = useState<Record<string, number>>({});
  const [showExplanationMap, setShowExplanationMap] = useState<Record<string, boolean>>({});

  // Toggle bookmark for question
  const toggleBookmark = (qId: string) => {
    const isBookmarked = progress.bookmarkedQuestionIds.includes(qId);
    let updatedBookmarks: string[];
    if (isBookmarked) {
      updatedBookmarks = progress.bookmarkedQuestionIds.filter((id) => id !== qId);
    } else {
      updatedBookmarks = [...progress.bookmarkedQuestionIds, qId];
    }
    const updated: UserProgress = {
      ...progress,
      bookmarkedQuestionIds: updatedBookmarks,
    };
    setProgress(updated);
    saveUserProgress(updated);
  };

  // Handle user selecting an option
  const handleSelectOption = (q: Question, optionIndex: number) => {
    const isCorrect = optionIndex === q.correctIndex;
    
    // Save in session state
    setSessionAnswers((prev) => ({ ...prev, [q.id]: optionIndex }));
    setShowExplanationMap((prev) => ({ ...prev, [q.id]: true }));

    // Save in progress persistence
    const updatedAnswers = {
      ...(progress.practiceAnswers || {}),
      [q.id]: {
        selectedIndex: optionIndex,
        isCorrect,
        timestamp: Date.now(),
      },
    };

    const updated: UserProgress = {
      ...progress,
      practiceAnswers: updatedAnswers,
    };
    setProgress(updated);
    saveUserProgress(updated);
  };

  // Filter questions
  const filteredQuestions = QUESTION_SETS.filter((q) => {
    // Subject filter
    if (selectedSubject !== "all" && q.subjectId !== selectedSubject) return false;

    // Search filter
    if (searchQuery.trim()) {
      const matchText =
        q.questionBn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.options.some((opt) => opt.toLowerCase().includes(searchQuery.toLowerCase())) ||
        q.explanationBn.toLowerCase().includes(searchQuery.toLowerCase());
      if (!matchText) return false;
    }

    // Status filter
    const prevAnswer = progress.practiceAnswers?.[q.id];
    if (filterMode === "unattempted" && prevAnswer) return false;
    if (filterMode === "incorrect" && (!prevAnswer || prevAnswer.isCorrect)) return false;
    if (filterMode === "bookmarked" && !progress.bookmarkedQuestionIds.includes(q.id)) return false;

    return true;
  });

  // Pagination calculation
  const totalPages = Math.ceil(filteredQuestions.length / pageSize) || 1;
  const paginatedQuestions = filteredQuestions.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-bengali">
            MCQ প্র্যাকটিস (Subject Practice Sets)
          </h1>
          <p className="text-xs text-slate-500 font-bengali">
            সরাসরি উত্তর যাচাই, ৪টি অপশন এবং নির্ভুল বাংলা ব্যাখ্যা সহ অনুশীলন করুন
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="প্রশ্ন খুঁজুন..."
            className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 font-bengali shadow-xs"
          />
        </div>
      </div>

      {/* Subject Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => {
            setSelectedSubject("all");
            setCurrentPage(1);
          }}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold font-bengali whitespace-nowrap transition-all cursor-pointer ${
            selectedSubject === "all"
              ? "bg-emerald-600 text-white shadow-xs"
              : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-xs"
          }`}
        >
          সব বিষয় ({QUESTION_SETS.length})
        </button>
        {SUBJECTS.map((sub) => {
          const count = QUESTION_SETS.filter((q) => q.subjectId === sub.id).length;
          const isActive = selectedSubject === sub.id;
          return (
            <button
              key={sub.id}
              onClick={() => {
                setSelectedSubject(sub.id);
                setCurrentPage(1);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold font-bengali whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-xs"
              }`}
            >
              {sub.nameBn} ({count})
            </button>
          );
        })}
      </div>

      {/* Status Filter Chips */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs text-slate-500 font-bengali flex items-center gap-1 font-medium">
          <Filter className="w-3 h-3 text-slate-400" />
          <span>ফিল্টার:</span>
        </span>
        {[
          { id: "all", label: "সব প্রশ্ন" },
          { id: "unattempted", label: "অপঠিত / নতুন প্রশ্ন" },
          { id: "incorrect", label: "ভুল হওয়া প্রশ্ন" },
          { id: "bookmarked", label: `বুকমার্ক করা (${progress.bookmarkedQuestionIds.length})` },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => {
              setFilterMode(f.id as any);
              setCurrentPage(1);
            }}
            className={`px-3 py-1 rounded-lg text-xs font-bold font-bengali transition-colors cursor-pointer ${
              filterMode === f.id
                ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {paginatedQuestions.length > 0 ? (
          paginatedQuestions.map((q, idx) => {
            const isBookmarked = progress.bookmarkedQuestionIds.includes(q.id);
            const globalIndex = (currentPage - 1) * pageSize + idx + 1;
            const currentSelected =
              sessionAnswers[q.id] !== undefined
                ? sessionAnswers[q.id]
                : progress.practiceAnswers?.[q.id]?.selectedIndex;
            const isAnswered = currentSelected !== undefined;
            const showExplanation = showExplanationMap[q.id] || isAnswered;

            return (
              <div
                key={q.id}
                className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 space-y-4 transition-all shadow-xs"
              >
                {/* Question Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold font-mono-num bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200">
                      প্রশ্ন #{globalIndex}
                    </span>
                    <span className="text-[11px] font-bold bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200 font-bengali">
                      {q.subjectId === "panchayat" && "পঞ্চায়েত ব্যবস্থা"}
                      {q.subjectId === "bengali" && "বাংলা ব্যাকরণ"}
                      {q.subjectId === "english" && "English"}
                      {q.subjectId === "math" && "পাটিগণিত"}
                      {q.subjectId === "gk" && "সাধারণ জ্ঞান"}
                    </span>
                    {q.examYear && (
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200 font-mono-num font-semibold">
                        WB GP {q.examYear}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => toggleBookmark(q.id)}
                    className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                      isBookmarked
                        ? "bg-amber-100 border-amber-300 text-amber-700"
                        : "bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-700"
                    }`}
                    title="প্রশ্ন বুকমার্ক করুন"
                  >
                    <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-amber-600 text-amber-600" : ""}`} />
                  </button>
                </div>

                {/* Question Text */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-bengali leading-relaxed">
                  {q.questionBn}
                </h3>
                {q.questionEn && (
                  <p className="text-xs text-slate-500 font-display italic">
                    {q.questionEn}
                  </p>
                )}

                {/* 4 Interactive Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = currentSelected === optIdx;
                    const isCorrect = optIdx === q.correctIndex;

                    let btnClass = "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300";

                    if (isAnswered) {
                      if (isCorrect) {
                        btnClass = "bg-emerald-50 border-emerald-500 text-emerald-900 font-bold shadow-xs";
                      } else if (isSelected && !isCorrect) {
                        btnClass = "bg-rose-50 border-rose-400 text-rose-800 font-semibold";
                      } else {
                        btnClass = "bg-slate-50/50 border-slate-200 text-slate-400";
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={isAnswered}
                        onClick={() => handleSelectOption(q, optIdx)}
                        className={`p-3.5 rounded-2xl border text-left text-xs sm:text-sm font-bengali transition-all flex items-center justify-between gap-2 cursor-pointer ${btnClass}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-lg bg-white border border-slate-300 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span className="font-medium">{opt}</span>
                        </div>
                        {isAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                        {isAnswered && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Box */}
                {showExplanation && (
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs sm:text-sm text-slate-800 font-bengali space-y-1.5 animate-in fade-in">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-emerald-900 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        <span>সঠিক উত্তর: {String.fromCharCode(65 + q.correctIndex)} ({q.options[q.correctIndex]})</span>
                      </span>
                    </div>
                    <p className="text-slate-700 leading-relaxed pt-1">{q.explanationBn}</p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-16 bg-white border border-dashed border-slate-300 rounded-3xl p-8 space-y-3 shadow-xs">
            <CheckSquare className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-700 font-bengali">কোনো প্রশ্ন পাওয়া যায়নি</h3>
            <p className="text-xs text-slate-500 font-bengali">
              অন্য কোনো বিষয় বা ফিল্টার নির্বাচন করুন।
            </p>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-2xl shadow-xs">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-xs font-bold text-slate-700 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed font-bengali cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>পূর্ববর্তী পৃষ্ঠা</span>
          </button>

          <span className="text-xs font-mono-num font-semibold text-slate-600">
            পৃষ্ঠা {currentPage} / {totalPages} (মোট {filteredQuestions.length}টি প্রশ্ন)
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-xs font-bold text-slate-700 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed font-bengali cursor-pointer"
          >
            <span>পরবর্তী পৃষ্ঠা</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
