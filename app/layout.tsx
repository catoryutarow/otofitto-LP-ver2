import type { Metadata } from "next";
import {
  Inter,
  Noto_Sans_JP,
  M_PLUS_1,
  Yomogi,
  Yusei_Magic,
  Reggae_One,
  Rampart_One,
  Shippori_Mincho_B1,
  Hachi_Maru_Pop,
  DotGothic16,
  RocknRoll_One,
  Kaisei_Decol,
} from "next/font/google";
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

// Heading display font — strong, sporty, modern
const mplus1 = M_PLUS_1({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-mplus",
  display: "swap",
});

// Decorative fonts for catchcopy "あしらい" comparison page
// (Klee One dropped — Vercel build kept failing to fetch from fonts.gstatic.com)
const yomogi = Yomogi({ subsets: ["latin"], weight: ["400"], variable: "--font-yomogi", display: "swap" });
const yusei = Yusei_Magic({ subsets: ["latin"], weight: ["400"], variable: "--font-yusei", display: "swap" });
const reggae = Reggae_One({ subsets: ["latin"], weight: ["400"], variable: "--font-reggae", display: "swap" });
const rampart = Rampart_One({ subsets: ["latin"], weight: ["400"], variable: "--font-rampart", display: "swap" });
const shippori = Shippori_Mincho_B1({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-shippori", display: "swap" });
const hachimaru = Hachi_Maru_Pop({ subsets: ["latin"], weight: ["400"], variable: "--font-hachimaru", display: "swap" });
const dotgothic = DotGothic16({ subsets: ["latin"], weight: ["400"], variable: "--font-dot", display: "swap" });
const rocknroll = RocknRoll_One({ subsets: ["latin"], weight: ["400"], variable: "--font-rocknroll", display: "swap" });
const kaiseidecol = Kaisei_Decol({ subsets: ["latin"], weight: ["700"], variable: "--font-kaisei-decol", display: "swap" });

export const metadata: Metadata = {
  title: "オトフィット (OTOFITTO) | 音楽 × フィットネス ウェルネス体験",
  description:
    "世界チャンピオンがあなたの会社に来る。音楽とフィットネスを融合させた、社員が自然に動く参加型ウェルネス体験「オトフィット」。",
  // Search-engine deflection: site is in preview / not ready for public indexing
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${notoSansJP.variable} ${mplus1.variable} ${yomogi.variable} ${yusei.variable} ${reggae.variable} ${rampart.variable} ${shippori.variable} ${hachimaru.variable} ${dotgothic.variable} ${rocknroll.variable} ${kaiseidecol.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
