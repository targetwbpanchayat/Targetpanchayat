import { Question, MockTest, MockTestSection, SubjectId } from "../types";
import { VOL_1_QUESTIONS } from "../data/panchayatVol1";
import { BENGALI_VOL2_QUESTIONS } from "../data/bengaliVol2";
import { ENGLISH_VOL3_QUESTIONS } from "../data/englishVol3";
import { MATH_VOL4_QUESTIONS } from "../data/mathVol4";
import {
  ALL_5000_GK_MCQS,
  HISTORY_1000_MCQS,
  GEOGRAPHY_1000_MCQS,
  POLITY_1000_MCQS,
  SCIENCE_1000_MCQS,
  STATIC_1000_MCQS,
  GK_HISTORY_QUESTIONS,
  GK_GEOGRAPHY_QUESTIONS,
  GK_POLITY_QUESTIONS,
  GK_SCIENCE_QUESTIONS,
  GK_STATIC_QUESTIONS,
  GK_EXPANDED_MCQS,
} from "../data/gkVol5";
import { ALL_VOLUME6_PRACTICE_SETS, VOLUME6_MOCK_TESTS, VOLUME6_PYQ_MOCK_TESTS } from "../data/volume6";
import { MOCK_TESTS } from "../data/mockTests";
import { PYQ_PAPERS } from "../data/pyqData";

/**
 * Strips all set prefixes, PYQ markers, bracket tags, exam/post names, question IDs, and numbering
 * e.g. "[Set B Question 29]", "গ্রাম পঞ্চায়েত সচিব ২০১৮ বাংলা প্রশ্ন ২৭:", "১২. ", "(প্রশ্ন 27)", "Q1:", etc.
 * Ensures ONLY the actual clean question text is returned.
 */
export function cleanQuestionText(text: string): string {
  if (!text || typeof text !== "string") return "";
  let cleaned = text.trim();

  // 1. Remove bracketed / parenthesized leading tags e.g. [Set B Question 29], [Spelling Test Set B 1], [PYQ 2018], [প্রশ্ন সেট ১], [Set 5], [অধ্যায়ভিত্তিক], (১), etc.
  cleaned = cleaned.replace(/^\[[^\]]+\]\s*/g, "");
  cleaned = cleaned.replace(/^\([^\)]+\)\s*/g, "");

  // 2. Remove paper/post/exam prefixes: e.g. 'গ্রাম পঞ্চায়েত সচিব ২০১৮ বাংলা প্রশ্ন ২৭:', 'সহায়ক গণিত ২০১৮ প্রশ্ন 52:', 'GP Secretary 2018 English Question 1:'
  cleaned = cleaned.replace(/^(?:গ্রাম\s*পঞ্চায়েত\s*|সচিব\s*|সহায়ক\s*|কর্মী\s*|এক্সিকিউটিভ\s*|নির্বাহী\s*|নির্মাণ\s*সহায়ক\s*|WB\s*GP\s*|WBP\s*|PSC\s*|GP\s*Secretary\s*|GP\s*Sahayak\s*).*?(?:বাংলা|ইংরেজি|গণিত|English|Math|GK|সাধারণ জ্ঞান)?\s*(?:প্রশ্ন|Question)\s*(?:নং\s*)?[\d০-৯]+\s*[:\-—]\s*/gi, "");

  // 3. Remove topic / chapter hashtag numbers: e.g. 'সিন্ধু ও হরপ্পা সভ্যতা গুরুত্বপূর্ণ তথ্যাবলি #16:', 'ভৌগোলিক তথ্য #42:'
  cleaned = cleaned.replace(/^.*?তথ্যাবলি\s*#[\d০-৯]+\s*[:\-—]\s*/gi, "");
  cleaned = cleaned.replace(/^.*?তথ্য\s*#[\d০-৯]+\s*[:\-—]\s*/gi, "");

  // 4. Remove leading set phrases: e.g. "প্রশ্ন সেট ১:", "সেট ১ -", "Set 5:", "PYQ 2018 -", "অধ্যায় ১:", "Practice Set 3:", "Spelling Test Set B 1:", etc.
  cleaned = cleaned.replace(/^(?:প্রশ্ন\s*সেট|সেট|Set|Question\s*Set|Practice\s*Set|অধ্যায়|PYQ|Previous\s*Year|WBP|PSC|WB\s*GP|Spelling\s*Test\s*Set\s*[a-zA-Z0-9]+|Test\s*Set)\s*[:\-—]?\s*[\d০-৯a-zA-Z\s\(\)]*[:\-—]?\s*/gi, "");

  // 5. Remove leading question identifiers: e.g. "Q. 1:", "Q1:", "প্রশ্ন ১:", "প্রশ্ন 27:", "Question 5:"
  cleaned = cleaned.replace(/^(?:Q\.|Q\s*[\d০-৯]+|Question\s*[\d০-৯]+|প্রশ্ন\s*[\d০-৯]*)\s*[:\-—]?\s*/gi, "");

  // 6. Remove leading numbering e.g. "1. ", "১২. ", "1) ", "২) ", "(1) ", "(১) ", "১/ ", "1/ "
  cleaned = cleaned.replace(/^[\(\[]?[\d০-৯]+[\.\)\-—\:\/\]]\s*/, "");

  // 7. Remove trailing parenthesized question numbers: e.g. '(প্রশ্ন 27)', '(প্রশ্ন ৫১)', '(Q. 12)'
  cleaned = cleaned.replace(/\s*\((?:প্রশ্ন|Q(?:uestion)?)\s*(?:[\d০-৯]+)\)\s*$/gi, "");

  // 8. Remove any leftover leading colon, dash, period or whitespace
  cleaned = cleaned.replace(/^[:\-—\.\/]\s*/, "").trim();

  return cleaned;
}

/**
 * Strips leading option labels like "A. ", "(A) ", "ক) ", "১. ", etc.
 */
export function cleanOptionText(opt: string): string {
  if (!opt || typeof opt !== "string") return "";
  return opt
    .trim()
    .replace(/^[A-Da-d][\.\)\:\-—]\s*/, "")
    .replace(/^\([A-Da-d\d০-৯ক-ঘ]\)\s*/, "")
    .replace(/^[কখগঘ][\.\)\:\-—]\s*/, "")
    .replace(/^[\d০-৯]+[\.\)\:\-—]\s*/, "")
    .trim();
}

/**
 * Validates that a question is high-quality, realistic, complete, and meaningful with 4 clean, distinct options
 */
