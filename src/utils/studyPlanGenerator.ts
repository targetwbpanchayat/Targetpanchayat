import { StudyPlan, DailyStudyTask, SubjectId, StudyChapter, UserProgress } from "../types";
import { STUDY_CHAPTERS } from "../data/studyData";
import { SUBJECTS } from "../data/subjects";

export interface PlanGenerationOptions {
  examName?: string;
  targetExamDate: string; // YYYY-MM-DD
  dailyHours: number; // e.g., 1, 1.5, 2, 3, 4, 5
  targetPost?: string;
  completedChapterIds?: string[];
  startDate?: string; // defaults to today YYYY-MM-DD
}

/**
 * Calculates remaining days from start date to target exam date
 */
export function calculateRemainingDays(targetDateStr: string, startDateStr?: string): number {
  const start = startDateStr ? new Date(startDateStr) : new Date();
  const end = new Date(targetDateStr);
  
  // Normalize to beginning of day in local time
  const startNormalized = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const endNormalized = new Date(end.getFullYear(), end.getMonth(), end.getDate());
  
  const diffMs = endNormalized.getTime() - startNormalized.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  
  return Math.max(1, diffDays);
}

/**
 * Sizing categories for chapters
 */
export function getChapterSize(chapter: StudyChapter): "short" | "medium" | "long" {
  if (chapter.estimatedMinutes <= 25) return "short";
  if (chapter.estimatedMinutes <= 45) return "medium";
  return "long";
}

/**
 * Generates an intelligent, workload-balanced study plan for ANY number of remaining days
 * (from 7 days to 180+ days) and daily study hours.
 */
