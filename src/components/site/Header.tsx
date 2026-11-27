"use client";
import Link from "next/link";
import { useState } from "react";
import type { NavItem } from "@/lib/content";

export default function Header({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="pad absolute inset-x-0 top-0 z-30 flex items-center justify-between py-6 text-white">
      <Link href="/" className="serif text-xl tracking-[0.25em] uppercase">Walking Tree</Link>
      <button className="text-xs uppercase tracking-[0.2em] lg:hidden" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
      <nav className={`${open ? "fixed inset-0 z-40 flex flex-col gap-5 overflow-auto bg-black p-8 pt-24" : "hidden"} lg:static lg:flex lg:flex-row lg:items-center lg:gap-8 lg:bg-transparent lg:p-0`}>
        {items.map((i) => (
          <div key={i.label} className="group relative">
            {i.href ? (
              <Link href={i.href} onClick={() => setOpen(false)} className="text-[0.7rem] uppercase tracking-[0.18em] hover:opacity-70">{i.label}</Link>
            ) : (
              <span className="cursor-default text-[0.7rem] uppercase tracking-[0.18em]">{i.label}</span>
            )}
            {i.children && (
              <div className="mt-2 flex flex-col gap-2 pl-3 lg:invisible lg:absolute lg:left-0 lg:top-full lg:mt-0 lg:min-w-52 lg:bg-black/85 lg:p-4 lg:opacity-0 lg:transition lg:group-hover:visible lg:group-hover:opacity-100">
                {i.children.map((c) => (
                  <Link key={c.href} href={c.href} onClick={() => setOpen(false)} className="text-sm normal-case opacity-80 hover:opacity-100" {...(c.download ? { download: true } : {})}>{c.label}</Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
