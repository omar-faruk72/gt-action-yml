"use client";
import React from "react";
import { motion } from "framer-motion";
import SecondaryButton from "@/components/button/SecondaryButton";
import LatestInsightsSlides from "../shared/LatestInsightsSlides";

const LatestInsights = () => {
  return (
    <section className="w-full pt-16 overflow-hidden bg-[linear-gradient(to_bottom_right,#F3F4FF_20%,rgba(243,244,255,0.8)_40%,transparent_70%),linear-gradient(to_left,rgba(243,244,255,0.5)_0%,transparent_0%)]">
      <div className="container-custom ">
        <div className="relative flex flex-col items-center text-center">
          <div className="relative inline-block">
            
            <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -top-6 md:-top-2 -left-16 md:-left-18  z-10 scale-60 md:scale-120"
                >
                  <SecondaryButton><span className="px-3">Blog</span></SecondaryButton>
                </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[34px] md:text-[72px] font-medium"
              style={{
                color: "var(--sec-title-color)",
              }}
            >
              Latest Design Insights
            </motion.h2>
          </div>
        </div>

        {/* Swiper Slider  */}
        <LatestInsightsSlides />
      </div>
    </section>
  );
};

export default LatestInsights;
