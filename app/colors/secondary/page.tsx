type Variant = {
  hex: string;
  name: string;
  note: string;
};

const variants: Variant[] = [
  { hex: "#f5b01b", name: "現状 — 山吹色 / Amber 600寄り", note: "現在採用中。やや橙寄りで温度感は強いが、純黄色感は薄い" },
  { hex: "#fbbf24", name: "Amber 400 (Tailwind)", note: "明るめのamber。柔らかいゴールデン。現状より黄色寄り" },
  { hex: "#facc15", name: "Yellow 400 (Tailwind)", note: "ビビッドな純黄色。最もポップで元気" },
  { hex: "#eab308", name: "Yellow 500 (Tailwind)", note: "落ち着いた黄色。やや深く、安定感" },
  { hex: "#fcd34d", name: "Amber 300", note: "ソフトな淡ゴールデン。優しい印象" },
  { hex: "#fde047", name: "Yellow 300", note: "明るいレモン。軽快・爽やか" },
  { hex: "#ffd700", name: "Classic Gold", note: "クラシックなゴールド。メダル感・高級感" },
  { hex: "#d4a017", name: "Mustard", note: "マスタード。落ち着いた品のあるゴールド" },
];

function Preview({ color }: { color: string }) {
  return (
    <div className="space-y-5">
      {/* Sample heading with highlight (Hero style) */}
      <h2 className="text-[1.8rem] md:text-[2.2rem] font-black leading-tight text-[var(--color-navy)] font-heading">
        <span className="relative inline-block whitespace-nowrap">
          <span className="relative z-10">世界チャンピオン</span>
          <span
            aria-hidden
            className="absolute left-0 right-0 bottom-1 h-3 md:h-3.5 -z-0"
            style={{ backgroundColor: color }}
          />
        </span>
        が、あなたの会社に来る。
      </h2>

      {/* Section title bar marker (SectionTitleBadge style) */}
      <div className="flex items-center gap-3 font-heading">
        <span
          aria-hidden
          className="inline-block w-2 h-8 rounded-sm"
          style={{ backgroundColor: color }}
        />
        <span className="text-[1.3rem] font-black text-[var(--color-navy)]">
          世界タイトルホルダー 3名が直接指導
        </span>
      </div>

      {/* Sample elements row: tag, badge, CTA accent line */}
      <div className="flex flex-wrap items-center gap-3">
        <span
          className="inline-flex items-center text-[0.85rem] font-black px-4 py-1.5 rounded-full text-[var(--color-navy)]"
          style={{ backgroundColor: color }}
        >
          全国対応可
        </span>
        <span
          className="inline-flex items-center text-[0.85rem] font-black px-4 py-1.5 rounded-full text-white"
          style={{ backgroundColor: "var(--color-navy)" }}
        >
          無料体験を申し込む
        </span>
        <span className="inline-flex items-center text-xs font-black tracking-wider" style={{ color }}>
          ★ accent text
        </span>
      </div>

      {/* Stat strip — accent × heading text */}
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[var(--color-text-muted)] font-heading">
        <span className="font-black text-xl text-[var(--color-navy)]">90分</span>
        <span style={{ color }} className="font-black">×</span>
        <span className="font-black text-xl text-[var(--color-navy)]">世界1位3名</span>
        <span style={{ color }} className="font-black">×</span>
        <span className="font-black text-xl text-[var(--color-navy)]">全国対応</span>
      </div>
    </div>
  );
}

export default function SecondaryColorsPage() {
  return (
    <main className="bg-white text-[var(--color-navy)] min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 border-b border-[var(--color-navy)]/10 pb-6">
          <p className="text-xs font-black tracking-[0.25em] mb-2">
            SECONDARY (YELLOW) COLOR COMPARISON
          </p>
          <h1 className="text-[1.8rem] md:text-[2.2rem] font-black leading-tight">
            アクセントイエロー比較
          </h1>
          <p className="mt-3 text-sm font-bold text-[var(--color-text-muted)] leading-relaxed">
            現在の #f5b01b (山吹色) を含む8パターン。見出し下線/タイトルバー/タグ/数値ストリップなど、実際にLPで使われる文脈で描画。
          </p>
        </header>

        <div className="space-y-14">
          {variants.map((v) => (
            <article key={v.hex}>
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-lg shrink-0 border border-[var(--color-navy)]/10"
                  style={{ backgroundColor: v.hex }}
                  aria-hidden
                />
                <div>
                  <p className="text-base font-black">{v.name}</p>
                  <p className="text-xs font-bold tracking-wider text-[var(--color-text-muted)]">
                    {v.hex.toUpperCase()}
                  </p>
                  <p className="text-xs font-bold text-[var(--color-text-muted)] mt-1 max-w-md">
                    {v.note}
                  </p>
                </div>
              </div>

              <div className="border-l-4 pl-6 py-2" style={{ borderColor: v.hex }}>
                <Preview color={v.hex} />
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-16 pt-6 border-t border-[var(--color-navy)]/10">
          <p className="text-xs font-bold text-[var(--color-text-muted)] leading-relaxed">
            気に入った hex があれば教えてください。`--color-secondary` を差し替えて本番LPに即適用します。
          </p>
        </footer>
      </div>
    </main>
  );
}
