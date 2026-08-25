import { MockTest } from "../types";
import { QUESTION_SETS } from "./questionSets";

export const MOCK_TESTS: MockTest[] = [
  {
    id: "mock_test_1",
    titleBn: "ফুল লেংথ গ্র্যান্ড মক টেস্ট ১ (১০টি অধ্যায়ের সমন্বিত পঞ্চায়েত টেস্ট)",
    titleEn: "Grand Mock Test 1 - All 10 Chapters Comprehensive",
    postCategory: "Gram Panchayat Karmee / Sahayak",
    totalMarks: 50,
    totalQuestions: 50,
    durationMinutes: 45,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "ভলিউম ১-এর সম্পূর্ণ ১০টি অধ্যায় (ঐতিহাসিক পটভূমি থেকে প্রকল্পসমূহ) নিয়ে প্রস্তুত ৫০ নম্বরের গ্র্যান্ড মক টেস্ট।",
    sections: [
      { subjectId: "panchayat", subjectName: "পশ্চিমবঙ্গ পঞ্চায়েত ব্যবস্থা ও গ্রামীণ উন্নয়ন (ভলিউম ১)", questionCount: 50, marksPerQuestion: 1 },
    ],
    // Select questions systematically across all chapters
    questions: [
      ...QUESTION_SETS.slice(0, 5),    // Ch 1
      ...QUESTION_SETS.slice(50, 55),  // Ch 2
      ...QUESTION_SETS.slice(100, 105), // Ch 3
      ...QUESTION_SETS.slice(150, 155), // Ch 4
      ...QUESTION_SETS.slice(200, 205), // Ch 5
      ...QUESTION_SETS.slice(250, 255), // Ch 6
      ...QUESTION_SETS.slice(300, 305), // Ch 7
      ...QUESTION_SETS.slice(350, 355), // Ch 8
      ...QUESTION_SETS.slice(400, 405), // Ch 9
      ...QUESTION_SETS.slice(450, 455), // Ch 10
    ]
  },
  {
    id: "mock_test_2",
    titleBn: "এক্সিকিউটিভ অ্যাসিস্ট্যান্ট ও নির্মাণ সহায়ক স্পেশাল মক টেস্ট ২",
    titleEn: "Executive Assistant & Nirman Sahayak Special Mock Test 2",
    postCategory: "Executive Assistant / Nirman Sahayak",
    totalMarks: 40,
    totalQuestions: 40,
    durationMinutes: 35,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "প্রশাসনিক কর্মীমণ্ডলী, উপ-সমিতি, আর্থিক কাঠামো ও বাজেট-অডিট সম্পর্কিত অধ্যায় (৭, ৮, ৯ ও ১০) ভিত্তিক বিশেষ মক টেস্ট।",
    sections: [
      { subjectId: "panchayat", subjectName: "প্রশাসন, কর্মীমণ্ডলী, উপ-সমিতি ও আর্থিক কাঠামো", questionCount: 40, marksPerQuestion: 1 },
    ],
    questions: [
      ...QUESTION_SETS.slice(300, 310), // Ch 7
      ...QUESTION_SETS.slice(350, 360), // Ch 8
      ...QUESTION_SETS.slice(400, 410), // Ch 9
      ...QUESTION_SETS.slice(450, 460), // Ch 10
    ]
  },
  {
    id: "mock_test_3",
    titleBn: "আইন, নির্বাচন ও পদাধিকারী ফোকাসড মক টেস্ট ৩",
    titleEn: "Act, Election & Office Bearers Focused Mock Test 3",
    postCategory: "Panchayat Secretary / Sahayak",
    totalMarks: 30,
    totalQuestions: 30,
    durationMinutes: 25,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "১৯৭৩ আইন, আসন সংরক্ষণ, গ্রাম সংসদ-সভা এবং প্রধান ও উপ-প্রধানের ক্ষমতা সম্পর্কিত অধ্যায় (২, ৪, ৫ ও ৬) স্পেশাল টেস্ট।",
    sections: [
      { subjectId: "panchayat", subjectName: "আইন, নির্বাচন, গ্রাম সংসদ ও পদাধিকারী", questionCount: 30, marksPerQuestion: 1 },
    ],
    questions: [
      ...QUESTION_SETS.slice(50, 60),  // Ch 2
      ...QUESTION_SETS.slice(150, 155), // Ch 4
      ...QUESTION_SETS.slice(200, 208), // Ch 5
      ...QUESTION_SETS.slice(250, 257), // Ch 6
    ]
  },
  {
    id: "mock_test_4",
    titleBn: "স্পিড বুস্টার কুইজ টেস্ট ৪ (দ্রুত রিভিশন ও প্রশ্নোত্তর)",
    titleEn: "Speed Booster Mock 4 - Quick Revision Quiz",
    postCategory: "All GP Posts",
    totalMarks: 20,
    totalQuestions: 20,
    durationMinutes: 15,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "পরীক্ষার হলে সময় বাঁচাতে এবং নির্ভুল উত্তর দেওয়ার দক্ষতা বাড়াতে ১৫ মিনিটের ২০ নম্বরের স্পিড টেস্ট।",
    sections: [
      { subjectId: "panchayat", subjectName: "পঞ্চায়েত ব্যবস্থা ও প্রকল্প স্পিড টেস্ট", questionCount: 20, marksPerQuestion: 1 },
    ],
    questions: QUESTION_SETS.slice(15, 35)
  }
];
