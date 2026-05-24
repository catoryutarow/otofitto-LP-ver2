import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";
import { musicMembers } from "@/lib/data";

const tagColor: Record<"green" | "blue" | "pink", string> = {
  green: "text-[var(--color-accent-green)]",
  blue: "text-[var(--color-primary)]",
  pink: "text-[var(--color-accent-red)]",
};

// Same parallelogram shape as Instructors so the LP reads with a single
// "framed portrait" identity across both performer and trainer sections.
const CLIP = "polygon(7% 0, 100% 0, 93% 100%, 0 100%)";

const accentBg: Record<"green" | "blue" | "pink", string> = {
  green: "var(--color-accent-green)",
  blue: "var(--color-primary)",
  pink: "var(--color-accent-red)",
};

export function MusicSupport() {
  return (
    <ScrollReveal as="section" id="music-support" className="bg-white section-pad relative overflow-hidden">
      {/* Decorative music notes scattered as background — pink-tinted on white,
          low opacity so they sit behind content as ambient rhythm. */}
      <Image
        src="/peoples/note-double.png"
        alt=""
        aria-hidden
        width={120}
        height={120}
        className="hidden md:block absolute top-24 right-[8%] w-16 lg:w-20 rotate-[12deg] pointer-events-none select-none"
      />
      <Image
        src="/peoples/note-single.png"
        alt=""
        aria-hidden
        width={80}
        height={80}
        className="hidden md:block absolute bottom-32 left-[6%] w-10 lg:w-12 -rotate-[8deg] pointer-events-none select-none"
      />
      <Image
        src="/peoples/note-single.png"
        alt=""
        aria-hidden
        width={80}
        height={80}
        className="hidden lg:block absolute top-[55%] right-[2%] w-8 rotate-[24deg] pointer-events-none select-none"
      />

      <div className="w-full max-w-[1180px] xl:max-w-[1280px] 2xl:max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-end justify-between gap-6 md:gap-12 mb-14 [@media(max-width:1000px)]:mb-10">
          <SectionTitleBadge align="left">
            音楽サポートチーム — 株式会社モテコロ
          </SectionTitleBadge>
          <div className="hidden md:flex items-end gap-2 shrink-0">
            <div className="relative w-[90px] h-[110px] lg:w-[110px] lg:h-[130px] xl:w-[130px] xl:h-[150px]">
              <Image src="/peoples/c3-green-girl.png" alt="" fill className="object-contain object-bottom" />
            </div>
            <div className="relative w-[90px] h-[110px] lg:w-[110px] lg:h-[130px] xl:w-[130px] xl:h-[150px]">
              <Image src="/peoples/c5-blue-smile.png" alt="" fill className="object-contain object-bottom" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-12 [@media(max-width:900px)]:gap-10 [@media(max-width:1000px)]:grid-cols-1 [@media(max-width:1000px)]:gap-12">
          {musicMembers.map((m) => (
            <div key={m.name} className="relative [@media(max-width:1000px)]:text-center">
              {/* Portrait — Instructors-style parallelogram with colored
                  backdrop offset behind the photo. */}
              <div className="relative isolate w-full max-w-[280px] mb-6 [@media(max-width:1000px)]:mx-auto">
                <div
                  aria-hidden
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundColor: accentBg[m.tagColor],
                    clipPath: CLIP,
                    transform: "translate(12px, 12px)",
                  }}
                />
                <div
                  className="relative z-10 w-full aspect-[4/5] bg-white overflow-hidden"
                  style={{ clipPath: CLIP }}
                >
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(max-width: 1000px) 90vw, 280px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <p className={`text-xs font-black mb-2 tracking-[0.15em] ${tagColor[m.tagColor]}`}>
                {m.roleTag}
              </p>
              <h3 className="text-2xl font-black mb-3 text-[var(--color-navy)] [@media(max-width:1000px)]:text-xl">
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
