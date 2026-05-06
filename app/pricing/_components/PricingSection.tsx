/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import LatestProjects from "./LatestProjects";
import Image from "next/image";
import PrimaryButton from "@/components/button/PrimaryButton";

interface Plan {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  badge: string;
  isFeatured: boolean;
  featureTitle?: string;
  buttonText?: string;
  features: string[];
}
interface ComparisonRow {
  feature: string;
  basic: string;
  standard: string;
  premium: string;
}

interface CategoryData {
  category: string;
  title: string;
  comparison: ComparisonRow[];
  plans: Plan[];
}

interface PricingSectionProps {
  onCategoryChange: (category: string) => void;
}

const PricingSection = ({ onCategoryChange }: PricingSectionProps) => {
  const [data, setData] = useState<CategoryData[]>([]);
  const [activeTab, setActiveTab] = useState("Social Media");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTabSwitching, setIsTabSwitching] = useState(false);
  const [projectsCategory, setProjectsCategory] = useState("Social Media");
  const latestProjectsRef = useRef<HTMLDivElement>(null);
  const [latestProjectsHeight, setLatestProjectsHeight] = useState<number>(400);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    fetch("/data/pricingData.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => console.error("Error loading pricing data:", err));
  }, []);

  // ✅ LatestProjects এর actual height মনে রাখা
  useEffect(() => {
    if (latestProjectsRef.current) {
      const height = latestProjectsRef.current.getBoundingClientRect().height;
      if (height > 0) {
        setLatestProjectsHeight(height);
      }
    }
  }, [projectsCategory]);

  useEffect(() => {
    if (data.length > 0) {
      const currentCat = data.find((item) => item.category === activeTab);
      if (!currentCat) return;

      setSelectedId(null);
      setIsTabSwitching(true);

      const timer = setTimeout(() => {
        if (isMobile) {
          setSelectedId(currentCat.plans[0]?.id);
        } else {
          const featuredPlan = currentCat.plans.find((p) => p.isFeatured);
          setSelectedId(
            featuredPlan?.id ||
              currentCat.plans[1]?.id ||
              currentCat.plans[0]?.id,
          );
        }
        setProjectsCategory(activeTab);
        setIsTabSwitching(false);
      }, 350);

      return () => clearTimeout(timer);
    }
  }, [activeTab, data, isMobile]);

  const handleTabChange = (category: string) => {
    if (category === activeTab) return;
    setActiveTab(category);
    onCategoryChange(category);
  };

  const currentCategory = data.find((item) => item.category === activeTab);

  if (loading)
    return <div className="py-20 text-center body-l">Loading Plans...</div>;

  return (
    <section className="mb-10 md:mb-0 overflow-hidden">
      {/* --- Tab Switcher --- */}
      <div className="w-full flex justify-center mb-10 md:mb-[60px] px-4">
        <div className="w-full lg:max-w-fit relative z-20">
          <motion.div
            layout
            className={`flex flex-wrap lg:flex-nowrap items-center rounded-[30px] md:rounded-[50px] p-2 md:p-3 bg-white gap-2 lg:gap-0  
        ${data.length === 1 ? "justify-center" : "justify-between"}
      `}
          >
            {data.map((item) => (
              <button
                key={item.category}
                onClick={() => handleTabChange(item.category)}
                className={`relative w-[calc(50%-8px)] lg:w-auto 
            px-3 md:px-5 lg:px-6 xl:px-10 2xl:px-14 
            h-12 md:h-16 lg:h-18 xl:h-20 2xl:h-22 
            rounded-[30px] lg:rounded-[50px] transition-all duration-500 z-10 flex items-center justify-center gap-2 lg:gap-3
            font-['Inter_Tight'] font-medium 
            text-[11px] md:text-[14px] lg:text-[20px]  
            leading-none uppercase tracking-wider
            ${
              activeTab === item.category
                ? "text-white"
                : "bg-white lg:bg-transparent border border-[#EAEAFF] lg:border-none text-[#5F5F86] hover:text-primary-color"
            }`}
              >
                {activeTab === item.category && (
                  <motion.div
                    layoutId="activeTabGlowPricing"
                    className="absolute inset-0 bg-primary-color rounded-[30px] lg:rounded-[50px] -z-10 shadow-lg shadow-primary-color/20"
                    transition={{
                      type: "spring",
                      bounce: 0.15,
                      stiffness: 110,
                      damping: 18,
                    }}
                  />
                )}

                <div className="relative shrink-0 flex items-center justify-center">
                  {activeTab === item.category ? (
                    <div className="w-2.5 h-2.5 md:w-[14px] md:h-[14px] rounded-full bg-[#C3FF41] flex items-center justify-center">
                      <div className="w-0.5 h-0.5 lg:w-1 lg:h-1 rounded-full bg-[#7736FF]" />
                    </div>
                  ) : (
                    <div className="w-2.5 h-2.5 md:w-[14px] md:h-[14px] rounded-full bg-[#F1F2FF] flex items-center justify-center">
                      <div className="w-0.5 h-0.5 lg:w-1 lg:h-1 rounded-full bg-[#7952DF]" />
                    </div>
                  )}
                </div>

                <span className="whitespace-nowrap">{item.category}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- Section Title --- */}
      <motion.div
        variants={fadeInUp}
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h2 className="display-xl text-center sec-color mt-[40px] md:mt-[60px] mb-[40px] md:mb-[60px]">
          Choose Your{" "}
          <span className="sec-color">{currentCategory?.title}</span>{" "}
          <span className="text-[#CCCCE9] font-normal">Plan</span>
        </h2>
      </motion.div>

      <div className="container-custom white-bg p-6 md:p-[50px] rounded-t-[40px] text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-[14px] items-start justify-items-center">
          <AnimatePresence mode="popLayout">
            {!isTabSwitching &&
              currentCategory?.plans.map((plan) => {
                const isSelected = selectedId === plan.id;

                return (
                  <motion.div
                    key={`${activeTab}-${plan.id}`}
                    layout
                    onClick={() => setSelectedId(plan.id)}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`relative p-8 md:p-10 rounded-[40px] text-left cursor-pointer flex flex-col w-full mx-auto transition-all duration-500 ${
                      isSelected
                        ? "text-white z-10 py-14 h-auto max-w-[400px]"
                        : "white-bg h-auto opacity-70 hover:opacity-100 mt-0 max-w-[400px]"
                    }`}
                    style={{
                      boxShadow: isSelected
                        ? "0px 60px 154px 0px #E8EDFF99"
                        : "none",
                    }}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId={`active-pricing-card-bg-${activeTab}`}
                        className="gradient-border-card absolute inset-0 rounded-[40px]"
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 25,
                          mass: 1,
                        }}
                        style={{ zIndex: -1 }}
                      />
                    )}

                    {/* Header & Badge */}
                    <div className="flex justify-between items-start mb-6">
                      <h3
                        className={`display-s !font-medium ${isSelected ? "text-white" : "sec-color"}`}
                      >
                        {plan.name}
                      </h3>
                      <span
                        className={`px-5 py-3 rounded-full title-l font-semibold flex items-center justify-center whitespace-nowrap ${
                          isSelected
                            ? "bg-[var(--secondary-color)] text-black"
                            : "bg-[#f3f4ff] text-[var(--sec-title-color)]"
                        }`}
                      >
                        {plan.badge}
                      </span>
                    </div>

                    {/* Price Area */}
                    <div className="mb-4 flex items-baseline gap-1">
                      <span className="display-l text-col !font-semibold tracking-tight">
                        ৳{plan.price}
                      </span>
                      <span
                        className={`display-s ml-3 ${isSelected ? "text-gray-300" : "text-gray-500"}`}
                      >
                        {plan.duration}
                      </span>
                    </div>

                    <p
                      className={`body-s mb-10 ${isSelected ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"}`}
                    >
                      {plan.description}
                    </p>

                    <div className="flex-grow">
                      {plan.featureTitle && (
                        <p
                          className={`font-bold mb-[32px] display-xs ${isSelected ? "text-white" : ""}`}
                        >
                          {plan.featureTitle}
                        </p>
                      )}
                      <ul className="space-y-[24px]">
                        {plan.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 body-l leading-tight"
                          >
                            <span className="bg-primary flex items-center justify-center w-5 h-5 rounded-full shrink-0">
                              <Image
                                src="/image/right111.png"
                                alt="Check"
                                width={8}
                                height={8}
                              />
                            </span>
                            <span
                              className={
                                isSelected
                                  ? "text-[#CCCCE9]"
                                  : "text-[#5f5f86]"
                              }
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {plan.id === "sm-custom" && (
                      <div className="mt-10">
                        <PrimaryButton href="/contact">Contact Us</PrimaryButton>
                      </div>
                    )}
                  </motion.div>
                );
              })}
          </AnimatePresence>
        </div>
      </div>

      {/* ✅ isTabSwitching এর সময় placeholder দিয়ে height ধরে রাখা */}
      {isTabSwitching ? (
        <div style={{ minHeight: latestProjectsHeight }} />
      ) : (
        <div ref={latestProjectsRef}>
          <LatestProjects activeCategory={projectsCategory} />
        </div>
      )}
    </section>
  );
};

export default PricingSection;