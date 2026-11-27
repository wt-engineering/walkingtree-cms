import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Hero from "@/components/site/Hero";
import Sections from "@/components/site/Sections";
import ContactForm from "@/components/site/ContactForm";
import { Eyebrow, Img, Rich, Section, isMedia } from "@/components/site/primitives";
import { getArticle, getJob, getPage, listArticlesByCategory, listJobs, withMedia } from "@/lib/content";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const revalidate = 60;

type Props = { params: Promise<{ slug?: string[] }> };

const seoMeta = (seo: any, fallback: string): Metadata => ({
  title: seo?.title || fallback,
  description: seo?.description,
  openGraph: { title: seo?.title || fallback, description: seo?.description, images: isMedia(seo?.image) ? [seo.image.url] : undefined },
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = (await params).slug ?? [];
  if (s[0] === "article" && s[1]) { const a = await getArticle(s[1]); return a ? seoMeta(a.seo, a.title) : {}; }
  if (s[0] === "people" && s[1] === "job-openings" && s[2]) { const j = await getJob(s[2]); return j ? { title: j.name, description: j.short_description } : {}; }
  const p = await getPage("/" + s.join("/"));
  return p ? seoMeta(p.seo, p.title) : {};
}

function ArticleCard({ a }: { a: any }) {
  const img = a.extra?.portrait ?? a.hero?.mainImage;
  return (
    <Link href={`/article/${a.slug}`} className="block space-y-3">
      {isMedia(img) && <Img m={img} sizes="30vw" />}
      {a.label && <p className="eyebrow">{a.label}</p>}
      <h3 className="serif text-2xl">{a.title}</h3>
      {a.excerpt && <p className="text-sm text-neutral-600">{a.excerpt}</p>}
    </Link>
  );
}

export default async function SitePage({ params }: Props) {
  const s = (await params).slug ?? [];

  if (s[0] === "article" && s.length === 2) {
    const a = await getArticle(s[1]);
    if (!a) notFound();
    return (
      <>
        <Hero hero={a.hero} />
        <Section>
          <div className="mx-auto max-w-3xl"><Eyebrow>{a.label}</Eyebrow><h1 className="serif mb-6 text-4xl md:text-6xl">{a.title}</h1>{a.author && <p className="eyebrow mb-10">{a.author}</p>}</div>
        </Section>
        <Sections sections={a.content} />
      </>
    );
  }

  if (s[0] === "people" && s[1] === "job-openings" && s.length === 3) {
    const j: any = await getJob(s[2]);
    if (!j) notFound();
    return (
      <Section className="mx-auto max-w-3xl pt-40">
        <Eyebrow>{j.departments?.name}</Eyebrow>
        <h1 className="serif text-4xl md:text-6xl">{j.title_line_1} {j.title_line_2}</h1>
        <p className="mt-4 text-neutral-600">{j.location}</p>
        <p className="mt-8 whitespace-pre-line leading-relaxed">{j.description}</p>
        {(j.sections ?? []).map((g: any, i: number) => (
          <div key={i} className="mt-8"><h2 className="serif mb-3 text-2xl">{g.heading}</h2><Rich value={g.points ?? g.description} /></div>
        ))}
      </Section>
    );
  }

  const page = await getPage("/" + s.join("/"));
  if (!page) notFound();

  const jobs = page.sections.some((x) => x.type === "openings") ? await listJobs() : [];
  const extra = {
    openings: () => (
      <Section>
        <Eyebrow>Open positions</Eyebrow>
        <ul className="divide-y divide-neutral-200">
          {jobs.map((j: any) => (
            <li key={j.slug}><Link href={`/people/job-openings/${j.slug}`} className="flex justify-between py-5 hover:opacity-70"><span className="serif text-2xl">{j.name}</span><span className="text-sm text-neutral-600">{j.location}</span></Link></li>
          ))}
          {!jobs.length && <li className="py-5 text-neutral-600">No openings right now.</li>}
        </ul>
      </Section>
    ),
  };

  return (
    <>
      <Hero hero={page.hero} />
      {page.type === "contact" && page.extra?.contactForm && <ContactForm data={page.extra.contactForm} />}
      {page.type === "blog" && <BlogSections extra={page.extra} />}
      <Sections sections={page.sections} extra={extra} />
    </>
  );
}

async function BlogSections({ extra }: { extra: any }) {
  const groups = await Promise.all(
    ["section1", "section2", "section3"].filter((k) => extra?.[k]).map(async (k) => ({
      title: extra[k].title as string,
      items: await listArticlesByCategory(extra[k].category?._ref),
    }))
  );
  return (
    <>
      {groups.map((g) => (
        <Section key={g.title}>
          <Eyebrow>{g.title}</Eyebrow>
          <div className="mt-6 grid gap-10 md:grid-cols-3">{g.items.map((a: any) => <ArticleCard key={a.slug} a={a} />)}</div>
        </Section>
      ))}
    </>
  );
}
void Image; void withMedia;
