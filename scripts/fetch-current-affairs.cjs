/**
 * Kolom.in Current Affairs Scraper
 * 
 * Fetches daily current affairs from kolom.in's Atom JSON feed
 * and converts them into CurrentAffairItem format for the app.
 * 
 * Runs via GitHub Action daily.
 */

const FEED_URL = "https://www.kolom.in/feeds/posts/default/-/Daily%20Current%20Affairs?alt=json&max-results=50";
const MONTHLY_FEED_URL = "https://www.kolom.in/feeds/posts/default/-/Current%20Affairs?alt=json&max-results=50";

const BENGALI_MONTHS = [
  "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন",
  "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"
];

const BENGALI_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

function toBengaliNumber(num) {
  return num.toString().split("").map(d => BENGALI_DIGITS[parseInt(d, 10)] || d).join("");
}

function toBengaliDate(date) {
  const day = toBengaliNumber(date.getDate());
  const month = BENGALI_MONTHS[date.getMonth()];
  const year = toBengaliNumber(date.getFullYear());
  return `${day} ${month} ${year}`;
}

function categorize(title, content) {
  const text = (title + " " + content).toLowerCase();
  if (/পঞ্চায়েত|পঞ্চায়েত|panchayat|গ্রাম|সরকার|মন্ত্র|প্রকল্প|যোজনা|scheme/.test(text)) {
    return "পশ্চিমবঙ্গ প্রকল্প";
  }
  if (/নিয়োগ|appointment|পদত্যাগ|resign|মন্ত্রী|minister/.test(text)) {
    return "প্রশাসন ও পঞ্চায়েত";
  }
  if (/পুরস্কার|award|খেলা|sport|ক্রিকেট|football|ফুটবল|ম্যাচ|টুর্নামেন্ট/.test(text)) {
    return "পুরস্কার ও খেলাধুলা";
  }
  if (/বিজ্ঞান|science|ISRO|নাসা|space|প্রযুক্তি|technology|জলবায়ু|climate|পরিবেশ|environment/.test(text)) {
    return "বিজ্ঞান ও পরিবেশ";
  }
  return "জাতীয় ও আন্তর্জাতিক";
}

/**
 * Parse MCQs from kolom.in daily current affairs HTML content
 */
function parseMCQs(htmlContent) {
  // Remove HTML tags but preserve text
  const text = htmlContent
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/?(div|p|span|strong|b|em|i|ul|ol|li|h[1-6])[^>]*>/gi, "\n")
    .replace(/<a[^>]*>(.*?)<\/a>/gis, "$1")
    .replace(/<img[^>]*>/gi, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&/g, "&")
    .replace(/</g, "<")
    .replace(/>/g, ">")
    .replace(/"/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  const questions = [];
  const lines = text.split("\n");
  
  let currentQ = null;
  let currentOptions = [];
  let currentAnswer = -1;
  let currentExplanation = "";
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    // Match question (starts with number followed by . or )
    const qMatch = line.match(/^(\d+)[\.\)]\s*(.+)/);
    if (qMatch && !line.match(/^[abcd]\)/i)) {
      // If we have a pending question, save it
      if (currentQ && currentOptions.length >= 2) {
        questions.push({
          questionBn: currentQ,
          options: currentOptions,
          correctIndex: currentAnswer >= 0 ? currentAnswer : 0,
          explanation: currentExplanation || ""
        });
      }
      currentQ = qMatch[2];
      currentOptions = [];
      currentAnswer = -1;
      currentExplanation = "";
      continue;
    }
    
    // Match options (a), (b), (c), (d) or ক), খ), গ), ঘ)
    const optMatch = line.match(/^(?:\(?([a-dক-ঘ])\)?[\.\)])\s*(.+)/i);
    if (optMatch) {
      currentOptions.push(optMatch[2]);
      continue;
    }
    
    // Match answer line
    if (/উত্তর|answer|সঠিক/i.test(line)) {
      const ansText = line.toLowerCase();
      if (/a|ক/.test(ansText)) currentAnswer = 0;
      else if (/b|খ/.test(ansText)) currentAnswer = 1;
      else if (/c|গ/.test(ansText)) currentAnswer = 2;
      else if (/d|ঘ/.test(ansText)) currentAnswer = 3;
      // Also try to extract explanation
      const expMatch = line.match(/[:\-]\s*(.+)/);
      if (expMatch) currentExplanation = expMatch[1];
      continue;
    }
  }
  
  // Don't forget the last question
  if (currentQ && currentOptions.length >= 2) {
    questions.push({
      questionBn: currentQ,
      options: currentOptions,
      correctIndex: currentAnswer >= 0 ? currentAnswer : 0,
      explanation: currentExplanation || ""
    });
  }
  
  return questions;
}

/**
 * Fetch and parse feed from kolom.in
 */
