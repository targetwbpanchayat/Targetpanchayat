#!/usr/bin/env python3
"""Apply demo access control patches to source files."""
import sys

def patch_file(filepath, old_str, new_str):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if new_str in content:
        print(f"SKIP (already patched): {filepath}")
        return
    
    if old_str not in content:
        print(f"WARN (old string not found): {filepath}")
        return
    
    content = content.replace(old_str, new_str)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"PATCHED: {filepath}")

# ============================================================
# 1. App.tsx
# ============================================================
app = 'src/App.tsx'

patch_file(app,
    'import { SettingsView } from "./components/SettingsView";',
    'import { SettingsView } from "./components/SettingsView";\nimport { isTabLocked } from "./utils/demoAccess";'
)

patch_file(app,
    '              {activeTab === "study" && (\n                <StudyView\n                  progress={progress}\n                  setProgress={setProgress}\n                  selectedChapterId={selectedChapterId}\n                  setSelectedChapterId={setSelectedChapterId}\n                  onLaunchPractice={handleLaunchPracticeFromChapter}\n                />\n              )}',
    '              {activeTab === "study" && (\n                <StudyView\n                  progress={progress}\n                  setProgress={setProgress}\n                  selectedChapterId={selectedChapterId}\n                  setSelectedChapterId={setSelectedChapterId}\n                  onLaunchPractice={handleLaunchPracticeFromChapter}\n                  userEmail={user?.email}\n                />\n              )}'
)

patch_file(app,
    '              {activeTab === "study_plan" && (\n                <StudyPlanView',
    '              {activeTab === "study_plan" && !isTabLocked("study_plan", user?.email) && (\n                <StudyPlanView'
)

patch_file(app,
    '              {activeTab === "practice" && (\n                <PracticeView\n                  progress={progress}\n                  setProgress={setProgress}\n                  initialSubject={practiceInitialSubject}\n                />\n              )}',
    '              {activeTab === "practice" && (\n                <PracticeView\n                  progress={progress}\n                  setProgress={setProgress}\n                  initialSubject={practiceInitialSubject}\n                  userEmail={user?.email}\n                />\n              )}'
)

patch_file(app,
    '              {activeTab === "tests" && (\n                <TestsHubView\n                  progress={progress}\n                  setProgress={setProgress}\n                  initialSubTab="full_mock"\n                  initialTestId={selectedMockTestId}\n                />\n              )}',
    '              {activeTab === "tests" && (\n                <TestsHubView\n                  progress={progress}\n                  setProgress={setProgress}\n                  initialSubTab="full_mock"\n                  initialTestId={selectedMockTestId}\n                  userEmail={user?.email}\n                />\n              )}'
)

patch_file(app,
    '              {(activeTab === "full_mock_test" || activeTab === "mock_test") && (\n                <TestsHubView\n                  progress={progress}\n                  setProgress={setProgress}\n                  initialSubTab="full_mock"\n                  initialTestId={selectedMockTestId}\n                />\n              )}',
    '              {(activeTab === "full_mock_test" || activeTab === "mock_test") && (\n                <TestsHubView\n                  progress={progress}\n                  setProgress={setProgress}\n                  initialSubTab="full_mock"\n                  initialTestId={selectedMockTestId}\n                  userEmail={user?.email}\n                />\n              )}'
)

patch_file(app,
    '              {activeTab === "short_mock_test" && (\n                <TestsHubView\n                  progress={progress}\n                  setProgress={setProgress}\n                  initialSubTab="short_mock"\n                />\n              )}',
    '              {activeTab === "short_mock_test" && (\n                <TestsHubView\n                  progress={progress}\n                  setProgress={setProgress}\n                  initialSubTab="short_mock"\n                  userEmail={user?.email}\n                />\n              )}'
)

patch_file(app,
    '              {activeTab === "quiz" && (\n                <TestsHubView\n                  progress={progress}\n                  setProgress={setProgress}\n                  initialSubTab="quiz"\n                />\n              )}',
    '              {activeTab === "quiz" && (\n                <TestsHubView\n                  progress={progress}\n                  setProgress={setProgress}\n                  initialSubTab="quiz"\n                  userEmail={user?.email}\n                />\n              )}'
)

patch_file(app,
    '              {activeTab === "pyq" && (\n                <PYQView',
    '              {activeTab === "pyq" && !isTabLocked("pyq", user?.email) && (\n                <PYQView'
)

