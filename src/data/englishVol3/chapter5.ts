import { StudyChapter, Question } from "../../types";

export const ENGLISH_CH5_STUDY: StudyChapter = {
  id: "eng_ch5",
  subjectId: "english",
  chapterNumber: 5,
  titleBn: "Narration Change (উক্তি পরিবর্তন - Direct to Indirect)",
  titleEn: "Narration Change - Direct & Indirect Speech, Reporting Verb Rules & Types of Sentences",
  estimatedMinutes: 35,
  importantNotesCount: 30,
  summary: "Direct Speech থেকে Indirect Speech-এ রূপান্তরের সকল বৈজ্ঞানিক নিয়ম। Reporting Verb (said -> told/asked/ordered/advised/prayed/exclaimed), Tense-এর পরিবর্তন (Present -> Past, Past -> Past Perfect), ব্যতিক্রম (Universal Truth ও বৈজ্ঞানিক সত্যে Tense অপরিবর্তিত থাকে), Pronoun পরিবর্তন (1st Person -> Subject, 2nd Person -> Object), Time & Place words রূপান্তর (Now -> Then, Today -> That day, Tomorrow -> Next day), এবং Assertive, Interrogative, Imperative, Optative ও Exclamatory বাক্যের রূপান্তর।",
  subTopics: [
    {
      id: "eng_ch5_sub1",
      chapterId: "eng_ch5",
      subjectId: "english",
      titleBn: "Basic Rules & Assertive Sentences",
      titleEn: "Tense Changes, Pronoun Rules, Time/Place Words & Universal Truth",
      orderIndex: 1,
      summaryBn: "Reporting Verb Past হলে Tense এক ধাপ অতীতে যায় (am/is/are -> was/were, V1 -> V2, V2 -> had+V3, has/have -> had)। কিন্তু Universal Truth হলে Tense বদলায় না। Now -> Then, Today -> That day, Yesterday -> The previous day।",
      keyConcepts: ["He said, 'I am ill' -> He said that he was ill", "Teacher said, 'The sun rises in the east' -> said that the sun rises in the east", "Said to -> Told"]
    },
    {
      id: "eng_ch5_sub2",
      chapterId: "eng_ch5",
      subjectId: "english",
      titleBn: "Interrogative & Imperative Sentences",
      titleEn: "Asked + if/whether/Wh-word & Ordered/Advised/Requested + to + V1",
      orderIndex: 2,
      summaryBn: "Yes/No প্রশ্নে Linker 'if/whether', Wh-প্রশ্নে Wh-word নিজেই Linker; বাক্য Assertive হয় (Subject + Verb)। Imperative-এ said to -> requested/ordered/advised + to + V1। 'Let us' থাকলে proposed that we/they should।",
      keyConcepts: ["He said to me, 'Are you happy?' -> He asked me if I was happy", "He said to me, 'Where do you live?' -> He asked me where I lived", "He said, 'Please help me' -> He requested to help him"]
    },
    {
      id: "eng_ch5_sub3",
      chapterId: "eng_ch5",
      subjectId: "english",
      titleBn: "Optative & Exclamatory Sentences",
      titleEn: "Wished/Prayed + that + might & Exclaimed with joy/sorrow + that",
      orderIndex: 3,
      summaryBn: "Optative: said -> prayed/wished + that + Subject + might + V1। Exclamatory: said -> exclaimed with joy/sorrow/wonder + that + Subject + Verb + very/great + Adjective।",
      keyConcepts: ["Mother said, 'May you live long' -> Mother prayed that I might live long", "He said, 'Hurrah! We have won' -> He exclaimed with joy that they had won", "He said, 'What a beautiful bird!' -> He exclaimed with wonder that it was a very beautiful bird"]
    }
  ],
  content: {
    introduction: "উক্তি পরিবর্তন (Narration Change / Direct & Indirect Speech) প্রতিযোগিতামূলক পরীক্ষার ইংরেজি ব্যাকরণের অন্যতম প্রধান ভিত্তি। বক্তার বক্তব্যকে সরাসরি (Direct) থেকে পরোক্ষ (Indirect) বর্ণনায় রূপান্তরের নির্দিষ্ট নিয়মকানুন আয়ত্ত করা অত্যন্ত জরুরি।",
    sections: [
      {
        heading: "১. Tense, Pronoun এবং সময়ের রূপান্তরের মৌলিক নিয়মাবলি",
        body: [
          "• Reporting Verb (said) যদি Past Tense-এ থাকে, তবে Reported Speech-এর Tense নিম্নরূপ পরিবর্তিত হয়:",
          "  - Present Indefinite (V1) ➔ Past Indefinite (V2)",
          "  - Present Continuous (am/is/are) ➔ Past Continuous (was/were)",
          "  - Present Perfect (has/have + V3) ➔ Past Perfect (had + V3)",
          "  - Past Indefinite (V2) ➔ Past Perfect (had + V3)",
          "  - Past Continuous (was/were + ing) ➔ Past Perfect Continuous (had been + ing)",
          "  - Can ➔ Could, May ➔ Might, Shall/Will ➔ Should/Would",
          "• ব্যতিক্রম (Universal Truth / Habitual Fact): চিরন্তন সত্য বা অভ্যাসগত সত্যের ক্ষেত্রে Reporting Verb Past হলেও ভেতরের Tense কখনোই বদলায় না ('The earth moves round the sun')।",
          "• সময়ের শব্দ রূপান্তর: Now ➔ Then, Today ➔ That day, Tomorrow ➔ The next day / The following day, Yesterday ➔ The previous day / The day before, Tonight ➔ That night, Ago ➔ Before, Here ➔ There, This ➔ That।"
        ]
      },
      {
        heading: "২. Interrogative এবং Imperative Sentences-এর Narration",
        body: [
          "• Interrogative Sentences (প্রশ্নবোধক বাক্য):",
          "  - Reporting Verb 'said to' পরিবর্তিত হয়ে 'asked' বা 'enquired of' হয়।",
          "  - Yes/No প্রশ্ন হলে Linker হিসেবে 'if' বা 'whether' বসে।",
          "  - Wh-questions (Who, What, Where, When, Why, How) থাকলে Wh-word-টিই Linker হিসেবে সরাসরি বসে।",
          "  - সবচেয়ে গুরুত্বপূর্ণ: Indirect Speech-এ বাক্যটি আর প্রশ্নবোধক থাকে না, বরং সাধারণ বর্ণনামূলক (Subject + Verb) রূপ ধারণ করে।",
          "• Imperative Sentences (আদেশ/অনুরোধ/উপদেশ):",
          "  - said to ➔ ordered / commanded / requested / advised / begged / warned.",
          "  - Linker হিসেবে কমা ও ইনভার্টেড কমা তুলে 'to + V1' বসে; নেতিবাচক হলে 'not to + V1' বসে।",
          "  - 'Let us' থাকলে: proposed / suggested that + we/they should + V1।"
        ]
      },
      {
        heading: "৩. Optative ও Exclamatory Sentences-এর Narration",
        body: [
          "• Optative Sentences (প্রার্থনা বা ইচ্ছাসূচক):",
          "  - said to ➔ wished (শুভেচ্ছা/ইচ্ছা) বা prayed (আল্লাহ/ঈশ্বরের কাছে প্রার্থনা)।",
          "  - Linker হিসেবে 'that' বসে এবং 'May' পরিবর্তিত হয়ে 'might' হয়ে Subject-এর পরে বসে (e.g., 'May God bless you' ➔ prayed that God might bless him)।",
          "• Exclamatory Sentences (বিস্ময়সূচক বাক্য):",
          "  - Hurrah! ➔ exclaimed with joy that...",
          "  - Alas! ➔ exclaimed with sorrow / grief that...",
          "  - What a / How ➔ exclaimed with wonder / surprise that + it was a very/great..."
        ]
      }
    ],
    examTips: [
      "Interrogative Indirect-এ কখনোই 'that' এবং 'if' একসাথে বসে না, এবং বাক্যটি প্রশ্নচিহ্ন (?) হারিয়ে ফুলস্টপ (.) পায়।",
      "Universal Truth থাকলে Tense বদলাবে না (The teacher said that the earth moves round the sun)।",
      "Let us থাকলে proposed/suggested that we/they should বসে।",
      "Yesterday পরিবর্তিত হয়ে 'the previous day' এবং Tomorrow পরিবর্তিত হয়ে 'the next day' হয়।"
    ],
    quickRevisionPoints: [
      "Assertive: said to -> told + that.",
      "Universal Truth -> Tense unchanged.",
      "Interrogative: asked + if/Wh-word + Subject + Verb.",
      "Imperative: ordered/requested/advised + to + V1.",
      "Let us -> proposed that we/they should.",
      "Optative: prayed/wished that + Subject + might + V1.",
      "Exclamatory: exclaimed with joy/sorrow that."
    ],
    oneLiners: [
      "Reporting Verb যদি Present বা Future Tense হয়, তবে Reported Speech-এর Tense বদলায় না।",
      "চিরন্তন সত্য (Universal Truth) এবং বৈজ্ঞানিক তথ্যে Reported Speech-এর Tense সর্বদা অপরিবর্তিত থাকে।",
      "Direct থেকে Indirect করার সময় 'Today' বদলে 'That day' এবং 'Tonight' বদলে 'That night' হয়।",
      "'Tomorrow' পরিবর্তিত হয়ে 'The next day' বা 'The following day' হয়।",
      "'Yesterday' পরিবর্তিত হয়ে 'The previous day' বা 'The day before' হয়।",
      "Past Indefinite Tense (V2) Indirect Speech-এ Past Perfect (had + V3)-এ রূপান্তরিত হয়।",
      "Interrogative বাক্যে Wh-word থাকলে কোনো অতিরিক্ত Linker (that/if) বসে না।",
      "প্রশ্নবোধক বাক্য Indirect-এ রূপান্তরিত হয়ে সাধারণ বর্ণনামূলক (Subject + Verb) কাঠামো পায়।",
      "অনুরোধমূলক বাক্যে 'Please' উঠে গিয়ে Reporting Verb 'requested' এবং Linker 'to' বসে।",
      "নিষেধমূলক বাক্যে 'Do not' উঠে গিয়ে 'not to + V1' ব্যবহৃত হয় (advised not to run in the sun)।",
      "প্রস্তাব বোঝাতে 'Let us' থাকলে 'proposed/suggested that we/they should' ব্যবহৃত হয়।",
      "অনুমতি বোঝাতে 'Let me' থাকলে 'might be allowed to' ব্যবহৃত হয় (requested that he might be allowed to go)।",
      "ইচ্ছা বা প্রার্থনামূলক বাক্যে 'May' পরিবর্তিত হয়ে 'might' হয় (prayed that God might bless him)।",
      "বিস্ময়সূচক বাক্যে 'Hurrah!' থাকলে 'exclaimed with joy' বসে।",
      "বিস্ময়সূচক বাক্যে 'Alas!' থাকলে 'exclaimed with sorrow / grief' বসে।",
      "'Good morning' থাকলে Reporting Verb 'wished' এবং 'Good bye/Farewell' থাকলে 'bade' বসে।",
      "'What a beautiful scene!' থাকলে Indirect-এ 'very beautiful scene' যুক্ত হয়।",
      "'Sir' বা 'Madam' থাকলে Indirect Speech-এ 'respectfully' বা 'politely' শব্দটি যোগ হয়।"
    ],
    saqs: [
      {
        id: "eng_ch5_saq1",
        questionBn: "Direct থেকে Indirect করার সময় Universal Truth বাক্যের Tense কেন অপরিবর্তিত থাকে?",
        answerBn: "যেহেতু চিরন্তন সত্য, ভৌগোলিক তথ্য, বৈজ্ঞানিক সত্য বা ঐতিহাসিক প্রবাদ কোনো নির্দিষ্ট সময়ের মধ্যে সীমাবদ্ধ নয় এবং অতীতে যেমন সত্য ছিল আজও সমানভাবে সত্য (যেমন: The sun rises in the east), তাই Reporting Verb Past Tense হলেও Reported Speech-এর Tense সর্বদা Present Indefinite-এই অপরিবর্তিত থাকে।"
      },
      {
        id: "eng_ch5_saq2",
        questionBn: "She said to me, \"What is your name?\" — এর Indirect Speech কী এবং গঠন বিন্যাস ব্যাখ্যা করুন।",
        answerBn: "সঠিক উত্তর: She asked me what my name was। এখানে 'said to' বদলে 'asked' হয়েছে, Wh-word 'what' সরাসরি Conjunction হিসেবে বসেছে, এবং মূল পরিবর্তন হলো প্রশ্নবোধক রূপের বদলে বর্ণনামূলক রূপ হিসেবে Subject ('my name') আগে এবং Verb ('was') পরে বসেছে।"
      },
      {
        id: "eng_ch5_saq3",
        questionBn: "Imperative বাক্যে 'Let us' থাকলে Narration কীভাবে পরিবর্তিত হয়?",
        answerBn: "'Let us' দ্বারা যৌথ প্রস্তাব (Proposal) বা পরামর্শ বোঝায়। তাই Reporting Verb হিসেবে 'proposed' বা 'suggested' বসে, Linker হিসেবে 'that' বসে এবং এর সাথে 'we should' বা 'they should + V1' বসে। যেমন: He said to me, \"Let us go for a walk\" ➔ He proposed to me that we should go for a walk।"
      },
      {
        id: "eng_ch5_saq4",
        questionBn: "'Let me' এবং 'Let us' এর মধ্যে Narration Change-এর পার্থক্য কী?",
        answerBn: "'Let us' দ্বারা প্রস্তাব বোঝায় বলে 'proposed that they should' হয়; কিন্তু 'Let me / Let him' দ্বারা সাধারণত ব্যক্তিগত অনুরোধ বা অনুমতি চাওয়া বোঝায়, তাই Reporting Verb 'requested' হয় এবং Linker 'that + Subject + might / might be allowed to + V1' বসে (যেমন: He said, \"Let me come in\" ➔ He requested that he might be allowed to come in)।"
      },
      {
        id: "eng_ch5_saq5",
        questionBn: "Yes/No প্রশ্নবোধক বাক্যে Linker হিসেবে কী বসে এবং কেন?",
        answerBn: "যেসব প্রশ্নবোধক বাক্য Auxiliary Verb (Am, Is, Are, Have, Do, Can ইত্যাদি) দিয়ে শুরু হয় এবং উত্তর শুধু 'হ্যাঁ' বা 'না' দিয়ে দেওয়া যায়, সেগুলোর Indirect Speech-এ কমা তুলে Linker হিসেবে 'if' বা 'whether' ব্যবহৃত হয়। যেমন: He said to me, \"Are you reading?\" ➔ He asked me if I was reading।"
      },
      {
        id: "eng_ch5_saq6",
        questionBn: "Optative Sentences (প্রার্থনা/ইচ্ছা)-এর Narration Change-এর নিয়ম কী?",
        answerBn: "Optative বাক্যে Reporting Verb 'said' পরিবর্তিত হয়ে 'wished' বা 'prayed' হয়। কমা উঠে Linker 'that' বসে, Reported Speech-এর Subject আগে আসে এবং 'May' পরিবর্তিত হয়ে 'might' রূপে Verb-এর আগে বসে (যেমন: The saint said, \"May you be happy\" ➔ The saint prayed that he might be happy)।"
      },
      {
        id: "eng_ch5_saq7",
        questionBn: "Exclamatory বাক্যে 'What a / How' থাকলে তা Indirect-এ কীভাবে পরিবর্তিত হয়?",
        answerBn: "Exclamatory বাক্যে তীব্র অনুভূতি প্রকাশ পায়। তাই Reporting Verb 'exclaimed with wonder/joy' হয় এবং 'What a' বা 'How'-এর তীব্রতা বোঝাতে Indirect বাক্যে Adjective-এর পূর্বে 'very' (যেমন: very beautiful) বা Noun-এর পূর্বে 'great' (যেমন: a great fool) যুক্ত করা হয়।"
      },
      {
        id: "eng_ch5_saq8",
        questionBn: "'Good morning' এবং 'Good bye'-এর ক্ষেত্রে Reporting Verb কীভাবে পরিবর্তিত হয়?",
        answerBn: "'Good morning', 'Good evening', 'Happy New Year' ইত্যাদি শুভেচ্ছা বিনিময়ের ক্ষেত্রে Reporting Verb 'wished' হয় (He wished me good morning); কিন্তু বিদায় জানানোর ক্ষেত্রে 'Good bye', 'Farewell' থাকলে Reporting Verb 'bade' (Bid-এর Past) বসে (He bade his friends good bye)।"
      }
    ]
  }
};

