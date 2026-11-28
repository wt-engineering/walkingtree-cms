"use server";
import { createClient } from "@/lib/supabase/server";

type Result = { ok: true } | { ok: false; error: string };

export async function saveNavigation(items: unknown): Promise<Result> {
  if (!Array.isArray(items)) return { ok: false, error: "Invalid menu" };
  const supabase = await createClient();
  const { data, error } = await supabase.from("navigation").update({ items, updated_at: new Date().toISOString() }).eq("id", "main").select("id");
  if (error) return { ok: false, error: error.message };
  if (!data?.length) return { ok: false, error: "You don't have permission to edit the menu (editor or admin role needed)." };
  return { ok: true };
}

export async function saveFooter(footer: unknown): Promise<Result> {
  if (!footer || typeof footer !== "object") return { ok: false, error: "Invalid footer" };
  const supabase = await createClient();
  const { data: cur } = await supabase.from("site_settings").select("data").eq("id", "global").maybeSingle();
  const { data, error } = await supabase.from("site_settings")
    .upsert({ id: "global", data: { ...(cur?.data ?? {}), footer }, updated_at: new Date().toISOString() }).select("id");
  if (error) return { ok: false, error: error.message };
  if (!data?.length) return { ok: false, error: "You don't have permission to edit settings (editor or admin role needed)." };
  return { ok: true };
}
