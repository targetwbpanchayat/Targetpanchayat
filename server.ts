import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialize Gemini AI client
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (apiKey && apiKey !== "MY_GEMINI_API_KEY" && apiKey.length > 5) {
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return null;
}

// In-memory store for OTPs (with expiration timestamp)
interface OTPRecord {
  otp: string;
  expiresAt: number;
  type: "register" | "reset";
  createdAt: number;
}

const otpStore = new Map<string, OTPRecord>();

// Helper to configure nodemailer transporter
function getTransporter() {
  const gmailUser = process.env.GMAIL_USER?.trim();
  const gmailPass = process.env.GMAIL_APP_PASSWORD?.trim();

  if (gmailUser && gmailPass) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });
  }
  return null;
}

// Generate 6-digit numeric OTP
function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// API: Send verification OTP for Registration
app.post("/api/auth/send-otp", async (req, res) => {
  try {
    const { email, name } = req.body;
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return res.status(400).json({ success: false, message: "বৈধ ইমেইল ঠিকানা দিন।" });
    }

    const cleanEmail = email.toLowerCase().trim();
    const otp = generateOTP();
    const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes expiry

    otpStore.set(cleanEmail, {
      otp,
      expiresAt,
      type: "register",
      createdAt: Date.now(),
    });

    const transporter = getTransporter();
    let emailSent = false;
    let deliveryMessage = "ওটিপি সফলভাবে তৈরি হয়েছে।";

    if (transporter) {
      try {
        const mailOptions = {
          from: `"WB Gram Panchayat Prep" <${process.env.GMAIL_USER}>`,
          to: cleanEmail,
          subject: `[WB GP Prep] আপনার রেজিস্ট্রেশন ওটিপি (OTP): ${otp}`,
          html: `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0f172a; color: #f8fafc; padding: 24px; border-radius: 12px; border: 1px solid #334155;">
              <div style="text-align: center; margin-bottom: 24px;">
                <h1 style="color: #10b981; margin: 0; font-size: 24px;">গ্রাম পঞ্চায়েত পরীক্ষা প্রস্তুতি</h1>
                <p style="color: #94a3b8; font-size: 14px; margin-top: 4px;">পশ্চিমবঙ্গ পঞ্চায়েত রিক্রুটমেন্ট প্রিপারেশন</p>
              </div>
              
              <div style="background-color: #1e293b; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981;">
                <p style="margin: 0 0 12px 0; font-size: 16px;">নমস্কার ${name || "পরীক্ষার্থী"},</p>
                <p style="margin: 0 0 16px 0; color: #cbd5e1; font-size: 14px; line-height: 1.5;">
                  আপনার পশ্চিমবঙ্গ গ্রাম পঞ্চায়েত পরীক্ষা প্রস্তুতি অ্যাকাউন্টের ইমেইল যাচাইকরণের জন্য নিম্নের ৬-সংখ্যার ওটিপি (OTP) ব্যবহার করুন:
                </p>
                
                <div style="text-align: center; margin: 24px 0;">
                  <span style="display: inline-block; background-color: #0f172a; color: #34d399; font-size: 32px; font-weight: bold; letter-spacing: 6px; padding: 12px 28px; border-radius: 8px; border: 1px dashed #10b981;">
                    ${otp}
                  </span>
                </div>
                
                <p style="color: #94a3b8; font-size: 13px; margin: 0;">
                  ⏰ এই ওটিপি-টি আগামী <strong>১০ মিনিট</strong> পর্যন্ত কার্যকর থাকবে। এটি কারও সাথে শেয়ার করবেন না।
                </p>
              </div>
              
              <div style="margin-top: 24px; text-align: center; color: #64748b; font-size: 12px;">
                <p style="margin: 0;">WB Gram Panchayat Examination Preparation Portal</p>
                <p style="margin: 4px 0 0 0;">সরাসরি স্টাডি মেটেরিয়াল, প্র্যাকটিস ও মক টেস্টে যুক্ত হোন।</p>
              </div>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
        emailSent = true;
        deliveryMessage = "আপনার Gmail ইমেইলে ওটিপি পাঠানো হয়েছে। ইনবক্স অথবা স্প্যাম ফোল্ডার চেক করুন।";
      } catch (err: any) {
        console.error("Failed to send email via SMTP:", err);
        deliveryMessage = "Gmail সার্ভিস কানেক্ট হতে পারেনি। প্রিভিউ কোড নিচে দেওয়া হলো।";
      }
    }

    return res.json({
      success: true,
      emailSent,
      message: deliveryMessage,
      // Provide OTP for fast testing / sandbox mode if SMTP credentials are not configured yet
      devOtp: !emailSent ? otp : undefined,
    });
  } catch (error: any) {
    console.error("Error in /api/auth/send-otp:", error);
    return res.status(500).json({ success: false, message: "সার্ভার এরর, অনুগ্রহ করে পুনরায় চেষ্টা করুন।" });
  }
});

// API: Send password reset OTP
app.post("/api/auth/reset-password-otp", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return res.status(400).json({ success: false, message: "বৈধ ইমেইল ঠিকানা দিন।" });
    }

    const cleanEmail = email.toLowerCase().trim();
    const otp = generateOTP();
    const expiresAt = Date.now() + 10 * 60 * 1000;

    otpStore.set(cleanEmail, {
      otp,
      expiresAt,
      type: "reset",
      createdAt: Date.now(),
    });

    const transporter = getTransporter();
    let emailSent = false;
    let deliveryMessage = "পাসওয়ার্ড রিসেট ওটিপি তৈরি হয়েছে।";

    if (transporter) {
      try {
        const mailOptions = {
          from: `"WB Gram Panchayat Prep" <${process.env.GMAIL_USER}>`,
          to: cleanEmail,
          subject: `[WB GP Prep] পাসওয়ার্ড রিসেট ওটিপি: ${otp}`,
          html: `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0f172a; color: #f8fafc; padding: 24px; border-radius: 12px; border: 1px solid #334155;">
              <div style="text-align: center; margin-bottom: 24px;">
                <h1 style="color: #f59e0b; margin: 0; font-size: 24px;">পাসওয়ার্ড রিসেট অনুরোধ</h1>
              </div>
              <div style="background-color: #1e293b; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                <p style="margin: 0 0 12px 0; color: #cbd5e1; font-size: 14px;">
                  আপনার অ্যাকাউন্টের পাসওয়ার্ড পরিবর্তন করতে নিম্নের ৬-সংখ্যার কোডটি লিখুন:
                </p>
                <div style="text-align: center; margin: 20px 0;">
                  <span style="display: inline-block; background-color: #0f172a; color: #fbbf24; font-size: 32px; font-weight: bold; letter-spacing: 6px; padding: 10px 24px; border-radius: 8px; border: 1px dashed #f59e0b;">
                    ${otp}
                  </span>
                </div>
                <p style="color: #94a3b8; font-size: 12px; margin: 0;">কোডটির মেয়াদ ১০ মিনিট। আপনি যদি এই অনুরোধ না করে থাকেন তবে এটি উপেক্ষা করুন।</p>
              </div>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
        emailSent = true;
        deliveryMessage = "পাসওয়ার্ড রিসেট ওটিপি আপনার Gmail-এ পাঠানো হয়েছে।";
      } catch (err: any) {
        console.error("Failed to send reset email:", err);
      }
    }

    return res.json({
      success: true,
      emailSent,
      message: deliveryMessage,
      devOtp: !emailSent ? otp : undefined,
    });
  } catch (error: any) {
    console.error("Error in /api/auth/reset-password-otp:", error);
    return res.status(500).json({ success: false, message: "সার্ভার এরর হয়েছে।" });
  }
});

