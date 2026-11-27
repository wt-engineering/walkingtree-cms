import type { ReactNode } from "react";
import { Cta, Eyebrow, H2, Img, Rich, Section, T, Video, isMedia, isPortable } from "../primitives";

/* eslint-disable @typescript-eslint/no-explicit-any */
type P = { data: any };

const px = (v?: string) => v ?? "4rem";

function Space({ data }: P) {
  return (
    <div aria-hidden>
      <div className="md:hidden" style={{ height: px(data.mobileHeight) }} />
      <div className="hidden md:block lg:hidden" style={{ height: px(data.tabletHeight) }} />
      <div className="hidden lg:block" style={{ height: px(data.desktopHeight) }} />
    </div>
  );
}

function TextBlock({ data }: P) {
  return <div className="pad mx-auto max-w-3xl"><Rich value={[{ _type: "block", ...data }]} /></div>;
}

function VideoSection({ data }: P) {
  const v = data.video;
  return (
    <Section>
      <Eyebrow>{data.shortHeading}</Eyebrow>
      <H2 v={data.mainHeading} />
      <div className="mt-10 overflow-hidden">
        {v?.videoDesktop ? <Video v={v} /> : <Img m={data.mainImg} />}
      </div>
      <div className="mt-8"><Cta cta={data.callToAction} /></div>
    </Section>
  );
}

function VideoWithText({ data }: P) {
  return (
    <Section className="grid gap-10 md:grid-cols-2 md:items-center">
      <div>
        <Eyebrow>{data.shortHeading}</Eyebrow>
        <H2 v={data.heading} />
        <Rich value={data.description} className="mt-6" />
      </div>
      <div>{data.video?.videoDesktop ? <Video v={data.video} /> : null}</div>
    </Section>
  );
}

function TwoImageTwoText({ data }: P) {
  const l = data.leftSideData ?? {}, r = data.rightSideData ?? {};
  return (
    <Section>
      <div className="mb-12 max-w-2xl"><H2 v={data.heading} /><Rich value={data.description} className="mt-6" /><div className="mt-6"><Cta cta={data.cta} /></div></div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>{l.leftSideMediaType === "video" && l.leftVideo?.videoDesktop ? <Video v={l.leftVideo} /> : <Img m={l.leftImage} sizes="50vw" />}</div>
        <div>{r.rightSideMediaType === "video" && l.rightVideo?.videoDesktop ? <Video v={l.rightVideo} /> : <Img m={l.rightImage ?? r.rightImage} sizes="50vw" />}</div>
      </div>
    </Section>
  );
}

function ThreeStep({ data }: P) {
  return (
    <Section className="grid gap-10 md:grid-cols-3">
      <div><T v={data.shortHeading} className="eyebrow" /></div>
      <Rich value={data.topText1} />
      <Rich value={data.topText2} />
    </Section>
  );
}

function Testimonials({ data }: P) {
  return (
    <Section>
      <Eyebrow>{data.shortHeading}</Eyebrow>
      <H2 v={data.heading} />
      <div className="snap mt-10">
        {(data.sectionData ?? []).map((s: any) => (
          <article key={s._key} className="space-y-4">
            <Img m={s.img} sizes="30vw" />
            <p className="eyebrow">{s.shortHeading}</p>
            <h3 className="serif text-2xl">{s.heading}</h3>
            <Rich value={s.description} />
          </article>
        ))}
      </div>
    </Section>
  );
}

function Interpret({ data }: P) {
  return (
    <Section className="grid gap-10 md:grid-cols-2 md:items-center">
      <Img m={data.image} sizes="50vw" />
      <div>
        <Eyebrow>{data.shortHeading}</Eyebrow>
        <Rich value={data.smallHeading} className="serif text-2xl" />
        <Rich value={data.description} className="mt-4" />
      </div>
    </Section>
  );
}

function Collection({ data }: P) {
  return (
    <Section className="space-y-20">
      {(data.collection ?? []).map((c: any) => (
        <div key={c._key} className="grid gap-8 md:grid-cols-2">
          <Img m={c.mainImage} sizes="50vw" />
          <div className="flex flex-col justify-center">
            <Eyebrow>{c.shortHeading}</Eyebrow>
            <h3 className="serif text-3xl md:text-4xl">{c.mainHeading}</h3>
            <p className="mt-4 leading-relaxed">{c.desc}</p>
            <div className="mt-6 grid grid-cols-3 gap-3">{[c.subImage1, c.subImage2, c.subImage3].map((m, i) => <Img key={i} m={m} sizes="15vw" />)}</div>
          </div>
        </div>
      ))}
    </Section>
  );
}

