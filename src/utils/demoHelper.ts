import { UserProfile, StudyChapter, SubjectId, MockTest } from "../types";
import { STUDY_CHAPTERS } from "../data/studyData";
import { VOLUME6_MOCK_TESTS } from "../data/volume6";

/**
 * Check if the current user is in Demo / Guest mode
 */
export function isDemoUser(user: UserProfile | null | undefined): boolean {
  if (!user) return false;
  return Boolean(user.isDemo || user.email?.includes("demo@") || user.name?.includes("Demo") || user.name?.includes("অতিথি"));
}

/**
 * Returns the first unlocked chapter ID for a given subject
 */
export function getFirstChapterIdForSubject(subjectId: SubjectId): string | null {
  const subjectChapters = STUDY_CHAPTERS.filter((c) => c.subjectId === subjectId);
  return subjectChapters.length > 0 ? subjectChapters[0].id : null;
}

/**
 * Checks if a specific chapter is accessible for demo users
 * Rule: Only the 1st chapter of each subject/volume is unlocked in demo mode
 */
export function isChapterAccessibleInDemo(chapter: StudyChapter | string, user: UserProfile | null | undefined): boolean {
  if (!isDemoUser(user)) return true;

  const chapObj = typeof chapter === "string" 
    ? STUDY_CHAPTERS.find((c) => c.id === chapter)
    : chapter;

  if (!chapObj) return true;

  const subjectChapters = STUDY_CHAPTERS.filter((c) => c.subjectId === chapObj.subjectId);
  if (subjectChapters.length === 0) return true;

  // Only the first chapter of this subject/volume is unlocked in demo
  return subjectChapters[0].id === chapObj.id;
}

/**
 * Checks if a specific full mock test is accessible in demo mode
 * Rule: Only the 1st mock test set (Set 1) is unlocked in demo mode
 */
export function isMockTestAccessibleInDemo(testId: string, user: UserProfile | null | undefined): boolean {
  if (!isDemoUser(user)) return true;

  const firstVol6TestId = VOLUME6_MOCK_TESTS.length > 0 ? VOLUME6_MOCK_TESTS[0].id : "vol6_set_1";
  return testId === firstVol6TestId || testId === "vol6_set_1";
}

/**
 * Maximum number of practice MCQs accessible per volume/subject in demo mode
 */
export const DEMO_MAX_PRACTICE_QUESTIONS_PER_VOLUME = 20;
export const DEMO_MAX_MCQ_PER_VOLUME = 20;

/**
 * Maximum number of SAQs visible in explorer in demo mode
 */
export const DEMO_MAX_SAQ_PREVIEW = 15;
