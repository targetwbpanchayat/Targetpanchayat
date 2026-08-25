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
  Newspaper,
  FileText,
  Settings,
} from "lucide-react";

interface MobileNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ activeTab, setActiveTab }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const mainTabs = [
    { id: "dashboard", label: "হোম", icon: LayoutDashboard },
    { id: "study", label: "পড়াশোনা", icon: BookOpen },
    { id: "practice", label: "প্র্যাকটিস", icon: CheckSquare },
    { id: "mock_test", label: "মক টেস্ট", icon: Award },
    { id: "report", label: "রিপোর্ট", icon: BarChart3 },
  ];

  const allMenuItems = [
    { id: "dashboard", label: "ড্যাশবোর্ড", icon: LayoutDashboard },
    { id: "study", label: "পড়াশোনা (Study)", icon: BookOpen },
    { id: "study_plan", label: "পড়ার প্ল্যান (Study Plan)", icon: CalendarCheck },
    { id: "practice", label: "প্র্যাকটিস (MCQ Practice)", icon: CheckSquare },
    { id: "mock_test", label: "মক টেস্ট (Mock Test)", icon: Award },
    { id: "quiz", label: "স্পিড কুইজ (Speed Quiz)", icon: Zap },
    { id: "current_affairs", label: "কারেন্ট অ্যাফেয়ার্স", icon: Newspaper },
    { id: "pyq", label: "বিগত বছরের প্রশ্ন (PYQ)", icon: FileText },
    { id: "report", label: "রিপোর্ট ও পারফরম্যান্স", icon: BarChart3 },
    { id: "settings", label: "সেটিংস ও ডাউনলোড", icon: Settings },
  ];

  const handleSelect = (id: string) => {
    setActiveTab(id);
    setDrawerOpen(false);
  };

  return (
    <>
      {/* Bottom Floating App Bar for Mobile */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 px-2 py-2 flex items-center justify-around shadow-lg">
        {mainTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleSelect(tab.id)}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all cursor-pointer ${
                isActive ? "text-emerald-700 font-bold scale-105" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-emerald-600" : ""}`} />
              <span className="text-[11px] font-bengali mt-0.5">{tab.label}</span>
            </button>
          );
        })}
        {/* All menu open button */}
        <button
          onClick={() => setDrawerOpen(true)}
          className="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-slate-500 hover:text-slate-800 cursor-pointer"
        >
          <Menu className="w-5 h-5" />
          <span className="text-[11px] font-bengali mt-0.5">সব মেনু</span>
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
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item.id)}
                      className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium text-left transition-colors cursor-pointer ${
                        isActive
                          ? "bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-emerald-600" : "text-slate-400"}`} />
                      <span className="font-bengali">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-center text-xs text-slate-500 font-bengali">
              পশ্চিমবঙ্গ গ্রাম পঞ্চায়েত পরীক্ষা প্রস্তুতি
            </div>
          </div>
        </div>
      )}
    </>
  );
};
