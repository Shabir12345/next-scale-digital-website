import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string().optional(),
    description: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    /** The search this page is written to answer */
    targets: z.string(),
    readingMinutes: z.number(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { insights };
