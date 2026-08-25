import { PYQPaper } from "../types";
import { QUESTION_SETS } from "./questionSets";

export const PYQ_PAPERS: PYQPaper[] = [
  {
    id: "pyq_2018_ea",
    year: "২০১৮",
    postNameBn: "এক্সিকিউটিভ অ্যাসিস্ট্যান্ট (Executive Assistant)",
    postNameEn: "WB Gram Panchayat Executive Assistant",
    totalMarks: 85,
    durationMinutes: 90,
    questionsCount: 15,
    description: "২০১৮ সালের পশ্চিমবঙ্গ গ্রাম পঞ্চায়েত এক্সিকিউটিভ অ্যাসিস্ট্যান্ট পরীক্ষার অরিজিনাল প্রশ্নপত্র ও নির্ভুল সমাধান।",
    questions: [
      QUESTION_SETS[0],
      QUESTION_SETS[1],
      QUESTION_SETS[2],
      QUESTION_SETS[3],
      QUESTION_SETS[8],
      QUESTION_SETS[9],
      QUESTION_SETS[10],
      QUESTION_SETS[14],
      QUESTION_SETS[15],
      QUESTION_SETS[16],
      QUESTION_SETS[18],
      QUESTION_SETS[19],
      QUESTION_SETS[21],
      QUESTION_SETS[22],
      QUESTION_SETS[23]
    ].filter(Boolean)
  },
  {
    id: "pyq_2018_ns",
    year: "২০১৮",
    postNameBn: "নির্মাণ সহায়ক (Nirman Sahayak)",
    postNameEn: "WB Gram Panchayat Nirman Sahayak",
    totalMarks: 85,
    durationMinutes: 90,
    questionsCount: 12,
    description: "২০১৮ সালের গ্রাম পঞ্চায়েত নির্মাণ সহায়ক পরীক্ষার সাধারণ অংশ (বাংলা, ইংরেজি ও গণিত)।",
    questions: [
      QUESTION_SETS[1],
      QUESTION_SETS[3],
      QUESTION_SETS[4],
      QUESTION_SETS[8],
      QUESTION_SETS[10],
      QUESTION_SETS[11],
      QUESTION_SETS[14],
      QUESTION_SETS[16],
      QUESTION_SETS[18],
      QUESTION_SETS[20],
      QUESTION_SETS[22],
      QUESTION_SETS[24]
    ].filter(Boolean)
  },
  {
    id: "pyq_2019_karmee",
    year: "২০১৯",
    postNameBn: "গ্রাম পঞ্চায়েত কর্মী / সহায়ক (GP Karmee & Sahayak)",
    postNameEn: "Gram Panchayat Karmee & Sahayak",
    totalMarks: 45,
    durationMinutes: 60,
    questionsCount: 10,
    description: "২০১৯ সালের পশ্চিমবঙ্গ গ্রাম পঞ্চায়েত কর্মী ও সহায়ক পদের বাস্তব প্রশ্নাবলি ও ব্যাখ্যা।",
    questions: [
      QUESTION_SETS[0],
      QUESTION_SETS[2],
      QUESTION_SETS[5],
      QUESTION_SETS[6],
      QUESTION_SETS[7],
      QUESTION_SETS[9],
      QUESTION_SETS[12],
      QUESTION_SETS[15],
      QUESTION_SETS[19],
      QUESTION_SETS[23]
    ].filter(Boolean)
  }
];
