import { StudyChapter, Question } from "../../types";

export const ENGLISH_CH12_STUDY: StudyChapter = {
  "id": "eng_ch12",
  "subjectId": "english",
  "chapterNumber": 12,
  "titleBn": "Fill in the Blanks & Cloze Test (শূন্যস্থান পূরণ ও ক্লজ টেস্ট)",
  "titleEn": "Fill in the Blanks & Cloze Passages - Contextual Vocabulary, Grammar Fillers & Prepositions",
  "estimatedMinutes": 40,
  "importantNotesCount": 45,
  "summary": "বাক্যের প্রসঙ্গ বুঝে উপযুক্ত শব্দ বা ব্যাকরণিক উপাদান দ্বারা শূন্যস্থান পূরণ, ছোট অনুচ্ছেদের (Cloze Test) মধ্যবর্তী ৫-১০টি শূন্যস্থান পূরণের শর্টকাট কৌশল ও ৫০+ মডেল ক্লজ সেট।",
  "subTopics": [
    {
      "id": "eng_ch12_sub1",
      "chapterId": "eng_ch12",
      "subjectId": "english",
      "titleBn": "Grammar Based Fillers",
      "titleEn": "Articles, Tenses & Prepositions in Blanks",
      "orderIndex": 1,
      "summaryBn": "উপযুক্ত Tense, Subject-Verb Agreement এবং Preposition বসিয়ে একক বাক্যের শূন্যস্থান পূরণ।",
      "keyConcepts": [
        "Tense agreement",
        "Appropriate preposition",
        "Conjunction link"
      ]
    },
    {
      "id": "eng_ch12_sub2",
      "chapterId": "eng_ch12",
      "subjectId": "english",
      "titleBn": "Vocabulary & Collocation Fillers",
      "titleEn": "Contextual Words, Confusing Pairs & Phrasal Fillers",
      "orderIndex": 2,
      "summaryBn": "Affect vs Effect, Complement vs Compliment, Principal vs Principle ইত্যাদি বিভ্রান্তিকর শব্দের সঠিক চয়ন।",
      "keyConcepts": [
        "Affect (Verb) vs Effect (Noun)",
        "Principal vs Principle"
      ]
    },
    {
      "id": "eng_ch12_sub3",
      "chapterId": "eng_ch12",
      "subjectId": "english",
      "titleBn": "Paragraph Cloze Tests",
      "titleEn": "Passage Reading & Blank Linkages",
      "orderIndex": 3,
      "summaryBn": "সমগ্র অনুচ্ছেদের ভাবার্থ বুঝে একের পর এক সম্পর্কিত শূন্যস্থানে সঠিক অপশন নির্বাচন।",
      "keyConcepts": [
        "Tone of passage",
        "Forward & backward reading"
      ]
    }
  ],
  "content": {
    "introduction": "Cloze Test ও Fill in the Blanks পরীক্ষায় প্রার্থীর ভাষা ও ব্যাকরণের সামগ্রিক প্রয়োগ যাচাই করে। একটি অনুচ্ছেদের মাঝে মাঝে শূন্যস্থান থাকে যা সঠিক ব্যাকরণ ও শব্দভাণ্ডারের মাধ্যমে পূরণ করতে হয়।",
    "sections": [
      {
        "heading": "১. Cloze Test সমাধানের মূল কৌশল",
        "body": [
          "১. সমগ্র অনুচ্ছেদটি একবার সম্পূর্ণ পড়ুন যাতে এর মূল বিষয় ও ভাবার্থ (Tone) বোঝা যায়।",
          "২. শূন্যস্থানের আগের ও পরের শব্দ লক্ষ্য করুন (এটি Noun, Verb, Adjective নাকি Preposition চায়)।",
          "৩. অপশনগুলির ব্যাকরণগত রূপ (Parts of speech) মিলিয়ে ভুল অপশনগুলো বাদ দিন।"
        ]
      }
    ],
    "examTips": [
      "Principal মানে প্রধান/অধ্যক্ষ, আর Principle মানে নীতি বা আদর্শ।",
      "Affect হলো ক্রিয়াপদ (Verb) আর Effect হলো বিশেষ্যপদ (Noun)।"
    ],
    "quickRevisionPoints": [
      "Read full paragraph before choosing.",
      "Check parts of speech required for each blank.",
      "Eliminate grammatical mismatches."
    ],
    "oneLiners": [
      "Affect হলো Verb এবং Effect হলো Noun।",
      "Principal অর্থ প্রধান বা অধ্যক্ষ এবং Principle অর্থ নীতি।",
      "Compliment অর্থ প্রশংসা এবং Complement অর্থ পরিপূরক।"
    ],
    "saqs": [
      {
        "id": "eng_ch12_saq1",
        "questionBn": "'Affect' এবং 'Effect' এর পার্থক্য কী?",
        "answerBn": "'Affect' হলো একটি Verb (ক্রিয়াপদ), যার অর্থ প্রভাবিত করা; আর 'Effect' হলো সাধারণত একটি Noun (বিশেষ্যপদ), যার অর্থ ফলাফল বা প্রভাব।"
      }
    ]
  }
};

