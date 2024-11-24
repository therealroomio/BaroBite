import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		excerpt: z.string(),
		date: z.string(),
		image: z.string().optional(),
		tags: z.array(z.string()).default([])
	})
});

export const collections = {
	'blog': blogCollection
};
