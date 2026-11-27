import { createClient } from "@/lib/supabase/server";
import { Card, EmptyState, ErrorNote, PageHeader, StatusBadge, td, th } from "@/components/admin/ui";

const label = (t: string) => t.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase());

export default async function PagesList() {
  const supabase = await createClient();
  const { data: pages, error } = await supabase
    .from("pages").select("id,title,path,type,status,updated_at").order("path");

  return (
    <>
      <PageHeader title="Pages" subtitle={`${pages?.length ?? 0} pages on the site`} />
      {error && <ErrorNote message={error.message} />}
      <Card className="overflow-hidden">
        {pages?.length ? (
          <table className="w-full">
            <thead className="border-b border-line bg-bg/60">
              <tr><th className={th}>Title</th><th className={th}>Path</th><th className={th}>Type</th><th className={th}>Status</th><th className={th}>Updated</th></tr>
            </thead>
            <tbody className="divide-y divide-line">
              {pages.map((p) => (
                <tr key={p.id} className="hover:bg-bg/60">
                  <td className={`${td} font-medium`}>{p.title}</td>
                  <td className={`${td} font-mono text-xs text-muted`}>{p.path}</td>
                  <td className={`${td} text-muted`}>{label(p.type)}</td>
                  <td className={td}><StatusBadge status={p.status} /></td>
                  <td className={`${td} text-muted`}>{new Date(p.updated_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <EmptyState title="No pages yet" hint="Run the Sanity import to bring the existing site content in." />
        )}
      </Card>
    </>
  );
}
