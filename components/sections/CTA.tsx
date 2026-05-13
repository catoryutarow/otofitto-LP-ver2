import Image from "next/image";
import { cta } from "@/lib/data";

export function CTA() {
  return (
    <section
      id="cta"
      className="bg-[var(--color-navy)] text-white py-[100px] [@media(max-width:768px)]:py-16 relative overflow-hidden"
    >
      {/* Bottom-right floating character — anchored to section edge so it
          stays in the gutter on any viewport. Vertically below content so
          it can never overlap heading or contact info. */}
      <div className="absolute right-4 bottom-0 w-[180px] h-[220px] hidden md:block xl:w-[220px] xl:h-[270px] 2xl:w-[260px] 2xl:h-[310px] pointer-events-none">
        <Image src="/peoples/p2-grey-walk.png" alt="" fill className="object-contain object-bottom" />
      </div>

      <div className="w-full max-w-[1080px] xl:max-w-[1200px] 2xl:max-w-[1320px] mx-auto px-6 md:px-12 relative z-10">
        {/* Heading row — yellow char sits beside heading via flex, so it can't
            collide with the title text no matter how the viewport flexes. */}
        <div className="flex items-end justify-between gap-6 md:gap-12 mb-14 [@media(max-width:768px)]:mb-10">
          <div>
            <p className="text-xs font-black tracking-[0.25em] text-[var(--color-secondary)] mb-5">
              CONTACT
            </p>
            <h2 className="text-[2.4rem] md:text-[3rem] font-black leading-tight text-white [@media(max-width:768px)]:text-[1.8rem]">
              まずは話を
              <br className="md:hidden" />
              聞いてみる。
            </h2>
          </div>
          <div className="hidden md:flex items-end shrink-0">
            <div className="relative w-[110px] h-[140px] lg:w-[140px] lg:h-[170px] xl:w-[160px] xl:h-[190px]">
              <Image src="/peoples/p1-yellow.png" alt="" fill className="object-contain object-bottom" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 [@media(max-width:768px)]:grid-cols-1 [@media(max-width:768px)]:gap-8">
          {[
            { ...cta.phone, label: "電話でお問い合わせ" },
            { ...cta.email, label: "メールでお問い合わせ" },
          ].map((c) => (
            <a key={c.value} href={c.href} className="block group">
              <p className="text-[0.85rem] font-bold text-white/60 mb-2 tracking-wider">
                {c.label}
              </p>
              <p className="text-[1.6rem] md:text-[1.9rem] font-black text-white group-hover:text-[var(--color-secondary)] transition-colors break-all [@media(max-width:768px)]:text-[1.35rem]">
                {c.value}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-4 [@media(max-width:768px)]:mt-10">
          <span className="inline-flex items-center bg-[var(--color-secondary)] text-[var(--color-navy)] px-4 py-1.5 rounded-full text-[0.85rem] font-black">
            全国対応可
          </span>
          <p className="text-white/60 font-bold text-[0.9rem]">{cta.url}</p>
        </div>

        <p className="text-[0.85rem] text-white/50 leading-[1.9] font-bold mt-10 max-w-xl">
          本イベントはオトフィット実施チーム (株式会社モテコロ) と株式会社スポルアップが連携してご提供するサービスです。
        </p>
      </div>
    </section>
  );
}
