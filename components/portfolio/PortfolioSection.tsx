"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import PortfolioCard from "../shared/PortfolioCard";
import PrimaryButton from "../button/PrimaryButton";
import { Portfolios } from "@/constants/portfolio-data";
import { Portfolio } from "@/types/index";

const categories = [
  "All",
  "Social Media",
  "Packaging",
  "Logo Design",
  "UI/UX Design",
  "Video & Motion",
];

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
      mass: 0.8,
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: -30,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const typedPortfolios = Portfolios as unknown as Portfolio[];

  // Filtering Logic
  const filteredPortfolios =
    activeTab === "All"
      ? typedPortfolios
      : typedPortfolios.filter((item) => item.category === activeTab);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleViewLess = () => {
    setVisibleCount((prev) => Math.max(prev - 6, 6));
  };

  return (
    <section className="pb-4 pt-15 overflow-hidden ">
      <div className="container-custom">
        {/* --- Toggle Bar --- */}
        <div className="w-full flex justify-center h-[120px] mb-16 md:mb-0  px-4">
          <div className="w-full lg:container-custom relative z-20">
            <motion.div
              layout
              className={`flex flex-wrap lg:flex-nowrap items-center rounded-[30px] md:rounded-[50px] p-2 md:p-3 bg-white gap-2 lg:gap-0
    ${categories.length === 1 ? "justify-center" : "justify-between"}
  `}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveTab(category);
                    setVisibleCount(6);
                  }}
                  className={`relative w-[calc(50%-8px)] lg:w-full 
            px-3 md:px-5 lg:px-6 xl:px-10 2xl:px-14 
            h-12 md:h-16 lg:h-18 xl:h-20 2xl:h-22 
            rounded-[30px] lg:rounded-[50px] transition-all duration-500 z-10 flex items-center justify-center gap-2 lg:gap-3
            font-['Inter_Tight'] font-medium 
            text-[11px] md:text-[14px] lg:text-[20px]  
            leading-none 
            ${
              activeTab === category
                ? "text-white "
                : "bg-white lg:bg-transparent border border-[#EAEAFF] lg:border-none text-[#5F5F86] hover:text-primary-color"
            }`}
                >
                  {activeTab === category && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 bg-primary-color rounded-[30px] lg:rounded-[50px] -z-10"
                      transition={{
                        type: "spring",
                        bounce: 0.15,
                        stiffness: 110,
                        damping: 18,
                      }}
                    />
                  )}

                  <div className="relative shrink-0 flex items-center justify-center">
                    {activeTab === category ? (
                      <div className="w-2.5 h-2.5 md:w-[14px] md:h-[14px] rounded-full bg-[#C3FF41] flex items-center justify-center">
                        <div className="w-0.5 h-0.5 lg:w-0.5 lg:h-0.5 xl:w-1 xl:h-1 rounded-full bg-[#7736FF]" />
                      </div>
                    ) : (
                      <div className="w-2.5 h-2.5 md:w-[14px] md:h-[14px] rounded-full bg-[#F1F2FF] flex items-center justify-center">
                        <div className="w-0.5 h-0.5 lg:w-0.5 lg:h-0.5 xl:w-1 xl:h-1 rounded-full bg-[#7952DF]" />
                      </div>
                    )}
                  </div>

                  <span className="whitespace-nowrap">{category}</span>
                </button>
              ))}
            </motion.div>
          </div>
        </div>
        {/* --- Portfolio Grid --- */}
        <motion.div
          layout
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1  md:grid-cols-2 pt-11 pb-12 lg:grid-cols-3 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredPortfolios.slice(0, visibleCount).map((item) => (
              <motion.div
                key={item.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="will-change-transform"
              >
                <PortfolioCard portfolio={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- View More / View Less --- */}
        {filteredPortfolios.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
            className="mt-15 flex justify-center gap-4 flex-wrap"
          >
            {/* View Less */}
            {visibleCount > 6 && (
              <div onClick={handleViewLess} className="cursor-pointer">
                <PrimaryButton href="#">View Less</PrimaryButton>
              </div>
            )}

            {/* View More */}
            {visibleCount < filteredPortfolios.length && (
              <div onClick={handleViewMore} className="cursor-pointer">
                <PrimaryButton href="#">View More Projects</PrimaryButton>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