// API: Verify OTP
app.post("/api/auth/verify-otp", async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({ success: false, message: "ইমেইল এবং ওটিপি দুটোই প্রয়োজন।" });
    }

    const cleanEmail = email.toLowerCase().trim();
    const record = otpStore.get(cleanEmail);

    if (!record) {
      return res.status(400).json({ success: false, message: "কোনো ওটিপি পাওয়া যায়নি। পুনরায় ওটিপি পাঠান।" });
    }

    if (Date.now() > record.expiresAt) {
      otpStore.delete(cleanEmail);
      return res.status(400).json({ success: false, message: "ওটিপির মেয়াদ শেষ হয়ে গেছে। পুনরায় ওটিপি পাঠান।" });
    }

    if (record.otp !== otp.toString().trim()) {
      return res.status(400).json({ success: false, message: "ভুল ওটিপি! সঠিক ৬-সংখ্যার কোড দিন।" });
    }

    // OTP verified successfully, clear from memory
    otpStore.delete(cleanEmail);

    return res.json({
      success: true,
      message: "ইমেইল সফলভাবে যাচাই হয়েছে!",
    });
  } catch (error: any) {
    console.error("Error in /api/auth/verify-otp:", error);
    return res.status(500).json({ success: false, message: "সার্ভার সমস্যা।" });
  }
});

