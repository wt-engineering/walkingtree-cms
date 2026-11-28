export type MediaItem = { id: string; kind: string; url: string; width: number | null; height: number | null };
export type MediaIndex = Record<string, MediaItem>;
export type Section = { id: string; type: string; data: any };
export type Ctx = {
  media: MediaIndex;
  pick: (kind: "image" | "video" | "file" | "any", cb: (m: MediaItem) => void) => void;
  addMedia: (m: MediaItem) => void;
  /** blueprint for the first item of an empty array, by field name */
  arrayTemplates?: Record<string, unknown>;
};

export const humanize = (k: string) =>
  k.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]/g, " ").replace(/^\w/, (c) => c.toUpperCase());

export const uid = () => Math.random().toString(36).slice(2, 14);

/** Empty copy of an example value: same shape, no content. Used for "add section" and "add item". */
export function skeleton(v: any): any {
  if (Array.isArray(v)) return v.length ? [skeleton(v[0])] : [];
  if (v && typeof v === "object") {
    if ("mediaId" in v) { const { mediaId, ...rest } = v; void mediaId; return { ...Object.fromEntries(Object.entries(rest).map(([k, x]) => [k, skeleton(x)])), mediaId: null }; }
    return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, k === "_type" ? x : k === "_key" ? uid() : skeleton(x)]));
  }
  if (typeof v === "string") return "";
  return v;
}
