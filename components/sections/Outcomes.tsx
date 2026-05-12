import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";
import { benefits } from "@/lib/data";

export function Outcomes() {
  if (benefits.length === 0) return null;
  return (
    <ScrollReveal as="section" id="outcomes" className="bg-white section-pad">
      <div className="container-narrow">
        <SectionTitleBadge>経営者が得られる成果</SectionTitleBadge>
        <div className="grid grid-cols-2 gap-6 [@media(max-width:900px)]:grid-cols-1">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-[var(--color-card-grey)] border border-gray-300 rounded-2xl p-[30px]"
            >
              <h3 className="text-[1.2rem] text-[var(--color-purple)] font-bold mb-2.5">
                {b.title}
              </h3>
              <p>{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
