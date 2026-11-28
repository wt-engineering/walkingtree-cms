import { createHmac } from "node:crypto";
import { createClient } from "@supabase/supabase-js";

export const admin = () =>
  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, { auth: { persistSession: false } });

export const EMAIL_RE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const clean = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");

/** Optional email notification through Resend. Does nothing unless RESEND_API_KEY and NOTIFY_TO are set. */
export async function notify(subject: string, lines: Record<string, string>) {
  const key = process.env.RESEND_API_KEY, to = process.env.NOTIFY_TO;
  if (!key || !to) return;
  const text = Object.entries(lines).map(([k, v]) => `${k}: ${v}`).join("\n");
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: process.env.NOTIFY_FROM || "Walking Tree <onboarding@resend.dev>", to: to.split(",").map((s) => s.trim()), subject, text }),
    });
  } catch { /* never fail the form because email failed */ }
}

export async function save(form: string, payload: Record<string, unknown>) {
  return admin().from("form_submissions").insert({ form, payload });
}

/** Anonymous per-visitor fingerprint (HMAC of the IP, so the raw IP is never stored). */
export function visitorId(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  return createHmac("sha256", process.env.SUPABASE_SERVICE_ROLE_KEY || "salt").update(ip).digest("hex").slice(0, 24);
}

/** True when this visitor already sent `limit` submissions of this form in the last 10 minutes. */
export async function tooMany(form: string, visitor: string, limit: number) {
  const since = new Date(Date.now() - 10 * 60_000).toISOString();
  const { count } = await admin().from("form_submissions").select("id", { count: "exact", head: true })
    .eq("form", form).eq("payload->>_v", visitor).gte("created_at", since);
  return (count ?? 0) >= limit;
}
