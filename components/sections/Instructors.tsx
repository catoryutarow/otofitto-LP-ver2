import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";
import { instructors, type Instructor } from "@/lib/data";

// Same parallelogram shape applied to every layer (backdrop / photo / text panel)
// so they stack as a coherent unit. ~7% lean keeps subjects clear of the cut.
const CLIP = "polygon(7% 0, 100% 0, 93% 100%, 0 100%)";

function Card({ p, accent }: { p: Instructor; accent: string }) {
  const isNavy = p.variant === "navy";
  return (
    <div className="relative">
      {/* PHOTO UNIT: colored parallelogram backdrop + photo clipped to same shape */}
      <div className="relative isolate mb-6">
        {/* Colored backdrop, offset bottom-right behind photo */}
        <div
          aria-hidden
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: accent,
            clipPath: CLIP,
            transform: "translate(14px, 14px)",
          }}
        />
        {/* Photo clipped to parallelogram (same lean as backdrop) */}
        <div
          className="relative z-10 w-full aspect-[4/5] overflow-hidden"
          style={{ clipPath: CLIP }}
        >
          <Image
            src={p.image}
            alt={p.name}
            fill
            sizes="(max-width: 900px) 100vw, 33vw"
            // object-center prevents the subject from being cut by the parallelogram
            // corners (object-top would push faces into the clipped top-left region)
            className="object-cover object-center"
          />
          <span
            className="absolute top-5 left-[12%] z-[2] rounded-full px-4 py-1.5 text-[0.72rem] font-black text-white tracking-wider"
            style={{ backgroundColor: isNavy ? "#1877f2" : "#ef4444" }}
          >
            {p.badge}
          </span>
        </div>
      </div>

      {/* TEXT PANEL: white parallelogram below photo — solves gold-bg readability.
          Same lean as photo so the unit reads as one connected card. */}
      <div
        className="relative bg-white px-7 py-6 mr-3 [@media(max-width:900px)]:px-6 [@media(max-width:900px)]:py-5"
        style={{ clipPath: CLIP }}
      >
        <h3 className="text-[1.4rem] mb-1 font-black text-[var(--color-navy)]">
          {p.name}
        </h3>
        <p className="text-[0.92rem] font-bold mb-4 text-[var(--color-primary)]">
          {p.role}
        </p>
        <ul className="text-[0.88rem] font-bold space-y-1.5 text-[var(--color-navy)] mb-4">
          {p.details.map((d) => (
            <li key={d} className="flex items-start gap-2">
              <span
                aria-hidden
                className="inline-block w-1.5 h-1.5 mt-[0.55em] bg-[var(--color-secondary)] rounded-sm shrink-0"
              />
              {d}
            </li>
          ))}
        </ul>
        <div className="text-[0.8rem] font-bold text-[var(--color-navy)]/75 leading-[1.85] border-t border-[var(--color-navy)]/15 pt-3">
          {p.achievement.map((a) => (
            <span key={a} className="block">
              {a}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Instructors() {
  // One accent color per instructor — keeps a visual identity per champion
  const accents = ["#1877f2", "#ef4444", "#1f2937"];

  return (
    <ScrollReveal
      as="section"
      id="instructors"
      className="bg-[var(--color-secondary)] section-pad relative overflow-hidden"
    >
      <div className="w-full max-w-[1180px] xl:max-w-[1280px] 2xl:max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-14 [@media(max-width:768px)]:mb-10">
          <SectionTitleBadge align="left">
            世界タイトルホルダー 3名が直接指導
          </SectionTitleBadge>
        </div>

        <div className="grid grid-cols-3 gap-10 [@media(max-width:900px)]:grid-cols-1 [@media(max-width:900px)]:gap-14">
          {instructors.map((p, i) => (
            <Card key={p.name} p={p} accent={accents[i]} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
