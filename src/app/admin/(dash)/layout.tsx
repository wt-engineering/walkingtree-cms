import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

const nav = [
  ["Pages", "/admin/pages"],
  ["Articles", "/admin/articles"],
  ["Jobs", "/admin/jobs"],
  ["Media", "/admin/media"],
  ["Navigation", "/admin/navigation"],
  ["Settings", "/admin/settings"],
];

export default async function DashLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");
  const { data: profile } = await supabase.from("profiles").select("role").eq("user_id", user.id).single();

  return (
    <div className="flex min-h-screen">
      <aside className="w-56 shrink-0 border-r bg-neutral-50 p-4">
        <p className="mb-6 font-semibold">WT CMS</p>
        <nav className="space-y-1">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="block rounded px-2 py-1.5 text-sm hover:bg-neutral-200">{label}</Link>
          ))}
        </nav>
        <p className="mt-8 text-xs text-neutral-500">{user.email} · {profile?.role ?? "viewer"}</p>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
