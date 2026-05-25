"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";
import { musicMembers, type MusicMember } from "@/lib/data";

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
  // SP only — tap mini icon to open profile modal
  const [active, setActive] = useState<MusicMember | null>(null);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [active]);

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
        <div className="flex items-end justify-between gap-6 md:gap-12 mb-10 [@media(max-width:1000px)]:mb-8 [@media(max-width:1000px)]:justify-center">
          <SectionTitleBadge align="center" size="sm">
            <span className="whitespace-nowrap">音楽サポートチーム</span>
            <span className="whitespace-nowrap"> — 株式会社モテコロ</span>
          </SectionTitleBadge>
          <div className="hidden lg:flex items-end gap-2 shrink-0">
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
        <div className="max-w-[820px] md:max-w-[1080px] mx-auto mb-14 md:mb-16 [@media(max-width:1000px)]:mb-12">
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

          {/* Curly arrow — 手描きPNGを100°回転して下向きに配置 */}
          <div className="mt-5 md:mt-7 flex justify-center leading-none" aria-hidden>
            <div
              className="relative w-[110px] h-[110px] md:w-[140px] md:h-[140px]"
              style={{ transform: "scaleX(-1) rotate(130deg)" }}
            >
              <Image
                src="/arrow-curly.png"
                alt=""
                fill
                sizes="140px"
                className="object-contain"
              />
            </div>
          </div>

          {/* After — 「全部お任せ！」を吹き出し (bubble2) に格納し、
              3人メンバーが横に並んで「言っている」関係性に。
              PC/SP 両方で吹き出し+3人を横並びにする。 */}
          <div className="flex items-end justify-between gap-3 md:gap-10 mt-3 mb-7">
            {/* 全部お任せ！吹き出し */}
            <div
              className="inline-block shrink-0 md:pl-[72px] md:pr-[36px] md:pt-[33px] md:pb-[44px] pl-7 pr-3 pt-4 pb-7 lg:translate-x-[100px] md:-translate-y-[100px]"
              style={{
                backgroundImage: "url(/bubble2.png)",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h3 className="text-[1.3rem] md:text-[2.5rem] font-black text-[var(--color-navy)] leading-[1.1] whitespace-nowrap">
                全部お任せ！
              </h3>
            </div>

            {/* Compact member trio — PC: 情報あり、SP: アイコンのみタップ可 */}
            <div className="flex items-end gap-1.5 md:gap-4 shrink-0 lg:-translate-x-[100px]">
              {musicMembers.map((m) => (
                <div key={m.name} className="text-center w-[58px] md:w-[136px]">
                  <button
                    type="button"
                    onClick={() => setActive(m)}
                    className="md:pointer-events-none relative w-full aspect-[4/5] bg-white overflow-hidden mb-1 md:mb-2 cursor-pointer md:cursor-default"
                    style={{ clipPath: CLIP }}
                    aria-label={`${m.name} のプロフィールを開く`}
                  >
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="(max-width: 1000px) 60px, 140px"
                      className="object-cover object-top"
                    />
                  </button>
                  <p className={`hidden md:block text-[0.7rem] font-black tracking-[0.1em] ${tagColor[m.tagColor]}`}>
                    {m.roleTag}
                  </p>
                  <p className="hidden md:block text-[0.85rem] font-black text-[var(--color-navy)] mt-0.5 leading-tight whitespace-nowrap">
                    {m.name}
                  </p>
                  <p className="hidden md:block text-[0.65rem] font-bold text-[var(--color-text-muted)] mt-1 leading-[1.6]">
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

          {/* SP hint — 横スワイプで全6項目 */}
          <p className="md:hidden flex items-center gap-2 text-[0.7rem] font-black tracking-[0.15em] text-[var(--color-text-muted)] mt-7 mb-3">
            → 横スワイプで全6項目
          </p>

          {/* 6 task pairs — PC: 2 cols × 3 rows grid / SP: 横スクロールカルーセル */}
          <div
            className="
              flex md:grid md:grid-cols-2
              overflow-x-auto md:overflow-visible
              snap-x snap-mandatory md:snap-none
              gap-4 md:gap-x-12 md:gap-y-11 lg:gap-x-16
              -mx-6 md:mx-0 px-6 md:px-0
              pb-4 md:pb-0
              md:border-t md:border-[var(--color-navy)]/10 md:pt-10
              [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            "
          >
            {[
              {
                task: "機材手配",
                problem: "楽器ごとに必要機材が違い、ケーブル一本・ミキサー入力一つ足りないだけで楽器が鳴らせない。",
                solution: "企画意図に合わせた機材選定を、自社保有の機材＋必要に応じた即レンタル手配で過不足なく実現。",
              },
              {
                task: "会場へのアジャスト",
                problem: "必要なスペースを読み誤り、音は聞き取りづらく参加者が動きづらい体験になってしまう。",
                solution: "電源位置・響き方・導線・講師動線まで下見で読み切り、会議室1室の環境でも音楽空間に仕立てる。",
              },
              {
                task: "設営",
                problem: "本番直前まで配線にかかりきり。参加者を待たせ、研修の入りから熱量を逃す。",
                solution: "10分あれば演奏可能な状態に。撤収まで含めた段取りで、会場利用時間を圧迫しない。",
              },
              {
                task: "当日のトラブル対応",
                problem: "突然音が出ない／時間が押す／飛び込みの来賓──予測外の場面で固まり、全体が止まる。",
                solution: "場数で培った「全体進行を止めない」判断軸で、想定外も冷静にリカバリーして場をつなぐ。",
              },
              {
                task: "演出",
                problem: "流行曲をただ流すだけの一方通行プログラムに。参加者を巻き込めず、空気が温まらない。",
                solution: "参加者属性・リクエスト・社歌など、クライアント固有の要素を軸に企画。会場全体を巻き込む構成。",
              },
              {
                task: "進行台本作成",
                problem: "時間管理ができず、体験と体験をつなぐ言葉が出てこない。流れがぶつ切りになる。",
                solution: "クライアントごとにフルカスタム。間・熱量・転換まで計算した台本で、90分が一本の物語になる。",
              },
            ].map((row) => (
              <div
                key={row.task}
                className="shrink-0 w-[86%] md:w-auto snap-start bg-white md:bg-transparent rounded-xl md:rounded-none border md:border-0 border-[var(--color-navy)]/10 p-4 md:p-0"
              >
                <p className="text-[0.85rem] md:text-[0.9rem] font-black tracking-[0.15em] text-[var(--color-navy)] mb-4">
                  {row.task}
                </p>
                {/* 課題 */}
                <div className="flex gap-2.5 mb-3.5">
                  <span
                    aria-hidden
                    className="shrink-0 mt-[3px] inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[var(--color-accent-red)] text-white text-[0.65rem] font-black"
                  >
                    ✕
                  </span>
                  <p className="text-[0.88rem] md:text-[0.92rem] font-bold text-[var(--color-text-muted)] leading-[1.85]">
                    {row.problem}
                  </p>
                </div>
                {/* 解決 */}
                <div className="flex gap-2.5">
                  <span
                    aria-hidden
                    className="shrink-0 mt-[3px] inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[var(--color-accent-green)] text-white text-[0.65rem] font-black"
                  >
                    ✓
                  </span>
                  <p className="text-[0.88rem] md:text-[0.92rem] font-bold text-[var(--color-navy)] leading-[1.85]">
                    {row.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 締め — 累計実績 + 会議室不安への一言 */}
          <p className="text-[0.9rem] md:text-[0.95rem] font-bold text-[var(--color-text-muted)] leading-[1.95] mt-7 [@media(max-width:1000px)]:text-[0.85rem]">
            企業イベント・教育機関・福祉施設まで、累計30以上の現場で
            <strong className="text-[var(--color-navy)]">「演奏家であり場のプロデューサー」</strong>
            として動いてきました。
            「会議室しか用意できない」「うちの環境で本当にできる?」── そんな環境こそ得意です。安心してご相談ください。
          </p>
        </div>

        {/* SP profile modal — tap mini icon to open */}
        {active && (
          <div
            className="md:hidden fixed inset-0 z-[80] bg-black/50 flex items-center justify-center p-5"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.name} プロフィール`}
          >
            <div
              className="relative bg-white rounded-2xl w-full max-w-[360px] p-6 pt-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 w-8 h-8 inline-flex items-center justify-center rounded-full bg-[var(--color-navy)] text-white text-sm font-black"
                aria-label="閉じる"
              >
                ✕
              </button>
              <div
                className="relative w-full max-w-[180px] aspect-[4/5] mx-auto bg-white overflow-hidden mb-5"
                style={{
                  clipPath: CLIP,
                  outline: `4px solid ${accentBg[active.tagColor]}`,
                  outlineOffset: "-4px",
                }}
              >
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  sizes="180px"
                  className="object-cover object-top"
                />
              </div>
              <p className={`text-center text-[0.78rem] font-black tracking-[0.15em] mb-1 ${tagColor[active.tagColor]}`}>
                {active.roleTag}
              </p>
              <h3 className="text-center text-[1.4rem] font-black text-[var(--color-navy)] mb-4">
                {active.name}
              </h3>
              <ul className="space-y-1.5 text-[0.9rem] font-bold text-[var(--color-text-muted)] leading-[1.65]">
                {active.details.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="shrink-0 inline-block w-1.5 h-1.5 mt-[0.55em] bg-[var(--color-secondary)] rounded-sm" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

      </div>
    </ScrollReveal>
  );
}