export function isRealisticQuestion(q: Question): boolean {
  if (!q) return false;
  const txt = cleanQuestionText(q.questionBn || "");
  if (!txt || txt.length < 8) return false;

  // Filter out any incomplete / one-liner placeholder artifacts or broken sentences
  if (
    txt.includes("ওয়ান-লাইনার") ||
    txt.includes("স্পেশাল রিভিশন") ||
    txt.includes("রিভিশন প্রশ্ন") ||
    txt.includes("অধ্যায়ভিত্তিক রিভিশন") ||
    txt.includes("পাবলিক সার্ভিস ও পঞ্চায়েত পরীক্ষার জন্য") ||
    txt.includes("এই অধ্যায়ের পরীক্ষাভিত্তিক প্রাসঙ্গিক তথ্যটি কী?") ||
    txt.includes("গুরুত্বপূর্ণ বিষয় ও প্রাসঙ্গিক তথ্য")
  ) {
    return false;
  }

  // Ensure options array exists and has 4 options
  if (!Array.isArray(q.options) || q.options.length !== 4) return false;

  const cleanedOptions: string[] = [];
  for (const opt of q.options) {
    if (typeof opt !== "string") return false;
    const cleanOpt = cleanOptionText(opt);
    if (!cleanOpt || cleanOpt.length === 0 || cleanOpt.length > 250) return false;
    if (
      cleanOpt.includes("ওয়ান-লাইনার") ||
      cleanOpt.includes("স্পেশাল রিভিশন") ||
      cleanOpt.includes("বিকল্প ক") ||
      cleanOpt.includes("বিকল্প খ") ||
      cleanOpt.includes("বিকল্প গ") ||
      cleanOpt.includes("বিকল্প ঘ") ||
      cleanOpt.includes("Option A") ||
      cleanOpt.includes("Option B") ||
      cleanOpt.includes("পাবলিক সার্ভিস ও পঞ্চায়েত পরীক্ষার জন্য") ||
      cleanOpt.includes("পশ্চিমবঙ্গ পঞ্চায়েত ও সরকারি পরীক্ষার পাঠ্যক্রম অনুযায়ী")
    ) {
      return false;
    }
    cleanedOptions.push(cleanOpt);
  }

  // Ensure options are distinct (case-insensitive for general questions)
  const isPunctuationQ = /punctuat|যতিচিহ্ন|বিরামচিহ্ন/i.test(txt);
  if (isPunctuationQ) {
    const exactSet = new Set(cleanedOptions);
    if (exactSet.size < 4) return false;
  } else {
    const lowerSet = new Set(cleanedOptions.map((o) => o.toLowerCase()));
    if (lowerSet.size < 4) return false;
  }

  // Ensure correctIndex is valid (0 to 3)
  const cIdx = typeof q.correctIndex === "number" ? q.correctIndex : (q as any).correctOptionIndex;
  if (typeof cIdx !== "number" || cIdx < 0 || cIdx > 3) return false;

  // Semantic Checks:
  // 1. Bengali Sandhi Vicched questions must have '+' in options
  if (/(?:সন্ধি বিচ্ছেদ|সন্ধি-বিচ্ছেদ|সন্ধিবিচ্ছেদ করুন)/.test(txt) && !/(?:কোনটি|নিয়ম|সূত্র)/.test(txt)) {
    const hasPlus = cleanedOptions.some((o) => o.includes("+"));
    if (!hasPlus) return false;
  }

  // 2. Math numerical calculation questions must have numbers in options
  if (
    q.subjectId === "math" &&
    /(?:মান কত|কত হবে|কত টাকা|কত কিমি|কত শতাংশ|কত দিন|কত বছর|কত লিটার|অনুপাত কত|লসাগু কত|গসাগু কত|ক্ষেত্রফল কত|পরিসীমা কত|গড় কত)/.test(
      txt
    )
  ) {
    const hasNumbers = cleanedOptions.some((o) => /[\d০-৯\/\.\%\:\+\-\*\=]/.test(o));
    if (!hasNumbers) return false;
  }

  return true;
}

/**
 * Cleans and standardizes a Question object
 */
export function cleanQuestion(q: Question): Question {
  const cleanedTitle = cleanQuestionText(q.questionBn);
  const cleanedOptions = (q.options || []).map((opt) => cleanOptionText(typeof opt === "string" ? opt : String(opt)));

  const validCorrectIdx =
    typeof q.correctIndex === "number" && q.correctIndex >= 0 && q.correctIndex < cleanedOptions.length
      ? q.correctIndex
      : typeof (q as any).correctOptionIndex === "number" &&
        (q as any).correctOptionIndex >= 0 &&
        (q as any).correctOptionIndex < cleanedOptions.length
      ? (q as any).correctOptionIndex
      : 0;

  return {
    ...q,
    questionBn: cleanedTitle,
    options: cleanedOptions,
    optionsBn: cleanedOptions,
    correctIndex: validCorrectIdx,
    correctOptionIndex: validCorrectIdx,
  };
}

// Array shuffler (Fisher-Yates)
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Safely shuffle options of a question while preserving the exact correct answer
export function shuffleQuestionOptions(q: Question): Question {
  const cleaned = cleanQuestion(q);
  const correctIdx = cleaned.correctIndex >= 0 && cleaned.correctIndex < cleaned.options.length ? cleaned.correctIndex : 0;
  
  const pairs = cleaned.options.map((opt, idx) => ({
    opt,
    optBn: cleaned.optionsBn && cleaned.optionsBn[idx] ? cleaned.optionsBn[idx] : opt,
    isCorrect: idx === correctIdx
  }));

  const shuffledPairs = shuffleArray(pairs);
  const newOptions = shuffledPairs.map(p => p.opt);
  const newOptionsBn = shuffledPairs.map(p => p.optBn);
  const newCorrectIndex = Math.max(0, shuffledPairs.findIndex(p => p.isCorrect));

  return {
    ...cleaned,
    id: `${cleaned.id}_dyn_${Math.random().toString(36).slice(2, 7)}`,
    options: newOptions,
    optionsBn: newOptionsBn,
    correctIndex: newCorrectIndex,
    correctOptionIndex: newCorrectIndex,
  };
}

// Shuffle options WITHOUT changing the question ID (for practice mode)
export function shuffleOptionsKeepId(q: Question): Question {
  const cleaned = cleanQuestion(q);
  const correctIdx = cleaned.correctIndex >= 0 && cleaned.correctIndex < cleaned.options.length ? cleaned.correctIndex : 0;

  const pairs = cleaned.options.map((opt, idx) => ({
    opt,
    optBn: cleaned.optionsBn && cleaned.optionsBn[idx] ? cleaned.optionsBn[idx] : opt,
    isCorrect: idx === correctIdx
  }));

  const shuffledPairs = shuffleArray(pairs);
  const newOptions = shuffledPairs.map(p => p.opt);
  const newOptionsBn = shuffledPairs.map(p => p.optBn);
  const newCorrectIndex = Math.max(0, shuffledPairs.findIndex(p => p.isCorrect));

  return {
    ...cleaned,
    options: newOptions,
    optionsBn: newOptionsBn,
    correctIndex: newCorrectIndex,
    correctOptionIndex: newCorrectIndex,
  };
}

// Helper to safely pick N random items with fresh shuffle
export function pickRandom<T>(array: T[], count: number): T[] {
  if (!array || array.length === 0) return [];
  const shuffled = shuffleArray(array);
  if (shuffled.length <= count) return shuffled;
  return shuffled.slice(0, count);
}

// Helper to extract questions from any mock test (handles both .questions and .sections)
function extractMockQuestions(tests: MockTest[]): Question[] {
  const list: Question[] = [];
  for (const t of tests) {
    if (Array.isArray(t.questions) && t.questions.length > 0) {
      list.push(...t.questions);
    }
    if (Array.isArray(t.sections)) {
      for (const s of t.sections) {
        if (Array.isArray((s as any).questions)) {
          list.push(...(s as any).questions);
        }
      }
    }
  }
  return list;
}

// Deduplication and curation helper across multiple sources
export function buildCuratedPool(rawQuestions: Question[]): Question[] {
  const seenSignatures = new Set<string>();
  const curated: Question[] = [];

  for (const q of rawQuestions) {
    if (!isRealisticQuestion(q)) continue;
    const cleaned = cleanQuestion(q);
    const optionsSignature = (cleaned.options || []).join("|").toLowerCase().replace(/\s+/g, "");
    const normalizedKey = (cleaned.questionBn || "").toLowerCase().replace(/\s+/g, " ") + "::" + optionsSignature;
    
    if (seenSignatures.has(normalizedKey)) continue;
    seenSignatures.add(normalizedKey);
    curated.push(cleaned);
  }

  return curated;
}

// Extract all practice sets, mock tests, and pyqs
const ALL_MOCK_QUESTIONS = extractMockQuestions(MOCK_TESTS);
const ALL_PYQ_QUESTIONS = extractMockQuestions(PYQ_PAPERS as any);
const ALL_PRACTICE_QUESTIONS = ALL_VOLUME6_PRACTICE_SETS.flatMap((s) => s.questions);
const ALL_SUPPLEMENTARY_QUESTIONS = [
  ...ALL_PRACTICE_QUESTIONS,
  ...ALL_MOCK_QUESTIONS,
  ...ALL_PYQ_QUESTIONS,
];

