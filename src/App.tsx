/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { UserProfile, UserProgress, SubjectId } from "./types";
import { getUserProfile, getUserProgress, saveUserProgress, updateDailyStreak, clearUserData, saveUserProfile } from "./utils/storage";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { MobileNav } from "./components/MobileNav";
import { AuthModal } from "./components/AuthModal";
import { LandingPage } from "./components/LandingPage";
import { DashboardView } from "./components/DashboardView";
import { StudyView } from "./components/StudyView";
import { StudyPlanView } from "./components/StudyPlanView";
import { PracticeView } from "./components/PracticeView";
import { MockTestView } from "./components/MockTestView";
import { QuizView } from "./components/QuizView";
import { CurrentAffairsView } from "./components/CurrentAffairsView";
import { PYQView } from "./components/PYQView";
import { ReportView } from "./components/ReportView";
import { SettingsView } from "./components/SettingsView";

export default function App() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [progress, setProgress] = useState<UserProgress>({
    userEmail: "guest@example.com",
    completedChapters: ["panchayat_ch1"],
    practiceAnswers: {},
    mockTestAttempts: [],
    bookmarkedQuestionIds: [],
    activeStudyPlan: null,
    dailyStreak: {
      currentStreak: 1,
      bestStreak: 1,
      lastActiveDate: new Date().toISOString().split("T")[0],
      activeDays: [new Date().toISOString().split("T")[0]],
    },
    customNotes: {},
  });

  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("register");

  // Selected item routing helpers
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [selectedMockTestId, setSelectedMockTestId] = useState<string | null>(null);
  const [practiceInitialSubject, setPracticeInitialSubject] = useState<SubjectId | "all">("all");

  // Load user data on startup
  useEffect(() => {
    const savedUser = getUserProfile();
    if (savedUser) {
      setUser(savedUser);
      const savedProgress = getUserProgress(savedUser.email);
      if (savedProgress) {
        const streakUpdated = updateDailyStreak(savedProgress);
        setProgress(streakUpdated);
      }
    }
  }, []);

  const handleOpenAuth = (mode: "login" | "register" = "register") => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const handleAuthSuccess = (authenticatedUser: UserProfile) => {
    setUser(authenticatedUser);
    saveUserProfile(authenticatedUser);
    setIsAuthModalOpen(false);
    const existingProgress = getUserProgress(authenticatedUser.email);
    if (existingProgress) {
      const updated = updateDailyStreak(existingProgress);
      setProgress(updated);
    } else {
      const initialProgress: UserProgress = {
        userEmail: authenticatedUser.email,
        completedChapters: ["panchayat_ch1"],
        practiceAnswers: {},
        mockTestAttempts: [],
        bookmarkedQuestionIds: [],
        activeStudyPlan: null,
        dailyStreak: {
          currentStreak: 1,
          bestStreak: 1,
          lastActiveDate: new Date().toISOString().split("T")[0],
          activeDays: [new Date().toISOString().split("T")[0]],
        },
        customNotes: {},
      };
      setProgress(initialProgress);
      saveUserProgress(initialProgress);
    }
  };

  const handleLogout = () => {
    clearUserData();
    setUser(null);
    setActiveTab("dashboard");
  };

  const handleSelectChapterFromAnywhere = (chapterId: string) => {
    setSelectedChapterId(chapterId);
    setActiveTab("study");
  };

  const handleSelectMockTestFromAnywhere = (testId: string) => {
    setSelectedMockTestId(testId);
    setActiveTab("mock_test");
  };

  const handleLaunchPracticeFromChapter = (subjectId: SubjectId) => {
    setPracticeInitialSubject(subjectId);
    setActiveTab("practice");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-bengali selection:bg-emerald-200 selection:text-emerald-900">
      {/* Top Navbar */}
      <Navbar
        user={user}
        progress={progress}
        streak={progress.dailyStreak?.currentStreak || 1}
        onOpenAuth={handleOpenAuth}
        onLogout={handleLogout}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="flex-1 flex max-w-7xl w-full mx-auto px-3 sm:px-6 pt-4 gap-6">
        {/* Left Sidebar only if user is logged in */}
        {user && (
          <Sidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            completedChaptersCount={progress.completedChapters?.length || 0}
            user={user}
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 pb-20 md:pb-8">
          {!user ? (
            <LandingPage onOpenAuth={handleOpenAuth} onLoginSuccess={handleAuthSuccess} />
          ) : (
            <>
              {activeTab === "dashboard" && (
                <DashboardView
                  user={user}
                  progress={progress}
                  setActiveTab={setActiveTab}
                  onSelectChapter={handleSelectChapterFromAnywhere}
                  onSelectMockTest={handleSelectMockTestFromAnywhere}
                />
              )}

              {activeTab === "study" && (
                <StudyView
                  progress={progress}
                  setProgress={setProgress}
                  selectedChapterId={selectedChapterId}
                  setSelectedChapterId={setSelectedChapterId}
                  onLaunchPractice={handleLaunchPracticeFromChapter}
                />
              )}

              {activeTab === "study_plan" && (
                <StudyPlanView
                  progress={progress}
                  setProgress={setProgress}
                  onOpenChapter={handleSelectChapterFromAnywhere}
                />
              )}

              {activeTab === "practice" && (
                <PracticeView
                  progress={progress}
                  setProgress={setProgress}
                  initialSubject={practiceInitialSubject}
                />
              )}

              {activeTab === "mock_test" && (
                <MockTestView
                  progress={progress}
                  setProgress={setProgress}
                  initialTestId={selectedMockTestId}
                />
              )}

              {activeTab === "quiz" && (
                <QuizView
                  progress={progress}
                  setProgress={setProgress}
                />
              )}

              {activeTab === "current_affairs" && (
                <CurrentAffairsView />
              )}

              {activeTab === "pyq" && (
                <PYQView />
              )}

              {activeTab === "report" && (
                <ReportView progress={progress} />
              )}

              {activeTab === "settings" && (
                <SettingsView
                  user={user}
                  setUser={setUser}
                  progress={progress}
                  setProgress={setProgress}
                  onLogout={handleLogout}
                />
              )}
            </>
          )}
        </main>
      </div>

      {/* Mobile Bottom Navigation (only if logged in) */}
      {user && <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />}

      {/* Gmail OTP Verification Authentication Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        initialMode={authMode}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
        onLoginSuccess={handleAuthSuccess}
      />
    </div>
  );
}

