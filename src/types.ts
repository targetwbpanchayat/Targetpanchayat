// ==========================================
// 1. SUBJECT & CORE TAXONOMY
// ==========================================
export type SubjectId = "panchayat" | "bengali" | "english" | "math" | "gk";

export interface SubjectInfo {
  id: SubjectId;
  nameBn: string;
  nameEn: string;
  iconName: string;
  color: string;
  bgColor: string;
  borderColor: string;
  totalChapters: number;
  totalQuestions: number;
  weightagePercent: number;
  description: string;
  syllabusTopics?: string[];
}

// ==========================================
// 2. CHAPTER & SUB-TOPIC
// ==========================================
export interface SubTopic {
  id: string;
  chapterId: string;
  subjectId: SubjectId;
  titleBn: string;
  titleEn: string;
  orderIndex: number;
  summaryBn?: string;
  keyConcepts?: string[];
}

export interface ChapterSAQ {
  id: string;
  questionBn: string;
  answerBn: string;
  importantNoteBn?: string;
  category?: string;
}

export interface StudyChapter {
  id: string;
  subjectId: SubjectId;
  titleBn: string;
  titleEn: string;
  chapterNumber?: number;
  estimatedMinutes: number;
  importantNotesCount: number;
  summary: string;
  subTopicIds?: string[];
  subTopics?: SubTopic[];
  content: {
    introduction: string;
    sections: {
      heading: string;
      subheading?: string;
      body: string[];
      keyPoints?: string[];
      tables?: {
        headers: string[];
        rows: string[][];
      };
      formulaOrGrammarRule?: string;
    }[];
    examTips: string[];
    quickRevisionPoints: string[];
    oneLiners?: string[];
    saqs?: ChapterSAQ[];
  };
}

// ==========================================
// 3. STUDY MATERIAL
// ==========================================
export type MaterialContentType = "notes" | "summary" | "table" | "formula" | "tips";

export interface StudyMaterial {
  id: string;
  subjectId: SubjectId;
  chapterId: string;
  subTopicId?: string;
  titleBn: string;
  titleEn?: string;
  contentType: MaterialContentType;
  contentBn: string;
  bulletPoints?: string[];
  tables?: {
    headers: string[];
    rows: string[][];
  };
  formulaOrRule?: string;
  examTips?: string[];
  sourceDocId?: string;
  sourcePageNumber?: number;
}

// ==========================================
// 4. SOURCE DOCUMENTS
// ==========================================
export interface SourceDocument {
  id: string;
  name: string;
  originalFileName: string;
  uploadDate: string; // ISO date string (YYYY-MM-DD)
  fileSizeKb: number;
  pageCount: number;
  fileType: "pdf" | "doc" | "text";
  subjectId?: SubjectId;
  extractedTopicsCount: number;
  extractedMCQCount: number;
  status: "indexed" | "processing" | "ready";
  tags?: string[];
}

// ==========================================
// 5. QUESTIONS & MCQS (SOURCE, GENERATED, PYQ)
// ==========================================
export type QuestionDifficulty = "easy" | "medium" | "hard";

export interface Question {
  id: string;
  subjectId: SubjectId;
  chapterId?: string;
  subTopicId?: string;
  questionBn: string;
  questionEn?: string;
  options: string[]; // Standard 4 options
  optionsBn?: string[];
  correctIndex: number; // 0, 1, 2, 3
  correctOptionIndex?: number;
  explanationBn: string;
  difficulty: QuestionDifficulty;
  examYear?: string;
  tags?: string[];
  sourceDocId?: string;
  isAiGenerated?: boolean;
}

// Source MCQs extracted directly from official source documents/books
export interface SourceMCQ {
  id: string;
  sourceDocId: string;
  pageNumber: number;
  subjectId: SubjectId;
  chapterId?: string;
  rawQuestionBn: string;
  rawQuestionEn?: string;
  options: string[];
  correctIndex: number;
  explanationBn?: string;
  verified: boolean;
}

// Generated MCQs produced via curriculum guidelines
export interface GeneratedMCQ extends Question {
  sourceDocId?: string;
  subTopicId?: string;
  isAiGenerated: true;
  generationPromptId?: string;
  qualityScore?: number; // 1-100 quality benchmark
}

// ==========================================
// 6. PYQS (PREVIOUS YEAR QUESTIONS)
// ==========================================
export interface PYQQuestion extends Question {
  examYear: string;
  postNameBn: string;
  postNameEn?: string;
  shiftOrSession?: string;
}

export interface PYQPaper {
  id: string;
  year: string;
  postNameBn: string;
  postNameEn: string;
  totalMarks: number;
  durationMinutes: number;
  questionsCount: number;
  description: string;
  questions: Question[];
}

