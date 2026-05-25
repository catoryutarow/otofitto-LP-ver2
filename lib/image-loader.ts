// Custom loader for next/image so that absolute /public asset paths get
// the basePath ("/otofitto") prefix when running under sub-path hosting.
// Without this, <Image src="/peoples/note.png"> resolves to
// spollup.jp/peoples/note.png (404) instead of spollup.jp/otofitto/peoples/note.png.

type LoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/otofitto";

export default function loader({ src }: LoaderProps): string {
  // Already absolute external URL — leave alone
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("//")) {
    return src;
  }
  // Already prefixed (defensive) — don't double up
  if (BASE_PATH && src.startsWith(`${BASE_PATH}/`)) {
    return src;
  }
  // public/ asset path (leading "/") — prefix with basePath
  if (src.startsWith("/")) {
    return `${BASE_PATH}${src}`;
  }
  return src;
}
