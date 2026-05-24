// Mobile-only yellow ribbon variants. Each card simulates a 390px-wide phone
// viewport so you can compare how the desktop ribbon scales (or doesn't) on
// small screens. Wide diagonal ribbons can feel too aggressive on phones;
// these alternatives keep the yellow signature without overwhelming.

import Image from "next/image";

type Variant = {
  id: string;
  name: string;
  desc: string;
  Ribbon: () => React.ReactNode;
};

const YELLOW = "var(--color-secondary)";

const variants: Variant[] = [
  {
    id: "none",
    name: "a. リボンなし（hidden）",
    desc: "モバイルではリボン非表示。ヘッダーの黄色だけで黄色シグナルを維持。最もミニマル",
    Ribbon: () => null,
  },
  {
    id: "thin-diagonal",
    name: "b. 細い斜めリボン（h-[60px], -8deg）",
    desc: "デスクトップのリボンをそのまま細くした版。形は維持、占有面積を縮小",
    Ribbon: () => (
      <div
        className="absolute -left-[8%] right-[-8%] top-[48%] h-[60px] -z-0"
        style={{ backgroundColor: YELLOW, transform: "rotate(-8deg)" }}
      />
    ),
  },
  {
    id: "thin-horizontal",
    name: "c. 水平の細い帯（h-[44px]）",
    desc: "斜めをやめて水平に。CTAの背景帯のような扱い、整理感が出る",
    Ribbon: () => (
      <div
        className="absolute inset-x-0 top-[52%] h-[44px] -z-0"
        style={{ backgroundColor: YELLOW }}
      />
    ),
  },
  {
    id: "vertical-side",
    name: "d. 縦帯（右サイド）",
    desc: "画面右側に縦の黄色帯。本文を圧迫せず、ブランドカラーがサイドに常駐",
    Ribbon: () => (
      <div
        className="absolute right-0 top-[30%] bottom-[10%] w-[24px] -z-0"
        style={{ backgroundColor: YELLOW }}
      />
    ),
  },
  {
    id: "staff-2",
    name: "e. 譜線2本（thin lines）",
    desc: "細い黄色ラインを2本走らせる。譜線メタファーで音楽性を残しつつ最小占有",
    Ribbon: () => (
      <>
        <div
          className="absolute inset-x-0 top-[40%] h-[10px] -z-0"
          style={{ backgroundColor: YELLOW }}
        />
        <div
          className="absolute inset-x-0 top-[60%] h-[10px] -z-0"
          style={{ backgroundColor: YELLOW }}
        />
      </>
    ),
  },
  {
    id: "corner-blob",
    name: "f. 角の小ブロブ（corner accent）",
    desc: "右上と左下に小さな黄色のブロブだけ。装飾としての最小単位",
    Ribbon: () => (
      <>
        <div
          className="absolute -top-[20px] -right-[30px] w-[110px] h-[110px] rounded-[55%_45%_50%_50%/50%_55%_45%_50%] -z-0"
          style={{ backgroundColor: YELLOW }}
        />
        <div
          className="absolute -bottom-[20px] -left-[30px] w-[90px] h-[90px] rounded-[55%_45%_60%_40%/50%_55%_45%_50%] -z-0"
          style={{ backgroundColor: YELLOW }}
        />
      </>
    ),
  },
];

