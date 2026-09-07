#!/bin/bash
set -euo pipefail

# ============================================================
#  formbase 送信件数チェック (読み取り専用)
#  用途: corp-contact (surveys id=9) への送信が
#        指定日以降に何件あったかを確認する
#  使い方: ./scripts/check-formbase-submissions.sh [YYYY-MM-DD]
# ============================================================

SSH_KEY="${SSH_KEY:-$HOME/.ssh/spollup.pem}"
SSH_USER="${SSH_USER:-ec2-user}"
SSH_HOST="${SSH_HOST:-spollup.jp}"
SINCE="${1:-2026-08-14}"

ssh -i "${SSH_KEY}" -o ConnectTimeout=10 "${SSH_USER}@${SSH_HOST}" "
cd /usr/share/nginx/formbase
sudo php artisan tinker --execute='
  \$db = DB::connection()->getDatabaseName();
  \$tables = collect(DB::select(\"SELECT TABLE_NAME t FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = ? AND COLUMN_NAME = \\\"survey_id\\\"\", [\$db]))->pluck(\"t\")->unique();
  echo \"survey_id を持つテーブル: \" . \$tables->implode(\", \") . PHP_EOL;
  foreach (\$tables as \$t) {
    \$total = DB::table(\$t)->where(\"survey_id\", 9)->count();
    \$recent = DB::table(\$t)->where(\"survey_id\", 9)->where(\"created_at\", \">=\", \"${SINCE}\")->count();
    \$last = DB::table(\$t)->where(\"survey_id\", 9)->max(\"created_at\");
    echo \"[\$t] 累計: \$total / ${SINCE}以降: \$recent / 最終: \" . (\$last ?? \"-\") . PHP_EOL;
  }
'
"
