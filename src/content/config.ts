import { z, defineCollection } from "astro:content";

const samplesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    where: z.string(),
    type: z.string(),
    area: z.string(),
    purpose: z.string(),
  }),
});

export const collections = {
  samples: samplesCollection,
};
