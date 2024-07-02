import { defineCollection, z } from 'astro:content'

// Post collection schema
const blogCollection = defineCollection({})

// Pages collection schema
const pagesCollection = defineCollection({
	schema: z.object({
		title: z.string()
		// meta_title: z.string().optional(),
		// description: z.string().optional(),
		// image: z.string().optional(),
		// draft: z.boolean().optional()
	})
})

// Export collections
export const collections = {
	blog: blogCollection
}