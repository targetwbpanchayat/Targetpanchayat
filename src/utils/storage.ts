import { UserProfile, UserProgress, StudyPlan, MockTestAttempt, SubjectId } from "../types";

const PROGRESS_KEY_PREFIX = "wb_gp_progress_v2_";
const ACTIVE_USER_KEY = "wb_gp_active_user_v2";

export function getInitialProgress(userEmail: string): UserProgress {
  return {
    userEmail: userEmail || "guest@example.com",
    completedChapters: ["panchayat_ch1"],
    bookmarkedQuestionIds: [],
    practiceAnswers: {},
    mockTestAttempts: [],
    activeStudyPlan: null,
    dailyStreak: {
      currentStreak: 1,
      bestStreak: 1,
      lastActiveDate: new Date().toISOString().split("T")[0],
      activeDays: [new Date().toISOString().split("T")[0]],
    },
    customNotes: {},
  };
}

export function getUserProfile(): UserProfile | null {
  try {
    const raw = localStorage.getItem(ACTIVE_USER_KEY);
    if (raw) return JSON.parse(raw);
  } catch (err) {
    console.error("Failed to load user profile:", err);
  }
  return null;
}

export function saveUserProfile(user: UserProfile | null): void {
  try {
    if (user) {
      localStorage.setItem(ACTIVE_USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(ACTIVE_USER_KEY);
    }
  } catch (err) {
    console.error("Failed to save user profile:", err);
  }
}

export function getUserProgress(userEmail: string): UserProgress {
  const email = userEmail || "guest";
  try {
    const raw = localStorage.getItem(`${PROGRESS_KEY_PREFIX}${email.toLowerCase()}`);
    if (raw) {
      const parsed = JSON.parse(raw);
      return { ...getInitialProgress(email), ...parsed };
    }
  } catch (err) {
    console.error("Failed to load user progress:", err);
  }
  return getInitialProgress(email);
}

export function saveUserProgress(progress: UserProgress): boolean {
  if (!progress) return false;
  const email = progress.userEmail || "guest";
  try {
    const key = `${PROGRESS_KEY_PREFIX}${email.toLowerCase()}`;
    localStorage.setItem(key, JSON.stringify(progress));
    return true;
  } catch (err) {
    console.error("Failed to save progress to localStorage:", err);
    return false;
  }
}

export function updateDailyStreak(progress: UserProgress): UserProgress {
  const today = new Date().toISOString().split("T")[0];
  const lastActive = progress.dailyStreak?.lastActiveDate;

  if (lastActive === today) return progress;

  const activeDays = new Set(progress.dailyStreak?.activeDays || []);
  activeDays.add(today);

  let currentStreak = progress.dailyStreak?.currentStreak || 1;
  let bestStreak = progress.dailyStreak?.bestStreak || 1;

  if (lastActive) {
    const lastDate = new Date(lastActive);
    const currentDate = new Date(today);
    const diffDays = Math.round((currentDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));

    if (diffDays === 1) currentStreak += 1;
    else if (diffDays > 1) currentStreak = 1;
  } else {
    currentStreak = 1;
  }

  if (currentStreak > bestStreak) bestStreak = currentStreak;

  const updated: UserProgress = {
    ...progress,
    dailyStreak: { currentStreak, bestStreak, lastActiveDate: today, activeDays: Array.from(activeDays) },
  };

  saveUserProgress(updated);
  return updated;
}

export function exportProgressToJson(progress: UserProgress): void {
  try {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(progress, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `wb_panchayat_prep_backup_${progress.userEmail}_${new Date().toISOString().split("T")[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  } catch (err) {
    console.error("Failed to export progress:", err);
  }
}

export function importProgressFromJson(jsonString: string, currentUserEmail: string): UserProgress | null {
  try {
    const parsed = JSON.parse(jsonString);
    if (parsed && typeof parsed === "object") {
      const merged: UserProgress = { ...getInitialProgress(currentUserEmail), ...parsed, userEmail: currentUserEmail };
      saveUserProgress(merged);
      return merged;
    }
  } catch (err) {
    console.error("Invalid JSON progress backup:", err);
  }
  return null;
}

export function clearUserData(): void {
  try {
    localStorage.removeItem(ACTIVE_USER_KEY);
  } catch (err) {
    console.error("Failed to clear active user session:", err);
  }
}