export function generateIntelligentStudyPlan(options: PlanGenerationOptions): StudyPlan {
  const {
    examName = "WB Gram Panchayat Exam 2026",
    targetExamDate,
    dailyHours,
    targetPost = "Executive Assistant / GP Karmee / Sahayak",
    completedChapterIds = [],
    startDate = new Date().toISOString().split("T")[0],
  } = options;

  const totalDays = calculateRemainingDays(targetExamDate, startDate);
  const dailyMinutesBudget = Math.round(dailyHours * 60);

  // Group chapters by subject for balanced rotational scheduling
  const panchayatChapters = STUDY_CHAPTERS.filter((c) => c.subjectId === "panchayat");
  const bengaliChapters = STUDY_CHAPTERS.filter((c) => c.subjectId === "bengali");
  const englishChapters = STUDY_CHAPTERS.filter((c) => c.subjectId === "english");
  const mathChapters = STUDY_CHAPTERS.filter((c) => c.subjectId === "math");
  const gkChapters = STUDY_CHAPTERS.filter((c) => c.subjectId === "gk");

  // Organize a balanced curriculum sequence alternating across subjects:
  // Math & English (Heavy cognitive), Panchayat & Bengali (Core scoring), GK (High yield)
  const masterCurriculumList: StudyChapter[] = [];
  
  // Interleave the core chapters to ensure everyday variety
  const maxCoreLen = Math.max(
    panchayatChapters.length,
    bengaliChapters.length,
    englishChapters.length,
    mathChapters.length
  );

  let gkIdx = 0;
  for (let i = 0; i < maxCoreLen; i++) {
    if (i < panchayatChapters.length) masterCurriculumList.push(panchayatChapters[i]);
    if (i < mathChapters.length) masterCurriculumList.push(mathChapters[i]);
    if (i < bengaliChapters.length) masterCurriculumList.push(bengaliChapters[i]);
    if (i < englishChapters.length) masterCurriculumList.push(englishChapters[i]);
    
    // Add 2-3 GK chapters in between core modules
    for (let k = 0; k < 3 && gkIdx < gkChapters.length; k++, gkIdx++) {
      masterCurriculumList.push(gkChapters[gkIdx]);
    }
  }

  // Push any remaining GK chapters
  while (gkIdx < gkChapters.length) {
    masterCurriculumList.push(gkChapters[gkIdx]);
    gkIdx++;
  }

  const tasks: DailyStudyTask[] = [];
  const startDateObj = new Date(startDate);

  // Determine study days vs milestone revision / mock days
  // If totalDays >= 20, reserve every 7th day for revision, and last 2-3 days for final review
  const isLongPlan = totalDays >= 28;
  const isMediumPlan = totalDays >= 14 && totalDays < 28;

  // Number of pure study days available
  const reservedRevisionDays = isLongPlan ? Math.floor(totalDays / 7) : (isMediumPlan ? 2 : 1);
  const finalReviewDays = Math.min(3, Math.max(1, Math.floor(totalDays * 0.08)));
  const studyDaysCount = Math.max(5, totalDays - reservedRevisionDays - finalReviewDays);

  // Calculate how many chapters to bundle per study day
  // E.g., if 166 chapters over 40 study days -> ~4 chapters per day (or prioritized modules)
  const chaptersPerDay = Math.max(1, Math.ceil(masterCurriculumList.length / studyDaysCount));

  let curriculumPointer = 0;

  for (let day = 1; day <= totalDays; day++) {
    const taskDate = new Date(startDateObj.getTime() + (day - 1) * 24 * 3600 * 1000)
      .toISOString()
      .split("T")[0];

    const isLastDays = day > totalDays - finalReviewDays;
    const isWeeklyRevisionDay = !isLastDays && day % 7 === 0 && totalDays >= 14;

    if (isLastDays) {
      // Final Marathon Review & Full Mock Test Days
      const dayOffsetFromEnd = totalDays - day + 1;
      const titleBn =
        dayOffsetFromEnd === 1
          ? "চূড়ান্ত অল-সিলেবাস ফর্মুলা রিভিশন ও মানসিক প্রস্তুতি"
          : `ফুল মক টেস্ট #${dayOffsetFromEnd} ও দুর্বল বিষয়সমূহ বিশ্লেষণ`;

      tasks.push({
        id: `task_day_${day}`,
        dayNumber: day,
        dateStr: taskDate,
        dayType: "final_review",
        subjectId: "panchayat",
        chapterTitle: titleBn,
        chapterId: "panchayat_ch1",
        subTopicsList: [
          "বিগত বছরের প্রশ্নপত্র বিশ্লেষণ",
          "গণিত ও ইংরেজির গুরুত্বপূর্ণ শর্টকাট সূত্র",
          "পঞ্চায়েত আইন ও পশ্চিমবঙ্গ সরকারি প্রকল্প রিভিশন",
        ],
        targetMinutes: dailyMinutesBudget,
        targetQuestions: 85,
        completed: false,
      });
    } else if (isWeeklyRevisionDay) {
      // Weekly Revision & Sectional Mock Milestone
      const weekNum = Math.floor(day / 7);
      tasks.push({
        id: `task_day_${day}`,
        dayNumber: day,
        dateStr: taskDate,
        dayType: "revision",
        subjectId: "gk",
        chapterTitle: `সাপ্তাহিক রিভিশন ও প্র্যাকটিস টেস্ট (সপ্তাহ ${weekNum})`,
        chapterId: "gk_hist_sub1",
        subTopicsList: [
          "গত ৬ দিনের পঠিত সমস্ত অধ্যায়ের রিভিশন",
          "ভুল হওয়া প্রশ্নের রি-টেস্ট ও দুর্বল টপিক নোটস",
          "৪০ টি প্রশ্নের স্পিড কুইজ সমাধান",
        ],
        targetMinutes: dailyMinutesBudget,
        targetQuestions: 40,
        completed: false,
      });
    } else {
      // Regular Study Day: Pick primary and balanced secondary topics based on daily study hours
      const primaryChapter =
        masterCurriculumList[curriculumPointer % masterCurriculumList.length];
      curriculumPointer++;

      // Extract sub-topics or sections for clarity
      const subTopicsList: string[] = [];
      if (primaryChapter.subTopics && primaryChapter.subTopics.length > 0) {
        primaryChapter.subTopics.slice(0, 3).forEach((st) => subTopicsList.push(st.titleBn));
      } else if (primaryChapter.content?.sections && primaryChapter.content.sections.length > 0) {
        primaryChapter.content.sections.slice(0, 3).forEach((s) => subTopicsList.push(s.heading));
      }

      // If user has 2+ daily hours and we have many chapters, bundle a secondary topic
      let secondaryChapter: StudyChapter | undefined = undefined;
      if (dailyHours >= 2 && chaptersPerDay > 1 && curriculumPointer < masterCurriculumList.length) {
        secondaryChapter = masterCurriculumList[curriculumPointer % masterCurriculumList.length];
        curriculumPointer++;
      }

      let compositeTitle = primaryChapter.titleBn;
      if (secondaryChapter) {
        compositeTitle = `${primaryChapter.titleBn} + ${secondaryChapter.titleBn}`;
        if (secondaryChapter.subTopics && secondaryChapter.subTopics.length > 0) {
          secondaryChapter.subTopics.slice(0, 2).forEach((st) => subTopicsList.push(st.titleBn));
        }
      }

      // Calculate balanced target minutes (capped by daily budget)
      const primaryMins = primaryChapter.estimatedMinutes || 25;
      const secondaryMins = secondaryChapter ? (secondaryChapter.estimatedMinutes || 25) : 0;
      const studyMins = Math.min(dailyMinutesBudget - 20, primaryMins + secondaryMins);
      const practiceMins = Math.max(15, dailyMinutesBudget - studyMins);

      // Target MCQ questions based on daily study time (e.g. 15-35 MCQs)
      const targetQuestions = Math.min(50, Math.max(15, Math.round(dailyHours * 12)));

      const isCompleted = completedChapterIds.includes(primaryChapter.id);

      tasks.push({
        id: `task_day_${day}`,
        dayNumber: day,
        dateStr: taskDate,
        dayType: "study",
        subjectId: primaryChapter.subjectId,
        chapterTitle: compositeTitle,
        chapterId: primaryChapter.id,
        secondaryChapterId: secondaryChapter?.id,
        secondarySubjectId: secondaryChapter?.subjectId,
        secondaryTitle: secondaryChapter?.titleBn,
        subTopicsList: subTopicsList.slice(0, 4),
        targetMinutes: dailyMinutesBudget,
        targetQuestions,
        completed: isCompleted,
      });
    }
  }

  return {
    id: `plan_${Date.now()}`,
    examName,
    targetExamDate,
    dailyHours,
    startDate,
    totalDays: tasks.length,
    targetPost,
    tasks,
  };
}
