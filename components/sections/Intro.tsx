import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";

export function Intro() {
  return (
    <ScrollReveal as="section" id="intro" className="bg-white section-pad">
      <div className="container-narrow">
        <SectionTitleBadge>オトフィットとは</SectionTitleBadge>
        <div className="max-w-[900px] mx-auto bg-[var(--color-card-grey)] rounded-2xl text-center px-10 py-[60px] [@media(max-width:768px)]:px-6 [@media(max-width:768px)]:py-10">
          <h3 className="text-[1.8rem] mb-5 text-[var(--color-navy)] font-bold [@media(max-width:768px)]:text-[1.3rem]">
            <span className="text-[var(--color-purple)]">
              音楽 × 体操 × 世界レベルの専門家
            </span>
            による
            <br />
            <span className="text-[var(--color-navy)] font-black">
              社員が&quot;自然に動く&quot;参加型ウェルネス体験。
            </span>
          </h3>
          <p className="text-[var(--color-text-muted)] text-[1.1rem]">
            特別な設備・準備物不要。出張型で全国対応。
            <br />
            笑って動いて、現場が変わる90分。
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
