import { StudyChapter, Question } from "../../types";

export const ENGLISH_CH3_STUDY: StudyChapter = {
  id: "eng_ch3",
  subjectId: "english",
  chapterNumber: 3,
  titleBn: "Tenses (কাল বা সময় - Use of Tenses)",
  titleEn: "Tenses - Structures, Time Markers, Conditionals & Past Perfect",
  estimatedMinutes: 35,
  importantNotesCount: 30,
  summary: "Present, Past এবং Future Tense-এর ১২টি রূপের প্রায়োগিক নিয়ম। Universal Truth ও অভ্যাসগত কাজ (Present Indefinite), Now/At present (Continuous), Just/Already/Yet (Present Perfect), Since/For (Present Perfect Continuous), Yesterday/Ago/Last (Past Indefinite), অতীতের দুটি কাজের মধ্যে পূর্বের কাজটি Had+V3 (Past Perfect), If-clause Conditionals এবং 'It is time / I wish'-এর পর Past Subjunctive নিয়ম।",
  subTopics: [
    {
      id: "eng_ch3_sub1",
      chapterId: "eng_ch3",
      subjectId: "english",
      titleBn: "Present Tenses & Time Markers",
      titleEn: "Indefinite, Continuous, Perfect & Perfect Continuous",
      orderIndex: 1,
      summaryBn: "চিরন্তন সত্যে Present Indefinite (The sun rises)। 'Now/At this moment' থাকলে Continuous। 'Just/Already/Yet/Recently' থাকলে Present Perfect (has/have + V3)। 'Since/For' সহ চলমান কাজে Present Perfect Continuous।",
      keyConcepts: ["The sun rises in the east", "Now / At this moment -> is/are playing", "Just / Already -> has arrived", "Since morning -> has been raining"]
    },
    {
      id: "eng_ch3_sub2",
      chapterId: "eng_ch3",
      subjectId: "english",
      titleBn: "Past Tenses & Past Perfect (Before / After)",
      titleEn: "Past Indefinite, Continuous & Past Perfect Before/After",
      orderIndex: 2,
      summaryBn: "Yesterday/Last night/Ago থাকলে Past Indefinite (V2)। অতীতের দুটি কাজের মধ্যে আগে সম্পন্ন হওয়া কাজটি Past Perfect (had + V3) এবং পরেরটি Past Indefinite (V2)। Before-এর আগে Had+V3, After-এর পরে Had+V3।",
      keyConcepts: ["Yesterday / Ago -> V2 (went, saw)", "The patient had died before the doctor came", "We reached the station after the train had left"]
    },
    {
      id: "eng_ch3_sub3",
      chapterId: "eng_ch3",
      subjectId: "english",
      titleBn: "Future & Conditionals / Subjunctive",
      titleEn: "Future Tenses, 'If' Conditionals, 'It is time' & 'I wish'",
      orderIndex: 3,
      summaryBn: "If + Present Indefinite -> Future Indefinite (If you come, I will go)। If + Past Indefinite -> would + V1। If + Past Perfect -> would have + V3। 'It is time we went home' (V2)। 'I wish I were a bird' (Unreal past-এ were)।",
      keyConcepts: ["If you work hard, you will succeed", "If I had seen him, I would have told him", "It is time we went home", "I wish I were a bird", "He speaks as if he knew everything"]
    }
  ],
  content: {
    introduction: "Tense হলো ক্রিয়াপদের কাল বা সময়। ইংরেজি ব্যাকরণে সঠিক বাক্য গঠন ও শূন্যস্থান পূরণের জন্য বিভিন্ন Tense-এর গঠন ও Time Markers বোঝা অত্যন্ত আবশ্যক।",
    sections: [
      {
        heading: "১. Present Tenses-এর বাস্তব প্রয়োগ",
        body: [
          "• Present Indefinite: চিরন্তন সত্য, বৈজ্ঞানিক সত্য বা সাধারণ অভ্যাস। Subject 3rd Person Singular হলে Verb-এর সাথে s/es যুক্ত হয় ('The sun rises in the east', 'Water boils at 100°C')।",
          "• Present Continuous: বর্তমানে কোনো কাজ চলছে বোঝালে (am/is/are + V-ing)। 'Now', 'At present', 'At this moment', 'Look!', 'Listen!' থাকলে এই Tense হয় ('Look! The bird is flying', 'Listen! Someone is knocking at the door')।",
          "• Present Perfect: কাজ মাত্র শেষ হয়েছে কিন্তু ফল বর্তমান (has/have + V3)। 'Just', 'Already', 'Yet', 'Recently', 'So far' থাকলে এই Tense হয় ('He has just arrived', 'She has not finished her work yet')।",
          "• Present Perfect Continuous: অতীতে শুরু হয়ে এখনও চলছে (has/have been + V-ing + since/for)। যেমন: 'It has been raining since morning', 'We have been waiting for two hours'।"
        ]
      },
      {
        heading: "২. Past Tenses এবং 'Past Perfect' এর নিয়ম",
        body: [
          "• Past Indefinite: অতীতে কোনো কাজ ঘটেছিল। বাক্যে 'Yesterday', 'Last night', 'Ago', 'In 1990', 'Once' থাকলে Verb-এর ২য় রূপ (V2) বসে ('Columbus discovered America', 'I saw him yesterday')।",
          "• Past Continuous: অতীতকালে কোনো কাজ চলছিল (was/were + V-ing)। যেমন: 'While I was walking in the park, I saw a snake' / 'She was cooking when the telephone rang'।",
          "• Past Perfect (দুটো অতীত ঘটনা):",
          "  - গঠন ১ (Before): [Subject + had + V3] + BEFORE + [Subject + V2]। যেমন: 'The patient had died before the doctor came' / 'The train had left before we reached the station'।",
          "  - গঠন ২ (After): [Subject + V2] + AFTER + [Subject + had + V3]। যেমন: 'The doctor came after the patient had died' / 'We reached the station after the train had left'।"
        ]
      },
      {
        heading: "৩. Conditionals এবং কাল্পনিক অতীত (Unreal Past)",
        body: [
          "• Type 1 Conditional: If + Present Indefinite, Future Indefinite (shall/will + V1)। যেমন: 'If you come, I will go' / 'If you study attentively, you will pass'।",
          "• Type 2 Conditional: If + Past Indefinite (V2), would/could/might + V1। যেমন: 'If I knew his address, I would write to him'।",
          "• Type 3 Conditional: If + Past Perfect (had + V3), would have/could have + V3। যেমন: 'If you had worked hard, you would have passed the exam'।",
          "• 'It is time / It is high time': এর পরে Subject থাকলে Verb সর্বদা Past Indefinite (V2) হয়। যেমন: 'It is high time we started our preparation' (start নয়)।",
          "• 'I wish / As if / As though': অবাস্তব বা কাল্পনিক ইচ্ছা প্রকাশে Subject যাই হোক না কেন Verb 'were' বা V2 হয়। যেমন: 'I wish I were a bird', 'He speaks as if he knew everything'।"
        ]
      }
    ],
    examTips: [
      "If যুক্ত অংশে কখনোই will/shall বসে না (ভুল: If you will come; সঠিক: If you come, I will go)।",
      "'It is high time' এর পর Verb সর্বদা Past Tense (V2) হয় (যেমন: It is high time we changed our habits)।",
      "অবাস্তব কল্পনা বোঝালে 'I wish I were' হয়, 'was' হয় না।",
      "Type 3 Conditional: If + had + V3 থাকলে অপর অংশে অবশ্যই 'would have + V3' বসবে।"
    ],
    quickRevisionPoints: [
      "Now / At present -> is/are + ing.",
      "Just / Already / Yet -> has/have + V3.",
      "Since / For -> has/have been + ing.",
      "Yesterday / Ago / Last night -> V2.",
      "Past Perfect: Had + V3 BEFORE V2; V2 AFTER Had + V3.",
      "It is time we went; I wish I were a king.",
      "If you come -> I will go; If had known -> would have told."
    ],
    oneLiners: [
      "চিরন্তন সত্য ও বৈজ্ঞানিক তথ্যে সর্বদা Present Indefinite Tense ব্যবহৃত হয় (The earth moves round the sun)।",
      "Look!, Listen!, Now, At present, At this moment থাকলে Present Continuous Tense হয়।",
      "Just, Already, Yet, Recently, So far শব্দগুলি Present Perfect Tense নির্দেশ করে।",
      "Yesterday, Last night, Ago, Once, In 1947 থাকলে বাক্যে Past Indefinite (V2) বসে।",
      "Before-এর আগের অংশে Had+V3 এবং পরের অংশে V2 বসে (The train had left before we arrived)।",
      "After-এর আগের অংশে V2 এবং পরের অংশে Had+V3 বসে (We arrived after the train had left)।",
      "If-যুক্ত ১ম Conditional-এ প্রথম অংশ Present হলে দ্বিতীয় অংশ Future Indefinite (will+V1) হয়।",
      "When, As soon as, Unless, If যুক্ত Subordinate Clause-এ কখনোই will/shall বসে না।",
      "'It is time' বা 'It is high time'-এর পর Subject থাকলে Verb-এর Past Form (V2) হয়।",
      "অবাস্তব ইচ্ছা বোঝাতে 'I wish I were a bird / a king' ব্যবহৃত হয় (was নয়)।",
      "'As if' বা 'As though'-এর আগে Present থাকলে পরে Past Indefinite (He behaves as if he were mad) হয়।",
      "Type 3 Conditional: 'If he had invited me, I would have attended the party'।",
      "Stative Verbs (Know, Love, Like, Understand, Believe) সাধারণত Continuous Tense-এ ব্যবহৃত হয় না (I know him, I am knowing নয়)।",
      "ভবিষ্যতের সুনির্দিষ্ট সময়সীমার পূর্বে কোনো কাজ শেষ হওয়া বোঝালে Future Perfect (will have + V3) বসে।",
      "By next Monday / By 2026 নির্দেশ করলে Future Perfect Tense (will have completed) হয়।",
      "Scarcely had...when এবং No sooner had...than-এর পর মূল Verb-এর ৩য় রূপ (V3) বসে।",
      "'Since' যখন Conjunction হিসেবে যুক্ত করে: Present Perfect + Since + Past Indefinite (Two years have passed since I met him)।",
      "সকালে শুরু হয়ে এখন পর্যন্ত বৃষ্টি হচ্ছে বোঝালে 'It has been raining since morning' হয়।"
    ],
    saqs: [
      {
        id: "eng_ch3_saq1",
        questionBn: "Past Perfect Tense-এ 'Before' এবং 'After'-এর সুনির্দিষ্ট গঠন কী?",
        answerBn: "অতীতে দুটি কাজের মধ্যে যে কাজটি আগে ঘটেছিল তার সাথে 'had + V3' (Past Perfect) এবং পরেরটির সাথে V2 (Past Indefinite) বসে। সংক্ষেপে: [Subject + had + V3] + BEFORE + [Subject + V2] (যেমন: The patient had died before the doctor came); এবং [Subject + V2] + AFTER + [Subject + had + V3] (যেমন: The doctor came after the patient had died)।"
      },
      {
        id: "eng_ch3_saq2",
        questionBn: "'It is high time we ___ (start/started) our preparation' — কোনটি সঠিক এবং কেন?",
        answerBn: "সঠিক উত্তর 'started'। নিয়ম অনুযায়ী 'It is time' বা 'It is high time'-এর পরে কোনো Subject বসলে পরবর্তী Verb-টি সর্বদা Past Indefinite (V2) রূপে বসে, কারণ এটি বোঝায় যে কাজটি শুরু করার উপযুক্ত সময় ইতিমধ্যে পার হয়ে গেছে এবং অবিলম্বে শুরু করা উচিত।"
      },
      {
        id: "eng_ch3_saq3",
        questionBn: "'If you will come, I will help you' — বাক্যটিতে কী ভুল রয়েছে এবং সঠিক রূপ কী?",
        answerBn: "Conditional Clause (শর্তযুক্ত অংশ)-এ কখনো Future Tense (will/shall) বসে না, সেখানে Present Indefinite বসে। তাই সঠিক রূপ হলো: 'If you come, I will help you'।"
      },
      {
        id: "eng_ch3_saq4",
        questionBn: "Type 3 Conditional-এর গঠন এবং একটি আদর্শ উদাহরণ লিখুন।",
        answerBn: "Type 3 Conditional অতীতের কোনো অপূর্ণ শর্ত নির্দেশ করে। এর গঠন: If + Subject + had + V3 (Past Perfect), Subject + would have / could have / might have + V3। উদাহরণ: 'If you had worked hard, you would have passed the examination'।"
      },
      {
        id: "eng_ch3_saq5",
        questionBn: "অবাস্তব কল্পনা বা ইচ্ছার ক্ষেত্রে 'I wish I was' না হয়ে 'I wish I were' হয় কেন?",
        answerBn: "ইংরেজি ব্যাকরণে অবাস্তব ইচ্ছা, অসম্ভব কল্পনা বা কাল্পনিক পরিস্থিতি প্রকাশ করতে Past Subjunctive Mood ব্যবহৃত হয়। Subjunctive Mood-এ Subject যে কোনো Person বা Number হোক না কেন (I, He, She), Be-verb সর্বদা 'were' রূপে ব্যবহৃত হয় (যেমন: I wish I were the Prime Minister)।"
      },
      {
        id: "eng_ch3_saq6",
        questionBn: "Stative Verbs কী? এগুলো কেন Continuous Tense-এ সচরাচর বসে না?",
        answerBn: "যেসব Verb দ্বারা কোনো শারীরিক গতিশীল কাজ না বুঝিয়ে মানসিক অবস্থা, অনুভূতি, ইন্দ্রিয়ানুভূতি বা অধিকার বোঝায় (যেমন: know, feel, see, love, hear, understand, possess), তাদের Stative Verbs বলে। যেহেতু এগুলো কোনো চলমান বাহ্যিক ক্রিয়া নয়, তাই এদের সাথে সাধারণ অর্থে Continuous (-ing) হয় না; যেমন: 'I know him' (I am knowing him নয়)।"
      },
      {
        id: "eng_ch3_saq7",
        questionBn: "'Since' যখন দুটি Clause যুক্ত করে, তখন Tense-এর নিয়ম কী?",
        answerBn: "'Since' যদি Conjunction হিসেবে দুটি Clause-কে যুক্ত করে, তবে প্রথম Clause-টি Present Indefinite বা Present Perfect Tense হলে 'Since'-এর পরবর্তী Clause-টি সর্বদা Past Indefinite (V2) হয়। যেমন: 'Five years have passed since my grandfather died'।"
      },
      {
        id: "eng_ch3_saq8",
        questionBn: "Future Perfect Tense কখন ব্যবহৃত হয় এবং এর চেনার উপায় কী?",
        answerBn: "ভবিষ্যৎকালে কোনো নির্দিষ্ট সময়ের মধ্যে কোনো কাজ সম্পন্ন হয়ে থাকবে বোঝালে Future Perfect Tense (shall/will have + V3) ব্যবহৃত হয়। বাক্যে 'By this time tomorrow', 'By next month', 'By 2026' ইত্যাদি Time Markers থাকলে এই Tense হয়; যেমন: 'By next year, I will have finished my course'।"
      }
    ]
  }
};