export const ENGLISH_CH5_QUESTIONS: Question[] = [
  {
    id: "vol3_ch5_q1",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub1",
    questionBn: "He says, \"I am very busy today.\"",
    options: ["He says that he is very busy today.", "He says that he was very busy that day.", "He said that he was very busy today.", "He says that I am very busy today."],
    correctIndex: 0,
    explanationBn: "Reporting Verb 'says' (Present Tense) হওয়ায় ভেতরের Tense ও Time word পরিবর্তিত হবে না।",
    difficulty: "easy",
    tags: ["Narration Change", "Present Reporting Verb"]
  },
  {
    id: "vol3_ch5_q2",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub1",
    questionBn: "The teacher said, \"The earth moves round the sun.\"",
    options: [
      "The teacher said that the earth moved round the sun.",
      "The teacher said that the earth moves round the sun.",
      "The teacher said that the earth had moved round the sun.",
      "The teacher told that the earth moves round the sun."
    ],
    correctIndex: 1,
    explanationBn: "চিরন্তন সত্য (Universal Truth) হওয়ায় Tense অপরিবর্তিত থাকবে ('the earth moves round the sun')।",
    difficulty: "easy",
    tags: ["Narration Change", "Universal Truth"]
  },
  {
    id: "vol3_ch5_q3",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub1",
    questionBn: "Ram said to me, \"I saw him yesterday.\"",
    options: [
      "Ram told me that he saw him yesterday.",
      "Ram told me that he had seen him the previous day.",
      "Ram told me that he has seen him the day before.",
      "Ram said to me that he had seen him yesterday."
    ],
    correctIndex: 1,
    explanationBn: "Past Indefinite (saw) ➔ Past Perfect (had seen) এবং 'yesterday' ➔ 'the previous day' হবে।",
    difficulty: "medium",
    tags: ["Narration Change", "Past to Past Perfect"]
  },
  {
    id: "vol3_ch5_q4",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub1",
    questionBn: "She said, \"I have completed my project.\"",
    options: [
      "She said that she has completed her project.",
      "She said that she had completed her project.",
      "She told that she completed her project.",
      "She said that I had completed my project."
    ],
    correctIndex: 1,
    explanationBn: "Present Perfect (have completed) ➔ Past Perfect (had completed) হবে।",
    difficulty: "easy",
    tags: ["Narration Change", "Present Perfect"]
  },
  {
    id: "vol3_ch5_q5",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub2",
    questionBn: "He said to me, \"Are you going to the market?\"",
    options: [
      "He asked me that if I was going to the market.",
      "He asked me if I was going to the market.",
      "He asked me if was I going to the market.",
      "He inquired me whether I am going to the market."
    ],
    correctIndex: 1,
    explanationBn: "Yes/No প্রশ্নে Linker 'if' এবং বাক্যটি Assertive (Subject 'I' + Verb 'was') হবে।",
    difficulty: "easy",
    tags: ["Narration Change", "Interrogative If"]
  },
  {
    id: "vol3_ch5_q6",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub2",
    questionBn: "The policeman said to the stranger, \"Where do you live?\"",
    options: [
      "The policeman asked the stranger where did he live.",
      "The policeman asked the stranger where he lived.",
      "The policeman asked the stranger where he lives.",
      "The policeman asked that where he lived."
    ],
    correctIndex: 1,
    explanationBn: "Wh-question-এ 'where' Linker এবং Present Indefinite বদলে Past Indefinite ('he lived') হবে।",
    difficulty: "medium",
    tags: ["Narration Change", "Wh-Interrogative"]
  },
  {
    id: "vol3_ch5_q7",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub2",
    questionBn: "Mother said to me, \"Do not run in the sun.\"",
    options: [
      "Mother advised me to not run in the sun.",
      "Mother advised me not to run in the sun.",
      "Mother told me do not run in the sun.",
      "Mother ordered me that not to run in the sun."
    ],
    correctIndex: 1,
    explanationBn: "Imperative নেতিবাচক উপদেশে 'advised me not to run in the sun' বসে।",
    difficulty: "easy",
    tags: ["Narration Change", "Negative Imperative"]
  },
  {
    id: "vol3_ch5_q8",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub2",
    questionBn: "He said to his friend, \"Please lend me your bicycle.\"",
    options: [
      "He ordered his friend to lend him his bicycle.",
      "He requested his friend to lend him his bicycle.",
      "He advised his friend to lend him your bicycle.",
      "He requested his friend that lend him his bicycle."
    ],
    correctIndex: 1,
    explanationBn: "'Please' থাকার কারণে Reporting Verb 'requested' এবং Linker 'to' বসে।",
    difficulty: "easy",
    tags: ["Narration Change", "Request"]
  },
  {
    id: "vol3_ch5_q9",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub2",
    questionBn: "The captain said to the soldiers, \"Attack the enemy post.\"",
    options: [
      "The captain requested the soldiers to attack the enemy post.",
      "The captain ordered the soldiers to attack the enemy post.",
      "The captain advised the soldiers attack the enemy post.",
      "The captain commanded that attack the enemy post."
    ],
    correctIndex: 1,
    explanationBn: "সামরিক আদেশে Reporting Verb 'ordered' বা 'commanded' এবং 'to attack' বসে।",
    difficulty: "easy",
    tags: ["Narration Change", "Command"]
  },
  {
    id: "vol3_ch5_q10",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub2",
    questionBn: "He said, \"Let us go for a morning walk.\"",
    options: [
      "He said that they should go for a morning walk.",
      "He proposed that they should go for a morning walk.",
      "He requested that they might go for a morning walk.",
      "He ordered that let them go for a morning walk."
    ],
    correctIndex: 1,
    explanationBn: "'Let us' থাকলে 'proposed that they should go for a morning walk' সঠিক।",
    difficulty: "medium",
    tags: ["Narration Change", "Let us Proposal"]
  },
  {
    id: "vol3_ch5_q11",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub3",
    questionBn: "The priest said, \"May God grant you peace!\"",
    options: [
      "The priest wished that God might grant you peace.",
      "The priest prayed that God might grant him peace.",
      "The priest prayed that God may grant him peace.",
      "The priest exclaimed that God might grant him peace."
    ],
    correctIndex: 1,
    explanationBn: "প্রার্থনামূলক বাক্যে 'prayed that God might grant him peace' হবে।",
    difficulty: "medium",
    tags: ["Narration Change", "Optative Sentence"]
  },
  {
    id: "vol3_ch5_q12",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub3",
    questionBn: "The boys said, \"Hurrah! We have won the cricket championship.\"",
    options: [
      "The boys exclaimed with joy that they had won the cricket championship.",
      "The boys exclaimed with sorrow that they had won the cricket championship.",
      "The boys said with joy that they have won the cricket championship.",
      "The boys shouted that we had won the cricket championship."
    ],
    correctIndex: 0,
    explanationBn: "'Hurrah!' বদলে 'exclaimed with joy that they had won...' হয়।",
    difficulty: "easy",
    tags: ["Narration Change", "Exclamatory Joy"]
  },
  {
    id: "vol3_ch5_q13",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub3",
    questionBn: "The old man said, \"Alas! My only son is dead.\"",
    options: [
      "The old man exclaimed with sorrow that his only son is dead.",
      "The old man exclaimed with sorrow that his only son was dead.",
      "The old man cried that his only son had died.",
      "The old man wished that his only son was dead."
    ],
    correctIndex: 1,
    explanationBn: "'Alas!' বদলে 'exclaimed with sorrow/grief that his only son was dead' হয়।",
    difficulty: "easy",
    tags: ["Narration Change", "Exclamatory Sorrow"]
  },
  {
    id: "vol3_ch5_q14",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub3",
    questionBn: "She said, \"What a beautiful painting this is!\"",
    options: [
      "She exclaimed with wonder that it was a very beautiful painting.",
      "She said that what a beautiful painting that was.",
      "She exclaimed that it is a beautiful painting.",
      "She asked if that was a beautiful painting."
    ],
    correctIndex: 0,
    explanationBn: "'What a' তীব্রতা বোঝাতে Indirect-এ 'it was a very beautiful painting' বসে।",
    difficulty: "medium",
    tags: ["Narration Change", "Exclamatory Wonder"]
  },
  {
    id: "vol3_ch5_q15",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub1",
    questionBn: "He said, \"I will meet you tomorrow.\"",
    options: [
      "He said that he will meet me tomorrow.",
      "He said that he would meet me the next day.",
      "He told that he would meet me tomorrow.",
      "He said that he should meet me the next day."
    ],
    correctIndex: 1,
    explanationBn: "'will' ➔ 'would' এবং 'tomorrow' ➔ 'the next day' হবে।",
    difficulty: "easy",
    tags: ["Narration Change", "Time Words"]
  },
  {
    id: "vol3_ch5_q16",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub1",
    questionBn: "Father said, \"Honesty is the best policy.\"",
    options: [
      "Father said that honesty was the best policy.",
      "Father said that honesty is the best policy.",
      "Father told that honesty had been the best policy.",
      "Father advised that honesty is the best policy."
    ],
    correctIndex: 1,
    explanationBn: "প্রবাদ বাক্য (Universal Truth / Proverb) সর্বদা Present Tense-এ অপরিবর্তিত থাকে।",
    difficulty: "easy",
    tags: ["Narration Change", "Proverb"]
  },
  {
    id: "vol3_ch5_q17",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub2",
    questionBn: "The teacher said to the student, \"Why were you absent yesterday?\"",
    options: [
      "The teacher asked the student why he had been absent the previous day.",
      "The teacher asked the student why was he absent yesterday.",
      "The teacher asked the student why he was absent the day before.",
      "The teacher inquired the student why had he been absent yesterday."
    ],
    correctIndex: 0,
    explanationBn: "Past Indefinite (were) ➔ Past Perfect (had been) এবং 'yesterday' ➔ 'the previous day' হবে।",
    difficulty: "hard",
    tags: ["Narration Change", "Past Interrogative"]
  },
  {
    id: "vol3_ch5_q18",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub2",
    questionBn: "He said, \"Let me have some water.\"",
    options: [
      "He proposed that he should have some water.",
      "He requested that he might have some water.",
      "He ordered to have some water.",
      "He wished that let him have water."
    ],
    correctIndex: 1,
    explanationBn: "'Let me' ব্যক্তিগত ইচ্ছা বা অনুরোধ প্রকাশ করায় 'requested that he might have...' হয়।",
    difficulty: "medium",
    tags: ["Narration Change", "Let me Permission"]
  },
  {
    id: "vol3_ch5_q19",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub3",
    questionBn: "He said to his friend, \"Good morning!\"",
    options: [
      "He told his friend good morning.",
      "He wished his friend good morning.",
      "He bade his friend good morning.",
      "He said good morning to his friend."
    ],
    correctIndex: 1,
    explanationBn: "'Good morning' শুভেচ্ছার ক্ষেত্রে Reporting Verb 'wished' ব্যবহৃত হয়।",
    difficulty: "easy",
    tags: ["Narration Change", "Wish Good Morning"]
  },
  {
    id: "vol3_ch5_q20",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub3",
    questionBn: "He said to his companions, \"Farewell, my friends!\"",
    options: [
      "He wished farewell to his friends.",
      "He bade farewell to his companions.",
      "He told farewell to his companions.",
      "He exclaimed farewell to his friends."
    ],
    correctIndex: 1,
    explanationBn: "বিদায় জানানোর ক্ষেত্রে Reporting Verb 'bade' (Bid-এর Past) বসে।",
    difficulty: "medium",
    tags: ["Narration Change", "Bade Farewell"]
  },
  {
    id: "vol3_ch5_q21",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub1",
    questionBn: "She said, \"I cannot solve this puzzle now.\"",
    options: [
      "She said that she could not solve that puzzle then.",
      "She said that she cannot solve that puzzle then.",
      "She told that she could not solve this puzzle now.",
      "She said that I could not solve that puzzle then."
    ],
    correctIndex: 0,
    explanationBn: "cannot ➔ could not, this ➔ that, now ➔ then হবে।",
    difficulty: "easy",
    tags: ["Narration Change", "Modals & Time"]
  },
  {
    id: "vol3_ch5_q22",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub1",
    questionBn: "He said, \"I was writing a letter when she came.\"",
    options: [
      "He said that he was writing a letter when she came.",
      "He said that he had been writing a letter when she had come.",
      "He said that he had been writing a letter when she came.",
      "He told that he wrote a letter when she came."
    ],
    correctIndex: 2,
    explanationBn: "Past Continuous (was writing) ➔ Past Perfect Continuous (had been writing) কিন্তু সময়সূচক Past Indefinite 'she came' অপরিবর্তিত থাকে।",
    difficulty: "hard",
    tags: ["Narration Change", "Complex Time Clause"]
  },
  {
    id: "vol3_ch5_q23",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub2",
    questionBn: "The doctor said to the patient, \"Take this medicine twice daily.\"",
    options: [
      "The doctor ordered the patient take this medicine.",
      "The doctor advised the patient to take that medicine twice daily.",
      "The doctor told the patient to take this medicine twice daily.",
      "The doctor suggested that take that medicine."
    ],
    correctIndex: 1,
    explanationBn: "চিকিৎসকের নির্দেশে 'advised' + 'to take that medicine twice daily' বসে।",
    difficulty: "easy",
    tags: ["Narration Change", "Doctor Advice"]
  },
  {
    id: "vol3_ch5_q24",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub2",
    questionBn: "The teacher said to the boy, \"Can you recite this poem?\"",
    options: [
      "The teacher asked the boy if he could recite that poem.",
      "The teacher asked the boy that can he recite that poem.",
      "The teacher inquired if could he recite this poem.",
      "The teacher told the boy to recite that poem."
    ],
    correctIndex: 0,
    explanationBn: "Can ➔ could, this ➔ that এবং Linker 'if' বসে।",
    difficulty: "easy",
    tags: ["Narration Change", "Can Interrogative"]
  },
  {
    id: "vol3_ch5_q25",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub3",
    questionBn: "The student said to the teacher, \"Sir, please explain this topic again.\"",
    options: [
      "The student requested the teacher respectfully to explain that topic again.",
      "The student said to sir to explain that topic again.",
      "The student ordered the teacher to explain this topic.",
      "The student told respectfully explain that topic."
    ],
    correctIndex: 0,
    explanationBn: "'Sir' থাকার জন্য 'respectfully' এবং 'please'-এর জন্য 'requested' বসে।",
    difficulty: "medium",
    tags: ["Narration Change", "Sir Respectfully"]
  },
  {
    id: "vol3_ch5_q26",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub1",
    questionBn: "My friend said, \"I have been living in Siliguri for five years.\"",
    options: [
      "My friend said that he has been living in Siliguri for five years.",
      "My friend said that he had been living in Siliguri for five years.",
      "My friend told that he lived in Siliguri for five years.",
      "My friend said that I had been living in Siliguri."
    ],
    correctIndex: 1,
    explanationBn: "Present Perfect Continuous ➔ Past Perfect Continuous ('had been living') হয়।",
    difficulty: "easy",
    tags: ["Narration Change", "Perfect Continuous"]
  },
  {
    id: "vol3_ch5_q27",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub2",
    questionBn: "He said to me, \"Did you see the match?\"",
    options: [
      "He asked me if I had seen the match.",
      "He asked me did I see the match.",
      "He asked me if I saw the match.",
      "He inquired me whether I have seen the match."
    ],
    correctIndex: 0,
    explanationBn: "Past Indefinite Question (Did you see) ➔ Past Perfect Assertive (if I had seen) হয়।",
    difficulty: "medium",
    tags: ["Narration Change", "Past Question"]
  },
  {
    id: "vol3_ch5_q28",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub3",
    questionBn: "The grandmother said, \"May you achieve great success in life!\"",
    options: [
      "The grandmother wished that he might achieve great success in life.",
      "The grandmother wished that he may achieve great success in life.",
      "The grandmother said that he might achieve success.",
      "The grandmother ordered him to achieve success."
    ],
    correctIndex: 0,
    explanationBn: "শুভেচ্ছা প্রকাশের ক্ষেত্রে 'wished that he might achieve great success in life' বসে।",
    difficulty: "easy",
    tags: ["Narration Change", "Wish Success"]
  },
  {
    id: "vol3_ch5_q29",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub1",
    questionBn: "He said, \"Man is mortal.\"",
    options: [
      "He said that man was mortal.",
      "He said that man is mortal.",
      "He told that man had been mortal.",
      "He said that man will be mortal."
    ],
    correctIndex: 1,
    explanationBn: "চিরন্তন দার্শনিক সত্য হওয়ায় 'man is mortal' অপরিবর্তিত থাকবে।",
    difficulty: "easy",
    tags: ["Narration Change", "Universal Truth"]
  },
  {
    id: "vol3_ch5_q30",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub2",
    questionBn: "The officer said to his clerk, \"Bring me that file immediately.\"",
    options: [
      "The officer requested the clerk to bring him that file immediately.",
      "The officer ordered the clerk to bring him that file immediately.",
      "The officer advised the clerk bringing that file.",
      "The officer told that clerk should bring the file."
    ],
    correctIndex: 1,
    explanationBn: "অফিসিয়াল আদেশে 'ordered the clerk to bring him that file immediately' সঠিক।",
    difficulty: "easy",
    tags: ["Narration Change", "Official Order"]
  },
  {
    id: "vol3_ch5_q31",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub3",
    questionBn: "He said, \"How foolish I have been!\"",
    options: [
      "He exclaimed with regret that he had been very foolish.",
      "He said that he was very foolish.",
      "He exclaimed that he has been foolish.",
      "He asked how foolish he was."
    ],
    correctIndex: 0,
    explanationBn: "অনুতাপ বা বিস্ময়সূচক বাক্যে 'exclaimed with regret that he had been very foolish' বসে।",
    difficulty: "hard",
    tags: ["Narration Change", "Exclamatory Regret"]
  },
  {
    id: "vol3_ch5_q32",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub2",
    questionBn: "The master said to the servant, \"Leave the room at once.\"",
    options: [
      "The master ordered the servant to leave the room at once.",
      "The master advised the servant to leave the room at once.",
      "The master told the servant that leave the room.",
      "The master requested the servant to leave the room."
    ],
    correctIndex: 0,
    explanationBn: "ভৃত্যকে আদেশে 'ordered the servant to leave the room at once' বসে।",
    difficulty: "easy",
    tags: ["Narration Change", "Master Servant"]
  },
  {
    id: "vol3_ch5_q33",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub1",
    questionBn: "He said, \"I bought these books yesterday.\"",
    options: [
      "He said that he had bought those books the previous day.",
      "He said that he bought these books yesterday.",
      "He said that he has bought those books the day before.",
      "He told that he had bought these books."
    ],
    correctIndex: 0,
    explanationBn: "bought (V2) ➔ had bought (V3), these ➔ those, yesterday ➔ the previous day।",
    difficulty: "medium",
    tags: ["Narration Change", "Past & Time"]
  },
  {
    id: "vol3_ch5_q34",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub2",
    questionBn: "She said to her brother, \"Don't make noise while I am studying.\"",
    options: [
      "She told her brother not to make noise while she is studying.",
      "She asked her brother not to make noise while she was studying.",
      "She ordered her brother do not make noise.",
      "She advised her brother to make no noise while I study."
    ],
    correctIndex: 1,
    explanationBn: "'Don't make noise' ➔ 'not to make noise' এবং 'I am studying' ➔ 'she was studying'।",
    difficulty: "hard",
    tags: ["Narration Change", "Complex Imperative"]
  },
  {
    id: "vol3_ch5_q35",
    subjectId: "english",
    chapterId: "eng_ch5",
    subTopicId: "eng_ch5_sub3",
    questionBn: "The travelers said, \"What a terrible storm it is!\"",
    options: [
      "The travelers exclaimed with fear that it was a very terrible storm.",
      "The travelers said that the storm was very terrible.",
      "The travelers asked if the storm was terrible.",
      "The travelers told that what a storm it was."
    ],
    correctIndex: 0,
    explanationBn: "ভয়ের সাথে বিস্ময় প্রকাশে 'exclaimed with fear that it was a very terrible storm' সঠিক।",
    difficulty: "medium",
    tags: ["Narration Change", "Exclamatory Storm"]
  }
];
