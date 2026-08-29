import { PYQPaper } from "../types";
import {
  PYQ_2018_EXECUTIVE_ASSISTANT,
  PYQ_2018_KARMEE,
  PYQ_2018_NIRMAN_SAHAYAK,
  PYQ_2018_SAHAYAK,
  PYQ_2018_SECRETARY
} from "./volume6";

export const PYQ_PAPERS: PYQPaper[] = [
  {
    id: "pyq_2018_ea",
    year: "২০১৮",
    postNameBn: "এক্সিকিউটিভ অ্যাসিস্ট্যান্ট (Executive Assistant)",
    postNameEn: "WB Gram Panchayat Executive Assistant (Official 2018 Paper)",
    totalMarks: 85,
    durationMinutes: 90,
    questionsCount: 85,
    description: "২০১৮ সালের পশ্চিমবঙ্গ গ্রাম পঞ্চায়েত এক্সিকিউটিভ অ্যাসিস্ট্যান্ট পরীক্ষার অরিজিনাল সম্পূর্ণ ৮৫টি প্রশ্নপত্র ও নির্ভুল ব্যাখ্যা।",
    questions: PYQ_2018_EXECUTIVE_ASSISTANT
  },
  {
    id: "pyq_2018_karmee",
    year: "২০১৮",
    postNameBn: "গ্রাম পঞ্চায়েত কর্মী (Gram Panchayat Karmee)",
    postNameEn: "WB Gram Panchayat Karmee (Official 2018 Paper)",
    totalMarks: 39,
    durationMinutes: 45,
    questionsCount: 39,
    description: "২০১৮ সালের গ্রাম পঞ্চায়েত কর্মী নিয়োগ পরীক্ষার সম্পূর্ণ ৩৯টি প্রশ্নপত্র (বাংলা, ইংরেজি, পাটিগণিত ও সাধারণ জ্ঞান)।",
    questions: PYQ_2018_KARMEE
  },
  {
    id: "pyq_2018_ns",
    year: "২০১৮",
    postNameBn: "নির্মাণ সহায়ক (Nirman Sahayak)",
    postNameEn: "WB Gram Panchayat Nirman Sahayak (Official 2018 Paper)",
    totalMarks: 85,
    durationMinutes: 90,
    questionsCount: 85,
    description: "২০১৮ সালের গ্রাম পঞ্চায়েত নির্মাণ সহায়ক পরীক্ষার সম্পূর্ণ ৮৫টি প্রশ্নপত্র (বাংলা, ইংরেজি, গণিত ও প্রযুক্তিগত প্রশ্ন)।",
    questions: PYQ_2018_NIRMAN_SAHAYAK
  },
  {
    id: "pyq_2018_sahayak",
    year: "২০১৮",
    postNameBn: "গ্রাম পঞ্চায়েত সহায়ক (Gram Panchayat Sahayak)",
    postNameEn: "WB Gram Panchayat Sahayak (Official 2018 Paper)",
    totalMarks: 85,
    durationMinutes: 90,
    questionsCount: 85,
    description: "২০১৮ সালের গ্রাম পঞ্চায়েত সহায়ক পরীক্ষার সম্পূর্ণ ৮৫টি প্রশ্নপত্র (ইংরেজি ২৫, বাংলা ২৫, গণিত ২০ ও সাধারণ জ্ঞান ১৫)।",
    questions: PYQ_2018_SAHAYAK
  },
  {
    id: "pyq_2018_secretary",
    year: "২০১৮",
    postNameBn: "গ্রাম পঞ্চায়েত সচিব (Gram Panchayat Secretary)",
    postNameEn: "WB Gram Panchayat Secretary (Official 2018 Paper)",
    totalMarks: 85,
    durationMinutes: 90,
    questionsCount: 85,
    description: "২০১৮ সালের গ্রাম পঞ্চায়েত সচিব পরীক্ষার সম্পূর্ণ ৮৫টি প্রশ্নপত্র (ইংরেজি ২৫, বাংলা ২৫, গণিত ২০ ও পঞ্চায়েত প্রশাসন ১৫)।",
    questions: PYQ_2018_SECRETARY
  }
];
