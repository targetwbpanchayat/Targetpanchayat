import { Question } from "../types";
import { VOL_1_QUESTIONS } from "./panchayatVol1";
import { BENGALI_VOL2_QUESTIONS } from "./bengaliVol2";
import { ENGLISH_VOL3_QUESTIONS } from "./englishVol3";
import { MATH_VOL4_QUESTIONS } from "./mathVol4";
import { GK_VOL5_QUESTIONS } from "./gkVol5";

export const QUESTION_SETS: Question[] = [
  // --- পঞ্চায়েত ব্যবস্থা ভলিউম ১ (Volume 1 Questions & Converted MCQs from Uploaded PDF) ---
  ...VOL_1_QUESTIONS,

  // --- বাংলা ভাষা ও ব্যাকরণ ভলিউম ২ (Volume 2 Questions & Converted MCQs from Uploaded PDF) ---
  ...BENGALI_VOL2_QUESTIONS,

  // --- ইংরেজি ভাষা ও ব্যাকরণ ভলিউম ৩ (Volume 3 English Grammar & Comprehension MCQs) ---
  ...ENGLISH_VOL3_QUESTIONS,

  // --- গণিত ও পাটিগণিত ভলিউম ৪ (Volume 4 Mathematics Chapterwise Questions & Explanations) ---
  ...MATH_VOL4_QUESTIONS,

  // --- সাধারণ জ্ঞান ও জিকে ভলিউম ৫ (Volume 5 General Knowledge & Static GK Questions) ---
  ...GK_VOL5_QUESTIONS,
];

