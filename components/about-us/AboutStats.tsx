
"use client";
import React from "react";
import { motion } from "framer-motion";

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.24325 7.33992L1.86325 8.26492L1.75025 8.28792C1.57919 8.33333 1.42325 8.42333 1.29835 8.54872C1.17344 8.67412 1.08406 8.83041 1.03932 9.00165C0.994575 9.17289 0.996081 9.35293 1.04368 9.5234C1.09128 9.69386 1.18327 9.84864 1.31025 9.97192L5.93225 14.4709L4.84225 20.8259L4.82925 20.9359C4.81878 21.1128 4.85552 21.2894 4.9357 21.4474C5.01589 21.6055 5.13664 21.7394 5.28559 21.8354C5.43454 21.9315 5.60634 21.9862 5.7834 21.994C5.96046 22.0018 6.13642 21.9625 6.29325 21.8799L11.9993 18.8799L17.6923 21.8799L17.7923 21.9259C17.9573 21.9909 18.1367 22.0109 18.312 21.9837C18.4873 21.9565 18.6522 21.8832 18.7898 21.7712C18.9275 21.6592 19.0328 21.5127 19.0951 21.3466C19.1574 21.1804 19.1743 21.0008 19.1443 20.8259L18.0533 14.4709L22.6773 9.97092L22.7553 9.88592C22.8667 9.74869 22.9397 9.58438 22.967 9.40972C22.9942 9.23506 22.9747 9.0563 22.9103 8.89165C22.846 8.72701 22.7392 8.58235 22.6007 8.47244C22.4623 8.36252 22.2972 8.29126 22.1223 8.26592L15.7423 7.33992L12.8903 1.55992C12.8077 1.39246 12.68 1.25144 12.5214 1.15283C12.3629 1.05422 12.1799 1.00195 11.9933 1.00195C11.8066 1.00195 11.6236 1.05422 11.4651 1.15283C11.3065 1.25144 11.1788 1.39246 11.0963 1.55992L8.24325 7.33992Z" fill="#1E0A52"/>
</svg>

);

const floatingVariants = (delay = 0) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    },
  },
});

const AboutStats = () => {
  return (
    <section className="bg-white py-15 overflow-hidden ">
      <div className="container-custom px-4 md:px-15">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 px-10">
          
          {/* --- Card 1 --- */}
          <motion.div
            variants={floatingVariants(0)}
            initial="initial"
            animate="animate"
            className="relative z-10" 
          >
            <div
              className="relative w-[310px] h-[303px] bg-[#F3F4FF] rounded-[50px] p-6 flex flex-col  justify-between items-start"
              style={{ rotate: "-2deg" }}
            >
              <div className="w-21 h-21 rounded-full bg-white flex items-center justify-center  shadow-sm text-[#1E0A52]">
                <StarIcon />
              </div>
              <div className="px-4 py-4">
                <p className="text-[#5F5F86] display-s font-medium mb-1">Founded</p>
              <h3 className="text-[#1E0A52] display-xl font-medium">2025</h3>
              </div>
            </div>

            {/* Line 1  */}
            <div className="hidden lg:flex absolute right-[-150px] top-1/2 -translate-y-1/2 items-center pointer-events-none">
              <div className="w-0 h-0 border-t-18 border-t-transparent border-b-18 border-b-transparent border-l-25 border-l-[#F3F4FF]" />
              <div className="w-[130px] h-1 bg-[#F1F2FF] -ml-1" />
            </div>
          </motion.div>

          {/* --- Card 2 --- */}
          <motion.div
            variants={floatingVariants(0.8)}
            initial="initial"
            animate="animate"
            className="relative z-20"
          >
            <div
              className="relative w-[310px] h-[303px] bg-[#C3FF41] rounded-[50px] p-6 flex flex-col justify-between items-start"
              style={{ rotate: "-15deg" }}
            >
              <div className="w-21 h-21 rounded-full bg-white flex items-center justify-center mb-10 shadow-sm text-[#1E0A52]">
                <StarIcon />
              </div>
              <div className="px-4 py-4">
                <p className="text-[#5F5F86] display-s font-medium mb-1">Complete Our Project</p>
                <h3 className="text-[#1E0A52] display-xl font-medium">100+</h3>
              </div>
             
            </div>

            {/* Line 2 */}
            <div 
              className="hidden lg:flex absolute -right-42 top-[42%] -translate-y-1/2 items-center pointer-events-none origin-left" 
              style={{ rotate: "-15deg" }}
            >
              <div className="w-0 h-0 border-t-[18px] border-t-transparent border-b-18 border-b-transparent border-l-25 border-l-[#C3FF41]" />
              <div className="w-37.5 h-1 bg-[#C3FF41]/30 -ml-1" />
            </div>
          </motion.div>

          {/* --- Card 3*/}
          <motion.div
            variants={floatingVariants(1.5)}
            initial="initial"
            animate="animate"
            className="relative z-30" 
          >
            <div
              className="relative w-75 h-75 bg-[#F3F4FF] rounded-[50px] p-6 flex flex-col justify-between items-start"
              style={{ rotate: "4deg" }}
            >
              <div className="w-21 h-21 rounded-full bg-white flex items-center justify-center mb-10 shadow-sm text-[#1E0A52]">
                <StarIcon />
              </div>
              <div className="px-4 py-4">
                <p className="text-[#5F5F86] display-s font-medium mb-1">Clients Satisfaction</p>
                <h3 className="text-[#1E0A52] display-xl font-medium">99%</h3>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutStats;




