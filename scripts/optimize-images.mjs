// 静的エクスポート (next.config.ts: output: "export") では Next.js の Image
// Optimization が無効化される。本スクリプトは public/ 配下の原画像をバックアップ
// しつつ、表示サイズに合わせてリサイズ + 圧縮 (JPG) と WebP 生成を行う。
//
// 使い方:
//   node scripts/optimize-images.mjs
//
// 二回目以降の実行は backup を作り直さず、backup から再生成する (冪等)。
// 原画像を更新した場合は public/originals/<file> を一旦削除してから走らせる。

import sharp from "sharp";
import { readdir, mkdir, copyFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");
// public/ の外に置く: public/ 配下は Next.js が out/ に丸ごとコピーするため、
// バックアップを public/originals/ に置くと不要な 60MB が配信されてしまう。
const BACKUP = path.join(ROOT, "image-originals");

// カテゴリ別の最大幅。height は維持アスペクトで自動算出。
//   - jpg: そのまま public/<file>.jpg を上書き + 同階層に <file>.webp を生成
//   - png: 原ファイルは触らない (透過保持) で WebP のみ生成
const TARGETS = [
  { dir: "",        match: /\.(jpe?g)$/i, maxW: 1400, kind: "jpg" },
  // public 直下の PNG (kato/ito/nishii など) も WebP 化対象。
  // ResponsiveImage は <source type="image/webp"> を必ず出すので、対応する
  // .webp が存在しないと "404 → fallback に戻らない" 仕様で画像が消える。
  { dir: "",        match: /\.png$/i,     maxW: 900,  kind: "png" },
  { dir: "peoples", match: /\.png$/i,     maxW: 900,  kind: "png" },
];

const JPG_QUALITY = 82;
const WEBP_QUALITY = 80;

// 画質を維持したいファイルはここに記載。一括圧縮の対象から外して、
// 手動配置の高画質版が optimize-images.mjs の再実行で上書きされるのを防ぐ。
// 例: inoue.jpg は元解像度が小さく (1200x800) 圧縮余地が少ないため除外。
const SKIP_FILES = new Set([
  "inoue.jpg",
]);

async function exists(p) {
  try { await stat(p); return true; } catch { return false; }
}

function fmtKB(n) { return `${(n / 1024).toFixed(0)}KB`; }

await mkdir(BACKUP, { recursive: true });

let totalBefore = 0, totalAfter = 0;

for (const t of TARGETS) {
  const dir = path.join(PUBLIC, t.dir);
  const backupDir = path.join(BACKUP, t.dir);
  await mkdir(backupDir, { recursive: true });

  const files = (await readdir(dir)).filter((f) => t.match.test(f));
  for (const f of files) {
    if (SKIP_FILES.has(f)) {
      console.log(`skip:      ${path.relative(ROOT, path.join(dir, f))}`);
      continue;
    }
    const src = path.join(dir, f);
    const orig = path.join(backupDir, f);

    if (!(await exists(orig))) {
      await copyFile(src, orig);
    }

    const ext = path.extname(f);
    const base = f.slice(0, -ext.length);
    const webp = path.join(dir, `${base}.webp`);

    if (t.kind === "jpg") {
      await sharp(orig)
        .rotate()
        .resize({ width: t.maxW, withoutEnlargement: true })
        .jpeg({ quality: JPG_QUALITY, mozjpeg: true })
        .toFile(src);
    }
    // png は原ファイル維持

    await sharp(orig)
      .rotate()
      .resize({ width: t.maxW, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toFile(webp);

    const before = (await stat(orig)).size;
    const after = (await stat(src)).size;
    const w = (await stat(webp)).size;
    totalBefore += before;
    totalAfter += after + w;

    const rel = path.relative(ROOT, src);
    console.log(
      `${rel.padEnd(40)} ${fmtKB(before).padStart(8)} → ` +
      `${fmtKB(after).padStart(8)} (${t.kind}) + ${fmtKB(w).padStart(8)} (webp)`
    );
  }
}

console.log(
  `\n合計: ${fmtKB(totalBefore)} → ${fmtKB(totalAfter)} ` +
  `(${(100 - (totalAfter / totalBefore) * 100).toFixed(1)}% 削減)`
);