function ImageTextButton({ data }: P) {
  return (
    <Section className="grid gap-10 md:grid-cols-2 md:items-center">
      <Img m={data.img} sizes="50vw" />
      <div><Eyebrow>{data.shortHeading}</Eyebrow><p className="serif text-2xl leading-snug md:text-3xl">{data.desc}</p><div className="mt-6"><Cta cta={data.cta} /></div></div>
    </Section>
  );
}

function LeftHeadingRight({ data }: P) {
  return (
    <Section className="grid gap-10 md:grid-cols-[1fr_2fr]">
      <div><Eyebrow>{data.shortHeading}</Eyebrow><h2 className="serif text-3xl md:text-4xl">{data.mainHeading}</h2></div>
      <Rich value={data.content} />
    </Section>
  );
}

function Logos({ data }: P) {
  const logos = data.brandLogo?.brandLogo ?? [];
  return (
    <Section>
      <Eyebrow>{data.shortHeading}</Eyebrow>
      <H2 v={data.heading} />
      {data.description && <p className="mt-4 max-w-2xl">{data.description}</p>}
      <div className="mt-10 grid grid-cols-3 items-center gap-8 md:grid-cols-6">{logos.map((l: any) => <Img key={l._key} m={l} sizes="15vw" />)}</div>
    </Section>
  );
}

function BigSlider({ data }: P) {
  return (
    <Section>
      <Eyebrow>{data.shortHeading}</Eyebrow>
      <div className="snap mt-6">
        {(data.map ?? []).map((s: any) => (
          <article key={s._key} className="space-y-4">
            <Img m={s.img1} sizes="40vw" />
            <h3 className="serif text-2xl">{s.heading}</h3>
            {isPortable(s.bigDescriptionRichText) ? <Rich value={s.bigDescriptionRichText} /> : <p>{s.bigDescription}</p>}
            {s.smallDescription && <p className="text-sm text-neutral-600">{s.smallDescription}</p>}
          </article>
        ))}
      </div>
    </Section>
  );
}

/** Fallback: renders any section's content in field order so nothing is silently lost. */
const SKIP = /height|width|color|enable|autoplay|loop|muted|controls|show|play|restricted|pause|^_|^id$|mediaType|mediaId|^url$|kind/i;
function generic(v: any, key: string, depth: number): ReactNode {
  if (v == null || typeof v === "boolean" || typeof v === "number" || SKIP.test(key)) return null;
  if (isMedia(v)) return v.kind === "video" ? <Video key={key} v={{ videoDesktop: v }} /> : <Img key={key} m={v} sizes="50vw" />;
  if (typeof v === "string") {
    if (/short|eyebrow|caption|label|small/i.test(key)) return <p key={key} className="eyebrow">{v}</p>;
    if (/heading|title|name/i.test(key)) return <h3 key={key} className="serif text-2xl md:text-4xl">{v}</h3>;
    return <p key={key} className="leading-relaxed">{v}</p>;
  }
  if (isPortable(v)) return <Rich key={key} value={v} />;
  if (Array.isArray(v)) {
    if (depth > 2) return null;
    const media = v.every(isMedia);
    return <div key={key} className={media ? "grid grid-cols-2 gap-4 md:grid-cols-3" : "snap"}>{v.map((x, i) => <div key={i} className="space-y-3">{generic(x, `${key}${i}`, depth + 1)}</div>)}</div>;
  }
  if (typeof v === "object") {
    if (v.buttonText) return <Cta key={key} cta={v} />;
    if (depth > 3) return null;
    return <div key={key} className="space-y-4">{Object.entries(v).map(([k, x]) => generic(x, k, depth + 1))}</div>;
  }
  return null;
}
function Generic({ data }: P) {
  return <Section className="space-y-5">{Object.entries(data).map(([k, v]) => generic(v, k, 0))}</Section>;
}

function Openings() {
  return null; // replaced in the page route, which has the job list
}

export const blocks: Record<string, (p: P) => ReactNode> = {
  space: Space, block: TextBlock, videoSection: VideoSection, videoWithTwoStepText: VideoWithText,
  twoImageAndTwoText: TwoImageTwoText, threeStepText: ThreeStep, testimonialSlider: Testimonials, intepret: Interpret,
  collectionCarousel: Collection, imageAndTextButton: ImageTextButton, leftHeadingAndRightContent: LeftHeadingRight,
  clientsAndBrandPartners: Logos, bigSliderwithContent: BigSlider, openings: Openings,
};
export { Generic };
