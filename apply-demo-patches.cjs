// This script applies demo access control patches to the source files.
// It runs before the Vite build in the GitHub Actions workflow.
const fs = require('fs');

function patchFile(filepath, oldStr, newStr) {
  let content = fs.readFileSync(filepath, 'utf8');
  if (content.includes(newStr)) {
    console.log(`SKIP (already patched): ${filepath}`);
    return;
  }
  if (!content.includes(oldStr)) {
    console.log(`WARN (old string not found): ${filepath}`);
    return;
  }
  content = content.replace(oldStr, newStr);
  fs.writeFileSync(filepath, content, 'utf8');
  console.log(`PATCHED: ${filepath}`);
}

// ============================================================
// 1. App.tsx — add import, pass userEmail to components, lock tabs
// ============================================================
const appPath = 'src/App.tsx';
patchFile(appPath,
  'import { SettingsView } from "./components/SettingsView";',
  'import { SettingsView } from "./components/SettingsView";\nimport { isTabLocked } from "./utils/demoAccess";'
);

patchFile(appPath,
  `              {activeTab === "study" && (
                <StudyView
                  progress={progress}
                  setProgress={setProgress}
                  selectedChapterId={selectedChapterId}
                  setSelectedChapterId={setSelectedChapterId}
                  onLaunchPractice={handleLaunchPracticeFromChapter}
                />
              )}`,
  `              {activeTab === "study" && (
                <StudyView
                  progress={progress}
                  setProgress={setProgress}
                  selectedChapterId={selectedChapterId}
                  setSelectedChapterId={setSelectedChapterId}
                  onLaunchPractice={handleLaunchPracticeFromChapter}
                  userEmail={user?.email}
                />
              )}`
);

patchFile(appPath,
  `              {activeTab === "study_plan" && (
                <StudyPlanView`,
  `              {activeTab === "study_plan" && !isTabLocked("study_plan", user?.email) && (
                <StudyPlanView`
);

patchFile(appPath,
  `              {activeTab === "practice" && (
                <PracticeView
                  progress={progress}
                  setProgress={setProgress}
                  initialSubject={practiceInitialSubject}
                />
              )}`,
  `              {activeTab === "practice" && (
                <PracticeView
                  progress={progress}
                  setProgress={setProgress}
                  initialSubject={practiceInitialSubject}
                  userEmail={user?.email}
                />
              )}`
);

// Tests tab — add userEmail to all TestsHubView instances
patchFile(appPath,
  `              {activeTab === "tests" && (
                <TestsHubView
                  progress={progress}
                  setProgress={setProgress}
                  initialSubTab="full_mock"
                  initialTestId={selectedMockTestId}
                />
              )}`,
  `              {activeTab === "tests" && (
                <TestsHubView
                  progress={progress}
                  setProgress={setProgress}
                  initialSubTab="full_mock"
                  initialTestId={selectedMockTestId}
                  userEmail={user?.email}
                />
              )}`
);

patchFile(appPath,
  `              {(activeTab === "full_mock_test" || activeTab === "mock_test") && (
                <TestsHubView
                  progress={progress}
                  setProgress={setProgress}
                  initialSubTab="full_mock"
                  initialTestId={selectedMockTestId}
                />
              )}`,
  `              {(activeTab === "full_mock_test" || activeTab === "mock_test") && (
                <TestsHubView
                  progress={progress}
                  setProgress={setProgress}
                  initialSubTab="full_mock"
                  initialTestId={selectedMockTestId}
                  userEmail={user?.email}
                />
              )}`
);

patchFile(appPath,
  `              {activeTab === "short_mock_test" && (
                <TestsHubView
                  progress={progress}
                  setProgress={setProgress}
                  initialSubTab="short_mock"
                />
              )}`,
  `              {activeTab === "short_mock_test" && (
                <TestsHubView
                  progress={progress}
                  setProgress={setProgress}
                  initialSubTab="short_mock"
                  userEmail={user?.email}
                />
              )}`
);

patchFile(appPath,
  `              {activeTab === "quiz" && (
                <TestsHubView
                  progress={progress}
                  setProgress={setProgress}
                  initialSubTab="quiz"
                />
              )}`,
  `              {activeTab === "quiz" && (
                <TestsHubView
                  progress={progress}
                  setProgress={setProgress}
                  initialSubTab="quiz"
                  userEmail={user?.email}
                />
              )}`
);

patchFile(appPath,
  `              {activeTab === "pyq" && (
                <PYQView`,
  `              {activeTab === "pyq" && !isTabLocked("pyq", user?.email) && (
                <PYQView`
);

patchFile(appPath,
  `              {activeTab === "current_affairs" && (
                <CurrentAffairsView />`,
  `              {activeTab === "current_affairs" && !isTabLocked("current_affairs", user?.email) && (
                <CurrentAffairsView />`
);

patchFile(appPath,
  `              {activeTab === "report" && (
                <ReportView progress={progress} />`,
  `              {activeTab === "report" && !isTabLocked("report", user?.email) && (
                <ReportView progress={progress} />`
);

