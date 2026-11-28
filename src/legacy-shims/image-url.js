// Replacement for @sanity/image-url. Asset refs carry their URL (see lib/legacy/dataset.ts).
function decode(p) {
  const s = p.replace(/-/g, "+").replace(/_/g, "/");
  const pad = s + "=".repeat((4 - (s.length % 4)) % 4);
  return typeof atob === "function" ? decodeURIComponent(escape(atob(pad))) : Buffer.from(pad, "base64").toString();
}
export function urlFromRef(ref) {
  if (typeof ref !== "string") return "";
  const m = ref.match(/^image-(.+)-\d+x\d+-[a-z0-9]+$/) || ref.match(/^file-(.+)-[a-z0-9]+$/);
  try { return m ? decode(m[1]) : ""; } catch { return ""; }
}
const builder = (src) => {
  const b = new Proxy({}, {
    get: (_t, prop) => {
      if (prop === "url") return () => src;
      if (prop === "toString") return () => src;
      return () => b; // width/height/quality/auto/fit/... are no-ops
    },
  });
  return b;
};
export default function imageUrlBuilder() {
  return {
    image: (source) => {
      const ref = source?.asset?._ref ?? source?._ref ?? (typeof source === "string" ? source : "");
      return builder(urlFromRef(ref));
    },
  };
}
