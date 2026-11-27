import { createClient } from "@/lib/supabase/server";
import { Card, EmptyState, ErrorNote, PageHeader, StatusBadge, td, th } from "@/components/admin/ui";

export default async function Articles() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("articles").select("id,title,slug,author,status,updated_at").order("updated_at", { ascending: false });
  return (
    <>
      <PageHeader title="Articles" subtitle={`${data?.length ?? 0} articles`} />
      {error && <ErrorNote message={error.message} />}
      <Card className="overflow-hidden">
        {data?.length ? (
          <table className="w-full">
            <thead className="border-b border-line bg-bg/60"><tr><th className={th}>Title</th><th className={th}>Author</th><th className={th}>Slug</th><th className={th}>Status</th></tr></thead>
            <tbody className="divide-y divide-line">
              {data.map((a) => (
                <tr key={a.id} className="hover:bg-bg/60">
                  <td className={`${td} font-medium`}>{a.title}</td>
                  <td className={`${td} text-muted`}>{a.author ?? "—"}</td>
                  <td className={`${td} font-mono text-xs text-muted`}>{a.slug}</td>
                  <td className={td}><StatusBadge status={a.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : <EmptyState title="No articles yet" hint="They appear here after the Sanity import." />}
      </Card>
    </>
  );
}