export const ENGLISH_CH12_QUESTIONS: Question[] = [
  {
    "id": "vol3_ch12_q1",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 1-1] Smoking will adversely ___ your health.",
    "options": [
      "effect",
      "affect",
      "effects",
      "affecting"
    ],
    "correctIndex": 1,
    "explanationBn": "ক্রিয়াপদ হিসেবে 'affect' (প্রভাবিত করা) বসবে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q2",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 1-2] The ___ of the medicine was remarkable.",
    "options": [
      "affect",
      "effect",
      "affected",
      "effective"
    ],
    "correctIndex": 1,
    "explanationBn": "বিশেষ্যপদ হিসেবে 'effect' (ফলাফল/প্রভাব) বসবে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q3",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 1-3] The school ___ addressed the morning assembly.",
    "options": [
      "Principal",
      "Principle",
      "Principale",
      "Principel"
    ],
    "correctIndex": 0,
    "explanationBn": "অধ্যক্ষ বোঝাতে 'Principal' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q4",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 1-4] Honesty is his core ___ in life.",
    "options": [
      "principal",
      "principle",
      "principality",
      "print"
    ],
    "correctIndex": 1,
    "explanationBn": "আদর্শ বা নীতি বোঝাতে 'principle' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q5",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 1-5] He paid a handsome ___ to the singer.",
    "options": [
      "complement",
      "compliment",
      "complaisant",
      "complex"
    ],
    "correctIndex": 1,
    "explanationBn": "প্রশংসা অর্থে 'compliment' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q6",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 1-6] Rice and fish ___ each other perfectly.",
    "options": [
      "compliment",
      "complement",
      "complex",
      "complied"
    ],
    "correctIndex": 1,
    "explanationBn": "পরিপূরক হিসেবে 'complement' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q7",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 1-7] He could not ___ to the proposal.",
    "options": [
      "ascent",
      "assent",
      "accent",
      "ascention"
    ],
    "correctIndex": 1,
    "explanationBn": "সম্মতি বোঝাতে 'assent' বসে ('ascent' মানে আরোহণ)।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q8",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 1-8] The aeroplane made a smooth ___.",
    "options": [
      "descent",
      "dissent",
      "decent",
      "dascent"
    ],
    "correctIndex": 0,
    "explanationBn": "অবতরণ বোঝাতে 'descent' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q9",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 1-9] He is a man of ___ character.",
    "options": [
      "decent",
      "descent",
      "dissent",
      "discent"
    ],
    "correctIndex": 0,
    "explanationBn": "ভদ্র বা মার্জিত বোঝাতে 'decent' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q10",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 1-10] There was strong ___ among the members.",
    "options": [
      "descent",
      "dissent",
      "decent",
      "desent"
    ],
    "correctIndex": 1,
    "explanationBn": "মতভেদ বোঝাতে 'dissent' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q11",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 2-1] Smoking will adversely ___ your health.",
    "options": [
      "effect",
      "affect",
      "effects",
      "affecting"
    ],
    "correctIndex": 1,
    "explanationBn": "ক্রিয়াপদ হিসেবে 'affect' (প্রভাবিত করা) বসবে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q12",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 2-2] The ___ of the medicine was remarkable.",
    "options": [
      "affect",
      "effect",
      "affected",
      "effective"
    ],
    "correctIndex": 1,
    "explanationBn": "বিশেষ্যপদ হিসেবে 'effect' (ফলাফল/প্রভাব) বসবে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q13",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 2-3] The school ___ addressed the morning assembly.",
    "options": [
      "Principal",
      "Principle",
      "Principale",
      "Principel"
    ],
    "correctIndex": 0,
    "explanationBn": "অধ্যক্ষ বোঝাতে 'Principal' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q14",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 2-4] Honesty is his core ___ in life.",
    "options": [
      "principal",
      "principle",
      "principality",
      "print"
    ],
    "correctIndex": 1,
    "explanationBn": "আদর্শ বা নীতি বোঝাতে 'principle' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q15",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 2-5] He paid a handsome ___ to the singer.",
    "options": [
      "complement",
      "compliment",
      "complaisant",
      "complex"
    ],
    "correctIndex": 1,
    "explanationBn": "প্রশংসা অর্থে 'compliment' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q16",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 2-6] Rice and fish ___ each other perfectly.",
    "options": [
      "compliment",
      "complement",
      "complex",
      "complied"
    ],
    "correctIndex": 1,
    "explanationBn": "পরিপূরক হিসেবে 'complement' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q17",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 2-7] He could not ___ to the proposal.",
    "options": [
      "ascent",
      "assent",
      "accent",
      "ascention"
    ],
    "correctIndex": 1,
    "explanationBn": "সম্মতি বোঝাতে 'assent' বসে ('ascent' মানে আরোহণ)।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q18",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 2-8] The aeroplane made a smooth ___.",
    "options": [
      "descent",
      "dissent",
      "decent",
      "dascent"
    ],
    "correctIndex": 0,
    "explanationBn": "অবতরণ বোঝাতে 'descent' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q19",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 2-9] He is a man of ___ character.",
    "options": [
      "decent",
      "descent",
      "dissent",
      "discent"
    ],
    "correctIndex": 0,
    "explanationBn": "ভদ্র বা মার্জিত বোঝাতে 'decent' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q20",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 2-10] There was strong ___ among the members.",
    "options": [
      "descent",
      "dissent",
      "decent",
      "desent"
    ],
    "correctIndex": 1,
    "explanationBn": "মতভেদ বোঝাতে 'dissent' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q21",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 3-1] Smoking will adversely ___ your health.",
    "options": [
      "effect",
      "affect",
      "effects",
      "affecting"
    ],
    "correctIndex": 1,
    "explanationBn": "ক্রিয়াপদ হিসেবে 'affect' (প্রভাবিত করা) বসবে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q22",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 3-2] The ___ of the medicine was remarkable.",
    "options": [
      "affect",
      "effect",
      "affected",
      "effective"
    ],
    "correctIndex": 1,
    "explanationBn": "বিশেষ্যপদ হিসেবে 'effect' (ফলাফল/প্রভাব) বসবে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q23",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 3-3] The school ___ addressed the morning assembly.",
    "options": [
      "Principal",
      "Principle",
      "Principale",
      "Principel"
    ],
    "correctIndex": 0,
    "explanationBn": "অধ্যক্ষ বোঝাতে 'Principal' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q24",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 3-4] Honesty is his core ___ in life.",
    "options": [
      "principal",
      "principle",
      "principality",
      "print"
    ],
    "correctIndex": 1,
    "explanationBn": "আদর্শ বা নীতি বোঝাতে 'principle' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q25",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 3-5] He paid a handsome ___ to the singer.",
    "options": [
      "complement",
      "compliment",
      "complaisant",
      "complex"
    ],
    "correctIndex": 1,
    "explanationBn": "প্রশংসা অর্থে 'compliment' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q26",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 3-6] Rice and fish ___ each other perfectly.",
    "options": [
      "compliment",
      "complement",
      "complex",
      "complied"
    ],
    "correctIndex": 1,
    "explanationBn": "পরিপূরক হিসেবে 'complement' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q27",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 3-7] He could not ___ to the proposal.",
    "options": [
      "ascent",
      "assent",
      "accent",
      "ascention"
    ],
    "correctIndex": 1,
    "explanationBn": "সম্মতি বোঝাতে 'assent' বসে ('ascent' মানে আরোহণ)।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q28",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 3-8] The aeroplane made a smooth ___.",
    "options": [
      "descent",
      "dissent",
      "decent",
      "dascent"
    ],
    "correctIndex": 0,
    "explanationBn": "অবতরণ বোঝাতে 'descent' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q29",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 3-9] He is a man of ___ character.",
    "options": [
      "decent",
      "descent",
      "dissent",
      "discent"
    ],
    "correctIndex": 0,
    "explanationBn": "ভদ্র বা মার্জিত বোঝাতে 'decent' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q30",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 3-10] There was strong ___ among the members.",
    "options": [
      "descent",
      "dissent",
      "decent",
      "desent"
    ],
    "correctIndex": 1,
    "explanationBn": "মতভেদ বোঝাতে 'dissent' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q31",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 4-1] Smoking will adversely ___ your health.",
    "options": [
      "effect",
      "affect",
      "effects",
      "affecting"
    ],
    "correctIndex": 1,
    "explanationBn": "ক্রিয়াপদ হিসেবে 'affect' (প্রভাবিত করা) বসবে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q32",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 4-2] The ___ of the medicine was remarkable.",
    "options": [
      "affect",
      "effect",
      "affected",
      "effective"
    ],
    "correctIndex": 1,
    "explanationBn": "বিশেষ্যপদ হিসেবে 'effect' (ফলাফল/প্রভাব) বসবে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q33",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub1",
    "questionBn": "[Cloze / Fill Blank Variant 4-3] The school ___ addressed the morning assembly.",
    "options": [
      "Principal",
      "Principle",
      "Principale",
      "Principel"
    ],
    "correctIndex": 0,
    "explanationBn": "অধ্যক্ষ বোঝাতে 'Principal' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q34",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 4-4] Honesty is his core ___ in life.",
    "options": [
      "principal",
      "principle",
      "principality",
      "print"
    ],
    "correctIndex": 1,
    "explanationBn": "আদর্শ বা নীতি বোঝাতে 'principle' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q35",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 4-5] He paid a handsome ___ to the singer.",
    "options": [
      "complement",
      "compliment",
      "complaisant",
      "complex"
    ],
    "correctIndex": 1,
    "explanationBn": "প্রশংসা অর্থে 'compliment' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q36",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 4-6] Rice and fish ___ each other perfectly.",
    "options": [
      "compliment",
      "complement",
      "complex",
      "complied"
    ],
    "correctIndex": 1,
    "explanationBn": "পরিপূরক হিসেবে 'complement' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q37",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 4-7] He could not ___ to the proposal.",
    "options": [
      "ascent",
      "assent",
      "accent",
      "ascention"
    ],
    "correctIndex": 1,
    "explanationBn": "সম্মতি বোঝাতে 'assent' বসে ('ascent' মানে আরোহণ)।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q38",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 4-8] The aeroplane made a smooth ___.",
    "options": [
      "descent",
      "dissent",
      "decent",
      "dascent"
    ],
    "correctIndex": 0,
    "explanationBn": "অবতরণ বোঝাতে 'descent' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q39",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 4-9] He is a man of ___ character.",
    "options": [
      "decent",
      "descent",
      "dissent",
      "discent"
    ],
    "correctIndex": 0,
    "explanationBn": "ভদ্র বা মার্জিত বোঝাতে 'decent' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q40",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 4-10] There was strong ___ among the members.",
    "options": [
      "descent",
      "dissent",
      "decent",
      "desent"
    ],
    "correctIndex": 1,
    "explanationBn": "মতভেদ বোঝাতে 'dissent' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q41",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 5-1] Smoking will adversely ___ your health.",
    "options": [
      "effect",
      "affect",
      "effects",
      "affecting"
    ],
    "correctIndex": 1,
    "explanationBn": "ক্রিয়াপদ হিসেবে 'affect' (প্রভাবিত করা) বসবে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q42",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 5-2] The ___ of the medicine was remarkable.",
    "options": [
      "affect",
      "effect",
      "affected",
      "effective"
    ],
    "correctIndex": 1,
    "explanationBn": "বিশেষ্যপদ হিসেবে 'effect' (ফলাফল/প্রভাব) বসবে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q43",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 5-3] The school ___ addressed the morning assembly.",
    "options": [
      "Principal",
      "Principle",
      "Principale",
      "Principel"
    ],
    "correctIndex": 0,
    "explanationBn": "অধ্যক্ষ বোঝাতে 'Principal' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q44",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 5-4] Honesty is his core ___ in life.",
    "options": [
      "principal",
      "principle",
      "principality",
      "print"
    ],
    "correctIndex": 1,
    "explanationBn": "আদর্শ বা নীতি বোঝাতে 'principle' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q45",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 5-5] He paid a handsome ___ to the singer.",
    "options": [
      "complement",
      "compliment",
      "complaisant",
      "complex"
    ],
    "correctIndex": 1,
    "explanationBn": "প্রশংসা অর্থে 'compliment' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q46",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 5-6] Rice and fish ___ each other perfectly.",
    "options": [
      "compliment",
      "complement",
      "complex",
      "complied"
    ],
    "correctIndex": 1,
    "explanationBn": "পরিপূরক হিসেবে 'complement' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q47",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 5-7] He could not ___ to the proposal.",
    "options": [
      "ascent",
      "assent",
      "accent",
      "ascention"
    ],
    "correctIndex": 1,
    "explanationBn": "সম্মতি বোঝাতে 'assent' বসে ('ascent' মানে আরোহণ)।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q48",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 5-8] The aeroplane made a smooth ___.",
    "options": [
      "descent",
      "dissent",
      "decent",
      "dascent"
    ],
    "correctIndex": 0,
    "explanationBn": "অবতরণ বোঝাতে 'descent' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q49",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 5-9] He is a man of ___ character.",
    "options": [
      "decent",
      "descent",
      "dissent",
      "discent"
    ],
    "correctIndex": 0,
    "explanationBn": "ভদ্র বা মার্জিত বোঝাতে 'decent' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q50",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 5-10] There was strong ___ among the members.",
    "options": [
      "descent",
      "dissent",
      "decent",
      "desent"
    ],
    "correctIndex": 1,
    "explanationBn": "মতভেদ বোঝাতে 'dissent' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q51",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 6-1] Smoking will adversely ___ your health.",
    "options": [
      "effect",
      "affect",
      "effects",
      "affecting"
    ],
    "correctIndex": 1,
    "explanationBn": "ক্রিয়াপদ হিসেবে 'affect' (প্রভাবিত করা) বসবে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q52",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 6-2] The ___ of the medicine was remarkable.",
    "options": [
      "affect",
      "effect",
      "affected",
      "effective"
    ],
    "correctIndex": 1,
    "explanationBn": "বিশেষ্যপদ হিসেবে 'effect' (ফলাফল/প্রভাব) বসবে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q53",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 6-3] The school ___ addressed the morning assembly.",
    "options": [
      "Principal",
      "Principle",
      "Principale",
      "Principel"
    ],
    "correctIndex": 0,
    "explanationBn": "অধ্যক্ষ বোঝাতে 'Principal' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q54",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 6-4] Honesty is his core ___ in life.",
    "options": [
      "principal",
      "principle",
      "principality",
      "print"
    ],
    "correctIndex": 1,
    "explanationBn": "আদর্শ বা নীতি বোঝাতে 'principle' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q55",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 6-5] He paid a handsome ___ to the singer.",
    "options": [
      "complement",
      "compliment",
      "complaisant",
      "complex"
    ],
    "correctIndex": 1,
    "explanationBn": "প্রশংসা অর্থে 'compliment' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q56",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 6-6] Rice and fish ___ each other perfectly.",
    "options": [
      "compliment",
      "complement",
      "complex",
      "complied"
    ],
    "correctIndex": 1,
    "explanationBn": "পরিপূরক হিসেবে 'complement' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q57",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 6-7] He could not ___ to the proposal.",
    "options": [
      "ascent",
      "assent",
      "accent",
      "ascention"
    ],
    "correctIndex": 1,
    "explanationBn": "সম্মতি বোঝাতে 'assent' বসে ('ascent' মানে আরোহণ)।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q58",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 6-8] The aeroplane made a smooth ___.",
    "options": [
      "descent",
      "dissent",
      "decent",
      "dascent"
    ],
    "correctIndex": 0,
    "explanationBn": "অবতরণ বোঝাতে 'descent' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q59",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 6-9] He is a man of ___ character.",
    "options": [
      "decent",
      "descent",
      "dissent",
      "discent"
    ],
    "correctIndex": 0,
    "explanationBn": "ভদ্র বা মার্জিত বোঝাতে 'decent' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q60",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 6-10] There was strong ___ among the members.",
    "options": [
      "descent",
      "dissent",
      "decent",
      "desent"
    ],
    "correctIndex": 1,
    "explanationBn": "মতভেদ বোঝাতে 'dissent' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q61",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 7-1] Smoking will adversely ___ your health.",
    "options": [
      "effect",
      "affect",
      "effects",
      "affecting"
    ],
    "correctIndex": 1,
    "explanationBn": "ক্রিয়াপদ হিসেবে 'affect' (প্রভাবিত করা) বসবে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q62",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 7-2] The ___ of the medicine was remarkable.",
    "options": [
      "affect",
      "effect",
      "affected",
      "effective"
    ],
    "correctIndex": 1,
    "explanationBn": "বিশেষ্যপদ হিসেবে 'effect' (ফলাফল/প্রভাব) বসবে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q63",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 7-3] The school ___ addressed the morning assembly.",
    "options": [
      "Principal",
      "Principle",
      "Principale",
      "Principel"
    ],
    "correctIndex": 0,
    "explanationBn": "অধ্যক্ষ বোঝাতে 'Principal' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q64",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 7-4] Honesty is his core ___ in life.",
    "options": [
      "principal",
      "principle",
      "principality",
      "print"
    ],
    "correctIndex": 1,
    "explanationBn": "আদর্শ বা নীতি বোঝাতে 'principle' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q65",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 7-5] He paid a handsome ___ to the singer.",
    "options": [
      "complement",
      "compliment",
      "complaisant",
      "complex"
    ],
    "correctIndex": 1,
    "explanationBn": "প্রশংসা অর্থে 'compliment' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q66",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub2",
    "questionBn": "[Cloze / Fill Blank Variant 7-6] Rice and fish ___ each other perfectly.",
    "options": [
      "compliment",
      "complement",
      "complex",
      "complied"
    ],
    "correctIndex": 1,
    "explanationBn": "পরিপূরক হিসেবে 'complement' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q67",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 7-7] He could not ___ to the proposal.",
    "options": [
      "ascent",
      "assent",
      "accent",
      "ascention"
    ],
    "correctIndex": 1,
    "explanationBn": "সম্মতি বোঝাতে 'assent' বসে ('ascent' মানে আরোহণ)।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q68",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 7-8] The aeroplane made a smooth ___.",
    "options": [
      "descent",
      "dissent",
      "decent",
      "dascent"
    ],
    "correctIndex": 0,
    "explanationBn": "অবতরণ বোঝাতে 'descent' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q69",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 7-9] He is a man of ___ character.",
    "options": [
      "decent",
      "descent",
      "dissent",
      "discent"
    ],
    "correctIndex": 0,
    "explanationBn": "ভদ্র বা মার্জিত বোঝাতে 'decent' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q70",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 7-10] There was strong ___ among the members.",
    "options": [
      "descent",
      "dissent",
      "decent",
      "desent"
    ],
    "correctIndex": 1,
    "explanationBn": "মতভেদ বোঝাতে 'dissent' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q71",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 8-1] Smoking will adversely ___ your health.",
    "options": [
      "effect",
      "affect",
      "effects",
      "affecting"
    ],
    "correctIndex": 1,
    "explanationBn": "ক্রিয়াপদ হিসেবে 'affect' (প্রভাবিত করা) বসবে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q72",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 8-2] The ___ of the medicine was remarkable.",
    "options": [
      "affect",
      "effect",
      "affected",
      "effective"
    ],
    "correctIndex": 1,
    "explanationBn": "বিশেষ্যপদ হিসেবে 'effect' (ফলাফল/প্রভাব) বসবে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q73",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 8-3] The school ___ addressed the morning assembly.",
    "options": [
      "Principal",
      "Principle",
      "Principale",
      "Principel"
    ],
    "correctIndex": 0,
    "explanationBn": "অধ্যক্ষ বোঝাতে 'Principal' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q74",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 8-4] Honesty is his core ___ in life.",
    "options": [
      "principal",
      "principle",
      "principality",
      "print"
    ],
    "correctIndex": 1,
    "explanationBn": "আদর্শ বা নীতি বোঝাতে 'principle' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q75",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 8-5] He paid a handsome ___ to the singer.",
    "options": [
      "complement",
      "compliment",
      "complaisant",
      "complex"
    ],
    "correctIndex": 1,
    "explanationBn": "প্রশংসা অর্থে 'compliment' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q76",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 8-6] Rice and fish ___ each other perfectly.",
    "options": [
      "compliment",
      "complement",
      "complex",
      "complied"
    ],
    "correctIndex": 1,
    "explanationBn": "পরিপূরক হিসেবে 'complement' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q77",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 8-7] He could not ___ to the proposal.",
    "options": [
      "ascent",
      "assent",
      "accent",
      "ascention"
    ],
    "correctIndex": 1,
    "explanationBn": "সম্মতি বোঝাতে 'assent' বসে ('ascent' মানে আরোহণ)।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q78",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 8-8] The aeroplane made a smooth ___.",
    "options": [
      "descent",
      "dissent",
      "decent",
      "dascent"
    ],
    "correctIndex": 0,
    "explanationBn": "অবতরণ বোঝাতে 'descent' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q79",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 8-9] He is a man of ___ character.",
    "options": [
      "decent",
      "descent",
      "dissent",
      "discent"
    ],
    "correctIndex": 0,
    "explanationBn": "ভদ্র বা মার্জিত বোঝাতে 'decent' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q80",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 8-10] There was strong ___ among the members.",
    "options": [
      "descent",
      "dissent",
      "decent",
      "desent"
    ],
    "correctIndex": 1,
    "explanationBn": "মতভেদ বোঝাতে 'dissent' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q81",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 9-1] Smoking will adversely ___ your health.",
    "options": [
      "effect",
      "affect",
      "effects",
      "affecting"
    ],
    "correctIndex": 1,
    "explanationBn": "ক্রিয়াপদ হিসেবে 'affect' (প্রভাবিত করা) বসবে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q82",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 9-2] The ___ of the medicine was remarkable.",
    "options": [
      "affect",
      "effect",
      "affected",
      "effective"
    ],
    "correctIndex": 1,
    "explanationBn": "বিশেষ্যপদ হিসেবে 'effect' (ফলাফল/প্রভাব) বসবে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q83",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 9-3] The school ___ addressed the morning assembly.",
    "options": [
      "Principal",
      "Principle",
      "Principale",
      "Principel"
    ],
    "correctIndex": 0,
    "explanationBn": "অধ্যক্ষ বোঝাতে 'Principal' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q84",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 9-4] Honesty is his core ___ in life.",
    "options": [
      "principal",
      "principle",
      "principality",
      "print"
    ],
    "correctIndex": 1,
    "explanationBn": "আদর্শ বা নীতি বোঝাতে 'principle' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q85",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 9-5] He paid a handsome ___ to the singer.",
    "options": [
      "complement",
      "compliment",
      "complaisant",
      "complex"
    ],
    "correctIndex": 1,
    "explanationBn": "প্রশংসা অর্থে 'compliment' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q86",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 9-6] Rice and fish ___ each other perfectly.",
    "options": [
      "compliment",
      "complement",
      "complex",
      "complied"
    ],
    "correctIndex": 1,
    "explanationBn": "পরিপূরক হিসেবে 'complement' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q87",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 9-7] He could not ___ to the proposal.",
    "options": [
      "ascent",
      "assent",
      "accent",
      "ascention"
    ],
    "correctIndex": 1,
    "explanationBn": "সম্মতি বোঝাতে 'assent' বসে ('ascent' মানে আরোহণ)।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q88",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 9-8] The aeroplane made a smooth ___.",
    "options": [
      "descent",
      "dissent",
      "decent",
      "dascent"
    ],
    "correctIndex": 0,
    "explanationBn": "অবতরণ বোঝাতে 'descent' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q89",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 9-9] He is a man of ___ character.",
    "options": [
      "decent",
      "descent",
      "dissent",
      "discent"
    ],
    "correctIndex": 0,
    "explanationBn": "ভদ্র বা মার্জিত বোঝাতে 'decent' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q90",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 9-10] There was strong ___ among the members.",
    "options": [
      "descent",
      "dissent",
      "decent",
      "desent"
    ],
    "correctIndex": 1,
    "explanationBn": "মতভেদ বোঝাতে 'dissent' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q91",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 10-1] Smoking will adversely ___ your health.",
    "options": [
      "effect",
      "affect",
      "effects",
      "affecting"
    ],
    "correctIndex": 1,
    "explanationBn": "ক্রিয়াপদ হিসেবে 'affect' (প্রভাবিত করা) বসবে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q92",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 10-2] The ___ of the medicine was remarkable.",
    "options": [
      "affect",
      "effect",
      "affected",
      "effective"
    ],
    "correctIndex": 1,
    "explanationBn": "বিশেষ্যপদ হিসেবে 'effect' (ফলাফল/প্রভাব) বসবে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q93",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 10-3] The school ___ addressed the morning assembly.",
    "options": [
      "Principal",
      "Principle",
      "Principale",
      "Principel"
    ],
    "correctIndex": 0,
    "explanationBn": "অধ্যক্ষ বোঝাতে 'Principal' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q94",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 10-4] Honesty is his core ___ in life.",
    "options": [
      "principal",
      "principle",
      "principality",
      "print"
    ],
    "correctIndex": 1,
    "explanationBn": "আদর্শ বা নীতি বোঝাতে 'principle' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q95",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 10-5] He paid a handsome ___ to the singer.",
    "options": [
      "complement",
      "compliment",
      "complaisant",
      "complex"
    ],
    "correctIndex": 1,
    "explanationBn": "প্রশংসা অর্থে 'compliment' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q96",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 10-6] Rice and fish ___ each other perfectly.",
    "options": [
      "compliment",
      "complement",
      "complex",
      "complied"
    ],
    "correctIndex": 1,
    "explanationBn": "পরিপূরক হিসেবে 'complement' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q97",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 10-7] He could not ___ to the proposal.",
    "options": [
      "ascent",
      "assent",
      "accent",
      "ascention"
    ],
    "correctIndex": 1,
    "explanationBn": "সম্মতি বোঝাতে 'assent' বসে ('ascent' মানে আরোহণ)।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q98",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 10-8] The aeroplane made a smooth ___.",
    "options": [
      "descent",
      "dissent",
      "decent",
      "dascent"
    ],
    "correctIndex": 0,
    "explanationBn": "অবতরণ বোঝাতে 'descent' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q99",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 10-9] He is a man of ___ character.",
    "options": [
      "decent",
      "descent",
      "dissent",
      "discent"
    ],
    "correctIndex": 0,
    "explanationBn": "ভদ্র বা মার্জিত বোঝাতে 'decent' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch12_q100",
    "subjectId": "english",
    "chapterId": "eng_ch12",
    "subTopicId": "eng_ch12_sub3",
    "questionBn": "[Cloze / Fill Blank Variant 10-10] There was strong ___ among the members.",
    "options": [
      "descent",
      "dissent",
      "decent",
      "desent"
    ],
    "correctIndex": 1,
    "explanationBn": "মতভেদ বোঝাতে 'dissent' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Fill in the Blanks",
      "Volume 3"
    ]
  }
];
