"use client";
import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ScrollProgressBar = () => {

  const { scrollYProgress } = useScroll();


  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });


  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#A855F7", "#7736FF", "#1E0A52"] 
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-10000 pointer-events-none">
      <motion.div
        style={{
          scaleX,
          backgroundColor,
          transformOrigin: "left",
        }}
        className="h-1.5 w-full relative"
      />

      <motion.div
        style={{
          left: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
          backgroundColor,
        }}
        className="absolute top-0 w-4 h-4 rounded-full blur-md opacity-70 -translate-x-1/2"
      />
    </div>
  );
};

export default ScrollProgressBar;