// Topic Matchers for Chapter-Specific Speed Quizzes
export function matchBengaliChapterTopic(q: Question, chapterId: string): boolean {
  if (q.chapterId === chapterId) return true;
  const txt = (q.questionBn || "").toLowerCase();
  const tags = (q.tags || []).join(" ").toLowerCase();
  const full = txt + " " + tags;

  switch (chapterId) {
    case "bengali_ch1":
      return /ধ্বনি|বর্ণ|স্বরধ্বনি|ব্যঞ্জনবর্ণ|স্পর্শ বর্ণ|অল্পপ্রাণ|মহাপ্রাণ|অঘোষ|ঘোষ|নাসিক্য|উষ্ম|তাড়নজাত|যুক্তাক্ষর|যুক্তবর্ণ|উচ্চারণ/.test(full);
    case "bengali_ch2":
      return /সন্ধি|সন্ধিবিচ্ছেদ|সন্ধি বিচ্ছেদ|স্বরসন্ধি|ব্যঞ্জনসন্ধি|বিসর্গ সন্ধি|নিপাতনে সিদ্ধ/.test(full);
    case "bengali_ch3":
      return /সমাস|ব্যাসবাক্য|দ্বন্দ্ব|দ্বিগু|তৎপুরুষ|বহুব্রীহি|কর্মধারয়|অব্যয়ীভাব|নিত্য সমাস/.test(full);
    case "bengali_ch4":
      return /কারক|বিভক্তি|অনুসর্গ|কর্তৃকারক|কর্মকারক|করণকারক|সম্প্রদান|অপাদান|অধিকরণ|সম্বন্ধ পদ|সম্বোধন পদ/.test(full);
    case "bengali_ch5":
      return /শব্দভাণ্ডার|তৎসম|তদ্ভব|দেশি|বিদেশি|ফারসি|আরবি|পর্তুগিজ|তুর্কি|অর্ধতৎসম|শব্দতত্ত্ব/.test(full);
    case "bengali_ch6":
      return /উপসর্গ|অনুসর্গ|ধাতু|প্রত্যয়|কৃৎ প্রত্যয়|তদ্ধিত প্রত্যয়|শব্দ গঠন/.test(full);
    case "bengali_ch7":
      return /পদ প্রকরণ|বিশেষ্য|বিশেষণ|সর্বনাম|অব্যয়|ক্রিয়া|পদ পরিবর্তন|লিঙ্গ পরিবর্তন|বচন/.test(full);
    case "bengali_ch8":
      return /এককথায় প্রকাশ|এক কথায় প্রকাশ|এককথায়|বাক্য সংক্ষেপণ/.test(full);
    case "bengali_ch9":
      return /বাচ্য|বাচ্য পরিবর্তন|কর্তৃবাচ্য|কর্মবাচ্য|ভাববাচ্য|কর্মকর্তৃবাচ্য/.test(full);
    case "bengali_ch10":
      return /বাগধারা|বাগবিধি|প্রবাদ|প্রবচন|অর্থ প্রকাশ/.test(full);
    case "bengali_ch11":
      return /বিপরীত|বিপরীতার্থক|বিপরীত শব্দ|antonym/i.test(full);
    case "bengali_ch12":
      return /সমার্থক|প্রতিশব্দ|একই অর্থ|synonym/i.test(full);
    case "bengali_ch13":
      return /সমোচ্চারিত|ভিন্নার্থক শব্দ|জোড় শব্দ|বানানভেদ/.test(full);
    case "bengali_ch14":
      return /শুদ্ধ বানান|বানান শুদ্ধি|বানান অশুদ্ধি|শুদ্ধ রূপ|কোন বানানটি শুদ্ধ|অশুদ্ধ বানান|বানান সংক্রান্ত/.test(full);
    case "bengali_ch15":
      return /সাধু ও চলিত|সাধু ভাষা|চলিত ভাষা|চলিত রূপ|সাধু রূপ|ভাষারীতি/.test(full);
    case "bengali_ch16":
      return /বাক্য পরিবর্তন|সরল বাক্য|জটিল বাক্য|যৌগিক বাক্য|গঠনগত রূপ|অস্ত্যর্থক|নঞর্থক/.test(full);
    case "bengali_ch17":
      return /যতিচিহ্ন|বিরামচিহ্ন|দাঁড়ি|কমা|সেমিকোলন|উদ্ধৃতি/.test(full);
    case "bengali_ch18":
      return /বাংলা সাহিত্যের ইতিহাস|চর্যাপদ|মঙ্গলকাব্য|রবীন্দ্রনাথ|নজরুল|বঙ্কিমচন্দ্র|মাইকেল|শরৎচন্দ্র|তারাশঙ্কর|জীবনানন্দ|বিভূতিভূষণ|উপন্যাস|নাটক|কাব্য|লেখক|সাহিত্যিক|সাহিত্য/.test(full);
    case "bengali_ch19":
      return /অনুধাবন|বোধপরীক্ষণ|অনুচ্ছেদ|প্যারাগ্রাফ/.test(full);
    default:
      return false;
  }
}

export function matchEnglishChapterTopic(q: Question, chapterId: string): boolean {
  if (q.chapterId === chapterId) return true;
  const txt = (q.questionBn || "").toLowerCase() + " " + (q.questionEn || "").toLowerCase();
  const tags = (q.tags || []).join(" ").toLowerCase();
  const full = txt + " " + tags;

  switch (chapterId) {
    case "eng_ch1":
      return /article|preposition|\ba\b|\ban\b|\bthe\b|look.*into|fond of|senior to|agree with|abide by|good at|prevent from|interested in|accused of|proficient in|differ with|prefer to/i.test(full);
    case "eng_ch2":
      return /tense|since|for|past continuous|present perfect|future perfect|had already|went to|has been|had been|simple past/i.test(full);
    case "eng_ch3":
      return /voice change|passive voice|active voice|by whom|is being|has been|was written|are made/i.test(full);
    case "eng_ch4":
      return /narration|direct speech|indirect speech|said that|asked if|told him that|exclaimed that|requested to/i.test(full);
    case "eng_ch5":
      return /subject-verb|neither.*nor|either.*or|along with|as well as|each of|every one of|not only.*but also/i.test(full);
    case "eng_ch6":
      return /error|correct sentence|incorrect sentence|spot the error|grammatically correct/i.test(full);
    case "eng_ch7":
      return /synonym|antonym|opposite word|nearest meaning|same meaning|antonyms|synonyms/i.test(full);
    case "eng_ch8":
      return /idiom|phrase|phrasal verb|call off|put up with|look after|break down|once in a blue moon|apple of|at the eleventh hour|burn the midnight oil/i.test(full);
    case "eng_ch9":
      return /spelt word|correct spelling|correctly spelt|misspelt|spelling test|find the correct spelling/i.test(full);
    case "eng_ch10":
      return /one word|substitute|person who|study of|killing of|fear of|government by|state of/i.test(full);
    case "eng_ch11":
      return /fill in the blank|appropriate word|suitable word|choose the word/i.test(full);
    case "eng_ch12":
      return /clause|simple to complex|compound|transformation|so.*that|too.*to|complex sentence/i.test(full);
    case "eng_ch13":
      return /degree|comparative|superlative|positive degree|as.*as|than|most/i.test(full);
    case "eng_ch14":
      return /passage|comprehension|according to the passage|reading comprehension/i.test(full);
    default:
      return false;
  }
}

