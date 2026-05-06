"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, Variants } from "framer-motion";
import { Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import SecondaryButton from "@/components/button/SecondaryButton";

const VisionMission = () => {
  const [progress, setProgress] = useState(0);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const slides = [
    {
      id: "01",
      title:
        "We make design simple and effective for every business, helping you build trust,",
      highlight: "attract customers, and grow with confidence.",
      image: "/about/impact/shohan.png",
    },
    {
      id: "02",
      title: "Our mission is to deliver high-quality design solutions",
      highlight:
        "that are simple, effective, and tailored to each client's needs.",
      image: "/about/impact/abdullah.png",
    },
    {
      id: "03",
      title: "We focus on clarity & usability in everything we create,",
      highlight: "ensuring your brand stands out in the digital world.",
      image: "/about/impact/akash.png",
    },
    {
      id: "04",
      title: "Building long-term partnerships through transparent,",
      highlight: "and consistent delivery of exceptional results.",
      image: "/about/impact/office.png",
    },
  ];

  return (
    <section className="py-15 overflow-hidden">
      <div className="container-custom relative px-4 md:px-0">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="md:flex relative   gap-45 mb-5 md:mb-16 items-start"
        >
          <div className="relative pt-10 lg:pt-0 pb-10 md:pb:0">
            <motion.div
              variants={fadeInUp}
              className="absolute top-[42%] left-[20%] z-20 scale-75 md:scale-88 origin-left"
              style={{ rotate: "-8deg" }}
            >
              <SecondaryButton>Vision & Mission</SecondaryButton>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="display-xxl md:max-w-[619px] w-full sec-color tracking-[-3%] relative z-10"
            >
              We design with purpose and build for impact
            </motion.h2>
          </div>

          <motion.div variants={fadeInUp}>
            <div className="body-l text-[#5f5f86] w-full md:max-w-[521px]">
              <p>
                Our vision is to become a global creative partner for businesses
                that want to stand out in the digital world. We believe great
                design is not just about looks it is about solving problems,
                improving user experience, and driving real results.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Swiper Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            grabCursor={true}
            loop={true}
            speed={1500}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSlideChange={(swiper) => {
              const currentProgress =
                ((swiper.realIndex + 1) / slides.length) * 100;
              setProgress(currentProgress);
            }}
            onInit={(swiper) => {
              setProgress(((swiper.realIndex + 1) / slides.length) * 100);
            }}
            className="vision-swiper"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="h-auto">
                <div className="bg-white rounded-[50px] md:mb-[64px] p-5 md:p-[30px] md:pl-[80px] flex flex-col lg:flex-row gap-6 md:gap-20">
                  {/* TEXT */}
                  <div className="w-full lg:w-[561px] flex flex-col justify-center">
                    <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-[#C3FF41] rounded-full flex items-center justify-center font-bold display-s mb-6 md:mb-12">
                      {slide.id}
                    </div>
                    <h3 className="text-[#1e0a52] font-medium display-xl md:text-[50px] tracking-[-2%]">
                      {slide.title}{" "}
                      <span className="text-[#cccce9]">{slide.highlight}</span>
                    </h3>
                  </div>

                  {/* IMAGE */}
                  <div className="w-full lg:w-1/2 relative h-[250px] sm:h-[300px] md:h-[509px] md:w-[569px] rounded-[20px] md:rounded-[32px] overflow-hidden">
                    <Image
                      src={slide.image}
                      alt="Vision"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Progress Bar Animation */}
        <div className="w-full h-[4px] bg-[#e5e7eb] rounded-full overflow-hidden mt-6">
          <motion.div
            className="h-full bg-[#1e0a52]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "circOut" }}
          />
        </div>

        {/* Background Blur Shape */}
        <div
          className="absolute -bottom-20 left-1/3 -translate-x-1/2 w-[300px] h-[300px] md:top-50 md:right-[-100px] md:translate-x-0 md:w-[716px] md:h-[716px] bg-[#F1F2FF] rounded-full blur-[100px] opacity-120 -z-10 pointer-events-none"
          style={{
            boxShadow: "0px 60px 154px 0px rgba(232, 237, 255, 0.6)",
          }}
        ></div>
      </div>
    </section>
  );
};

export default VisionMission;