export const ENGLISH_CH3_QUESTIONS: Question[] = [
  {
    id: "vol3_ch3_q1",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub1",
    questionBn: "He ___ to school every day on foot.",
    options: ["go", "goes", "going", "gone"],
    correctIndex: 1,
    explanationBn: "প্রতিদিনের অভ্যাস ও Subject 3rd Person Singular ('He') হওয়ায় Verb-এর সাথে es যুক্ত হয়ে 'goes' বসবে।",
    difficulty: "easy",
    tags: ["Tense", "Present Indefinite"]
  },
  {
    id: "vol3_ch3_q2",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub1",
    questionBn: "The sun ___ in the east and sets in the west.",
    options: ["rise", "rises", "rising", "rose"],
    correctIndex: 1,
    explanationBn: "চিরন্তন সত্য (Universal Truth) সর্বদা Present Indefinite Tense-এ 'rises' হয়।",
    difficulty: "easy",
    tags: ["Tense", "Universal Truth"]
  },
  {
    id: "vol3_ch3_q3",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub1",
    questionBn: "Water ___ at 100 degrees Celsius.",
    options: ["boil", "boils", "boiling", "boiled"],
    correctIndex: 1,
    explanationBn: "বৈজ্ঞানিক সত্য সর্বদা Present Indefinite Tense ('boils') হয়।",
    difficulty: "easy",
    tags: ["Tense", "Scientific Fact"]
  },
  {
    id: "vol3_ch3_q4",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub1",
    questionBn: "Listen! Someone ___ at the door.",
    options: ["knock", "knocks", "is knocking", "knocked"],
    correctIndex: 2,
    explanationBn: "'Listen!' দ্বারা বর্তমানে চলমান কাজ নির্দেশ করায় Present Continuous ('is knocking') বসবে।",
    difficulty: "easy",
    tags: ["Tense", "Present Continuous"]
  },
  {
    id: "vol3_ch3_q5",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub1",
    questionBn: "Look! The kite ___ high in the sky.",
    options: ["fly", "is flying", "flew", "flown"],
    correctIndex: 1,
    explanationBn: "'Look!' দ্বারা তাৎক্ষণিক চলমান ঘটনা বোঝায়, তাই Present Continuous ('is flying') হবে।",
    difficulty: "easy",
    tags: ["Tense", "Present Continuous"]
  },
  {
    id: "vol3_ch3_q6",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub1",
    questionBn: "He has just ___ his lunch.",
    options: ["finish", "finishes", "finished", "finishing"],
    correctIndex: 2,
    explanationBn: "'Just' ও 'has' থাকায় Present Perfect Tense-এ Verb-এর ৩য় রূপ ('finished') বসবে।",
    difficulty: "easy",
    tags: ["Tense", "Present Perfect"]
  },
  {
    id: "vol3_ch3_q7",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub1",
    questionBn: "I ___ him for a long time.",
    options: ["know", "am knowing", "have known", "was knowing"],
    correctIndex: 2,
    explanationBn: "'Know' হলো Stative Verb এবং সময়ের ব্যপ্তি নির্দেশ করায় Present Perfect 'have known' হবে।",
    difficulty: "medium",
    tags: ["Tense", "Stative Verb"]
  },
  {
    id: "vol3_ch3_q8",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub1",
    questionBn: "It ___ raining continuously since yesterday morning.",
    options: ["is", "was", "has been", "had"],
    correctIndex: 2,
    explanationBn: "'Since yesterday morning' থাকায় কাজ অতীতে শুরু হয়ে এখনও চলায় Present Perfect Continuous ('has been') হবে।",
    difficulty: "easy",
    tags: ["Tense", "Present Perfect Continuous"]
  },
  {
    id: "vol3_ch3_q9",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub1",
    questionBn: "They ___ in this village for ten years.",
    options: ["are living", "have been living", "live", "were living"],
    correctIndex: 1,
    explanationBn: "'For ten years' সময়কাল থাকায় Present Perfect Continuous ('have been living') সঠিক।",
    difficulty: "easy",
    tags: ["Tense", "Present Perfect Continuous"]
  },
  {
    id: "vol3_ch3_q10",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub2",
    questionBn: "Columbus ___ America in 1492.",
    options: ["discover", "discovers", "discovered", "has discovered"],
    correctIndex: 2,
    explanationBn: "অতীতের নির্দিষ্ট ঐতিহাসিক সাল (1492) থাকায় Past Indefinite (V2 'discovered') বসবে।",
    difficulty: "easy",
    tags: ["Tense", "Past Indefinite"]
  },
  {
    id: "vol3_ch3_q11",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub2",
    questionBn: "I ___ a strange dream last night.",
    options: ["see", "saw", "have seen", "had seen"],
    correctIndex: 1,
    explanationBn: "'Last night' থাকায় Past Indefinite Tense (V2 'saw' / 'had') বসবে।",
    difficulty: "easy",
    tags: ["Tense", "Past Indefinite"]
  },
  {
    id: "vol3_ch3_q12",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub2",
    questionBn: "The patient ___ before the doctor arrived.",
    options: ["died", "has died", "had died", "was died"],
    correctIndex: 2,
    explanationBn: "'Before'-এর পূর্ববর্তী অতীতে ঘটা প্রথম কাজটি Past Perfect (had + V3 'had died') হয়।",
    difficulty: "easy",
    tags: ["Tense", "Past Perfect Before"]
  },
  {
    id: "vol3_ch3_q13",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub2",
    questionBn: "The train ___ before we reached the railway station.",
    options: ["left", "had left", "has left", "was left"],
    correctIndex: 1,
    explanationBn: "'Before'-এর পূর্বের অংশে Past Perfect ('had left') বসে।",
    difficulty: "easy",
    tags: ["Tense", "Past Perfect Before"]
  },
  {
    id: "vol3_ch3_q14",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub2",
    questionBn: "We reached the cinema hall after the movie ___ .",
    options: ["started", "had started", "has started", "starts"],
    correctIndex: 1,
    explanationBn: "'After'-এর পরের অংশে পূর্ববর্তী কাজ বোঝাতে Past Perfect ('had started') বসে।",
    difficulty: "easy",
    tags: ["Tense", "Past Perfect After"]
  },
  {
    id: "vol3_ch3_q15",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub2",
    questionBn: "While the mother was cooking, the baby ___ soundly.",
    options: ["slept", "was sleeping", "has slept", "is sleeping"],
    correctIndex: 1,
    explanationBn: "অতীতের দুটি সমান্তরাল চলমান কাজ প্রকাশ করতে Past Continuous ('was sleeping') হয়।",
    difficulty: "medium",
    tags: ["Tense", "Past Continuous Parallel"]
  },
  {
    id: "vol3_ch3_q16",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub3",
    questionBn: "If you work hard, you ___ the examination.",
    options: ["pass", "will pass", "would pass", "passed"],
    correctIndex: 1,
    explanationBn: "1st Conditional-এ If + Present Indefinite হলে অপর অংশ Future Indefinite ('will pass') হয়।",
    difficulty: "easy",
    tags: ["Tense", "1st Conditional"]
  },
  {
    id: "vol3_ch3_q17",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub3",
    questionBn: "If I knew his address, I ___ to him immediately.",
    options: ["will write", "would write", "would have written", "wrote"],
    correctIndex: 1,
    explanationBn: "2nd Conditional-এ If + Past Indefinite (V2) থাকলে অপর অংশে 'would + V1' ('would write') বসে।",
    difficulty: "medium",
    tags: ["Tense", "2nd Conditional"]
  },
  {
    id: "vol3_ch3_q18",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub3",
    questionBn: "If he had invited me, I ___ the marriage ceremony.",
    options: ["would attend", "will attend", "would have attended", "had attended"],
    correctIndex: 2,
    explanationBn: "3rd Conditional-এ If + Past Perfect (had + V3) থাকলে অপর অংশে 'would have + V3' বসে।",
    difficulty: "medium",
    tags: ["Tense", "3rd Conditional"]
  },
  {
    id: "vol3_ch3_q19",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub3",
    questionBn: "It is high time we ___ our corrupt habits.",
    options: ["change", "changed", "had changed", "will change"],
    correctIndex: 1,
    explanationBn: "'It is high time'-এর পরে Subject থাকলে Verb Past Indefinite (V2 'changed') হয়।",
    difficulty: "easy",
    tags: ["Tense", "It is high time"]
  },
  {
    id: "vol3_ch3_q20",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub3",
    questionBn: "I wish I ___ a billionaire.",
    options: ["am", "was", "were", "had been"],
    correctIndex: 2,
    explanationBn: "অবাস্তব ইচ্ছা ও Subjunctive Mood প্রকাশ করতে Verb সর্বদা 'were' বসে।",
    difficulty: "easy",
    tags: ["Tense", "Subjunctive were"]
  },
  {
    id: "vol3_ch3_q21",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub3",
    questionBn: "He talks as if he ___ everything about the secret.",
    options: ["knows", "knew", "had known", "has known"],
    correctIndex: 1,
    explanationBn: "'As if'-এর পূর্বে Present Indefinite থাকলে পরে Past Indefinite ('knew') বসে।",
    difficulty: "medium",
    tags: ["Tense", "As if clause"]
  },
  {
    id: "vol3_ch3_q22",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub3",
    questionBn: "By this time tomorrow, we ___ our destination.",
    options: ["will reach", "will have reached", "reach", "reached"],
    correctIndex: 1,
    explanationBn: "'By this time tomorrow' নির্দেশিত সময়সীমায় Future Perfect ('will have reached') বসে।",
    difficulty: "medium",
    tags: ["Tense", "Future Perfect"]
  },
  {
    id: "vol3_ch3_q23",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub1",
    questionBn: "She has not replied to my letter ___ .",
    options: ["already", "just", "yet", "since"],
    correctIndex: 2,
    explanationBn: "Present Perfect নেতিবাচক বাক্যের শেষে 'yet' বসে।",
    difficulty: "easy",
    tags: ["Tense", "Yet in negative"]
  },
  {
    id: "vol3_ch3_q24",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub2",
    questionBn: "Three years have passed since his father ___ .",
    options: ["dies", "died", "has died", "had died"],
    correctIndex: 1,
    explanationBn: "Present Perfect + Since + Past Indefinite (V2 'died') নিয়ম প্রযোজ্য।",
    difficulty: "medium",
    tags: ["Tense", "Since Conjunction"]
  },
  {
    id: "vol3_ch3_q25",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub2",
    questionBn: "Scarcely had he entered the room ___ the telephone rang.",
    options: ["than", "when", "then", "before"],
    correctIndex: 1,
    explanationBn: "'Scarcely had...'-এর সাথে Conjunction 'when' বসে।",
    difficulty: "medium",
    tags: ["Tense", "Scarcely when"]
  },
  {
    id: "vol3_ch3_q26",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub2",
    questionBn: "No sooner had the teacher entered the classroom ___ the students stood up.",
    options: ["when", "then", "than", "before"],
    correctIndex: 2,
    explanationBn: "'No sooner had...'-এর সাথে তুলনামূলক Conjunction 'than' বসে।",
    difficulty: "easy",
    tags: ["Tense", "No sooner than"]
  },
  {
    id: "vol3_ch3_q27",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub1",
    questionBn: "I ___ a letter when you called me.",
    options: ["wrote", "was writing", "have written", "am writing"],
    correctIndex: 1,
    explanationBn: "অতীতে একটি কাজ চলাকালীন অন্যটি ঘটলে চলমান কাজটি Past Continuous ('was writing') হয়।",
    difficulty: "easy",
    tags: ["Tense", "Past Continuous"]
  },
  {
    id: "vol3_ch3_q28",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub1",
    questionBn: "Honey ___ sweet.",
    options: ["is tasting", "tastes", "tasted", "has tasted"],
    correctIndex: 1,
    explanationBn: "চিরন্তন বৈশিষ্ট্য প্রকাশে Stative Verb 'taste' Present Indefinite ('tastes') হয়।",
    difficulty: "easy",
    tags: ["Tense", "Stative Verb Taste"]
  },
  {
    id: "vol3_ch3_q29",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub3",
    questionBn: "Had you told me earlier, I ___ you.",
    options: ["would help", "would have helped", "will help", "had helped"],
    correctIndex: 1,
    explanationBn: "'Had + Subject + V3' দিয়ে শুরু হওয়া বাক্যে পরবর্তী ক্লজে 'would have + V3' বসে।",
    difficulty: "hard",
    tags: ["Tense", "Inverted Condition"]
  },
  {
    id: "vol3_ch3_q30",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub3",
    questionBn: "We will leave for the station as soon as the taxi ___ .",
    options: ["will arrive", "arrives", "arrived", "is arriving"],
    correctIndex: 1,
    explanationBn: "'As soon as'-যুক্ত Time Clause-এ কখনো Future Tense হয় না, Present Indefinite ('arrives') বসে।",
    difficulty: "medium",
    tags: ["Tense", "Time Clause"]
  },
  {
    id: "vol3_ch3_q31",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub2",
    questionBn: "He ___ in Delhi when the incident occurred.",
    options: ["lived", "was living", "has lived", "had lived"],
    correctIndex: 1,
    explanationBn: "ঘটনা ঘটার সময় চলমান অবস্থা বোঝাতে Past Continuous ('was living') ব্যবহৃত হয়।",
    difficulty: "easy",
    tags: ["Tense", "Past Continuous"]
  },
  {
    id: "vol3_ch3_q32",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub1",
    questionBn: "I ___ this movie three times already.",
    options: ["saw", "have seen", "am seeing", "had seen"],
    correctIndex: 1,
    explanationBn: "'Already' এবং বর্তমান পর্যন্ত মোট অভিজ্ঞতার সংখ্যা বোঝাতে Present Perfect ('have seen') বসে।",
    difficulty: "easy",
    tags: ["Tense", "Present Perfect Experience"]
  },
  {
    id: "vol3_ch3_q33",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub3",
    questionBn: "It is high time you ___ for a permanent job.",
    options: ["apply", "applied", "have applied", "had applied"],
    correctIndex: 1,
    explanationBn: "'It is high time'-এর পরে Past Indefinite (V2 'applied') বসে।",
    difficulty: "easy",
    tags: ["Tense", "It is high time"]
  },
  {
    id: "vol3_ch3_q34",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub3",
    questionBn: "I wish I ___ wings to fly like a bird.",
    options: ["have", "had", "have had", "am having"],
    correctIndex: 1,
    explanationBn: "কাল্পনিক অপ্রাপ্য অধিকার প্রকাশ করতে Past Subjunctive ('had') বসে।",
    difficulty: "medium",
    tags: ["Tense", "Subjunctive Had"]
  },
  {
    id: "vol3_ch3_q35",
    subjectId: "english",
    chapterId: "eng_ch3",
    subTopicId: "eng_ch3_sub3",
    questionBn: "Unless you ___ hard, you will not succeed in life.",
    options: ["do not work", "work", "worked", "will work"],
    correctIndex: 1,
    explanationBn: "'Unless' নিজেই নেতিবাচক এবং Present Indefinite হওয়ায় শুধু 'work' বসবে।",
    difficulty: "easy",
    tags: ["Tense", "Unless Clause"]
  }
];
