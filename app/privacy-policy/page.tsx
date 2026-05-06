"use client";
import React from "react";
import PolicyHeader from "@/components/policy/PolicyHeader";
import PolicyContentCard from "@/components/policy/PolicyContentCard";

const PrivacyPolicyPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#F1F2FF] flex flex-col items-center">
      <PolicyHeader />
      <div className="-mt-20 md:-mt-32 mb-20 relative z-20 w-full flex justify-center px-4">
        <PolicyContentCard />
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;