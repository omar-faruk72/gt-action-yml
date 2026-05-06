"use client";
import React from "react";
import Image from "next/image";
import bannerbg from "@/public/image/curve-line.png"; 

const PolicyHeader = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-32 md:pt-40  md:pb-60">
      <Image
        src={bannerbg}
        alt="curve"
        className=" xl:block absolute top-28 md:top-20 left-[20%] md:left-[43%] pointer-events-none z-0"
      />

      <div className="container-custom relative z-10 w-full text-center">
        <div className="space-y-6">
          {/* Badge */}
         <div className="flex items-center gap-2 justify-center">
              <svg width="34" height="34" viewBox="0 0 38 38" fill="none">
                <rect width="38" height="38" rx="19" fill="white" />
                <path d="M15 17C15 18.0609 15.4214 19.0783 16.1716 19.8284C16.9217 20.5786 17.9391 21 19 21C20.0609 21 21.0783 20.5786 21.8284 19.8284C22.5786 19.0783 23 18.0609 23 17C23 15.9391 22.5786 14.9217 21.8284 14.1716C21.0783 13.4214 20.0609 13 19 13C17.9391 13 16.9217 13.4214 16.1716 14.1716C15.4214 14.9217 15 15.9391 15 17Z" stroke="#1E0A52" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 21L21.2667 24.9267L22.332 22.7713L24.7307 22.926L22.464 19" stroke="#1E0A52" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.5342 19L13.2676 22.9267L15.6662 22.7713L16.7316 24.926L18.9982 21" stroke="#1E0A52" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[14px] font-normal text-[#1E0A52] pr-3 tracking-tight">
              DesignFixter
            </span>
            </div>

          <h1 className="display-xxl lg:display-xxxl sec-color font-bold leading-[1.05]">
            Privacy Policy
          </h1>

          <p className="body-l text-text-secondary max-w-145 mx-auto opacity-80">
            Your privacy is important to us. This page explains how we collect and use your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PolicyHeader;