// API: Check Gmail configuration status
app.get("/api/auth/smtp-status", (req, res) => {
  const isConfigured = Boolean(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD);
  res.json({
    configured: isConfigured,
    user: process.env.GMAIL_USER ? `${process.env.GMAIL_USER.substring(0, 3)}***@gmail.com` : null,
  });
});

// Helper function for Gemini generation with multiple model fallbacks and retry logic
async function generateGeminiContentWithFallback(ai: GoogleGenAI, prompt: string): Promise<string | null> {
  const modelsToTry = [
    "gemini-3.7-flash",
    "gemini-3.1-flash-lite",
    "gemini-flash-latest",
  ];

  for (const model of modelsToTry) {
    try {
      const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.3,
        },
      });

      const text = response?.text?.trim();
      if (text && text.length > 5) {
        return text;
      }
    } catch (err: any) {
      const is503OrRateLimit =
        err?.status === 503 ||
        err?.code === 503 ||
        err?.message?.includes("503") ||
        err?.message?.includes("UNAVAILABLE") ||
        err?.message?.includes("high demand") ||
        err?.status === 429;

      if (is503OrRateLimit) {
        console.warn(`[Gemini API] Model ${model} is experiencing temporary high demand (503/429). Trying fallback model...`);
      } else {
        console.warn(`[Gemini API] Generation notice for model ${model}:`, err?.message || err);
      }
      // Brief wait before fallback
      await new Promise((resolve) => setTimeout(resolve, 350));
    }
  }

  return null;
}

