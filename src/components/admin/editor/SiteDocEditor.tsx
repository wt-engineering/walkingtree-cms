"use client";
import { useState, useTransition } from "react";
import { saveFooter, saveNavigation } from "@/app/admin/(dash)/site/actions";
import { ObjectFields } from "./JsonForm";
import type { Ctx } from "./types";

const ctx = (arrayTemplates: Record<string, unknown>): Ctx => ({ media: {}, pick: () => {}, addMedia: () => {}, arrayTemplates });

export default function SiteDocEditor({ kind, initial, canEdit }: { kind: "navigation" | "footer"; initial: any; canEdit: boolean }) {
  const [doc, setDoc] = useState<any>(initial);
  const [dirty, setDirty] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [pending, start] = useTransition();
  const templates = kind === "navigation"
    ? { items: { label: "", href: "/" }, children: { label: "", href: "/" } }
    : { offices: { country: "", address: "" }, columns: { title: "", links: [] }, links: { label: "", href: "/" } };

  const save = () => start(async () => {
    const r = kind === "navigation" ? await saveNavigation(doc.items) : await saveFooter(doc);
    if (r.ok) { setDirty(false); setMsg({ ok: true, text: "Saved. The live site updates within a minute." }); } else setMsg({ ok: false, text: r.error });
  });

  return (
    <div>
      <fieldset disabled={!canEdit} className="rounded-xl border border-line bg-surface p-5">
        <ObjectFields obj={doc} ctx={ctx(templates)} onChange={(d) => { setDoc(d); setDirty(true); setMsg(null); }} />
      </fieldset>
      <div className="mt-5 flex items-center gap-3">
        {canEdit && <button onClick={save} disabled={pending || !dirty} className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white disabled:opacity-50">{pending ? "Saving…" : "Save"}</button>}
        {msg && <span className={`text-sm ${msg.ok ? "text-accent" : "text-danger"}`}>{msg.text}</span>}
        {!canEdit && <span className="text-sm text-muted">View-only access.</span>}
      </div>
    </div>
  );
}
