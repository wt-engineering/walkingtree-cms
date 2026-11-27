"use client";
import { uid } from "./types";

const STYLES = [["normal", "Paragraph"], ["h1", "Heading 1"], ["h2", "Heading 2"], ["h3", "Heading 3"], ["h4", "Heading 4"], ["blockquote", "Quote"]];
const textOf = (b: any) => (b.children ?? []).map((c: any) => c.text ?? "").join("");

/** Edits portable text as a list of blocks. Inline marks/links are kept while a block's text is untouched;
 *  editing a block's text rewrites it as one plain span. */
export default function PortableEditor({ value, onChange }: { value: any[]; onChange: (v: any[]) => void }) {
  const set = (i: number, patch: any) => onChange(value.map((b, j) => (j === i ? { ...b, ...patch } : b)));
  const move = (i: number, d: number) => { const a = [...value]; const [x] = a.splice(i, 1); a.splice(i + d, 0, x); onChange(a); };
  return (
    <div className="space-y-2">
      {value.map((b, i) => b._type !== "block" ? (
        <div key={b._key ?? i} className="rounded border border-dashed border-line px-3 py-2 text-xs text-muted">Embedded item ({b._type}) — kept as is</div>
      ) : (
        <div key={b._key ?? i} className="rounded-lg border border-line bg-bg/40 p-2">
          <div className="mb-1.5 flex items-center gap-2">
            <select value={b.style ?? "normal"} onChange={(e) => set(i, { style: e.target.value })} className="rounded border border-line bg-surface px-1.5 py-1 text-xs">
              {STYLES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
            </select>
            <label className="flex items-center gap-1 text-xs text-muted">
              <input type="checkbox" checked={b.listItem === "bullet"} onChange={(e) => set(i, e.target.checked ? { listItem: "bullet", level: 1 } : { listItem: undefined, level: undefined })} /> Bullet
            </label>
            <span className="ml-auto flex gap-1 text-xs text-muted">
              <button disabled={i === 0} onClick={() => move(i, -1)} className="px-1 hover:text-ink disabled:opacity-30">↑</button>
              <button disabled={i === value.length - 1} onClick={() => move(i, 1)} className="px-1 hover:text-ink disabled:opacity-30">↓</button>
              <button onClick={() => onChange(value.filter((_, j) => j !== i))} className="px-1 hover:text-danger">✕</button>
            </span>
          </div>
          <textarea
            rows={Math.max(2, Math.ceil(textOf(b).length / 70))}
            defaultValue={textOf(b)}
            onChange={(e) => e.target.value !== textOf(b) && set(i, { children: [{ _key: uid(), _type: "span", marks: [], text: e.target.value }] })}
            className="w-full rounded border border-line bg-surface p-2 text-sm outline-none focus:border-accent"
          />
          {(b.children?.length > 1 || b.markDefs?.length > 0) && <p className="mt-1 text-[11px] text-muted">Has inline formatting or links — editing this text removes them.</p>}
        </div>
      ))}
      <button onClick={() => onChange([...value, { _key: uid(), _type: "block", style: "normal", markDefs: [], children: [{ _key: uid(), _type: "span", marks: [], text: "" }] }])}
        className="rounded-lg border border-dashed border-line px-3 py-1.5 text-xs text-muted hover:border-accent hover:text-accent">+ Add paragraph</button>
    </div>
  );
}
