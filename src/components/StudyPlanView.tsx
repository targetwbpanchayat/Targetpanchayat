import React, { useState, useMemo } from "react";
import {
  CalendarCheck,
  Calendar,
  Clock,
  CheckCircle2,
  Sparkles,
  RefreshCw,
  ArrowRight,
  Flame,
  Check,
  CheckSquare,
  BookOpen,
  Filter,
  Search,
  ChevronRight,
  TrendingUp,
  Award,
  Layers,
  Zap,
} from "lucide-react";
import { UserProgress, StudyPlan, DailyStudyTask, SubjectId } from "../types";
import { STUDY_CHAPTERS } from "../data/studyData";
import { SUBJECTS } from "../data/subjects";
import { saveUserProgress } from "../utils/storage";
import {
  generateIntelligentStudyPlan,
  calculateRemainingDays,
} from "../utils/studyPlanGenerator";

interface StudyPlanViewProps {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  onOpenChapter: (chapterId: string) => void;
  onLaunchPracticeForChapter: (chapterId: string, subjectId: SubjectId) => void;
}

export const StudyPlanView: React.FC<StudyPlanViewProps> = ({
  progress,
  setProgress,
  onOpenChapter,
  onLaunchPracticeForChapter,
}) => {
  // Default target date 60 days from today
  const defaultTargetDate = new Date(Date.now() + 60 * 24 * 3600 * 1000)
    .toISOString()
    .split("T")[0];

  const [examName, setExamName] = useState("WB Gram Panchayat Exam 2026");
  const [targetDate, setTargetDate] = useState(
    progress.activeStudyPlan?.targetExamDate || defaultTargetDate
  );
  const [dailyHours, setDailyHours] = useState<number>(
    progress.activeStudyPlan?.dailyHours || 2
  );
  const [targetPost, setTargetPost] = useState(
    progress.activeStudyPlan?.targetPost || "Executive Assistant / GP Karmee / Sahayak"
  );
  const [activeFilterTab, setActiveFilterTab] = useState<"all" | "today" | "pending" | "completed">("all");
  const [selectedWeek, setSelectedWeek] = useState<number | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const currentPlan = progress.activeStudyPlan;

  // Live remaining days calculation
  const liveRemainingDays = useMemo(() => {
    return calculateRemainingDays(targetDate);
  }, [targetDate]);

  // Total study hours calculation
  const totalCalculatedHours = Math.round(liveRemainingDays * dailyHours);

  // Quick preset helper
  const handleSelectPresetDays = (days: number) => {
    const newTarget = new Date(Date.now() + days * 24 * 3600 * 1000)
      .toISOString()
      .split("T")[0];
    setTargetDate(newTarget);
  };

  // Generate automated intelligent study roadmap
  const handleGeneratePlan = () => {
    const newPlan = generateIntelligentStudyPlan({
      examName,
      targetExamDate: targetDate,
      dailyHours,
      targetPost,
      completedChapterIds: progress.completedChapters || [],
    });

    const updated: UserProgress = {
      ...progress,
      activeStudyPlan: newPlan,
    };
    setProgress(updated);
    saveUserProgress(updated);
  };

  // Toggle single task completion
  const toggleTaskCompleted = (taskId: string) => {
    if (!currentPlan) return;
    const updatedTasks = currentPlan.tasks.map((t) => {
      if (t.id === taskId) {
        const nextState = !t.completed;
        // Also update completed chapters in progress if marked complete
        let newCompletedChapters = [...progress.completedChapters];
        if (nextState && !newCompletedChapters.includes(t.chapterId)) {
          newCompletedChapters.push(t.chapterId);
        }
        return {
          ...t,
          completed: nextState,
          completedAt: nextState ? new Date().toISOString() : undefined,
        };
      }
      return t;
    });

    const updatedPlan: StudyPlan = {
      ...currentPlan,
      tasks: updatedTasks,
    };

    const updated: UserProgress = {
      ...progress,
      activeStudyPlan: updatedPlan,
    };
    setProgress(updated);
    saveUserProgress(updated);
  };

  const completedCount = currentPlan?.tasks.filter((t) => t.completed).length || 0;
  const totalTasks = currentPlan?.tasks.length || 0;
  const planProgressPct = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

  // Today's date in string format YYYY-MM-DD
  const todayStr = new Date().toISOString().split("T")[0];

  // Filter tasks for view
  const filteredTasks = useMemo(() => {
    if (!currentPlan) return [];
    return currentPlan.tasks.filter((task) => {
      // Tab filter
      if (activeFilterTab === "today") {
        // Match today's date or Day 1 if date is older/newer
        const isTodayDate = task.dateStr === todayStr;
        const isFirstPending = !task.completed && task.dayNumber === 1;
        if (!isTodayDate && !isFirstPending && task.dayNumber !== 1) return false;
      }
      if (activeFilterTab === "pending" && task.completed) return false;
      if (activeFilterTab === "completed" && !task.completed) return false;

      // Week filter
      if (selectedWeek !== "all") {
        const taskWeek = Math.ceil(task.dayNumber / 7);
        if (taskWeek !== selectedWeek) return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = task.chapterTitle.toLowerCase().includes(q);
        const matchSubs = task.subTopicsList?.some((st) => st.toLowerCase().includes(q));
        const matchSecondary = task.secondaryTitle?.toLowerCase().includes(q);
        if (!matchTitle && !matchSubs && !matchSecondary) return false;
      }

      return true;
    });
  }, [currentPlan, activeFilterTab, selectedWeek, searchQuery, todayStr]);

  const totalWeeks = currentPlan ? Math.ceil(currentPlan.tasks.length / 7) : 0;

  return (
    <div className="space-y-6 pb-16 animate-in fade-in duration-200">
      {/* Header & Plan Generator Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-5 shadow-xs">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs">
            <CalendarCheck className="w-4 h-4 text-emerald-600" />
            <span>স্মার্ট স্টাডি প্ল্যানার ও ব্যালান্সড সিলেবাস ডিস্ট্রিবিউশন</span>
          </div>

          {currentPlan && (
            <span className="text-xs font-bold text-slate-500 font-bengali bg-slate-100 px-3 py-1 rounded-xl">
              সক্রিয় প্ল্যান: {currentPlan.totalDays} দিনের রুটিন
            </span>
          )}
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-bengali">
          পরীক্ষার বাকি দিন ও দৈনিক সময় অনুযায়ী স্বয়ংক্রিয় রুটিন তৈরি করুন
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 font-bengali max-w-3xl leading-relaxed">
          আপনার টার্গেট পরীক্ষার তারিখ এবং প্রতিদিন কত ঘণ্টা পড়বেন তা নির্বাচন করুন। অ্যালগরিদম স্বয়ংক্রিয়ভাবে ১৬৬টি অধ্যায় ও উপ-টপিকগুলোকে সাইজ ও গুরুত্ব অনুযায়ী এমনভাবে বণ্টন করবে যাতে কোনো দিন অতিরিক্ত চাপ না থাকে এবং প্রতিদিন ব্যালান্সড প্রস্তুতি নিশ্চিত হয়।
        </p>

        {/* Quick Duration Shortcuts */}
        <div className="space-y-2 pt-1">
          <label className="block text-xs font-bold text-slate-700 font-bengali">
            সময়কাল শর্টকাট (Quick Duration Select):
          </label>
          <div className="flex items-center gap-2 flex-wrap">
            {[
              { days: 15, label: "১৫ দিন (ক্র্যাশ কোর্স)" },
              { days: 30, label: "৩০ দিন (১ মাস ইনটেনসিভ)" },
              { days: 45, label: "৪৫ দিন (১.৫ মাস স্ট্যান্ডার্ড)" },
              { days: 60, label: "৬০ দিন (২ মাস প্রস্তাবিত)" },
              { days: 90, label: "৯০ দিন (৩ মাস সম্পূর্ণ সিলেবাস)" },
              { days: 120, label: "১২০ দিন (৪ মাস ফাউন্ডেশন)" },
            ].map((preset) => (
              <button
                key={preset.days}
                onClick={() => handleSelectPresetDays(preset.days)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold font-bengali transition-colors cursor-pointer ${
                  liveRemainingDays === preset.days
                    ? "bg-emerald-700 text-white shadow-xs"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Configuration Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {/* Target Exam Date */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 font-bengali flex items-center justify-between">
              <span>টার্গেট পরীক্ষার তারিখ</span>
              <span className="text-emerald-700 font-mono-num font-bold">
                (বাকি {liveRemainingDays} দিন)
              </span>
            </label>
            <input
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-600 shadow-xs"
            />
          </div>

          {/* Daily Study Hours */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 font-bengali flex items-center justify-between">
              <span>প্রতিদিন পড়ার সময়</span>
              <span className="text-slate-500 font-mono-num">
                (মোট ~{totalCalculatedHours} ঘণ্টা)
              </span>
            </label>
            <select
              value={dailyHours}
              onChange={(e) => setDailyHours(Number(e.target.value))}
              className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-emerald-600 font-bengali shadow-xs"
            >
              <option value={1}>১ ঘণ্টা / দিন (হালকা রিভিশন)</option>
              <option value={1.5}>১.৫ ঘণ্টা / দিন</option>
              <option value={2}>২ ঘণ্টা / দিন (প্রস্তাবিত ব্যালান্সড লোড)</option>
              <option value={2.5}>২.৫ ঘণ্টা / দিন</option>
              <option value={3}>৩ ঘণ্টা / দিন (গভীর প্রস্তুতি)</option>
              <option value={4}>৪ ঘণ্টা / দিন (তীব্র ফুল-টাইম স্টাডি)</option>
              <option value={5}>৫+ ঘণ্টা / দিন (মাস্টারি লেভেল)</option>
            </select>
          </div>

          {/* Target Post Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 font-bengali">
              টার্গেট পদ (Target Post)
            </label>
            <select
              value={targetPost}
              onChange={(e) => setTargetPost(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-emerald-600 font-bengali shadow-xs"
            >
              <option value="Executive Assistant / GP Karmee / Sahayak">এক্সিকিউটিভ অ্যাসিস্ট্যান্ট / কর্মী / সহায়ক</option>
              <option value="Gram Panchayat Karmee">গ্রাম পঞ্চায়েত কর্মী (GP Karmee)</option>
              <option value="Executive Assistant">এক্সিকিউটিভ অ্যাসিস্ট্যান্ট (EA)</option>
              <option value="Nirman Sahayak">নির্মাণ সহায়ক (Nirman Sahayak)</option>
              <option value="Gram Panchayat Secretary">গ্রাম পঞ্চায়েত সচিব (Secretary)</option>
            </select>
          </div>
        </div>

        {/* Live Calculation Info Banner */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full sm:w-auto text-xs font-bengali">
            <div>
              <span className="text-slate-500 block">পরীক্ষার বাকি দিন:</span>
              <span className="text-sm font-bold text-emerald-900 font-mono-num">{liveRemainingDays} দিন</span>
            </div>
            <div>
              <span className="text-slate-500 block">দৈনিক বরাদ্দ:</span>
              <span className="text-sm font-bold text-emerald-900 font-mono-num">{dailyHours} ঘণ্টা / দিন</span>
            </div>
            <div>
              <span className="text-slate-500 block">মোট প্রস্তুতির সময়:</span>
              <span className="text-sm font-bold text-emerald-900 font-mono-num">{totalCalculatedHours} ঘণ্টা</span>
            </div>
          </div>

          <button
            onClick={handleGeneratePlan}
            className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs hover:shadow-md transition-all font-bengali flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>{currentPlan ? "নতুন সুষম প্ল্যান তৈরি করুন" : "স্মার্ট প্ল্যান তৈরি করুন"}</span>
          </button>
        </div>
      </div>

      {/* Active Plan Dashboard */}
      {currentPlan ? (
        <div className="space-y-6">
          {/* Plan Progress Header */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-800 font-bengali">স্টাডি প্ল্যান প্রগতি (Overall Completion):</span>
                  <span className="text-xs font-bold font-mono-num text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                    {completedCount}/{totalTasks} দিন সম্পন্ন ({planProgressPct}%)
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-bengali">
                  টার্গেট পরীক্ষার তারিখ: <strong className="text-slate-800 font-mono-num">{currentPlan.targetExamDate}</strong> • দৈনিক সময়: <strong className="text-slate-800 font-mono-num">{currentPlan.dailyHours} ঘণ্টা</strong>
                </p>
              </div>

              <div className="w-full sm:w-72 space-y-1">
                <div className="flex justify-between text-[11px] font-bold text-slate-600 font-mono-num">
                  <span>অগ্রগতি</span>
                  <span>{planProgressPct}%</span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200">
                  <div
                    className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${planProgressPct}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Filter Tabs & Search */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {[
                  { id: "all", label: `সকল দিন (${currentPlan.tasks.length})` },
                  { id: "today", label: "আজকের টাস্ক" },
                  { id: "pending", label: `বাকি (${totalTasks - completedCount})` },
                  { id: "completed", label: `সম্পন্ন (${completedCount})` },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilterTab(tab.id as any)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold font-bengali whitespace-nowrap transition-colors cursor-pointer ${
                      activeFilterTab === tab.id
                        ? "bg-slate-900 text-white shadow-xs"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="টপিক বা বিষয় খুঁজুন..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 w-full sm:w-56 font-bengali"
                />
              </div>
            </div>

            {/* Week Selector Chips if > 7 Days */}
            {totalWeeks > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-1">
                <span className="text-xs font-bold text-slate-500 font-bengali shrink-0">সপ্তাহ:</span>
                <button
                  onClick={() => setSelectedWeek("all")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold font-bengali transition-colors cursor-pointer ${
                    selectedWeek === "all"
                      ? "bg-emerald-700 text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  সকল সপ্তাহ
                </button>
                {Array.from({ length: totalWeeks }).map((_, wIdx) => {
                  const wNum = wIdx + 1;
                  return (
                    <button
                      key={wNum}
                      onClick={() => setSelectedWeek(wNum)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold font-bengali transition-colors cursor-pointer ${
                        selectedWeek === wNum
                          ? "bg-emerald-700 text-white"
                          : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                      }`}
                    >
                      সপ্তাহ {wNum}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Daily Schedule Timeline List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-slate-900 font-bengali flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-600" />
                <span>দৈনিক ব্যালান্সড পড়ার সূচি ({filteredTasks.length}টি দিন প্রদর্শিত)</span>
              </h2>
            </div>

            {filteredTasks.length === 0 ? (
              <div className="text-center py-10 bg-white border border-slate-200 rounded-3xl p-6 space-y-2">
                <p className="text-sm font-bold text-slate-700 font-bengali">এই ফিল্টারে কোনো টাস্ক পাওয়া যায়নি</p>
                <p className="text-xs text-slate-500 font-bengali">ফিল্টার পরিবর্তন করে আবার চেষ্টা করুন।</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredTasks.map((task) => {
                  const isToday = task.dateStr === todayStr;
                  const isRevision = task.dayType === "revision";
                  const isFinalReview = task.dayType === "final_review";

                  return (
                    <div
                      key={task.id}
                      className={`bg-white border rounded-3xl p-5 transition-all flex flex-col justify-between gap-4 shadow-xs relative overflow-hidden ${
                        task.completed
                          ? "border-emerald-300 bg-emerald-50/30"
                          : isToday
                          ? "border-emerald-500 ring-2 ring-emerald-500/20"
                          : isRevision
                          ? "border-amber-300 bg-amber-50/20"
                          : isFinalReview
                          ? "border-indigo-300 bg-indigo-50/20"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {/* Top Meta Bar */}
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-[11px] font-bold font-mono-num px-2.5 py-0.5 rounded-lg border ${
                                task.completed
                                  ? "bg-emerald-100 text-emerald-800 border-emerald-300"
                                  : isToday
                                  ? "bg-emerald-600 text-white border-emerald-600"
                                  : "bg-slate-100 text-slate-800 border-slate-200"
                              }`}
                            >
                              দিন {task.dayNumber}
                            </span>

                            <span className="text-xs text-slate-500 font-bengali font-medium">
                              {task.dateStr}
                            </span>

                            {isToday && (
                              <span className="text-[10px] bg-emerald-500 text-white font-bold px-2 py-0.5 rounded-full font-bengali">
                                আজকের লক্ষ্য
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-xs text-slate-500 flex items-center gap-1 font-mono-num font-medium">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              <span>{task.targetMinutes} মিনিট</span>
                            </span>

                            {/* Mark Complete Checkbox */}
                            <button
                              onClick={() => toggleTaskCompleted(task.id)}
                              className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
                                task.completed
                                  ? "bg-emerald-600 border-emerald-600 text-white"
                                  : "border-slate-300 hover:border-slate-400 bg-white"
                              }`}
                              title={task.completed ? "সম্পন্ন হয়েছে" : "টাস্ক কমপ্লিট চিহ্নিত করুন"}
                            >
                              {task.completed && <Check className="w-4 h-4 stroke-[3]" />}
                            </button>
                          </div>
                        </div>

                        {/* Subject Badge */}
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200 font-bengali">
                            {task.subjectId === "panchayat" && "পঞ্চায়েত ব্যবস্থা"}
                            {task.subjectId === "bengali" && "বাংলা ব্যাকরণ"}
                            {task.subjectId === "english" && "English Grammar"}
                            {task.subjectId === "math" && "গণিত ও পাটিগণিত"}
                            {task.subjectId === "gk" && "সাধারণ জ্ঞান (GK)"}
                          </span>

                          {task.secondarySubjectId && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-teal-100 text-teal-800 border border-teal-200 font-bengali">
                              +{" "}
                              {task.secondarySubjectId === "panchayat" && "পঞ্চায়েত"}
                              {task.secondarySubjectId === "bengali" && "বাংলা"}
                              {task.secondarySubjectId === "english" && "ইংরেজি"}
                              {task.secondarySubjectId === "math" && "গণিত"}
                              {task.secondarySubjectId === "gk" && "জিকে"}
                            </span>
                          )}

                          {isRevision && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 border border-amber-300 font-bengali">
                              সাপ্তাহিক রিভিশন মাইলস্টোন
                            </span>
                          )}

                          {isFinalReview && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-800 border border-indigo-300 font-bengali">
                              চূড়ান্ত প্রস্তুতি
                            </span>
                          )}
                        </div>

                        {/* Chapter Title */}
                        <h3 className="text-sm sm:text-base font-bold font-bengali text-slate-900 leading-snug">
                          {task.chapterTitle}
                        </h3>

                        {/* Subtopics or Focus Points */}
                        {task.subTopicsList && task.subTopicsList.length > 0 && (
                          <div className="space-y-1 bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                            <span className="text-[10px] font-bold text-slate-500 font-bengali block">
                              আজকের আলোচিত বিষয় ও মূল পয়েন্ট:
                            </span>
                            <ul className="text-xs text-slate-700 font-bengali space-y-0.5">
                              {task.subTopicsList.map((st, sIdx) => (
                                <li key={sIdx} className="flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                                  <span className="line-clamp-1">{st}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="text-xs text-slate-500 font-bengali flex items-center gap-1.5">
                          <CheckSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>লক্ষ্য: থিওরি রিভিশন + {task.targetQuestions}টি MCQ প্র্যাকটিস</span>
                        </div>
                      </div>

                      {/* Action Buttons: Study & Direct Practice */}
                      <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                        <button
                          onClick={() => onOpenChapter(task.chapterId)}
                          className="flex-1 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl font-bengali flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                          title="অধ্যায়টির বিস্তারিত নোটস পড়ুন"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-slate-600" />
                          <span>অধ্যায় পড়ুন</span>
                        </button>

                        <button
                          onClick={() => onLaunchPracticeForChapter(task.chapterId, task.subjectId)}
                          className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl font-bengali flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                          title="এই নির্দিষ্ট অধ্যায়ের প্রশ্ন সমাধান করুন"
                        >
                          <CheckSquare className="w-3.5 h-3.5" />
                          <span>MCQ প্র্যাকটিস</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center py-16 bg-white border border-dashed border-slate-300 rounded-3xl p-8 space-y-4 shadow-xs">
          <CalendarCheck className="w-12 h-12 text-slate-400 mx-auto" />
          <h3 className="text-lg font-bold text-slate-800 font-bengali">কোনো সক্রিয় স্টাডি প্ল্যান নেই</h3>
          <p className="text-xs sm:text-sm text-slate-600 font-bengali max-w-md mx-auto leading-relaxed">
            উপরে আপনার টার্গেট পরীক্ষার তারিখ এবং প্রতিদিন কত ঘণ্টা পড়বেন তা নির্বাচন করে <strong>'স্মার্ট প্ল্যান তৈরি করুন'</strong> বাটনে ক্লিক করুন।
          </p>
        </div>
      )}
    </div>
  );
};
