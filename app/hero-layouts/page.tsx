import Image from "next/image";
import type { ReactNode } from "react";

const CHARS = [
  "/peoples/c1-champion.png",
  "/peoples/c3-green-girl.png",
  "/peoples/c5-blue-smile.png",
  "/peoples/c4-cap-run.png",
  "/peoples/c2-grey-walk.png",
  "/peoples/c6-dance.png",
];

// Each character is rendered at roughly the same size — what changes across
// patterns is only WHERE each one sits inside the stage box.
function Char({
  src,
  top,
  left,
  width = 18,
  z = 10,
}: {
  src: string;
  top: string;
  left: string;
  width?: number;
  z?: number;
}) {
  return (
    <div
      className="absolute aspect-[3/4]"
      style={{
        top,
        left,
        width: `${width}%`,
        zIndex: z,
      }}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="200px"
        className="object-contain object-bottom"
      />
    </div>
  );
}

// ── Pattern A: Staggered 2 rows (refined version of current) ──────────────
function PatternA() {
  return (
    <div className="relative w-full aspect-[7/5]">
      <Char src={CHARS[0]} top="0%" left="2%" />
      <Char src={CHARS[1]} top="6%" left="22%" />
      <Char src={CHARS[2]} top="0%" left="42%" />
      <Char src={CHARS[3]} top="4%" left="62%" />
      <Char src={CHARS[4]} top="42%" left="12%" />
      <Char src={CHARS[5]} top="38%" left="50%" />
    </div>
  );
}

// ── Pattern B: Triangular pyramid (1 + 2 + 3 from top) ────────────────────
function PatternB() {
  return (
    <div className="relative w-full aspect-[7/5]">
      <Char src={CHARS[0]} top="0%" left="41%" />
      <Char src={CHARS[1]} top="22%" left="22%" />
      <Char src={CHARS[2]} top="22%" left="60%" />
      <Char src={CHARS[3]} top="48%" left="6%" />
      <Char src={CHARS[4]} top="48%" left="41%" />
      <Char src={CHARS[5]} top="48%" left="76%" />
    </div>
  );
}

// ── Pattern C: Sine wave arc — characters undulate horizontally ───────────
function PatternC() {
  return (
    <div className="relative w-full aspect-[7/5]">
      <Char src={CHARS[0]} top="32%" left="-2%" />
      <Char src={CHARS[1]} top="8%" left="14%" />
      <Char src={CHARS[2]} top="38%" left="30%" />
      <Char src={CHARS[3]} top="6%" left="48%" />
      <Char src={CHARS[4]} top="36%" left="64%" />
      <Char src={CHARS[5]} top="2%" left="80%" />
    </div>
  );
}

// ── Pattern D: Organic cluster — circle huddle around center ──────────────
function PatternD() {
  return (
    <div className="relative w-full aspect-[7/5]">
      <Char src={CHARS[0]} top="36%" left="40%" z={20} />
      <Char src={CHARS[1]} top="4%" left="22%" />
      <Char src={CHARS[2]} top="0%" left="56%" />
      <Char src={CHARS[3]} top="40%" left="14%" />
      <Char src={CHARS[4]} top="42%" left="66%" />
      <Char src={CHARS[5]} top="14%" left="78%" />
    </div>
  );
}

// ── Pattern E: Single horizontal line with vertical staggers ──────────────
function PatternE() {
  return (
    <div className="relative w-full aspect-[7/5]">
      <Char src={CHARS[0]} top="14%" left="-2%" />
      <Char src={CHARS[1]} top="28%" left="14%" />
      <Char src={CHARS[2]} top="6%" left="30%" />
      <Char src={CHARS[3]} top="20%" left="46%" />
      <Char src={CHARS[4]} top="32%" left="62%" />
      <Char src={CHARS[5]} top="10%" left="78%" />
    </div>
  );
}

type Variant = {
  id: string;
  label: string;
  description: string;
  render: () => ReactNode;
};

