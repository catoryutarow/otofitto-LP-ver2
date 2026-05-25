import Image from "next/image";
import { cta } from "@/lib/data";

// Hand-drawn speech bubble — uses /bubble.png as a stretched background so the
// text drives the size. The png is 512×160 (≈16:5) with a tail at the
// bottom-right; bottom padding is larger than top to keep text out of the tail.
function SpeechBubble({
  children,
  size = "md",
}: {
  children: React.ReactNode;
  size?: "sm" | "md";
}) {
  const padding =
    size === "sm"
      ? "pl-9 pr-3 py-3 pb-4"
      : "pl-14 pr-6 py-5 md:pl-20 md:pr-8 md:py-6 pb-7 md:pb-8";
  return (
    <div
      className={`relative inline-block ${padding}`}
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

const INSTRUCTOR_PORTRAITS = [
  { src: "/yokozeki.JPG", obj: "object-[50%_22%]" },
  { src: "/romu.jpg",     obj: "object-[50%_35%]" },
  { src: "/sarasa.jpg",   obj: "object-[50%_28%]" },
];

export function Hero() {
  // Horizontal lineup with vertical staggers. Ordered back-to-front by `top`
  // % so characters lower on the page (closer to the viewer) overlap those
  // higher up (further back) — matches real-world perspective stacking.
  const peoples = [
    { src: "/peoples/c5-blue-smile.png", top: "6%", left: "30%" },   // back-most
    { src: "/peoples/c1-champion.png", top: "10%", left: "78%" },    // 元 c6 の位置 (右端)
    { src: "/peoples/c6-dance.png", top: "14%", left: "1%" },        // 元 c1 の位置 (左端)
    { src: "/peoples/c4-cap-run.png", top: "20%", left: "46%" },
    { src: "/peoples/c3-green-girl.png", top: "28%", left: "14%" },
    { src: "/peoples/c2-grey-walk.png", top: "32%", left: "62%" },   // front-most
  ];

  return (
    <section
      id="hero"
      className="bg-white text-[var(--color-navy)] pt-24 pb-0 md:pt-32 md:pb-0 [@media(max-width:1000px)]:pt-20 relative overflow-hidden"
    >
      {/* Yellow ribbon — Pattern F. Desktop only; on mobile the diagonal sweep
          competes with vertical text flow, so we drop it and let the yellow
          header carry the brand signal. */}
      <div
        aria-hidden
        className="hidden md:block absolute -left-[8%] right-[-8%] top-[44%] h-[220px] -z-0"
        style={{
          backgroundColor: "var(--color-secondary)",
          transform: "rotate(-8deg)",
        }}
      />

      {/* Instructor portraits (3 only) — PC: absolute on the left, mirrors
          the speech-bubble across the headline. No tilt — symmetry of position
          and shape is enough. */}
      <div className="hidden lg:block absolute left-[6%] xl:left-[8%] top-[46%] z-[15] w-[26%] xl:w-[24%]">
        <div className="grid grid-cols-3 gap-2">
          {INSTRUCTOR_PORTRAITS.map((p) => (
            <div
              key={p.src}
              className="relative aspect-[3/4] bg-white"
              style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
            >
              <Image
                src={p.src}
                alt=""
                fill
                sizes="(max-width: 1200px) 130px, 150px"
                className={`object-cover ${p.obj}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative music notes — kept to the LEFT and RIGHT gutters so they
          never overlap headings, body text, or the speech bubble. The center
          column (≈25%–75% horizontally) is reserved for content. */}
      {[
        { src: "/peoples/note-double.png", top: "4%",  left: "4%",  w: "w-12 md:w-16 lg:w-20", rot: "-12deg" },
        { src: "/peoples/note-single.png", top: "8%",  left: "93%", w: "w-8 md:w-10 lg:w-12",  rot: "18deg"  },
        { src: "/peoples/note-double.png", top: "28%", left: "1%",  w: "w-8 md:w-10 lg:w-12",  rot: "-22deg" },
        { src: "/peoples/note-single.png", top: "22%", left: "94%", w: "w-7 md:w-9 lg:w-11",   rot: "12deg"  },
        { src: "/peoples/note-single.png", top: "58%", left: "3%",  w: "w-6 md:w-8 lg:w-10",   rot: "24deg"  },
        { src: "/peoples/note-double.png", top: "62%", left: "92%", w: "w-8 md:w-10 lg:w-12",  rot: "-15deg" },
      ].map((n, i) => (
        <Image
          key={i}
          src={n.src}
          alt=""
          aria-hidden
          width={120}
          height={120}
          style={{ top: n.top, left: n.left, transform: `rotate(${n.rot})` }}
          className={`hidden md:block absolute ${n.w} origin-center pointer-events-none select-none z-0`}
        />
      ))}

      {/* === TOP: Brand block — OTOFITTO英字 (kicker) → オトフィット (大) === */}
      <div className="w-full max-w-[1100px] mx-auto px-6 md:px-12 text-center mb-6 md:mb-8 relative z-10">
        <div className="relative mx-auto w-[22%] max-w-[180px] aspect-[2000/580] opacity-80 mb-3 [@media(max-width:1000px)]:w-[32%]">
          <Image
            src="/logo-en.png"
            alt="OTOFITTO"
            fill
            sizes="(max-width: 768px) 32vw, 180px"
            className="object-contain"
            priority
          />
        </div>
        <div className="relative mx-auto w-[78%] max-w-[640px] aspect-[2000/440] [@media(max-width:1000px)]:w-[88%]">
          <Image
            src="/logo-jp.png"
            alt="オトフィット"
            fill
            sizes="(max-width: 768px) 88vw, 640px"
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* === MIDDLE: 見出し（ロゴ直下） + 本文 + CTA + キャッチ右上スタンプ === */}
      <div className="w-full max-w-[1100px] mx-auto px-6 md:px-12 text-center relative z-10">
        <h1 className="text-[2.5rem] md:text-[3.6rem] xl:text-[4.1rem] leading-[1.2] mb-6 font-black text-[var(--color-navy)] [@media(max-width:1000px)]:text-[1.95rem] [@media(max-width:1000px)]:leading-[1.3]">
          <span className="relative inline-block whitespace-nowrap">
            <span className="relative z-10">音楽 × フィットネス</span>
            <span
              aria-hidden
              className="absolute left-0 right-0 bottom-1 h-4 md:h-5 bg-[var(--color-secondary)] -z-0 [@media(max-width:1000px)]:h-3"
            />
          </span>
          の
          <br />
          新しい研修
        </h1>

        <p className="mb-9 font-bold text-[var(--color-navy)] leading-[1.85] text-[0.95rem] md:text-[clamp(0.9rem,_1vw,_1.15rem)]">
          社員が一体になる、
          <br />
          ライブ感あふれる体験型ウェルネス研修。
        </p>

        <a
          href={cta.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[var(--color-navy)] text-white font-black text-base md:text-lg px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
        >
          無料体験を申し込む
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
          </svg>
        </a>

        {/* SP only — instructor portraits (left) + smaller bubble (right) */}
        <div className="lg:hidden flex items-center gap-4 md:gap-6 mt-8 max-w-[460px] md:max-w-[640px] mx-auto">
          <div className="grid grid-cols-3 gap-1.5 md:gap-2.5 flex-1 min-w-0">
            {INSTRUCTOR_PORTRAITS.map((p) => (
              <div
                key={p.src}
                className="relative aspect-[3/4] bg-white"
                style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
              >
                <Image
                  src={p.src}
                  alt=""
                  fill
                  sizes="(max-width: 1000px) 80px, 140px"
                  className={`object-cover ${p.obj}`}
                />
              </div>
            ))}
          </div>
          <div className="shrink-0" style={{ transform: "rotate(-4deg)" }}>
            <SpeechBubble size="sm">
              <span
                className="block text-[0.78rem] md:text-[1.05rem] leading-[1.4] text-[var(--color-navy)] font-bold whitespace-nowrap"
                style={{ fontFamily: "var(--font-rocknroll)" }}
              >
                <span className="block -translate-x-3.5">世界チャンピオンが、</span>
                <span className="block">あなたの会社に来る<span className="tracking-[-0.2em]">！？</span></span>
              </span>
            </SpeechBubble>
          </div>
        </div>
      </div>

      {/* === CATCHCOPY あしらい — 太線吹き出し + RocknRoll One ===
          Desktop: リボン (top-44%, h~220px = 下端 ≈61%) の下部・右側に配置。
          リボンから泡が出ているような視覚的関係に。 */}
      <div
        className="hidden lg:block absolute top-[46%] right-[6%] xl:right-[8%] z-20"
        style={{ transform: "rotate(-4deg)" }}
      >
        <SpeechBubble>
          <span
            className="block text-[1.3rem] xl:text-[1.55rem] leading-[1.55] text-[var(--color-navy)] font-bold whitespace-nowrap"
            style={{ fontFamily: "var(--font-rocknroll)" }}
          >
            <span className="block -translate-x-5 md:-translate-x-6">世界チャンピオンが、</span>
            <span className="block">あなたの会社に来る<span className="tracking-[-0.2em]">！？</span></span>
          </span>
        </SpeechBubble>
      </div>

      {/* === BOTTOM: Full-width character lineup ===
          Same relative positions (top%/left%) as before — now spread across
          the full viewport width instead of a right-column box. */}
      <div className="relative w-full mt-12 md:mt-16 aspect-[16/6] [@media(max-width:1000px)]:aspect-[16/11] [@media(max-width:1000px)]:mt-6">
        {/* SP only — scattered notes around characters.
            キャラ位置 (c1-champion top 10-45%/left 78-104% など) を避けて
            左ガター・上下端・キャラ列の隙間に配置 */}
        {[
          { src: "/peoples/note-double.png", top: "0%",  left: "60%", w: "w-6",  rot: "-14deg" },
          { src: "/peoples/note-single.png", top: "3%",  left: "3%",  w: "w-5",  rot: "-12deg" },
          { src: "/peoples/note-single.png", top: "40%", left: "1%",  w: "w-4",  rot: "-20deg" },
          { src: "/peoples/note-double.png", top: "70%", left: "85%", w: "w-6",  rot: "12deg"  },
          { src: "/peoples/note-single.png", top: "78%", left: "2%",  w: "w-5",  rot: "26deg"  },
        ].map((n, i) => (
          <Image
            key={`spnote-${i}`}
            src={n.src}
            alt=""
            aria-hidden
            width={80}
            height={80}
            style={{ top: n.top, left: n.left, transform: `rotate(${n.rot})` }}
            className={`md:hidden absolute ${n.w} origin-center pointer-events-none select-none z-0`}
          />
        ))}

        {peoples.map((c, i) => (
          <div
            key={i}
            className="absolute w-[14%] aspect-[3/4] [@media(max-width:1000px)]:w-[26%] z-10"
            style={{ top: c.top, left: c.left }}
          >
            <Image
              src={c.src}
              alt=""
              fill
              sizes="(max-width: 768px) 18vw, 14vw"
              className="object-contain object-bottom"
              priority={i < 3}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
