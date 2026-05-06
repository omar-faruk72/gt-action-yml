"use client";
import React from "react";
import TermsHeader from "@/components/terms/TermsHeader";
import TermsContentCard from "@/components/terms/TermsContentCard";

const TermsPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#F1F2FF] flex flex-col items-center">
      {/* Header Section */}
      <TermsHeader />
      
      
      <div className="relative z-20 w-full -mt-16 md:-mt-32 px-4 mb-20">
        <TermsContentCard />
      </div>
    </div>
  );
};

export default TermsPage;