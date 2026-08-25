import { StudyChapter, Question } from "../../types";

export const ENGLISH_CH9_STUDY: StudyChapter = {
  id: "eng_ch9",
  subjectId: "english",
  chapterNumber: 9,
  titleBn: "Correct Spelling (সঠিক বানান পরীক্ষা - Spelling Rules & Tricky Words)",
  titleEn: "Correct Spelling - Spelling Rules ('i before e except after c'), Double Consonants & Tricky Exam Words",
  estimatedMinutes: 35,
  importantNotesCount: 30,
  summary: "পরীক্ষায় আসা ১০০টি সবচেয়ে বেশি বিভ্রান্তিকর ইংরেজি বানান ও বানান গঠনের বৈজ্ঞানিক নিয়ম। 'I before E except after C' নিয়ম (Receive, Deceive বনাম Believe, Relieve), দ্বৈত ব্যঞ্জনবর্ণ (Double Consonants: Accommodation, Committee, Millennium, Embarrass, Harass, Occurrence, Questionnaire), উহ্য ও যুক্ত স্বরবর্ণ (Separate, Vacuum, Privilege, Lieutenant, Bureaucracy, Maintenance, Pronunciation) এবং সাইলেন্ট লেটারসের প্রয়োগ।",
  subTopics: [
    {
      id: "eng_ch9_sub1",
      chapterId: "eng_ch9",
      subjectId: "english",
      titleBn: "The 'IE' vs 'EI' Rule & Silent Letters",
      titleEn: "I before E except after C (Receive/Believe) & Silent Letters",
      orderIndex: 1,
      summaryBn: "'C'-এর পর সর্বদা 'ei' (Receive, Ceiling, Deceive, Conceive) এবং অন্যান্য ক্ষেত্রে 'ie' (Believe, Achieve, Chief, Grief)। ব্যতিক্রম: Height, Weigh, Weird, Seize।",
      keyConcepts: ["Receive (c + ei)", "Believe (l + ie)", "Ceiling (c + ei)", "Achieve (h + ie)", "Exceptions: Seize, Weird, Height"]
    },
    {
      id: "eng_ch9_sub2",
      chapterId: "eng_ch9",
      subjectId: "english",
      titleBn: "Double Consonants Confusion",
      titleEn: "Double Letters (Accommodation, Committee, Embarrass, Millennium)",
      orderIndex: 2,
      summaryBn: "Accommodation (cc, mm), Committee (mm, tt, ee), Embarrass (rr, ss), Harass (এক r, ss), Millennium (ll, nn), Questionnaire (nn), Occurrence (cc, rr)।",
      keyConcepts: ["Accommodation (2 c, 2 m)", "Committee (2 m, 2 t, 2 e)", "Embarrass (2 r, 2 s)", "Harass (1 r, 2 s)"]
    },
    {
      id: "eng_ch9_sub3",
      chapterId: "eng_ch9",
      subjectId: "english",
      titleBn: "Tricky Vowels & Exam Favorites",
      titleEn: "Separate, Vacuum, Privilege, Lieutenant, Bureaucracy & Maintenance",
      orderIndex: 3,
      summaryBn: "Separate (par, not per), Vacuum (এক c, দুই u), Privilege (no d), Lieutenant (L-I-E-U-T-E-N-A-N-T), Bureaucracy (B-U-R-E-A-U-C-R-A-C-Y), Pronunciation (nun, not noun)।",
      keyConcepts: ["Separate (S-E-P-A-R-A-T-E)", "Vacuum (V-A-C-U-U-M)", "Privilege (P-R-I-V-I-L-E-G-E)", "Lieutenant (L-i-e-u-t-e-n-a-n-t)"]
    }
  ],
  content: {
    introduction: "সঠিক বানান নির্ণয় (Spelling Test) প্রায় প্রতিটি প্রতিযোগিতামূলক পরীক্ষায় নিশ্চিত নম্বর তোলার একটি গুরুত্বপূর্ণ ক্ষেত্র। উচ্চারণ ও অক্ষরের সামান্য পরিবর্তনের কারণে পরীক্ষার্থীরা যাতে বিভ্রান্ত না হয়, সেজন্য নির্দিষ্ট বৈজ্ঞানিক নিয়ম ও বহুল পরীক্ষিত শব্দের তালিকা আয়ত্ত করা আবশ্যক।",
    sections: [
      {
        heading: "১. 'i before e except after c' নিয়ম ও ব্যতিক্রম",
        body: [
          "• মূল নিয়ম: যখন শব্দের উচ্চারণ দীর্ঘ 'ঈ' (ee sound) হয়, তখন 'c' বর্ণের পর সর্বদা 'ei' বসে; কিন্তু অন্য যেকোনো বর্ণের পর 'ie' বসে।",
          "  - 'c'-এর পরে 'ei': Receive, Deceive, Conceive, Perceive, Ceiling, Receipt.",
          "  - অন্যান্য বর্ণের পরে 'ie': Believe, Relieve, Achieve, Chief, Brief, Yield, Field, Grief.",
          "• প্রধান ব্যতিক্রমসমূহ: Seize, Weird, Height, Weigh, Neighbor, Foreign, Sovereign, Leisure."
        ]
      },
      {
        heading: "২. ডাবল লেটারস (Double Consonants) সম্পর্কিত বিভ্রান্তি",
        body: [
          "• Accommodation: A-C-C-O-M-M-O-D-A-T-I-O-N (এতে দুটি 'c' এবং দুটি 'm' রয়েছে)।",
          "• Committee: C-O-M-M-I-T-T-E-E (এতে দুটি 'm', দুটি 't' এবং দুটি 'e' রয়েছে)।",
          "• Millennium: M-I-L-L-E-N-N-I-U-M (এতে দুটি 'l' এবং দুটি 'n' রয়েছে)।",
          "• Embarrass: E-M-B-A-R-R-A-S-S (এতে দুটি 'r' এবং দুটি 's' রয়েছে)।",
          "• Harass: H-A-R-A-S-S (লক্ষ্য করুন: এতে একটি 'r' এবং দুটি 's' থাকে)।",
          "• Questionnaire: Q-U-E-S-T-I-O-N-N-A-I-R-E (এতে ডাবল 'n' রয়েছে)।",
          "• Occurrence: O-C-C-U-R-R-E-N-C-E (এতে দুটি 'c' এবং দুটি 'r' রয়েছে)।",
          "• Possess: P-O-S-S-E-S-S (এতে দুই জোড়া 's' রয়েছে)।"
        ]
      },
      {
        heading: "৩. স্বরবর্ণের পরিবর্তন ও শীর্ষ বিতর্কিত শব্দসমূহ",
        body: [
          "• Separate: S-E-P-A-R-A-T-E ('par' থাকবে, 'per' কখনোই নয়)।",
          "• Vacuum: V-A-C-U-U-M (এতে একটি 'c' এবং দুটি 'u' থাকে, 'vaccum' ভুল)।",
          "• Privilege: P-R-I-V-I-L-E-G-E (এতে কোনো 'd' নেই; 'priviledge' ভুল)।",
          "• Lieutenant: L-I-E-U-T-E-N-A-N-T (উচ্চারণ লেফটেনেন্ট হলেও বানান 'Lie-u-ten-ant')।",
          "• Bureaucracy: B-U-R-E-A-U-C-R-A-C-Y (Bureau + cracy)।",
          "• Pronunciation: P-R-O-N-U-N-C-I-A-T-I-O-N (Pronounce-এ 'noun' থাকলেও Noun রূপে 'nun' হয়)।",
          "• Maintenance: M-A-I-N-T-E-N-A-N-C-E (Maintain থেকে হলেও 'tain' বদলে 'ten' হয়)।",
          "• Truly: T-R-U-L-Y (True-এর 'e' লোপ পায়; 'truely' ভুল)।",
          "• Forty: F-O-R-T-Y (Four-এ 'u' থাকলেও Forty-তে 'u' থাকে না)।"
        ]
      }
    ],
    examTips: [
      "Separate বানানে 'par' থাকে, 'per' নয় (S-E-P-A-R-A-T-E)।",
      "Vacuum বানানে একটি 'c' এবং দুটি 'u' থাকে (V-A-C-U-U-M)।",
      "Pronunciation বানানে 'noun' এর পরিবর্তে 'nun' বসে।",
      "Truly বানানে কোনো 'e' থাকে না (T-R-U-L-Y)।",
      "Forty বানানে কোনো 'u' থাকে না (F-O-R-T-Y)।"
    ],
    quickRevisionPoints: [
      "Accommodation (cc, mm); Committee (mm, tt, ee).",
      "Vacuum (c, uu); Embarrass (rr, ss); Harass (r, ss).",
      "Separate (par, not per); Privilege (no 'd').",
      "Receive ('c' + ei); Believe ('l' + ie).",
      "Truly (no 'e'); Forty (no 'u'); Questionnaire (nn)."
    ],
    oneLiners: [
      "'c'-এর পর 'ei' বসে (Receive, Ceiling) কিন্তু অন্যান্য অক্ষরে 'ie' বসে (Believe, Achieve)।",
      "Accommodation বানানে দুটি 'c' এবং দুটি 'm' থাকে (A-C-C-O-M-M-O-D-A-T-I-O-N)।",
      "Committee বানানে দুটি 'm', দুটি 't' এবং দুটি 'e' থাকে (C-O-M-M-I-T-T-E-E)।",
      "Separate শব্দের বানানে 'par' থাকে, 'per' নয় (S-E-P-A-R-A-T-E)।",
      "Vacuum বানানে একটি 'c' এবং দুটি 'u' থাকে (V-A-C-U-U-M)।",
      "Embarrass বানানে দুটি 'r' এবং দুটি 's' থাকে (E-M-B-A-R-R-A-S-S)।",
      "Harass বানানে মাত্র একটি 'r' কিন্তু দুটি 's' থাকে (H-A-R-A-S-S)।",
      "Privilege বানানে কোনো 'd' বর্ণটি থাকে না (P-R-I-V-I-L-E-G-E)।",
      "Pronunciation বানানে 'noun' এর পরিবর্তে 'nun' বসে (P-R-O-N-U-N-C-I-A-T-I-O-N)।",
      "Truly শব্দের সঠিক বানানে কোনো 'e' থাকে না (T-R-U-L-Y)।",
      "Questionnaire শব্দের বানানে ডাবল 'n' (Q-U-E-S-T-I-O-N-N-A-I-R-E) থাকে।",
      "Millennium বানানে দুটি 'l' এবং দুটি 'n' থাকে (M-I-L-L-E-N-N-I-U-M)।",
      "Lieutenant শব্দের সঠিক বানান হলো L-I-E-U-T-E-N-A-N-T।",
      "Bureaucracy শব্দের সঠিক বানান হলো B-U-R-E-A-U-C-R-A-C-Y।",
      "Maintenance বানানে 'tain'-এর বদলে 'ten' বসে (M-A-I-N-T-E-N-A-N-C-E)।",
      "Forty (চল্লিশ) বানানে কোনো 'u' থাকে না (F-O-R-T-Y)।",
      "Grammar বানানে 'mar' থাকে, 'mer' নয় (G-R-A-M-M-A-R)।",
      "Diarrhoea / Diarrhea বানানে 'rr' এবং 'h' থাকে।"
    ],
    saqs: [
      {
        id: "eng_ch9_saq1",
        questionBn: "'ei' এবং 'ie' ব্যবহারের মূল নিয়মটি কী এবং এর ব্যতিক্রম উদাহরণ দিন।",
        answerBn: "নিয়ম: শব্দের উচ্চারণ যখন দীর্ঘ 'ঈ' (ee sound) হয়, তখন 'c' বর্ণের পর সর্বদা 'ei' বসে (যেমন: Receive, Ceiling, Deceive); কিন্তু 'c' ব্যতীত অন্যান্য বর্ণের পর 'ie' বসে (যেমন: Believe, Chief, Yield)।\nব্যতিক্রম: Seize, Weird, Height, Weigh।"
      },
      {
        id: "eng_ch9_saq2",
        questionBn: "'Accommodation' এবং 'Committee' বানানের অক্ষর বিন্যাস বিশ্লেষণ করুন।",
        answerBn: "• Accommodation: A-C-C-O-M-M-O-D-A-T-I-O-N (এতে দুটি 'c' এবং দুটি 'm' রয়েছে)।\n• Committee: C-O-M-M-I-T-T-E-E (এতে দুটি 'm', দুটি 't' এবং দুটি 'e' রয়েছে)।"
      },
      {
        id: "eng_ch9_saq3",
        questionBn: "পরীক্ষার্থীদের ভুল হওয়া ৩টি সাধারণ বানানের সঠিক রূপ লিখুন (Separate, Vacuum, Privilege)।",
        answerBn: "১. ভুল: Seperate ➔ সঠিক: Separate (S-E-P-A-R-A-T-E)\n২. ভুল: Vaccum ➔ সঠিক: Vacuum (V-A-C-U-U-M)\n৩. ভুল: Priviledge ➔ সঠিক: Privilege (P-R-I-V-I-L-E-G-E)"
      },
      {
        id: "eng_ch9_saq4",
        questionBn: "'Embarrass' এবং 'Harass' বানানের মধ্যে অক্ষরের সংখ্যার পার্থক্য কী?",
        answerBn: "'Embarrass' বানানে দুটি 'r' এবং দুটি 's' থাকে (E-M-B-A-R-R-A-S-S); কিন্তু 'Harass' বানানে শুধুমাত্র একটি 'r' এবং দুটি 's' থাকে (H-A-R-A-S-S)।"
      },
      {
        id: "eng_ch9_saq5",
        questionBn: "'Lieutenant' এবং 'Bureaucracy' বানানের সঠিক রূপ ও ট্রিক লিখুন।",
        answerBn: "• Lieutenant: L-I-E-U-T-E-N-A-N-T (মনে রাখার ট্রিক: Lie + u + ten + ant বা মিথ্যা + তুমি + দশ + পিঁপড়া)।\n• Bureaucracy: B-U-R-E-A-U-C-R-A-C-Y (Bureau + cracy)।"
      },
      {
        id: "eng_ch9_saq6",
        questionBn: "'Pronounce' এবং 'Maintain' থেকে তৈরি হওয়া Noun-এর বানানে কী পরিবর্তন ঘটে?",
        answerBn: "• 'Pronounce'-এ 'noun' থাকা সত্ত্বেও Noun রূপে 'u' বাদ গিয়ে 'Pronunciation' (P-R-O-N-U-N-C-I-A-T-I-O-N) হয়।\n• 'Maintain'-এ 'tain' থাকলেও Noun রূপে তা 'Maintenance' (M-A-I-N-T-E-N-A-N-C-E) হয়।"
      },
      {
        id: "eng_ch9_saq7",
        questionBn: "'Truly' এবং 'Forty' বানানে সাধারণ ভুলগুলি কী কী?",
        answerBn: "• 'True'-এর শেষে 'e' থাকলেও Adverb 'Truly' (T-R-U-L-Y) বানানে 'e' সম্পূর্ণ বাদ যায় (Truely ভুল)।\n• 'Four' বা 'Fourteen'-এ 'u' থাকলেও 'Forty' (F-O-R-T-Y) বানানে 'u' থাকে না (Fourty ভুল)।"
      },
      {
        id: "eng_ch9_saq8",
        questionBn: "'Millennium' এবং 'Questionnaire' বানানের ডাবল অক্ষরের নিয়ম কী?",
        answerBn: "• Millennium: M-I-L-L-E-N-N-I-U-M (এতে দুটি 'l' এবং দুটি 'n' থাকে)।\n• Questionnaire: Q-U-E-S-T-I-O-N-N-A-I-R-E (Question শব্দের সাথে অতিরিক্ত একটি 'n' যুক্ত হয়ে 'nn' হয়)।"
      }
    ]
  }
};

