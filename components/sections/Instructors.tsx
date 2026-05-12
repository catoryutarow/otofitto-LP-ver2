import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";
import { instructors, type Instructor } from "@/lib/data";

function Card({ p }: { p: Instructor }) {
  const isNavy = p.variant === "navy";
  const base = "relative rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)]";
  const theme = isNavy
    ? "bg-[var(--color-navy)] text-white"
    : "bg-[var(--color-card-grey)] border border-gray-300";
  return (
    <div className={`${base} ${theme}`}>
      <div
        className={`absolute top-6 left-6 z-[2] rounded-md px-3 py-1 text-xs font-bold ${
          isNavy ? "bg-white text-[var(--color-navy)]" : "bg-white text-[#333]"
        }`}
      >
        {p.badge}
      </div>
      <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-5 bg-gray-300">
        <Image
          src={p.image}
          alt={p.name}
          fill
          sizes="(max-width: 900px) 100vw, 33vw"
          className="object-cover object-top"
        />
      </div>
      <h3 className="text-2xl mb-1.5 font-bold">{p.name}</h3>
      <p
        className={`text-[0.9rem] font-bold mb-4 ${
          isNavy ? "text-[var(--color-gold)]" : "opacity-80"
        }`}
      >
        {p.role}
      </p>
      <ul className="list-none text-[0.85rem] mb-5 opacity-90 space-y-1">
        {p.details.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <div
        className={`rounded-xl p-4 text-[0.85rem] font-bold ${
          isNavy
            ? "border border-white/10 text-[var(--color-gold)]"
            : "bg-black/5"
        }`}
      >
        {p.achievement.map((a, i) => (
          <span key={a}>
            {a}
            {i < p.achievement.length - 1 && <br />}
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
      className="bg-[var(--color-bg-light)] section-pad"
    >
      <div className="container-narrow">
        <SectionTitleBadge>世界タイトルホルダー 3名が直接指導</SectionTitleBadge>
        <div className="grid grid-cols-3 gap-6 [@media(max-width:900px)]:grid-cols-1">
          {instructors.map((p) => (
            <Card key={p.name} p={p} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
