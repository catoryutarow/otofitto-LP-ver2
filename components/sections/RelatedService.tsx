import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";

export function RelatedService() {
  return (
    <ScrollReveal
      as="section"
      id="related-service"
      className="bg-[var(--color-navy)] text-white section-pad"
    >
      <div className="container-narrow">
        <SectionTitleBadge variant="onNavy">
          関連サービス — 節目の夜に
        </SectionTitleBadge>

        <div className="rounded-2xl px-10 py-[60px] text-center text-white bg-gradient-to-br from-[#2a2845] to-[var(--color-navy)] border border-[rgba(244,191,31,0.2)] shadow-[0_10px_30px_rgba(0,0,0,0.3)] [@media(max-width:768px)]:px-5 [@media(max-width:768px)]:py-10">
          <h3 className="text-[1.8rem] font-black mb-4 text-[var(--color-gold)] [text-shadow:0_0_15px_rgba(244,191,31,0.3)] [@media(max-width:768px)]:text-[1.4rem]">
            「&quot;つきあい&quot;の飲み会」から、「&quot;思い出&quot;の一夜」へ。
          </h3>
          <p className="text-[1.2rem] mb-[30px] text-[#e2e8f0]">
            周年・忘年会・内定式・成果報告会 ——
          </p>
          <p className="leading-[2] mb-[30px] text-[#cbd5e1]">
            会社の節目には、プロの生演奏 × 社員の歌声で、
            <br />
            もうひとつの{" "}
            <span className="font-black text-[var(--color-gold)]">otofitto</span>
            。
          </p>
          <p className="font-bold text-white">
            オトフィットの音楽サポートチームが、特別な一夜まで一貫伴走します。
          </p>
        </div>

        <p className="text-center mt-[30px] text-[0.9rem] text-white/60">
          生バンドカラオケの詳細資料をご用意しています。お問い合わせ時にお気軽にお申し付けください。
        </p>
      </div>
    </ScrollReveal>
  );
}
