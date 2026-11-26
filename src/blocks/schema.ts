import { z } from "zod";

// Shared field shapes
export const mediaRef = z.object({ mediaId: z.string().uuid().nullable(), alt: z.string().optional() });
export const cta = z.object({ label: z.string(), href: z.string() }).partial();

// Block registry: one Zod schema per section type. Drives admin forms and renderer types.
// Start with a few; consolidate the ~90 Sanity sections into ~30 over time.
export const blockSchemas = {
  richText: z.object({ body: z.any() }),
  textImage: z.object({
    heading: z.string(),
    body: z.string().optional(),
    image: mediaRef,
    imageMobile: mediaRef.optional(),
    imageSide: z.enum(["left", "right"]).default("right"),
    cta: cta.optional(),
  }),
  stepsText: z.object({
    steps: z.array(z.object({ heading: z.string(), body: z.string() })).min(1),
    images: z.array(mediaRef).default([]),
  }),
  slider: z.object({ slides: z.array(z.object({ image: mediaRef, caption: z.string().optional() })) }),
  video: z.object({ desktop: mediaRef, mobile: mediaRef.optional(), autoplay: z.boolean().default(true) }),
  spacer: z.object({ size: z.enum(["sm", "md", "lg"]).default("md") }),
} as const;

export type BlockType = keyof typeof blockSchemas;
export type Block<T extends BlockType = BlockType> = { id: string; type: T; data: z.infer<(typeof blockSchemas)[T]> };
