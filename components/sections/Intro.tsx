import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";

export function Intro() {
  return (
    <ScrollReveal
      as="section"
      id="intro"
      className="bg-[var(--color-bg-light)] section-pad relative"
    >
      <div className="w-full max-w-[1080px] xl:max-w-[1200px] 2xl:max-w-[1320px] mx-auto px-6 md:px-12 relative">
        {/* Title row: heading on left, decorative chars on right of same row.
            They can never overlap the heading because they're flex siblings. */}
        <div className="flex items-end justify-between gap-6 md:gap-12 mb-12 [@media(max-width:768px)]:mb-8">
          <SectionTitleBadge align="left">オトフィットとは</SectionTitleBadge>
          <div className="hidden md:flex items-end gap-2 shrink-0">
            <div className="relative w-[90px] h-[110px] lg:w-[110px] lg:h-[130px] xl:w-[130px] xl:h-[150px]">
              <Image src="/peoples/p2-grey-walk.png" alt="" fill className="object-contain object-bottom" />
            </div>
            <div className="relative w-[90px] h-[110px] lg:w-[110px] lg:h-[130px] xl:w-[130px] xl:h-[150px]">
              <Image src="/peoples/p6-yellow-hp.png" alt="" fill className="object-contain object-bottom" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-start">
          <p className="text-[var(--color-primary)] font-black text-[1.4rem] md:text-[1.7rem] leading-[1.55] [@media(max-width:768px)]:text-[1.2rem]">
            音楽 × 体操 × 世界レベルの専門家
            <br />
            による、社員が&quot;自然に動く&quot;参加型ウェルネス体験。
          </p>

          <div className="space-y-5">
            <p className="text-[var(--color-text-muted)] text-[1.05rem] font-bold leading-[2] [@media(max-width:768px)]:text-base">
              特別な設備・準備物不要。出張型で全国対応。
              <br />
              笑って動いて、現場が変わる90分。
            </p>
            <p className="inline-flex items-center gap-2 text-sm font-black text-[var(--color-navy)] bg-[var(--color-secondary)] px-4 py-2 rounded-full">
              現場までフル機材持ち込み・ファシリ運営まで一括
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
