import { createClient } from "@/lib/supabase/server";
import { Card, EmptyState, ErrorNote, PageHeader } from "@/components/admin/ui";
import { setHandled } from "./actions";

const LABEL: Record<string, string> = { contact: "Contact", job_application: "Job application", newsletter: "Newsletter" };

export default async function Submissions() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("form_submissions").select("*").order("created_at", { ascending: false }).limit(200);

  const rows = await Promise.all((data ?? []).map(async (r) => {
    const files: { name: string; url: string }[] = [];
    for (const [k, path] of Object.entries((r.payload?.files ?? {}) as Record<string, string>)) {
      const { data: s } = await supabase.storage.from("applications").createSignedUrl(path, 3600);
      if (s?.signedUrl) files.push({ name: k, url: s.signedUrl });
    }
    return { ...r, files };
  }));

  return (
    <>
      <PageHeader title="Submissions" subtitle="Contact enquiries, job applications and newsletter sign-ups." />
      {error && <ErrorNote message={error.message} />}
      <Card className="divide-y divide-line">
        {rows.length ? rows.map((r) => {
          const p = r.payload ?? {};
          const who = [p.firstName, p.lastName].filter(Boolean).join(" ") || p.email || "—";
          return (
            <details key={r.id} className={`group px-5 py-3.5 ${r.handled ? "opacity-60" : ""}`}>
              <summary className="flex cursor-pointer items-center gap-3 text-sm">
                <span className="rounded bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent">{LABEL[r.form] ?? r.form}</span>
                <span className="font-medium">{who}</span>
                <span className="text-muted">{p.email}</span>
                <span className="ml-auto text-xs text-muted">{new Date(r.created_at).toLocaleString()}</span>
              </summary>
              <div className="mt-3 space-y-1.5 rounded-lg bg-bg/60 p-4 text-sm">
                {Object.entries(p).filter(([k]) => k !== "files").map(([k, v]) => v ? <p key={k}><span className="text-muted">{k}: </span><span className="whitespace-pre-wrap">{String(v)}</span></p> : null)}
                {r.files.map((f: { name: string; url: string }) => <p key={f.name}><a href={f.url} target="_blank" rel="noreferrer" className="text-accent underline">Download {f.name}</a></p>)}
                <form action={setHandled.bind(null, r.id, !r.handled)} className="pt-2">
                  <button className="rounded-lg border border-line bg-surface px-3 py-1 text-xs hover:bg-bg">{r.handled ? "Mark as new" : "Mark as handled"}</button>
                </form>
              </div>
            </details>
          );
        }) : <EmptyState title="No submissions yet" hint="They appear here as soon as someone uses a form on the site." />}
      </Card>
    </>
  );
}
