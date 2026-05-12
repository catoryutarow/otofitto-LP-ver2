type Props = {
  children: React.ReactNode;
  variant?: "default" | "onNavy";
};

export function SectionTitleBadge({ children, variant = "default" }: Props) {
  const styles =
    variant === "onNavy"
      ? "bg-white/10 text-[var(--color-gold)]"
      : "bg-[var(--color-purple)]/10 text-[var(--color-purple)]";
  return (
    <div
      className={`mx-auto mb-10 table rounded-full px-6 py-1.5 text-sm font-bold ${styles}`}
    >
      {children}
    </div>
  );
}
