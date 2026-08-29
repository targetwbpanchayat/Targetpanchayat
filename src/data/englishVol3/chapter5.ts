import { StudyChapter, Question } from "../../types";

export const ENGLISH_CH5_STUDY: StudyChapter = {
  "id": "eng_ch5",
  "subjectId": "english",
  "chapterNumber": 5,
  "titleBn": "Narration Change (উক্তি পরিবর্তন - Direct to Indirect Speech)",
  "titleEn": "Narration Change - Assertive, Interrogative, Imperative, Optative & Exclamatory",
  "estimatedMinutes": 40,
  "importantNotesCount": 45,
  "summary": "Reporting Verb পরিবর্তন (said to -> told / asked / ordered / requested / advised / prayed / exclaimed with joy), Tense রূপান্তরের কালক্রমিক নিয়ম (Present -> Past, Past Simple -> Past Perfect, will -> would), সময় ও স্থান নির্দেশক শব্দের রূপান্তর (now -> then, today -> that day, tomorrow -> the next day), চিরন্তন সত্যের ক্ষেত্রে Tense অপরিবর্তিত থাকার নিয়ম, এবং ৫ ধরণের বাক্যের উক্তি রূপান্তর।",
  "subTopics": [
    {
      "id": "eng_ch5_sub1",
      "chapterId": "eng_ch5",
      "subjectId": "english",
      "titleBn": "Assertive & Universal Truth Narration",
      "titleEn": "Assertive Sentences & Universal Truth Exceptions",
      "orderIndex": 1,
      "summaryBn": "Reporting Verb 'said to' -> 'told', Conjunction 'that'। চিরন্তন সত্য বা অভ্যাস বোঝালে Reported Speech-এর Tense কোনো পরিবর্তন হয় না।",
      "keyConcepts": [
        "He said, 'I am ill' -> He said that he was ill",
        "Teacher said, 'The earth is round' -> ...that the earth is round"
      ]
    },
    {
      "id": "eng_ch5_sub2",
      "chapterId": "eng_ch5",
      "subjectId": "english",
      "titleBn": "Interrogative & Imperative Narration",
      "titleEn": "Questions (Yes/No & WH) & Commands/Requests",
      "orderIndex": 2,
      "summaryBn": "Yes/No প্রশ্নে 'if / whether' এবং WH-প্রশ্নে সংশ্লিষ্ট WH-word বসে। প্রশ্নবোধক বাক্যটি Assertive (Subject + Verb) রূপ ধারণ করে। Imperative এ 'to + V1' বা 'not to + V1' বসে।",
      "keyConcepts": [
        "He said, 'Are you coming?' -> He asked if I was coming",
        "He said, 'Do it' -> He ordered me to do it",
        "He said, 'Please help' -> He requested to help"
      ]
    },
    {
      "id": "eng_ch5_sub3",
      "chapterId": "eng_ch5",
      "subjectId": "english",
      "titleBn": "Optative & Exclamatory Narration",
      "titleEn": "Wishes/Prayers (May you live long) & Exclamations",
      "orderIndex": 3,
      "summaryBn": "প্রার্থনা বা শুভেচ্ছায় 'wished / prayed that + Subject + might + V1'। বিস্ময়সূচকে 'exclaimed with joy / sorrow / wonder that' বসে।",
      "keyConcepts": [
        "He said, 'May God bless you' -> He prayed that God might bless me",
        "He said, 'Hurrah! We won' -> He exclaimed with joy that they had won"
      ]
    }
  ],
  "content": {
    "introduction": "উক্তি পরিবর্তন (Narration Change বা Direct to Indirect Speech) পশ্চিমবঙ্গ পঞ্চায়েত পরীক্ষার ইংরেজি অংশের অত্যন্ত স্কোরিং অধ্যায়। Direct বক্তার বক্তব্যকে ব্যাকরণের নির্দিষ্ট নিয়ম মেনে Indirect রূপে প্রকাশ করতে হয়।",
    "sections": [
      {
        "heading": "১. Tense, Pronoun ও সময়-স্থান নির্দেশক শব্দের রূপান্তরের সাধারণ নিয়মাবলী",
        "body": [
          "• Reporting Verb যদি Past Tense-এ থাকে (said), তবে Reported Speech-এর Tense নিম্নরূপ পরিবর্তিত হয়:",
          "  - Simple Present (V1) -> Simple Past (V2)",
          "  - Present Continuous (am/is/are + V-ing) -> Past Continuous (was/were + V-ing)",
          "  - Present Perfect (has/have + V3) -> Past Perfect (had + V3)",
          "  - Simple Past (V2) -> Past Perfect (had + V3)",
          "  - Past Continuous (was/were + V-ing) -> Past Perfect Continuous (had been + V-ing)",
          "  - Will / Shall -> Would / Should; Can -> Could; May -> Might",
          "• ব্যতিক্রম: Reported Speech যদি চিরন্তন সত্য (Universal Truth), বৈজ্ঞানিক সত্য বা ঐতিহাসিক সত্য বোঝায়, তবে Reporting Verb Past হলেও Reported Speech-এর Tense পরিবর্তিত হয় না (The teacher said, 'The sun rises in the east' -> The teacher said that the sun rises in the east)।",
          "• সময় ও স্থানসূচক শব্দের পরিবর্তন: Now -> Then, Today -> That day, Tomorrow -> The next day / The following day, Yesterday -> The previous day, Here -> There, This -> That, These -> Those, Ago -> Before, Tonight -> That night।"
        ],
        "tables": {
          "headers": [
            "বাক্যের প্রকার",
            "Reporting Verb",
            "Linking Word / Conjunction",
            "উদাহরণ"
          ],
          "rows": [
            [
              "Assertive",
              "said / told",
              "that",
              "He said that he was writing a letter."
            ],
            [
              "Interrogative (Yes/No)",
              "asked / enquired",
              "if / whether",
              "He asked if I knew English."
            ],
            [
              "Interrogative (WH-word)",
              "asked / demanded",
              "wh-word (who, where, why)",
              "He asked where I lived."
            ],
            [
              "Imperative (আদেশ/অনুরোধ)",
              "ordered / requested / advised",
              "to + V1 (বা not to + V1)",
              "The doctor advised me to take rest."
            ],
            [
              "Optative (ইচ্ছা/প্রার্থনা)",
              "wished / prayed",
              "that (Subject + might + V1)",
              "Father prayed that I might succeed."
            ],
            [
              "Exclamatory (বিস্ময়)",
              "exclaimed with joy / sorrow / wonder",
              "that (Assertive structure)",
              "He exclaimed with joy that they had won the cup."
            ]
          ]
        }
      }
    ],
    "examTips": [
      "Interrogative বাক্যের Indirect রূপে কখনোই 'that' বসে না এবং বাক্যটি সাধারণ বর্ণনামূলক (Subject + Verb) রূপ ধারণ করে, কোনো '?' চিহ্ন থাকে না।",
      "Imperative বাক্যে 'said to' এর স্থলে অর্থের ভিত্তিতে ordered, requested, advised, forbade বসে এবং এরপর 'to + V1' বসে।",
      "'Forbade' ব্যবহার করলে বাক্যে আর 'not' বসে না (He forbade me to go there)।",
      "Universal Truth থাকলে Tense কখনো বদলাবেন না।",
      "Said to এর পর Object থাকলে 'told + Object' বসে (told to রাম ভুল, told Ram সঠিক)।"
    ],
    "quickRevisionPoints": [
      "He said, 'I am ill' -> He said that he was ill.",
      "Teacher said, 'Honesty is the best policy' -> ...that honesty is the best policy.",
      "He said to me, 'Where do you live?' -> He asked me where I lived.",
      "Mother said to me, 'Do not run in the sun' -> Mother advised me not to run in the sun.",
      "He said, 'May you live long' -> He wished that I might live long.",
      "He said, 'Alas! I am ruined' -> He exclaimed with sorrow that he was ruined."
    ],
    "oneLiners": [
      "Direct Speech এর বক্তব্য ইনভার্টেড কমার মধ্যে থাকে এবং Indirect Speech এ তা মুক্ত থাকে।",
      "Reporting Verb Past হলে Reported Speech এর Tense অনুরূপ Past এ পরিবর্তিত হয়।",
      "চিরন্তন সত্য ও অভ্যাসগত কাজে Tense এর কোনো পরিবর্তন হয় না।",
      "Yes/No প্রশ্নে Conjunction হিসেবে 'if' বা 'whether' বসে।",
      "WH-প্রশ্নে সংশ্লিষ্ট WH-শব্দটিই Linking Word হিসেবে কাজ করে।",
      "উক্তি পরিবর্তনের পর প্রশ্নবোধক বাক্যটি বর্ণনামূলক (Assertive) বাক্যে পরিণত হয়।",
      "আদেশ, উপদেশ ও অনুরোধে Linking Word হিসেবে 'to + V1' বসে।",
      "Forbade ক্রিয়াপদের পর 'not' বসে না, কারণ এটি নিজেই নেতিবাচক।",
      "ইচ্ছা বা প্রার্থনাসূচক বাক্যে Auxiliary Verb হিসেবে 'might' বসে।",
      "বিস্ময়সূচক বাক্যে 'exclaimed with joy/sorrow/wonder' ব্যবহৃত হয়।"
    ],
    "saqs": [
      {
        "id": "eng_ch5_saq1",
        "questionBn": "'The teacher said, \"The earth moves round the sun\"' — এর Indirect Speech কী হবে এবং কেন Tense বদলাবে না?",
        "answerBn": "'The teacher said that the earth moves round the sun.' কারণ 'The earth moves round the sun' একটি চিরন্তন বৈজ্ঞানিক সত্য (Universal Truth), তাই Reporting Verb Past Tense হওয়া সত্ত্বেও Reported Speech-এর Tense অপরিবর্তিত থাকে।"
      },
      {
        "id": "eng_ch5_saq2",
        "questionBn": "He said to me, 'Where are you going?' — এর Indirect রূপান্তরের নিয়ম ব্যাখ্যা করুন।",
        "answerBn": "'He asked me where I was going.' নিয়ম: প্রশ্নবোধক বাক্যে 'said to' পরিবর্তিত হয়ে 'asked' হয়, WH-word (where) অপরিবর্তিত থেকে Linking Word হিসেবে বসে এবং প্রশ্নবোধক বিন্যাসটি Assertive বিন্যাসে (Subject 'I' + Verb 'was going') রূপান্তরিত হয়।"
      }
    ]
  }
};

