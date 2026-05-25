import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";
import { detailItems } from "@/lib/data";

export function Details() {
  return (
    <ScrollReveal
      as="section"
      id="details"
      className="bg-[var(--color-bg-light)] text-[var(--color-navy)] section-pad relative overflow-hidden"
    >
      <div className="w-full max-w-[1080px] xl:max-w-[1200px] 2xl:max-w-[1320px] mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-12 [@media(max-width:1000px)]:mb-8">
          <SectionTitleBadge align="left">
            イベント詳細
          </SectionTitleBadge>
        </div>

        <dl className="divide-y divide-[var(--color-navy)]/15">
          {detailItems.map((d) => (
            <div
              key={d.label}
              className="grid grid-cols-[180px_1fr] gap-8 py-6 [@media(max-width:1000px)]:grid-cols-1 [@media(max-width:1000px)]:gap-2 [@media(max-width:1000px)]:py-5"
            >
              <dt className="text-[var(--color-navy)] font-black text-[0.95rem] tracking-wider">
                {d.label}
              </dt>
              <dd className="font-bold text-[var(--color-navy)] text-[1.05rem] leading-[1.9]">
                {d.value.map((v) => (
                  <span key={v} className="block">
                    {v}
                  </span>
                ))}
                {d.note && (
                  <span className="text-[0.85rem] text-[var(--color-text-muted)] font-bold mt-2 block">
                    {d.note}
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>

        {/* Pricing — 既存 dl の行と同じ grid で揃え。カード枠なし。 */}
        <div className="border-t border-[var(--color-navy)]/15 grid grid-cols-[180px_1fr] gap-8 py-7 [@media(max-width:1000px)]:grid-cols-1 [@media(max-width:1000px)]:gap-3 [@media(max-width:1000px)]:py-6">
          <dt className="text-[var(--color-navy)] font-black text-[0.95rem] tracking-wider">
            料金
          </dt>
          <dd className="font-bold text-[var(--color-navy)]">
            <p className="flex items-baseline gap-1.5 mb-2">
              <span className="font-black leading-none text-[1.05rem] mr-2">
                90分プログラム
              </span>
              <span className="font-black leading-none text-[2.2rem] md:text-[2.6rem]">
                10
              </span>
              <span className="font-black text-[1.15rem] md:text-[1.3rem]">
                万円〜
              </span>
              <span className="text-[0.85rem] font-bold text-[var(--color-text-muted)] ml-2">
                (要相談)
              </span>
            </p>
            <p className="text-[0.85rem] text-[var(--color-text-muted)] font-bold leading-[1.85]">
              参加人数・会場・実施エリア・カスタム要素により変動します。詳細はお問い合わせ時にご相談ください。
            </p>
          </dd>
        </div>
      </div>
    </ScrollReveal>
  );
}
