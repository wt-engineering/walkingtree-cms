"use client";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { icons } from "./Icons";

export default function SignOut() {
  const router = useRouter();
  return (
    <button
      title="Sign out"
      onClick={async () => {
        await createClient().auth.signOut();
        router.replace("/admin/login");
        router.refresh();
      }}
      className="rounded-md p-1.5 text-muted hover:bg-black/5 hover:text-ink"
    >
      {icons.logout}
    </button>
  );
}
