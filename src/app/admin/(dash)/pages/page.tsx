import { createClient } from "@/lib/supabase/server";

export default async function PagesList() {
  const supabase = await createClient();
  const { data: pages, error } = await supabase
    .from("pages").select("id,title,path,type,status,updated_at").order("path");

  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold">Pages</h1>
      {error && <p className="text-red-600">{error.message}</p>}
      <table className="w-full text-sm">
        <thead><tr className="border-b text-left"><th className="py-2">Title</th><th>Path</th><th>Type</th><th>Status</th></tr></thead>
        <tbody>
          {pages?.map((p) => (
            <tr key={p.id} className="border-b"><td className="py-2">{p.title}</td><td>{p.path}</td><td>{p.type}</td><td>{p.status}</td></tr>
          ))}
          {!pages?.length && <tr><td colSpan={4} className="py-6 text-neutral-500">No pages yet. Run the Sanity migration to import them.</td></tr>}
        </tbody>
      </table>
    </div>
  );
}
