/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React, { useState, useEffect } from "react";
import PricingSection from "./_components/PricingSection";
import FAQ from "@/components/home/FAQ";
import TestimonialSection from "@/components/home/TestimonialSection";
import SocialDesignPlan from "./_components/SocialDesignPlan";
import { PricingHeader } from "@/components/pricing/PricingHeader/PricingHeader";

const Page = () => {
  const [activeCategory, setActiveCategory] = useState<string>("UI/UX Design");
  const [socialMediaData, setSocialMediaData] = useState<any>(null);

  useEffect(() => {
    fetch("/data/pricingData.json")
      .then((res) => res.json())
      .then((data) => {
        const socialData = data.find(
          (item: any) => item.category === "Social Media",
        );
        setSocialMediaData(socialData);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="">
      <div className="bg-[#F1F2FF]">
        <PricingHeader />

        <PricingSection onCategoryChange={(cat) => setActiveCategory(cat)} />

        {activeCategory === "Graphic Design" && socialMediaData && (
          <SocialDesignPlan data={socialMediaData} />
        )}
      </div>

      <TestimonialSection />
      <FAQ />
    </div>
  );
};

export default Page;
