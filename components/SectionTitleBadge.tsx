type Props = {
  children: React.ReactNode;
  variant?: "default" | "onNavy";
  align?: "left" | "center";
  size?: "md" | "sm";
};

// Margin is intentionally NOT applied here — let the parent control spacing,
// so this component can be composed inside flex title rows alongside decorations.
export function SectionTitleBadge({
  children,
  variant = "default",
  align = "center",
  size = "md",
}: Props) {
  const onNavy = variant === "onNavy";
  const sizeClass =
    size === "sm"
      ? "text-[1.35rem] md:text-[1.65rem] [@media(max-width:1000px)]:text-[1.1rem]"
      : "text-[1.6rem] md:text-[2rem] [@media(max-width:1000px)]:text-[1.3rem]";
  const barHeight = size === "sm" ? "h-7 md:h-8" : "h-8 md:h-10";
  return (
    <div className={`inline-block ${align === "center" ? "text-center" : "text-left"}`}>
      <span
        className={`inline-flex items-center gap-3 font-heading font-black leading-tight tracking-wide md:whitespace-nowrap ${sizeClass} ${
          onNavy ? "text-white" : "text-[var(--color-navy)]"
        }`}
      >
        <span
          aria-hidden
          className={`inline-block w-2 rounded-sm ${barHeight} ${
            onNavy ? "bg-[var(--color-secondary)]" : "bg-[var(--color-primary)]"
          }`}
        />
        {children}
      </span>
    </div>
  );
}
