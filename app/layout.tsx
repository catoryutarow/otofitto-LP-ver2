import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-noto-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "オトフィット (OTOFITTO) | 音楽 × フィットネス ウェルネス体験",
  description:
    "世界チャンピオンがあなたの会社に来る。音楽とフィットネスを融合させた、社員が自然に動く参加型ウェルネス体験「オトフィット」。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
