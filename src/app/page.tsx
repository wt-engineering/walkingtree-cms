import Link from "next/link";

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center p-6">
      <div className="max-w-md text-center">
        <span className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-accent text-2xl font-bold text-white">W</span>
        <h1 className="text-2xl font-semibold tracking-tight">Walking Tree</h1>
        <p className="mt-2 text-sm text-muted">The new website is being built. Check back soon.</p>
        <Link href="/admin" className="mt-6 inline-block rounded-lg border border-line bg-surface px-4 py-2 text-sm font-medium hover:bg-bg">
          Team login
        </Link>
      </div>
    </main>
  );
}
