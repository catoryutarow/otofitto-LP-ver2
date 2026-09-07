#!/bin/bash
set -euo pipefail

# ============================================================
#  formbase 調査スクリプト (読み取り専用)
#  用途: spollup.jp と同居する formbase.jp アプリの実体確認
#        - nginx の formbase.jp サーバ設定とドキュメントルート
#        - アプリのフレームワーク (Laravel想定) の確認
#        - surveys テーブルの index_head / thanks_head 設定状況
#  注意: このスクリプトはサーバー状態を一切変更しない
# ============================================================

SSH_KEY="${SSH_KEY:-$HOME/.ssh/spollup.pem}"
SSH_USER="${SSH_USER:-ec2-user}"
SSH_HOST="${SSH_HOST:-spollup.jp}"

SSH_CMD="ssh -i ${SSH_KEY} -o ConnectTimeout=10 ${SSH_USER}@${SSH_HOST}"

echo "===== 1. SSH 疎通確認 ====="
$SSH_CMD "echo ok: \$(hostname)"

echo
echo "===== 2. nginx の formbase 設定 ====="
$SSH_CMD "sudo grep -rl 'formbase' /etc/nginx/ 2>/dev/null | head -5"
$SSH_CMD "sudo grep -rh -A3 'server_name.*formbase' /etc/nginx/ 2>/dev/null | head -20"

echo
echo "===== 3. formbase アプリのルートと種別 ====="
$SSH_CMD "sudo grep -rh 'root\|proxy_pass\|fastcgi_pass' /etc/nginx/conf.d/ /etc/nginx/sites-enabled/ 2>/dev/null | grep -v '^\s*#' | sort -u | head -15"
# Laravel 想定: artisan の場所を探す
$SSH_CMD "sudo find /usr/share/nginx /var/www /home -maxdepth 3 -name artisan 2>/dev/null | head -5"

echo
echo "===== 4. surveys テーブルの設定状況 (Laravel なら) ====="
# artisan が見つかったディレクトリで tinker を使い、corp-contact の設定を読む
$SSH_CMD '
APP_DIR=$(sudo find /usr/share/nginx /var/www /home -maxdepth 3 -name artisan 2>/dev/null | head -1 | xargs dirname 2>/dev/null)
if [ -n "$APP_DIR" ]; then
  echo "APP_DIR: $APP_DIR"
  cd "$APP_DIR"
  sudo php artisan tinker --execute="
    \$s = DB::table(\"surveys\")->where(\"slug\", \"corp-contact\")->first();
    echo \"id: \" . \$s->id . PHP_EOL;
    echo \"name: \" . \$s->name . PHP_EOL;
    echo \"--- index_head (フォーム画面のhead) ---\" . PHP_EOL;
    echo (\$s->index_head ?? \"(null)\") . PHP_EOL;
    echo \"--- thanks_head (完了画面のhead) ---\" . PHP_EOL;
    echo (\$s->thanks_head ?? \"(null)\") . PHP_EOL;
  " 2>/dev/null || echo "tinker 実行失敗 (PHPバージョンや権限を確認)"
else
  echo "artisan が見つからない → Laravel 以外か、別の場所にある"
fi
'
