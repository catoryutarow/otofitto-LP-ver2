// Comparison page for "世界チャンピオンが、あなたの会社に来る。" catchcopy
// あしらい化バリエーション — メインは「音楽 × フィットネスの90分で〜」に格上げ。
//
// Each card mimics the Hero block with:
//   1. Brand logo (オトフィット)
//   2. MAIN headline (M PLUS 1 black — service definition)
//   3. CATCHCOPY (variable font — playful, decorative, あしらい)
//   4. CTA button
//
// Goal: see which decorative font + placement makes the catchcopy feel like a
// stamp / sticker / handwritten note rather than a competing headline.

import Image from "next/image";

type Variant = {
  id: string;
  name: string;
  desc: string;
  fontVar: string;
  // Inline style overrides for the catchcopy (rotation, color treatment etc)
  catchStyle?: React.CSSProperties;
  catchClass?: string;
};

// 傾きを全パターン -3deg に統一してフォント差を比較しやすくする
const TILT = "rotate(-3deg)";

const variants: Variant[] = [
  {
    id: "klee",
    name: "Klee One",
    desc: "手書き楷書 — フレンドリーで温かみ。先生が黒板に書いた感",
    fontVar: "var(--font-klee)",
    catchStyle: { transform: TILT, fontWeight: 600 },
  },
  {
    id: "yomogi",
    name: "Yomogi",
    desc: "手書きエッセイ風 — 等身大、ノートに走り書きのような親しみ",
    fontVar: "var(--font-yomogi)",
    catchStyle: { transform: TILT },
  },
  {
    id: "yusei",
    name: "Yusei Magic",
    desc: "太字POPデザイン — 元気・コミカル、ハネる楽しさ",
    fontVar: "var(--font-yusei)",
    catchStyle: { transform: TILT },
  },
  {
    id: "reggae",
    name: "Reggae One",
    desc: "極太インパクト — マンガのフキダシ感、勢いMAX",
    fontVar: "var(--font-reggae)",
    catchStyle: { transform: TILT },
  },
  {
    id: "rampart",
    name: "Rampart One",
    desc: "立体POP — 看板・チラシ・夏祭り感のレトロポップ",
    fontVar: "var(--font-rampart)",
    catchStyle: { transform: TILT },
  },
  {
    id: "shippori",
    name: "Shippori Mincho B1",
    desc: "力強い明朝 — 伝統と品。武道書・歌舞伎の見得を切る感",
    fontVar: "var(--font-shippori)",
    catchStyle: { transform: TILT, fontWeight: 800 },
  },
  {
    id: "hachimaru",
    name: "Hachi Maru Pop",
    desc: "ポップ丸文字 — かわいい、女子高生ノート感",
    fontVar: "var(--font-hachimaru)",
    catchStyle: { transform: TILT },
  },
  {
    id: "kaisei-decol",
    name: "Kaisei Decol",
    desc: "装飾ボールド明朝 — レトロ広告・銭湯ペンキ絵の手書き看板",
    fontVar: "var(--font-kaisei-decol)",
    catchStyle: { transform: TILT, fontWeight: 700 },
  },
  {
    id: "rocknroll",
    name: "RocknRoll One",
    desc: "レトロ太字 — 70sロックポスター、勢いと懐かしさ",
    fontVar: "var(--font-rocknroll)",
    catchStyle: { transform: TILT },
  },
  {
    id: "dot",
    name: "DotGothic16",
    desc: "ドット風 — ファミコン・8bit、ニッチだが記憶に残る",
    fontVar: "var(--font-dot)",
    catchStyle: { transform: TILT },
  },
];

function HeroMini({ v }: { v: Variant }) {
  return (
    <div className="bg-white border border-[var(--color-navy)]/10 rounded-2xl p-8 md:p-10 overflow-hidden">
      {/* mini logo */}
      <p className="text-[0.65rem] font-black tracking-[0.45em] text-[var(--color-navy)]/60 mb-2 text-center">
        MUSIC × FITNESS WELLNESS
      </p>
      <div className="relative mx-auto w-[55%] max-w-[360px] aspect-[2000/440] mb-8">
        <Image src="/logo-jp.png" alt="オトフィット" fill className="object-contain" />
      </div>

      {/* CATCHCOPY — 傾きでスタンプ風あしらい。装飾フォント + tilt */}
      <div className="relative mb-3 text-center">
        <span
          className="inline-block text-[1.15rem] md:text-[1.45rem] leading-[1.4] text-[var(--color-navy)] px-1"
          style={{ fontFamily: v.fontVar, ...v.catchStyle }}
        >
          「世界チャンピオン」が、あなたの会社に来る！？
        </span>
      </div>

      {/* MAIN headline — 短く、メイン格上げ */}
      <h2 className="font-heading text-center text-[2.2rem] md:text-[3rem] xl:text-[3.4rem] leading-[1.25] font-black text-[var(--color-navy)] mb-5">
        音楽 × フィットネスの
        <span className="relative inline-block whitespace-nowrap">
          <span className="relative z-10">90分</span>
          <span aria-hidden className="absolute left-0 right-0 bottom-1 h-3.5 md:h-4 bg-[var(--color-secondary)] -z-0" />
        </span>
      </h2>

      {/* BODY — メイン以下のサポート説明 */}
      <p className="text-center text-[0.95rem] md:text-base leading-[1.85] font-bold text-[var(--color-text-muted)] mb-7">
        社員が体ごと一体になる、
        <br className="hidden md:block" />
        ライブ感あふれる体験型ウェルネス研修。
      </p>

      <div className="text-center">
        <a
          href="#cta"
          className="inline-flex items-center justify-center bg-[var(--color-navy)] text-white font-black text-base px-7 py-3.5 rounded-xl"
        >
          無料体験を申し込む
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function HeroCatchcopyPage() {
  return (
    <main className="bg-[var(--color-bg-light)] text-[var(--color-navy)] min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 border-b border-[var(--color-navy)]/10 pb-6">
          <p className="text-xs font-black tracking-[0.25em] mb-2">
            CATCHCOPY FONT COMPARISON
          </p>
          <h1 className="text-[1.8rem] md:text-[2.2rem] font-black leading-tight">
            「世界チャンピオンが、あなたの会社に来る。」あしらいフォント比較
          </h1>
          <p className="mt-3 text-sm font-bold text-[var(--color-text-muted)] leading-relaxed">
            見出しを「音楽 × フィットネスの<strong>90分</strong>」に短縮、社員〜以下は本文へ。
            キャッチ「『世界チャンピオン』が、あなたの会社に来る！？」を装飾フォント + 傾き <code>-3deg</code> で あしらい化。
            気に入った #id を教えてください — 本Heroに即適用します。
          </p>
        </header>

        <div className="space-y-12">
          {variants.map((v) => (
            <article key={v.id}>
              <div className="flex items-baseline gap-4 mb-4">
                <p className="text-[0.7rem] font-black tracking-[0.2em] text-[var(--color-text-muted)]">
                  #{v.id}
                </p>
                <h2 className="text-lg font-black">{v.name}</h2>
                <p className="text-xs font-bold text-[var(--color-text-muted)]">{v.desc}</p>
              </div>
              <HeroMini v={v} />
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
