import { StudyChapter } from "../types";
import { VOL_1_CHAPTERS } from "./panchayatVol1";
import { BENGALI_VOL2_CHAPTERS } from "./bengaliVol2";
import { ENGLISH_VOL3_STUDY_CHAPTERS } from "./englishVol3";
import { MATH_VOL4_CHAPTERS } from "./mathVol4";

export const STUDY_CHAPTERS: StudyChapter[] = [
  // --- পঞ্চায়েত ব্যবস্থা ও গ্রামীণ উন্নয়ন (Volume 1 Material from Uploaded PDF) ---
  ...VOL_1_CHAPTERS,

  // --- বাংলা ভাষা ও ব্যাকরণ (Volume 2 Material from Uploaded PDF) ---
  ...BENGALI_VOL2_CHAPTERS,

  // --- ইংরেজি ভাষা ও ব্যাকরণ (Volume 3 Complete Study Chapters) ---
  ...ENGLISH_VOL3_STUDY_CHAPTERS,

  // --- গণিত ও পাটিগণিত (Volume 4 Complete Study Chapters) ---
  ...MATH_VOL4_CHAPTERS,
];

