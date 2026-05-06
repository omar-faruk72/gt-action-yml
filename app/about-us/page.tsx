import React from "react";

import AboutStats from "@/components/about-us/AboutStats";

import OurTrustedBrands from "@/components/shared/OurTrustedBrands/OurTrustedBrands";
import VisionMission from "./_components/VisionMission";
import FAQ from "@/components/home/FAQ";
import Team from "@/components/about-us/Team";
import { ABoutHero } from "@/components/about-us/ABoutHero";



export default function page() {
  return (
    <div>
      <ABoutHero></ABoutHero>
      <OurTrustedBrands showBg={false} />
      <VisionMission />
      <Team />
      <AboutStats></AboutStats>
      <FAQ></FAQ>
    </div>
  );
}
