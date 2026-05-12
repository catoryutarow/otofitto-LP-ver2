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

export default function Page() {
  return (
    <main>
      <Hero />
      <Intro />
      <Instructors />
      <MusicSupport />
      <MovingTeam />
      <Outcomes />
      <Details />
      <RelatedService />
      <CompanyInfo />
      <CTA />
    </main>
  );
}
