import { StudyChapter, Question } from "../../types";

export const ENGLISH_CH4_STUDY: StudyChapter = {
  id: "eng_ch4",
  subjectId: "english",
  chapterNumber: 4,
  titleBn: "Voice Change (বাচ্য পরিবর্তন - Active to Passive)",
  titleEn: "Voice Change - Rules, Tenses, Modals, Imperatives, Interrogatives & Quasi-Passive",
  estimatedMinutes: 35,
  importantNotesCount: 30,
  summary: "Active থেকে Passive Voice করার সকল নিয়ম। Object-কে Subject করা, Tense অনুযায়ী Auxiliary Verb (am/is/are/was/were/being/been/be), মূল Verb-এর V3, 'by' বা Fixed Prepositions (Known to, Surprised at, Pleased with, Filled with), Imperative Sentences (Let + Obj + be + V3), Interrogative (Who -> By whom), Modals (can/must be done), Quasi-Passive (Honey tastes sweet -> Honey is sweet when tasted) এবং Double Objects (Retained Object)।",
  subTopics: [
    {
      id: "eng_ch4_sub1",
      chapterId: "eng_ch4",
      subjectId: "english",
      titleBn: "Basic Rules & Tenses Voice Change",
      titleEn: "Tense Rules, Continuous (being), Perfect (been)",
      orderIndex: 1,
      summaryBn: "Object -> Subject, Tense অনুযায়ী Be-verb, মূল Verb-এর V3 এবং 'by + Subject'। Continuous-এ 'being' এবং Perfect-এ 'been' যোগ হয়।",
      keyConcepts: ["He plays cricket -> Cricket is played by him", "She is singing -> A song is being sung", "They have done it -> It has been done"]
    },
    {
      id: "eng_ch4_sub2",
      chapterId: "eng_ch4",
      subjectId: "english",
      titleBn: "Imperatives, Modals & Interrogatives",
      titleEn: "Let + Obj + be + V3, Modal + be + V3, Who -> By whom",
      orderIndex: 2,
      summaryBn: "আদেশ/উপদেশ: 'Let + Obj + be + V3' বা 'You are requested/advised to'। Modals: Can/Must + be + V3। প্রশ্নবোধক: 'Who wrote this?' -> 'By whom was this written?'।",
      keyConcepts: ["Do it -> Let it be done", "You must do this -> This must be done", "Who broke the glass? -> By whom was the glass broken?"]
    },
    {
      id: "eng_ch4_sub3",
      chapterId: "eng_ch4",
      subjectId: "english",
      titleBn: "Special Verbs, Quasi-Passive & Reflexive",
      titleEn: "Known to, Surprised at, Pleased with, Quasi-Passive & Cognate Objects",
      orderIndex: 3,
      summaryBn: "Known-এর পর 'to', Surprised-এর পর 'at', Pleased-এর পর 'with'। Quasi-Passive: 'Honey tastes sweet' -> 'Honey is sweet when it is tasted'।",
      keyConcepts: ["I know him -> He is known to me", "His conduct shocked me -> I was shocked at his conduct", "Honey tastes sweet -> Honey is sweet when it is tasted"]
    }
  ],
  content: {
    introduction: "বাচ্য পরিবর্তন (Voice Change) ইংরেজি ব্যাকরণের একটি নিয়মিত ও উচ্চ-নম্বরযুক্ত অধ্যায়। পঞ্চায়েত ও রাজ্য সরকারি পরীক্ষায় Active থেকে Passive এবং Passive থেকে Active রূপান্তর বারবার জিজ্ঞাসা করা হয়।",
    sections: [
      {
        heading: "১. Tense অনুযায়ী Be-verb এবং গঠন নিয়ম",
        body: [
          "• মূল সূত্র: Active-এর Object ➔ Passive-এর Subject + Tense ও Subject অনুযায়ী Be-Verb + মূল Verb-এর Past Participle (V3) + by/fixed preposition + Active-এর Subject (Objective রূপ)।",
          "• Present Indefinite: am/is/are + V3 (e.g., 'He writes a letter' ➔ 'A letter is written by him')।",
          "• Past Indefinite: was/were + V3 (e.g., 'He killed a snake' ➔ 'A snake was killed by him')।",
          "• Continuous Tenses: am/is/are/was/were + BEING + V3 (e.g., 'She is singing a song' ➔ 'A song is being sung by her')।",
          "• Perfect Tenses: has/have/had + BEEN + V3 (e.g., 'They have won the match' ➔ 'The match has been won by them')।",
          "• Modals (Can, Could, May, Might, Shall, Should, Will, Would, Must): Modal + BE + V3 (e.g., 'You must obey the rules' ➔ 'The rules must be obeyed')।"
        ]
      },
      {
        heading: "২. Imperative ও Interrogative Sentences-এর Voice Change",
        body: [
          "• Imperative (আদেশ/অনুরোধ/উপদেশ):",
          "  - সাধারণ আদেশ: Let + Object + be + V3 (e.g., 'Shut the door' ➔ 'Let the door be shut')।",
          "  - নিষেধ/নেতিবাচক: Let not + Object + be + V3 (e.g., 'Do not insult the poor' ➔ 'Let not the poor be insulted')।",
          "  - নৈতিক উপদেশ: Object + should be + V3 (e.g., 'Help the poor' ➔ 'The poor should be helped')।",
          "  - অনুরোধ: You are requested to + V1 (e.g., 'Please help me' ➔ 'You are requested to help me')।",
          "• Interrogative Sentences:",
          "  - 'Who' থাকলে Passive-এ 'By whom' দিয়ে শুরু হয়: 'Who broke the glass?' ➔ 'By whom was the glass broken?'",
          "  - 'Whom' থাকলে Passive-এ 'Who' দিয়ে শুরু হয়: 'Whom did you see?' ➔ 'Who was seen by you?'"
        ]
      },
      {
        heading: "৩. Prepositional Verbs ও Quasi-Passive Voice",
        body: [
          "• 'By'-এর পরিবর্তে নির্দিষ্ট Preposition (Fixed Prepositions):",
          "  - Know ➔ to (He is known to me)",
          "  - Surprise / Shock / Astonish ➔ at (I was surprised at his conduct)",
          "  - Please / Satisfy / Fill ➔ with (The bottle is filled with water / I am pleased with your work)",
          "  - Contain ➔ in (The box contains books ➔ Books are contained in the box)",
          "• Quasi-Passive (অর্ধ-কর্মবাচ্য):",
          "  - 'Honey tastes sweet' ➔ 'Honey is sweet when it is tasted'।",
          "  - 'The bed feels soft' ➔ 'The bed is soft when it is felt'।",
          "  - 'This house is building' ➔ 'This house is being built'।"
        ]
      }
    ],
    examTips: [
      "Known-এর পর 'to', Surprised/Shocked-এর পর 'at', Filled/Pleased-এর পর 'with' বসে।",
      "Imperative Negative বাক্যে: 'Do not insult the poor' ➔ 'Let not the poor be insulted'।",
      "Unspecified Subject (People, Someone, They) Passive-এ সচরাচর উহ্য থাকে: 'English is spoken all over the world' (by people লেখার দরকার নেই)।",
      "Who থাকলে By whom এবং Whom থাকলে Who হয়।"
    ],
    quickRevisionPoints: [
      "Continuous -> being + V3.",
      "Perfect -> been + V3.",
      "Modals -> modal + be + V3.",
      "Imperative -> Let + Obj + be + V3.",
      "Who -> By whom; Whom -> Who.",
      "Known to, Surprised at, Pleased with, Contained in.",
      "Honey tastes sweet -> Honey is sweet when it is tasted."
    ],
    oneLiners: [
      "Active-এর Object Passive-এ Subject হয় এবং মূল ক্রিয়ার সর্বদা ৩য় রূপ (V3) বসে।",
      "Continuous Tense-এর Voice Change করার সময় সর্বদা 'being' শব্দটি Be-verb-এর সাথে যোগ হয়।",
      "Perfect Tense-এর ক্ষেত্রে সর্বদা 'been' শব্দটি Auxiliary Verb-এর সাথে যুক্ত হয়।",
      "Modal Verbs (Can, May, Must, Should) থাকলে Passive-এ 'Modal + be + V3' বসে।",
      "আদেশমূলক বাক্যে 'Let + Object + be + V3' দ্বারা Passive গঠন করা হয় (Shut the door -> Let the door be shut)।",
      "অনুরোধমূলক বাক্যে 'Please' উঠে গিয়ে 'You are requested to' বসে।",
      "প্রশ্নবোধক বাক্যে 'Who' থাকলে Passive-এ 'By whom' দিয়ে শুরু করতে হয়।",
      "প্রশ্নবোধক বাক্যে 'Whom' থাকলে Passive-এ 'Who' দিয়ে শুরু করতে হয়।",
      "'Know' ক্রিয়ার পর Passive-এ 'by'-এর পরিবর্তে 'to' (known to) বসে।",
      "'Surprise', 'Shock' এবং 'Astonish' ক্রিয়ার পর Passive-এ 'at' (surprised at) বসে।",
      "'Fill' এবং 'Please' ক্রিয়ার পর Passive-এ 'with' (filled with, pleased with) বসে।",
      "'Contain' ক্রিয়ার পর Passive-এ 'in' (contained in the box) বসে।",
      "Quasi-Passive: 'Honey tastes sweet' ➔ 'Honey is sweet when it is tasted'।",
      "Quasi-Passive: 'The stone feels rough' ➔ 'The stone is rough when it is felt'।",
      "Double Object থাকলে Indirect Object (ব্যক্তিবাচক)-কে Subject করাই শ্রেয় (He gave me a pen -> I was given a pen)।",
      "Cognate Object যুক্ত বাক্যের রূপান্তর: 'He ran a race' ➔ 'A race was run by him'।",
      "Reflexive Object (myself, himself) থাকলে Subject অপরিবর্তিত থাকে (He killed himself -> He was killed by himself)।",
      "যখন Subject অজ্ঞাত বা অপ্রয়োজনীয় (Someone, People), তখন 'by someone' বাদ দেওয়া হয় (My watch was stolen)।"
    ],
    saqs: [
      {
        id: "eng_ch4_saq1",
        questionBn: "'I know him' — এর Passive রূপ কী এবং এতে 'by'-এর বদলে 'to' বসে কেন?",
        answerBn: "সঠিক Passive রূপ হলো: 'He is known to me'। ইংরেজি ব্যাকরণে কিছু নির্দিষ্ট ক্রিয়াপদের পর Passive বাচ্যে 'by'-এর পরিবর্তে Fixed Preposition বসে; 'know' ক্রিয়ার পর সর্বদা 'to' বসে।"
      },
      {
        id: "eng_ch4_saq2",
        questionBn: "Imperative Sentence-এর Passive করার সূত্রটি লিখুন এবং দুটি উদাহরণ দিন।",
        answerBn: "সূত্র: Let + Object + be + Past Participle (V3)। উদাহরণ ১: 'Open the door' (Active) ➔ 'Let the door be opened' (Passive)। উদাহরণ ২: 'Post the letter' ➔ 'Let the letter be posted'।"
      },
      {
        id: "eng_ch4_saq3",
        questionBn: "'Who did this?' — এর Voice Change কীভাবে করতে হয় এবং কেন?",
        answerBn: "Active Voice-এ 'Who' থাকলে Passive-এ তা 'By whom'-এ রূপান্তরিত হয় এবং বাক্যটি প্রশ্নবোধক কাঠামো বজায় রাখে। বাক্যটি Past Indefinite হওয়ায় Auxiliary 'was' আগে আসে। সঠিক রূপ: 'By whom was this done?'"
      },
      {
        id: "eng_ch4_saq4",
        questionBn: "Quasi-Passive Voice কী? 'Honey tastes sweet'-এর প্যাসিভ রূপ কীভাবে হয়?",
        answerBn: "যেসব বাক্য গঠনে Active কিন্তু অর্থে Passive তাদের Quasi-Passive (অর্ধ-কর্মবাচ্য) বলে। এর রূপান্তরের নিয়ম: Subject + Be-verb + Adjective + when it is/they are + V3। সুতরাং: 'Honey tastes sweet' ➔ 'Honey is sweet when it is tasted'।"
      },
      {
        id: "eng_ch4_saq5",
        questionBn: "'His conduct surprised me' — এর Passive রূপ কী এবং এতে কোন Preposition বসে?",
        answerBn: "সঠিক Passive রূপ: 'I was surprised at his conduct'। 'Surprise', 'Shock', 'Astonish' বা 'Disappoint' কোনো ব্যক্তির আচরণে বিস্মিত বা ব্যথিত হওয়া বোঝালে 'by'-এর পরিবর্তে 'at' Preposition গ্রহণ করে।"
      },
      {
        id: "eng_ch4_saq6",
        questionBn: "Double Object (দ্বিকর্মক ক্রিয়া)-এর ক্ষেত্রে Voice Change-এর নিয়ম কী?",
        answerBn: "বাক্যে দুটি Object (Direct Object ও Indirect Object) থাকলে যে কোনো একটিকে Subject করে Passive করা যায়, তবে ব্যক্তিবাচক Indirect Object-কে Subject করাই সবচেয়ে প্রাঞ্জল। যেমন: 'He gave me a book' ➔ 'I was given a book by him' (অথবা: 'A book was given to me by him')। অবশিষ্ট অপর Object-টিকে Retained Object বলে।"
      },
      {
        id: "eng_ch4_saq7",
        questionBn: "'Do not hate the poor' — নেতিবাচক Imperative বাক্যের Passive রূপ কী?",
        answerBn: "নেতিবাচক Imperative বাক্যে সূত্র: Let not + Object + be + V3। সুতরাং: 'Do not hate the poor' ➔ 'Let not the poor be hated' (অথবা নৈতিক উপদেশের ক্ষেত্রে: 'The poor should not be hated')।"
      },
      {
        id: "eng_ch4_saq8",
        questionBn: "'Someone stole my watch' — এই ধরনের বাক্যে Passive করার সময় Subject উহ্য থাকে কেন?",
        answerBn: "যখন Active Voice-এর Subject অনির্দিষ্ট (Someone, Somebody, People, They) বা অজ্ঞাত হয়, তখন কর্মবাচ্যে কর্ম ও ঘটনাই মুখ্য হওয়ায় 'by someone' লেখার প্রয়োজন হয় না। সঠিক রূপ: 'My watch was stolen'।"
      }
    ]
  }
};

