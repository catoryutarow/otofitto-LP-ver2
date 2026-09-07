import type { MetadataRoute } from "next";

// Required for `output: 'export'` — pre-render robots.txt at build time.
export const dynamic = "force-static";

// Allow all search engine crawlers to index the site.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  };
}
