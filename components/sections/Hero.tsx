import { heroBadges, industries } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="hero"
      className="bg-[var(--color-navy)] text-white py-[100px] md:py-[100px] [@media(max-width:768px)]:py-20"
    >
      <div className="container-narrow text-center">
        <h1 className="text-5xl tracking-[0.1em] text-[var(--color-gold)] mb-1.5 font-bold">
          オトフィット
        </h1>
        <p className="text-sm tracking-[0.2em] opacity-60 mb-8">
          OTOFITTO — Music × Fitness Wellness Event
        </p>

        <div className="flex justify-center flex-wrap gap-2.5 mb-10">
          {heroBadges.map((b) => (
            <span
              key={b}
              className="inline-block bg-[var(--color-purple)]/80 text-white px-5 py-1.5 rounded-full text-[0.85rem] font-bold"
            >
              {b}
            </span>
          ))}
        </div>

        <h2 className="text-[3.5rem] leading-[1.3] mb-10 font-bold [@media(max-width:900px)]:text-[2.2rem] [@media(max-width:768px)]:text-[2rem]">
          <span className="text-[var(--color-gold)]">世界チャンピオンが、</span>
          <br />
          あなたの会社に来る。
        </h2>

        <div className="mb-10">
          <p className="text-[1.4rem] mb-2.5">音楽 × フィットネス</p>
          <p className="text-[1.1rem] opacity-80 [@media(max-width:768px)]:text-[0.95rem]">
            体を動かした社員が、会社を動かす。
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2.5">
          {industries.map((tag) => (
            <span
              key={tag.label}
              className={
                tag.highlight
                  ? "border border-[var(--color-gold)] text-[var(--color-gold)] font-bold px-4 py-1.5 rounded-full text-[0.85rem]"
                  : "bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-[0.85rem]"
              }
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
