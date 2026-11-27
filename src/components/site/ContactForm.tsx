"use client";
import { useState } from "react";
import { Img } from "./primitives";

/* eslint-disable @typescript-eslint/no-explicit-any */
const f = "w-full border-b border-neutral-400 bg-transparent py-3 text-sm outline-none focus:border-black";

export default function ContactForm({ data }: { data: any }) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const body = Object.fromEntries(new FormData(e.currentTarget));
    const r = await fetch("/api/contact", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
    setState(r.ok ? "done" : "error");
  }
  return (
    <section className="pad grid gap-12 py-20 md:grid-cols-2">
      <div className="space-y-6">
        <h2 className="serif text-4xl md:text-6xl">{data.heading}</h2>
        <p className="max-w-md leading-relaxed">{data.shortDesc}</p>
        <Img m={data.img} sizes="40vw" />
      </div>
      {state === "done" ? <p className="serif self-center text-3xl">Thank you. We&apos;ll be in touch.</p> : (
        <form onSubmit={submit} className="space-y-6 self-center">
          <input name="name" placeholder="Name" required className={f} />
          <input name="email" type="email" placeholder="Email" required className={f} />
          <input name="phone" placeholder="Phone" className={f} />
          <textarea name="message" placeholder="Message" rows={4} required className={f} />
          <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
          <button disabled={state === "sending"} className="border border-black px-8 py-3 text-xs uppercase tracking-[0.18em] hover:bg-black hover:text-white">
            {state === "sending" ? "Sending…" : "Send"}
          </button>
          {state === "error" && <p className="text-sm text-red-600">Something went wrong. Please try again.</p>}
        </form>
      )}
    </section>
  );
}
