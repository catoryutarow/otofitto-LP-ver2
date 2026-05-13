import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";
import { benefits } from "@/lib/data";

export function Outcomes() {
  if (benefits.length === 0) return null;
  return (
    <ScrollReveal as="section" id="outcomes" className="bg-white section-pad relative">
      <div className="w-full max-w-[1180px] xl:max-w-[1280px] 2xl:max-w-[1400px] mx-auto px-6 md:px-12 relative">
        <div className="flex items-end justify-between gap-6 md:gap-12 mb-14 [@media(max-width:768px)]:mb-10">
          <SectionTitleBadge align="left">経営者が得られる成果</SectionTitleBadge>
          <div className="hidden md:flex items-end gap-2 shrink-0">
            <div className="relative w-[90px] h-[110px] lg:w-[110px] lg:h-[130px] xl:w-[130px] xl:h-[150px]">
              <Image src="/peoples/p1-yellow.png" alt="" fill className="object-contain object-bottom" />
            </div>
            <div className="relative w-[90px] h-[110px] lg:w-[110px] lg:h-[130px] xl:w-[130px] xl:h-[150px]">
              <Image src="/peoples/p4-cap.png" alt="" fill className="object-contain object-bottom" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-16 gap-y-14 [@media(max-width:900px)]:grid-cols-1 [@media(max-width:900px)]:gap-y-10">
          {benefits.map((b, index) => (
            <div key={b.title} className="relative">
              <span className="block text-[var(--color-secondary)] font-black text-[3.5rem] leading-none mb-3 tracking-wider [@media(max-width:768px)]:text-[2.6rem]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[1.4rem] mb-3 text-[var(--color-navy)] font-black leading-tight [@media(max-width:768px)]:text-[1.2rem]">
                {b.title}
              </h3>
              <p className="font-bold text-[var(--color-text-muted)] leading-[1.9] text-[0.98rem]">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
