import { StudyChapter, Question } from "../../types";

export const BENGALI_CH1_STUDY: StudyChapter = {
  id: "bengali_ch1",
  subjectId: "bengali",
  chapterNumber: 1,
  titleBn: "ধ্বনি ও বর্ণ (স্বরধ্বনি, ব্যঞ্জনধ্বনি এবং তাদের শ্রেণিবিভাগ)",
  titleEn: "Dhwani O Borno (Vowels, Consonants & Classification)",
  estimatedMinutes: 30,
  importantNotesCount: 20,
  summary: "ধ্বনি ও বর্ণের সংজ্ঞা, বাংলা ভাষার ৫০টি বর্ণ (১১টি স্বরবর্ণ ও ৩৯টি ব্যঞ্জনবর্ণ), হ্রস্বস্বর (৪টি), দীর্ঘস্বর (৭টি), মৌলিক স্বরধ্বনি (৭টি), যৌগিক স্বরধ্বনি (২৫টি), স্পর্শ বর্ণ (২৫টি), অল্পপ্রাণ, মহাপ্রাণ, অঘোষ, ঘোষ, নাসিক্য, উষ্ম, অন্তঃস্থ, তাড়নজাত, কম্পিত ও পার্শ্বিক ধ্বনি।",
  subTopics: [
    {
      id: "bengali_ch1_sub1",
      chapterId: "bengali_ch1",
      subjectId: "bengali",
      titleBn: "ধ্বনি ও বর্ণের মূল ধারণা এবং স্বরধ্বনি",
      titleEn: "Concept of Dhwani, Borno and Vowels",
      orderIndex: 1,
      summaryBn: "ভাষার ক্ষুদ্রতম একক ধ্বনি, লিখিত রূপ বর্ণ। হ্রস্বস্বর (৪টি), দীর্ঘস্বর (৭টি), মৌলিক স্বরধ্বনি (৭টি - অ, আ, ই, উ, এ, ও, অ্যা) এবং যৌগিক স্বরবর্ণ (ঐ, ঔ)।",
      keyConcepts: ["ভাষার ক্ষুদ্রতম একক: ধ্বনি", "মোট বর্ণ ৫০টি (স্বরবর্ণ ১১, ব্যঞ্জনবর্ণ ৩৯)", "হ্রস্বস্বর ৪টি (অ, ই, উ, ঋ)", "মৌলিক স্বরধ্বনি ৭টি (অ, আ, ই, উ, এ, ও, অ্যা)", "যৌগিক স্বরবর্ণ ২টি (ঐ, ঔ), উচ্চারিত ২৫টি"]
    },
    {
      id: "bengali_ch1_sub2",
      chapterId: "bengali_ch1",
      subjectId: "bengali",
      titleBn: "ব্যঞ্জনধ্বনির উচ্চারণ স্থান ও বর্গীয় ভাগ",
      titleEn: "Consonants by Place of Articulation",
      orderIndex: 2,
      summaryBn: "ক থেকে ম পর্যন্ত ২৫টি স্পর্শ বর্ণকে ৫টি বর্গে ভাগ: কণ্ঠ্য (ক-বর্গ), তালব্য (চ-বর্গ), মূর্ধন্য (ট-বর্গ), দন্ত্য (ত-বর্গ) এবং ওষ্ঠ্য (প-বর্গ)।",
      keyConcepts: ["কণ্ঠ্য বর্ণ: ক, খ, গ, ঘ, ঙ", "তালব্য বর্ণ: চ, ছ, জ, ঝ, ঞ", "মূর্ধন্য বর্ণ: ট, ঠ, ড, ঢ, ণ", "দন্ত্য বর্ণ: ত, থ, দ, ধ, ন", "ওষ্ঠ্য বর্ণ: প, ফ, ব, ভ, ম"]
    },
    {
      id: "bengali_ch1_sub3",
      chapterId: "bengali_ch1",
      subjectId: "bengali",
      titleBn: "বাতাসের চাপ ও স্বরতন্ত্রী অনুসারে শ্রেণিবিভাগ",
      titleEn: "Aspiration & Voicing Classification",
      orderIndex: 3,
      summaryBn: "অল্পপ্রাণ (১ম ও ৩য় বর্ণ), মহাপ্রাণ (২য় ও ৪র্থ বর্ণ), অঘোষ (১ম ও ২য় বর্ণ), ঘোষ (৩য়, ৪র্থ ও ৫ম বর্ণ) এবং নাসিক্য ধ্বনি (ঙ, ঞ, ণ, ন, ম, ং, ঁ)।",
      keyConcepts: ["অল্পপ্রাণ ধ্বনি: ক, গ, চ, জ ইত্যাদি", "মহাপ্রাণ ধ্বনি: খ, ঘ, ছ, ঝ ইত্যাদি", "অঘোষ ধ্বনি: ক, খ, চ, ছ ইত্যাদি", "ঘোষ ধ্বনি: গ, ঘ, ঙ ইত্যাদি", "নাসিক্য বর্ণ: ৫টি (ঙ, ঞ, ণ, ন, ম)"]
    },
    {
      id: "bengali_ch1_sub4",
      chapterId: "bengali_ch1",
      subjectId: "bengali",
      titleBn: "উষ্ম, অন্তঃস্থ, তাড়নজাত, পার্শ্বিক ও অযোগবাহ বর্ণ",
      titleEn: "Special Consonant Types",
      orderIndex: 4,
      summaryBn: "উষ্ম/শিস ধ্বনি (শ, ষ, স, হ), অন্তঃস্থ বর্ণ (য, র, ল, ব), কম্পিত (র), পার্শ্বিক (ল), তাড়নজাত (ড়, ঢ়) এবং অযোগবাহ বর্ণ (ং, ঃ)।",
      keyConcepts: ["উষ্ম বর্ণ: শ, ষ, স, হ", "অন্তঃস্থ বর্ণ: য, র, ল, ব", "কম্পিত ধ্বনি: র", "পার্শ্বিক ধ্বনি: ল", "তাড়নজাত ধ্বনি: ড়, ঢ়", "অযোগবাহ বর্ণ: ং, ঃ", "অনুনাসিক বর্ণ: ঁ"]
    },
    {
      id: "bengali_ch1_sub5",
      chapterId: "bengali_ch1",
      subjectId: "bengali",
      titleBn: "মাত্রার প্রকারভেদ ও যুক্তাক্ষর বিশ্লেষণ",
      titleEn: "Matra Classification & Conjuncts",
      orderIndex: 5,
      summaryBn: "পূর্ণমাত্রা (৩২টি), অর্ধমাত্রা (৮টি), মাত্রাহীন (১০টি); কার ও ফলা; যুক্তাক্ষর বিশ্লেষণ (ক্ষ = ক্+ষ্, জ্ঞ = জ্+ঞ, হ্ম = হ্+ম্)।",
      keyConcepts: ["পূর্ণমাত্রার বর্ণ: ৩২টি", "অর্ধমাত্রার বর্ণ: ৮টি", "মাত্রাহীন বর্ণ: ১০টি", "স্বরবর্ণের সংক্ষিপ্ত রূপ: কার (১০টি, 'অ'-এর কার নেই)", "ব্যঞ্জনবর্ণের সংক্ষিপ্ত রূপ: ফলা", "ক্ষ = ক্ + ষ্", "জ্ঞ = জ্ + ঞ", "হ্ম = হ্ + ম্"]
    }
  ],
  content: {
    introduction: "বাংলা ব্যাকরণের মূল ভিত্তি হলো ধ্বনি ও বর্ণ। মানুষের বাগযন্ত্রের সাহায্যে উচ্চারিত অর্থবোধক আওয়াজকে ধ্বনি বলে এবং এর লিখিত রূপকে বর্ণ বলা হয়। বাংলা লিপিতে মোট ৫০টি বর্ণ রয়েছে।",
    sections: [
      {
        heading: "১. ধ্বনি ও বর্ণের মূল কনসেপ্ট ও স্বরধ্বনি",
        body: [
          "১. ধ্বনি: মানুষের বাগযন্ত্রের (কণ্ঠ, তালু, দাঁত, ঠোঁট ইত্যাদি) সাহায্যে উচ্চারিত অর্থবোধক আওয়াজকে ধ্বনি বলে। এটি ভাষার ক্ষুদ্রতম একক।",
          "২. বর্ণ: ধ্বনির লিখিত রূপ বা সাংকেতিক চিহ্নকে বর্ণ বলা হয়।",
          "৩. বর্ণমালা: বাংলা ভাষায় মোট বর্ণ ৫০টি। এর মধ্যে স্বরবর্ণ ১১টি এবং ব্যঞ্জনবর্ণ ৩৯টি।",
          "৪. হ্রস্বস্বর ও দীর্ঘস্বর: হ্রস্বস্বর ৪টি (অ, ই, উ, ঋ) এবং দীর্ঘস্বর ৭টি (আ, ঈ, ঊ, এ, ঐ, ও, ঔ)।",
          "৫. মৌলিক স্বরধ্বনি: যে স্বরধ্বনিকে আর ভাঙা যায় না — সংখ্যায় ৭টি (অ, আ, ই, উ, এ, ও, অ্যা)।",
          "৬. যৌগিক স্বরবর্ণ: ২টি (ঐ = ও + ই, ঔ = ও + উ)। তবে বাংলায় উচ্চারিত যৌগিক স্বরধ্বনি ২৫টি।"
        ],
        keyPoints: [
          "ভাষার ক্ষুদ্রতম একক = ধ্বনি।",
          "বাংলায় মোট বর্ণ ৫০টি (স্বরবর্ণ ১১টি, ব্যঞ্জনবর্ণ ৩৯টি)।",
          "মৌলিক স্বরধ্বনি ৭টি, যৌগিক স্বরবর্ণ ২টি, উচ্চারিত যৌগিক স্বরধ্বনি ২৫টি।"
        ]
      },
      {
        heading: "২. ব্যঞ্জনধ্বনির উচ্চারণ স্থান ও বিশেষ বৈশিষ্ট্য",
        body: [
          "৭. স্পর্শ বর্ণ: ক থেকে ম পর্যন্ত ২৫টি বর্ণকে স্পর্শ বর্ণ বলে। এদের ৫টি বর্গে ভাগ করা হয় (ক-বর্গ, চ-বর্গ, ট-বর্গ, ত-বর্গ, প-বর্গ)।",
          "৮. অল্পপ্রাণ ও মহাপ্রাণ: বাতাসের চাপ কম থাকলে অল্পপ্রাণ (১ম ও ৩য় বর্ণ: ক, গ, চ, জ); বাতাসের চাপ বেশি থাকলে মহাপ্রাণ (২য় ও ৪র্থ বর্ণ: খ, ঘ, ছ, ঝ)।",
          "৯. অঘোষ ও ঘোষ: স্বরতন্ত্রী না কাঁপলে অঘোষ (১ম ও ২য় বর্ণ: ক, খ, চ, ছ); স্বরতন্ত্রী অনুরণিত হলে ঘোষ (৩য়, ৪র্থ ও ৫ম বর্ণ: গ, ঘ, ঙ)।",
          "১০. নাসিক্য ধ্বনি: উচ্চারণের সময় বাতাস নাক দিয়ে বের হয় (ঙ, ঞ, ণ, ন, ম)।",
          "১১. উষ্ম/শিস বর্ণ: শ, ষ, স, হ (উষ্ম অর্থ গরম বা শ্বাসবায়ু)।",
          "১২. অন্তঃস্থ বর্ণ: য, র, ল, ব।",
          "১৩. কম্পিত ও পার্শ্বিক ধ্বনি: 'র' হলো কম্পিত ধ্বনি, 'ল' হলো পার্শ্বিক ধ্বনি।",
          "১৪. তাড়নজাত ধ্বনি: 'ড়' এবং 'ঢ়'।",
          "১৫. অযোগবাহ বর্ণ: ং (অনুস্বার) এবং ঃ (বিসর্গ)। এরা অন্য বর্ণের আশ্রয় ছাড়া স্বাধীনভাবে বসতে পারে না।"
        ],
        keyPoints: [
          "স্পর্শ বর্ণ ২৫টি (৫টি বর্গে বিভক্ত)।",
          "কম্পিত ধ্বনি: র; পার্শ্বিক ধ্বনি: ল; তাড়নজাত ধ্বনি: ড়, ঢ়।",
          "অযোগবাহ বর্ণ: ং এবং ঃ।",
          "মাত্রার হিসাব: পূর্ণমাত্রা ৩২টি, অর্ধমাত্রা ৮টি, মাত্রাহীন ১০টি।"
        ]
      }
    ],
    examTips: [
      "বাংলায় মৌলিক স্বরধ্বনি কয়টি? উত্তর: ৭টি (অ, আ, ই, উ, এ, ও, অ্যা)।",
      "বাংলা বর্ণমালায় মাত্রাহীন বর্ণ কয়টি? উত্তর: ১০টি।",
      "কোন স্বরবর্ণের নিজস্ব কোনো 'কার' চিহ্ন নেই? উত্তর: অ (একে বিলীন বর্ণও বলা হয়)।",
      "ক্ষ যুক্তাক্ষরটি কোন দুটি বর্ণের মিলনে গঠিত? উত্তর: ক্ + ষ্।"
    ],
    quickRevisionPoints: [
      "পূর্ণমাত্রা: ৩২টি (স্বরবর্ণ ৬টি + ব্যঞ্জনবর্ণ ২৬টি)।",
      "অর্ধমাত্রা: ৮টি (স্বরবর্ণ ১টি 'ঋ' + ব্যঞ্জনবর্ণ ৭টি)।",
      "মাত্রাহীন: ১০টি (স্বরবর্ণ ৪টি 'এ, ঐ, ও, ঔ' + ব্যঞ্জনবর্ণ ৬টি)।",
      "জ্ঞ = জ্ + ঞ; হ্ম = হ্ + ম্; ক্ষ = ক্ + ষ্।"
    ],
    oneLiners: [
      "মানুষের মুখনিঃসৃত অর্থপূর্ণ ক্ষুদ্রতম একককে ধ্বনি বলা হয়।",
      "বাংলা বর্ণমালায় মোট ৫০টি বর্ণ রয়েছে (১১টি স্বরবর্ণ এবং ৩৯টি ব্যঞ্জনবর্ণ)।",
      "মৌলিক স্বরধ্বনি হলো মোট ৭টি (অ, আ, ই, উ, এ, ও, অ্যা)।",
      "বাংলায় হ্রস্বস্বর ৪টি (অ, ই, উ, ঋ) এবং দীর্ঘস্বর ৭টি।",
      "যৌগিক স্বরবর্ণ ২টি (ঐ ও ঔ), কিন্তু উচ্চারিত যৌগিক স্বরধ্বনি মোট ২৫টি।",
      "ক থেকে ম পর্যন্ত ২৫টি বর্ণকে স্পর্শ বর্ণ বা বর্গীয় বর্ণ বলা হয়।",
      "বর্গের ১ম ও ৩য় বর্ণ অল্পপ্রাণ এবং ২য় ও ৪র্থ বর্ণ মহাপ্রাণ ধ্বনি।",
      "বর্গের ১ম ও ২য় বর্ণ অঘোষ এবং ৩য়, ৪র্থ ও ৫ম বর্ণ ঘোষ ধ্বনি।",
      "শ, ষ, স, হ—এই চারটি বর্ণকে উষ্ম বর্ণ বা শিস ধ্বনি বলে।",
      "বাংলায় 'র' হলো কম্পিত ধ্বনি এবং 'ল' হলো পার্শ্বিক ধ্বনি।",
      "'ড়' এবং 'ঢ়' হলো তাড়নজাত ধ্বনি।",
      "অনুস্বার (ং) ও বিসর্গ (ঃ) কে অযোগবাহ বা পরাশ্রয়ী বর্ণ বলে।"
    ],
    saqs: [
      {
        id: "bengali_ch1_saq1",
        questionBn: "ধ্বনি ও বর্ণের মধ্যে মৌলিক পার্থক্য কী?",
        answerBn: "বাগযন্ত্রের সাহায্যে উচ্চারিত শ্রবণযোগ্য অর্থবোধক রূপ হলো 'ধ্বনি', আর সেই ধ্বনিকে লিখে প্রকাশ করার দৃশ্যমান সাংকেতিক প্রতীক বা রূপ হলো 'বর্ণ'। অর্থাৎ ধ্বনি শ্রুতিগ্রাহ্য এবং বর্ণ দৃষ্টিগ্রাহ্য।"
      },
      {
        id: "bengali_ch1_saq2",
        questionBn: "মৌলিক স্বরধ্বনি ও যৌগিক স্বরধ্বনির মধ্যে পার্থক্য কী?",
        answerBn: "যেসব স্বরধ্বনি অবিভাজ্য এবং উচ্চারণের সময় অন্য কোনো স্বরধ্বনির সাহায্য লাগে না, তাদের মৌলিক স্বরধ্বনি (৭টি) বলে। অন্যদিকে দুটি স্বরধ্বনির সংমিশ্রণে গঠিত স্বরধ্বনিকে যৌগিক স্বরধ্বনি বলে (যেমন: ঐ = ও+ই, ঔ = ও+উ)।"
      },
      {
        id: "bengali_ch1_saq3",
        questionBn: "অল্পপ্রাণ ও মহাপ্রাণ ধ্বনির পার্থক্য কী?",
        answerBn: "উচ্চারণের সময় ফুসফুস থেকে নির্গত বাতাসের চাপ কম থাকলে অল্পপ্রাণ (বর্গের ১ম ও ৩য় বর্ণ: ক, গ) এবং বাতাসের চাপ বা হ-কার ধ্বনি বেশি থাকলে মহাপ্রাণ (বর্গের ২য় ও ৪র্থ বর্ণ: খ, ঘ) হয়।"
      },
      {
        id: "bengali_ch1_saq4",
        questionBn: "অযোগবাহ বর্ণ কাকে বলে এবং এরা কারা?",
        answerBn: "যেসব বর্ণ অন্য কোনো বর্ণের আশ্রয় ছাড়া নিজে স্বতন্ত্রভাবে ব্যবহৃত হতে বা শব্দ গঠন করতে পারে না, তাদের অযোগবাহ বা পরাশ্রয়ী বর্ণ বলে। বাংলায় অযোগবাহ বর্ণ দুটি: অনুস্বার (ং) এবং বিসর্গ (ঃ)।"
      }
    ]
  }
};

