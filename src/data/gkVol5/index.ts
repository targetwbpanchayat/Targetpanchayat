import { StudyChapter, Question } from "../../types";
import { GK_HISTORY_CHAPTERS, GK_HISTORY_QUESTIONS, HISTORY_SUBSECTIONS } from "./history";
import { GK_GEOGRAPHY_CHAPTERS, GK_GEOGRAPHY_QUESTIONS, GEOGRAPHY_SUBSECTIONS } from "./geography";
import { GK_POLITY_CHAPTERS, GK_POLITY_QUESTIONS, POLITY_SUBSECTIONS } from "./polity";
import { GK_SCIENCE_CHAPTERS, GK_SCIENCE_QUESTIONS, SCIENCE_SUBSECTIONS } from "./science";
import { GK_STATIC_CHAPTERS, GK_STATIC_QUESTIONS, STATIC_GK_SUBSECTIONS } from "./staticGk";
import { GK_EXPANDED_MCQS } from "./expandedMcqs";
import {
  ALL_5000_SAQS,
  SAQ_CATEGORY_LIST,
  HISTORY_1000_SAQS,
  GEOGRAPHY_1000_SAQS,
  POLITY_1000_SAQS,
  SCIENCE_1000_SAQS,
  STATIC_1000_SAQS,
  GKOneLinerSAQ
} from "./saqBanks";
import {
  ALL_5000_GK_MCQS,
  HISTORY_1000_MCQS,
  GEOGRAPHY_1000_MCQS,
  POLITY_1000_MCQS,
  SCIENCE_1000_MCQS,
  STATIC_1000_MCQS
} from "./mcqBanks";

export interface GKCategoryMeta {
  id: "history" | "geography" | "polity" | "science" | "static";
  nameBn: string;
  nameEn: string;
  subsectionsCount: number;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
  chapters: StudyChapter[];
  questions: Question[];
}

export const GK_CATEGORIES: GKCategoryMeta[] = [
  {
    id: "history",
    nameBn: "ইতিহাস ও ভারতের জাতীয় আন্দোলন",
    nameEn: "History & National Movement",
    subsectionsCount: 24,
    icon: "Landmark",
    color: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    description: "সিন্ধু-বৈদিক যুগ, মৌর্য, গুপ্ত, সুলতানি, মুঘল, ব্রিটিশ শাসন, ১৮৫৭ বিদ্রোহ, জাতীয় কংগ্রেস, সমাজ সংস্কার, বিপ্লবী আন্দোলন, গান্ধীযুগ, আজাদ হিন্দ ফৌজ ও ঐতিহাসিক চুক্তি (১,০০০ ওয়ান-লাইনার ও ৪-অপশন MCQ)।",
    chapters: GK_HISTORY_CHAPTERS,
    questions: [...GK_HISTORY_QUESTIONS, ...HISTORY_1000_MCQS],
  },
  {
    id: "geography",
    nameBn: "ভূগোল ও পশ্চিমবঙ্গ",
    nameEn: "Geography & West Bengal",
    subsectionsCount: 25,
    icon: "Compass",
    color: "text-emerald-700",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    description: "ভারতের ভূপ্রকৃতি, নদনদী, জলবায়ু, মৃত্তিকা, কৃষিকাজ, খনিজ, পরিবহন, জনসংখ্যা, পশ্চিমবঙ্গের ২৩ জেলা, নদনদী, সৌরজগৎ, বায়ুমণ্ডল ও বিশ্ব ভূগোল (১,০০০ ওয়ান-লাইনার ও ৪-অপশন MCQ)।",
    chapters: GK_GEOGRAPHY_CHAPTERS,
    questions: [...GK_GEOGRAPHY_QUESTIONS, ...GEOGRAPHY_1000_MCQS],
  },
  {
    id: "polity",
    nameBn: "ভারতীয় সংবিধান ও রাজনীতি",
    nameEn: "Indian Polity & Constitution",
    subsectionsCount: 22,
    icon: "ShieldAlert",
    color: "text-indigo-700",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    description: "গণপরিষদ, প্রস্তাবনা, মৌলিক অধিকার, DPSP, মৌলিক কর্তব্য, রাষ্ট্রপতি, সংসদ, সুপ্রিম কোর্ট, পঞ্চায়েত ব্যবস্থা, জরুরি অবস্থা, ধারা ও সংশোধনীসমূহ (১,০০০ ওয়ান-লাইনার ও ৪-অপশন MCQ)।",
    chapters: GK_POLITY_CHAPTERS,
    questions: [...GK_POLITY_QUESTIONS, ...POLITY_1000_MCQS],
  },
  {
    id: "science",
    nameBn: "সাধারণ বিজ্ঞান",
    nameEn: "General Science",
    subsectionsCount: 18,
    icon: "Atom",
    color: "text-sky-700",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
    description: "পরিমাপক একক, গতিবিদ্যা, তাপ, আলো, শব্দ, বিদ্যুৎ, রসায়ন, পর্যায় সারণি, কোষবিদ্যা, মানব শারীরস্থান, পুষ্টি ও ভিটামিন, মহাকাশ ও উদ্ভাবন (১,০০০ ওয়ান-লাইনার ও ৪-অপশন MCQ)।",
    chapters: GK_SCIENCE_CHAPTERS,
    questions: [...GK_SCIENCE_QUESTIONS, ...SCIENCE_1000_MCQS],
  },
  {
    id: "static",
    nameBn: "স্ট্যাটিক জিকে",
    nameEn: "Static GK",
    subsectionsCount: 20,
    icon: "Globe",
    color: "text-purple-700",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    description: "শাস্ত্রীয় ও লোকনৃত্য, উৎসব, বিখ্যাত বই ও লেখক, আন্তর্জাতিক দিবস, সদর দপ্তর, প্রথম ও বৃহত্তম, খেলাধুলা, স্থাপত্য ও ইউনেস্কো ওয়ার্ল্ড হেরিটেজ (১,০০০ ওয়ান-লাইনার ও ৪-অপশন MCQ)।",
    chapters: GK_STATIC_CHAPTERS,
    questions: [...GK_STATIC_QUESTIONS, ...STATIC_1000_MCQS],
  },
];

