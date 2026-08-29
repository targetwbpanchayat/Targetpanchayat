import React, { useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Search,
  Check,
  FileText,
  Sparkles,
  ArrowLeft,
  Share2,
  Bookmark,
  CheckSquare,
  HelpCircle,
  Edit3,
  Save,
  Zap,
  HelpCircle as QuestionIcon,
  ChevronDown,
  ChevronUp,
  Copy,
  Layers,
  Filter
} from "lucide-react";
import { SubjectId, StudyChapter, UserProgress, ChapterSAQ } from "../types";
import { SUBJECTS } from "../data/subjects";
import { STUDY_CHAPTERS } from "../data/studyData";
import { GK_CATEGORIES } from "../data/gkVol5";
import { saveUserProgress } from "../utils/storage";
import { cleanQuestionText } from "../utils/testGenerator";
import { Gk5000SaqExplorer } from "./Gk5000SaqExplorer";

interface StudyViewProps {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  selectedChapterId: string | null;
  setSelectedChapterId: (id: string | null) => void;
  onLaunchPractice: (subjectId: SubjectId) => void;
}

export const StudyView: React.FC<StudyViewProps> = ({
  progress,
  setProgress,
  selectedChapterId,
  setSelectedChapterId,
  onLaunchPractice,
}) => {
  const [activeSubject, setActiveSubject] = useState<SubjectId | "all">("all");
  const [activeGkCat, setActiveGkCat] = useState<string>("all");
  const [show5000Explorer, setShow5000Explorer] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [personalNote, setPersonalNote] = useState("");
  const [noteSaved, setNoteSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<"notes" | "oneliners" | "saq">("notes");
  const [expandedSaqs, setExpandedSaqs] = useState<Record<string, boolean>>({});
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Active chapter being read
  const currentChapter = STUDY_CHAPTERS.find((c) => c.id === selectedChapterId);

  // Load note for active chapter
  React.useEffect(() => {
    if (selectedChapterId && progress.customNotes?.[selectedChapterId]) {
      setPersonalNote(progress.customNotes[selectedChapterId]);
    } else {
      setPersonalNote("");
    }
    setNoteSaved(false);
    setActiveTab("notes");
  }, [selectedChapterId, progress.customNotes]);

  // Toggle SAQ expansion
  const toggleSaq = (saqId: string) => {
    setExpandedSaqs((prev) => ({
      ...prev,
      [saqId]: !prev[saqId],
    }));
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Toggle chapter completion (Done status)
  const toggleChapterDone = (chapterId: string) => {
    const isCompleted = progress.completedChapters.includes(chapterId);
    let updatedCompleted: string[];
    if (isCompleted) {
      updatedCompleted = progress.completedChapters.filter((id) => id !== chapterId);
    } else {
      updatedCompleted = [...progress.completedChapters, chapterId];
    }
    const updated: UserProgress = {
      ...progress,
      completedChapters: updatedCompleted,
    };
    setProgress(updated);
    saveUserProgress(updated);
  };

  const handleSaveNote = () => {
    if (!selectedChapterId) return;
    const updatedNotes = {
      ...(progress.customNotes || {}),
      [selectedChapterId]: personalNote,
    };
    const updated: UserProgress = {
      ...progress,
      customNotes: updatedNotes,
    };
    setProgress(updated);
    saveUserProgress(updated);
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 2000);
  };

  // Filtered chapters
  const filteredChapters = STUDY_CHAPTERS.filter((ch) => {
    const matchSubject = activeSubject === "all" || ch.subjectId === activeSubject;
    let matchGkCat = true;
    if (activeSubject === "gk" || (activeSubject === "all" && activeGkCat !== "all")) {
      if (activeGkCat === "history") matchGkCat = ch.id.startsWith("gk_hist");
      else if (activeGkCat === "geography") matchGkCat = ch.id.startsWith("gk_geo");
      else if (activeGkCat === "polity") matchGkCat = ch.id.startsWith("gk_pol");
      else if (activeGkCat === "science") matchGkCat = ch.id.startsWith("gk_sci");
      else if (activeGkCat === "static") matchGkCat = ch.id.startsWith("gk_stat");
    }
    const matchSearch =
      ch.titleBn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ch.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ch.titleEn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchSubject && matchGkCat && matchSearch;
  });

  // If a chapter is selected, show the full formatted reading view
  if (currentChapter) {
    const isDone = progress.completedChapters.includes(currentChapter.id);
    const oneLiners = currentChapter.content.oneLiners || currentChapter.content.quickRevisionPoints || [];
    const saqs = currentChapter.content.saqs || [];

    return (
      <div className="space-y-6 pb-16 animate-in fade-in duration-200">
        {/* Top Sticky Bar */}
        <div className="flex items-center justify-between bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 sticky top-16 z-30 shadow-sm">
          <button
            onClick={() => setSelectedChapterId(null)}
            className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-emerald-700 font-bengali cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>সব অধ্যায়ে ফিরে যান</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleChapterDone(currentChapter.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-bengali flex items-center gap-1.5 transition-all cursor-pointer ${
                isDone
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300"
              }`}
            >
              <Check className="w-3.5 h-3.5" />
              <span>{isDone ? "পড়া সম্পন্ন (Done)" : "পড়া শেষ চিহ্নিত করুন"}</span>
            </button>

            <button
              onClick={() => onLaunchPractice(currentChapter.subjectId)}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-sky-600 hover:bg-sky-700 text-white font-bengali flex items-center gap-1.5 transition-colors cursor-pointer hidden sm:flex"
            >
              <CheckSquare className="w-3.5 h-3.5" />
              <span>MCQ প্র্যাকটিস</span>
            </button>
          </div>
        </div>

        {/* Chapter Header Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 px-2.5 py-0.5 rounded-full font-bengali">
              {currentChapter.subjectId === "panchayat" && "পঞ্চায়েত ব্যবস্থা ও গ্রামীণ উন্নয়ন (ভলিউম ১)"}
              {currentChapter.subjectId === "bengali" && "বাংলা ভাষা, ব্যাকরণ ও সাহিত্য (ভলিউম ২)"}
              {currentChapter.subjectId === "english" && "English Grammar"}
              {currentChapter.subjectId === "math" && "পাটিগণিত ও গণিত"}
              {currentChapter.subjectId === "gk" && "সাধারণ জ্ঞান ও পশ্চিমবঙ্গ"}
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>পড়ার সময়: ~{currentChapter.estimatedMinutes} মিনিট</span>
            </span>
            {isDone && (
              <span className="text-xs text-emerald-700 font-bold flex items-center gap-1 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>সম্পন্ন</span>
              </span>
            )}
          </div>

          <h1 className="text-xl sm:text-3xl font-extrabold text-slate-900 font-bengali leading-snug">
            {currentChapter.titleBn}
          </h1>
          <p className="text-sm text-slate-500 font-display italic">
            {currentChapter.titleEn}
          </p>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 font-bengali leading-relaxed">
            {currentChapter.content.introduction}
          </div>

          {/* Study Tabs Bar */}
          <div className="flex items-center gap-2 pt-2 border-t border-slate-100 flex-wrap">
            <button
              onClick={() => setActiveTab("notes")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-bengali flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === "notes"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>বিস্তারিত স্টাডি নোটস</span>
            </button>

            <button
              onClick={() => setActiveTab("oneliners")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-bengali flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === "oneliners"
                  ? "bg-amber-600 text-white shadow-xs"
                  : "bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200"
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>একনজরে ওয়ান-লাইনার ({oneLiners.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("saq")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-bengali flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === "saq"
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "bg-indigo-50 text-indigo-800 hover:bg-indigo-100 border border-indigo-200"
              }`}
            >
              <QuestionIcon className="w-4 h-4" />
              <span>SAQ অতি-সংক্ষিপ্ত প্রশ্নোত্তর ({saqs.length || currentChapter.content.examTips.length})</span>
            </button>
          </div>
        </div>

        {/* TAB 1: DETAILED NOTES */}
        {activeTab === "notes" && (
          <div className="space-y-6">
            {/* Identified Sub-Topics */}
            {currentChapter.subTopics && currentChapter.subTopics.length > 0 && (
              <div className="p-5 rounded-3xl bg-white border border-slate-200 space-y-3 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-950 font-bold text-xs sm:text-sm font-bengali">
                  <FileText className="w-4 h-4 text-emerald-700" />
                  <span>চিহ্নিত উপ-বিষয়সমূহ (Sub-Topics Breakdown):</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentChapter.subTopics.map((sub) => (
                    <div key={sub.id} className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 shadow-2xs space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                          {sub.orderIndex}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-bengali">{sub.titleBn}</h4>
                      </div>
                      <p className="text-xs text-slate-600 font-bengali leading-relaxed pl-7">{sub.summaryBn}</p>
                      {sub.keyConcepts && sub.keyConcepts.length > 0 && (
                        <div className="flex flex-wrap gap-1 pl-7 pt-1">
                          {sub.keyConcepts.map((kc, kIdx) => (
                            <span key={kIdx} className="text-[10px] bg-white text-slate-700 border border-slate-200 px-2 py-0.5 rounded-md font-bengali">
                              {kc}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Chapter Detailed Sections */}
            {currentChapter.content.sections.map((sec, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs"
              >
                <h2 className="text-lg sm:text-xl font-bold text-emerald-800 font-bengali flex items-center gap-2">
                  <span>{sec.heading}</span>
                </h2>

                <div className="space-y-2 text-xs sm:text-sm text-slate-800 font-bengali leading-relaxed">
                  {sec.body.map((p, pIdx) => (
                    <p key={pIdx} className="text-slate-700 leading-relaxed">{p}</p>
                  ))}
                </div>

                {/* Key Points Callout */}
                {sec.keyPoints && sec.keyPoints.length > 0 && (
                  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-r-2xl space-y-1.5">
                    <span className="text-xs font-bold text-emerald-900 font-bengali flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      <span>বিশেষ স্মরণীয় তথ্য (Key Highlights):</span>
                    </span>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-700 font-bengali">
                      {sec.keyPoints.map((kp, kpIdx) => (
                        <li key={kpIdx}>{kp}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Data Tables */}
                {sec.tables && (
                  <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white mt-4 shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm font-bengali">
                      <thead className="bg-slate-50 text-slate-800">
                        <tr>
                          {sec.tables.headers.map((h, hIdx) => (
                            <th key={hIdx} className="p-3 border-b border-slate-200 font-bold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700">
                        {sec.tables.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50/60">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-3">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: ONE-LINERS */}
        {activeTab === "oneliners" && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-base font-bengali">
                <Zap className="w-5 h-5 text-amber-600" />
                <span>একনজরে দ্রুত রিভিশন ওয়ান-লাইনার (Rapid 1-Liners)</span>
              </div>
              <span className="text-xs text-slate-500 font-bengali bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                মোট {oneLiners.length} টি ওয়ান-লাইনার
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3 pt-2">
              {oneLiners.map((line, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between gap-3 p-4 rounded-2xl bg-amber-50/40 border border-amber-200/70 hover:bg-amber-50 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-900 font-bengali leading-relaxed">
                      {line}
                    </p>
                  </div>
                  <button
                    onClick={() => handleCopy(line, `ol_${idx}`)}
                    className="text-slate-400 hover:text-amber-700 p-1.5 rounded-lg transition-colors cursor-pointer shrink-0"
                    title="কপি করুন"
                  >
                    {copiedText === `ol_${idx}` ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: SAQ (SHORT ANSWER QUESTIONS) */}
        {activeTab === "saq" && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-indigo-900 font-bold text-base font-bengali">
                <QuestionIcon className="w-5 h-5 text-indigo-600" />
                <span>SAQ অতি-সংক্ষিপ্ত প্রশ্ন ও উত্তর সম্ভার (Model Answers)</span>
              </div>
              <span className="text-xs text-slate-500 font-bengali bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200">
                {saqs.length > 0 ? `মোট ${saqs.length} টি SAQ` : `${currentChapter.content.examTips.length} টি টিপস`}
              </span>
            </div>

            {saqs.length > 0 ? (
              <div className="space-y-4 pt-2">
                {saqs.map((saq, idx) => {
                  const isOpen = expandedSaqs[saq.id] ?? true; // default open
                  return (
                    <div
                      key={saq.id || idx}
                      className="border border-indigo-100 rounded-2xl overflow-hidden bg-slate-50/50 shadow-2xs"
                    >
                      <button
                        onClick={() => toggleSaq(saq.id)}
                        className="w-full p-4 flex items-center justify-between text-left hover:bg-indigo-50/40 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3 pr-2">
                          <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                            Q{idx + 1}
                          </span>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-bengali leading-snug">
                            {cleanQuestionText(saq.questionBn)}
                          </h4>
                        </div>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-indigo-600 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-indigo-600 shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="p-4 bg-white border-t border-indigo-100 text-xs sm:text-sm space-y-2.5 font-bengali animate-in fade-in duration-150">
                          <div className="flex items-start gap-2 text-slate-800 leading-relaxed">
                            <span className="font-bold text-emerald-700 shrink-0">উত্তর:</span>
                            <p>{saq.answerBn}</p>
                          </div>
                          {saq.importantNoteBn && (
                            <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-medium">
                              💡 <span className="font-bold">বিশেষ দ্রষ্টব্য:</span> {saq.importantNoteBn}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-3 pt-2">
                {currentChapter.content.examTips.map((tip, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-indigo-50/40 border border-indigo-200 space-y-1.5 font-bengali">
                    <span className="text-xs font-bold text-indigo-900">প্রশ্নোত্তর পয়েন্ট {idx + 1}:</span>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Exam Tips & Quick Revision Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Exam Tips */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-3xl p-6 space-y-3 shadow-xs">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm sm:text-base font-bengali">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>পরীক্ষার জন্য বিশেষ পরামর্শ (Exam Tips)</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-bengali">
              {currentChapter.content.examTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-amber-200">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Revision Points */}
          <div className="bg-teal-50/70 border border-teal-200 rounded-3xl p-6 space-y-3 shadow-xs">
            <div className="flex items-center gap-2 text-teal-900 font-bold text-sm sm:text-base font-bengali">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>একনজরে দ্রুত রিভিশন</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-bengali">
              {currentChapter.content.quickRevisionPoints.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-teal-200">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Personal Notes Taker */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-3 shadow-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm font-bengali">
              <Edit3 className="w-4 h-4 text-emerald-600" />
              <span>এই অধ্যায়ের নিজস্ব নোটস ও শর্টকাট সেভ করুন</span>
            </div>
            {noteSaved && (
              <span className="text-xs text-emerald-700 font-bold font-bengali flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                <span>সংরক্ষিত হয়েছে!</span>
              </span>
            )}
          </div>
          <textarea
            value={personalNote}
            onChange={(e) => setPersonalNote(e.target.value)}
            placeholder="আপনার গুরুত্বপূর্ণ নোটস বা শর্টকাট সূত্র এখানে লিখে সেভ করে রাখুন..."
            rows={3}
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600"
          />
          <div className="flex justify-end">
            <button
              onClick={handleSaveNote}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl font-bengali flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Save className="w-3.5 h-3.5" />
              <span>নোট সেভ করুন</span>
            </button>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white border border-slate-200 rounded-3xl shadow-xs">
          <button
            onClick={() => setSelectedChapterId(null)}
            className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl font-bengali cursor-pointer"
          >
            ← সব অধ্যায় দেখুন
          </button>
          <button
            onClick={() => toggleChapterDone(currentChapter.id)}
            className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold font-bengali flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              isDone
                ? "bg-slate-200 text-slate-800"
                : "bg-emerald-600 hover:bg-emerald-700 text-white"
            }`}
          >
            <Check className="w-4 h-4" />
            <span>{isDone ? "পড়া সম্পন্ন হয়েছে (Done)" : "পড়া শেষ হিসেবে চিহ্নিত করুন"}</span>
          </button>
        </div>
      </div>
    );
  }

  // If 5000 SAQ Explorer is open, render it directly
  if (show5000Explorer) {
    return (
      <div className="space-y-4 pb-12">
        <button
          onClick={() => setShow5000Explorer(false)}
          className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bengali font-bold text-xs flex items-center gap-2 cursor-pointer transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>অধ্যায় ভিত্তিক স্টাডি ভিউতে ফিরে যান</span>
        </button>
        <Gk5000SaqExplorer
          initialCategory={activeGkCat !== "all" ? (activeGkCat as any) : "history"}
          onClose={() => setShow5000Explorer(false)}
        />
      </div>
    );
  }

  // Chapter List View
  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* Header & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-bengali">
            বিষয়ভিত্তিক স্টাডি মেটেরিয়াল, SAQ ও ওয়ান-লাইনার
          </h1>
          <p className="text-xs text-slate-500 font-bengali">
            পশ্চিমবঙ্গ পঞ্চায়েত রিক্রুটমেন্টের সম্পূর্ণ সিলেবাস অনুযায়ী প্রস্তুতকৃত বিশদ নোটস ও প্রশ্ন সম্ভার
          </p>
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="অধ্যায় বা টপিক খুঁজুন..."
            className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 font-bengali shadow-xs"
          />
        </div>
      </div>

      {/* Featured 5,000 SAQs Mega Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-rose-600 to-indigo-700 text-white rounded-3xl p-5 sm:p-6 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-full font-bengali uppercase">
              ভলিউম ৫ স্পেশাল
            </span>
            <span className="text-xs font-bold font-bengali text-amber-100">
              ৫টি বিষয়ে প্রতিটিতে ১,০০০ করে মোট ৫,০০০ SAQ
            </span>
          </div>
          <h2 className="text-base sm:text-xl font-extrabold font-bengali">
            সাধারণ জ্ঞান মেগা বুস্টার: ৫,০০০ SAQ ও ১-লাইনার লাইব্রেরি
          </h2>
          <p className="text-xs text-white/90 font-bengali max-w-2xl">
            ইতিহাস (১০০০), ভূগোল (১০০০), রাষ্ট্রনীতি ও পঞ্চায়েত আইন (১০০০), সাধারণ বিজ্ঞান (১০০০) এবং স্ট্যাটিক জিকে (১০০০) - সম্পূর্ণ সার্চ ও রিভিশন মোড।
          </p>
        </div>

        <button
          onClick={() => setShow5000Explorer(true)}
          className="px-5 py-3 rounded-2xl bg-white text-rose-700 hover:bg-rose-50 font-bengali font-extrabold text-xs sm:text-sm shadow-md flex items-center gap-2 shrink-0 transition-transform active:scale-95 cursor-pointer"
        >
          <Zap className="w-4 h-4 fill-rose-600" />
          <span>৫,০০০ SAQ লাইব্রেরি খুলুন</span>
        </button>
      </div>

      {/* Subject Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => {
            setActiveSubject("all");
            setActiveGkCat("all");
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold font-bengali whitespace-nowrap transition-all cursor-pointer ${
            activeSubject === "all"
              ? "bg-emerald-600 text-white shadow-xs"
              : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-xs"
          }`}
        >
          সব বিষয় ({STUDY_CHAPTERS.length})
        </button>
        {SUBJECTS.map((sub) => {
          const isActive = activeSubject === sub.id;
          const count = STUDY_CHAPTERS.filter((c) => c.subjectId === sub.id).length;
          return (
            <button
              key={sub.id}
              onClick={() => {
                setActiveSubject(sub.id);
                if (sub.id !== "gk") setActiveGkCat("all");
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-bengali whitespace-nowrap transition-all cursor-pointer ${
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

      {/* GK Vol 5 Sub-Categories Tabs (Visible when GK or All is selected) */}
      {(activeSubject === "gk" || activeSubject === "all") && (
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 sm:p-4 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 font-bengali">
              <Layers className="w-3.5 h-3.5 text-rose-600" />
              <span>সাধারণ জ্ঞান (ভলিউম ৫) - ৫টি বিশেষ বিভাগ:</span>
            </div>
            <span className="text-[11px] text-slate-500 font-bengali">
              মোট ১০৯টি উপ-অধ্যায়
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none flex-wrap sm:flex-nowrap">
            <button
              onClick={() => {
                if (activeSubject !== "gk") setActiveSubject("gk");
                setActiveGkCat("all");
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-bengali whitespace-nowrap transition-all cursor-pointer ${
                activeGkCat === "all" && activeSubject === "gk"
                  ? "bg-slate-800 text-white shadow-xs"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              সব জিকে (১০৯টি)
            </button>
            {GK_CATEGORIES.map((cat) => {
              const isCatActive = activeGkCat === cat.id && activeSubject === "gk";
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveSubject("gk");
                    setActiveGkCat(cat.id);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold font-bengali whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                    isCatActive
                      ? "bg-rose-600 text-white shadow-xs"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-rose-50 hover:text-rose-700"
                  }`}
                >
                  <span>{cat.nameBn}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-sans ${isCatActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"}`}>
                    {cat.subsectionsCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Chapters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredChapters.map((chapter) => {
          const isDone = progress.completedChapters.includes(chapter.id);
          const oneLinersCount = chapter.content.oneLiners?.length || chapter.content.quickRevisionPoints.length;
          const saqCount = chapter.content.saqs?.length || chapter.content.examTips.length;

          return (
            <div
              key={chapter.id}
              className={`bg-white border rounded-3xl p-5 sm:p-6 space-y-4 transition-all hover:border-emerald-300 shadow-xs flex flex-col justify-between ${
                isDone ? "border-emerald-300 bg-emerald-50/20" : "border-slate-200"
              }`}
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-[10px] font-bold bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200 font-bengali">
                    {chapter.subjectId === "panchayat" && "পঞ্চায়েত ব্যবস্থা (ভলিউম ১)"}
                    {chapter.subjectId === "bengali" && "বাংলা ব্যাকরণ ও সাহিত্য (ভলিউম ২)"}
                    {chapter.subjectId === "english" && "English Grammar"}
                    {chapter.subjectId === "math" && "পাটিগণিত"}
                    {chapter.subjectId === "gk" && "সাধারণ জ্ঞান"}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{chapter.estimatedMinutes} মি</span>
                    </span>
                    {isDone && (
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        <span>Done</span>
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-bengali leading-snug">
                  {chapter.titleBn}
                </h3>
                <p className="text-xs text-slate-600 font-bengali line-clamp-2 leading-relaxed">
                  {chapter.summary}
                </p>

                {/* Features Badges */}
                <div className="flex items-center gap-1.5 flex-wrap pt-1">
                  <span className="text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-md font-bengali flex items-center gap-1">
                    <Zap className="w-2.5 h-2.5 text-amber-600" />
                    <span>{oneLinersCount}টি ওয়ান-লাইনার</span>
                  </span>
                  <span className="text-[10px] font-bold bg-indigo-50 text-indigo-800 border border-indigo-200 px-2 py-0.5 rounded-md font-bengali flex items-center gap-1">
                    <QuestionIcon className="w-2.5 h-2.5 text-indigo-600" />
                    <span>{saqCount}টি SAQ প্রশ্নোত্তর</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 gap-3">
                <button
                  onClick={() => toggleChapterDone(chapter.id)}
                  className={`text-xs font-semibold font-bengali flex items-center gap-1.5 transition-colors cursor-pointer ${
                    isDone ? "text-emerald-700 font-bold" : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  <div className={`w-4 h-4 rounded border flex items-center justify-center ${isDone ? "bg-emerald-600 border-emerald-600 text-white" : "border-slate-300"}`}>
                    {isDone && <Check className="w-3 h-3" />}
                  </div>
                  <span>{isDone ? "পড়া শেষ" : "পড়া শেষ চিহ্নিত করুন"}</span>
                </button>

                <button
                  onClick={() => setSelectedChapterId(chapter.id)}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl font-bengali transition-colors cursor-pointer shadow-xs"
                >
                  অধ্যায় পড়ুন →
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
