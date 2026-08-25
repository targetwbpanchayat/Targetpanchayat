import { StudyChapter, Question } from "../../types";

export const ENGLISH_CH1_STUDY: StudyChapter = {
  id: "eng_ch1",
  subjectId: "english",
  chapterNumber: 1,
  titleBn: "Articles and Prepositions (আর্টিকেল ও প্রিপজিশন)",
  titleEn: "Articles and Prepositions - Rules, Usages & Fixed Prepositions",
  estimatedMinutes: 35,
  importantNotesCount: 30,
  summary: "A, An, The-এর সুনির্দিষ্ট ব্যবহার, Vowel/Consonant উচ্চারণ বিধি, Article-এর বর্জন (Omission), সময় ও স্থানের Preposition (In, On, At), গতির Preposition (To, Into, Towards), Between vs Among, For vs Since, With vs By, Beside vs Besides এবং পরীক্ষামূলক Fixed Prepositions।",
  subTopics: [
    {
      id: "eng_ch1_sub1",
      chapterId: "eng_ch1",
      subjectId: "english",
      titleBn: "Articles (A, An, The ও Omission)",
      titleEn: "Indefinite, Definite & Omission of Articles",
      orderIndex: 1,
      summaryBn: "শব্দের উচ্চারণ Vowel হলে 'An' (ব্যতিক্রম: An hour, An honest man)। 'U' বা 'O'-এর উচ্চারণ 'ইউ' বা 'ওয়া' হলে 'A' (A university, A European, A one-rupee note)। নির্দিষ্ট ব্যক্তি/বস্তু, নদী, পর্বত, ধর্মগ্রন্থের পূর্বে 'The'।",
      keyConcepts: ["An hour, An honest man, An heir", "A university, A European, A one-rupee note", "The sun, The Gita, The water of this pond"]
    },
    {
      id: "eng_ch1_sub2",
      chapterId: "eng_ch1",
      subjectId: "english",
      titleBn: "Preposition of Time & Place",
      titleEn: "Time (At, On, In) & Place (In, At)",
      orderIndex: 2,
      summaryBn: "নির্দিষ্ট সময় (At 5 PM), দিন/তারিখ (On Sunday, On 15th August), মাস/বছর/ঋতু (In 2024, In Summer)। বড় জায়গা/দেশ/শহর (In Kolkata), ছোট জায়গা/গ্রাম/ঠিকানা (At Malda)।",
      keyConcepts: ["At 5 PM vs On Sunday vs In 2024", "In Kolkata vs At Malda", "In the shade of a tree"]
    },
    {
      id: "eng_ch1_sub3",
      chapterId: "eng_ch1",
      subjectId: "english",
      titleBn: "Confusing Prepositions & Fixed Prepositions",
      titleEn: "Between/Among, For/Since, With/By, Beside/Besides & Fixed Rules",
      orderIndex: 3,
      summaryBn: "দুজনের মধ্যে Between, অনেকের মধ্যে Among। সময়ের ব্যপ্তি For, শুরুর বিন্দু Since। যন্ত্র দিয়ে With, ব্যক্তি দ্বারা By। পাশে Beside, অতিরিক্ত Besides। Good at, Afraid of, Senior to, Suffer from ইত্যাদি।",
      keyConcepts: ["Between two vs Among many", "For 3 hours vs Since morning", "Cut with a knife vs Killed by hunter", "Good at, Senior to, Prefer to, Died of"]
    }
  ],
  content: {
    introduction: "Articles এবং Prepositions ইংরেজি ব্যাকরণের অন্যতম অপরিহার্য অধ্যায়। পশ্চিমবঙ্গ পঞ্চায়েত ও রাজ্য সরকারি পরীক্ষায় প্রায় প্রতিটি সেটে এই অধ্যায় থেকে ৩-৫টি প্রশ্ন থাকে।",
    sections: [
      {
        heading: "১. Indefinite Articles (A এবং An-এর ব্যবহার)",
        body: [
          "• যেসব শব্দের উচ্চারণ Consonant-এর মতো হয়, তাদের আগে 'A' বসে।",
          "• যেসব শব্দের উচ্চারণ Vowel (a, e, i, o, u)-এর মতো হয়, তাদের আগে 'An' বসে।",
          "• ব্যতিক্রম ১: 'H'-এর উচ্চারণ অনুচ্চারিত বা সাইলেন্ট থাকলে 'An' বসে (যেমন: An hour, An honest man, An heir, An honorary post)।",
          "• ব্যতিক্রম ২: 'U' বা 'E'-এর উচ্চারণ 'ইউ' (You) এবং 'O'-এর উচ্চারণ 'ওয়া' (Wa) হলে 'A' বসে (যেমন: A university, A European, A unique case, A one-rupee note, A one-eyed man, A utensil)।",
          "• সংক্ষিপ্ত নামের (Abbreviation) প্রথম অক্ষরের উচ্চারণ Vowel ধ্বনি হলে 'An' বসে: An M.A., An M.P., An S.D.O., An F.I.R., An L.L.B.; কিন্তু A B.A., A Ph.D.।"
        ]
      },
      {
        heading: "২. Definite Article (The) এবং Omission of Articles",
        body: [
          "• নির্দিষ্ট কোনো ব্যক্তি বা বস্তুকে বোঝাতে 'The' বসে (The boy who stood first)।",
          "• নদী, সাগর, পর্বতমালা, ধর্মগ্রন্থ, সংবাদপত্র, দিক এবং মহাবিশ্বের একক বস্তু (The Ganga, The Himalayas, The Pacific, The Gita, The Statesman, The earth)-এর আগে 'The' বসে।",
          "• Superlative Degree-এর পূর্বে সর্বদা 'The' বসে (The best boy, The tallest tree)।",
          "• দুইয়ের মধ্যে তুলনামূলকভাবে বেশি বোঝাতে Comparative-এর আগেও The বসে: 'The higher you go, the cooler you feel' বা 'He is the better of the two boys' ।",
          "• নির্দিষ্ট কোনো স্থানের বস্তু নির্দেশ করলে Material Noun-এর আগেও The বসে: 'The water of this pond is dirty' (সাধারণ জলে কোনো আর্টিকেল বসে না)।",
          "• Proper Noun, খেলাধুলো, খাবার ও ভাষার নামের পূর্বে সাধারণ অর্থে কোনো Article বসে না (Play football, Speak English, Have breakfast)।"
        ]
      },
      {
        heading: "৩. Prepositions of Time, Place, Motion & Confusing Pairs",
        body: [
          "• Time: At 5 PM (নির্দিষ্ট সময়), On Sunday (দিন/তারিখ), In 2024 / In Summer / In the morning (বছর/ঋতু/বেলা)।",
          "• Place: In Kolkata / In India (বড় জায়গা), At Malda / At the bus stop / At the door (নির্দিষ্ট/ছোট জায়গা)।",
          "• Motion: Jumped into the river (বাইরে থেকে ভেতরে গতিশীল প্রবেশ), Going to school (নির্দিষ্ট গন্তব্য), Walk towards the station (দিক নির্দেশ), Fly over my head (শূন্যে উপরে)।",
          "• Between (দুজনের মধ্যে) বনাম Among (বহুজনের মধ্যে)।",
          "• For (Period of time: For two hours, For five days) বনাম Since (Point of time: Since morning, Since 1995, Since childhood)।",
          "• With (যন্ত্র/অস্ত্র: Cut with a knife, Written with a pen) বনাম By (ব্যক্তি দ্বারা: Killed by the hunter; যানবহন: Go by bus; পদব্রজে: On foot)।",
          "• Beside (পাশে: Sit beside me) বনাম Besides (তাছাড়া/অতিরিক্ত: Besides English, he knows Hindi)।"
        ],
        tables: {
          headers: ["শব্দ (Word)", "নির্দিষ্ট Preposition", "বাংলা অর্থ", "উদাহরণ বাক্য"],
          rows: [
            ["Good / Bad / Clever", "at", "দক্ষ / অদক্ষ / চতুর", "He is good at English, bad at Mathematics."],
            ["Senior / Junior / Superior", "to", "উচ্চপদস্থ / বয়োজ্যেষ্ঠ", "He is senior to me by two years."],
            ["Prefer / Preferable", "to", "বেশি পছন্দ করা / অধিক শ্রেয়", "She prefers tea to coffee."],
            ["Died of (রোগে)", "of", "রোগে মারা যাওয়া", "He died of cholera / malaria / cancer."],
            ["Died from (কারণে)", "from", "পরোক্ষ কারণে মারা যাওয়া", "He died from overeating / loss of blood."],
            ["Died for (উদ্দেশ্যে)", "for", "দেশের জন্য আত্মত্যাগ", "The soldier died for his motherland."],
            ["Died in (দুর্ঘটনায়/যুদ্ধে)", "in", "দুর্ঘটনায় মারা যাওয়া", "He died in a road accident / in the war."],
            ["Afraid / Beware / Fond", "of", "ভীত / সতর্ক / প্রিয়", "Afraid of dogs, Beware of pickpockets."],
            ["Prevented / Abstain / Refrain", "from", "বিরত থাকা / বাধা দেওয়া", "Prevented from going, Abstain from evil."],
            ["Rely / Depend / Insist", "on", "নির্ভর করা / জেদ ধরা", "Rely on him, Insisted on going there."],
            ["Congratulate", "on", "অভিনন্দন জানানো", "I congratulate you on your success."],
            ["Blind to (দোষে অন্ধ)", "to", "দোষ উপেক্ষা করা", "He is blind to his son's faults."],
            ["Blind in (এক চোখে অন্ধ)", "in", "চোখে দেখতে না পাওয়া", "The beggar is blind in the left eye."],
            ["Deal in (ব্যবসা করা)", "in", "ব্যবসা করা", "He deals in rice and sugar."],
            ["Deal with (ব্যবহার/আচরণ)", "with", "আচরণ করা বা সামলানো", "He knows how to deal with customers."]
          ]
        }
      }
    ],
    examTips: [
      "Senior, Junior, Prior, Superior, Inferior, Prefer, Preferable — এদের পরে সর্বদা 'to' বসে, কখনোই 'than' বসে না।",
      "রোগে মারা গেলে 'Died of', কারণে মারা গেলে 'Died from', দেশের জন্য মারা গেলে 'Died for', দুর্ঘটনায় মারা গেলে 'Died in' বসে।",
      "পায়ে হেঁটে যাওয়ার ক্ষেত্রে 'On foot', কিন্তু যানবাহনের ক্ষেত্রে 'By bus / By train' বসে।",
      "ব্যবসা করার অর্থে 'Deal in' (He deals in cloth), কিন্তু ব্যবহার বা আচরণের ক্ষেত্রে 'Deal with' (Deal with people politely) বসে।",
      "এক চোখে অন্ধ বোঝালে 'Blind in', কিন্তু সন্তানের দোষে অন্ধ হলে 'Blind to' বসে।"
    ],
    quickRevisionPoints: [
      "An hour, An honest man, An heir, An M.A., An S.D.O.",
      "A European, A university, A one-rupee note, A union.",
      "Good at, Senior to, Prefer to, Rely on, Congratulate on.",
      "Between (২ জনের মধ্যে), Among (২ জনের অধিকের মধ্যে)।",
      "Since (নির্দিষ্ট শুরু - Point of time), For (সময়সীমা - Period of time)।",
      "Deal in (পণ্য ব্যবসা), Deal with (আচরণ/ব্যবহার)।",
      "Blind in (চোখে দৃষ্টিহীন), Blind to (দোষের প্রতি অন্ধ)।"
    ],
    oneLiners: [
      "Honest, hour, heir এবং honorary শব্দগুলির শুরুতে 'h' অনুচ্চারিত থাকায় পূর্বে 'An' বসে।",
      "European, university, unique এবং unicorn শব্দগুলির উচ্চারণ 'ইউ' এর মতো হওয়ায় 'A' বসে।",
      "One-rupee note, one-way road বা one-eyed man-এ 'o'-এর উচ্চারণ 'ওয়া' এর মতো হওয়ায় 'A' বসে।",
      "M.A., M.Sc., M.P., S.D.O., F.I.R.-এর সংক্ষিপ্ত শব্দের প্রথম অক্ষর স্বরধ্বনির মতো উচ্চারিত হওয়ায় 'An' বসে।",
      "সূর্য, পৃথিবী, চাঁদ এবং ধর্মগ্রন্থের (The Gita, The Quran, The Bible) নামের পূর্বে 'The' বসে।",
      "Superlative Degree-এর আগে সর্বদা 'The' বসে (The tallest, The most handsome)।",
      "দুটি Comparative-এর মাধ্যমে সমান্তরাল বৃদ্ধি/হ্রাস বোঝালে দুটিতেই 'The' বসে (The higher you go, the colder it is)।",
      "দুজনের মধ্যে তুলনা বা বণ্টন করতে 'Between' এবং দুয়ের বেশির মধ্যে 'Among' বসে।",
      "নির্দিষ্ট সময়কাল নির্দেশ করতে 'For' (For 2 hours) এবং শুরুর নির্দিষ্ট বিন্দু বোঝাতে 'Since' (Since Monday) বসে।",
      "অস্ত্র বা যন্ত্র দিয়ে কাজ করলে 'With' (Cut with a knife) এবং ব্যক্তি দ্বারা হলে 'By' বসে।",
      "রোগে মৃত্যুর ক্ষেত্রে 'Died of' এবং অতিরিক্ত খাওয়া বা পরিশ্রমে মৃত্যুর ক্ষেত্রে 'Died from' বসে।",
      "Senior, Junior, Superior, Inferior, Prior এবং Prefer এর পরে সর্বদা 'to' বসে (than নয়)।",
      "পায়ে হেঁটে যাওয়ার ক্ষেত্রে 'On foot' কিন্তু যানবাহনে যাওয়ার ক্ষেত্রে 'By bus / By train' বসে।",
      "কারো সাফল্যে অভিনন্দন জানাতে 'Congratulate on' (Congratulate him on his victory) বসে।",
      "ব্যবসা করার ক্ষেত্রে 'Deal in' (Deals in silk) এবং ব্যবহার বা আলোচনার ক্ষেত্রে 'Deal with' বসে।",
      "চোখে দৃষ্টিহীন হলে 'Blind in one eye' কিন্তু দোষের প্রতি উদাসীন হলে 'Blind to faults' বসে।",
      "গাছের ছায়ায় বসলে 'In the shade of a tree', কিন্তু গাছের ডালে বসলে 'On a branch of a tree' বসে।",
      "নির্দিষ্ট সময়ের পূর্বে পৌঁছানো বোঝালে 'In time', এবং কাঁটায় কাঁটায় নির্দিষ্ট সময় বোঝালে 'On time' বসে।"
    ],
    saqs: [
      {
        id: "eng_ch1_saq1",
        questionBn: "'He is ___ European' — শূন্যস্থানে 'A' বসে কেন, 'An' নয় কেন?",
        answerBn: "'European' শব্দের প্রথম অক্ষর Vowel ('E') হলেও এর উচ্চারণ 'ইউ' (You)-এর মতো হওয়ায় ইংরেজি ব্যাকরণের উচ্চারণ বিধি অনুযায়ী এর পূর্বে Indefinite Article 'A' বসে।"
      },
      {
        id: "eng_ch1_saq2",
        questionBn: "'For' এবং 'Since'-এর ব্যবহারের পার্থক্য উদাহরণসহ লিখুন।",
        answerBn: "সময়ের মোট ব্যপ্তি বা সময়কাল (Period of Time) বোঝাতে 'For' বসে (যেমন: for two hours, for five days); আর অতীত থেকে কোনো কাজ শুরুর সুনির্দিষ্ট বিন্দু (Point of Time) বোঝাতে 'Since' বসে (যেমন: since morning, since Monday, since 2010)।"
      },
      {
        id: "eng_ch1_saq3",
        questionBn: "Died of, Died from, Died for এবং Died in এর পার্থক্য উদাহরণসহ ব্যাখ্যা করুন।",
        answerBn: "১) নির্দিষ্ট রোগে মারা গেলে 'Died of' (He died of malaria)। ২) অতিরিক্ত খাওয়া, ক্লান্তি বা পরোক্ষ কারণে মারা গেলে 'Died from' (He died from overworking)। ৩) দেশের জন্য প্রাণ দিলে 'Died for' (Died for the country)। ৪) দুর্ঘটনায় মারা গেলে 'Died in' (Died in an accident)।"
      },
      {
        id: "eng_ch1_saq4",
        questionBn: "'Deal in' এবং 'Deal with' এর মধ্যে পার্থক্য কী?",
        answerBn: "'Deal in' ব্যবহৃত হয় কোনো পণ্য বা দ্রব্যের ব্যবসা করা বোঝাতে (যেমন: He deals in rice/garments); আর 'Deal with' ব্যবহৃত হয় কারো সাথে আচরণ করা, ব্যবহার করা বা কোনো সমস্যা সমাধান/আলোচনা করা বোঝাতে (যেমন: He knows how to deal with difficult clients)।"
      },
      {
        id: "eng_ch1_saq5",
        questionBn: "'Blind in' এবং 'Blind to' এর ব্যবহারিক পার্থক্য লিখুন।",
        answerBn: "শারীরিকভাবে এক চোখে বা উভয় চোখে দৃষ্টিহীন হলে 'Blind in' বসে (যেমন: He is blind in the left eye); কিন্তু সন্তানের দোষ বা ভুলের প্রতি অন্ধ ও উদাসীন থাকা বোঝালে 'Blind to' বসে (যেমন: A father should not be blind to his son's faults)।"
      },
      {
        id: "eng_ch1_saq6",
        questionBn: "Senior, Junior ও Prefer-এর পর 'than' না বসে 'to' বসে কেন?",
        answerBn: "Senior, Junior, Superior, Inferior, Prior, Prefer এবং Preferable হলো ল্যাটিন তুলনামূলক শব্দ (Latin Comparatives)। ল্যাটিন শব্দ হওয়ায় এদের সাথে সাধারণ তুলনাবোধক 'than' বসে না, বরং সর্বদা preposition 'to' ব্যবহৃত হয় (যেমন: Senior to me, Prefer milk to tea)।"
      },
      {
        id: "eng_ch1_saq7",
        questionBn: "'Beside' এবং 'Besides' এর মধ্যে ব্যাকরণগত পার্থক্য কী?",
        answerBn: "'Beside' (s ছাড়া) এর অর্থ হলো 'পাশে' বা 'ধার ঘেঁষে' (যেমন: Sit beside me); আর 'Besides' (s যুক্ত) এর অর্থ হলো 'তাছাড়া', 'অতিরিক্ত' বা 'ছাড়াও' (যেমন: Besides English, he speaks French fluently)।"
      },
      {
        id: "eng_ch1_saq8",
        questionBn: "'In time' এবং 'On time' এর মধ্যে পার্থক্য কী?",
        answerBn: "'On time' বলতে বোঝায় পূর্বনির্ধারিত কাঁটায় কাঁটায় সঠিক সময় (Punctual, যেমন: The train arrived on time at 4:00 PM); আর 'In time' বলতে বোঝায় নির্ধারিত সময়ের কিছুটা আগে বা উপযুক্ত সময়ে (Early enough / not late, যেমন: We reached the station in time to catch the train)।"
      }
    ]
  }
};

