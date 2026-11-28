import { createClient } from "@supabase/supabase-js";
import { defaultFooter, defaultNav, toMenu } from "../siteDefaults";

let cache: { at: number; v: unknown } | null = null;

/** Menu + footer for the public site (server only). Falls back to the original defaults. */
export async function getSite() {
  if (cache && Date.now() - cache.at < 20_000) return cache.v;
  let nav: unknown[] = [], footer: Record<string, unknown> = {};
  try {
    const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, (process.env.SUPABASE_READ_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)!, { auth: { persistSession: false } });
    const [{ data: n }, { data: s }] = await Promise.all([
      sb.from("navigation").select("items").eq("id", "main").maybeSingle(),
      sb.from("site_settings").select("data").eq("id", "global").maybeSingle(),
    ]);
    nav = (n?.items as unknown[]) ?? [];
    footer = ((s?.data as { footer?: Record<string, unknown> })?.footer) ?? {};
  } catch { /* use defaults */ }
  const v = JSON.parse(JSON.stringify({
    menu: toMenu((nav.length ? nav : defaultNav) as never),
    footer: { ...defaultFooter, ...footer },
  }));
  cache = { at: Date.now(), v };
  return v;
}
