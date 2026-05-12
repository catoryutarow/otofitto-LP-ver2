import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";
import { movingMembers } from "@/lib/data";

export function MovingTeam() {
  return (
    <ScrollReveal as="section" id="moving-team" className="bg-white section-pad relative">
      <div className="container-narrow">
        <SectionTitleBadge>
          一緒に動くチーム — あなたの隣に立つ2人
        </SectionTitleBadge>

        <div className="grid grid-cols-2 gap-8 [@media(max-width:768px)]:grid-cols-1 mt-10">
          {movingMembers.map((m) => (
            <div
              key={m.name}
              className="bg-[var(--color-bg-light)] border-[3px] border-[var(--color-navy)] shadow-[8px_8px_0_0_rgba(31,41,55,1)] rounded-[var(--radius-card)] p-8 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_rgba(31,41,55,1)] transition-all [@media(max-width:768px)]:p-6"
            >
              <span className="inline-block rounded-lg border-2 border-[var(--color-navy)] bg-[var(--color-secondary)] text-[var(--color-navy)] shadow-[2px_2px_0_0_rgba(31,41,55,1)] px-4 py-1.5 text-[0.85rem] font-black mb-5">
                {m.label}
              </span>
              <h3 className="text-3xl text-[var(--color-navy)] font-black mb-3 [@media(max-width:768px)]:text-2xl">
                {m.name}
              </h3>
              <p className="text-[var(--color-primary)] text-lg font-black mb-4">
                {m.catchphrase}
              </p>
              <p className="text-[0.95rem] font-bold text-[var(--color-text-muted)] mb-6">
                {m.details.map((d, i) => (
                  <span key={d}>
                    {d}
                    {i < m.details.length - 1 && <br />}
                  </span>
                ))}
              </p>
              <div className="mt-auto rounded-xl border-[3px] border-[var(--color-navy)] bg-white p-5 text-[0.9rem] font-bold text-[var(--color-navy)] relative">
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-[var(--color-bg-light)] border-[3px] border-[var(--color-navy)] rounded-full z-10 flex items-center justify-center"><span className="w-2 h-2 bg-[var(--color-primary)] rounded-full"></span></div>
                {m.message}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
