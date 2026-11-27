#!/usr/bin/env node
// Imports the Sanity dataset into Supabase.
//   node scripts/import-sanity.mjs --fetch     refresh data/sanity-all.json from Sanity (public dataset)
//   node scripts/import-sanity.mjs --dry       transform only, write data/import-preview.json + report
//   node scripts/import-sanity.mjs             live import (needs NEXT_PUBLIC_SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY)
// Idempotent: all rows are upserted on sanity_id.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { createHash } from "node:crypto";

const PROJECT = "1me0hcdt", DATASET = "production";
const DATA = new URL("../data/", import.meta.url);
const args = new Set(process.argv.slice(2));
const MAX_UPLOAD_MB = Number(process.env.MAX_UPLOAD_MB ?? 50);

if (args.has("--fetch")) {
  const r = await fetch(`https://${PROJECT}.api.sanity.io/v2021-06-07/data/query/${DATASET}?query=${encodeURIComponent("*[]")}`);
  await mkdir(DATA, { recursive: true });
  await writeFile(new URL("sanity-all.json", DATA), JSON.stringify(await r.json()));
  console.log("fetched");
}

const all = JSON.parse(await readFile(new URL("sanity-all.json", DATA))).result;
const docs = all.filter((d) => !d._type.startsWith("sanity.") && !d._id.startsWith("drafts."));
const assets = new Map(all.filter((d) => d._type.startsWith("sanity.")).map((a) => [a._id, a]));

