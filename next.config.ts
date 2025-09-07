import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { withContentCollections } from "@content-collections/next";

const nextConfig: NextConfig = {
  // Configure what page extensions that Next compiles, we add mdx here
  pageExtensions: ["mdx", "ts", "tsx"],
};

// Add MDX compilation support, add any markdown plugins here if desired
const withMDX = createMDX({
  options: {
    // We must specify plugin names as strings for Turbopack: https://nextjs.org/docs/app/guides/mdx#using-plugins-with-turbopack
    // Strip out frontmatter as it is processed by content-collections
    remarkPlugins: ["remark-frontmatter", "remark-mdx-frontmatter"],
    rehypePlugins: [],
  },
});

export default withContentCollections(withMDX(nextConfig));
