import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

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
