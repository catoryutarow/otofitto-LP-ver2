import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";
import { instructors, type Instructor } from "@/lib/data";

function Card({ p }: { p: Instructor }) {
  const isNavy = p.variant === "navy";
  return (
    <div className="relative rounded-2xl p-6 bg-white text-[var(--color-navy)] border-[3px] border-[var(--color-navy)] shadow-[8px_8px_0_0_rgba(31,41,55,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0_0_rgba(31,41,55,1)] transition-all">
      <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-5 border-2 border-[var(--color-navy)]">
        <Image
          src={p.image}
          alt={p.name}
          fill
          sizes="(max-width: 900px) 100vw, 33vw"
          className="object-cover object-top"
        />
        <div
          className="absolute top-3 left-3 z-[2] rounded-lg px-3 py-1.5 text-[0.8rem] font-black text-white border-2 border-[var(--color-navy)] shadow-[3px_3px_0_0_rgba(31,41,55,1)]"
          style={{ backgroundColor: isNavy ? "#1877f2" : "#ef4444" }}
        >
          {p.badge}
        </div>
      </div>
      <h3 className="text-2xl mb-1.5 font-black">{p.name}</h3>
      <p className="text-[0.95rem] font-bold mb-4 text-[var(--color-primary)]">
        {p.role}
      </p>
      <ul className="list-none text-[0.85rem] mb-5 font-bold space-y-1">
        {p.details.map((d) => (
          <li
            key={d}
            className="flex items-center before:content-[''] before:inline-block before:w-1.5 before:h-1.5 before:bg-[var(--color-secondary)] before:rounded-sm before:mr-2"
          >
            {d}
          </li>
        ))}
      </ul>
      <div className="rounded-xl p-4 text-[0.85rem] font-bold bg-[var(--color-bg-light)] border-2 border-gray-200">
        {p.achievement.map((a) => (
          <span key={a} className="block">
            {a}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Instructors() {
  return (
    <ScrollReveal
      as="section"
      id="instructors"
      className="bg-[var(--color-secondary)] section-pad relative overflow-hidden"
    >
      <div className="absolute top-20 right-5 w-24 h-24 bg-[var(--color-accent-green)] border-[3px] border-[var(--color-navy)] rounded-xl rotate-12 opacity-80 z-0"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-[var(--color-primary)] border-[3px] border-[var(--color-navy)] rounded-xl -rotate-12 opacity-80 z-0"></div>

      <div className="container-narrow relative z-10">
        <SectionTitleBadge variant="onNavy">
          世界タイトルホルダー 3名が直接指導
        </SectionTitleBadge>
        <div className="grid grid-cols-3 gap-8 mt-12 [@media(max-width:900px)]:grid-cols-1">
          {instructors.map((p) => (
            <Card key={p.name} p={p} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
