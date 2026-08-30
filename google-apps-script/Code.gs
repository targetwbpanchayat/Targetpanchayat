/**
 * WB Gram Panchayat Prep — OTP Email Service
 * Google Apps Script (paste at script.google.com)
 *
 * HOW TO DEPLOY (৩ মিনিট):
 * 1. https://script.google.com-এ যান → New Project
 * 2. সব কোড মুছে নিচের কোডটুকু পেস্ট করুন
 * 3. "Deploy" → "New deployment" ক্লিক করুন
 * 4. টাইপ: "Web app" সিলেক্ট করুন
 * 5. Description: "OTP Service"
 * 6. Execute as: "Me" (আপনার ইমেইল)
 * 7. Who has access: "Anyone"
 * 8. "Deploy" ক্লিক করুন, অনুমতি দিন
 * 9. যে URL পাবেন সেটা কপি করুন
 * 10. GitHub রিপোর Settings → Secrets → Actions-এ
 *     VITE_OTP_SERVICE_URL নামে সেভ করুন
 */

// OTP স্টোরেজ — CacheService (৬ ঘণ্টা পর অটো-ডিলিট)
const OTP_CACHE_PREFIX = "otp_";
const OTP_EXPIRY_MINUTES = 10;

function doGet(e) {
  return jsonResponse({ status: "ok", service: "WB GP OTP Service" });
}

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    const action = body.action;

    if (action === "send-otp") {
      return handleSendOtp(body);
    } else if (action === "verify-otp") {
      return handleVerifyOtp(body);
    } else if (action === "send-reset-otp") {
      return handleSendResetOtp(body);
    }

    return jsonResponse({ success: false, message: "অজানা action" });
  } catch (err) {
    return jsonResponse({ success: false, message: "সার্ভার এরর: " + err });
  }
}

// OTP পাঠানো (রেজিস্ট্রেশন)
function handleSendOtp(body) {
  const email = (body.email || "").toLowerCase().trim();
  const name = body.name || "পরীক্ষার্থী";

  if (!email || email.indexOf("@") === -1) {
    return jsonResponse({ success: false, message: "বৈধ ইমেইল দিন।" });
  }

  const otp = generateOtp();
  const cacheKey = OTP_CACHE_PREFIX + email;
  CacheService.getScriptCache().put(
    cacheKey,
    JSON.stringify({ otp: otp, type: "register", createdAt: Date.now() }),
    60 * OTP_EXPIRY_MINUTES
  );

  const subject = "[WB GP Prep] আপনার রেজিস্ট্রেশন ওটিপি: " + otp;
  const htmlBody = buildOtpEmailHtml(otp, name, "register");

  try {
    MailApp.sendEmail({ to: email, subject: subject, htmlBody: htmlBody });
    return jsonResponse({
      success: true,
      emailSent: true,
      message: "আপনার ইমেইলে ওটিপি পাঠানো হয়েছে। ইনবক্স বা স্প্যাম ফোল্ডার চেক করুন।",
    });
  } catch (err) {
    return jsonResponse({
      success: false,
      message: "ইমেইল পাঠাতে সমস্যা: " + err,
    });
  }
}

// পাসওয়ার্ড রিসেট OTP
function handleSendResetOtp(body) {
  const email = (body.email || "").toLowerCase().trim();

  if (!email || email.indexOf("@") === -1) {
    return jsonResponse({ success: false, message: "বৈধ ইমেইল দিন।" });
  }

  const otp = generateOtp();
  const cacheKey = OTP_CACHE_PREFIX + email;
  CacheService.getScriptCache().put(
    cacheKey,
    JSON.stringify({ otp: otp, type: "reset", createdAt: Date.now() }),
    60 * OTP_EXPIRY_MINUTES
  );

  const subject = "[WB GP Prep] পাসওয়ার্ড রিসেট ওটিপি: " + otp;
  const htmlBody = buildOtpEmailHtml(otp, "পরীক্ষার্থী", "reset");

  try {
    MailApp.sendEmail({ to: email, subject: subject, htmlBody: htmlBody });
    return jsonResponse({
      success: true,
      emailSent: true,
      message: "পাসওয়ার্ড রিসেট ওটিপি আপনার ইমেইলে পাঠানো হয়েছে।",
    });
  } catch (err) {
    return jsonResponse({
      success: false,
      message: "ইমেইল পাঠাতে সমস্যা: " + err,
    });
  }
}

// OTP যাচাই
function handleVerifyOtp(body) {
  const email = (body.email || "").toLowerCase().trim();
  const otp = (body.otp || "").toString().trim();

  if (!email || !otp) {
    return jsonResponse({ success: false, message: "ইমেইল এবং ওটিপি দরকার।" });
  }

  const cacheKey = OTP_CACHE_PREFIX + email;
  const cached = CacheService.getScriptCache().get(cacheKey);

  if (!cached) {
    return jsonResponse({ success: false, message: "কোনো ওটিপি পাওয়া যায়নি। পুনরায় ওটিপি পাঠান।" });
  }

  const record = JSON.parse(cached);

  if (record.otp !== otp) {
    return jsonResponse({ success: false, message: "ভুল ওটিপি! সঠিক কোড দিন।" });
  }

  // সফল — ক্যাশ থেকে মুছে ফেলুন
  CacheService.getScriptCache().remove(cacheKey);

  return jsonResponse({ success: true, message: "ইমেইল সফলভাবে যাচাই হয়েছে!" });
}

// ৬-সংখ্যার OTP তৈরি
function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// ইমেইল HTML টেমপ্লেট
function buildOtpEmailHtml(otp, name, type) {
  var color = type === "reset" ? "#f59e0b" : "#10b981";
  var title = type === "reset" ? "পাসওয়ার্ড রিসেট" : "রেজিস্ট্রেশন";

  return '<div style="font-family:Segoe UI,sans-serif;max-width:600px;margin:0 auto;background:#0f172a;color:#f8fafc;padding:24px;border-radius:12px;border:1px solid #334155">' +
    '<div style="text-align:center;margin-bottom:24px">' +
    '<h1 style="color:' + color + ';margin:0;font-size:24px">গ্রাম পঞ্চায়েত পরীক্ষা প্রস্তুতি</h1>' +
    '<p style="color:#94a3b8;font-size:14px;margin-top:4px">' + title + ' ওটিপি</p>' +
    '</div>' +
    '<div style="background:#1e293b;padding:20px;border-radius:8px;border-left:4px solid ' + color + '">' +
    '<p style="margin:0 0 12px;font-size:16px">নমস্কার ' + name + ',</p>' +
    '<p style="color:#cbd5e1;font-size:14px;margin:0 0 16px">আপনার ওটিপি:</p>' +
    '<div style="text-align:center;margin:24px 0">' +
    '<span style="display:inline-block;background:#0f172a;color:' + color + ';font-size:36px;font-weight:bold;letter-spacing:8px;padding:14px 32px;border-radius:8px;border:2px dashed ' + color + '">' + otp + '</span>' +
    '</div>' +
    '<p style="color:#94a3b8;font-size:13px;margin:0">⏰ এই ওটিপি ১০ মিনিট পর্যন্ত কার্যকর। কারও সাথে শেয়ার করবেন না।</p>' +
    '</div></div>';
}

// JSON রেসপন্স হেল্পার
function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
