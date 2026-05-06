import DynamicServiceSection from "@/components/service/DynamicServiceSection";
import Achievements from "@/components/service/Achievements";
import ServiceFeature from "@/components/service/ServiceFeature";
import ServiceSection from "@/components/service/ServiceSection";
import React from "react";
import FAQ from "@/components/home/FAQ";
import OurTrustedBrands from "@/components/shared/OurTrustedBrands/OurTrustedBrands";
import { ServiceHero } from "@/components/service/ServiceHero";

const page = () => {
  return (
    <div className="bg-white">
      <div className="relative  bg-[linear-gradient(146.64deg,#F3F4FF_2.74%,#FFFFFF_82.33%)]">
        <ServiceHero />
      </div>
      <OurTrustedBrands></OurTrustedBrands>
      <ServiceFeature></ServiceFeature>
      <ServiceSection></ServiceSection>
      <Achievements></Achievements>
      <DynamicServiceSection></DynamicServiceSection>
      <FAQ></FAQ>
    </div>
  );
};

export default page;
