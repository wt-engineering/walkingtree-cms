"use client";
import { useState } from "react";
import PortableEditor from "./PortableEditor";
import { humanize, skeleton, type Ctx, type MediaItem } from "./types";

const HIDE = /^(_type|_key|id|url|kind|width|height)$/;
const ADVANCED = /height|width|autoplay|loop|muted|controls|playButton|restricted|pause|showMute|enable|isExternal/i;
const isMedia = (v: any) => v && typeof v === "object" && !Array.isArray(v) && ("mediaId" in v || ((v._type === "image" || v._type === "file") && !v.asset));
const isPortable = (v: any) => Array.isArray(v) && v.length > 0 && v.some((b) => b?._type === "block");
const input = "w-full rounded-lg border border-line bg-surface px-3 py-2 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/15";

export function MediaField({ value, onChange, ctx, kind }: { value: any; onChange: (v: any) => void; ctx: Ctx; kind: "image" | "video" | "file" | "any" }) {
  const m = value?.mediaId ? ctx.media[value.mediaId] : null;
  const set = (x: MediaItem) => onChange({ ...value, mediaId: x.id });
  return (
    <div className="flex items-center gap-3">
      <button type="button" onClick={() => ctx.pick(kind, set)} className="grid h-20 w-28 shrink-0 place-items-center overflow-hidden rounded-lg border border-dashed border-line bg-bg text-xs text-muted hover:border-accent">
        {m?.kind === "image" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={m.url} alt="" className="h-full w-full object-cover" />
        ) : m ? <span className="px-1 text-center">{m.kind}</span> : "Choose…"}
      </button>
      {value?.mediaId && <button type="button" onClick={() => onChange({ ...value, mediaId: null })} className="text-xs text-muted hover:text-danger">Remove</button>}
    </div>
  );
}

function Leaf({ k, v, onChange, ctx }: { k: string; v: any; onChange: (v: any) => void; ctx: Ctx }) {
  if (typeof v === "boolean") return <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={v} onChange={(e) => onChange(e.target.checked)} />{humanize(k)}</label>;
  if (typeof v === "number") return <input type="number" className={input} value={v} onChange={(e) => onChange(Number(e.target.value))} />;
  if (typeof v === "string") {
    const long = v.length > 70 || v.includes("\n") || /desc|text|body|caption|content/i.test(k);
    return long ? <textarea rows={Math.min(8, Math.max(3, Math.ceil(v.length / 70)))} className={input} value={v} onChange={(e) => onChange(e.target.value)} />
      : <input className={input} value={v} onChange={(e) => onChange(e.target.value)} />;
  }
  return null;
}

