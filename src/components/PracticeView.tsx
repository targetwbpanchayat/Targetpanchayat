import React, { useState, useEffect, useMemo } from "react";
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
  Layers,
  X,
  Lock,
  UserPlus,
} from "lucide-react";
import { SubjectId, Question, UserProgress, UserProfile } from "../types";
import { SUBJECTS } from "../data/subjects";
import { QUESTION_SETS } from "../data/questionSets";
import { STUDY_CHAPTERS } from "../data/studyData";
import { saveUserProgress } from "../utils/storage";
import { cleanQuestionText, shuffleOptionsKeepId } from "../utils/testGenerator";
import { isDemoUser, DEMO_MAX_MCQ_PER_VOLUME } from "../utils/demoHelper";
import { LockedFeatureModal } from "./LockedFeatureModal";

interface PracticeViewProps {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  initialSubject?: SubjectId | "all";
  initialChapterId?: string | null;
  user?: UserProfile | null;
  onOpenAuth?: (mode?: "login" | "register") => void;
}

export const PracticeView: React.FC<PracticeViewProps> = ({
  progress,
  setProgress,
  initialSubject = "all",
  initialChapterId = null,
  user,
  onOpenAuth,
}) => {
  const isDemo = isDemoUser(user);
  const [selectedSubject, setSelectedSubject] = useState<SubjectId | "all">(initialSubject);
  const [selectedChapterFilter, setSelectedChapterFilter] = useState<string>(initialChapterId || "all");
  const [gkCategoryFilter, setGkCategoryFilter] = useState<string>("all");
  const [mathChapterFilter, setMathChapterFilter] = useState<string>("all");
  const [filterMode, setFilterMode] = useState<"all" | "unattempted" | "incorrect" | "bookmarked">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [jumpPageInput, setJumpPageInput] = useState("");
  const pageSize = 15;

  // Demo Lock Modal
  const [lockedModalOpen, setLockedModalOpen] = useState(false);
  const [lockedModalTitle, setLockedModalTitle] = useState("প্রশ্নটি ডেমো মোডে লক করা আছে");
  const [lockedModalDesc, setLockedModalDesc] = useState("ডেমো মোডে প্রতিটি ভলিউমের প্রথম ২০টি MCQ সম্পূর্ণ উন্মুক্ত। সম্পূর্ণ প্রশ্ন ব্যাংক ও আনলিমিটেড প্র্যাকটিস করতে ফ্রি রেজিস্টার করুন।");
  const [lockedFeatureName, setLockedFeatureName] = useState<string | undefined>(undefined);

  const handleOpenLocked = (qTitle?: string) => {
    setLockedModalTitle("প্রশ্নটি ডেমো মোডে লক করা আছে");
    setLockedModalDesc("ডেমো মোডে প্রতিটি ভলিউমের প্রথম ২০টি MCQ সম্পূর্ণ উন্মুক্ত। সম্পূর্ণ ভলিউমের শত শত প্রশ্ন, আনলিমিটেড প্র্যাকটিস ও বুকমার্কিং আনলক করতে আপনার ফ্রি অ্যাকাউন্ট তৈরি করুন।");
    setLockedFeatureName(qTitle);
    setLockedModalOpen(true);
  };

  // Map each question's index inside its subject/volume
  const questionIndexInSubjectMap = useMemo(() => {
    const map: Record<string, number> = {};
    const countBySubject: Record<string, number> = {};
    QUESTION_SETS.forEach((q) => {
      const subj = q.subjectId;
      const idx = countBySubject[subj] || 0;
      map[q.id] = idx;
      countBySubject[subj] = idx + 1;
    });
    return map;
  }, []);

  // React to initial prop updates
  useEffect(() => {
    if (initialSubject) {
      setSelectedSubject(initialSubject);
    }
  }, [initialSubject]);

  useEffect(() => {
    if (initialChapterId) {
      setSelectedChapterFilter(initialChapterId);
      const matchedChap = STUDY_CHAPTERS.find((c) => c.id === initialChapterId);
      if (matchedChap) {
        setSelectedSubject(matchedChap.subjectId);
      }
      setCurrentPage(1);
    }
  }, [initialChapterId]);

  // Selected answer map for current session
  const [sessionAnswers, setSessionAnswers] = useState<Record<string, number>>({});
  const [showExplanationMap, setShowExplanationMap] = useState<Record<string, boolean>>({});

  // Toggle bookmark for question
  const toggleBookmark = (qId: string) => {
    const qIndex = questionIndexInSubjectMap[qId] ?? 0;
    if (isDemo && qIndex >= DEMO_MAX_MCQ_PER_VOLUME) {
      handleOpenLocked("বুকমার্কিং ফিচার");
      return;
    }
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
    const qIndex = questionIndexInSubjectMap[q.id] ?? 0;
    if (isDemo && qIndex >= DEMO_MAX_MCQ_PER_VOLUME) {
      handleOpenLocked(q.questionBn);
      return;
    }
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

  // Active subject chapters for filtering
  const currentSubjectChapters = selectedSubject !== "all"
    ? STUDY_CHAPTERS.filter((c) => c.subjectId === selectedSubject)
    : [];

  const activeChapterInfo = selectedChapterFilter !== "all"
    ? STUDY_CHAPTERS.find((c) => c.id === selectedChapterFilter)
    : null;

  // Filter questions
  const filteredQuestions = QUESTION_SETS.filter((q) => {
    // Subject filter
    if (selectedSubject !== "all" && q.subjectId !== selectedSubject) return false;

    // Direct Chapter filter
    if (selectedChapterFilter !== "all") {
      const matchChapId = q.chapterId === selectedChapterFilter;
      const matchInId = q.id.includes(selectedChapterFilter);
      if (!matchChapId && !matchInId) return false;
    }

    // GK Category Sub-filter (when no specific single chapter is active)
    if (selectedSubject === "gk" && gkCategoryFilter !== "all" && selectedChapterFilter === "all") {
      if (gkCategoryFilter === "history" && !q.id.includes("hist") && !q.chapterId?.includes("hist")) return false;
      if (gkCategoryFilter === "geography" && !q.id.includes("geo") && !q.chapterId?.includes("geo")) return false;
      if (gkCategoryFilter === "polity" && !q.id.includes("pol") && !q.chapterId?.includes("pol")) return false;
      if (gkCategoryFilter === "science" && !q.id.includes("sci") && !q.chapterId?.includes("sci")) return false;
      if (gkCategoryFilter === "static" && !q.id.includes("stat") && !q.chapterId?.includes("stat")) return false;
    }

    // Math 14 Chapters Sub-filter (legacy fallback)
    if (selectedSubject === "math" && mathChapterFilter !== "all" && selectedChapterFilter === "all") {
      if (q.chapterId !== mathChapterFilter) return false;
    }

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
  // Shuffle options once per page change so answers don't move on re-render
  const paginatedQuestions = useMemo(
    () =>
      filteredQuestions
        .slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        )
        .map(shuffleOptionsKeepId),
    [filteredQuestions, currentPage, pageSize]
  );

  const handleJumpPage = (e: React.FormEvent) => {
    e.preventDefault();
    const pageNum = parseInt(jumpPageInput, 10);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
      setJumpPageInput("");
    }
  };

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-bengali">
            MCQ প্র্যাকটিস (Subject Practice Sets & 5,000 GK Bank)
          </h1>
          <p className="text-xs text-slate-500 font-bengali">
            সরাসরি উত্তর যাচাই, ৪টি সুসংগত অপশন এবং বিস্তারিত বাংলা ব্যাখ্যা সহ অনুশীলন করুন
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
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => {
            setSelectedSubject("all");
            setSelectedChapterFilter("all");
            setCurrentPage(1);
          }}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold font-bengali whitespace-nowrap transition-all cursor-pointer ${
            selectedSubject === "all"
              ? "bg-emerald-600 text-white shadow-xs"
              : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-xs"
          }`}
        >
          সব বিষয় ({QUESTION_SETS.length.toLocaleString()})
        </button>
        {SUBJECTS.map((sub) => {
          const count = QUESTION_SETS.filter((q) => q.subjectId === sub.id).length;
          const isActive = selectedSubject === sub.id;
          return (
            <button
              key={sub.id}
              onClick={() => {
                setSelectedSubject(sub.id);
                setSelectedChapterFilter("all");
                setCurrentPage(1);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold font-bengali whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-xs"
              }`}
            >
              {sub.nameBn} ({count.toLocaleString()})
            </button>
          );
        })}
      </div>

      {/* Chapter Dropdown / Selector Bar for Selected Subject */}
      {selectedSubject !== "all" && currentSubjectChapters.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-3 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-slate-800 font-bold text-xs sm:text-sm font-bengali">
              <Layers className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>নির্দিষ্ট অধ্যায় নির্বাচন করে প্র্যাকটিস করুন:</span>
            </div>

            <div className="flex items-center gap-2">
              <select
                value={selectedChapterFilter}
                onChange={(e) => {
                  setSelectedChapterFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="bg-slate-50 border border-slate-300 rounded-xl px-3 py-1.5 text-xs sm:text-sm text-slate-900 font-bengali focus:outline-none focus:border-emerald-600 max-w-full"
              >
                <option value="all">-- সম্পূর্ণ বিষয়ের সব অধ্যায় ({currentSubjectChapters.length}টি অধ্যায়) --</option>
                {currentSubjectChapters.map((ch, idx) => (
                  <option key={ch.id} value={ch.id}>
                    {idx + 1}. {ch.titleBn}
                  </option>
                ))}
              </select>

              {selectedChapterFilter !== "all" && (
                <button
                  onClick={() => {
                    setSelectedChapterFilter("all");
                    setCurrentPage(1);
                  }}
                  className="px-2.5 py-1.5 text-xs text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-xl font-bengali flex items-center gap-1 shrink-0 cursor-pointer"
                  title="ফিল্টার সরান"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>রিসেট</span>
                </button>
              )}
            </div>
          </div>

          {/* Active Chapter Badge */}
          {activeChapterInfo && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center justify-between gap-3 text-xs sm:text-sm font-bengali">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-emerald-900">🎯 নির্বাচিত অধ্যায়:</span>
                <span className="text-emerald-800 font-semibold">{activeChapterInfo.titleBn}</span>
                <span className="text-slate-500 font-mono text-xs">({filteredQuestions.length} টি প্রশ্ন উপলব্ধ)</span>
              </div>
              <button
                onClick={() => {
                  setSelectedChapterFilter("all");
                  setCurrentPage(1);
                }}
                className="text-xs font-bold text-emerald-700 hover:underline cursor-pointer shrink-0"
              >
                সব প্রশ্ন দেখুন
              </button>
            </div>
          )}
        </div>
      )}

      {/* GK 5,000 Sub-Categories Filter */}
      {selectedSubject === "gk" && (
        <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-2xl p-3 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-xs font-bold text-emerald-900 font-bengali flex items-center gap-1.5 shrink-0 px-1">
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            <span>ভলিউম ৫ জিকে বিষয়:</span>
          </span>
          {[
            { id: "all", label: "সব জিকে MCQ (৫,০৮০)" },
            { id: "history", label: "ইতিহাস ও জাতীয় আন্দোলন (১,০১৫)" },
            { id: "geography", label: "ভূগোল ও পশ্চিমবঙ্গ (১,০১৫)" },
            { id: "polity", label: "ভারতীয় সংবিধান ও পঞ্চায়েত (১,০১৫)" },
            { id: "science", label: "সাধারণ বিজ্ঞান (১,০১৫)" },
            { id: "static", label: "স্ট্যাটিক জিকে (১,০২০)" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setGkCategoryFilter(item.id);
                setCurrentPage(1);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold font-bengali whitespace-nowrap transition-colors cursor-pointer ${
                gkCategoryFilter === item.id
                  ? "bg-emerald-700 text-white shadow-xs"
                  : "bg-white text-emerald-900 border border-emerald-200 hover:bg-emerald-100/60"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* Math 14 Chapters Sub-Filter */}
      {selectedSubject === "math" && (
        <div className="bg-blue-50/80 border border-blue-200/80 rounded-2xl p-3 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-xs font-bold text-blue-950 font-bengali flex items-center gap-1.5 shrink-0 px-1">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>ভলিউম ৪ গণিত অধ্যায় (১৪টি):</span>
          </span>
          {[
            { id: "all", label: "সব ১৪টি অধ্যায় (১,০৫০টি MCQ)" },
            { id: "math_ch1", label: "অধ্যায় ১: সংখ্যা পদ্ধতি (৭৫)" },
            { id: "math_ch2", label: "অধ্যায় ২: ঐকিক নিয়ম (৭৫)" },
            { id: "math_ch3", label: "অধ্যায় ৩: গড় ও বয়স (৭৫)" },
            { id: "math_ch4", label: "অধ্যায় ৪: শতকরা (৭৫)" },
            { id: "math_ch5", label: "অধ্যায় ৫: অনুপাত-সমানুপাত (৭৫)" },
            { id: "math_ch6", label: "অধ্যায় ৬: লাভ ও ক্ষতি (৭৫)" },
            { id: "math_ch7", label: "অধ্যায় ৭: সরল সুদ (৭৫)" },
            { id: "math_ch8", label: "অধ্যায় ৮: চক্রবৃদ্ধি সুদ (৭৫)" },
            { id: "math_ch9", label: "অধ্যায় ৯: সময় ও কার্য (৭৫)" },
            { id: "math_ch10", label: "অধ্যায় ১০: নল ও চৌবাচ্চা (৭৫)" },
            { id: "math_ch11", label: "অধ্যায় ১১: গতিবেগ ও ট্রেন (৭৫)" },
            { id: "math_ch12", label: "অধ্যায় ১২: পরিমিতি (৭৫)" },
            { id: "math_ch13", label: "অধ্যায় ১৩: মিশ্রণ ও সংমিশ্রণ (৭৫)" },
            { id: "math_ch14", label: "অধ্যায় ১৪: সরলীকরণ ও বীজগণিত (৭৫)" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setMathChapterFilter(item.id);
                setCurrentPage(1);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold font-bengali whitespace-nowrap transition-colors cursor-pointer ${
                mathChapterFilter === item.id
                  ? "bg-blue-700 text-white shadow-xs"
                  : "bg-white text-blue-950 border border-blue-200 hover:bg-blue-100/60"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* Status Filter Chips */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
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

        {/* Quick Page Jump */}
        {totalPages > 1 && (
          <form onSubmit={handleJumpPage} className="flex items-center gap-2 text-xs font-bengali">
            <span className="text-slate-500">পৃষ্ঠায় যান:</span>
            <input
              type="number"
              min={1}
              max={totalPages}
              value={jumpPageInput}
              onChange={(e) => setJumpPageInput(e.target.value)}
              placeholder={`১ - ${totalPages}`}
              className="w-20 px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-xs font-mono-num text-slate-800 focus:outline-none focus:border-emerald-600"
            />
            <button
              type="submit"
              className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-bold cursor-pointer"
            >
              যান
            </button>
          </form>
        )}
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {paginatedQuestions.length > 0 ? (
          paginatedQuestions.map((q, idx) => {
            const qIndex = questionIndexInSubjectMap[q.id] ?? 0;
            const isAccessible = !isDemo || qIndex < DEMO_MAX_MCQ_PER_VOLUME;
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
                className={`bg-white border rounded-3xl p-5 sm:p-6 space-y-4 transition-all shadow-xs ${
                  !isAccessible ? "border-slate-200 bg-slate-50/50" : "border-slate-200"
                }`}
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
                      {q.subjectId === "gk" && "সাধারণ জ্ঞান (ভলিউম ৫)"}
                    </span>
                    {!isAccessible ? (
                      <span className="text-[11px] font-bold bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full border border-amber-200 font-bengali flex items-center gap-1">
                        <Lock className="w-3 h-3" />
                        <span>ডেমো লক (২০টির পরবর্তী)</span>
                      </span>
                    ) : q.examYear ? (
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200 font-mono-num font-semibold">
                        {q.examYear}
                      </span>
                    ) : null}
                  </div>

                  <button
                    onClick={() => toggleBookmark(q.id)}
                    className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                      !isAccessible
                        ? "bg-slate-100 border-slate-200 text-slate-400"
                        : isBookmarked
                        ? "bg-amber-100 border-amber-300 text-amber-700"
                        : "bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-700"
                    }`}
                    title={!isAccessible ? "লক করা" : "প্রশ্ন বুকমার্ক করুন"}
                  >
                    <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-amber-600 text-amber-600" : ""}`} />
                  </button>
                </div>

                {/* Question Text */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-bengali leading-relaxed">
                  {cleanQuestionText(q.questionBn)}
                </h3>
                {q.questionEn && (
                  <p className="text-xs text-slate-500 font-display italic">
                    {q.questionEn}
                  </p>
                )}

                {/* 4 Interactive Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {q.options.map((opt, optIdx) => {
                    if (!isAccessible) {
                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleOpenLocked(q.questionBn)}
                          className="p-3.5 rounded-2xl border border-slate-200 bg-slate-100/80 text-left text-xs sm:text-sm font-bengali text-slate-500 hover:bg-amber-50/50 hover:border-amber-200 flex items-center justify-between gap-2 cursor-pointer transition-all"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="w-6 h-6 rounded-lg bg-white border border-slate-200 text-slate-400 font-bold text-xs flex items-center justify-center shrink-0">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span className="font-medium text-slate-600">{opt}</span>
                          </div>
                          <Lock className="w-3.5 h-3.5 text-amber-600/70 shrink-0" />
                        </button>
                      );
                    }

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

                {!isAccessible && (
                  <div className="pt-2">
                    <button
                      onClick={() => handleOpenLocked(q.questionBn)}
                      className="w-full py-2.5 px-4 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold font-bengali flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      <Lock className="w-3.5 h-3.5 text-amber-700" />
                      <span>এই প্রশ্ন ও সমাধান ডেমো মোডে লক করা — আনলক করতে ফ্রি রেজিস্টার করুন</span>
                    </button>
                  </div>
                )}

                {/* Explanation Box */}
                {isAccessible && showExplanation && (
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
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white border border-slate-200 rounded-2xl shadow-xs gap-3">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 text-xs font-bold text-slate-700 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed font-bengali cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>পূর্ববর্তী পৃষ্ঠা</span>
          </button>

          <span className="text-xs font-mono-num font-semibold text-slate-600">
            পৃষ্ঠা {currentPage} / {totalPages} (মোট {filteredQuestions.length.toLocaleString()}টি প্রশ্ন)
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 text-xs font-bold text-slate-700 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed font-bengali cursor-pointer"
          >
            <span>পরবর্তী পৃষ্ঠা</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Locked Feature Modal */}
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
};

