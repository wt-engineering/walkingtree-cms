export type MediaInfo = { id: string; kind: string; url: string; width: number | null; height: number | null };
export type ResolvedMedia = { mediaId: string; url: string; kind: string; width: number | null; height: number | null; [k: string]: unknown };

const base = () => `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/media/`;

export function mediaUrl(row: { path: string | null; external_url: string | null }): string {
  return row.external_url ?? (row.path ? base() + row.path : "");
}

/** Walks any JSON and attaches url/kind/size to every { mediaId } object. */
export function resolveMedia<T>(value: T, map: Map<string, MediaInfo>): T {
  if (Array.isArray(value)) return value.map((v) => resolveMedia(v, map)) as T;
  if (value && typeof value === "object") {
    const o = value as Record<string, unknown>;
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(o)) out[k] = resolveMedia(v, map);
    if (typeof o.mediaId === "string") {
      const m = map.get(o.mediaId);
      if (m) Object.assign(out, { url: m.url, kind: m.kind, width: m.width, height: m.height });
    }
    return out as T;
  }
  return value;
}
