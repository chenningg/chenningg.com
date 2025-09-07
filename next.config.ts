import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Configure what page extensions that Next compiles, we add mdx here
  pageExtensions: ["mdx", "ts", "tsx"],
  experimental: {
    // Compile mdx files with new Rust compiler
    mdxRs: true,
  },
};

// Add MDX compilation support, add any markdown plugins here if desired
const withMDX = createMDX({});

export default withMDX(nextConfig);
