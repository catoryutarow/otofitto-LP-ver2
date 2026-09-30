#!/bin/bash
set -euo pipefail

# ============================================================
#  formbase 資料請求フォーム サンクス文言更新
#  用途: otofitto-docs のサンクス画面を「3営業日以内」に変更
#  (資料PDF完成前の暫定運用のため、送付リードタイムを現実に合わせる)
# ============================================================

SSH_KEY="${SSH_KEY:-$HOME/.ssh/spollup.pem}"
SSH_USER="${SSH_USER:-ec2-user}"
SSH_HOST="${SSH_HOST:-spollup.jp}"
APP_DIR="/usr/share/nginx/formbase"
REMOTE_TMP="/tmp/update_docs_thanks.php"

TMP_PHP="$(mktemp /tmp/update_docs_thanks.XXXXXX.php)"
trap 'rm -f "$TMP_PHP"' EXIT

cat > "$TMP_PHP" <<'PHP'
<?php
$thanksHtml = <<<'HTML'
<div class="text-xl text-center">
ご請求ありがとうございます。<br>
導入資料を、ご入力いただいたメールアドレスへ<br>
3営業日以内にお送りいたします。
</div>
HTML;

$n = DB::table('surveys')->where('slug', 'otofitto-docs')->update([
    'thanks_html' => $thanksHtml,
    'updated_at'  => now(),
]);
echo $n === 1 ? "OK: thanks_html を3営業日版に更新" : "NG: 対象0件 (slug確認要)";
echo PHP_EOL;
PHP

scp -i "$SSH_KEY" "$TMP_PHP" "${SSH_USER}@${SSH_HOST}:${REMOTE_TMP}"
ssh -i "$SSH_KEY" "${SSH_USER}@${SSH_HOST}" \
  "cd ${APP_DIR} && sudo php artisan tinker ${REMOTE_TMP} && rm -f ${REMOTE_TMP}"
