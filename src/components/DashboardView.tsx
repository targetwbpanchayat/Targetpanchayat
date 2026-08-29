import React, { useState } from "react";
import {
  BookOpen,
  Award,
  CalendarCheck,
  CheckSquare,
  Flame,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Clock,
  Zap,
  Target,
  Sparkles,
  History,
  Eye,
  FileCheck,
} from "lucide-react";
import { UserProfile, UserProgress, SubjectId, MockTestAttempt } from "../types";
import { SUBJECTS } from "../data/subjects";
import { STUDY_CHAPTERS } from "../data/studyData";
import { MOCK_TESTS } from "../data/mockTests";
import { AnswerSheetModal } from "./AnswerSheetModal";

interface DashboardViewProps {
  user: UserProfile;
  progress: UserProgress;
  setActiveTab: (tab: string) => void;
  onSelectChapter: (chapterId: string) => void;
  onSelectMockTest: (testId: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  user,
  progress,
  setActiveTab,
  onSelectChapter,
  onSelectMockTest,
}) => {
  const [selectedAttemptForReview, setSelectedAttemptForReview] = useState<MockTestAttempt | null>(null);

  const totalChapters = STUDY_CHAPTERS.length;
  const completedChaptersCount = progress?.completedChapters?.length || 0;
  const chaptersPercent = Math.round((completedChaptersCount / totalChapters) * 100);

  const mockAttempts = progress?.mockTestAttempts || [];
  const testsTakenCount = mockAttempts.length;

  const avgScore =
    testsTakenCount > 0
      ? Math.round(
          mockAttempts.reduce((acc, curr) => acc + curr.percentage, 0) / testsTakenCount
        )
      : 0;

  const totalPracticedQuestions = Object.keys(progress?.practiceAnswers || {}).length;

  const streak = progress?.dailyStreak?.currentStreak || 1;

  // Find next uncompleted chapter for quick resume
  const nextChapter =
    STUDY_CHAPTERS.find((ch) => !progress?.completedChapters?.includes(ch.id)) ||
    STUDY_CHAPTERS[0];

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      {/* Welcome Banner in Crisp Light Theme */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-lg">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>লক্ষ্য: {user.targetPost || "গ্রাম পঞ্চায়েত পরীক্ষা"}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-bengali">
              নমস্কার, {user.name} 👋
            </h1>
            <p className="text-xs sm:text-sm text-emerald-50 font-bengali max-w-xl">
              আজকের পড়ার লক্ষ্য পূরণ করুন। প্রতিদিন অন্তত ১টি অধ্যায় ও ২০টি MCQ প্র্যাকটিস করলে পরীক্ষায় সাফল্য নিশ্চিত!
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white/15 backdrop-blur-md border border-white/30 p-3.5 rounded-2xl flex items-center gap-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-900 flex items-center justify-center font-bold">
                <Flame className="w-6 h-6 fill-amber-950 text-amber-950" />
              </div>
              <div>
                <div className="text-xl font-bold font-mono-num text-white leading-tight">
                  {streak} দিন
                </div>
                <div className="text-[11px] text-emerald-100 font-bengali">অ্যাক্টিভ স্ট্রিক</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        {/* Card 1: Completed Chapters */}
        <div className="bg-white border border-slate-200 p-4 sm:p-5 rounded-2xl space-y-2 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600 font-bengali">চ্যাপ্টার সম্পন্ন</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono-num">
              {completedChaptersCount}
            </span>
            <span className="text-xs text-slate-500 font-mono-num">/ {totalChapters}</span>
          </div>
          {/* Progress bar */}
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-emerald-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${chaptersPercent}%` }}
            />
          </div>
          <span className="text-[11px] font-bold text-emerald-700 font-mono-num">{chaptersPercent}% কমপ্লিট</span>
        </div>

        {/* Card 2: Mock Tests Taken */}
        <div className="bg-white border border-slate-200 p-4 sm:p-5 rounded-2xl space-y-2 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600 font-bengali">মক টেস্ট দেওয়া হয়েছে</span>
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono-num">
              {testsTakenCount}
            </span>
            <span className="text-xs text-slate-500 font-bengali">টি টেস্ট</span>
          </div>
          <div className="text-[11px] text-slate-500 font-bengali font-medium">
            {testsTakenCount === 0 ? "এখনো মক টেস্ট দেননি" : "সংরক্ষিত উত্তরপত্র দেখুন নিচে"}
          </div>
        </div>

        {/* Card 3: Average Score */}
        <div className="bg-white border border-slate-200 p-4 sm:p-5 rounded-2xl space-y-2 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600 font-bengali">গড় স্কোর</span>
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono-num">
              {avgScore}%
            </span>
          </div>
          <div className="text-[11px] font-bold text-amber-700 font-bengali">
            {avgScore >= 70 ? "চমৎকার প্রস্তুতি!" : avgScore > 0 ? "আরও প্র্যাকটিস প্রয়োজন" : "মক টেস্ট দিয়ে শুরু করুন"}
          </div>
        </div>

        {/* Card 4: Practice Questions Solved */}
        <div className="bg-white border border-slate-200 p-4 sm:p-5 rounded-2xl space-y-2 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600 font-bengali">মোট প্রশ্ন সমাধান</span>
            <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
              <CheckSquare className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono-num">
              {totalPracticedQuestions}
            </span>
            <span className="text-xs text-slate-500 font-bengali">MCQ</span>
          </div>
          <div className="text-[11px] font-medium text-sky-700 font-bengali">
            সঠিক ও নির্ভুল ব্যাখ্যা সহ
          </div>
        </div>
      </div>

      {/* Quick Resume Chapter & Daily Study Plan Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Next Chapter To Read Card (2 cols) */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Target className="w-4 h-4" />
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-bengali">
                পরবর্তী অধ্যায় শুরু করুন
              </h2>
            </div>
            <button
              onClick={() => setActiveTab("study")}
              className="text-xs font-bold text-emerald-700 hover:underline font-bengali flex items-center gap-1 cursor-pointer"
            >
              <span>সব অধ্যায় দেখুন</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-300">
                  {nextChapter.subjectId === "panchayat" && "পঞ্চায়েত ব্যবস্থা"}
                  {nextChapter.subjectId === "bengali" && "বাংলা ব্যাকরণ"}
                  {nextChapter.subjectId === "english" && "English Grammar"}
                  {nextChapter.subjectId === "math" && "পাটিগণিত"}
                  {nextChapter.subjectId === "gk" && "সাধারণ জ্ঞান"}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span>{nextChapter.estimatedMinutes} মিনিট</span>
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 font-bengali">
                {nextChapter.titleBn}
              </h3>
              <p className="text-xs text-slate-600 font-bengali line-clamp-2 leading-relaxed">
                {nextChapter.summary}
              </p>
            </div>

            <button
              onClick={() => {
                onSelectChapter(nextChapter.id);
                setActiveTab("study");
              }}
              className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors font-bengali shrink-0 cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>পড়া শুরু করুন</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Action Pills for Tests & Practice */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <button
              onClick={() => setActiveTab("tests")}
              className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 hover:border-emerald-400 hover:bg-emerald-100/50 text-left transition-all flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 font-bengali">ফুল মক টেস্ট</div>
                <div className="text-[10px] text-emerald-700 font-bengali">৮৫ নম্বর • ৯০ মিনিট</div>
              </div>
            </button>

            <button
              onClick={() => setActiveTab("tests")}
              className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200 hover:border-blue-400 hover:bg-blue-100/50 text-left transition-all flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 font-bengali">শর্ট মক টেস্ট</div>
                <div className="text-[10px] text-blue-700 font-bengali">৪০ নম্বর • ৪০ মিনিট</div>
              </div>
            </button>

            <button
              onClick={() => setActiveTab("practice")}
              className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-200 hover:border-teal-400 hover:bg-teal-100/50 text-left transition-all flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 font-bengali">প্র্যাকটিস সেট</div>
                <div className="text-[10px] text-teal-700 font-bengali">অধ্যায়ভিত্তিক MCQ</div>
              </div>
            </button>

            <button
              onClick={() => setActiveTab("pyq")}
              className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-200 hover:border-purple-400 hover:bg-purple-100/50 text-left transition-all flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                <CheckSquare className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 font-bengali">বিগত বছরের প্রশ্ন</div>
                <div className="text-[10px] text-purple-700 font-bengali">২০১৮ আসল প্রশ্নপত্র</div>
              </div>
            </button>
          </div>
        </div>

        {/* Study Plan Status Widget (1 col) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 flex flex-col justify-between shadow-xs">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CalendarCheck className="w-4 h-4 text-amber-600" />
                <h3 className="text-base font-bold text-slate-900 font-bengali">পড়ার প্ল্যান</h3>
              </div>
              <button
                onClick={() => setActiveTab("study_plan")}
                className="text-xs font-bold text-amber-700 hover:underline font-bengali cursor-pointer"
              >
                কাস্টমাইজ
              </button>
            </div>

            <p className="text-xs text-slate-600 font-bengali leading-relaxed">
              {progress.activeStudyPlan
                ? `টার্গেট পরীক্ষার তারিখ: ${progress.activeStudyPlan.targetExamDate}`
                : "পরীক্ষার তারিখ সেট করে প্রতিদিনের পড়ার রুটিন তৈরি করুন।"}
            </p>

            {/* Daily Checklist preview */}
            <div className="space-y-2 bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
              {progress.activeStudyPlan && progress.activeStudyPlan.tasks?.length > 0 ? (
                progress.activeStudyPlan.tasks.slice(0, 3).map((task) => (
                  <div key={task.id} className="flex items-center justify-between gap-2 text-xs font-semibold font-bengali">
                    <div className="flex items-center gap-2 text-slate-800 min-w-0">
                      {task.completed ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      ) : (
                        <div className="w-3.5 h-3.5 rounded-full border border-slate-400 shrink-0" />
                      )}
                      <span className="truncate">দিন {task.dayNumber}: {task.chapterTitle}</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono-num shrink-0">{task.targetMinutes} মি.</span>
                  </div>
                ))
              ) : (
                <>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 font-bengali">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>পঞ্চায়েত আইন ও ধারা ১-১০ রিভিশন</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 font-bengali">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>বাংলা ব্যাকরণ ও সাহিত্যের প্রশ্ন সমাধান</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 font-bengali">
                    <div className="w-3.5 h-3.5 rounded-full border border-slate-400 shrink-0" />
                    <span>পাটিগণিত শতকরা ও অনুপাত প্র্যাকটিস</span>
                  </div>
                </>
              )}
            </div>
          </div>

          <button
            onClick={() => setActiveTab("study_plan")}
            className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl border border-slate-200 transition-colors font-bengali mt-4 cursor-pointer"
          >
            সম্পূর্ণ স্টাডি প্ল্যান দেখুন
          </button>
        </div>
      </div>

      {/* Mock Tests & Saved Answer Sheets Section on Home */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-700" />
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-bengali">
                মক টেস্ট কেন্দ্র ও সংরক্ষিত উত্তরপত্র (Saved Tests & Answer Sheets)
              </h2>
            </div>
            <p className="text-xs text-slate-500 font-bengali mt-0.5">
              আপনার সম্পন্ন করা ফুল মক টেস্ট, শর্ট মক ও কুইজের প্রশ্ন ও উত্তরপত্র এখানে সংরক্ষিত রয়েছে।
            </p>
          </div>

          <button
            onClick={() => setActiveTab("tests")}
            className="text-xs font-bold text-emerald-700 hover:underline font-bengali flex items-center gap-1 self-start sm:self-auto cursor-pointer"
          >
            <span>সব টেস্ট দেখুন</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {mockAttempts.length === 0 ? (
          <div className="text-center py-10 bg-slate-50 rounded-2xl border border-dashed border-slate-200 space-y-3">
            <History className="w-8 h-8 text-slate-400 mx-auto" />
            <p className="text-xs text-slate-600 font-bengali">
              এখনো কোনো মক টেস্ট জমা দেননি। নতুন মক টেস্ট শুরু করে নিজেকে যাচাই করুন।
            </p>
            <button
              onClick={() => setActiveTab("tests")}
              className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold font-bengali cursor-pointer shadow-xs"
            >
              মক টেস্ট শুরু করুন
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {[...mockAttempts].slice(-6).reverse().map((att) => {
              const dateStr = att.date
                ? new Date(att.date).toLocaleDateString("bn-BD", {
                    day: "numeric",
                    month: "short",
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : "";

              return (
                <div
                  key={att.id}
                  className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-emerald-300 transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bengali">
                        {att.totalQuestions === 85 ? "ফুল মক (৮৫)" : att.totalQuestions === 40 ? "শর্ট মক (৪০)" : "কুইজ"}
                      </span>
                      <span className="text-slate-400 font-mono-num">{dateStr}</span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-bengali line-clamp-1">
                      {att.testTitle}
                    </h4>

                    <div className="flex items-center gap-3 text-xs pt-1">
                      <span className="font-bold text-emerald-700 font-mono-num">
                        স্কোর: {att.score}/{att.totalMarks}
                      </span>
                      <span className="text-slate-500 font-mono-num">({att.percentage}%)</span>
                      <span className="text-slate-500 font-mono-num">
                        ⏱ {Math.floor(att.timeSpentSeconds / 60)}মি
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedAttemptForReview(att)}
                    className="w-full py-1.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-900 hover:text-white hover:border-slate-900 text-slate-700 text-xs font-bold font-bengali flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-2xs"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>উত্তরপত্র দেখুন</span>
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Subject-wise Progress Overview */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 font-bengali">
          বিষয়ভিত্তিক সিলেবাস প্রগতি
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {SUBJECTS.map((sub) => {
            const subChapters = STUDY_CHAPTERS.filter((c) => c.subjectId === sub.id);
            const doneCount = subChapters.filter((c) => progress.completedChapters.includes(c.id)).length;
            const pct = subChapters.length > 0 ? Math.round((doneCount / subChapters.length) * 100) : 0;

            return (
              <div
                key={sub.id}
                onClick={() => setActiveTab("study")}
                className="bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/30 p-4 rounded-2xl space-y-2 cursor-pointer transition-all hover:scale-[1.02]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 font-bengali line-clamp-1">
                    {sub.nameBn}
                  </span>
                </div>
                <div className="flex items-baseline justify-between text-xs">
                  <span className="text-slate-500 font-mono-num">{doneCount}/{subChapters.length} চ্যাপ্টার</span>
                  <span className="font-bold text-emerald-700 font-mono-num">{pct}%</span>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Answer Sheet Review Modal */}
      {selectedAttemptForReview && (
        <AnswerSheetModal
          attempt={selectedAttemptForReview}
          onClose={() => setSelectedAttemptForReview(null)}
        />
      )}
    </div>
  );
};
