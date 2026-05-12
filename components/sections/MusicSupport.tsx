import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";
import { musicMembers } from "@/lib/data";

const tagStyles: Record<"green" | "blue" | "pink", string> = {
  green: "bg-[#e6f7ef] text-[#10b981]",
  blue: "bg-[#eef2ff] text-[#4f46e5]",
  pink: "bg-[#fff1f2] text-[#e11d48]",
};

export function MusicSupport() {
  return (
    <ScrollReveal as="section" id="music-support" className="bg-white section-pad">
      <div className="container-narrow">
        <SectionTitleBadge>
          音楽サポートチーム — 株式会社モテコロ
        </SectionTitleBadge>

        <div className="grid grid-cols-3 gap-6 [@media(max-width:900px)]:gap-4 [@media(max-width:768px)]:gap-2">
          {musicMembers.map((m) => (
            <div
              key={m.name}
              className="bg-[var(--color-card-grey)] border border-gray-300 rounded-2xl text-center px-5 py-[30px] [@media(max-width:768px)]:px-1 [@media(max-width:768px)]:py-[15px]"
            >
              <div className="relative w-[120px] h-[120px] mx-auto mb-4 rounded-full overflow-hidden bg-[#e0e0e0] [@media(max-width:768px)]:w-[60px] [@media(max-width:768px)]:h-[60px] [@media(max-width:768px)]:mb-2.5">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="120px"
                  className="object-cover object-top"
                />
              </div>
              <span
                className={`inline-block rounded px-2.5 py-0.5 text-[0.7rem] font-black mb-2.5 [@media(max-width:768px)]:text-[0.6rem] [@media(max-width:768px)]:px-1.5 ${tagStyles[m.tagColor]}`}
              >
                {m.roleTag}
              </span>
              <h3 className="text-2xl font-bold mb-1.5 [@media(max-width:768px)]:text-[0.9rem] [@media(max-width:768px)]:mb-1">
                {m.name}
              </h3>
              <p className="text-[0.85rem] opacity-90 [@media(max-width:768px)]:text-[0.65rem]">
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
