import { heroBadges, industries } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="hero"
      className="bg-[var(--color-navy)] text-white py-[120px] md:py-[140px] [@media(max-width:768px)]:py-20 relative overflow-hidden"
    >
      {/* Neo-brutalist typography backdrop: stacked OTOFITTO rows,
          alternating between filled white and outlined (text-stroke). */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute inset-0 overflow-hidden flex flex-col justify-around"
      >
        {Array.from({ length: 9 }).map((_, i) => {
          const filled = i % 2 === 0;
          const offset = ((i * 37) % 18) - 9; // pseudo-random -9..+8 vw
          return (
            <div
              key={i}
              className="whitespace-nowrap font-black leading-[0.85]"
              style={{
                fontSize: "clamp(4rem, 11vw, 13rem)",
                letterSpacing: "-0.06em",
                transform: `translateX(${offset}vw)`,
                color: filled ? "rgba(255,255,255,0.10)" : "transparent",
                WebkitTextStroke: filled
                  ? "0"
                  : "2px rgba(255,255,255,0.18)",
              }}
            >
              OTOFITTO&nbsp;OTOFITTO&nbsp;OTOFITTO&nbsp;OTOFITTO
            </div>
          );
        })}
      </div>

      <div className="container-narrow text-center relative z-10">
        <p className="text-sm tracking-[0.2em] text-[var(--color-secondary)] font-bold mb-4">
          OTOFITTO — Music × Fitness Wellness Event
        </p>
        <h1 className="text-6xl md:text-7xl tracking-[0.05em] text-white mb-2 font-black">
          オトフィット
        </h1>

        <div className="flex justify-center flex-wrap gap-2.5 mb-10 mt-6">
          {heroBadges.map((b) => (
            <span
              key={b}
              className="inline-block bg-[var(--color-primary)] text-white border-2 border-white/20 px-5 py-1.5 rounded-full text-[0.85rem] font-bold shadow-sm"
            >
              {b}
            </span>
          ))}
        </div>

        <h2 className="text-[3rem] md:text-[4rem] leading-[1.2] mb-10 font-black [@media(max-width:900px)]:text-[2.5rem] [@media(max-width:768px)]:text-[2rem]">
          <span className="text-[var(--color-secondary)]">世界チャンピオンが、</span>
          <br />
          あなたの会社に来る。
        </h2>

        <div className="mb-12 bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto border-2 border-white/20 shadow-sm relative">
          <div className="absolute -top-4 -left-4 w-10 h-10 bg-[var(--color-secondary)] rounded-lg transform -rotate-6"></div>
          <p className="text-[1.6rem] mb-2 font-bold text-white">音楽 × フィットネス</p>
          <p className="text-[1.1rem] text-white/80 font-bold [@media(max-width:768px)]:text-[0.95rem]">
            体を動かした社員が、会社を動かす。
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2.5">
          {industries.map((tag) => (
            <span
              key={tag.label}
              className={
                tag.highlight
                  ? "bg-[var(--color-secondary)] text-[var(--color-navy)] font-bold px-5 py-2 rounded-xl text-[0.9rem] shadow-sm transform hover:-translate-y-1 transition-transform"
                  : "bg-white/10 border-2 border-white/20 text-white font-bold px-5 py-2 rounded-xl text-[0.9rem]"
              }
            >
              {tag.label}
            </span>
          ))}
        </div>

        <div className="mt-14">
          <a href="#cta" className="inline-flex items-center justify-center bg-[var(--color-primary)] text-white font-bold text-lg px-10 py-5 rounded-full border-2 border-white/20 shadow-[0_8px_0_rgba(255,255,255,0.2)] hover:translate-y-1 hover:shadow-[0_4px_0_rgba(255,255,255,0.2)] transition-all">
            無料体験に申し込む
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
