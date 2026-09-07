#!/usr/bin/env bash
#
# PRタイムス提出用に、オトフィットLPの「写真+ロゴ」素材を
# 高画質の元データ(png/jpg、webpは除外)で集めてZIP化する。
#
# 出力: $OUT_DIR/otofitto-pr-assets.zip
# 構成: instructors/ live/ logo/ の3フォルダに整理
#
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC="$ROOT/public"
OUT_DIR="${1:-$ROOT/scratchpad}"   # 既定はリポジトリ外を汚さないようscratchpad相当
STAGE="$OUT_DIR/otofitto-pr-assets"
ZIP="$OUT_DIR/otofitto-pr-assets.zip"

# 講師・人物写真(横関さんら) — フォーマットごとに最良(高画質)のソースを採用
INSTRUCTORS=(
  "yokozeki.JPG"
  "yamamoto.jpg"
  "sarasa.jpg"
  "romu.jpg"
  "inoue.jpg"   # .jpg(296KB) > .png(58KB)
  "ito.png"     # 元データは.pngのみ
  "kato.png"    # 元データは.pngのみ
  "nishii.png"  # 元データは.pngのみ
)

# ライブ写真
LIVE=(
  "live-band.jpg"
  "live-bass.jpg"
  "live-vocal.jpg"
)

# ロゴ
LOGO=(
  "logo-jp.png"
  "logo-en.png"
  "spollup-logo.png"
)

rm -rf "$STAGE" "$ZIP"
mkdir -p "$STAGE/instructors" "$STAGE/live" "$STAGE/logo"

copy_group() {
  local destdir="$1"; shift
  for f in "$@"; do
    if [[ -f "$SRC/$f" ]]; then
      cp -p "$SRC/$f" "$destdir/"
      echo "  + ${destdir##*/}/$f"
    else
      echo "  ! MISSING: $f" >&2
    fi
  done
}

echo "Staging PR assets from $SRC ..."
copy_group "$STAGE/instructors" "${INSTRUCTORS[@]}"
copy_group "$STAGE/live"        "${LIVE[@]}"
copy_group "$STAGE/logo"        "${LOGO[@]}"

# ZIP化(staging親ディレクトリ基準で相対パスを綺麗に)
( cd "$OUT_DIR" && zip -r -q "$ZIP" "otofitto-pr-assets" )

echo
echo "Done."
echo "  Staged dir: $STAGE"
echo "  ZIP:        $ZIP"
echo
echo "内訳:"
find "$STAGE" -type f | sort | sed "s|$STAGE/|  |"
echo
echo "合計サイズ: $(du -sh "$STAGE" | cut -f1)"
echo "ZIPサイズ : $(du -h "$ZIP" | cut -f1)"
