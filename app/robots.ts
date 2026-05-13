import type { MetadataRoute } from "next";

// Block all search engine crawlers from indexing the entire site.
// Pairs with the `robots: { index: false, follow: false }` metadata in
// app/layout.tsx — the meta tag covers HTML pages, this covers /robots.txt.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: "/",
      },
    ],
  };
}
