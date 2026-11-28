import { NextResponse } from "next/server";
import { EMAIL_RE, clean, notify, save, tooMany, visitorId } from "@/lib/forms";

export async function POST(req: Request) {
  const v = visitorId(req);
  if (await tooMany("newsletter", v, 5)) return NextResponse.json({ status: "error", errors: { rate: "Too many requests. Please try again later." } }, { status: 429 });
  const b = await req.json().catch(() => null);
  const email = clean(b?.email, 200);
  if (!EMAIL_RE.test(email)) return NextResponse.json({ status: "error", errors: { email: "invalid" } }, { status: 411 });
  const { error } = await save("newsletter", { email, _v: v });
  if (error) return NextResponse.json({ status: "error" }, { status: 500 });
  await notify("New newsletter signup", { email });
  return NextResponse.json({ status: "success" });
}
