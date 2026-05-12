import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";
import { detailItems } from "@/lib/data";

export function Details() {
  return (
    <ScrollReveal
      as="section"
      id="details"
      className="bg-[var(--color-bg-light)] section-pad"
    >
      <div className="container-narrow">
        <SectionTitleBadge>イベント詳細</SectionTitleBadge>
        <div className="grid grid-cols-2 gap-6 [@media(max-width:900px)]:grid-cols-1">
          {detailItems.map((d) => (
            <div
              key={d.label}
              className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
            >
              <span className="block text-[0.8rem] text-[var(--color-purple)] font-bold mb-2">
                {d.label}
              </span>
              <span className="text-[1.1rem] font-bold text-[var(--color-navy)]">
                {d.value.map((v, i) => (
                  <span key={v}>
                    {v}
                    {i < d.value.length - 1 && <br />}
                  </span>
                ))}
                {d.note && (
                  <>
                    <br />
                    <span className="text-[0.8rem] opacity-60">{d.note}</span>
                  </>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
