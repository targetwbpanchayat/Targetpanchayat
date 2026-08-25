import { StudyChapter, Question } from "../../types";

export const ENGLISH_CH2_STUDY: StudyChapter = {
  id: "eng_ch2",
  subjectId: "english",
  chapterNumber: 2,
  titleBn: "Subject-Verb Agreement (কর্তা ও ক্রিয়াপদের সঙ্গতি)",
  titleEn: "Subject-Verb Agreement - Rules, Singular vs Plural Verbs",
  estimatedMinutes: 35,
  importantNotesCount: 30,
  summary: "Subject Singular হলে Verb Singular, Plural হলে Verb Plural। 'And' দ্বারা যুক্ত একক ধারণা (Bread and butter is), As well as / With / Along with (১ম Subject অনুযায়ী), Either..or / Neither..nor (নিকটবর্তী Subject অনুযায়ী), দেখতে Plural কিন্তু অর্থে Singular (Physics, News, Mathematics is), সমষ্টিবাচক শব্দ (Jury/Committee) এবং A number of vs The number of এর নিয়ম।",
  subTopics: [
    {
      id: "eng_ch2_sub1",
      chapterId: "eng_ch2",
      subjectId: "english",
      titleBn: "Basic Rules & 'And' Compounds",
      titleEn: "Singular/Plural, 'And', Single Idea/Dish",
      orderIndex: 1,
      summaryBn: "দুটি আলাদা Subject 'And' দিয়ে যুক্ত হলে Verb Plural (Ram and Shyam are)। কিন্তু একই ব্যক্তি, বস্তু বা অবিচ্ছেদ্য ধারণা বোঝালে Verb Singular (Bread and butter is, Time and tide waits, Slow and steady wins)।",
      keyConcepts: ["Bread and butter is", "Time and tide waits for none", "The principal and secretary is vs The principal and the secretary are"]
    },
    {
      id: "eng_ch2_sub2",
      chapterId: "eng_ch2",
      subjectId: "english",
      titleBn: "Conjunctions: As well as, With, Either-or, Neither-nor",
      titleEn: "First Subject vs Nearest Subject Rules",
      orderIndex: 2,
      summaryBn: "As well as, Along with, Together with, With দিয়ে যুক্ত হলে ১ম Subject অনুযায়ী Verb। Either...or, Neither...nor, Not only...but also থাকলে ২য় (নিকটবর্তী) Subject অনুযায়ী Verb।",
      keyConcepts: ["The teacher along with students is", "Ram as well as his friends is", "Neither Ram nor his brothers are", "Either you or he is"]
    },
    {
      id: "eng_ch2_sub3",
      chapterId: "eng_ch2",
      subjectId: "english",
      titleBn: "Special Cases: Indefinite Pronouns, Nouns, Number",
      titleEn: "Each/Every, News/Physics, Cattle/Police, A number vs The number",
      orderIndex: 3,
      summaryBn: "Each, Every, One of, Either, Neither এর পর Singular Verb। Physics, News, Mathematics দেখতে Plural হলেও Singular। Cattle, Police, People সর্বদা Plural। 'A number of' Plural কিন্তু 'The number of' Singular।",
      keyConcepts: ["Each of the boys has", "One of my friends is", "Physics is, News is", "Cattle are, Police are", "A number of boys are vs The number of boys is"]
    }
  ],
  content: {
    introduction: "Subject-Verb Agreement ইংরেজি ব্যাকরণের সবচেয়ে গুরুত্বপূর্ণ ও নিয়মিত জিজ্ঞাসিত নিয়ম। Subject-এর Number ও Person অনুযায়ী Verb-এর সঠিক রূপ নির্ধারণ করাই এই অধ্যায়ের মূল ভিত্তি।",
    sections: [
      {
        heading: "১. মৌলিক নিয়ম ও 'And' দিয়ে যুক্ত Compound Subject",
        body: [
          "• Basic Rule: Subject Singular হলে Verb Singular (The boy plays), Subject Plural হলে Verb Plural (The boys play)।",
          "• 'And' দ্বারা দুটি ভিন্ন ব্যক্তি বা বস্তু যুক্ত হলে Verb Plural হয়: 'Ram and Shyam are best friends.'",
          "• কিন্তু 'And' দ্বারা যুক্ত শব্দ দুটি যদি একই ভাব, একক ধারণা বা অবিচ্ছেদ্য খাদ্য বোঝায়, তবে Verb Singular হয়: 'Bread and butter is my favorite breakfast', 'Time and tide waits for none', 'Slow and steady wins the race', 'Rice and curry is his staple food'।"
        ]
      },
      {
        heading: "২. First Subject ও Nearest Subject এর নিয়ম",
        body: [
          "• First Subject Rule: দুটি Subject 'as well as', 'along with', 'with', 'together with', 'in addition to', 'accompanied by' দ্বারা যুক্ত থাকলে Verb সর্বদা ১ম Subject অনুযায়ী বসে। যেমন: 'The teacher with all his students has come', 'Ram as well as his friends is going'।",
          "• Nearest Subject Rule: 'Either...or', 'Neither...nor', 'Not only...but also', 'Or', 'Nor' দিয়ে দুটি Subject যুক্ত থাকলে Verb তার নিকটবর্তী (২য়) Subject অনুযায়ী বসে। যেমন: 'Neither Ram nor his brothers are guilty', 'Either he or I am to blame'।",
          "• Indefinite Pronouns: Each, Every, Either, Neither, Everyone, Somebody, Nobody, Anyone, One of-এর পরে Noun Plural হলেও Verb সর্বদা Singular হয়। যেমন: 'Each of the boys has a pen', 'One of my friends is a doctor'।"
        ]
      },
      {
        heading: "৩. Noun-এর রূপগত বৈচিত্র্য ও পরিমাণের নিয়ম",
        body: [
          "• দেখতে Plural কিন্তু অর্থে Singular: Physics, Mathematics, Economics, News, Politics, Innings, Ethics, Billiards, Measles — এদের পরে Singular Verb বসে (যেমন: 'Physics is an interesting subject', 'No news is good news')।",
          "• দেখতে Singular কিন্তু অর্থে Plural: Cattle, Police, People, Gentry, Poultry, Clergy, Folk — এদের পরে সর্বদা Plural Verb বসে (যেমন: 'The cattle are grazing in the field', 'Police are investigating the case')।",
          "• দুটি অংশ বিশিষ্ট পোশাক/যন্ত্র: Scissors, Trousers, Spectacles, Pliers, Binoculars — এদের পরে Plural Verb হয় (The scissors are sharp)। কিন্তু 'A pair of...' যুক্ত থাকলে Singular Verb হয় (A pair of scissors is on the table)।",
          "• 'A number of' বনাম 'The number of': 'A number of' এর পর Plural Verb (A number of students were absent); কিন্তু 'The number of' এর পর Singular Verb (The number of students is fifty)।",
          "• সমষ্টিবাচক একক (Distance, Time, Money, Weight): একক পরিমাণ বা সামগ্রিক পরিমাপ বোঝালে Verb Singular হয়: 'Ten miles is a long distance', 'Fifty thousand rupees is a big amount'।"
        ]
      }
    ],
    examTips: [
      "As well as, along with, with, together with থাকলে চোখ বন্ধ করে ১ম Subject দেখবে।",
      "Either...or, Neither...nor, Not only...but also থাকলে Verb-এর ঠিক আগের (২য়) Subject দেখবে।",
      "One of the + Plural Noun + Singular Verb: 'One of the boys has failed' (কিন্তু 'One of the boys who have...' হলে 'who'-এর জন্য Plural হয়)।",
      "Cattle, Police, People সর্বদা Plural Verb গ্রহণ করে।",
      "A number of = Plural Verb; The number of = Singular Verb।"
    ],
    quickRevisionPoints: [
      "Bread and butter is, Slow and steady wins, Time and tide waits.",
      "The principal and secretary is (১ জন) vs The principal and the secretary are (২ জন)।",
      "As well as / with / along with -> ১ম Subject অনুযায়ী Verb।",
      "Either..or / Neither..nor -> ২য় (নিকটবর্তী) Subject অনুযায়ী Verb।",
      "Each / Every / One of -> Singular Verb।",
      "Physics is, News is, Mathematics is, Politics is.",
      "Police are, Cattle are, People are, Gentry are.",
      "A number of boys are vs The number of boys is."
    ],
    oneLiners: [
      "Bread and butter, slow and steady, time and tide একক প্রবাদীয় ধারণা হওয়ায় Singular Verb বসে।",
      "As well as, with, along with, together with থাকলে Verb সর্বদা ১ম Subject অনুযায়ী নির্ধারিত হয়।",
      "Neither..nor, Either..or, Not only..but also থাকলে Verb নিকটতম (২য়) Subject অনুযায়ী বসে।",
      "Each, Every, Either, Neither, Everyone, Nobody এবং One of-এর পর সর্বদা Singular Verb হয়।",
      "Physics, Mathematics, News, Economics, Politics দেখতে Plural হলেও এরা Singular Noun।",
      "Cattle, Police, People এবং Poultry শব্দগুলির পর সর্বদা Plural Verb বসে।",
      "Scissors, Trousers, Spectacles সর্বদা Plural Verb গ্রহণ করে (The scissors are sharp)।",
      "A pair of spectacles বা A pair of shoes থাকলে Verb Singular হয় (A pair of shoes is new)।",
      "দূরত্ব (Ten miles), সময় (Three hours) বা অর্থের একক পরিমাণ বোঝালে Verb Singular হয়।",
      "'A number of' এর পর Plural Verb এবং 'The number of' এর পর Singular Verb বসে।",
      "'It is I who am your friend' — Relative Pronoun 'who'-এর Antecedent 'I' অনুযায়ী 'am' বসে।",
      "Jury বা Committee ঐক্যবদ্ধ সিদ্ধান্ত নিলে Singular Verb (has decided), মতভেদ হলে Plural Verb (were divided)।",
      "More than one boy + Singular Verb (is absent); More than two boys + Plural Verb (are absent)।",
      "Many a + Singular Noun + Singular Verb: 'Many a man was present' (Many men were present)।",
      "The percentage of successful candidates is high (Percentage-এর পর সর্বদা Singular Verb)।",
      "None of-এর পর সাধারণত formal English-এ Singular Verb (None of the work was done) প্রাধান্য পায়।",
      "All that glitters is not gold (প্রবাদে Singular Verb 'is')।",
      "Neither of the two candidates was selected (দুজনের কেউই না বোঝাতে 'was')।"
    ],
    saqs: [
      {
        id: "eng_ch2_saq1",
        questionBn: "'Ram as well as his friends ___ (is/are) going' — শূন্যস্থানে কোনটি বসবে এবং কেন?",
        answerBn: "সঠিক উত্তর 'is'। কারণ 'as well as', 'along with', 'with' বা 'together with' দ্বারা দুটি Subject যুক্ত থাকলে Verb সর্বদা প্রথম Subject (এখানে 'Ram' - 3rd person singular) অনুযায়ী নির্ধারিত হয়।"
      },
      {
        id: "eng_ch2_saq2",
        questionBn: "'A number of' এবং 'The number of'-এর মধ্যে Verb নির্বাচনের ব্যাকরণগত নিয়ম কী?",
        answerBn: "'A number of' দ্বারা অনির্দিষ্ট সংখ্যক বহু ছাত্র বা ব্যক্তিকে বোঝায় বলে এর পর Plural Verb (যেমন: A number of boys are absent) বসে; কিন্তু 'The number of' দ্বারা একটি সুনির্দিষ্ট মোট সংখ্যা বোঝায় বলে এর পর Singular Verb (যেমন: The number of boys is fifty) বসে।"
      },
      {
        id: "eng_ch2_saq3",
        questionBn: "'The principal and secretary' বনাম 'The principal and the secretary'-এর ক্ষেত্রে Verb কী হবে?",
        answerBn: "'The principal and secretary' বললে একজন ব্যক্তিকেই বোঝায় (যিনি একই সাথে প্রিন্সিপাল ও সেক্রেটারি), তাই Verb Singular (is/was) হয়। কিন্তু দুটির পূর্বেই আলাদাভাবে 'the' থাকলে ('The principal and the secretary') দুজন ভিন্ন ব্যক্তিকে নির্দেশ করে, ফলে Verb Plural (are/were) হয়।"
      },
      {
        id: "eng_ch2_saq4",
        questionBn: "Collective Noun (Jury, Committee, Team)-এর সাথে কখন Singular এবং কখন Plural Verb বসে?",
        answerBn: "সমষ্টিবাচক বিশেষ্য (Collective Noun) যখন ঐক্যবদ্ধভাবে একটি একক সিদ্ধান্ত বা কাজ সম্পাদন করে, তখন Singular Verb বসে (The jury has given its verdict)। কিন্তু যখন সদস্যরা নিজেদের মধ্যে বিভক্ত হয় বা আলাদা মতামত দেয় (Noun of Multitude), তখন Plural Verb বসে (The jury were divided in their opinions)।"
      },
      {
        id: "eng_ch2_saq5",
        questionBn: "'Neither Ram nor his brothers ___ guilty' — এখানে Verb নির্ণয়ের নিয়ম কী?",
        answerBn: "'Either...or', 'Neither...nor', 'Not only...but also' দ্বারা দুটি Subject যুক্ত থাকলে Verb সর্বদা তার সবচেয়ে নিকটবর্তী (২য়) Subject অনুযায়ী বসে। এখানে নিকটবর্তী Subject 'his brothers' (Plural) হওয়ায় Verb হবে 'are' বা 'were'।"
      },
      {
        id: "eng_ch2_saq6",
        questionBn: "'One of the boys' এর পর কখন Singular এবং কখন Plural Verb বসে?",
        answerBn: "সাধারণত 'One of the + Plural Noun'-এর পর Verb Singular হয় (One of my friends is a doctor)। কিন্তু এর পর যদি Relative Pronoun (who/which/that) থাকে, তবে antecedent (Plural Noun) অনুযায়ী Verb Plural হয় (He is one of the players who have won the match)।"
      },
      {
        id: "eng_ch2_saq7",
        questionBn: "'Many a man' এবং 'Many men'-এর মধ্যে Verb-এর পার্থক্য কী?",
        answerBn: "'Many a' এর পর Noun Singular হয় এবং Verb-ও Singular হয় (Many a man was present there); অন্যদিকে 'Many'-র পর Noun Plural হয় এবং Verb-ও Plural হয় (Many men were present there)।"
      },
      {
        id: "eng_ch2_saq8",
        questionBn: "'Ten miles ___ (is/are) a long distance' — কেন Singular Verb ব্যবহৃত হয়?",
        answerBn: "দূরত্ব, সময়, ওজন বা টাকার পরিমাণ যখন সামগ্রিকভাবে একটি অবিভাজ্য একক পরিমাণ (Single unit of measurement) নির্দেশ করে, তখন Noun দেখতে Plural হলেও ব্যাকরণগতভাবে Singular Verb ('is') ব্যবহৃত হয়।"
      }
    ]
  }
};

