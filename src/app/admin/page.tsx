import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Card, PageHeader, ErrorNote } from "@/components/admin/ui";

export default async function Overview() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const count = async (t: string) => (await supabase.from(t).select("*", { count: "exact", head: true })).count ?? 0;
  const [pages, articles, jobs, media] = await Promise.all([count("pages"), count("articles"), count("job_openings"), count("media")]);
  const { data: recent, error } = await supabase.from("pages").select("id,title,path,status,updated_at").order("updated_at", { ascending: false }).limit(5);

  const stats = [["Pages", pages, "/admin/pages"], ["Articles", articles, "/admin/articles"], ["Job openings", jobs, "/admin/jobs"], ["Media files", media, "/admin/media"]] as const;

  return (
    <>
      <PageHeader title="Overview" subtitle="Everything on walkingtree.co, in one place." />
      {error && <ErrorNote message={error.message} />}
      <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map(([label, n, href]) => (
          <Link key={label} href={href}>
            <Card className="p-5 transition-shadow hover:shadow-md">
              <p className="text-3xl font-semibold tracking-tight">{n}</p>
              <p className="mt-1 text-sm text-muted">{label}</p>
            </Card>
          </Link>
        ))}
      </div>
      <Card>
        <div className="border-b border-line px-5 py-3.5 text-sm font-medium">Recently updated pages</div>
        {recent?.length ? (
          <ul className="divide-y divide-line">
            {recent.map((p) => (
              <li key={p.id} className="flex items-center justify-between px-5 py-3 text-sm">
                <span className="font-medium">{p.title}</span>
                <span className="text-muted">{p.path}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="px-5 py-10 text-center text-sm text-muted">Nothing here yet. Import the Sanity content to get started.</p>
        )}
      </Card>
    </>
  );
}
