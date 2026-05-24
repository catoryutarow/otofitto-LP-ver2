type Variant = "sag" | "bulge" | "waveLR" | "waveRL";

type Props = {
  from: string;
  to: string;
  variant?: Variant;
  height?: number;
};

// 4 deterministic curve shapes. viewBox 0 0 100 100 + preserveAspectRatio
// "none" stretches them to any width without breaking the path topology.
const PATHS: Record<Variant, string> = {
  // Single gentle dip — `from` bulges down into `to`
  sag: "M 0 0 L 100 0 L 100 42 C 75 95, 25 95, 0 42 Z",
  // Single bulge — `to` rises up into `from`
  bulge: "M 0 0 L 100 0 L 100 58 C 75 8, 25 8, 0 58 Z",
  // S-curve: left edge low, right edge high — like a wave moving left-to-right
  waveLR: "M 0 0 L 100 0 L 100 32 C 60 12, 40 78, 0 68 Z",
  // S-curve: left edge high, right edge low — mirror wave
  waveRL: "M 0 0 L 100 0 L 100 68 C 60 78, 40 12, 0 32 Z",
};

export function SectionCurve({
  from,
  to,
  variant = "sag",
  height = 72,
}: Props) {
  return (
    <div
      aria-hidden
      className="relative w-full [@media(max-width:1000px)]:!h-[44px]"
      style={{ backgroundColor: to, height }}
    >
      <svg
        className="absolute inset-0 w-full h-full block"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d={PATHS[variant]} fill={from} />
      </svg>
    </div>
  );
}
