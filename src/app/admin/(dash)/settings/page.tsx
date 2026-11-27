import { Card, EmptyState, PageHeader } from "@/components/admin/ui";

export default function Page() {
  return (
    <>
      <PageHeader title="Settings" />
      <Card><EmptyState title="Coming soon" hint="Footer, social links and default SEO arrive in the next phase." /></Card>
    </>
  );
}
