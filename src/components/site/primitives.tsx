import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { ReactNode } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const isMedia = (v: any) => v && typeof v === "object" && typeof v.url === "string" && typeof v.mediaId === "string";
export const isPortable = (v: any) => Array.isArray(v) && v.length > 0 && v.every((b) => b && typeof b === "object" && b._type === "block");

const href = (a: any) => a?.externalUrl || a?.internalPath || a?.internalLink || a?.link || "#";

const components: PortableTextComponents = {
  marks: {
    customLink: ({ value, children }) => {
      const h = href(value);
      return h.startsWith("http") ? <a href={h} target="_blank" rel="noreferrer">{children}</a> : <Link href={h}>{children}</Link>;
    },
  },
};

export function Rich({ value, className = "" }: { value: any; className?: string }) {
  if (!isPortable(value)) return null;
  return <div className={`rich ${className}`}><PortableText value={value} components={components} /></div>;
}

/** Heading/text that may be a plain string or portable text */
export function T({ v, className = "" }: { v: any; className?: string }) {
  if (!v) return null;
  if (typeof v === "string") return <span className={className}>{v}</span>;
  if (isPortable(v)) return <Rich value={v} className={className} />;
  return null;
}

export function Img({ m, className = "", sizes = "100vw", priority = false }: { m: any; className?: string; sizes?: string; priority?: boolean }) {
  if (!isMedia(m)) return null;
  if (m.kind === "video") return <Video v={{ videoDesktop: m, autoplay: true, loop: true, muted: true }} className={className} />;
  return (
    <Image src={m.url} alt={m.alt ?? ""} width={m.width ?? 1600} height={m.height ?? 1000} sizes={sizes} priority={priority}
      className={`h-auto w-full ${className}`} />
  );
}

export function Video({ v, className = "" }: { v: any; className?: string }) {
  const src = v?.videoDesktop?.url ?? (isMedia(v) ? v.url : null);
  if (!src) return null;
  const auto = v.autoplay !== false;
  return (
    <video className={`w-full ${className}`} src={src} poster={undefined} autoPlay={auto} muted={v.muted !== false} loop={v.loop !== false}
      controls={v.controls === true} playsInline preload="metadata" />
  );
}

export function Cta({ cta, className = "" }: { cta: any; className?: string }) {
  if (!cta?.buttonText) return null;
  const h = href(cta);
  const cls = `inline-block border border-current px-7 py-3 text-xs uppercase tracking-[0.18em] transition hover:bg-black hover:text-white ${className}`;
  return cta.isExternal || h.startsWith("http") ? <a href={h} className={cls} target="_blank" rel="noreferrer">{cta.buttonText}</a> : <Link href={h} className={cls}>{cta.buttonText}</Link>;
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`pad py-16 md:py-24 ${className}`}>{children}</section>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return children ? <p className="eyebrow mb-4">{children}</p> : null;
}

export function H2({ v }: { v: any }) {
  if (!v) return null;
  return <h2 className="serif text-3xl leading-tight md:text-5xl"><T v={v} /></h2>;
}
