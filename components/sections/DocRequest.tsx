"use client";

import { useEffect } from "react";
import { docRequest } from "@/lib/data";
import { ResponsiveImage } from "@/components/ResponsiveImage";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// formbase iframe からの送信完了通知を受けてマイクロCVを計測する。
// /contact/ の mu-plugin (spollup-cv-listener) と同じ postMessage 契約:
//   { type: "formbase:submitted", form: "<slug>" } を origin formbase.jp から受信。
// generate_lead (お問い合わせ) と分けるため、イベント名は document_request。
function useDocLeadTracking() {
  useEffect(() => {
    const KEY = "otofitto_doc_lead_sent";
    const handler = (e: MessageEvent) => {
      if (e.origin !== "https://formbase.jp") return;
      const d = e.data as { type?: string; form?: string };
      if (d?.type !== "formbase:submitted" || d?.form !== docRequest.formName) return;
      try {
        if (sessionStorage.getItem(KEY)) return;
        sessionStorage.setItem(KEY, "1");
      } catch {
        /* storage 不可でも計測は続行 (重複発火より欠測回避を優先) */
      }
      window.gtag?.("event", "document_request", {
        service_category: "corporate",
        form_location: "otofitto_lp",
        form_name: docRequest.formName,
      });
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);
}

export function DocRequest() {
  useDocLeadTracking();

  return (
    <section
      id="docs"
      className="bg-[var(--color-secondary)] text-[var(--color-navy)] py-[100px] [@media(max-width:1000px)]:py-16 relative overflow-hidden"
    >
      <div className="w-full max-w-[1080px] xl:max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        <p className="text-xs font-black tracking-[0.25em] mb-5 text-center">
          DOCUMENT
        </p>
        <h2 className="text-[2.4rem] md:text-[3rem] font-black leading-tight text-center mb-4 [@media(max-width:1000px)]:text-[1.8rem]">
          導入資料ダウンロード
          <span className="inline-block align-middle ml-3 bg-white text-[var(--color-navy)] text-[0.95rem] px-3 py-1 rounded-full tracking-normal">
            無料
          </span>
        </h2>
        <p className="text-center font-bold text-[var(--color-navy)]/80 leading-[1.9] mb-14 [@media(max-width:1000px)]:mb-10">
          料金の目安やプログラム内容をまとめた資料をお送りします。入力は1分で完了します。
        </p>

        <div className="grid grid-cols-2 gap-12 items-start [@media(max-width:1000px)]:grid-cols-1 [@media(max-width:1000px)]:gap-10">
          {/* 左: 資料の中身 + 実施風景 */}
          <div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-8 shadow-lg">
              <ResponsiveImage
                src="/session-office.jpg"
                alt="オフィスでのオトフィット実施風景"
                fill
                sizes="(max-width: 1000px) 90vw, 540px"
                className="object-cover object-[50%_38%]"
              />
            </div>
            <p className="font-black text-[1.1rem] mb-4">資料の内容</p>
            <ul className="space-y-3">
              {docRequest.contents.map((c) => (
                <li key={c} className="flex items-start font-bold leading-[1.7]">
                  <svg
                    className="w-5 h-5 mr-3 mt-1 shrink-0 text-[var(--color-primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* 右: formbase 資料請求フォーム (LP内で完結させる — 別ページ遷移が
              最大の離脱要因だったため、外部リンクにしない) */}
          <div className="bg-white rounded-2xl shadow-lg p-2 md:p-4">
            <iframe
              src={docRequest.formUrl}
              title="導入資料ダウンロード申し込みフォーム"
              className="w-full h-[640px] border-0 rounded-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
