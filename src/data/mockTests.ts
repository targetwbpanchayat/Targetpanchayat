import { MockTest } from "../types";
import { QUESTION_SETS } from "./questionSets";
import {
  VOLUME6_MOCK_TESTS,
  VOLUME6_PYQ_MOCK_TESTS
} from "./volume6";
import {
  GK_VOL5_QUESTIONS,
  HISTORY_1000_MCQS,
  GEOGRAPHY_1000_MCQS,
  POLITY_1000_MCQS,
  SCIENCE_1000_MCQS,
  STATIC_1000_MCQS
} from "./gkVol5";
import {
  VOL_1_QUESTIONS,
  CHAPTER_1_QUESTIONS,
  CHAPTER_2_QUESTIONS,
  CHAPTER_3_QUESTIONS,
  CHAPTER_4_QUESTIONS,
  CHAPTER_5_QUESTIONS,
  CHAPTER_6_QUESTIONS,
  CHAPTER_7_QUESTIONS,
  CHAPTER_8_QUESTIONS,
  CHAPTER_9_QUESTIONS,
  CHAPTER_10_QUESTIONS
} from "./panchayatVol1";
import { BENGALI_VOL2_QUESTIONS } from "./bengaliVol2";
import {
  ENGLISH_VOL3_QUESTIONS,
  ENGLISH_CH1_QUESTIONS,
  ENGLISH_CH2_QUESTIONS,
  ENGLISH_CH3_QUESTIONS,
  ENGLISH_CH4_QUESTIONS,
  ENGLISH_CH5_QUESTIONS,
  ENGLISH_CH6_QUESTIONS,
  ENGLISH_CH7_QUESTIONS,
  ENGLISH_CH8_QUESTIONS,
  ENGLISH_CH9_QUESTIONS,
  ENGLISH_CH10_QUESTIONS,
  ENGLISH_CH11_QUESTIONS,
  ENGLISH_CH12_QUESTIONS,
  ENGLISH_CH13_QUESTIONS,
  ENGLISH_CH14_QUESTIONS
} from "./englishVol3";
import {
  MATH_VOL4_QUESTIONS,
  MATH_CH1_QUESTIONS,
  MATH_CH2_QUESTIONS,
  MATH_CH3_QUESTIONS,
  MATH_CH4_QUESTIONS,
  MATH_CH5_QUESTIONS,
  MATH_CH6_QUESTIONS,
  MATH_CH7_QUESTIONS,
  MATH_CH8_QUESTIONS,
  MATH_CH9_QUESTIONS,
  MATH_CH10_QUESTIONS,
  MATH_CH11_QUESTIONS,
  MATH_CH12_QUESTIONS,
  MATH_CH13_QUESTIONS,
  MATH_CH14_QUESTIONS
} from "./mathVol4";

