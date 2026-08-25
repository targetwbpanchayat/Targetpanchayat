import { StudyChapter, Question } from "../../types";

export const CHAPTER_3_STUDY: StudyChapter = {
  id: "panchayat_ch3",
  subjectId: "panchayat",
  chapterNumber: 3,
  titleBn: "পশ্চিমবঙ্গের ত্রিস্তরীয় পঞ্চায়েত কাঠামোর রূপরেখা",
  titleEn: "Three-Tier Panchayat Framework in West Bengal",
  estimatedMinutes: 30,
  importantNotesCount: 20,
  summary: "গ্রাম পঞ্চায়েত (তৃণমূল ভিত্তি), পঞ্চায়েত সমিতি (মধ্যবর্তী স্তর) ও জেলা পরিষদ (শীর্ষ স্তর); জৈব সংযোগ, ভোটাধিকার, প্রশাসনিক সমন্বয়, দার্জিলিং ব্যতিক্রম এবং বিকেন্দ্রীকৃত পরিকল্পনা।",
  subTopics: [
    {
      id: "panchayat_ch3_sub1",
      chapterId: "panchayat_ch3",
      subjectId: "panchayat",
      titleBn: "ত্রিস্তরীয় কাঠামোর স্তরবিন্যাস ও ভূমিকা",
      titleEn: "Hierarchy & Roles of Three-Tier System",
      orderIndex: 1,
      summaryBn: "তৃণমূল স্তরে গ্রাম পঞ্চায়েত, ব্লক স্তরে পঞ্চায়েত সমিতি এবং জেলা স্তরে জেলা পরিষদের অবস্থান ও কার্যাবলী।",
      keyConcepts: ["গ্রাম পঞ্চায়েত - তৃণমূল ভিত্তি (Base Level)", "পঞ্চায়েত সমিতি - মধ্যবর্তী সেতুবন্ধন (Intermediate Level)", "জেলা পরিষদ - শীর্ষ নিয়ন্ত্রক সংস্থা (Apex Level)"]
    },
    {
      id: "panchayat_ch3_sub2",
      chapterId: "panchayat_ch3",
      subjectId: "panchayat",
      titleBn: "জৈব সংযোগ ও পদাধিকারবলে সদস্যপদ",
      titleEn: "Organic Linkage & Ex-officio Memberships",
      orderIndex: 2,
      summaryBn: "প্রধানরা পঞ্চায়েত সমিতির সদস্য, সভাপতিরা জেলা পরিষদের সদস্য এবং বিধায়ক/সাংসদদের পদাধিকারবলে সদস্যপদ।",
      keyConcepts: ["জৈব সংযোগ (Organic Link)", "প্রধান -> পঞ্চায়েত সমিতি সদস্য", "সভাপতি -> জেলা পরিষদ সদস্য", "MLA/MP পদাধিকারবলে সদস্যপদ"]
    },
    {
      id: "panchayat_ch3_sub3",
      chapterId: "panchayat_ch3",
      subjectId: "panchayat",
      titleBn: "স্থায়ী সমিতি ও উপ-সমিতি কাঠামো",
      titleEn: "Sthayee Samiti & Upa-Samiti Structure",
      orderIndex: 3,
      summaryBn: "গ্রাম পঞ্চায়েতে ৫টি বিষয়ভিত্তিক উপ-সমিতি এবং পঞ্চায়েত সমিতি ও জেলা পরিষদে ১০টি করে স্থায়ী সমিতি।",
      keyConcepts: ["গ্রাম পঞ্চায়েতে ৫টি উপ-সমিতি", "পঞ্চায়েত সমিতিতে ১০টি স্থায়ী সমিতি", "জেলা পরিষদে ১০টি স্থায়ী সমিতি", "অর্থ ও সংস্থা স্থায়ী সমিতির প্রধান সভাধিপতি / সভাপতি", "কর্মধ্যক্ষ নির্বাচন"]
    },
    {
      id: "panchayat_ch3_sub4",
      chapterId: "panchayat_ch3",
      subjectId: "panchayat",
      titleBn: "দার্জিলিং ব্যতিক্রম ও শিলিগুড়ি মহকুমা পরিষদ",
      titleEn: "Darjeeling Exception & Siliguri Mahakuma Parishad",
      orderIndex: 4,
      summaryBn: "দার্জিলিংয়ে GTA ও গ্রাম পঞ্চায়েতের দ্বি-স্তরীয় ব্যবস্থা এবং শিলিগুড়ি মহকুমার জন্য মহকুমা পরিষদ।",
      keyConcepts: ["GTA (Gorkhaland Territorial Administration)", "দার্জিলিং দ্বি-স্তর পঞ্চায়েত ব্যবস্থা", "শিলিগুড়ি মহকুমা পরিষদ (জেলা পরিষদের ভূমিকা)"]
    },
    {
      id: "panchayat_ch3_sub5",
      chapterId: "panchayat_ch3",
      subjectId: "panchayat",
      titleBn: "বিকেন্দ্রীকৃত পরিকল্পনা ও প্রশাসনিক সমন্বয়",
      titleEn: "Bottom-Up Planning & Administrative Coordination",
      orderIndex: 5,
      summaryBn: "গ্রাম সংসদ থেকে DPC পর্যন্ত নিচ থেকে ওপরে (Bottom-up) পরিকল্পনা প্রণয়ন, SIPRD প্রশিক্ষণ এবং রাজ্য সরকারের ক্ষমতা।",
      keyConcepts: ["Bottom-up planning approach", "ডিস্ট্রিক্ট প্ল্যানিং কমিটি (DPC)", "SIPRD (কল্যাণী) প্রশিক্ষণ", "যৌথ প্রকল্প (Joint Projects)", "বিবাদ মীমাংসা ও রাজ্য সরকারের হস্তক্ষেপ"]
    }
  ],
  content: {
    introduction: "পশ্চিমবঙ্গের পঞ্চায়েতি রাজ ব্যবস্থার কাঠামো সুনির্দিষ্ট ত্রিস্তরীয় নীতিতে বিন্যস্ত। এটি তৃণমূল স্তরের অভাব-অভিযোগকে সরাসরি জেলা ও রাজ্য প্রশাসন পর্যন্ত পৌঁছে দেওয়ার একটি শক্তিশালী গণতান্ত্রিক সেতু হিসেবে কাজ করে।",
    sections: [
      {
        heading: "১. ত্রিস্তর কাঠামোর রূপরেখা (Three-tier Structure)",
        body: [
          "১. গ্রাম পঞ্চায়েত (Base Level): কাঠামোর সর্বনিম্ন স্তর, সরাসরি গ্রামীণ মানুষের সঙ্গে যুক্ত। পানীয় জল, নিকাশি ও গ্রামীণ পরিকাঠামো উন্নয়নের প্রাথমিক কেন্দ্র।",
          "২. পঞ্চায়েত সমিতি (Intermediate Level): ব্লক স্তরের প্রশাসনিক সংস্থা, যা গ্রাম পঞ্চায়েত ও জেলা পরিষদের মধ্যে যোগসূত্র। এর ভৌগোলিক এলাকা ১টি ব্লকের সমান।",
          "৩. জেলা পরিষদ (Apex Level): ত্রিস্তরীয় কাঠামোর শীর্ষ সংস্থা, সমগ্র জেলার সার্বিক উন্নয়নের মাস্টার প্ল্যান প্রণয়ন ও বড় প্রকল্প অনুমোদন করে।"
        ],
        tables: {
          headers: ["স্তর", "ভৌগোলিক এলাকা", "নির্বাচিত প্রধান", "পদমর্যাদা / ভূমিকা"],
          rows: [
            ["গ্রাম পঞ্চায়েত", "কয়েকটি মৌজা / গ্রাম", "প্রধান", "তৃণমূল কার্যনির্বাহী"],
            ["পঞ্চায়েত সমিতি", "১টি সিডি ব্লক", "সভাপতি", "ব্লক সমন্বয়কারী"],
            ["জেলা পরিষদ", "সমগ্র জেলা", "সভাধিপতি", "রাষ্ট্রমন্ত্রীর সমতুল্য মর্যাদা"]
          ]
        }
      },
      {
        heading: "২. প্রাতিষ্ঠানিক ও জৈব সংযোগ (Organic Link)",
        body: [
          "গ্রাম পঞ্চায়েতের প্রধানরা পদাধিকারবলে পঞ্চায়েত সমিতির সদস্য হন।",
          "পঞ্চায়েত সমিতির সভাপতিরা পদাধিকারবলে জেলা পরিষদের সদস্য হন।",
          "এলাকার বিধায়ক (MLA) এবং লোকসভার সাংসদরা (MP) পঞ্চায়েত সমিতি ও জেলা পরিষদের পদাধিকারবলে সদস্য হন।",
          "একজন ভোটার একই দিনে ৩টি আলাদা ব্যালটে ৩টি স্তরের সদস্য নির্বাচনের জন্য ভোট দেন।"
        ]
      },
      {
        heading: "৩. স্থায়ী সমিতি ও উপ-সমিতি ব্যবস্থা",
        body: [
          "পঞ্চায়েত সমিতি এবং জেলা পরিষদে বিভিন্ন বিভাগীয় কাজের সুবিধার জন্য ১০টি করে 'স্থায়ী সমিতি' থাকে।",
          "গ্রাম পঞ্চায়েত স্তরে এই কাজগুলি পরিচালনা করতে ৫টি 'উপ-সমিতি' গঠন করা হয়।",
          "জেলা পরিষদের 'অর্থ ও সংস্থা' স্থায়ী সমিতির সভাপতি পদাধিকারবলে স্বয়ং সভাধিপতি এবং পঞ্চায়েত সমিতিতে সভাপতি নিজে।",
          "স্থায়ী সমিতিগুলির অন্যান্য সদস্যের মধ্য থেকে 'কর্মাধ্যক্ষ' নির্বাচিত হন।"
        ]
      },
      {
        heading: "৪. বিশেষ প্রশাসনিক দিক ও দার্জিলিং ব্যতিক্রম",
        body: [
          "দার্জিলিং জেলায় গোর্খাল্যান্ড টেরিটোরিয়াল অ্যাডমিনিস্ট্রেশন (GTA) থাকার কারণে সেখানে জেলা পরিষদের বদলে দ্বিস্তরীয় ব্যবস্থা (মহকুমা পরিষদ ও গ্রাম পঞ্চায়েত) রয়েছে।",
          "শিলিগুড়ি মহকুমা এলাকায় জেলা পরিষদের পরিবর্তে 'শিলিগুড়ি মহকুমা পরিষদ' কাজ করে।",
          "পরিকল্পনা সবসময় নিচ থেকে ওপরে (Bottom-up Approach) যায়: গ্রাম সংসদ -> গ্রাম পঞ্চায়েত -> পঞ্চায়েত সমিতি -> জেলা পরিকল্পনা কমিটি (DPC)।",
          "নির্বাচিত প্রতিনিধি ও কর্মীদের দক্ষতা বৃদ্ধির জন্য রাজ্য সরকারের 'স্টেট ইনস্টিটিউট অফ পঞ্চায়েত অ্যান্ড রুরাল ডেভেলপমেন্ট' (SIPRD, কল্যাণী) নিয়মিত প্রশিক্ষণ দেয়।"
        ]
      }
    ],
    examTips: [
      "জেলা পরিষদের নির্বাচিত প্রধানকে 'সভাধিপতি' বলা হয় এবং তাঁর পদমর্যাদা রাষ্ট্রমন্ত্রীর (Minister of State) সমতুল্য।",
      "পঞ্চায়েতের প্রতিটি স্তরে প্রতি মাসে অন্তত ১টি সভা আয়োজন করা বাধ্যতামূলক।",
      "পঞ্চায়েত ভেঙে দেওয়া হলে পরবর্তী ৬ মাসের মধ্যে নতুন নির্বাচন করতে হয়।"
    ],
    quickRevisionPoints: [
      "সর্বনিম্ন স্তর: গ্রাম পঞ্চায়েত | মধ্যবর্তী স্তর: পঞ্চায়েত সমিতি | শীর্ষ স্তর: জেলা পরিষদ।",
      "স্থায়ী সমিতি সংখ্যা: পঞ্চায়েত সমিতিতে ১০টি, জেলা পরিষদে ১০টি।",
      "উপ-সমিতি সংখ্যা: গ্রাম পঞ্চায়েতে ৫টি।",
      "SIPRD: রাজ্য পঞ্চায়েত প্রশিক্ষণ কেন্দ্র (কল্যাণী, নদীয়া)।"
    ]
  }
};

