"use client";
import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  easeInOut,
} from "framer-motion";
import SecondaryButton from "@/components/button/SecondaryButton";

type ServiceNumberProps = {
  number: string;
};

const ServiceNumber = ({ number }: ServiceNumberProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.5, margin: "-10% 0px -40% 0px" });

  return (
    <motion.div
      ref={ref}
      animate={{
        backgroundColor: isInView ? "#7736FF" : "transparent",
        color: isInView ? "#ffffff" : "#1E0A52",
        borderColor: isInView ? "#7736FF" : "rgba(30, 10, 82, 0.2)",
      }}
      className="w-12 h-12 p-8 md:p-10 display-m flex items-center justify-center border rounded-full font-bold transition-all duration-500 cursor-default"
    >
      {number}
    </motion.div>
  );
};

const OurCoreServices = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0px", "464px"]);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: easeInOut },
  };

  return (
    <div className="">
      <section className="container-custom pt-10 md:pt-15 pb-[20px] md:pb-[31px]">
        {/* Heading */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <div className="inline-block relative ">
            <div className="absolute -left-16 rotate-[-15deg] md:rotate-0  md:-left-25 -top-3 -md:top-0">
              <SecondaryButton>Services</SecondaryButton>
            </div>
            <h2 className="display-xxl">Our Core Services</h2>
          </div>
        </motion.div>

        {/* Card Container */}
        <div
          ref={containerRef}
          className="bg-white  rounded-[50px] pt-6 px-6 md:pt-15 md:px-15 space-y-10"
        >
          {/* ===== ROW 1 ===== */}
          <motion.div
            {...fadeInUp}
            className="flex flex-col  lg:flex-row items-center justify-between "
          >
            <div className="space-y-6   lg:max-w-[45%]">
              <ServiceNumber number="01" />
              <h3 className="display-xl">
                <span className="">Graphic </span>
                <span className="text-[#CCCCE9]">Design</span>
              </h3>
              <p className="body-xl text-[#5f5f86]">
                We create clean designs that make your brand stand out, including social posts, logo, branding and packaging.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-[40px] overflow-hidden "
            >
              <Image
                src="/image/serviceImage/service1.png"
                alt="Graphic Design"
                width={550}
                height={300}
              />
            </motion.div> 
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="relative flex flex-col lg:flex-row items-center justify-between gap-12"
          >
            <div className="space-y-6 lg:max-w-[45%]">
              <ServiceNumber number="02" />
              <h3 className="display-xl">
                <span className="text-[#1E0A52]">UI/UX </span>
                <span className="text-[#CCCCE9]">Design</span>
              </h3>
              <p className="text-text-secondary body-xl">
                We design user friendly interfaces that make your website or app easy to use and give a smooth experience to your users.
              </p>
            </div>

            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-[30px] overflow-hidden "
              >
                <Image
                    src="/image/serviceImage/service2.png"
                  alt="UI/UX Design"
                  width={550}
                  height={300}
                />
              </motion.div>

              {/* Static Grey Line - Static positioning */}
              <div className="hidden lg:block absolute -left-13 -top-25 w-1 h-116 bg-[#F1F2FF] rounded-[50px]" />

              <motion.div
                style={{ height: lineHeight }}
                className="hidden lg:block absolute left-[-52px] -top-25 w-1 bg-[#2D0B59] rounded-[50px] origin-top"
              />
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="flex flex-col lg:flex-row items-center justify-between gap-12 pb-10"
          >
            <div className="space-y-6 lg:max-w-[45%]">
              <ServiceNumber number="03" />
              <h3 className="display-xl">
                <span className="text-[#1E0A52]">Video & </span>
                <span className="text-[#CCCCE9]">Motion</span>
              </h3>
              <p className="text-text-secondary body-xl">
               We create engaging videos and animations that help you tell your brand story in a creative and impactful way.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-[30px] overflow-hidden "
            >
              <Image
                  src="/image/serviceImage/service3.png"
                alt="Video & Motion"
                width={550}
                height={300}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurCoreServices;
