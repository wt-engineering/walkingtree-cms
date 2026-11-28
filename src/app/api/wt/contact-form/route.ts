import { NextResponse } from "next/server";
import { EMAIL_RE, clean, notify, save } from "@/lib/forms";

// Same contract as the old backend: 200 on success, 411 + { errors } on invalid input.
export async function POST(req: Request) {
  const b = await req.json().catch(() => null);
  if (!b) return NextResponse.json({ errors: { body: "invalid" } }, { status: 411 });
  const email = clean(b.email, 200), firstName = clean(b.firstName, 200), message = clean(b.message, 5000);
  const errors: Record<string, string> = {};
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (!firstName) errors.firstName = "Please enter your name.";
  if (!message) errors.message = "Please enter a message.";
  if (Object.keys(errors).length) return NextResponse.json({ status: "error", errors }, { status: 411 });

  const payload = { firstName, email, phoneNumber: clean(b.phoneNumber, 40), enquiryType: clean(b.enquiryType, 100), organizational: clean(b.organizational, 200), message };
  const { error } = await save("contact", payload);
  if (error) return NextResponse.json({ status: "error" }, { status: 500 });
  await notify(`New contact enquiry from ${firstName}`, payload);
  return NextResponse.json({ status: "success" });
}