function SpeechBubble({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative inline-block pl-10 pr-4 py-3 pb-5"
      style={{
        backgroundImage: "url(/bubble.png)",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
}

function HeaderMock() {
  return (
    <div className="relative z-30 flex items-center justify-between px-3 py-2 bg-[var(--color-secondary)] border-b border-[var(--color-navy)]/15">
      <div className="relative w-12 aspect-[2000/440]">
        <Image src="/logo-jp.png" alt="" fill className="object-contain" />
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-[var(--color-navy)] text-white text-[0.55rem] font-black px-2 py-1 rounded-md">
          無料体験
        </div>
        <div className="flex flex-col gap-[3px]">
          <span className="block w-4 h-[2px] bg-[var(--color-navy)]" />
          <span className="block w-4 h-[2px] bg-[var(--color-navy)]" />
          <span className="block w-4 h-[2px] bg-[var(--color-navy)]" />
        </div>
      </div>
    </div>
  );
}

function MobileHeroMock({ v }: { v: Variant }) {
  const peoples = [
    { src: "/peoples/c5-blue-smile.png", top: "6%", left: "30%" },
    { src: "/peoples/c6-dance.png", top: "10%", left: "78%" },
    { src: "/peoples/c1-champion.png", top: "14%", left: "-2%" },
    { src: "/peoples/c4-cap-run.png", top: "20%", left: "46%" },
    { src: "/peoples/c3-green-girl.png", top: "28%", left: "14%" },
    { src: "/peoples/c2-grey-walk.png", top: "32%", left: "62%" },
  ];

  return (
    <div className="w-[390px] mx-auto bg-white rounded-3xl overflow-hidden border border-[var(--color-navy)]/10 shadow-sm">
      <section className="relative overflow-hidden">
        <HeaderMock />
        <div className="relative">
          <v.Ribbon />

          {/* Brand block */}
          <div className="relative z-10 pt-6 px-6 text-center">
            <div className="relative mx-auto w-[28%] aspect-[2000/580] opacity-80 mb-2">
              <Image src="/logo-en.png" alt="" fill className="object-contain" />
            </div>
            <div className="relative mx-auto w-[78%] aspect-[2000/440]">
              <Image src="/logo-jp.png" alt="" fill className="object-contain" />
            </div>
          </div>

          {/* Catchcopy bubble — mobile: inline, right-aligned, tilted */}
          <div className="px-5 mt-5 flex justify-end">
            <div
              className="inline-block"
              style={{ transform: "rotate(-4deg)" }}
            >
              <SpeechBubble>
                <span
                  className="block text-[0.85rem] leading-[1.45] text-[var(--color-navy)] font-bold whitespace-nowrap"
                  style={{ fontFamily: "var(--font-rocknroll)" }}
                >
                  <span className="block -translate-x-1">世界チャンピオンが、</span>
                  <span className="block">
                    あなたの会社に来る<span className="tracking-[-0.2em]">！？</span>
                  </span>
                </span>
              </SpeechBubble>
            </div>
          </div>

          {/* Headline */}
          <div className="relative z-10 px-5 text-center pt-4">
            <h2 className="font-heading text-[1.8rem] leading-[1.25] mb-4 font-black text-[var(--color-navy)]">
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10">音楽 × フィットネス</span>
              </span>
              の
              <br />
              新しい研修
            </h2>

            <p className="text-[0.8rem] font-bold text-[var(--color-text-muted)] leading-[1.75] mb-5">
              社員が体ごと一体になる、ライブ感あふれる体験型ウェルネス研修。
            </p>

            <a className="inline-flex items-center bg-[var(--color-navy)] text-white font-black text-sm px-5 py-3 rounded-xl">
              無料体験を申し込む →
            </a>
          </div>

          {/* Character lineup */}
          <div className="relative z-10 w-full aspect-[16/9] mt-5">
            {peoples.map((c, i) => (
              <div
                key={i}
                className="absolute w-[18%] aspect-[3/4]"
                style={{ top: c.top, left: c.left }}
              >
                <Image src={c.src} alt="" fill className="object-contain object-bottom" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function HeroMobileYellowPage() {
  return (
    <main className="bg-[var(--color-bg-light)] text-[var(--color-navy)] min-h-screen py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <header className="mb-10 border-b border-[var(--color-navy)]/10 pb-6">
          <p className="text-xs font-black tracking-[0.25em] mb-2">
            MOBILE RIBBON VARIANTS
          </p>
          <h1 className="text-[1.6rem] md:text-[2rem] font-black leading-tight">
            モバイル用リボン処理パターン
          </h1>
          <p className="mt-3 text-sm font-bold text-[var(--color-text-muted)] leading-relaxed">
            デスクトップの斜め大リボンは、モバイル幅では情報を圧迫する。各カードは 390px 想定のモバイルプレビュー。
            気に入った #id を教えてください — 本Heroのモバイル版に適用します。
          </p>
        </header>

        <div className="space-y-10">
          {variants.map((v) => (
            <article key={v.id}>
              <div className="flex items-baseline gap-4 mb-2">
                <p className="text-[0.7rem] font-black tracking-[0.2em] text-[var(--color-text-muted)]">
                  #{v.id}
                </p>
                <h2 className="text-base font-black">{v.name}</h2>
              </div>
              <p className="text-xs font-bold text-[var(--color-text-muted)] mb-4 max-w-md">
                {v.desc}
              </p>
              <MobileHeroMock v={v} />
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
