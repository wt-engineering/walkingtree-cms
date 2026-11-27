"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function passwordLogin(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await createClient().auth.signInWithPassword({ email, password });
    if (error) return setError(error.message);
    router.replace("/admin/pages");
    router.refresh();
  }

  async function google() {
    const { error } = await createClient().auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${location.origin}/auth/callback`, queryParams: { hd: "walkingtree.co" } },
    });
    if (error) setError(error.message);
  }

  return (
    <main className="min-h-screen grid place-items-center bg-neutral-50 p-4">
      <div className="w-full max-w-sm space-y-4 rounded-xl bg-white p-6 shadow">
        <h1 className="text-xl font-semibold">Walking Tree CMS</h1>
        <form onSubmit={passwordLogin} className="space-y-3">
          <input className="w-full rounded border p-2" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className="w-full rounded border p-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button className="w-full rounded bg-black p-2 text-white">Sign in</button>
        </form>
        <button onClick={google} className="w-full rounded border p-2">Sign in with Google (coming soon)</button>
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
    </main>
  );
}
