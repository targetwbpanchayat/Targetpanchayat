import { CurrentAffairItem } from "../types";
import { CURRENT_AFFAIRS_ITEMS } from "../data/currentAffairs";

// Backend API URL — Render বা অন্য ক্লাউড প্ল্যাটফর্মে ডেপ্লয় করা সার্ভারের URL
const API_BASE_URL =
  (import.meta.env?.VITE_API_BASE_URL as string | undefined)?.replace(/\/$/, "") || "";

const STORAGE_KEY = "wb_gp_current_affairs_cache_v2";
const LAST_SYNC_KEY = "wb_gp_ca_last_sync_date";
const BOOKMARKS_KEY = "wb_gp_ca_bookmarked_ids";

// Helper to get formatted today date in Bengali
export function getTodayBengaliDate(): { dateBn: string; monthYearBn: string; isoDate: string } {
  const now = new Date();
  const months = [
    "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন",
    "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"
  ];
  
  const toBengaliNumber = (num: number): string => {
    const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return num
      .toString()
      .split("")
      .map((d) => bengaliDigits[parseInt(d, 10)] || d)
      .join("");
  };

  const day = toBengaliNumber(now.getDate());
  const month = months[now.getMonth()];
  const year = toBengaliNumber(now.getFullYear());
  const isoDate = now.toISOString().split("T")[0];

  return {
    dateBn: `${day} ${month} ${year}`,
    monthYearBn: `${month} ${year}`,
    isoDate,
  };
}

export function getAllCurrentAffairs(): CurrentAffairItem[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed: CurrentAffairItem[] = JSON.parse(saved);
      // Merge with default seed items if any new seed items exist
      const existingIds = new Set(parsed.map((item) => item.id));
      const newSeedItems = CURRENT_AFFAIRS_ITEMS.filter((item) => !existingIds.has(item.id));
      if (newSeedItems.length > 0) {
        const combined = [...parsed, ...newSeedItems];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(combined));
        return combined;
      }
      return parsed;
    }
  } catch (e) {
    console.error("Failed to read current affairs from storage", e);
  }

  // First time initialization
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(CURRENT_AFFAIRS_ITEMS));
  } catch (e) {
    // Ignore storage quota
  }
  return CURRENT_AFFAIRS_ITEMS;
}

export function saveAllCurrentAffairs(items: CurrentAffairItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    console.error("Failed to save current affairs", e);
  }
}

export function getLastSyncDate(): string | null {
  return localStorage.getItem(LAST_SYNC_KEY);
}

export function setLastSyncDate(dateStr: string): void {
  localStorage.setItem(LAST_SYNC_KEY, dateStr);
}

export function getBookmarkedCAIds(): string[] {
  try {
    const saved = localStorage.getItem(BOOKMARKS_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function toggleBookmarkedCA(id: string): string[] {
  const current = getBookmarkedCAIds();
  const exists = current.includes(id);
  const updated = exists ? current.filter((item) => item !== id) : [...current, id];
  try {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error(e);
  }
  return updated;
}

/**
 * Fetch / Generate Today's AI Current Affairs from Backend API
 */
export async function syncDailyCurrentAffairs(force = false): Promise<{
  success: boolean;
  isNew: boolean;
  addedCount: number;
  items: CurrentAffairItem[];
  message: string;
}> {
  const { dateBn, monthYearBn, isoDate } = getTodayBengaliDate();
  const lastSync = getLastSyncDate();
  const allExisting = getAllCurrentAffairs();

  // If already synced today and not forced, return cached items
  if (!force && lastSync === isoDate) {
    return {
      success: true,
      isNew: false,
      addedCount: 0,
      items: allExisting,
      message: "আজকের AI কারেন্ট অ্যাফেয়ার্স ইতিমধ্যে আপ-টু-ডেট রয়েছে।",
    };
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/current-affairs/generate-daily`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        dateBn,
        monthYearBn,
        isoDate,
      }),
    });

    if (!response.ok) {
      throw new Error(`Server returned ${response.status}`);
    }

    const data = await response.json();
    if (data.success && Array.isArray(data.items) && data.items.length > 0) {
      const newItems: CurrentAffairItem[] = data.items.map((item: any, idx: number) => ({
        id: item.id || `ai_ca_${isoDate}_${idx + 1}`,
        titleBn: item.titleBn,
        category: item.category || "পশ্চিমবঙ্গ প্রকল্প",
        date: item.date || dateBn,
        monthYear: item.monthYear || monthYearBn,
        summaryBn: item.summaryBn,
        bulletPoints: Array.isArray(item.bulletPoints) ? item.bulletPoints : [],
        practiceQuestion: item.practiceQuestion,
        isAiGenerated: true,
      }));

      // Filter out duplicates
      const existingIds = new Set(allExisting.map((i) => i.id));
      const existingTitles = new Set(allExisting.map((i) => i.titleBn.trim().toLowerCase()));

      const filteredNew = newItems.filter(
        (item) => !existingIds.has(item.id) && !existingTitles.has(item.titleBn.trim().toLowerCase())
      );

      const merged = [...filteredNew, ...allExisting];
      saveAllCurrentAffairs(merged);
      setLastSyncDate(isoDate);

      return {
        success: true,
        isNew: filteredNew.length > 0,
        addedCount: filteredNew.length,
        items: merged,
        message:
          filteredNew.length > 0
            ? `আজকের ${filteredNew.length}টি নতুন AI কারেন্ট অ্যাফেয়ার্স সফলভাবে যুক্ত হয়েছে!`
            : "আজকের কারেন্ট অ্যাফেয়ার্স ইতিমধ্যে হালনাগাদ করা আছে।",
      };
    } else {
      setLastSyncDate(isoDate);
      return {
        success: true,
        isNew: false,
        addedCount: 0,
        items: allExisting,
        message: "সব কারেন্ট অ্যাফেয়ার্স হালনাগাদ রয়েছে।",
      };
    }
  } catch (error: any) {
    console.warn("AI Daily sync fetch failed, falling back to local latest:", error);

    // Fallback: Check if we have today's items seeded
    setLastSyncDate(isoDate);
    return {
      success: true,
      isNew: false,
      addedCount: 0,
      items: allExisting,
      message: "কারেন্ট অ্যাফেয়ার্স লোড সম্পন্ন হয়েছে।",
    };
  }
}
