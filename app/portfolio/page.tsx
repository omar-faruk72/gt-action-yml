
import Navbar from "@/components/shared/navbar/Navbar";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import React from "react";
import NewsLetterPortfolio from "@/components/shared/NewsLetter/NewsLetter-Portfolio";
import FAQ from "@/components/home/FAQ";
import { PBanner } from "@/components/portfolio/PBanner";

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        style={{
          background:
            "linear-gradient(146.64deg, #F3F4FF 2.74%, #FFFFFF 82.33%)",
        }}
      >
        <PBanner />
        <PortfolioSection />
      </div>

      <NewsLetterPortfolio></NewsLetterPortfolio>
      <FAQ></FAQ>
    </div>
  );
};

export default page;