export const GK_VOL5_CHAPTERS: StudyChapter[] = [
  ...GK_HISTORY_CHAPTERS,
  ...GK_GEOGRAPHY_CHAPTERS,
  ...GK_POLITY_CHAPTERS,
  ...GK_SCIENCE_CHAPTERS,
  ...GK_STATIC_CHAPTERS,
];

export const GK_VOL5_QUESTIONS: Question[] = [
  ...GK_HISTORY_QUESTIONS,
  ...GK_GEOGRAPHY_QUESTIONS,
  ...GK_POLITY_QUESTIONS,
  ...GK_SCIENCE_QUESTIONS,
  ...GK_STATIC_QUESTIONS,
  ...GK_EXPANDED_MCQS,
  ...ALL_5000_GK_MCQS,
];

export {
  GK_HISTORY_CHAPTERS,
  GK_HISTORY_QUESTIONS,
  HISTORY_SUBSECTIONS,
  GK_GEOGRAPHY_CHAPTERS,
  GK_GEOGRAPHY_QUESTIONS,
  GEOGRAPHY_SUBSECTIONS,
  GK_POLITY_CHAPTERS,
  GK_POLITY_QUESTIONS,
  POLITY_SUBSECTIONS,
  GK_SCIENCE_CHAPTERS,
  GK_SCIENCE_QUESTIONS,
  SCIENCE_SUBSECTIONS,
  GK_STATIC_CHAPTERS,
  GK_STATIC_QUESTIONS,
  STATIC_GK_SUBSECTIONS,
  GK_EXPANDED_MCQS,
  ALL_5000_SAQS,
  SAQ_CATEGORY_LIST,
  HISTORY_1000_SAQS,
  GEOGRAPHY_1000_SAQS,
  POLITY_1000_SAQS,
  SCIENCE_1000_SAQS,
  STATIC_1000_SAQS,
  ALL_5000_GK_MCQS,
  HISTORY_1000_MCQS,
  GEOGRAPHY_1000_MCQS,
  POLITY_1000_MCQS,
  SCIENCE_1000_MCQS,
  STATIC_1000_MCQS,
};

export type { GKOneLinerSAQ };