async function fetchFeed(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Feed fetch failed: ${response.status}`);
  }
  return response.json();
}

/**
 * Convert feed entries to CurrentAffairItem format
 */
function convertDailyEntries(entries) {
  const items = [];
  
  for (const entry of entries) {
    const published = new Date(entry.published.$t);
    const dateStr = toBengaliDate(published);
    const monthYear = `${BENGALI_MONTHS[published.getMonth()]} ${toBengaliNumber(published.getFullYear())}`;
    
    const title = entry.title.$t || "";
    const content = entry.content?.$t || "";
    
    // Parse MCQs from content
    const mcqs = parseMCQs(content);
    
    if (mcqs.length === 0) continue;
    
    // Group MCQs into a single current affair item per day
    const itemId = `kolom_daily_${published.toISOString().split("T")[0]}`;
    const titleBn = title.replace(/\|.*/, "").trim() || `দৈনিক কারেন্ট অ্যাফেয়ার্স — ${dateStr}`;
    
    // Use first question as practice question
    const firstQ = mcqs[0];
    
    // Create bullet points from all questions
    const bulletPoints = mcqs.slice(0, 5).map((q, i) => 
      `${toBengaliNumber(i + 1)}. ${q.questionBn} — উত্তর: ${q.options[q.correctIndex] || ""}`
    );
    
    items.push({
      id: itemId,
      titleBn: titleBn,
      category: categorize(title, content),
      date: dateStr,
      monthYear: monthYear,
      summaryBn: `${dateStr} তারিখের গুরুত্বপূর্ণ কারেন্ট অ্যাফেয়ার্স। নিচে ${toBengaliNumber(mcqs.length)}টি MCQ প্রশ্ন দেওয়া হলো:`,
      bulletPoints: bulletPoints,
      practiceQuestion: {
        questionBn: firstQ.questionBn,
        options: firstQ.options,
        correctIndex: firstQ.correctIndex,
        explanation: firstQ.explanation || `${dateStr} তারিখের কারেন্ট অ্যাফেয়ার্স থেকে।`
      },
      isAiGenerated: false,
      tags: ["kolom.in", "daily"]
    });
  }
  
  return items;
}

/**
 * Convert monthly feed entries
 */
function convertMonthlyEntries(entries) {
  const items = [];
  
  for (const entry of entries) {
    const published = new Date(entry.published.$t);
    const monthYear = `${BENGALI_MONTHS[published.getMonth()]} ${toBengaliNumber(published.getFullYear())}`;
    
    const title = entry.title.$t || "";
    const content = entry.content?.$t || "";
    
    // Skip if not a monthly compilation
    if (!/PDF|monthly|মাসিক|বাংলা|Bengali/i.test(title)) continue;
    
    const itemId = `kolom_monthly_${published.getFullYear()}_${published.getMonth() + 1}`;
    
    // Extract text content
    const text = content
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    
    items.push({
      id: itemId,
      titleBn: title.replace(/\|.*/, "").trim() || `মাসিক কারেন্ট অ্যাফেয়ার্স — ${monthYear}`,
      category: "জাতীয় ও আন্তর্জাতিক",
      date: toBengaliDate(published),
      monthYear: monthYear,
      summaryBn: text.substring(0, 300) + (text.length > 300 ? "..." : ""),
      bulletPoints: [
        `${monthYear} মাসের গুরুত্বপূর্ণ ঘটনাবলি`,
        "উৎস: kolom.in থেকে সংকলিত",
        "WBCS, PSC, SSC, Railway সহ সব পরীক্ষার জন্য উপযোগী"
      ],
      practiceQuestion: undefined,
      isAiGenerated: false,
      tags: ["kolom.in", "monthly"]
    });
  }
  
  return items;
}

/**
 * Main function — fetch from kolom.in and generate new items
 */
async function main() {
  console.log("Fetching daily current affairs from kolom.in...");
  
  let dailyItems = [];
  let monthlyItems = [];
  
  try {
    const dailyFeed = await fetchFeed(FEED_URL);
    const dailyEntries = dailyFeed.feed?.entry || [];
    console.log(`Found ${dailyEntries.length} daily entries`);
    dailyItems = convertDailyEntries(dailyEntries);
    console.log(`Converted ${dailyItems.length} daily current affairs items`);
  } catch (e) {
    console.error("Failed to fetch daily feed:", e.message);
  }
  
  try {
    const monthlyFeed = await fetchFeed(MONTHLY_FEED_URL);
    const monthlyEntries = monthlyFeed.feed?.entry || [];
    console.log(`Found ${monthlyEntries.length} monthly entries`);
    monthlyItems = convertMonthlyEntries(monthlyEntries);
    console.log(`Converted ${monthlyItems.length} monthly current affairs items`);
  } catch (e) {
    console.error("Failed to fetch monthly feed:", e.message);
  }
  
  const allNewItems = [...dailyItems, ...monthlyItems];
  
  // Output as JSON for the next step
  const output = JSON.stringify(allNewItems, null, 2);
  const fs = require("fs");
  fs.writeFileSync("/tmp/new_current_affairs.json", output);
  
  console.log(`\nTotal new items: ${allNewItems.length}`);
  console.log("Written to /tmp/new_current_affairs.json");
}

main().catch(console.error);