// ==========================================
// 7. PRACTICE SETS
// ==========================================
export interface PracticeSet {
  id: string;
  titleBn: string;
  titleEn: string;
  subjectId: SubjectId | "all";
  chapterId?: string;
  subTopicId?: string;
  questionIds: string[];
  difficulty: QuestionDifficulty | "mixed";
  totalQuestions: number;
  estimatedMinutes: number;
  isCustom?: boolean;
}

// ==========================================
// 8. MOCK TESTS
// ==========================================
export interface MockTestSection {
  subjectId: SubjectId;
  subjectName: string;
  questionCount: number;
  marksPerQuestion: number;
}

export interface MockTest {
  id: string;
  titleBn: string;
  titleEn: string;
  postCategory: string; // "Executive Assistant" | "Gram Panchayat Karmee" | "Nirman Sahayak" | "Sahayak"
  totalMarks: number;
  totalQuestions: number;
  durationMinutes: number;
  negativeMarkPerWrong: number; // 0.25 standard
  descriptionBn: string;
  sections: MockTestSection[];
  questions: Question[];
  passingMarks?: number;
}

export interface MockTestAttempt {
  id: string;
  testId: string;
  testTitle: string;
  date: string;
  timeSpentSeconds: number;
  totalQuestions: number;
  attemptedQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  unanswered: number;
  score: number;
  totalMarks: number;
  percentage: number;
  subjectBreakdown: Record<
    SubjectId,
    {
      total: number;
      correct: number;
      wrong: number;
      unanswered: number;
      score: number;
    }
  >;
  userAnswers: Record<string, number>; // questionId -> selectedOptionIndex (-1 for unattempted)
  questions?: Question[]; // Store full questions array so ANY mock test (even dynamic new ones) can be reviewed anytime!
}

// ==========================================
// 9. STUDY PLANS & DAILY TARGETS
// ==========================================
export interface DailyStudyTask {
  id: string;
  dayNumber: number;
  dateStr: string; // YYYY-MM-DD
  subjectId: SubjectId;
  chapterTitle: string;
  chapterId: string;
  subTopicId?: string;
  targetMinutes: number;
  targetQuestions: number;
  targetStudyMaterialId?: string;
  completed: boolean;
  completedAt?: string;
}

export interface DailyTarget {
  id: string;
  dateStr: string;
  tasks: DailyStudyTask[];
  isDayCompleted: boolean;
  totalMinutesTarget: number;
  totalQuestionsTarget: number;
  minutesCompleted: number;
  questionsCompleted: number;
}

export interface StudyPlan {
  id: string;
  titleBn?: string;
  examName: string;
  targetExamDate: string;
  dailyHours: number;
  startDate: string;
  totalDays: number;
  totalWeeks?: number;
  targetPost?: string;
  tasks: DailyStudyTask[];
}

// ==========================================
// 10. CURRENT AFFAIRS
// ==========================================
export interface CurrentAffairItem {
  id: string;
  titleBn: string;
  category: "পশ্চিমবঙ্গ প্রকল্প" | "প্রশাসন ও পঞ্চায়েত" | "জাতীয় ও আন্তর্জাতিক" | "পুরস্কার ও খেলাধুলা" | "বিজ্ঞান ও পরিবেশ";
  date: string;
  summaryBn: string;
  bulletPoints: string[];
  practiceQuestion?: {
    questionBn: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

// ==========================================
// 11. USER PROFILE & USER PROGRESS
// ==========================================
export interface UserProfile {
  email: string;
  name: string;
  targetPost: string;
  joinedDate: string;
  isVerified: boolean;
  avatarId?: number;
}

export interface SubjectMastery {
  solvedQuestions: number;
  correctAnswers: number;
  timeSpentMinutes: number;
  masteryPercentage: number;
}

export interface UserProgress {
  userEmail: string;
  completedChapters: string[]; // chapter IDs
  completedSubTopics?: string[]; // subtopic IDs
  bookmarkedQuestionIds: string[];
  practiceAnswers: Record<string, { selectedIndex: number; isCorrect: boolean; timestamp: number }>;
  mockTestAttempts: MockTestAttempt[];
  activeStudyPlan: StudyPlan | null;
  dailyStreak: {
    currentStreak: number;
    bestStreak: number;
    lastActiveDate: string;
    activeDays: string[]; // ISO date strings (YYYY-MM-DD)
  };
  customNotes: Record<string, string>; // chapterId -> note text
  subjectMastery?: Partial<Record<SubjectId, SubjectMastery>>;
}

