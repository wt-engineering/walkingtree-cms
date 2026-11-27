import { createClient } from "@supabase/supabase-js";
import { cache } from "react";
import { mediaUrl, resolveMedia, type MediaInfo } from "./media";

// Public, cookie-free client: reads only what RLS allows anonymous visitors (published content).
const db = () =>
  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, { auth: { persistSession: false } });

const mediaMap = cache(async () => {
  const { data } = await db().from("media").select("id,kind,path,external_url,width,height");
  return new Map<string, MediaInfo>(
    (data ?? []).map((m) => [m.id, { id: m.id, kind: m.kind, url: mediaUrl(m), width: m.width, height: m.height }])
  );
});

export const withMedia = async <T,>(v: T) => resolveMedia(v, await mediaMap());

export type PageRow = {
  id: string; type: string; path: string; title: string; hero: any; seo: any; sections: { id: string; type: string; data: any }[]; extra: any;
};

export const getPage = cache(async (path: string): Promise<PageRow | null> => {
  const { data } = await db().from("pages").select("id,type,path,title,hero,seo,sections,extra").eq("path", path).eq("status", "published").maybeSingle();
  return data ? await withMedia(data as PageRow) : null;
});

export const getArticle = cache(async (slug: string) => {
  const { data } = await db().from("articles").select("*").eq("slug", slug).eq("status", "published").maybeSingle();
  return data ? await withMedia(data) : null;
});

export const getJob = cache(async (slug: string) => {
  const { data } = await db().from("job_openings").select("*, departments(name)").eq("slug", slug).eq("status", "published").maybeSingle();
  return data ? await withMedia(data) : null;
});

export const listJobs = cache(async () => {
  const { data } = await db().from("job_openings").select("slug,name,location,short_description,departments(name)").eq("status", "published");
  return data ?? [];
});

export const listArticlesByCategory = cache(async (categorySanityId: string) => {
  const d = db();
  const { data: cat } = await d.from("article_categories").select("id").eq("sanity_id", categorySanityId).maybeSingle();
  if (!cat) return [];
  const { data: map } = await d.from("article_category_map").select("article_id").eq("category_id", cat.id);
  const ids = (map ?? []).map((m) => m.article_id);
  if (!ids.length) return [];
  const { data } = await d.from("articles").select("slug,title,excerpt,author,label,extra,hero").in("id", ids).eq("status", "published");
  return await withMedia(data ?? []);
});

export const getNavigation = cache(async () => {
  const { data } = await db().from("navigation").select("items").eq("id", "main").maybeSingle();
  return (data?.items as NavItem[] | undefined) ?? [];
});

export type NavItem = { label: string; href?: string; children?: { label: string; href: string; download?: boolean }[] };
