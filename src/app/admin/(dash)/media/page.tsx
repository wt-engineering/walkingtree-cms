import { Card, EmptyState, PageHeader } from "@/components/admin/ui";

export default function Page() {
  return (
    <>
      <PageHeader title="Media library" />
      <Card><EmptyState title="Coming soon" hint="Uploads, crops and focal points arrive in the next phase." /></Card>
    </>
  );
}
