import type { NextConfig } from "next";

// spollup.jp/otofitto/ にサブパス配信するため static export + basePath を設定。
// Next.js Image Optimization は export で使えないので unoptimized: true で
// raw 画像を out/ にコピー。next/image の fill / object-cover はそのまま動く。
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/otofitto",
  assetPrefix: "/otofitto/",
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
