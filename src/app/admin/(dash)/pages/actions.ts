"use server";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

type Patch = { title: string; hero: unknown; seo: unknown; sections: unknown; extra?: unknown };
type Result = { ok: true; updatedAt: string } | { ok: false; error: string };

export async function savePage(id: string, patch: Patch, note?: string): Promise<Result> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { ok: false, error: "Not signed in" };

  const { data: current, error: readErr } = await supabase.from("pages").select("*").eq("id", id).single();
  if (readErr || !current) return { ok: false, error: readErr?.message ?? "Page not found" };

  // snapshot the previous state so it can be restored
  const { error: vErr } = await supabase.from("page_versions").insert({
    page_id: id, snapshot: { title: current.title, hero: current.hero, seo: current.seo, sections: current.sections, extra: current.extra },
    note: note ?? null, created_by: user.id,
  });
  if (vErr) return { ok: false, error: `History: ${vErr.message}` };

  const { data, error } = await supabase.from("pages")
    .update({ title: patch.title, hero: patch.hero, seo: patch.seo, sections: patch.sections, ...(patch.extra !== undefined ? { extra: patch.extra } : {}), updated_by: user.id })
    .eq("id", id).select("updated_at");
  if (error) return { ok: false, error: error.message };
  if (!data?.length) return { ok: false, error: "You don't have permission to edit pages (editor or admin role needed)." };

  revalidatePath(current.path);
  return { ok: true, updatedAt: data[0].updated_at };
}

export async function setPageStatus(id: string, status: "draft" | "published"): Promise<Result> {
  const supabase = await createClient();
  const { data, error } = await supabase.from("pages")
    .update({ status, ...(status === "published" ? { published_at: new Date().toISOString() } : {}) })
    .eq("id", id).select("path,updated_at");
  if (error) return { ok: false, error: error.message };
  if (!data?.length) return { ok: false, error: "You don't have permission to change status." };
  revalidatePath(data[0].path);
  return { ok: true, updatedAt: data[0].updated_at };
}

export async function listVersions(id: string) {
  const supabase = await createClient();
  const { data } = await supabase.from("page_versions").select("id,note,created_at,snapshot").eq("page_id", id).order("created_at", { ascending: false }).limit(15);
  return data ?? [];
}
