# オトフィットLPの離脱ポイント裏取り (読み取り専用)
# GA4プロパティ 370999441 (spollup.jp) に対して:
#   1. /otofitto/ と /contact/ のページ指標 (表示・セッション・エンゲージ)
#   2. 流入元別の /otofitto/ セッション (広告 google/cpc の割合)
#   3. LPランディング → /contact/ 到達の近似ファネル
#   4. generate_lead イベント数
# 実行: ~/websns-report-20260604/.venv/bin/python scripts/ga4_lp_funnel.py [START] [END]
import sys
from datetime import date

sys.path.insert(0, "/Users/ryutaro/websns-report-20260604/src")
from websns_report.auth import load_credentials

from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import (
    DateRange, Dimension, Filter, FilterExpression, FilterExpressionList,
    Metric, RunReportRequest,
)

PROPERTY = "properties/370999441"
START = sys.argv[1] if len(sys.argv) > 1 else "2026-08-31"
END = sys.argv[2] if len(sys.argv) > 2 else date.today().isoformat()

client = BetaAnalyticsDataClient(credentials=load_credentials())

def run(dims, mets, dim_filter=None, limit=50):
    req = RunReportRequest(
        property=PROPERTY,
        date_ranges=[DateRange(start_date=START, end_date=END)],
        dimensions=[Dimension(name=d) for d in dims],
        metrics=[Metric(name=m) for m in mets],
        dimension_filter=dim_filter,
        limit=limit,
    )
    return client.run_report(req)

def contains(field, value):
    return FilterExpression(filter=Filter(
        field_name=field,
        string_filter=Filter.StringFilter(
            value=value, match_type=Filter.StringFilter.MatchType.CONTAINS),
    ))

print(f"== 期間: {START} 〜 {END} ==\n")

# 1. ページ別指標
print("[1] ページ別指標 (/otofitto/, /contact/)")
r = run(["pagePath"],
        ["screenPageViews", "sessions", "activeUsers", "userEngagementDuration"],
        dim_filter=FilterExpression(or_group=FilterExpressionList(expressions=[
            contains("pagePath", "/otofitto"), contains("pagePath", "/contact")])))
for row in r.rows:
    path = row.dimension_values[0].value
    pv, sess, users, eng = (v.value for v in row.metric_values)
    eng_per_view = float(eng) / max(int(float(pv)), 1)
    print(f"  {path:40s} PV={pv:>5} sess={sess:>5} users={users:>5} 平均エンゲージ/PV={eng_per_view:.1f}秒")

# 2. /otofitto/ の流入元
print("\n[2] /otofitto/ 流入元 (sessionSourceMedium)")
r = run(["sessionSourceMedium"], ["sessions", "activeUsers", "userEngagementDuration"],
        dim_filter=contains("pagePath", "/otofitto"))
for row in sorted(r.rows, key=lambda x: -int(x.metric_values[0].value)):
    sm = row.dimension_values[0].value
    sess, users, eng = (v.value for v in row.metric_values)
    print(f"  {sm:35s} sess={sess:>5} users={users:>5} エンゲージ計={float(eng):.0f}秒")

# 3. LPランディングセッションのページ遷移 (どこまで到達したか)
print("\n[3] /otofitto/ ランディングセッションが見たページ (近似ファネル)")
r = run(["landingPage", "pagePath"], ["sessions"],
        dim_filter=contains("landingPage", "/otofitto"))
agg = {}
for row in r.rows:
    path = row.dimension_values[1].value
    agg[path] = agg.get(path, 0) + int(float(row.metric_values[0].value))
for path, sess in sorted(agg.items(), key=lambda x: -x[1])[:15]:
    print(f"  {path:40s} 到達セッション={sess}")

# 4. generate_lead / 主要イベント
print("\n[4] イベント数 (generate_lead ほか)")
r = run(["eventName"], ["eventCount"],
        dim_filter=FilterExpression(or_group=FilterExpressionList(expressions=[
            contains("eventName", "generate_lead"),
            contains("eventName", "form"),
            contains("eventName", "click")])))
for row in r.rows:
    print(f"  {row.dimension_values[0].value:35s} count={row.metric_values[0].value}")
print("\n完了")

# 5. generate_lead の内訳 (--detail 時のみ)
if "--detail" in sys.argv:
    print("\n[5] generate_lead の内訳 (ページ × 流入元)")
    r = run(["eventName", "pagePath", "sessionSourceMedium"], ["eventCount"],
            dim_filter=contains("eventName", "generate_lead"))
    for row in r.rows:
        _, path, sm = (d.value for d in row.dimension_values)
        print(f"  page={path:30s} src={sm:28s} count={row.metric_values[0].value}")
    print("\n[5b] form_submit / form_start の内訳")
    r = run(["eventName", "pagePath"], ["eventCount"],
            dim_filter=FilterExpression(or_group=FilterExpressionList(expressions=[
                contains("eventName", "form_submit"), contains("eventName", "form_start")])))
    for row in r.rows:
        ev, path = (d.value for d in row.dimension_values)
        print(f"  {ev:15s} page={path:30s} count={row.metric_values[0].value}")
