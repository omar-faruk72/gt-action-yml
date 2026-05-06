"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const graphicDesignServices = [
  "Logo Design",
  "Social Media Design",
  "Packaging Design",
  "Marketing Materials",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const contentVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const imageVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

const GraphicDesignCard = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className=""
    >
      <div className="md:px-15 container-custom ">
        <div
          className="bg-white rounded-[50px] p-7 md:p-8 overflow-hidden"
          style={{
            boxShadow: "0px 60px 154px 0px #E8EDFF99",
          }}
        >
          <div className=" flex flex-col-reverse lg:flex-row-reverse items-center gap-12 lg:gap-16">
            <motion.div
              variants={imageVariants}
              className="flex-1 w-full lg:max-w-[50%]"
            >
              <Image
                src="/image/serviceImage/service1.png"
                alt="Graphic Design Team Working"
                width={570}
                height={200}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </motion.div>
            <motion.div
              variants={containerVariants}
              className="flex-1 flex flex-col gap-10"
            >
              <motion.h2
                variants={contentVariants}
                className="display-xl text-[#1E0A52]"
              >
                Graphic <span className="text-[#CCCCE9]">Design</span>
              </motion.h2>

              <motion.p
                variants={contentVariants}
                className="body-l text-[#5F5F86] max-w-[550px]"
              >
                We create eye-catching visuals that make your brand look
                professional and easy to remember.
              </motion.p>

              <motion.ul
                variants={contentVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8"
              >
                {graphicDesignServices.map((service, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-4 text-lg cursor-pointer group"
                  >
                    {" "}
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                      className="w-[21px] h-[21px] rounded-full bg-[#EEE7FF] flex justify-center items-center group-hover:bg-[#7736FF] transition-colors duration-300  flex-shrink-0"
                    >
                      <div className="w-[7px] h-[7px] rounded-full bg-[#7736FF] group-hover:bg-white transition-colors duration-300"></div>
                    </motion.div>
                    <span className="text-[#1E0A52] body-l group-hover:text-[#7736FF] transition-colors">
                      {service}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GraphicDesignCard;
