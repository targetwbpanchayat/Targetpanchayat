// =====================================================
// Edge Function: send-otp
// Gmail SMTP দিয়ে ৬-অঙ্কের OTP ইমেইল পাঠায়
// =====================================================

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function json(body: object, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function base64encode(str: string): string {
  return btoa(str);
}

// SMTP client using Deno's native TLS support (no node:tls needed)
async function sendGmailSmtp(
  fromName: string,
  fromEmail: string,
  appPassword: string,
  toEmail: string,
  subject: string,
  htmlBody: string
): Promise<string> {
  const conn = await Deno.connectTls({
    hostname: "smtp.gmail.com",
    port: 465,
  });

  const reader = conn.readable.getReader();
  const writer = conn.writable.getWriter();
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  let buffer = "";

  async function waitFor(expectCode: string): Promise<string> {
    buffer = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      // Check if we have a complete response (ends with \r\n)
      // and it's not a continuation line (nnn-)
      if (buffer.includes("\r\n")) {
        const lines = buffer.split("\r\n").filter(l => l.length > 0);
        const lastLine = lines[lines.length - 1];
        // If last line starts with code followed by space, it's the final line
        if (/^\d{3} /.test(lastLine)) {
          if (!lastLine.startsWith(expectCode)) {
            conn.close();
            throw new Error(`SMTP expected ${expectCode}, got: ${lastLine}`);
          }
          return lastLine;
        }
        // If it's a continuation (nnn-), keep reading
      }
    }
    throw new Error(`SMTP connection closed while waiting for ${expectCode}`);
  }

  async function send(cmd: string) {
    await writer.write(encoder.encode(cmd + "\r\n"));
  }

  await waitFor("220");
  await send("EHLO targetpanchayat");
  await waitFor("250");

  await send("AUTH LOGIN");
  await waitFor("334");
  await send(base64encode(fromEmail));
  await waitFor("334");
  await send(base64encode(appPassword));
  await waitFor("235");

  await send(`MAIL FROM:<${fromEmail}>`);
  await waitFor("250");
  await send(`RCPT TO:<${toEmail}>`);
  await waitFor("250");

  await send("DATA");
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
  await writer.write(encoder.encode(body));
  await waitFor("250");

  await send("QUIT");
  conn.close();

  return "ok";
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

  const otp = String(Math.floor(100000 + Math.random() * 900000));

  const hashBuffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(otp));
  const codeHash = Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  const expiresAt = new Date(Date.now() + 10 * 60 * 1000).toISOString();

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

  const subject = "আপনার OTP — Target Panchayat";
  const htmlBody = `<div style="font-family:Segoe UI,Arial,sans-serif;max-width:480px;margin:0 auto;padding:24px;background:#f8fafc;border-radius:12px"><div style="text-align:center;margin-bottom:20px"><strong style="font-size:20px;color:#059669">Target Panchayat</strong></div><p style="font-size:15px;color:#334155">আপনার ভেরিফিকেশন কোড (OTP):</p><div style="text-align:center;margin:24px 0"><span style="display:inline-block;font-size:36px;letter-spacing:8px;font-weight:700;color:#059669;background:#ecfdf5;padding:16px 28px;border-radius:10px;border:1px solid #a7f3d0">${otp}</span></div><p style="font-size:13px;color:#64748b">এই OTP ১০ মিনিট পর মেয়াদোত্তীর্ণ হবে। আপনি যদি এই অনুরোধ না করে থাকেন, এই ইমেইলটি উপেক্ষা করুন।</p><hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0"><p style="font-size:12px;color:#94a3b8">Target Panchayat — পঞ্চায়েত পরীক্ষার প্রস্তুতির অ্যাপ।</p></div>`;

  try {
    await sendGmailSmtp(smtpFromName, smtpUser, smtpPassword, email, subject, htmlBody);
  } catch (err) {
    console.error("SMTP send error:", err?.message || err);
    return json({ error: `ইমেইল পাঠাতে সমস্যা: ${err?.message || err}` }, 500);
  }

  return json({ success: true, message: "OTP আপনার ইমেইলে পাঠানো হয়েছে। ইনবক্স বা স্প্যাম ফোল্ডার চেক করুন।" });
});
