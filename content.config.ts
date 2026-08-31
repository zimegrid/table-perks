import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    help: defineCollection({
      type: 'page',
      source: 'help/**/*.md',
      schema: z.object({
        title: z.string(),
        badge: z.string(),
        description: z.string(),
        systems: z.array(z.enum(['stamp', 'points'])),
        stampOrder: z.number().optional(),
        pointsOrder: z.number().optional(),
      }),
    }),
  },
})
