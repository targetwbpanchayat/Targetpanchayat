import { SubjectId } from "../types";

// Demo user email — matches LandingPage.tsx handleDemoLogin
const DEMO_EMAIL = "targetpanchayat@gmail.com";

export function isDemoUser(email?: string): boolean {
  return !!email && email.toLowerCase() === DEMO_EMAIL;
}

// First accessible chapter ID for each subject (Volume)
export const DEMO_ACCESSIBLE_CHAPTER_IDS: string[] = [
  "panchayat_ch1", // Volume 1
  "bengali_ch1",   // Volume 2
  "eng_ch1",        // Volume 3
  "math_ch1",       // Volume 4
  "gk_hist_sub1",   // Volume 5 (first GK chapter)
];

// Check if a chapter is accessible in demo mode
export function isChapterAccessible(chapterId: string, email?: string): boolean {
  if (!isDemoUser(email)) return true;
  return DEMO_ACCESSIBLE_CHAPTER_IDS.includes(chapterId);
}

// For practice: allow first 20 questions per subject
export function getDemoAccessibleQuestions<T extends { id: string; subjectId: SubjectId }>(
  allQuestions: T[],
  email?: string
): T[] {
  if (!isDemoUser(email)) return allQuestions;
  // Keep first 20 per subject
  const counts: Record<string, number> = {};
  return allQuestions.filter((q) => {
    const subj = q.subjectId;
    counts[subj] = (counts[subj] || 0) + 1;
    return counts[subj] <= 20;
  });
}

// For mock tests: only first practice set is accessible
export const DEMO_ACCESSIBLE_MOCK_TEST_IDS: string[] = [
  "mock_vol6_practice_set_01",
];

export function isMockTestAccessible(testId: string, email?: string): boolean {
  if (!isDemoUser(email)) return true;
  return DEMO_ACCESSIBLE_MOCK_TEST_IDS.includes(testId);
}

// Which tabs/features are locked for demo users
export const DEMO_LOCKED_TABS: string[] = [
  "pyq",
  "current_affairs",
  "study_plan",
  "report",
];

export function isTabLocked(tab: string, email?: string): boolean {
  if (!isDemoUser(email)) return false;
  return DEMO_LOCKED_TABS.includes(tab);
}
