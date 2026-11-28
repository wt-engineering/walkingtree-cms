import { createClient } from "@/lib/supabase/server";
import { PageHeader } from "@/components/admin/ui";
import SiteDocEditor from "@/components/admin/editor/SiteDocEditor";
import { defaultNav } from "@/lib/siteDefaults";

export default async function NavigationPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const [{ data }, { data: profile }] = await Promise.all([
    supabase.from("navigation").select("items").eq("id", "main").maybeSingle(),
    supabase.from("profiles").select("role").eq("user_id", user!.id).maybeSingle(),
  ]);
  const items = ((data?.items as unknown[]) ?? []).length ? (data!.items as { label: string; href?: string; children?: unknown[] }[]) : defaultNav;
  // every item gets a children list so sub-menus can be added to any entry
  const initial = { items: items.map((i) => ({ label: i.label, href: i.href ?? "", children: i.children ?? [] })) };
  return (
    <>
      <PageHeader title="Navigation" subtitle="The main menu. Top-level entries with sub-items show as dropdowns; leave the link empty for those." />
      <SiteDocEditor kind="navigation" initial={initial} canEdit={["admin", "editor"].includes(profile?.role ?? "")} />
    </>
  );
}
