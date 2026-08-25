import React from "react";
import {
  TrendingUp,
  Award,
  AlertTriangle,
  CheckCircle2,
  BarChart2,
  PieChart as PieChartIcon,
  Sparkles,
  BookOpen,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import { UserProgress } from "../types";
import { SUBJECTS } from "../data/subjects";
import { STUDY_CHAPTERS } from "../data/studyData";
import { QUESTION_SETS } from "../data/questionSets";

interface ReportViewProps {
  progress: UserProgress;
}

export const ReportView: React.FC<ReportViewProps> = ({ progress }) => {
  // Compute subject-wise accuracy
  const subjectAccuracyData = SUBJECTS.map((sub) => {
    const subQuestions = QUESTION_SETS.filter((q) => q.subjectId === sub.id);
    let correct = 0;
    let attempted = 0;

    subQuestions.forEach((q) => {
      const ans = progress.practiceAnswers?.[q.id];
      if (ans) {
        attempted += 1;
        if (ans.isCorrect) correct += 1;
      }
    });

    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

    return {
      name: sub.nameBn,
      accuracy,
      attempted,
      correct,
      code: sub.id,
    };
  });

  // Calculate Mock Test performance trend over time
  const mockTrendData = (progress.mockTestAttempts || [])
    .slice(0, 7)
    .reverse()
    .map((att, idx) => ({
      index: `টেস্ট ${idx + 1}`,
      percentage: att.percentage,
      score: att.score,
      date: new Date(att.date).toLocaleDateString("bn-IN"),
    }));

  // Identify Strengths and Weaknesses
  const sortedByAccuracy = [...subjectAccuracyData].sort((a, b) => b.accuracy - a.accuracy);
  const strongestSubject = sortedByAccuracy[0]?.attempted > 0 ? sortedByAccuracy[0] : null;
  const weakestSubject = [...subjectAccuracyData]
    .filter((s) => s.attempted > 0)
    .sort((a, b) => a.accuracy - b.accuracy)[0] || null;

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-200">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-bengali">
          পারফরম্যান্স রিপোর্ট ও বিশ্লেষণ (Performance Analytics)
        </h1>
        <p className="text-xs text-slate-500 font-bengali">
          আপনার দুর্বল ও সবল বিষয় চিহ্নিত করে কার্যকর রিভিশন কৌশল গ্রহণ করুন
        </p>
      </div>

      {/* Strength & Weakness Indicator Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Strong Subject */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-3 shadow-xs">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm font-bengali">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>সবচেয়ে শক্তিশালী বিষয় (Strong Area)</span>
          </div>
          {strongestSubject ? (
            <div className="space-y-1">
              <div className="text-xl font-bold text-slate-900 font-bengali">
                {strongestSubject.name}
              </div>
              <p className="text-xs text-slate-600 font-bengali">
                সঠিকতার হার: <strong className="text-emerald-700 font-mono-num font-bold">{strongestSubject.accuracy}%</strong> ({strongestSubject.correct}/{strongestSubject.attempted} প্রশ্ন সঠিক)
              </p>
            </div>
          ) : (
            <p className="text-xs text-slate-500 font-bengali">
              আরও কিছু প্রশ্ন প্র্যাকটিস করলে শক্তিশালী বিষয় নির্ধারণ করা হবে।
            </p>
          )}
        </div>

        {/* Weak Subject / Focus Required */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-3 shadow-xs">
          <div className="flex items-center gap-2 text-rose-700 font-bold text-sm font-bengali">
            <AlertTriangle className="w-5 h-5 text-rose-500" />
            <span>বিশেষ মনোযোগ প্রয়োজন (Needs Improvement)</span>
          </div>
          {weakestSubject && weakestSubject.accuracy < 70 ? (
            <div className="space-y-1">
              <div className="text-xl font-bold text-slate-900 font-bengali">
                {weakestSubject.name}
              </div>
              <p className="text-xs text-slate-600 font-bengali">
                সঠিকতার হার: <strong className="text-rose-600 font-mono-num font-bold">{weakestSubject.accuracy}%</strong> — এই অধ্যায়গুলির থিওরি নোটস রিভিশন করুন।
              </p>
            </div>
          ) : (
            <p className="text-xs text-slate-500 font-bengali">
              আপনার সব বিষয়ের স্কোর সন্তোষজনক! মক টেস্ট দিয়ে প্রস্তুতি যাচাই করুন।
            </p>
          )}
        </div>
      </div>

      {/* Chart 1: Subject-wise Accuracy Bar Chart */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs">
        <h2 className="text-base font-bold text-slate-900 font-bengali flex items-center gap-2">
          <BarChart2 className="w-4 h-4 text-emerald-600" />
          <span>বিষয়ভিত্তিক নির্ভুলতার হার (Accuracy % by Subject)</span>
        </h2>

        <div className="h-64 sm:h-72 w-full pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={subjectAccuracyData} margin={{ top: 10, right: 10, left: -20, bottom: 25 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 11 }} interval={0} angle={-15} textAnchor="end" />
              <YAxis stroke="#64748b" domain={[0, 100]} tick={{ fontSize: 11 }} />
              <Tooltip
                contentStyle={{ backgroundColor: "#ffffff", borderColor: "#cbd5e1", borderRadius: "12px", fontSize: "12px", color: "#0f172a", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                formatter={(value: any) => [`${value}% নির্ভুলতা`, "সঠিকতার হার"]}
              />
              <Bar dataKey="accuracy" fill="#059669" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Chart 2: Mock Test Trend */}
      {mockTrendData.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs">
          <h2 className="text-base font-bold text-slate-900 font-bengali flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-teal-600" />
            <span>মক টেস্ট প্রগতি গ্রাফ (Mock Test Score Trend)</span>
          </h2>

          <div className="h-64 sm:h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="index" stroke="#64748b" tick={{ fontSize: 11 }} />
                <YAxis stroke="#64748b" domain={[0, 100]} tick={{ fontSize: 11 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#ffffff", borderColor: "#cbd5e1", borderRadius: "12px", fontSize: "12px", color: "#0f172a", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                  formatter={(value: any) => [`${value}% প্রাপ্ত নম্বর`, "স্কোর শতাংশ"]}
                />
                <Line
                  type="monotone"
                  dataKey="percentage"
                  stroke="#0d9488"
                  strokeWidth={3}
                  dot={{ fill: "#0d9488", r: 5 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Mock Tests History Table */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs">
        <h2 className="text-base font-bold text-slate-900 font-bengali">
          পূর্ববর্তী মক টেস্টের ইতিহাস
        </h2>
        {progress.mockTestAttempts && progress.mockTestAttempts.length > 0 ? (
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs font-bengali">
              <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">টেস্টের নাম</th>
                  <th className="p-3">তারিখ</th>
                  <th className="p-3">প্রাপ্ত নম্বর</th>
                  <th className="p-3">শতাংশ</th>
                  <th className="p-3">সঠিক / ভুল</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {progress.mockTestAttempts.map((att) => (
                  <tr key={att.id} className="hover:bg-slate-50">
                    <td className="p-3 font-semibold text-slate-900">{att.testTitle}</td>
                    <td className="p-3 font-mono-num text-slate-500">
                      {new Date(att.date).toLocaleDateString("bn-IN")}
                    </td>
                    <td className="p-3 font-mono-num font-bold text-emerald-700">
                      {att.score} / {att.totalMarks}
                    </td>
                    <td className="p-3 font-mono-num font-bold text-teal-700">
                      {att.percentage}%
                    </td>
                    <td className="p-3 font-mono-num font-medium">
                      <span className="text-emerald-700">✓ {att.correctAnswers}</span> |{" "}
                      <span className="text-rose-600">✗ {att.wrongAnswers}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 text-xs text-slate-500 font-bengali">
            এখনো কোনো মক টেস্ট সম্পন্ন করেননি।
          </div>
        )}
      </div>
    </div>
  );
};
