import { Card, EmptyState, PageHeader } from "@/components/admin/ui";

export default function Page() {
  return (
    <>
      <PageHeader title="Navigation" />
      <Card><EmptyState title="Coming soon" hint="The menu editor arrives in the next phase. The menu is hardcoded in the old site." /></Card>
    </>
  );
}
