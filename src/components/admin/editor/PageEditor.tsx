"use client";
import Link from "next/link";
import { useEffect, useMemo, useState, useTransition } from "react";
import { listVersions, savePage, setPageStatus } from "@/app/admin/(dash)/pages/actions";
import { StatusBadge } from "../ui";
import MediaPicker from "./MediaPicker";
import { MediaField, ObjectFields, Value } from "./JsonForm";
import { humanize, skeleton, uid, type Ctx, type MediaIndex, type MediaItem, type Section } from "./types";

type Page = { id: string; title: string; path: string; type: string; status: string; hero: any; seo: any; sections: Section[]; extra: any };
const input = "w-full rounded-lg border border-line bg-surface px-3 py-2 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/15";

const preview = (d: any): string => {
  const out: string[] = [];
  const walk = (v: any) => {
    if (out.length || v == null) return;
    if (typeof v === "string" && v.trim() && !/^[0-9a-f-]{20,}$/.test(v)) out.push(v);
    else if (Array.isArray(v)) v.forEach(walk);
    else if (typeof v === "object") { if (v._type === "span" && v.text) out.push(v.text); else Object.entries(v).forEach(([k, x]) => !/^_|mediaId|height|width/.test(k) && walk(x)); }
  };
  walk(d);
  return (out[0] ?? "").slice(0, 70);
};

