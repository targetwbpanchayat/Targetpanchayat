import { StudyChapter } from "../../types";
import { GKSubSectionData } from "./history";

/**
 * Enhanced GK Chapter Builder
 * Transforms brief subsection points into comprehensive, deep, multi-section study notes.
 */
export function buildEnhancedGkChapter(
  sub: GKSubSectionData,
  category: "history" | "geography" | "polity" | "science" | "static"
): StudyChapter {
  const categoryLabels = {
    history: {
      categoryBn: "ইতিহাস ও স্বাধীনতা সংগ্রাম",
      subjectBadge: "GK History",
      theoryHeading: "১. ঐতিহাসিক প্রেক্ষাপট ও পূর্ণাঙ্গ তাত্ত্বিক আলোচনা",
      detailsHeading: "২. ঘটনাক্রম, সংস্কার ও সামগ্রিক বিবরণ",
      tableHeading: "৩. প্রামাণ্য তথ্যপঞ্জি, সময়রেখা ও ঐতিহাসিক চার্ট",
      examHeading: "৪. পশ্চিমবঙ্গ পঞ্চায়েত পরীক্ষার বিশেষ হাইলাইট ও শর্টকাট",
    },
    geography: {
      categoryBn: "ভূগোল ও পশ্চিমবঙ্গ পরিচিতি",
      subjectBadge: "GK Geography",
      theoryHeading: "১. ভৌগোলিক অবস্থান, ভূপ্রকৃতি ও মূল বৈশিষ্ট্য",
      detailsHeading: "২. নদনদী, জলবায়ু, কৃষিজ-খনিজ সম্পদ ও আঞ্চলিক বিস্তার",
      tableHeading: "৩. জেলাভিত্তিক ও সর্বভারতীয় তুলনামূলক তথ্যতালিকা",
      examHeading: "৪. পঞ্চায়েত ও রাজ্য সরকারি পরীক্ষার উচ্চ ফলনশীল পয়েন্ট",
    },
    polity: {
      categoryBn: "ভারতীয় সংবিধান ও শাসনব্যবস্থা",
      subjectBadge: "GK Polity",
      theoryHeading: "১. সাংবিধানিক পটভূমি ও প্রশাসনিক মূলনীতি",
      detailsHeading: "২. গুরুত্বপূর্ণ ধারা, তপশিল, ক্ষমতা ও কাঠামোগত বিন্যাস",
      tableHeading: "৩. সাংবিধানিক ধারা, সংশোধনী ও পদের তুলনামূলক তালিকা",
      examHeading: "৪. পঞ্চায়েত সংক্রান্ত আইনি বিধিবিধান ও পরীক্ষার টিপস",
    },
    science: {
      categoryBn: "সাধারণ বিজ্ঞান ও প্রযুক্তি",
      subjectBadge: "GK Science",
      theoryHeading: "১. বৈজ্ঞানিক সূত্র, মূল তত্ত্ব ও কার্যকরী নীতি",
      detailsHeading: "২. রাসায়নিক প্রক্রিয়া, শারীরস্থান, রোগ ও প্রাত্যহিক বিজ্ঞান",
      tableHeading: "৩. একক, সংকেত, আবিষ্কার ও সূত্র সম্বলিত চার্ট",
      examHeading: "৪. প্রায়োগিক বিজ্ঞান ও চাকরির পরীক্ষার প্রশ্নোত্তর নির্দেশিকা",
    },
    static: {
      categoryBn: "স্ট্যাটিক জিকে ও পশ্চিমবঙ্গ সংস্কৃতি",
      subjectBadge: "Static GK",
      theoryHeading: "১. জাতীয় ও রাজ্য স্তরের সার্বিক পরিচয়",
      detailsHeading: "২. কলা-সংস্কৃতি, ক্রীড়া, পুরস্কার, গ্রন্থ ও দিবস পরিচিতি",
      tableHeading: "৩. স্মৃতিসহায়ক পূর্ণাঙ্গ সারণী ও তথ্য সম্ভার",
      examHeading: "৪. পঞ্চায়েত ও পিএসসি পরীক্ষার সর্বাধিক কমনযোগ্য পয়েন্ট",
    },
  };

  const meta = categoryLabels[category];

  // Derive subtopics dynamically
  const totalPoints = sub.oneLiners.length;
  const chunk1 = sub.oneLiners.slice(0, Math.ceil(totalPoints / 3));
  const chunk2 = sub.oneLiners.slice(Math.ceil(totalPoints / 3), Math.ceil((2 * totalPoints) / 3));
  const chunk3 = sub.oneLiners.slice(Math.ceil((2 * totalPoints) / 3));

  const subTopics = [
    {
      id: `${sub.id}_sub1`,
      chapterId: sub.id,
      subjectId: "gk" as const,
      titleBn: `মৌলিক তত্ত্ব ও প্রাথমিক ধারণা (${sub.titleBn.replace(/^অধ্যায় \d+:\s*/, "")})`,
      titleEn: `${sub.titleEn} - Fundamentals & Core Background`,
      orderIndex: 1,
      summaryBn: `${sub.summaryBn} সংক্রান্ত প্রাথমিক তত্ত্ব, পটভূমি ও মূল ধারণাসমূহ।`,
      keyConcepts: sub.keyPoints.slice(0, 3),
    },
    {
      id: `${sub.id}_sub2`,
      chapterId: sub.id,
      subjectId: "gk" as const,
      titleBn: `বিষয়ভিত্তিক গভীর বিবরণ ও কার্যকরী প্রয়োগ`,
      titleEn: `${sub.titleEn} - In-Depth Analysis & Key Events`,
      orderIndex: 2,
      summaryBn: `পরীক্ষার জন্য অত্যন্ত প্রয়োজনীয় ঘটনাবলী, আইন, তথ্য এবং প্রয়োগমূলক বিবরণ।`,
      keyConcepts: chunk2.slice(0, 3).map((l) => (l.includes(" - ") ? l.split(" - ")[0] : l.slice(0, 25))),
    },
    {
      id: `${sub.id}_sub3`,
      chapterId: sub.id,
      subjectId: "gk" as const,
      titleBn: `পরীক্ষামূলক তথ্যপঞ্জি ও ওয়ান-লাইনার্স`,
      titleEn: `${sub.titleEn} - High-Yield Data & Facts`,
      orderIndex: 3,
      summaryBn: `পশ্চিমবঙ্গ গ্রাম পঞ্চায়েত পরীক্ষার সহায়ক ও এক্সিকিউটিভ অ্যাসিস্ট্যান্ট পদের দ্রুত রিভিশন চার্ট।`,
      keyConcepts: chunk3.slice(0, 3).map((l) => (l.includes(" - ") ? l.split(" - ")[0] : l.slice(0, 25))),
    },
  ];

  // Generate tabular rows from oneLiners
  const tableRows: string[][] = sub.oneLiners.map((line, idx) => {
    if (line.includes(" - ")) {
      const parts = line.split(" - ");
      return [parts[0].trim(), parts.slice(1).join(" - ").trim(), `পয়েন্ট ${idx + 1}`];
    } else if (line.includes(":")) {
      const parts = line.split(":");
      return [parts[0].trim(), parts.slice(1).join(":").trim(), `পয়েন্ট ${idx + 1}`];
    } else {
      const words = line.split(" ");
      const subjectWord = words.slice(0, 3).join(" ");
      const rest = words.slice(3).join(" ");
      return [subjectWord, rest || line, `নোট ${idx + 1}`];
    }
  });

  const sections = [
    {
      heading: meta.theoryHeading,
      subheading: "Comprehensive Conceptual Background",
      body: [
        `${sub.titleBn}-এর বিষয়টি পশ্চিমবঙ্গ গ্রাম পঞ্চায়েত ও রাজ্য সরকারি চাকরির সিলেবাসের অন্যতম ভিত্তি।`,
        `সারসংক্ষেপ: ${sub.summaryBn}`,
        `এই অধ্যায়ের মূল উদ্দেশ্য হল পরীক্ষার্থীদের কেবল মুখস্থ তথ্যের মধ্যে সীমাবদ্ধ না রেখে বিষয়টির সামগ্রিক কার্যকারণ, ঐতিহাসিক বা বৈজ্ঞানিক বাস্তবতা এবং সাংবিধানিক রূপরেখা পুঙ্খানুপুঙ্খভাবে বোঝানো।`,
      ],
      keyPoints: sub.keyPoints,
    },
    {
      heading: meta.detailsHeading,
      subheading: "Granular Facts & Explanations",
      body: sub.oneLiners.map((line, i) => `• [তথ্য ${i + 1}] ${line}`),
      keyPoints: sub.oneLiners.slice(0, 5),
    },
    {
      heading: meta.tableHeading,
      subheading: "Structured Revision Table",
      body: [
        "নিচের সারণীতে এই অধ্যায়ের সমস্ত মৌলিক তথ্য, সাল, স্থান ও ব্যক্তিবর্গকে একনজরে রিভিশনের জন্য সুবিন্যস্ত করা হয়েছে:",
      ],
      tables: {
        headers: ["মূল বিষয় / শিরোনাম", "বিশদ বিবরণ ও গুরুত্ব", "শ্রেণি"],
        rows: tableRows,
      },
    },
    {
      heading: meta.examHeading,
      subheading: "High-Yield Traps & Memory Points",
      body: [
        `১. গ্রাম পঞ্চায়েত সচিব ও সহায়ক পরীক্ষায় এই অধ্যায় থেকে সরাসরি প্রশ্ন থাকার সর্বোচ্চ সম্ভাবনা রয়েছে।`,
        `২. তথ্যের সাল ও নাম মনে রাখতে নিয়মিত লিখে চর্চা করুন। বিশেষ করে ${sub.keyPoints.join(", ")} সংক্রান্ত প্রশ্ন প্রায়শই আসে।`,
        `৩. বিভ্রান্তিকর অপশন পরিহার করতে প্রতিটি তথ্যের অন্তর্নিহিত কারণ স্মরণ রাখুন।`,
      ],
      keyPoints: [
        `সর্বাধিক গুরুত্বপূর্ণ তথ্য: ${sub.oneLiners[0] || ""}`,
        `দ্বিতীয় গুরুত্বপূর্ণ তথ্য: ${sub.oneLiners[1] || ""}`,
        `তৃতীয় গুরুত্বপূর্ণ তথ্য: ${sub.oneLiners[2] || ""}`,
      ],
    },
  ];

  // Full SAQ items
  const saqs = sub.oneLiners.map((line, idx) => {
    let question = "";
    let answer = "";

    if (line.includes(" - ")) {
      const parts = line.split(" - ");
      question = `${parts[0].trim()} সম্পর্কে কী জানা যায় বা এর গুরুত্ব কী?`;
      answer = parts.slice(1).join(" - ").trim();
    } else if (line.includes("বলেন") || line.includes("হয়") || line.includes("ছিলেন")) {
      question = `${line.replace(/([।\.]).*$/, "")}?`;
      answer = line;
    } else {
      question = `${line.slice(0, 40)}... সম্পর্কিত সঠিক তথ্য কী?`;
      answer = line;
    }

    return {
      id: `${sub.id}_saq_${idx + 1}`,
      questionBn: question,
      answerBn: answer,
      importantNoteBn: `পরীক্ষার জন্য অতি গুরুত্বপূর্ণ তথ্য। বিশেষ মনোযোগ দিন।`,
      category: meta.subjectBadge,
    };
  });

  return {
    id: sub.id,
    subjectId: "gk",
    chapterNumber: sub.subNumber,
    titleBn: sub.titleBn,
    titleEn: sub.titleEn,
    estimatedMinutes: Math.max(25, sub.oneLiners.length * 2),
    importantNotesCount: sub.oneLiners.length + sub.keyPoints.length,
    summary: sub.summaryBn,
    subTopics,
    content: {
      introduction: `${sub.titleBn}: পশ্চিমবঙ্গ গ্রাম পঞ্চায়েত নিয়োগ পরীক্ষার জন্য প্রস্তুতকৃত পুঙ্খানুপুঙ্খ ও সম্প্রসারিত স্টাডি নোটস। এতে রয়েছে বিশদ তাত্ত্বিক ধারণা, প্রামাণ্য চার্ট ও মডেল প্রশ্নোত্তর।`,
      sections,
      examTips: [
        `এই অধ্যায়ের ১-লাইনারগুলি প্রতিদিন সকালে অন্তত একবার দ্রুত চোখ বুলিয়ে নিন।`,
        `রিভিশনের পর সাথে সাথে নিচের 'MCQ প্র্যাকটিস' বাটনে ক্লিক করে নিজের প্রস্তুতি যাচাই করুন।`,
        `ভুল হওয়া প্রশ্নগুলি বুকমার্ক করে রাখুন যাতে পরীক্ষার আগে পুনরায় দেখতে পারেন।`,
      ],
      quickRevisionPoints: sub.oneLiners,
      oneLiners: sub.oneLiners,
      saqs,
    },
  };
}
