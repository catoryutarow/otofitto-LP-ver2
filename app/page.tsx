import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Instructors } from "@/components/sections/Instructors";
import { MusicSupport } from "@/components/sections/MusicSupport";
import { MovingTeam } from "@/components/sections/MovingTeam";
import { Outcomes } from "@/components/sections/Outcomes";
import { Details } from "@/components/sections/Details";
import { RelatedService } from "@/components/sections/RelatedService";
import { CompanyInfo } from "@/components/sections/CompanyInfo";
import { CTA } from "@/components/sections/CTA";
import { SectionCurve } from "@/components/SectionCurve";

const WHITE = "#ffffff";
const LIGHT = "var(--color-bg-light)";
const GOLD = "var(--color-secondary)";

// 9 dividers each get a unique-feeling variant so no two adjacent transitions
// share the same shape. Mix of sag/bulge/S-curves creates "音楽的な揺らぎ".
export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <SectionCurve from={WHITE} to={LIGHT} variant="waveLR" />
      <Intro />
      <SectionCurve from={LIGHT} to={GOLD} variant="sag" />
      <Instructors />
      <SectionCurve from={GOLD} to={WHITE} variant="waveRL" />
      <MusicSupport />
      <SectionCurve from={WHITE} to={LIGHT} variant="bulge" />
      <MovingTeam />
      <SectionCurve from={LIGHT} to={WHITE} variant="waveLR" />
      <Outcomes />
      <SectionCurve from={WHITE} to={LIGHT} variant="sag" />
      <Details />
      <SectionCurve from={LIGHT} to={GOLD} variant="waveRL" />
      <RelatedService />
      <SectionCurve from={GOLD} to={WHITE} variant="bulge" />
      <CompanyInfo />
      <SectionCurve from={WHITE} to={LIGHT} variant="waveLR" />
      <CTA />
    </main>
  );
}
