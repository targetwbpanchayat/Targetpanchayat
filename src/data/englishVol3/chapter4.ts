import { StudyChapter, Question } from "../../types";

export const ENGLISH_CH4_STUDY: StudyChapter = {
  "id": "eng_ch4",
  "subjectId": "english",
  "chapterNumber": 4,
  "titleBn": "Voice Change (বাচ্য পরিবর্তন - Active to Passive)",
  "titleEn": "Voice Change - Assertive, Interrogative, Imperative & Quasi-Passive",
  "estimatedMinutes": 40,
  "importantNotesCount": 45,
  "summary": "Active থেকে Passive রূপান্তরের সর্বজনীন সূত্র (Object -> Subject + be verb + V3 + by + Subject -> Object), Interrogative রূপান্তর (Do/Does/Did, WH-words, Who -> By whom), Imperative বাক্যের বাচ্য পরিবর্তন (Let + Object + be + V3 / You are requested to), Modal Auxiliaries (can, could, should, must + be + V3), Quasi-Passive (Honey tastes sweet -> Honey is sweet when it is tasted), এবং 'by' ব্যতীত অন্য Preposition (known to, pleased with, surprised at, contained in)।",
  "subTopics": [
    {
      "id": "eng_ch4_sub1",
      "chapterId": "eng_ch4",
      "subjectId": "english",
      "titleBn": "Assertive Voice Change & Tense Rules",
      "titleEn": "Assertive Sentences across All Tenses",
      "orderIndex": 1,
      "summaryBn": "Present/Past/Future Indefinite, Continuous, Perfect-এর জন্য উপযুক্ত Be-verb (am/is/are, was/were, being, been) ও মূল ক্রিয়ার V3 রূপ প্রয়োগ।",
      "keyConcepts": [
        "He writes a letter -> A letter is written by him",
        "He is writing a letter -> A letter is being written by him",
        "He has written a letter -> A letter has been written by him"
      ]
    },
    {
      "id": "eng_ch4_sub2",
      "chapterId": "eng_ch4",
      "subjectId": "english",
      "titleBn": "Interrogative & Imperative Voice Change",
      "titleEn": "Questions (Who/Whom, Do/Did) & Imperative Commands/Requests",
      "orderIndex": 2,
      "summaryBn": "Who থাকলে 'By whom' এবং Whom থাকলে 'Who'। আদেশ/উপদেশে 'Let + Object + be + V3' বা 'You are advised/ordered to'। অনুরোধে 'You are requested to + V1'।",
      "keyConcepts": [
        "Who wrote the book? -> By whom was the book written?",
        "Do it -> Let it be done",
        "Please help me -> You are requested to help me"
      ]
    },
    {
      "id": "eng_ch4_sub3",
      "chapterId": "eng_ch4",
      "subjectId": "english",
      "titleBn": "Quasi-Passive & Special Prepositions (Non-'By')",
      "titleEn": "Quasi-Passive & Verbs with Fixed Prepositions in Passive",
      "orderIndex": 3,
      "summaryBn": "Quasi-Passive: Honey tastes sweet -> Honey is sweet when it is tasted। Know-এর Passive-এ 'to', Pleased-এ 'with', Surprise-এ 'at', Contain-এ 'in' বসে।",
      "keyConcepts": [
        "I know him -> He is known to me",
        "His conduct surprised me -> I was surprised at his conduct",
        "This jug contains milk -> Milk is contained in this jug"
      ]
    }
  ],
  "content": {
    "introduction": "বাচ্য পরিবর্তন (Voice Change) ইংরেজি ব্যাকরণের অন্যতম প্রধান অংশ। পশ্চিমবঙ্গ পঞ্চায়েত সহায়ক, এক্সিকিউটিভ অ্যাসিস্ট্যান্ট ও ক্লার্কশিপ পরীক্ষায় প্রায় প্রতিটি প্রশ্নপত্রে ৩-৫টি Voice Change এর রূপান্তর সরাসরি আসে।",
    "sections": [
      {
        "heading": "১. Active থেকে Passive রূপান্তরের মূল নিয়মাবলী",
        "body": [
          "১. Active Voice-এর Object টি Passive Voice-এর Subject হবে।",
          "২. Tense ও Subject-এর Person/Number অনুযায়ী Auxiliary Verb (Be-verb) বসবে।",
          "৩. মূল ক্রিয়াপদের সর্বদা Past Participle রূপ (V3) বসবে।",
          "৪. সাধারণত একটি Preposition (বেশিরভাগ ক্ষেত্রে 'by') বসবে।",
          "৫. Active Voice-এর Subject টি Passive Voice-এর Object হবে (যেমন: I -> me, We -> us, He -> him, She -> her, They -> them)।"
        ],
        "tables": {
          "headers": [
            "Tense",
            "Active Form",
            "Passive Be-verb + V3",
            "উদাহরণ (Passive)"
          ],
          "rows": [
            [
              "Simple Present",
              "V1 / V1+s",
              "am / is / are + V3",
              "A song is sung by her."
            ],
            [
              "Present Continuous",
              "am/is/are + V-ing",
              "am/is/are + being + V3",
              "A song is being sung by her."
            ],
            [
              "Present Perfect",
              "has/have + V3",
              "has/have + been + V3",
              "A song has been sung by her."
            ],
            [
              "Simple Past",
              "V2",
              "was / were + V3",
              "A song was sung by her."
            ],
            [
              "Past Continuous",
              "was/were + V-ing",
              "was/were + being + V3",
              "A song was being sung by her."
            ],
            [
              "Past Perfect",
              "had + V3",
              "had been + V3",
              "A song had been sung by her."
            ],
            [
              "Simple Future",
              "will / shall + V1",
              "will/shall + be + V3",
              "A song will be sung by her."
            ],
            [
              "Modal Auxiliary",
              "can / must / should + V1",
              "can/must/should + be + V3",
              "The work must be done by you."
            ]
          ]
        }
      },
      {
        "heading": "২. Interrogative, Imperative ও ব্যতিক্রমী Preposition-এর নিয়ম",
        "body": [
          "• Who দিয়ে শুরু হলে 'By whom + Auxiliary Verb + Subject + V3?' হয়: Who wrote the Mahabharata? -> By whom was the Mahabharata written?",
          "• Whom দিয়ে শুরু হলে 'Who + Auxiliary Verb + V3 + by + Subject?' হয়: Whom did you see? -> Who was seen by you?",
          "• Imperative আদেশমূলক বাক্যে 'Let + Object + be + V3' বসে: Do the work at once -> Let the work be done at once; Shut the door -> Let the door be shut।",
          "• Imperative উপদেশমূলক বাক্যে 'Subject + should + be + V3' বসে: Help the poor -> The poor should be helped / You are advised to help the poor।",
          "• 'Please' বা অনুরোধমূলক বাক্যে 'You are requested to + V1' বসে: Please come in -> You are requested to come in।",
          "• Quasi-Passive: দেখতে Active হলেও অর্থে Passive: Honey tastes sweet -> Honey is sweet when it is tasted; The rose smells sweet -> The rose is sweet when it is smelt; The house is building -> The house is being built।",
          "• 'By' ব্যতীত অন্যান্য Preposition-এর তালিকা:",
          "  - Know -> Known to (He is known to me)",
          "  - Surprise -> Surprised at (I was surprised at his behavior)",
          "  - Please -> Pleased with (I was pleased with his work)",
          "  - Satisfy -> Satisfied with (The teacher was satisfied with his answer)",
          "  - Contain -> Contained in (Milk is contained in the pot)",
          "  - Annoy -> Annoyed with (person) / Annoyed at (thing)"
        ]
      }
    ],
    "examTips": [
      "'Who' থাকলে Passive-এ 'By whom' এবং 'Whom' থাকলে 'Who' হবে।",
      "Continuous Tense-এর Passive-এ সর্বদা 'being' এবং Perfect Tense-এ সর্বদা 'been' যুক্ত হয়।",
      "Know ক্রিয়াপদের পর Passive-এ কখনোই 'by' বসবে না, সর্বদা 'to' বসবে (Known to me)।",
      "Quasi-Passive বাক্যে 'when it is + V3' প্যাটার্নটি মনে রাখবেন।",
      "Let দিয়ে শুরু বাক্যে Be-verb হিসেবে সর্বদা 'be' (V1 form) ব্যবহৃত হয়।"
    ],
    "quickRevisionPoints": [
      "I know him -> He is known to me.",
      "Who did this? -> By whom was this done?",
      "Do it -> Let it be done.",
      "Please sit down -> You are requested to sit down.",
      "Honey tastes sweet -> Honey is sweet when it is tasted.",
      "He had finished it -> It had been finished by him.",
      "He will help me -> I shall be helped by him."
    ],
    "oneLiners": [
      "Active Voice এর কর্ম (Object) Passive Voice এর কর্তায় (Subject) রূপান্তরিত হয়।",
      "Passive Voice এ মূল ক্রিয়াপদ সর্বদা Past Participle (V3) রূপ ধারণ করে।",
      "Continuous Tense এর Passive এ 'being' যোগ করা বাধ্যতামূলক।",
      "Perfect Tense এর Passive এ 'been' যোগ করা আবশ্যক।",
      "Who যুক্ত প্রশ্নবোধক বাক্যে Passive এ 'By whom' বসে।",
      "Whom যুক্ত প্রশ্নবোধক বাক্যে Passive এ 'Who' বসে।",
      "আদেশমূলক বাক্যে 'Let + Object + be + V3' সূত্র প্রযুক্ত হয়।",
      "অনুরোধসূচক বাক্যে 'You are requested to' দিয়ে বাক্য শুরু হয়।",
      "উপদেশমূলক বাক্যে 'The poor should be helped' গঠন অনুসরণ করা হয়।",
      "Know ক্রিয়ার পরে 'by' না বসে 'to' (known to) বসে।",
      "Surprise, Astonish ক্রিয়ার পর 'at' (surprised at) বসে।",
      "Pleased, Satisfied ক্রিয়ার পর 'with' (pleased with) বসে।",
      "Contain, Embody ক্রিয়ার পর 'in' (contained in) বসে।",
      "Honey tastes sweet এর প্যাসিভ হলো Honey is sweet when it is tasted।"
    ],
    "saqs": [
      {
        "id": "eng_ch4_saq1",
        "questionBn": "'I know him' — এর সঠিক Passive Voice কী হবে এবং কেন 'by me' হয় না?",
        "answerBn": "'He is known to me.' ইংরেজি ব্যাকরণে 'know' ক্রিয়াপদের সাথে Passive Voice-এ 'by' Preposition না বসে নির্দিষ্ট নিয়মে 'to' Preposition ব্যবহৃত হয়।"
      },
      {
        "id": "eng_ch4_saq2",
        "questionBn": "'Who wrote the letter?' — এর Passive Voice রূপান্তরটি ব্যাখ্যা করুন।",
        "answerBn": "'By whom was the letter written?' নিয়ম: Active Voice-এ 'Who' থাকলে Passive-এ 'By whom' বসে, এরপর Past Tense ও Singular Subject 'the letter' অনুসারে Auxiliary Verb 'was', তারপর Subject 'the letter' এবং মূল ক্রিয়ার V3 'written' বসে।"
      },
      {
        "id": "eng_ch4_saq3",
        "questionBn": "Quasi-Passive Voice বলতে কী বোঝায়? একটি উদাহরণ দিন।",
        "answerBn": "যেসব বাক্য গঠনে Active কিন্তু অর্থে Passive, তাদের Quasi-Passive বা প্রায়-কর্মবাচ্য বলে। যেমন: 'Honey tastes sweet' এর Passive হলো 'Honey is sweet when it is tasted'।"
      }
    ]
  }
};