const variants: Variant[] = [
  {
    id: "A",
    label: "Pattern A — Staggered 2 rows",
    description: "上下2段にジグザグ配置。現状版に近い形を整理。安定+ある程度の動き",
    render: PatternA,
  },
  {
    id: "B",
    label: "Pattern B — Triangular pyramid",
    description: "1+2+3 のピラミッド構図。トップが視線を引きつけ、底辺が安定基盤を作る",
    render: PatternB,
  },
  {
    id: "C",
    label: "Pattern C — Sine wave arc",
    description: "サイン波のように6人が上下を交互。音楽的なリズムが視覚化される",
    render: PatternC,
  },
  {
    id: "D",
    label: "Pattern D — Organic cluster",
    description: "中央周辺に有機的に集まる「ハドル」構図。仲間感・チーム感が最も強い",
    render: PatternD,
  },
  {
    id: "E",
    label: "Pattern E — Horizontal lineup with vertical staggers",
    description: "ほぼ1列だが各キャラのy位置を揺らす。スマートで開放感あり",
    render: PatternE,
  },
];

export default function HeroLayoutsPage() {
  return (
    <main className="bg-white text-[var(--color-navy)] min-h-screen py-12 px-6">
      <div className="max-w-[1500px] mx-auto">
        <header className="mb-10 border-b border-[var(--color-navy)]/10 pb-6">
          <p className="text-xs font-black tracking-[0.25em] mb-2 text-[var(--color-navy)]">
            HERO LAYOUT COMPARISON
          </p>
          <h1 className="text-[1.8rem] md:text-[2.2rem] font-black leading-tight">
            ヒーロー配置パターン比較
          </h1>
          <p className="mt-3 text-sm font-bold text-[var(--color-text-muted)] leading-relaxed">
            6キャラを均等サイズに揃えた状態で、配置パターンだけ5種類試作。同じ見出しテキストと並んだ印象を比較してください。
          </p>
        </header>

        <div className="space-y-20">
          {variants.map((v) => (
            <article key={v.id}>
              <div className="mb-5">
                <p className="text-[0.7rem] font-black tracking-[0.2em] mb-1 text-[var(--color-secondary)]">
                  {v.id}
                </p>
                <p className="text-lg font-black">{v.label}</p>
                <p className="text-xs font-bold text-[var(--color-text-muted)] mt-1">
                  {v.description}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-10 items-center border-2 border-[var(--color-navy)]/10 rounded-2xl p-6 md:p-10">
                {/* Same text on left for context */}
                <div>
                  <p className="text-xs font-black tracking-[0.3em] text-[var(--color-navy)] mb-5">
                    OTOFITTO — Music × Fitness Wellness
                  </p>
                  <h2 className="text-[2rem] lg:text-[2.4rem] xl:text-[2.8rem] leading-[1.25] mb-6 font-black text-[var(--color-navy)]">
                    <span className="relative inline-block whitespace-nowrap">
                      <span className="relative z-10">世界チャンピオン</span>
                      <span
                        aria-hidden
                        className="absolute left-0 right-0 bottom-1 h-3.5 md:h-4 bg-[var(--color-secondary)] -z-0"
                      />
                    </span>
                    が、
                    <br />
                    あなたの会社に来る。
                  </h2>
                  <p className="text-base font-bold text-[var(--color-text-muted)] leading-[1.9] mb-7">
                    音楽 × フィットネスの90分で、社員が体ごと一体になる、ライブ感あふれる体験型ウェルネス研修。
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center bg-[var(--color-navy)] text-white font-black text-base px-6 py-3 rounded-xl pointer-events-none"
                  >
                    無料体験を申し込む
                  </a>
                </div>

                {/* Character pattern preview */}
                {v.render()}
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-16 pt-6 border-t border-[var(--color-navy)]/10">
          <p className="text-xs font-bold text-[var(--color-text-muted)] leading-relaxed">
            気に入ったパターンの ID (A〜E) を教えてください、本番Heroに適用します。
          </p>
        </footer>
      </div>
    </main>
  );
}
