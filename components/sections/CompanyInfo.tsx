import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";
import { companyInfo } from "@/lib/data";

export function CompanyInfo() {
  return (
    <ScrollReveal as="section" id="company" className="bg-white pt-24 pb-16 [@media(max-width:768px)]:pt-16 [@media(max-width:768px)]:pb-10">
      <div className="w-full max-w-[1080px] xl:max-w-[1200px] 2xl:max-w-[1320px] mx-auto px-6 md:px-12">
        <div className="mb-12 [@media(max-width:768px)]:mb-8">
          <SectionTitleBadge align="left">運営・お問い合わせ窓口</SectionTitleBadge>
        </div>

        <dl className="divide-y divide-[var(--color-navy)]/10">
          {companyInfo.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[180px_1fr] gap-8 py-5 [@media(max-width:768px)]:grid-cols-1 [@media(max-width:768px)]:gap-2 [@media(max-width:768px)]:py-4"
            >
              <dt className="font-black text-[var(--color-primary)] text-[0.95rem] tracking-wider">
                {row.label}
              </dt>
              <dd className="font-bold text-[var(--color-navy)] text-[0.98rem] leading-[1.8]">
                {row.isBadgeList && Array.isArray(row.value) ? (
                  <div className="flex flex-wrap gap-2">
                    {row.value.map((v) => (
                      <span
                        key={v}
                        className="bg-[var(--color-bg-light)] rounded-full px-3.5 py-1 text-[0.85rem] font-bold text-[var(--color-navy)]"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                ) : Array.isArray(row.value) ? (
                  row.value.join(" / ")
                ) : (
                  row.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </ScrollReveal>
  );
}