export function matchMathChapterTopic(q: Question, chapterId: string): boolean {
  if (q.chapterId === chapterId) return true;
  const txt = (q.questionBn || "").toLowerCase() + " " + (q.questionEn || "").toLowerCase();
  const tags = (q.tags || []).join(" ").toLowerCase();
  const full = txt + " " + tags;

  switch (chapterId) {
    case "math_ch1":
      return /সংখ্যাতত্ত্ব|মৌলিক সংখ্যা|ভগ্নাংশ|দশমিক|স্থানীয় মান|বিভাজ্য|number system|fraction/i.test(full);
    case "math_ch2":
      return /সরলীকরণ|বর্গমূল|ঘনমূল|সূচক|bodmas|simplification|মান নির্ণয়|root/i.test(full);
    case "math_ch3":
      return /লসাগু|গসাগু|lcm|hcf/i.test(full);
    case "math_ch4":
      return /শতকরা|পারসেন্ট|শতাংশ|percentage|\b%\b/i.test(full);
    case "math_ch5":
      return /লাভ|ক্ষতি|ক্রয়মূল্য|বিক্রয়মূল্য|ধার্যমূল্য|ছাড়|profit|loss|discount/i.test(full);
    case "math_ch6":
      return /সুদ|সরল সুদ|চক্রবৃদ্ধি সুদ|সুদাসল|interest|compound interest/i.test(full);
    case "math_ch7":
      return /অনুপাত|সমানুপাত|অনুপাতিক|ratio|proportion/i.test(full);
    case "math_ch8":
      return /মিশ্রণ|অ্যালীগেশন|দুধ ও জল|mixture|alligation/i.test(full);
    case "math_ch9":
      return /অংশীদারি|অংশীদার|মূলধন|লাভ্যাংশ|partnership/i.test(full);
    case "math_ch10":
      return /সময় ও কার্য|নল ও চৌবাচ্চা|নল|চৌবাচ্চা|time and work|pipe/i.test(full);
    case "math_ch11":
      return /গতিবেগ|দূরত্ব|ট্রেন|নৌকা|স্রোত|speed|distance|train|boat/i.test(full);
    case "math_ch12":
      return /গড়|বয়স|পিতা ও পুত্র|average|age/i.test(full);
    case "math_ch13":
      return /পরিমিতি|ক্ষেত্রফল|পরিসীমা|আয়তন|দৈর্ঘ্য|প্রস্থ|বৃত্ত|ত্রিভুজ|আয়তক্ষেত্র|বর্গক্ষেত্র|mensuration|area/i.test(full);
    case "math_ch14":
      return /বীজগণিত|সমীকরণ|যুক্তিশক্তি|সিরিজ|কোডিং|algebra|reasoning/i.test(full);
    default:
      return false;
  }
}

export function matchPanchayatChapterTopic(q: Question, chapterId: string): boolean {
  if (q.chapterId === chapterId) return true;
  const txt = (q.questionBn || "").toLowerCase();
  const tags = (q.tags || []).join(" ").toLowerCase();
  const full = txt + " " + tags;

  switch (chapterId) {
    case "panchayat_ch1":
      return /ঐতিহাসিক|উদ্ভব|লর্ড রিপন|লর্ড মেয়ো|বলবন্ত|অশোক মেহতা|৭৩তম|উৎপত্তি|এল এম সিংভি|জি ভি কে রাও/i.test(full);
    case "panchayat_ch2":
      return /১৯৭৩|আইন|অধ্যায়|ধারা|পশ্চিমবঙ্গ পঞ্চায়েত আইন|সংশোধনী/i.test(full);
    case "panchayat_ch3":
      return /গ্রাম পঞ্চায়েত|প্রধান|উপপ্রধান|সদস্য|মেয়াদ|সভা|গঠন|গ্রামের জনসংখ্যা/i.test(full);
    case "panchayat_ch4":
      return /পঞ্চায়েত সমিতি|সভাপতি|সহ-সভাপতি|বিডিও|bdo|ব্লক|স্থায়ী সমিতি/i.test(full);
    case "panchayat_ch5":
      return /জেলা পরিষদ|সভাধিপতি|ডিএম|dm|শিলিগুড়ি|মহকুমা|জেলা শাসক/i.test(full);
    case "panchayat_ch6":
      return /গ্রাম সংসদ|গ্রাম সভা|সামাজিক নিরীক্ষা|সোশ্যাল অডিট|কোরাম|নভেম্বর|মে/i.test(full);
    case "panchayat_ch7":
      return /বাজেট|অর্থ কমিশন|রাজস্ব|ট্যাক্স|তহবিল|finance|অনুদানের/i.test(full);
    case "panchayat_ch8":
      return /সচিব|সহায়ক|কর্মী|প্রশাসনিক|নিয়োগ|পদমর্যাদা|নির্বাহী সহায়ক|নির্মাণ সহায়ক/i.test(full);
    case "panchayat_ch9":
      return /১০০ দিনের কাজ|মনরেগা|আবাস যোজনা|নির্মল বাংলা|লক্ষ্মীর ভাণ্ডার|কন্যাশ্রী|জলস্বপ্ন|স্কিম|প্রকল্প|গ্রামীণ উন্নয়ন/i.test(full);
    case "panchayat_ch10":
      return /নির্বাচন কমিশন|ভোট|সংরক্ষণ|মহিলা সংরক্ষণ|৫০%|আসন সংরক্ষণ|ভোটার|ব্যালট/i.test(full);
    default:
      return false;
  }
}

export function matchGKCategoryTopic(q: Question, categoryId: string): boolean {
  if (q.chapterId === categoryId) return true;
  const txt = (q.questionBn || "").toLowerCase();
  const tags = (q.tags || []).join(" ").toLowerCase();
  const full = txt + " " + tags;

  switch (categoryId) {
    case "history":
      return /ইতিহাস|হরপ্পা|মহেঞ্জোদাড়ো|সিন্ধু|মৌর্য|গুপ্ত|মুঘল|সুলতানি|কংগ্রেস|গান্ধী|নেতাজি|১৮৫৭|লর্ড|বৌদ্ধ|জৈন|বেদ|পলাশী|বক্সার/i.test(full);
    case "geography":
      return /ভূগোল|নদী|পাহাড়|পর্বত|জলবায়ু|জেলা|সুন্দরবন|মৃত্তিকা|কর্কটক্রান্তি|তিস্তা|গঙ্গা|হিমালয়|খনিজ|চা|পশ্চিমবঙ্গ পরিচয়/i.test(full);
    case "polity":
      return /সংবিধান|ধারা|মৌলিক অধিকার|রাষ্ট্রপতি|প্রধানমন্ত্রী|সংসদ|লোকসভা|রাজ্যসভা|সুপ্রিম কোর্ট|হাইকোর্ট|নির্বাচন কমিশন|প্রস্তাবনা|নাগরিকত্ব/i.test(full);
    case "science":
      return /বিজ্ঞান|পদার্থ|রসায়ন|জীববিজ্ঞান|ভিটামিন|কোষ|হরমোন|রোগ|ব্যাকটেরিয়া|ভাইরাস|আলো|শব্দ|বিদ্যুৎ|পরমাণু|অ্যাসিড|ক্ষার|ইকোলজি/i.test(full);
    case "static":
      return /স্ট্যাটিক|লোকনৃত্য|উৎসব|পুরস্কার|নোবেল|ভারত রত্ন|খেলাধুলা|অলিম্পিক|স্টেডিয়াম|ট্রফি|বিশ্বকাপ|লেখক|বই|সদর দপ্তর|দিন|স্মৃতিসৌধ/i.test(full);
    default:
      return false;
  }
}

// 1. Master Curated Pools (Vol + Supplementary Practice, Mock & PYQs)
export const MASTER_BENGALI_POOL: Question[] = buildCuratedPool([
  ...BENGALI_VOL2_QUESTIONS,
  ...ALL_SUPPLEMENTARY_QUESTIONS.filter((q) => q.subjectId === "bengali"),
]);