export const BENGALI_CH1_QUESTIONS: Question[] = [
  {
    id: "vol2_ch1_q1",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub1",
    questionBn: "ভাষার ক্ষুদ্রতম একক কী?",
    options: ["শব্দ", "বাক্য", "ধ্বনি", "বর্ণ"],
    correctIndex: 2,
    explanationBn: "মানুষের বাগযন্ত্র থেকে নির্গত অর্থবোধক ক্ষুদ্রতম আওয়াজকে ধ্বনি বলে।",
    difficulty: "easy",
    tags: ["ধ্বনি", "ভাষার একক"]
  },
  {
    id: "vol2_ch1_q2",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub1",
    questionBn: "ধ্বনির লিখিত রূপকে কী বলা হয়?",
    options: ["বর্ণ", "অক্ষর", "শব্দ", "বাক্য"],
    correctIndex: 0,
    explanationBn: "ধ্বনি মুখে উচ্চারিত হয় আর তার দৃশ্যমান লিখিত প্রতীক বা চিহ্নকে বর্ণ বলে।",
    difficulty: "easy",
    tags: ["বর্ণ", "লিখিত রূপ"]
  },
  {
    id: "vol2_ch1_q3",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub1",
    questionBn: "বাংলা ভাষায় মোট বর্ণের সংখ্যা কয়টি?",
    options: ["১১টি", "৩৯টি", "৫০টি", "৫২টি"],
    correctIndex: 2,
    explanationBn: "বাংলা লিপিতে ১১টি স্বরবর্ণ এবং ৩৯টি ব্যঞ্জনবর্ণ মিলিয়ে মোট ৫০টি বর্ণ রয়েছে।",
    difficulty: "easy",
    tags: ["৫০টি বর্ণ", "বর্ণমালা"]
  },
  {
    id: "vol2_ch1_q4",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub1",
    questionBn: "বাংলা বর্ণমালায় স্বরবর্ণের সংখ্যা কয়টি?",
    options: ["১০টি", "১১টি", "১২টি", "১৩টি"],
    correctIndex: 1,
    explanationBn: "বাংলায় মোট ১১টি স্বরবর্ণ রয়েছে (অ, আ, ই, ঈ, উ, ঊ, ঋ, এ, ঐ, ও, ঔ)।",
    difficulty: "easy",
    tags: ["স্বরবর্ণ", "১১টি"]
  },
  {
    id: "vol2_ch1_q5",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub1",
    questionBn: "নিচের কোনটি মৌলিক স্বরধ্বনি নয়?",
    options: ["অ", "আ", "ই", "ঈ"],
    correctIndex: 3,
    explanationBn: "'ঈ' কোনো মৌলিক স্বরধ্বনি নয়; বাংলায় মৌলিক স্বরধ্বনি ৭টি (অ, আ, ই, উ, এ, ও, অ্যা)।",
    difficulty: "easy",
    tags: ["মৌলিক স্বরধ্বনি", "ঈ"]
  },
  {
    id: "vol2_ch1_q6",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub1",
    questionBn: "বাংলায় মৌলিক স্বরধ্বনির সংখ্যা কয়টি?",
    options: ["৬টি", "৭টি", "৮টি", "৯টি"],
    correctIndex: 1,
    explanationBn: "বাংলা উচ্চারণে মৌলিক স্বরধ্বনি ৭টি: অ, আ, ই, উ, এ, ও, অ্যা।",
    difficulty: "easy",
    tags: ["৭টি", "মৌলিক স্বরধ্বনি"]
  },
  {
    id: "vol2_ch1_q7",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub1",
    questionBn: "'অ্যা' কোন ধরনের ধ্বনি?",
    options: ["মৌলিক স্বরধ্বনি", "যৌগিক স্বরধ্বনি", "ব্যঞ্জনধ্বনি", "অনুনাসিক ধ্বনি"],
    correctIndex: 0,
    explanationBn: "'অ্যা' একটি মৌলিক স্বরধ্বনি, যার কোনো পৃথক লিখিত বর্ণরূপ বাংলা লিপিতে নেই।",
    difficulty: "easy",
    tags: ["অ্যা", "মৌলিক স্বরধ্বনি"]
  },
  {
    id: "vol2_ch1_q8",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub1",
    questionBn: "বাংলা বর্ণমালায় যৌগিক স্বরবর্ণ কয়টি?",
    options: ["২টি", "২৫টি", "৭টি", "১১টি"],
    correctIndex: 0,
    explanationBn: "বর্ণমালায় লিখিত যৌগিক স্বরবর্ণ ২টি (ঐ এবং ঔ)। কিন্তু উচ্চারিত যৌগিক স্বরধ্বনি ২৫টি।",
    difficulty: "easy",
    tags: ["যৌগিক স্বরবর্ণ", "ঐ এবং ঔ"]
  },
  {
    id: "vol2_ch1_q9",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub1",
    questionBn: "নিচের কোনটি যৌগিক স্বরবর্ণের উদাহরণ?",
    options: ["আ", "ঐ", "ঊ", "ঋ"],
    correctIndex: 1,
    explanationBn: "'ঐ' হলো যৌগিক স্বরবর্ণ, যা 'ও' এবং 'ই'-এর সংযোগে গঠিত (ও + ই = ঐ)।",
    difficulty: "easy",
    tags: ["ঐ", "যৌগিক স্বরবর্ণ"]
  },
  {
    id: "vol2_ch1_q10",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub2",
    questionBn: "'ক' থেকে 'ম' পর্যন্ত ২৫টি বর্ণকে কী বলা হয়?",
    options: ["উষ্ম বর্ণ", "স্পর্শ বর্ণ", "অন্তঃস্থ বর্ণ", "অনুনাসিক বর্ণ"],
    correctIndex: 1,
    explanationBn: "উচ্চারণের সময় বাগযন্ত্রের কোথাও না কোথাও স্পর্শ ঘটে বলে ক থেকে ম পর্যন্ত ২৫টি বর্ণকে স্পর্শ বর্ণ বলে।",
    difficulty: "easy",
    tags: ["স্পর্শ বর্ণ", "২৫টি"]
  },
  {
    id: "vol2_ch1_q11",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub2",
    questionBn: "কণ্ঠ্য বর্ণ কোনগুলি?",
    options: ["ক, খ, গ, ঘ, ঙ", "চ, ছ, জ, ঝ, ঞ", "ট, ঠ, ড, ঢ, ণ", "ত, থ, দ, ধ, ন"],
    correctIndex: 0,
    explanationBn: "ক-বর্গের বর্ণগুলির উচ্চারণ স্থান কণ্ঠ বা জিহ্বামূল, তাই এরা কণ্ঠ্য বর্ণ।",
    difficulty: "easy",
    tags: ["কণ্ঠ্য বর্ণ", "ক-বর্গ"]
  },
  {
    id: "vol2_ch1_q12",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub2",
    questionBn: "তালব্য বর্ণ কোনগুলি?",
    options: ["ক-বর্গ", "চ-বর্গ", "ট-বর্গ", "প-বর্গ"],
    correctIndex: 1,
    explanationBn: "চ-বর্গের (চ, ছ, জ, ঝ, ঞ) বর্ণগুলি উচ্চারণের সময় জিহ্বা তালু স্পর্শ করে, তাই এরা তালব্য বর্ণ।",
    difficulty: "easy",
    tags: ["তালব্য বর্ণ", "চ-বর্গ"]
  },
  {
    id: "vol2_ch1_q13",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub2",
    questionBn: "মূর্ধন্য বর্ণ কোন বর্গের অন্তর্গত?",
    options: ["চ-বর্গ", "ট-বর্গ", "ত-বর্গ", "প-বর্গ"],
    correctIndex: 1,
    explanationBn: "ট-বর্গের (ট, ঠ, ড, ঢ, ণ) বর্ণগুলির উচ্চারণ স্থান মূর্ধা, তাই এরা মূর্ধন্য বর্ণ।",
    difficulty: "easy",
    tags: ["মূর্ধন্য বর্ণ", "ট-বর্গ"]
  },
  {
    id: "vol2_ch1_q14",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub2",
    questionBn: "নিচের কোনটি দন্ত্য বর্ণ?",
    options: ["প", "চ", "ত", "ক"],
    correctIndex: 2,
    explanationBn: "ত-বর্গের বর্ণগুলি দাঁতের গোড়ার সাহায্যে উচ্চারিত হওয়ায় 'ত' একটি দন্ত্য বর্ণ।",
    difficulty: "easy",
    tags: ["দন্ত্য বর্ণ", "ত"]
  },
  {
    id: "vol2_ch1_q15",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub2",
    questionBn: "ওষ্ঠ্য বর্ণ কোনগুলি?",
    options: ["প, ফ, ব, ভ, ম", "ত, থ, দ, ধ, ন", "চ, ছ, জ, ঝ, ঞ", "য, র, ল, ব"],
    correctIndex: 0,
    explanationBn: "প-বর্গের বর্ণগুলি উচ্চারণে দুই ঠোঁটের (ওষ্ঠ ও অধর) প্রয়োজন হয়, তাই এরা ওষ্ঠ্য বর্ণ।",
    difficulty: "easy",
    tags: ["ওষ্ঠ্য বর্ণ", "প-বর্গ"]
  },
  {
    id: "vol2_ch1_q16",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub3",
    questionBn: "যে ব্যঞ্জনধ্বনি উচ্চারণের সময় বাতাসের আধিক্য থাকে না, তাকে কী বলে?",
    options: ["মহাপ্রাণ ধ্বনি", "অল্পপ্রাণ ধ্বনি", "ঘোষ ধ্বনি", "অঘোষ ধ্বনি"],
    correctIndex: 1,
    explanationBn: "শ্বাসবায়ুর চাপ কম থাকলে তাকে অল্পপ্রাণ ধ্বনি বলা হয় (বর্গের ১ম ও ৩য় বর্ণ)।",
    difficulty: "easy",
    tags: ["অল্পপ্রাণ", "বাতাসের চাপ"]
  },
  {
    id: "vol2_ch1_q17",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub3",
    questionBn: "নিচের কোনটি অল্পপ্রাণ ধ্বনির উদাহরণ?",
    options: ["খ", "ঘ", "ক", "ছ"],
    correctIndex: 2,
    explanationBn: "'ক' বর্গের ১ম বর্ণ হওয়ায় এটি অল্পপ্রাণ ধ্বনি।",
    difficulty: "easy",
    tags: ["অল্পপ্রাণ", "ক"]
  },
  {
    id: "vol2_ch1_q18",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub3",
    questionBn: "বর্গের দ্বিতীয় ও চতুর্থ বর্ণকে কী বলা হয়?",
    options: ["অল্পপ্রাণ ধ্বনি", "মহাপ্রাণ ধ্বনি", "নাসিক্য ধ্বনি", "উষ্ম ধ্বনি"],
    correctIndex: 1,
    explanationBn: "বর্গের ২য় ও ৪র্থ বর্ণ (যেমন খ, ঘ, ছ, ঝ) উচ্চারণে শ্বাসবায়ুর চাপ বেশি থাকে বলে এদের মহাপ্রাণ ধ্বনি বলে।",
    difficulty: "easy",
    tags: ["মহাপ্রাণ", "২য় ও ৪র্থ বর্ণ"]
  },
  {
    id: "vol2_ch1_q19",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub3",
    questionBn: "নিচের কোনটি মহাপ্রাণ ধ্বনি?",
    options: ["গ", "ঘ", "চ", "জ"],
    correctIndex: 1,
    explanationBn: "'ঘ' ক-বর্গের ৪র্থ বর্ণ হওয়ায় এটি মহাপ্রাণ ধ্বনি।",
    difficulty: "easy",
    tags: ["মহাপ্রাণ", "ঘ"]
  },
  {
    id: "vol2_ch1_q20",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub3",
    questionBn: "উচ্চারণের সময় স্বরতন্ত্রী অনুরণিত না হলে তাকে কী বলে?",
    options: ["ঘোষ ধ্বনি", "অঘোষ ধ্বনি", "অল্পপ্রাণ ধ্বনি", "মহাপ্রাণ ধ্বনি"],
    correctIndex: 1,
    explanationBn: "স্বরতন্ত্রী অনুরণিত বা কম্পিত না হলে তাকে অঘোষ ধ্বনি বলে (বর্গের ১ম ও ২য় বর্ণ)।",
    difficulty: "easy",
    tags: ["অঘোষ", "স্বরতন্ত্রী"]
  },
  {
    id: "vol2_ch1_q21",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub3",
    questionBn: "বর্গের প্রথম ও দ্বিতীয় বর্ণ হলো—",
    options: ["ঘোষ ধ্বনি", "অঘোষ ধ্বনি", "নাসিক্য ধ্বনি", "উষ্ম ধ্বনি"],
    correctIndex: 1,
    explanationBn: "বর্গের ১ম ও ২য় বর্ণ (ক, খ, চ, ছ ইত্যাদি) অঘোষ ধ্বনি।",
    difficulty: "easy",
    tags: ["অঘোষ", "১ম ও ২য় বর্ণ"]
  },
  {
    id: "vol2_ch1_q22",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub3",
    questionBn: "নিচের কোনটি ঘোষ ধ্বনির উদাহরণ?",
    options: ["ক", "চ", "গ", "ট"],
    correctIndex: 2,
    explanationBn: "বর্গের ৩য়, ৪র্থ ও ৫ম বর্ণ ঘোষ ধ্বনি; তাই 'গ' একটি ঘোষ ধ্বনি।",
    difficulty: "easy",
    tags: ["ঘোষ ধ্বনি", "গ"]
  },
  {
    id: "vol2_ch1_q23",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub3",
    questionBn: "নাসিক্য ধ্বনি বা অনুনাসিক বর্ণ কয়টি?",
    options: ["৩টি", "৪টি", "৫টি", "৬টি"],
    correctIndex: 2,
    explanationBn: "বর্গের পঞ্চম বর্ণগুলি নাসিক্য বর্ণ — ৫টি (ঙ, ঞ, ণ, ন, ম)।",
    difficulty: "easy",
    tags: ["নাসিক্য ধ্বনি", "৫টি"]
  },
  {
    id: "vol2_ch1_q24",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub4",
    questionBn: "উষ্ম বর্ণ কোনগুলি?",
    options: ["শ, ষ, স, হ", "য, র, ল, ব", "ড়, ঢ়, য়, ৎ", "ং, ঃ, ঁ"],
    correctIndex: 0,
    explanationBn: "উচ্চারণের সময় শ্বাসবায়ুর ঘর্ষণ বা শিস সৃষ্টি হয় বলে শ, ষ, স, হ-কে উষ্ম বা শিস বর্ণ বলে।",
    difficulty: "easy",
    tags: ["উষ্ম বর্ণ", "শ ষ স হ"]
  },
  {
    id: "vol2_ch1_q25",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub4",
    questionBn: "অন্তঃস্থ বর্ণ কোনগুলি?",
    options: ["শ, ষ, স, হ", "য, র, ল, ব", "ক, খ, গ, ঘ", "প, ফ, ব, ভ"],
    correctIndex: 1,
    explanationBn: "স্পর্শ বর্ণ ও উষ্ম বর্ণের মাঝে এদের অবস্থান হওয়ায় য, র, ল, ব-কে অন্তঃস্থ বর্ণ বলে।",
    difficulty: "easy",
    tags: ["অন্তঃস্থ বর্ণ", "য র ল ব"]
  },
  {
    id: "vol2_ch1_q26",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub4",
    questionBn: "নিচের কোনটি তাড়নজাত ধ্বনি?",
    options: ["র", "ল", "ড়", "শ"],
    correctIndex: 2,
    explanationBn: "জিহ্বার অগ্রভাগ দিয়ে মূর্ধায় আঘাত বা তাড়না করে উচ্চারিত হয় বলে ড় ও ঢ় তাড়নজাত ধ্বনি।",
    difficulty: "easy",
    tags: ["তাড়নজাত", "ড়"]
  },
  {
    id: "vol2_ch1_q27",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub4",
    questionBn: "'র' বর্ণটিকে কী বলা হয়?",
    options: ["পার্শ্বিক ধ্বনি", "কম্পিত ধ্বনি", "তাড়নজাত ধ্বনি", "উষ্ম ধ্বনি"],
    correctIndex: 1,
    explanationBn: "'র' উচ্চারণের সময় জিহ্বার অগ্রভাগ কেঁপে ওঠে, তাই একে কম্পিত বা ঘূর্ণিত ধ্বনি বলে।",
    difficulty: "easy",
    tags: ["কম্পিত ধ্বনি", "র"]
  },
  {
    id: "vol2_ch1_q28",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub4",
    questionBn: "'ল' বর্ণটিকে কী বলা হয়?",
    options: ["কম্পিত ধ্বনি", "তাড়নজাত ধ্বনি", "পার্শ্বিক ধ্বনি", "অন্তঃস্থ ধ্বনি"],
    correctIndex: 2,
    explanationBn: "'ল' উচ্চারণের সময় বাতাস জিহ্বার দুই পাশ দিয়ে বের হয়ে যায়, তাই একে পার্শ্বিক ধ্বনি বলে।",
    difficulty: "easy",
    tags: ["পার্শ্বিক ধ্বনি", "ল"]
  },
  {
    id: "vol2_ch1_q29",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub4",
    questionBn: "অযোগবাহ বর্ণ কয়টি ও কী কী?",
    options: ["২টি (ং, ঃ)", "৩টি (ং, ঃ, ঁ)", "৪টি (য, র, ল, ব)", "২টি (ড়, ঢ়)"],
    correctIndex: 0,
    explanationBn: "অন্য বর্ণের সংযোগ ছাড়া স্বাধীনভাবে বসতে পারে না বলে ং (অনুস্বার) এবং ঃ (বিসর্গ)-কে অযোগবাহ বর্ণ বলে।",
    difficulty: "easy",
    tags: ["অযোগবাহ বর্ণ", "২টি"]
  },
  {
    id: "vol2_ch1_q30",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub4",
    questionBn: "নিচের কোনটি অযোগবাহ বর্ণ?",
    options: ["ঁ (চন্দ্রবিন্দু)", "ঃ (বিসর্গ)", "ৎ (খণ্ড-ত)", "য়"],
    correctIndex: 1,
    explanationBn: "বিসর্গ (ঃ) একটি অযোগবাহ বর্ণ।",
    difficulty: "easy",
    tags: ["বিসর্গ", "অযোগবাহ"]
  },
  {
    id: "vol2_ch1_q31",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub5",
    questionBn: "খণ্ড-ত (ৎ) আসলে কোন বর্ণের রূপভেদ?",
    options: ["দ", "ধ", "ত", "থ"],
    correctIndex: 2,
    explanationBn: "'ৎ' হলো স্বরধ্বনিহীন 'ত্'-এর একটি স্বতন্ত্র খণ্ডিত রূপ।",
    difficulty: "easy",
    tags: ["খণ্ড-ত", "ত"]
  },
  {
    id: "vol2_ch1_q32",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub5",
    questionBn: "স্বরবর্ণের সংক্ষিপ্ত রূপকে কী বলা হয়?",
    options: ["ফলা", "কার", "মাত্রা", "যুক্তাক্ষর"],
    correctIndex: 1,
    explanationBn: "ব্যঞ্জনবর্ণের সঙ্গে যুক্ত হওয়ার সময় স্বরবর্ণের সংক্ষিপ্ত রূপকে 'কার' বলা হয় (যেমন আকার, ইকার)।",
    difficulty: "easy",
    tags: ["কার", "স্বরবর্ণ"]
  },
  {
    id: "vol2_ch1_q33",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub5",
    questionBn: "ব্যঞ্জনবর্ণের সংক্ষিপ্ত রূপকে কী বলা হয়?",
    options: ["কার", "ফলা", "মাত্রা", "রেফ"],
    correctIndex: 1,
    explanationBn: "অন্য বর্ণের সঙ্গে যুক্ত হওয়ার সময় ব্যঞ্জনবর্ণের সংক্ষিপ্ত রূপকে 'ফলা' বলা হয় (যেমন য-ফলা, র-ফলা)।",
    difficulty: "easy",
    tags: ["ফলা", "ব্যঞ্জনবর্ণ"]
  },
  {
    id: "vol2_ch1_q34",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub5",
    questionBn: "বাংলা বর্ণমালায় পূর্ণমাত্রার বর্ণ কয়টি?",
    options: ["৮টি", "১০টি", "৩২টি", "৩৯টি"],
    correctIndex: 2,
    explanationBn: "বাংলা বর্ণমালায় মোট ৩২টি পূর্ণমাত্রার বর্ণ রয়েছে (স্বরবর্ণ ৬টি + ব্যঞ্জনবর্ণ ২৬টি)।",
    difficulty: "easy",
    tags: ["পূর্ণমাত্রা", "৩২টি"]
  },
  {
    id: "vol2_ch1_q35",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub5",
    questionBn: "বাংলা বর্ণমালায় অর্ধমাত্রার বর্ণ কয়টি?",
    options: ["৭টি", "৮টি", "৯টি", "১০টি"],
    correctIndex: 1,
    explanationBn: "বাংলায় অর্ধমাত্রার বর্ণ মোট ৮টি (স্বরবর্ণ ১টি 'ঋ' এবং ব্যঞ্জনবর্ণ ৭টি 'খ, গ, ণ, থ, ধ, প, শ')।",
    difficulty: "easy",
    tags: ["অর্ধমাত্রা", "৮টি"]
  },
  {
    id: "vol2_ch1_q36",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub5",
    questionBn: "মাত্রাহীন বর্ণ কয়টি?",
    options: ["৮টি", "৯টি", "১০টি", "১১টি"],
    correctIndex: 2,
    explanationBn: "বাংলা বর্ণমালায় মাত্রাহীন বর্ণ মোট ১০টি (স্বরবর্ণ ৪টি 'এ, ঐ, ও, ঔ' এবং ব্যঞ্জনবর্ণ ৬টি 'ঙ, ঞ, ৎ, ং, ঃ, ঁ')।",
    difficulty: "easy",
    tags: ["মাত্রাহীন বর্ণ", "১০টি"]
  },
  {
    id: "vol2_ch1_q37",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub5",
    questionBn: "'ক্ষ' যুক্তাক্ষরটি কোন কোন বর্ণ মিলে গঠিত?",
    options: ["ক্ + খ", "ক্ + ষ", "খ্ + ষ", "ক্ + ম"],
    correctIndex: 1,
    explanationBn: "ক্ষ যুক্তবর্ণটি ক্ এবং মূর্ধন্য-ষ্ এর মিলনে গঠিত (ক্ + ষ্ = ক্ষ)।",
    difficulty: "easy",
    tags: ["ক্ষ", "যুক্তাক্ষর"]
  },
  {
    id: "vol2_ch1_q38",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub5",
    questionBn: "'জ্ঞ' যুক্তাক্ষরটি কোন কোন বর্ণ মিলে গঠিত?",
    options: ["জ্ + ঞ", "ঞ + জ", "গ্ + ঞ", "জ্ + ন"],
    correctIndex: 0,
    explanationBn: "জ্ঞ যুক্তবর্ণটি বর্গীয়-জ্ এবং ঞ এর মিলনে গঠিত (জ্ + ঞ = জ্ঞ)।",
    difficulty: "easy",
    tags: ["জ্ঞ", "যুক্তাক্ষর"]
  },
  {
    id: "vol2_ch1_q39",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub1",
    questionBn: "হ্রস্বস্বর উচ্চারণে কেমন সময় লাগে?",
    options: ["বেশি সময়", "কম সময়", "দ্বিগুণ সময়", "কোনো সময় লাগে না"],
    correctIndex: 1,
    explanationBn: "হ্রস্বস্বর (অ, ই, উ, ঋ) উচ্চারণে তুলনামূলক কম সময় লাগে।",
    difficulty: "easy",
    tags: ["হ্রস্বস্বর", "উচ্চারণকাল"]
  },
  {
    id: "vol2_ch1_q40",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub1",
    questionBn: "নিচের কোনটি দীর্ঘস্বরের উদাহরণ নয়?",
    options: ["আ", "ঈ", "উ", "ঊ"],
    correctIndex: 2,
    explanationBn: "'উ' হলো হ্রস্বস্বর, বাকিগুলো দীর্ঘস্বর।",
    difficulty: "easy",
    tags: ["দীর্ঘস্বর", "উ"]
  },
  {
    id: "vol2_ch1_q41",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub1",
    questionBn: "'ঐ' বর্ণটি গঠিত হয়েছে—",
    options: ["ও + উ", "ও + ই", "অ + ই", "আ + ই"],
    correctIndex: 1,
    explanationBn: "'ঐ' যৌগিক স্বরবর্ণটি ও এবং ই স্বরধ্বনির মিলনে গঠিত (ও + ই = ঐ)।",
    difficulty: "easy",
    tags: ["ঐ", "যৌগিক স্বর"]
  },
  {
    id: "vol2_ch1_q42",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub1",
    questionBn: "'ঔ' বর্ণটি গঠিত হয়েছে—",
    options: ["ও + ই", "ও + উ", "অ + উ", "আ + উ"],
    correctIndex: 1,
    explanationBn: "'ঔ' যৌগিক স্বরবর্ণটি ও এবং উ স্বরধ্বনির মিলনে গঠিত (ও + উ = ঔ)।",
    difficulty: "easy",
    tags: ["ঔ", "যৌগিক স্বর"]
  },
  {
    id: "vol2_ch1_q43",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub5",
    questionBn: "কোন স্বরবর্ণের নিজস্ব কোনো 'কার' চিহ্ন নেই?",
    options: ["অ", "আ", "ই", "উ"],
    correctIndex: 0,
    explanationBn: "'অ' স্বরবর্ণটির কোনো নিজস্ব কার চিহ্ন নেই; এটি ব্যঞ্জনবর্ণের মধ্যে বিলীন থাকে (বিলীন বর্ণ)।",
    difficulty: "easy",
    tags: ["কার চিহ্ন", "অ"]
  },
  {
    id: "vol2_ch1_q44",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub4",
    questionBn: "'উষ্ম' শব্দের অর্থ কী?",
    options: ["ঠান্ডা", "গরম বা শ্বাস", "কম্পন", "ঘর্ষণ"],
    correctIndex: 1,
    explanationBn: "উষ্ম শব্দের অর্থ গরম বা শ্বাসবায়ু।",
    difficulty: "easy",
    tags: ["উষ্ম", "অর্থ"]
  },
  {
    id: "vol2_ch1_q45",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub2",
    questionBn: "স্পর্শ বর্ণগুলোকে কয়টি বর্গে ভাগ করা হয়েছে?",
    options: ["৪টি", "৫টি", "৬টি", "৭টি"],
    correctIndex: 1,
    explanationBn: "স্পর্শ বর্ণগুলিকে ৫টি বর্গে ভাগ করা হয়েছে: ক, চ, ট, ত, প।",
    difficulty: "easy",
    tags: ["৫টি বর্গ", "স্পর্শ বর্ণ"]
  },
  {
    id: "vol2_ch1_q46",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub4",
    questionBn: "'হ' কোন ধরনের ধ্বনি?",
    options: ["অঘোষ, মহাপ্রাণ", "ঘোষ, মহাপ্রাণ", "ঘোষ, অল্পপ্রাণ", "অঘোষ, অল্পপ্রাণ"],
    correctIndex: 1,
    explanationBn: "'হ' একটি ঘোষ এবং মহাপ্রাণ কণ্ঠনালীয় উষ্ম ধ্বনি।",
    difficulty: "easy",
    tags: ["হ", "ঘোষ মহাপ্রাণ"]
  },
  {
    id: "vol2_ch1_q47",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub2",
    questionBn: "'ম' বর্ণটির উচ্চারণ স্থান কোনটি?",
    options: ["কণ্ঠ", "তালু", "মূর্ধা", "ওষ্ঠ"],
    correctIndex: 3,
    explanationBn: "'ম' প-বর্গের বর্ণ হওয়ায় এর উচ্চারণ স্থান ওষ্ঠ।",
    difficulty: "easy",
    tags: ["ম", "ওষ্ঠ"]
  },
  {
    id: "vol2_ch1_q48",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub4",
    questionBn: "নিচের কোনটি আনুনাসিক বা চন্দ্রবিন্দু (ঁ) যুক্ত ধ্বনি?",
    options: ["চাঁদ", "রোদ", "দিন", "তারা"],
    correctIndex: 0,
    explanationBn: "'চাঁদ' শব্দে চন্দ্রবিন্দু ব্যবহৃত হওয়ায় এটি আনুনাসিক ধ্বনিযুক্ত শব্দ।",
    difficulty: "easy",
    tags: ["চাঁদ", "অনুনাসিক"]
  },
  {
    id: "vol2_ch1_q49",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub4",
    questionBn: "'ড়' এবং 'ঢ়' বর্ণ দুটিকে একত্রে কী বলে?",
    options: ["উষ্ম বর্ণ", "তাড়নজাত বর্ণ", "কম্পিত বর্ণ", "পার্শ্বিক বর্ণ"],
    correctIndex: 1,
    explanationBn: "'ড়' এবং 'ঢ়' জিহ্বার আঘাত বা তাড়নায় উচ্চারিত হওয়ায় এরা তাড়নজাত বর্ণ।",
    difficulty: "easy",
    tags: ["তাড়নজাত বর্ণ", "ড় এবং ঢ়"]
  },
  {
    id: "vol2_ch1_q50",
    subjectId: "bengali",
    chapterId: "bengali_ch1",
    subTopicId: "bengali_ch1_sub1",
    questionBn: "বাগযন্ত্রের সাহায্যে তৈরি আওয়াজকে কী বলে?",
    options: ["শব্দ", "বাক্য", "ধ্বনি", "ভাষা"],
    correctIndex: 2,
    explanationBn: "মানুষের বাগযন্ত্র থেকে নির্গত অর্থবোধক আওয়াজ বা শব্দকে ধ্বনি বলে।",
    difficulty: "easy",
    tags: ["ধ্বনি", "বাগযন্ত্র"]
  }
];
