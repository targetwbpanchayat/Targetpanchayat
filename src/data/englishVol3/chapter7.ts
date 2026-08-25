import { StudyChapter, Question } from "../../types";

export const ENGLISH_CH7_STUDY: StudyChapter = {
  id: "eng_ch7",
  subjectId: "english",
  chapterNumber: 7,
  titleBn: "One Word Substitution (এক কথায় প্রকাশ)",
  titleEn: "One Word Substitution - Root Words (-cide, -phobia, -phile, -cracy), Professions & Places",
  estimatedMinutes: 35,
  importantNotesCount: 30,
  summary: "এক কথায় প্রকাশের সম্পূর্ণ গাইড। রুট ওয়ার্ডভিত্তিক বিন্যাস: হত্যা সংক্রান্ত (-cide: Matricide, Patricide, Homicide), ভীতি সংক্রান্ত (-phobia: Claustrophobia, Hydrophobia, Acrophobia), শাসন ব্যবস্থা (-cracy/-archy: Democracy, Plutocracy, Autocracy, Anarchy), স্থান ও পশু-পাখির নিবাস (Aviary, Apiary, Arsenal, Mortuary, Aquarium), ব্যক্তি ও পেশা (Philanthropist, Misanthrope, Polyglot, Somnambulist, Infallible, Novice, Veteran), এবং বিজ্ঞান ও বিদ্যা বিষয়ক ধারণাসমূহ।",
  subTopics: [
    {
      id: "eng_ch7_sub1",
      chapterId: "eng_ch7",
      subjectId: "english",
      titleBn: "Root Words: -cide, -phobia, -cracy & -ology",
      titleEn: "Killings (-cide), Fears (-phobia), Governance (-cracy) & Studies (-ology)",
      orderIndex: 1,
      summaryBn: "হত্যা: Patricide (পিতা), Matricide (মাতা), Fratricide (ভ্রাতা), Regicide (রাজা)। ভয়: Hydrophobia (জল), Claustrophobia (আবদ্ধ স্থান), Acrophobia (উচ্চতা)। শাসন: Plutocracy (ধনীদের), Autocracy (একনায়কতন্ত্র), Bureaucracy (আমলাতন্ত্র)। বিদ্যা: Ornithology (পাখি), Entomology (কীটপতঙ্গ)।",
      keyConcepts: ["Regicide = Killing of king", "Claustrophobia = Fear of enclosed spaces", "Plutocracy = Government by the wealthy", "Ornithology = Study of birds"]
    },
    {
      id: "eng_ch7_sub2",
      chapterId: "eng_ch7",
      subjectId: "english",
      titleBn: "Persons, Habits, Traits & Quirks",
      titleEn: "Optimist, Pessimist, Philanthropist, Misanthrope, Polyglot, Somnambulist",
      orderIndex: 2,
      summaryBn: "Optimist (আশাবাদী), Pessimist (হতাশাবাদী), Philanthropist (মানবপ্রেমিক), Misanthrope (মানববিদ্বেষী), Polyglot (বহুভাষাবিদ), Veteran (অভিজ্ঞ), Novice (শিক্ষানবিস), Somnambulist (ঘুমের ঘোরে হাঁটা), Omnipresent (সর্বত্র বিরাজমান), Omniscient (সর্বজ্ঞ)।",
      keyConcepts: ["Philanthropist = Lover of mankind", "Misanthrope = Hater of mankind", "Somnambulist = Sleepwalker", "Polyglot = Knows many languages"]
    },
    {
      id: "eng_ch7_sub3",
      chapterId: "eng_ch7",
      subjectId: "english",
      titleBn: "Places, Objects & Medical Concepts",
      titleEn: "Aviary, Apiary, Arsenal, Panacea, Infallible, Posthumous, Potable",
      orderIndex: 3,
      summaryBn: "Aviary (পাখি রাখার স্থান), Apiary (মৌমাছির বাসস্থান), Arsenal (অস্ত্রাগার), Mortuary (মর্গ), Panacea (সব রোগের মহৌষধ), Infallible (যে কখনো ভুল করে না), Posthumous (মরণোত্তর), Potable (পানীয় উপযোগী)।",
      keyConcepts: ["Aviary = Birds", "Apiary = Bees", "Arsenal = Weapons", "Panacea = Cure for all ills", "Infallible = Incapable of error"]
    }
  ],
  content: {
    introduction: "One Word Substitution হলো একটি দীর্ঘ বাক্যাংশ বা ধারণাকে একটিমাত্র যথার্থ ইংরেজি শব্দে প্রকাশ করার প্রক্রিয়া। বিভিন্ন সরকারি প্রতিযোগিতামূলক পরীক্ষায় এর প্রশ্ন সংখ্যা প্রচুর।",
    sections: [
      {
        heading: "১. রুট ওয়ার্ডভিত্তিক এক কথায় প্রকাশ (Root Words)",
        body: [
          "• -CIDE (Killing বা হত্যা সংক্রান্ত):",
          "  - Patricide: Killing of one's father (পিতৃহত্যা)",
          "  - Matricide: Killing of one's mother (মাতৃহত্যা)",
          "  - Fratricide: Killing of one's brother (ভ্রাতৃহত্যা)",
          "  - Sororicide: Killing of one's sister (ভগিনীহত্যা)",
          "  - Uxoricide: Killing of one's wife (পত্নীহত্যা)",
          "  - Regicide: Killing of a king/queen (রাজহত্যা)",
          "  - Homicide: Killing of a human being (নরহত্যা)",
          "• -PHOBIA (তীব্র ভয় বা ভীতি সংক্রান্ত):",
          "  - Claustrophobia: Fear of enclosed/confined small spaces (আবদ্ধ স্থানের ভয়)",
          "  - Acrophobia: Fear of high places (উচ্চতার ভয়)",
          "  - Hydrophobia: Fear of water (জলাতঙ্ক)",
          "  - Xenophobia: Fear or hatred of foreigners/strangers (বিদেশিভীতি)",
          "  - Nyctophobia: Fear of darkness (অন্ধকারের ভয়)",
          "• -CRACY / -ARCHY (শাসন ব্যবস্থা):",
          "  - Democracy: Government by the people (গণতন্ত্র)",
          "  - Plutocracy: Government by the wealthy/rich class (ধনিকতন্ত্র)",
          "  - Autocracy / Dictatorship: Government by one absolute ruler (একনায়কতন্ত্র)",
          "  - Bureaucracy: Government by officials/civil servants (আমলাতন্ত্র)",
          "  - Anarchy: Absence of government or law (নৈরাজ্য)",
          "  - Oligarchy: Government by a small group of powerful people (গোষ্ঠীতন্ত্র)"
        ]
      },
      {
        heading: "২. ব্যক্তি, মানসিক স্বভাব ও পেশা সংক্রান্ত (Persons & Traits)",
        body: [
          "• Philanthropist: One who loves mankind and works for welfare (মানবপ্রেমিক) ➔ Misanthrope: One who hates mankind (মানববিদ্বেষী)",
          "• Optimist: One who looks at the bright side of things (আশাবাদী) ➔ Pessimist: One who looks at the dark side of things (হতাশাবাদী)",
          "• Polyglot / Multilingual: A person who knows and speaks many languages (বহুভাষাবিদ)",
          "• Somnambulist: One who walks in sleep (ঘুমের ঘোরে হাঁটা ব্যক্তি)",
          "• Somniloquist: One who talks in sleep (ঘুমের ঘোরে কথা বলা ব্যক্তি)",
          "• Veteran: A person who has long experience in an occupation (দীর্ঘ অভিজ্ঞতাসম্পন্ন)",
          "• Novice / Tyro: A person who is new to a profession or skill (অনভিজ্ঞ/শিক্ষানবিস)",
          "• Omniscient: One who knows everything (সর্বজ্ঞ); Omnipotent: All-powerful (সর্বশক্তিমান); Omnipresent: Present everywhere (সর্বত্র বিরাজমান)",
          "• Infallible: One who is incapable of making mistakes or errors (অভ্রান্ত)",
          "• Cannibal: One who eats human flesh (নরখাদক)"
        ]
      },
      {
        heading: "৩. স্থান, জীবজন্তু ও সার্বজনীন পরিভাষা (Places & Concepts)",
        body: [
          "• Aviary: A place where birds are kept (পাখিশালা)",
          "• Apiary: A place where bees are kept and reared (মৌমাছিশালা)",
          "• Arsenal: A place where weapons and ammunitions are stored (অস্ত্রাগার)",
          "• Mortuary / Morgue: A place where dead bodies are kept for autopsy/identification (মর্গ)",
          "• Panacea: A remedy or universal cure for all diseases (সর্বব্যাধিহর মহৌষধ)",
          "• Posthumous: Published or born after the death of the author/father (মরণোত্তর)",
          "• Potable: Water or liquid that is safe and fit to drink (পানযোগ্য)",
          "• Edible: Something that is fit and safe to be eaten (ভক্ষণযোগ্য/খাদ্যোপযোগী)",
          "• Palindrome: A word or phrase that reads the same forwards and backwards (যেমন: MADAM, LEVEL, NOON)"
        ]
      }
    ],
    examTips: [
      "Aviary (পাখি) বনাম Apiary (মৌমাছি) — এই দুটি শব্দ বারবার পরীক্ষায় অপশন হিসেবে দেওয়া হয়!",
      "Panacea = A cure for all ills (সব রোগের মহৌষধ)।",
      "Posthumous = মরণোত্তর পুরস্কার বা সন্তান।",
      "Somnambulist (ঘুমের ঘোরে হাঁটা) এবং Somniloquist (ঘুমের ঘোরে কথা বলা)-এর পার্থক্য মনে রাখবেন।"
    ],
    quickRevisionPoints: [
      "-cide = Killing; -phobia = Fear; -cracy = Rule.",
      "Philanthropist (Loves mankind) x Misanthrope (Hates).",
      "Optimist (Bright side) x Pessimist (Dark side).",
      "Apiary = Bees; Aviary = Birds; Arsenal = Weapons.",
      "Panacea = Universal cure; Infallible = Never wrong.",
      "Somnambulist = Sleepwalker; Potable = Fit to drink."
    ],
    oneLiners: [
      "A person who loves mankind-কে বলা হয় Philanthropist।",
      "যে ব্যক্তি মানবজাতিকে ঘৃণা করে তাকে Misanthrope বলে।",
      "যে ব্যক্তি সবসময় আশার দিকটি দেখে তাকে Optimist এবং অন্ধকারের দিক দেখলে Pessimist বলে।",
      "যিনি সব জানেন তিনি Omniscient, সর্বত্র বিরাজমান Omnipresent এবং সর্বশক্তিমান Omnipotent।",
      "দীর্ঘ অভিজ্ঞতাসম্পন্ন ব্যক্তিকে Veteran এবং কোনো কাজে সম্পূর্ণ নতুন ব্যক্তিকে Novice বা Tyro বলে।",
      "পাখি রাখার স্থানকে Aviary এবং মৌমাছি রাখার স্থানকে Apiary বলা হয়।",
      "অস্ত্রশস্ত্র ও গোলাবারুদ রাখার স্থানকে Arsenal (অস্ত্রাগার) বলা হয়।",
      "সব রোগের মহৌষধকে ইংরেজিতে Panacea (A cure for all ills) বলা হয়।",
      "যে ব্যক্তি কখনো ভুল বা পাপ করে না তাকে Infallible (অভ্রান্ত) বলা হয়।",
      "ঘুমের ঘোরে হাঁটার স্বভাবকে Somnambulist এবং ঘুমের ঘোরে কথা বলাকে Somniloquist বলে।",
      "যে ঘটনা কোনোভাবেই এড়ানো যায় না তাকে Inevitable (অনিবার্য) বলে।",
      "সোজা ও উল্টো উভয় দিক থেকেই একই বানানযুক্ত শব্দকে Palindrome (যেমন: MADAM, LEVEL) বলে।",
      "পান করার উপযোগী জলকে Potable এবং খাওয়ার উপযোগী খাদ্যকে Edible বলে।",
      "পিতা হত্যার অপরাধকে Patricide, মাতা হত্যাকে Matricide এবং রাজা হত্যাকে Regicide বলে।",
      "আবদ্ধ ছোট স্থানের অস্বাভাবিক ভয়কে Claustrophobia এবং উচ্চতার ভয়কে Acrophobia বলে।",
      "ধনীদের দ্বারা পরিচালিত শাসনব্যবস্থাকে Plutocracy এবং আমলাদের শাসনকে Bureaucracy বলে।",
      "বহু ভাষায় দক্ষ বা একাধিক ভাষায় কথা বলতে সক্ষম ব্যক্তিকে Polyglot বা Multilingual বলে।",
      "যে ব্যক্তি নিজের জীবনবৃত্তান্ত নিজে লেখে তাকে Autobiography এবং অন্য কেউ লিখলে Biography বলে।"
    ],
    saqs: [
      {
        id: "eng_ch7_saq1",
        questionBn: "'Aviary' এবং 'Apiary'-এর মধ্যে সুনির্দিষ্ট পার্থক্য কী?",
        answerBn: "• 'Aviary' হলো এমন একটি সংরক্ষিত স্থান বা বড় খাঁচাবিশেষ যেখানে নানা প্রজাতির পাখি (Birds) রাখা ও প্রদর্শন করা হয়।\n• 'Apiary' হলো এমন একটি স্থান যেখানে কৃত্রিম মৌচাকের মাধ্যমে মৌমাছি (Bees) পালন করে মধু সংগ্রহ ও বংশবৃদ্ধি করা হয়।"
      },
      {
        id: "eng_ch7_saq2",
        questionBn: "'Panacea' এবং 'Infallible' শব্দ দুটির সঠিক সংজ্ঞা লিখুন।",
        answerBn: "• Panacea: A remedy or medicine that is believed to cure all diseases or difficulties (সকল রোগের নিরাময়কারী সর্বব্যাধিহর ওষুধ)।\n• Infallible: Incapable of making mistakes, committing errors, or failing in judgment (অভ্রান্ত বা ত্রুটিহীন ব্যক্তি)।"
      },
      {
        id: "eng_ch7_saq3",
        questionBn: "'Palindrome' কী? ইংরেজি থেকে দুটি বাস্তব উদাহরণ দিন।",
        answerBn: "Palindrome হলো এমন কোনো শব্দ, সংখ্যা বা বাক্য যা সামনে থেকে পেছনের দিকে বা পেছন থেকে সামনের দিকে পড়লে অক্ষরের ক্রম সম্পূর্ণ অপরিবর্তিত থাকে। যেমন: 'MADAM', 'LEVEL', 'RADAR', 'NOON'।"
      },
      {
        id: "eng_ch7_saq4",
        questionBn: "'Somnambulist' এবং 'Somniloquist'-এর মধ্যে পার্থক্য কী?",
        answerBn: "• Somnambulist: One who walks while asleep (যে ব্যক্তি ঘুমের ঘোরে হাঁটে)।\n• Somniloquist: One who talks while asleep (যে ব্যক্তি ঘুমের ঘোরে কথাবার্তা বা প্রলাপ বকে)।"
      },
      {
        id: "eng_ch7_saq5",
        questionBn: "শাসনব্যবস্থা বিষয়ক 'Plutocracy' এবং 'Bureaucracy'-এর অর্থ কী?",
        answerBn: "• Plutocracy: Government governed or controlled exclusively by the wealthy or rich class (ধনিকতন্ত্র)।\n• Bureaucracy: Government run by official state administrators and civil servants rather than elected representatives (আমলাতন্ত্র)।"
      },
      {
        id: "eng_ch7_saq6",
        questionBn: "'Claustrophobia' এবং 'Acrophobia' দ্বারা কী ধরনের ভীতি বোঝায়?",
        answerBn: "• Claustrophobia: An extreme or irrational fear of confined or enclosed small spaces (আবদ্ধ বা সংকীর্ণ স্থানের ভীতি)।\n• Acrophobia: An abnormal fear of heights or being at high altitudes (উঁচু স্থান থেকে দেখার ভীতি)।"
      },
      {
        id: "eng_ch7_saq7",
        questionBn: "'Potable' এবং 'Edible' শব্দ দুটির অর্থ ও ব্যবহার লিখুন।",
        answerBn: "• Potable: Safe and suitable for drinking (যেমন: Potable drinking water - পানযোগ্য নিরাপদ জল)।\n• Edible: Fit, safe, and suitable to be eaten as food (যেমন: Edible oil/mushrooms - খাওয়ার উপযোগী পদার্থ)।"
      },
      {
        id: "eng_ch7_saq8",
        questionBn: "'Posthumous' শব্দের অর্থ কী এবং এর সাধারণ প্রয়োগ কোথায় দেখা যায়?",
        answerBn: "'Posthumous' শব্দের অর্থ হলো 'মরণোত্তর', অর্থাৎ কোনো ব্যক্তির মৃত্যুর পরে যা ঘটে বা দেওয়া হয়। এর সাধারণ প্রয়োগ হলো: Posthumous award (মৃত্যুর পর প্রদত্ত সম্মাননা বা পদক), Posthumous child (পিতার মৃত্যুর পর জন্ম নেওয়া সন্তান), বা Posthumous book (লেখকের মৃত্যুর পর প্রকাশিত বই)।"
      }
    ]
  }
};

