import { StudyChapter, Question } from "../../types";

export const ENGLISH_CH12_STUDY: StudyChapter = {
  id: "eng_ch12",
  subjectId: "english",
  chapterNumber: 12,
  titleBn: "Sentence Rearrangement & Para Jumbles (বাক্য ও অনুচ্ছেদ পুনর্গঠন - PQRS)",
  titleEn: "Sentence Rearrangement & Para Jumbles - SVO Logic, Mandatory Pairs, Chronological Sequencing & Elimination Tactics",
  estimatedMinutes: 35,
  importantNotesCount: 30,
  summary: "এলোমেলো বাক্য বা বাক্যাংশ সুবিন্যস্ত করার নিখুঁত পদ্ধতি (PQRS / 1-6 Sequence)। মৌলিক ব্যাকরণিক কাঠামো (Subject + Verb + Object + Adverb/Time/Place), বাধ্যতামূলক জোড় (Mandatory Pairs: Relative Pronouns, Conjunctions, Articles + Nouns), ক্রমানুসারিক যুক্তি (Chronological Logic: কারণ ও ফলাফল, ঘটনাপ্রবাহ), সর্বনাম-বিশেষ্য সংযোগ (Noun-Pronoun Precedence) এবং দ্রুত অপশন এলিমিনেশনের কৌশল।",
  subTopics: [
    {
      id: "eng_ch12_sub1",
      chapterId: "eng_ch12",
      subjectId: "english",
      titleBn: "Basic Sentence Structure & Subject-Verb Binding",
      titleEn: "SVO Syntax, Auxiliary + Main Verb Binding & Prepositional Phrases",
      orderIndex: 1,
      summaryBn: "Subject (Noun/Pronoun) দিয়ে বাক্য শুরু; Auxiliary Verb (is/have/was) এর সাথে মূল Verb (V3/V-ing) জোড়া বাঁধা; Object ও Complement নির্ধারণ; শেষে Adverbial Phrase (Place + Time) স্থাপন।",
      keyConcepts: ["S + V + O + Modifier", "Auxiliary + Main Verb pair", "Subject identification", "Preposition + Noun link"]
    },
    {
      id: "eng_ch12_sub2",
      chapterId: "eng_ch12",
      subjectId: "english",
      titleBn: "Mandatory Pairs & Grammar Connectors",
      titleEn: "Relative Pronouns (who, which, that), Conjunctions (neither..nor, not only..but also)",
      orderIndex: 2,
      summaryBn: "Mandatory Pair শনাক্তকরণ: Not only-এর পর But also; Neither-এর পর Nor; Both-এর পর And; Relative Pronoun তার পূর্বপদ (Antecedent) Noun-এর ঠিক পরে বসে।",
      keyConcepts: ["Not only... but also", "Neither... nor", "Antecedent + Relative Pronoun", "Infinitive (to + V1) pair"]
    },
    {
      id: "eng_ch12_sub3",
      chapterId: "eng_ch12",
      subjectId: "english",
      titleBn: "Paragraph Logic & Elimination Strategy",
      titleEn: "Opening Sentence, Noun before Pronoun, Cause & Effect & Option Elimination",
      orderIndex: 3,
      summaryBn: "প্যারাগ্রাফের স্বাধীন সূচনাকারী বাক্য (Independent Sentence) নির্বাচন; সর্বনামের (He/They/It) পূর্বে সর্বদা Noun বসে; অপশনগুলোর প্রথম অক্ষর পর্যবেক্ষণ করে দ্রুত এলিমিনেশন।",
      keyConcepts: ["Independent Opening Sentence", "Noun precedes Pronoun", "Cause precedes Effect", "First-letter Option Elimination"]
    }
  ],
  content: {
    introduction: "Sentence Rearrangement (PQRS) পরীক্ষায় পরীক্ষার্থীদের ইংরেজি বাক্যের গঠনরীতি, যুক্তিপ্রবাহ এবং ব্যাকরণিক সংযোগ বোঝার ক্ষমতা পরিমাপ করে। আন্দাজে মিলানোর পরিবর্তে বৈজ্ঞানিক কৌশল (Mandatory Pairs, Pronoun Linkage, SVO Structure) প্রয়োগ করলে ১০০% নির্ভুল সমাধান সম্ভব।",
    sections: [
      {
        heading: "১. মৌলিক গঠন ও বাক্য শুরুর নিয়ম (SVO & Opening Unit)",
        body: [
          "• একটি অর্থপূর্ণ ইংরেজি বাক্যের স্বাভাবিক কাঠামো হলো: Subject + Verb + Object/Complement + Adverbial (Place + Time)।",
          "• বাক্য কখনোই সাধারণত Conjunction (and, but, so), Relative Pronoun (who, which) বা Pronoun (he, she, it) দিয়ে শুরু হয় না, যদি সেখানে কোনো স্বতন্ত্র Noun বা প্রারম্ভিক বিষয় উপস্থিত থাকে।",
          "• প্রথমে খুঁজে বের করুন কোন অংশটি বাক্যের মূল কর্তা বা Subject নির্দেশ করছে।",
          "• Auxiliary Verb (is/are/was/were/have/has) থাকলে তার ঠিক পরেই মূল Verb যুক্ত অংশটি জোড়া বাঁধুন (e.g., 'is' + 'reading a book')।"
        ]
      },
      {
        heading: "২. ম্যান্ডেটরি পেয়ার্স (Mandatory Pairs) শনাক্তকরণের জাদু",
        body: [
          "• Correlative Conjunctions: 'Not only' থাকলে তার জোড়া 'but also'; 'Either' থাকলে 'or'; 'Between' থাকলে 'and'। এই অংশ দুটিকে একটি ব্লক বা জোড়া হিসেবে রাখুন।",
          "• Prepositional Link: কোনো অংশের শেষে Preposition (in, on, of, for, with) থাকলে পরবর্তী অংশটি নিশ্চিতভাবেই কোনো Noun বা Noun Phrase দিয়ে শুরু হবে।",
          "• Infinitive Link: 'to' দিয়ে একটি অংশ শেষ হলে পরবর্তী অংশটি নিশ্চিতভাবে Verb-এর Base Form (V1) দিয়ে শুরু হবে (e.g., 'decided to' + 'attend the meeting')।",
          "• Relative Pronoun Link: 'who / which / that' অংশটি তার পূর্বে থাকা উপযুক্ত ব্যক্তি বা বস্তুবাচক Noun-এর ঠিক পরপরই বসবে।"
        ]
      },
      {
        heading: "৩. অপশন এলিমিনেশন ও যুক্তিপ্রবাহ (Elimination Strategy)",
        body: [
          "• চারটি অপশনের প্রারম্ভিক বর্ণ (Starting letters) দেখুন। যদি দুটি অপশন 'Q' দিয়ে এবং দুটি 'R' দিয়ে শুরু হয়, তবে প্রথমে নিশ্চিত করুন বাক্যটি 'Q' দিয়ে শুরু হবে নাকি 'R' দিয়ে। এর মাধ্যমে সাথে সাথেই ৫০% অপশন বাদ দেওয়া যায়।",
          "• Noun-Pronoun ক্রমান্বয়: কোনো ব্যক্তির নাম (যেমন: Rabindranath Tagore) থাকলে সেই বাক্যটি সর্বনাম (He / His) যুক্ত বাক্যের পূর্বে বসবে।",
          "• কারণ ও ফলাফল: সবসময় কার্যকারণ আগে ঘটে এবং তার পরিণতি বা ফলাফল (As a result, Therefore, Consequently) পরে আসে।"
        ]
      }
    ],
    examTips: [
      "প্রথমে Subject শনাক্ত করুন, তারপর Auxiliary Verb ও Main Verb-কে জোড়া লাগান।",
      "চারটি অপশনের শুরুর বর্ণ লক্ষ্য করে দ্রুত দুটি ভুল অপশন বাতিল করুন।",
      "To-এর পর সর্বদা Verb-এর মূল রূপ (V1) বসে Infinitive তৈরি করে।",
      "সাজানোর পর একবার পুরো বাক্যটি সাবলীলভাবে রিডিং পড়ে অর্থ পরীক্ষা করে নিন।"
    ],
    quickRevisionPoints: [
      "Subject + Verb + Object + Place + Time.",
      "Auxiliary + Main Verb = Inseparable pair.",
      "Noun comes before Pronoun (Name ➔ He/She).",
      "Not only + But also; Between + And.",
      "To + V1 (Infinitive linkage).",
      "Eliminate options by checking the first letter."
    ],
    oneLiners: [
      "ইংরেজি বাক্য সাজানোর প্রধানতম সূত্র হলো Subject + Verb + Object + Extension (SVO)।",
      "এলোমেলো অংশে প্রথমে Noun বা মূল Subject খুঁজে বের করে বাক্য শুরু করতে হয়।",
      "Auxiliary Verb (is, are, was, have) এর সাথে মূল Verb (V-ing বা V3) অবিচ্ছেদ্য জোড়া গঠন করে।",
      "সময় ও স্থান নির্দেশক শব্দগুচ্ছ (যেমন: in the morning, yesterday) সাধারণত বাক্যের শেষে বসে।",
      "প্রশ্নবোধক বাক্যে Wh-word অথবা Auxiliary Verb সবার প্রথমে বসে।",
      "To-এর পর সর্বদা Verb-এর মূল রূপ (V1) বসে Infinitive গঠন করে।",
      "Mandatory Pairs (যেমন Neither..nor, Not only..but also) দ্রুত সঠিক অপশন শনাক্ত করে।",
      "চারটি অপশনের প্রথম অক্ষর (Starting letter) পরীক্ষা করে দ্রুত ৫০% অপশন বাদ দেওয়া যায়।",
      "সাজানোর পর পুরো বাক্যটি মনে মনে পড়ে স্বাভাবিক অর্থ প্রকাশ করছে কিনা যাচাই করতে হয়।",
      "সর্বনাম (Pronoun)-এর পূর্বে সর্বদা সংশ্লিষ্ট বিশেষ্য (Noun) বসে।",
      "Relative Pronoun (who, which, that) তার নির্দেশিত পূর্বপদের ঠিক পরেই বসে।",
      "Preposition দিয়ে শেষ হওয়া অংশের পর নিশ্চিতভাবেই কোনো Noun/Noun Phrase যুক্ত অংশ বসে।",
      "কারণসূচক বাক্য পরিণামসূচক বাক্যের (As a result, Therefore) পূর্বে বসে।",
      "Active Voice-এ Agent বা কর্তা ক্রিয়া সম্পাদনের পূর্বে বসে।",
      "Adjective সর্বদা তার বিশেষিত Noun-এর পূর্বে অবস্থান নেয়।",
      "Conditional Clause (If/Had) সচরাচর ফলাফল ক্লজের পূর্বে বসে।",
      "Direct Speech-এ Reporting Verb অংশটি Inverted Comma-র আগে বা পরে সুনির্দিষ্ট স্থানে বসে।",
      "ক্রমবাচক শব্দ (First, Then, After that, Finally) অনুচ্ছেদের পর্যায়ক্রম নির্দেশ করে।"
    ],
    saqs: [
      {
        id: "eng_ch12_saq1",
        questionBn: "Sentence Rearrangement (PQRS)-এ 'Mandatory Pair' বলতে কী বোঝায় এবং এর গুরুত্ব কী?",
        answerBn: "Mandatory Pair হলো বাক্যের এমন দুটি সুনির্দিষ্ট অংশ যা ব্যাকরণগত নিয়ম বা অর্থের কারণে একে অপরের ঠিক পর পর বসতে বাধ্য (যেমন: Not only-এর পর But also, Auxiliary Verb-এর পর Main Verb, কিংবা 'to'-এর পর V1)। অপশনগুলোতে এই দুটি বর্ণের জোড়া (যেমন: PQ বা RS) একসাথে আছে কিনা তা দেখে দ্রুত সঠিক উত্তর চিহ্নিত করা যায়।"
      },
      {
        id: "eng_ch12_saq2",
        questionBn: "(P) to the market / (Q) went / (R) Ram / (S) yesterday — বাক্যটি সাজানোর ব্যাকরণিক ধাপগুলো লিখুন।",
        answerBn: "১. Subject শনাক্তকরণ: Ram (R)\n২. Main Verb: went (Q)\n৩. Adverb of Place: to the market (P)\n৪. Adverb of Time: yesterday (S)\nসঠিক সুশৃঙ্খল ক্রম: R-Q-P-S (RQPS) ➔ 'Ram went to the market yesterday'।"
      },
      {
        id: "eng_ch12_saq3",
        questionBn: "প্যারা জাম্বল (Para Jumbles)-এ Noun-Pronoun নিয়মটি কীভাবে কাজ করে?",
        answerBn: "যেকোনো বর্ণনামূলক অনুচ্ছেদে কোনো চরিত্র, স্থান বা ধারণার প্রারম্ভিক উপস্থাপনায় প্রথমে মূল Noun (যেমন: 'Albert Einstein was a great physicist') বসে; এরপরের বাক্যগুলোতে তার পরিবর্তে Pronoun (যেমন: 'He developed the theory of relativity') ব্যবহৃত হয়। সুতরাং Noun-যুক্ত বাক্য সর্বদা Pronoun-যুক্ত বাক্যের পূর্বে আসবে।"
      },
      {
        id: "eng_ch12_saq4",
        questionBn: "Infinitive এবং Prepositional Link কীভাবে বাক্য সাজাতে সহায়তা করে?",
        answerBn: "• Infinitive Link: যদি কোনো খণ্ডাংশের শেষ শব্দটি 'to' হয়, তবে পরবর্তী খণ্ডাংশের প্রথম শব্দটি নিশ্চিতভাবেই একটি Verb-এর Base Form (V1) হবে।\n• Prepositional Link: যদি কোনো অংশের শেষে 'of', 'in', 'on', 'with' ইত্যাদি থাকে, তবে পরবর্তী অংশের শুরুতে অবশ্যই একটি Noun, Pronoun বা Gerund থাকবে।"
      },
      {
        id: "eng_ch12_saq5",
        questionBn: "অপশন এলিমিনেশন (Option Elimination) কৌশলের মাধ্যমে কীভাবে সময় বাঁচানো যায়?",
        answerBn: "প্রদত্ত চারটি অপশনের শুরুর বর্ণ লক্ষ্য করে প্রথমে বাক্যটির সঠিক প্রারম্ভিক খণ্ডাংশ (Opening segment) নিশ্চিত করতে হয়। যদি দেখা যায় বাক্যটি নিশ্চিতভাবে 'S' দিয়ে শুরু হচ্ছে, তবে 'P', 'Q' বা 'R' দিয়ে শুরু হওয়া বাকি তিনটি অপশন না পড়েই সরাসরি বাদ দিয়ে কয়েক সেকেন্ডে উত্তর নির্ধারণ করা যায়।"
      },
      {
        id: "eng_ch12_saq6",
        questionBn: "Relative Pronoun (who, which, that)-এর ক্ষেত্রে সংযোগের নিয়ম কী?",
        answerBn: "Relative Pronoun সর্বদা তার পূর্বপদ বা Antecedent (যে Noun বা Pronoun-কে সে ব্যাখ্যা করছে)-এর ঠিক পরেই বসে। যেমন: 'The boy (P) / who won the medal (Q) / is my brother (R)'—এখানে 'The boy'-এর ঠিক পরেই 'who won...' বসতে হবে (PQ mandatory pair)।"
      },
      {
        id: "eng_ch12_saq7",
        questionBn: "কার্যকারণ ও কালানুক্রমিক (Chronological) বাক্য কীভাবে বিন্যস্ত করতে হয়?",
        answerBn: "ঘটনা ঘটার স্বাভাবিক কালানুক্রম অনুযায়ী অতীত থেকে বর্তমানের দিকে অথবা সমস্যা/কারণ (Cause) প্রথমে এবং তার ফলাফল/সমাধান (Effect/Conclusion) পরে বিন্যস্ত করতে হয়। সংযোগকারী শব্দ (First, Later, Finally, Therefore) এক্ষেত্রে নির্দেশক হিসেবে কাজ করে।"
      },
      {
        id: "eng_ch12_saq8",
        questionBn: "প্রশ্নবোধক বাক্য সাজানোর সাধারণ গঠনরীতি কী?",
        answerBn: "প্রশ্নবোধক বাক্যের গঠনরীতি: (Wh-word) + Auxiliary Verb + Subject + Main Verb + Object/Extension + ? যেমন: 'Why (P) / did you (Q) / break (R) / the glass (S)?' ➔ সঠিক ক্রম: PQRS।"
      }
    ]
  }
};

