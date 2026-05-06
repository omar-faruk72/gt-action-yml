"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const motionServices = [
  "Promo Videos",
  "Motion Graphics",
  "Explainer Videos",
  "Social Media Animation",
];
const contentVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};
const floatingImage: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const MotionDesignCard = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className=""
    >
      <div className="md:px-15 container-custom  ">
        <div
          className=" bg-white rounded-[50px] p-7 md:p-8 overflow-hidden"
          style={{
            boxShadow: "0px 60px 154px 0px rgba(232, 237, 255, 0.6)",
          }}
        >
          <div className=" flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 flex flex-col gap-10">
              <motion.h2
                variants={contentVariants}
                className="display-xl text-[#1E0A52]"
              >
                Video & <span className="text-[#CCCCE9]">Motion</span>
              </motion.h2>

              <motion.p
                variants={contentVariants}
                className="body-l text-[#5F5F86] max-w-[550px]"
              >
                We create animations and videos that help you explain your
                product and attract more people.
              </motion.p>

              <ul className="flex flex-col gap-6">
                {motionServices.map((service, index) => (
                  <motion.li
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { delay: index * 0.1 },
                      },
                    }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 cursor-pointer group"
                  >
                    <div className="w-[21px] h-[21px] rounded-full bg-[#EEE7FF] flex justify-center items-center group-hover:bg-[#7736FF] transition-colors duration-300">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-[7px] h-[7px] rounded-full bg-[#7736FF] group-hover:bg-white"
                      />
                    </div>
                    <span className="text-[#5F5F86] body-l group-hover:text-[#1E0A52] transition-colors">
                      {service}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div className="flex-1 w-full lg:max-w-[50%]">
              <div className="rounded-[40px] overflow-hidden h-[400px] md:h-[500px] relative">
                <Image
                  src="/image/serviceImage/service3.png"
                  alt="Motion Design"
                  width={570}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E0A52]/10 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default MotionDesignCard;

