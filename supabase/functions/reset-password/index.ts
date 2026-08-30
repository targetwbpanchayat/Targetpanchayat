// =====================================================
// Edge Function: reset-password
// -----------------------------------------------------
// Called AFTER verify-otp has succeeded. Uses the Supabase
// service_role key to update the user's password via the
// Auth Admin API — the user does not need to be logged in.
//
// POST JSON body:
//   { "email": "user@example.com", "new_password": "secret123" }
//
// Returns:
//   200 { success: true, message: "Password updated" }
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

  let payload: { email?: string; new_password?: string };
  try {
    payload = await req.json();
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  const email = (payload.email || "").trim().toLowerCase();
  const newPassword = (payload.new_password || "").trim();

  if (!email || !email.includes("@")) {
    return json({ success: false, error: "সঠিক ইমেইল দিন।" }, 400);
  }
  if (!newPassword || newPassword.length < 6) {
    return json({ success: false, error: "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।" }, 400);
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

  if (!supabaseUrl || !serviceRoleKey) {
    return json({ error: "Server is not configured." }, 500);
  }

  // Look up the user by email via the Auth Admin API
  try {
    const listRes = await fetch(`${supabaseUrl}/auth/v1/admin/users`, {
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": "application/json",
      },
    });
    if (!listRes.ok) {
      const t = await listRes.text();
      throw new Error(`admin list failed: ${listRes.status} ${t}`);
    }
    const listData = await listRes.json();
    const users: Array<{ id: string; email: string }> = listData.users || listData || [];
    const user = users.find((u) => (u.email || "").toLowerCase() === email);
    if (!user) {
      return json({ success: false, error: "এই ইমেইল দিয়ে কোনো অ্যাকাউন্ট পাওয়া যায়নি।" }, 404);
    }

    // Update the user's password
    const updRes = await fetch(`${supabaseUrl}/auth/v1/admin/users/${user.id}`, {
      method: "PUT",
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: newPassword }),
    });
    if (!updRes.ok) {
      const t = await updRes.text();
      throw new Error(`admin update failed: ${updRes.status} ${t}`);
    }

    return json({ success: true, message: "পাসওয়ার্ড সফলভাবে পরিবর্তন হয়েছে! এখন লগইন করুন।" });
  } catch (err) {
    console.error("reset-password error:", err);
    return json({ success: false, error: "পাসওয়ার্ড আপডেটে সমস্যা হয়েছে।" }, 500);
  }
});
