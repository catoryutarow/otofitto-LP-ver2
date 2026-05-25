import {
  Noto_Sans_JP,
  Zen_Kaku_Gothic_Antique,
  Zen_Maru_Gothic,
  M_PLUS_1,
  Shippori_Mincho_B1,
  Hina_Mincho,
  Yusei_Magic,
  Kaisei_Decol,
} from "next/font/google";

// Each font loaded at the heaviest weight available for heading impact.
// Some Google JP fonts only ship a single weight (Hina Mincho/Yusei Magic).
const noto = Noto_Sans_JP({ subsets: ["latin"], weight: ["900"], display: "swap" });
const zenKaku = Zen_Kaku_Gothic_Antique({ subsets: ["latin"], weight: ["900"], display: "swap" });
const zenMaru = Zen_Maru_Gothic({ subsets: ["latin"], weight: ["900"], display: "swap" });
const mplus1 = M_PLUS_1({ subsets: ["latin"], weight: ["900"], display: "swap" });
const shippori = Shippori_Mincho_B1({ subsets: ["latin"], weight: ["800"], display: "swap" });
const hina = Hina_Mincho({ subsets: ["latin"], weight: ["400"], display: "swap" });
const yusei = Yusei_Magic({ subsets: ["latin"], weight: ["400"], display: "swap" });
const kaisei = Kaisei_Decol({ subsets: ["latin"], weight: ["700"], display: "swap" });

type Sample = {
  name: string;
  adobeEquivalent: string;
  mood: string;
  className: string;
};

const samples: Sample[] = [
  {
    name: "Noto Sans JP (現状)",
    adobeEquivalent: "—",
    mood: "ニュートラル・標準的・安心感",
    className: noto.className,
  },
  {
    name: "Zen Kaku Gothic Antique",
    adobeEquivalent: "≒ A1ゴシック",
    mood: "上品でモダン、角がほんのり丸い高級感",
    className: zenKaku.className,
  },
  {
    name: "Zen Maru Gothic",
    adobeEquivalent: "≒ 筑紫A丸ゴシック / ロダン丸",
    mood: "丸くて親しみやすい、キャラ絵との親和性◎",
    className: zenMaru.className,
  },
  {
    name: "M PLUS 1 (Black)",
    adobeEquivalent: "≒ 凸版文久見出しゴシック",
    mood: "見出しに最適化された力強さ・スポーティ",
    className: mplus1.className,
  },
  {
    name: "Shippori Mincho B1",
    adobeEquivalent: "≒ DNP 秀英明朝 / リュウミン見出し",
    mood: "明朝の重み・格調・歴史感",
    className: shippori.className,
  },
  {
    name: "Hina Mincho",
    adobeEquivalent: "≒ 解ミン 宙",
    mood: "文学的でクリーンな明朝、個性的",
    className: hina.className,
  },
  {
    name: "Yusei Magic",
    adobeEquivalent: "≒ TA-こころ / りいてがき",
    mood: "和洋折衷の力強い手描き、独自性",
    className: yusei.className,
  },
  {
    name: "Kaisei Decol (Bold)",
    adobeEquivalent: "≒ DNP 秀英角ゴシック 金",
    mood: "正統派の重い角ゴシック、伝統感",
    className: kaisei.className,
  },
];

export default function FontsPage() {
  return (
    <main className="bg-white text-[var(--color-navy)] min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 border-b border-[var(--color-navy)]/10 pb-8">
          <p className="text-xs font-black tracking-[0.25em] mb-3 text-[var(--color-navy)]">
            FONT COMPARISON
          </p>
          <h1 className="text-[2rem] md:text-[2.6rem] font-black leading-tight">
            見出しフォント比較
          </h1>
          <p className="mt-4 text-sm font-bold text-[var(--color-text-muted)] leading-relaxed">
            同じ文字列を各フォントで描画。Adobe Fonts の近似フォント名も併記。<br />
            気に入ったものがあれば教えてください、本番に適用します。
          </p>
        </header>

        <div className="space-y-16">
          {samples.map((s) => (
            <article key={s.name}>
              <div className="mb-5">
                <p className="text-[0.7rem] font-black tracking-[0.2em] mb-1 text-[var(--color-secondary)]">
                  {s.adobeEquivalent}
                </p>
                <p className="text-base font-black text-[var(--color-navy)] mb-1">
                  {s.name}
                </p>
                <p className="text-xs font-bold text-[var(--color-text-muted)]">
                  {s.mood}
                </p>
              </div>

              <div className={`${s.className} space-y-4`}>
                <h2 className="text-[2.2rem] md:text-[2.8rem] font-black leading-[1.3]">
                  <span className="relative inline-block whitespace-nowrap">
                    <span className="relative z-10">世界チャンピオン</span>
                    <span
                      aria-hidden
                      className="absolute left-0 right-0 bottom-1 h-3 md:h-3.5 bg-[var(--color-secondary)] -z-0"
                    />
                  </span>
                  が、あなたの会社に来る。
                </h2>
                <h3 className="text-[1.4rem] md:text-[1.7rem] font-black leading-tight">
                  経営者が得られる成果 — 90分で社員が一体になる
                </h3>
                <p className="text-base font-bold leading-[1.85] text-[var(--color-text-muted)] max-w-2xl">
                  音楽 × フィットネスの90分で、社員が体ごと一体になる、ライブ感あふれる体験型ウェルネス研修。
                </p>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-20 pt-8 border-t border-[var(--color-navy)]/10">
          <p className="text-xs font-bold text-[var(--color-text-muted)] leading-relaxed">
            Adobe Fonts の正規版に切り替える場合は、kit ID もしくは embed コードを共有してください。最終的に選ばれた1〜2フォントを本番LPの見出しに適用します。
          </p>
        </footer>
      </div>
    </main>
  );
}
