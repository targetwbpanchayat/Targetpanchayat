import React from "react";
import {
  LayoutDashboard,
  BookOpen,
  CalendarCheck,
  CheckSquare,
  Award,
  Zap,
  Newspaper,
  FileText,
  BarChart3,
  Settings,
  HelpCircle,
} from "lucide-react";

import { UserProfile } from "../types";
import { STUDY_CHAPTERS } from "../data/studyData";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  completedChaptersCount?: number;
  totalChaptersCount?: number;
  user?: UserProfile | null;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  completedChaptersCount = 0,
  totalChaptersCount = STUDY_CHAPTERS.length,
  user,
}) => {
  const navItems = [
    { id: "dashboard", label: "ড্যাশবোর্ড", icon: LayoutDashboard, badge: null },
    { id: "study", label: "পড়াশোনা (Study)", icon: BookOpen, badge: `${completedChaptersCount}/${totalChaptersCount}` },
    { id: "study_plan", label: "পড়ার প্ল্যান (Plan)", icon: CalendarCheck, badge: "নতুন" },
    { id: "practice", label: "প্র্যাকটিস (Practice)", icon: CheckSquare, badge: null },
    { id: "mock_test", label: "মক টেস্ট (Mock Test)", icon: Award, badge: "লাইভ" },
    { id: "quiz", label: "স্পিড কুইজ (Quiz)", icon: Zap, badge: null },
    { id: "current_affairs", label: "কারেন্ট অ্যাফেয়ার্স", icon: Newspaper, badge: "আপডেট" },
    { id: "pyq", label: "বিগত বছরের প্রশ্ন (PYQ)", icon: FileText, badge: null },
    { id: "report", label: "রিপোর্ট ও বিশ্লেষণ", icon: BarChart3, badge: null },
    { id: "settings", label: "সেটিংস ও ব্যাকআপ", icon: Settings, badge: null },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 p-4 flex flex-col justify-between hidden lg:flex shrink-0 min-h-[calc(100vh-4rem)] shadow-xs rounded-2xl my-2">
      <div className="space-y-1.5">
        <div className="px-3 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          মূল মেনু (Main Menu)
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all text-left cursor-pointer ${
                isActive
                  ? "bg-emerald-600 text-white font-bold shadow-sm shadow-emerald-600/30"
                  : "text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/60"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-500"}`} />
                <span className="font-bengali">{item.label}</span>
              </div>
              {item.badge && (
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono-num font-semibold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : item.badge === "লাইভ" || item.badge === "নতুন"
                      ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                      : "bg-slate-100 text-slate-600 border border-slate-200"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Target Exam Info Card */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50/50 border border-emerald-200/80 rounded-2xl p-4 mt-6 shadow-xs">
        <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold mb-1">
          <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>পরীক্ষার গাইডলাইন</span>
        </div>
        <p className="text-xs text-slate-600 font-bengali leading-relaxed">
          প্রতিদিন মক টেস্ট দিন এবং আপনার দুর্বল বিষয়গুলি রিপোর্ট সেকশনে বিশ্লেষণ করুন।
        </p>
      </div>
    </aside>
  );
};
