import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitleBadge } from "@/components/SectionTitleBadge";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { musicMembers } from "@/lib/data";
import { asset } from "@/lib/asset";

// Same parallelogram shape as Instructors so the LP reads with a single
// "framed portrait" identity across both performer and trainer sections.
const CLIP = "polygon(7% 0, 100% 0, 93% 100%, 0 100%)";

// 「〇〇無双」を判子・スタンプ風に演出するための朱印カラー。
// 既存のメンバーカラー (緑/青/赤) をベースに、白文字とのAAコントラストを
// 担保するため一段濃い色に置き換えている (#10b981 → #047857 等)。
const stampColor: Record<"green" | "blue" | "pink", string> = {
  green: "#047857",
  blue:  "#1e40af",
  pink:  "#be123c",
};

// 手押し感: メンバーごとに微妙に違う傾き角度。完全に同じ角度だと
// プリント感が出てしまい、判子感が損なわれる。
// 基準は -3deg (ギター無双で確認した自然な角度)。西井だけ逆方向に軽く
// 振って「同じ方向にプリントされた感」を回避。
const STAMP_ROT = ["-3.5deg", "-3deg", "2deg"] as const;

// 凹凸4辺の clip-path: 完全な矩形ではなく、判子のインクのにじみ・かすれを
// 模した微小な凹凸を入れる。8頂点で四辺それぞれにラフネス。
const STAMP_CLIP =
  "polygon(2% 5%, 5% 0%, 97% 3%, 100% 8%, 98% 95%, 95% 100%, 4% 97%, 0% 92%)";

