"use client";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function Login() {
  const [error, setError] = useState<string | null>(null);

  async function google() {
    const { error } = await createClient().auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${location.origin}/auth/callback`, queryParams: { hd: "walkingtree.co" } },
    });
    if (error) setError(error.message);
  }

  const denied = typeof window !== "undefined" && new URLSearchParams(location.search).get("error");

  return (
    <main className="min-h-screen grid place-items-center bg-neutral-50 p-4">
      <div className="w-full max-w-sm space-y-4 rounded-xl bg-white p-6 shadow">
        <h1 className="text-xl font-semibold">Walking Tree CMS</h1>
        <button onClick={google} className="w-full rounded bg-black p-2 text-white">Sign in with Google</button>
        {(error || denied) && <p className="text-sm text-red-600">{error ?? "That account isn't allowed."}</p>}
      </div>
    </main>
  );
}
