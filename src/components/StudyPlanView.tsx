import React, { useState } from "react";
import {
  CalendarCheck,
  Calendar,
  Clock,
  CheckCircle2,
  Sparkles,
  Plus,
  RefreshCw,
  ArrowRight,
  Flame,
  Check,
} from "lucide-react";
import { UserProgress, StudyPlan, DailyStudyTask, SubjectId } from "../types";
import { STUDY_CHAPTERS } from "../data/studyData";
import { saveUserProgress } from "../utils/storage";

interface StudyPlanViewProps {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  onOpenChapter: (chapterId: string) => void;
}

export const StudyPlanView: React.FC<StudyPlanViewProps> = ({
  progress,
  setProgress,
  onOpenChapter,
}) => {
  // Default target date 60 days from now
  const defaultTargetDate = new Date(Date.now() + 60 * 24 * 3600 * 1000)
    .toISOString()
    .split("T")[0];

  const [examName, setExamName] = useState("WB Gram Panchayat Exam 2026");
  const [targetDate, setTargetDate] = useState(defaultTargetDate);
  const [dailyHours, setDailyHours] = useState(2);
  const [selectedDayFilter, setSelectedDayFilter] = useState<number | "all">("all");

  const currentPlan = progress.activeStudyPlan;

  // Generate automated study roadmap based on target date
  const generateNewPlan = () => {
    const start = new Date();
    const end = new Date(targetDate);
    const diffTime = Math.max(1, end.getTime() - start.getTime());
    const totalDays = Math.min(90, Math.max(7, Math.ceil(diffTime / (1000 * 60 * 60 * 24))));

    const tasks: DailyStudyTask[] = [];

    // Distribute chapters across the days
    for (let day = 1; day <= Math.min(totalDays, 30); day++) {
      const chapterIndex = (day - 1) % STUDY_CHAPTERS.length;
      const chapter = STUDY_CHAPTERS[chapterIndex];
      const taskDate = new Date(Date.now() + (day - 1) * 24 * 3600 * 1000)
        .toISOString()
        .split("T")[0];

      tasks.push({
        id: `task_day_${day}`,
        dayNumber: day,
        dateStr: taskDate,
        subjectId: chapter.subjectId,
        chapterTitle: chapter.titleBn,
        chapterId: chapter.id,
        targetMinutes: chapter.estimatedMinutes + 15,
        targetQuestions: 15,
        completed: progress.completedChapters.includes(chapter.id),
      });
    }

    const newPlan: StudyPlan = {
      id: `plan_${Date.now()}`,
      examName,
      targetExamDate: targetDate,
      dailyHours,
      startDate: new Date().toISOString().split("T")[0],
      totalDays: tasks.length,
      tasks,
    };

    const updated: UserProgress = {
      ...progress,
      activeStudyPlan: newPlan,
    };
    setProgress(updated);
    saveUserProgress(updated);
  };

  const toggleTaskCompleted = (taskId: string) => {
    if (!currentPlan) return;
    const updatedTasks = currentPlan.tasks.map((t) => {
      if (t.id === taskId) {
        const nextState = !t.completed;
        // Also update completed chapters in progress
        let newCompletedChapters = [...progress.completedChapters];
        if (nextState && !newCompletedChapters.includes(t.chapterId)) {
          newCompletedChapters.push(t.chapterId);
        }
        return { ...t, completed: nextState };
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

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* Header & Plan Generator Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs">
          <CalendarCheck className="w-4 h-4 text-emerald-600" />
          <span>দৈনিক পড়ার প্ল্যানার (Smart Study Planner)</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-bengali">
          আপনার পরীক্ষার তারিখ অনুযায়ী স্বয়ংক্রিয় পড়ার রুটিন
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 font-bengali max-w-2xl leading-relaxed">
          টার্গেট পরীক্ষার তারিখ নির্ধারণ করুন — সিস্টেম সম্পূর্ণ পঞ্চায়েত সিলেবাসকে প্রতিদিনের ক্ষুদ্র লক্ষ্যে ভাগ করে দেবে।
        </p>

        {/* Configuration Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 font-bengali">
              টার্গেট পরীক্ষার তারিখ
            </label>
            <input
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-600 shadow-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 font-bengali">
              প্রতিদিন পড়ার সময়
            </label>
            <select
              value={dailyHours}
              onChange={(e) => setDailyHours(Number(e.target.value))}
              className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-emerald-600 font-bengali shadow-xs"
            >
              <option value={1}>১ ঘণ্টা / দিন</option>
              <option value={2}>২ ঘণ্টা / দিন (প্রস্তাবিত)</option>
              <option value={3}>৩ ঘণ্টা / দিন (তীব্র প্রস্তুতি)</option>
              <option value={4}>৪+ ঘণ্টা / দিন</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={generateNewPlan}
              className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all font-bengali flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>{currentPlan ? "নতুন প্ল্যান তৈরি করুন" : "প্ল্যান তৈরি করুন"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Active Plan View */}
      {currentPlan ? (
        <div className="space-y-4">
          {/* Plan Progress Header */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-800 font-bengali">স্টাডি প্ল্যান প্রগতি:</span>
                <span className="text-xs font-bold font-mono-num text-emerald-700">
                  {completedCount}/{totalTasks} দিন সম্পন্ন ({planProgressPct}%)
                </span>
              </div>
              <p className="text-xs text-slate-500 font-bengali">
                টার্গেট তারিখ: <strong className="text-slate-800 font-mono-num">{currentPlan.targetExamDate}</strong>
              </p>
            </div>

            <div className="w-full sm:w-64 bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200">
              <div
                className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${planProgressPct}%` }}
              />
            </div>
          </div>

          {/* Daily Schedule Timeline List */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 font-bengali">
              দৈনিক পড়ার সূচি ও টাস্ক তালিকা
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentPlan.tasks.map((task) => (
                <div
                  key={task.id}
                  className={`bg-white border rounded-2xl p-4 transition-all flex items-center justify-between gap-4 shadow-xs ${
                    task.completed
                      ? "border-emerald-300 bg-emerald-50/40 text-slate-700"
                      : "border-slate-200 text-slate-900 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <button
                      onClick={() => toggleTaskCompleted(task.id)}
                      className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 transition-colors cursor-pointer ${
                        task.completed
                          ? "bg-emerald-600 border-emerald-600 text-white"
                          : "border-slate-300 hover:border-slate-400 bg-white"
                      }`}
                    >
                      {task.completed && <Check className="w-4 h-4 stroke-[3]" />}
                    </button>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold font-mono-num px-2 py-0.5 rounded bg-slate-100 text-emerald-800 border border-slate-200">
                          দিন {task.dayNumber}
                        </span>
                        <span className="text-[11px] text-slate-500 flex items-center gap-1 font-mono-num font-medium">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{task.targetMinutes} মিনিট</span>
                        </span>
                      </div>
                      <h4 className="text-sm font-bold font-bengali leading-snug">
                        {task.chapterTitle}
                      </h4>
                      <p className="text-xs text-slate-500 font-bengali">
                        লক্ষ্য: চ্যাপ্টার স্টাডি + {task.targetQuestions}টি MCQ প্র্যাকটিস
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenChapter(task.chapterId)}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl font-bengali shrink-0 transition-colors cursor-pointer"
                  >
                    পড়ুন →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-white border border-dashed border-slate-300 rounded-3xl p-8 space-y-3 shadow-xs">
          <CalendarCheck className="w-12 h-12 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-800 font-bengali">কোনো অ্যাক্টিভ স্টাডি প্ল্যান নেই</h3>
          <p className="text-xs text-slate-500 font-bengali max-w-sm mx-auto">
            উপরের ফর্মে পরীক্ষার তারিখ ও পড়ার সময় নির্বাচন করে 'প্ল্যান তৈরি করুন' বাটনে ক্লিক করুন।
          </p>
        </div>
      )}
    </div>
  );
};
