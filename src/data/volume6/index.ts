import { MockTest, Question, PYQPaper } from "../../types";
import {
  PYQ_2018_EXECUTIVE_ASSISTANT,
  PYQ_2018_KARMEE,
  PYQ_2018_NIRMAN_SAHAYAK,
  PYQ_2018_SAHAYAK,
  PYQ_2018_SECRETARY
} from "./pyq2018";

import {
  VOLUME6_PRACTICE_SET_01,
  VOLUME6_PRACTICE_SET_02,
  VOLUME6_PRACTICE_SET_03,
  VOLUME6_PRACTICE_SET_04,
  VOLUME6_PRACTICE_SET_05,
  VOLUME6_PRACTICE_SET_06,
  VOLUME6_PRACTICE_SET_07,
  VOLUME6_PRACTICE_SET_08,
  VOLUME6_PRACTICE_SET_09,
  VOLUME6_PRACTICE_SET_10
} from "./practiceSets01_10";

import {
  VOLUME6_PRACTICE_SET_11,
  VOLUME6_PRACTICE_SET_12,
  VOLUME6_PRACTICE_SET_13,
  VOLUME6_PRACTICE_SET_14,
  VOLUME6_PRACTICE_SET_15,
  VOLUME6_PRACTICE_SET_16,
  VOLUME6_PRACTICE_SET_17,
  VOLUME6_PRACTICE_SET_18,
  VOLUME6_PRACTICE_SET_19,
  VOLUME6_PRACTICE_SET_20
} from "./practiceSets11_20";

import {
  VOLUME6_PRACTICE_SET_21,
  VOLUME6_PRACTICE_SET_22,
  VOLUME6_PRACTICE_SET_23,
  VOLUME6_PRACTICE_SET_24,
  VOLUME6_PRACTICE_SET_25,
  VOLUME6_PRACTICE_SET_26,
  VOLUME6_PRACTICE_SET_27,
  VOLUME6_PRACTICE_SET_28,
  VOLUME6_PRACTICE_SET_29,
  VOLUME6_PRACTICE_SET_30
} from "./practiceSets21_30";

export * from "./pyq2018";
export * from "./practiceSets01_10";
export * from "./practiceSets11_20";
export * from "./practiceSets21_30";

// Array of all 30 sets
export const ALL_VOLUME6_PRACTICE_SETS: { setNumber: number; questions: Question[] }[] = [
  { setNumber: 1, questions: VOLUME6_PRACTICE_SET_01 },
  { setNumber: 2, questions: VOLUME6_PRACTICE_SET_02 },
  { setNumber: 3, questions: VOLUME6_PRACTICE_SET_03 },
  { setNumber: 4, questions: VOLUME6_PRACTICE_SET_04 },
  { setNumber: 5, questions: VOLUME6_PRACTICE_SET_05 },
  { setNumber: 6, questions: VOLUME6_PRACTICE_SET_06 },
  { setNumber: 7, questions: VOLUME6_PRACTICE_SET_07 },
  { setNumber: 8, questions: VOLUME6_PRACTICE_SET_08 },
  { setNumber: 9, questions: VOLUME6_PRACTICE_SET_09 },
  { setNumber: 10, questions: VOLUME6_PRACTICE_SET_10 },
  { setNumber: 11, questions: VOLUME6_PRACTICE_SET_11 },
  { setNumber: 12, questions: VOLUME6_PRACTICE_SET_12 },
  { setNumber: 13, questions: VOLUME6_PRACTICE_SET_13 },
  { setNumber: 14, questions: VOLUME6_PRACTICE_SET_14 },
  { setNumber: 15, questions: VOLUME6_PRACTICE_SET_15 },
  { setNumber: 16, questions: VOLUME6_PRACTICE_SET_16 },
  { setNumber: 17, questions: VOLUME6_PRACTICE_SET_17 },
  { setNumber: 18, questions: VOLUME6_PRACTICE_SET_18 },
  { setNumber: 19, questions: VOLUME6_PRACTICE_SET_19 },
  { setNumber: 20, questions: VOLUME6_PRACTICE_SET_20 },
  { setNumber: 21, questions: VOLUME6_PRACTICE_SET_21 },
  { setNumber: 22, questions: VOLUME6_PRACTICE_SET_22 },
  { setNumber: 23, questions: VOLUME6_PRACTICE_SET_23 },
  { setNumber: 24, questions: VOLUME6_PRACTICE_SET_24 },
  { setNumber: 25, questions: VOLUME6_PRACTICE_SET_25 },
  { setNumber: 26, questions: VOLUME6_PRACTICE_SET_26 },
  { setNumber: 27, questions: VOLUME6_PRACTICE_SET_27 },
  { setNumber: 28, questions: VOLUME6_PRACTICE_SET_28 },
  { setNumber: 29, questions: VOLUME6_PRACTICE_SET_29 },
  { setNumber: 30, questions: VOLUME6_PRACTICE_SET_30 },
];

