import React, { useState } from "react";
import {
  Globe,
  Calendar,
  Sparkles,
  Search,
  CheckCircle2,
  Bookmark,
  Share2,
  Tag,
  ArrowRight,
} from "lucide-react";
import { CURRENT_AFFAIRS_ITEMS } from "../data/currentAffairs";
import { cleanQuestionText } from "../utils/testGenerator";

export const CurrentAffairsView: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>(CURRENT_AFFAIRS_ITEMS[0]?.id || null);

  const categories = [
    { id: "all", label: "সব কারেন্ট অ্যাফেয়ার্স" },
    { id: "পশ্চিমবঙ্গ প্রকল্প", label: "পশ্চিমবঙ্গ প্রকল্প" },
    { id: "প্রশাসন ও পঞ্চায়েত", label: "প্রশাসন ও পঞ্চায়েত" },
    { id: "জাতীয় ও আন্তর্জাতিক", label: "জাতীয় ও আন্তর্জাতিক" },
  ];

  const filtered = CURRENT_AFFAIRS_ITEMS.filter((item) => {
    const matchCat = selectedCategory === "all" || item.category === selectedCategory;
    const matchSearch =
      item.titleBn.toLowerCase().includes(search.toLowerCase()) ||
      item.summaryBn.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-bengali">
            সাম্প্রতিক ঘটনাবলি ও প্রকল্প (Current Affairs)
          </h1>
          <p className="text-xs text-slate-500 font-bengali">
            পশ্চিমবঙ্গ সরকার, গ্রামীণ উন্নয়ন ও জাতীয় সাম্প্রতিক গুরুত্বপূর্ণ তথ্য
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="প্রকল্প বা ঘটনা খুঁজুন..."
            className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 font-bengali shadow-xs"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedCategory(c.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-bengali whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === c.id
                ? "bg-emerald-600 text-white shadow-xs"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-xs"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Articles Cards */}
      <div className="space-y-4">
        {filtered.map((item) => {
          const isExpanded = expandedId === item.id;

          return (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-full font-bengali">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-500 font-mono-num font-medium">{item.date}</span>
                </div>
              </div>

              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-bengali leading-snug">
                {item.titleBn}
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 font-bengali leading-relaxed">
                {item.summaryBn}
              </p>

              {/* Expandable Key Points */}
              {isExpanded ? (
                <div className="space-y-3 pt-2">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                    <span className="text-xs font-bold text-emerald-800 font-bengali flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      <span>পরীক্ষার জন্য গুরুত্বপূর্ণ পয়েন্টস:</span>
                    </span>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-700 font-bengali">
                      {item.bulletPoints.map((p, idx) => (
                        <li key={idx}>{p}</li>
                      ))}
                    </ul>
                  </div>

                  {item.practiceQuestion && (
                    <div className="bg-emerald-50/70 border border-emerald-200 p-4 rounded-2xl space-y-2">
                      <span className="text-xs font-bold text-emerald-900 font-bengali">
                        নমুনা সম্ভাব্য প্রশ্ন:
                      </span>
                      <p className="text-xs text-slate-800 font-bengali font-medium">
                        {cleanQuestionText(item.practiceQuestion.questionBn)}
                      </p>
                      <div className="text-xs font-bold text-emerald-800 font-bengali">
                        উত্তর: {item.practiceQuestion.options[item.practiceQuestion.correctIndex]}
                      </div>
                      <div className="text-[11px] text-slate-600 font-bengali">
                        {item.practiceQuestion.explanation}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => setExpandedId(null)}
                    className="text-xs text-slate-500 hover:text-slate-800 font-bengali cursor-pointer font-bold"
                  >
                    কমিয়ে দেখুন (Collapse) ▲
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setExpandedId(item.id)}
                  className="text-xs text-emerald-700 hover:underline font-bengali font-bold flex items-center gap-1 cursor-pointer"
                >
                  <span>বিস্তারিত ও সম্ভাব্য প্রশ্ন দেখুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