export const ENGLISH_CH4_QUESTIONS: Question[] = [
  {
    id: "vol3_ch4_q1",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub1",
    questionBn: "I write a letter. (Change into Passive Voice)",
    options: ["A letter is written by me.", "A letter was written by me.", "A letter is writing by me.", "A letter has written by me."],
    correctIndex: 0,
    explanationBn: "Present Indefinite Tense-এর Passive গঠন: Subject ('A letter') + is + written (V3) + by me।",
    difficulty: "easy",
    tags: ["Voice Change", "Present Indefinite"]
  },
  {
    id: "vol3_ch4_q2",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub1",
    questionBn: "He killed a snake with a stick. (Change into Passive Voice)",
    options: ["A snake was killed with a stick by him.", "A snake is killed by him with a stick.", "A snake has been killed by him.", "A snake was being killed by him."],
    correctIndex: 0,
    explanationBn: "Past Indefinite-এর Passive-এ 'was + V3' ('was killed') বসে।",
    difficulty: "easy",
    tags: ["Voice Change", "Past Indefinite"]
  },
  {
    id: "vol3_ch4_q3",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub1",
    questionBn: "She is singing a melodious song. (Change into Passive Voice)",
    options: ["A melodious song is sung by her.", "A melodious song is being sung by her.", "A melodious song was being sung by her.", "A melodious song has been sung by her."],
    correctIndex: 1,
    explanationBn: "Present Continuous-এর Passive-এ 'is being + V3' ('is being sung') বসে।",
    difficulty: "easy",
    tags: ["Voice Change", "Present Continuous"]
  },
  {
    id: "vol3_ch4_q4",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub1",
    questionBn: "They have won the football tournament. (Change into Passive Voice)",
    options: ["The football tournament was won by them.", "The football tournament has won by them.", "The football tournament has been won by them.", "The football tournament had been won by them."],
    correctIndex: 2,
    explanationBn: "Present Perfect Tense-এর Passive-এ 'has been + V3' ('has been won') বসে।",
    difficulty: "easy",
    tags: ["Voice Change", "Present Perfect"]
  },
  {
    id: "vol3_ch4_q5",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub2",
    questionBn: "Shut the window. (Change into Passive Voice)",
    options: ["Let the window shut.", "Let the window be shut.", "The window is shut.", "You are told to shut the window."],
    correctIndex: 1,
    explanationBn: "Imperative বাক্যের Passive গঠন: Let + Object ('the window') + be + V3 ('shut')।",
    difficulty: "easy",
    tags: ["Voice Change", "Imperative"]
  },
  {
    id: "vol3_ch4_q6",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub2",
    questionBn: "Do not insult the poor. (Change into Passive Voice)",
    options: ["Let the poor not insulted.", "Let not the poor be insulted.", "The poor should not be insulted by you.", "Let not the poor insulted."],
    correctIndex: 1,
    explanationBn: "Negative Imperative-এর সূত্র: Let not + Object + be + V3 ('Let not the poor be insulted')।",
    difficulty: "medium",
    tags: ["Voice Change", "Negative Imperative"]
  },
  {
    id: "vol3_ch4_q7",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub2",
    questionBn: "Please help the old man. (Change into Passive Voice)",
    options: ["You are ordered to help the old man.", "You are requested to help the old man.", "Let the old man be helped.", "The old man should be helped."],
    correctIndex: 1,
    explanationBn: "'Please' থাকলে অনুরোধমূলক রূপান্তর: 'You are requested to help the old man'।",
    difficulty: "easy",
    tags: ["Voice Change", "Request"]
  },
  {
    id: "vol3_ch4_q8",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub2",
    questionBn: "You must obey the traffic rules. (Change into Passive Voice)",
    options: ["The traffic rules must obey by you.", "The traffic rules must be obeyed by you.", "The traffic rules should be obeyed by you.", "The traffic rules are obeyed by you."],
    correctIndex: 1,
    explanationBn: "Modal Verb 'must' থাকলে Passive গঠন: 'must be + V3' ('must be obeyed')।",
    difficulty: "easy",
    tags: ["Voice Change", "Modal Verb"]
  },
  {
    id: "vol3_ch4_q9",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub2",
    questionBn: "Who wrote the Gitanjali? (Change into Passive Voice)",
    options: ["By whom was the Gitanjali written?", "By whom the Gitanjali was written?", "Who was written the Gitanjali?", "By whom is the Gitanjali written?"],
    correctIndex: 0,
    explanationBn: "'Who' থাকলে 'By whom' + Auxiliary ('was') + Subject + V3 ('written') বসে।",
    difficulty: "medium",
    tags: ["Voice Change", "Interrogative Who"]
  },
  {
    id: "vol3_ch4_q10",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub2",
    questionBn: "Whom did you recommend for the post? (Change into Passive Voice)",
    options: ["Who was recommended by you for the post?", "Whom was recommended by you for the post?", "Who did recommended by you?", "By whom you were recommended?"],
    correctIndex: 0,
    explanationBn: "Active-এ 'Whom' থাকলে Passive-এ 'Who' Subject হয়: 'Who was recommended by you...'।",
    difficulty: "medium",
    tags: ["Voice Change", "Interrogative Whom"]
  },
  {
    id: "vol3_ch4_q11",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub3",
    questionBn: "I know him very well. (Change into Passive Voice)",
    options: ["He is known by me very well.", "He is known to me very well.", "He was known to me very well.", "He is being known to me."],
    correctIndex: 1,
    explanationBn: "'Know' ক্রিয়ার পর Passive-এ 'by'-এর পরিবর্তে 'to' বসে (He is known to me)।",
    difficulty: "easy",
    tags: ["Voice Change", "Known to"]
  },
  {
    id: "vol3_ch4_q12",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub3",
    questionBn: "His conduct shocked everybody. (Change into Passive Voice)",
    options: ["Everybody was shocked by his conduct.", "Everybody was shocked at his conduct.", "Everybody is shocked at his conduct.", "Everybody had shocked by his conduct."],
    correctIndex: 1,
    explanationBn: "'Shock' ও 'Surprise'-এর পর আচরণের ক্ষেত্রে Preposition 'at' বসে (shocked at his conduct)।",
    difficulty: "medium",
    tags: ["Voice Change", "Shocked at"]
  },
  {
    id: "vol3_ch4_q13",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub3",
    questionBn: "Smoke filled the room. (Change into Passive Voice)",
    options: ["The room was filled by smoke.", "The room was filled with smoke.", "The room is filled with smoke.", "The room was being filled with smoke."],
    correctIndex: 1,
    explanationBn: "'Fill' ক্রিয়ার পর Passive-এ Preposition 'with' বসে (filled with smoke)।",
    difficulty: "medium",
    tags: ["Voice Change", "Filled with"]
  },
  {
    id: "vol3_ch4_q14",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub3",
    questionBn: "Honey tastes sweet. (Change into Passive Voice)",
    options: ["Honey is tasted sweet.", "Honey is sweet when it is tasted.", "Honey was sweet when tasted.", "Honey is being tasted sweet."],
    correctIndex: 1,
    explanationBn: "Quasi-Passive গঠন: Subject + Be-verb + Adjective + when it is + V3 ('Honey is sweet when it is tasted')।",
    difficulty: "medium",
    tags: ["Voice Change", "Quasi-Passive"]
  },
  {
    id: "vol3_ch4_q15",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub3",
    questionBn: "The bed feels soft. (Change into Passive Voice)",
    options: ["The bed is soft when it is felt.", "The bed is felt soft.", "The bed was soft when felt.", "The bed is being felt soft."],
    correctIndex: 0,
    explanationBn: "Quasi-Passive: 'The bed is soft when it is felt' সঠিক রূপ।",
    difficulty: "medium",
    tags: ["Voice Change", "Quasi-Passive"]
  },
  {
    id: "vol3_ch4_q16",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub1",
    questionBn: "The teacher gave me a prize. (Change into Passive Voice)",
    options: ["I was given a prize by the teacher.", "A prize is given to me by the teacher.", "I am given a prize by the teacher.", "A prize was gave to me by the teacher."],
    correctIndex: 0,
    explanationBn: "Past Indefinite-এ ব্যক্তিবাচক Indirect Object 'me' পরিবর্তিত হয়ে 'I was given a prize...' হবে।",
    difficulty: "easy",
    tags: ["Voice Change", "Double Object"]
  },
  {
    id: "vol3_ch4_q17",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub1",
    questionBn: "People speak English all over the world. (Change into Passive Voice)",
    options: ["English is spoken all over the world by people.", "English is spoken all over the world.", "English was spoken all over the world.", "English has been spoken all over the world."],
    correctIndex: 1,
    explanationBn: "Subject 'People' সর্বজনীন হওয়ায় Passive-এ 'by people' উহ্য রেখে 'English is spoken all over the world' লেখা হয়।",
    difficulty: "medium",
    tags: ["Voice Change", "Omission of Agent"]
  },
  {
    id: "vol3_ch4_q18",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub1",
    questionBn: "Someone has picked my pocket. (Change into Passive Voice)",
    options: ["My pocket has been picked by someone.", "My pocket has been picked.", "My pocket was picked.", "My pocket had been picked."],
    correctIndex: 1,
    explanationBn: "অনির্দিষ্ট Subject 'Someone' প্যাসিভে বাদ দিয়ে 'My pocket has been picked' করা হয়।",
    difficulty: "easy",
    tags: ["Voice Change", "Omission of Agent"]
  },
  {
    id: "vol3_ch4_q19",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub3",
    questionBn: "This bottle contains ink. (Change into Passive Voice)",
    options: ["Ink is contained with this bottle.", "Ink is contained in this bottle.", "Ink is contained by this bottle.", "Ink was contained in this bottle."],
    correctIndex: 1,
    explanationBn: "'Contain'-এর পর Passive-এ 'in' বসে (contained in this bottle)।",
    difficulty: "medium",
    tags: ["Voice Change", "Contained in"]
  },
  {
    id: "vol3_ch4_q20",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub3",
    questionBn: "He killed himself. (Change into Passive Voice)",
    options: ["Himself was killed by him.", "He was killed by himself.", "He had been killed by himself.", "He is killed by himself."],
    correctIndex: 1,
    explanationBn: "Reflexive Object থাকলে Subject অপরিবর্তিত থাকে: 'He was killed by himself'।",
    difficulty: "medium",
    tags: ["Voice Change", "Reflexive Object"]
  },
  {
    id: "vol3_ch4_q21",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub2",
    questionBn: "Can you solve this mathematical problem? (Change into Passive Voice)",
    options: ["Can this mathematical problem solved by you?", "Can this mathematical problem be solved by you?", "Could this mathematical problem be solved by you?", "Is this mathematical problem solved by you?"],
    correctIndex: 1,
    explanationBn: "Modal Interrogative গঠন: Can + Subject + be + V3 ('Can this mathematical problem be solved by you?')।",
    difficulty: "medium",
    tags: ["Voice Change", "Modal Interrogative"]
  },
  {
    id: "vol3_ch4_q22",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub1",
    questionBn: "The mason was building the wall. (Change into Passive Voice)",
    options: ["The wall was built by the mason.", "The wall was being built by the mason.", "The wall is being built by the mason.", "The wall had been built by the mason."],
    correctIndex: 1,
    explanationBn: "Past Continuous-এর Passive গঠন: 'was being + V3' ('was being built')।",
    difficulty: "easy",
    tags: ["Voice Change", "Past Continuous"]
  },
  {
    id: "vol3_ch4_q23",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub1",
    questionBn: "They had completed the project before deadline. (Change into Passive Voice)",
    options: ["The project was completed before deadline by them.", "The project had completed before deadline.", "The project had been completed before deadline by them.", "The project has been completed before deadline."],
    correctIndex: 2,
    explanationBn: "Past Perfect-এর Passive-এ 'had been + V3' ('had been completed') বসে।",
    difficulty: "easy",
    tags: ["Voice Change", "Past Perfect"]
  },
  {
    id: "vol3_ch4_q24",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub2",
    questionBn: "Obey your parents. (Change into Passive Voice)",
    options: ["Let your parents obeyed.", "Your parents should be obeyed.", "You are told to obey parents.", "Let your parents be obey."],
    correctIndex: 1,
    explanationBn: "নৈতিক কর্তব্য বা উপদেশের ক্ষেত্রে 'Object + should be + V3' ('Your parents should be obeyed') শ্রেষ্ঠ রূপ।",
    difficulty: "easy",
    tags: ["Voice Change", "Moral Advice"]
  },
  {
    id: "vol3_ch4_q25",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub3",
    questionBn: "His performance pleased the judges. (Change into Passive Voice)",
    options: ["The judges were pleased by his performance.", "The judges were pleased with his performance.", "The judges are pleased with his performance.", "The judges were pleased at his performance."],
    correctIndex: 1,
    explanationBn: "'Pleased'-এর পর গুণ বা কাজের ক্ষেত্রে Preposition 'with' বসে (pleased with his performance)।",
    difficulty: "medium",
    tags: ["Voice Change", "Pleased with"]
  },
  {
    id: "vol3_ch4_q26",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub2",
    questionBn: "Post this letter immediately. (Change into Passive Voice)",
    options: ["Let this letter posted immediately.", "Let this letter be posted immediately.", "This letter should post immediately.", "You must post this letter."],
    correctIndex: 1,
    explanationBn: "Imperative Voice: Let + Object + be + V3 ('Let this letter be posted immediately')।",
    difficulty: "easy",
    tags: ["Voice Change", "Imperative Post"]
  },
  {
    id: "vol3_ch4_q27",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub1",
    questionBn: "The doctor examined the patient carefully. (Change into Passive Voice)",
    options: ["The patient was examined carefully by the doctor.", "The patient is examined carefully by the doctor.", "The patient was being examined by the doctor.", "The patient had examined by the doctor."],
    correctIndex: 0,
    explanationBn: "Past Indefinite Tense-এর Passive: 'was examined by the doctor'।",
    difficulty: "easy",
    tags: ["Voice Change", "Past Indefinite"]
  },
  {
    id: "vol3_ch4_q28",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub2",
    questionBn: "Why did you beat the boy? (Change into Passive Voice)",
    options: ["Why was the boy beaten by you?", "Why did the boy beaten by you?", "Why the boy was beaten by you?", "Why had the boy beaten by you?"],
    correctIndex: 0,
    explanationBn: "Wh-Question-এর Passive কাঠামো: Wh-word + was + Subject + V3 + by you ('Why was the boy beaten by you?')।",
    difficulty: "medium",
    tags: ["Voice Change", "Wh-Interrogative"]
  },
  {
    id: "vol3_ch4_q29",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub1",
    questionBn: "We will celebrate the Independence Day tomorrow. (Change into Passive Voice)",
    options: ["The Independence Day will celebrate by us tomorrow.", "The Independence Day will be celebrated by us tomorrow.", "The Independence Day would be celebrated tomorrow.", "The Independence Day is celebrated tomorrow."],
    correctIndex: 1,
    explanationBn: "Future Indefinite-এর Passive: 'will be celebrated' বসে।",
    difficulty: "easy",
    tags: ["Voice Change", "Future Indefinite"]
  },
  {
    id: "vol3_ch4_q30",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub3",
    questionBn: "The news surprised all of us. (Change into Passive Voice)",
    options: ["All of us were surprised by the news.", "All of us were surprised at the news.", "All of us are surprised at the news.", "All of us were surprised with the news."],
    correctIndex: 1,
    explanationBn: "কোনো সংবাদ বা ঘটনায় বিস্মিত হলে 'surprised at the news' হয়।",
    difficulty: "medium",
    tags: ["Voice Change", "Surprised at"]
  },
  {
    id: "vol3_ch4_q31",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub1",
    questionBn: "He told me a fascinating story. (Change into Passive Voice)",
    options: ["I was told a fascinating story by him.", "A fascinating story is told to me by him.", "I am told a fascinating story by him.", "I had been told a fascinating story."],
    correctIndex: 0,
    explanationBn: "Indirect Object 'me'-কে Subject করে 'I was told a fascinating story by him' সর্বাধিক প্রচলিত।",
    difficulty: "easy",
    tags: ["Voice Change", "Double Object"]
  },
  {
    id: "vol3_ch4_q32",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub2",
    questionBn: "Never tell a lie. (Change into Passive Voice)",
    options: ["Let a lie never be told.", "A lie should never be told.", "Never let a lie be told.", "Both A and B are correct."],
    correctIndex: 3,
    explanationBn: "'Never tell a lie'-এর প্যাসিভ হিসেবে 'Let a lie never be told' এবং 'A lie should never be told' দুটোই ব্যাকরণসিদ্ধ।",
    difficulty: "medium",
    tags: ["Voice Change", "Never Tell Lie"]
  },
  {
    id: "vol3_ch4_q33",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub3",
    questionBn: "The house is building. (Quasi-Passive to Standard Passive)",
    options: ["The house is being built.", "The house is built.", "The house has built.", "The house was building."],
    correctIndex: 0,
    explanationBn: "'The house is building'-এর আধুনিক স্ট্যান্ডার্ড Passive রূপ হলো 'The house is being built' (বাড়িটি তৈরি হচ্ছে)।",
    difficulty: "hard",
    tags: ["Voice Change", "Quasi-Passive Building"]
  },
  {
    id: "vol3_ch4_q34",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub2",
    questionBn: "Who has broken the beautiful vase? (Change into Passive Voice)",
    options: ["By whom the beautiful vase has been broken?", "By whom has the beautiful vase been broken?", "Who has been broken the vase?", "By whom was the vase broken?"],
    correctIndex: 1,
    explanationBn: "Present Perfect Interrogative: 'By whom has the beautiful vase been broken?' সঠিক বিন্যাস।",
    difficulty: "medium",
    tags: ["Voice Change", "Who Perfect"]
  },
  {
    id: "vol3_ch4_q35",
    subjectId: "english",
    chapterId: "eng_ch4",
    subTopicId: "eng_ch4_sub3",
    questionBn: "Her sweet manners charmed everyone present. (Change into Passive Voice)",
    options: ["Everyone present was charmed by her sweet manners.", "Everyone present was charmed with her sweet manners.", "Everyone present was charmed at her sweet manners.", "Everyone present were charmed by her sweet manners."],
    correctIndex: 1,
    explanationBn: "'Charm'-এর পর ব্যক্তির আচরণ বা ব্যবহারে মুগ্ধ হওয়া বোঝাতে Preposition 'with' বসে।",
    difficulty: "hard",
    tags: ["Voice Change", "Charmed with"]
  }
];