export const ENGLISH_CH2_QUESTIONS: Question[] = [
  {
    id: "vol3_ch2_q1",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub3",
    questionBn: "A pair of shoes ___ missing from the rack.",
    options: ["is", "are", "has", "have"],
    correctIndex: 0,
    explanationBn: "'A pair of' থাকলে সামগ্রিক একক হিসেবে Verb Singular ('is') হয়।",
    difficulty: "easy",
    tags: ["Subject-Verb Agreement", "A pair of"]
  },
  {
    id: "vol3_ch2_q2",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub3",
    questionBn: "Physics ___ my favorite subject.",
    options: ["is", "are", "was", "were"],
    correctIndex: 0,
    explanationBn: "'Physics' বিষয়ের নাম, দেখতে Plural হলেও এটি Singular Noun, তাই 'is' বসবে।",
    difficulty: "easy",
    tags: ["Subject-Verb Agreement", "Physics"]
  },
  {
    id: "vol3_ch2_q3",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub3",
    questionBn: "The jury ___ divided in their opinions.",
    options: ["was", "were", "is", "has"],
    correctIndex: 1,
    explanationBn: "Collective Noun-এর সদস্যরা মতভেদ প্রকাশ করলে Verb Plural ('were') হয়।",
    difficulty: "medium",
    tags: ["Subject-Verb Agreement", "Noun of Multitude"]
  },
  {
    id: "vol3_ch2_q4",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub3",
    questionBn: "The jury ___ selected the winner unanimously.",
    options: ["has", "have", "is", "are"],
    correctIndex: 0,
    explanationBn: "Jury যখন সর্বসম্মতিক্রমে একক সিদ্ধান্ত নেয়, তখন Verb Singular ('has') হয়।",
    difficulty: "medium",
    tags: ["Subject-Verb Agreement", "Collective Noun"]
  },
  {
    id: "vol3_ch2_q5",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub1",
    questionBn: "Time and tide ___ for none.",
    options: ["wait", "waits", "is waiting", "waited"],
    correctIndex: 1,
    explanationBn: "'Time and tide' একটি অবিচ্ছেদ্য প্রবাদীয় একক ধারণা প্রকাশ করায় Singular Verb 'waits' বসে।",
    difficulty: "easy",
    tags: ["Subject-Verb Agreement", "Time and tide"]
  },
  {
    id: "vol3_ch2_q6",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub1",
    questionBn: "Slow and steady ___ the race.",
    options: ["win", "wins", "winning", "is winning"],
    correctIndex: 1,
    explanationBn: "'Slow and steady' একক চারিত্রিক গুণ প্রকাশ করায় Singular Verb 'wins' হবে।",
    difficulty: "easy",
    tags: ["Subject-Verb Agreement", "Slow and steady"]
  },
  {
    id: "vol3_ch2_q7",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub1",
    questionBn: "Bread and butter ___ his daily food.",
    options: ["is", "are", "were", "have"],
    correctIndex: 0,
    explanationBn: "খাবার হিসেবে রুটি-মাখন একক খাদ্য সামগ্রী হওয়ায় Verb 'is' হবে।",
    difficulty: "easy",
    tags: ["Subject-Verb Agreement", "Bread and butter"]
  },
  {
    id: "vol3_ch2_q8",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub1",
    questionBn: "The principal and secretary ___ present in the meeting.",
    options: ["is", "are", "has", "have"],
    correctIndex: 0,
    explanationBn: "একটির পূর্বে 'The' থাকায় একই ব্যক্তিকে বোঝায়, তাই Singular Verb 'is'।",
    difficulty: "medium",
    tags: ["Subject-Verb Agreement", "Articles with Subjects"]
  },
  {
    id: "vol3_ch2_q9",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub1",
    questionBn: "The principal and the secretary ___ present in the meeting.",
    options: ["is", "are", "was", "has"],
    correctIndex: 1,
    explanationBn: "উভয়ের পূর্বে 'The' থাকায় দুজন ভিন্ন ব্যক্তিকে নির্দেশ করে, তাই Plural Verb 'are'।",
    difficulty: "medium",
    tags: ["Subject-Verb Agreement", "Articles with Subjects"]
  },
  {
    id: "vol3_ch2_q10",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub2",
    questionBn: "Ram as well as his friends ___ going to the picnic.",
    options: ["is", "are", "am", "were"],
    correctIndex: 0,
    explanationBn: "'As well as' থাকলে প্রথম Subject ('Ram' - Singular) অনুযায়ী Verb 'is' বসে।",
    difficulty: "easy",
    tags: ["Subject-Verb Agreement", "as well as"]
  },
  {
    id: "vol3_ch2_q11",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub2",
    questionBn: "The teacher along with his students ___ inspecting the garden.",
    options: ["are", "is", "were", "have been"],
    correctIndex: 1,
    explanationBn: "'along with' থাকলে প্রথম Subject ('The teacher') অনুযায়ী Singular Verb 'is' বসে।",
    difficulty: "easy",
    tags: ["Subject-Verb Agreement", "along with"]
  },
  {
    id: "vol3_ch2_q12",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub2",
    questionBn: "Neither Ram nor his brothers ___ guilty.",
    options: ["is", "are", "was", "has"],
    correctIndex: 1,
    explanationBn: "'Neither...nor' থাকলে নিকটবর্তী ২য় Subject ('his brothers' - Plural) অনুযায়ী 'are' বসবে।",
    difficulty: "easy",
    tags: ["Subject-Verb Agreement", "neither nor"]
  },
  {
    id: "vol3_ch2_q13",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub2",
    questionBn: "Either he or I ___ mistaken.",
    options: ["is", "are", "am", "be"],
    correctIndex: 2,
    explanationBn: "'Either...or' থাকলে নিকটবর্তী Subject 'I' অনুযায়ী 'am' বসবে।",
    difficulty: "medium",
    tags: ["Subject-Verb Agreement", "either or"]
  },
  {
    id: "vol3_ch2_q14",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub3",
    questionBn: "Each of the boys ___ given a prize.",
    options: ["were", "was", "are", "have been"],
    correctIndex: 1,
    explanationBn: "'Each of'-এর পর Noun Plural হলেও Verb সর্বদা Singular ('was') হয়।",
    difficulty: "easy",
    tags: ["Subject-Verb Agreement", "Each of"]
  },
  {
    id: "vol3_ch2_q15",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub3",
    questionBn: "One of my friends ___ an engineer in Kolkata.",
    options: ["are", "is", "were", "have"],
    correctIndex: 1,
    explanationBn: "'One of'-এর পর সর্বদা Singular Verb ('is') বসে।",
    difficulty: "easy",
    tags: ["Subject-Verb Agreement", "One of"]
  },
  {
    id: "vol3_ch2_q16",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub3",
    questionBn: "A number of boys ___ absent today.",
    options: ["is", "are", "was", "has"],
    correctIndex: 1,
    explanationBn: "'A number of'-এর পর সর্বদা Plural Verb ('are') বসে।",
    difficulty: "easy",
    tags: ["Subject-Verb Agreement", "A number of"]
  },
  {
    id: "vol3_ch2_q17",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub3",
    questionBn: "The number of boys ___ fifty in this class.",
    options: ["is", "are", "were", "have"],
    correctIndex: 0,
    explanationBn: "'The number of'-এর পর সর্বদা Singular Verb ('is') বসে।",
    difficulty: "easy",
    tags: ["Subject-Verb Agreement", "The number of"]
  },
  {
    id: "vol3_ch2_q18",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub3",
    questionBn: "Ten miles ___ a long distance to walk.",
    options: ["is", "are", "were", "have"],
    correctIndex: 0,
    explanationBn: "দূরত্ব একটি একক পরিমাণ নির্দেশ করায় Verb Singular ('is') হয়।",
    difficulty: "easy",
    tags: ["Subject-Verb Agreement", "Distance"]
  },
  {
    id: "vol3_ch2_q19",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub3",
    questionBn: "Fifty thousand rupees ___ a large sum of money.",
    options: ["is", "are", "were", "have been"],
    correctIndex: 0,
    explanationBn: "অর্থের সমষ্টিগত পরিমাণ বোঝাতে Singular Verb 'is' ব্যবহৃত হয়।",
    difficulty: "easy",
    tags: ["Subject-Verb Agreement", "Money Unit"]
  },
  {
    id: "vol3_ch2_q20",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub3",
    questionBn: "The cattle ___ grazing in the meadow.",
    options: ["is", "are", "was", "has"],
    correctIndex: 1,
    explanationBn: "'Cattle' সর্বদা Plural Noun, তাই Plural Verb 'are' বসবে।",
    difficulty: "easy",
    tags: ["Subject-Verb Agreement", "Cattle"]
  },
  {
    id: "vol3_ch2_q21",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub3",
    questionBn: "Police ___ investigating the robbery case.",
    options: ["is", "are", "was", "has"],
    correctIndex: 1,
    explanationBn: "'Police' সর্বদা Plural হিসেবে গণ্য হয়, তাই Plural Verb 'are' বসবে।",
    difficulty: "easy",
    tags: ["Subject-Verb Agreement", "Police"]
  },
  {
    id: "vol3_ch2_q22",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub3",
    questionBn: "The scissors ___ kept on the table.",
    options: ["is", "are", "was", "has"],
    correctIndex: 1,
    explanationBn: "'Scissors' দুটি অংশবিশিষ্ট বস্তু হওয়ায় সর্বদা Plural Verb 'are' নেয়।",
    difficulty: "easy",
    tags: ["Subject-Verb Agreement", "Scissors"]
  },
  {
    id: "vol3_ch2_q23",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub2",
    questionBn: "It is I who ___ your sincere well-wisher.",
    options: ["is", "am", "are", "were"],
    correctIndex: 1,
    explanationBn: "Relative Pronoun 'who'-এর পূর্ববর্তী পদ (Antecedent) 'I' অনুযায়ী Verb 'am' হবে।",
    difficulty: "medium",
    tags: ["Subject-Verb Agreement", "Antecedent"]
  },
  {
    id: "vol3_ch2_q24",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub2",
    questionBn: "Not only the officer but also his assistants ___ present.",
    options: ["was", "were", "is", "has been"],
    correctIndex: 1,
    explanationBn: "'Not only...but also' থাকলে ২য় Subject ('assistants' - Plural) অনুযায়ী 'were' হবে।",
    difficulty: "medium",
    tags: ["Subject-Verb Agreement", "Not only but also"]
  },
  {
    id: "vol3_ch2_q25",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub3",
    questionBn: "No news ___ good news.",
    options: ["is", "are", "were", "have"],
    correctIndex: 0,
    explanationBn: "'News' দেখতে Plural হলেও এটি Singular Noun, তাই 'is' বসবে।",
    difficulty: "easy",
    tags: ["Subject-Verb Agreement", "News"]
  },
  {
    id: "vol3_ch2_q26",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub3",
    questionBn: "Mathematics ___ considered a difficult subject by many.",
    options: ["is", "are", "were", "have been"],
    correctIndex: 0,
    explanationBn: "বিষয়ের নাম হিসেবে 'Mathematics' সর্বদা Singular Verb 'is' গ্রহণ করে।",
    difficulty: "easy",
    tags: ["Subject-Verb Agreement", "Mathematics"]
  },
  {
    id: "vol3_ch2_q27",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub3",
    questionBn: "Many a student ___ failed in the preliminary test.",
    options: ["have", "has", "are", "were"],
    correctIndex: 1,
    explanationBn: "'Many a' এর পর Noun Singular হয় এবং Verb-ও Singular ('has') হয়।",
    difficulty: "medium",
    tags: ["Subject-Verb Agreement", "Many a"]
  },
  {
    id: "vol3_ch2_q28",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub3",
    questionBn: "More than one candidate ___ attended the interview.",
    options: ["has", "have", "are", "were"],
    correctIndex: 0,
    explanationBn: "'More than one + Singular Noun' থাকলে Verb Singular ('has') হয়।",
    difficulty: "medium",
    tags: ["Subject-Verb Agreement", "More than one"]
  },
  {
    id: "vol3_ch2_q29",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub3",
    questionBn: "He is one of the great leaders who ___ served the nation.",
    options: ["has", "have", "is", "was"],
    correctIndex: 1,
    explanationBn: "Relative Pronoun 'who'-এর আগে 'leaders' (Plural) থাকায় Verb Plural ('have') হবে।",
    difficulty: "hard",
    tags: ["Subject-Verb Agreement", "One of the who"]
  },
  {
    id: "vol3_ch2_q30",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub3",
    questionBn: "The Arabian Nights ___ still a very popular book.",
    options: ["is", "are", "were", "have"],
    correctIndex: 0,
    explanationBn: "বইয়ের নাম 'The Arabian Nights' দেখতে Plural হলেও একক বই বোঝায়, তাই 'is'।",
    difficulty: "easy",
    tags: ["Subject-Verb Agreement", "Book Title"]
  },
  {
    id: "vol3_ch2_q31",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub3",
    questionBn: "Everyone of the staff members ___ contributed to the fund.",
    options: ["have", "has", "are", "were"],
    correctIndex: 1,
    explanationBn: "'Everyone of'-এর পর সর্বদা Singular Verb 'has' ব্যবহৃত হয়।",
    difficulty: "easy",
    tags: ["Subject-Verb Agreement", "Everyone of"]
  },
  {
    id: "vol3_ch2_q32",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub2",
    questionBn: "The captain, together with his team members, ___ praised for the victory.",
    options: ["were", "was", "are", "have been"],
    correctIndex: 1,
    explanationBn: "'together with' থাকলে প্রথম Subject ('The captain' - Singular) অনুযায়ী 'was' হবে।",
    difficulty: "easy",
    tags: ["Subject-Verb Agreement", "together with"]
  },
  {
    id: "vol3_ch2_q33",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub3",
    questionBn: "The quality of these mangoes ___ not good.",
    options: ["is", "are", "were", "have been"],
    correctIndex: 0,
    explanationBn: "এখানে মূল Subject হলো 'The quality' (Singular Uncountable), তাই Verb 'is' হবে।",
    difficulty: "medium",
    tags: ["Subject-Verb Agreement", "Quality of"]
  },
  {
    id: "vol3_ch2_q34",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub3",
    questionBn: "The committee ___ submitted its annual report.",
    options: ["have", "has", "are", "were"],
    correctIndex: 1,
    explanationBn: "Committee একক দল হিসেবে যৌথ রিপোর্ট জমা দেওয়ায় Singular Verb 'has' এবং Pronoun 'its' বসে।",
    difficulty: "easy",
    tags: ["Subject-Verb Agreement", "Committee"]
  },
  {
    id: "vol3_ch2_q35",
    subjectId: "english",
    chapterId: "eng_ch2",
    subTopicId: "eng_ch2_sub3",
    questionBn: "Neither of the two plans ___ acceptable to the authority.",
    options: ["is", "are", "were", "have been"],
    correctIndex: 0,
    explanationBn: "'Neither of the two'-এর পর সর্বদা Singular Verb ('is') বসে।",
    difficulty: "easy",
    tags: ["Subject-Verb Agreement", "Neither of"]
  }
];
