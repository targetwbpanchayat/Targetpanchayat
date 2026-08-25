import { StudyChapter, Question } from "../../types";

export const ENGLISH_CH13_STUDY: StudyChapter = {
  id: "eng_ch13",
  subjectId: "english",
  chapterNumber: 13,
  titleBn: "Transformation of Sentences (বাক্য রূপান্তর - Simple, Complex, Compound & Meaning-Based)",
  titleEn: "Transformation of Sentences - Affirmative to Negative, Assertive to Interrogative/Exclamatory & Simple/Complex/Compound",
  estimatedMinutes: 35,
  importantNotesCount: 30,
  summary: "অর্থের পরিবর্তন না ঘটিয়ে ইংরেজি বাক্যের গঠন ও রূপান্তর বিধি। Affirmative to Negative (Only ➔ None but/Nothing but/Not more than, Must ➔ Cannot but / Cannot help + ing, Every ➔ There is no..but, As soon as ➔ No sooner had..than), Assertive to Interrogative ও Exclamatory (What a / How ➔ very/great), এবং Simple, Complex ও Compound রূপান্তরের সার্বিক নিয়ম (Too..to ➔ So..that cannot, In spite of ➔ Though ➔ But, Since/As/When, By/Without + Gerund)।",
  subTopics: [
    {
      id: "eng_ch13_sub1",
      chapterId: "eng_ch13",
      subjectId: "english",
      titleBn: "Affirmative to Negative & Degree Conversion",
      titleEn: "Only (None but/Nothing but), Must (Cannot but), Every (There is no..but), As soon as (No sooner had)",
      orderIndex: 1,
      summaryBn: "Only-র রূপান্তর (ব্যক্তিতে None but, বস্তুতে Nothing but, সংখ্যায় Not more than); Must-এ Cannot but; As soon as-এ No sooner had...than; All/Every-তে There is no...but।",
      keyConcepts: ["Only = None but (person)", "Must = Cannot but + V1", "As soon as = No sooner had... than", "Too...to = So...that cannot"]
    },
    {
      id: "eng_ch13_sub2",
      chapterId: "eng_ch13",
      subjectId: "english",
      titleBn: "Assertive, Interrogative & Exclamatory Transformations",
      titleEn: "Question without meaning change, Exclamatory (How/What a) to Assertive (Very/Great)",
      orderIndex: 2,
      summaryBn: "হ্যাঁ-বোধক বাক্য রূপান্তরে নেগেটিভ প্রশ্নবোধক (Interrogative Negative) হয়; Nobody/None থাকলে 'Who' বসে; What a / How পরিবর্তিত হয়ে 'a very / very' বসে; Hurrah! থাকলে 'It is a matter of joy that' বসে।",
      keyConcepts: ["Assertive to Interrogative", "Nobody = Who", "What a = A very", "Alas = It is a matter of sorrow that"]
    },
    {
      id: "eng_ch13_sub3",
      chapterId: "eng_ch13",
      subjectId: "english",
      titleBn: "Simple, Complex & Compound Conversions",
      titleEn: "Too..to (So..that), In spite of (Though/But), By + V-ing (If/And), Participles",
      orderIndex: 3,
      summaryBn: "Too...to (Simple) ➔ So...that cannot (Complex); In spite of (Simple) ➔ Though (Complex) ➔ But (Compound); Being/Participle (Simple) ➔ As/When (Complex) ➔ And (Compound)।",
      keyConcepts: ["Too...to ➔ So...that cannot", "In spite of ➔ Though ➔ But", "By working hard ➔ If you work hard ➔ Work hard and", "Present Participle ➔ When ➔ And"]
    }
  ],
  content: {
    introduction: "Transformation of Sentences-এর মূল দর্শন হলো বাক্যের বাহ্যিক ব্যাকরণগত রূপ বা ক্লজ কাঠামো পরিবর্তন করা, কিন্তু মূল অর্থ ও ভাববস্তুকে সম্পূর্ণ অপরিবর্তিত রাখা। প্রতিযোগিতামূলক পরীক্ষায় এই অধ্যায় থেকে প্রচুর প্রশ্ন আসে।",
    sections: [
      {
        heading: "১. Affirmative থেকে Negative রূপান্তরের প্রধান নিয়ম",
        body: [
          "• 'Only' বা 'Alone'-এর ক্ষেত্রে ৩টি নিয়ম:",
          "  - ব্যক্তি বোঝালে: 'None but' (e.g., 'Only God can help us' ➔ 'None but God can help us')।",
          "  - বস্তু বোঝালে: 'Nothing but' (e.g., 'A child likes only sweets' ➔ 'A child likes nothing but sweets')।",
          "  - সংখ্যা/বয়স বোঝালে: 'Not more than / Not less than' (e.g., 'He is only ten' ➔ 'He is not more than ten')।",
          "• 'Must' থাকলে: 'Cannot but + V1' অথবা 'Cannot help + Verb-ing' (e.g., 'You must obey your parents' ➔ 'You cannot but obey your parents' / 'You cannot help obeying your parents')।",
          "• 'Every' থাকলে: 'There is no + Noun + but + Rest' (e.g., 'Every mother loves her child' ➔ 'There is no mother but loves her child')।",
          "• 'As soon as' থাকলে: 'No sooner had + Sub + V3 + ... + than + Rest' (e.g., 'As soon as he saw the police, he ran away' ➔ 'No sooner had he seen the police than he ran away')।"
        ]
      },
      {
        heading: "২. Assertive, Interrogative ও Exclamatory রূপান্তর",
        body: [
          "• Assertive (Affirmative) ➔ Interrogative (Negative): 'He is a great scholar' ➔ 'Is he not a great scholar?'",
          "• 'Nobody / None' ➔ 'Who + Affirmative Verb': 'Nobody believes a liar' ➔ 'Who believes a liar?'",
          "• 'Everybody / Everyone' ➔ 'Who does not': 'Everybody wishes to be happy' ➔ 'Who does not wish to be happy?'",
          "• Exclamatory ➔ Assertive: 'What a beautiful bird it is!' ➔ 'It is a very beautiful bird.'",
          "• 'Alas! We have lost the game' ➔ 'It is a matter of sorrow that we have lost the game.'",
          "• 'Hurrah! We won' ➔ 'It is a matter of joy that we have won.'"
        ]
      },
      {
        heading: "৩. Simple, Complex ও Compound রূপান্তর ছক",
        body: [
          "• Too...to ➔ So...that cannot ➔ Very...and so cannot:",
          "  - Simple: He is too weak to walk.",
          "  - Complex: He is so weak that he cannot walk.",
          "  - Compound: He is very weak and so he cannot walk.",
          "• In spite of ➔ Though/Although ➔ But:",
          "  - Simple: In spite of his poverty, he is honest.",
          "  - Complex: Though he is poor, he is honest.",
          "  - Compound: He is poor but he is honest.",
          "• Present Participle ➔ When/As ➔ And:",
          "  - Simple: Seeing the police, the thief fled.",
          "  - Complex: When the thief saw the police, he fled.",
          "  - Compound: The thief saw the police and he fled.",
          "• By + Gerund ➔ If (Affirmative) ➔ And:",
          "  - Simple: By working hard, you will succeed.",
          "  - Complex: If you work hard, you will succeed.",
          "  - Compound: Work hard and you will succeed."
        ]
      }
    ],
    examTips: [
      "Cannot help-এর পর Verb-এর সাথে সর্বদা 'ing' যুক্ত করতে হয় (cannot help laughing)।",
      "No sooner-এর সাথে 'than' বসবেই, 'when' বা 'then' কখনোই নয়।",
      "Too...to কে Complex করতে 'so...that + cannot/could not' ব্যবহৃত হয়।",
      "In spite of থাকলে Complex-এ Though/Although এবং Compound-এ But বসে।"
    ],
    quickRevisionPoints: [
      "Only (Person) -> None but; Only (Thing) -> Nothing but.",
      "Must -> Cannot but + V1 / Cannot help + ing.",
      "Every -> There is no... but.",
      "As soon as -> No sooner had... than.",
      "Too...to -> So...that cannot.",
      "In spite of -> Though / Although."
    ],
    oneLiners: [
      "ব্যক্তির ক্ষেত্রে 'Only' উঠে গিয়ে 'None but' এবং বস্তুর ক্ষেত্রে 'Nothing but' বসে।",
      "'Must'-এর পরিবর্তে 'Cannot but' অথবা 'Cannot help (+ing)' বসে।",
      "'Every'-যুক্ত বাক্যকে Negative করতে 'There is no... but' ব্যবহৃত হয়।",
      "'As soon as'-এর পরিবর্তে 'No sooner had... than' দ্বারা রূপান্তর করা হয়।",
      "হ্যাঁ-বোধক বাক্যকে প্রশ্নবোধক করতে না-বোধক প্রশ্ন (Interrogative Negative) করতে হয়।",
      "Exclamatory বাক্যের 'What a' বা 'How' তুলে দিয়ে 'a very' বা 'very' বসাতে হয়।",
      "'Alas!' থাকলে 'It is a matter of sorrow that' দিয়ে বাক্য শুরু হয়।",
      "'Hurrah!' থাকলে 'It is a matter of joy that' দিয়ে রূপান্তর করতে হয়।",
      "'Too...to' যুক্ত Simple বাক্য Complex-এ 'So...that + cannot' রূপ নেয়।",
      "'In spite of' যুক্ত Simple বাক্য Complex-এ 'Though' এবং Compound-এ 'But' নেয়।",
      "Participle যুক্ত Simple বাক্য Compound-এ 'and' দিয়ে দুটি স্বাধীন ক্লজ তৈরি করে।",
      "Nobody বা None থাকলে প্রশ্নবোধকে সরাসরি 'Who' বসে (Who believes a liar?)।",
      "Everybody থাকলে প্রশ্নবোধকে 'Who does not' বসে।",
      "Without + V-ing যুক্ত Simple বাক্য Complex-এ 'Unless' বা 'If..not' নেয়।",
      "Since বা As যুক্ত Complex বাক্য Compound-এ 'and so' বা 'and therefore' নেয়।",
      "Superlative Degree থেকে Positive-এ রূপান্তরের শুরুতে 'No other' বসে।",
      "Comparative Degree থেকে Positive-এ 'as...as' বা 'so...as' কাঠামো বসে।",
      "Affirmative থেকে Negative-এ বিপরীত শব্দ (Antonym) ব্যবহার করে 'not' বসানো হয়।"
    ],
    saqs: [
      {
        id: "eng_ch13_saq1",
        questionBn: "'Only' শব্দযুক্ত বাক্যের ৩টি ভিন্ন ক্ষেত্রে Negative করার নিয়ম উদাহরণসহ লিখুন।",
        answerBn: "১. ব্যক্তি বোঝালে 'None but': 'Only God can help us' ➔ 'None but God can help us'।\n২. বস্তু বোঝালে 'Nothing but': 'I have only a pencil' ➔ 'I have nothing but a pencil'।\n৩. সংখ্যা বা বয়স বোঝালে 'Not more than': 'He is only ten' ➔ 'He is not more than ten'।"
      },
      {
        id: "eng_ch13_saq2",
        questionBn: "'He is too weak to walk' — বাক্যটিকে Complex বাক্যে রূপান্তর করুন এবং সূত্রটি ব্যাখ্যা করুন।",
        answerBn: "Complex রূপ: 'He is so weak that he cannot walk'。\nসূত্র: Simple বাক্যে 'Too + Adjective + to + Verb' থাকলে Complex করতে 'So + Adjective + that + Subject + cannot/could not + Verb' বসে।"
      },
      {
        id: "eng_ch13_saq3",
        questionBn: "'In spite of his poverty, he is honest' — বাক্যটিকে Complex ও Compound উভয় রূপেই পরিবর্তন করুন।",
        answerBn: "• Complex রূপ: 'Though he is poor, he is honest' (বা Although he is poor...)।\n• Compound রূপ: 'He is poor but he is honest'।"
      },
      {
        id: "eng_ch13_saq4",
        questionBn: "'Must' যুক্ত বাক্যকে কীভাবে 'Cannot but' এবং 'Cannot help' দ্বারা Negative করা যায়?",
        answerBn: "• 'Cannot but'-এর পর Verb-এর Base form (V1) বসে; যেমন: 'We must obey the law' ➔ 'We cannot but obey the law'।\n• 'Cannot help'-এর পর Verb-এর সাথে 'ing' যুক্ত হয়; যেমন: 'We cannot help obeying the law'।"
      },
      {
        id: "eng_ch13_saq5",
        questionBn: "'As soon as the teacher entered, the students stood up' — বাক্যটিকে Negative বাক্যে রূপান্তর করুন।",
        answerBn: "Negative রূপ: 'No sooner had the teacher entered than the students stood up'。\nসূত্র: 'As soon as' পরিবর্তিত হয়ে 'No sooner had + Sub + V3' এবং কমার স্থানে 'than' বসে।"
      },
      {
        id: "eng_ch13_saq6",
        questionBn: "'What a wonderful sight it is!' — বাক্যটিকে Assertive বাক্যে পরিবর্তন করার নিয়ম কী?",
        answerBn: "Assertive রূপ: 'It is a very wonderful sight'。\nনিয়ম: Exclamatory বাক্যের Subject ও Verb প্রথমে এনে 'What a / How'-এর স্থানে Noun-এর গুরুত্ব অনুসারে 'very' বা 'great' বসিয়ে সাধারণ বিবৃতি গঠন করতে হয়।"
      },
      {
        id: "eng_ch13_saq7",
        questionBn: "'Every mother loves her child' — বাক্যটিকে Negative ও Interrogative বাক্যে রূপান্তর করুন।",
        answerBn: "• Negative: 'There is no mother but loves her child' (অথবা No mother hates her child)।\n• Interrogative: 'Who does not love her child?' (অথবা Does not every mother love her child?)।"
      },
      {
        id: "eng_ch13_saq8",
        questionBn: "'By studying attentively, you can get first rank' — বাক্যটিকে Compound বাক্যে রূপান্তর করুন।",
        answerBn: "Compound রূপ: 'Study attentively and you can get first rank'。\nসূত্র: 'By + Gerund' যুক্ত শর্তমূলক Simple বাক্যকে Compound করতে প্রথম অংশে Imperative Clause এবং সংযোগকারী হিসেবে 'and' বসে।"
      }
    ]
  }
};

