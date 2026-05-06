"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const OurTrustedBrands = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, 50, {
      duration: 2,
      ease: "easeOut",
      delay: 0.5,
    });
    return controls.stop;
  }, [count]);

  const brands = [
    { src: "/image/OurTrustedBrand/AdsFixter.png", x: 70 },
    { src: "/image/OurTrustedBrand/Axis-Digital.png", x: 320 },
    { src: "/image/OurTrustedBrand/CyberFixter.png", x: 550 },
    { src: "/image/OurTrustedBrand/Insaf.png", x: 784 },
    { src: "/image/OurTrustedBrand/Little-Walks.png", x: 1020 },
    { src: "/image/OurTrustedBrand/Owntrix.png", x: 70 },
    { src: "/image/OurTrustedBrand/Prime-Mart.png", x: 320 },
    { src: "/image/OurTrustedBrand/Rethink.png", x: 550 },
    { src: "/image/OurTrustedBrand/Skystelo.png", x: 784 },
    { src: "/image/OurTrustedBrand/Vortex.png", x: 1020 },
  ];

  const firstSet = brands.slice(0, 5);
  const secondSet = brands.slice(5, 10);
  const fullSets = [firstSet, secondSet];

  return (
    <section className="pt-10 md:pt-15 overflow-hidden">
      <div className="container-custom mx-auto text-center">
        <h2 className="display-l text-[#1e0a52] pb-10 md:pb-15">
          Trusted by <motion.span>{rounded}</motion.span>+ Growing Brands
        </h2>

        {/* 
            Container with Blur Mask: 
            'mask-image' তৈরি করে দুই পাশ ঝাপসা করার জন্য।
        */}
        <div
          className="relative w-full max-w-[1320px] mx-auto overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          {/* Infinity Animation Container */}
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 40, // সময় বাড়ানো হয়েছে যাতে আরও ধীরে (Slowly) চলে
              repeat: Infinity,
            }}
          >
            {/* ডুপ্লিকেট সেট লুপ করার জন্য */}
            {[...Array(2)].map((_, loopIdx) => (
              <div key={loopIdx} className="flex">
                {fullSets.map((set, setIdx) => (
                  <div
                    key={setIdx}
                    className="relative flex-shrink-0 w-[1200px] h-[120px]"
                  >
                    {/* SVG background line */}
                    <svg
                      viewBox="0 0 1200 80"
                      fill="none"
                      className="w-full h-auto text-[#CCCCE9]"
                    >
                      <path
                        d="M0 60 H160 C180 60 190 20 210 20 C230 20 240 60 260 60 H380 C400 60 410 20 430 20 C450 20 460 60 480 60 H620 C640 60 650 20 670 20 C690 20 700 60 720 60 H860 C880 60 890 20 910 20 C930 20 940 60 960 60 H1080 C1100 60 1110 20 1130 20 C1150 20 1160 60 1180 60 H1200"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </svg>

                    {/* Individual Logo Positioning */}
                    <div className="absolute top-0 left-0 w-full h-full">
                      {set.map((brand, idx) => (
                        <div
                          key={idx}
                          className="absolute flex items-center justify-center transform -translate-x-1/2"
                          style={{
                            left: `${brand.x}px`,
                            bottom: "55px",
                            width: "150px",
                            height: "60px",
                          }}
                        >
                          <Image
                            src={brand.src}
                            alt="brand"
                            width={120}
                            height={50}
                            className="object-contain transition-all duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurTrustedBrands;
