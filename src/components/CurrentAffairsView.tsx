import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Search,
  CheckCircle2,
  Bookmark,
  ArrowRight,
  RefreshCw,
  Calendar,
  Layers,
  HelpCircle,
  Award,
  ChevronDown,
  ChevronUp,
  XCircle,
  BookOpen,
  Filter,
} from "lucide-react";
import { CurrentAffairItem } from "../types";
import { MONTH_LIST } from "../data/currentAffairs";
import {
  getAllCurrentAffairs,
  syncDailyCurrentAffairs,
  getBookmarkedCAIds,
  toggleBookmarkedCA,
  getTodayBengaliDate,
  getLastSyncDate,
} from "../services/currentAffairsService";
import { cleanQuestionText } from "../utils/testGenerator";

export const CurrentAffairsView: React.FC = () => {
  const [items, setItems] = useState<CurrentAffairItem[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedMonth, setSelectedMonth] = useState<string>("সব সময় (বিগত ১ বছর)");
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);
  const [onlyAiGenerated, setOnlyAiGenerated] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // User interactive quiz state: questionId -> selectedOptionIndex
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  
  // Sync state
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncMessage, setSyncMessage] = useState<string | null>(null);

  const { dateBn } = getTodayBengaliDate();
  const lastSync = getLastSyncDate();

  // Load items and initialize
  useEffect(() => {
    const loaded = getAllCurrentAffairs();
    setItems(loaded);
    if (loaded.length > 0) {
      setExpandedId(loaded[0].id);
    }
    setBookmarkedIds(getBookmarkedCAIds());

    // Auto sync on mount in background
    handleSync(false);
  }, []);

  const handleSync = async (force = false) => {
    setIsSyncing(true);
    setSyncMessage(null);
    try {
      const result = await syncDailyCurrentAffairs(force);
      setItems(result.items);
      setSyncMessage(result.message);
      if (result.addedCount > 0 && result.items[0]) {
        setExpandedId(result.items[0].id);
      }
    } catch (e) {
      setSyncMessage("লোকাল ক্যাশ থেকে কারেন্ট অ্যাফেয়ার্স লোড হয়েছে।");
    } finally {
      setIsSyncing(false);
      setTimeout(() => setSyncMessage(null), 5000);
    }
  };

  const handleToggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = toggleBookmarkedCA(id);
    setBookmarkedIds(updated);
  };

  const handleSelectQuizOption = (itemId: string, optionIndex: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [itemId]: optionIndex,
    }));
  };

  const categories = [
    { id: "all", label: "সব বিষয়" },
    { id: "পশ্চিমবঙ্গ প্রকল্প", label: "পশ্চিমবঙ্গ প্রকল্প" },
    { id: "প্রশাসন ও পঞ্চায়েত", label: "প্রশাসন ও পঞ্চায়েত" },
    { id: "জাতীয় ও আন্তর্জাতিক", label: "জাতীয় ও আন্তর্জাতিক" },
    { id: "পুরস্কার ও খেলাধুলা", label: "পুরস্কার ও খেলাধুলা" },
    { id: "বিজ্ঞান ও পরিবেশ", label: "বিজ্ঞান ও পরিবেশ" },
  ];

  const filtered = items.filter((item) => {
    const matchCat = selectedCategory === "all" || item.category === selectedCategory;
    const matchMonth =
      selectedMonth === "সব সময় (বিগত ১ বছর)" ||
      item.monthYear === selectedMonth ||
      (!item.monthYear && selectedMonth.includes("২০২৬"));
    const matchBookmark = !onlyBookmarked || bookmarkedIds.includes(item.id);
    const matchAi = !onlyAiGenerated || item.isAiGenerated;
    const matchSearch =
      item.titleBn.toLowerCase().includes(search.toLowerCase()) ||
      item.summaryBn.toLowerCase().includes(search.toLowerCase()) ||
      (item.practiceQuestion?.questionBn || "").toLowerCase().includes(search.toLowerCase());
    return matchCat && matchMonth && matchBookmark && matchAi && matchSearch;
  });

  return (
    <div className="space-y-6 pb-16 animate-in fade-in duration-200">
      {/* Top Hero Banner */}
      <div className="bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
        <div className="absolute -right-8 -bottom-8 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 px-3 py-1 rounded-full text-emerald-300 text-xs font-bold font-bengali">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>AI চালিত দৈনিক আপডেট • বিগত ১ বছরের সম্পূর্ণ আর্কাইভ</span>
            </div>
            <h1 className="text-xl sm:text-3xl font-extrabold font-bengali leading-tight">
              সাম্প্রতিক ঘটনাবলি ও সরকারি প্রকল্প (Current Affairs)
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 font-bengali leading-relaxed">
              পশ্চিমবঙ্গ গ্রাম পঞ্চায়েত পরীক্ষার জন্য বিশেষ গুরুত্বসম্পন্ন সরকারি প্রকল্প, ত্রিস্তর পঞ্চায়েত সংস্কার ও গুরুত্বপূর্ণ ঘটনাবলির পুঙ্খানুপুঙ্খ তথ্য ও সম্ভাব্য MCQ।
            </p>
          </div>

          {/* Sync Trigger Box */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 text-center shrink-0 space-y-3">
            <div className="text-xs text-emerald-200 font-bengali">
              আজকের তারিখ: <span className="font-bold text-white">{dateBn}</span>
            </div>
            <button
              onClick={() => handleSync(true)}
              disabled={isSyncing}
              className="w-full px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all font-bengali flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isSyncing ? "animate-spin" : ""}`} />
              <span>{isSyncing ? "AI আপডেট খোঁজা হচ্ছে..." : "AI দৈনিক আপডেট সিঙ্ক করুন"}</span>
            </button>
            <div className="text-[11px] text-slate-300 font-bengali">
              মোট সংরক্ষিত: <span className="font-bold text-white font-mono-num">{items.length}</span> টি ঘটনা
            </div>
          </div>
        </div>

        {/* Sync Toast Feedback */}
        {syncMessage && (
          <div className="mt-4 p-3 bg-emerald-500/20 border border-emerald-400/30 rounded-xl text-emerald-200 text-xs font-bengali flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{syncMessage}</span>
          </div>
        )}
      </div>

      {/* Control Bar: Search, Month, Filter Toggles */}
      <div className="bg-white border border-slate-200 rounded-3xl p-4 sm:p-5 shadow-xs space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="প্রকল্প, জেলা, তারিখ বা কিওয়ার্ড দিয়ে অনুসন্ধান করুন..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white font-bengali shadow-xs transition-colors"
            />
          </div>

          {/* Month Selector Dropdown */}
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block" />
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="w-full sm:w-auto bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm font-bold text-slate-800 focus:outline-none focus:border-emerald-600 font-bengali cursor-pointer"
            >
              {MONTH_LIST.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* Toggle Pills: Bookmark & AI Only */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setOnlyBookmarked(!onlyBookmarked)}
              className={`px-3 py-2 rounded-xl text-xs font-bold font-bengali flex items-center gap-1.5 transition-all cursor-pointer ${
                onlyBookmarked
                  ? "bg-amber-100 text-amber-900 border border-amber-300"
                  : "bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${onlyBookmarked ? "fill-amber-600 text-amber-600" : ""}`} />
              <span>বুকমার্ক ({bookmarkedIds.length})</span>
            </button>

            <button
              onClick={() => setOnlyAiGenerated(!onlyAiGenerated)}
              className={`px-3 py-2 rounded-xl text-xs font-bold font-bengali flex items-center gap-1.5 transition-all cursor-pointer ${
                onlyAiGenerated
                  ? "bg-emerald-100 text-emerald-900 border border-emerald-300"
                  : "bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>AI দৈনিক</span>
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-1">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold font-bengali whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === c.id
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1 font-bengali">
        <span>
          প্রদর্শিত হচ্ছে: <strong className="text-slate-800 font-mono-num">{filtered.length}</strong> টি সাম্প্রতিক তথ্য
        </span>
        {selectedMonth !== "সব সময় (বিগত ১ বছর)" && (
          <span className="bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-md font-semibold">
            {selectedMonth}
          </span>
        )}
      </div>

      {/* Articles Feed */}
      {filtered.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center space-y-3">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800 font-bengali">কোনো তথ্য পাওয়া যায়নি</h3>
          <p className="text-xs text-slate-500 font-bengali max-w-sm mx-auto">
            অনুগ্রহ করে সার্চ কিওয়ার্ড পরিবর্তন করুন অথবা ফিল্টার রিসেট করুন।
          </p>
          <button
            onClick={() => {
              setSearch("");
              setSelectedCategory("all");
              setSelectedMonth("সব সময় (বিগত ১ বছর)");
              setOnlyBookmarked(false);
              setOnlyAiGenerated(false);
            }}
            className="px-4 py-2 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-xl hover:bg-emerald-100 font-bengali cursor-pointer"
          >
            সব ফিল্টার রিসেট করুন
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((item) => {
            const isExpanded = expandedId === item.id;
            const isBookmarked = bookmarkedIds.includes(item.id);
            const userSelected = userAnswers[item.id];
            const hasAnswered = userSelected !== undefined;

            return (
              <div
                key={item.id}
                className={`bg-white border rounded-3xl p-5 sm:p-6 space-y-4 shadow-xs transition-all ${
                  isExpanded ? "border-emerald-300 ring-2 ring-emerald-50" : "border-slate-200 hover:border-slate-300"
                }`}
              >
                {/* Header line: Category tag, Date, AI tag, Bookmark */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-full font-bengali">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-500 font-bengali font-medium flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.date}</span>
                    </span>
                    {item.isAiGenerated && (
                      <span className="text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-full font-bengali flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5 text-amber-600" />
                        <span>AI দৈনিক আপডেট</span>
                      </span>
                    )}
                  </div>

                  <button
                    onClick={(e) => handleToggleBookmark(item.id, e)}
                    title={isBookmarked ? "বুকমার্ক মুছুন" : "রিভিশনের জন্য বুকমার্ক করুন"}
                    className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-amber-600 transition-colors cursor-pointer"
                  >
                    <Bookmark
                      className={`w-4 h-4 ${
                        isBookmarked ? "fill-amber-500 text-amber-500" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Title */}
                <h2
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className="text-base sm:text-lg font-bold text-slate-900 font-bengali leading-snug cursor-pointer hover:text-emerald-700 transition-colors"
                >
                  {item.titleBn}
                </h2>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-700 font-bengali leading-relaxed">
                  {item.summaryBn}
                </p>

                {/* Expanded Details: Key Points & Interactive MCQ */}
                {isExpanded ? (
                  <div className="space-y-4 pt-2 border-t border-slate-100">
                    {/* Key Exam Points */}
                    {item.bulletPoints && item.bulletPoints.length > 0 && (
                      <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 space-y-2.5">
                        <span className="text-xs font-bold text-emerald-900 font-bengali flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                          <span>পরীক্ষার জন্য অতি গুরুত্বপূর্ণ তথ্য (Key Points):</span>
                        </span>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 font-bengali">
                          {item.bulletPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-emerald-600 font-bold shrink-0 mt-0.5">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Interactive Practice Question */}
                    {item.practiceQuestion && (
                      <div className="bg-emerald-50/70 border border-emerald-200 p-4 sm:p-5 rounded-2xl space-y-3.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-emerald-950 font-bengali flex items-center gap-1.5">
                            <HelpCircle className="w-4 h-4 text-emerald-700" />
                            <span>সম্ভাব্য পরীক্ষার প্রশ্ন (MCQ Practice):</span>
                          </span>
                          {hasAnswered && (
                            <span
                              className={`text-[11px] font-bold px-2 py-0.5 rounded-full font-bengali ${
                                userSelected === item.practiceQuestion.correctIndex
                                  ? "bg-emerald-200 text-emerald-900"
                                  : "bg-rose-100 text-rose-800"
                              }`}
                            >
                              {userSelected === item.practiceQuestion.correctIndex
                                ? "সঠিক উত্তর!"
                                : "ভুল উত্তর!"}
                            </span>
                          )}
                        </div>

                        <p className="text-xs sm:text-sm text-slate-900 font-bengali font-bold leading-relaxed">
                          {cleanQuestionText(item.practiceQuestion.questionBn)}
                        </p>

                        {/* Options Buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {item.practiceQuestion.options.map((opt, optIdx) => {
                            const isCorrect = optIdx === item.practiceQuestion?.correctIndex;
                            const isSelected = userSelected === optIdx;

                            let optionClasses =
                              "bg-white border-slate-200 text-slate-800 hover:border-emerald-500 hover:bg-emerald-50/30";
                            if (hasAnswered) {
                              if (isCorrect) {
                                optionClasses =
                                  "bg-emerald-600 text-white border-emerald-600 font-bold shadow-xs";
                              } else if (isSelected) {
                                optionClasses = "bg-rose-100 border-rose-300 text-rose-900";
                              } else {
                                optionClasses = "bg-white/60 border-slate-200 text-slate-400";
                              }
                            }

                            return (
                              <button
                                key={optIdx}
                                onClick={() => handleSelectQuizOption(item.id, optIdx)}
                                className={`text-left p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm font-bengali transition-all flex items-center justify-between cursor-pointer ${optionClasses}`}
                              >
                                <div className="flex items-center gap-2">
                                  <span
                                    className={`w-5 h-5 rounded-full text-[11px] flex items-center justify-center font-bold ${
                                      hasAnswered && isCorrect
                                        ? "bg-white text-emerald-800"
                                        : "bg-slate-100 text-slate-600"
                                    }`}
                                  >
                                    {String.fromCharCode(65 + optIdx)}
                                  </span>
                                  <span>{cleanQuestionText(opt)}</span>
                                </div>
                                {hasAnswered && isCorrect && (
                                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                                )}
                                {hasAnswered && isSelected && !isCorrect && (
                                  <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {/* Explanation Box */}
                        {hasAnswered && (
                          <div className="p-3 bg-white border border-emerald-200 rounded-xl space-y-1 text-xs font-bengali animate-in fade-in">
                            <span className="font-bold text-emerald-900">বিশদ ব্যাখ্যা:</span>
                            <p className="text-slate-700 leading-relaxed">
                              {item.practiceQuestion.explanation}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-end pt-1">
                      <button
                        onClick={() => setExpandedId(null)}
                        className="text-xs text-slate-500 hover:text-slate-800 font-bengali cursor-pointer font-bold flex items-center gap-1"
                      >
                        <span>সংক্ষিপ্ত করুন</span>
                        <ChevronUp className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setExpandedId(item.id)}
                    className="text-xs text-emerald-700 hover:underline font-bengali font-bold flex items-center gap-1 cursor-pointer pt-1"
                  >
                    <span>গুরুত্বপূর্ণ পয়েন্টস ও সম্ভাব্য MCQ প্রশ্ন দেখুন</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
