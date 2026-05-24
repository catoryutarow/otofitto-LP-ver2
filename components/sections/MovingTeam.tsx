import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";
import { movingMembers } from "@/lib/data";

// Same parallelogram shape as Instructors/MusicSupport for portrait coherence
const CLIP = "polygon(7% 0, 100% 0, 93% 100%, 0 100%)";

// Two distinct accent colors so 山本/井上 read as a complementary duo
const accents = ["var(--color-primary)", "var(--color-accent-red)"];

export function MovingTeam() {
  return (
    <ScrollReveal
      as="section"
      id="moving-team"
      className="bg-[var(--color-bg-light)] section-pad relative"
    >
      <div className="w-full max-w-[1180px] xl:max-w-[1280px] 2xl:max-w-[1400px] mx-auto px-6 md:px-12 relative">
        <div className="flex items-end justify-between gap-6 md:gap-12 mb-14 [@media(max-width:1000px)]:mb-10">
          <SectionTitleBadge align="left">
            一緒に動くチーム — あなたの隣に立つ2人
          </SectionTitleBadge>
          <div className="hidden md:flex items-end gap-2 shrink-0">
            <div className="relative w-[90px] h-[110px] lg:w-[110px] lg:h-[130px] xl:w-[130px] xl:h-[150px]">
              <Image src="/peoples/c4-cap-run.png" alt="" fill className="object-contain object-bottom" />
            </div>
            <div className="relative w-[90px] h-[110px] lg:w-[110px] lg:h-[130px] xl:w-[130px] xl:h-[150px]">
              <Image src="/peoples/c5-blue-smile.png" alt="" fill className="object-contain object-bottom" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16 [@media(max-width:1000px)]:grid-cols-1 [@media(max-width:1000px)]:gap-12">
          {movingMembers.map((m, i) => (
            <div key={m.name} className="relative">
              {/* Placeholder portrait — Instructors-style parallelogram with
                  colored backdrop. Gray fill until real photo lands. */}
              <div className="relative isolate w-full max-w-[280px] mb-7">
                <div
                  aria-hidden
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundColor: accents[i],
                    clipPath: CLIP,
                    transform: "translate(14px, 14px)",
                  }}
                />
                <div
                  aria-hidden
                  className="relative z-10 w-full aspect-[4/5] bg-[#e5e7eb]"
                  style={{ clipPath: CLIP }}
                />
              </div>
              <p className="text-xs font-black mb-3 tracking-[0.15em] text-[var(--color-primary)]">
                {m.label}
              </p>
              <h3 className="text-[2rem] text-[var(--color-navy)] font-black mb-4 leading-tight [@media(max-width:1000px)]:text-[1.6rem]">
                {m.name}
              </h3>
              <p className="text-[var(--color-primary)] text-lg font-black mb-5 leading-snug">
                {m.catchphrase}
              </p>
              <p className="text-[0.95rem] font-bold text-[var(--color-text-muted)] mb-7 leading-[1.9]">
                {m.details.map((d, i) => (
                  <span key={d}>
                    {d}
                    {i < m.details.length - 1 && <br />}
                  </span>
                ))}
              </p>
              <blockquote className="relative pl-6 text-[0.95rem] font-bold text-[var(--color-navy)] leading-[1.85] border-l-4 border-[var(--color-secondary)]">
                {m.message}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
