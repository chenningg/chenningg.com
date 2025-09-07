import {
  createDefaultImport,
  defineCollection,
  defineConfig,
} from "@content-collections/core";
import { MDXContent } from "mdx/types";
import { z } from "zod";

const posts = defineCollection({
  name: "posts",
  directory: "./src/content/posts",
  include: "**/*.mdx",
  parser: "frontmatter-only",
  schema: z.object({
    author: z.coerce.string().default("Chen Ning"),
    draft: z.coerce.boolean().default(true),
    publishedDate: z.iso.date(),
    slug: z.coerce.string(),
    summary: z.coerce.string(),
    title: z.coerce.string(),
    updatedDate: z.optional(z.iso.date()),
  }),
  transform: ({ _meta, ...post }) => {
    const mdxContent = createDefaultImport<MDXContent>(
      `@/content/posts/${_meta.filePath}`
    );
    return {
      ...post,
      mdxContent,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
