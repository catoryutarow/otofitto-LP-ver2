import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";

export function RelatedService() {
  return (
    <ScrollReveal
      as="section"
      id="related-service"
      className="bg-[var(--color-secondary)] text-[var(--color-navy)] section-pad relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)] opacity-10 rounded-bl-[100px]"></div>
      
      <div className="container-narrow relative z-10">
        <SectionTitleBadge variant="onNavy">
          関連サービス — 節目の夜に
        </SectionTitleBadge>

        <div className="rounded-[var(--radius-card)] px-10 py-[60px] text-center bg-white border-[4px] border-[var(--color-navy)] shadow-[10px_10px_0_0_rgba(31,41,55,1)] relative mt-10 [@media(max-width:768px)]:px-5 [@media(max-width:768px)]:py-10">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[var(--color-primary)] text-white border-2 border-[var(--color-navy)] rounded-full px-6 py-2 font-black shadow-[4px_4px_0_0_rgba(31,41,55,1)]">
            SPECIAL OFFERS
          </div>

          <h3 className="text-[1.8rem] font-black mb-6 text-[var(--color-navy)] [@media(max-width:768px)]:text-[1.4rem]">
            「&quot;つきあい&quot;の飲み会」から、「&quot;思い出&quot;の一夜」へ。
          </h3>
          <p className="text-[1.2rem] mb-[20px] font-bold text-[var(--color-primary)]">
            周年・忘年会・内定式・成果報告会 ——
          </p>
          <p className="leading-[2] mb-[30px] font-bold text-[var(--color-text-muted)]">
            会社の節目には、プロの生演奏 × 社員の歌声で、
            <br />
            もうひとつの{" "}
            <span className="font-black text-2xl text-[var(--color-accent-red)] mx-1">otofitto</span>
            。
          </p>
          <p className="font-black text-[var(--color-navy)] bg-[var(--color-bg-light)] inline-block px-4 py-2 rounded-lg border-2 border-[var(--color-navy)]">
            オトフィットの音楽サポートチームが、特別な一夜まで一貫伴走します。
          </p>
        </div>

        <p className="text-center mt-[40px] text-[1rem] font-bold text-[var(--color-navy)]">
          生バンドカラオケの詳細資料をご用意しています。お問い合わせ時にお気軽にお申し付けください。
        </p>
      </div>
    </ScrollReveal>
  );
}