export const ENGLISH_CH5_QUESTIONS: Question[] = [
  {
    "id": "vol3_ch5_q1",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "He said, 'I am writing a letter.'",
    "options": [
      "He said that he was writing a letter.",
      "He said that he is writing a letter.",
      "He said that he wrote a letter.",
      "He told that he was writing a letter."
    ],
    "correctIndex": 0,
    "explanationBn": "Present Continuous (am writing) পরিবর্তিত হয়ে Past Continuous (was writing) হয়।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q2",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "The teacher said, 'The sun rises in the east.'",
    "options": [
      "The teacher said that the sun rose in the east.",
      "The teacher said that the sun rises in the east.",
      "The teacher told that the sun rises in the east.",
      "The teacher said that the sun had risen in the east."
    ],
    "correctIndex": 1,
    "explanationBn": "চিরন্তন সত্য (Universal Truth) হওয়ায় Tense অপরিবর্তিত থাকে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q3",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "He said to me, 'I have completed my homework.'",
    "options": [
      "He told me that he completed his homework.",
      "He told me that he had completed his homework.",
      "He said me that he had completed his homework.",
      "He told me that I had completed his homework."
    ],
    "correctIndex": 1,
    "explanationBn": "'Said to me' -> 'told me' এবং Present Perfect -> Past Perfect (had completed) হয়।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q4",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "She said, 'I went to Kolkata yesterday.'",
    "options": [
      "She said that she went to Kolkata yesterday.",
      "She said that she had gone to Kolkata the previous day.",
      "She said that she has gone to Kolkata yesterday.",
      "She told that she went to Kolkata the previous day."
    ],
    "correctIndex": 1,
    "explanationBn": "Simple Past (went) -> Past Perfect (had gone) এবং yesterday -> the previous day হয়।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q5",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "He said to me, 'Are you coming to the meeting?'",
    "options": [
      "He asked me that I was coming to the meeting.",
      "He asked me if I was coming to the meeting.",
      "He asked me if was I coming to the meeting.",
      "He told me if I was coming to the meeting."
    ],
    "correctIndex": 1,
    "explanationBn": "Yes/No প্রশ্নে 'if + I was coming' বর্ণনামূলক কাঠামো সঠিক।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q6",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "The teacher said to the student, 'Where do you live?'",
    "options": [
      "The teacher asked the student where he lived.",
      "The teacher asked the student where did he live.",
      "The teacher told the student where he lived.",
      "The teacher asked that where he lived."
    ],
    "correctIndex": 0,
    "explanationBn": "WH-প্রশ্নে 'where he lived' (Assertive order) হয়, কোনো 'that' বা 'did' বসে না।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q7",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "The doctor said to the patient, 'Take this medicine regularly.'",
    "options": [
      "The doctor advised the patient to take that medicine regularly.",
      "The doctor ordered the patient take this medicine regularly.",
      "The doctor said to the patient to take this medicine regularly.",
      "The doctor requested the patient to take that medicine."
    ],
    "correctIndex": 0,
    "explanationBn": "উপদেশে 'advised + to take' এবং this -> that হয়।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q8",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "He said to me, 'Please give me a glass of water.'",
    "options": [
      "He ordered me to give him a glass of water.",
      "He requested me to give him a glass of water.",
      "He advised me to give him a glass of water.",
      "He asked me that give him a glass of water."
    ],
    "correctIndex": 1,
    "explanationBn": "অনুরোধে 'requested me to give him' হয়।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q9",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "Father said to his son, 'Do not waste your valuable time.'",
    "options": [
      "Father advised his son not to waste his valuable time.",
      "Father forbade his son not to waste his valuable time.",
      "Father told his son to not waste his valuable time.",
      "Father ordered his son that not waste his time."
    ],
    "correctIndex": 0,
    "explanationBn": "উপদেশে 'advised his son not to waste' সঠিক।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q10",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "The officer said to the soldiers, 'March forward.'",
    "options": [
      "The officer requested the soldiers to march forward.",
      "The officer ordered the soldiers to march forward.",
      "The officer advised the soldiers marching forward.",
      "The officer told the soldiers that march forward."
    ],
    "correctIndex": 1,
    "explanationBn": "সেনাদের নির্দেশনায় 'ordered the soldiers to march forward' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q11",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "He said, 'May God bless you!'",
    "options": [
      "He prayed that God might bless me.",
      "He wished that God may bless me.",
      "He prayed that God would bless me.",
      "He exclaimed that God might bless me."
    ],
    "correctIndex": 0,
    "explanationBn": "প্রার্থনায় 'prayed that God might bless me' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q12",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "The boys said, 'Hurrah! We have won the match.'",
    "options": [
      "The boys exclaimed with joy that they had won the match.",
      "The boys exclaimed with sorrow that they had won the match.",
      "The boys said with joy that we have won the match.",
      "The boys exclaimed that they won the match."
    ],
    "correctIndex": 0,
    "explanationBn": "আনন্দের বিস্ময়ে 'exclaimed with joy that they had won the match' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q13",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "He said, 'Alas! I am ruined.'",
    "options": [
      "He exclaimed with sorrow that he was ruined.",
      "He exclaimed with joy that he was ruined.",
      "He said that alas he was ruined.",
      "He cried that I am ruined."
    ],
    "correctIndex": 0,
    "explanationBn": "দুঃখে 'exclaimed with sorrow that he was ruined' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q14",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "She said, 'What a beautiful flower it is!'",
    "options": [
      "She exclaimed with wonder that it was a very beautiful flower.",
      "She said that what a beautiful flower it was.",
      "She exclaimed that it is a beautiful flower.",
      "She asked if it was a beautiful flower."
    ],
    "correctIndex": 0,
    "explanationBn": "বিস্ময়সূচকে 'exclaimed with wonder that it was a very beautiful flower' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q15",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "He said, 'I will visit Delhi tomorrow.'",
    "options": [
      "He said that he would visit Delhi the next day.",
      "He said that he will visit Delhi tomorrow.",
      "He said that he would visit Delhi tomorrow.",
      "He told that he will visit Delhi the following day."
    ],
    "correctIndex": 0,
    "explanationBn": "will -> would এবং tomorrow -> the next day হয়।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q16",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "The teacher said, 'Honesty is the best policy.'",
    "options": [
      "The teacher said that honesty was the best policy.",
      "The teacher said that honesty is the best policy.",
      "The teacher told that honesty had been the best policy.",
      "The teacher advised that honesty is the best policy."
    ],
    "correctIndex": 1,
    "explanationBn": "নীতিবাক্য বা শাশ্বত সত্যে Tense অপরিবর্তিত থাকে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q17",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "He said to her, 'What is your name?'",
    "options": [
      "He asked her what her name was.",
      "He asked her what was her name.",
      "He asked her that what her name was.",
      "He told her what her name was."
    ],
    "correctIndex": 0,
    "explanationBn": "সঠিক ক্রম হলো 'what her name was' (Subject + Verb)।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q18",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "He said, 'I cannot help you now.'",
    "options": [
      "He said that he could not help me then.",
      "He said that he cannot help me now.",
      "He said that he could not help you now.",
      "He told that he could not help me then."
    ],
    "correctIndex": 0,
    "explanationBn": "cannot -> could not এবং now -> then হয়।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q19",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "Mother said to me, 'Have you taken your breakfast?'",
    "options": [
      "Mother asked me if I had taken my breakfast.",
      "Mother asked me that if I had taken my breakfast.",
      "Mother asked me whether had I taken my breakfast.",
      "Mother told me if I have taken my breakfast."
    ],
    "correctIndex": 0,
    "explanationBn": "Present Perfect Interrogative -> Past Perfect (if I had taken) হয়।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q20",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "He said, 'Let us go for a walk.'",
    "options": [
      "He proposed that they should go for a walk.",
      "He said that they would go for a walk.",
      "He requested to go for a walk.",
      "He ordered that we should go for a walk."
    ],
    "correctIndex": 0,
    "explanationBn": "'Let us' প্রস্তাব নির্দেশ করায় 'proposed that they should go for a walk' হয়।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q21",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "The teacher said, 'Man is mortal.'",
    "options": [
      "The teacher said that man was mortal.",
      "The teacher said that man is mortal.",
      "The teacher told that man is mortal.",
      "The teacher explained that man had been mortal."
    ],
    "correctIndex": 1,
    "explanationBn": "চিরন্তন সত্যে 'man is mortal' অপরিবর্তিত থাকে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q22",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "He said, 'I saw him two days ago.'",
    "options": [
      "He said that he had seen him two days before.",
      "He said that he saw him two days ago.",
      "He said that he has seen him two days before.",
      "He told that he had seen him two days ago."
    ],
    "correctIndex": 0,
    "explanationBn": "saw -> had seen এবং ago -> before হয়।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q23",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "She said to Ram, 'Why were you absent yesterday?'",
    "options": [
      "She asked Ram why he had been absent the previous day.",
      "She asked Ram why was he absent yesterday.",
      "She asked Ram why he was absent the previous day.",
      "She told Ram why he had been absent yesterday."
    ],
    "correctIndex": 0,
    "explanationBn": "were (Past Simple) -> had been এবং yesterday -> the previous day হয়।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q24",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "Father said to me, 'Work hard to succeed in life.'",
    "options": [
      "Father advised me to work hard to succeed in life.",
      "Father ordered me work hard to succeed in life.",
      "Father said to me that work hard to succeed in life.",
      "Father told me that to work hard."
    ],
    "correctIndex": 0,
    "explanationBn": "উপদেশে 'advised me to work hard' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q25",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "He said, 'Goodbye, my friends!'",
    "options": [
      "He bade his friends goodbye.",
      "He said goodbye to his friends.",
      "He wished his friends goodbye.",
      "He prayed goodbye to his friends."
    ],
    "correctIndex": 0,
    "explanationBn": "বিদায় জানানোর ক্ষেত্রে 'bade his friends goodbye' ব্যবহৃত হয়।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q26",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "She said, 'Good morning, sir!'",
    "options": [
      "She wished her sir good morning.",
      "She bade her sir good morning.",
      "She prayed good morning to sir.",
      "She said good morning to sir."
    ],
    "correctIndex": 0,
    "explanationBn": "প্রাতঃকালীন সম্ভাষণে 'wished her sir good morning' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q27",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "He said, 'I must go now.'",
    "options": [
      "He said that he had to go then.",
      "He said that he must go now.",
      "He said that he would go then.",
      "He told that he must have gone then."
    ],
    "correctIndex": 0,
    "explanationBn": "নির্দিষ্ট তাৎক্ষণিক বাধ্যবাধকতায় 'must' পরিবর্তিত হয়ে 'had to' এবং now -> then হয়।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q28",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "The master said to the servant, 'Bring me a cup of tea.'",
    "options": [
      "The master ordered the servant to bring him a cup of tea.",
      "The master requested the servant to bring him a cup of tea.",
      "The master advised the servant to bring him a cup of tea.",
      "The master told the servant bring him a cup of tea."
    ],
    "correctIndex": 0,
    "explanationBn": "ভৃত্যকে আদেশে 'ordered the servant to bring him' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q29",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "He said to me, 'Do you know French?'",
    "options": [
      "He asked me if I knew French.",
      "He asked me if did I know French.",
      "He asked me that if I knew French.",
      "He told me whether I know French."
    ],
    "correctIndex": 0,
    "explanationBn": "Do you know -> if I knew French (Simple Past) হয়।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q30",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "The girl said, 'How lovely the sunset is!'",
    "options": [
      "The girl exclaimed with delight that the sunset was very lovely.",
      "The girl said that how lovely the sunset was.",
      "The girl exclaimed that the sunset is lovely.",
      "The girl asked how lovely the sunset was."
    ],
    "correctIndex": 0,
    "explanationBn": "বিস্ময়ে 'exclaimed with delight that the sunset was very lovely' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q31",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "He said, 'May you pass the examination!'",
    "options": [
      "He wished that I might pass the examination.",
      "He prayed that I may pass the examination.",
      "He said that I might pass the examination.",
      "He exclaimed that I would pass the examination."
    ],
    "correctIndex": 0,
    "explanationBn": "শুভেচ্ছায় 'wished that I might pass' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q32",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "The policeman said to the driver, 'Show your driving license.'",
    "options": [
      "The policeman ordered the driver to show his driving license.",
      "The policeman requested the driver to show his driving license.",
      "The policeman asked the driver that show his driving license.",
      "The policeman advised the driver to show your license."
    ],
    "correctIndex": 0,
    "explanationBn": "আইন প্রয়োগকারী নির্দেশে 'ordered the driver to show his driving license' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q33",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub1",
    "questionBn": "He said, 'I have been living here for ten years.'",
    "options": [
      "He said that he had been living there for ten years.",
      "He said that he has been living there for ten years.",
      "He said that he was living there for ten years.",
      "He told that he had lived there for ten years."
    ],
    "correctIndex": 0,
    "explanationBn": "have been -> had been এবং here -> there হয়।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q34",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "The saint said, 'God is everywhere.'",
    "options": [
      "The saint said that God was everywhere.",
      "The saint said that God is everywhere.",
      "The saint told that God is everywhere.",
      "The saint explained that God had been everywhere."
    ],
    "correctIndex": 1,
    "explanationBn": "শাশ্বত আধ্যাত্মিক সত্যে Tense অপরিবর্তিত থাকে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q35",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "He said to me, 'Will you lend me your book?'",
    "options": [
      "He asked me if I would lend him my book.",
      "He asked me that if I would lend him my book.",
      "He asked me will I lend him my book.",
      "He told me if I will lend him my book."
    ],
    "correctIndex": 0,
    "explanationBn": "will -> would এবং সর্বনামের সঠিক পরিবর্তনে 'if I would lend him my book' হয়।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q36",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "She said, 'I bought this dress in Paris.'",
    "options": [
      "She said that she had bought that dress in Paris.",
      "She said that she bought that dress in Paris.",
      "She said that she has bought this dress in Paris.",
      "She told that she had bought this dress in Paris."
    ],
    "correctIndex": 0,
    "explanationBn": "bought -> had bought এবং this -> that হয়।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q37",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "He said, 'Let me have some water.'",
    "options": [
      "He wished that he might have some water.",
      "He proposed that he should have water.",
      "He ordered to have water.",
      "He said that let him have water."
    ],
    "correctIndex": 0,
    "explanationBn": "অনুরোধমূলক 'Let me' এর ক্ষেত্রে 'wished/requested that he might have' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q38",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "The captain said, 'Bravo! You played well.'",
    "options": [
      "The captain applauded them saying that they had played well.",
      "The captain exclaimed with joy that you played well.",
      "The captain said bravo that they played well.",
      "The captain praised them that they play well."
    ],
    "correctIndex": 0,
    "explanationBn": "'Bravo' এর ক্ষেত্রে 'applauded them saying that they had played well' আদর্শ প্রকাশ।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q39",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "He said to his friend, 'Please wait here till I return.'",
    "options": [
      "He requested his friend to wait there till he returned.",
      "He asked his friend to wait here till he returns.",
      "He ordered his friend to wait there till he returned.",
      "He told his friend to please wait there."
    ],
    "correctIndex": 0,
    "explanationBn": "requested + wait there till he returned সঠিক।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q40",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "The judge said to the accused, 'Tell the truth.'",
    "options": [
      "The judge ordered the accused to tell the truth.",
      "The judge requested the accused to tell the truth.",
      "The judge asked the accused that tell the truth.",
      "The judge advised the accused telling the truth."
    ],
    "correctIndex": 0,
    "explanationBn": "আদালতের নির্দেশে 'ordered the accused to tell the truth' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q41",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "He said, 'I am very busy today.'",
    "options": [
      "He said that he was very busy that day.",
      "He said that he is very busy today.",
      "He said that he had been busy that day.",
      "He told that he was very busy today."
    ],
    "correctIndex": 0,
    "explanationBn": "am -> was এবং today -> that day হয়।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q42",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "She said to me, 'Who broke this windowpane?'",
    "options": [
      "She asked me who had broken that windowpane.",
      "She asked me that who had broken this windowpane.",
      "She asked me who broke that windowpane.",
      "She asked me who was broken that windowpane."
    ],
    "correctIndex": 0,
    "explanationBn": "broke (V2) -> had broken এবং this -> that হয়।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q43",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "He said, 'Water freezes at zero degree Celsius.'",
    "options": [
      "The speaker said that water freezes at zero degree Celsius.",
      "He said that water froze at zero degree Celsius.",
      "He said that water has frozen at zero degree Celsius.",
      "He told that water had frozen."
    ],
    "correctIndex": 0,
    "explanationBn": "বৈজ্ঞানিক সত্য অপরিবর্তিত থাকে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q44",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "Father said to him, 'Do not tell a lie.'",
    "options": [
      "Father advised him not to tell a lie.",
      "Father forbade him not to tell a lie.",
      "Father ordered him to not tell a lie.",
      "Father told him that not tell a lie."
    ],
    "correctIndex": 0,
    "explanationBn": "'Advised him not to tell a lie' সঠিক।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q45",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "He said, 'Thank you!'",
    "options": [
      "He thanked me.",
      "He said thank you to me.",
      "He wished me thank you.",
      "He told me thank you."
    ],
    "correctIndex": 0,
    "explanationBn": "'Thank you' এর Indirect রূপ 'He thanked me' হয়।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q46",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "She said, 'Welcome, friends!'",
    "options": [
      "She welcomed her friends.",
      "She wished welcome to her friends.",
      "She said welcome to her friends.",
      "She greeted friends welcome."
    ],
    "correctIndex": 0,
    "explanationBn": "'She welcomed her friends' সঠিক রূপ।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q47",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "He said, 'Yes, I committed the mistake.'",
    "options": [
      "He admitted that he had committed the mistake.",
      "He said yes that he committed the mistake.",
      "He replied in affirmative that he committed the mistake.",
      "Both A and C are acceptable."
    ],
    "correctIndex": 3,
    "explanationBn": "'Admitted' বা 'replied in the affirmative' উভয় রূপই গ্রাহ্য।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q48",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "He said, 'No, I did not steal the watch.'",
    "options": [
      "He denied that he had stolen the watch.",
      "He replied in the negative that he had stolen the watch.",
      "Both A and B are correct.",
      "He said no that he did not steal."
    ],
    "correctIndex": 2,
    "explanationBn": "'Denied that he had stolen' বা 'replied in the negative' উভয়ই সঠিক।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q49",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "The teacher said, 'Light travels in a straight line.'",
    "options": [
      "The teacher said that light travels in a straight line.",
      "The teacher said that light traveled in a straight line.",
      "The teacher told that light had traveled in a straight line.",
      "The teacher explained that light was traveling in a straight line."
    ],
    "correctIndex": 0,
    "explanationBn": "চিরন্তন সত্য হওয়ায় Tense অপরিবর্তিত থাকে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q50",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "He said, 'I shall go as soon as it is possible.'",
    "options": [
      "He said that he would go as soon as it was possible.",
      "He said that he should go as soon as it is possible.",
      "He said that he will go as soon as it was possible.",
      "He told that he would go as soon as it will be possible."
    ],
    "correctIndex": 0,
    "explanationBn": "shall -> would এবং is -> was হয়।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q51",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "[Practice Variant 1] He said, 'I am writing a letter.'",
    "options": [
      "He said that he was writing a letter.",
      "He said that he is writing a letter.",
      "He said that he wrote a letter.",
      "He told that he was writing a letter."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: Present Continuous (am writing) পরিবর্তিত হয়ে Past Continuous (was writing) হয়।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q52",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "[Practice Variant 2] The teacher said, 'The sun rises in the east.'",
    "options": [
      "The teacher said that the sun rose in the east.",
      "The teacher said that the sun rises in the east.",
      "The teacher told that the sun rises in the east.",
      "The teacher said that the sun had risen in the east."
    ],
    "correctIndex": 1,
    "explanationBn": "বিশদ ব্যাখ্যা: চিরন্তন সত্য (Universal Truth) হওয়ায় Tense অপরিবর্তিত থাকে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q53",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "[Practice Variant 3] He said to me, 'I have completed my homework.'",
    "options": [
      "He told me that he completed his homework.",
      "He told me that he had completed his homework.",
      "He said me that he had completed his homework.",
      "He told me that I had completed his homework."
    ],
    "correctIndex": 1,
    "explanationBn": "বিশদ ব্যাখ্যা: 'Said to me' -> 'told me' এবং Present Perfect -> Past Perfect (had completed) হয়।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q54",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "[Practice Variant 4] She said, 'I went to Kolkata yesterday.'",
    "options": [
      "She said that she went to Kolkata yesterday.",
      "She said that she had gone to Kolkata the previous day.",
      "She said that she has gone to Kolkata yesterday.",
      "She told that she went to Kolkata the previous day."
    ],
    "correctIndex": 1,
    "explanationBn": "বিশদ ব্যাখ্যা: Simple Past (went) -> Past Perfect (had gone) এবং yesterday -> the previous day হয়।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q55",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "[Practice Variant 5] He said to me, 'Are you coming to the meeting?'",
    "options": [
      "He asked me that I was coming to the meeting.",
      "He asked me if I was coming to the meeting.",
      "He asked me if was I coming to the meeting.",
      "He told me if I was coming to the meeting."
    ],
    "correctIndex": 1,
    "explanationBn": "বিশদ ব্যাখ্যা: Yes/No প্রশ্নে 'if + I was coming' বর্ণনামূলক কাঠামো সঠিক।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q56",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "[Practice Variant 6] The teacher said to the student, 'Where do you live?'",
    "options": [
      "The teacher asked the student where he lived.",
      "The teacher asked the student where did he live.",
      "The teacher told the student where he lived.",
      "The teacher asked that where he lived."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: WH-প্রশ্নে 'where he lived' (Assertive order) হয়, কোনো 'that' বা 'did' বসে না।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q57",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "[Practice Variant 7] The doctor said to the patient, 'Take this medicine regularly.'",
    "options": [
      "The doctor advised the patient to take that medicine regularly.",
      "The doctor ordered the patient take this medicine regularly.",
      "The doctor said to the patient to take this medicine regularly.",
      "The doctor requested the patient to take that medicine."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: উপদেশে 'advised + to take' এবং this -> that হয়।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q58",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "[Practice Variant 8] He said to me, 'Please give me a glass of water.'",
    "options": [
      "He ordered me to give him a glass of water.",
      "He requested me to give him a glass of water.",
      "He advised me to give him a glass of water.",
      "He asked me that give him a glass of water."
    ],
    "correctIndex": 1,
    "explanationBn": "বিশদ ব্যাখ্যা: অনুরোধে 'requested me to give him' হয়।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q59",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "[Practice Variant 9] Father said to his son, 'Do not waste your valuable time.'",
    "options": [
      "Father advised his son not to waste his valuable time.",
      "Father forbade his son not to waste his valuable time.",
      "Father told his son to not waste his valuable time.",
      "Father ordered his son that not waste his time."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: উপদেশে 'advised his son not to waste' সঠিক।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q60",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "[Practice Variant 10] The officer said to the soldiers, 'March forward.'",
    "options": [
      "The officer requested the soldiers to march forward.",
      "The officer ordered the soldiers to march forward.",
      "The officer advised the soldiers marching forward.",
      "The officer told the soldiers that march forward."
    ],
    "correctIndex": 1,
    "explanationBn": "বিশদ ব্যাখ্যা: সেনাদের নির্দেশনায় 'ordered the soldiers to march forward' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q61",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "[Practice Variant 11] He said, 'May God bless you!'",
    "options": [
      "He prayed that God might bless me.",
      "He wished that God may bless me.",
      "He prayed that God would bless me.",
      "He exclaimed that God might bless me."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: প্রার্থনায় 'prayed that God might bless me' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q62",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "[Practice Variant 12] The boys said, 'Hurrah! We have won the match.'",
    "options": [
      "The boys exclaimed with joy that they had won the match.",
      "The boys exclaimed with sorrow that they had won the match.",
      "The boys said with joy that we have won the match.",
      "The boys exclaimed that they won the match."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: আনন্দের বিস্ময়ে 'exclaimed with joy that they had won the match' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q63",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "[Practice Variant 13] He said, 'Alas! I am ruined.'",
    "options": [
      "He exclaimed with sorrow that he was ruined.",
      "He exclaimed with joy that he was ruined.",
      "He said that alas he was ruined.",
      "He cried that I am ruined."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: দুঃখে 'exclaimed with sorrow that he was ruined' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q64",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "[Practice Variant 14] She said, 'What a beautiful flower it is!'",
    "options": [
      "She exclaimed with wonder that it was a very beautiful flower.",
      "She said that what a beautiful flower it was.",
      "She exclaimed that it is a beautiful flower.",
      "She asked if it was a beautiful flower."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: বিস্ময়সূচকে 'exclaimed with wonder that it was a very beautiful flower' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q65",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "[Practice Variant 15] He said, 'I will visit Delhi tomorrow.'",
    "options": [
      "He said that he would visit Delhi the next day.",
      "He said that he will visit Delhi tomorrow.",
      "He said that he would visit Delhi tomorrow.",
      "He told that he will visit Delhi the following day."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: will -> would এবং tomorrow -> the next day হয়।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q66",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub2",
    "questionBn": "[Practice Variant 16] The teacher said, 'Honesty is the best policy.'",
    "options": [
      "The teacher said that honesty was the best policy.",
      "The teacher said that honesty is the best policy.",
      "The teacher told that honesty had been the best policy.",
      "The teacher advised that honesty is the best policy."
    ],
    "correctIndex": 1,
    "explanationBn": "বিশদ ব্যাখ্যা: নীতিবাক্য বা শাশ্বত সত্যে Tense অপরিবর্তিত থাকে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q67",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 17] He said to her, 'What is your name?'",
    "options": [
      "He asked her what her name was.",
      "He asked her what was her name.",
      "He asked her that what her name was.",
      "He told her what her name was."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: সঠিক ক্রম হলো 'what her name was' (Subject + Verb)।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q68",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 18] He said, 'I cannot help you now.'",
    "options": [
      "He said that he could not help me then.",
      "He said that he cannot help me now.",
      "He said that he could not help you now.",
      "He told that he could not help me then."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: cannot -> could not এবং now -> then হয়।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q69",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 19] Mother said to me, 'Have you taken your breakfast?'",
    "options": [
      "Mother asked me if I had taken my breakfast.",
      "Mother asked me that if I had taken my breakfast.",
      "Mother asked me whether had I taken my breakfast.",
      "Mother told me if I have taken my breakfast."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: Present Perfect Interrogative -> Past Perfect (if I had taken) হয়।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q70",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 20] He said, 'Let us go for a walk.'",
    "options": [
      "He proposed that they should go for a walk.",
      "He said that they would go for a walk.",
      "He requested to go for a walk.",
      "He ordered that we should go for a walk."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: 'Let us' প্রস্তাব নির্দেশ করায় 'proposed that they should go for a walk' হয়।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q71",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 21] The teacher said, 'Man is mortal.'",
    "options": [
      "The teacher said that man was mortal.",
      "The teacher said that man is mortal.",
      "The teacher told that man is mortal.",
      "The teacher explained that man had been mortal."
    ],
    "correctIndex": 1,
    "explanationBn": "বিশদ ব্যাখ্যা: চিরন্তন সত্যে 'man is mortal' অপরিবর্তিত থাকে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q72",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 22] He said, 'I saw him two days ago.'",
    "options": [
      "He said that he had seen him two days before.",
      "He said that he saw him two days ago.",
      "He said that he has seen him two days before.",
      "He told that he had seen him two days ago."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: saw -> had seen এবং ago -> before হয়।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q73",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 23] She said to Ram, 'Why were you absent yesterday?'",
    "options": [
      "She asked Ram why he had been absent the previous day.",
      "She asked Ram why was he absent yesterday.",
      "She asked Ram why he was absent the previous day.",
      "She told Ram why he had been absent yesterday."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: were (Past Simple) -> had been এবং yesterday -> the previous day হয়।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q74",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 24] Father said to me, 'Work hard to succeed in life.'",
    "options": [
      "Father advised me to work hard to succeed in life.",
      "Father ordered me work hard to succeed in life.",
      "Father said to me that work hard to succeed in life.",
      "Father told me that to work hard."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: উপদেশে 'advised me to work hard' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q75",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 25] He said, 'Goodbye, my friends!'",
    "options": [
      "He bade his friends goodbye.",
      "He said goodbye to his friends.",
      "He wished his friends goodbye.",
      "He prayed goodbye to his friends."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: বিদায় জানানোর ক্ষেত্রে 'bade his friends goodbye' ব্যবহৃত হয়।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q76",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 26] She said, 'Good morning, sir!'",
    "options": [
      "She wished her sir good morning.",
      "She bade her sir good morning.",
      "She prayed good morning to sir.",
      "She said good morning to sir."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: প্রাতঃকালীন সম্ভাষণে 'wished her sir good morning' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q77",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 27] He said, 'I must go now.'",
    "options": [
      "He said that he had to go then.",
      "He said that he must go now.",
      "He said that he would go then.",
      "He told that he must have gone then."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: নির্দিষ্ট তাৎক্ষণিক বাধ্যবাধকতায় 'must' পরিবর্তিত হয়ে 'had to' এবং now -> then হয়।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q78",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 28] The master said to the servant, 'Bring me a cup of tea.'",
    "options": [
      "The master ordered the servant to bring him a cup of tea.",
      "The master requested the servant to bring him a cup of tea.",
      "The master advised the servant to bring him a cup of tea.",
      "The master told the servant bring him a cup of tea."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: ভৃত্যকে আদেশে 'ordered the servant to bring him' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q79",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 29] He said to me, 'Do you know French?'",
    "options": [
      "He asked me if I knew French.",
      "He asked me if did I know French.",
      "He asked me that if I knew French.",
      "He told me whether I know French."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: Do you know -> if I knew French (Simple Past) হয়।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q80",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 30] The girl said, 'How lovely the sunset is!'",
    "options": [
      "The girl exclaimed with delight that the sunset was very lovely.",
      "The girl said that how lovely the sunset was.",
      "The girl exclaimed that the sunset is lovely.",
      "The girl asked how lovely the sunset was."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: বিস্ময়ে 'exclaimed with delight that the sunset was very lovely' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q81",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 31] He said, 'May you pass the examination!'",
    "options": [
      "He wished that I might pass the examination.",
      "He prayed that I may pass the examination.",
      "He said that I might pass the examination.",
      "He exclaimed that I would pass the examination."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: শুভেচ্ছায় 'wished that I might pass' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q82",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 32] The policeman said to the driver, 'Show your driving license.'",
    "options": [
      "The policeman ordered the driver to show his driving license.",
      "The policeman requested the driver to show his driving license.",
      "The policeman asked the driver that show his driving license.",
      "The policeman advised the driver to show your license."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: আইন প্রয়োগকারী নির্দেশে 'ordered the driver to show his driving license' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q83",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 33] He said, 'I have been living here for ten years.'",
    "options": [
      "He said that he had been living there for ten years.",
      "He said that he has been living there for ten years.",
      "He said that he was living there for ten years.",
      "He told that he had lived there for ten years."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: have been -> had been এবং here -> there হয়।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q84",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 34] The saint said, 'God is everywhere.'",
    "options": [
      "The saint said that God was everywhere.",
      "The saint said that God is everywhere.",
      "The saint told that God is everywhere.",
      "The saint explained that God had been everywhere."
    ],
    "correctIndex": 1,
    "explanationBn": "বিশদ ব্যাখ্যা: শাশ্বত আধ্যাত্মিক সত্যে Tense অপরিবর্তিত থাকে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q85",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 35] He said to me, 'Will you lend me your book?'",
    "options": [
      "He asked me if I would lend him my book.",
      "He asked me that if I would lend him my book.",
      "He asked me will I lend him my book.",
      "He told me if I will lend him my book."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: will -> would এবং সর্বনামের সঠিক পরিবর্তনে 'if I would lend him my book' হয়।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q86",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 36] She said, 'I bought this dress in Paris.'",
    "options": [
      "She said that she had bought that dress in Paris.",
      "She said that she bought that dress in Paris.",
      "She said that she has bought this dress in Paris.",
      "She told that she had bought this dress in Paris."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: bought -> had bought এবং this -> that হয়।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q87",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 37] He said, 'Let me have some water.'",
    "options": [
      "He wished that he might have some water.",
      "He proposed that he should have water.",
      "He ordered to have water.",
      "He said that let him have water."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: অনুরোধমূলক 'Let me' এর ক্ষেত্রে 'wished/requested that he might have' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q88",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 38] The captain said, 'Bravo! You played well.'",
    "options": [
      "The captain applauded them saying that they had played well.",
      "The captain exclaimed with joy that you played well.",
      "The captain said bravo that they played well.",
      "The captain praised them that they play well."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: 'Bravo' এর ক্ষেত্রে 'applauded them saying that they had played well' আদর্শ প্রকাশ।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q89",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 39] He said to his friend, 'Please wait here till I return.'",
    "options": [
      "He requested his friend to wait there till he returned.",
      "He asked his friend to wait here till he returns.",
      "He ordered his friend to wait there till he returned.",
      "He told his friend to please wait there."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: requested + wait there till he returned সঠিক।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q90",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 40] The judge said to the accused, 'Tell the truth.'",
    "options": [
      "The judge ordered the accused to tell the truth.",
      "The judge requested the accused to tell the truth.",
      "The judge asked the accused that tell the truth.",
      "The judge advised the accused telling the truth."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: আদালতের নির্দেশে 'ordered the accused to tell the truth' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q91",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 41] He said, 'I am very busy today.'",
    "options": [
      "He said that he was very busy that day.",
      "He said that he is very busy today.",
      "He said that he had been busy that day.",
      "He told that he was very busy today."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: am -> was এবং today -> that day হয়।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q92",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 42] She said to me, 'Who broke this windowpane?'",
    "options": [
      "She asked me who had broken that windowpane.",
      "She asked me that who had broken this windowpane.",
      "She asked me who broke that windowpane.",
      "She asked me who was broken that windowpane."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: broke (V2) -> had broken এবং this -> that হয়।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q93",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 43] He said, 'Water freezes at zero degree Celsius.'",
    "options": [
      "The speaker said that water freezes at zero degree Celsius.",
      "He said that water froze at zero degree Celsius.",
      "He said that water has frozen at zero degree Celsius.",
      "He told that water had frozen."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: বৈজ্ঞানিক সত্য অপরিবর্তিত থাকে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q94",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 44] Father said to him, 'Do not tell a lie.'",
    "options": [
      "Father advised him not to tell a lie.",
      "Father forbade him not to tell a lie.",
      "Father ordered him to not tell a lie.",
      "Father told him that not tell a lie."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: 'Advised him not to tell a lie' সঠিক।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q95",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 45] He said, 'Thank you!'",
    "options": [
      "He thanked me.",
      "He said thank you to me.",
      "He wished me thank you.",
      "He told me thank you."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: 'Thank you' এর Indirect রূপ 'He thanked me' হয়।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q96",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 46] She said, 'Welcome, friends!'",
    "options": [
      "She welcomed her friends.",
      "She wished welcome to her friends.",
      "She said welcome to her friends.",
      "She greeted friends welcome."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: 'She welcomed her friends' সঠিক রূপ।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q97",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 47] He said, 'Yes, I committed the mistake.'",
    "options": [
      "He admitted that he had committed the mistake.",
      "He said yes that he committed the mistake.",
      "He replied in affirmative that he committed the mistake.",
      "Both A and C are acceptable."
    ],
    "correctIndex": 3,
    "explanationBn": "বিশদ ব্যাখ্যা: 'Admitted' বা 'replied in the affirmative' উভয় রূপই গ্রাহ্য।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q98",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 48] He said, 'No, I did not steal the watch.'",
    "options": [
      "He denied that he had stolen the watch.",
      "He replied in the negative that he had stolen the watch.",
      "Both A and B are correct.",
      "He said no that he did not steal."
    ],
    "correctIndex": 2,
    "explanationBn": "বিশদ ব্যাখ্যা: 'Denied that he had stolen' বা 'replied in the negative' উভয়ই সঠিক।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q99",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 49] The teacher said, 'Light travels in a straight line.'",
    "options": [
      "The teacher said that light travels in a straight line.",
      "The teacher said that light traveled in a straight line.",
      "The teacher told that light had traveled in a straight line.",
      "The teacher explained that light was traveling in a straight line."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: চিরন্তন সত্য হওয়ায় Tense অপরিবর্তিত থাকে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch5_q100",
    "subjectId": "english",
    "chapterId": "eng_ch5",
    "subTopicId": "eng_ch5_sub3",
    "questionBn": "[Practice Variant 50] He said, 'I shall go as soon as it is possible.'",
    "options": [
      "He said that he would go as soon as it was possible.",
      "He said that he should go as soon as it is possible.",
      "He said that he will go as soon as it was possible.",
      "He told that he would go as soon as it will be possible."
    ],
    "correctIndex": 0,
    "explanationBn": "বিশদ ব্যাখ্যা: shall -> would এবং is -> was হয়।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Narration Change",
      "Volume 3"
    ]
  }
];
