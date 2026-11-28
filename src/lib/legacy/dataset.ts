// Rebuilds the old Sanity-shaped documents from Supabase rows so the original
// frontend code (GROQ queries and all) runs unchanged against the new CMS.
import { createClient } from "@supabase/supabase-js";
import { mediaUrl } from "../media";

type M = { id: string; kind: string; url: string; width: number | null; height: number | null; mime: string | null };
/* eslint-disable @typescript-eslint/no-explicit-any */

const b64 = (s: string) => Buffer.from(s).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const ext = (url: string) => (url.split("?")[0].split(".").pop() || "bin").toLowerCase().replace(/[^a-z0-9]/g, "") || "bin";

// self-describing asset ref: the URL travels inside the ref so it works on server and client
const refFor = (m: M) =>
  m.kind === "image" ? `image-${b64(m.url)}-${m.width ?? 1600}x${m.height ?? 1000}-${ext(m.url)}` : `file-${b64(m.url)}-${ext(m.url)}`;

function unresolve(v: any, media: Map<string, M>): any {
  if (Array.isArray(v)) return v.map((x) => unresolve(x, media)).filter((x) => x !== undefined);
  if (v && typeof v === "object") {
    if (typeof v.mediaId === "string" || v.mediaId === null) {
      const { mediaId, ...rest } = v;
      const m = mediaId ? media.get(mediaId) : undefined;
      if (!m) return undefined; // unset image: behave like a missing Sanity field
      return { ...Object.fromEntries(Object.entries(rest).map(([k, x]) => [k, unresolve(x, media)]).filter(([, x]) => x !== undefined)),
        _type: rest._type ?? (m.kind === "image" ? "image" : "file"), asset: { _type: "reference", _ref: refFor(m) } };
    }
    return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, unresolve(x, media)]).filter(([, x]) => x !== undefined));
  }
  return v;
}

const content = (sections: any[], media: Map<string, M>) =>
  (sections ?? []).map((s) => ({ _key: s.id, _type: s.type, ...unresolve(s.data, media) }));

const SLUG_TYPES: Record<string, string> = {
  design_studio: "designStudio", direct_to_consumer: "directToConsumer", creative_process: "creativeProcess", csr: "csr", people: "people",
};

let cache: { at: number; docs: any[] } | null = null;

export async function loadDataset(): Promise<any[]> {
  if (cache && Date.now() - cache.at < 20_000) return cache.docs;
  const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, (process.env.SUPABASE_READ_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)!, { auth: { persistSession: false } });
  const [{ data: mrows }, { data: pages }, { data: arts }, { data: cats }, { data: map }, { data: deps }, { data: jobs }] = await Promise.all([
    sb.from("media").select("id,kind,path,external_url,width,height,mime_type"),
    sb.from("pages").select("*").eq("status", "published"),
    sb.from("articles").select("*").eq("status", "published"),
    sb.from("article_categories").select("*"),
    sb.from("article_category_map").select("*"),
    sb.from("departments").select("*"),
    sb.from("job_openings").select("*").eq("status", "published"),
  ]);
  const media = new Map<string, M>((mrows ?? []).map((m) => [m.id, { id: m.id, kind: m.kind, url: mediaUrl(m), width: m.width, height: m.height, mime: m.mime_type }]));
  const U = (v: any) => unresolve(v, media);
  const docId = (r: any) => r.sanity_id ?? r.id;
  const catId = new Map((cats ?? []).map((c) => [c.id, docId(c)]));
  const docs: any[] = [];

  for (const p of pages ?? []) {
    const base = { _id: docId(p), _createdAt: p.created_at, _updatedAt: p.updated_at };
    const seo = U(p.seo), hero = U(p.hero), extra = U(p.extra ?? {}), sections = content(p.sections, media);
    const slug = p.path.split("/").filter(Boolean).pop();
    const details = { _type: "page", seo, name: p.title, uri: slug, content: sections };
    switch (p.type) {
      case "home": docs.push({ ...base, _type: "home", name: p.title, pageDetails: { ...details, uri: undefined }, heroModule: hero }); break;
      case "business_to_business": docs.push({ ...base, _type: "businessToBusiness", name: p.title, pageDetails: { ...details, uri: undefined }, heroModule: hero }); break;
      case "our_story": docs.push({ ...base, _type: "group", banner: hero, content: sections, seo }); break;
      case "culture_careers": docs.push({ ...base, _type: "cultureAndCareers", banner: hero, content: sections, seo }); break;
      case "contact": docs.push({ ...base, _type: "contact", heroModule: hero, seo, ...extra }); break;
      case "blog": docs.push({ ...base, _type: "blogCategoryPage", heroBlog: hero, seo, ...extra }); break;
      default: {
        const t = SLUG_TYPES[p.type];
        if (t) docs.push({ ...base, _type: t, pageTitle: p.title, pageDetails: details, ...(Object.keys(hero ?? {}).length ? { heroModule: hero } : {}), ...(t === "creativeProcess" ? { seo } : {}), ...extra });
      }
    }
  }

  const byArticle = new Map<string, string[]>();
  for (const r of map ?? []) byArticle.set(r.article_id, [...(byArticle.get(r.article_id) ?? []), catId.get(r.category_id)!]);
  for (const c of cats ?? []) docs.push({ _id: docId(c), _type: "articleCategory", title: c.title, slug: { _type: "slug", current: c.slug }, articleSlug: c.slug, seo: U(c.seo) });
  for (const a of arts ?? []) {
    const extra = U(a.extra ?? {});
    docs.push({ _id: docId(a), _type: "article", _createdAt: a.created_at, _updatedAt: a.updated_at, slug: { _type: "slug", current: a.slug }, title: a.title, seo: U(a.seo),
      excerpt: a.excerpt, description: a.description, author: a.author, label: a.label, heroModule: U(a.hero), content: content(a.content, media),
      articlePortraitImage: extra.portrait, referenceArticles: extra.referenceArticles,
      articleCategory: (byArticle.get(a.id) ?? []).map((id, i) => ({ _key: String(i), _type: "reference", _ref: id })) });
  }
  const depId = new Map((deps ?? []).map((d) => [d.id, docId(d)]));
  for (const d of deps ?? []) docs.push({ _id: docId(d), _type: "department", name: d.name });
  for (const j of jobs ?? []) {
    const g = U(j.sections ?? []);
    docs.push({ _id: docId(j), _type: "jobOpening", name: j.name, slug: { _type: "slug", current: j.slug }, department: j.department_id ? { _type: "reference", _ref: depId.get(j.department_id) } : undefined,
      title1: j.title_line_1, title2: j.title_line_2, shortDescription: j.short_description, location: j.location, jobDescription: j.description,
      jobHeadingAndPoints1: g[0], jobHeadingAndPoints2: g[1], jobHeadingAndPoints3: g[2] });
  }
  cache = { at: Date.now(), docs: JSON.parse(JSON.stringify(docs)) };
  return cache.docs;
}
