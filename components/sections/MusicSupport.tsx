import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";
import { musicMembers } from "@/lib/data";

const tagColor: Record<"green" | "blue" | "pink", string> = {
  green: "text-[var(--color-accent-green)]",
  blue: "text-[var(--color-primary)]",
  pink: "text-[var(--color-accent-red)]",
};

export function MusicSupport() {
  return (
    <ScrollReveal as="section" id="music-support" className="bg-white section-pad relative">
      <div className="w-full max-w-[1180px] xl:max-w-[1280px] 2xl:max-w-[1400px] mx-auto px-6 md:px-12 relative">
        <div className="flex items-end justify-between gap-6 md:gap-12 mb-14 [@media(max-width:768px)]:mb-10">
          <SectionTitleBadge align="left">
            音楽サポートチーム — 株式会社モテコロ
          </SectionTitleBadge>
          <div className="hidden md:flex items-end gap-2 shrink-0">
            <div className="relative w-[90px] h-[110px] lg:w-[110px] lg:h-[130px] xl:w-[130px] xl:h-[150px]">
              <Image src="/peoples/p3-green.png" alt="" fill className="object-contain object-bottom" />
            </div>
            <div className="relative w-[90px] h-[110px] lg:w-[110px] lg:h-[130px] xl:w-[130px] xl:h-[150px]">
              <Image src="/peoples/p5-blue.png" alt="" fill className="object-contain object-bottom" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-12 [@media(max-width:900px)]:gap-10 [@media(max-width:768px)]:grid-cols-1 [@media(max-width:768px)]:gap-12">
          {musicMembers.map((m) => (
            <div key={m.name} className="relative">
              <div className="relative w-[140px] h-[140px] mb-6 rounded-full overflow-hidden bg-[var(--color-bg-light)] [@media(max-width:768px)]:w-[120px] [@media(max-width:768px)]:h-[120px]">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="140px"
                  className="object-cover object-top"
                />
              </div>

              <p className={`text-xs font-black mb-2 tracking-[0.15em] ${tagColor[m.tagColor]}`}>
                {m.roleTag}
              </p>
              <h3 className="text-2xl font-black mb-3 text-[var(--color-navy)] [@media(max-width:768px)]:text-xl">
                {m.name}
              </h3>
              <p className="text-[0.92rem] font-bold text-[var(--color-text-muted)] leading-[1.9]">
                {m.details.map((d, i) => (
                  <span key={d}>
                    {d}
                    {i < m.details.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