export const MOCK_TESTS: MockTest[] = [
  {
    id: "mock_test_grand_combined",
    titleBn: "WB গ্রাম পঞ্চায়েত সম্পূর্ণ ৫টি ভলিউম সমন্বিত মেগা গ্র্যান্ড মক টেস্ট (২০২৬ স্পেশাল)",
    titleEn: "WB Gram Panchayat 5-Volume Comprehensive Mega Mock Test 2026",
    postCategory: "Gram Panchayat Karmee / Sahayak / Secretary / EA / Nirman Sahayak",
    totalMarks: 50,
    totalQuestions: 50,
    durationMinutes: 45,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "ভলিউম ১ (পঞ্চায়েত), ভলিউম ২ (বাংলা), ভলিউম ৩ (ইংরেজি), ভলিউম ৪ (গণিত) এবং ভলিউম ৫ (জিকে ও স্ট্যাটিক জিকে)—সবকটি মূল বিষয়ের সমানুপাতিক ৫০ নম্বরের ফুল লেংথ পরীক্ষা।",
    sections: [
      { subjectId: "panchayat", subjectName: "পঞ্চায়েত ও গ্রামীণ উন্নয়ন (ভলিউম ১)", questionCount: 10, marksPerQuestion: 1 },
      { subjectId: "bengali", subjectName: "বাংলা ভাষা ও সাহিত্য (ভলিউম ২)", questionCount: 10, marksPerQuestion: 1 },
      { subjectId: "english", subjectName: "ইংরেজি ভাষা ও ব্যাকরণ (ভলিউম ৩)", questionCount: 10, marksPerQuestion: 1 },
      { subjectId: "math", subjectName: "গণিত ও পাটিগণিত (ভলিউম ৪)", questionCount: 10, marksPerQuestion: 1 },
      { subjectId: "gk", subjectName: "সাধারণ জ্ঞান ও বিজ্ঞান (ভলিউম ৫)", questionCount: 10, marksPerQuestion: 1 },
    ],
    questions: [
      ...VOL_1_QUESTIONS.slice(0, 10),
      ...BENGALI_VOL2_QUESTIONS.slice(0, 10),
      ...ENGLISH_VOL3_QUESTIONS.slice(0, 10),
      ...MATH_VOL4_QUESTIONS.slice(0, 10),
      ...HISTORY_1000_MCQS.slice(0, 2),
      ...GEOGRAPHY_1000_MCQS.slice(0, 2),
      ...POLITY_1000_MCQS.slice(0, 2),
      ...SCIENCE_1000_MCQS.slice(0, 2),
      ...STATIC_1000_MCQS.slice(0, 2),
    ]
  },
  {
    id: "mock_test_vol1_mega_100",
    titleBn: "ভলিউম ১ পঞ্চায়েত ব্যবস্থা ও গ্রামীণ উন্নয়ন ১০০ নম্বরের সম্পূর্ণ মেগা মক টেস্ট (১০টি অধ্যায়)",
    titleEn: "Volume 1 Panchayat System & Rural Development 100 Marks Mega Challenge (10 Chapters)",
    postCategory: "Executive Assistant / Secretary / Sahayak / Nirman Sahayak / Karmee",
    totalMarks: 100,
    totalQuestions: 100,
    durationMinutes: 90,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "ভলিউম ১-এর সম্পূর্ণ ১০টি অধ্যায় (ঐতিহাসিক পটভূমি, ১৯৭৩ আইন, গ্রাম পঞ্চায়েত, পঞ্চায়েত সমিতি, জেলা পরিষদ, গ্রাম সংসদ, আর্থিক কাঠামো, কর্মীমণ্ডলী, সরকারি স্কিম ও নির্বাচন) থেকে ১০০ নম্বরের সম্পূর্ণ মেগা পরীক্ষা।",
    sections: [
      { subjectId: "panchayat", subjectName: "ঐতিহাসিক পটভূমি ও ১৯৭৩ আইন (অধ্যায় ১-২)", questionCount: 20, marksPerQuestion: 1 },
      { subjectId: "panchayat", subjectName: "ত্রিস্তরীয় পঞ্চায়েত কাঠামো (অধ্যায় ৩-৫)", questionCount: 30, marksPerQuestion: 1 },
      { subjectId: "panchayat", subjectName: "গ্রাম সংসদ ও অর্থ কমিশন (অধ্যায় ৬-৭)", questionCount: 20, marksPerQuestion: 1 },
      { subjectId: "panchayat", subjectName: "প্রশাসনিক কর্মী ও সরকারি স্কিম (অধ্যায় ৮-৯)", questionCount: 20, marksPerQuestion: 1 },
      { subjectId: "panchayat", subjectName: "নির্বাচন ও নির্বাচন কমিশন (অধ্যায় ১০)", questionCount: 10, marksPerQuestion: 1 },
    ],
    questions: [
      ...CHAPTER_1_QUESTIONS.slice(0, 10),
      ...CHAPTER_2_QUESTIONS.slice(0, 10),
      ...CHAPTER_3_QUESTIONS.slice(0, 10),
      ...CHAPTER_4_QUESTIONS.slice(0, 10),
      ...CHAPTER_5_QUESTIONS.slice(0, 10),
      ...CHAPTER_6_QUESTIONS.slice(0, 10),
      ...CHAPTER_7_QUESTIONS.slice(0, 10),
      ...CHAPTER_8_QUESTIONS.slice(0, 10),
      ...CHAPTER_9_QUESTIONS.slice(0, 10),
      ...CHAPTER_10_QUESTIONS.slice(0, 10),
    ]
  },
  {
    id: "mock_test_vol1_act_governance_50",
    titleBn: "ভলিউম ১ পঞ্চায়েত আইন, প্রশাসন ও নির্বাচন ৫০ নম্বরের স্পেশাল মক টেস্ট (অধ্যায় ১-৫, ১০)",
    titleEn: "Volume 1 Panchayat Act, Administration & Election 50 Marks Mock Test",
    postCategory: "Panchayat Secretary / Sahayak / Executive Assistant",
    totalMarks: 50,
    totalQuestions: 50,
    durationMinutes: 45,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "৭৩তম সংবিধান সংশোধনী, ১৯৭৩ পশ্চিমবঙ্গ আইন, গ্রাম পঞ্চায়েত, পঞ্চায়েত সমিতি, জেলা পরিষদ এবং রাজ্য নির্বাচন কমিশন অধ্যায়ভিত্তিক ৫০ নম্বরের বিশেষ টেস্ট।",
    sections: [
      { subjectId: "panchayat", subjectName: "আইন, কাঠামো, উপসমিতি ও নির্বাচন", questionCount: 50, marksPerQuestion: 1 },
    ],
    questions: [
      ...CHAPTER_1_QUESTIONS.slice(10, 18),
      ...CHAPTER_2_QUESTIONS.slice(10, 19),
      ...CHAPTER_3_QUESTIONS.slice(10, 19),
      ...CHAPTER_4_QUESTIONS.slice(10, 18),
      ...CHAPTER_5_QUESTIONS.slice(10, 18),
      ...CHAPTER_10_QUESTIONS.slice(10, 18),
    ]
  },
  {
    id: "mock_test_vol1_finance_schemes_50",
    titleBn: "ভলিউম ১ গ্রাম সংসদ, আর্থিক কাঠামো ও ফ্ল্যাগশিপ স্কিম ৫০ নম্বরের স্পেশাল মক টেস্ট (অধ্যায় ৬-৯)",
    titleEn: "Volume 1 Gram Sansad, Finance, Staff & Schemes 50 Marks Mock Test",
    postCategory: "Executive Assistant / Nirman Sahayak / Sahayak",
    totalMarks: 50,
    totalQuestions: 50,
    durationMinutes: 45,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "গ্রাম সংসদ ও সভা, বাজেট ও ১৫তম অর্থ কমিশন, প্রশাসনিক কর্মীবৃন্দ এবং MGNREGA, আবাস ও অন্যান্য সরকারি প্রকল্প নিয়ে ৫০ নম্বরের স্পেশাল টেস্ট।",
    sections: [
      { subjectId: "panchayat", subjectName: "গ্রাম সংসদ, বাজেট, কর্মীমণ্ডলী ও সরকারি স্কিম", questionCount: 50, marksPerQuestion: 1 },
    ],
    questions: [
      ...CHAPTER_6_QUESTIONS.slice(10, 23),
      ...CHAPTER_7_QUESTIONS.slice(10, 23),
      ...CHAPTER_8_QUESTIONS.slice(10, 22),
      ...CHAPTER_9_QUESTIONS.slice(10, 22),
    ]
  },
  {
    id: "mock_test_english_mega_100",
    titleBn: "ভলিউম ৩ ইংরেজি ভাষা ও ব্যাকরণ ১০০ নম্বরের মেগা চ্যালেঞ্জ মক টেস্ট (১৪টি অধ্যায়)",
    titleEn: "Volume 3 English Grammar & Vocabulary 100 Marks Mega Challenge Mock Test (14 Chapters)",
    postCategory: "Executive Assistant / Sahayak / Secretary / Nirman Sahayak",
    totalMarks: 100,
    totalQuestions: 100,
    durationMinutes: 90,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "ভলিউম ৩-এর সম্পূর্ণ ১৪টি অধ্যায় (Parts of Speech, Articles, Tense, Voice, Narration, Synonyms, Antonyms, One Word, Idioms, Spelling, Error Spotting, Rearrangement, Cloze Test ও Transformation) নিয়ে ১,৪০০ প্রশ্নভাণ্ডার থেকে ১০০ নম্বরের সম্পূর্ণ মেগা পরীক্ষা।",
    sections: [
      { subjectId: "english", subjectName: "কোর ব্যাকরণ (Parts of Speech, Articles & Tenses)", questionCount: 22, marksPerQuestion: 1 },
      { subjectId: "english", subjectName: "বাচ্য ও উক্তি পরিবর্তন (Voice & Narration)", questionCount: 16, marksPerQuestion: 1 },
      { subjectId: "english", subjectName: "ভোকাবুলারি (Synonyms, Antonyms & One Word)", questionCount: 22, marksPerQuestion: 1 },
      { subjectId: "english", subjectName: "বাগধারা ও সঠিক বানান (Idioms & Spelling)", questionCount: 16, marksPerQuestion: 1 },
      { subjectId: "english", subjectName: "অ্যাপ্লায়েড ইংলিশ ও কম্প্রিহেনশন (Errors, Cloze & Transformation)", questionCount: 24, marksPerQuestion: 1 },
    ],
    questions: [
      ...ENGLISH_CH1_QUESTIONS.slice(0, 8),
      ...ENGLISH_CH2_QUESTIONS.slice(0, 7),
      ...ENGLISH_CH3_QUESTIONS.slice(0, 7),
      ...ENGLISH_CH4_QUESTIONS.slice(0, 8),
      ...ENGLISH_CH5_QUESTIONS.slice(0, 8),
      ...ENGLISH_CH6_QUESTIONS.slice(0, 8),
      ...ENGLISH_CH7_QUESTIONS.slice(0, 7),
      ...ENGLISH_CH8_QUESTIONS.slice(0, 7),
      ...ENGLISH_CH9_QUESTIONS.slice(0, 8),
      ...ENGLISH_CH10_QUESTIONS.slice(0, 8),
      ...ENGLISH_CH11_QUESTIONS.slice(0, 6),
      ...ENGLISH_CH12_QUESTIONS.slice(0, 6),
      ...ENGLISH_CH13_QUESTIONS.slice(0, 6),
      ...ENGLISH_CH14_QUESTIONS.slice(0, 7),
    ]
  },
  {
    id: "mock_test_english_grammar_core_50",
    titleBn: "ভলিউম ৩ ইংরেজি ব্যাকরণ কোর ফাউন্ডেশন ৫০ নম্বরের স্পেশাল মক টেস্ট (অধ্যায় ১-৫)",
    titleEn: "Volume 3 English Grammar Core Foundation 50 Marks Mock Test (Chapters 1-5)",
    postCategory: "Panchayat Sahayak / Secretary / Karmee",
    totalMarks: 50,
    totalQuestions: 50,
    durationMinutes: 45,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "Parts of Speech, Articles & Prepositions, Tense & Time, Voice Change এবং Narration Change অধ্যায়ের ওপর ৫০ নম্বরের স্পেশাল ব্যাকরণ টেস্ট।",
    sections: [
      { subjectId: "english", subjectName: "কোর গ্রামার ও নিয়মাবলী (অধ্যায় ১-৫)", questionCount: 50, marksPerQuestion: 1 },
    ],
    questions: [
      ...ENGLISH_CH1_QUESTIONS.slice(8, 18),
      ...ENGLISH_CH2_QUESTIONS.slice(7, 17),
      ...ENGLISH_CH3_QUESTIONS.slice(7, 17),
      ...ENGLISH_CH4_QUESTIONS.slice(8, 18),
      ...ENGLISH_CH5_QUESTIONS.slice(8, 18),
    ]
  },
  {
    id: "mock_test_english_vocab_master_50",
    titleBn: "ভলিউম ৩ ভোকাবুলারি, বাগধারা ও বানান ৫০ নম্বরের স্পেশাল মক টেস্ট (অধ্যায় ৬-৯)",
    titleEn: "Volume 3 Vocabulary, Idioms & Spelling 50 Marks Mock Test (Chapters 6-9)",
    postCategory: "Executive Assistant / Sahayak / Nirman Sahayak",
    totalMarks: 50,
    totalQuestions: 50,
    durationMinutes: 45,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "Synonyms & Antonyms, One Word Substitution, Idioms & Phrases এবং Correct Spelling অধ্যায়ের ওপর ৫০ নম্বরের ভোকাবুলারি টেস্ট।",
    sections: [
      { subjectId: "english", subjectName: "ভোকাবুলারি, বাগধারা ও বানান (অধ্যায় ৬-৯)", questionCount: 50, marksPerQuestion: 1 },
    ],
    questions: [
      ...ENGLISH_CH6_QUESTIONS.slice(8, 21),
      ...ENGLISH_CH7_QUESTIONS.slice(7, 20),
      ...ENGLISH_CH8_QUESTIONS.slice(7, 19),
      ...ENGLISH_CH9_QUESTIONS.slice(8, 20),
    ]
  },
  {
    id: "mock_test_english_applied_50",
    titleBn: "ভলিউম ৩ এরর স্পটিং, রিঅ্যারেঞ্জমেন্ট ও বাক্য রূপান্তর ৫০ নম্বরের স্পেশাল মক টেস্ট (অধ্যায় ১০-১৪)",
    titleEn: "Volume 3 Applied English, Error Spotting & Transformation 50 Marks Mock Test (Chapters 10-14)",
    postCategory: "Executive Assistant / Secretary / Sahayak",
    totalMarks: 50,
    totalQuestions: 50,
    durationMinutes: 45,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "Common Errors, Sentence Rearrangement, Cloze Test, Reading Comprehension ও Transformation of Sentences এর ওপর ৫০ নম্বরের পরীক্ষা।",
    sections: [
      { subjectId: "english", subjectName: "অ্যাপ্লায়েড ইংলিশ ও ট্রান্সফর্মেশন (অধ্যায় ১০-১৪)", questionCount: 50, marksPerQuestion: 1 },
    ],
    questions: [
      ...ENGLISH_CH10_QUESTIONS.slice(8, 18),
      ...ENGLISH_CH11_QUESTIONS.slice(6, 16),
      ...ENGLISH_CH12_QUESTIONS.slice(6, 16),
      ...ENGLISH_CH13_QUESTIONS.slice(6, 16),
      ...ENGLISH_CH14_QUESTIONS.slice(7, 17),
    ]
  },
  {
    id: "mock_test_math_mega_100",
    titleBn: "ভলিউম ৪ গণিত ও পাটিগণিত ১০০ নম্বরের মেগা চ্যালেঞ্জ মক টেস্ট (১৪টি অধ্যায়)",
    titleEn: "Volume 4 Mathematics 100 Marks Mega Challenge Mock Test (14 Chapters)",
    postCategory: "Nirman Sahayak / Executive Assistant / Sahayak / Secretary",
    totalMarks: 100,
    totalQuestions: 100,
    durationMinutes: 90,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "ভলিউম ৪-এর সম্পূর্ণ ১৪টি অধ্যায় (সংখ্যা পদ্ধতি, ঐকিক নিয়ম, শতকরা, অনুপাত, লাভ-ক্ষতি, সুদকষা, সময়-কার্য, ট্রেন-নৌকা, পরিমিতি, মিশ্রণ ও বীজগণিত) থেকে ১,০৫০টি প্রশ্নভাণ্ডার নিয়ে ১০০ নম্বরের সম্পূর্ণ মেগা পরীক্ষা।",
    sections: [
      { subjectId: "math", subjectName: "সংখ্যা পদ্ধতি, ল.সা.গু-গ.সা.গু ও ঐকিক নিয়ম (অধ্যায় ১-২)", questionCount: 14, marksPerQuestion: 1 },
      { subjectId: "math", subjectName: "গড়, শতকরা ও অনুপাত-সমানুপাত (অধ্যায় ৩-৫)", questionCount: 22, marksPerQuestion: 1 },
      { subjectId: "math", subjectName: "লাভ-ক্ষতি ও সরল-চক্রবৃদ্ধি সুদ (অধ্যায় ৬-৮)", questionCount: 22, marksPerQuestion: 1 },
      { subjectId: "math", subjectName: "সময়-কার্য, নল-চৌবাচ্চা ও গতিবেগ (অধ্যায় ৯-১১)", questionCount: 22, marksPerQuestion: 1 },
      { subjectId: "math", subjectName: "পরিমিতি, মিশ্রণ ও সরলীকরণ (অধ্যায় ১২-১৪)", questionCount: 20, marksPerQuestion: 1 },
    ],
    questions: [
      ...MATH_CH1_QUESTIONS.slice(0, 7),
      ...MATH_CH2_QUESTIONS.slice(0, 7),
      ...MATH_CH3_QUESTIONS.slice(0, 7),
      ...MATH_CH4_QUESTIONS.slice(0, 7),
      ...MATH_CH5_QUESTIONS.slice(0, 8),
      ...MATH_CH6_QUESTIONS.slice(0, 8),
      ...MATH_CH7_QUESTIONS.slice(0, 7),
      ...MATH_CH8_QUESTIONS.slice(0, 7),
      ...MATH_CH9_QUESTIONS.slice(0, 7),
      ...MATH_CH10_QUESTIONS.slice(0, 7),
      ...MATH_CH11_QUESTIONS.slice(0, 8),
      ...MATH_CH12_QUESTIONS.slice(0, 7),
      ...MATH_CH13_QUESTIONS.slice(0, 6),
      ...MATH_CH14_QUESTIONS.slice(0, 7),
    ]
  },
  {
    id: "mock_test_math_arithmetic_50",
    titleBn: "ভলিউম ৪ পাটিগণিত ফাউন্ডেশন ৫০ নম্বরের স্পেশাল মক টেস্ট (অধ্যায় ১-৬)",
    titleEn: "Volume 4 Arithmetic Foundation 50 Marks Mock Test (Chapters 1-6)",
    postCategory: "Panchayat Sahayak / Karmee / Secretary",
    totalMarks: 50,
    totalQuestions: 50,
    durationMinutes: 45,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "সংখ্যা পদ্ধতি, ঐকিক নিয়ম, গড় ও বয়স, শতকরা, অনুপাত-সমানুপাত এবং লাভ-ক্ষতি অধ্যায় নিয়ে পাটিগণিত বেসিক ও কনসেপচুয়াল ৫০ নম্বরের পরীক্ষা।",
    sections: [
      { subjectId: "math", subjectName: "পাটিগণিত বেসিক্স ও ফাউন্ডেশন (অধ্যায় ১-৬)", questionCount: 50, marksPerQuestion: 1 },
    ],
    questions: [
      ...MATH_CH1_QUESTIONS.slice(7, 15),
      ...MATH_CH2_QUESTIONS.slice(7, 15),
      ...MATH_CH3_QUESTIONS.slice(7, 15),
      ...MATH_CH4_QUESTIONS.slice(7, 16),
      ...MATH_CH5_QUESTIONS.slice(8, 16),
      ...MATH_CH6_QUESTIONS.slice(8, 16),
    ]
  },
  {
    id: "mock_test_math_speed_work_50",
    titleBn: "ভলিউম ৪ সুদকষা, সময়-কার্য ও গতিবেগ ৫০ নম্বরের স্পেশাল মক টেস্ট (অধ্যায় ৭-১১)",
    titleEn: "Volume 4 Interest, Time-Work & Speed 50 Marks Mock Test (Chapters 7-11)",
    postCategory: "Executive Assistant / Sahayak / Secretary",
    totalMarks: 50,
    totalQuestions: 50,
    durationMinutes: 45,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "সরল সুদ, চক্রবৃদ্ধি সুদ, সময় ও কার্য, নল-চৌবাচ্চা এবং ট্রেন-গতিবেগ-নৌকা সংক্রান্ত জটিল সমস্যা নিয়ে ৫০ নম্বরের স্পেশাল টেস্ট।",
    sections: [
      { subjectId: "math", subjectName: "সুদকষা, সময়-কার্য ও গতিবেগ (অধ্যায় ৭-১১)", questionCount: 50, marksPerQuestion: 1 },
    ],
    questions: [
      ...MATH_CH7_QUESTIONS.slice(7, 17),
      ...MATH_CH8_QUESTIONS.slice(7, 17),
      ...MATH_CH9_QUESTIONS.slice(7, 17),
      ...MATH_CH10_QUESTIONS.slice(7, 17),
      ...MATH_CH11_QUESTIONS.slice(8, 18),
    ]
  },
  {
    id: "mock_test_math_advanced_50",
    titleBn: "ভলিউম ৪ পরিমিতি, মিশ্রণ ও সরলীকরণ ৫০ নম্বরের অ্যাডভান্সড মক টেস্ট (অধ্যায় ১২-১৪)",
    titleEn: "Volume 4 Mensuration, Mixture & Algebra 50 Marks Mock Test (Chapters 12-14)",
    postCategory: "Nirman Sahayak / Executive Assistant",
    totalMarks: 50,
    totalQuestions: 50,
    durationMinutes: 45,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "দ্বিমাত্রিক ও ত্রিমাত্রিক পরিমিতি, সংমিশ্রণ নীতি (Alligation) এবং করণী, সূচক ও বীজগণিত নিয়ে ৫০ নম্বরের অ্যাডভান্সড টেস্ট।",
    sections: [
      { subjectId: "math", subjectName: "পরিমিতি, মিশ্রণ ও বীজগণিত (অধ্যায় ১২-১৪)", questionCount: 50, marksPerQuestion: 1 },
    ],
    questions: [
      ...MATH_CH12_QUESTIONS.slice(7, 24),
      ...MATH_CH13_QUESTIONS.slice(6, 23),
      ...MATH_CH14_QUESTIONS.slice(7, 23),
    ]
  },
  {
    id: "mock_test_gk_mega_100",
    titleBn: "ভলিউম ৫ জিকে ও সাধারণ বিজ্ঞান ১০০ নম্বরের মেগা চ্যালেঞ্জ মক টেস্ট",
    titleEn: "Volume 5 GK & Science 100 Marks Mega Challenge Mock Test",
    postCategory: "All Gram Panchayat & State Exams",
    totalMarks: 100,
    totalQuestions: 100,
    durationMinutes: 90,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "৫,০০০ জিকে ব্যাংক থেকে ইতিহাস (২০), ভূগোল (২০), সংবিধান ও রাজনীতি (২০), সাধারণ বিজ্ঞান (২০) এবং স্ট্যাটিক জিকে (২০) নিয়ে ১০০ নম্বরের সম্পূর্ণ মেগা পরীক্ষা।",
    sections: [
      { subjectId: "gk", subjectName: "ইতিহাস ও জাতীয় আন্দোলন", questionCount: 20, marksPerQuestion: 1 },
      { subjectId: "gk", subjectName: "ভূগোল ও পশ্চিমবঙ্গ", questionCount: 20, marksPerQuestion: 1 },
      { subjectId: "gk", subjectName: "ভারতীয় সংবিধান ও পঞ্চায়েত আইন", questionCount: 20, marksPerQuestion: 1 },
      { subjectId: "gk", subjectName: "সাধারণ বিজ্ঞান", questionCount: 20, marksPerQuestion: 1 },
      { subjectId: "gk", subjectName: "স্ট্যাটিক জিকে", questionCount: 20, marksPerQuestion: 1 },
    ],
    questions: [
      ...HISTORY_1000_MCQS.slice(0, 20),
      ...GEOGRAPHY_1000_MCQS.slice(0, 20),
      ...POLITY_1000_MCQS.slice(0, 20),
      ...SCIENCE_1000_MCQS.slice(0, 20),
      ...STATIC_1000_MCQS.slice(0, 20),
    ]
  },
  {
    id: "mock_test_gk_history_50",
    titleBn: "ভলিউম ৫ ইতিহাস ও জাতীয় আন্দোলন স্পেশাল মক টেস্ট (৫০ নম্বর)",
    titleEn: "Volume 5 Indian History & Freedom Movement 50 Marks Mock Test",
    postCategory: "Panchayat Secretary / Sahayak / EA / Karmee",
    totalMarks: 50,
    totalQuestions: 50,
    durationMinutes: 40,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "সিন্ধু সভ্যতা থেকে স্বাধীনতা আন্দোলন পর্যন্ত ১,০০০ হিস্ট্রি এমসিকিউ ব্যাঙ্ক থেকে নির্বাচিত ৫০টি প্রশ্নের অধ্যায়ভিত্তিক স্পেশাল টেস্ট।",
    sections: [
      { subjectId: "gk", subjectName: "ইতিহাস ও ভারতের জাতীয় আন্দোলন", questionCount: 50, marksPerQuestion: 1 },
    ],
    questions: [
      ...HISTORY_1000_MCQS.slice(0, 50),
    ]
  },
  {
    id: "mock_test_gk_geography_50",
    titleBn: "ভলিউম ৫ ভূগোল ও পশ্চিমবঙ্গ স্পেশাল মক টেস্ট (৫০ নম্বর)",
    titleEn: "Volume 5 Geography & West Bengal 50 Marks Mock Test",
    postCategory: "Panchayat Secretary / Sahayak / EA / Nirman Sahayak",
    totalMarks: 50,
    totalQuestions: 50,
    durationMinutes: 40,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "ভারতের ভূপ্রকৃতি, নদনদী, জলবায়ু ও পশ্চিমবঙ্গের ২৩টি জেলার খুঁটিনাটি নিয়ে ১,০০০ ভূগোল এমসিকিউ ব্যাঙ্ক থেকে ৫০ নম্বরের স্পেশাল পরীক্ষা।",
    sections: [
      { subjectId: "gk", subjectName: "ভূগোল ও পশ্চিমবঙ্গ সংক্রান্ত জিকে", questionCount: 50, marksPerQuestion: 1 },
    ],
    questions: [
      ...GEOGRAPHY_1000_MCQS.slice(0, 50),
    ]
  },
  {
    id: "mock_test_gk_polity_50",
    titleBn: "ভলিউম ৫ সংবিধান ও পঞ্চায়েত আইন স্পেশাল মক টেস্ট (৫০ নম্বর)",
    titleEn: "Volume 5 Indian Polity & WB Panchayat Act 50 Marks Mock Test",
    postCategory: "Executive Assistant / Secretary / Nirman Sahayak",
    totalMarks: 50,
    totalQuestions: 50,
    durationMinutes: 40,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "মৌলিক অধিকার, রিট, রাষ্ট্রপতি, সংসদ এবং ১৯৭৩ সালের পশ্চিমবঙ্গ পঞ্চায়েত আইন নিয়ে ১,০০০ পলিটি এমসিকিউ ব্যাঙ্ক থেকে ৫০ নম্বরের পরীক্ষা।",
    sections: [
      { subjectId: "gk", subjectName: "সংবিধান, পঞ্চায়েত আইন ও প্রশাসন", questionCount: 50, marksPerQuestion: 1 },
    ],
    questions: [
      ...POLITY_1000_MCQS.slice(0, 50),
    ]
  },
  {
    id: "mock_test_gk_science_50",
    titleBn: "ভলিউম ৫ সাধারণ বিজ্ঞান (পদার্থ, রসায়ন, জীববিজ্ঞান) স্পেশাল মক টেস্ট",
    titleEn: "Volume 5 General Science 50 Marks Mock Test",
    postCategory: "Nirman Sahayak / Sahayak / Karmee",
    totalMarks: 50,
    totalQuestions: 50,
    durationMinutes: 40,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "পরিমাপক একক, আলো, শব্দ, বিদ্যুৎ, পর্যায় সারণি, মানবদেহ ও পুষ্টি নিয়ে ১,০০০ বিজ্ঞান এমসিকিউ ব্যাঙ্ক থেকে ৫০ নম্বরের পরীক্ষা।",
    sections: [
      { subjectId: "gk", subjectName: "পদার্থবিদ্যা, রসায়নবিদ্যা ও জীববিজ্ঞান", questionCount: 50, marksPerQuestion: 1 },
    ],
    questions: [
      ...SCIENCE_1000_MCQS.slice(0, 50),
    ]
  },
  {
    id: "mock_test_gk_static_50",
    titleBn: "ভলিউম ৫ স্ট্যাটিক জিকে ও কারেন্ট স্ট্যাটিক্স স্পেশাল মক টেস্ট",
    titleEn: "Volume 5 Static GK 50 Marks Mock Test",
    postCategory: "All GP Recruitment Posts",
    totalMarks: 50,
    totalQuestions: 50,
    durationMinutes: 40,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "নৃত্য, উৎসব, জাতীয় উদ্যান, আন্তর্জাতিক সদর দপ্তর, পুরস্কার ও বিশ্ব ঐতিহ্যের ওপর ১,০০০ স্ট্যাটিক জিকে এমসিকিউ ব্যাঙ্ক থেকে ৫০ নম্বরের পরীক্ষা।",
    sections: [
      { subjectId: "gk", subjectName: "স্ট্যাটিক জিকে, নৃত্য, উৎসব ও ঐতিহ্য", questionCount: 50, marksPerQuestion: 1 },
    ],
    questions: [
      ...STATIC_1000_MCQS.slice(0, 50),
    ]
  },
  {
    id: "mock_test_gk_booster",
    titleBn: "ভলিউম ৫ সাধারণ জ্ঞান ও স্ট্যাটিক জিকে মাস্টার বুস্টার মক টেস্ট",
    titleEn: "Volume 5 GK & Static GK Master Booster Mock Test",
    postCategory: "All GP Recruitment Posts",
    totalMarks: 35,
    totalQuestions: 35,
    durationMinutes: 30,
    negativeMarkPerWrong: 0.25,
    descriptionBn: "ভলিউম ৫-এর ৫টি প্রধান স্তম্ভ: ইতিহাস, ভূগোল, ভারতীয় সংবিধান ও পঞ্চায়েত ব্যবস্থা, সাধারণ বিজ্ঞান এবং স্ট্যাটিক জিকে নিয়ে ৩৫ নম্বরের স্পেশাল টেস্ট।",
    sections: [
      { subjectId: "gk", subjectName: "ইতিহাস, ভূগোল, সংবিধান, বিজ্ঞান ও স্ট্যাটিক জিকে", questionCount: 35, marksPerQuestion: 1 },
    ],
    questions: [
      ...HISTORY_1000_MCQS.slice(50, 57),
      ...GEOGRAPHY_1000_MCQS.slice(50, 57),
      ...POLITY_1000_MCQS.slice(50, 57),
      ...SCIENCE_1000_MCQS.slice(50, 57),
      ...STATIC_1000_MCQS.slice(50, 57),
    ]
  },
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
  },
  // ==========================================
  // VOLUME 6: PREVIOUS YEAR OFFICIAL PAPERS
  // ==========================================
  ...VOLUME6_PYQ_MOCK_TESTS,

  // ==========================================
  // VOLUME 6: 30 PRACTICE SETS (85 MARKS EACH)
  // ==========================================
  ...VOLUME6_MOCK_TESTS
];

