import { Noto_Sans_JP, Zen_Kaku_Gothic_Antique, M_PLUS_2 } from "next/font/google";

// Body font candidates — heading stays M PLUS 1 (from globals.css default)
const noto = Noto_Sans_JP({ subsets: ["latin"], weight: ["500", "700"], display: "swap" });
const zenKaku = Zen_Kaku_Gothic_Antique({ subsets: ["latin"], weight: ["500", "700"], display: "swap" });
const mplus2 = M_PLUS_2({ subsets: ["latin"], weight: ["500", "700"], display: "swap" });

type Sample = {
  name: string;
  description: string;
  className: string;
};

const samples: Sample[] = [
  {
    name: "Noto Sans JP",
    description: "標準・無難な読みやすさ重視。見出しM PLUS 1とのコントラスト明確",
    className: noto.className,
  },
  {
    name: "Zen Kaku Gothic Antique",
    description: "モダンで角が少し丸い上品ゴシック。Adobe Fonts の A1ゴシックと同系統",
    className: zenKaku.className,
  },
  {
    name: "M PLUS 2",
    description: "見出しM PLUS 1と同ファミリ。一体感は最強だが見出し/本文の対比は控えめ",
    className: mplus2.className,
  },
];

export default function BodyFontsPage() {
  return (
    <main className="bg-white text-[var(--color-navy)] min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12 border-b border-[var(--color-navy)]/10 pb-6">
          <p className="text-xs font-black tracking-[0.25em] mb-2 text-[var(--color-navy)]">
            BODY FONT COMPARISON
          </p>
          <h1 className="text-[1.8rem] md:text-[2.2rem] font-black leading-tight">
            本文ゴシック比較
          </h1>
          <p className="mt-3 text-sm font-bold text-[var(--color-text-muted)] leading-relaxed">
            見出しは M PLUS 1 (Black) 固定。本文だけ各候補で描画。
          </p>
        </header>

        <div className="space-y-20">
          {samples.map((s) => (
            <article key={s.name}>
              <div className="mb-6">
                <p className="text-[0.7rem] font-black tracking-[0.2em] mb-1 text-[var(--color-secondary)]">
                  CANDIDATE
                </p>
                <p className="text-lg font-black mb-1">{s.name}</p>
                <p className="text-xs font-bold text-[var(--color-text-muted)]">
                  {s.description}
                </p>
              </div>

              <div className="space-y-5 pl-4 border-l-4 border-[var(--color-secondary)]">
                {/* Heading — M PLUS 1 (inherits from globals) */}
                <h2 className="text-[2rem] md:text-[2.4rem] font-black leading-[1.3]">
                  <span className="relative inline-block whitespace-nowrap">
                    <span className="relative z-10">世界チャンピオン</span>
                    <span
                      aria-hidden
                      className="absolute left-0 right-0 bottom-1 h-3 bg-[var(--color-secondary)] -z-0"
                    />
                  </span>
                  が、あなたの会社に来る。
                </h2>

                {/* Sub-heading — M PLUS 1 */}
                <h3 className="text-[1.3rem] md:text-[1.5rem] font-black leading-tight">
                  経営者が得られる成果 — 90分で社員が一体になる
                </h3>

                {/* Body 1 — candidate font */}
                <p className={`${s.className} text-base md:text-[1.05rem] font-bold leading-[1.9] text-[var(--color-text-muted)]`}>
                  音楽 × フィットネスの90分で、社員が体ごと一体になる、ライブ感あふれる体験型ウェルネス研修。特別な設備・準備物不要。出張型で全国対応。
                </p>

                {/* Body 2 — list */}
                <ul className={`${s.className} text-[0.95rem] font-bold leading-[1.9] text-[var(--color-text-muted)] space-y-2 list-disc pl-5`}>
                  <li>健康経営施策としての即戦力 — 安全性と現場フィードバックを両立</li>
                  <li>部署・年齢を超えた一体感 — 生演奏 × 体操で社員同士が交流</li>
                  <li>継続的な健康改善とストレス発散 — 知識ではなく体感で実感</li>
                </ul>

                {/* Body 3 — quote-like */}
                <p className={`${s.className} text-sm font-bold leading-[1.85] text-[var(--color-text-muted)] border-l-2 border-[var(--color-navy)]/20 pl-4`}>
                  「経営者目線で音頭をとり、社員と一緒に全力で動く」 — 元高校球児・健康マニア社長、株式会社スポルアップ代表
                </p>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-16 pt-6 border-t border-[var(--color-navy)]/10">
          <p className="text-xs font-bold text-[var(--color-text-muted)] leading-relaxed">
            どれかピンとくる本文フォントがあれば教えてください、本番LPに即適用します。
          </p>
        </footer>
      </div>
    </main>
  );
}
