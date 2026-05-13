import Image from "next/image";

export function Hero() {
  // All 6 characters arranged in a 2×3 grid. Per-figure offset (px) creates
  // a wave-like skyline; rows are allowed to overlap slightly since the PNGs
  // are transparent — that produces a layered crowd rather than a strict grid.
  const peoples = [
    // Row 1 — top
    { src: "/peoples/p1-yellow.png", offset: 0 },
    { src: "/peoples/p5-blue.png", offset: 18 },
    { src: "/peoples/p3-green.png", offset: 0 },
    // Row 2 — bottom (negative offsets pull them up under row 1 for depth)
    { src: "/peoples/p6-yellow-hp.png", offset: -14 },
    { src: "/peoples/p4-cap.png", offset: 10 },
    { src: "/peoples/p2-grey-walk.png", offset: -14 },
  ];

  return (
    <section
      id="hero"
      className="bg-white pt-20 pb-24 md:pt-24 md:pb-28 [@media(max-width:768px)]:pt-14 [@media(max-width:768px)]:pb-16 relative overflow-hidden"
    >
      <div className="w-full max-w-[1400px] xl:max-w-[1500px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-12 lg:gap-12 items-center">
        {/* LEFT: text — narrower column, headlines stays compact */}
        <div className="relative">
          <h1 className="text-[2.2rem] lg:text-[2.2rem] xl:text-[2.6rem] leading-[1.3] mb-7 font-black text-[var(--color-navy)] [@media(max-width:768px)]:text-[1.75rem]">
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">世界チャンピオン</span>
              <span
                aria-hidden
                className="absolute left-0 right-0 bottom-1 h-3.5 md:h-4 bg-[var(--color-secondary)] -z-0 [@media(max-width:768px)]:h-2.5"
              />
            </span>
            が、
            <br />
            あなたの会社に来る。
          </h1>

          <p className="text-base md:text-lg mb-10 font-bold text-[var(--color-text-muted)] leading-[1.85] [@media(max-width:768px)]:text-[0.95rem]">
            音楽 × フィットネスの90分で、社員が体ごと一体になる、
            <br className="hidden md:block" />
            ライブ感あふれる体験型ウェルネス研修。
          </p>

          <a
            href="#cta"
            className="inline-flex items-center justify-center bg-[var(--color-secondary)] text-[var(--color-navy)] font-black text-base md:text-lg px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
          >
            無料体験を申し込む
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* RIGHT: 6 characters in 2×3 grid with vertical offsets for rhythm */}
        <div className="relative grid grid-cols-3 gap-x-3 md:gap-x-5 gap-y-2 md:gap-y-3 [@media(max-width:768px)]:gap-x-2">
          {peoples.map((c, i) => (
            <div
              key={i}
              className="relative w-full aspect-[3/4]"
              style={{ transform: `translateY(${c.offset}px)` }}
            >
              <Image
                src={c.src}
                alt=""
                fill
                sizes="(max-width: 900px) 33vw, 240px"
                className="object-contain object-bottom"
                priority={i < 3}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
