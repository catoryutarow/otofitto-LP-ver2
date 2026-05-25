import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";

// Same parallelogram shape as Instructors/MusicSupport for LP-wide coherence
const CLIP = "polygon(7% 0, 100% 0, 93% 100%, 0 100%)";

export function RelatedService() {
  return (
    <ScrollReveal
      as="section"
      id="related-service"
      className="bg-[var(--color-secondary)] text-[var(--color-navy)] section-pad relative overflow-hidden"
    >
      {/* Decorative music notes — black notes on gold read fine at low opacity,
          giving the section a karaoke / live-music ambience. */}
      <Image
        src="/peoples/note-double.png"
        alt=""
        aria-hidden
        width={120}
        height={120}
        className="hidden md:block absolute top-16 right-[6%] w-20 lg:w-24 rotate-[-10deg] pointer-events-none select-none"
      />
      <Image
        src="/peoples/note-single.png"
        alt=""
        aria-hidden
        width={80}
        height={80}
        className="hidden md:block absolute bottom-12 left-[4%] w-10 lg:w-14 rotate-[16deg] pointer-events-none select-none"
      />
      <Image
        src="/peoples/note-single.png"
        alt=""
        aria-hidden
        width={80}
        height={80}
        className="hidden md:block absolute top-[55%] right-[4%] w-8 lg:w-10 -rotate-[20deg] pointer-events-none select-none"
      />

      <div className="w-full max-w-[1080px] xl:max-w-[1200px] 2xl:max-w-[1320px] mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-12 [@media(max-width:1000px)]:mb-8">
          <SectionTitleBadge align="left">関連サービス「生演奏カラオケ」</SectionTitleBadge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-14 items-start">
          {/* Live photos — 平行四辺形クリップ枠なし。1大2小の3枚構成 */}
          <div className="space-y-3 md:space-y-4">
            {/* Big top: バンド全体 */}
            <div
              className="relative w-full aspect-[16/10]"
              style={{ clipPath: CLIP }}
            >
              <Image
                src="/live-band.jpg"
                alt="生演奏カラオケ ライブの様子"
                fill
                sizes="(max-width: 1000px) 90vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            {/* Bottom row: ベース + ボーカル (各 50%) */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div
                className="relative w-full aspect-[3/4]"
                style={{ clipPath: CLIP }}
              >
                <Image
                  src="/live-bass.jpg"
                  alt="ベーシスト演奏"
                  fill
                  sizes="(max-width: 1000px) 45vw, 25vw"
                  className="object-cover object-center"
                />
              </div>
              <div
                className="relative w-full aspect-[3/4]"
                style={{ clipPath: CLIP }}
              >
                <Image
                  src="/live-vocal.jpg"
                  alt="ボーカル熱唱"
                  fill
                  sizes="(max-width: 1000px) 45vw, 25vw"
                  className="object-cover object-[50%_25%]"
                />
              </div>
            </div>
          </div>

          {/* Text column */}
          <div>
            <p className="text-xs font-black tracking-[0.2em] text-[var(--color-navy)] mb-4">
              SPECIAL OFFERS
            </p>
            <h3 className="text-[1.7rem] md:text-[2.1rem] font-black mb-6 leading-[1.4] text-[var(--color-navy)] [@media(max-width:1000px)]:text-[1.4rem]">
              <span className="whitespace-nowrap">「単なるつきあい」から、</span>
              <br />
              <span className="whitespace-nowrap">「思い出のライブ」</span>
              <span className="whitespace-nowrap">へ。</span>
            </h3>
            <p className="text-base font-black text-[var(--color-navy)] mb-5">
              周年・忘年会・内定式・成果報告会 ——
            </p>
            <p className="leading-[2] font-bold text-[var(--color-navy)] text-[1.05rem] mb-5">
              会社の節目には、プロの生演奏 × 社員の歌声で、
              <br />
              もうひとつの
              <span className="relative inline-block font-black text-[var(--color-navy)] mx-1 whitespace-nowrap">
                <span className="relative z-10">オトフィット</span>
                <span
                  aria-hidden
                  className="absolute left-0 right-0 bottom-0.5 h-2.5 bg-white/70 -z-0"
                />
              </span>
              を。
            </p>
            <p className="font-black text-[var(--color-navy)] text-[1.05rem] leading-[1.85] border-l-4 border-[var(--color-navy)] pl-5 mb-5">
              オトフィットの音楽サポートチームが、特別な一夜まで一貫伴走します。
            </p>
            <p className="text-[0.9rem] font-bold text-[var(--color-navy)] leading-[1.85]">
              詳細資料をご用意しています。お問い合わせ時にお気軽にお申し付けください。
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
