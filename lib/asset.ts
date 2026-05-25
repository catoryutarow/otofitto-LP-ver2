// CSS background-image URLs and other raw asset references that don't go
// through next/image need basePath prefixed manually when hosted under a
// sub-path (e.g. spollup.jp/otofitto/). Use asset() everywhere a public/
// file is referenced from style={{ backgroundImage: ... }} or similar.
// basePath is hard-coded to match next.config.ts. Override via
// NEXT_PUBLIC_BASE_PATH at build time if hosting elsewhere.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/otofitto";

export function asset(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${BASE_PATH}${path}`;
}
