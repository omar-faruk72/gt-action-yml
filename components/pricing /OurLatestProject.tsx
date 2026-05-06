"use client";
import React from "react";
import { motion } from "framer-motion";
import PortfolioCard from "../shared/PortfolioCard";
import { Portfolios } from "@/constants/portfolio-data";
import { Portfolio } from "@/types/index";
import SecondaryButton from "../button/SecondaryButton";

const OurLatestProject = () => {
  const latestProjects = (Portfolios as Portfolio[]).slice(0, 3);

  return (
    <section className="py-16 md:py-28 bg-white overflow-hidden">
      <div className="container-custom">
        {/* --- Header Section --- */}
        <div className="flex justify-center mb-16 md:mb-24 px-4">
          <div className="inline-block relative">
            {/* --- Motion on Button --- */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute -left-16 md:-left-25 -top-4 md:-top-2 z-10 scale-90 md:scale-100 rotate-[-15deg] md:rotate-0"
            >
              <SecondaryButton>Portfolio</SecondaryButton>
            </motion.div>

            {/* --- Motion on Heading --- */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="display-xxl text-[#1E0A52]"
            >
              Our Latest Projects
            </motion.h2>
          </div>
        </div>

        {/* --- Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-0">
          {latestProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              <PortfolioCard portfolio={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurLatestProject;