export const MASTER_ENGLISH_POOL: Question[] = buildCuratedPool([
  ...ENGLISH_VOL3_QUESTIONS,
  ...ALL_SUPPLEMENTARY_QUESTIONS.filter((q) => q.subjectId === "english"),
]);

export const MASTER_MATH_POOL: Question[] = buildCuratedPool([
  ...MATH_VOL4_QUESTIONS,
  ...ALL_SUPPLEMENTARY_QUESTIONS.filter((q) => q.subjectId === "math"),
]);

export const MASTER_PANCHAYAT_POOL: Question[] = buildCuratedPool([
  ...VOL_1_QUESTIONS,
  ...ALL_SUPPLEMENTARY_QUESTIONS.filter((q) => q.subjectId === "panchayat"),
]);

export const MASTER_GK_POOL: Question[] = buildCuratedPool([
  ...GK_HISTORY_QUESTIONS,
  ...GK_GEOGRAPHY_QUESTIONS,
  ...GK_POLITY_QUESTIONS,
  ...GK_SCIENCE_QUESTIONS,
  ...GK_STATIC_QUESTIONS,
  ...GK_EXPANDED_MCQS,
  ...HISTORY_1000_MCQS,
  ...GEOGRAPHY_1000_MCQS,
  ...POLITY_1000_MCQS,
  ...SCIENCE_1000_MCQS,
  ...STATIC_1000_MCQS,
  ...ALL_SUPPLEMENTARY_QUESTIONS.filter((q) => q.subjectId === "gk"),
]);

/**
 * Generates a full 85-question mock test with the standard WB Gram Panchayat syllabus ratio:
 * - Bengali: 20 Questions
 * - English: 20 Questions
 * - Arithmetic & Reasoning: 25 Questions
 * - GK & Panchayat System: 20 Questions (10 Panchayat + 10 GK)
 * Total: 85 Questions, 90 Minutes, 0.25 Negative marking
 */
export function generateFullMockTest(customTitleBn?: string): MockTest {
  const bengaliQs = pickRandom(MASTER_BENGALI_POOL, 20).map(shuffleQuestionOptions);
  const englishQs = pickRandom(MASTER_ENGLISH_POOL, 20).map(shuffleQuestionOptions);
  const mathQs = pickRandom(MASTER_MATH_POOL, 25).map(shuffleQuestionOptions);
  const panchayatQs = pickRandom(MASTER_PANCHAYAT_POOL, 10).map(shuffleQuestionOptions);
  const gkQs = pickRandom(MASTER_GK_POOL, 10).map(shuffleQuestionOptions);

  const panchayatAndGkQs = [...panchayatQs, ...gkQs];

  // Compile full 85 questions
  const allQuestions = shuffleArray([...bengaliQs, ...englishQs, ...mathQs, ...panchayatAndGkQs]);

  const testId = `mock_dyn_full_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

  const sections: MockTestSection[] = [
    { subjectId: "bengali", subjectName: "বাংলা ভাষা ও সাহিত্য (Bengali)", questionCount: 20, marksPerQuestion: 1 },
    { subjectId: "english", subjectName: "ইংরেজি ভাষা ও ব্যাকরণ (English)", questionCount: 20, marksPerQuestion: 1 },
    { subjectId: "math", subjectName: "পাটিগণিত ও যুক্তি (Arithmetic & Math)", questionCount: 25, marksPerQuestion: 1 },
    { subjectId: "panchayat", subjectName: "সাধারণ জ্ঞান ও পঞ্চায়েত আইন (GK & Panchayat)", questionCount: 20, marksPerQuestion: 1 },
  ];

  return {
    id: testId,
    titleBn: customTitleBn || `ডায়নামিক ফুল মক টেস্ট (৮৫ নম্বর - সম্পূর্ণ সিলেবাস)`,
    titleEn: `Dynamic Full Mock Test (85 Marks - Complete Syllabus)`,
    postCategory: "Executive Assistant / Secretary / Sahayak / Nirman Sahayak / Karmee",
    totalMarks: 85,
    totalQuestions: 85,
    durationMinutes: 90,
    negativeMarkPerWrong: 0.25,
    descriptionBn: `পশ্চিমবঙ্গ পঞ্চায়েত রিক্রুটমেন্ট পরীক্ষার সিলেবাস অনুসারী ৮৫ নম্বরের ফুল মক টেস্ট। প্রতিটি ভলিউম থেকে সঠিক অনুপাতে (বাংলা ২০, ইংরেজি ২০, গণিত ২৫, জিকে ও পঞ্চায়েত ২০) নতুন সাফল করা প্রশ্নপত্র। সময় ৯০ মিনিট, নেগেটিভ মার্কিং ০.২৫।`,
    sections,
    questions: allQuestions,
  };
}

/**
 * Generates a short 40-question mock test with proportional ratio:
 * - Bengali: 10 Questions
 * - English: 10 Questions
 * - Arithmetic & Math: 10 Questions
 * - GK & Panchayat: 10 Questions (5 Panchayat + 5 GK)
 * Total: 40 Questions, 40 Minutes, 0.25 Negative marking
 */
export function generateShortMockTest(customTitleBn?: string): MockTest {
  const bengaliQs = pickRandom(MASTER_BENGALI_POOL, 10).map(shuffleQuestionOptions);
  const englishQs = pickRandom(MASTER_ENGLISH_POOL, 10).map(shuffleQuestionOptions);
  const mathQs = pickRandom(MASTER_MATH_POOL, 10).map(shuffleQuestionOptions);
  const panchayatQs = pickRandom(MASTER_PANCHAYAT_POOL, 5).map(shuffleQuestionOptions);
  const gkQs = pickRandom(MASTER_GK_POOL, 5).map(shuffleQuestionOptions);

  const panchayatAndGkQs = [...panchayatQs, ...gkQs];
  const allQuestions = shuffleArray([...bengaliQs, ...englishQs, ...mathQs, ...panchayatAndGkQs]);

  const testId = `mock_dyn_short_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

  const sections: MockTestSection[] = [
    { subjectId: "bengali", subjectName: "বাংলা (Bengali)", questionCount: 10, marksPerQuestion: 1 },
    { subjectId: "english", subjectName: "ইংরেজি (English)", questionCount: 10, marksPerQuestion: 1 },
    { subjectId: "math", subjectName: "পাটিগণিত (Math)", questionCount: 10, marksPerQuestion: 1 },
    { subjectId: "panchayat", subjectName: "জিকে ও পঞ্চায়েত (GK & Panchayat)", questionCount: 10, marksPerQuestion: 1 },
  ];

  return {
    id: testId,
    titleBn: customTitleBn || `ডায়নামিক শর্ট মক টেস্ট (৪০ নম্বর - দ্রুত প্রস্তুতি)`,
    titleEn: `Dynamic Short Mock Test (40 Marks - Quick Assessment)`,
    postCategory: "General GP Mock",
    totalMarks: 40,
    totalQuestions: 40,
    durationMinutes: 40,
    negativeMarkPerWrong: 0.25,
    descriptionBn: `৪০ নম্বরের শর্ট মক টেস্ট। প্রতিটি বিষয় থেকে ১০টি করে ব্যালেন্সড প্রশ্ন (বাংলা ১০, ইংরেজি ১০, গণিত ১০, জিকে ও পঞ্চায়েত ১০)। সময় ৪০ মিনিট, নেগেটিভ মার্কিং ০.২৫।`,
    sections,
    questions: allQuestions,
  };
}

/**
 * Generates a 10-question speed quiz from All 5 Volumes:
 * - 2 Bengali, 2 English, 2 Math, 2 Panchayat, 2 GK
 * - Time: 2 Minutes (120 seconds)
 * - Negative marking: 0
 */
