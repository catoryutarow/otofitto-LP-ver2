import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";
import { companyInfo } from "@/lib/data";

export function CompanyInfo() {
  return (
    <ScrollReveal as="section" id="company" className="bg-white pt-20 [@media(max-width:768px)]:pt-15">
      <div className="container-narrow">
        <SectionTitleBadge>運営・お問い合わせ窓口</SectionTitleBadge>
        <div className="w-full mb-15">
          {companyInfo.map((row, idx) => {
            const isLast = idx === companyInfo.length - 1;
            return (
              <div
                key={row.label}
                className={`flex py-[25px] [@media(max-width:768px)]:flex-col [@media(max-width:768px)]:items-start [@media(max-width:768px)]:py-[15px] ${
                  !isLast ? "border-b border-[#eee]" : ""
                }`}
              >
                <span className="w-[150px] font-bold text-[#888] text-[0.9rem] [@media(max-width:768px)]:w-full [@media(max-width:768px)]:mb-2 [@media(max-width:768px)]:text-[var(--color-navy)]">
                  {row.label}
                </span>
                {row.isBadgeList && Array.isArray(row.value) ? (
                  <div className="flex flex-wrap gap-2.5 flex-1">
                    {row.value.map((v) => (
                      <span
                        key={v}
                        className="bg-[var(--color-card-grey)] rounded-md px-4 py-1 text-[0.85rem] text-[#666]"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="flex-1 font-bold">
                    {Array.isArray(row.value) ? row.value.join(" / ") : row.value}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </ScrollReveal>
  );
}