patchFile(appPath,
  `{user && <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />}`,
  `{user && <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} userEmail={user?.email} />}`
);

// ============================================================
// 2. StudyView.tsx — add import, userEmail prop, lock chapters
// ============================================================
const studyPath = 'src/components/StudyView.tsx';
patchFile(studyPath,
  'import { Gk5000SaqExplorer } from "./Gk5000SaqExplorer";',
  'import { Gk5000SaqExplorer } from "./Gk5000SaqExplorer";\nimport { isChapterAccessible } from "../utils/demoAccess";\nimport { Lock } from "lucide-react";'
);

patchFile(studyPath,
  `interface StudyViewProps {
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
}) => {`,
  `interface StudyViewProps {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  selectedChapterId: string | null;
  setSelectedChapterId: (id: string | null) => void;
  onLaunchPractice: (subjectId: SubjectId) => void;
  userEmail?: string;
}

export const StudyView: React.FC<StudyViewProps> = ({
  progress,
  setProgress,
  selectedChapterId,
  setSelectedChapterId,
  onLaunchPractice,
  userEmail,
}) => {`
);

patchFile(studyPath,
  `          const oneLinersCount = chapter.content.oneLiners?.length || chapter.content.quickRevisionPoints.length;
          const saqCount = chapter.content.saqs?.length || chapter.content.examTips.length;`,
  `          const oneLinersCount = chapter.content.oneLiners?.length || chapter.content.quickRevisionPoints.length;
          const saqCount = chapter.content.saqs?.length || chapter.content.examTips.length;
          const locked = !isChapterAccessible(chapter.id, userEmail);`
);

patchFile(studyPath,
  `              <div className="flex items-center justify-between pt-3 border-t border-slate-100 gap-3">
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
              </div>`,
  `              <div className="flex items-center justify-between pt-3 border-t border-slate-100 gap-3">
                {locked ? (
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full font-bengali flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    ডেমোতে লক করা
                  </span>
                ) : (
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
                )}
                <button
                  onClick={() => !locked && setSelectedChapterId(chapter.id)}
                  disabled={locked}
                  className={`px-4 py-2 text-white text-xs font-bold rounded-xl font-bengali transition-colors flex items-center gap-1.5 shadow-xs ${
                    locked ? "bg-slate-300 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-700 cursor-pointer"
                  }`}
                >
                  {locked ? (
                    <>
                      <Lock className="w-3.5 h-3.5" />
                      <span>লক করা</span>
                    </>
                  ) : (
                    <>
                      <span>অধ্যায় পড়ুন</span> →
                    </>
                  )}
                </button>
              </div>`
);

// ============================================================
// 3. PracticeView.tsx — limit to 20 MCQs per subject for demo
// ============================================================
const practicePath = 'src/components/PracticeView.tsx';
patchFile(practicePath,
  'import { cleanQuestionText } from "../utils/testGenerator";',
  'import { cleanQuestionText } from "../utils/testGenerator";\nimport { getDemoAccessibleQuestions } from "../utils/demoAccess";'
);

patchFile(practicePath,
  `interface PracticeViewProps {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  initialSubject?: SubjectId | "all";
}

export const PracticeView: React.FC<PracticeViewProps> = ({
  progress,
  setProgress,
  initialSubject = "all",
}) => {`,
  `interface PracticeViewProps {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  initialSubject?: SubjectId | "all";
  userEmail?: string;
}

export const PracticeView: React.FC<PracticeViewProps> = ({
  progress,
  setProgress,
  initialSubject = "all",
  userEmail,
}) => {`
);

patchFile(practicePath,
  `  // Filter questions
  const filteredQuestions = QUESTION_SETS.filter((q) => {`,
  `  // For demo users, limit to first 20 questions per subject
  const accessibleQuestions = getDemoAccessibleQuestions(QUESTION_SETS, userEmail);

  // Filter questions
  const filteredQuestions = accessibleQuestions.filter((q) => {`
);

patchFile(practicePath,
  `সব বিষয় ({QUESTION_SETS.length.toLocaleString()})`,
  `সব বিষয় ({accessibleQuestions.length.toLocaleString()})`
);

patchFile(practicePath,
  `const count = QUESTION_SETS.filter((q) => q.subjectId === sub.id).length;`,
  `const count = accessibleQuestions.filter((q) => q.subjectId === sub.id).length;`
);

// ============================================================
// 4. FullMockTestView.tsx — lock all tests except first for demo
// ============================================================
const fullMockPath = 'src/components/FullMockTestView.tsx';
patchFile(fullMockPath,
  'import { saveUserProgress } from "../utils/storage";',
  'import { saveUserProgress } from "../utils/storage";\nimport { isMockTestAccessible } from "../utils/demoAccess";\nimport { Lock } from "lucide-react";'
);

patchFile(fullMockPath,
  `interface FullMockTestViewProps {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  initialTestId?: string | null;
}

export const FullMockTestView: React.FC<FullMockTestViewProps> = ({
  progress,
  setProgress,
  initialTestId,
}) => {`,
  `interface FullMockTestViewProps {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  initialTestId?: string | null;
  userEmail?: string;
}

export const FullMockTestView: React.FC<FullMockTestViewProps> = ({
  progress,
  setProgress,
  initialTestId,
  userEmail,
}) => {`
);