export function generateSpeedQuizAllSubjects(): Question[] {
  const b = pickRandom(MASTER_BENGALI_POOL, 2).map(shuffleQuestionOptions);
  const e = pickRandom(MASTER_ENGLISH_POOL, 2).map(shuffleQuestionOptions);
  const m = pickRandom(MASTER_MATH_POOL, 2).map(shuffleQuestionOptions);
  const p = pickRandom(MASTER_PANCHAYAT_POOL, 2).map(shuffleQuestionOptions);
  const g = pickRandom(MASTER_GK_POOL, 2).map(shuffleQuestionOptions);

  return shuffleArray([...b, ...e, ...m, ...p, ...g]);
}

/**
 * Volume metadata for Subject-wise Speed Quiz
 */
export interface VolumeMetadata {
  volumeNumber: number;
  id: string;
  nameBn: string;
  nameEn: string;
  subjectId: SubjectId;
  color: string;
  borderColor: string;
  bgColor: string;
  totalChaptersCount: number;
  totalQuestionsCount: number;
  chapters: {
    id: string;
    chapterNumber: number;
    titleBn: string;
    subChapters?: { id: string; titleBn: string }[];
  }[];
}

export const VOLUME_CATALOGUE: VolumeMetadata[] = [
  {
    volumeNumber: 1,
    id: "vol_1",
    nameBn: "ভলিউম ১: পঞ্চায়েত ব্যবস্থা ও গ্রামীণ প্রশাসন",
    nameEn: "Volume 1: Panchayat System & Rural Administration",
    subjectId: "panchayat",
    color: "text-emerald-700",
    borderColor: "border-emerald-300",
    bgColor: "bg-emerald-50",
    totalChaptersCount: 10,
    totalQuestionsCount: VOL_1_QUESTIONS.length,
    chapters: [
      { id: "panchayat_ch1", chapterNumber: 1, titleBn: "১. ভারতে পঞ্চায়েত ব্যবস্থার উদ্ভব ও ঐতিহাসিক প্রেক্ষাপট" },
      { id: "panchayat_ch2", chapterNumber: 2, titleBn: "২. পশ্চিমবঙ্গ পঞ্চায়েত আইন, ১৯৭৩ ও এর ক্রমবিকাশ" },
      { id: "panchayat_ch3", chapterNumber: 3, titleBn: "৩. গ্রাম পঞ্চায়েত: গঠন, ক্ষমতা ও কার্যাবলী" },
      { id: "panchayat_ch4", chapterNumber: 4, titleBn: "৪. পঞ্চায়েত সমিতি: গঠন, ক্ষমতা ও কার্যাবলী" },
      { id: "panchayat_ch5", chapterNumber: 5, titleBn: "৫. জেলা পরিষদ ও শিলিগুড়ি মহকুমা পরিষদ" },
      { id: "panchayat_ch6", chapterNumber: 6, titleBn: "৬. গ্রাম সংসদ ও গ্রাম সভা: প্রত্যক্ষ গণতন্ত্র ও সামাজিক নিরীক্ষা" },
      { id: "panchayat_ch7", chapterNumber: 7, titleBn: "৭. পঞ্চায়েতের আর্থিক পরিকাঠামো, বাজেট ও অর্থ কমিশন" },
      { id: "panchayat_ch8", chapterNumber: 8, titleBn: "৮. পঞ্চায়েত কর্মী ও প্রশাসনিক পরিকাঠামো" },
      { id: "panchayat_ch9", chapterNumber: 9, titleBn: "৯. গ্রামীণ উন্নয়ন ও সরকারি ফ্ল্যাগশিপ স্কিম" },
      { id: "panchayat_ch10", chapterNumber: 10, titleBn: "১০. পশ্চিমবঙ্গের পঞ্চায়েত নির্বাচনের নিয়মাবলী ও নির্বাচন কমিশন" },
    ],
  },
  {
    volumeNumber: 2,
    id: "vol_2",
    nameBn: "ভলিউম ২: বাংলা ভাষা, ব্যাকরণ ও সাহিত্য",
    nameEn: "Volume 2: Bengali Language, Grammar & Literature",
    subjectId: "bengali",
    color: "text-amber-700",
    borderColor: "border-amber-300",
    bgColor: "bg-amber-50",
    totalChaptersCount: 19,
    totalQuestionsCount: BENGALI_VOL2_QUESTIONS.length,
    chapters: [
      { id: "bengali_ch1", chapterNumber: 1, titleBn: "১. ধ্বনি ও বর্ণ প্রকরণ" },
      { id: "bengali_ch2", chapterNumber: 2, titleBn: "২. সন্ধি ও সন্ধি বিচ্ছেদ" },
      { id: "bengali_ch3", chapterNumber: 3, titleBn: "৩. শব্দ ভাণ্ডার ও শব্দ গঠন" },
      { id: "bengali_ch4", chapterNumber: 4, titleBn: "৪. পদ পরিচয় ও পদ পরিবর্তন" },
      { id: "bengali_ch5", chapterNumber: 5, titleBn: "৫. কারক, বিভক্তি ও অনুসর্গ" },
      { id: "bengali_ch6", chapterNumber: 6, titleBn: "৬. সমাস ও ব্যাসবাক্য" },
      { id: "bengali_ch7", chapterNumber: 7, titleBn: "৭. প্রত্যয় ও উপসর্গ" },
      { id: "bengali_ch8", chapterNumber: 8, titleBn: "৮. বাক্য প্রকরণ ও বাক্য রূপান্তর" },
      { id: "bengali_ch9", chapterNumber: 9, titleBn: "৯. বাচ্য ও বাচ্য পরিবর্তন" },
      { id: "bengali_ch10", chapterNumber: 10, titleBn: "১০. সমার্থক শব্দ ও প্রতিশব্দ" },
      { id: "bengali_ch11", chapterNumber: 11, titleBn: "১১. বিপরীতার্থক শব্দ" },
      { id: "bengali_ch12", chapterNumber: 12, titleBn: "১২. এককথায় প্রকাশ" },
      { id: "bengali_ch13", chapterNumber: 13, titleBn: "১৩. বাগধারা ও প্রবাদ-প্রবচন" },
      { id: "bengali_ch14", chapterNumber: 14, titleBn: "১৪. সমোচ্চারিত ভিন্নার্থক শব্দ" },
      { id: "bengali_ch15", chapterNumber: 15, titleBn: "১৫. বানান শুদ্ধিকরণ ও অশুদ্ধি সংশোধন" },
      { id: "bengali_ch16", chapterNumber: 16, titleBn: "১৬. উপযুক্ত শব্দ দ্বারা শূন্যস্থান পূরণ" },
      { id: "bengali_ch17", chapterNumber: 17, titleBn: "১৭. কবি ও সাহিত্যিকদের ছদ্মনাম ও উপাধি" },
      { id: "bengali_ch18", chapterNumber: 18, titleBn: "১৮. বিখ্যাত সাহিত্যকর্ম, পত্রিকা, চরিত্র ও স্রষ্টা" },
      { id: "bengali_ch19", chapterNumber: 19, titleBn: "১৯. বোধপরীক্ষণ / অনুচ্ছেদ ভিত্তিক প্রশ্ন" },
    ],
  },
  {
    volumeNumber: 3,
    id: "vol_3",
    nameBn: "ভলিউম ৩: ইংরেজি ভাষা ও ব্যাকরণ (English)",
    nameEn: "Volume 3: English Language & Grammar",
    subjectId: "english",
    color: "text-sky-700",
    borderColor: "border-sky-300",
    bgColor: "bg-sky-50",
    totalChaptersCount: 14,
    totalQuestionsCount: ENGLISH_VOL3_QUESTIONS.length,
    chapters: [
      { id: "eng_ch1", chapterNumber: 1, titleBn: "1. Articles & Prepositions" },
      { id: "eng_ch2", chapterNumber: 2, titleBn: "2. Subject-Verb Agreement" },
      { id: "eng_ch3", chapterNumber: 3, titleBn: "3. Tenses & Conditionals" },
      { id: "eng_ch4", chapterNumber: 4, titleBn: "4. Voice Change (Active & Passive)" },
      { id: "eng_ch5", chapterNumber: 5, titleBn: "5. Narration Change (Direct & Indirect Speech)" },
      { id: "eng_ch6", chapterNumber: 6, titleBn: "6. Synonyms & Antonyms" },
      { id: "eng_ch7", chapterNumber: 7, titleBn: "7. One Word Substitution" },
      { id: "eng_ch8", chapterNumber: 8, titleBn: "8. Idioms & Phrases" },
      { id: "eng_ch9", chapterNumber: 9, titleBn: "9. Correct Spelling Test" },
      { id: "eng_ch10", chapterNumber: 10, titleBn: "10. Spotting Errors & Common Errors" },
      { id: "eng_ch11", chapterNumber: 11, titleBn: "11. Sentence Rearrangement & Para Jumbles" },
      { id: "eng_ch12", chapterNumber: 12, titleBn: "12. Fill in the Blanks & Cloze Test" },
      { id: "eng_ch13", chapterNumber: 13, titleBn: "13. Reading Comprehension Passages" },
      { id: "eng_ch14", chapterNumber: 14, titleBn: "14. Transformation of Sentences" },
    ],
  },
  {
    volumeNumber: 4,
    id: "vol_4",
    nameBn: "ভলিউম ৪: পাটিগণিত ও সম্পূর্ণ গণিত",
    nameEn: "Volume 4: Arithmetic & Complete Mathematics",
    subjectId: "math",
    color: "text-indigo-700",
    borderColor: "border-indigo-300",
    bgColor: "bg-indigo-50",
    totalChaptersCount: 14,
    totalQuestionsCount: MATH_VOL4_QUESTIONS.length,
    chapters: [
      { id: "math_ch1", chapterNumber: 1, titleBn: "১. সংখ্যা পদ্ধতি ও সরলীকরণ (Number System)" },
      { id: "math_ch2", chapterNumber: 2, titleBn: "২. ঐকিক নিয়ম (Unitary Method & Chain Rule)" },
      { id: "math_ch3", chapterNumber: 3, titleBn: "৩. গড় ও বয়স সংক্রান্ত সমস্যা (Average & Age)" },
      { id: "math_ch4", chapterNumber: 4, titleBn: "৪. শতাংশ ও শতকরা হিসাব (Percentage)" },
      { id: "math_ch5", chapterNumber: 5, titleBn: "৫. অনুপাত ও সমানুপাত (Ratio & Proportion)" },
      { id: "math_ch6", chapterNumber: 6, titleBn: "৬. লাভ ও ক্ষতি, ধার্যমূল্য ও ছাড় (Profit, Loss & Discount)" },
      { id: "math_ch7", chapterNumber: 7, titleBn: "৭. সরল সুদ ও সবৃদ্ধিমূল (Simple Interest)" },
      { id: "math_ch8", chapterNumber: 8, titleBn: "৮. চক্রবৃদ্ধি সুদ ও সমহার বৃদ্ধি (Compound Interest)" },
      { id: "math_ch9", chapterNumber: 9, titleBn: "৯. সময় ও কার্য (Time and Work)" },
      { id: "math_ch10", chapterNumber: 10, titleBn: "১০. নল ও চৌবাচ্চা (Pipes and Cisterns)" },
      { id: "math_ch11", chapterNumber: 11, titleBn: "১১. সময়, দূরত্ব, গতিবেগ ও ট্রেন সংক্রান্ত (Speed & Distance)" },
      { id: "math_ch12", chapterNumber: 12, titleBn: "১২. পরিমিতি ও জ্যামিতিক ক্ষেত্রফল (Mensuration 2D & 3D)" },
      { id: "math_ch13", chapterNumber: 13, titleBn: "১৩. মিশ্রণ ও সংমিশ্রণ নীতি (Mixture & Alligation)" },
      { id: "math_ch14", chapterNumber: 14, titleBn: "১৪. সরলীকরণ, করণী, সূচক ও বীজগণিত (Algebra & Surds)" },
    ],
  },
  {
    volumeNumber: 5,
    id: "vol_5",
    nameBn: "ভলিউম ৫: সাধারণ জ্ঞান ও জিকে বুস্টার",
    nameEn: "Volume 5: General Knowledge & GS Booster",
    subjectId: "gk",
    color: "text-rose-700",
    borderColor: "border-rose-300",
    bgColor: "bg-rose-50",
    totalChaptersCount: 5,
    totalQuestionsCount: ALL_5000_GK_MCQS.length + 100,
    chapters: [
      {
        id: "history",
        chapterNumber: 1,
        titleBn: "১. ইতিহাস ও ভারতের স্বাধীনতা সংগ্রাম (History & National Movement)",
        subChapters: [
          { id: "hist_ancient", titleBn: "প্রাচীন ভারত ও বৈদিক যুগ (Ancient India)" },
          { id: "hist_medieval", titleBn: "মধ্যযুগ, সুলতানি ও মুঘল সাম্রাজ্য (Medieval India)" },
          { id: "hist_modern", titleBn: "আধুনিক ভারত, ১৮৫৭ বিদ্রোহ ও জাতীয় আন্দোলন (Modern India)" },
          { id: "hist_gandhi", titleBn: "গান্ধীযুগ, সুভাষচন্দ্র ও স্বাধীনতা সংগ্রাম (Freedom Struggle)" },
        ],
      },
      {
        id: "geography",
        chapterNumber: 2,
        titleBn: "২. ভূগোল ও পশ্চিমবঙ্গ পরিচয় (Geography & West Bengal)",
        subChapters: [
          { id: "geo_wb", titleBn: "পশ্চিমবঙ্গের ভূগোল, নদনদী, জেলা ও ভূপ্রকৃতি (West Bengal Geography)" },
          { id: "geo_india", titleBn: "ভারতের ভূপ্রকৃতি, নদনদী ও জলবায়ু (Indian Geography)" },
          { id: "geo_agriculture", titleBn: "কৃষি, খনিজ সম্পদ ও শিল্প (Agriculture & Industry)" },
        ],
      },
      {
        id: "polity",
        chapterNumber: 3,
        titleBn: "৩. ভারতীয় সংবিধান ও রাষ্ট্রনীতি (Indian Polity & Constitution)",
        subChapters: [
          { id: "pol_preamble", titleBn: "প্রস্তাবনা, মৌলিক অধিকার ও নির্দেশমূলক নীতি (Fundamental Rights)" },
          { id: "pol_exec", titleBn: "রাষ্ট্রপতি, প্রধানমন্ত্রী ও সংসদ (President & Parliament)" },
          { id: "pol_judiciary", titleBn: "বিচারব্যবস্থা ও নির্বাচন কমিশন (Judiciary & EC)" },
        ],
      },
      {
        id: "science",
        chapterNumber: 4,
        titleBn: "৪. সাধারণ বিজ্ঞান ও পরিবেশ (General Science & EVS)",
        subChapters: [
          { id: "sci_physics", titleBn: "পদার্থবিদ্যা (Physics - আলো, গতি, তাপ, বিদ্যুৎ)" },
          { id: "sci_chemistry", titleBn: "রসায়ন (Chemistry - ধাতু, অধাতু, অ্যাসিড, ক্ষার)" },
          { id: "sci_biology", titleBn: "জীববিজ্ঞান (Biology - কোষ, ভিটামিন, রোগ, হরমোন)" },
          { id: "sci_environment", titleBn: "পরিবেশবিদ্যা ও বাস্তুতন্ত্র (EVS & Ecology)" },
        ],
      },
      {
        id: "static",
        chapterNumber: 5,
        titleBn: "৫. স্ট্যাটিক জিকে, কলা-সংস্কৃতি, খেলাধুলা ও পুরস্কার (Static GK)",
        subChapters: [
          { id: "static_art", titleBn: "লোকনৃত্য, উৎসব, মেলা ও স্মৃতিসৌধ (Art & Culture)" },
          { id: "static_sports", titleBn: "খেলাধুলা, ট্রফি, স্টেডিয়াম ও অলিম্পিক (Sports & Games)" },
          { id: "static_awards", titleBn: "জাতীয় ও আন্তর্জাতিক পুরস্কার, দিন ও পদাধিকারী (Awards & Days)" },
        ],
      },
    ],
  },
];

