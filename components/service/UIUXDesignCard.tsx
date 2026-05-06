"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const uiuxFeatures = [
  {
    image: "/service/vector.png",
    title: "Website & App Design",
    description: "Clean and user-friendly layouts for better experience.",
  },
  {
    image: "/service/vector.png",
    title: "User Research",
    description: "We understand user needs before starting the design.",
  },
];

const leftSideVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const rightSideVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

const UIUXDesignCard = () => {
  return (
    <div className="md:px-15 container-custom ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white p-7 md:p-8 rounded-[50px] overflow-hidden"
        style={{
          boxShadow: "0px 60px 154px 0px #E8EDFF99",
        }}
      >
        <div className="container-custom  flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
          <motion.div
            variants={leftSideVariants}
            className="flex-1 flex flex-col gap-8"
          >
            <h2 className="display-xl text-[#1E0A52]">
              UI/UX <span className="text-[#CCCCE9]">Design</span>
            </h2>
            <p className="body-l text-[#5F5F86] max-w-[450px]">
              We design websites and apps that are easy to use and look modern.
              Our goal is to give users a smooth and simple experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {uiuxFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex flex-col gap-5 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="w-12 h-12 rounded-full border border-[#E5E7FF] flex items-center justify-center bg-white group-hover:border-[#7736FF] transition-colors duration-300"
                  >
                    <IoChatboxEllipsesOutline />
                  </motion.div>
                  <h4 className="display-s text-[#1E0A52] group-hover:text-[#7736FF] transition-colors">
                    {feature.title}
                  </h4>
                  <p className="body-l text-[#5F5F86]">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={rightSideVariants}
            className="flex-1 w-full lg:max-w-[50%]"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="rounded-[40px] overflow-hidden h-[400px] md:h-[500px]"
            >
              <Image
                src="/image/serviceImage/service2.png"
                alt="UI/UX Design Team Working"
                width={570}
                height={200}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default UIUXDesignCard;
