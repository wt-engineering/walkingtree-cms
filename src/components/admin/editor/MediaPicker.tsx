"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { MediaItem } from "./types";

type Props = { kind: "image" | "video" | "file" | "any"; onClose: () => void; onPick: (m: MediaItem) => void; onUploaded: (m: MediaItem) => void; all: MediaItem[] };

export default function MediaPicker({ kind, onClose, onPick, onUploaded, all }: Props) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [limit, setLimit] = useState(48);
  const items = all.filter((m) => kind === "any" || m.kind === kind || (kind === "file" && m.kind !== "image"));

  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  async function upload(file: File) {
    setBusy(true); setError(null);
    try {
      const sb = createClient();
      const k = file.type.startsWith("image/") ? "image" : file.type.startsWith("video/") ? "video" : "file";
      const path = `uploads/${Date.now()}-${file.name.replace(/[^\w.-]/g, "_")}`;
      const { error: upErr } = await sb.storage.from("media").upload(path, file, { contentType: file.type });
      if (upErr) throw upErr;
      let width: number | null = null, height: number | null = null;
      if (k === "image") { try { const b = await createImageBitmap(file); width = b.width; height = b.height; } catch { /* ignore */ } }
      const { data, error: dbErr } = await sb.from("media").insert({ path, kind: k, mime_type: file.type, width, height, size_bytes: file.size }).select("id").single();
      if (dbErr) throw dbErr;
      const url = sb.storage.from("media").getPublicUrl(path).data.publicUrl;
      const item = { id: data.id, kind: k, url, width, height };
      onUploaded(item);
      onPick(item);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload failed");
    } finally { setBusy(false); }
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-6" onClick={onClose}>
      <div className="flex max-h-[85vh] w-full max-w-4xl flex-col rounded-2xl bg-surface shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
          <p className="text-sm font-semibold">Choose media</p>
          <div className="flex items-center gap-3">
            <label className={`cursor-pointer rounded-lg bg-accent px-3.5 py-1.5 text-sm font-medium text-white ${busy ? "opacity-60" : ""}`}>
              {busy ? "Uploading…" : "Upload new"}
              <input type="file" className="hidden" disabled={busy} accept={kind === "image" ? "image/*" : kind === "video" ? "video/*" : undefined}
                onChange={(e) => e.target.files?.[0] && upload(e.target.files[0])} />
            </label>
            <button onClick={onClose} className="text-sm text-muted hover:text-ink">Close</button>
          </div>
        </div>
        {error && <p className="bg-red-50 px-5 py-2 text-sm text-danger">{error}</p>}
        <div className="grid flex-1 grid-cols-3 gap-3 overflow-auto p-5 sm:grid-cols-4 md:grid-cols-6">
          {items.slice(0, limit).map((m) => (
            <button key={m.id} onClick={() => onPick(m)} className="group relative aspect-square overflow-hidden rounded-lg border border-line bg-bg hover:ring-2 hover:ring-accent">
              {m.kind === "image" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={m.url} alt="" loading="lazy" className="h-full w-full object-cover" />
              ) : (
                <span className="grid h-full place-items-center p-2 text-center text-xs text-muted">{m.kind}<br />{m.url.split("/").pop()?.slice(0, 18)}</span>
              )}
            </button>
          ))}
          {!items.length && <p className="col-span-full py-10 text-center text-sm text-muted">No media yet. Upload one.</p>}
          {items.length > limit && <button onClick={() => setLimit(limit + 48)} className="col-span-full rounded-lg border border-line py-2 text-sm hover:bg-bg">Show more ({items.length - limit})</button>}
        </div>
      </div>
    </div>
  );
}
