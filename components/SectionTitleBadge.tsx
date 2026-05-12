type Props = {
  children: React.ReactNode;
  variant?: "default" | "onNavy";
};

export function SectionTitleBadge({ children, variant = "default" }: Props) {
  const styles =
    variant === "onNavy"
      ? "bg-[var(--color-navy)] text-white border-2 border-white shadow-[4px_4px_0_0_rgba(255,255,255,1)]"
      : "bg-white text-[var(--color-navy)] border-2 border-[var(--color-navy)] shadow-[4px_4px_0_0_rgba(31,41,55,1)]";
  return (
    <div
      className={`mx-auto mb-10 table rounded-xl px-6 py-2 text-[0.95rem] font-black tracking-wider ${styles}`}
    >
      {children}
    </div>
  );
}
