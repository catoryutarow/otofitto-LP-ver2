import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";
import { musicMembers } from "@/lib/data";

const tagColor: Record<"green" | "blue" | "pink", string> = {
  green: "text-[var(--color-accent-green)]",
  blue: "text-[var(--color-primary)]",
  pink: "text-[var(--color-accent-red)]",
};

// Same parallelogram shape as Instructors so the LP reads with a single
// "framed portrait" identity across both performer and trainer sections.
const CLIP = "polygon(7% 0, 100% 0, 93% 100%, 0 100%)";

const accentBg: Record<"green" | "blue" | "pink", string> = {
  green: "var(--color-accent-green)",
  blue: "var(--color-primary)",
  pink: "var(--color-accent-red)",
};

export function MusicSupport() {
  return (
    <ScrollReveal as="section" id="music-support" className="bg-white section-pad relative overflow-hidden">
      {/* Decorative music notes scattered as background — pink-tinted on white,
          low opacity so they sit behind content as ambient rhythm. */}
      <Image
        src="/peoples/note-double.png"
        alt=""
        aria-hidden
        width={120}
        height={120}
        className="hidden md:block absolute top-24 right-[8%] w-16 lg:w-20 rotate-[12deg] pointer-events-none select-none"
      />
      <Image
        src="/peoples/note-single.png"
        alt=""
        aria-hidden
        width={80}
        height={80}
        className="hidden md:block absolute bottom-32 left-[6%] w-10 lg:w-12 -rotate-[8deg] pointer-events-none select-none"
      />
      <Image
        src="/peoples/note-single.png"
        alt=""
        aria-hidden
        width={80}
        height={80}
        className="hidden lg:block absolute top-[55%] right-[2%] w-8 rotate-[24deg] pointer-events-none select-none"
      />

      <div className="w-full max-w-[1180px] xl:max-w-[1280px] 2xl:max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-end justify-between gap-6 md:gap-12 mb-10 [@media(max-width:1000px)]:mb-8">
          <SectionTitleBadge align="left">
            音楽サポートチーム — 株式会社モテコロ
          </SectionTitleBadge>
          <div className="hidden md:flex items-end gap-2 shrink-0">
            <div className="relative w-[90px] h-[110px] lg:w-[110px] lg:h-[130px] xl:w-[130px] xl:h-[150px]">
              <Image src="/peoples/c3-green-girl.png" alt="" fill className="object-contain object-bottom" />
            </div>
            <div className="relative w-[90px] h-[110px] lg:w-[110px] lg:h-[130px] xl:w-[130px] xl:h-[150px]">
              <Image src="/peoples/c5-blue-smile.png" alt="" fill className="object-contain object-bottom" />
            </div>
          </div>
        </div>

        {/* === Pain → Solution リード ===
            6つの面倒タスクを列挙 → 大きな下向き矢印 → 「全部お任せ！」へ
            橋渡しする2ステップ。Left-aligned で読み下しやすく。 */}
        <div className="max-w-[820px] mb-14 md:mb-16 [@media(max-width:1000px)]:mb-12">
          {/* Before — 課題提示 */}
          <p className="text-[1.25rem] md:text-[1.55rem] font-black text-[var(--color-text-muted)] mb-5 [@media(max-width:1000px)]:text-[1.15rem]">
            音楽を使った研修? めんどくさそう…
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-7 gap-y-2 text-[0.95rem] md:text-base text-[var(--color-text-muted)] font-bold [@media(max-width:1000px)]:gap-x-5">
            {[
              "・機材手配",
              "・会場へのアジャスト",
              "・設営",
              "・当日のトラブル対応",
              "・演出",
              "・進行台本作成",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {/* Down arrow — denial → solution bridge */}
          <div className="my-7 md:my-8 pl-2" aria-hidden>
            <svg
              viewBox="0 0 60 90"
              width="48"
              height="72"
              className="md:w-[64px] md:h-[96px] text-[var(--color-accent-red)]"
              fill="currentColor"
            >
              <path d="M 18 0 L 42 0 L 42 50 L 60 50 L 30 90 L 0 50 L 18 50 Z" />
            </svg>
          </div>

          {/* After — 解決提示 */}
          <h3 className="text-[1.9rem] md:text-[2.5rem] xl:text-[2.8rem] font-black text-[var(--color-navy)] leading-[1.25] mb-7 [@media(max-width:1000px)]:text-[1.7rem]">
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">全部お任せ！</span>
              <span
                aria-hidden
                className="absolute left-0 right-0 bottom-1 h-3 md:h-4 bg-[var(--color-secondary)] -z-0"
              />
            </span>
          </h3>

          <div className="space-y-6">
            {/* (1) 未経験者の詰みポイント */}
            <div>
              <p className="text-[0.85rem] md:text-[0.9rem] font-black tracking-[0.15em] text-[var(--color-accent-red)] mb-2">
                未経験では、こんなところで詰みます
              </p>
              <p className="text-[0.95rem] md:text-base font-bold text-[var(--color-navy)] leading-[1.95] [@media(max-width:1000px)]:text-[0.9rem]">
                「曲を流せばいい」では済まないのが音楽研修。楽器ごとに違う機材、足りないケーブル一本、響きすぎる会場、押した進行、突然出ない音──どこか一つでもつまずくと、研修全体が止まります。
              </p>
            </div>

            {/* (2) 必要な技能・経験 */}
            <div>
              <p className="text-[0.85rem] md:text-[0.9rem] font-black tracking-[0.15em] text-[var(--color-primary)] mb-2">
                必要なのは「演奏より前」のスキル
              </p>
              <p className="text-[0.95rem] md:text-base font-bold text-[var(--color-navy)] leading-[1.95] [@media(max-width:1000px)]:text-[0.9rem]">
                企画意図から逆算した機材選定、下見で電源・響き・導線まで読み切る設計力、参加者層に合わせて曲・演出・台本を組み替える柔軟さ、全体進行を止めない判断軸。これらが揃って初めて「音楽を使った研修」が成立します。
              </p>
            </div>

            {/* (3) モテコロが持っている */}
            <div>
              <p className="text-[0.85rem] md:text-[0.9rem] font-black tracking-[0.15em] text-[var(--color-accent-green)] mb-2">
                モテコロが、ぜんぶ持っています
              </p>
              <p className="text-[0.95rem] md:text-base font-bold text-[var(--color-navy)] leading-[1.95] [@media(max-width:1000px)]:text-[0.9rem]">
                企業イベント・教育機関・福祉施設など、累計30以上の現場で「演奏家であり場のプロデューサー」として動いてきた音楽サポートチーム。機材は自社で保有し、足りなければ即手配。10分で演奏可能な状態を整え、富士通クライアントコンピューティング様のイベントでは「YMCA」を社内通称「FCCL」にもじって場を一気に温めるなど、現場ごとに最適化する企画・即興対応まで仕上げます。
              </p>
              <p className="text-[0.9rem] md:text-[0.95rem] font-bold text-[var(--color-text-muted)] leading-[1.95] mt-3 [@media(max-width:1000px)]:text-[0.85rem]">
                「会議室しか用意できない」「うちの環境で本当にできる?」──スピーカーのない場所も含めて、あらゆる環境を演奏空間に変えてきました。安心してご相談ください。
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-12 [@media(max-width:900px)]:gap-10 [@media(max-width:1000px)]:grid-cols-1 [@media(max-width:1000px)]:gap-12">
          {musicMembers.map((m) => (
            <div key={m.name} className="relative [@media(max-width:1000px)]:text-center">
              {/* Portrait — Instructors-style parallelogram with colored
                  backdrop offset behind the illustration. */}
              <div className="relative isolate w-full max-w-[160px] mb-5 [@media(max-width:1000px)]:max-w-[180px]">
                <div
                  aria-hidden
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundColor: accentBg[m.tagColor],
                    clipPath: CLIP,
                    transform: "translate(12px, 12px)",
                  }}
                />
                <div
                  className="relative z-10 w-full aspect-[4/5] bg-white overflow-hidden"
                  style={{ clipPath: CLIP }}
                >
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(max-width: 1000px) 90vw, 280px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <p className={`text-xs font-black mb-2 tracking-[0.15em] ${tagColor[m.tagColor]}`}>
                {m.roleTag}
              </p>
              <h3 className="text-2xl font-black mb-3 text-[var(--color-navy)] [@media(max-width:1000px)]:text-xl">
                {m.name}
              </h3>
              <p className="text-[0.92rem] font-bold text-[var(--color-text-muted)] leading-[1.9]">
                {m.details.map((d, i) => (
                  <span key={d}>
                    {d}
                    {i < m.details.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