export function Value({ k, v, onChange, ctx, depth = 0 }: { k: string; v: any; onChange: (v: any) => void; ctx: Ctx; depth?: number }) {
  if (v == null) return null;
  if (isMedia(v)) return <MediaField value={v} onChange={onChange} ctx={ctx} kind={/video/i.test(k) ? "video" : "image"} />;
  if (isPortable(v)) return <PortableEditor value={v} onChange={onChange} />;

  if (Array.isArray(v)) {
    if (v.length && v.every(isMedia)) {
      return (
        <div className="space-y-2">
          <div className="flex flex-wrap gap-3">
            {v.map((x, i) => (
              <div key={i} className="relative"><MediaField value={x} ctx={ctx} kind="image" onChange={(n) => onChange(v.map((y, j) => (j === i ? n : y)))} />
                <button onClick={() => onChange(v.filter((_, j) => j !== i))} className="absolute -right-1 -top-1 rounded-full bg-white px-1.5 text-xs text-danger shadow">✕</button></div>
            ))}
          </div>
          <button onClick={() => onChange([...v, { ...skeleton(v[0]), mediaId: null }])} className="text-xs text-accent">+ Add image</button>
        </div>
      );
    }
    return (
      <div className="space-y-3">
        {v.map((x, i) => (
          <ItemBox key={x?._key ?? i} title={`${humanize(k)} ${i + 1}`} first={i === 0} last={i === v.length - 1}
            onUp={() => { const a = [...v]; [a[i - 1], a[i]] = [a[i], a[i - 1]]; onChange(a); }}
            onDown={() => { const a = [...v]; [a[i + 1], a[i]] = [a[i], a[i + 1]]; onChange(a); }}
            onDup={() => onChange([...v.slice(0, i + 1), JSON.parse(JSON.stringify(x)), ...v.slice(i + 1)])}
            onDel={() => onChange(v.filter((_, j) => j !== i))}>
            {typeof x === "object" ? <ObjectFields obj={x} onChange={(n) => onChange(v.map((y, j) => (j === i ? n : y)))} ctx={ctx} depth={depth + 1} />
              : <Leaf k={k} v={x} ctx={ctx} onChange={(n) => onChange(v.map((y, j) => (j === i ? n : y)))} />}
          </ItemBox>
        ))}
        {v.length > 0 && <button onClick={() => onChange([...v, skeleton(v[v.length - 1])])} className="rounded-lg border border-dashed border-line px-3 py-1.5 text-xs text-muted hover:border-accent hover:text-accent">+ Add {humanize(k).toLowerCase()}</button>}
        {v.length === 0 && <p className="text-xs text-muted">Empty</p>}
      </div>
    );
  }
  if (typeof v === "object") return <div className="rounded-lg border border-line bg-bg/30 p-3"><ObjectFields obj={v} onChange={onChange} ctx={ctx} depth={depth + 1} /></div>;
  return <Leaf k={k} v={v} onChange={onChange} ctx={ctx} />;
}

function ItemBox({ title, children, first, last, onUp, onDown, onDup, onDel }: any) {
  return (
    <div className="rounded-lg border border-line bg-surface">
      <div className="flex items-center justify-between border-b border-line px-3 py-1.5 text-xs text-muted">
        <span className="font-medium">{title}</span>
        <span className="flex gap-1">
          <button disabled={first} onClick={onUp} className="px-1 hover:text-ink disabled:opacity-30">↑</button>
          <button disabled={last} onClick={onDown} className="px-1 hover:text-ink disabled:opacity-30">↓</button>
          <button onClick={onDup} className="px-1 hover:text-ink">Duplicate</button>
          <button onClick={onDel} className="px-1 hover:text-danger">Delete</button>
        </span>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}

export function ObjectFields({ obj, onChange, ctx, depth = 0 }: { obj: any; onChange: (v: any) => void; ctx: Ctx; depth?: number }) {
  const [adv, setAdv] = useState(false);
  const keys = Object.keys(obj).filter((k) => !HIDE.test(k) && obj[k] != null);
  const main = keys.filter((k) => !(typeof obj[k] !== "object" && ADVANCED.test(k)));
  const advanced = keys.filter((k) => typeof obj[k] !== "object" && ADVANCED.test(k));
  const row = (k: string) => (
    <div key={k}>
      {typeof obj[k] !== "boolean" && <label className="mb-1 block text-xs font-medium text-muted">{humanize(k)}</label>}
      <Value k={k} v={obj[k]} ctx={ctx} depth={depth} onChange={(n) => onChange({ ...obj, [k]: n })} />
    </div>
  );
  return (
    <div className="space-y-4">
      {main.map(row)}
      {advanced.length > 0 && (
        <div>
          <button onClick={() => setAdv(!adv)} className="text-xs text-muted hover:text-ink">{adv ? "Hide" : "Show"} layout &amp; playback options</button>
          {adv && <div className="mt-3 grid grid-cols-2 gap-3">{advanced.map(row)}</div>}
        </div>
      )}
      {!keys.length && <p className="text-xs text-muted">No editable fields.</p>}
    </div>
  );
}
