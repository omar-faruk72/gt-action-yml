"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import bannerbg from "@/public/image/curve shape/curveShape.svg";
import ellipse from "@/public/ellipse.png";

interface HeroSectionProps {
  badgeIcon?: string;
  badgeText?: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  buttons?: React.ReactNode;
}

// Fade-up Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const HeroSection: React.FC<HeroSectionProps> = ({
  badgeIcon,
  badgeText,
  title,
  description,
  buttons,
}) => {
  return (
    <section className="bg-[#F1F2FF] pt-[88px] ">
      <div className="relative bg-[#F1F2FF] overflow-hidden flex flex-col items-center justify-center w-full px-4 pt-10 md:pt-20 pb-16 ">
        {/* Background Style */}
        <Image
          src={bannerbg}
          alt="curve"
          className="xl:block absolute top-28 md:top-26 left-[20%] md:left-[41%] pointer-events-none z-0"
        />
        <Image
          src={ellipse}
          alt="ellipse"
          className="xl:block absolute top-60 left-[1%] md:left-[15%] pointer-events-none z-0"
        />

        <div className="container-custom relative z-10 w-full text-center">
          <div className="flex flex-col items-center gap-[56px]">
            <div className=" flex flex-col gap-4 items-center justify-center">
              <motion.div
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                {(badgeIcon || badgeText) && (
                  <div className="flex items-center gap-3 justify-center">
                    {badgeIcon && (
                      <div className="w-[38px] h-[38px] bg-white rounded-full flex items-center justify-center shadow-sm">
                        <Image
                          src={badgeIcon}
                          alt="icon"
                          width={16}
                          height={16}
                          className="object-contain"
                        />
                      </div>
                    )}
                    <span className="body-m font-medium text-[#1E0A52] tracking-tight">
                      {badgeText}
                    </span>
                  </div>
                )}
              </motion.div>

              <motion.div
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`flex flex-col items-center ${description ? "gap-[32px]" : ""}`}
              >
                {/* Title */}
                <div className="display-xxl sec-color tracking-[-3%] font-medium ">
                  {title}
                </div>

                {/* Description */}
                {description && (
                  <div className="body-l text-text-secondary">
                    {description}
                  </div>
                )}
              </motion.div>
            </div>

            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              {buttons && (
                <div className="flex flex-wrap items-center justify-center gap-[16px]">
                  {buttons}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