export const ENGLISH_CH13_QUESTIONS: Question[] = [
  {
    id: "vol3_ch13_q1",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub1",
    questionBn: "Transform into Negative: 'Only God can help us in this crisis.'",
    options: [
      "None but God can help us in this crisis.",
      "Nobody can help us in this crisis.",
      "God cannot help us in this crisis.",
      "Anyone can help us in this crisis."
    ],
    correctIndex: 0,
    explanationBn: "ব্যক্তি বা স্রষ্টার ক্ষেত্রে 'Only' উঠে গিয়ে 'None but' বসে।",
    difficulty: "easy",
    tags: ["Transformation", "None but"]
  },
  {
    id: "vol3_ch13_q2",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub1",
    questionBn: "Transform into Negative: 'A child likes only sweets.'",
    options: [
      "A child likes nothing but sweets.",
      "A child likes none but sweets.",
      "A child does not like sweets.",
      "A child likes everything but sweets."
    ],
    correctIndex: 0,
    explanationBn: "বস্তুর ক্ষেত্রে 'Only' পরিবর্তিত হয়ে 'Nothing but' হয়।",
    difficulty: "easy",
    tags: ["Transformation", "Nothing but"]
  },
  {
    id: "vol3_ch13_q3",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub1",
    questionBn: "Transform into Negative: 'You must yield to your fate.'",
    options: [
      "You cannot but yield to your fate.",
      "You must not yield to your fate.",
      "You will yield to your fate.",
      "You never yield to your fate."
    ],
    correctIndex: 0,
    explanationBn: "'Must'-এর পরিবর্তে 'Cannot but' বসে (You cannot but yield to your fate)।",
    difficulty: "easy",
    tags: ["Transformation", "Cannot but"]
  },
  {
    id: "vol3_ch13_q4",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub1",
    questionBn: "Transform into Negative: 'Every rose has a thorn.'",
    options: [
      "There is no rose but has a thorn.",
      "No rose has a thorn.",
      "Every rose has no thorn.",
      "All roses are without thorns."
    ],
    correctIndex: 0,
    explanationBn: "'Every' যুক্ত বাক্য Negative করতে 'There is no... but' বসে।",
    difficulty: "easy",
    tags: ["Transformation", "There is no but"]
  },
  {
    id: "vol3_ch13_q5",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub1",
    questionBn: "Transform into Negative: 'As soon as the thief saw the police, he fled.'",
    options: [
      "No sooner had the thief seen the police than he fled.",
      "No sooner did the thief saw the police when he fled.",
      "Hardly had the thief seen the police than he fled.",
      "As the thief saw the police he fled."
    ],
    correctIndex: 0,
    explanationBn: "'As soon as' পরিবর্তিত হয়ে 'No sooner had... than' হয়।",
    difficulty: "easy",
    tags: ["Transformation", "No sooner than"]
  },
  {
    id: "vol3_ch13_q6",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub3",
    questionBn: "Transform into Complex: 'He is too weak to walk.'",
    options: [
      "He is so weak that he cannot walk.",
      "He is very weak and he cannot walk.",
      "He is weak so he cannot walk.",
      "He cannot walk because of weakness."
    ],
    correctIndex: 0,
    explanationBn: "'Too...to' (Simple) Complex রূপান্তরে 'So...that cannot' হয়।",
    difficulty: "easy",
    tags: ["Transformation", "So that cannot"]
  },
  {
    id: "vol3_ch13_q7",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub3",
    questionBn: "Transform into Complex: 'In spite of his poverty, he is honest.'",
    options: [
      "Though he is poor, he is honest.",
      "He is poor but he is honest.",
      "He is poor and honest.",
      "Despite he is poor he is honest."
    ],
    correctIndex: 0,
    explanationBn: "'In spite of' (Simple) Complex-এ 'Though/Although' নেয়।",
    difficulty: "easy",
    tags: ["Transformation", "Though"]
  },
  {
    id: "vol3_ch13_q8",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub3",
    questionBn: "Transform into Compound: 'Though he worked hard, he failed.'",
    options: [
      "He worked hard but he failed.",
      "In spite of working hard he failed.",
      "Because he worked hard he failed.",
      "He worked hard so he failed."
    ],
    correctIndex: 0,
    explanationBn: "'Though' যুক্ত Complex বাক্য Compound রূপান্তরে 'but' গ্রহণ করে।",
    difficulty: "easy",
    tags: ["Transformation", "Compound but"]
  },
  {
    id: "vol3_ch13_q9",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub2",
    questionBn: "Transform into Interrogative: 'Nobody believes a liar.'",
    options: [
      "Who believes a liar?",
      "Does anyone believe a liar?",
      "Why believe a liar?",
      "Who does not believe a liar?"
    ],
    correctIndex: 0,
    explanationBn: "'Nobody' থাকলে সরাসরি 'Who + Affirmative Verb' (Who believes a liar?) বসে।",
    difficulty: "easy",
    tags: ["Transformation", "Who believes"]
  },
  {
    id: "vol3_ch13_q10",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub2",
    questionBn: "Transform into Assertive: 'What a beautiful flower it is!'",
    options: [
      "It is a very beautiful flower.",
      "The flower is very beautiful.",
      "How beautiful the flower is!",
      "It is indeed a flower."
    ],
    correctIndex: 0,
    explanationBn: "Exclamatory থেকে Assertive করতে 'It is a very beautiful flower' হয়।",
    difficulty: "easy",
    tags: ["Transformation", "Assertive"]
  },
  {
    id: "vol3_ch13_q11",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub3",
    questionBn: "Transform into Simple: 'Seeing the police, the thief ran away.'",
    options: [
      "Seeing the police, the thief ran away. (Already Simple)",
      "When the thief saw the police, he ran away.",
      "The thief saw the police and ran away.",
      "Because the thief saw the police he ran away."
    ],
    correctIndex: 0,
    explanationBn: "Participle (Seeing the police) যুক্ত বাক্যে একটিমাত্র Finite Verb (ran away) থাকায় এটি Simple Sentence।",
    difficulty: "easy",
    tags: ["Transformation", "Simple"]
  },
  {
    id: "vol3_ch13_q12",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub3",
    questionBn: "Transform into Compound: 'By working hard, you will succeed in life.'",
    options: [
      "Work hard and you will succeed in life.",
      "If you work hard you will succeed.",
      "Without working hard you will fail.",
      "Work hard or you will fail."
    ],
    correctIndex: 0,
    explanationBn: "'By + Gerund' কে Compound করতে Imperative + 'and' বসে (Work hard and you will succeed)।",
    difficulty: "easy",
    tags: ["Transformation", "Compound and"]
  },
  {
    id: "vol3_ch13_q13",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub1",
    questionBn: "Transform into Negative using 'Cannot help': 'I must laugh at the joke.'",
    options: [
      "I cannot help laughing at the joke.",
      "I cannot but laughing at the joke.",
      "I cannot help laugh at the joke.",
      "I must not laugh at the joke."
    ],
    correctIndex: 0,
    explanationBn: "'Cannot help'-এর পর Verb-এর সাথে 'ing' বসে (cannot help laughing)।",
    difficulty: "medium",
    tags: ["Transformation", "Cannot help"]
  },
  {
    id: "vol3_ch13_q14",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub2",
    questionBn: "Transform into Assertive: 'Alas! We have lost our great leader.'",
    options: [
      "It is a matter of sorrow that we have lost our great leader.",
      "We are very sad to lose our great leader.",
      "Hurrah we have lost our leader.",
      "We have lost our leader sadly."
    ],
    correctIndex: 0,
    explanationBn: "'Alas!' থাকলে 'It is a matter of sorrow that' দিয়ে Assertive বাক্য শুরু হয়।",
    difficulty: "easy",
    tags: ["Transformation", "Alas Assertive"]
  },
  {
    id: "vol3_ch13_q15",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub3",
    questionBn: "Transform into Complex: 'Without your help, I would have failed.'",
    options: [
      "If you had not helped me, I would have failed.",
      "You helped me and I did not fail.",
      "Unless your help I would fail.",
      "With your help I succeeded."
    ],
    correctIndex: 0,
    explanationBn: "'Without'-এর স্থলে শর্তমূলক Complex ক্লজ 'If you had not helped me' বসে।",
    difficulty: "medium",
    tags: ["Transformation", "Condition Complex"]
  },
  {
    id: "vol3_ch13_q16",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub1",
    questionBn: "Transform into Negative: 'Man is mortal.'",
    options: [
      "No man is immortal.",
      "Man is not immortal.",
      "All men are not mortal.",
      "Man cannot be immortal."
    ],
    correctIndex: 1,
    explanationBn: "বিপরীত শব্দ ব্যবহার করে Negative রূপ: 'Man is not immortal' (মানুষ অমর নয়)।",
    difficulty: "easy",
    tags: ["Transformation", "Antonym Negative"]
  },
  {
    id: "vol3_ch13_q17",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub1",
    questionBn: "Transform into Negative: 'He is always punctual.'",
    options: [
      "He is never late.",
      "He is not always late.",
      "He is always not late.",
      "He never comes early."
    ],
    correctIndex: 0,
    explanationBn: "'Always' পরিবর্তিত হয়ে 'never' এবং 'punctual'-এর বিপরীত 'late' বসে (He is never late)।",
    difficulty: "easy",
    tags: ["Transformation", "Never late"]
  },
  {
    id: "vol3_ch13_q18",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub2",
    questionBn: "Transform into Interrogative: 'Everybody wishes to be happy.'",
    options: [
      "Who does not wish to be happy?",
      "Does everybody wish to be happy?",
      "Who wishes to be happy?",
      "Why not be happy?"
    ],
    correctIndex: 0,
    explanationBn: "'Everybody' থাকলে প্রশ্নবোধকে 'Who does not wish to be happy?' হয়।",
    difficulty: "easy",
    tags: ["Transformation", "Who does not"]
  },
  {
    id: "vol3_ch13_q19",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub3",
    questionBn: "Transform into Complex: 'I know his birthplace.'",
    options: [
      "I know where he was born.",
      "I know the place of his birth.",
      "He was born and I know it.",
      "Where he was born is known to me."
    ],
    correctIndex: 0,
    explanationBn: "Noun Clause যুক্ত করে Complex রূপ: 'I know where he was born'।",
    difficulty: "easy",
    tags: ["Transformation", "Noun Clause"]
  },
  {
    id: "vol3_ch13_q20",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub3",
    questionBn: "Transform into Simple: 'He confessed that he was guilty.'",
    options: [
      "He confessed his guilt.",
      "He was guilty and he confessed.",
      "He confessed being guilty.",
      "His guilt was confessed by him."
    ],
    correctIndex: 0,
    explanationBn: "Complex থেকে Simple-এ রূপান্তর: 'He confessed his guilt'।",
    difficulty: "easy",
    tags: ["Transformation", "Confessed guilt"]
  },
  {
    id: "vol3_ch13_q21",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub1",
    questionBn: "Transform into Positive Degree: 'Akbar was greater than most other kings.'",
    options: [
      "Very few kings were as great as Akbar.",
      "No other king was as great as Akbar.",
      "Akbar was as great as other kings.",
      "Other kings were not as great as Akbar."
    ],
    correctIndex: 0,
    explanationBn: "'Most other' থাকলে Positive Degree-র শুরুতে 'Very few' বসে।",
    difficulty: "medium",
    tags: ["Transformation", "Degree"]
  },
  {
    id: "vol3_ch13_q22",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub1",
    questionBn: "Transform into Positive Degree: 'Iron is the most useful metal.'",
    options: [
      "No other metal is as useful as iron.",
      "Very few metals are as useful as iron.",
      "Iron is as useful as any metal.",
      "No metal is useful like iron."
    ],
    correctIndex: 0,
    explanationBn: "সাধারণ Superlative-এর Positive রূপ 'No other metal is as useful as iron'।",
    difficulty: "easy",
    tags: ["Transformation", "Degree"]
  },
  {
    id: "vol3_ch13_q23",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub3",
    questionBn: "Transform into Compound: 'Besides being a teacher, he is a writer.'",
    options: [
      "He is not only a teacher but also a writer.",
      "He is a teacher and also a writer.",
      "Being a teacher he wrote books.",
      "Both A and B are correct."
    ],
    correctIndex: 3,
    explanationBn: "'Not only...but also' এবং 'and also' উভয়ই Compound সংযোগকারী।",
    difficulty: "medium",
    tags: ["Transformation", "Not only but also"]
  },
  {
    id: "vol3_ch13_q24",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub3",
    questionBn: "Transform into Simple: 'As he was ill, he could not attend school.'",
    options: [
      "Because of his illness, he could not attend school.",
      "Owing to being ill he did not go.",
      "He was ill and so could not attend school.",
      "Both A and B are correct simple forms."
    ],
    correctIndex: 3,
    explanationBn: "'Because of his illness' বা 'Owing to his illness' দিয়ে Simple বাক্য তৈরি হয়।",
    difficulty: "medium",
    tags: ["Transformation", "Because of"]
  },
  {
    id: "vol3_ch13_q25",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub2",
    questionBn: "Transform into Assertive: 'Who does not love his country?'",
    options: [
      "Everyone loves his country.",
      "Nobody hates his country.",
      "Someone loves his country.",
      "Country is loved by all."
    ],
    correctIndex: 0,
    explanationBn: "'Who does not love...?' এর Assertive রূপ হলো 'Everyone loves his country' (প্রত্যেকেই তার দেশকে ভালোবাসে)।",
    difficulty: "easy",
    tags: ["Transformation", "Everyone loves"]
  },
  {
    id: "vol3_ch13_q26",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub1",
    questionBn: "Transform into Negative: 'He is only sixteen years old.'",
    options: [
      "He is not more than sixteen years old.",
      "He is not less than sixteen years old.",
      "He is none but sixteen years old.",
      "Both A and B can be used depending on context."
    ],
    correctIndex: 3,
    explanationBn: "বয়স বা সংখ্যার ক্ষেত্রে 'Not more than' বা 'Not less than' বসে।",
    difficulty: "easy",
    tags: ["Transformation", "Not more than"]
  },
  {
    id: "vol3_ch13_q27",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub3",
    questionBn: "Transform into Complex: 'I saw a wounded bird.'",
    options: [
      "I saw a bird which was wounded.",
      "I saw a bird and it was wounded.",
      "A bird was wounded and I saw it.",
      "The wounded bird was seen by me."
    ],
    correctIndex: 0,
    explanationBn: "Adjective Clause ('which was wounded') যুক্ত করে Complex রূপ গঠন করা হয়।",
    difficulty: "easy",
    tags: ["Transformation", "Adjective Clause"]
  },
  {
    id: "vol3_ch13_q28",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub3",
    questionBn: "Transform into Simple: 'He works hard so that he can earn money.'",
    options: [
      "He works hard to earn money.",
      "He works hard for earning money.",
      "He works hard and earns money.",
      "Both A and B are simple forms."
    ],
    correctIndex: 3,
    explanationBn: "Infinitive ('to earn money') দিয়ে উদ্দেশ্যমূলক Simple বাক্য গঠিত হয়।",
    difficulty: "easy",
    tags: ["Transformation", "Infinitive Simple"]
  },
  {
    id: "vol3_ch13_q29",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub2",
    questionBn: "Transform into Interrogative: 'Their glory can never fade.'",
    options: [
      "When can their glory fade?",
      "Can their glory ever fade?",
      "Will their glory fade?",
      "Both A and B are correct interrogative forms."
    ],
    correctIndex: 3,
    explanationBn: "'Can their glory ever fade?' অথবা 'When can their glory fade?' উভয়ই ব্যাকরণসিদ্ধ।",
    difficulty: "medium",
    tags: ["Transformation", "Interrogative ever"]
  },
  {
    id: "vol3_ch13_q30",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub1",
    questionBn: "Transform into Negative: 'As soon as we reached the station, the train whistled.'",
    options: [
      "No sooner had we reached the station than the train whistled.",
      "Scarcely had we reached the station than the train whistled.",
      "Hardly did we reach the station when the train whistled.",
      "No sooner we reached the station the train whistled."
    ],
    correctIndex: 0,
    explanationBn: "'No sooner had + Sub + V3 ... than' সঠিক কাঠামো।",
    difficulty: "easy",
    tags: ["Transformation", "No sooner than"]
  },
  {
    id: "vol3_ch13_q31",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub3",
    questionBn: "Transform into Compound: 'Unless you run fast, you will miss the train.'",
    options: [
      "Run fast or you will miss the train.",
      "Run fast and you will miss the train.",
      "If you run fast you will miss the train.",
      "You run fast but miss the train."
    ],
    correctIndex: 0,
    explanationBn: "'Unless' যুক্ত বাক্যকে Compound করতে Imperative + 'or' বসে (Run fast or you will miss...)।",
    difficulty: "easy",
    tags: ["Transformation", "Compound or"]
  },
  {
    id: "vol3_ch13_q32",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub2",
    questionBn: "Transform into Exclamatory: 'I wish I had the wings of a dove.'",
    options: [
      "Had I the wings of a dove!",
      "If only I had the wings of a dove!",
      "O that I had the wings of a dove!",
      "All of the above are correct."
    ],
    correctIndex: 3,
    explanationBn: "'Had I...', 'If only I had...', 'O that I had...' সবগুলোই 'I wish I had'-এর বিস্ময়সূচক রূপ।",
    difficulty: "hard",
    tags: ["Transformation", "Exclamatory wish"]
  },
  {
    id: "vol3_ch13_q33",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub1",
    questionBn: "Transform into Comparative Degree: 'No other boy in the class is as tall as Rahul.'",
    options: [
      "Rahul is taller than any other boy in the class.",
      "Rahul is the tallest boy in the class.",
      "Rahul is taller than most boys in the class.",
      "Other boys are not as tall as Rahul."
    ],
    correctIndex: 0,
    explanationBn: "'No other' থাকলে Comparative-এ 'taller than any other boy' বসে।",
    difficulty: "easy",
    tags: ["Transformation", "Comparative degree"]
  },
  {
    id: "vol3_ch13_q34",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub3",
    questionBn: "Transform into Complex: 'The weather being cold, we stayed indoors.'",
    options: [
      "As the weather was cold, we stayed indoors.",
      "Since the weather was cold we stayed indoors.",
      "Because the weather was cold we stayed indoors.",
      "All of the above are correct complex forms."
    ],
    correctIndex: 3,
    explanationBn: "Nominative Absolute ('The weather being cold') কে As/Since/Because ক্লজ দিয়ে Complex করা হয়।",
    difficulty: "medium",
    tags: ["Transformation", "Nominative Absolute"]
  },
  {
    id: "vol3_ch13_q35",
    subjectId: "english",
    chapterId: "eng_ch13",
    subTopicId: "eng_ch13_sub1",
    questionBn: "Transform into Affirmative: 'None but the brave deserve the fair.'",
    options: [
      "Only the brave deserve the fair.",
      "The brave alone deserve the fair.",
      "All brave people deserve the fair.",
      "Both A and B are correct affirmative forms."
    ],
    correctIndex: 3,
    explanationBn: "'None but'-এর Affirmative রূপ হলো 'Only the brave' অথবা 'The brave alone'।",
    difficulty: "easy",
    tags: ["Transformation", "None but to Only"]
  }
];