patchFile(fullMockPath,
  `            const bestScore = previousAttempts.length > 0
              ? Math.max(...previousAttempts.map((a) => a.percentage))
              : null;`,
  `            const bestScore = previousAttempts.length > 0
              ? Math.max(...previousAttempts.map((a) => a.percentage))
              : null;
            const locked = !isMockTestAccessible(test.id, userEmail);`
);

patchFile(fullMockPath,
  `                  <button
                    onClick={() => {
                      setCurrentTest({
                        ...test,
                        questions: test.questions.map(cleanQuestion),
                      });
                      setActiveScreen("instructions");
                    }}
                    className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white text-xs font-bold font-bengali transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
                  >
                    <span>শুরু করুন</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>`,
  `                  {locked ? (
                    <span className="px-3.5 py-2 rounded-xl bg-slate-200 text-slate-500 text-xs font-bold font-bengali flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5" />
                      <span>লক করা</span>
                    </span>
                  ) : (
                    <button
                      onClick={() => {
                        setCurrentTest({
                          ...test,
                          questions: test.questions.map(cleanQuestion),
                        });
                        setActiveScreen("instructions");
                      }}
                      className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white text-xs font-bold font-bengali transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
                    >
                      <span>শুরু করুন</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}`
);

// ============================================================
// 5. TestsHubView.tsx — pass userEmail to FullMockTestView
// ============================================================
const testsHubPath = 'src/components/TestsHubView.tsx';
patchFile(testsHubPath,
  `interface TestsHubViewProps {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  initialSubTab?: "full_mock" | "short_mock" | "quiz" | "history";
  initialTestId?: string | null;
}

export const TestsHubView: React.FC<TestsHubViewProps> = ({
  progress,
  setProgress,
  initialSubTab = "full_mock",
  initialTestId,
}) => {`,
  `interface TestsHubViewProps {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  initialSubTab?: "full_mock" | "short_mock" | "quiz" | "history";
  initialTestId?: string | null;
  userEmail?: string;
}

export const TestsHubView: React.FC<TestsHubViewProps> = ({
  progress,
  setProgress,
  initialSubTab = "full_mock",
  initialTestId,
  userEmail,
}) => {`
);

patchFile(testsHubPath,
  `        <FullMockTestView
          progress={progress}
          setProgress={setProgress}
          initialTestId={initialTestId}
        />`,
  `        <FullMockTestView
          progress={progress}
          setProgress={setProgress}
          initialTestId={initialTestId}
          userEmail={userEmail}
        />`
);

// ============================================================
// 6. Sidebar.tsx — add lock indicators
// ============================================================
const sidebarPath = 'src/components/Sidebar.tsx';
patchFile(sidebarPath,
  `  HelpCircle,
} from "lucide-react";`,
  `  HelpCircle,
  Lock,
} from "lucide-react";`
);

patchFile(sidebarPath,
  `import { STUDY_CHAPTERS } from "../data/studyData";`,
  `import { STUDY_CHAPTERS } from "../data/studyData";\nimport { isTabLocked } from "../utils/demoAccess";`
);

patchFile(sidebarPath,
  `        {navItems.map((item) => {
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
              {item.badge && (`,
  `        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          const locked = isTabLocked(item.id, user?.email);
          return (
            <button
              key={item.id}
              onClick={() => !locked && setActiveTab(item.id)}
              disabled={locked}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${
                locked
                  ? "text-slate-300 cursor-not-allowed"
                  : isActive
                  ? "bg-emerald-600 text-white font-bold shadow-sm shadow-emerald-600/30 cursor-pointer"
                  : "text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/60 cursor-pointer"
              }`}
            >
              <div className="flex items-center gap-3">
                {locked ? <Lock className="w-4 h-4 text-slate-300" /> : <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-500"}`} />}
                <span className="font-bengali">{item.label}</span>
              </div>
              {item.badge && !locked && (`
);

// ============================================================
// 7. MobileNav.tsx — add lock support
// ============================================================
const mobileNavPath = 'src/components/MobileNav.tsx';
patchFile(mobileNavPath,
  `  Settings,
} from "lucide-react";`,
  `  Settings,
  Lock,
} from "lucide-react";\nimport { isTabLocked } from "../utils/demoAccess";`
);

patchFile(mobileNavPath,
  `interface MobileNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ activeTab, setActiveTab }) => {`,
  `interface MobileNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userEmail?: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({ activeTab, setActiveTab, userEmail }) => {`
);

patchFile(mobileNavPath,
  `  const handleSelect = (id: string) => {
    setActiveTab(id);
    setDrawerOpen(false);
  };`,
  `  const handleSelect = (id: string) => {
    if (isTabLocked(id, userEmail)) return;
    setActiveTab(id);
    setDrawerOpen(false);
  };`
);

console.log('\n=== Demo access control patches applied ===');