export default function PageEditor({ page, mediaIndex, templates, canEdit }: { page: Page; mediaIndex: MediaIndex; templates: Record<string, any>; canEdit: boolean }) {
  const [title, setTitle] = useState(page.title);
  const [hero, setHero] = useState(page.hero);
  const [seo, setSeo] = useState(page.seo);
  const [sections, setSections] = useState<Section[]>(page.sections);
  const [status, setStatus] = useState(page.status);
  const [tab, setTab] = useState<"content" | "seo" | "history">("content");
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [dirty, setDirty] = useState(false);
  const [pending, start] = useTransition();
  const [media, setMedia] = useState<MediaIndex>(mediaIndex);
  const [picker, setPicker] = useState<{ kind: any; cb: (m: MediaItem) => void } | null>(null);
  const [versions, setVersions] = useState<any[] | null>(null);
  const [addType, setAddType] = useState("");

  useEffect(() => {
    const h = (e: BeforeUnloadEvent) => { if (dirty) { e.preventDefault(); e.returnValue = ""; } };
    window.addEventListener("beforeunload", h);
    return () => window.removeEventListener("beforeunload", h);
  }, [dirty]);

  const ctx: Ctx = useMemo(() => ({
    media,
    pick: (kind, cb) => setPicker({ kind, cb }),
    addMedia: (m) => setMedia((x) => ({ ...x, [m.id]: m })),
  }), [media]);

  const touch = <T,>(set: (v: T) => void) => (v: T) => { set(v); setDirty(true); setMsg(null); };
  const types = Object.keys(templates).sort();

  const save = () => start(async () => {
    const r = await savePage(page.id, { title, hero, seo, sections }, "Edited in CMS");
    if (r.ok) { setDirty(false); setVersions(null); setMsg({ ok: true, text: "Saved" }); } else setMsg({ ok: false, text: r.error });
  });
  const toggle = () => start(async () => {
    const next = status === "published" ? "draft" : "published";
    if (dirty) { const s = await savePage(page.id, { title, hero, seo, sections }, "Edited in CMS"); if (!s.ok) return setMsg({ ok: false, text: s.error }); setDirty(false); }
    const r = await setPageStatus(page.id, next);
    if (r.ok) { setStatus(next); setMsg({ ok: true, text: next === "published" ? "Published" : "Moved to draft" }); } else setMsg({ ok: false, text: r.error });
  });

  const moveS = (i: number, d: number) => { const a = [...sections]; const [x] = a.splice(i, 1); a.splice(i + d, 0, x); touch(setSections)(a); };

  return (
    <div>
      <div className="sticky top-0 z-20 -mx-10 -mt-9 mb-6 flex items-center justify-between gap-4 border-b border-line bg-bg/90 px-10 py-4 backdrop-blur">
        <div className="min-w-0">
          <Link href="/admin/pages" className="text-xs text-muted hover:text-ink">← Pages</Link>
          <div className="flex items-center gap-3"><h1 className="truncate text-xl font-semibold tracking-tight">{title || "Untitled"}</h1><StatusBadge status={status} /></div>
          <p className="font-mono text-xs text-muted">{page.path}</p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {msg && <span className={`text-sm ${msg.ok ? "text-accent" : "text-danger"}`}>{msg.text}</span>}
          {dirty && !msg && <span className="text-xs text-muted">Unsaved changes</span>}
          <a href={page.path} target="_blank" rel="noreferrer" className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm hover:bg-bg">View live ↗</a>
          {canEdit && <>
            <button onClick={save} disabled={pending || !dirty} className="rounded-lg border border-line bg-surface px-3.5 py-1.5 text-sm font-medium hover:bg-bg disabled:opacity-50">{pending ? "Saving…" : "Save"}</button>
            <button onClick={toggle} disabled={pending} className="rounded-lg bg-accent px-3.5 py-1.5 text-sm font-medium text-white hover:opacity-90 disabled:opacity-60">{status === "published" ? "Unpublish" : "Publish"}</button>
          </>}
        </div>
      </div>

      {!canEdit && <p className="mb-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">You have view-only access. Ask an admin for the editor role to make changes.</p>}

      <div className="mb-6 flex gap-1 border-b border-line">
        {(["content", "seo", "history"] as const).map((t) => (
          <button key={t} onClick={() => { setTab(t); if (t === "history" && !versions) listVersions(page.id).then(setVersions); }}
            className={`-mb-px border-b-2 px-4 py-2 text-sm font-medium capitalize ${tab === t ? "border-accent text-accent" : "border-transparent text-muted hover:text-ink"}`}>{t === "seo" ? "SEO" : t}</button>
        ))}
      </div>

      <fieldset disabled={!canEdit} className="min-w-0 space-y-8">
        {tab === "content" && (
          <>
            <Panel title="Page title"><input className={input} value={title} onChange={(e) => touch(setTitle)(e.target.value)} /></Panel>
            {hero && Object.keys(hero).length > 0 && <Panel title="Hero"><ObjectFields obj={hero} ctx={ctx} onChange={touch(setHero)} /></Panel>}

            <div>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-semibold">Sections <span className="font-normal text-muted">({sections.length})</span></h2>
                <button type="button" onClick={() => setOpen(Object.fromEntries(sections.map((s) => [s.id, !Object.values(open).some(Boolean)])))} className="text-xs text-muted hover:text-ink">
                  {Object.values(open).some(Boolean) ? "Collapse all" : "Expand all"}</button>
              </div>
              <div className="space-y-3">
                {sections.map((s, i) => (
                  <div key={s.id} className="rounded-xl border border-line bg-surface">
                    <div className="flex items-center gap-3 px-4 py-3">
                      <button type="button" onClick={() => setOpen({ ...open, [s.id]: !open[s.id] })} className="flex min-w-0 flex-1 items-center gap-3 text-left">
                        <span className="text-xs text-muted">{open[s.id] ? "▾" : "▸"}</span>
                        <span className="shrink-0 rounded bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent">{humanize(s.type)}</span>
                        <span className="truncate text-sm text-muted">{preview(s.data)}</span>
                      </button>
                      <span className="flex shrink-0 gap-1 text-xs text-muted">
                        <button disabled={i === 0} onClick={() => moveS(i, -1)} className="px-1.5 hover:text-ink disabled:opacity-30">↑</button>
                        <button disabled={i === sections.length - 1} onClick={() => moveS(i, 1)} className="px-1.5 hover:text-ink disabled:opacity-30">↓</button>
                        <button onClick={() => touch(setSections)([...sections.slice(0, i + 1), { ...JSON.parse(JSON.stringify(s)), id: uid() }, ...sections.slice(i + 1)])} className="px-1.5 hover:text-ink">Duplicate</button>
                        <button onClick={() => confirm("Delete this section?") && touch(setSections)(sections.filter((_, j) => j !== i))} className="px-1.5 hover:text-danger">Delete</button>
                      </span>
                    </div>
                    {open[s.id] && (
                      <div className="border-t border-line p-4">
                        {s.type === "block" ? <Value k="text" v={[{ _type: "block", ...s.data }]} ctx={ctx} onChange={(n) => touch(setSections)(sections.map((x, j) => (j === i ? { ...x, data: (({ _type, ...r }) => r)(n[0] ?? {}) } : x)))} />
                          : <ObjectFields obj={s.data} ctx={ctx} onChange={(d) => touch(setSections)(sections.map((x, j) => (j === i ? { ...x, data: d } : x)))} />}
                      </div>
                    )}
                  </div>
                ))}
                {!sections.length && <p className="rounded-xl border border-dashed border-line p-6 text-center text-sm text-muted">No sections yet.</p>}
              </div>
              {canEdit && (
                <div className="mt-4 flex gap-2">
                  <select value={addType} onChange={(e) => setAddType(e.target.value)} className={`${input} max-w-xs`}>
                    <option value="">Add a section…</option>
                    {types.map((t) => <option key={t} value={t}>{humanize(t)}</option>)}
                  </select>
                  <button disabled={!addType} onClick={() => { const id = uid(); touch(setSections)([...sections, { id, type: addType, data: skeleton(templates[addType]) }]); setOpen({ ...open, [id]: true }); setAddType(""); }}
                    className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white disabled:opacity-50">Add</button>
                </div>
              )}
            </div>
          </>
        )}

        {tab === "seo" && (
          <Panel title="Search & sharing">
            <div className="space-y-4">
              <div><label className="mb-1 block text-xs font-medium text-muted">Title</label><input className={input} value={seo?.title ?? ""} onChange={(e) => touch(setSeo)({ ...seo, title: e.target.value })} /></div>
              <div><label className="mb-1 block text-xs font-medium text-muted">Description</label><textarea rows={3} className={input} value={seo?.description ?? ""} onChange={(e) => touch(setSeo)({ ...seo, description: e.target.value })} /></div>
              <div><label className="mb-1 block text-xs font-medium text-muted">Share image</label><MediaField kind="image" ctx={ctx} value={seo?.image ?? { _type: "image", mediaId: null }} onChange={(v) => touch(setSeo)({ ...seo, image: v })} /></div>
            </div>
          </Panel>
        )}

        {tab === "history" && (
          <Panel title="Version history">
            {!versions ? <p className="text-sm text-muted">Loading…</p> : !versions.length ? <p className="text-sm text-muted">No earlier versions yet. One is saved every time you save.</p> : (
              <ul className="divide-y divide-line">
                {versions.map((v) => (
                  <li key={v.id} className="flex items-center justify-between py-3 text-sm">
                    <span>{new Date(v.created_at).toLocaleString()} <span className="text-muted">· {v.note ?? "Saved"}</span></span>
                    {canEdit && <button onClick={() => { const s = v.snapshot; setTitle(s.title); setHero(s.hero); setSeo(s.seo); setSections(s.sections); setDirty(true); setTab("content"); setMsg({ ok: true, text: "Restored. Click Save to keep it." }); }} className="text-accent hover:underline">Restore</button>}
                  </li>
                ))}
              </ul>
            )}
          </Panel>
        )}
      </fieldset>

      {picker && <MediaPicker kind={picker.kind} all={Object.values(media)} onClose={() => setPicker(null)}
        onUploaded={ctx.addMedia} onPick={(m) => { picker.cb(m); setPicker(null); setDirty(true); }} />}
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="rounded-xl border border-line bg-surface"><h2 className="border-b border-line px-5 py-3 text-sm font-semibold">{title}</h2><div className="p-5">{children}</div></section>;
}