export const ENGLISH_CH4_QUESTIONS: Question[] = [
  {
    "id": "vol3_ch4_q1",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "He writes a letter.",
    "options": [
      "A letter is written by him.",
      "A letter was written by him.",
      "A letter is being written by him.",
      "A letter has been written by him."
    ],
    "correctIndex": 0,
    "explanationBn": "Simple Present Tense-এর Passive রূপ হলো: is + V3 (written) + by him।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q2",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "She is singing a song.",
    "options": [
      "A song is sung by her.",
      "A song was sung by her.",
      "A song is being sung by her.",
      "A song has been sung by her."
    ],
    "correctIndex": 2,
    "explanationBn": "Present Continuous Tense-এর Passive রূপ হলো: is + being + sung + by her।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q3",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "They have completed the project.",
    "options": [
      "The project has completed by them.",
      "The project has been completed by them.",
      "The project was completed by them.",
      "The project is completed by them."
    ],
    "correctIndex": 1,
    "explanationBn": "Present Perfect Tense-এর Passive-এ 'has been + V3' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q4",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "The hunter killed the tiger.",
    "options": [
      "The tiger is killed by the hunter.",
      "The tiger was killed by the hunter.",
      "The tiger was being killed by the hunter.",
      "The tiger had been killed by the hunter."
    ],
    "correctIndex": 1,
    "explanationBn": "Simple Past Tense-এর Passive-এ 'was + V3 (killed)' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q5",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "He was driving a car.",
    "options": [
      "A car is driven by him.",
      "A car was driven by him.",
      "A car was being driven by him.",
      "A car has been driven by him."
    ],
    "correctIndex": 2,
    "explanationBn": "Past Continuous Tense-এর Passive-এ 'was being + driven' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q6",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "She had cooked the dinner.",
    "options": [
      "The dinner was cooked by her.",
      "The dinner had cooked by her.",
      "The dinner had been cooked by her.",
      "The dinner has been cooked by her."
    ],
    "correctIndex": 2,
    "explanationBn": "Past Perfect Tense-এর Passive-এ 'had been + cooked' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q7",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "I will help you.",
    "options": [
      "You will help by me.",
      "You will be helped by me.",
      "You shall be helped by me.",
      "You are helped by me."
    ],
    "correctIndex": 1,
    "explanationBn": "Simple Future Tense-এর Passive-এ 'will be + helped' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q8",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "Who wrote the Mahabharata?",
    "options": [
      "By whom the Mahabharata was written?",
      "By whom was the Mahabharata written?",
      "Who was written the Mahabharata?",
      "By whom had the Mahabharata written?"
    ],
    "correctIndex": 1,
    "explanationBn": "Who -> By whom + was + Subject + written? এই প্রশ্নবোধক গঠন সঠিক।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q9",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "Do the work at once.",
    "options": [
      "The work is done at once.",
      "Let the work be done at once.",
      "Let the work do at once.",
      "You are ordered do the work at once."
    ],
    "correctIndex": 1,
    "explanationBn": "Imperative আদেশসূচক বাক্যের Passive-এ 'Let + Object + be + V3' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q10",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "Please help me in this matter.",
    "options": [
      "You are requested to help me in this matter.",
      "Let me be helped in this matter.",
      "I am helped by you.",
      "You are advised to help me."
    ],
    "correctIndex": 0,
    "explanationBn": "অনুরোধমূলক বাক্যে 'You are requested to + V1' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q11",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "I know him very well.",
    "options": [
      "He is known by me very well.",
      "He is known to me very well.",
      "He was known to me very well.",
      "He has been known to me."
    ],
    "correctIndex": 1,
    "explanationBn": "'Know' ক্রিয়াপদের Passive Voice-এ 'by' না বসে 'to' (known to me) বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q12",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "His behavior surprised me.",
    "options": [
      "I was surprised by his behavior.",
      "I was surprised at his behavior.",
      "I am surprised at his behavior.",
      "I was surprised with his behavior."
    ],
    "correctIndex": 1,
    "explanationBn": "'Surprise' ক্রিয়াপদের পরে আচরণ নির্দেশ করতে 'surprised at' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q13",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "His performance pleased the teacher.",
    "options": [
      "The teacher was pleased by his performance.",
      "The teacher was pleased with his performance.",
      "The teacher was pleased at his performance.",
      "The teacher is pleased with his performance."
    ],
    "correctIndex": 1,
    "explanationBn": "'Pleased' ক্রিয়াপদের সাথে 'pleased with' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q14",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "This bottle contains pure milk.",
    "options": [
      "Pure milk is contained by this bottle.",
      "Pure milk is contained in this bottle.",
      "Pure milk was contained in this bottle.",
      "Pure milk has been contained in this bottle."
    ],
    "correctIndex": 1,
    "explanationBn": "'Contain' ক্রিয়াপদের Passive Voice-এ 'contained in' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q15",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "Honey tastes sweet.",
    "options": [
      "Honey is sweet when it is tasted.",
      "Honey is tasted sweet.",
      "Honey was sweet when tasted.",
      "Sweet honey is tasted."
    ],
    "correctIndex": 0,
    "explanationBn": "Quasi-Passive বাক্যে 'Subject + is + Adjective + when it is + V3' গঠন হয়।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q16",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "Shut the window.",
    "options": [
      "Let the window shut.",
      "Let the window be shut.",
      "The window should be shut.",
      "You are ordered shut the window."
    ],
    "correctIndex": 1,
    "explanationBn": "Imperative-এ 'Let + the window + be + shut' (shut-এর V3 shut) বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q17",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "We should respect our elders.",
    "options": [
      "Our elders should respected by us.",
      "Our elders should be respected by us.",
      "Our elders were respected by us.",
      "Our elders are respected by us."
    ],
    "correctIndex": 1,
    "explanationBn": "Modal Auxiliary 'should' এর পর 'should be + V3' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q18",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "You must do this work.",
    "options": [
      "This work must done by you.",
      "This work must be done by you.",
      "This work will be done by you.",
      "This work is done by you."
    ],
    "correctIndex": 1,
    "explanationBn": "'Must' এর পর 'must be + done' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q19",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "The boy opened the door.",
    "options": [
      "The door is opened by the boy.",
      "The door was opened by the boy.",
      "The door was being opened by the boy.",
      "The door has been opened by the boy."
    ],
    "correctIndex": 1,
    "explanationBn": "Simple Past Tense এ 'was opened by the boy' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q20",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "They are constructing a new bridge over the river.",
    "options": [
      "A new bridge is constructed over the river.",
      "A new bridge was being constructed over the river.",
      "A new bridge is being constructed over the river by them.",
      "A new bridge has been constructed by them."
    ],
    "correctIndex": 2,
    "explanationBn": "Present Continuous এ 'is being constructed' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q21",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "Whom did you invite to the party?",
    "options": [
      "Who was invited by you to the party?",
      "Who is invited by you to the party?",
      "By whom were you invited to the party?",
      "Who had been invited by you?"
    ],
    "correctIndex": 0,
    "explanationBn": "'Whom did you invite' এর Passive হলো 'Who was invited by you'.",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q22",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "Did you post the letter?",
    "options": [
      "Was the letter posted by you?",
      "Is the letter posted by you?",
      "Did the letter posted by you?",
      "Had the letter been posted by you?"
    ],
    "correctIndex": 0,
    "explanationBn": "Simple Past Interrogative-এ 'Was the letter posted by you?' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q23",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "Do not pluck flowers.",
    "options": [
      "Let flowers not plucked.",
      "Let not flowers be plucked.",
      "Flowers should not plucked.",
      "You are ordered not pluck flowers."
    ],
    "correctIndex": 1,
    "explanationBn": "Negative Imperative-এ 'Let not + Object + be + V3' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q24",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "Help the poor and needy.",
    "options": [
      "The poor and needy should be helped.",
      "Let the poor and needy be help.",
      "The poor and needy are helped.",
      "You are requested help the poor."
    ],
    "correctIndex": 0,
    "explanationBn": "উপদেশমূলক বাক্যে 'Subject + should be + V3' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q25",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "The rose smells sweet.",
    "options": [
      "The rose is smelt sweet.",
      "The rose is sweet when it is smelt.",
      "The rose was sweet when smelt.",
      "Sweet rose is smelt."
    ],
    "correctIndex": 1,
    "explanationBn": "Quasi-Passive এ 'The rose is sweet when it is smelt' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q26",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "The teacher will teach us a new lesson tomorrow.",
    "options": [
      "A new lesson will taught to us tomorrow.",
      "A new lesson will be taught to us by the teacher tomorrow.",
      "We are taught a new lesson tomorrow.",
      "A new lesson was taught to us tomorrow."
    ],
    "correctIndex": 1,
    "explanationBn": "Future Simple এ 'will be taught' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q27",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "People speak English all over the world.",
    "options": [
      "English is spoken all over the world.",
      "English was spoken all over the world.",
      "English is spoken by people all over the world.",
      "English has been spoken all over the world."
    ],
    "correctIndex": 0,
    "explanationBn": "সর্বজনীন কর্তায় 'by people' বাদ দিয়ে 'English is spoken all over the world' আদর্শ রূপ।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q28",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "They elected him President.",
    "options": [
      "He was elected President by them.",
      "He is elected President by them.",
      "He had been elected President.",
      "President was elected him by them."
    ],
    "correctIndex": 0,
    "explanationBn": "Factitive Object 'President' অপরিবর্তিত থাকে এবং 'He was elected President' হয়।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q29",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "Someone has stolen my pen.",
    "options": [
      "My pen has stolen by someone.",
      "My pen has been stolen.",
      "My pen was stolen by someone.",
      "My pen is stolen."
    ],
    "correctIndex": 1,
    "explanationBn": "অনির্দিষ্ট কর্তা (Someone/Somebody) থাকলে Passive এ 'has been stolen' এ সমাপ্ত হয়।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q30",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "The police caught the thief.",
    "options": [
      "The thief was caught by the police.",
      "The thief is caught by the police.",
      "The thief was being caught by the police.",
      "The thief had been caught by the police."
    ],
    "correctIndex": 0,
    "explanationBn": "Simple Past এ 'The thief was caught by the police' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q31",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "He gave me a valuable watch.",
    "options": [
      "I was given a valuable watch by him.",
      "A valuable watch was given to me by him.",
      "Both A and B are correct.",
      "I am given a valuable watch by him."
    ],
    "correctIndex": 2,
    "explanationBn": "Double Object থাকলে যেকোনো একটিকে Subject করা যায়, ফলে উভয় রূপই ব্যাকরণগতভাবে সঠিক।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q32",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "Who broke this beautiful vase?",
    "options": [
      "By whom this beautiful vase was broken?",
      "By whom was this beautiful vase broken?",
      "Who was broken this beautiful vase?",
      "By whom has this vase broken?"
    ],
    "correctIndex": 1,
    "explanationBn": "'By whom was this beautiful vase broken?' সঠিক প্রশ্নবোধক গঠন।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q33",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub1",
    "questionBn": "One should keep one's promises.",
    "options": [
      "Promises should kept.",
      "Promises should be kept.",
      "One's promises should be kept by one.",
      "Promises are kept."
    ],
    "correctIndex": 1,
    "explanationBn": "সর্বজনীন নীতিতে 'Promises should be kept' সঠিক রূপ।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q34",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "I can solve this difficult problem.",
    "options": [
      "This difficult problem can solved by me.",
      "This difficult problem can be solved by me.",
      "This difficult problem could be solved by me.",
      "This difficult problem is solved by me."
    ],
    "correctIndex": 1,
    "explanationBn": "'Can' এর পর 'can be + V3' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q35",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "The gardener is watering the plants.",
    "options": [
      "The plants are watered by the gardener.",
      "The plants are being watered by the gardener.",
      "The plants were being watered by the gardener.",
      "The plants have been watered by the gardener."
    ],
    "correctIndex": 1,
    "explanationBn": "Present Continuous Plural এ 'are being watered' বসে।",
    "difficulty": "easy",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q36",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "He had already packed his bags.",
    "options": [
      "His bags had already packed by him.",
      "His bags had already been packed by him.",
      "His bags were already packed by him.",
      "His bags have already been packed by him."
    ],
    "correctIndex": 1,
    "explanationBn": "Past Perfect এ 'had already been packed' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q37",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "Smoke filled the entire room.",
    "options": [
      "The entire room was filled by smoke.",
      "The entire room was filled with smoke.",
      "The entire room was filled in smoke.",
      "The entire room is filled with smoke."
    ],
    "correctIndex": 1,
    "explanationBn": "'Filled' এর সাথে নির্দিষ্ট Preposition 'filled with' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q38",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "His sudden death shocked everyone.",
    "options": [
      "Everyone was shocked by his sudden death.",
      "Everyone was shocked at his sudden death.",
      "Everyone is shocked at his sudden death.",
      "Everyone had been shocked by his death."
    ],
    "correctIndex": 1,
    "explanationBn": "'Shocked' এর সাথে নির্দিষ্ট Preposition 'shocked at' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q39",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "He satisfied the interviewers with his answers.",
    "options": [
      "The interviewers were satisfied by his answers.",
      "The interviewers were satisfied with his answers.",
      "The interviewers are satisfied with his answers.",
      "The interviewers were satisfied at his answers."
    ],
    "correctIndex": 1,
    "explanationBn": "'Satisfied' এর সাথে 'satisfied with' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q40",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "The house is building.",
    "options": [
      "The house is being built.",
      "The house is built.",
      "The house was being built.",
      "The house has been built."
    ],
    "correctIndex": 0,
    "explanationBn": "Quasi-Passive চলমান অবস্থায় 'The house is being built' হয়।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q41",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "The drums are beating.",
    "options": [
      "The drums are being beaten.",
      "The drums are beaten.",
      "The drums were being beaten.",
      "The drums have been beaten."
    ],
    "correctIndex": 0,
    "explanationBn": "Quasi-Passive এ 'The drums are being beaten' সঠিক।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q42",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "We expect good news.",
    "options": [
      "Good news is expected by us.",
      "Good news was expected by us.",
      "Good news has been expected.",
      "Good news is being expected by us."
    ],
    "correctIndex": 0,
    "explanationBn": "Simple Present এ 'Good news is expected by us' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q43",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "Take care of your health.",
    "options": [
      "Health should be taken care of.",
      "You are advised to take care of your health.",
      "Let health be taken care of.",
      "Both A and B are acceptable."
    ],
    "correctIndex": 3,
    "explanationBn": "স্বাস্থ্য সম্পর্কিত উপদেশে উভয় বাক্য গঠনই ব্যাকরণগতভাবে মান্য।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q44",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "Call in the doctor.",
    "options": [
      "Let the doctor called in.",
      "Let the doctor be called in.",
      "The doctor should call in.",
      "You are ordered call in the doctor."
    ],
    "correctIndex": 1,
    "explanationBn": "Phrasal verb 'call in' সহ Imperative-এ 'Let the doctor be called in' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q45",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "Never tell a lie.",
    "options": [
      "Let a lie never be told.",
      "A lie should never be told.",
      "Never let a lie be told.",
      "Both A and B are correct."
    ],
    "correctIndex": 3,
    "explanationBn": "উপদেশমূলক নেতিবাচক বাক্যে 'Let a lie never be told' বা 'A lie should never be told' উভয়ই সঠিক।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q46",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "He annoyed me with his silly questions.",
    "options": [
      "I was annoyed by him with his silly questions.",
      "I was annoyed at his silly questions.",
      "I was annoyed with him at his silly questions.",
      "I was annoyed on his silly questions."
    ],
    "correctIndex": 2,
    "explanationBn": "ব্যক্তির ক্ষেত্রে 'with him' এবং বিষয়ের ক্ষেত্রে 'at his questions' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q47",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "The news disappointed us.",
    "options": [
      "We were disappointed by the news.",
      "We were disappointed at the news.",
      "We were disappointed with the news.",
      "We are disappointed at the news."
    ],
    "correctIndex": 1,
    "explanationBn": "খবরের ক্ষেত্রে 'disappointed at' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q48",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "The storm damaged several houses.",
    "options": [
      "Several houses are damaged by the storm.",
      "Several houses were damaged by the storm.",
      "Several houses had been damaged by the storm.",
      "Several houses were being damaged by the storm."
    ],
    "correctIndex": 1,
    "explanationBn": "Simple Past Plural এ 'were damaged' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q49",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "The postman delivered the letters.",
    "options": [
      "The letters are delivered by the postman.",
      "The letters were delivered by the postman.",
      "The letters had been delivered by the postman.",
      "The letters was delivered by the postman."
    ],
    "correctIndex": 1,
    "explanationBn": "Simple Past Plural এ 'were delivered' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q50",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "She will invite all her friends.",
    "options": [
      "All her friends will invited by her.",
      "All her friends will be invited by her.",
      "All her friends shall invited by her.",
      "All her friends are invited by her."
    ],
    "correctIndex": 1,
    "explanationBn": "Future Simple এ 'will be invited' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q51",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "They may win the match.",
    "options": [
      "The match may won by them.",
      "The match may be won by them.",
      "The match might be won by them.",
      "The match can be won by them."
    ],
    "correctIndex": 1,
    "explanationBn": "Modal 'may' এর Passive এ 'may be won' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q52",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "You ought to obey your teachers.",
    "options": [
      "Your teachers ought to obeyed by you.",
      "Your teachers ought to be obeyed by you.",
      "Your teachers must obeyed by you.",
      "Your teachers should obeyed by you."
    ],
    "correctIndex": 1,
    "explanationBn": "'Ought to' এর Passive এ 'ought to be obeyed' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q53",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "Why did you break the glass?",
    "options": [
      "Why was the glass broken by you?",
      "Why did the glass broken by you?",
      "Why is the glass broken by you?",
      "Why had the glass been broken by you?"
    ],
    "correctIndex": 0,
    "explanationBn": "Interrogative WH-question এ 'Why was the glass broken by you?' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q54",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "When will you return the book?",
    "options": [
      "When will the book returned by you?",
      "When will the book be returned by you?",
      "When shall the book returned by you?",
      "When is the book returned by you?"
    ],
    "correctIndex": 1,
    "explanationBn": "'When will the book be returned by you?' সঠিক গঠন।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q55",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "Where did you find this purse?",
    "options": [
      "Where was this purse found by you?",
      "Where is this purse found by you?",
      "Where did this purse found by you?",
      "Where had this purse been found by you?"
    ],
    "correctIndex": 0,
    "explanationBn": "'Where was this purse found by you?' সঠিক রূপ।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q56",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "How did you solve the puzzle?",
    "options": [
      "How was the puzzle solved by you?",
      "How is the puzzle solved by you?",
      "How did the puzzle solved by you?",
      "How had the puzzle solved by you?"
    ],
    "correctIndex": 0,
    "explanationBn": "'How was the puzzle solved by you?' সঠিক।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q57",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "Who taught you English?",
    "options": [
      "By whom were you taught English?",
      "By whom was English taught to you?",
      "Both A and B are correct.",
      "Who was taught you English?"
    ],
    "correctIndex": 2,
    "explanationBn": "উভয় Object-কে (you / English) সামনে এনে দুটি রূপই গঠন করা যায়।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q58",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "Who will ring the bell?",
    "options": [
      "By whom will the bell rung?",
      "By whom will the bell be rung?",
      "Who will be rung the bell?",
      "By whom shall the bell rung?"
    ],
    "correctIndex": 1,
    "explanationBn": "'By whom will the bell be rung?' সঠিক গঠন।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q59",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "Whom has the committee selected?",
    "options": [
      "Who has been selected by the committee?",
      "Who have been selected by the committee?",
      "By whom has the committee selected?",
      "Who was selected by the committee?"
    ],
    "correctIndex": 0,
    "explanationBn": "'Whom has' এর রূপান্তর 'Who has been selected by the committee?' হয়।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q60",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "Do not insult the poor.",
    "options": [
      "Let not the poor be insulted.",
      "The poor should not be insulted.",
      "Both A and B are correct.",
      "You are ordered not insult the poor."
    ],
    "correctIndex": 2,
    "explanationBn": "উভয় রূপই ব্যাকরণসম্মত।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q61",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "Obey the traffic rules.",
    "options": [
      "The traffic rules should be obeyed.",
      "Let the traffic rules be obeyed.",
      "You are instructed to obey the traffic rules.",
      "All of the above are correct."
    ],
    "correctIndex": 3,
    "explanationBn": "ট্রাফিক নিয়মের ক্ষেত্রে উপদেশ, আদেশ ও নিয়ম নির্দেশমূলক সবকটি রূপই মান্য।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q62",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "Post this letter immediately.",
    "options": [
      "Let this letter posted immediately.",
      "Let this letter be posted immediately.",
      "This letter should post immediately.",
      "You are ordered post this letter."
    ],
    "correctIndex": 1,
    "explanationBn": "Imperative এ 'Let this letter be posted immediately' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q63",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "Switch off the lights.",
    "options": [
      "Let the lights switched off.",
      "Let the lights be switched off.",
      "The lights should switch off.",
      "You are requested switch off the lights."
    ],
    "correctIndex": 1,
    "explanationBn": "'Let the lights be switched off' সঠিক।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q64",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "Quinine tastes bitter.",
    "options": [
      "Quinine is bitter when it is tasted.",
      "Quinine is tasted bitter.",
      "Quinine was bitter when tasted.",
      "Bitter quinine is tasted."
    ],
    "correctIndex": 0,
    "explanationBn": "Quasi-Passive এ 'Quinine is bitter when it is tasted' হয়।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q65",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "The book is printing.",
    "options": [
      "The book is being printed.",
      "The book is printed.",
      "The book was printing.",
      "The book has been printed."
    ],
    "correctIndex": 0,
    "explanationBn": "Quasi-Passive Continuous এ 'The book is being printed' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q66",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub2",
    "questionBn": "The fire burned the hut.",
    "options": [
      "The hut is burned by the fire.",
      "The hut was burned by the fire.",
      "The hut was being burned by the fire.",
      "The hut had been burned by the fire."
    ],
    "correctIndex": 1,
    "explanationBn": "Simple Past এ 'was burned' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q67",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "The mason is building the wall.",
    "options": [
      "The wall is built by the mason.",
      "The wall was being built by the mason.",
      "The wall is being built by the mason.",
      "The wall has been built by the mason."
    ],
    "correctIndex": 2,
    "explanationBn": "Present Continuous এ 'is being built' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q68",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "The cat drank all the milk.",
    "options": [
      "All the milk was drunk by the cat.",
      "All the milk is drunk by the cat.",
      "All the milk was drank by the cat.",
      "All the milk had been drunk by the cat."
    ],
    "correctIndex": 0,
    "explanationBn": "'Drink'-এর V3 হলো 'drunk', তাই 'All the milk was drunk by the cat' সঠিক।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q69",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "She has washed all the clothes.",
    "options": [
      "All the clothes have washed by her.",
      "All the clothes have been washed by her.",
      "All the clothes has been washed by her.",
      "All the clothes were washed by her."
    ],
    "correctIndex": 1,
    "explanationBn": "Plural Subject 'All the clothes' এর সাথে 'have been washed' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q70",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "The manager will interview the candidates tomorrow.",
    "options": [
      "The candidates will interviewed by the manager tomorrow.",
      "The candidates will be interviewed by the manager tomorrow.",
      "The candidates are interviewed tomorrow.",
      "The candidates shall interviewed tomorrow."
    ],
    "correctIndex": 1,
    "explanationBn": "Future Simple এ 'will be interviewed' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q71",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "Can you speak French?",
    "options": [
      "Can French spoken by you?",
      "Can French be spoken by you?",
      "Could French be spoken by you?",
      "Is French spoken by you?"
    ],
    "correctIndex": 1,
    "explanationBn": "Modal Interrogative এ 'Can French be spoken by you?' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q72",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "Must we submit the assignment today?",
    "options": [
      "Must the assignment submitted by us today?",
      "Must the assignment be submitted by us today?",
      "Should the assignment submitted today?",
      "Is the assignment submitted today?"
    ],
    "correctIndex": 1,
    "explanationBn": "'Must the assignment be submitted by us today?' সঠিক।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q73",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "The news has surprised everyone.",
    "options": [
      "Everyone has been surprised by the news.",
      "Everyone has been surprised at the news.",
      "Everyone was surprised at the news.",
      "Everyone is surprised at the news."
    ],
    "correctIndex": 1,
    "explanationBn": "Present Perfect Passive-এ 'has been surprised at' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q74",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "His remarks offended the guests.",
    "options": [
      "The guests were offended by his remarks.",
      "The guests were offended at his remarks.",
      "The guests are offended at his remarks.",
      "The guests had been offended by his remarks."
    ],
    "correctIndex": 1,
    "explanationBn": "'Offended at his remarks' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q75",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "The box contains precious gems.",
    "options": [
      "Precious gems are contained by the box.",
      "Precious gems are contained in the box.",
      "Precious gems were contained in the box.",
      "Precious gems are contained with the box."
    ],
    "correctIndex": 1,
    "explanationBn": "'Contained in the box' বসে।",
    "difficulty": "medium",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q76",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "I know her address.",
    "options": [
      "Her address is known by me.",
      "Her address is known to me.",
      "Her address was known to me.",
      "Her address has been known to me."
    ],
    "correctIndex": 1,
    "explanationBn": "'Known to me' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q77",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "The teacher was pleased with his conduct.",
    "options": [
      "His conduct pleased the teacher.",
      "His conduct was pleasing the teacher.",
      "His conduct has pleased the teacher.",
      "His conduct had pleased the teacher."
    ],
    "correctIndex": 0,
    "explanationBn": "Passive থেকে Active রূপান্তরের প্রশ্ন: 'His conduct pleased the teacher' সঠিক।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q78",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "He was elected captain by the team members.",
    "options": [
      "The team members elected him captain.",
      "The team members elect him captain.",
      "The team members were electing him captain.",
      "The team members had elected him captain."
    ],
    "correctIndex": 0,
    "explanationBn": "Passive থেকে Active রূপান্তর: 'The team members elected him captain' সঠিক।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q79",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "Let the letter be posted.",
    "options": [
      "Post the letter.",
      "You should post the letter.",
      "Let post the letter.",
      "Please post the letter."
    ],
    "correctIndex": 0,
    "explanationBn": "Passive থেকে Active Imperative: 'Post the letter' সঠিক।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q80",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "The poor should not be looked down upon.",
    "options": [
      "Do not look down upon the poor.",
      "You should not look down upon the poor.",
      "Never look down upon the poor.",
      "Both A and B are correct."
    ],
    "correctIndex": 3,
    "explanationBn": "উভয় Active রূপই যথার্থ।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q81",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "You are requested to maintain silence in the library.",
    "options": [
      "Maintain silence in the library, please.",
      "Please maintain silence in the library.",
      "Keep silence in the library.",
      "Both A and B are correct."
    ],
    "correctIndex": 3,
    "explanationBn": "'Please' যুক্ত অনুরোধসূচক রূপ।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q82",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "By whom was this magnificent palace built?",
    "options": [
      "Who built this magnificent palace?",
      "Who has built this magnificent palace?",
      "Who was building this magnificent palace?",
      "Whom did build this palace?"
    ],
    "correctIndex": 0,
    "explanationBn": "Passive থেকে Active Interrogative: 'Who built this magnificent palace?' সঠিক।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q83",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "Who gave you permission to enter the hall?",
    "options": [
      "By whom were you given permission to enter the hall?",
      "By whom was permission given to you to enter the hall?",
      "Both A and B are correct.",
      "Who was given you permission?"
    ],
    "correctIndex": 2,
    "explanationBn": "উভয় Object ভিত্তিক Passive রূপই সঠিক।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q84",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "They laughed at the funny clown.",
    "options": [
      "The funny clown was laughed at by them.",
      "The funny clown was laughed by them.",
      "The funny clown is laughed at by them.",
      "The funny clown was laughed with by them."
    ],
    "correctIndex": 0,
    "explanationBn": "Prepositional Verb 'laughed at' Passive এ অবিভাজ্য থাকে: 'was laughed at by them' সঠিক।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q85",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "She looked after the orphan child with great care.",
    "options": [
      "The orphan child was looked after by her with great care.",
      "The orphan child was looked by her with great care.",
      "The orphan child is looked after by her.",
      "The orphan child had been looked after by her."
    ],
    "correctIndex": 0,
    "explanationBn": "Phrasal verb 'looked after' অক্ষত থেকে 'was looked after by her' হয়।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q86",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "The police ran after the thief.",
    "options": [
      "The thief was run after by the police.",
      "The thief is run after by the police.",
      "The thief was ran after by the police.",
      "The thief had run after by the police."
    ],
    "correctIndex": 0,
    "explanationBn": "'Run'-এর V3 হলো 'run', তাই 'The thief was run after by the police' সঠিক।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q87",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "We must listen to the advice of our teachers.",
    "options": [
      "The advice of our teachers must listened to by us.",
      "The advice of our teachers must be listened to by us.",
      "The advice of our teachers should listened by us.",
      "The advice of our teachers must be listened by us."
    ],
    "correctIndex": 1,
    "explanationBn": "'Must be listened to by us' সঠিক।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q88",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "He objected to my proposal.",
    "options": [
      "My proposal was objected to by him.",
      "My proposal was objected by him.",
      "My proposal is objected to by him.",
      "My proposal had been objected to by him."
    ],
    "correctIndex": 0,
    "explanationBn": "'Was objected to by him' সঠিক।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q89",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "They agreed to all our terms and conditions.",
    "options": [
      "All our terms and conditions were agreed to by them.",
      "All our terms and conditions were agreed by them.",
      "All our terms and conditions are agreed to by them.",
      "All our terms and conditions had agreed by them."
    ],
    "correctIndex": 0,
    "explanationBn": "'Were agreed to by them' সঠিক।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q90",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "The committee is looking into the financial irregularities.",
    "options": [
      "The financial irregularities are looked into by the committee.",
      "The financial irregularities are being looked into by the committee.",
      "The financial irregularities were being looked into by the committee.",
      "The financial irregularities have been looked into."
    ],
    "correctIndex": 1,
    "explanationBn": "'Are being looked into by the committee' সঠিক।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q91",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "They brought up the child in a pious atmosphere.",
    "options": [
      "The child is brought up by them in a pious atmosphere.",
      "The child was brought up by them in a pious atmosphere.",
      "The child was being brought up by them.",
      "The child had been brought up by them."
    ],
    "correctIndex": 1,
    "explanationBn": "'Was brought up by them' সঠিক।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q92",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "The government has called off the strike negotiations.",
    "options": [
      "The strike negotiations have called off by the government.",
      "The strike negotiations have been called off by the government.",
      "The strike negotiations has been called off by the government.",
      "The strike negotiations were called off by the government."
    ],
    "correctIndex": 1,
    "explanationBn": "Plural Subject 'negotiations' এর সাথে 'have been called off' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q93",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "He gave away all his wealth to the charitable trust.",
    "options": [
      "All his wealth was given away by him to the charitable trust.",
      "All his wealth were given away by him to the charitable trust.",
      "All his wealth has been given away by him.",
      "All his wealth is given away by him."
    ],
    "correctIndex": 0,
    "explanationBn": "Uncountable Noun 'wealth' এর সাথে Singular 'was given away' বসে।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q94",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "Nobody can mend this broken clock.",
    "options": [
      "This broken clock cannot mended by anybody.",
      "This broken clock cannot be mended by anybody.",
      "This broken clock can be mended by nobody.",
      "Both B and C are acceptable."
    ],
    "correctIndex": 3,
    "explanationBn": "নেতিবাচক কর্তা রূপান্তরের উভয় রূপই ব্যাকরণগতভাবে মান্য।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q95",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "None could solve the riddle.",
    "options": [
      "The riddle could not be solved by anyone.",
      "The riddle could be solved by none.",
      "Both A and B are correct.",
      "The riddle was not solved."
    ],
    "correctIndex": 2,
    "explanationBn": "উভয় নেতিবাচক Passive রূপই সঠিক।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q96",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "Everyone loved the brave soldier.",
    "options": [
      "The brave soldier was loved by everyone.",
      "The brave soldier is loved by everyone.",
      "The brave soldier was being loved by everyone.",
      "The brave soldier had been loved by everyone."
    ],
    "correctIndex": 0,
    "explanationBn": "'The brave soldier was loved by everyone' সঠিক।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q97",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "The doctor advised the patient complete bed rest.",
    "options": [
      "The patient was advised complete bed rest by the doctor.",
      "Complete bed rest was advised to the patient by the doctor.",
      "Both A and B are correct.",
      "The patient is advised complete bed rest."
    ],
    "correctIndex": 2,
    "explanationBn": "উভয় গঠনই ব্যাকরণগতভাবে ত্রুটিহীন।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q98",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "She promised him a handsome reward.",
    "options": [
      "He was promised a handsome reward by her.",
      "A handsome reward was promised to him by her.",
      "Both A and B are correct.",
      "He is promised a handsome reward."
    ],
    "correctIndex": 2,
    "explanationBn": "উভয় রূপই সঠিক।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q99",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "He ordered the soldiers to march forward.",
    "options": [
      "The soldiers were ordered to march forward by him.",
      "The soldiers are ordered to march forward by him.",
      "The soldiers had been ordered march forward.",
      "The soldiers were ordered march forward."
    ],
    "correctIndex": 0,
    "explanationBn": "'The soldiers were ordered to march forward by him' সঠিক।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  },
  {
    "id": "vol3_ch4_q100",
    "subjectId": "english",
    "chapterId": "eng_ch4",
    "subTopicId": "eng_ch4_sub3",
    "questionBn": "We heard him sing a melodious song.",
    "options": [
      "He was heard sing a melodious song by us.",
      "He was heard to sing a melodious song by us.",
      "A melodious song was heard sung by him.",
      "He is heard to sing a melodious song."
    ],
    "correctIndex": 1,
    "explanationBn": "Active-এ Bare Infinitive থাকলেও Passive Voice-এ 'to' যুক্ত হয়ে 'was heard to sing' হয়।",
    "difficulty": "hard",
    "tags": [
      "English Grammar",
      "Voice Change",
      "Volume 3"
    ]
  }
];
