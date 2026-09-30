#!/bin/bash
set -euo pipefail

# ============================================================
#  formbase 資料請求フォーム作成スクリプト
#  用途: surveys に slug=otofitto-docs の資料請求フォームを新設
#        (corp-contact と同じ postMessage 計測契約 / form 名のみ変更)
#  冪等: slug が既に存在する場合は何もしない
#  ロールバック: サーバーで surveys/questions から該当 survey_id を DELETE
# ============================================================

SSH_KEY="${SSH_KEY:-$HOME/.ssh/spollup.pem}"
SSH_USER="${SSH_USER:-ec2-user}"
SSH_HOST="${SSH_HOST:-spollup.jp}"
APP_DIR="/usr/share/nginx/formbase"
REMOTE_TMP="/tmp/create_docs_survey.php"

TMP_PHP="$(mktemp /tmp/create_docs_survey.XXXXXX.php)"
trap 'rm -f "$TMP_PHP"' EXIT

cat > "$TMP_PHP" <<'PHP'
<?php
use Illuminate\Support\Str;

$exists = DB::table('surveys')->where('slug', 'otofitto-docs')->first();
if ($exists) {
    echo "SKIP: otofitto-docs は既に存在 (id={$exists->id})" . PHP_EOL;
    return;
}

$indexHead = <<<'HTML'
<script>
(function () {
  var sent = false;
  function notifyParent() {
    if (sent) return;
    if (location.pathname !== '/spollup/otofitto-docs/complete') return;
    sent = true;
    try {
      window.parent.postMessage(
        { type: 'formbase:submitted', form: 'otofitto-docs' },
        'https://spollup.jp'
      );
    } catch (e) {}
  }
  notifyParent();
  document.addEventListener('inertia:navigate', notifyParent);
  window.addEventListener('popstate', notifyParent);
  setInterval(notifyParent, 1000);
})();
</script>
HTML;

$indexHtml = <<<'HTML'
<div class="text-center">
オトフィット導入資料（料金目安・プログラム内容）のご請求フォームです。<br>
ご入力は1分で完了します。
</div>
HTML;

$thanksHtml = <<<'HTML'
<div class="text-xl text-center">
ご請求ありがとうございます。<br>
導入資料を、ご入力いただいたメールアドレスへ<br>
3営業日以内にお送りいたします。
</div>
HTML;

$now = now();
$surveyId = DB::table('surveys')->insertGetId([
    'created_at' => $now,
    'updated_at' => $now,
    'name'       => 'オトフィット導入資料ダウンロード',
    'root'       => 'spollup',
    'slug'       => 'otofitto-docs',
    'layout'     => 'SpollupLayout',
    'notify_to'  => 'info@spollup.jp',
    'index_html' => $indexHtml,
    'index_head' => $indexHead,
    'thanks_html' => $thanksHtml,
    'thanks_head' => null,
    'user_id'    => 1,
    'is_visible' => 1,
]);

$questions = [
    ['order' => 1, 'title' => 'お名前',              'type' => 1, 'before' => null],
    ['order' => 2, 'title' => '貴社名',              'type' => 1, 'before' => null],
    ['order' => 3, 'title' => 'ご連絡先メールアドレス', 'type' => 1, 'before' => null],
    ['order' => 4, 'title' => 'プライバシーポリシーに同意', 'type' => 3,
     'before' => '「プライバシーポリシー」をよくお読みいただき、内容にご同意いただける場合は、下記のチェックボックスにチェックを入れてください'],
];
foreach ($questions as $q) {
    DB::table('questions')->insert([
        'created_at'   => $now,
        'updated_at'   => $now,
        'survey_id'    => $surveyId,
        'order_number' => $q['order'],
        'title'        => $q['title'],
        'is_required'  => 1,
        'type'         => $q['type'],
        'uuid'         => (string) Str::uuid(),
        'condition'    => 0,
        'before_html'  => $q['before'],
    ]);
}

echo "OK: survey id={$surveyId} slug=otofitto-docs / questions=" .
     DB::table('questions')->where('survey_id', $surveyId)->count() . PHP_EOL;
PHP

echo "== 1. PHP スクリプト転送 =="
scp -i "$SSH_KEY" "$TMP_PHP" "${SSH_USER}@${SSH_HOST}:${REMOTE_TMP}"

echo "== 2. tinker で実行 =="
ssh -i "$SSH_KEY" "${SSH_USER}@${SSH_HOST}" \
  "cd ${APP_DIR} && sudo php artisan tinker ${REMOTE_TMP} && rm -f ${REMOTE_TMP}"

echo "== 3. 公開URL確認 =="
sleep 1
CODE=$(curl -s -o /dev/null -w "%{http_code}" https://formbase.jp/spollup/otofitto-docs)
echo "https://formbase.jp/spollup/otofitto-docs -> HTTP ${CODE}"
curl -s https://formbase.jp/spollup/otofitto-docs | grep -o "otofitto-docs\|formbase:submitted" | sort | uniq -c
