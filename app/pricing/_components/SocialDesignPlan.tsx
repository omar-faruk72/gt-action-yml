/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import GetSocialFacilitiesForm from "./GetSocialFacilitiesForm";
import Link from "next/link";

interface Plan {
  id: string;
  name: string;
  badge: string;
  price: string | number;
  duration: string;
  description: string;
  featureTitle?: string;
  features: string[];
  buttonText?: string;
}

interface SocialDesignPlanProps {
  data: {
    title: string;
    comparison: any[];
    plans: Plan[];
  };
}

const SocialDesignPlan = ({ data }: SocialDesignPlanProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(
    data.plans.find((p) => p.id.includes("creative"))?.id ||
      data.plans[0]?.id ||
      null,
  );

  const getActiveColumn = () => {
    if (!selectedId) return null;
    const id = selectedId.toLowerCase();
    if (id.includes("custom")) return null;
    if (id.includes("creative") || id.includes("starter")) return "creative";
    if (id.includes("weekly")) return "weekly";
    if (id.includes("growth")) return "growth";
    if (id.includes("premium")) return "premium";
    return null;
  };

  return (
    <section className="mb-10  md:mb-[60px] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h2 className="display-xl text-center sec-color my-[40px] md:my-[60px]">
          Choose Your <span className="sec-color">{data.title}</span>{" "}
          <span className="text-[var(--text-primary)]">Design Plan</span>
        </h2>
      </motion.div>

      <div className="container-custom white-bg p-6 md:p-[50px] mb-[60px]  rounded-[40px] text-center">
        {/* --- Pricing Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-[14px] items-start justify-items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={data.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="contents"
            >
              {data.plans.map((plan: Plan, index: number) => {
                const isSelected = selectedId === plan.id;

                return (
                  <motion.div
                    key={plan.id}
                    layout
                    onClick={() => setSelectedId(plan.id)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`relative p-8 md:p-10 rounded-[40px] text-left cursor-pointer transition-all duration-500 flex flex-col w-full mx-auto ${
                      isSelected
                        ? "gradient-border-card text-white z-10 py-14 h-auto max-w-[400px]"
                        : "white-bg project-shadow1 h-auto opacity-70 hover:opacity-100 mt-0 max-w-[400px]"
                    }`}
                    style={{
                      boxShadow: "0px 60px 154px 0px #E8EDFF99",
                    }}
                  >
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
                      <span
                        className={`display-l !font-semibold tracking-tight ${isSelected ? "" : "text-col"}`}
                      >
                        ৳{plan.price}
                      </span>
                      <span
                        className={`display-s ml-3 ${isSelected ? "text-gray-300" : "text-gray-500"}`}
                      >
                        {plan.duration}
                      </span>
                    </div>

                    <p
                      className={`body-s mb-10 ${
                        isSelected
                          ? "text-[var(--text-primary)]"
                          : "text-[var(--text-secondary)]"
                      }`}
                    >
                      {plan.description}
                    </p>

                    {/* Features */}
                    <div className="flex-grow">
                      {plan.featureTitle && (
                        <p
                          className={`font-bold mb-[32px] display-xs ${isSelected ? "text-white" : ""}`}
                        >
                          {plan.featureTitle}
                        </p>
                      )}
                      <ul className="space-y-[24px]">
                        {plan.features.map((feature: string, idx: number) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 body-l leading-tight"
                          >
                            <span className="bg-primary flex items-center justify-center w-5 h-5 rounded-full mt-1 flex-shrink-0">
                              <Image
                                src="/image/right111.png"
                                alt="Check"
                                width={8}
                                height={8}
                              />
                            </span>
                            <span
                              className={
                                isSelected ? "text-[#CCCCE9]" : "text-[#5f5f86]"
                              }
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="mt-10"
                        >
                          <Link
                            href={
                              plan.id === "sm-custom"
                                ? "https://wa.me/8801984658743"
                                : "#"
                            }
                            target={
                              plan.id === "sm-custom" ? "_blank" : "_self"
                            }
                            rel="noopener noreferrer"
                            className="w-full"
                          >
                            <button className="w-full bg-white text-black py-4 rounded-[24px] font-bold flex items-center justify-center gap-2 hover:bg-[var(--secondary-color)] transition-all group">
                              {plan.id === "sm-custom"
                                ? "Contact Now"
                                : plan.buttonText || "Get Started"}
                              <Image
                                src="/image/pricing-icon.png"
                                alt="Icon"
                                width={7}
                                height={7}
                                className="group-hover:translate-x-1 transition-transform"
                              />
                            </button>
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* --- Comparison Table --- */}
        <div className="mt-20">
          <GetSocialFacilitiesForm
            comparisonData={data.comparison || []}
            activeTitle={data.title || ""}
            activeColumn={getActiveColumn()}
          />
        </div>
      </div>
    </section>
  );
};

export default SocialDesignPlan;
