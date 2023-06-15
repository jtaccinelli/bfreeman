import { z, defineCollection } from "astro:content";

export const samplesSchema = z.object({
  title: z.string(),
  where: z.string(),
  type: z.string(),
  area: z.string(),
  purpose: z.string(),
});

const samplesCollection = defineCollection({
  type: "content",
  schema: samplesSchema,
});

export const collections = {
  samples: samplesCollection,
};