/**
 * Generates 10 questions for Subject-wise Speed Quiz with strict topic isolation
 */
export function generateSpeedQuizSubjectWise(
  volumeId: string,
  chapterId?: string,
  subChapterId?: string
): { questions: Question[]; title: string } {
  let pool: Question[] = [];
  let title = "বিষয়ভিত্তিক স্পিড কুইজ";
  let isChapterSpecific = Boolean(chapterId);

  if (volumeId === "vol_1") {
    title = "ভলিউম ১: পঞ্চায়েত ব্যবস্থা স্পিড কুইজ";
    if (chapterId) {
      pool = [
        ...VOL_1_QUESTIONS.filter((q) => q.chapterId === chapterId),
        ...ALL_SUPPLEMENTARY_QUESTIONS.filter((q) => q.subjectId === "panchayat" && matchPanchayatChapterTopic(q, chapterId)),
      ];
      const chMeta = VOLUME_CATALOGUE[0].chapters.find((c) => c.id === chapterId);
      if (chMeta) title = `${chMeta.titleBn} (স্পিড কুইজ)`;
    } else {
      pool = MASTER_PANCHAYAT_POOL;
    }
  } else if (volumeId === "vol_2") {
    title = "ভলিউম ২: বাংলা ব্যাকরণ ও সাহিত্য স্পিড কুইজ";
    if (chapterId) {
      pool = [
        ...BENGALI_VOL2_QUESTIONS.filter((q) => q.chapterId === chapterId),
        ...ALL_SUPPLEMENTARY_QUESTIONS.filter((q) => q.subjectId === "bengali" && matchBengaliChapterTopic(q, chapterId)),
      ];
      const chMeta = VOLUME_CATALOGUE[1].chapters.find((c) => c.id === chapterId);
      if (chMeta) title = `${chMeta.titleBn} (স্পিড কুইজ)`;
    } else {
      pool = MASTER_BENGALI_POOL;
    }
  } else if (volumeId === "vol_3") {
    title = "ভলিউম ৩: ইংরেজি ব্যাকরণ স্পিড কুইজ";
    if (chapterId) {
      pool = [
        ...ENGLISH_VOL3_QUESTIONS.filter((q) => q.chapterId === chapterId),
        ...ALL_SUPPLEMENTARY_QUESTIONS.filter((q) => q.subjectId === "english" && matchEnglishChapterTopic(q, chapterId)),
      ];
      const chMeta = VOLUME_CATALOGUE[2].chapters.find((c) => c.id === chapterId);
      if (chMeta) title = `${chMeta.titleBn} (Speed Quiz)`;
    } else {
      pool = MASTER_ENGLISH_POOL;
    }
  } else if (volumeId === "vol_4") {
    title = "ভলিউম ৪: পাটিগণিত ও গণিত স্পিড কুইজ";
    if (chapterId) {
      pool = [
        ...MATH_VOL4_QUESTIONS.filter((q) => q.chapterId === chapterId),
        ...ALL_SUPPLEMENTARY_QUESTIONS.filter((q) => q.subjectId === "math" && matchMathChapterTopic(q, chapterId)),
      ];
      const chMeta = VOLUME_CATALOGUE[3].chapters.find((c) => c.id === chapterId);
      if (chMeta) title = `${chMeta.titleBn} (স্পিড কুইজ)`;
    } else {
      pool = MASTER_MATH_POOL;
    }
  } else if (volumeId === "vol_5") {
    title = "ভলিউম ৫: সাধারণ জ্ঞান স্পিড কুইজ";
    if (chapterId === "history") {
      pool = [
        ...GK_HISTORY_QUESTIONS,
        ...HISTORY_1000_MCQS,
        ...ALL_SUPPLEMENTARY_QUESTIONS.filter((q) => q.subjectId === "gk" && matchGKCategoryTopic(q, "history")),
      ];
      title = "ভলিউম ৫: ইতিহাস ও জাতীয় আন্দোলন (স্পিড কুইজ)";
    } else if (chapterId === "geography") {
      pool = [
        ...GK_GEOGRAPHY_QUESTIONS,
        ...GEOGRAPHY_1000_MCQS,
        ...ALL_SUPPLEMENTARY_QUESTIONS.filter((q) => q.subjectId === "gk" && matchGKCategoryTopic(q, "geography")),
      ];
      title = "ভলিউম ৫: ভূগোল ও পশ্চিমবঙ্গ (স্পিড কুইজ)";
    } else if (chapterId === "polity") {
      pool = [
        ...GK_POLITY_QUESTIONS,
        ...POLITY_1000_MCQS,
        ...ALL_SUPPLEMENTARY_QUESTIONS.filter((q) => q.subjectId === "gk" && matchGKCategoryTopic(q, "polity")),
      ];
      title = "ভলিউম ৫: সংবিধান ও রাষ্ট্রনীতি (স্পিড কুইজ)";
    } else if (chapterId === "science") {
      pool = [
        ...GK_SCIENCE_QUESTIONS,
        ...SCIENCE_1000_MCQS,
        ...ALL_SUPPLEMENTARY_QUESTIONS.filter((q) => q.subjectId === "gk" && matchGKCategoryTopic(q, "science")),
      ];
      title = "ভলিউম ৫: সাধারণ বিজ্ঞান ও পরিবেশ (স্পিড কুইজ)";
    } else if (chapterId === "static") {
      pool = [
        ...GK_STATIC_QUESTIONS,
        ...STATIC_1000_MCQS,
        ...ALL_SUPPLEMENTARY_QUESTIONS.filter((q) => q.subjectId === "gk" && matchGKCategoryTopic(q, "static")),
      ];
      title = "ভলিউম ৫: স্ট্যাটিক জিকে ও সংস্কৃতি (স্পিড কুইজ)";
    } else {
      pool = MASTER_GK_POOL;
    }
  } else {
    pool = MASTER_GK_POOL;
  }

  // Clean and filter realistic questions from the specific pool
  const curatedPool = buildCuratedPool(pool);
  const candidatePool = curatedPool.length > 0 ? curatedPool : pool.map(cleanQuestion);

  let selected: Question[] = [];
  if (candidatePool.length >= 10) {
    selected = pickRandom(candidatePool, 10);
  } else if (candidatePool.length > 0) {
    // If the pool has fewer than 10 questions, shuffle and fill strictly from within this pool
    selected = [];
    while (selected.length < 10) {
      const shuffled = shuffleArray([...candidatePool]);
      for (const item of shuffled) {
        if (selected.length < 10) {
          selected.push({ ...item, id: `${item.id}_rep_${selected.length}_${Math.random()}` });
        }
      }
    }
  } else {
    selected = pickRandom(MASTER_GK_POOL, 10);
  }

  // Shuffle individual question options and shuffle the question order
  const finalizedQuestions = shuffleArray(
    selected.map((q) => shuffleQuestionOptions(cleanQuestion(q)))
  );

  return {
    questions: finalizedQuestions,
    title,
  };
}
