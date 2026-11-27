import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { mediaUrl } from "@/lib/media";
import PageEditor from "@/components/admin/editor/PageEditor";

export default async function EditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const { data: page } = await supabase.from("pages").select("id,title,path,type,status,hero,seo,sections,extra").eq("id", id).maybeSingle();
  if (!page) notFound();

  const [{ data: media }, { data: all }, { data: profile }] = await Promise.all([
    supabase.from("media").select("id,kind,path,external_url,width,height"),
    supabase.from("pages").select("sections"),
    supabase.from("profiles").select("role").eq("user_id", user!.id).maybeSingle(),
  ]);

  const mediaIndex = Object.fromEntries((media ?? []).map((m) => [m.id, { id: m.id, kind: m.kind, url: mediaUrl(m), width: m.width, height: m.height }]));
  // first real example of each section type, used as the blueprint for "Add section"
  const templates: Record<string, unknown> = {};
  for (const p of all ?? []) for (const s of (p.sections as { type: string; data: unknown }[]) ?? []) if (!templates[s.type]) templates[s.type] = s.data;

  return <PageEditor page={page} mediaIndex={mediaIndex} templates={templates} canEdit={["admin", "editor"].includes(profile?.role ?? "")} />;
}