export const ENGLISH_CH12_QUESTIONS: Question[] = [
  {
    id: "vol3_ch12_q1",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub1",
    questionBn: "Arrange the parts to form a meaningful sentence:\n(P) playing / (Q) the boys / (R) are / (S) football",
    options: ["PQRS", "QRPS", "QSPR", "SQRP"],
    correctIndex: 1,
    explanationBn: "সঠিক ক্রম: The boys (Q) are (R) playing (P) football (S) ➔ QRPS।",
    difficulty: "easy",
    tags: ["Jumbled Sentences", "Ordering"]
  },
  {
    id: "vol3_ch12_q2",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub1",
    questionBn: "Arrange the parts to form a meaningful sentence:\n(P) a book / (Q) reading / (R) he / (S) is",
    options: ["RQSP", "RSQP", "PQRS", "SQPR"],
    correctIndex: 1,
    explanationBn: "সঠিক ক্রম: He (R) is (S) reading (Q) a book (P) ➔ RSQP।",
    difficulty: "easy",
    tags: ["Jumbled Sentences", "Ordering"]
  },
  {
    id: "vol3_ch12_q3",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub1",
    questionBn: "Arrange the parts to form a meaningful sentence:\n(P) to school / (Q) goes / (R) everyday / (S) She",
    options: ["SQPR", "PQRS", "SRQP", "QPSR"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: She (S) goes (Q) to school (P) everyday (R) ➔ SQPR।",
    difficulty: "easy",
    tags: ["Jumbled Sentences", "Ordering"]
  },
  {
    id: "vol3_ch12_q4",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub1",
    questionBn: "Arrange the parts to form a meaningful sentence:\n(P) in the east / (Q) the sun / (R) rises / (S) every morning",
    options: ["QRPS", "PQRS", "QPRS", "RQPS"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: The sun (Q) rises (R) in the east (P) every morning (S) ➔ QRPS।",
    difficulty: "easy",
    tags: ["Jumbled Sentences", "Ordering"]
  },
  {
    id: "vol3_ch12_q5",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub2",
    questionBn: "Arrange the parts to form a meaningful sentence:\n(P) not only / (Q) a doctor / (R) he is / (S) but also a singer",
    options: ["RPQS", "PQRS", "RQPS", "SRPQ"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: He is (R) not only (P) a doctor (Q) but also a singer (S) ➔ RPQS।",
    difficulty: "easy",
    tags: ["Jumbled Sentences", "Ordering"]
  },
  {
    id: "vol3_ch12_q6",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub2",
    questionBn: "Arrange the parts to form a meaningful sentence:\n(P) who won the first prize / (Q) the girl / (R) my sister / (S) is",
    options: ["QPSR", "PQRS", "RQPS", "SPQR"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: The girl (Q) who won the first prize (P) is (S) my sister (R) ➔ QPSR।",
    difficulty: "easy",
    tags: ["Jumbled Sentences", "Ordering"]
  },
  {
    id: "vol3_ch12_q7",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub1",
    questionBn: "Arrange the parts to form a meaningful sentence:\n(P) hard / (Q) to pass / (R) worked / (S) he",
    options: ["SRPQ", "SRQP", "PQRS", "RQPS"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: He (S) worked (R) hard (P) to pass (Q) ➔ SRPQ।",
    difficulty: "easy",
    tags: ["Jumbled Sentences", "Ordering"]
  },
  {
    id: "vol3_ch12_q8",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub2",
    questionBn: "Arrange the parts to form a meaningful sentence:\n(P) the match / (Q) had finished / (R) before / (S) it began to rain",
    options: ["PQRS", "PQSR", "QPSR", "RQPS"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: The match (P) had finished (Q) before (R) it began to rain (S) ➔ PQRS।",
    difficulty: "easy",
    tags: ["Jumbled Sentences", "Ordering"]
  },
  {
    id: "vol3_ch12_q9",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub1",
    questionBn: "Arrange the parts to form a meaningful sentence:\n(P) in Kolkata / (Q) lives / (R) with his parents / (S) Amit",
    options: ["SQPR", "SQRP", "PQRS", "RQPS"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: Amit (S) lives (Q) in Kolkata (P) with his parents (R) ➔ SQPR।",
    difficulty: "easy",
    tags: ["Jumbled Sentences", "Ordering"]
  },
  {
    id: "vol3_ch12_q10",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub2",
    questionBn: "Arrange the parts to form a meaningful sentence:\n(P) than / (Q) no sooner did he arrive / (R) the bell rang / (S) at the station",
    options: ["QSPR", "PQRS", "QPSR", "RQPS"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: No sooner did he arrive (Q) at the station (S) than (P) the bell rang (R) ➔ QSPR।",
    difficulty: "medium",
    tags: ["Jumbled Sentences", "Ordering"]
  },
  {
    id: "vol3_ch12_q11",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub1",
    questionBn: "Arrange the parts to form a meaningful interrogative sentence:\n(P) your homework / (Q) have you / (R) completed / (S) today",
    options: ["QRPS", "PQRS", "QPRS", "RQPS"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: Have you (Q) completed (R) your homework (P) today (S)? ➔ QRPS।",
    difficulty: "easy",
    tags: ["Jumbled Sentences", "Ordering"]
  },
  {
    id: "vol3_ch12_q12",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub3",
    questionBn: "Arrange the parts to form a coherent sentence:\n(P) due to heavy rainfall / (Q) was cancelled / (R) the cricket match / (S) yesterday",
    options: ["RQPS", "PQRS", "RQSP", "SPQR"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: The cricket match (R) was cancelled (Q) due to heavy rainfall (P) yesterday (S) ➔ RQPS।",
    difficulty: "medium",
    tags: ["Jumbled Sentences", "Ordering"]
  },
  {
    id: "vol3_ch12_q13",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub2",
    questionBn: "Arrange the parts to form a meaningful sentence:\n(P) to solve / (Q) this difficult puzzle / (R) it is impossible / (S) for him",
    options: ["RSPQ", "PQRS", "RQPS", "SQPR"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: It is impossible (R) for him (S) to solve (P) this difficult puzzle (Q) ➔ RSPQ।",
    difficulty: "medium",
    tags: ["Jumbled Sentences", "Ordering"]
  },
  {
    id: "vol3_ch12_q14",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub1",
    questionBn: "Arrange the parts:\n(P) honesty / (Q) the best policy / (R) is / (S) always",
    options: ["PRQS", "PQRS", "QPRS", "RQPS"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: Honesty (P) is (R) the best policy (Q) always (S) ➔ PRQS / Honesty is always the best policy।",
    difficulty: "easy",
    tags: ["Jumbled Sentences", "Ordering"]
  },
  {
    id: "vol3_ch12_q15",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub3",
    questionBn: "Arrange the parts to form a meaningful sentence:\n(P) environmental pollution / (Q) one of the greatest / (R) is / (S) threats to mankind",
    options: ["PRQS", "PQRS", "RQPS", "SPQR"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: Environmental pollution (P) is (R) one of the greatest (Q) threats to mankind (S) ➔ PRQS।",
    difficulty: "medium",
    tags: ["Jumbled Sentences", "Ordering"]
  },
  {
    id: "vol3_ch12_q16",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub2",
    questionBn: "Arrange the parts:\n(P) neither the teacher / (Q) present / (R) nor the students / (S) were",
    options: ["PRSQ", "PQRS", "QSPR", "RSPQ"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: Neither the teacher (P) nor the students (R) were (S) present (Q) ➔ PRSQ।",
    difficulty: "easy",
    tags: ["Jumbled Sentences", "Neither nor"]
  },
  {
    id: "vol3_ch12_q17",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub1",
    questionBn: "Arrange the parts:\n(P) a beautiful Taj Mahal / (Q) in Agra / (R) Shah Jahan / (S) built",
    options: ["RSPQ", "PQRS", "RQPS", "SRQP"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: Shah Jahan (R) built (S) a beautiful Taj Mahal (P) in Agra (Q) ➔ RSPQ।",
    difficulty: "easy",
    tags: ["Jumbled Sentences", "Ordering"]
  },
  {
    id: "vol3_ch12_q18",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub3",
    questionBn: "Arrange the parts to form a coherent sentence:\n(P) without regular exercise / (Q) maintaining good health / (R) is difficult / (S) and balanced diet",
    options: ["QSRP", "QRPS", "PQRS", "RQPS"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: Maintaining good health (Q) is difficult (R) without regular exercise (P) and balanced diet (S) ➔ QRPS / QSRP।",
    difficulty: "medium",
    tags: ["Jumbled Sentences", "Ordering"]
  },
  {
    id: "vol3_ch12_q19",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub2",
    questionBn: "Arrange the parts:\n(P) that he had won / (Q) he informed us / (R) the first prize / (S) with great joy",
    options: ["QSPR", "QPRS", "PQRS", "RQPS"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: He informed us (Q) with great joy (S) that he had won (P) the first prize (R) ➔ QSPR।",
    difficulty: "medium",
    tags: ["Jumbled Sentences", "Ordering"]
  },
  {
    id: "vol3_ch12_q20",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub1",
    questionBn: "Arrange the parts:\n(P) barking dogs / (Q) bite / (R) seldom / (S) at strangers",
    options: ["PRQS", "PQRS", "QPRS", "RQPS"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: Barking dogs (P) seldom (R) bite (Q) at strangers (S) ➔ PRQS।",
    difficulty: "easy",
    tags: ["Jumbled Sentences", "Ordering"]
  },
  {
    id: "vol3_ch12_q21",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub1",
    questionBn: "Arrange the parts to form a question:\n(P) where do you / (Q) this evening / (R) intend to go / (S) with your friends",
    options: ["PRSQ", "PQRS", "QPRS", "RQPS"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: Where do you (P) intend to go (R) with your friends (S) this evening (Q)? ➔ PRSQ।",
    difficulty: "easy",
    tags: ["Jumbled Sentences", "Question"]
  },
  {
    id: "vol3_ch12_q22",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub2",
    questionBn: "Arrange the parts:\n(P) so that he might / (Q) he ran fast / (R) the last bus / (S) catch",
    options: ["QPSR", "PQRS", "RQPS", "QPRS"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: He ran fast (Q) so that he might (P) catch (S) the last bus (R) ➔ QPSR।",
    difficulty: "easy",
    tags: ["Jumbled Sentences", "So that"]
  },
  {
    id: "vol3_ch12_q23",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub3",
    questionBn: "Arrange the parts:\n(P) the government decided / (Q) during the lockdown / (R) to provide free food / (S) to the needy",
    options: ["PRSQ", "PQRS", "RQPS", "SPQR"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: The government decided (P) to provide free food (R) to the needy (S) during the lockdown (Q) ➔ PRSQ।",
    difficulty: "medium",
    tags: ["Jumbled Sentences", "Ordering"]
  },
  {
    id: "vol3_ch12_q24",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub1",
    questionBn: "Arrange the parts:\n(P) water / (Q) without / (R) no living creature / (S) can survive",
    options: ["RSQP", "PQRS", "RQPS", "SRQP"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: No living creature (R) can survive (S) without (Q) water (P) ➔ RSQP।",
    difficulty: "easy",
    tags: ["Jumbled Sentences", "Ordering"]
  },
  {
    id: "vol3_ch12_q25",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub2",
    questionBn: "Arrange the parts:\n(P) because he was / (Q) he could not attend / (R) suffering from fever / (S) the meeting",
    options: ["QSPR", "PQRS", "RQPS", "SQPR"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: He could not attend (Q) the meeting (S) because he was (P) suffering from fever (R) ➔ QSPR।",
    difficulty: "easy",
    tags: ["Jumbled Sentences", "Ordering"]
  },
  {
    id: "vol3_ch12_q26",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub1",
    questionBn: "Arrange the parts:\n(P) an apple / (Q) keeps / (R) a day / (S) the doctor away",
    options: ["PRQS", "PQRS", "QPRS", "RQPS"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: An apple (P) a day (R) keeps (Q) the doctor away (S) ➔ PRQS।",
    difficulty: "easy",
    tags: ["Jumbled Sentences", "Proverb"]
  },
  {
    id: "vol3_ch12_q27",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub3",
    questionBn: "Arrange the parts:\n(P) for sustainable development / (Q) planting more trees / (R) is essential / (S) in our locality",
    options: ["QRPS", "PQRS", "RQPS", "SPQR"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: Planting more trees (Q) is essential (R) for sustainable development (P) in our locality (S) ➔ QRPS।",
    difficulty: "medium",
    tags: ["Jumbled Sentences", "Ordering"]
  },
  {
    id: "vol3_ch12_q28",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub2",
    questionBn: "Arrange the parts:\n(P) which was lost / (Q) found the purse / (R) in the train / (S) the passenger",
    options: ["SQPR", "PQRS", "RQPS", "SPQR"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: The passenger (S) found the purse (Q) which was lost (P) in the train (R) ➔ SQPR।",
    difficulty: "medium",
    tags: ["Jumbled Sentences", "Relative clause"]
  },
  {
    id: "vol3_ch12_q29",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub1",
    questionBn: "Arrange the parts:\n(P) on time / (Q) reached / (R) the flight / (S) its destination",
    options: ["RQSP", "PQRS", "QPRS", "SRQP"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: The flight (R) reached (Q) its destination (S) on time (P) ➔ RQSP।",
    difficulty: "easy",
    tags: ["Jumbled Sentences", "Ordering"]
  },
  {
    id: "vol3_ch12_q30",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub3",
    questionBn: "Arrange the parts:\n(P) in spite of / (Q) he remained / (R) cheerful and optimistic / (S) numerous failures",
    options: ["PSQR", "PQRS", "RQPS", "SQPR"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: In spite of (P) numerous failures (S) he remained (Q) cheerful and optimistic (R) ➔ PSQR।",
    difficulty: "medium",
    tags: ["Jumbled Sentences", "In spite of"]
  },
  {
    id: "vol3_ch12_q31",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub1",
    questionBn: "Arrange the parts:\n(P) the brave soldier / (Q) for his country / (R) fought / (S) valiantly",
    options: ["PRSQ", "PQRS", "RQPS", "SPQR"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: The brave soldier (P) fought (R) valiantly (S) for his country (Q) ➔ PRSQ।",
    difficulty: "easy",
    tags: ["Jumbled Sentences", "Ordering"]
  },
  {
    id: "vol3_ch12_q32",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub2",
    questionBn: "Arrange the parts:\n(P) both English / (Q) he can speak / (R) fluently / (S) and French",
    options: ["QPSR", "PQRS", "RQPS", "SRPQ"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: He can speak (Q) both English (P) and French (S) fluently (R) ➔ QPSR।",
    difficulty: "easy",
    tags: ["Jumbled Sentences", "Both and"]
  },
  {
    id: "vol3_ch12_q33",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub3",
    questionBn: "Arrange the parts:\n(P) time and tide / (Q) for no man / (R) wait / (S) in this world",
    options: ["PRQS", "PQRS", "RQPS", "SPQR"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: Time and tide (P) wait (R) for no man (Q) in this world (S) ➔ PRQS।",
    difficulty: "easy",
    tags: ["Jumbled Sentences", "Proverb"]
  },
  {
    id: "vol3_ch12_q34",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub2",
    questionBn: "Arrange the parts:\n(P) although he was tired / (Q) he continued / (R) to work late / (S) at night",
    options: ["PQRS", "PQSR", "RQPS", "SQPR"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: Although he was tired (P) he continued (Q) to work late (R) at night (S) ➔ PQRS।",
    difficulty: "medium",
    tags: ["Jumbled Sentences", "Although"]
  },
  {
    id: "vol3_ch12_q35",
    subjectId: "english",
    chapterId: "eng_ch12",
    subTopicId: "eng_ch12_sub3",
    questionBn: "Arrange the parts:\n(P) the key / (Q) to success / (R) hard work is / (S) in every examination",
    options: ["RPQS", "PQRS", "RQPS", "SPQR"],
    correctIndex: 0,
    explanationBn: "সঠিক ক্রম: Hard work is (R) the key (P) to success (Q) in every examination (S) ➔ RPQS।",
    difficulty: "easy",
    tags: ["Jumbled Sentences", "Ordering"]
  }
];
