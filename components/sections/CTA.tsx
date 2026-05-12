import { cta } from "@/lib/data";

export function CTA() {
  return (
    <section
      id="cta"
      className="bg-[var(--color-navy)] text-white py-[100px] [@media(max-width:768px)]:py-15"
    >
      <div className="container-narrow text-center">
        <h2 className="text-[2rem] mb-15 font-bold [@media(max-width:768px)]:text-[1.5rem] [@media(max-width:768px)]:mb-10">
          まずは話を聞いてみる
        </h2>

        <div className="flex gap-5 justify-center mb-10 [@media(max-width:900px)]:flex-col [@media(max-width:900px)]:items-center">
          {[cta.phone, cta.email].map((c, i) => (
            <a
              key={c.value}
              href={c.href}
              className="block w-[320px] max-w-full p-[30px] rounded-[20px] bg-white/5 border border-white/10 text-white text-center hover:bg-white/10 transition-colors [@media(max-width:768px)]:px-5 [@media(max-width:768px)]:py-4"
            >
              <span className="block text-[0.8rem] opacity-50 mb-2.5">
                {i === 0 ? "電話" : "メール"}
              </span>
              <span className="block text-[1.5rem] font-bold [@media(max-width:768px)]:text-[1.2rem]">
                {c.value}
              </span>
            </a>
          ))}
        </div>

        <p className="opacity-50 mb-[30px]">{cta.url}</p>

        <div className="inline-block bg-[var(--color-purple)]/80 text-white px-5 py-1.5 rounded-full text-[0.85rem] font-bold mb-[50px]">
          全国対応可
        </div>

        <p className="text-[0.8rem] opacity-50 leading-[1.8]">
          本イベントはオトフィット実施チーム (株式会社モテコロ) と
          <br />
          株式会社スポルアップが連携してご提供するサービスです。
        </p>
      </div>
    </section>
  );
}
