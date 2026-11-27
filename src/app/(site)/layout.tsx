import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { getNavigation } from "@/lib/content";
import { defaultNav } from "@/lib/defaultNav";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const nav = await getNavigation();
  return (
    <div className="site relative min-h-screen">
      {/* Adobe Fonts kit for the serif face; shows once this domain is added to the kit */}
      <link rel="stylesheet" href="https://use.typekit.net/gip7xuo.css" />
      <Header items={nav.length ? nav : defaultNav} />
      {children}
      <Footer />
    </div>
  );
}
