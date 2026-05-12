import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";
import { detailItems } from "@/lib/data";

export function Details() {
  return (
    <ScrollReveal
      as="section"
      id="details"
      className="bg-[var(--color-primary)] section-pad relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      <div className="container-narrow relative z-10">
        <SectionTitleBadge variant="onNavy">イベント詳細</SectionTitleBadge>
        <div className="grid grid-cols-2 gap-6 [@media(max-width:900px)]:grid-cols-1 mt-10">
          {detailItems.map((d) => (
            <div
              key={d.label}
              className="bg-white border-[3px] border-[var(--color-navy)] rounded-[var(--radius-card)] p-6 shadow-[8px_8px_0_0_rgba(31,41,55,1)] flex items-center"
            >
              <div className="w-1/3">
                <span className="inline-block bg-[var(--color-secondary)] text-[var(--color-navy)] font-black px-3 py-1 border-2 border-[var(--color-navy)] rounded-lg shadow-[2px_2px_0_0_rgba(31,41,55,1)] text-[0.85rem]">
                  {d.label}
                </span>
              </div>
              <div className="w-2/3 pl-4 border-l-2 border-dashed border-gray-300">
                <span className="text-[1.1rem] font-black text-[var(--color-navy)] block">
                  {d.value.map((v, i) => (
                    <span key={v} className="block">
                      {v}
                    </span>
                  ))}
                  {d.note && (
                    <span className="text-[0.85rem] text-[var(--color-text-muted)] font-bold mt-1 block">{d.note}</span>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
