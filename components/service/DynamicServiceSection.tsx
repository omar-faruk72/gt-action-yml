"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import bannerbg from "@/public/image/curve-line.png";

const processData = [
  {
    id: "01",
    title: "Discovery & Strategy",
    highlightText: "Understanding your unique brand goals.",
    description:
      "We start by understanding your brand goals, target audience, and project requirements to create a solid roadmap.",
    image: "/service/monir-faruk.png",
  },
  {
    id: "02",
    title: "Concept & Sketching",
    highlightText: "Visualizing ideas into creative sketches.",
    description:
      "Our team brainstorms creative ideas and develops initial wireframes or sketches to visualize the core concept.",
    image: "/service/akash.png",
  },
  {
    id: "03",
    title: "Design & Development",
    highlightText: "Crafting modern and functional visuals.",
    description:
      "This is where the magic happens. We turn concepts into high-fidelity visuals, ensuring a modern, clean, and functional design.",
    image: "/service/faruk.png",
  },
  {
    id: "04",
    title: "Review & Refinement",
    highlightText: "Polishing designs for perfect results.",
    description:
      "We share the work with you and gather feedback. We make necessary adjustments to ensure the final result is perfect.",
    image: "/service/imam.png",
  },
  {
    id: "05",
    title: "Final Delivery",
    highlightText: "Delivering high quality launch ready files.",
    description:
      "Once approved, we deliver all the high-quality assets and source files, ready for launch or production.",
    image: "/service/niloy.png",
  },
];

const DynamicServiceSection = () => {
  const [activeTab, setActiveTab] = useState(processData[0]);

  // Image Variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 1.08 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: cubicBezier(0.42, 0, 0.58, 1),
      },
    },
  };

  return (
    <section className="bg-white container-custom py-12 md:py-15 relative">
      {/* Animated Header Section */}
      <div className="relative mb-14 flex flex-col items-center text-center">
        <div className="relative z-10 inline-block">
          {/* Main Heading  */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="display-xxl text-[#1E0A52] max-w-[800px] mx-auto px-4"
          >
            How We Work to Deliver Great Design
          </motion.h1>
        </div>
      </div>

      {/* Main Content Box */}
      <div
        className="mt-12 md:mt-16 rounded-[30px] md:rounded-[50px] 
                   pl-6 md:pl-10 lg:pl-14 
                   pr-6 md:pr-12 lg:pr-[120px] 
                   pt-8 md:pt-14 pb-8 md:pb-14 
                   flex flex-col lg:flex-row gap-8 lg:gap-16 items-start relative z-10"
        style={{
          background:
            "linear-gradient(146.64deg, #F3F4FF 2.74%, #FFFFFF 82.33%)",
        }}
      >
        {/* Left Side - Tabs */}
        <div className="w-full mt-8 lg:mt-16 lg:w-[300px] bg-white rounded-[30px] md:rounded-[42px] p-5 md:p-8 flex flex-col gap-0 md:gap-0">
          {processData.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item)}
              className={`flex items-center gap-4  px-5 md:px-6 py-4 rounded-full transition-all duration-300 group w-full text-left font-medium text-[16px] md:text-[18px] ${
                activeTab.id === item.id
                  ? "bg-[#7736FF] text-white"
                  : "bg-transparent text-[#5F5F86] hover:bg-[#F3F4FF]"
              }`}
            >
              <div
                className={`relative flex-shrink-0 flex items-center justify-center w-[14px] h-[14px] rounded-full transition-all duration-300 ${
                  activeTab.id === item.id ? "bg-[#F1F2FF]" : "bg-[#F1F2FF]"
                }`}
              >
                <div
                  className={`w-1 h-1 rounded-full flex-shrink-0  transition-colors ${
                    activeTab.id === item.id ? "bg-[#1E0A52]" : "bg-[#1E0A52]"
                  }`}
                />
              </div>
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 w-full">
          {/* ID Circle */}
          <motion.div
            key={activeTab.id}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-[80px] h-[80px] md:w-14 md:h-14 rounded-full bg-[#C3FF41] flex items-center justify-center display-xs"
          >
            {activeTab.id}
          </motion.div>

          {/* Content Title */}
          <motion.h2
            key={`title-${activeTab.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="display-xl w-[530px]"
          >
            <span className=""> {activeTab.highlightText}</span>
          </motion.h2>

          {/* Description */}
          <div className="flex gap-4">
            <div className="relative flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#F1F2FF]">
              {/* Inner Solid Dot */}
              <div className="w-2 h-2 rounded-full bg-[#1E0A52]" />
            </div>
            <motion.p
              key={`desc-${activeTab.id}`}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[16px] md:text-[20px] leading-[1.6] text-[#5F5F86] max-w-[630px]"
            >
              {activeTab.description}
            </motion.p>
          </div>

          {/* Image Container */}
          <div className="mt-4  rounded-[30px] md:rounded-[40px] overflow-hidden w-full h-[280px] sm:h-[340px] md:h-[400px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className=""
              >
                <Image
                  src={activeTab.image}
                  alt={activeTab.title}
                  width={700}
                  height={368}
                  className="w-full h-full object-fill"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicServiceSection;