patch_file(app,
    '              {activeTab === "current_affairs" && (\n                <CurrentAffairsView />',
    '              {activeTab === "current_affairs" && !isTabLocked("current_affairs", user?.email) && (\n                <CurrentAffairsView />'
)

patch_file(app,
    '              {activeTab === "report" && (\n                <ReportView progress={progress} />',
    '              {activeTab === "report" && !isTabLocked("report", user?.email) && (\n                <ReportView progress={progress} />'
)

patch_file(app,
    '{user && <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />}',
    '{user && <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} userEmail={user?.email} />}'
)

# ============================================================
# 2. StudyView.tsx
# ============================================================
study = 'src/components/StudyView.tsx'

patch_file(study,
    'import { Gk5000SaqExplorer } from "./Gk5000SaqExplorer";',
    'import { Gk5000SaqExplorer } from "./Gk5000SaqExplorer";\nimport { isChapterAccessible } from "../utils/demoAccess";\nimport { Lock } from "lucide-react";'
)

patch_file(study,
    'interface StudyViewProps {\n  progress: UserProgress;\n  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;\n  selectedChapterId: string | null;\n  setSelectedChapterId: (id: string | null) => void;\n  onLaunchPractice: (subjectId: SubjectId) => void;\n}\n\nexport const StudyView: React.FC<StudyViewProps> = ({\n  progress,\n  setProgress,\n  selectedChapterId,\n  setSelectedChapterId,\n  onLaunchPractice,\n}) => {',
    'interface StudyViewProps {\n  progress: UserProgress;\n  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;\n  selectedChapterId: string | null;\n  setSelectedChapterId: (id: string | null) => void;\n  onLaunchPractice: (subjectId: SubjectId) => void;\n  userEmail?: string;\n}\n\nexport const StudyView: React.FC<StudyViewProps> = ({\n  progress,\n  setProgress,\n  selectedChapterId,\n  setSelectedChapterId,\n  onLaunchPractice,\n  userEmail,\n}) => {'
)

patch_file(study,
    '          const oneLinersCount = chapter.content.oneLiners?.length || chapter.content.quickRevisionPoints.length;\n          const saqCount = chapter.content.saqs?.length || chapter.content.examTips.length;',
    '          const oneLinersCount = chapter.content.oneLiners?.length || chapter.content.quickRevisionPoints.length;\n          const saqCount = chapter.content.saqs?.length || chapter.content.examTips.length;\n          const locked = !isChapterAccessible(chapter.id, userEmail);'
)

# StudyView: replace the chapter card footer with locked version
patch_file(study,
    '<button\n                  onClick={() => toggleChapterDone(chapter.id)}\n                  className={`text-xs font-semibold font-bengali flex items-center gap-1.5 transition-colors cursor-pointer ${\n                    isDone ? "text-emerald-700 font-bold" : "text-slate-500 hover:text-slate-800"\n                  }`}',
    '{locked ? (\n                  <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full font-bengali flex items-center gap-1">\n                    <Lock className="w-3 h-3" />\n                    ডেমোতে লক করা\n                  </span>\n                ) : (\n                  <button\n                  onClick={() => toggleChapterDone(chapter.id)}\n                  className={`text-xs font-semibold font-bengali flex items-center gap-1.5 transition-colors cursor-pointer ${\n                    isDone ? "text-emerald-700 font-bold" : "text-slate-500 hover:text-slate-800"\n                  }`}'
)

patch_file(study,
    '<button\n                  onClick={() => setSelectedChapterId(chapter.id)}\n                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl font-bengali transition-colors cursor-pointer shadow-xs"\n                >\n                  অধ্যায় পড়ুন →\n                </button>\n              </div>',
    '<button\n                  onClick={() => !locked && setSelectedChapterId(chapter.id)}\n                  disabled={locked}\n                  className={`px-4 py-2 text-white text-xs font-bold rounded-xl font-bengali transition-colors flex items-center gap-1.5 shadow-xs ${\n                    locked ? "bg-slate-300 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-700 cursor-pointer"\n                  }`}\n                >\n                  {locked ? (\n                    <>\n                      <Lock className="w-3.5 h-3.5" />\n                      <span>লক করা</span>\n                    </>\n                  ) : (\n                    <>\n                      <span>অধ্যায় পড়ুন</span> →\n                    </>\n                  )}\n                </button>\n              </div>\n                )}'
)

# ============================================================
# 3. PracticeView.tsx
# ============================================================
practice = 'src/components/PracticeView.tsx'

