// Comparison page for adding 黄色 elements into the Hero section.
// 6 background-decoration approaches, each rendered as a scaled-down Hero
// mockup so the user can compare side-by-side.
//
// Patterns: full-fill / split-top / split-bottom / diagonal-clip / blob /
// ribbon-stripe / scatter-dots

import Image from "next/image";

type Pattern = {
  id: string;
  name: string;
  desc: string;
  Decoration: () => React.ReactNode;
};

const YELLOW = "var(--color-secondary)";

const patterns: Pattern[] = [
  {
    id: "top-half",
    name: "A. 上半分が黄色（top fill）",
    desc: "ロゴ・見出しが乗る上半分を黄色に塗りつぶす。キャラ列は白の地面に立つ。最もインパクトが大",
    Decoration: () => (
      <div className="absolute inset-x-0 top-0 h-[60%] -z-0" style={{ backgroundColor: YELLOW }} />
    ),
  },
  {
    id: "bottom-half",
    name: "B. 下半分が黄色（bottom ground）",
    desc: "キャラ列の足元・地面を黄色に。上はロゴ＋見出しが白背景で読みやすく、下が舞台のような印象",
    Decoration: () => (
      <div className="absolute inset-x-0 bottom-0 h-[55%] -z-0" style={{ backgroundColor: YELLOW }} />
    ),
  },
  {
    id: "diagonal",
    name: "C. 対角線分割（diagonal cut）",
    desc: "clip-path で左下→右上に斜め分割。ダイナミック、動きある印象",
    Decoration: () => (
      <div
        className="absolute inset-0 -z-0"
        style={{
          backgroundColor: YELLOW,
          clipPath: "polygon(0 60%, 100% 20%, 100% 100%, 0 100%)",
        }}
      />
    ),
  },
  {
    id: "spotlight",
    name: "D. 中央スポットライト（big circle）",
    desc: "見出しの裏に巨大な黄色円。ステージ照明のように主役を照らす",
    Decoration: () => (
      <div
        className="absolute left-1/2 top-[28%] -translate-x-1/2 -translate-y-1/2 w-[85%] aspect-square rounded-full -z-0"
        style={{ backgroundColor: YELLOW }}
      />
    ),
  },
  {
    id: "blobs",
    name: "E. 黄色ブロブ散らし（scattered shapes）",
    desc: "不規則な黄色の塊を3〜4個散らす。手描き感・ポップ・装飾的",
    Decoration: () => (
      <>
        <div
          className="absolute top-[12%] left-[5%] w-[140px] h-[120px] rounded-[60%_40%_50%_50%/40%_60%_40%_60%] -z-0"
          style={{ backgroundColor: YELLOW }}
        />
        <div
          className="absolute top-[55%] right-[8%] w-[180px] h-[150px] rounded-[55%_45%_60%_40%/50%_55%_45%_50%] -z-0"
          style={{ backgroundColor: YELLOW }}
        />
        <div
          className="absolute bottom-[8%] left-[35%] w-[110px] h-[95px] rounded-[50%_50%_45%_55%/55%_45%_55%_45%] -z-0"
          style={{ backgroundColor: YELLOW }}
        />
      </>
    ),
  },
  {
    id: "ribbon",
    name: "F. 斜めリボン帯（angled stripe）",
    desc: "画面を左上→右下に斜めに横切る黄色帯。サッシュ的、勢いと方向性",
    Decoration: () => (
      <div
        className="absolute top-[42%] -left-[10%] right-[-10%] h-[110px] -z-0"
        style={{ backgroundColor: YELLOW, transform: "rotate(-8deg)" }}
      />
    ),
  },
  {
    id: "cross-ribbon",
    name: "G. ダブルリボン（X字クロス）",
    desc: "2本の斜めリボンが×字に重なる。リズム感・交差点の象徴・音楽×フィットネスの「×」を視覚化",
    Decoration: () => (
      <>
        <div
          className="absolute top-[30%] -left-[12%] right-[-12%] h-[80px] -z-0"
          style={{ backgroundColor: YELLOW, transform: "rotate(-10deg)" }}
        />
        <div
          className="absolute top-[58%] -left-[12%] right-[-12%] h-[80px] -z-0"
          style={{ backgroundColor: YELLOW, transform: "rotate(10deg)" }}
        />
      </>
    ),
  },
  {
    id: "staff-lines",
    name: "H. 譜線ストライプ（五線譜風）",
    desc: "細い黄色ストライプが等間隔に走る。楽譜・音楽のメタファー。最も「音楽」を語る装飾",
    Decoration: () => (
      <>
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute inset-x-0 h-[14px] -z-0"
            style={{ backgroundColor: YELLOW, top: `${15 + i * 14}%` }}
          />
        ))}
      </>
    ),
  },
  {
    id: "flow-blobs",
    name: "I. 流れるブロブ（左→右）",
    desc: "ブロブが小→大→小と流れるように配置。動きと連続性、音波が伝わるような印象",
    Decoration: () => (
      <>
        <div
          className="absolute top-[18%] left-[2%] w-[90px] h-[80px] rounded-[55%_45%_50%_50%/45%_55%_45%_55%] -z-0"
          style={{ backgroundColor: YELLOW }}
        />
        <div
          className="absolute top-[28%] left-[20%] w-[140px] h-[120px] rounded-[50%_50%_45%_55%/55%_45%_55%_45%] -z-0"
          style={{ backgroundColor: YELLOW }}
        />
        <div
          className="absolute top-[42%] left-[42%] w-[180px] h-[150px] rounded-[60%_40%_55%_45%/45%_60%_40%_60%] -z-0"
          style={{ backgroundColor: YELLOW }}
        />
        <div
          className="absolute top-[30%] right-[18%] w-[140px] h-[120px] rounded-[45%_55%_50%_50%/50%_50%_55%_45%] -z-0"
          style={{ backgroundColor: YELLOW }}
        />
        <div
          className="absolute top-[20%] right-[2%] w-[90px] h-[80px] rounded-[55%_45%_60%_40%/40%_60%_45%_55%] -z-0"
          style={{ backgroundColor: YELLOW }}
        />
      </>
    ),
  },
  {
    id: "spot-blobs",
    name: "J. 中央スポット + 周辺ブロブ",
    desc: "中央に大きな円スポットライト、その周りに小ブロブ。主役を照らしつつ装飾性も両立",
    Decoration: () => (
      <>
        <div
          className="absolute left-1/2 top-[28%] -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square rounded-full -z-0"
          style={{ backgroundColor: YELLOW }}
        />
        <div
          className="absolute top-[10%] left-[6%] w-[80px] h-[70px] rounded-[55%_45%_60%_40%/50%_55%_45%_50%] -z-0"
          style={{ backgroundColor: YELLOW }}
        />
        <div
          className="absolute top-[60%] right-[8%] w-[110px] h-[95px] rounded-[60%_40%_50%_50%/55%_45%_55%_45%] -z-0"
          style={{ backgroundColor: YELLOW }}
        />
        <div
          className="absolute bottom-[10%] left-[15%] w-[90px] h-[80px] rounded-[50%_50%_55%_45%/45%_55%_40%_60%] -z-0"
          style={{ backgroundColor: YELLOW }}
        />
      </>
    ),
  },
  {
    id: "ribbon-blob-mix",
    name: "K. リボン × ブロブ複合",
    desc: "斜めリボン1本 + ブロブ3個。直線と曲線が共存。リズミカルで動きと遊びの両方",
    Decoration: () => (
      <>
        <div
          className="absolute top-[44%] -left-[10%] right-[-10%] h-[90px] -z-0"
          style={{ backgroundColor: YELLOW, transform: "rotate(-7deg)" }}
        />
        <div
          className="absolute top-[12%] left-[8%] w-[110px] h-[95px] rounded-[55%_45%_50%_50%/50%_55%_45%_50%] -z-0"
          style={{ backgroundColor: YELLOW }}
        />
        <div
          className="absolute top-[15%] right-[12%] w-[100px] h-[85px] rounded-[50%_50%_55%_45%/55%_45%_55%_45%] -z-0"
          style={{ backgroundColor: YELLOW }}
        />
        <div
          className="absolute bottom-[18%] right-[20%] w-[130px] h-[110px] rounded-[60%_40%_55%_45%/45%_60%_40%_60%] -z-0"
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

// Mini Header preview — yellow bar with logo + nav placeholders + CTA.
// Lives inside each HeroMock so the user can see the relationship between
// the global nav and the section it sits on top of.
function HeaderMock() {
  return (
    <div className="relative z-30 flex items-center justify-between px-3 md:px-4 py-2 bg-[var(--color-secondary)] border-b border-[var(--color-navy)]/15">
      <div className="relative w-12 md:w-14 aspect-[2000/440]">
        <Image src="/logo-jp.png" alt="" fill className="object-contain" />
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex gap-2.5 text-[0.55rem] md:text-[0.6rem] font-black text-[var(--color-navy)]">
          <span>オトフィットとは</span>
          <span>指導者</span>
          <span>音楽サポート</span>
          <span>実例・効果</span>
          <span>詳細</span>
        </div>
        <div className="bg-[var(--color-navy)] text-white text-[0.55rem] md:text-[0.6rem] font-black px-2 py-1 rounded-md">
          無料体験
        </div>
      </div>
    </div>
  );
}

function HeroMock({ p }: { p: Pattern }) {
  const peoples = [
    { src: "/peoples/c5-blue-smile.png", top: "6%", left: "30%" },
    { src: "/peoples/c6-dance.png", top: "10%", left: "78%" },
    { src: "/peoples/c1-champion.png", top: "14%", left: "-2%" },
    { src: "/peoples/c4-cap-run.png", top: "20%", left: "46%" },
    { src: "/peoples/c3-green-girl.png", top: "28%", left: "14%" },
    { src: "/peoples/c2-grey-walk.png", top: "32%", left: "62%" },
  ];

  return (
    <section className="relative bg-white overflow-hidden rounded-2xl border border-[var(--color-navy)]/10">
      <HeaderMock />
      <div className="relative">
        <p.Decoration />

        {/* Decorative music notes — denser scatter, mix of sizes/rotations */}
        {[
          { src: "/peoples/note-double.png", top: "3%",  left: "5%",  w: "w-9 md:w-11", rot: "-12deg" },
          { src: "/peoples/note-single.png", top: "8%",  left: "92%", w: "w-5 md:w-6",  rot: "18deg"  },
          { src: "/peoples/note-double.png", top: "38%", left: "1%",  w: "w-6 md:w-7",  rot: "-22deg" },
          { src: "/peoples/note-single.png", top: "48%", left: "94%", w: "w-7 md:w-8",  rot: "12deg"  },
          { src: "/peoples/note-double.png", top: "55%", left: "40%", w: "w-5 md:w-6",  rot: "-8deg"  },
          { src: "/peoples/note-single.png", top: "70%", left: "8%",  w: "w-5 md:w-6",  rot: "24deg"  },
          { src: "/peoples/note-double.png", top: "75%", left: "70%", w: "w-6 md:w-7",  rot: "-15deg" },
          { src: "/peoples/note-single.png", top: "22%", left: "55%", w: "w-4 md:w-5",  rot: "30deg"  },
        ].map((n, i) => (
          <Image
            key={i}
            src={n.src}
            alt=""
            aria-hidden
            width={120}
            height={120}
            style={{ top: n.top, left: n.left, transform: `rotate(${n.rot})` }}
            className={`absolute ${n.w} pointer-events-none select-none z-10 origin-center`}
          />
        ))}

      {/* Brand block */}
      <div className="relative z-10 pt-6 px-6 text-center">
        <div className="relative mx-auto w-[14%] max-w-[110px] aspect-[2000/580] opacity-80 mb-2">
          <Image src="/logo-en.png" alt="OTOFITTO" fill className="object-contain" />
        </div>
        <div className="relative mx-auto w-[44%] max-w-[330px] aspect-[2000/440]">
          <Image src="/logo-jp.png" alt="オトフィット" fill className="object-contain" />
        </div>
      </div>

      {/* Headline + body + cta */}
      <div className="relative z-10 px-6 text-center pt-5 pb-2">
        <h2 className="font-heading text-[1.4rem] md:text-[1.7rem] leading-[1.25] mb-3 font-black text-[var(--color-navy)]">
          <span className="relative inline-block whitespace-nowrap">
            <span className="relative z-10">音楽 × フィットネス</span>
            <span
              aria-hidden
              className="absolute left-0 right-0 bottom-0.5 h-2 -z-0"
              style={{ backgroundColor: p.id === "spotlight" ? "transparent" : YELLOW }}
            />
          </span>
          の
          <br />
          新しい研修
        </h2>

        <p className="text-[0.78rem] font-bold text-[var(--color-text-muted)] leading-[1.7] mb-4">
          社員が体ごと一体になる、ライブ感あふれる体験型ウェルネス研修。
        </p>

        <a className="inline-flex items-center bg-[var(--color-navy)] text-white font-black text-xs px-4 py-2 rounded-lg">
          無料体験を申し込む →
        </a>
      </div>

      {/* Catchcopy bubble (right-top stamp) */}
      <div
        className="absolute top-[34%] right-[3%] z-20"
        style={{ transform: "rotate(-4deg)" }}
      >
        <SpeechBubble>
          <span
            className="block text-[0.72rem] leading-[1.4] text-[var(--color-navy)] font-bold whitespace-nowrap"
            style={{ fontFamily: "var(--font-rocknroll)" }}
          >
            <span className="block -translate-x-1">世界チャンピオンが、</span>
            <span className="block">
              あなたの会社に来る<span className="tracking-[-0.2em]">！？</span>
            </span>
          </span>
        </SpeechBubble>
      </div>

      {/* Character lineup */}
      <div className="relative z-10 w-full aspect-[16/5] mt-4">
        {peoples.map((c, i) => (
          <div
            key={i}
            className="absolute w-[12%] aspect-[3/4]"
            style={{ top: c.top, left: c.left }}
          >
            <Image src={c.src} alt="" fill className="object-contain object-bottom" />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default function HeroYellowPage() {
  return (
    <main className="bg-[var(--color-bg-light)] text-[var(--color-navy)] min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 border-b border-[var(--color-navy)]/10 pb-6">
          <p className="text-xs font-black tracking-[0.25em] mb-2">
            HERO YELLOW DECORATION PATTERNS
          </p>
          <h1 className="text-[1.8rem] md:text-[2.2rem] font-black leading-tight">
            ヒーローに黄色を効かせるデザインパターン
          </h1>
          <p className="mt-3 text-sm font-bold text-[var(--color-text-muted)] leading-relaxed">
            6パターン。気に入った #id を教えてください — 本Heroに即適用します。
            <br />
            <strong>D（スポットライト）の場合のみ</strong> 見出し下の黄色マーカーは円と被るので無効化してあります。
          </p>
        </header>

        <div className="space-y-12">
          {patterns.map((p) => (
            <article key={p.id}>
              <div className="flex items-baseline gap-4 mb-3">
                <p className="text-[0.7rem] font-black tracking-[0.2em] text-[var(--color-text-muted)]">
                  #{p.id}
                </p>
                <h2 className="text-base md:text-lg font-black">{p.name}</h2>
              </div>
              <p className="text-xs md:text-sm font-bold text-[var(--color-text-muted)] mb-4 max-w-3xl">
                {p.desc}
              </p>
              <HeroMock p={p} />
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
