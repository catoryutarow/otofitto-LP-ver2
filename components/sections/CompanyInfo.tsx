import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";
import { companyInfo } from "@/lib/data";

export function CompanyInfo() {
  return (
    <ScrollReveal as="section" id="company" className="bg-[var(--color-bg-light)] pt-20 pb-10 [@media(max-width:768px)]:pt-15">
      <div className="container-narrow">
        <SectionTitleBadge>運営・お問い合わせ窓口</SectionTitleBadge>
        <div className="w-full mb-15 bg-white border-[3px] border-[var(--color-navy)] rounded-[var(--radius-card)] shadow-[8px_8px_0_0_rgba(31,41,55,1)] p-8 mt-10">
          {companyInfo.map((row, idx) => {
            const isLast = idx === companyInfo.length - 1;
            return (
              <div
                key={row.label}
                className={`flex py-[20px] [@media(max-width:768px)]:flex-col [@media(max-width:768px)]:items-start [@media(max-width:768px)]:py-[15px] ${
                  !isLast ? "border-b-2 border-dashed border-gray-200" : ""
                }`}
              >
                <span className="w-[180px] font-black text-[var(--color-primary)] text-[0.95rem] [@media(max-width:768px)]:w-full [@media(max-width:768px)]:mb-2">
                  {row.label}
                </span>
                {row.isBadgeList && Array.isArray(row.value) ? (
                  <div className="flex flex-wrap gap-2.5 flex-1">
                    {row.value.map((v) => (
                      <span
                        key={v}
                        className="bg-white border-2 border-[var(--color-navy)] rounded-lg px-4 py-1 text-[0.85rem] font-bold shadow-[2px_2px_0_0_rgba(31,41,55,1)]"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="flex-1 font-bold text-[var(--color-navy)]">
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
