"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { icons } from "./Icons";

const items = [
  { label: "Overview", href: "/admin", icon: icons.home, exact: true },
  { label: "Pages", href: "/admin/pages", icon: icons.pages },
  { label: "Articles", href: "/admin/articles", icon: icons.articles },
  { label: "Jobs", href: "/admin/jobs", icon: icons.jobs },
  { label: "Media", href: "/admin/media", icon: icons.media },
  { label: "Navigation", href: "/admin/navigation", icon: icons.navigation },
  { label: "Settings", href: "/admin/settings", icon: icons.settings },
];

export default function Nav() {
  const path = usePathname();
  return (
    <nav className="flex flex-col gap-0.5">
      {items.map((i) => {
        const active = i.exact ? path === i.href : path.startsWith(i.href);
        return (
          <Link
            key={i.href}
            href={i.href}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              active ? "bg-accent-soft text-accent" : "text-muted hover:bg-black/5 hover:text-ink"
            }`}
          >
            {i.icon}
            {i.label}
          </Link>
        );
      })}
    </nav>
  );
}
