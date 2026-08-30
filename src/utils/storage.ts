/**
 * Storage Service — Supabase Database (cloud) + localStorage fallback
 *
 * User progress is stored in Supabase table: user_progress
 * Each user's data is isolated by Row Level Security (RLS).
 * Data survives app uninstall, device change, browser clear.
 *
 * localStorage is used as fast read-cache and offline fallback.
 * Function signatures match the old version — all components work unchanged.
 */
import { UserProfile, UserProgress, SubjectId } from "../types";
import { supabase, SUPABASE_ENABLED } from "../lib/supabase";

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

/**
 * Get user progress.
 * Synchronous version — returns from localStorage (fast cache).
 * Cloud sync happens asynchronously via syncProgressFromCloud().
 */
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

/**
 * Async version — loads from Supabase cloud first, then falls back to localStorage.
 * Use this on app startup and after login.
 */
export async function getUserProgressAsync(userEmail: string): Promise<UserProgress> {
  const email = userEmail || "guest";

  if (SUPABASE_ENABLED && supabase) {
    try {
      const { data: authData } = await supabase.auth.getUser();
      const uid = authData.user?.id;
      if (uid) {
        const { data, error } = await supabase
          .from("user_progress")
          .select("progress_data")
          .eq("user_id", uid)
          .single();

        if (!error && data?.progress_data) {
          const cloudProgress = data.progress_data as UserProgress;
          const merged = { ...getInitialProgress(email), ...cloudProgress, userEmail: email };
          // Cache locally
          try {
            localStorage.setItem(
              `${PROGRESS_KEY_PREFIX}${email.toLowerCase()}`,
              JSON.stringify(merged)
            );
          } catch {}
          return merged;
        }
      }
    } catch (err) {
      console.error("Failed to load progress from Supabase:", err);
    }
  }

  return getUserProgress(email);
}

/**
 * Save progress to BOTH Supabase (cloud) and localStorage (cache).
 * Cloud save is async and non-blocking.
 */
export function saveUserProgress(progress: UserProgress): boolean {
  if (!progress) return false;
  const email = progress.userEmail || "guest";

  // 1. localStorage (fast cache)
  try {
    localStorage.setItem(
      `${PROGRESS_KEY_PREFIX}${email.toLowerCase()}`,
      JSON.stringify(progress)
    );
  } catch (err) {
    console.error("Failed to save progress to localStorage:", err);
  }

  // 2. Supabase (cloud — async, non-blocking)
  if (SUPABASE_ENABLED && supabase) {
    saveProgressToCloud(progress).catch((err) => {
      console.error("Failed to save progress to Supabase:", err);
    });
  }

  return true;
}

async function saveProgressToCloud(progress: UserProgress): Promise<void> {
  const { data: authData } = await supabase!.auth.getUser();
  const uid = authData.user?.id;
  if (!uid) return;

  await supabase!.from("user_progress").upsert({
    user_id: uid,
    progress_data: progress,
    updated_at: new Date().toISOString(),
  });
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
    const diffDays = Math.round(
      (currentDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24)
    );
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
