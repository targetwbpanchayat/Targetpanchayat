// =====================================================
// Edge Function: send-otp
// -----------------------------------------------------
// Generates a 6-digit OTP, stores a hash in the otp_codes
// table (via service role), and emails it to the user
// using Gmail SMTP (App Password).
//
// Secrets (set in Supabase dashboard):
//   SMTP_USER      e.g. targetpanchayat@gmail.com
//   SMTP_PASSWORD  16-char App Password (no spaces)
//   SMTP_FROM_NAME  e.g. "Target Panchayat"
//
// POST JSON body:
//   { "email": "user@example.com", "purpose": "password_reset" }
//
// Returns:
//   200 { success: true, message: "OTP sent" }
//   400 { error: "..." }
// =====================================================

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Minimal SMTP client over TLS socket for Gmail (smtp.gmail.com:465).
// We avoid external deps so the function has zero import issues.
import { connect } from "node:tls";

function base64encode(str: string): string {
  return btoa(str);
}

async function sendGmailSmtp(
  fromName: string,
  fromEmail: string,
  appPassword: string,
  toEmail: string,
  subject: string,
  htmlBody: string
): Promise<string> {
  const host = "smtp.gmail.com";
  const port = 465;

  const socket = await connect({ hostname: host, port });

  let buf = "";
  const waitFor = async (expectCode: string) => {
    while (!buf.includes("\r\n")) {
      const chunk = new Uint8Array(4096);
      const n = await socket.read(chunk);
      if (n === null) break;
      buf += new TextDecoder().decode(chunk.subarray(0, n));
      if (buf.includes("\r\n")) break;
    }
    // Read any continuation lines (nnn-... until nnN<space>)
    while (buf.match(/\r\n\d{3}-/)) {
      const chunk = new Uint8Array(4096);
      const n = await socket.read(chunk);
      if (n === null) break;
      buf += new TextDecoder().decode(chunk.subarray(0, n));
    }
    const line = buf.trim().split("\r\n").pop() || buf.trim();
    if (!line.startsWith(expectCode)) {
      socket.close();
      throw new Error(`SMTP expected ${expectCode}, got: ${line}`);
    }
    buf = "";
    return line;
  };

  const send = (cmd: string) => {
    socket.write(new TextEncoder().encode(cmd + "\r\n"));
    buf = "";
  };

  await waitFor("220");
  send(`EHLO targetpanchayat`);
  await waitFor("250");

  send(`AUTH LOGIN`);
  await waitFor("334");
  send(base64encode(fromEmail));
  await waitFor("334");
  send(base64encode(appPassword));
  await waitFor("235");

  send(`MAIL FROM:<${fromEmail}>`);
  await waitFor("250");
  send(`RCPT TO:<${toEmail}>`);
  await waitFor("250");

  send(`DATA`);
  await waitFor("354");

  const headers = [
    `From: "${fromName}" <${fromEmail}>`,
    `To: <${toEmail}>`,
    `Subject: ${subject}`,
    "MIME-Version: 1.0",
    "Content-Type: text/html; charset=UTF-8",
    "",
  ].join("\r\n");

  const body = headers + htmlBody + "\r\n.\r\n";
  socket.write(new TextEncoder().encode(body));
  await waitFor("250");

  send(`QUIT`);
  socket.close();

  return "ok";
}

function json(body: object, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  let payload: { email?: string; purpose?: string };
  try {
    payload = await req.json();
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  const email = (payload.email || "").trim().toLowerCase();
  const purpose = (payload.purpose || "password_reset").trim() || "password_reset";

  if (!email || !email.includes("@") || email.length < 5) {
    return json({ error: "A valid email is required." }, 400);
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const smtpUser = Deno.env.get("SMTP_USER")!;
  const smtpPassword = (Deno.env.get("SMTP_PASSWORD") || "").replace(/\s+/g, "");
  const smtpFromName = Deno.env.get("SMTP_FROM_NAME") || "Target Panchayat";

  if (!supabaseUrl || !serviceRoleKey) {
    return json({ error: "Server is not configured (SUPABASE)." }, 500);
  }
  if (!smtpUser || !smtpPassword) {
    return json({ error: "Server is not configured (SMTP)." }, 500);
  }

  // Generate 6-digit OTP
  const otp = String(Math.floor(100000 + Math.random() * 900000));

  // Hash the OTP with a simple SHA-256 before storing (so a DB leak
  // does not expose codes). We compare hashes at verify time.
  const hashBuffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(otp));
  const codeHash = Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  const expiresAt = new Date(Date.now() + 10 * 60 * 1000).toISOString(); // 10 min

  // Clean up old codes for this email/purpose, then insert the new one.
  try {
    await fetch(`${supabaseUrl}/rest/v1/otp_codes?email=eq.${encodeURIComponent(email)}&purpose=eq.${purpose}`, {
      method: "DELETE",
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
    });

    const insertRes = await fetch(`${supabaseUrl}/rest/v1/otp_codes`, {
      method: "POST",
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        email,
        code_hash: codeHash,
        purpose,
        attempts: 0,
        verified: false,
        expires_at: expiresAt,
      }),
    });
    if (!insertRes.ok) {
      const t = await insertRes.text();
      throw new Error(`DB insert failed: ${insertRes.status} ${t}`);
    }
  } catch (err) {
    console.error("DB error storing OTP:", err);
    return json({ error: "Could not generate OTP. Please try again." }, 500);
  }

  // Build the email HTML
  const subject = "আপনার OTP — Target Panchayat";
  const htmlBody = [
    `<div style="font-family:Segoe UI,Arial,sans-serif;max-width:480px;margin:0 auto;padding:24px;background:#f8fafc;border-radius:12px">`,
    `<div style="text-align:center;margin-bottom:20px"><strong style="font-size:20px;color:#059669">Target Panchayat</strong></div>`,
    `<p style="font-size:15px;color:#334155">আপনার ভেরিফিকেশন কোড (OTP):</p>`,
    `<div style="text-align:center;margin:24px 0">`,
    `<span style="display:inline-block;font-size:36px;letter-spacing:8px;font-weight:700;color:#059669;background:#ecfdf5;padding:16px 28px;border-radius:10px;border:1px solid #a7f3d0">${otp}</span>`,
    `</div>`,
    `<p style="font-size:13px;color:#64748b">এই OTP ১০ মিনিট পর মেয়াদোত্তীর্ণ হবে। আপনি যদি এই অনুরোধ না করে থাকেন, এই ইমেইলটি উপেক্ষা করুন।</p>`,
    `<hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0">`,
    `<p style="font-size:12px;color:#94a3b8">Target Panchayat — পঞ্চায়েত পরীক্ষার প্রস্তুতির অ্যাপ।</p>`,
    `</div>`,
  ].join("");

  // Send the email via Gmail SMTP
  try {
    await sendGmailSmtp(smtpFromName, smtpUser, smtpPassword, email, subject, htmlBody);
  } catch (err) {
    console.error("SMTP send error:", err);
    return json({ error: "ইমেইল পাঠাতে সমস্যা হলো। একটু পরে আবার চেষ্টা করুন।" }, 500);
  }

  return json({ success: true, message: "OTP আপনার ইমেইলে পাঠানো হয়েছে। ইনবক্স বা স্প্যাম ফোল্ডার চেক করুন।" });
});
