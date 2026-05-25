"use client";

// MusicSupport の「全部お任せ！吹き出し + 3人メンバー」ブロックを
// リアルタイムにスライダー調整できるチューニングページ。
// 各値を決めたら MusicSupport.tsx に反映する。

import Image from "next/image";
import { useState } from "react";
import { musicMembers } from "@/lib/data";

const CLIP = "polygon(7% 0, 100% 0, 93% 100%, 0 100%)";

const tagColor: Record<"green" | "blue" | "pink", string> = {
  green: "text-[var(--color-accent-green)]",
  blue: "text-[var(--color-primary)]",
  pink: "text-[var(--color-accent-red)]",
};

function Slider({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  unit = "px",
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step?: number;
  unit?: string;
}) {
  return (
    <label className="block">
      <div className="flex items-center justify-between text-[0.78rem] font-bold text-[var(--color-navy)] mb-1">
        <span>{label}</span>
        <span className="text-[var(--color-primary)] tabular-nums">
          {value}
          {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[var(--color-primary)]"
      />
    </label>
  );
}

function Select<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: readonly T[];
}) {
  return (
    <label className="block">
      <div className="text-[0.78rem] font-bold text-[var(--color-navy)] mb-1">
        {label}
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="w-full text-[0.85rem] font-bold border border-[var(--color-navy)]/30 rounded px-2 py-1 bg-white"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}

const ITEMS_OPTIONS = ["start", "center", "end"] as const;

export default function MusicSupportTunePage() {
  // 吹き出し
  const [bubblePadX, setBubblePadX] = useState(56);
  const [bubblePadY, setBubblePadY] = useState(28);
  const [bubblePadBottom, setBubblePadBottom] = useState(44);
  const [bubbleFontRem, setBubbleFontRem] = useState(2.5);
  const [bubbleOffsetX, setBubbleOffsetX] = useState(0);
  const [bubbleOffsetY, setBubbleOffsetY] = useState(0);

  // メンバー
  const [memberWidth, setMemberWidth] = useState(140);
  const [memberGap, setMemberGap] = useState(16);
  const [memberOffsetX, setMemberOffsetX] = useState(0);
  const [memberOffsetY, setMemberOffsetY] = useState(0);

  // レイアウト
  const [flexAlign, setFlexAlign] = useState<typeof ITEMS_OPTIONS[number]>("end");
  const [containerGap, setContainerGap] = useState(24);
  const [containerMaxW, setContainerMaxW] = useState(1080);

  return (
    <main className="min-h-screen bg-[var(--color-bg-light)] text-[var(--color-navy)]">
      {/* === Preview area === */}
      <section className="bg-white py-16 px-6 md:px-12 border-b-2 border-[var(--color-navy)]/20">
        <div
          className="mx-auto"
          style={{ maxWidth: `${containerMaxW}px` }}
        >
          <div
            className="flex w-full"
            style={{
              alignItems: flexAlign,
              gap: `${containerGap}px`,
              justifyContent: "space-between",
            }}
          >
            {/* 吹き出し */}
            <div
              style={{
                paddingLeft: `${bubblePadX}px`,
                paddingRight: `${bubblePadX * 0.5}px`,
                paddingTop: `${bubblePadY}px`,
                paddingBottom: `${bubblePadBottom}px`,
                backgroundImage: "url(/bubble2.png)",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                transform: `translate(${bubbleOffsetX}px, ${bubbleOffsetY}px)`,
                display: "inline-block",
              }}
            >
              <h3
                className="font-black leading-[1.1] text-[var(--color-navy)] whitespace-nowrap"
                style={{ fontSize: `${bubbleFontRem}rem` }}
              >
                全部お任せ！
              </h3>
            </div>

            {/* メンバー3人 */}
            <div
              className="flex shrink-0"
              style={{
                gap: `${memberGap}px`,
                alignItems: "flex-start",
                transform: `translate(${memberOffsetX}px, ${memberOffsetY}px)`,
              }}
            >
              {musicMembers.map((m) => (
                <div
                  key={m.name}
                  className="text-center"
                  style={{ width: `${memberWidth}px` }}
                >
                  <div
                    className="relative w-full aspect-[4/5] bg-white overflow-hidden mb-2"
                    style={{ clipPath: CLIP }}
                  >
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="160px"
                      className="object-cover object-top"
                    />
                  </div>
                  <p className={`text-[0.7rem] font-black tracking-[0.1em] ${tagColor[m.tagColor]}`}>
                    {m.roleTag}
                  </p>
                  <p className="text-[0.85rem] font-black text-[var(--color-navy)] mt-0.5 leading-tight whitespace-nowrap">
                    {m.name}
                  </p>
                  <p className="text-[0.65rem] font-bold text-[var(--color-text-muted)] mt-1 leading-[1.6]">
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
        </div>
      </section>

      {/* === Controls === */}
      <section className="px-6 md:px-12 py-10">
        <div className="max-w-[1080px] mx-auto">
          <h1 className="text-xl font-black mb-6">吹き出し + 3人 レイアウト調整</h1>

          <div className="grid md:grid-cols-3 gap-x-10 gap-y-5">
            <div className="space-y-4">
              <p className="text-[0.7rem] font-black tracking-[0.15em] text-[var(--color-text-muted)] border-b pb-1">
                吹き出し (BUBBLE)
              </p>
              <Slider label="padding 左/右" value={bubblePadX} onChange={setBubblePadX} min={16} max={120} />
              <Slider label="padding 上" value={bubblePadY} onChange={setBubblePadY} min={8} max={80} />
              <Slider label="padding 下 (しっぽ確保)" value={bubblePadBottom} onChange={setBubblePadBottom} min={16} max={120} />
              <Slider label="font-size" value={bubbleFontRem} onChange={setBubbleFontRem} min={1.2} max={4} step={0.05} unit="rem" />
              <Slider label="位置 X" value={bubbleOffsetX} onChange={setBubbleOffsetX} min={-100} max={100} />
              <Slider label="位置 Y" value={bubbleOffsetY} onChange={setBubbleOffsetY} min={-100} max={100} />
            </div>

            <div className="space-y-4">
              <p className="text-[0.7rem] font-black tracking-[0.15em] text-[var(--color-text-muted)] border-b pb-1">
                メンバー (TRIO)
              </p>
              <Slider label="メンバー幅" value={memberWidth} onChange={setMemberWidth} min={70} max={220} />
              <Slider label="メンバー間 gap" value={memberGap} onChange={setMemberGap} min={0} max={40} />
              <Slider label="位置 X" value={memberOffsetX} onChange={setMemberOffsetX} min={-100} max={100} />
              <Slider label="位置 Y" value={memberOffsetY} onChange={setMemberOffsetY} min={-100} max={100} />
            </div>

            <div className="space-y-4">
              <p className="text-[0.7rem] font-black tracking-[0.15em] text-[var(--color-text-muted)] border-b pb-1">
                レイアウト (CONTAINER)
              </p>
              <Select label="flex align (items-)" value={flexAlign} onChange={setFlexAlign} options={ITEMS_OPTIONS} />
              <Slider label="吹き出し ↔ 3人 gap" value={containerGap} onChange={setContainerGap} min={0} max={80} />
              <Slider label="コンテナ max-width" value={containerMaxW} onChange={setContainerMaxW} min={600} max={1400} />
            </div>
          </div>

          {/* 値ダンプ — 反映時のメモ用 */}
          <pre className="mt-8 p-4 bg-[var(--color-navy)] text-[#a7f3d0] text-[0.72rem] font-mono rounded overflow-x-auto leading-relaxed">
{`// 確定値メモ
bubble:
  pl-[${bubblePadX}px]  pr-[${Math.round(bubblePadX * 0.5)}px]
  pt-[${bubblePadY}px]  pb-[${bubblePadBottom}px]
  font-size: ${bubbleFontRem}rem
  translate: (${bubbleOffsetX}px, ${bubbleOffsetY}px)

member trio:
  w-[${memberWidth}px]
  gap-[${memberGap}px]
  translate: (${memberOffsetX}px, ${memberOffsetY}px)

container:
  items-${flexAlign}
  gap-[${containerGap}px]
  max-w-[${containerMaxW}px]`}
          </pre>
        </div>
      </section>
    </main>
  );
}
