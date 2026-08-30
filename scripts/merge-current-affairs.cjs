/**
 * Merge new current affairs into the existing data file
 * Reads /tmp/new_current_affairs.json and updates src/data/currentAffairs.ts
 */

const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "src", "data", "currentAffairs.ts");
const NEW_ITEMS_FILE = "/tmp/new_current_affairs.json";

function formatItem(item, indent = "  ") {
  let str = `${indent}{\n`;
  str += `${indent}  id: "${item.id}",\n`;
  str += `${indent}  titleBn: "${item.titleBn.replace(/"/g, '\\"')}",\n`;
  str += `${indent}  category: "${item.category}",\n`;
  str += `${indent}  date: "${item.date}",\n`;
  str += `${indent}  monthYear: "${item.monthYear}",\n`;
  str += `${indent}  summaryBn: "${item.summaryBn.replace(/"/g, '\\"').replace(/\n/g, ' ')}",\n`;
  str += `${indent}  bulletPoints: [\n`;
  for (const bp of item.bulletPoints) {
    str += `${indent}    "${bp.replace(/"/g, '\\"').replace(/\n/g, ' ')}",\n`;
  }
  str += `${indent}  ],\n`;
  if (item.practiceQuestion) {
    str += `${indent}  practiceQuestion: {\n`;
    str += `${indent}    questionBn: "${item.practiceQuestion.questionBn.replace(/"/g, '\\"')}",\n`;
    str += `${indent}    options: [${item.practiceQuestion.options.map(o => `"${o.replace(/"/g, '\\"')}"`).join(", ")}],\n`;
    str += `${indent}    correctIndex: ${item.practiceQuestion.correctIndex},\n`;
    str += `${indent}    explanation: "${(item.practiceQuestion.explanation || "").replace(/"/g, '\\"')}",\n`;
    str += `${indent}  },\n`;
  }
  str += `${indent}  isAiGenerated: false,\n`;
  str += `${indent}  tags: ${JSON.stringify(item.tags || [])},\n`;
  str += `${indent}},\n`;
  return str;
}

function main() {
  // Read new items
  if (!fs.existsSync(NEW_ITEMS_FILE)) {
    console.log("No new items file found. Nothing to merge.");
    return;
  }
  
  const newItemsRaw = fs.readFileSync(NEW_ITEMS_FILE, "utf-8");
  const newItems = JSON.parse(newItemsRaw);
  
  if (newItems.length === 0) {
    console.log("No new items to merge.");
    return;
  }
  
  // Read existing data file
  const existingContent = fs.readFileSync(DATA_FILE, "utf-8");
  
  // Extract existing IDs
  const idMatches = existingContent.matchAll(/id:\s*"([^"]+)"/g);
  const existingIds = new Set();
  for (const m of idMatches) {
    existingIds.add(m[1]);
  }
  
  // Filter out duplicates
  const trulyNew = newItems.filter(item => !existingIds.has(item.id));
  
  if (trulyNew.length === 0) {
    console.log("All items already exist. No new items to add.");
    return;
  }
  
  console.log(`Adding ${trulyNew.length} new items...`);
  
  // Format new items as TS code
  const newCode = trulyNew.map(item => formatItem(item, "  ")).join("\n");
  
  // Insert before the closing bracket of the array
  // Find the last "];" in the file
  const lastBracketIdx = existingContent.lastIndexOf("];");
  if (lastBracketIdx === -1) {
    console.error("Could not find array closing bracket in data file!");
    process.exit(1);
  }
  
  // Also insert before MONTH_LIST export
  const monthListMatch = existingContent.match(/\nexport const MONTH_LIST/);
  let insertPoint;
  if (monthListMatch && monthListMatch.index && monthListMatch.index < lastBracketIdx) {
    insertPoint = monthListMatch.index;
  } else {
    insertPoint = lastBracketIdx;
  }
  
  const updatedContent = 
    existingContent.substring(0, insertPoint) +
    "\n  // --- kolom.in auto-synced items ---\n" +
    newCode +
    "\n" +
    existingContent.substring(insertPoint);
  
  fs.writeFileSync(DATA_FILE, updatedContent);
  console.log(`Successfully added ${trulyNew.length} new current affairs items to ${DATA_FILE}`);
  
  // Also update MONTH_LIST if new months found
  const allMonthYears = new Set();
  const monthYearMatches = updatedContent.matchAll(/monthYear:\s*"([^"]+)"/g);
  for (const m of monthYearMatches) {
    allMonthYears.add(m[1]);
  }
  console.log(`Total unique month-year labels: ${allMonthYears.size}`);
}

main();
