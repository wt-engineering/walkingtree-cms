import { createClient } from "@/lib/supabase/server";
import { PageHeader } from "@/components/admin/ui";
import SiteDocEditor from "@/components/admin/editor/SiteDocEditor";
import { defaultFooter } from "@/lib/siteDefaults";

export default async function SettingsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const [{ data }, { data: profile }] = await Promise.all([
    supabase.from("site_settings").select("data").eq("id", "global").maybeSingle(),
    supabase.from("profiles").select("role").eq("user_id", user!.id).maybeSingle(),
  ]);
  const footer = { ...defaultFooter, ...((data?.data as { footer?: object })?.footer ?? {}) };
  return (
    <>
      <PageHeader title="Footer & contact" subtitle="Contact details, footer link columns and office addresses (addresses accept <br/> for line breaks)." />
      <SiteDocEditor kind="footer" initial={footer} canEdit={["admin", "editor"].includes(profile?.role ?? "")} />
    </>
  );
}
