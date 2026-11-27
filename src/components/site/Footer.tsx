import Link from "next/link";

const cols = [
  ["Explore", [["Design Studio India", "/business-to-business/design-studio-india"], ["Design Studio Asia", "/business-to-business/design-studio-asia"], ["Aneka", "/direct-to-consumer/aneka"], ["Unsaid", "/direct-to-consumer/unsaid"]]],
  ["About", [["Creative Process", "/creative-process/design-and-craftmanship"], ["The Group", "/our-story"], ["Careers", "/people"]]],
  ["Support", [["Contact Us", "/contact-us"]]],
] as const;

export default function Footer() {
  return (
    <footer className="pad border-t border-neutral-200 py-16">
      <div className="grid gap-10 md:grid-cols-4">
        {cols.map(([title, links]) => (
          <div key={title}>
            <p className="eyebrow mb-4">{title}</p>
            <ul className="space-y-2 text-sm">{links.map(([l, h]) => <li key={h}><Link href={h} className="hover:underline">{l}</Link></li>)}</ul>
          </div>
        ))}
        <div>
          <p className="eyebrow mb-4">Reach us</p>
          <p className="text-sm">+91-022-6667 4100</p>
          <a href="mailto:hello@walkingtree.co" className="text-sm hover:underline">hello@walkingtree.co</a>
        </div>
      </div>
      <p className="mt-14 text-xs text-neutral-500">© {new Date().getFullYear()} Walking Tree</p>
    </footer>
  );
}