// deterministic uuid from a string, so refs can be rewritten without a DB lookup
const uuid = (s) => {
  const h = createHash("sha1").update(s).digest("hex");
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-5${h.slice(13, 16)}-a${h.slice(17, 20)}-${h.slice(20, 32)}`;
};
const usedAssets = new Set();

// Rewrite { asset: { _ref: "image-…" } } → { mediaId } everywhere, keeping crop/hotspot and other keys.
function walk(v) {
  if (Array.isArray(v)) return v.map(walk);
  if (v && typeof v === "object") {
    const ref = v.asset?._ref;
    if (typeof ref === "string" && /^(image|file)-/.test(ref)) {
      usedAssets.add(ref);
      const { asset, _type, ...rest } = v;
      return { _type, mediaId: uuid(ref), ...walk(rest) };
    }
    return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)]));
  }
  return v;
}

const section = (s) => ({ id: s._key ?? uuid(JSON.stringify(s)), type: s._type, data: (({ _key, _type, ...d }) => d)(walk(s)) });
const sections = (arr) => (Array.isArray(arr) ? arr.map(section) : []);

// ---------- page mapping ----------
const singletons = {
  home_en: { type: "home", path: "/", title: "Home", hero: "heroModule" },
  businessToBusiness_en: { type: "business_to_business", path: "/business-to-business", title: "Business to Business", hero: "heroModule" },
  group_en: { type: "our_story", path: "/our-story", title: "Our Story", hero: "banner" },
  cultureAndCareers_en: { type: "culture_careers", path: "/people", title: "Culture & Careers", hero: "banner" },
  contact_en: { type: "contact", path: "/contact-us", title: "Contact Us", hero: "heroModule" },
  blogCategory_en: { type: "blog", path: "/blog", title: "Blog", hero: "heroBlog" },
};
const routed = { designStudio: ["design_studio", "/business-to-business"], directToConsumer: ["direct_to_consumer", "/direct-to-consumer"],
  creativeProcess: ["creative_process", "/creative-process"], csr: ["csr", "/our-story"], people: ["people", "/people"] };

const pages = [];
for (const d of docs) {
  const one = singletons[d._id];
  const route = routed[d._type];
  if (!one && !route) continue;
  const pd = d.pageDetails ?? {};
  const conf = one ?? { type: route[0], path: `${route[1]}/${pd.uri}`, title: d.pageTitle ?? pd.name ?? pd.uri, hero: "heroModule" };
  const content = pd.content ?? d.content ?? [];
  const known = new Set(["_id", "_type", "_rev", "_createdAt", "_updatedAt", "pageDetails", "pageTitle", "seo", conf.hero, "content", "name"]);
  const extra = walk(Object.fromEntries(Object.entries(d).filter(([k]) => !known.has(k))));
  pages.push({
    sanity_id: d._id, type: conf.type, slug: conf.path.split("/").filter(Boolean).pop() ?? "home", path: conf.path,
    title: conf.title, status: "published", published_at: d._updatedAt,
    hero: walk(d[conf.hero] ?? {}), seo: walk(pd.seo ?? d.seo ?? {}), sections: sections(content), extra,
  });
}

// ---------- collections ----------
const categories = docs.filter((d) => d._type === "articleCategory").map((d) => ({
  sanity_id: d._id, slug: d.slug?.current ?? d.articleSlug, title: d.title, seo: walk(d.seo ?? {}) }));
const departments = docs.filter((d) => d._type === "department").map((d) => ({ sanity_id: d._id, name: d.name }));
const articles = docs.filter((d) => d._type === "article").map((d) => ({
  sanity_id: d._id, slug: d.slug?.current, title: d.title, status: "published", published_at: d._updatedAt,
  seo: walk(d.seo ?? {}), excerpt: d.excerpt, description: d.description, author: d.author, label: d.label,
  hero: walk(d.heroModule ?? {}), content: sections(d.content),
  extra: walk({ portrait: d.articlePortraitImage, referenceArticles: d.referenceArticles }),
  _categories: (d.articleCategory ?? []).map((r) => r._ref) }));
const jobs = docs.filter((d) => d._type === "jobOpening").map((d) => ({
  sanity_id: d._id, slug: d.slug?.current, name: d.name, title_line_1: d.title1, title_line_2: d.title2,
  short_description: d.shortDescription, location: d.location, description: d.jobDescription, status: "published",
  sections: walk([d.jobHeadingAndPoints1, d.jobHeadingAndPoints2, d.jobHeadingAndPoints3].filter(Boolean)), _department: d.department?._ref }));

// ---------- media ----------
const media = [...usedAssets].map((ref) => {
  const a = assets.get(ref);
  if (!a) return { ref, missing: true };
  const dim = a.metadata?.dimensions;
  return { id: uuid(ref), sanity_id: ref, kind: ref.startsWith("image-") ? "image" : /video/.test(a.mimeType) ? "video" : "file",
    mime_type: a.mimeType, width: dim?.width, height: dim?.height, size_bytes: a.size,
    alt: null, url: a.url, ext: a.extension, name: a.originalFilename };
});
const missing = media.filter((m) => m.missing);
const ok = media.filter((m) => !m.missing);
const tooBig = ok.filter((m) => m.size_bytes > MAX_UPLOAD_MB * 1e6);

const report = {
  pages: pages.length, articles: articles.length, categories: categories.length, departments: departments.length, jobs: jobs.length,
  media: { referenced: usedAssets.size, missing: missing.length, totalMB: Math.round(ok.reduce((s, m) => s + m.size_bytes, 0) / 1e6),
    overLimit: tooBig.map((m) => `${m.name} ${Math.round(m.size_bytes / 1e6)}MB`) },
  sectionTypes: [...new Set(pages.flatMap((p) => p.sections.map((s) => s.type)))].sort(),
};
console.log(JSON.stringify(report, null, 2));

if (args.has("--dry")) {
  await writeFile(new URL("import-preview.json", DATA), JSON.stringify({ pages, articles, categories, departments, jobs, media: ok }, null, 1));
  console.log("dry run: wrote data/import-preview.json");
  process.exit(0);
}

// ---------- live import ----------
const { createClient } = await import("@supabase/supabase-js");
const url = process.env.NEXT_PUBLIC_SUPABASE_URL, key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) { console.error("Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY"); process.exit(1); }
const sb = createClient(url, key, { auth: { persistSession: false } });
const up = async (table, rows, onConflict = "sanity_id") => {
  for (let i = 0; i < rows.length; i += 50) {
    const { error } = await sb.from(table).upsert(rows.slice(i, i + 50), { onConflict });
    if (error) throw new Error(`${table}: ${error.message}`);
  }
  console.log(`✓ ${table} ${rows.length}`);
};

// media: upload to storage, fall back to the Sanity CDN url when over the size limit
let n = 0;
for (const m of ok) {
  const row = { id: m.id, sanity_id: m.sanity_id, kind: m.kind, mime_type: m.mime_type, width: m.width, height: m.height, size_bytes: m.size_bytes };
  if (m.size_bytes > MAX_UPLOAD_MB * 1e6) row.external_url = m.url;
  else {
    const path = `sanity/${m.sanity_id.replace(/^(image|file)-/, "")}.${m.ext}`;
    const res = await fetch(m.url);
    if (!res.ok) { row.external_url = m.url; }
    else {
      const { error } = await sb.storage.from("media").upload(path, Buffer.from(await res.arrayBuffer()), { contentType: m.mime_type, upsert: true });
      if (error) row.external_url = m.url; else row.path = path;
    }
  }
  const { error } = await sb.from("media").upsert(row, { onConflict: "sanity_id" });
  if (error) throw new Error(`media: ${error.message}`);
  if (++n % 25 === 0) console.log(`  media ${n}/${ok.length}`);
}
console.log(`✓ media ${n}`);

await up("article_categories", categories);
await up("departments", departments);
await up("pages", pages);
await up("articles", articles.map(({ _categories, ...a }) => a));
const { data: cats } = await sb.from("article_categories").select("id,sanity_id");
const { data: deps } = await sb.from("departments").select("id,sanity_id");
const { data: arts } = await sb.from("articles").select("id,sanity_id");
const cid = Object.fromEntries(cats.map((c) => [c.sanity_id, c.id])), did = Object.fromEntries(deps.map((c) => [c.sanity_id, c.id])), aid = Object.fromEntries(arts.map((c) => [c.sanity_id, c.id]));
await up("job_openings", jobs.map(({ _department, ...j }) => ({ ...j, department_id: did[_department] ?? null })));
const map = articles.flatMap((a) => a._categories.map((c) => ({ article_id: aid[a.sanity_id], category_id: cid[c] }))).filter((r) => r.article_id && r.category_id);
if (map.length) { const { error } = await sb.from("article_category_map").upsert(map); if (error) throw new Error(error.message); console.log(`✓ article_category_map ${map.length}`); }
console.log("done");
