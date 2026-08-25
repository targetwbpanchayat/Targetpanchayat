import { StudyChapter, Question } from "../../types";

export const BENGALI_CH2_STUDY: StudyChapter = {
  id: "bengali_ch2",
  subjectId: "bengali",
  chapterNumber: 2,
  titleBn: "সন্ধি (স্বরসন্ধি, ব্যঞ্জনসন্ধি ও বিসর্গ সন্ধি)",
  titleEn: "Sandhi (Vowel, Consonant, Visarga & Irregular Sandhi)",
  estimatedMinutes: 35,
  importantNotesCount: 20,
  summary: "সন্ধির অর্থ ও উদ্দেশ্য, স্বরসন্ধি, ব্যঞ্জনসন্ধি, বিসর্গ সন্ধি এবং নিপাতনে সিদ্ধ সন্ধির যাবতীয় নিয়মাবলি, ১০০টি গুরুত্বপূর্ণ সন্ধি বিচ্ছেদ এবং ৫০টি বাছাই করা MCQ।",
  subTopics: [
    {
      id: "bengali_ch2_sub1",
      chapterId: "bengali_ch2",
      subjectId: "bengali",
      titleBn: "সন্ধির সংজ্ঞা ও স্বরসন্ধির নিয়মাবলি",
      titleEn: "Definition of Sandhi & Swarasandhi Rules",
      orderIndex: 1,
      summaryBn: "পাশাপাশি দুটি ধ্বনির দ্রুত মিলনে সন্ধি। স্বরধ্বনি + স্বরধ্বনি = স্বরসন্ধি (যেমন: বিদ্যালয়, রবীন্দ্র, মরূদ্যান, মহেশ, সূর্যোদয়, দেবর্ষি, জনৈক, বনৌষধি, অত্যন্ত, স্বাগত, নায়ক, নাবিক)।",
      keyConcepts: ["সন্ধির অর্থ: মিলন", "স্বরসন্ধির মূল সূত্রাবলি", "অ/আ + অ/আ = আ (নবান্ন)", "ই/ঈ + ই/ঈ = ঈ (রবীন্দ্র)", "অ/আ + ই/ঈ = এ (মহেশ)", "অ/আ + উ/ঊ = ও (সূর্যোদয়)", "অ/আ + ঋ = অর্ (দেবর্ষি)", "অ/আ + এ/ঐ = ঐ (জনৈক)", "অ/আ + ও/ঔ = ঔ (বনৌষধি)", "ই/ঈ + ভিন্ন স্বর = য-ফলা (অত্যন্ত)", "উ/ঊ + ভিন্ন স্বর = ব-ফলা (স্বাগত)"]
    },
    {
      id: "bengali_ch2_sub2",
      chapterId: "bengali_ch2",
      subjectId: "bengali",
      titleBn: "ব্যঞ্জনসন্ধির নিয়মাবলি ও উদাহরণ",
      titleEn: "Banjansandhi Rules & Examples",
      orderIndex: 2,
      summaryBn: "স্বর + ব্যঞ্জন, ব্যঞ্জন + স্বর বা ব্যঞ্জন + ব্যঞ্জন = ব্যঞ্জনসন্ধি (দিগন্ত, সচ্চরিত্র, জগজ্জীবন, উল্লেখ, সন্তোষ, সংস্কার, সংসার, বৃষ্টি, পদ্ধতি, উদ্ধার)।",
      keyConcepts: ["১ম বর্ণ + স্বর = ৩য় বর্ণ (দিক্ + অন্ত = দিগন্ত)", "ত্/দ্ + চ/ছ = চ্চ/চ্ছ (সচ্চরিত্র)", "ত্/দ্ + জ/ঝ = জ্জ (জগজ্জীবন)", "ত্/দ্ + ল = ল্ল (উৎ + লেখ = উল্লেখ)", "ম্ + স্পর্শ বর্ণ = অনুস্বার বা বর্গের ৫ম (সন্তোষ)", "সংবাদ = সম্ + বাদ, বৃষ্টি = বৃষ্ + তি"]
    },
    {
      id: "bengali_ch2_sub3",
      chapterId: "bengali_ch2",
      subjectId: "bengali",
      titleBn: "বিসর্গ সন্ধির নিয়মাবলি ও উদাহরণ",
      titleEn: "Bisargasandhi Rules & Examples",
      orderIndex: 3,
      summaryBn: "বিসর্গ (ঃ) + স্বর বা ব্যঞ্জন = বিসর্গ সন্ধি। ও-কার হওয়া (মনোযোগ, তপোবন), র-জাত (নিরাকার, নির্জন), শ/ষ/স-জাত (নিশ্চয়, ধনুষ্টঙ্কার, মনস্তাপ, নমস্কার, পুরস্কার)।",
      keyConcepts: ["মনঃ + যোগ = মনোযোগ", "সরঃ + বর = সরোবর", "নিঃ + আকার = নিরাকার", "নিঃ + চয় = নিশ্চয়", "ধনুঃ + টঙ্কার = ধনুষ্টঙ্কার", "মনঃ + তাপ = মনস্তাপ", "নমঃ + কার = নমস্কার", "পুরঃ + কার = পুরস্কার", "দুঃ + ঘটনা = দুর্ঘটনা"]
    },
    {
      id: "bengali_ch2_sub4",
      chapterId: "bengali_ch2",
      subjectId: "bengali",
      titleBn: "নিপাতনে সিদ্ধ সন্ধি (বিশেষ ব্যতিক্রম)",
      titleEn: "Irregular Sandhi (Nipatone Siddho)",
      orderIndex: 4,
      summaryBn: "যেসব সন্ধি কোনো ব্যাকরণগত সাধারণ নিয়ম মানে না: একাদশ (এক + দশ), ষোড়শ (ষট্ + দশ), আশ্চর্য (আ + চর্য), পরস্পর (পর + পর), গবাক্ষ (গো + অক্ষ), কুলটা (কুল + অটা), মার্তণ্ড, পতঞ্জলি, তস্কর।",
      keyConcepts: ["একাদশ = এক + দশ", "ষোড়শ = ষট্ + দশ", "আশ্চর্য = আ + চর্য", "পরস্পর = পর + পর", "গবাক্ষ = গো + অক্ষ", "পতঞ্জলি = পতৎ + অঞ্জলি", "তস্কর = তৎ + কর", "মার্তণ্ড = মার্ত + অণ্ড"]
    }
  ],
  content: {
    introduction: "সন্ধি শব্দের অর্থ মিলন। পাশাপাশি অবস্থিত দুটি ধ্বনির দ্রুত উচ্চারণের ফলে যে মিলন ঘটে, তাকে সন্ধি বলে। এর মূল উদ্দেশ্য উচ্চারণ সহজ ও ভাষাকে শ্রুতিমধুর করা। বাংলায় সন্ধি মূলত তিন প্রকার: স্বরসন্ধি, ব্যঞ্জনসন্ধি এবং বিসর্গ সন্ধি। এছাড়া নিয়মের বহির্ভূত সন্ধিকে নিপাতনে সিদ্ধ সন্ধি বলে।",
    sections: [
      {
        heading: "১. স্বরসন্ধি ও ব্যঞ্জনসন্ধির প্রধান নিয়মাবলি",
        body: [
          "১. স্বরসন্ধি: স্বরধ্বনির সঙ্গে স্বরধ্বনির মিলনকে স্বরসন্ধি বলে। যেমন: নব + অন্ন = নবান্ন, রবি + ইন্দ্র = রবীন্দ্র, দেব + ইন্দ্র = দেবেন্দ্র, সূর্য + উদয় = সূর্যোদয়, মহা + ঔষধ = মহৌষধ, অতি + অন্ত = অত্যন্ত, সু + আগত = স্বাগত, নে + অন = নয়ন, গৈ + অক = গায়ক, পো + অন = পবন, নৌ + ইক = নাবিক।",
          "২. ব্যঞ্জনসন্ধি: ব্যঞ্জনধ্বনির সাথে স্বরধ্বনি বা ব্যঞ্জনধ্বনির মিলন। যেমন: দিক্ + অন্ত = দিগন্ত, বাক্ + অর্থ = বাগর্থ, সৎ + চরিত্র = সচ্চরিত্র, উৎ + লেখ = উল্লেখ, জগৎ + নাথ = জগন্নাথ, সম্ + কার = সংস্কার, সম্ + সার = সংসার, সম্ + তোষ = সন্তোষ, উৎ + হার = উদ্ধার, পদ্ + হতি = পদ্ধতি।"
        ],
        keyPoints: [
          "নয়ন = নে + অন; গায়ক = গৈ + অক; নাবিক = নৌ + ইক; পবন = পো + অন।",
          "দিগন্ত = দিক্ + অন্ত; উল্লেখ = উৎ + লেখ; সচ্চরিত্র = সৎ + চরিত্র।",
          "উদ্ধার = উৎ + হার; পদ্ধতি = পদ্ + হতি।"
        ]
      },
      {
        heading: "২. বিসর্গ সন্ধি ও নিপাতনে সিদ্ধ সন্ধি",
        body: [
          "৩. বিসর্গ সন্ধি: বিসর্গের সাথে স্বর বা ব্যঞ্জনের মিলন। যেমন: মনঃ + যোগ = মনোযোগ, সরঃ + বর = সরোবর, তপঃ + বন = তপোবন, নিঃ + আকার = নিরাকার, নিঃ + জন = নির্জন, দুঃ + ঘটনা = দুর্ঘটনা, নিঃ + চয় = নিশ্চয়, ধনুঃ + টঙ্কার = ধনুষ্টঙ্কার, মনঃ + তাপ = মনস্তাপ, নমঃ + কার = নমস্কার, পুরঃ + কার = পুরস্কার, ভাঃ + কর = ভাস্কর।",
          "৪. নিপাতনে সিদ্ধ সন্ধি: যা কোনো প্রচলিত নিয়ম মানে না। যেমন: এক + দশ = একাদশ, ষট্ + দশ = ষোড়শ, আ + চর্য = আশ্চর্য, পর + পর = পরস্পর, গো + অক্ষ = গবাক্ষ, কুল + অটা = কুলটা, মার্ত + অণ্ড = মার্তণ্ড, সীমন্ + অন্ত = সীমন্ত, পতৎ + অঞ্জলি = পতঞ্জলি, তৎ + কর = তস্কর।"
        ],
        keyPoints: [
          "মনোযোগ = মনঃ + যোগ; পুরস্কার = পুরঃ + কার; ভাস্কর = ভাঃ + কর।",
          "নিপাতনে সিদ্ধ: একাদশ, ষোড়শ, আশ্চর্য, পরস্পর, গবাক্ষ, পতঞ্জলি, তস্কর।"
        ]
      }
    ],
    examTips: [
      "'গায়ক' শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি? উত্তর: গৈ + অক।",
      "'স্বাগত' শব্দের সঠিক সন্ধি বিচ্ছেদ কী? উত্তর: সু + আগত।",
      "'ষোড়শ' শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি? উত্তর: ষট্ + দশ (নিপাতনে সিদ্ধ)।",
      "'উদ্ধার' শব্দের সঠিক সন্ধি বিচ্ছেদ কী? উত্তর: উৎ + হার।"
    ],
    quickRevisionPoints: [
      "সন্ধির প্রকারভেদ: ৩ প্রকার (স্বরসন্ধি, ব্যঞ্জনসন্ধি, বিসর্গ সন্ধি)।",
      "পবন = পো + অন; ভাবুক = ভৌ + উক; অত্যন্ত = অতি + অন্ত।",
      "সঞ্চয় = সম্ + চয়; বৃষ্টি = বৃষ্ + তি; ষষ্ঠ = ষষ্ + থ।",
      "দুর্ঘটনা = দুঃ + ঘটনা; প্রাতঃকাল = প্রাতঃ + কাল।"
    ]
  }
};

