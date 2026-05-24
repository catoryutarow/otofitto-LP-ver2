"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cta } from "@/lib/data";

const navItems = [
  { label: "オトフィットとは", href: "#intro" },
  { label: "指導者", href: "#instructors" },
  { label: "音楽サポート", href: "#music-support" },
  { label: "実例・効果", href: "#outcomes" },
  { label: "詳細", href: "#details" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open so the drawer feels modal
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      id="site-header"
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-secondary)] border-b border-[var(--color-navy)]/15"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 flex items-center justify-between h-14 md:h-16">
        <a href="#hero" className="flex items-center shrink-0" aria-label="オトフィット ホーム">
          <div className="relative w-20 md:w-24 aspect-[2000/440]">
            <Image src="/logo-jp.png" alt="オトフィット" fill className="object-contain" priority />
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 lg:gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.85rem] lg:text-sm font-black text-[var(--color-navy)] hover:opacity-60 transition-opacity"
            >
              {item.label}
            </a>
          ))}
          <a
            href={cta.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--color-navy)] text-white font-black text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            無料体験
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden relative w-10 h-10 -mr-2 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
        >
          <span
            className={`block w-6 h-[3px] bg-[var(--color-navy)] rounded-full transition-transform duration-200 ${
              open ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[3px] bg-[var(--color-navy)] rounded-full transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[3px] bg-[var(--color-navy)] rounded-full transition-transform duration-200 ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="site-header-drawer"
        className={`md:hidden fixed inset-x-0 top-14 bg-white border-t border-[var(--color-navy)]/10 transition-all duration-200 origin-top ${
          open ? "opacity-100 scale-y-100" : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        <nav className="px-6 py-6 flex flex-col">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-[1.05rem] font-black text-[var(--color-navy)] border-b border-[var(--color-navy)]/10 last:border-b-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href={cta.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex justify-center items-center bg-[var(--color-navy)] text-white font-black text-base py-3.5 rounded-xl"
          >
            無料体験を申し込む
          </a>
        </nav>
      </div>
    </header>
  );
}