// All Volume 6 Practice Mock Tests (30 Tests)
export const VOLUME6_MOCK_TESTS: MockTest[] = ALL_VOLUME6_PRACTICE_SETS.map(item => ({
  id: `mock_vol6_practice_set_${item.setNumber.toString().padStart(2, '0')}`,
  titleBn: `ভলিউম ৬: প্র্যাকটিস সেট ${item.setNumber} (৮৫ নম্বরের ফুল লেংথ স্পেশাল মক টেস্ট)`,
  titleEn: `Volume 6: Practice Set ${item.setNumber} (85 Marks Full Length Mock Test)`,
  postCategory: "Executive Assistant / Secretary / Sahayak / Nirman Sahayak / Karmee",
  totalMarks: 85,
  totalQuestions: 85,
  durationMinutes: 90,
  negativeMarkPerWrong: 0.25,
  descriptionBn: `ভলিউম ৬-এর প্র্যাকটিস সেট ${item.setNumber}। বাংলা (২০), ইংরেজি (২০), পাটিগণিত (২৫) এবং সাধারণ জ্ঞান ও পঞ্চায়েত ব্যবস্থা (২০) নিয়ে গঠিত পূর্ণাঙ্গ ৮৫ নম্বরের প্রশ্নপত্র।`,
  sections: [
    { subjectId: "bengali", subjectName: "বাংলা (Bengali)", questionCount: 20, marksPerQuestion: 1 },
    { subjectId: "english", subjectName: "ইংরেজি (English)", questionCount: 20, marksPerQuestion: 1 },
    { subjectId: "math", subjectName: "পাটিগণিত ও যুক্তি (Arithmetic & Reasoning)", questionCount: 25, marksPerQuestion: 1 },
    { subjectId: "panchayat", subjectName: "সাধারণ জ্ঞান ও পঞ্চায়েত আইন (GK & Panchayat)", questionCount: 20, marksPerQuestion: 1 },
  ],
  questions: item.questions
}));

