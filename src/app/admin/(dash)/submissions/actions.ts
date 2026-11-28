"use server";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function setHandled(id: string, handled: boolean) {
  const supabase = await createClient();
  await supabase.from("form_submissions").update({ handled }).eq("id", id);
  revalidatePath("/admin/submissions");
}
