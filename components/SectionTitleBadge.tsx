type Props = {
  children: React.ReactNode;
  variant?: "default" | "onNavy";
  align?: "left" | "center";
};

// Margin is intentionally NOT applied here — let the parent control spacing,
// so this component can be composed inside flex title rows alongside decorations.
export function SectionTitleBadge({
  children,
  variant = "default",
  align = "center",
}: Props) {
  const onNavy = variant === "onNavy";
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <span
        className={`inline-flex items-center gap-3 font-heading text-[1.6rem] md:text-[2rem] font-black leading-tight tracking-wide [@media(max-width:1000px)]:text-[1.3rem] ${
          onNavy ? "text-white" : "text-[var(--color-navy)]"
        }`}
      >
        <span
          aria-hidden
          className={`inline-block w-2 h-8 md:h-10 rounded-sm ${
            onNavy ? "bg-[var(--color-secondary)]" : "bg-[var(--color-primary)]"
          }`}
        />
        {children}
      </span>
    </div>
  );
}
