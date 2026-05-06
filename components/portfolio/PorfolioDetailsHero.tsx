"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import bannerbg from "@/public/image/curve shape/curveShape.svg";
import ellipse from "@/public/ellipse.png";

interface PortfolioHeroProps {
  project: {
    title: string;
    description: string;
    category?: string;
  };
  badgeIcon?: string;
}

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

const PortfolioDetailsHero: React.FC<PortfolioHeroProps> = ({
  project,
  badgeIcon,
}) => {
  return (
    <section className="bg-[#F1F2FF] pt-[88px]">
      <div className="relative bg-[#F1F2FF] overflow-hidden h-[350px] flex flex-col items-center justify-center w-full px-4 pt-10 md:pt-20 pb-16">
        {/* Background Elements */}
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
          <div className="flex flex-col items-center gap-[40px] md:gap-[56px]">
            <div className="flex flex-col gap-6 items-center justify-center">
              {/* Badge Section */}
              <motion.div
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-[38px] h-[38px] bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Image
                      src={badgeIcon || "/image/heroBridgeIcons/Award.svg"}
                      alt="icon"
                      width={16}
                      height={16}
                    />
                  </div>
                  <span className="body-m font-medium text-[#1E0A52] tracking-tight">
                    Portfolio Details
                  </span>
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col items-center gap-6"
              >
                {/* Dynamic Title */}
                <h1 className="display-xxl sec-color tracking-[-3%] font-medium max-w-[700px]">
                  {project.title}
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetailsHero;