patch_file(practice,
    'import { cleanQuestionText } from "../utils/testGenerator";',
    'import { cleanQuestionText } from "../utils/testGenerator";\nimport { getDemoAccessibleQuestions } from "../utils/demoAccess";'
)

patch_file(practice,
    'interface PracticeViewProps {\n  progress: UserProgress;\n  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;\n  initialSubject?: SubjectId | "all";\n}\n\nexport const PracticeView: React.FC<PracticeViewProps> = ({\n  progress,\n  setProgress,\n  initialSubject = "all",\n}) => {',
    'interface PracticeViewProps {\n  progress: UserProgress;\n  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;\n  initialSubject?: SubjectId | "all";\n  userEmail?: string;\n}\n\nexport const PracticeView: React.FC<PracticeViewProps> = ({\n  progress,\n  setProgress,\n  initialSubject = "all",\n  userEmail,\n}) => {'
)

patch_file(practice,
    '  // Filter questions\n  const filteredQuestions = QUESTION_SETS.filter((q) => {',
    '  // For demo users, limit to first 20 questions per subject\n  const accessibleQuestions = getDemoAccessibleQuestions(QUESTION_SETS, userEmail);\n\n  // Filter questions\n  const filteredQuestions = accessibleQuestions.filter((q) => {'
)

patch_file(practice,
    'সব বিষয় ({QUESTION_SETS.length.toLocaleString()})',
    'সব বিষয় ({accessibleQuestions.length.toLocaleString()})'
)

patch_file(practice,
    'const count = QUESTION_SETS.filter((q) => q.subjectId === sub.id).length;',
    'const count = accessibleQuestions.filter((q) => q.subjectId === sub.id).length;'
)

# ============================================================
# 4. FullMockTestView.tsx
# ============================================================
fullmock = 'src/components/FullMockTestView.tsx'

patch_file(fullmock,
    'import { saveUserProgress } from "../utils/storage";',
    'import { saveUserProgress } from "../utils/storage";\nimport { isMockTestAccessible } from "../utils/demoAccess";\nimport { Lock } from "lucide-react";'
)

patch_file(fullmock,
    'interface FullMockTestViewProps {\n  progress: UserProgress;\n  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;\n  initialTestId?: string | null;\n}\n\nexport const FullMockTestView: React.FC<FullMockTestViewProps> = ({\n  progress,\n  setProgress,\n  initialTestId,\n}) => {',
    'interface FullMockTestViewProps {\n  progress: UserProgress;\n  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;\n  initialTestId?: string | null;\n  userEmail?: string;\n}\n\nexport const FullMockTestView: React.FC<FullMockTestViewProps> = ({\n  progress,\n  setProgress,\n  initialTestId,\n  userEmail,\n}) => {'
)

patch_file(fullmock,
    '            const bestScore = previousAttempts.length > 0\n              ? Math.max(...previousAttempts.map((a) => a.percentage))\n              : null;',
    '            const bestScore = previousAttempts.length > 0\n              ? Math.max(...previousAttempts.map((a) => a.percentage))\n              : null;\n            const locked = !isMockTestAccessible(test.id, userEmail);'
)

patch_file(fullmock,
    '                  <button\n                    onClick={() => {\n                      setCurrentTest({\n                        ...test,\n                        questions: test.questions.map(cleanQuestion),\n                      });\n                      setActiveScreen("instructions");\n                    }}\n                    className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white text-xs font-bold font-bengali transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"\n                  >\n                    <span>শুরু করুন</span>\n                    <ArrowRight className="w-3.5 h-3.5" />\n                  </button>',
    '                  {locked ? (\n                    <span className="px-3.5 py-2 rounded-xl bg-slate-200 text-slate-500 text-xs font-bold font-bengali flex items-center gap-1.5">\n                      <Lock className="w-3.5 h-3.5" />\n                      <span>লক করা</span>\n                    </span>\n                  ) : (\n                    <button\n                      onClick={() => {\n                        setCurrentTest({\n                          ...test,\n                          questions: test.questions.map(cleanQuestion),\n                        });\n                        setActiveScreen("instructions");\n                      }}\n                      className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white text-xs font-bold font-bengali transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"\n                    >\n                      <span>শুরু করুন</span>\n                      <ArrowRight className="w-3.5 h-3.5" />\n                    </button>\n                  )}'
)

# ============================================================
# 5. TestsHubView.tsx
# ============================================================
testshub = 'src/components/TestsHubView.tsx'

