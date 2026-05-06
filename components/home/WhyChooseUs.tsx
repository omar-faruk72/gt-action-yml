"use client";
import React, { useState } from "react";
import Image from "next/image";
import { whyChooseData, WhyChooseItem } from "@/constants/whyChooseData";
import SecondaryButton from "@/components/button/SecondaryButton";
import { motion, AnimatePresence } from "framer-motion";

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState<WhyChooseItem>(whyChooseData[2]);

  return (
    <section className="container-custom pb-16 md:pb-24 bg-white">
      {/* ── Top Section ── */}
      <div className="flex items-center flex-col md:flex-row justify-between gap-8 md:gap-10 mb-12 md:mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute left-15 top-2">
            <SecondaryButton>why us</SecondaryButton>
          </div>
          <h2 className="display-xxl">
            Why <br /> choose us?
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="body-xl text-text-secondary max-w-105 mt-4 md:mt-0"
        >
          We don't just design visuals, we create meaningful digital experiences
          that help brands grow, engage users, and achieve real results.
        </motion.p>
      </div>

      {/* ── Main Wrapper ── */}
      <div
        className="rounded-[30px] md:rounded-[50px] p-4 md:p-8 lg:p-[50px] mx-4 md:mx-0"
        style={{
          background:
            "linear-gradient(146.64deg, #F3F4FF 2.74%, #FFFFFF 82.33%)",
        }}
      >
        {/* ── Tabs ── */}
        <div className="w-full flex justify-center mb-6 md:mb-10 lg:mb-12">
          <motion.div
            layout
            className="w-full lg:max-w-[1220px] flex flex-wrap lg:flex-nowrap items-center
              rounded-[20px] md:rounded-[50px]
              px-2 md:px-3
              py-2 md:py-3
              bg-white
              gap-2 md:gap-2 lg:gap-0
              justify-between"
          >
            {whyChooseData.map((item) => {
              const isActive = activeTab.id === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item)}
                  className={`relative
                    w-[calc(50%-4px)] md:w-[calc(50%-4px)] lg:w-full
                    px-3 md:px-5 lg:px-6
                    h-[44px] md:h-[64px] lg:h-[80px]
                    rounded-[50px]
                    transition-all duration-500 z-10
                    flex items-center justify-center gap-2
                    font-['Inter_Tight'] font-medium
                    text-[11px] md:text-[13px] lg:text-[18px]
                    leading-tight
                    ${
                      isActive
                        ? "text-white"
                        : "bg-white lg:bg-transparent border border-[#EAEAFF] lg:border-none text-[#5F5F86] hover:text-primary-color"
                    }`}
                >
                  {/* Active pill background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabGlowWhy"
                      className="absolute inset-0 bg-[#7736FF] rounded-full -z-10"
                      transition={{
                        type: "spring",
                        bounce: 0.1,
                        stiffness: 130,
                        damping: 20,
                      }}
                    />
                  )}

                  {/* Dot icon */}
                  <div className="shrink-0 flex items-center justify-center">
                    {isActive ? (
                      <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#C3FF41] flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-[#7736FF]" />
                      </div>
                    ) : (
                      <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#F1F2FF] flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-[#7952DF]" />
                      </div>
                    )}
                  </div>

                  <span className="text-center">{item.title}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* ── Active Card ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 items-center bg-white
              rounded-[24px] md:rounded-[40px] lg:rounded-[50px]
              gap-6 md:gap-8 lg:gap-[80px]
              px-5 py-8
              md:px-10 md:py-10
              lg:pl-[80px] lg:pr-[30px] lg:py-[30px]
              w-full
              lg:min-h-[488px]"
          >
            {/* Left */}
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20
                  flex items-center justify-center
                  bg-secondary-color rounded-full display-s"
              >
                0{activeTab.id}
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="display-xl"
              >
                {activeTab.headingMain}
                <span className="display-xl text-[#CCCCE9]">
                  {" "}
                  {activeTab.headingAccent}
                </span>
              </motion.h3>

              {activeTab.description && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-sm md:text-base text-gray-500 lg:hidden"
                >
                  {/* {activeTab.description} */}
                </motion.p>
              )}
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end ">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full
                  max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[569px]
                  h-[220px] sm:h-[280px] md:h-[360px] lg:h-[428px]"
              >
                <div className="relative  bg-white overflow-hidden w-full h-full
                  rounded-[20px] md:rounded-[32px] lg:rounded-[40px]">
                  <Image
                    src={activeTab.image}
                    alt={activeTab.title}
                    width={569}
                    height={428}
                    className="w-full h-full  object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Dots ── */}
        <div className="flex justify-center gap-1.5 mt-8 md:mt-10 lg:mt-12">
          {whyChooseData.map((item) => {
            const isActive = activeTab.id === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item)}
                className="relative flex items-center justify-center w-[10px] h-[10px]"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeDotRing"
                    className="absolute w-[18px] h-[18px] border border-[#1E0A52]/20 rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                <motion.div
                  animate={{
                    backgroundColor: isActive ? "#1E0A52" : "transparent",
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-2.5 h-2.5"
                      : "w-2.5 h-2.5 border border-[#1E0A52]/10"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;