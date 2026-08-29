export interface GKOneLinerSAQ {
  id: number;
  category: "history" | "geography" | "polity" | "science" | "static";
  categoryBn: string;
  topicBn: string;
  questionBn: string;
  answerBn: string;
  fullText: string;
  isImportant?: boolean;
}

import { HISTORY_1000_SAQS } from "./historySaqs";
import { GEOGRAPHY_1000_SAQS } from "./geographySaqs";
import { POLITY_1000_SAQS } from "./politySaqs";
import { SCIENCE_1000_SAQS } from "./scienceSaqs";
import { STATIC_1000_SAQS } from "./staticGkSaqs";

export { HISTORY_1000_SAQS, GEOGRAPHY_1000_SAQS, POLITY_1000_SAQS, SCIENCE_1000_SAQS, STATIC_1000_SAQS };

// Aggregated 5,000 SAQ Collection
export const ALL_5000_SAQS: GKOneLinerSAQ[] = [
  ...HISTORY_1000_SAQS,
  ...GEOGRAPHY_1000_SAQS,
  ...POLITY_1000_SAQS,
  ...SCIENCE_1000_SAQS,
  ...STATIC_1000_SAQS,
];

export interface SAQCategoryStats {
  id: "history" | "geography" | "polity" | "science" | "static";
  nameBn: string;
  nameEn: string;
  count: number;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
  subtopics: string[];
}

export const SAQ_CATEGORY_LIST: SAQCategoryStats[] = [
  {
    id: "history",
    nameBn: "ইতিহাস ও ভারতের জাতীয় আন্দোলন",
    nameEn: "History & National Movement",
    count: 1000,
    icon: "Landmark",
    color: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    subtopics: [
      "সিন্ধু ও হরপ্পা সভ্যতা",
      "বৈদিক যুগ ও মহাজনপদ",
      "বৌদ্ধ ও জৈন ধর্ম",
      "মৌর্য ও নন্দ রাজবংশ",
      "গুপ্ত সাম্রাজ্য ও হর্ষবর্ধন",
      "বাংলার পাল ও সেন রাজবংশ",
      "দিল্লি সুলতানি (দাস, খলজি, তুঘলক, লোদি)",
      "মুঘল সাম্রাজ্য ও মারাঠা শক্তি",
      "১৮৫৭ সালের মহাবিদ্রোহ ও কৃষক আন্দোলন",
      "বাংলার নবজাগরণ ও সমাজ সংস্কার",
      "জাতীয় কংগ্রেস ও ভারতের স্বাধীনতা আন্দোলন",
    ],
  },
  {
    id: "geography",
    nameBn: "ভূগোল ও পশ্চিমবঙ্গ",
    nameEn: "Geography & West Bengal",
    count: 1000,
    icon: "Compass",
    color: "text-emerald-700",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    subtopics: [
      "সৌরজগৎ, মহাবিশ্ব ও গ্রহ",
      "ভারতের ভূপ্রকৃতি ও হিমালয়",
      "ভারতের নদনদী ও উপনদী",
      "ভারতের হ্রদ, জলপ্রপাত ও বহুমুখী প্রকল্প",
      "পশ্চিমবঙ্গের ভূপ্রকৃতি ও নদনদী",
      "পশ্চিমবঙ্গের ২৩টি জেলার খুঁটিনাটি ও অর্থনীতি",
    ],
  },
  {
    id: "polity",
    nameBn: "ভারতীয় সংবিধান ও রাষ্ট্রনীতি",
    nameEn: "Indian Polity & Constitution",
    count: 1000,
    icon: "ShieldAlert",
    color: "text-indigo-700",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    subtopics: [
      "গণপরিষদ ও সংবিধানের পটভূমি",
      "মৌলিক অধিকার ও ৫টি রিট (Articles 12-35)",
      "রাষ্ট্রপতি, সংসদ ও বিচারব্যবস্থা",
      "পঞ্চায়েতি রাজ ও পশ্চিমবঙ্গ পঞ্চায়েত আইন",
    ],
  },
  {
    id: "science",
    nameBn: "সাধারণ বিজ্ঞান",
    nameEn: "General Science",
    count: 1000,
    icon: "Atom",
    color: "text-sky-700",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
    subtopics: [
      "এসআই একক ও বৈজ্ঞানিক যন্ত্রপাতি",
      "পদার্থবিদ্যা ও আলোকবিজ্ঞান",
      "রসায়ন, পর্যায় সারণি ও ধাতু",
      "জীববিজ্ঞান, মানবদেহ ও ভিটামিন",
    ],
  },
  {
    id: "static",
    nameBn: "স্ট্যাটিক জিকে",
    nameEn: "Static GK",
    count: 1000,
    icon: "Globe",
    color: "text-purple-700",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    subtopics: [
      "ভারতের শাস্ত্রীয় ও লোকনৃত্য এবং উৎসব",
      "আন্তর্জাতিক সংস্থা ও সদর দপ্তর",
      "ভারত ও বিশ্বে প্রথম ও বৃহত্তম",
      "জাতীয় উদ্যান, ইউনেস্কো হেরিটেজ ও গবেষণা কেন্দ্র",
    ],
  },
];