patch_file(testshub,
    'interface TestsHubViewProps {\n  progress: UserProgress;\n  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;\n  initialSubTab?: "full_mock" | "short_mock" | "quiz" | "history";\n  initialTestId?: string | null;\n}\n\nexport const TestsHubView: React.FC<TestsHubViewProps> = ({\n  progress,\n  setProgress,\n  initialSubTab = "full_mock",\n  initialTestId,\n}) => {',
    'interface TestsHubViewProps {\n  progress: UserProgress;\n  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;\n  initialSubTab?: "full_mock" | "short_mock" | "quiz" | "history";\n  initialTestId?: string | null;\n  userEmail?: string;\n}\n\nexport const TestsHubView: React.FC<TestsHubViewProps> = ({\n  progress,\n  setProgress,\n  initialSubTab = "full_mock",\n  initialTestId,\n  userEmail,\n}) => {'
)

patch_file(testshub,
    '        <FullMockTestView\n          progress={progress}\n          setProgress={setProgress}\n          initialTestId={initialTestId}\n        />',
    '        <FullMockTestView\n          progress={progress}\n          setProgress={setProgress}\n          initialTestId={initialTestId}\n          userEmail={userEmail}\n        />'
)

# ============================================================
# 6. Sidebar.tsx
# ============================================================
sidebar = 'src/components/Sidebar.tsx'

patch_file(sidebar,
    '  HelpCircle,\n} from "lucide-react";',
    '  HelpCircle,\n  Lock,\n} from "lucide-react";'
)

patch_file(sidebar,
    'import { STUDY_CHAPTERS } from "../data/studyData";',
    'import { STUDY_CHAPTERS } from "../data/studyData";\nimport { isTabLocked } from "../utils/demoAccess";'
)

patch_file(sidebar,
    '        {navItems.map((item) => {\n          const Icon = item.icon;\n          const isActive = activeTab === item.id;\n          return (\n            <button\n              key={item.id}\n              onClick={() => setActiveTab(item.id)}\n              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all text-left cursor-pointer ${\n                isActive\n                  ? "bg-emerald-600 text-white font-bold shadow-sm shadow-emerald-600/30"\n                  : "text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/60"\n              }`}\n            >\n              <div className="flex items-center gap-3">\n                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-500"}`} />\n                <span className="font-bengali">{item.label}</span>\n              </div>\n              {item.badge && (',
    '        {navItems.map((item) => {\n          const Icon = item.icon;\n          const isActive = activeTab === item.id;\n          const locked = isTabLocked(item.id, user?.email);\n          return (\n            <button\n              key={item.id}\n              onClick={() => !locked && setActiveTab(item.id)}\n              disabled={locked}\n              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${\n                locked\n                  ? "text-slate-300 cursor-not-allowed"\n                  : isActive\n                  ? "bg-emerald-600 text-white font-bold shadow-sm shadow-emerald-600/30 cursor-pointer"\n                  : "text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/60 cursor-pointer"\n              }`}\n            >\n              <div className="flex items-center gap-3">\n                {locked ? <Lock className="w-4 h-4 text-slate-300" /> : <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-500"}`} />\n                <span className="font-bengali">{item.label}</span>\n              </div>\n              {item.badge && !locked && ('
)

# ============================================================
# 7. MobileNav.tsx
# ============================================================
mobilenav = 'src/components/MobileNav.tsx'

patch_file(mobilenav,
    '  Settings,\n} from "lucide-react";',
    '  Settings,\n  Lock,\n} from "lucide-react";\nimport { isTabLocked } from "../utils/demoAccess";'
)

patch_file(mobilenav,
    'interface MobileNavProps {\n  activeTab: string;\n  setActiveTab: (tab: string) => void;\n}\n\nexport const MobileNav: React.FC<MobileNavProps> = ({ activeTab, setActiveTab }) => {',
    'interface MobileNavProps {\n  activeTab: string;\n  setActiveTab: (tab: string) => void;\n  userEmail?: string;\n}\n\nexport const MobileNav: React.FC<MobileNavProps> = ({ activeTab, setActiveTab, userEmail }) => {'
)

patch_file(mobilenav,
    '  const handleSelect = (id: string) => {\n    setActiveTab(id);\n    setDrawerOpen(false);\n  };',
    '  const handleSelect = (id: string) => {\n    if (isTabLocked(id, userEmail)) return;\n    setActiveTab(id);\n    setDrawerOpen(false);\n  };'
)

print('\n=== Demo access control patches applied ===')
