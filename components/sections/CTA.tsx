import { cta } from "@/lib/data";

export function CTA() {
  return (
    <section
      id="cta"
      className="bg-[var(--color-navy)] text-white py-[100px] [@media(max-width:768px)]:py-15 relative overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-20 h-20 bg-[var(--color-primary)] rounded-lg rotate-12 opacity-20 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[var(--color-secondary)] rounded-full -rotate-12 opacity-20 blur-xl"></div>

      <div className="container-narrow text-center relative z-10">
        <h2 className="text-[2.5rem] mb-12 font-black tracking-widest text-[var(--color-secondary)] [@media(max-width:768px)]:text-[1.8rem] [@media(max-width:768px)]:mb-10">
          まずは話を聞いてみる
        </h2>

        <div className="flex gap-8 justify-center mb-10 [@media(max-width:900px)]:flex-col [@media(max-width:900px)]:items-center">
          {[cta.phone, cta.email].map((c, i) => (
            <a
              key={c.value}
              href={c.href}
              className={`block w-[340px] max-w-full p-[30px] rounded-2xl border-[3px] border-white shadow-[6px_6px_0_0_rgba(255,255,255,0.2)] hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(255,255,255,0.3)] transition-all [@media(max-width:768px)]:px-5 [@media(max-width:768px)]:py-6 ${i === 0 ? "bg-[var(--color-primary)] text-white" : "bg-white text-[var(--color-navy)] border-transparent"}`}
            >
              <span className={`block text-[0.9rem] font-bold mb-2.5 ${i === 0 ? "text-white/80" : "text-[var(--color-primary)]"}`}>
                {i === 0 ? "電話でお問い合わせ" : "メールでお問い合わせ"}
              </span>
              <span className={`block text-[1.8rem] font-black [@media(max-width:768px)]:text-[1.4rem]`}>
                {c.value}
              </span>
            </a>
          ))}
        </div>

        <p className="opacity-70 mb-[30px] font-bold">{cta.url}</p>

        <div className="inline-block bg-[var(--color-secondary)] text-[var(--color-navy)] border-2 border-[var(--color-navy)] px-6 py-2 rounded-xl text-[0.9rem] font-black shadow-[4px_4px_0_0_rgba(245,176,27,0.5)] mb-[50px]">
          全国対応可
        </div>

        <p className="text-[0.85rem] opacity-60 leading-[1.8] font-bold">
          本イベントはオトフィット実施チーム (株式会社モテコロ) と
          <br />
          株式会社スポルアップが連携してご提供するサービスです。
        </p>
      </div>
    </section>
  );
}