export const CHAPTER_3_QUESTIONS: Question[] = [
  // --- PDF MCQs (1 to 50) ---
  {
    id: "vol1_ch3_q1",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub1",
    questionBn: "পশ্চিমবঙ্গের পঞ্চায়েত ব্যবস্থার সর্বনিম্ন স্তর কোনটি?",
    options: ["গ্রাম সভা", "গ্রাম সংসদ", "গ্রাম পঞ্চায়েত", "পঞ্চায়েত সমিতি"],
    correctIndex: 2,
    explanationBn: "প্রশাসনিক কাঠামো অনুযায়ী গ্রাম পঞ্চায়েতই হলো পঞ্চায়েত ব্যবস্থার তৃণমূল বা সর্বনিম্ন স্তর।",
    difficulty: "easy",
    tags: ["সর্বনিম্ন স্তর", "গ্রাম পঞ্চায়েত"]
  },
  {
    id: "vol1_ch3_q2",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub1",
    questionBn: "গ্রাম পঞ্চায়েত ও জেলা পরিষদের মধ্যে সংযোগকারী স্তর কোনটি?",
    options: ["মহকুমা পরিষদ", "পঞ্চায়েত সমিতি", "আঞ্চলিক পরিষদ", "গ্রাম সংসদ"],
    correctIndex: 1,
    explanationBn: "ব্লক স্তরের পঞ্চায়েত সমিতি গ্রাম পঞ্চায়েত ও জেলা পরিষদের মধ্যে সেতুবন্ধন হিসেবে কাজ করে।",
    difficulty: "easy",
    tags: ["পঞ্চায়েত সমিতি", "সংযোগকারী"]
  },
  {
    id: "vol1_ch3_q3",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub1",
    questionBn: "পঞ্চায়েত কাঠামোর সর্বোচ্চ স্তর কোনটি?",
    options: ["পঞ্চায়েত সমিতি", "বিধানসভা", "রাজ্য সরকার", "জেলা পরিষদ"],
    correctIndex: 3,
    explanationBn: "জেলার গ্রামীণ উন্নয়নের সর্বোচ্চ নিয়ন্ত্রক সংস্থা হলো জেলা পরিষদ।",
    difficulty: "easy",
    tags: ["জেলা পরিষদ", "সর্বোচ্চ স্তর"]
  },
  {
    id: "vol1_ch3_q4",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub1",
    questionBn: "পঞ্চায়েত সমিতির ভৌগোলিক এলাকা কোনটি?",
    options: ["১টি গ্রাম", "১টি ব্লক", "১টি মহকুমা", "১টি জেলা"],
    correctIndex: 1,
    explanationBn: "পঞ্চায়েত সমিতির সীমানা একটি নির্দিষ্ট কমিউনিটি ডেভেলপমেন্ট ব্লককে নিয়ে গঠিত হয়।",
    difficulty: "easy",
    tags: ["ব্লক", "পঞ্চায়েত সমিতি"]
  },
  {
    id: "vol1_ch3_q5",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub2",
    questionBn: "গ্রাম পঞ্চায়েতের প্রধান পদাধিকারবলে কোন সংস্থার সদস্য হন?",
    options: ["জেলা পরিষদ", "পঞ্চায়েত সমিতি", "বিধানসভা", "কোনোটিই নয়"],
    correctIndex: 1,
    explanationBn: "আইন অনুযায়ী গ্রাম পঞ্চায়েতের প্রধান সরাসরি পদাধিকারবলে পঞ্চায়েত সমিতির সদস্য হন।",
    difficulty: "easy",
    tags: ["প্রধান", "সদস্যপদ"]
  },
  {
    id: "vol1_ch3_q6",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub2",
    questionBn: "পঞ্চায়েত সমিতির সভাপতি পদাধিকারবলে কোন সংস্থার সদস্য হন?",
    options: ["লোকসভা", "বিধানসভা", "জেলা পরিষদ", "গ্রাম পঞ্চায়েত"],
    correctIndex: 2,
    explanationBn: "কাঠামোগত সংযোগ রক্ষার জন্য পঞ্চায়েত সমিতির সভাপতি জেলা পরিষদের সদস্য হন।",
    difficulty: "easy",
    tags: ["সভাপতি", "জেলা পরিষদ"]
  },
  {
    id: "vol1_ch3_q7",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub1",
    questionBn: "জেলা পরিষদের প্রশাসনিক প্রধান (Executive Officer) কে?",
    options: ["সভাধিপতি", "জেলাশাসক (DM)", "BDO", "SDO"],
    correctIndex: 1,
    explanationBn: "জেলাশাসক (DM) সরকারি আমলা হিসেবে পদাধিকারবলে জেলা পরিষদের প্রশাসনিক নির্বাহী আধিকারিক।",
    difficulty: "easy",
    tags: ["DM", "EO"]
  },
  {
    id: "vol1_ch3_q8",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub1",
    questionBn: "পঞ্চায়েত সমিতির প্রশাসনিক প্রধান (Executive Officer) কে?",
    options: ["সভাপতি", "প্রধান", "SDO", "BDO"],
    correctIndex: 3,
    explanationBn: "ব্লক ডেভেলপমেন্ট অফিসার (BDO) হলেন পঞ্চায়েত সমিতির নির্বাহী আধিকারিক।",
    difficulty: "easy",
    tags: ["BDO", "EO"]
  },
  {
    id: "vol1_ch3_q9",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub4",
    questionBn: "দার্জিলিং জেলায় কটি স্তরের পঞ্চায়েত ব্যবস্থা রয়েছে?",
    options: ["১টি", "২টি", "৩টি", "৪টি"],
    correctIndex: 1,
    explanationBn: "গোর্খাল্যান্ড টেরিটোরিয়াল অ্যাডমিনিস্ট্রেশন (GTA) থাকায় সেখানে গ্রাম পঞ্চায়েত ও মহকুমা পরিষদ নিয়ে দ্বিস্তর ব্যবস্থা রয়েছে।",
    difficulty: "easy",
    tags: ["দার্জিলিং", "দ্বিস্তর"]
  },
  {
    id: "vol1_ch3_q10",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub5",
    questionBn: "গ্রাম পঞ্চায়েতের বাজেট কে অনুমোদন করে?",
    options: ["BDO", "পঞ্চায়েত সমিতি", "জেলা পরিষদ", "জেলাশাসক"],
    correctIndex: 1,
    explanationBn: "আর্থিক নিয়ন্ত্রণের অঙ্গ হিসেবে গ্রাম পঞ্চায়েতের বাজেট পঞ্চায়েত সমিতি অনুমোদন করে।",
    difficulty: "easy",
    tags: ["বাজেট", "অনুমোদন"]
  },
  {
    id: "vol1_ch3_q11",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub5",
    questionBn: "পঞ্চায়েত সমিতির বাজেট কে অনুমোদন করে?",
    options: ["রাজ্য সরকার", "জেলাশাসক", "জেলা পরিষদ", "অর্থ কমিশন"],
    correctIndex: 2,
    explanationBn: "কাঠামোগত নিয়মানুযায়ী ওপরের স্তর অর্থাৎ জেলা পরিষদ পঞ্চায়েত সমিতির বাজেট খতিয়ে দেখে অনুমোদন করে।",
    difficulty: "easy",
    tags: ["পঞ্চায়েত সমিতি বাজেট"]
  },
  {
    id: "vol1_ch3_q12",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub5",
    questionBn: "জেলা পরিষদের বাজেট কে অনুমোদন করে?",
    options: ["কেন্দ্র সরকার", "রাজ্য সরকার", "অর্থ কমিশন", "বিধানসভা"],
    correctIndex: 1,
    explanationBn: "জেলা পরিষদের ওপরে কোনো পঞ্চায়েত স্তর না থাকায় সরাসরি রাজ্য সরকার এটি অনুমোদন করে।",
    difficulty: "easy",
    tags: ["জেলা পরিষদ বাজেট"]
  },
  {
    id: "vol1_ch3_q13",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub2",
    questionBn: "এলাকার বিধায়ক (MLA) পদাধিকারবলে কোন স্তরের সদস্য হন?",
    options: ["কেবল গ্রাম পঞ্চায়েত", "কেবল পঞ্চায়েত সমিতি", "পঞ্চায়েত সমিতি ও জেলা পরিষদ", "সবকটি স্তরের"],
    correctIndex: 2,
    explanationBn: "বিধায়করা তাঁদের এলাকার ব্লক (পঞ্চায়েত সমিতি) এবং জেলা স্তরের (জেলা পরিষদ) পঞ্চায়েত সংস্থায় সদস্য থাকেন।",
    difficulty: "easy",
    tags: ["বিধায়ক", "সদস্যপদ"]
  },
  {
    id: "vol1_ch3_q14",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub3",
    questionBn: "পঞ্চায়েতের কোন স্তরে 'স্থায়ী সমিতি' থাকে না?",
    options: ["গ্রাম পঞ্চায়েত", "পঞ্চায়েত সমিতি", "জেলা পরিষদ", "মহকুমা পরিষদ"],
    correctIndex: 0,
    explanationBn: "গ্রাম পঞ্চায়েতে স্থায়ী সমিতির বদলে উপ-সমিতি (Upa-Samiti) গঠন করা হয়।",
    difficulty: "easy",
    tags: ["স্থায়ী সমিতি", "ব্যতিক্রম"]
  },
  {
    id: "vol1_ch3_q15",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub3",
    questionBn: "জেলা পরিষদে কয়টি স্থায়ী সমিতি থাকে?",
    options: ["৫টি", "৭টি", "১০টি", "১২টি"],
    correctIndex: 2,
    explanationBn: "কাজের সুবিধার জন্য জেলা পরিষদে মোট ১০টি স্থায়ী সমিতি গঠন করা হয়।",
    difficulty: "easy",
    tags: ["১০টি স্থায়ী সমিতি", "জেলা পরিষদ"]
  },
  {
    id: "vol1_ch3_q16",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub3",
    questionBn: "পঞ্চায়েত সমিতিতে কয়টি স্থায়ী সমিতি থাকে?",
    options: ["৫টি", "৮টি", "১০টি", "১৫টি"],
    correctIndex: 2,
    explanationBn: "জেলা পরিষদের মতোই পঞ্চায়েত সমিতিতেও মোট ১০টি স্থায়ী সমিতি থাকে।",
    difficulty: "easy",
    tags: ["১০টি স্থায়ী সমিতি", "পঞ্চায়েত সমিতি"]
  },
  {
    id: "vol1_ch3_q17",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub3",
    questionBn: "গ্রাম পঞ্চায়েতে কয়টি উপ-সমিতি থাকে?",
    options: ["৩টি", "৪টি", "৫টি", "৭টি"],
    correctIndex: 2,
    explanationBn: "গ্রাম পঞ্চায়েতের কাজের পরিধি অনুযায়ী মোট ৫টি উপ-সমিতি তৈরি করা হয়।",
    difficulty: "easy",
    tags: ["৫টি উপ-সমিতি"]
  },
  {
    id: "vol1_ch3_q18",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub3",
    questionBn: "জেলা পরিষদে অর্থ ও সংস্থা স্থায়ী সমিতির সভাপতি কে হন?",
    options: ["জেলাশাসক", "সহকারী সভাধিপতি", "সভাধিপতি", "কর্মাধ্যক্ষ"],
    correctIndex: 2,
    explanationBn: "পদাধিকারবলে জেলা পরিষদের নির্বাচিত সভাধিপতি নিজেই অর্থ ও সংস্থা স্থায়ী সমিতির প্রধান হন।",
    difficulty: "easy",
    tags: ["অর্থ ও সংস্থা", "সভাধিপতি"]
  },
  {
    id: "vol1_ch3_q19",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub3",
    questionBn: "পঞ্চায়েত সমিতির অর্থ ও সংস্থা স্থায়ী সমিতির সভাপতি কে হন?",
    options: ["BDO", "সভাপতি", "সহ-সভাপতি", "প্রধান"],
    correctIndex: 1,
    explanationBn: "ব্লক স্তরে নির্বাচিত সভাপতি পদাধিকারবলে এই কমিটির সভাপতিত্ব করেন।",
    difficulty: "easy",
    tags: ["অর্থ ও সংস্থা", "সভাপতি"]
  },
  {
    id: "vol1_ch3_q20",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub1",
    questionBn: "জেলা পরিষদের নির্বাচিত প্রধানকে কী বলা হয়?",
    options: ["চেয়ারম্যান", "মেয়র", "সভাধিপতি", "সভাপতি"],
    correctIndex: 2,
    explanationBn: "জেলা স্তরের সর্বোচ্চ নির্বাচিত জনপ্রতিনিধিকে 'সভাধিপতি' (Sabhadhipati) বলা হয়।",
    difficulty: "easy",
    tags: ["সভাধিপতি", "উপাধি"]
  },
  {
    id: "vol1_ch3_q21",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub1",
    questionBn: "পঞ্চায়েত সমিতির নির্বাচিত প্রধানকে কী বলা হয়?",
    options: ["সভাধিপতি", "প্রধান", "সভাপতি", "দলপতি"],
    correctIndex: 2,
    explanationBn: "ব্লকের নির্বাচিত জনপ্রতিনিধিদের প্রধানকে 'সভাপতি' (Sabhapati) উপাধি দেওয়া হয়।",
    difficulty: "easy",
    tags: ["সভাপতি", "উপাধি"]
  },
  {
    id: "vol1_ch3_q22",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub1",
    questionBn: "জেলা পরিষদের সভাধিপতির পদমর্যাদা কার সমান?",
    options: ["ক্যাবিনেট মন্ত্রী", "রাষ্ট্রমন্ত্রীর (Minister of State)", "সাংসদ", "মুখ্যসচিব"],
    correctIndex: 1,
    explanationBn: "প্রশাসনিক প্রোটোকল অনুযায়ী জেলা পরিষদের সভাধিপতি একজন রাষ্ট্রমন্ত্রীর সমতুল্য মর্যাদা পান।",
    difficulty: "easy",
    tags: ["পদমর্যাদা", "প্রতিমন্ত্রী"]
  },
  {
    id: "vol1_ch3_q23",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub5",
    questionBn: "২টি গ্রাম পঞ্চায়েতের মধ্যে সীমানা বিরোধ দেখা দিলে কে মীমাংসা করে?",
    options: ["জেলাশাসক", "পঞ্চায়েত সমিতি", "জেলা পরিষদ", "BDO"],
    correctIndex: 1,
    explanationBn: "ঠিক ওপরের স্তর হিসেবে পঞ্চায়েত সমিতি এই বিরোধের মধ্যস্থতা করে মীমাংসা করে।",
    difficulty: "easy",
    tags: ["বিরোধ মীমাংসা", "পঞ্চায়েত সমিতি"]
  },
  {
    id: "vol1_ch3_q24",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub5",
    questionBn: "২টি পঞ্চায়েত সমিতির মধ্যে বিরোধ দেখা দিলে কে মীমাংসা করে?",
    options: ["জেলা পরিষদ", "রাজ্য সরকার", "হাইকোর্ট", "জেলাশাসক"],
    correctIndex: 0,
    explanationBn: "একাধিক ব্লকের সমস্যা হলে তা ওপরের স্তর জেলা পরিষদ খতিয়ে দেখে সমাধান করে।",
    difficulty: "easy",
    tags: ["জেলা পরিষদ", "বিরোধ"]
  },
  {
    id: "vol1_ch3_q25",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub1",
    questionBn: "পঞ্চায়েত স্তরের কোনো নির্বাচনে ভোটদানের ন্যূনতম বয়স কত?",
    options: ["১৮ বছর", "২১ বছর", "২৫ বছর", "৩০ বছর"],
    correctIndex: 0,
    explanationBn: "সার্বজনীন প্রাপ্তবয়স্ক ভোটাধিকারের নিয়ম অনুযায়ী ১৮ বছর পূর্ণ হলেই ভোট দেওয়া যায়।",
    difficulty: "easy",
    tags: ["১৮ বছর", "ভোটদান বয়স"]
  },
  {
    id: "vol1_ch3_q26",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub1",
    questionBn: "পঞ্চায়েত স্তরের পদাধিকারীদের কার্যকাল কত বছর?",
    options: ["৩ বছর", "৪ বছর", "৫ বছর", "৬ বছর"],
    correctIndex: 2,
    explanationBn: "প্রথম সভার দিন থেকে পঞ্চায়েতের মেয়াদ ৫ বছর পর্যন্ত নির্ধারিত।",
    difficulty: "easy",
    tags: ["৫ বছর মেয়াদ"]
  },
  {
    id: "vol1_ch3_q27",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub1",
    questionBn: "ত্রিস্তরীয় পঞ্চায়েতের সদস্যরা কীভাবে নির্বাচিত হন?",
    options: ["পরোক্ষভাবে", "সরাসরি জনগণের ভোটে", "রাজ্য সরকার দ্বারা মনোনীত", "BDO দ্বারা নির্বাচিত"],
    correctIndex: 1,
    explanationBn: "পঞ্চায়েতের প্রতিটি স্তরেই মানুষ সরাসরি গোপন ব্যালটের মাধ্যমে ভোট দেন।",
    difficulty: "easy",
    tags: ["প্রত্যক্ষ নির্বাচন"]
  },
  {
    id: "vol1_ch3_q28",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub2",
    questionBn: "প্রধান, সভাপতি ও সভাধিপতি কীভাবে নির্বাচিত হন?",
    options: ["সরাসরি জনগণের ভোটে", "পরোক্ষভাবে নির্বাচিত সদস্যদের দ্বারা", "রাজ্যপালের দ্বারা", "জেলাশাসকের দ্বারা"],
    correctIndex: 1,
    explanationBn: "নির্বাচিত সদস্যরা নিজেদের মধ্য থেকে ভোটাভুটির মাধ্যমে শীর্ষ পদাধিকারীদের বেছে নেন।",
    difficulty: "easy",
    tags: ["পরোক্ষ নির্বাচন"]
  },
  {
    id: "vol1_ch3_q29",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub5",
    questionBn: "রাজ্য সরকার চাইলে কোন পরিস্থিতিতে পঞ্চায়েত ভেঙে দিতে পারে?",
    options: ["মুখ্যমন্ত্রী চাইলে", "তহবিলের অভাব হলে", "আইনভঙ্গ বা চরম দুর্নীতি প্রমাণ হলে", "নির্বাচন কমিশন বললে"],
    correctIndex: 2,
    explanationBn: "পঞ্চায়েত আইন অমান্য করলে বা ক্ষমতার চরম অপব্যবহার প্রমাণিত হলে রাজ্য সরকার তদন্ত সাপেক্ষে পঞ্চায়েত ভেঙে দিতে পারে।",
    difficulty: "easy",
    tags: ["পঞ্চায়েত ভেঙে দেওয়া"]
  },
  {
    id: "vol1_ch3_q30",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub5",
    questionBn: "পঞ্চায়েত ভেঙে দেওয়া হলে কত দিনের মধ্যে ভোট করতে হয়?",
    options: ["১ মাসের মধ্যে", "৩ মাসের মধ্যে", "৬ মাসের মধ্যে", "১ বছরের মধ্যে"],
    correctIndex: 2,
    explanationBn: "সাংবিধানিক নিয়ম অনুযায়ী ৬ মাসের বেশি কোনো পঞ্চায়েত স্তর খালি রাখা যায় না।",
    difficulty: "easy",
    tags: ["৬ মাস", "উপনির্বাচন"]
  },
  {
    id: "vol1_ch3_q31",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub4",
    questionBn: "শিলিগুড়ি মহকুমা এলাকার সর্বোচ্চ পঞ্চায়েত স্তর কোনটি?",
    options: ["জেলা পরিষদ", "পঞ্চায়েত সমিতি", "মহকুমা পরিষদ", "গ্রাম পঞ্চায়েত"],
    correctIndex: 2,
    explanationBn: "শিলিগুড়ির জন্য বিশেষ ব্যবস্থায় শিলিগুড়ি মহকুমা পরিষদ জেলা পরিষদের ভূমিকা পালন করে।",
    difficulty: "easy",
    tags: ["মহকুমা পরিষদ", "শিলিগুড়ি"]
  },
  {
    id: "vol1_ch3_q32",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub1",
    questionBn: "পঞ্চায়েতের প্রতিটি স্তরে মাসে অন্তত কটি সভা করা বাধ্যতামূলক?",
    options: ["১টি", "২টি", "৩টি", "৪টি"],
    correctIndex: 0,
    explanationBn: "সব নির্বাচিত সদস্যদের নিয়ে মাসে অন্তত ১টি সাধারণ সভা করতেই হবে।",
    difficulty: "easy",
    tags: ["মাসিক সভা", "১টি"]
  },
  {
    id: "vol1_ch3_q33",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub3",
    questionBn: "জেলা পরিষদের কর্মাধ্যক্ষরা কীভাবে নির্বাচিত হন?",
    options: ["জনগণের ভোটে", "স্থায়ী সমিতির সদস্যদের ভোটে", "রাজ্য সরকারের মনোনয়নে", "সভাধিপতির পছন্দে"],
    correctIndex: 1,
    explanationBn: "স্থায়ী সমিতির নির্বাচিত সদস্যরা নিজেদের মধ্য থেকে একজনকে কর্মাধ্যক্ষ নির্বাচন করেন।",
    difficulty: "easy",
    tags: ["কর্মাধ্যক্ষ", "স্থায়ী সমিতি"]
  },
  {
    id: "vol1_ch3_q34",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub5",
    questionBn: "ত্রিস্তর পঞ্চায়েত ব্যবস্থায় ক্ষমতা কীভাবে বিকেন্দ্রীভূত হয়?",
    options: ["ওপর থেকে নিচে (Top-down)", "নিচ থেকে ওপরে (Bottom-up)", "কেন্দ্র থেকে রাজ্যে", "কেবল সমান্তরালভাবে"],
    correctIndex: 1,
    explanationBn: "গ্রাম স্তরের সাধারণ মানুষের ক্ষমতা ও চাহিদা ওপরের স্তরগুলোতে প্রতিফলিত হয় (Bottom-up approach)।",
    difficulty: "easy",
    tags: ["Bottom-up", "বিকেন্দ্রীকরণ"]
  },
  {
    id: "vol1_ch3_q35",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub3",
    questionBn: "জেলা পরিষদের কোন স্থায়ী সমিতি কৃষি সংক্রান্ত কাজ দেখে?",
    options: ["অর্থ ও সংস্থা", "কৃষি, সেচ ও সমবায়", "পূর্ত কার্য", "জনস্বাস্থ্য"],
    correctIndex: 1,
    explanationBn: "কৃষি, সেচ ও সমবায় স্থায়ী সমিতি জেলার সমস্ত কৃষি ও সেচ প্রকল্পের তদারকি করে।",
    difficulty: "easy",
    tags: ["কৃষি ও সেচ", "স্থায়ী সমিতি"]
  },
  {
    id: "vol1_ch3_q36",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub1",
    questionBn: "পশ্চিমবঙ্গে পঞ্চায়েত স্তরে মহিলাদের জন্য কত শতাংশ আসন সংরক্ষিত থাকে?",
    options: ["৩৩%", "৫০%", "৬০%", "কোনো সংরক্ষণ নেই"],
    correctIndex: 1,
    explanationBn: "পশ্চিমবঙ্গে পঞ্চায়েতের প্রতিটি স্তরেই মহিলাদের জন্য অর্ধেক বা ৫০% আসন সংরক্ষিত।",
    difficulty: "easy",
    tags: ["৫০% সংরক্ষণ", "মহিলা"]
  },
  {
    id: "vol1_ch3_q37",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub1",
    questionBn: "পঞ্চায়েতে এসসি (SC) ও এসটি (ST)-দের জন্য সংরক্ষণের ভিত্তি কী?",
    options: ["শিক্ষা", "আর্থিক অবস্থা", "জনসংখ্যা", "জমির পরিমাণ"],
    correctIndex: 2,
    explanationBn: "ওই এলাকার মোট জনসংখ্যার অনুপাতে তাদের জন্য আসন সংরক্ষিত হয়।",
    difficulty: "easy",
    tags: ["জনসংখ্যা অনুপাত"]
  },
  {
    id: "vol1_ch3_q38",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub5",
    questionBn: "পঞ্চায়েতের যৌথ প্রকল্প (Joint Scheme) সাধারণত কে পরিচালনা করে?",
    options: ["গ্রাম পঞ্চায়েত", "পঞ্চায়েত সমিতি বা জেলা পরিষদ", "কেন্দ্র সরকার", "অর্থ কমিশন"],
    correctIndex: 1,
    explanationBn: "একাধিক এলাকার কাজ হলে ওপরের স্তরগুলো (পঞ্চায়েত সমিতি বা জেলা পরিষদ) সেই যৌথ প্রকল্পের দায়িত্ব নেয়।",
    difficulty: "easy",
    tags: ["যৌথ প্রকল্প"]
  },
  {
    id: "vol1_ch3_q39",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub1",
    questionBn: "পঞ্চায়েতের নির্বাচিত প্রতিনিধিরা ভাতা বা সাম্মানিক পান কার কাছ থেকে?",
    options: ["কেন্দ্র সরকার", "রাজ্য সরকার বা পঞ্চায়েত তহবিল", "নির্বাচন কমিশন", "বিধায়ক তহবিল"],
    correctIndex: 1,
    explanationBn: "রাজ্য সরকারের অনুদান ও পঞ্চায়েতের নিজস্ব তহবিল থেকে এই সাম্মানিক দেওয়া হয়।",
    difficulty: "easy",
    tags: ["সাম্মানিক", "ভাতা"]
  },
  {
    id: "vol1_ch3_q40",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub5",
    questionBn: "জেলা পরিকল্পনা কমিটি (DPC)-তে পঞ্চায়েতের কোন স্তরের ভূমিকা সবচেয়ে বেশি?",
    options: ["গ্রাম পঞ্চায়েত", "পঞ্চায়েত সমিতি", "জেলা পরিষদ", "সবকটির সমান"],
    correctIndex: 2,
    explanationBn: "জেলার সামগ্রিক উন্নয়নের এই কমিটিতে জেলা পরিষদের প্রত্যক্ষ নিয়ন্ত্রণ ও প্রভাব থাকে।",
    difficulty: "easy",
    tags: ["DPC", "জেলা পরিষদ"]
  },
  {
    id: "vol1_ch3_q41",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub1",
    questionBn: "পঞ্চায়েত সমিতির সভার নোটিশ কে জারি করেন?",
    options: ["সভাপতি", "BDO (Executive Officer)", "প্রধান", "জেলাশাসক"],
    correctIndex: 1,
    explanationBn: "প্রশাসনিক আধিকারিক হিসেবে BDO সভাপতির সাথে আলোচনা করে সভার নোটিশ দেন।",
    difficulty: "easy",
    tags: ["BDO", "নোটিশ"]
  },
  {
    id: "vol1_ch3_q42",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub1",
    questionBn: "জেলা পরিষদের সভার নোটিশ কে জারি করেন?",
    options: ["সভাধিপতি", "SDO", "জেলাশাসক (Executive Officer)", "মুখ্যমন্ত্রী"],
    correctIndex: 2,
    explanationBn: "জেলাশাসক নির্বাহী আধিকারিক হিসেবে সভার দিনক্ষণ ও নোটিশ জারি করেন।",
    difficulty: "easy",
    tags: ["জেলাশাসক", "নোটিশ"]
  },
  {
    id: "vol1_ch3_q43",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub1",
    questionBn: "গ্রাম পঞ্চায়েতের সভার নোটিশ কে জারি করেন?",
    options: ["প্রধান", "উপ-প্রধান", "সচিব (Secretary)", "BDO"],
    correctIndex: 2,
    explanationBn: "গ্রাম পঞ্চায়েত স্তরে সরকারি কর্মী হিসেবে সচিব প্রধানের নির্দেশে নোটিশ জারি করেন।",
    difficulty: "easy",
    tags: ["সচিব", "নোটিশ"]
  },
  {
    id: "vol1_ch3_q44",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub1",
    questionBn: "পঞ্চায়েতের এই ত্রিস্তরীয় কাঠামো প্রথম কোন কমিটি সুপারিশ করেছিল?",
    options: ["অশোক মেহতা", "বলবন্ত রাই মেহতা", "এল এম সিঙ্ঘভি", "পি কে থুঙ্গন"],
    correctIndex: 1,
    explanationBn: "১৯৫৭ সালে বলবন্ত রাই মেহতা কমিটিই প্রথম এই কাঠামোর প্রস্তাব দেয়।",
    difficulty: "easy",
    tags: ["বলবন্ত রাই মেহতা"]
  },
  {
    id: "vol1_ch3_q45",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub1",
    questionBn: "ত্রিস্তরীয় ব্যবস্থায় গ্রাম পঞ্চায়েতকে কী হিসেবে বিবেচনা করা হয়?",
    options: ["রুট লেভেল বা মূল ভিত্তি", "মধ্যবর্তী লিঙ্ক", "শীর্ষ সংস্থা", "প্রশাসনিক পর্ষদ"],
    correctIndex: 0,
    explanationBn: "গ্রাম পঞ্চায়েত সরাসরি গ্রামের মানুষের সাথে যুক্ত থাকায় এটিই পঞ্চায়েতের মূল ভিত্তি।",
    difficulty: "easy",
    tags: ["মূল ভিত্তি"]
  },
  {
    id: "vol1_ch3_q46",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub5",
    questionBn: "পঞ্চায়েত সমিতি তার কাজের জন্য মূলত কার কাছে দায়ী থাকে?",
    options: ["রাজ্যপাল", "জেলা পরিষদ", "হাইকোর্ট", "কেন্দ্র সরকার"],
    correctIndex: 1,
    explanationBn: "কাঠামোগতভাবে পঞ্চায়েত সমিতিকে তার কাজের হিসাব জেলা পরিষদকে দিতে হয়।",
    difficulty: "easy",
    tags: ["দায়বদ্ধতা", "জেলা পরিষদ"]
  },
  {
    id: "vol1_ch3_q47",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub5",
    questionBn: "জেলা পরিষদ তার কাজের জন্য মূলত কার কাছে দায়ী থাকে?",
    options: ["রাজ্য সরকার", "কেন্দ্র সরকার", "সুপ্রিম কোর্ট", "নির্বাচন কমিশন"],
    correctIndex: 0,
    explanationBn: "সর্বোচ্চ স্তর হিসেবে জেলা পরিষদ সরাসরি রাজ্য সরকারের পঞ্চায়েত দপ্তরের কাছে দায়ী।",
    difficulty: "easy",
    tags: ["রাজ্য সরকার", "দায়বদ্ধতা"]
  },
  {
    id: "vol1_ch3_q48",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub5",
    questionBn: "গ্রামীণ পরিকাঠামো উন্নয়নের বৃহত্তর কাজগুলো সাধারণত কে করে?",
    options: ["গ্রাম পঞ্চায়েত", "গ্রাম সংসদ", "জেলা পরিষদ", "BDO"],
    correctIndex: 2,
    explanationBn: "বড় রাস্তা, সেতু বা বৃহৎ সেচ প্রকল্পের মতো বৃহত্তর কাজগুলো জেলা পরিষদ করে।",
    difficulty: "easy",
    tags: ["জেলা পরিষদ", "বৃহত্তর কাজ"]
  },
  {
    id: "vol1_ch3_q49",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub5",
    questionBn: "পঞ্চায়েতের প্রতিটি স্তরে কি নিজস্ব তহবিল (Fund) থাকে?",
    options: ["হ্যাঁ, সব স্তরে থাকে", "কেবল গ্রাম পঞ্চায়েতে থাকে", "কেবল জেলা পরিষদে থাকে", "কোনো নিজস্ব তহবিল থাকে না"],
    correctIndex: 0,
    explanationBn: "৩টি স্তরেরই নিজস্ব ব্যাঙ্ক অ্যাকাউন্ট এবং আলাদা তহবিল বা ফান্ড থাকে।",
    difficulty: "easy",
    tags: ["তহবিল", "৩ স্তর"]
  },
  {
    id: "vol1_ch3_q50",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub1",
    questionBn: "ত্রিস্তরীয় পঞ্চায়েতের নির্বাচন পরিচালনা করার সম্পূর্ণ দায়িত্ব কার?",
    options: ["ভারতের নির্বাচন কমিশন", "রাজ্য নির্বাচন কমিশন", "রাজ্য পুলিশ", "জেলাশাসক"],
    correctIndex: 1,
    explanationBn: "রাজ্য নির্বাচন কমিশন সম্পূর্ণ স্বাধীনভাবে পঞ্চায়েত নির্বাচন পরিচালনা করে।",
    difficulty: "easy",
    tags: ["রাজ্য নির্বাচন কমিশন"]
  },

  // --- Converted One-Liners into MCQs (51 to 80) ---
  {
    id: "vol1_ch3_ol1",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub5",
    questionBn: "জেলা পরিষদের পূর্ত কার্য ও পরিবহন স্থায়ী সমিতি কোন দায়িত্ব পালন করে?",
    options: ["বিদ্যালয় পরিদর্শন", "জেলার রাস্তাঘাট ও সেতু নির্মাণের তদারকি", "কৃষকদের ঋণ প্রদান", "স্বাস্থ্য কেন্দ্র স্থাপন"],
    correctIndex: 1,
    explanationBn: "পূর্ত কার্য ও পরিবহন স্থায়ী সমিতি জেলার রাস্তাঘাট, কালভার্ট ও পরিকাঠামো নির্মাণের তদারকি করে।",
    difficulty: "medium",
    tags: ["পূর্ত কার্য", "স্থায়ী সমিতি"]
  },
  {
    id: "vol1_ch3_ol2",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub5",
    questionBn: "রাজ্য সরকারের স্টেট ইনস্টিটিউট অফ পঞ্চায়েত অ্যান্ড রুরাল ডেভেলপমেন্ট (SIPRD) কোথায় অবস্থিত?",
    options: ["সল্টলেক", "কল্যাণী", "বর্ধমান", "শিলিগুড়ি"],
    correctIndex: 1,
    explanationBn: "নদীয়ার কল্যাণীতে অবস্থিত SIPRD পঞ্চায়েত প্রতিনিধি ও কর্মচারীদের পেশাগত প্রশিক্ষণ প্রদান করে।",
    difficulty: "medium",
    tags: ["SIPRD", "কল্যাণী"]
  },
  {
    id: "vol1_ch3_ol3",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub2",
    questionBn: "একজন গ্রামীণ ভোটার সাধারণ নির্বাচনে একই দিনে মোট কটি আলাদা ব্যালটে ভোট দেন?",
    options: ["১টি", "২টি", "৩টি", "৪টি"],
    correctIndex: 2,
    explanationBn: "একই দিনে গ্রাম পঞ্চায়েত, পঞ্চায়েত সমিতি এবং জেলা পরিষদের জন্য ৩টি আলাদা ব্যালটে ভোট দিতে হয়।",
    difficulty: "easy",
    tags: ["৩টি ব্যালট"]
  },
  {
    id: "vol1_ch3_ol4",
    subjectId: "panchayat",
    chapterId: "panchayat_ch3",
    subTopicId: "panchayat_ch3_sub5",
    questionBn: "পশ্চিমবঙ্গে ক্ষমতার বিকেন্দ্রীকরণের মাধ্যমে শাসন ক্ষমতা রাইটার্স বা নবান্ন থেকে কোন স্তর পর্যন্ত পৌঁছে দেওয়া হয়েছে?",
    options: ["কেবল জেলা স্তর", "কেবল মহকুমা স্তর", "গ্রামের বুথ স্তর পর্যন্ত", "পৌরসভা স্তর পর্যন্ত"],
    correctIndex: 2,
    explanationBn: "ক্ষমতা কেন্দ্রীয় সচিবালয় থেকে একদম তৃণমূলের বুথ ও সংসদ স্তর পর্যন্ত বিকেন্দ্রীভূত করা হয়েছে।",
    difficulty: "easy",
    tags: ["বিকেন্দ্রীকরণ"]
  }
];