export const ENGLISH_CH1_QUESTIONS: Question[] = [
  {
    id: "vol3_ch1_q1",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub1",
    questionBn: "He is ___ honest man.",
    options: ["a", "an", "the", "no article"],
    correctIndex: 1,
    explanationBn: "'honest'-এর 'h' অনুচ্চারিত থেকে 'অ' স্বরধ্বনি উচ্চারিত হওয়ায় 'an' বসবে।",
    difficulty: "easy",
    tags: ["Article", "Indefinite Article"]
  },
  {
    id: "vol3_ch1_q2",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub1",
    questionBn: "I have ___ one-rupee note.",
    options: ["a", "an", "the", "no article"],
    correctIndex: 0,
    explanationBn: "'one'-এর উচ্চারণ 'ওয়া' (Wa) এর মতো হওয়ায় এর পূর্বে 'a' বসে।",
    difficulty: "easy",
    tags: ["Article", "one-rupee note"]
  },
  {
    id: "vol3_ch1_q3",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub1",
    questionBn: "Sri Lanka is ___ island.",
    options: ["a", "an", "the", "no article"],
    correctIndex: 1,
    explanationBn: "'island' স্বরধ্বনি (Vowel sound 'আই') দিয়ে শুরু হওয়ায় 'an' বসবে।",
    difficulty: "easy",
    tags: ["Article", "island"]
  },
  {
    id: "vol3_ch1_q4",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub1",
    questionBn: "He is ___ European.",
    options: ["a", "an", "the", "no article"],
    correctIndex: 0,
    explanationBn: "'European'-এর উচ্চারণ 'ইউ' (You) এর মতো হওয়ায় 'a' বসে।",
    difficulty: "easy",
    tags: ["Article", "European"]
  },
  {
    id: "vol3_ch1_q5",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub1",
    questionBn: "This is ___ unique case.",
    options: ["a", "an", "the", "no article"],
    correctIndex: 0,
    explanationBn: "'unique'-এর উচ্চারণ 'ইউ' এর মতো হওয়ায় 'a' বসবে।",
    difficulty: "easy",
    tags: ["Article", "unique"]
  },
  {
    id: "vol3_ch1_q6",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub1",
    questionBn: "___ earth moves round the sun.",
    options: ["A", "An", "The", "No article"],
    correctIndex: 2,
    explanationBn: "মহাবিশ্বের একক বস্তু (Earth, Sun, Moon)-এর পূর্বে Definite Article 'The' বসে।",
    difficulty: "easy",
    tags: ["Article", "The earth"]
  },
  {
    id: "vol3_ch1_q7",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub1",
    questionBn: "Let us discuss ___ matter.",
    options: ["a", "an", "the", "no article"],
    correctIndex: 2,
    explanationBn: "নির্দিষ্ট বিষয় বা প্রস্তাব বোঝাতে 'the matter' হয়।",
    difficulty: "easy",
    tags: ["Article", "Definite Article"]
  },
  {
    id: "vol3_ch1_q8",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub1",
    questionBn: "He reads ___ Gita daily.",
    options: ["a", "an", "the", "no article"],
    correctIndex: 2,
    explanationBn: "ধর্মগ্রন্থের নামের পূর্বে 'The' বসে (The Gita, The Quran, The Bible)।",
    difficulty: "easy",
    tags: ["Article", "Holy Books"]
  },
  {
    id: "vol3_ch1_q9",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub1",
    questionBn: "He is ___ Newton of our day.",
    options: ["a", "an", "the", "no article"],
    correctIndex: 2,
    explanationBn: "Proper Noun-এর সাথে তুলনা করে উপমা দিলে তার পূর্বে 'The' বসে।",
    difficulty: "medium",
    tags: ["Article", "Proper noun comparison"]
  },
  {
    id: "vol3_ch1_q10",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub1",
    questionBn: "___ rich are not always happy.",
    options: ["A", "An", "The", "No article"],
    correctIndex: 2,
    explanationBn: "Adjective-এর পূর্বে 'The' বসিয়ে সমগ্র শ্রেণিকে (The rich, The poor) নির্দেশ করা হয়।",
    difficulty: "easy",
    tags: ["Article", "The rich"]
  },
  {
    id: "vol3_ch1_q11",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub1",
    questionBn: "His brother is ___ M.A. in English.",
    options: ["a", "an", "the", "no article"],
    correctIndex: 1,
    explanationBn: "'M.A.' সংক্ষিপ্ত শব্দের প্রথম অক্ষর 'M' (উচ্চারণ 'এম' - Vowel sound) দিয়ে শুরু হওয়ায় 'an' বসবে।",
    difficulty: "easy",
    tags: ["Article", "Abbreviation"]
  },
  {
    id: "vol3_ch1_q12",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub1",
    questionBn: "___ higher you climb, the colder it gets.",
    options: ["A", "An", "The", "No article"],
    correctIndex: 2,
    explanationBn: "সমান্তরাল বৃদ্ধি বা হ্রাস বোঝাতে Comparative Adjective-এর পূর্বে 'The' বসে (The higher... the colder)।",
    difficulty: "medium",
    tags: ["Article", "Double Comparative"]
  },
  {
    id: "vol3_ch1_q13",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub1",
    questionBn: "___ Ganga is a sacred river.",
    options: ["A", "An", "The", "No article"],
    correctIndex: 2,
    explanationBn: "পবিত্র নদী, সমুদ্র ও পর্বতমালার নামের পূর্বে সর্বদা 'The' বসে।",
    difficulty: "easy",
    tags: ["Article", "River"]
  },
  {
    id: "vol3_ch1_q14",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub1",
    questionBn: "He plays ___ football very well.",
    options: ["a", "an", "the", "no article"],
    correctIndex: 3,
    explanationBn: "যে কোনো খেলার নামের (football, cricket, chess) পূর্বে কোনো Article বসে না।",
    difficulty: "easy",
    tags: ["Article", "Omission of Article"]
  },
  {
    id: "vol3_ch1_q15",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub1",
    questionBn: "Mr. Sen is ___ honourable member of the committee.",
    options: ["a", "an", "the", "no article"],
    correctIndex: 1,
    explanationBn: "'honourable'-এ 'h' সাইলেন্ট এবং উচ্চারণ স্বরধ্বনি দিয়ে শুরু হওয়ায় 'an' বসে।",
    difficulty: "easy",
    tags: ["Article", "Silent H"]
  },
  {
    id: "vol3_ch1_q16",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub2",
    questionBn: "We will meet ___ 5 o'clock ___ Sunday.",
    options: ["on, at", "at, on", "in, on", "at, in"],
    correctIndex: 1,
    explanationBn: "নির্দিষ্ট ঘণ্টার সময় বোঝাতে 'at 5 o'clock' এবং দিনের নাম বোঝাতে 'on Sunday' বসে।",
    difficulty: "easy",
    tags: ["Preposition", "Time"]
  },
  {
    id: "vol3_ch1_q17",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub2",
    questionBn: "He lives ___ Malda ___ West Bengal.",
    options: ["in, at", "at, in", "on, in", "at, at"],
    correctIndex: 1,
    explanationBn: "তুলনামূলক ছোট স্থান/শহরের আগে 'at' এবং রাজ্য/বড় অঞ্চলের আগে 'in' বসে।",
    difficulty: "easy",
    tags: ["Preposition", "Place"]
  },
  {
    id: "vol3_ch1_q18",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub2",
    questionBn: "The boy jumped ___ the swimming pool.",
    options: ["in", "into", "on", "onto"],
    correctIndex: 1,
    explanationBn: "বাইরে থেকে ভেতরে গতিশীলভাবে প্রবেশের ক্ষেত্রে 'into' বসে।",
    difficulty: "easy",
    tags: ["Preposition", "Motion"]
  },
  {
    id: "vol3_ch1_q19",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub2",
    questionBn: "The tired traveler sat ___ the shade of a tree.",
    options: ["under", "in", "on", "below"],
    correctIndex: 1,
    explanationBn: "গাছের ছায়ায় বসলে 'in the shade of a tree' হয় (under the tree কিন্তু in the shade)।",
    difficulty: "medium",
    tags: ["Preposition", "Idiomatic Usage"]
  },
  {
    id: "vol3_ch1_q20",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub2",
    questionBn: "The fan is moving ___ our heads.",
    options: ["above", "over", "on", "up"],
    correctIndex: 1,
    explanationBn: "সরাসরি উল্লম্বভাবে মাথার উপরে এবং চলমান থাকলে 'over' ব্যবহৃত হয়।",
    difficulty: "medium",
    tags: ["Preposition", "Position"]
  },
  {
    id: "vol3_ch1_q21",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub3",
    questionBn: "He is good ___ English.",
    options: ["in", "at", "on", "with"],
    correctIndex: 1,
    explanationBn: "কোনো বিষয়ে দক্ষ বোঝাতে Fixed Preposition 'Good at' ব্যবহৃত হয়।",
    difficulty: "easy",
    tags: ["Fixed Preposition", "good at"]
  },
  {
    id: "vol3_ch1_q22",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub3",
    questionBn: "Listen ___ what your teacher says.",
    options: ["to", "for", "at", "with"],
    correctIndex: 0,
    explanationBn: "'Listen'-এর পর সর্বদা preposition 'to' বসে (Listen to)।",
    difficulty: "easy",
    tags: ["Preposition", "listen to"]
  },
  {
    id: "vol3_ch1_q23",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub3",
    questionBn: "I am fond ___ classical music.",
    options: ["of", "off", "for", "in"],
    correctIndex: 0,
    explanationBn: "প্রিয় বা অনুরাগী বোঝাতে 'Fond of' বসে।",
    difficulty: "easy",
    tags: ["Preposition", "fond of"]
  },
  {
    id: "vol3_ch1_q24",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub3",
    questionBn: "She has been suffering from fever ___ Monday last.",
    options: ["from", "since", "for", "to"],
    correctIndex: 1,
    explanationBn: "অতীতের সুনির্দিষ্ট শুরুর সময় (Point of time) বোঝাতে 'since' বসে।",
    difficulty: "easy",
    tags: ["Preposition", "since"]
  },
  {
    id: "vol3_ch1_q25",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub3",
    questionBn: "I have been reading this novel ___ three hours.",
    options: ["for", "since", "from", "in"],
    correctIndex: 0,
    explanationBn: "সময়ের দীর্ঘ ব্যাপ্তি (Period of time) বোঝাতে 'for three hours' বসে।",
    difficulty: "easy",
    tags: ["Preposition", "for"]
  },
  {
    id: "vol3_ch1_q26",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub3",
    questionBn: "Distribute the sweets ___ the two boys.",
    options: ["among", "between", "in", "to"],
    correctIndex: 1,
    explanationBn: "দুজনের মধ্যে বণ্টন বা তুলনা বোঝাতে 'between' বসে।",
    difficulty: "easy",
    tags: ["Preposition", "between"]
  },
  {
    id: "vol3_ch1_q27",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub3",
    questionBn: "Distribute the chocolates ___ all the students in the class.",
    options: ["among", "between", "with", "for"],
    correctIndex: 0,
    explanationBn: "দুইয়ের অধিক বা অনেকের মধ্যে ভাগ বোঝাতে 'among' বসে।",
    difficulty: "easy",
    tags: ["Preposition", "among"]
  },
  {
    id: "vol3_ch1_q28",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub3",
    questionBn: "He is senior ___ me in service by three years.",
    options: ["than", "to", "from", "by"],
    correctIndex: 1,
    explanationBn: "Senior, Junior, Superior, Inferior-এর পর সর্বদা 'to' বসে (than কখনো নয়)।",
    difficulty: "easy",
    tags: ["Preposition", "senior to"]
  },
  {
    id: "vol3_ch1_q29",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub3",
    questionBn: "She prefers tea ___ coffee.",
    options: ["over", "to", "than", "from"],
    correctIndex: 1,
    explanationBn: "'Prefer'-এর পর অধিক পছন্দের ক্ষেত্রে 'to' বসে।",
    difficulty: "easy",
    tags: ["Preposition", "prefer to"]
  },
  {
    id: "vol3_ch1_q30",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub3",
    questionBn: "The patient died ___ cholera last night.",
    options: ["of", "from", "in", "by"],
    correctIndex: 0,
    explanationBn: "নির্দিষ্ট কোনো রোগে মারা গেলে 'Died of' বসে।",
    difficulty: "easy",
    tags: ["Preposition", "died of"]
  },
  {
    id: "vol3_ch1_q31",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub3",
    questionBn: "The young boy died ___ overeating at the feast.",
    options: ["of", "from", "by", "for"],
    correctIndex: 1,
    explanationBn: "অতিরিক্ত খাওয়া বা শারীরিক পরিশ্রমে মারা গেলে 'Died from' বসে।",
    difficulty: "medium",
    tags: ["Preposition", "died from"]
  },
  {
    id: "vol3_ch1_q32",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub3",
    questionBn: "My uncle deals ___ rice and wheat in the local market.",
    options: ["with", "in", "at", "for"],
    correctIndex: 1,
    explanationBn: "কোনো পণ্য বা দ্রব্যের ব্যবসা করা বোঝাতে 'Deal in' বসে।",
    difficulty: "easy",
    tags: ["Preposition", "deal in"]
  },
  {
    id: "vol3_ch1_q33",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub3",
    questionBn: "A gentleman always knows how to deal ___ rude people.",
    options: ["in", "with", "for", "to"],
    correctIndex: 1,
    explanationBn: "মানুষের সাথে আচরণ বা পরিস্থিতি সামলানো বোঝাতে 'Deal with' বসে।",
    difficulty: "easy",
    tags: ["Preposition", "deal with"]
  },
  {
    id: "vol3_ch1_q34",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub3",
    questionBn: "The father is unfortunately blind ___ the vices of his only son.",
    options: ["in", "to", "of", "with"],
    correctIndex: 1,
    explanationBn: "কারো দোষ বা ভুলের প্রতি উদাসীন/অন্ধ হলে 'Blind to' বসে।",
    difficulty: "medium",
    tags: ["Preposition", "blind to"]
  },
  {
    id: "vol3_ch1_q35",
    subjectId: "english",
    chapterId: "eng_ch1",
    subTopicId: "eng_ch1_sub3",
    questionBn: "I congratulate you ___ your brilliant success in the GP examination.",
    options: ["for", "on", "at", "with"],
    correctIndex: 1,
    explanationBn: "কারো কোনো সাফল্যে অভিনন্দন জানানো বোঝাতে 'Congratulate on' বসে।",
    difficulty: "easy",
    tags: ["Preposition", "congratulate on"]
  }
];