export const ENGLISH_CH7_QUESTIONS: Question[] = [
  {
    id: "vol3_ch7_q1",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub2",
    questionBn: "A person who loves mankind and works for their welfare:",
    options: ["Misanthrope", "Philanthropist", "Cannibal", "Optimist"],
    correctIndex: 1,
    explanationBn: "মানবপ্রেমিককে 'Philanthropist' বলা হয়।",
    difficulty: "easy",
    tags: ["One Word", "Philanthropist"]
  },
  {
    id: "vol3_ch7_q2",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub2",
    questionBn: "A person who hates mankind:",
    options: ["Philanthropist", "Misanthrope", "Misogynist", "Altruist"],
    correctIndex: 1,
    explanationBn: "মানবজাতিকে ঘৃণা করা ব্যক্তিকে 'Misanthrope' বলা হয়।",
    difficulty: "easy",
    tags: ["One Word", "Misanthrope"]
  },
  {
    id: "vol3_ch7_q3",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub2",
    questionBn: "One who looks at the bright side of things:",
    options: ["Pessimist", "Optimist", "Pacifist", "Realist"],
    correctIndex: 1,
    explanationBn: "আশাবাদী ব্যক্তিকে 'Optimist' বলা হয়।",
    difficulty: "easy",
    tags: ["One Word", "Optimist"]
  },
  {
    id: "vol3_ch7_q4",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub2",
    questionBn: "One who walks in sleep:",
    options: ["Somnambulist", "Somniloquist", "Insomniac", "Nocturnal"],
    correctIndex: 0,
    explanationBn: "ঘুমের ঘোরে হাঁটার স্বভাবযুক্ত ব্যক্তিকে 'Somnambulist' বলে।",
    difficulty: "easy",
    tags: ["One Word", "Somnambulist"]
  },
  {
    id: "vol3_ch7_q5",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub3",
    questionBn: "A place where birds are kept:",
    options: ["Apiary", "Aviary", "Aquarium", "Sanctuary"],
    correctIndex: 1,
    explanationBn: "পাখি রাখার স্থানকে 'Aviary' (পাখিশালা) বলা হয়।",
    difficulty: "easy",
    tags: ["One Word", "Aviary"]
  },
  {
    id: "vol3_ch7_q6",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub3",
    questionBn: "A place where bees are kept:",
    options: ["Aviary", "Apiary", "Hutch", "Stable"],
    correctIndex: 1,
    explanationBn: "মৌমাছি পালন ও রাখার স্থানকে 'Apiary' বলে।",
    difficulty: "easy",
    tags: ["One Word", "Apiary"]
  },
  {
    id: "vol3_ch7_q7",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub3",
    questionBn: "A cure or remedy for all diseases:",
    options: ["Antibiotic", "Panacea", "Vaccine", "Antidote"],
    correctIndex: 1,
    explanationBn: "সব রোগের মহৌষধকে 'Panacea' (সর্বব্যাধিহর ওষুধ) বলা হয়।",
    difficulty: "easy",
    tags: ["One Word", "Panacea"]
  },
  {
    id: "vol3_ch7_q8",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub2",
    questionBn: "One who is incapable of making mistakes or errors:",
    options: ["Infallible", "Incurable", "Ineligible", "Invincible"],
    correctIndex: 0,
    explanationBn: "যে কখনো ভুল করে না তাকে 'Infallible' (অভ্রান্ত) বলে।",
    difficulty: "easy",
    tags: ["One Word", "Infallible"]
  },
  {
    id: "vol3_ch7_q9",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub1",
    questionBn: "Killing of a king or queen:",
    options: ["Homicide", "Regicide", "Patricide", "Fratricide"],
    correctIndex: 1,
    explanationBn: "রাজা বা রানি হত্যাকে 'Regicide' বলে।",
    difficulty: "easy",
    tags: ["One Word", "Regicide"]
  },
  {
    id: "vol3_ch7_q10",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub1",
    questionBn: "Killing of one's father:",
    options: ["Patricide", "Matricide", "Parricide", "Suicide"],
    correctIndex: 0,
    explanationBn: "পিতাকে হত্যা করার অপরাধকে 'Patricide' বলে।",
    difficulty: "easy",
    tags: ["One Word", "Patricide"]
  },
  {
    id: "vol3_ch7_q11",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub1",
    questionBn: "Killing of one's mother:",
    options: ["Matricide", "Patricide", "Sororicide", "Infanticide"],
    correctIndex: 0,
    explanationBn: "মাতাকে হত্যা করার অপরাধকে 'Matricide' বলে।",
    difficulty: "easy",
    tags: ["One Word", "Matricide"]
  },
  {
    id: "vol3_ch7_q12",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub1",
    questionBn: "Fear of confined or enclosed small spaces:",
    options: ["Hydrophobia", "Acrophobia", "Claustrophobia", "Xenophobia"],
    correctIndex: 2,
    explanationBn: "আবদ্ধ ছোট জায়গার অস্বাভাবিক ভয়কে 'Claustrophobia' বলে।",
    difficulty: "easy",
    tags: ["One Word", "Claustrophobia"]
  },
  {
    id: "vol3_ch7_q13",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub1",
    questionBn: "Fear of high places:",
    options: ["Acrophobia", "Hydrophobia", "Agoraphobia", "Pyrophobia"],
    correctIndex: 0,
    explanationBn: "উঁচু জায়গার ভয়কে 'Acrophobia' বলে।",
    difficulty: "easy",
    tags: ["One Word", "Acrophobia"]
  },
  {
    id: "vol3_ch7_q14",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub1",
    questionBn: "Government by the wealthy or rich class:",
    options: ["Democracy", "Plutocracy", "Autocracy", "Aristocracy"],
    correctIndex: 1,
    explanationBn: "ধনিক শ্রেণীর দ্বারা পরিচালিত সরকারকে 'Plutocracy' (ধনিকতন্ত্র) বলে।",
    difficulty: "easy",
    tags: ["One Word", "Plutocracy"]
  },
  {
    id: "vol3_ch7_q15",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub1",
    questionBn: "Government run by civil officials and administrators:",
    options: ["Bureaucracy", "Oligarchy", "Anarchy", "Theocracy"],
    correctIndex: 0,
    explanationBn: "আমলাদের দ্বারা পরিচালিত শাসনকে 'Bureaucracy' (আমলাতন্ত্র) বলে।",
    difficulty: "easy",
    tags: ["One Word", "Bureaucracy"]
  },
  {
    id: "vol3_ch7_q16",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub3",
    questionBn: "A place where weapons and ammunition are stored:",
    options: ["Granary", "Arsenal", "Hangar", "Museum"],
    correctIndex: 1,
    explanationBn: "অস্ত্রশস্ত্র ও গোলাবারুদ রাখার স্থানকে 'Arsenal' (অস্ত্রাগার) বলে।",
    difficulty: "easy",
    tags: ["One Word", "Arsenal"]
  },
  {
    id: "vol3_ch7_q17",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub2",
    questionBn: "A person who knows and speaks many languages:",
    options: ["Linguist", "Polyglot", "Grammarian", "Scholar"],
    correctIndex: 1,
    explanationBn: "একাধিক বা বহু ভাষায় কথা বলতে পারদর্শী ব্যক্তিকে 'Polyglot' বলে।",
    difficulty: "easy",
    tags: ["One Word", "Polyglot"]
  },
  {
    id: "vol3_ch7_q18",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub2",
    questionBn: "A person with long experience in any field:",
    options: ["Veteran", "Novice", "Amateur", "Prentice"],
    correctIndex: 0,
    explanationBn: "দীর্ঘ অভিজ্ঞতাসম্পন্ন ব্যক্তিকে 'Veteran' বলা হয়।",
    difficulty: "easy",
    tags: ["One Word", "Veteran"]
  },
  {
    id: "vol3_ch7_q19",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub2",
    questionBn: "A person who is new to a profession or trade:",
    options: ["Expert", "Veteran", "Novice", "Master"],
    correctIndex: 2,
    explanationBn: "কাজে নতুন বা শিক্ষানবিস ব্যক্তিকে 'Novice' বা 'Tyro' বলে।",
    difficulty: "easy",
    tags: ["One Word", "Novice"]
  },
  {
    id: "vol3_ch7_q20",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub3",
    questionBn: "Water that is suitable and safe for drinking:",
    options: ["Portable", "Potable", "Edible", "Palatable"],
    correctIndex: 1,
    explanationBn: "পানযোগ্য নিরাপদ জলকে 'Potable' (Potable water) বলা হয়।",
    difficulty: "medium",
    tags: ["One Word", "Potable"]
  },
  {
    id: "vol3_ch7_q21",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub3",
    questionBn: "A word that reads the same backward as forward (e.g., MADAM):",
    options: ["Acronym", "Anagram", "Palindrome", "Homonym"],
    correctIndex: 2,
    explanationBn: "সামনে বা পেছন উভয় দিক থেকে একই বানানযুক্ত শব্দকে 'Palindrome' বলে।",
    difficulty: "easy",
    tags: ["One Word", "Palindrome"]
  },
  {
    id: "vol3_ch7_q22",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub2",
    questionBn: "One who eats human flesh:",
    options: ["Herbivore", "Carnivore", "Cannibal", "Omnivore"],
    correctIndex: 2,
    explanationBn: "মানুষের মাংস ভক্ষণকারীকে 'Cannibal' (নরখাদক) বলে।",
    difficulty: "easy",
    tags: ["One Word", "Cannibal"]
  },
  {
    id: "vol3_ch7_q23",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub2",
    questionBn: "One who is present everywhere at the same time:",
    options: ["Omnipotent", "Omniscient", "Omnipresent", "Omnivorous"],
    correctIndex: 2,
    explanationBn: "সর্বত্র বিরাজমান সত্তাকে 'Omnipresent' বলা হয়।",
    difficulty: "easy",
    tags: ["One Word", "Omnipresent"]
  },
  {
    id: "vol3_ch7_q24",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub2",
    questionBn: "One who knows everything:",
    options: ["Omnipresent", "Omniscient", "Omnipotent", "Scholar"],
    correctIndex: 1,
    explanationBn: "যিনি সব জানেন তাকে 'Omniscient' (সর্বজ্ঞ) বলে।",
    difficulty: "easy",
    tags: ["One Word", "Omniscient"]
  },
  {
    id: "vol3_ch7_q25",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub3",
    questionBn: "An award or honor given after the recipient's death:",
    options: ["Premature", "Posthumous", "Antecedent", "Belated"],
    correctIndex: 1,
    explanationBn: "মৃত্যুর পরে প্রাপ্ত সম্মাননা বা বই প্রকাশকে 'Posthumous' (মরণোত্তর) বলে।",
    difficulty: "easy",
    tags: ["One Word", "Posthumous"]
  },
  {
    id: "vol3_ch7_q26",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub1",
    questionBn: "Scientific study of birds:",
    options: ["Entomology", "Ornithology", "Anthropology", "Archaeology"],
    correctIndex: 1,
    explanationBn: "পাখি বিষয়ক বিজ্ঞানসম্মত অধ্যয়নকে 'Ornithology' বলে।",
    difficulty: "easy",
    tags: ["One Word", "Ornithology"]
  },
  {
    id: "vol3_ch7_q27",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub1",
    questionBn: "Scientific study of insects:",
    options: ["Entomology", "Etymology", "Ecology", "Ichthyology"],
    correctIndex: 0,
    explanationBn: "কীটপতঙ্গ সংক্রান্ত বিজ্ঞানকে 'Entomology' বলে (Etymology হলো শব্দের উৎস)।",
    difficulty: "medium",
    tags: ["One Word", "Entomology"]
  },
  {
    id: "vol3_ch7_q28",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub3",
    questionBn: "That which cannot be avoided or prevented:",
    options: ["Infallible", "Inevitable", "Inaudible", "Incurable"],
    correctIndex: 1,
    explanationBn: "যা কোনোভাবেই এড়ানো যায় না তাকে 'Inevitable' (অনিবার্য) বলে।",
    difficulty: "easy",
    tags: ["One Word", "Inevitable"]
  },
  {
    id: "vol3_ch7_q29",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub3",
    questionBn: "A sound that cannot be heard:",
    options: ["Inaudible", "Audible", "Invisible", "Incomprehensible"],
    correctIndex: 0,
    explanationBn: "যা কানে শোনা যায় না তাকে 'Inaudible' বলে।",
    difficulty: "easy",
    tags: ["One Word", "Inaudible"]
  },
  {
    id: "vol3_ch7_q30",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub3",
    questionBn: "A place where dead bodies are kept for post-mortem or identification:",
    options: ["Cemetery", "Mortuary", "Crematorium", "Asylum"],
    correctIndex: 1,
    explanationBn: "ময়নাতদন্ত বা শনাক্তকরণের জন্য মৃতদেহ রাখার স্থানকে 'Mortuary' বা 'Morgue' বলে।",
    difficulty: "easy",
    tags: ["One Word", "Mortuary"]
  },
  {
    id: "vol3_ch7_q31",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub2",
    questionBn: "One who draws or produces maps:",
    options: ["Cartographer", "Calligrapher", "Choreographer", "Lexicographer"],
    correctIndex: 0,
    explanationBn: "মানচিত্র অঙ্কনকারীকে 'Cartographer' বলা হয়।",
    difficulty: "medium",
    tags: ["One Word", "Cartographer"]
  },
  {
    id: "vol3_ch7_q32",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub2",
    questionBn: "One who compiles a dictionary:",
    options: ["Lexicographer", "Bibliophile", "Cartographer", "Biographer"],
    correctIndex: 0,
    explanationBn: "অভিধান সংকলককে 'Lexicographer' বলা হয়।",
    difficulty: "medium",
    tags: ["One Word", "Lexicographer"]
  },
  {
    id: "vol3_ch7_q33",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub1",
    questionBn: "Absence of government and order in a country:",
    options: ["Monarchy", "Anarchy", "Autocracy", "Democracy"],
    correctIndex: 1,
    explanationBn: "সরকার ও আইনের অনুপস্থিতি বা চরম বিশৃঙ্খলাকে 'Anarchy' (নৈরাজ্য) বলে।",
    difficulty: "easy",
    tags: ["One Word", "Anarchy"]
  },
  {
    id: "vol3_ch7_q34",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub2",
    questionBn: "A person who talks in sleep:",
    options: ["Somniloquist", "Somnambulist", "Loquacious", "Ventriloquist"],
    correctIndex: 0,
    explanationBn: "ঘুমের মধ্যে কথা বলার অভ্যাসযুক্ত ব্যক্তিকে 'Somniloquist' বলে।",
    difficulty: "medium",
    tags: ["One Word", "Somniloquist"]
  },
  {
    id: "vol3_ch7_q35",
    subjectId: "english",
    chapterId: "eng_ch7",
    subTopicId: "eng_ch7_sub3",
    questionBn: "A doctor who specializes in skin diseases:",
    options: ["Cardiologist", "Dermatologist", "Neurologist", "Ophthalmologist"],
    correctIndex: 1,
    explanationBn: "চর্মরোগ বিশেষজ্ঞ চিকিৎসককে 'Dermatologist' বলা হয়।",
    difficulty: "easy",
    tags: ["One Word", "Dermatologist"]
  }
];
