import React, { useState, useMemo } from "react";
import {
  ALL_5000_SAQS,
  SAQ_CATEGORY_LIST,
  GKOneLinerSAQ,
  HISTORY_1000_SAQS,
  GEOGRAPHY_1000_SAQS,
  POLITY_1000_SAQS,
  SCIENCE_1000_SAQS,
  STATIC_1000_SAQS
} from "../data/gkVol5";
import { cleanQuestionText } from "../utils/testGenerator";
import {
  Search,
  BookOpen,
  Sparkles,
  Zap,
  Bookmark,
  Copy,
  Check,
  Volume2,
  Filter,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Award,
  Flame,
  X,
  Lock,
  UserPlus
} from "lucide-react";
import { UserProfile } from "../types";
import { isDemoUser, DEMO_MAX_SAQ_PREVIEW } from "../utils/demoHelper";

interface Gk5000SaqExplorerProps {
  initialCategory?: "history" | "geography" | "polity" | "science" | "static";
  onClose?: () => void;
  user?: UserProfile | null;
  onOpenAuth?: (mode?: "login" | "register") => void;
}

export const Gk5000SaqExplorer: React.FC<Gk5000SaqExplorerProps> = ({
  initialCategory = "history",
  onClose,
  user,
  onOpenAuth
}) => {
  const isDemo = isDemoUser(user);
  const [activeCategory, setActiveCategory] = useState<
    "history" | "geography" | "polity" | "science" | "static"
  >(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubtopic, setSelectedSubtopic] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"oneliner" | "saq">("oneliner");
  const [page, setPage] = useState(1);
  const pageSize = 50;

  const [savedIds, setSavedIds] = useState<number[]>(() => {
    try {
      const stored = localStorage.getItem("gk_saved_saq_ids");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [onlySaved, setOnlySaved] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [speakingId, setSpeakingId] = useState<number | null>(null);

  // Active Category Bank
  const currentCategoryData = useMemo(() => {
    switch (activeCategory) {
      case "history":
        return HISTORY_1000_SAQS;
      case "geography":
        return GEOGRAPHY_1000_SAQS;
      case "polity":
        return POLITY_1000_SAQS;
      case "science":
        return SCIENCE_1000_SAQS;
      case "static":
        return STATIC_1000_SAQS;
      default:
        return HISTORY_1000_SAQS;
    }
  }, [activeCategory]);

  const activeCategoryMeta = useMemo(() => {
    return SAQ_CATEGORY_LIST.find((c) => c.id === activeCategory)!;
  }, [activeCategory]);

  // Filtered dataset
  const filteredList = useMemo(() => {
    return currentCategoryData.filter((item) => {
      const matchTopic =
        selectedSubtopic === "all" || item.topicBn === selectedSubtopic;
      const matchSearch =
        searchQuery.trim() === "" ||
        item.questionBn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answerBn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.topicBn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        String(item.id).includes(searchQuery.trim());
      const matchSaved = !onlySaved || savedIds.includes(item.id);

      return matchTopic && matchSearch && matchSaved;
    });
  }, [currentCategoryData, selectedSubtopic, searchQuery, onlySaved, savedIds]);

  const totalPages = isDemo ? 1 : (Math.ceil(filteredList.length / pageSize) || 1);
  const paginatedList = useMemo(() => {
    if (isDemo) {
      return filteredList.slice(0, DEMO_MAX_SAQ_PREVIEW);
    }
    const start = (page - 1) * pageSize;
    return filteredList.slice(start, start + pageSize);
  }, [filteredList, page, pageSize, isDemo]);

  const toggleSave = (id: number) => {
    setSavedIds((prev) => {
      const next = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
      try {
        localStorage.setItem("gk_saved_saq_ids", JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const handleCopy = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const handleSpeak = (text: string, id: number) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      if (speakingId === id) {
        setSpeakingId(null);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "bn-IN";
      utterance.rate = 0.95;
      utterance.onend = () => setSpeakingId(null);
      utterance.onerror = () => setSpeakingId(null);
      setSpeakingId(id);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-indigo-800/40 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        
        <div className="relative z-10 space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="bg-rose-500 text-white text-[11px] font-extrabold px-3 py-0.5 rounded-full font-bengali uppercase tracking-wider flex items-center gap-1 shadow-xs">
                <Flame className="w-3.5 h-3.5" />
                <span>ভলিউম ৫ স্পেশাল</span>
              </span>
              <span className="text-xs text-indigo-200 font-bengali font-bold">
                মোট ৫,০০০ টি অতি-গুরুত্বপূর্ণ ওয়ান-লাইনার ও SAQ
              </span>
            </div>

            {onClose && (
              <button
                onClick={onClose}
                className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="বন্ধ করুন"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <h1 className="text-xl sm:text-3xl font-extrabold font-bengali tracking-tight">
            সাধারণ জ্ঞান মেগা বুস্টার: ৫,০০০ SAQ ও ওয়ান-লাইনার লাইব্রেরি
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-bengali leading-relaxed max-w-3xl">
            পশ্চিমবঙ্গ পঞ্চায়েত ও রাজ্য সরকারি চাকরির পরীক্ষার সম্পূর্ণ সিলেবাস কভার করতে প্রতি বিষয়ে ১,০০০ টি করে মোট ৫,০০০ টি নিশ্চিত কমনযোগ্য ওয়ান-লাইনার প্রশ্ন ও উত্তর।
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
            {SAQ_CATEGORY_LIST.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSelectedSubtopic("all");
                    setPage(1);
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? "bg-white text-slate-900 border-white shadow-md scale-102"
                      : "bg-white/5 border-white/10 text-slate-200 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-bengali truncate">
                      {cat.nameBn.split(" ")[0]}
                    </span>
                    <span
                      className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-md ${
                        isSelected
                          ? "bg-rose-100 text-rose-700"
                          : "bg-white/10 text-indigo-200"
                      }`}
                    >
                      {cat.count} টি
                    </span>
                  </div>
                  <p
                    className={`text-[11px] font-bengali truncate mt-1 ${
                      isSelected ? "text-slate-600" : "text-slate-400"
                    }`}
                  >
                    {cat.nameEn}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Control & Search Bar */}
      <div className="bg-white border border-slate-200 rounded-3xl p-4 sm:p-5 space-y-4 shadow-xs">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full sm:flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPage(1);
              }}
              placeholder={`${activeCategoryMeta.nameBn} - ১০০০ টির মধ্যে সার্চ করুন (প্রশ্ন, উত্তর, টপিক বা নম্বর)...`}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-bengali focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* View Toggles & Saved Filter */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs font-bold font-bengali">
              <button
                onClick={() => setViewMode("oneliner")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === "oneliner"
                    ? "bg-white text-indigo-700 shadow-2xs font-extrabold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>ওয়ান-লাইনার</span>
              </button>
              <button
                onClick={() => setViewMode("saq")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === "saq"
                    ? "bg-white text-indigo-700 shadow-2xs font-extrabold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>প্রশ্ন-উত্তর (SAQ)</span>
              </button>
            </div>

            <button
              onClick={() => setOnlySaved((prev) => !prev)}
              className={`px-3 py-2 rounded-xl text-xs font-bold font-bengali flex items-center gap-1.5 transition-all cursor-pointer border ${
                onlySaved
                  ? "bg-amber-500 text-white border-amber-600 shadow-xs"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${onlySaved ? "fill-white" : ""}`} />
              <span>স্টারমার্ক ({savedIds.length})</span>
            </button>
          </div>
        </div>

        {/* Subtopic Filters */}
        {activeCategoryMeta.subtopics && (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-slate-400 font-bengali shrink-0 flex items-center gap-1 pr-1">
              <Filter className="w-3.5 h-3.5" />
              <span>টপিক:</span>
            </span>
            <button
              onClick={() => {
                setSelectedSubtopic("all");
                setPage(1);
              }}
              className={`px-3 py-1 rounded-lg text-xs font-bold font-bengali whitespace-nowrap transition-all cursor-pointer ${
                selectedSubtopic === "all"
                  ? "bg-slate-800 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              সব ১,০০০ টি
            </button>
            {activeCategoryMeta.subtopics.map((sub, idx) => {
              const isSelected = selectedSubtopic === sub;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedSubtopic(sub);
                    setPage(1);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-bold font-bengali whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? "bg-indigo-600 text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {sub}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Results Meta Info */}
      <div className="flex items-center justify-between text-xs font-bengali px-2 text-slate-500">
        <div>
          <span>প্রদর্শন করা হচ্ছে: </span>
          <span className="font-bold text-slate-900">
            {filteredList.length > 0
              ? `${(page - 1) * pageSize + 1} - ${Math.min(
                  page * pageSize,
                  filteredList.length
                )}`
              : 0}
          </span>
          <span> (মোট </span>
          <span className="font-bold text-slate-900">{filteredList.length}</span>
          <span> টির মধ্যে)</span>
        </div>

        {/* Quick Range Selector */}
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none hidden sm:flex">
          {[1, 2, 3, 4, 5, 10, 15, 20].map((pNum) => {
            if (pNum > totalPages) return null;
            return (
              <button
                key={pNum}
                onClick={() => setPage(pNum)}
                className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                  page === pNum
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                পৃষ্ঠা {pNum}
              </button>
            );
          })}
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-3">
        {paginatedList.map((item, idx) => {
          const isSaved = savedIds.includes(item.id);
          const isCopied = copiedId === item.id;
          const isSpeaking = speakingId === item.id;

          if (viewMode === "oneliner") {
            return (
              <div
                key={item.id}
                className="bg-white border border-slate-200/90 hover:border-indigo-300 rounded-2xl p-4 transition-all shadow-2xs hover:shadow-xs group space-y-2"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 font-sans">
                      {item.id}
                    </span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-bengali font-bold">
                          {item.topicBn}
                        </span>
                        {item.isImportant && (
                          <span className="text-[10px] bg-rose-50 text-rose-700 border border-rose-200 px-1.5 py-0.2 rounded font-bengali font-bold flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5 text-rose-500" />
                            <span>মোস্ট কমন</span>
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-900 font-bengali leading-relaxed font-medium">
                        {item.fullText}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => handleSpeak(item.fullText, item.id)}
                      className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                        isSpeaking
                          ? "bg-indigo-600 text-white"
                          : "text-slate-400 hover:text-indigo-600 hover:bg-indigo-50"
                      }`}
                      title="উচ্চারণ শুনুন"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => handleCopy(item.fullText, item.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors cursor-pointer"
                      title="কপি করুন"
                    >
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>

                    <button
                      onClick={() => toggleSave(item.id)}
                      className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                        isSaved
                          ? "text-amber-500 bg-amber-50"
                          : "text-slate-400 hover:text-amber-500 hover:bg-amber-50"
                      }`}
                      title="স্টারমার্ক করুন"
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isSaved ? "fill-amber-500" : ""}`} />
                    </button>
                  </div>
                </div>
              </div>
            );
          }

          // SAQ Q&A Card Mode
          return (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 shadow-2xs hover:shadow-xs transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white text-xs font-bold flex items-center justify-center font-sans">
                    Q{item.id}
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded font-bengali">
                    {item.topicBn}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleCopy(`${cleanQuestionText(item.questionBn)}\nউত্তর: ${item.answerBn}`, item.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 cursor-pointer"
                    title="কপি করুন"
                  >
                    {isCopied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <button
                    onClick={() => toggleSave(item.id)}
                    className={`p-1.5 rounded-lg cursor-pointer ${
                      isSaved ? "text-amber-500 bg-amber-50" : "text-slate-400 hover:text-amber-500"
                    }`}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isSaved ? "fill-amber-500" : ""}`} />
                  </button>
                </div>
              </div>

              <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-bengali leading-snug">
                {cleanQuestionText(item.questionBn)}
              </h3>

              <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-xs sm:text-sm text-emerald-950 font-bengali font-medium leading-relaxed">
                <span className="font-bold text-emerald-800">উত্তর: </span>
                {item.answerBn}
              </div>
            </div>
          );
        })}

        {isDemo && filteredList.length > DEMO_MAX_SAQ_PREVIEW && (
          <div className="bg-white border-2 border-dashed border-amber-300 rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-200 text-amber-700 flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-base sm:text-lg font-extrabold text-slate-900 font-bengali">
                বাকি {filteredList.length - DEMO_MAX_SAQ_PREVIEW}টি প্রশ্ন ও উত্তর ডেমো মোডে লক করা
              </h4>
              <p className="text-xs text-slate-600 font-bengali max-w-lg mx-auto leading-relaxed">
                ডেমো অ্যাকাউন্টে প্রতিটি বিভাগের প্রথম ১৫টি প্রশ্ন উন্মুক্ত রাখা হয়েছে। সম্পূর্ণ ৫,০০০+ SAQ ও ১-লাইনার লাইব্রেরি আনলক করতে ফ্রি অ্যাকাউন্ট তৈরি করুন।
              </p>
            </div>
            <button
              onClick={() => {
                if (onOpenAuth) onOpenAuth("register");
              }}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm font-bengali inline-flex items-center gap-2 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
            >
              <UserPlus className="w-4 h-4" />
              <span>সম্পূর্ণ লাইব্রেরি আনলক করুন (ফ্রি)</span>
            </button>
          </div>
        )}

        {filteredList.length === 0 && (
          <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center space-y-3">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-800 font-bengali">
              কোনো প্রশ্ন পাওয়া যায়নি
            </h3>
            <p className="text-xs text-slate-500 font-bengali">
              অন্য কোনো শব্দ দিয়ে সার্চ করুন অথবা ফিল্টার পরিবর্তন করুন।
            </p>
          </div>
        )}
      </div>

      {/* Bottom Pagination Controls */}
      {totalPages > 1 && (
        <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-between flex-wrap gap-3">
          <button
            disabled={page === 1}
            onClick={() => {
              setPage((p) => Math.max(1, p - 1));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold font-bengali flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>আগের ৫০টি প্রশ্ন</span>
          </button>

          <div className="text-xs font-bold font-bengali text-slate-700">
            পৃষ্ঠা {page} / {totalPages} (প্রতি পৃষ্ঠায় ৫০টি করে)
          </div>

          <button
            disabled={page === totalPages}
            onClick={() => {
              setPage((p) => Math.min(totalPages, p + 1));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold font-bengali flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-xs"
          >
            <span>পরের ৫০টি প্রশ্ন</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
