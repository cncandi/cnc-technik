import { defineCollection, z } from 'astro:content';

const imageItem = z.object({
  image: z.string(),
  alt: z.string().optional(),
  caption: z.string().optional(),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    eyebrow: z.string().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    gallery: z.array(imageItem).optional(),
    ctaLabel: z.string().optional(),
    ctaHref: z.string().optional(),
    secondaryCtaLabel: z.string().optional(),
    secondaryCtaHref: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { pages };
