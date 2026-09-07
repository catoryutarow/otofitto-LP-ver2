import { asset } from "@/lib/asset";

// 静的エクスポートでは next/image の最適化が無効。<picture> + <source type="image/webp">
// で対応ブラウザに WebP を、それ以外には JPG/PNG fallback を配信する。
// scripts/optimize-images.mjs で各 src と同じ basename の .webp を public/ に生成済み。
//
// fill モード: 親要素に position:relative を付けておくこと。<picture> 自体が
// absolute inset-0 を引き受け、子 <img> は width/height 100% で fill。
type Props = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  /** fill モード: 親の枠を absolute で埋める */
  fill?: boolean;
  /** fill が false のとき必須 */
  width?: number;
  height?: number;
  sizes?: string;
  /** 上記スクリーン外の遅延読込を抑止 (Hero の上部画像のみ true 推奨) */
  priority?: boolean;
  /** decoding="async" の上書き (デフォルト async) */
  decoding?: "async" | "sync" | "auto";
};

export function ResponsiveImage({
  src,
  alt,
  className,
  style,
  fill,
  width,
  height,
  sizes,
  priority,
  decoding = "async",
}: Props) {
  const dot = src.lastIndexOf(".");
  const base = dot >= 0 ? src.slice(0, dot) : src;
  const webpSrc = asset(`${base}.webp`);
  const fallbackSrc = asset(src);

  const pictureClass = fill ? "absolute inset-0 block" : "inline-block";
  const imgClass = fill ? `w-full h-full ${className ?? ""}` : className;

  return (
    <picture className={pictureClass}>
      <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={fallbackSrc}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding={decoding}
        className={imgClass}
        style={style}
      />
    </picture>
  );
}
