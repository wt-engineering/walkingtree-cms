import { Cta, Img, Rich, Video, isMedia, T } from "./primitives";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Hero({ hero }: { hero: any }) {
  if (!hero || !Object.keys(hero).length) return null;
  const desktop = hero.mainImage ?? hero.image ?? hero.img ?? hero.bannerImage;
  const mobile = hero.mainImageMobile ?? hero.imageMobile;
  const video = hero.mediaType === "video" ? hero.video : null;
  const short = hero.shortHeading ?? hero.smallHeading;
  const main = hero.mainHeading ?? hero.heading ?? hero.title;
  const desc = hero.desc ?? hero.description;

  return (
    <header className="relative min-h-[70vh] w-full overflow-hidden bg-neutral-900 text-white md:min-h-screen">
      <div className="absolute inset-0">
        {video?.videoDesktop ? <Video v={video} className="h-full object-cover" /> : (
          <>
            {isMedia(mobile) && <Img m={mobile} priority className="h-full object-cover md:hidden" />}
            {isMedia(desktop) && <Img m={desktop} priority className={`h-full object-cover ${isMedia(mobile) ? "hidden md:block" : ""}`} />}
          </>
        )}
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="pad relative flex min-h-[70vh] flex-col justify-end pb-16 pt-32 md:min-h-screen md:pb-24">
        {short && <p className="eyebrow mb-4 !text-white/80"><T v={short} /></p>}
        {main && <h1 className="serif max-w-4xl text-4xl leading-tight md:text-7xl"><T v={main} /></h1>}
        {desc && <div className="mt-6 max-w-xl text-base text-white/90 md:text-lg">{typeof desc === "string" ? <p>{desc}</p> : <Rich value={desc} />}</div>}
        <div className="mt-8"><Cta cta={hero.cta} className="text-white hover:!bg-white hover:!text-black" /></div>
      </div>
    </header>
  );
}