// All Volume 6 Previous Year Questions Mock Tests (5 Official Papers)
export const VOLUME6_PYQ_MOCK_TESTS: MockTest[] = [
  {
    id: "mock_pyq_2018_executive_assistant",
    titleBn: "WB গ্রাম পঞ্চায়েত এক্সিকিউটিভ অ্যাসিস্ট্যান্ট ২০১৮ অফিশিয়াল প্রশ্নপত্র (৮৫ নম্বর)",
    titleEn: "WB Gram Panchayat Executive Assistant 2018 Official Question Paper (85 Marks)",
    postCategory: "Executive Assistant",
    totalMarks: 85,
    totalQuestions: 85,
    durationMinutes: 90,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "২০১৮ সালের পঞ্চায়েত এক্সিকিউটিভ অ্যাসিস্ট্যান্ট অফিশিয়াল পরীক্ষার হুবহু ৮৫টি প্রশ্নপত্র: ইংরেজি ২৫, বাংলা ২৫, পাটিগণিত ২৫, সাধারণ জ্ঞান ১০।",
    sections: [
      { subjectId: "english", subjectName: "ইংরেজি ভাষা (English)", questionCount: 25, marksPerQuestion: 1 },
      { subjectId: "bengali", subjectName: "বাংলা ব্যাকরণ ও সাহিত্য (Bengali)", questionCount: 25, marksPerQuestion: 1 },
      { subjectId: "math", subjectName: "পাটিগণিত ও গণিত (Arithmetic)", questionCount: 25, marksPerQuestion: 1 },
      { subjectId: "gk", subjectName: "সাধারণ জ্ঞান ও পঞ্চায়েত (General Knowledge)", questionCount: 10, marksPerQuestion: 1 },
    ],
    questions: PYQ_2018_EXECUTIVE_ASSISTANT
  },
  {
    id: "mock_pyq_2018_karmee",
    titleBn: "WB গ্রাম পঞ্চায়েত কর্মী ২০১৮ অফিশিয়াল প্রশ্নপত্র (৩৯ নম্বর)",
    titleEn: "WB Gram Panchayat Karmee 2018 Official Question Paper (39 Marks)",
    postCategory: "Gram Panchayat Karmee",
    totalMarks: 39,
    totalQuestions: 39,
    durationMinutes: 45,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "২০১৮ সালের গ্রাম পঞ্চায়েত কর্মী নিয়োগের ৩৯টি অফিশিয়াল প্রশ্নপত্র: বাংলা, ইংরেজি, পাটিগণিত ও সাধারণ জ্ঞান।",
    sections: [
      { subjectId: "gk", subjectName: "সাধারণ জ্ঞান (General Knowledge)", questionCount: 8, marksPerQuestion: 1 },
      { subjectId: "english", subjectName: "ইংরেজি (English)", questionCount: 9, marksPerQuestion: 1 },
      { subjectId: "math", subjectName: "পাটিগণিত ও যুক্তি (Arithmetic)", questionCount: 10, marksPerQuestion: 1 },
      { subjectId: "bengali", subjectName: "বাংলা (Bengali)", questionCount: 12, marksPerQuestion: 1 },
    ],
    questions: PYQ_2018_KARMEE
  },
  {
    id: "mock_pyq_2018_nirman_sahayak",
    titleBn: "WB গ্রাম পঞ্চায়েত নির্মাণ সহায়ক ২০১৮ অফিশিয়াল প্রশ্নপত্র (৮৫ নম্বর)",
    titleEn: "WB Gram Panchayat Nirman Sahayak 2018 Official Question Paper (85 Marks)",
    postCategory: "Nirman Sahayak",
    totalMarks: 85,
    totalQuestions: 85,
    durationMinutes: 90,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "২০১৮ সালের নির্মাণ সহায়ক পরীক্ষার ৮৫টি সম্পূর্ণ প্রশ্নপত্র: ইংরেজি ১৩, বাংলা ১৩, গণিত ২৪, কারিগরি ও পঞ্চায়েত ৩৫।",
    sections: [
      { subjectId: "english", subjectName: "ইংরেজি (English)", questionCount: 13, marksPerQuestion: 1 },
      { subjectId: "bengali", subjectName: "বাংলা (Bengali)", questionCount: 13, marksPerQuestion: 1 },
      { subjectId: "math", subjectName: "গণিত ও পরিমিতি (Math & Mensuration)", questionCount: 24, marksPerQuestion: 1 },
      { subjectId: "panchayat", subjectName: "কারিগরি ও পঞ্চায়েত আইন (Technical & Panchayat)", questionCount: 35, marksPerQuestion: 1 },
    ],
    questions: PYQ_2018_NIRMAN_SAHAYAK
  },
  {
    id: "mock_pyq_2018_sahayak",
    titleBn: "WB গ্রাম পঞ্চায়েত সহায়ক ২০১৮ অফিশিয়াল প্রশ্নপত্র (৮৫ নম্বর)",
    titleEn: "WB Gram Panchayat Sahayak 2018 Official Question Paper (85 Marks)",
    postCategory: "Sahayak",
    totalMarks: 85,
    totalQuestions: 85,
    durationMinutes: 90,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "২০১৮ সালের গ্রাম পঞ্চায়েত সহায়ক পরীক্ষার ৮৫টি সম্পূর্ণ প্রশ্নপত্র: ইংরেজি ২৫, বাংলা ২৫, পাটিগণিত ২০, সাধারণ জ্ঞান ও পঞ্চায়েত ১৫।",
    sections: [
      { subjectId: "english", subjectName: "ইংরেজি (English)", questionCount: 25, marksPerQuestion: 1 },
      { subjectId: "bengali", subjectName: "বাংলা (Bengali)", questionCount: 25, marksPerQuestion: 1 },
      { subjectId: "math", subjectName: "পাটিগণিত (Arithmetic)", questionCount: 20, marksPerQuestion: 1 },
      { subjectId: "panchayat", subjectName: "সাধারণ জ্ঞান ও পঞ্চায়েত (GK & Panchayat)", questionCount: 15, marksPerQuestion: 1 },
    ],
    questions: PYQ_2018_SAHAYAK
  },
  {
    id: "mock_pyq_2018_secretary",
    titleBn: "WB গ্রাম পঞ্চায়েত সচিব ২০১৮ অফিশিয়াল প্রশ্নপত্র (৮৫ নম্বর)",
    titleEn: "WB Gram Panchayat Secretary 2018 Official Question Paper (85 Marks)",
    postCategory: "Secretary",
    totalMarks: 85,
    totalQuestions: 85,
    durationMinutes: 90,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "২০১৮ সালের গ্রাম পঞ্চায়েত সচিব পরীক্ষার ৮৫টি সম্পূর্ণ প্রশ্নপত্র: ইংরেজি ২৫, বাংলা ২৫, পাটিগণিত ২০, পঞ্চায়েত প্রশাসন ১৫।",
    sections: [
      { subjectId: "english", subjectName: "ইংরেজি (English)", questionCount: 25, marksPerQuestion: 1 },
      { subjectId: "bengali", subjectName: "বাংলা (Bengali)", questionCount: 25, marksPerQuestion: 1 },
      { subjectId: "math", subjectName: "পাটিগণিত ও হিসাব (Arithmetic & Accounts)", questionCount: 20, marksPerQuestion: 1 },
      { subjectId: "panchayat", subjectName: "পঞ্চায়েত প্রশাসন ও আইন (Panchayat Administration)", questionCount: 15, marksPerQuestion: 1 },
    ],
    questions: PYQ_2018_SECRETARY
  }
];