export const ENGLISH_CH9_QUESTIONS: Question[] = [
  {
    id: "vol3_ch9_q1",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub2",
    questionBn: "Choose the correctly spelled word:",
    options: ["Accomodation", "Acommodation", "Accommodation", "Acomodation"],
    correctIndex: 2,
    explanationBn: "Accommodation-এ ডাবল 'c' ও ডাবল 'm' থাকে (A-c-c-o-m-m-o-d-a-t-i-o-n)।",
    difficulty: "easy",
    tags: ["Spelling", "Accommodation"]
  },
  {
    id: "vol3_ch9_q2",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub2",
    questionBn: "Choose the correctly spelled word:",
    options: ["Commitee", "Committee", "Comittee", "Comitee"],
    correctIndex: 1,
    explanationBn: "Committee-তে ডাবল 'm', ডাবল 't' এবং ডাবল 'e' থাকে (C-o-m-m-i-t-t-e-e)।",
    difficulty: "easy",
    tags: ["Spelling", "Committee"]
  },
  {
    id: "vol3_ch9_q3",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub3",
    questionBn: "Choose the correctly spelled word:",
    options: ["Seperate", "Separate", "Seperete", "Separite"],
    correctIndex: 1,
    explanationBn: "Separate-এ 'par' থাকে, 'per' নয় (S-e-p-a-r-a-t-e)।",
    difficulty: "easy",
    tags: ["Spelling", "Separate"]
  },
  {
    id: "vol3_ch9_q4",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub3",
    questionBn: "Choose the correctly spelled word:",
    options: ["Vaccum", "Vacuum", "Vacume", "Vaquum"],
    correctIndex: 1,
    explanationBn: "Vacuum-এ একটি 'c' এবং দুটি 'u' থাকে (V-a-c-u-u-m)।",
    difficulty: "easy",
    tags: ["Spelling", "Vacuum"]
  },
  {
    id: "vol3_ch9_q5",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub2",
    questionBn: "Choose the correctly spelled word:",
    options: ["Embarass", "Embarrass", "Embaras", "Emberrass"],
    correctIndex: 1,
    explanationBn: "Embarrass-এ দুটি 'r' এবং দুটি 's' থাকে (E-m-b-a-r-r-a-s-s)।",
    difficulty: "easy",
    tags: ["Spelling", "Embarrass"]
  },
  {
    id: "vol3_ch9_q6",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub2",
    questionBn: "Choose the correctly spelled word:",
    options: ["Harrass", "Harass", "Haras", "Harras"],
    correctIndex: 1,
    explanationBn: "Harass-এ একটিমাত্র 'r' কিন্তু দুটি 's' থাকে (H-a-r-a-s-s)।",
    difficulty: "easy",
    tags: ["Spelling", "Harass"]
  },
  {
    id: "vol3_ch9_q7",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub3",
    questionBn: "Choose the correctly spelled word:",
    options: ["Priviledge", "Privilege", "Prevelege", "Privilage"],
    correctIndex: 1,
    explanationBn: "Privilege-এ কোনো 'd' বর্ণ নেই (P-r-i-v-i-l-e-g-e)।",
    difficulty: "easy",
    tags: ["Spelling", "Privilege"]
  },
  {
    id: "vol3_ch9_q8",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub1",
    questionBn: "Choose the correctly spelled word:",
    options: ["Recieve", "Receive", "Receve", "Receeve"],
    correctIndex: 1,
    explanationBn: "'c'-এর পর 'ei' বসে (R-e-c-e-i-v-e)।",
    difficulty: "easy",
    tags: ["Spelling", "Receive"]
  },
  {
    id: "vol3_ch9_q9",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub1",
    questionBn: "Choose the correctly spelled word:",
    options: ["Beleive", "Believe", "Beleeve", "Belive"],
    correctIndex: 1,
    explanationBn: "'l'-এর পর 'ie' বসে (B-e-l-i-e-v-e)।",
    difficulty: "easy",
    tags: ["Spelling", "Believe"]
  },
  {
    id: "vol3_ch9_q10",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub3",
    questionBn: "Choose the correctly spelled word:",
    options: ["Lieutenant", "Leutenant", "Lieutenaunt", "Lientenant"],
    correctIndex: 0,
    explanationBn: "Lieutenant-এর সঠিক রূপ হলো L-i-e-u-t-e-n-a-n-t।",
    difficulty: "medium",
    tags: ["Spelling", "Lieutenant"]
  },
  {
    id: "vol3_ch9_q11",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub3",
    questionBn: "Choose the correctly spelled word:",
    options: ["Bureaucracy", "Beurocracy", "Bureaucrasy", "Burocracy"],
    correctIndex: 0,
    explanationBn: "Bureaucracy-এর সঠিক রূপ B-u-r-e-a-u-c-r-a-c-y।",
    difficulty: "medium",
    tags: ["Spelling", "Bureaucracy"]
  },
  {
    id: "vol3_ch9_q12",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub3",
    questionBn: "Choose the correctly spelled word:",
    options: ["Pronounciation", "Pronunciation", "Prononciation", "Pronunsation"],
    correctIndex: 1,
    explanationBn: "Pronunciation-এ 'noun'-এর বদলে 'nun' বসে (P-r-o-n-u-n-c-i-a-t-i-o-n)।",
    difficulty: "easy",
    tags: ["Spelling", "Pronunciation"]
  },
  {
    id: "vol3_ch9_q13",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub3",
    questionBn: "Choose the correctly spelled word:",
    options: ["Maintainance", "Maintenance", "Maintenence", "Maintenence"],
    correctIndex: 1,
    explanationBn: "Maintenance-এ 'tain'-এর বদলে 'ten' বসে (M-a-i-n-t-e-n-a-n-c-e)।",
    difficulty: "easy",
    tags: ["Spelling", "Maintenance"]
  },
  {
    id: "vol3_ch9_q14",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub3",
    questionBn: "Choose the correctly spelled word:",
    options: ["Truely", "Truly", "Trueley", "Trulie"],
    correctIndex: 1,
    explanationBn: "Truly-তে কোনো 'e' বর্ণ থাকে না (T-r-u-l-y)।",
    difficulty: "easy",
    tags: ["Spelling", "Truly"]
  },
  {
    id: "vol3_ch9_q15",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub3",
    questionBn: "Choose the correctly spelled word for forty (40):",
    options: ["Fourty", "Forty", "Fortie", "Fourtey"],
    correctIndex: 1,
    explanationBn: "Forty-তে কোনো 'u' থাকে না (F-o-r-t-y)।",
    difficulty: "easy",
    tags: ["Spelling", "Forty"]
  },
  {
    id: "vol3_ch9_q16",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub2",
    questionBn: "Choose the correctly spelled word:",
    options: ["Questionaire", "Questionnaire", "Questionnair", "Questionair"],
    correctIndex: 1,
    explanationBn: "Questionnaire-এ ডাবল 'n' থাকে (Q-u-e-s-t-i-o-n-n-a-i-r-e)।",
    difficulty: "easy",
    tags: ["Spelling", "Questionnaire"]
  },
  {
    id: "vol3_ch9_q17",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub2",
    questionBn: "Choose the correctly spelled word:",
    options: ["Millenium", "Millennium", "Millennum", "Milenium"],
    correctIndex: 1,
    explanationBn: "Millennium-এ ডাবল 'l' এবং ডাবল 'n' থাকে (M-i-l-l-e-n-n-i-u-m)।",
    difficulty: "medium",
    tags: ["Spelling", "Millennium"]
  },
  {
    id: "vol3_ch9_q18",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub2",
    questionBn: "Choose the correctly spelled word:",
    options: ["Occurence", "Occurrence", "Ocurrence", "Occurance"],
    correctIndex: 1,
    explanationBn: "Occurrence-এ ডাবল 'c' এবং ডাবল 'r' থাকে (O-c-c-u-r-r-e-n-c-e)।",
    difficulty: "easy",
    tags: ["Spelling", "Occurrence"]
  },
  {
    id: "vol3_ch9_q19",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub3",
    questionBn: "Choose the correctly spelled word:",
    options: ["Grammer", "Grammar", "Gramer", "Grammor"],
    correctIndex: 1,
    explanationBn: "Grammar-এ শেষে 'mar' থাকে, 'mer' নয় (G-r-a-m-m-a-r)।",
    difficulty: "easy",
    tags: ["Spelling", "Grammar"]
  },
  {
    id: "vol3_ch9_q20",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub3",
    questionBn: "Choose the correctly spelled word:",
    options: ["Diarrhoea", "Diarhea", "Diarrhea", "Both A and C are correct"],
    correctIndex: 3,
    explanationBn: "British ইংরেজি 'Diarrhoea' এবং American ইংরেজি 'Diarrhea' উভয় বানানই ব্যাকরণসিদ্ধ।",
    difficulty: "medium",
    tags: ["Spelling", "Diarrhoea"]
  },
  {
    id: "vol3_ch9_q21",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub1",
    questionBn: "Choose the correctly spelled word:",
    options: ["Deceive", "Decieve", "Deceve", "Deceeve"],
    correctIndex: 0,
    explanationBn: "'c'-এর পর 'ei' বসে (D-e-c-e-i-v-e)।",
    difficulty: "easy",
    tags: ["Spelling", "Deceive"]
  },
  {
    id: "vol3_ch9_q22",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub1",
    questionBn: "Choose the correctly spelled word (Exception to rule):",
    options: ["Sieze", "Seize", "Seeze", "Sieze"],
    correctIndex: 1,
    explanationBn: "'Seize' (দখল করা/জব্দ করা) হলো 'ie/ei' নিয়মের প্রধান ব্যতিক্রম (S-e-i-z-e)।",
    difficulty: "easy",
    tags: ["Spelling", "Seize"]
  },
  {
    id: "vol3_ch9_q23",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub2",
    questionBn: "Choose the correctly spelled word:",
    options: ["Posess", "Possess", "Poses", "Posses"],
    correctIndex: 1,
    explanationBn: "Possess-এ দুই জোড়া 's' থাকে (P-o-s-s-e-s-s)।",
    difficulty: "easy",
    tags: ["Spelling", "Possess"]
  },
  {
    id: "vol3_ch9_q24",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub3",
    questionBn: "Choose the correctly spelled word:",
    options: ["Foreign", "Foriegn", "Forein", "Forren"],
    correctIndex: 0,
    explanationBn: "Foreign-এর সঠিক রূপ F-o-r-e-i-g-n।",
    difficulty: "easy",
    tags: ["Spelling", "Foreign"]
  },
  {
    id: "vol3_ch9_q25",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub3",
    questionBn: "Choose the correctly spelled word:",
    options: ["Sovereign", "Soveriegn", "Soverign", "Soveran"],
    correctIndex: 0,
    explanationBn: "Sovereign-এর সঠিক বানান S-o-v-e-r-e-i-g-n (সার্বভৌম)।",
    difficulty: "medium",
    tags: ["Spelling", "Sovereign"]
  },
  {
    id: "vol3_ch9_q26",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub3",
    questionBn: "Choose the correctly spelled word:",
    options: ["Bouquet", "Boquet", "Bouquett", "Bouquey"],
    correctIndex: 0,
    explanationBn: "Bouquet (ফুলের তোড়া)-এর সঠিক বানান B-o-u-q-u-e-t।",
    difficulty: "easy",
    tags: ["Spelling", "Bouquet"]
  },
  {
    id: "vol3_ch9_q27",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub3",
    questionBn: "Choose the correctly spelled word:",
    options: ["Restaurant", "Resturant", "Restraunt", "Restarant"],
    correctIndex: 0,
    explanationBn: "Restaurant-এর সঠিক বানান R-e-s-t-a-u-r-a-n-t।",
    difficulty: "easy",
    tags: ["Spelling", "Restaurant"]
  },
  {
    id: "vol3_ch9_q28",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub2",
    questionBn: "Choose the correctly spelled word:",
    options: ["Mischievous", "Mischevious", "Mischevous", "Mischivous"],
    correctIndex: 0,
    explanationBn: "Mischievous (দুষ্টু/অনর্থকারী)-এর সঠিক রূপ M-i-s-c-h-i-e-v-o-u-s।",
    difficulty: "medium",
    tags: ["Spelling", "Mischievous"]
  },
  {
    id: "vol3_ch9_q29",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub3",
    questionBn: "Choose the correctly spelled word:",
    options: ["Cigarette", "Cigarrette", "Cigarete", "Cigaret"],
    correctIndex: 0,
    explanationBn: "Cigarette-এ একটি 'r' ও ডাবল 't' থাকে (C-i-g-a-r-e-t-t-e)।",
    difficulty: "easy",
    tags: ["Spelling", "Cigarette"]
  },
  {
    id: "vol3_ch9_q30",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub2",
    questionBn: "Choose the correctly spelled word:",
    options: ["Parallel", "Paralel", "Parrallel", "Parralel"],
    correctIndex: 0,
    explanationBn: "Parallel (সমান্তরাল)-এ ডাবল 'l' প্রথমভাগে থাকে (P-a-r-a-l-l-e-l)।",
    difficulty: "easy",
    tags: ["Spelling", "Parallel"]
  },
  {
    id: "vol3_ch9_q31",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub3",
    questionBn: "Choose the correctly spelled word:",
    options: ["Gaurantee", "Guarantee", "Garanty", "Garantie"],
    correctIndex: 1,
    explanationBn: "Guarantee-এর সঠিক বানান G-u-a-r-a-n-t-e-e।",
    difficulty: "easy",
    tags: ["Spelling", "Guarantee"]
  },
  {
    id: "vol3_ch9_q32",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub3",
    questionBn: "Choose the correctly spelled word:",
    options: ["Hierarchy", "Heirarchy", "Hierarcy", "Heirarcy"],
    correctIndex: 0,
    explanationBn: "Hierarchy (ক্রমোচ্চ শ্রেণিবিভাগ)-এর সঠিক রূপ H-i-e-r-a-r-c-h-y।",
    difficulty: "medium",
    tags: ["Spelling", "Hierarchy"]
  },
  {
    id: "vol3_ch9_q33",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub3",
    questionBn: "Choose the correctly spelled word:",
    options: ["Pneumonia", "Neumonia", "Pneumonea", "Pnemonia"],
    correctIndex: 0,
    explanationBn: "Pneumonia-তে সাইলেন্ট 'P' দিয়ে শুরু হয় (P-n-e-u-m-o-n-i-a)।",
    difficulty: "easy",
    tags: ["Spelling", "Pneumonia"]
  },
  {
    id: "vol3_ch9_q34",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub2",
    questionBn: "Choose the correctly spelled word:",
    options: ["Bizarre", "Bizzare", "Bizare", "Bizare"],
    correctIndex: 0,
    explanationBn: "Bizarre (অদ্ভুত/কদাকার)-এ একটি 'z' এবং দুটি 'r' থাকে (B-i-z-a-r-r-e)।",
    difficulty: "medium",
    tags: ["Spelling", "Bizarre"]
  },
  {
    id: "vol3_ch9_q35",
    subjectId: "english",
    chapterId: "eng_ch9",
    subTopicId: "eng_ch9_sub3",
    questionBn: "Choose the correctly spelled word:",
    options: ["Colleague", "Coleague", "Collegue", "Colleage"],
    correctIndex: 0,
    explanationBn: "Colleague (সহকর্মী)-এর সঠিক বানান C-o-l-l-e-a-g-u-e।",
    difficulty: "easy",
    tags: ["Spelling", "Colleague"]
  }
];
