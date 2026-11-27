import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

const ALLOWED_DOMAIN = "walkingtree.co";

export async function GET(request: Request) {
  const { origin, searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      const { data: { user } } = await supabase.auth.getUser();
      if (user?.email?.toLowerCase().endsWith(`@${ALLOWED_DOMAIN}`)) {
        return NextResponse.redirect(`${origin}/admin`);
      }
      await supabase.auth.signOut(); // wrong domain
    }
  }
  return NextResponse.redirect(`${origin}/admin/login?error=denied`);
}
