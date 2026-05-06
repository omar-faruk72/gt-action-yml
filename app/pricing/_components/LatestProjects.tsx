"use client";

import React from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import SecondaryButton from "@/components/button/SecondaryButton";
import { Portfolios } from "@/constants/portfolio-data";
import { Portfolio } from "@/types";
import PortfolioCard from "@/components/shared/PortfolioCard";

// ইউটিউব লিঙ্ক কনভার্টার ফাংশন
const getYouTubeEmbedUrl = (url: string) => {
  if (!url) return "";
  const regExp =
    /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
  const match = url.match(regExp);
  const videoId = match && match[1].length === 11 ? match[1] : null;
  return videoId
    ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`
    : url;
};

const LatestProjects = ({ activeCategory }: { activeCategory: string }) => {
  const typedPortfolios = Portfolios as Portfolio[];
  const isVideoCategory = activeCategory === "Video & Motion";

  const filteredProjects =
    activeCategory === "All"
      ? typedPortfolios.slice(0, 3)
      : typedPortfolios
          .filter((p) => p.category === activeCategory)
          .slice(0, 3);

  // Animation Variants
  const gridVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
    exit: { opacity: 0, y: 20, scale: 0.95 },
  };

  return (
    <section className="white-bg overflow-hidden">
      <div className="container-custom md:py-[60px] py-10 px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="flex flex-col items-center justify-center mb-10 md:mb-[60px]"
        >
          <div className="relative inline-block">
            <SecondaryButton className="absolute top-12 -left-2">
              Portfolio
            </SecondaryButton>
            <h2 className="display-xxl sec-color text-center">
              Our Latest Projects
            </h2>
          </div>
        </motion.div>

        {/* Grid Area */}
        <motion.div
          layout
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((item) => (
              <motion.div
                key={item.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`${
                  isVideoCategory ? "md:col-span-2 lg:col-span-3" : ""
                }`}
              >
                {isVideoCategory && item?.video_items ? (
                
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {item.video_items.slice(0, 3).map((video, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-[40px] p-5 border-[2px] border-[#F1F2FF] flex flex-col h-full"
                        style={{ boxShadow: "0px 60px 154px 0px #E8EDFF99" }}
                      >
                        {/* Video Area */}
                        <div className="relative aspect-[9/16] rounded-[30px] overflow-hidden bg-black mb-6 w-full">
                          <iframe
                            src={getYouTubeEmbedUrl(video.video_url || "")}
                            title={video.title}
                            allowFullScreen
                            className="absolute inset-0 w-full h-full border-0"
                          ></iframe>
                        </div>

                        {/* Dashed Line */}
                        <div
                          className="w-full mb-6"
                          style={{
                            borderTop: "2px dashed #f1f2ff",
                            height: "0px",
                          }}
                        ></div>

                        {/* Text Content */}
                        <div className="px-2 pb-4">
                          <h4 className="text-[24px] font-medium text-[#1E0A52] mb-2 leading-tight">
                            {video.title}
                          </h4>
                          <p className="text-[14px] text-[#5f5f86] leading-relaxed">
                            {video.subtitle}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* সাধারণ পোর্টফোলিও কার্ড */
                  <PortfolioCard portfolio={item} />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestProjects;