export const BENGALI_CH2_QUESTIONS: Question[] = [
  {
    id: "vol2_ch2_q1",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub1",
    questionBn: "পাশাপাশি দুটি ধ্বনির মিলনকে কী বলে?",
    options: ["সমাস", "সন্ধি", "কারক", "প্রত্যয়"],
    correctIndex: 1,
    explanationBn: "পাশাপাশি অবস্থিত দুটি ধ্বনির দ্রুত উচ্চারণের ফলে যে মিলন ঘটে, তাকে সন্ধি বলে।",
    difficulty: "easy",
    tags: ["সন্ধি", "সংজ্ঞা"]
  },
  {
    id: "vol2_ch2_q2",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub1",
    questionBn: "বাংলায় সন্ধি প্রধানত কয় প্রকার?",
    options: ["২ প্রকার", "৩ প্রকার", "৪ প্রকার", "৫ প্রকার"],
    correctIndex: 1,
    explanationBn: "সন্ধি প্রধানত তিন প্রকার: স্বরসন্ধি, ব্যঞ্জনসন্ধি এবং বিসর্গ সন্ধি।",
    difficulty: "easy",
    tags: ["সন্ধির প্রকারভেদ", "৩ প্রকার"]
  },
  {
    id: "vol2_ch2_q3",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub1",
    questionBn: "স্বরধ্বনির সঙ্গে স্বরধ্বনির মিলনকে কী বলে?",
    options: ["ব্যঞ্জনসন্ধি", "বিসর্গ সন্ধি", "স্বরসন্ধি", "নিপাতনে সিদ্ধ সন্ধি"],
    correctIndex: 2,
    explanationBn: "স্বরধ্বনির সাথে স্বরধ্বনি যুক্ত হয়ে যে সন্ধি হয় তাকে স্বরসন্ধি বলে।",
    difficulty: "easy",
    tags: ["স্বরসন্ধি", "সংজ্ঞা"]
  },
  {
    id: "vol2_ch2_q4",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub1",
    questionBn: "'বিদ্যালয়'-এর সঠিক সন্ধি বিচ্ছেদ কোনটি?",
    options: ["বিদ্যা + লয়", "বিদ্য + আলয়", "বিদ্যা + আলয়", "বিদ্ + আলয়"],
    correctIndex: 2,
    explanationBn: "বিদ্যা + আলয় = বিদ্যালয় (আ + আ = আ)।",
    difficulty: "easy",
    tags: ["বিদ্যালয়", "স্বরসন্ধি"]
  },
  {
    id: "vol2_ch2_q5",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub1",
    questionBn: "অ-কার কিংবা আ-কারের পর ই-কার কিংবা ঈ-কার থাকলে উভয়ে মিলে কী হয়?",
    options: ["এ-কার", "ঐ-কার", "ও-কার", "ঔ-কার"],
    correctIndex: 0,
    explanationBn: "অ/আ + ই/ঈ = এ হয় (যেমন: নর + ইন্দ্র = নরেন্দ্র, মহা + ঈশ = মহেশ)।",
    difficulty: "easy",
    tags: ["স্বরসন্ধি নিয়ম", "এ-কার"]
  },
  {
    id: "vol2_ch2_q6",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub1",
    questionBn: "'মহেশ' শব্দের সঠিক সন্ধি বিচ্ছেদ কী?",
    options: ["মহা + ইশ", "মহ + ঈশ", "মহা + ঈশ", "মহো + ঈশ"],
    correctIndex: 2,
    explanationBn: "মহা + ঈশ = মহেশ (আ + ঈ = এ)।",
    difficulty: "easy",
    tags: ["মহেশ", "স্বরসন্ধি"]
  },
  {
    id: "vol2_ch2_q7",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub1",
    questionBn: "'সূর্যোদয়'-এর সন্ধি বিচ্ছেদ কোনটি?",
    options: ["সূর্য + উদয়", "সূর্যো + দয়", "সূরয + উদয়", "সূর্য + উদ্দয়"],
    correctIndex: 0,
    explanationBn: "সূর্য + উদয় = সূর্যোদয় (অ + উ = ও)।",
    difficulty: "easy",
    tags: ["সূর্যোদয়", "স্বরসন্ধি"]
  },
  {
    id: "vol2_ch2_q8",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub1",
    questionBn: "অ-কার বা আ-কারের পর ঋ-কার থাকলে উভয়ে মিলে কী হয়?",
    options: ["রেফ", "র-ফলা", "অর্", "আর"],
    correctIndex: 2,
    explanationBn: "অ/আ + ঋ = অর্ হয় (যেমন: দেব + ঋষি = দেবর্ষি)।",
    difficulty: "easy",
    tags: ["স্বরসন্ধি", "অর্"]
  },
  {
    id: "vol2_ch2_q9",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub1",
    questionBn: "'দেবর্ষি'-এর সন্ধি বিচ্ছেদ কোনটি?",
    options: ["দেব + ঋষি", "দেবা + ঋষি", "দেবো + ঋষি", "দেব + রষি"],
    correctIndex: 0,
    explanationBn: "দেব + ঋষি = দেবর্ষি (অ + ঋ = অর্)।",
    difficulty: "easy",
    tags: ["দেবর্ষি", "সন্ধি বিচ্ছেদ"]
  },
  {
    id: "vol2_ch2_q10",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub1",
    questionBn: "'জনৈক'-এর সঠিক সন্ধি বিচ্ছেদ কোনটি?",
    options: ["জন + এক", "জন + ঐক", "জনো + এক", "জনা + এক"],
    correctIndex: 0,
    explanationBn: "জন + এক = জনৈক (অ + এ = ঐ)।",
    difficulty: "easy",
    tags: ["জনৈক", "স্বরসন্ধি"]
  },
  {
    id: "vol2_ch2_q11",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub1",
    questionBn: "'বনৌষধি'-এর সন্ধি বিচ্ছেদ কোনটি?",
    options: ["বন + ঔষধি", "বন + ওষধি", "বনো + ঔষধি", "বনা + ঔষধি"],
    correctIndex: 1,
    explanationBn: "বন + ওষধি = বনৌষধি (অ + ও = ঔ)।",
    difficulty: "easy",
    tags: ["বনৌষধি", "স্বরসন্ধি"]
  },
  {
    id: "vol2_ch2_q12",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub1",
    questionBn: "'অত্যন্ত' শব্দটিতে কোন সন্ধির নিয়ম প্রযোজ্য হয়েছে?",
    options: ["অ + অ", "ই + অ", "ই + ই", "য + অ"],
    correctIndex: 1,
    explanationBn: "অতি + অন্ত = অত্যন্ত (ই + অ = য-ফলা)।",
    difficulty: "easy",
    tags: ["অত্যন্ত", "য-ফলা"]
  },
  {
    id: "vol2_ch2_q13",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub1",
    questionBn: "'স্বাগত' শব্দের সঠিক সন্ধি বিচ্ছেদ কী?",
    options: ["স্ব + আগত", "সু + আগত", "সা + আগত", "সো + আগত"],
    correctIndex: 1,
    explanationBn: "সু + আগত = স্বাগত (উ + আ = ব-ফলা)।",
    difficulty: "easy",
    tags: ["স্বাগত", "ব-ফলা"]
  },
  {
    id: "vol2_ch2_q14",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub1",
    questionBn: "'নয়ন' শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি?",
    options: ["ন + অন", "নি + অন", "নে + অন", "নৈ + অন"],
    correctIndex: 2,
    explanationBn: "নে + অন = নয়ন (এ + অ = অয়)।",
    difficulty: "easy",
    tags: ["নয়ন", "সন্ধি"]
  },
  {
    id: "vol2_ch2_q15",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub1",
    questionBn: "'গায়ক' শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি?",
    options: ["গা + অক", "গৈ + অক", "গে + অক", "গো + অক"],
    correctIndex: 1,
    explanationBn: "গৈ + অক = গায়ক (ঐ + অ = আয়)।",
    difficulty: "easy",
    tags: ["গায়ক", "গৈ + অক"]
  },
  {
    id: "vol2_ch2_q16",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub1",
    questionBn: "'পবন' শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি?",
    options: ["পো + অন", "পব + অন", "প + বন", "পৌ + অন"],
    correctIndex: 0,
    explanationBn: "পো + অন = পবন (ও + অ = অব)।",
    difficulty: "easy",
    tags: ["পবন", "পো + অন"]
  },
  {
    id: "vol2_ch2_q17",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub2",
    questionBn: "স্বরধ্বনির সঙ্গে ব্যঞ্জনধ্বনির মিলনকে কী বলে?",
    options: ["স্বরসন্ধি", "ব্যঞ্জনসন্ধি", "বিসর্গ সন্ধি", "নিপাতনে সিদ্ধ সন্ধি"],
    correctIndex: 1,
    explanationBn: "স্বরধ্বনির সঙ্গে ব্যঞ্জনধ্বনি বা ব্যঞ্জনধ্বনির সঙ্গে ব্যঞ্জনধ্বনির মিলনকে ব্যঞ্জনসন্ধি বলে।",
    difficulty: "easy",
    tags: ["ব্যঞ্জনসন্ধি", "সংজ্ঞা"]
  },
  {
    id: "vol2_ch2_q18",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub2",
    questionBn: "'দিগন্ত' শব্দের সঠিক সন্ধি বিচ্ছেদ কী?",
    options: ["দিগ + অন্ত", "দিক্ + অন্ত", "দিশ + অন্ত", "দিঘ + অন্ত"],
    correctIndex: 1,
    explanationBn: "দিক্ + অন্ত = দিগন্ত (ক-স্থানে গ হয়েছে)।",
    difficulty: "easy",
    tags: ["দিগন্ত", "ব্যঞ্জনসন্ধি"]
  },
  {
    id: "vol2_ch2_q19",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub2",
    questionBn: "'জগদীশ'-এর সঠিক সন্ধি বিচ্ছেদ কোনটি?",
    options: ["জগৎ + ঈশ", "জগদ্ + ঈশ", "জগত + ইশ", "জগ + দীশ"],
    correctIndex: 0,
    explanationBn: "জগৎ + ঈশ = জগদীশ (ত্ + ঈ = দ)।",
    difficulty: "easy",
    tags: ["জগদীশ", "ব্যঞ্জনসন্ধি"]
  },
  {
    id: "vol2_ch2_q20",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub2",
    questionBn: "'সচ্চরিত্র' শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি?",
    options: ["সচ + চরিত্র", "সদ + চরিত্র", "সৎ + চরিত্র", "সম + চরিত্র"],
    correctIndex: 2,
    explanationBn: "সৎ + চরিত্র = সচ্চরিত্র (ত্ + চ = চ্চ)।",
    difficulty: "easy",
    tags: ["সচ্চরিত্র", "ব্যঞ্জনসন্ধি"]
  },
  {
    id: "vol2_ch2_q21",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub2",
    questionBn: "ত্ বা দ্-এর পর ল থাকলে সন্ধিতে ত্/দ্ স্থানে কী হয়?",
    options: ["ল্ল", "ল", "দল", "তল"],
    correctIndex: 0,
    explanationBn: "ত্/দ্ + ল = ল্ল হয় (যেমন: উৎ + লেখ = উল্লেখ, উৎ + লাস = উল্লাস)।",
    difficulty: "easy",
    tags: ["ব্যঞ্জনসন্ধি নিয়ম", "ল্ল"]
  },
  {
    id: "vol2_ch2_q22",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub2",
    questionBn: "'উন্নয়ন' শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি?",
    options: ["উন্ + নয়ন", "উদ্ + নয়ন", "উৎ + নয়ন", "উপ + নয়ন"],
    correctIndex: 2,
    explanationBn: "উৎ + নয়ন = উন্নয়ন (ত্ + ন = ন্ন)।",
    difficulty: "easy",
    tags: ["উন্নয়ন", "ব্যঞ্জনসন্ধি"]
  },
  {
    id: "vol2_ch2_q23",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub2",
    questionBn: "'সংসার' শব্দের সঠিক সন্ধি বিচ্ছেদ কী?",
    options: ["সং + সার", "সম্ + সার", "সম + অসার", "সঙ্ + সার"],
    correctIndex: 1,
    explanationBn: "সম্ + সার = সংসার (ম্-স্থানে অনুস্বার)।",
    difficulty: "easy",
    tags: ["সংসার", "সম্ + সার"]
  },
  {
    id: "vol2_ch2_q24",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub2",
    questionBn: "'বৃষ্টি' শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি?",
    options: ["বৃষ্ + তি", "বৃষ্ + টি", "বৃ + ষটি", "বৃষ + ইতি"],
    correctIndex: 0,
    explanationBn: "বৃষ্ + তি = বৃষ্টি (ষ্-এর পর ত থাকলে তা 'ট' হয়)।",
    difficulty: "easy",
    tags: ["বৃষ্টি", "বৃষ্ + তি"]
  },
  {
    id: "vol2_ch2_q25",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub2",
    questionBn: "'উদ্ধার' শব্দের সঠিক সন্ধি বিচ্ছেদ কী?",
    options: ["উৎ + ধার", "উদ্ + ধার", "উৎ + হার", "উদ্ + হার"],
    correctIndex: 2,
    explanationBn: "উৎ + হার = উদ্ধার (ত্ + হ = দ্ধ)।",
    difficulty: "easy",
    tags: ["উদ্ধার", "উৎ + হার"]
  },
  {
    id: "vol2_ch2_q26",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub3",
    questionBn: "বিসর্গের (ঃ) সঙ্গে স্বরধ্বনি বা ব্যঞ্জনধ্বনির মিলনকে কী বলে?",
    options: ["ব্যঞ্জনসন্ধি", "বিসর্গ সন্ধি", "নিপাতনে সিদ্ধ সন্ধি", "মৌলিক সন্ধি"],
    correctIndex: 1,
    explanationBn: "বিসর্গের সাথে স্বর বা ব্যঞ্জনের মিলনকে বিসর্গ সন্ধি বলে।",
    difficulty: "easy",
    tags: ["বিসর্গ সন্ধি", "সংজ্ঞা"]
  },
  {
    id: "vol2_ch2_q27",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub3",
    questionBn: "'মনোযোগ' শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি?",
    options: ["মন + যোগ", "মনো + যোগ", "মনঃ + যোগ", "মনস + যোগ"],
    correctIndex: 2,
    explanationBn: "মনঃ + যোগ = মনোযোগ (বিসর্গ ও-কার হয়েছে)।",
    difficulty: "easy",
    tags: ["মনোযোগ", "বিসর্গ সন্ধি"]
  },
  {
    id: "vol2_ch2_q28",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub3",
    questionBn: "'তপোবন' শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি?",
    options: ["তপ + বন", "তপো + বন", "তপঃ + বন", "তপশ্চ + বন"],
    correctIndex: 2,
    explanationBn: "তপঃ + বন = তপোবন।",
    difficulty: "easy",
    tags: ["তপোবন", "তপঃ + বন"]
  },
  {
    id: "vol2_ch2_q29",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub3",
    questionBn: "'নিরাকার' শব্দের সঠিক সন্ধি বিচ্ছেদ কী?",
    options: ["নির + আকার", "নি + আকার", "নিরা + কার", "নিঃ + আকার"],
    correctIndex: 3,
    explanationBn: "নিঃ + আকার = নিরাকার (বিসর্গ স্থানে 'র' হয়েছে)।",
    difficulty: "easy",
    tags: ["নিরাকার", "নিঃ + আকার"]
  },
  {
    id: "vol2_ch2_q30",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub3",
    questionBn: "'নির্জন'-এর সঠিক সন্ধি বিচ্ছেদ কোনটি?",
    options: ["নির + জন", "নি + রজন", "নিঃ + জন", "নিঃ + রজন"],
    correctIndex: 2,
    explanationBn: "নিঃ + জন = নির্জন (বিসর্গ রেফ হয়েছে)।",
    difficulty: "easy",
    tags: ["নির্জন", "নিঃ + জন"]
  },
  {
    id: "vol2_ch2_q31",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub3",
    questionBn: "'নিশ্চয়' শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি?",
    options: ["নিঃ + চয়", "নিস + চয়", "নিশ + চয়", "নি + চয়"],
    correctIndex: 0,
    explanationBn: "নিঃ + চয় = নিশ্চয় (বিসর্গ তালব্য-শ হয়েছে)।",
    difficulty: "easy",
    tags: ["নিশ্চয়", "বিসর্গ সন্ধি"]
  },
  {
    id: "vol2_ch2_q32",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub3",
    questionBn: "বিসর্গের পর চ বা ছ থাকলে বিসর্গ স্থানে কী হয়?",
    options: ["শ", "ষ", "স", "র"],
    correctIndex: 0,
    explanationBn: "বিসর্গের পর চ/ছ থাকলে বিসর্গ স্থানে তালব্য 'শ' হয় (যেমন: নিঃ + চয় = নিশ্চয়)।",
    difficulty: "easy",
    tags: ["বিসর্গ নিয়ম", "তালব্য শ"]
  },
  {
    id: "vol2_ch2_q33",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub3",
    questionBn: "'মনস্তাপ' শব্দের সঠিক সন্ধি বিচ্ছেদ কী?",
    options: ["মনঃ + তাপ", "মনস + তাপ", "মনো + তাপ", "মন + স্তাপ"],
    correctIndex: 0,
    explanationBn: "মনঃ + তাপ = মনস্তাপ (বিসর্গ স্থানে 'স' হয়েছে)।",
    difficulty: "easy",
    tags: ["মনস্তাপ", "মনঃ + তাপ"]
  },
  {
    id: "vol2_ch2_q34",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub3",
    questionBn: "'নমস্কার' শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি?",
    options: ["নম + কার", "নমঃ + কার", "নমো + কার", "নমস + কার"],
    correctIndex: 1,
    explanationBn: "নমঃ + কার = নমস্কার।",
    difficulty: "easy",
    tags: ["নমস্কার", "নমঃ + কার"]
  },
  {
    id: "vol2_ch2_q35",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub3",
    questionBn: "'পুরস্কার' শব্দের সন্ধি বিচ্ছেদ কী?",
    options: ["পুরঃ + কার", "পুরো + কার", "পুর + কার", "পুরস + কার"],
    correctIndex: 0,
    explanationBn: "পুরঃ + কার = পুরস্কার (বিসর্গ স্থানে 'স' হয়)।",
    difficulty: "easy",
    tags: ["পুরস্কার", "পুরঃ + কার"]
  },
  {
    id: "vol2_ch2_q36",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub4",
    questionBn: "যেসব সন্ধি কোনো সাধারণ নিয়ম মানে না, তাদের কী বলে?",
    options: ["ব্যঞ্জনসন্ধি", "নিপাতনে সিদ্ধ সন্ধি", "ব্যতিক্রমী সন্ধি", "মৌলিক সন্ধি"],
    correctIndex: 1,
    explanationBn: "নিয়মবহির্ভূত সন্ধিকে নিপাতনে সিদ্ধ সন্ধি বলে।",
    difficulty: "easy",
    tags: ["নিপাতনে সিদ্ধ", "সংজ্ঞা"]
  },
  {
    id: "vol2_ch2_q37",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub4",
    questionBn: "নিচের কোনটি নিপাতনে সিদ্ধ সন্ধির উদাহরণ?",
    options: ["হিমালয়", "একাদশ", "বিদ্যালয়", "দিগন্ত"],
    correctIndex: 1,
    explanationBn: "এক + দশ = একাদশ একটি নিপাতনে সিদ্ধ সন্ধি।",
    difficulty: "easy",
    tags: ["একাদশ", "নিপাতনে সিদ্ধ"]
  },
  {
    id: "vol2_ch2_q38",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub4",
    questionBn: "'পরস্পর' শব্দের সঠিক সন্ধি বিচ্ছেদ কী?",
    options: ["পর + পর", "পরঃ + পর", "পরা + পর", "পরস + পর"],
    correctIndex: 0,
    explanationBn: "পর + পর = পরস্পর (নিপাতনে সিদ্ধ)।",
    difficulty: "easy",
    tags: ["পরস্পর", "পর + পর"]
  },
  {
    id: "vol2_ch2_q39",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub4",
    questionBn: "'গবাক্ষ' শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি?",
    options: ["গো + অক্ষ", "গব + অক্ষ", "গা + বাprocess", "গবা + অক্ষ"],
    correctIndex: 0,
    explanationBn: "গো + অক্ষ = গবাক্ষ (নিপাতনে সিদ্ধ)।",
    difficulty: "easy",
    tags: ["গবাক্ষ", "গো + অক্ষ"]
  },
  {
    id: "vol2_ch2_q40",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub4",
    questionBn: "'ষোড়শ' শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি?",
    options: ["ষোড় + দশ", "ষট্ + দশ", "ষো + দশ", "ষট + অশ"],
    correctIndex: 1,
    explanationBn: "ষট্ + দশ = ষোড়শ (নিপাতনে সিদ্ধ সন্ধি)।",
    difficulty: "easy",
    tags: ["ষোড়শ", "ষট্ + দশ"]
  },
  {
    id: "vol2_ch2_q41",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub4",
    questionBn: "'পতঞ্জলি' শব্দের সন্ধি বিচ্ছেদ কী?",
    options: ["পত + অঞ্জলি", "পতৎ + অঞ্জলি", "পতন + জলি", "পতং + জলি"],
    correctIndex: 1,
    explanationBn: "পতৎ + অঞ্জলি = পতঞ্জলি (নিপাতনে সিদ্ধ)।",
    difficulty: "easy",
    tags: ["পতঞ্জলি", "পতৎ + অঞ্জলি"]
  },
  {
    id: "vol2_ch2_q42",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub4",
    questionBn: "'আশ্চর্য' শব্দের সন্ধি বিচ্ছেদ কী?",
    options: ["আশ + চর্য", "আস + চর্য", "আ + চর্য", "আঃ + চর্য"],
    correctIndex: 2,
    explanationBn: "আ + চর্য = আশ্চর্য (নিপাতনে সিদ্ধ সন্ধি)।",
    difficulty: "easy",
    tags: ["আশ্চর্য", "আ + চর্য"]
  },
  {
    id: "vol2_ch2_q43",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub2",
    questionBn: "'পদ্ধতি' শব্দের সন্ধি বিচ্ছেদ কোনটি?",
    options: ["পদ + ধতি", "পদ্ + হতি", "পথ + হতি", "পত + ধতি"],
    correctIndex: 1,
    explanationBn: "পদ্ + হতি = পদ্ধতি (দ্ + হ = দ্ধ)।",
    difficulty: "easy",
    tags: ["পদ্ধতি", "পদ্ + হতি"]
  },
  {
    id: "vol2_ch2_q44",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub2",
    questionBn: "'ষষ্ঠ' শব্দের সন্ধি বিচ্ছেদ কী?",
    options: ["ষষ্ + থ", "ষট + ঠ", "ষষ্ + ঠ", "ষষ + ঠ"],
    correctIndex: 0,
    explanationBn: "ষষ্ + থ = ষষ্ঠ (ষ্ + থ = ষ্ঠ)।",
    difficulty: "easy",
    tags: ["ষষ্ঠ", "ষষ্ + থ"]
  },
  {
    id: "vol2_ch2_q45",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub2",
    questionBn: "'সঞ্চয়' শব্দের সন্ধি বিচ্ছেদ কোনটি?",
    options: ["সন + চয়", "সং + চয়", "সম্ + চয়", "সঙ্ + চয়"],
    correctIndex: 2,
    explanationBn: "সম্ + চয় = সঞ্চয় (ম্ + চ = ঞ্চ)।",
    difficulty: "easy",
    tags: ["সঞ্চয়", "সম্ + চয়"]
  },
  {
    id: "vol2_ch2_q46",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub1",
    questionBn: "'নাধিক' শব্দের সন্ধি বিচ্ছেদ কী?",
    options: ["ন + আধিক", "ন + অধিক", "না + ধিক", "না + অধিক"],
    correctIndex: 1,
    explanationBn: "ন + অধিক = নাধিক (অ + অ = আ)।",
    difficulty: "easy",
    tags: ["নাধিক", "ন + অধিক"]
  },
  {
    id: "vol2_ch2_q47",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub3",
    questionBn: "'প্রাতঃকাল' শব্দের সন্ধি বিচ্ছেদ কোনটি?",
    options: ["প্রাত + কাল", "প্রাতো + কাল", "প্রাতঃ + কাল", "প্রাতস + কাল"],
    correctIndex: 2,
    explanationBn: "প্রাতঃকাল = প্রাতঃ + কাল (বিসর্গ অক্ষুণ্ণ থাকে)।",
    difficulty: "easy",
    tags: ["প্রাতঃকাল", "বিসর্গ"]
  },
  {
    id: "vol2_ch2_q48",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub3",
    questionBn: "'নীরোগ' শব্দের সন্ধি বিচ্ছেদ কী?",
    options: ["নি + রোগ", "নিরা + রোগ", "নিস + রোগ", "নিঃ + রোগ"],
    correctIndex: 3,
    explanationBn: "নিঃ + রোগ = নীরোগ (বিসর্গ লোপ পেয়ে পূর্বের হ্রস্বস্বর দীর্ঘস্বর হয়)।",
    difficulty: "easy",
    tags: ["নীরোগ", "নিঃ + রোগ"]
  },
  {
    id: "vol2_ch2_q49",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub3",
    questionBn: "'দুর্ঘটনা' শব্দের সন্ধি বিচ্ছেদ কোনটি?",
    options: ["দূর + ঘটনা", "দুর + ঘটনা", "দুঃ + ঘটনা", "দু + ঘটনা"],
    correctIndex: 2,
    explanationBn: "দুঃ + ঘটনা = দুর্ঘটনা।",
    difficulty: "easy",
    tags: ["দুর্ঘটনা", "দুঃ + ঘটনা"]
  },
  {
    id: "vol2_ch2_q50",
    subjectId: "bengali",
    chapterId: "bengali_ch2",
    subTopicId: "bengali_ch2_sub2",
    questionBn: "'উড্ডীন' শব্দের সন্ধি বিচ্ছেদ কোনটি?",
    options: ["উদ্ + ডীন", "উৎ + ডীন", "উড + ডীন", "উন + ডীন"],
    correctIndex: 1,
    explanationBn: "উৎ + ডীন = উড্ডীন (ত্ + ড = ড্ড)।",
    difficulty: "easy",
    tags: ["উড্ডীন", "উৎ + ডীন"]
  }
];
