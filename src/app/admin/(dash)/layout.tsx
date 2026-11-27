import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Nav from "@/components/admin/Nav";
import SignOut from "@/components/admin/SignOut";

export default async function DashLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");
  const { data: profile } = await supabase.from("profiles").select("role").eq("user_id", user.id).maybeSingle();
  const role = profile?.role ?? "viewer";

  return (
    <div className="flex min-h-screen">
      <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col border-r border-line bg-surface px-4 py-5">
        <div className="mb-8 flex items-center gap-2.5 px-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-sm font-bold text-white">W</span>
          <div className="leading-tight">
            <p className="text-sm font-semibold">Walking Tree</p>
            <p className="text-xs text-muted">Content studio</p>
          </div>
        </div>
        <Nav />
        <div className="mt-auto flex items-center gap-3 rounded-lg border border-line p-2.5">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent-soft text-xs font-semibold uppercase text-accent">
            {user.email?.[0] ?? "?"}
          </span>
          <div className="min-w-0 flex-1 leading-tight">
            <p className="truncate text-xs font-medium">{user.email}</p>
            <p className="text-xs capitalize text-muted">{role}</p>
          </div>
          <SignOut />
        </div>
      </aside>
      <main className="min-w-0 flex-1 px-10 py-9">
        <div className="mx-auto max-w-5xl">{children}</div>
      </main>
    </div>
  );
}