// API: Generate / Fetch Today's Daily Current Affairs using Gemini AI
app.post("/api/current-affairs/generate-daily", async (req, res) => {
  try {
    const { dateBn, monthYearBn, isoDate } = req.body;
    const targetDate = dateBn || "আজকের তারিখ";
    const targetMonthYear = monthYearBn || "চলতি মাস";

    const ai = getGeminiClient();

    if (ai) {
      try {
        const prompt = `You are an expert exam curriculum designer for the West Bengal Gram Panchayat Examination (WB GP Recruitment) & West Bengal competitive exams.
Generate 3 to 4 brand new, highly exam-relevant, authentic Current Affairs items in Bengali (বাংলা) for the date: "${targetDate}" (${targetMonthYear}).

Focus areas:
1. পশ্চিমবঙ্গ সরকারি প্রকল্প ও গ্রামীণ উন্নয়ন (যেমন: কর্মশ্রী, পথশ্রী-রাস্তাশ্রী, কৃষক বন্ধু, লক্ষ্মীর ভাণ্ডার, স্বাস্থ্য সাথী, আনন্দধারা ইত্যাদি)
2. পশ্চিমবঙ্গ পঞ্চায়েত প্রশাসন, গ্রাম সংসদ, ই-গ্রাম স্বরাজ, স্থানীয় স্বায়ত্তশাসন ও পঞ্চায়েতি রাজ
3. সাম্প্রতিক জাতীয় ও আন্তর্জাতিক উল্লেখযোগ্য ঘটনা / নীতি আয়োগ / পরিবেশ / বিজ্ঞান
4. সাম্প্রতিক পুরস্কার ও খেলাধুলা (পশ্চিমবঙ্গ ও জাতীয় স্তর)

Return a strictly valid JSON array matching this exact format:
[
  {
    "id": "ca_ai_${Date.now()}_1",
    "titleBn": "শিরোনাম (Title in Bengali)",
    "category": "পশ্চিমবঙ্গ প্রকল্প" | "প্রশাসন ও পঞ্চায়েত" | "জাতীয় ও আন্তর্জাতিক" | "পুরস্কার ও খেলাধুলা" | "বিজ্ঞান ও পরিবেশ",
    "date": "${targetDate}",
    "monthYear": "${targetMonthYear}",
    "summaryBn": "২-৩ লাইনে তথ্যবহুল সারসংক্ষেপ",
    "bulletPoints": [
      "পরীক্ষার জন্য গুরুত্বপূর্ণ পয়েন্ট ১",
      "পরীক্ষার জন্য গুরুত্বপূর্ণ পয়েন্ট ২",
      "পরীক্ষার জন্য গুরুত্বপূর্ণ পয়েন্ট ৩"
    ],
    "practiceQuestion": {
      "questionBn": "এই ঘটনার ওপর ভিত্তি করে পঞ্চায়েত পরীক্ষার উপযোগী ১টি আদর্শ MCQ প্রশ্ন?",
      "options": ["বিকল্প ক", "বিকল্প খ", "বিকল্প গ", "বিকল্প ঘ"],
      "correctIndex": 0,
      "explanation": "সঠিক উত্তরের বিশদ ও সহজ ব্যাখ্যা।"
    }
  }
]
Output ONLY raw JSON array without any markdown fences or extra commentary.`;

        const rawText = await generateGeminiContentWithFallback(ai, prompt);

        if (rawText) {
          let parsed: any[] = [];
          try {
            parsed = JSON.parse(rawText.trim());
          } catch (parseErr) {
            const cleaned = rawText.replace(/```json/g, "").replace(/```/g, "").trim();
            parsed = JSON.parse(cleaned);
          }

          if (Array.isArray(parsed) && parsed.length > 0) {
            return res.json({
              success: true,
              source: "gemini",
              items: parsed,
            });
          }
        }
      } catch (geminiError: any) {
        console.warn("Notice: Gemini API temporarily unavailable, serving curated high-yield current affairs dataset.");
      }
    }

    // High-yield fallback items if Gemini API is temporarily busy or offline
    const fallbackItems = [
      {
        id: `ca_fallback_${Date.now()}_1`,
        titleBn: `পশ্চিমবঙ্গ পঞ্চায়েত ও গ্রামীণ ডিজিটাল সেবা সম্প্রসারণ (${targetDate})`,
        category: "প্রশাসন ও পঞ্চায়েত",
        date: targetDate,
        monthYear: targetMonthYear,
        summaryBn: "রাজ্যের সমস্ত গ্রাম পঞ্চায়েত অফিসে ডিজিটাল রেকর্ড রুম ও 'ই-ডকুমেন্ট' ভেরিফিকেশন সেবা চালু করা হয়েছে, যার ফলে নাগরিকরা অনলাইনেই জন্ম-মৃত্যু সার্টিফিকেট ও ট্রেড এনওসি সংগ্রহ করতে পারছেন।",
        bulletPoints: [
          "ই-গ্রাম পঞ্চায়েত সেবার মাধ্যমে প্রতিটি পঞ্চায়েত ভবন ব্রডব্যান্ড সংযোগের আওতাভুক্ত।",
          "গ্রাম পঞ্চায়েত কর ও ফি আদায়ে ১০০% ডিজিটাল পেমেন্ট গেটওয়ে কার্যকর।"
        ],
        practiceQuestion: {
          questionBn: "পশ্চিমবঙ্গে পঞ্চায়েতের প্রশাসনিক নথিপত্র ডিজিটাল সংরক্ষণের জন্য কোন উদ্যোগ গ্রহণ করা হয়েছে?",
          options: ["ডিজিটাল গ্রাম পঞ্চায়েত রেকর্ড রুম", "ই-গ্রাম গতি", "গ্রাম পোর্টাল", "পঞ্চায়েত সুরক্ষা"],
          correctIndex: 0,
          explanation: "স্বচ্ছতা ও দ্রুত নাগরিক সেবার স্বার্থে ডিজিটাল পঞ্চায়েত রেকর্ড রুম চালু করা হয়েছে।"
        }
      },
      {
        id: `ca_fallback_${Date.now()}_2`,
        titleBn: `পশ্চিমবঙ্গ 'কর্মশ্রী' গ্রামীণ কর্মসংস্থান পরিবীক্ষণ রিপোর্ট (${targetMonthYear})`,
        category: "পশ্চিমবঙ্গ প্রকল্প",
        date: targetDate,
        monthYear: targetMonthYear,
        summaryBn: "রাজ্য সরকারের নিজস্ব অর্থায়নে পরিচালিত কর্মশ্রী প্রকল্পে গ্রামীণ মহিলাদের ৫০% এর অধিক অংশগ্রহণ নিশ্চিত হয়েছে এবং নদী বাঁধ রক্ষণাবেক্ষণে রেকর্ড সংখ্যক মানবদিবস তৈরি হয়েছে।",
        bulletPoints: [
          "মহিলাদের স্বনির্ভর দলগুলির মাধ্যমে কাজের তদারকি ও সোশ্যাল অডিট পরিচালনা।",
          "প্রতিটি জবকার্ডধারীর ব্যাংক অ্যাকাউন্টে সরাসরি নির্দিষ্ট সময়ের মধ্যে মজুরি জমা।"
        ],
        practiceQuestion: {
          questionBn: "পশ্চিমবঙ্গে 'কর্মশ্রী' প্রকল্পে মজুরি কোন মাধ্যমে প্রদান করা হয়?",
          options: ["সরাসরি ব্যাংক অ্যাকাউন্ট (DBT)", "নগদ টাকা পঞ্চায়েত অফিসে", "পোস্ট অফিস চেক", "কুপন সিস্টেম"],
          correctIndex: 0,
          explanation: "কর্মশ্রী প্রকল্পের সমস্ত আর্থিক লেনদেন ও মজুরি সরাসরি সুবিধাভোগীর ব্যাংক অ্যাকাউন্টে (Direct Benefit Transfer) পাঠানো হয়।"
        }
      },
      {
        id: `ca_fallback_${Date.now()}_3`,
        titleBn: `পশ্চিমবঙ্গে গ্রামীণ পানীয় জল সরবরাহ ও 'জলস্বপ্ন' প্রকল্পের অগ্রগতি (${targetMonthYear})`,
        category: "পশ্চিমবঙ্গ প্রকল্প",
        date: targetDate,
        monthYear: targetMonthYear,
        summaryBn: "রাজ্যের গ্রামীণ এলাকায় বাড়ি বাড়ি বিশুদ্ধ পানীয় জল পৌঁছে দিতে 'জলস্বপ্ন' প্রকল্পে প্রায় ৮০% গ্রামীণ পরিবারকে পাইপলাইনের আওতায় আনা হয়েছে।",
        bulletPoints: [
          "প্রতিটি গ্রাম পঞ্চায়েতে জল পরীক্ষা কিট (FTK) প্রদান ও স্বনির্ভর গোষ্ঠীর মহিলাদের প্রশিক্ষণ।",
          "সৌরচালিত মিনি পাইপড ওয়াটার সাপ্লাই স্কিম প্রত্যন্ত সুন্দরবন ও পাহাড়ি অঞ্চলে কার্যকর।"
        ],
        practiceQuestion: {
          questionBn: "পশ্চিমবঙ্গে গ্রামীণ পরিবারে বিশুদ্ধ পানীয় জল সরবরাহের মূল প্রকল্পের নাম কী?",
          options: ["জলস্বপ্ন প্রকল্প", "নির্মল ধারা", "জলশ্রী", "সুজল বাংলা"],
          correctIndex: 0,
          explanation: "পশ্চিমবঙ্গ সরকারের 'জলস্বপ্ন' প্রকল্পের মাধ্যমে গ্রামীণ প্রতিটি ঘরে পাইপলাইনের মাধ্যমে পরিশ্রুত পানীয় জল সরবরাহ করা হচ্ছে।"
        }
      }
    ];

    return res.json({
      success: true,
      source: "fallback",
      items: fallbackItems,
    });
  } catch (error: any) {
    console.error("Error in /api/current-affairs/generate-daily:", error);
    return res.status(500).json({ success: false, message: "সার্ভার এরর।" });
  }
});

async function startServer() {
  // Vite middleware in dev
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`WB Gram Panchayat Prep Server running on port ${PORT}`);
  });
}

startServer();
