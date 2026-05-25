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
    <ScrollReveal as="section" id="music-support" className="bg-white pt-[100px] pb-[40px] md:pt-[100px] md:pb-[50px] [@media(max-width:1000px)]:pt-[60px] [@media(max-width:1000px)]:pb-[30px] relative overflow-hidden">
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
        className="hidden md:block absolute bottom-12 left-[1.5%] w-8 lg:w-10 -rotate-[8deg] pointer-events-none select-none"
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
          <p className="text-[1.25rem] md:text-[1.55rem] font-black text-[var(--color-text-muted)] mb-5 [@media(max-width:1000px)]:text-[1.1rem] [@media(max-width:480px)]:text-[0.95rem]">
            音楽を使った研修? めんどくさそう…
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-7 gap-y-2 text-[0.95rem] md:text-base text-[var(--color-text-muted)] font-bold [@media(max-width:1000px)]:gap-x-5 [@media(max-width:480px)]:text-[0.8rem] [@media(max-width:480px)]:gap-x-3 [@media(max-width:480px)]:gap-y-1.5">
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

          {/* After — SP: 縦 (吹き出し上→3人下) / PC: 横 (吹き出し左→3人右) */}
          <div className="flex flex-col items-center gap-5 mt-3 mb-8 md:flex-row md:items-start md:justify-between md:gap-10">
            {/* 全部お任せ！吹き出し
                SP=bubble3.png (しっぽ中央下) / PC=bubble2.png (しっぽ右下) */}
            <div
              className="
                inline-block shrink-0 bg-no-repeat
                bg-[url(/bubble3.png)] md:bg-[url(/bubble2.png)]
                [background-size:100%_100%]
                pl-[52px] pr-7 pt-7 pb-11
                md:pl-20 md:pr-10 md:pt-9 md:pb-14
              "
            >
              <h3 className="text-[1.7rem] md:text-[2.5rem] xl:text-[2.8rem] font-black text-[var(--color-navy)] leading-[1.1] whitespace-nowrap [@media(max-width:480px)]:text-[1.35rem]">
                全部お任せ！
              </h3>
            </div>

            {/* 3 members — PC/SP両方でアイコン+情報フル表示 */}
            <div className="flex items-start justify-center gap-3 md:gap-5 shrink-0 [@media(max-width:480px)]:gap-2">
              {musicMembers.map((m) => (
                <div
                  key={m.name}
                  className="text-center w-[122px] md:w-[160px] xl:w-[180px] [@media(max-width:480px)]:w-[96px]"
                >
                  <div
                    className="relative w-full aspect-[4/5] bg-white overflow-hidden mb-2"
                    style={{ clipPath: CLIP }}
                  >
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="(max-width: 1000px) 110px, 180px"
                      className="object-cover object-top"
                    />
                  </div>
                  <p className={`text-[0.62rem] md:text-[0.75rem] font-black tracking-[0.08em] md:tracking-[0.1em] mt-1 ${tagColor[m.tagColor]}`}>
                    {m.roleTag}
                  </p>
                  <p className="text-[0.78rem] md:text-[0.95rem] font-black text-[var(--color-navy)] mt-0.5 leading-tight whitespace-nowrap">
                    {m.name}
                  </p>
                  <p className="text-[0.6rem] md:text-[0.72rem] font-bold text-[var(--color-text-muted)] mt-1 md:mt-1.5 leading-[1.55] md:leading-[1.65] [word-break:keep-all]">
                    {m.details.map((d, i) => (
                      <span key={d} className="whitespace-nowrap inline-block">
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
            → 横にスワイプ
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
                  <p className="text-[0.88rem] md:text-[0.92rem] font-bold text-[var(--color-text-muted)] leading-[1.65]">
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
                  <p className="text-[0.88rem] md:text-[0.92rem] font-bold text-[var(--color-navy)] leading-[1.65]">
                    {row.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 締め — 累計実績 + 会議室不安への一言。上下バランス均等 */}
          <div className="pt-10 md:pt-12">
            <p className="text-[0.9rem] md:text-[0.95rem] font-bold text-[var(--color-text-muted)] leading-[1.95] [@media(max-width:1000px)]:text-[0.85rem]">
              企業イベント・教育機関・福祉施設まで、累計30以上の現場で
              <strong className="text-[var(--color-navy)]">「演奏家であり場のプロデューサー」</strong>
              として動いてきました。
              「会議室しか用意できない」「うちの環境で本当にできる?」── そんな環境こそ得意です。安心してご相談ください。
            </p>
          </div>
        </div>

      </div>
    </ScrollReveal>
  );
}
