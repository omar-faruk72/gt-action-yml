"use client";
import React from "react";
import SecondaryButton from "../button/SecondaryButton";
import UIUXDesignCard from "./UIUXDesignCard";
import GraphicDesignCard from "./GraphicDesignCard";
import MotionDesignCard from "./MotionDesignCard";
import { motion, Variants } from "framer-motion";
import ServiceBtn from "../button/ServiceBtn";
const cardVariants: Variants = {
  hiddenLeftSide: { opacity: 0, x: -100 },
  hiddenRightSide: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ServiceSection() {
  return (
    <div className="py-[30px] md:py-[60px] overflow-hidden  ">
      {/* Header Section  */}
      <div className="relative flex flex-col items-center text-center max-w-[800px] mx-auto mb-14">
        <div className="relative inline-block">
          {/* Secondary Button */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute  top-[52%] left-[52%] -translate-x-1/2 -translate-y-1/2 z-20 rotate-[-6deg] whitespace-nowrap origin-center scale-60 md:scale-100"
          ></motion.div>

          {/* Title */}
          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="display-xxl relative z-10"
              style={{
                color: "var(--sec-title-color)",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
              }}
            >
              Find the Right Design Service for You
            </motion.h2>
            <div className="absolute md:-rotate-15 left-40 bottom-6  md:left-70 md:bottom-10 z-10">
              <SecondaryButton>Our Services</SecondaryButton>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="body-l text-[#5F5F86] mt-8"
        >
          We offer simple, modern, and effective design services to help your
          business grow and stand out.
        </motion.h4>
      </div>

      <div className="mt-10 flex flex-col gap-8">
        {/* ৩. Graphic Design Card */}
        <motion.div
          initial="hiddenLeftSide"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={cardVariants}
        >
          <GraphicDesignCard />
        </motion.div>
        {/* ২. UI/UX Design Card  */}

        <motion.div
          initial="hiddenRightSide"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={cardVariants}
        >
          <UIUXDesignCard />
        </motion.div>

        {/* ৪. Motion Design Card  */}
        <motion.div
          initial="hiddenLeftSide"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={cardVariants}
        >
          <MotionDesignCard />
        </motion.div>

        <div className="mx-auto mt-10">
         
        </div>
      </div>
    </div>
  );
}
