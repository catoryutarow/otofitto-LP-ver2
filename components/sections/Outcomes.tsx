import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";
import { benefits } from "@/lib/data";

export function Outcomes() {
  if (benefits.length === 0) return null;
  return (
    <ScrollReveal as="section" id="outcomes" className="bg-[var(--color-bg-light)] section-pad relative">
      <div className="container-narrow">
        <SectionTitleBadge>経営者が得られる成果</SectionTitleBadge>
        <div className="grid grid-cols-2 gap-8 [@media(max-width:900px)]:grid-cols-1 mt-10">
          {benefits.map((b, index) => (
            <div
              key={b.title}
              className="bg-white border-[3px] border-[var(--color-navy)] shadow-[8px_8px_0_0_rgba(31,41,55,1)] rounded-[var(--radius-card)] p-[30px] hover:-translate-y-1 hover:shadow-[10px_10px_0_0_rgba(31,41,55,1)] transition-all"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="shrink-0 w-11 h-11 bg-[var(--color-secondary)] border-[3px] border-[var(--color-navy)] rounded-full flex items-center justify-center font-black text-lg text-[var(--color-navy)] shadow-[2px_2px_0_0_rgba(31,41,55,1)]">
                  {index + 1}
                </div>
                <h3 className="text-[1.3rem] text-[var(--color-primary)] font-black leading-tight pt-2 [@media(max-width:768px)]:text-[1.1rem]">
                  {b.title}
                </h3>
              </div>
              <p className="font-bold text-[var(--color-text-muted)] leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
