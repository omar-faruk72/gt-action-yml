

"use client";
import React, { useState, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const teamMembers = [
  { id: 0, name: "Abdullah Al Nur(Niloy)", designation: "UI/UX Designer", image: "/about/abdullah.png" },
  { id: 1, name: "Akash Gharami", designation: "Creative Designer", image: "/about/akash.png" },
  { id: 2, name: "Shaharior Islam", designation: "Graphic Designer", image: "/about/shahriar.png" },
];

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const isScrolling = useRef(false);
  const sectionRef = useRef(null);

  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  const [isMobile, setIsMobile] = useState(false);
  const [lockScroll, setLockScroll] = useState(false);

  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Scroll handler
  const handleScroll = useCallback(
    (e: React.WheelEvent) => {
      if (!isMobile) {
        if (isScrolling.current) return;
        isScrolling.current = true;
        if (e.deltaY > 0) setActiveIndex((prev) => (prev + 1) % teamMembers.length);
        else setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
        setTimeout(() => (isScrolling.current = false), 800);
        return;
      }

      if (!isInView) return;
      if (isScrolling.current) return;
      isScrolling.current = true;

      if (e.deltaY > 0 && activeIndex < teamMembers.length - 1) setActiveIndex((prev) => prev + 1);
      else if (e.deltaY < 0 && activeIndex > 0) setActiveIndex((prev) => prev - 1);

      setTimeout(() => (isScrolling.current = false), 700);
    },
    [isMobile, activeIndex, isInView]
  );

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => { if (!isMobile) return; touchStartY.current = e.touches[0].clientY; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isMobile || !isInView) return;
    touchEndY.current = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY.current;
    if (Math.abs(diff) < 50) return;
    if (isScrolling.current) return;
    isScrolling.current = true;
    if (diff > 0 && activeIndex < teamMembers.length - 1) setActiveIndex((prev) => prev + 1);
    else if (diff < 0 && activeIndex > 0) setActiveIndex((prev) => prev - 1);
    setTimeout(() => (isScrolling.current = false), 700);
  };

  // Button handlers
 const prevCard = () => {
  setActiveIndex((prev) =>
    prev === 0 ? teamMembers.length - 1 : prev - 1
  );
};

const nextCard = () => {
  setActiveIndex((prev) =>
    prev === teamMembers.length - 1 ? 0 : prev + 1
  );
};


  return (
    <section
      ref={sectionRef}
      onWheel={handleScroll}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`py-8 md:py-15 px-4 flex justify-center w-full font-sans select-none ${lockScroll ? "h-screen overflow-hidden" : "overflow-hidden"}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ background: "linear-gradient(176.74deg, #1A084B -13.59%, #4A24A5 109.86%)" }}
        className="max-w-330 w-full min-h-187.5 md:h-259 rounded-[40px] md:rounded-[60px] px-4 py-12 md:p-16 relative flex flex-col items-center justify-between gap-10 md:gap-0"
      >
        {/* Header */}
        <div className="text-center space-y-4 md:space-y-6">
          <motion.div className="inline-flex items-center gap-2  ">
            <div className="w-2.5 h-2.5 lg:w-2.5 lg:h-2.5 xl:w-3.5 xl:h-3.5 rounded-full bg-white flex items-center justify-center">
                <div className="w-0.5 h-0.5 lg:w-0.5 lg:h-0.5 xl:w-1 xl:h-1 rounded-full bg-[#7736FF]" />
              </div>
            <span className="text-white text-xs display-xs font-medium">Team Member</span>
          </motion.div>
          <motion.h2 className="display-xxl text-white font-medium tracking-[-3%]">
            Here is our Expert <br className="hidden md:block" /><span >Team Members</span>
          </motion.h2>
        </div>


        {isMobile && (
          <div className="flex justify-center gap-6 mt-6">
            <button onClick={prevCard} className="bg-white/30 hover:bg-white/50 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl"><IoIosArrowBack /></button>
            <button onClick={nextCard} className="bg-white/30 hover:bg-white/50 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl"><IoIosArrowForward /></button>
          </div>
        )}

        {/* Cards */}
        <div className="relative w-full h-100 md:h-150 flex justify-center items-center">
          <AnimatePresence initial={false}>
            {teamMembers.map((member, index) => {
              if (isMobile && index !== activeIndex) return null;

              let offset = index - activeIndex;
              if (offset < -1) offset += teamMembers.length;
              if (offset > 1) offset -= teamMembers.length;

              const xOffset = isMobile ? 0 : 400;
              let x = 0, scale = 0.8, zIndex = 0, opacity = 0.4, rotateY = 0, y = 0;

              if (offset === 0) { x = 0; scale = 1; zIndex = 30; opacity = 1; y = 0; }
              else if (!isMobile && (offset === 1 || offset === -1)) { x = offset * xOffset; scale = 0.85; zIndex = 20; opacity = 0.6; rotateY = offset === 1 ? -10 : 10; y = 80; }

              return (
                <motion.div
                  key={member.id}
                  drag={isMobile ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, info) => {
                    if (!isMobile) return;
                    const threshold = 50;
                    if (info.offset.x < -threshold) nextCard();
                    if (info.offset.x > threshold) prevCard();
                  }}
                  animate={{ x, y, scale, zIndex, opacity, rotateY }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute flex flex-col items-center cursor-grab active:cursor-grabbing w-full"
                  style={{ perspective: "1200px" }}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="relative overflow-hidden rounded-[30px] md:rounded-[40px]  w-[92%] max-w-90 aspect-4/5 md:w-[400px] md:h-[500px]">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <motion.div animate={{ opacity: offset === 0 ? 1 : 0, y: offset === 0 ? 12 : 25 }} className="text-center mt-4">
                    <h4 className="text-white display-s tracking-[-1%] pb-4 font-medium">{member.name}</h4>
                    <p className="text-[#CCCCE9] body-m leading-1.4 font-normal">{member.designation}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Mobile Buttons below card */}
        

        {/* Progress Bar */}
        <div className="w-full max-w-270 h-1 bg-white/10 rounded-full overflow-hidden mt-8">
          <motion.div animate={{ width: "33.3%", x: `${activeIndex * 100}%` }} transition={{ duration: 0.8 }} className="h-full bg-white " />
        </div>
      </motion.div>
    </section>
  );
};

export default Team;


