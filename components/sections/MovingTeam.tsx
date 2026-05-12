import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";
import { movingMembers } from "@/lib/data";

export function MovingTeam() {
  return (
    <ScrollReveal as="section" id="moving-team" className="bg-white section-pad">
      <div className="container-narrow">
        <SectionTitleBadge>
          一緒に動くチーム — あなたの隣に立つ2人
        </SectionTitleBadge>

        <div className="grid grid-cols-2 gap-6 [@media(max-width:768px)]:gap-3">
          {movingMembers.map((m) => (
            <div
              key={m.name}
              className="bg-[var(--color-card-grey)] border border-gray-300 rounded-2xl p-[30px] [@media(max-width:768px)]:px-4 [@media(max-width:768px)]:py-5"
            >
              <span className="inline-block rounded-md border border-gray-300 bg-[#f0f2f5] text-[#666] px-3 py-1 text-[0.8rem] font-black mb-4 [@media(max-width:768px)]:text-[0.7rem] [@media(max-width:768px)]:px-2 [@media(max-width:768px)]:mb-2.5">
                {m.label}
              </span>
              <h3 className="text-[1.6rem] text-[var(--color-navy)] font-bold mb-2.5 [@media(max-width:768px)]:text-[1.1rem]">
                {m.name}
              </h3>
              <p className="text-[#666] text-base font-black mb-2.5 [@media(max-width:768px)]:text-[0.8rem]">
                {m.catchphrase}
              </p>
              <p className="text-[0.9rem] opacity-90 [@media(max-width:768px)]:text-[0.75rem]">
                {m.details.map((d, i) => (
                  <span key={d}>
                    {d}
                    {i < m.details.length - 1 && <br />}
                  </span>
                ))}
              </p>
              <div className="mt-5 rounded-xl border border-[#eee] bg-white p-4 text-[0.85rem] text-[#777] [@media(max-width:768px)]:p-2.5 [@media(max-width:768px)]:text-[0.75rem]">
                {m.message}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
