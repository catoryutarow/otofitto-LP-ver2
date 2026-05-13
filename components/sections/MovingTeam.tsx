import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";
import { movingMembers } from "@/lib/data";

export function MovingTeam() {
  return (
    <ScrollReveal
      as="section"
      id="moving-team"
      className="bg-[var(--color-bg-light)] section-pad relative"
    >
      <div className="w-full max-w-[1180px] xl:max-w-[1280px] 2xl:max-w-[1400px] mx-auto px-6 md:px-12 relative">
        <div className="flex items-end justify-between gap-6 md:gap-12 mb-14 [@media(max-width:768px)]:mb-10">
          <SectionTitleBadge align="left">
            一緒に動くチーム — あなたの隣に立つ2人
          </SectionTitleBadge>
          <div className="hidden md:flex items-end gap-2 shrink-0">
            <div className="relative w-[90px] h-[110px] lg:w-[110px] lg:h-[130px] xl:w-[130px] xl:h-[150px]">
              <Image src="/peoples/p4-cap.png" alt="" fill className="object-contain object-bottom" />
            </div>
            <div className="relative w-[90px] h-[110px] lg:w-[110px] lg:h-[130px] xl:w-[130px] xl:h-[150px]">
              <Image src="/peoples/p1-yellow.png" alt="" fill className="object-contain object-bottom" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16 [@media(max-width:768px)]:grid-cols-1 [@media(max-width:768px)]:gap-12">
          {movingMembers.map((m) => (
            <div key={m.name} className="relative">
              <p className="text-xs font-black mb-3 tracking-[0.15em] text-[var(--color-primary)]">
                {m.label}
              </p>
              <h3 className="text-[2rem] text-[var(--color-navy)] font-black mb-4 leading-tight [@media(max-width:768px)]:text-[1.6rem]">
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
