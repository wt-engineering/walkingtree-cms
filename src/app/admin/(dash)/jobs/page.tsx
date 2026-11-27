import { createClient } from "@/lib/supabase/server";
import { Card, EmptyState, ErrorNote, PageHeader, StatusBadge, td, th } from "@/components/admin/ui";

export default async function Jobs() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("job_openings").select("id,name,location,status,departments(name)").order("created_at", { ascending: false });
  return (
    <>
      <PageHeader title="Job openings" subtitle={`${data?.length ?? 0} openings`} />
      {error && <ErrorNote message={error.message} />}
      <Card className="overflow-hidden">
        {data?.length ? (
          <table className="w-full">
            <thead className="border-b border-line bg-bg/60"><tr><th className={th}>Role</th><th className={th}>Department</th><th className={th}>Location</th><th className={th}>Status</th></tr></thead>
            <tbody className="divide-y divide-line">
              {data.map((j) => (
                <tr key={j.id} className="hover:bg-bg/60">
                  <td className={`${td} font-medium`}>{j.name}</td>
                  <td className={`${td} text-muted`}>{(Array.isArray(j.departments) ? j.departments[0]?.name : (j.departments as { name: string } | null)?.name) ?? "—"}</td>
                  <td className={`${td} text-muted`}>{j.location ?? "—"}</td>
                  <td className={td}><StatusBadge status={j.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : <EmptyState title="No job openings" hint="Openings appear here after the Sanity import." />}
      </Card>
    </>
  );
}
