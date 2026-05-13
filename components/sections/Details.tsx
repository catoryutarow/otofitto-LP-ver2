import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";
import { detailItems } from "@/lib/data";

export function Details() {
  return (
    <ScrollReveal
      as="section"
      id="details"
      className="bg-[var(--color-navy)] text-white section-pad relative overflow-hidden"
    >
      <div className="w-full max-w-[1080px] xl:max-w-[1200px] 2xl:max-w-[1320px] mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-12 [@media(max-width:768px)]:mb-8">
          <SectionTitleBadge variant="onNavy" align="left">
            イベント詳細
          </SectionTitleBadge>
        </div>

        <dl className="divide-y divide-white/15">
          {detailItems.map((d) => (
            <div
              key={d.label}
              className="grid grid-cols-[180px_1fr] gap-8 py-6 [@media(max-width:768px)]:grid-cols-1 [@media(max-width:768px)]:gap-2 [@media(max-width:768px)]:py-5"
            >
              <dt className="text-[var(--color-secondary)] font-black text-[0.95rem] tracking-wider">
                {d.label}
              </dt>
              <dd className="font-bold text-white text-[1.05rem] leading-[1.9]">
                {d.value.map((v) => (
                  <span key={v} className="block">
                    {v}
                  </span>
                ))}
                {d.note && (
                  <span className="text-[0.85rem] text-white/60 font-bold mt-2 block">
                    {d.note}
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </ScrollReveal>
  );
}
