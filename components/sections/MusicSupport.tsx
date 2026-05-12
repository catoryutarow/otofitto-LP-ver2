import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";
import { musicMembers } from "@/lib/data";

const tagStyles: Record<"green" | "blue" | "pink", string> = {
  green: "bg-[var(--color-accent-green)] text-white border-2 border-[var(--color-navy)] shadow-[2px_2px_0_0_rgba(31,41,55,1)]",
  blue: "bg-[var(--color-primary)] text-white border-2 border-[var(--color-navy)] shadow-[2px_2px_0_0_rgba(31,41,55,1)]",
  pink: "bg-[var(--color-accent-red)] text-white border-2 border-[var(--color-navy)] shadow-[2px_2px_0_0_rgba(31,41,55,1)]",
};

export function MusicSupport() {
  return (
    <ScrollReveal as="section" id="music-support" className="bg-[var(--color-bg-light)] section-pad relative">
      <div className="container-narrow">
        <SectionTitleBadge>
          音楽サポートチーム — 株式会社モテコロ
        </SectionTitleBadge>

        <div className="grid grid-cols-3 gap-6 [@media(max-width:900px)]:gap-4 [@media(max-width:768px)]:grid-cols-1 mt-10">
          {musicMembers.map((m) => (
            <div
              key={m.name}
              className="bg-white border-[3px] border-[var(--color-navy)] shadow-[6px_6px_0_0_rgba(31,41,55,1)] rounded-[var(--radius-card)] text-center px-5 py-[30px] hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(31,41,55,1)] transition-all [@media(max-width:768px)]:px-4 [@media(max-width:768px)]:py-6"
            >
              <div className="relative w-[120px] h-[120px] mx-auto mb-5 rounded-full overflow-hidden bg-[var(--color-secondary)] border-[3px] border-[var(--color-navy)] shadow-[4px_4px_0_0_rgba(31,41,55,1)] [@media(max-width:768px)]:w-[100px] [@media(max-width:768px)]:h-[100px] [@media(max-width:768px)]:mb-4">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="120px"
                  className="object-cover object-top"
                />
              </div>
              <span
                className={`inline-block rounded-lg px-3 py-1 text-[0.75rem] font-black mb-4 [@media(max-width:768px)]:text-[0.7rem] ${tagStyles[m.tagColor]}`}
              >
                {m.roleTag}
              </span>
              <h3 className="text-2xl font-black mb-2 text-[var(--color-navy)] [@media(max-width:768px)]:text-xl">
                {m.name}
              </h3>
              <p className="text-[0.9rem] font-bold text-[var(--color-text-muted)] [@media(max-width:768px)]:text-[0.85rem]">
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
