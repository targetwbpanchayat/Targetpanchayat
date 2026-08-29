// ভলিউম ৫: সমগ্র ৫,০০০ টি ৪-বিকল্পযুক্ত MCQ ব্যাঙ্ক কালেকশন
import { Question } from "../../../types";
import { HISTORY_1000_MCQS } from "./historyMcqs";
import { GEOGRAPHY_1000_MCQS } from "./geographyMcqs";
import { POLITY_1000_MCQS } from "./polityMcqs";
import { SCIENCE_1000_MCQS } from "./scienceMcqs";
import { STATIC_1000_MCQS } from "./staticGkMcqs";

export {
  HISTORY_1000_MCQS,
  GEOGRAPHY_1000_MCQS,
  POLITY_1000_MCQS,
  SCIENCE_1000_MCQS,
  STATIC_1000_MCQS
};

// Aggregated 5,000 MCQ Bank
export const ALL_5000_GK_MCQS: Question[] = [
  ...HISTORY_1000_MCQS,
  ...GEOGRAPHY_1000_MCQS,
  ...POLITY_1000_MCQS,
  ...SCIENCE_1000_MCQS,
  ...STATIC_1000_MCQS,
];
