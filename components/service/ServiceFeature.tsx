"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Custom Design Solutions",
    description: "We create designs based on your business needs and goals.",
  },
  {
    id: "02",
    title: "Creative & Modern Design",
    description: "Clean and trendy designs that make your brand stand out.",
  },
  {
    id: "03",
    title: "Easy to Use Design",
    description:
      "We focus on simple and user-friendly design for better experience.",
  },
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const ServiceFeature = () => {
  return (
    <section className="md:py-[60px] px-4 md:px-16 bg-white overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="rounded-[50px] container-custom p-[40px] md:p-[60px]"
        style={{
          background:
            "linear-gradient(146.64deg, #F3F4FF 2.74%, #FFFFFF 82.33%)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="flex flex-col gap-6 group"
            >
              <motion.div
                transition={{ duration: 0.5 }}
                className="w-[80px] h-[80px] rounded-full flex items-center justify-center text-white display-xs relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(176.74deg, #1A084B -13.59%, #4A24A5 109.86%)",
                }}
              >
                <div className="display-xs">

                {service.id}
                </div>
              </motion.div>
              <h3 className="display-xl mt-7 text-[#1E0A52]  transition-colors duration-300">
                {service.title}
              </h3>
              <p className="body-l mt-4 text-[#5F5F86]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceFeature;
