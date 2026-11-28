import { NextResponse } from "next/server";
import { EMAIL_RE, admin, clean, notify, save, tooMany, visitorId } from "@/lib/forms";

const MAX = 2_000_000; // matches the 2 MB limit the form already enforces
const FILE_KEYS = ["resume", "coverLetter", "portfolio"] as const;

export async function POST(req: Request) {
  const v = visitorId(req);
  if (await tooMany("job_application", v, 3)) return NextResponse.json({ status: "error", errors: { rate: "Too many requests. Please try again later." } }, { status: 429 });
  const form = await req.formData().catch(() => null);
  if (!form) return NextResponse.json({ status: "error" }, { status: 411 });

  const f = (k: string) => clean(form.get(k), 300);
  const errors: Record<string, string> = {};
  if (!f("firstName")) errors.firstName = "required";
  if (!f("lastName")) errors.lastName = "required";
  if (!EMAIL_RE.test(f("email"))) errors.email = "invalid";
  if (f("phoneNumber").replace(/\D/g, "").length < 7) errors.phoneNumber = "invalid";
  const resume = form.get("resume");
  if (!(resume instanceof File) || resume.size === 0) return NextResponse.json({ status: "error", errors }, { status: 411 });
  if (Object.keys(errors).length) return NextResponse.json({ status: "error", errors }, { status: 411 });

  const sb = admin();
  const id = crypto.randomUUID();
  const files: Record<string, string> = {};
  for (const k of FILE_KEYS) {
    const file = form.get(k);
    if (!(file instanceof File) || file.size === 0 || file.size > MAX) { if (k === "resume") return NextResponse.json({ status: "error", errors }, { status: 411 }); continue; }
    const path = `${id}/${k}-${file.name.replace(/[^\w.-]/g, "_")}`;
    const { error } = await sb.storage.from("applications").upload(path, file, { contentType: file.type || undefined });
    if (error) return NextResponse.json({ status: "error" }, { status: 500 });
    files[k] = path;
  }
  const payload = { firstName: f("firstName"), lastName: f("lastName"), email: f("email"), phoneNumber: f("phoneNumber"), linkedIn: f("linkedIn"), message: clean(form.get("message"), 5000), files };
  const { error } = await save("job_application", { ...payload, _v: v });
  if (error) return NextResponse.json({ status: "error" }, { status: 500 });
  await notify(`New job application from ${payload.firstName} ${payload.lastName}`, { name: `${payload.firstName} ${payload.lastName}`, email: payload.email, phone: payload.phoneNumber, linkedIn: payload.linkedIn, files: Object.keys(files).join(", ") });
  return NextResponse.json({ status: "success" });
}
