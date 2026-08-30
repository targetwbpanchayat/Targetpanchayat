import React from "react";
import {
  LayoutDashboard,
  BookOpen,
  CalendarCheck,
  CheckSquare,
  Award,
  BarChart3,
  Menu,
  X,
  Zap,
  Clock,
  Newspaper,
  FileText,
  Settings,
  Lock,
} from "lucide-react";
import { isTabLocked } from "../utils/demoAccess";

interface MobileNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userEmail?: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({ activeTab, setActiveTab, userEmail }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const mainTabs = [
    { id: "dashboard", label: "হোম", icon: LayoutDashboard },
    { id: "study", label: "পড়াশোনা", icon: BookOpen },
    { id: "practice", label: "প্র্যাকটিস", icon: CheckSquare },
    { id: "tests", label: "মক টেস্ট", icon: Award },
    { id: "pyq", label: "PYQ", icon: FileText },
  ];

  const allMenuItems = [
    { id: "dashboard", label: "ড্যাশবোর্ড (Home)", icon: LayoutDashboard },
    { id: "study", label: "পড়াশোনা (Study Material)", icon: BookOpen },
    { id: "practice", label: "প্র্যাকটিস সেট (Chapter MCQ)", icon: CheckSquare },
    { id: "tests", label: "মক টেস্ট ও কুইজ (Full/Short/Quiz)", icon: Award },
    { id: "pyq", label: "বিগত বছরের প্রশ্ন (PYQ 2018)", icon: FileText },
    { id: "study_plan", label: "পড়ার প্ল্যান (Study Plan)", icon: CalendarCheck },
    { id: "current_affairs", label: "কারেন্ট অ্যাফেয়ার্স (Current Affairs)", icon: Newspaper },
    { id: "report", label: "রিপোর্ট ও পারফরম্যান্স (Analytics)", icon: BarChart3 },
    { id: "settings", label: "সেটিংস ও ব্যাকআপ (Settings)", icon: Settings },
  ];

  const handleSelect = (id: string) => {
    if (isTabLocked(id, userEmail)) return;
    setActiveTab(id);
    setDrawerOpen(false);
  };

  return (
    <>
      {/* Bottom Floating App Bar for Mobile */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 px-2 py-2 flex items-center justify-around shadow-lg" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
        {mainTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleSelect(tab.id)}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all cursor-pointer ${
                isActive ? "text-emerald-700 font-bold scale-105" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-emerald-600" : ""}`} />
              <span className="text-[10px] font-bengali mt-0.5 whitespace-nowrap">{tab.label}</span>
            </button>
          );
        })}
        <button
          onClick={() => setDrawerOpen(true)}
          className="flex flex-col items-center justify-center py-1 px-2 rounded-xl text-slate-500 hover:text-slate-800 cursor-pointer"
        >
          <Menu className="w-5 h-5" />
          <span className="text-[10px] font-bengali mt-0.5 whitespace-nowrap">সব মেনু</span>
        </button>
      </nav>

      {/* Full Drawer Sheet for Mobile */}
      {drawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
          <div className="w-4/5 max-w-sm bg-white h-full p-5 flex flex-col justify-between border-l border-slate-200 shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <span className="font-bold text-slate-900 font-bengali text-base">সব সেকশন</span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-1.5 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1 overflow-y-auto max-h-[75vh]">
                {allMenuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  const locked = isTabLocked(item.id, userEmail);
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item.id)}
                      className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all text-left cursor-pointer ${
                        locked
                          ? "text-slate-300 cursor-not-allowed"
                          : isActive
                          ? "bg-emerald-600 text-white font-bold"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {locked ? <Lock className="w-4 h-4 text-slate-300" /> : <Icon className="w-4 h-4" />}
                      <span className="font-bengali">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="text-[11px] text-slate-400 font-bengali pt-3 border-t border-slate-100 text-center">
              পশ্চিমবঙ্গ পঞ্চায়েত রিক্রুটমেন্ট ২০২৬
            </div>
          </div>
        </div>
      )}
    </>
  );
};
