"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useMotionValue, useInView, animate } from "framer-motion";

// --- DYNAMIC ICONS ---

const ProjectsIcon = () => (
  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.3631 0.901C6.3631 0.641286 6.56133 0.422997 6.82673 0.391131L10.0083 0.00395001C10.0827 -0.00505951 10.1583 0.00138467 10.23 0.0228575C10.3017 0.0443303 10.3679 0.0803437 10.4243 0.128523C10.4806 0.176702 10.5258 0.235952 10.5569 0.302366C10.588 0.36878 10.6043 0.440849 10.6046 0.513819V10.6921C10.6046 11.0012 10.3261 11.2418 10.0083 11.2019L6.82673 10.8163C6.69873 10.8005 6.58107 10.7398 6.49574 10.6456C6.41041 10.5515 6.36325 10.4304 6.3631 10.3049V0.899406V0.901ZM9.2492e-07 2.19001C9.2492e-07 1.9303 0.198233 1.71201 0.463635 1.68014L3.64518 1.29296C3.71964 1.28395 3.79521 1.29039 3.86692 1.31187C3.93862 1.33334 4.00484 1.36935 4.06118 1.41753C4.11754 1.46571 4.16274 1.52496 4.19383 1.59138C4.22491 1.65779 4.24117 1.72986 4.24152 1.80283V9.9177C4.24152 10.2284 3.96301 10.4674 3.64518 10.4292L0.463635 10.0436C0.33536 10.0277 0.217469 9.96675 0.132101 9.87228C0.0467329 9.77781 -0.000240357 9.65629 9.2492e-07 9.53052V2.19001ZM16.5647 0.864352C16.6796 0.892077 16.7817 0.956382 16.8547 1.04704C16.9278 1.13769 16.9675 1.2495 16.9677 1.36466V5.66349C16.9675 5.78922 16.9201 5.91056 16.8345 6.00473C16.7488 6.0989 16.6307 6.15943 16.5024 6.17495L13.3209 6.56213C13.2463 6.57116 13.1706 6.56467 13.0988 6.5431C13.0269 6.52154 12.9606 6.48538 12.9043 6.43703C12.8479 6.38868 12.8027 6.32923 12.7717 6.26262C12.7408 6.19602 12.7247 6.12377 12.7246 6.05067V0.591892C12.7246 0.255697 13.0489 0.0103231 13.3831 0.0915833L16.5647 0.864352ZM22.8 2.65367C22.7998 2.53851 22.7601 2.42671 22.687 2.33605C22.614 2.24539 22.5119 2.18109 22.397 2.15336L19.2154 1.38059C19.1373 1.36174 19.0558 1.36043 18.977 1.37675C18.8983 1.39307 18.8244 1.42661 18.7609 1.47481C18.6974 1.52301 18.6461 1.58463 18.6107 1.65498C18.5754 1.72534 18.557 1.80259 18.5568 1.8809V5.79255C18.5568 6.10325 18.837 6.34225 19.1532 6.30401L22.3347 5.91683C22.4627 5.90134 22.5806 5.84104 22.6662 5.74721C22.7518 5.65337 22.7994 5.53242 22.8 5.40696V2.65367Z" fill="#1E0A52" />
    <path d="M22.8 7.92459L12.4608 8.18112C12.5326 9.093 12.9557 9.94489 13.6455 10.5664C14.3354 11.188 15.241 11.5334 16.1813 11.5335H18.5568V13.7275L0 12.0497V22.8L22.8 21.2529V7.923V7.92459Z" fill="#1E0A52" />
  </svg>
);

const ClientsIcon = () => (
 <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0C7.16 0 0 7.16 0 16C0 24.84 7.16 32 16 32C24.84 32 32 24.84 32 16C32 7.16 24.84 0 16 0ZM16 29C8.82 29 3 23.18 3 16C3 8.82 8.82 3 16 3C23.18 3 29 8.82 29 16C29 23.18 23.18 29 16 29ZM21 12.5C21 13.88 19.88 15 18.5 15C17.12 15 16 13.88 16 12.5C16 11.12 17.12 10 18.5 10C19.88 10 21 11.12 21 12.5ZM13.5 15C12.12 15 11 13.88 11 12.5C11 11.12 12.12 10 13.5 10C14.88 10 16 11.12 16 12.5C16 13.88 14.88 15 13.5 15ZM16 24C12.5 24 9.5 21.5 8 18H24C22.5 21.5 19.5 24 16 24Z" fill="#1E0A52"/>
  </svg>
);

const ExperienceIcon = () => (
<svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26 4H6C4.9 4 4 4.9 4 6V26C4 27.1 4.9 28 6 28H26C27.1 28 28 27.1 28 26V6C28 4.9 27.1 4 26 4ZM16 22L12 19L8 22V8H16V22ZM24 22H18V20H24V22ZM24 18H18V16H24V18ZM24 14H18V12H24V14ZM24 10H18V8H24V10Z" fill="#1E0A52"/>
  </svg>
);

