import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";

export function Intro() {
  return (
    <ScrollReveal as="section" id="intro" className="bg-[var(--color-bg-light)] section-pad relative">
      <div className="container-narrow">
        <SectionTitleBadge>オトフィットとは</SectionTitleBadge>
        <div className="max-w-[900px] mx-auto bg-white border-[3px] border-[var(--color-navy)] rounded-[var(--radius-card)] shadow-[8px_8px_0_0_rgba(31,41,55,1)] text-center px-10 py-[60px] relative [@media(max-width:768px)]:px-6 [@media(max-width:768px)]:py-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[var(--color-accent-green)] border-[3px] border-[var(--color-navy)] rounded-xl rotate-12 z-10 flex items-center justify-center">
            <span className="text-3xl">✨</span>
          </div>
          
          <h3 className="text-[1.8rem] mb-6 text-[var(--color-navy)] font-bold mt-4 [@media(max-width:768px)]:text-[1.4rem]">
            <span className="text-[var(--color-primary)] font-black text-2xl">
              音楽 × 体操 × 世界レベルの専門家
            </span>
            <br />による<br />
            <span className="text-[var(--color-navy)] font-black text-3xl inline-block mt-2">
              社員が&quot;自然に動く&quot;参加型ウェルネス体験。
            </span>
          </h3>
          <p className="text-[var(--color-text-muted)] text-[1.1rem] font-bold">
            特別な設備・準備物不要。出張型で全国対応。
            <br />
            笑って動いて、現場が変わる90分。
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
