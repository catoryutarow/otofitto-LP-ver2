import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";

export function RelatedService() {
  return (
    <ScrollReveal
      as="section"
      id="related-service"
      className="bg-[var(--color-secondary)] text-[var(--color-navy)] section-pad relative overflow-hidden"
    >
      <div className="w-full max-w-[1080px] xl:max-w-[1200px] 2xl:max-w-[1320px] mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-12 [@media(max-width:768px)]:mb-8">
          <SectionTitleBadge align="left">関連サービス「生演奏カラオケ」</SectionTitleBadge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-start">
          <div>
            <p className="text-xs font-black tracking-[0.2em] text-[var(--color-navy)] mb-4">
              SPECIAL OFFERS
            </p>
            <h3 className="text-[1.7rem] md:text-[2.1rem] font-black mb-6 leading-[1.4] text-[var(--color-navy)] [@media(max-width:768px)]:text-[1.4rem]">
              「&quot;つきあい&quot;の飲み会」から、
              <br />
              「&quot;思い出&quot;の一夜」へ。
            </h3>
            <p className="text-base font-black text-[var(--color-navy)] mb-2">
              周年・忘年会・内定式・成果報告会 ——
            </p>
          </div>

          <div className="space-y-6">
            <p className="leading-[2] font-bold text-[var(--color-navy)] text-[1.05rem]">
              会社の節目には、プロの生演奏 × 社員の歌声で、もうひとつの
              <span className="relative inline-block font-black text-[var(--color-navy)] mx-1 whitespace-nowrap">
                <span className="relative z-10">オトフィット</span>
                <span
                  aria-hidden
                  className="absolute left-0 right-0 bottom-0.5 h-2.5 bg-white/70 -z-0"
                />
              </span>
              を。
            </p>
            <p className="font-black text-[var(--color-navy)] text-[1.05rem] leading-[1.85] border-l-4 border-[var(--color-navy)] pl-5">
              オトフィットの音楽サポートチームが、特別な一夜まで一貫伴走します。
            </p>
            <p className="text-[0.9rem] font-bold text-[var(--color-navy)] leading-[1.85]">
              生演奏カラオケの詳細資料をご用意しています。お問い合わせ時にお気軽にお申し付けください。
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