export function MusicSupport() {
  return (
    <ScrollReveal as="section" id="music-support" className="bg-white pt-[100px] pb-[40px] md:pt-[100px] md:pb-[50px] [@media(max-width:1000px)]:pt-[60px] [@media(max-width:1000px)]:pb-[30px] relative overflow-hidden">
      {/* Decorative music notes scattered as background — pink-tinted on white,
          low opacity so they sit behind content as ambient rhythm. */}
      <ResponsiveImage
        src="/peoples/note-double.png"
        alt=""
        width={120}
        height={120}
        className="hidden md:block absolute top-24 right-[8%] w-16 lg:w-20 rotate-[12deg] pointer-events-none select-none"
      />
      <ResponsiveImage
        src="/peoples/note-single.png"
        alt=""
        width={80}
        height={80}
        className="hidden md:block absolute bottom-12 left-[1.5%] w-8 lg:w-10 -rotate-[8deg] pointer-events-none select-none"
      />
      <ResponsiveImage
        src="/peoples/note-single.png"
        alt=""
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
              <ResponsiveImage src="/peoples/c3-green-girl.png" alt="" fill className="object-contain object-bottom" />
            </div>
            <div className="relative w-[90px] h-[110px] lg:w-[110px] lg:h-[130px] xl:w-[130px] xl:h-[150px]">
              <ResponsiveImage src="/peoples/c5-blue-smile.png" alt="" fill className="object-contain object-bottom" />
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
                [background-image:var(--bubble-sm)] md:[background-image:var(--bubble-md)]
                [background-size:100%_100%]
                pl-[52px] pr-7 pt-7 pb-11
                md:pl-20 md:pr-10 md:pt-9 md:pb-14
              "
              style={{
                ["--bubble-sm" as string]: `url(${asset("/bubble3.png")})`,
                ["--bubble-md" as string]: `url(${asset("/bubble2.png")})`,
              }}
            >
              <h3 className="text-[1.7rem] md:text-[2.5rem] xl:text-[2.8rem] font-black text-[var(--color-navy)] leading-[1.1] whitespace-nowrap [@media(max-width:480px)]:text-[1.35rem]">
                全部お任せ！
              </h3>
            </div>

            {/* 3 members — PC/SP両方でアイコン+情報フル表示 */}
            <div className="flex items-start justify-center gap-2 md:gap-5 shrink-0 [@media(max-width:480px)]:gap-1.5">
              {musicMembers.map((m, idx) => (
                <div
                  key={m.name}
                  className="text-center w-[156px] md:w-[160px] xl:w-[180px] [@media(max-width:480px)]:w-[130px] overflow-hidden"
                >
                  <div
                    className="relative w-full aspect-[4/5] bg-white overflow-hidden mb-2"
                    style={{ clipPath: CLIP }}
                  >
                    <ResponsiveImage
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="(max-width: 1000px) 110px, 180px"
                      className="object-cover object-top"
                    />
                  </div>
                  {/* 「〇〇無双」: 朱印・スタンプ風バッジ。
                      - clip-path で四辺に微小凹凸 = 手押し感
                      - メンバーごとに違う傾き = プリントではなく押印感
                      - 白文字 + 濃色背景で AA コントラスト確保 */}
                  <div className="flex justify-center my-2 md:my-2.5">
                    <span
                      className="inline-block px-3 py-[3px] md:px-3.5 md:py-1 text-white font-black text-[0.82rem] md:text-[0.98rem] [@media(max-width:480px)]:text-[0.72rem] leading-tight tracking-[0.05em] whitespace-nowrap"
                      style={{
                        backgroundColor: stampColor[m.tagColor],
                        transform: `rotate(${STAMP_ROT[idx % STAMP_ROT.length]})`,
                        clipPath: STAMP_CLIP,
                        fontFamily: "var(--font-mplus), 'Noto Sans JP', sans-serif",
                      }}
                    >
                      {m.roleTag}
                    </span>
                  </div>
                  <p className="text-[0.78rem] md:text-[0.95rem] font-black text-[var(--color-navy)] mt-0.5 leading-tight whitespace-nowrap">
                    {m.name}
                  </p>
                  <p className="text-[0.6rem] md:text-[0.72rem] font-bold text-[var(--color-text-muted)] mt-1 md:mt-1.5 leading-[1.55] md:leading-[1.65] [word-break:keep-all]">
                    {m.details.map((d, i) => (
                      <span key={d} className="block">
                        {d}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel hint — SP/PC 共通で「横へスクロール」を案内 */}
          <p className="flex items-center gap-2 text-[0.7rem] font-black tracking-[0.15em] text-[var(--color-text-muted)] mt-7 mb-3">
            → 横にスクロール
          </p>

          {/* 6 task pairs — SP/PC 共通の横スクロールカルーセル。
              SP: 1 枚見える (86%) / md: 2 枚見える (42%) / lg: 3 枚見える (31%) */}
          <div
            className="
              flex
              overflow-x-auto
              snap-x snap-mandatory
              gap-4 md:gap-5 lg:gap-6
              -mx-6 md:-mx-12 px-6 md:px-12
              pb-4
              [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            "
          >
            {[
              {
                task: "機材手配",
                problem: "ケーブル1本、入力1つ。何度確認しても、当日に抜けが出る…。",
                solution: "機材の9割は普段から自社で保有。不足分だけ手配するので、荷物は最小限です。",
              },
              {
                task: "会場へのアジャスト",
                problem: "部屋ごとに、響きも広さも違う。立ってみるまで、本当のことは見えない…。",
                solution: "事前下見で全項目をチェック。会議室1部屋でも、音楽の場として成立させます！",
              },
              {
                task: "設営",
                problem: "開始時刻が近づくほど配線に追われる。空気は温まる前に冷えていく…。",
                solution: "設営10分、撤収もすぐ。会場の借用時間を圧迫しません。",
              },
              {
                task: "当日のトラブル対応",
                problem: "音が出ない、時間が押す、想定外の来賓まで現れる。たいてい同時に来る…。",
                solution: "場数だけは積んできました。裏でつなぐので、参加者には気づかれません。",
              },
              {
                task: "演出",
                problem: "流行りの曲を流すだけ、有名な曲を歌うだけ。それでは、半数は観客のまま終わる。",
                solution: "御社の文化・社風・社歌までお聞きして、誰に何を届けるか先に決めます。",
              },
              {
                task: "進行台本作成",
                problem: "体験と体験の間、つなぎの一言が出てこない。雑にやると、流れがちぎれる。",
                solution: "1社ごとに台本を書き起こします。間・転換・つなぎの言葉まで。90分がひとつの流れに！",
              },
            ].map((row) => (
              <div
                key={row.task}
                className="shrink-0 w-[86%] md:w-[42%] lg:w-[31%] snap-start bg-[var(--color-bg-light)] px-7 md:px-9 py-6 md:py-7 min-h-[260px] md:min-h-[280px]"
                style={{
                  clipPath: CLIP,
                  filter: "drop-shadow(0 4px 14px rgba(31,41,55,0.12))",
                }}
              >
                <p className="text-[0.85rem] md:text-[0.9rem] font-black tracking-[0.15em] text-[var(--color-navy)] mb-4">
                  {row.task}
                </p>
                {/* 課題 — 1文ずつ block 改行して縦に伸ばす */}
                <div className="flex gap-2.5 mb-4">
                  <span
                    aria-hidden
                    className="shrink-0 mt-[3px] inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[var(--color-accent-red)] text-white text-[0.65rem] font-black"
                  >
                    ✕
                  </span>
                  <p className="flex-1 text-[0.85rem] md:text-[0.9rem] font-bold text-[var(--color-text-muted)] leading-[1.7]">
                    {row.problem}
                  </p>
                </div>
                {/* 解決 — 1文ずつ block 改行 */}
                <div className="flex gap-2.5">
                  <span
                    aria-hidden
                    className="shrink-0 mt-[3px] inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[var(--color-accent-green)] text-white text-[0.65rem] font-black"
                  >
                    ✓
                  </span>
                  <p className="flex-1 text-[0.85rem] md:text-[0.9rem] font-bold text-[var(--color-navy)] leading-[1.7]">
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
              として動いてきました。<br/>
              「会議室しか用意できない」「うちの環境で本当にできる?」 <br/>そんな環境こそ得意です。安心してご相談ください。
            </p>
          </div>
        </div>

      </div>
    </ScrollReveal>
  );
}