// PYQ Papers for the PYQ view component
export const VOLUME6_OFFICIAL_PYQ_PAPERS: PYQPaper[] = [
  {
    id: "pyq_paper_2018_ea",
    year: "2018",
    postNameBn: "গ্রাম পঞ্চায়েত এক্সিকিউটিভ অ্যাসিস্ট্যান্ট",
    postNameEn: "Gram Panchayat Executive Assistant",
    totalMarks: 85,
    durationMinutes: 90,
    questionsCount: 85,
    description: "২০১৮ সালের অফিশিয়াল প্রশ্নপত্র (ইংরেজি ২৫, বাংলা ২৫, পাটিগণিত ২৫, জিকে ১০)",
    questions: PYQ_2018_EXECUTIVE_ASSISTANT
  },
  {
    id: "pyq_paper_2018_karmee",
    year: "2018",
    postNameBn: "গ্রাম পঞ্চায়েত কর্মী",
    postNameEn: "Gram Panchayat Karmee",
    totalMarks: 39,
    durationMinutes: 45,
    questionsCount: 39,
    description: "২০১৮ সালের অফিশিয়াল প্রশ্নপত্র (বাংলা, ইংরেজি, গণিত, সাধারণ জ্ঞান)",
    questions: PYQ_2018_KARMEE
  },
  {
    id: "pyq_paper_2018_ns",
    year: "2018",
    postNameBn: "গ্রাম পঞ্চায়েত নির্মাণ সহায়ক",
    postNameEn: "Gram Panchayat Nirman Sahayak",
    totalMarks: 85,
    durationMinutes: 90,
    questionsCount: 85,
    description: "২০১৮ সালের অফিশিয়াল প্রশ্নপত্র (ইংরেজি, বাংলা, গণিত ও প্রযুক্তিগত প্রশ্ন)",
    questions: PYQ_2018_NIRMAN_SAHAYAK
  },
  {
    id: "pyq_paper_2018_sahayak",
    year: "2018",
    postNameBn: "গ্রাম পঞ্চায়েত সহায়ক",
    postNameEn: "Gram Panchayat Sahayak",
    totalMarks: 85,
    durationMinutes: 90,
    questionsCount: 85,
    description: "২০১৮ সালের অফিশিয়াল প্রশ্নপত্র (ইংরেজি ২৫, বাংলা ২৫, পাটিগণিত ২০, জিকে ১৫)",
    questions: PYQ_2018_SAHAYAK
  },
  {
    id: "pyq_paper_2018_sec",
    year: "2018",
    postNameBn: "গ্রাম পঞ্চায়েত সচিব",
    postNameEn: "Gram Panchayat Secretary",
    totalMarks: 85,
    durationMinutes: 90,
    questionsCount: 85,
    description: "২০১৮ সালের অফিশিয়াল প্রশ্নপত্র (ইংরেজি ২৫, বাংলা ২৫, পাটিগণিত ২০, পঞ্চায়েত ১৫)",
    questions: PYQ_2018_SECRETARY
  }
];