const SatisfactionIcon = () => (
<svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2L20.12 10.36L29.33 11.71L22.67 18.2L24.24 27.36L16 23L7.76 27.36L9.33 18.2L2.67 11.71L11.88 10.36L16 2Z" fill="#1E0A52"/>
  </svg>
);

const DividerIcon = () => (
  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#7736FF] rounded-full flex items-center justify-center text-white shrink-0">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.25 6.9502H12.4167C13.1583 6.9502 13.75 7.55017 13.75 8.28351V9.75852" stroke="white" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.65834 5.5498L6.25 6.94985L7.65834 8.35818" stroke="white" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.75 13.0505H7.58334C6.84167 13.0505 6.25 12.4505 6.25 11.7172V10.2422" stroke="white" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.3418 14.45L13.7501 13.0499L12.3418 11.6416" stroke="white" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.99935 18.3337C14.6017 18.3337 18.3327 14.6027 18.3327 10.0003C18.3327 5.39795 14.6017 1.66699 9.99935 1.66699C5.39698 1.66699 1.66602 5.39795 1.66602 10.0003C1.66602 14.6027 5.39698 18.3337 9.99935 18.3337Z" stroke="white" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

// Number Counter Component
const CountUp = ({ value, duration = 2 }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const numericTarget = parseInt(value.replace(/\D/g, ""));
      const suffix = value.replace(/[0-9]/g, "");

      const controls = animate(0, numericTarget, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest) + suffix);
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}</span>;
};

// DYNAMIC STATS ARRAY
const stats = [
  { id: 1, value: "100+", label: "Projects Done", Icon: ProjectsIcon },
  { id: 2, value: "50+", label: "Happy Clients", Icon: ClientsIcon },
  { id: 3, value: "5+", label: "Years Experience", Icon: ExperienceIcon },
  { id: 4, value: "98%", label: "Client Satisfaction", Icon: SatisfactionIcon },
];

export default function Achievements() {
  const controls = useAnimation();
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const [singleSetWidth, setSingleSetWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setSingleSetWidth(containerRef.current.scrollWidth / 3);
    }
  }, []);

  useEffect(() => {
    const startAutoPlay = async () => {
      await controls.start({
        x: -singleSetWidth,
        transition: { duration: 20, ease: "linear", repeat: Infinity },
      });
    };
    if (singleSetWidth > 0) startAutoPlay();
  }, [singleSetWidth, controls]);

  const handleMove = (direction) => {
    const currentX = x.get();
    const moveAmount = 200;
    const newX = direction === "left" ? currentX - moveAmount : currentX + moveAmount;
    controls.start({
      x: newX,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    });
  };

  return (
    <section className="py-7 md:py-10  container-custom">
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gradient-custom rounded-[40px] md:rounded-[80px] p-8 md:p-14 lg:p-20 overflow-hidden relative group"
      >
        {/* Mobile Navigation Buttons */}
        <button
          onClick={() => handleMove("right")}
          className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/30 backdrop-blur-md p-2 rounded-full text-[#1E0A52] active:scale-90 transition-all"
        >
          <svg className="rotate-180" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <button
          onClick={() => handleMove("left")}
          className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/30 backdrop-blur-md p-2 rounded-full text-[#1E0A52] active:scale-90 transition-all"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* Mobile Marquee */}
        <div className="block md:hidden">
          <motion.div
            ref={containerRef}
            style={{ x }}
            animate={controls}
            className="flex items-center gap-10 w-max px-10"
          >
            {[...stats, ...stats, ...stats].map((stat, index) => (
              <React.Fragment key={`${stat.id}-${index}`}>
                <div className="flex flex-col items-center shrink-0 min-w-[150px] space-y-3 pointer-events-none">
                  {/* Rendering Dynamic Icon */}
                  <stat.Icon />
                  <div className="text-center">
                    <h3 className="display-xl text-[#1E0A52] leading-none mb-2">
                      <CountUp value={stat.value} />
                    </h3>
                    <p className="body-m text-text-secondary font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
                <DividerIcon />
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-between gap-12 lg:gap-5">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.id}>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-3 shrink-0 min-w-fit">
                {/* Rendering Dynamic Icon */}
                <stat.Icon />
                <div>
                  <h3 className="display-xl text-[#1E0A52] leading-none mb-2">
                    <CountUp value={stat.value} />
                  </h3>
                  <p className="body-m text-text-secondary font-medium whitespace-nowrap">
                    {stat.label}
                  </p>
                </div>
              </div>
              {index !== stats.length - 1 && <DividerIcon />}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </section>
  );
}