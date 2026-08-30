// =====================================================
// Edge Function: verify-otp
// -----------------------------------------------------
// Verifies a 6-digit OTP for a given email + purpose.
// Reads the latest unverified, unexpired row from
// otp_codes via service role, compares hash, and marks
// it verified on success.
//
// POST JSON body:
//   { "email": "user@example.com", "code": "123456", "purpose": "password_reset" }
//
// Returns:
//   200 { success: true, message: "OTP verified" }
//   400 { success: false, error: "..." }
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

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  let payload: { email?: string; code?: string; purpose?: string };
  try {
    payload = await req.json();
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  const email = (payload.email || "").trim().toLowerCase();
  const code = (payload.code || "").trim();
  const purpose = (payload.purpose || "password_reset").trim() || "password_reset";

  if (!email || !email.includes("@")) {
    return json({ success: false, error: "সঠিক ইমেইল দিন।" }, 400);
  }
  if (!code || code.length !== 6 || !/^\d{6}$/.test(code)) {
    return json({ success: false, error: "OTP হল ৬-অঙ্কের সংখ্যা।" }, 400);
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

  if (!supabaseUrl || !serviceRoleKey) {
    return json({ error: "Server is not configured." }, 500);
  }

  // Fetch the latest OTP row for this email + purpose
  let row: { id: string; code_hash: string; expires_at: string; attempts: number; verified: boolean } | null = null;
  try {
    const res = await fetch(
      `${supabaseUrl}/rest/v1/otp_codes?email=eq.${encodeURIComponent(email)}&purpose=eq.${purpose}&order=created_at.desc&limit=1`,
      {
        headers: {
          apikey: serviceRoleKey,
          Authorization: `Bearer ${serviceRoleKey}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (res.ok) {
      const arr = await res.json();
      if (Array.isArray(arr) && arr.length > 0) row = arr[0];
    }
  } catch (err) {
    console.error("DB fetch error:", err);
  }

  if (!row) {
    return json({ success: false, error: "OTP পাওয়া যায়নি। নতুন OTP চান।" }, 400);
  }
  if (row.verified) {
    return json({ success: false, error: "এই OTP ইতিমধ্যে ব্যবহৃত হয়েছে।" }, 400);
  }
  if (new Date(row.expires_at).getTime() < Date.now()) {
    return json({ success: false, error: "OTP এর মেয়াদ শেষ। নতুন OTP চান।" }, 400);
  }
  if (row.attempts >= 5) {
    return json({ success: false, error: "অনেকবার ভুল হয়েছে। নতুন OTP চান।" }, 400);
  }

  // Hash the submitted code and compare
  const hashBuffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(code));
  const codeHash = Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  if (codeHash !== row.code_hash) {
    // Increment attempts
    try {
      await fetch(`${supabaseUrl}/rest/v1/otp_codes?id=eq.${row.id}`, {
        method: "PATCH",
        headers: {
          apikey: serviceRoleKey,
          Authorization: `Bearer ${serviceRoleKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ attempts: (row.attempts || 0) + 1 }),
      });
    } catch {}
    return json({ success: false, error: "ভুল OTP। আবার চেষ্টা করুন।" }, 400);
  }

  // Mark verified
  try {
    await fetch(`${supabaseUrl}/rest/v1/otp_codes?id=eq.${row.id}`, {
      method: "PATCH",
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ verified: true, attempts: (row.attempts || 0) + 1 }),
    });
  } catch (err) {
    console.error("DB update error:", err);
    return json({ error: "ভেরিফিকেশনে সমস্যা। আবার চেষ্টা করুন।" }, 500);
  }

  return json({ success: true, message: "OTP যাচাই সফল হয়েছে।" });
});
