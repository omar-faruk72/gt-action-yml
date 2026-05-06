"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SecondaryButton from "../button/SecondaryButton";

interface BenefitCardProps {
  title: string;
  desc: string;
  side: "left" | "right";
  index: number;
}

const BenefitsSection: React.FC = () => {
  const benefitsData = [
    {
      title: "Better User Experience",
      desc: "We make simple and smooth designs that people love to use.",
      side: "right",
    },
    {
      title: "Higher Conversion Rates",
      desc: "Our designs are optimized to turn visitors into paying customers.",
      side: "left",
    },
    {
      title: "Stronger Brand Identity",
      desc: "We create designs that make your brand look clear and memorable.",
      side: "right",
    },
    {
      title: "Business Growth",
      desc: "Good design helps your business grow faster and stand out.",
      side: "left",
    },
  ];

  // SVG path coordinate
  const linePath = "M75.5 55.25V20.75C75.5 9.70431 66.5457 0.75 55.5 0.75H0";

  const reversedPath =
    "M0 0.75H55.5C66.5457 0.75 75.5 9.70431 75.5 20.75V55.25";

  return (
    <section className="white-bg pb-15 md:px-6 xl:px-0 overflow-hidden font-interTight">
      <div className="container-custom relative px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-15 gap-6 md:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-155"
          >
            <div className="absolute top-[40%] left-[65%] md:top-[44%] md:left-[74%] -translate-x-1/2 -translate-y-1/6 z-20 rotate-[-10deg] whitespace-nowrap scale-70 md:scale-90">
              <SecondaryButton>Benefits</SecondaryButton>
            </div>
            <h2
              className="display-xxl relative z-10"
              style={{
                color: "var(--sec-title-color)",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
              }}
            >
              How Our Design <br /> Drives Results
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-104.5 mt-2 md:mt-4"
          >
            <p className="body-l" style={{ color: "var(--text-secondary)" }}>
              We combine creativity, strategy, and user-focused design to
              deliver solutions that not only look great but also perform and
              grow your business.
            </p>
          </motion.div>
        </div>

        <div className="relative min-h-175 lg:h-[684px] flex items-center justify-center bg-[linear-gradient(to_bottom_right,#F3F4FF_20%,rgba(243,244,255,0.8)_40%,transparent_70%),linear-gradient(to_left,rgba(243,244,255,0.5)_0%,transparent_0%)] rounded-[40px] md:rounded-[60px] overflow-visible p-6 md:p-16">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              color: "var(--white)",
              border: "1px solid var(--text-primary)",
            }}
            className="relative z-30 w-75.25 h-75.25 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.03)] hidden lg:flex items-center justify-center border border-dashed bg-white"
          >
            {/* Logo Inner Circle Animation */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <motion.circle
                cx="150.5"
                cy="150.5"
                r="149"
                fill="none"
                stroke="#7736FF"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, delay: 1.2 }}
              />
            </svg>
            <Image
              src="/image/benifits/b-logo.png"
              alt="logo"
              width={200}
              height={150}
              className="object-contain"
            />
          </motion.div>

          {/* Lines Positioning */}
          <div className="absolute inset-0 hidden lg:block pointer-events-none">
            {/* Card 1: Top Left */}
            <div className="absolute top-[26%] left-[36.5%]">
              <AnimatedLine path={reversedPath} />
            </div>
            {/* Card 2: Top Right */}
            <div className="absolute top-[25.5%] right-[35%] -rotate-90">
              <AnimatedLine path={linePath} />
            </div>
            {/* Card 3: Bottom Left */}
            <div className="absolute bottom-[26%] left-[35.6%] rotate-90">
              <AnimatedLine path={linePath} />
            </div>
            {/* Card 4: Bottom Right */}
            <div className="absolute bottom-[26%] right-[36.5%] rotate-180">
              <AnimatedLine path={reversedPath} />
            </div>
          </div>

          <div className="relative lg:absolute lg:inset-0 w-full h-full flex flex-col justify-between items-center z-40 pointer-events-auto p-0 md:p-16 lg:gap-20">
            <div className="flex flex-col lg:flex-row justify-between w-full gap-8 lg:gap-0 ">
              <BenefitCard index={0} {...benefitsData[0]} side="right" />
              <BenefitCard index={1} {...benefitsData[1]} side="left" />
            </div>
            <div className="flex flex-col lg:flex-row justify-between w-full gap-8 lg:gap-0 mt-8 lg:mt-0">
              <BenefitCard index={2} {...benefitsData[2]} side="right" />
              <BenefitCard index={3} {...benefitsData[3]} side="left" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AnimatedLine = ({ path }: { path: string }) => (
  <svg
    width="77"
    height="80"
    viewBox="0 0 77 80"
    fill="none"
    className="overflow-visible"
  >
    <path
      d={path}
      stroke="#CCCCE9"
      strokeWidth="1.5"
      strokeDasharray="6.6 6.6"
    />
    <motion.path
      d={path}
      stroke="#7736FF"
      strokeWidth="2"
      strokeDasharray="6.6 6.6"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{
        duration: 1.2,
        delay: 0.5,
        ease: "easeInOut",
        times: [0, 0.2, 0.8, 1],
      }}
    />
  </svg>

);

const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  desc,
  side,
  index,
}) => {
  const renderTitle = (text: string) => {
    const words = text.split(" ");
    if (words.length <= 1) return text;
    const lastWord = words.pop();
    return (
      <>
        {words.join(" ")} <br className="hidden lg:block" /> {lastWord}
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      style={{ background: "var(--white)" }}
      className="relative md:w-[421.5px] h-[238px] p-6 md:p-8 rounded-4xl md:rounded-[40px] lg:w-105 min-h-50 md:min-h-58 flex flex-col justify-between gap-4 md:gap-6 "
    >
      <div className="">
        <div
          className={`absolute hidden lg:block top-1/2 -translate-y-1/2 z-40 ${side === "right" ? "right-0" : "left-0"}`}
        >
          {/* outer dot */}
          <div
            style={{ background: "#EAEAFD" }}
            className="w-7 h-7 rounded-full flex items-center justify-center"
          >
            {/* inner dot */}
            <div
              style={{ background: "#1E0A52" }}
              className="w-1.5 h-1.5 rounded-full"
            ></div>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-4.5">
          <div
            style={{
              color: "var(--white)",
              background: "var(--sec-title-color)",
            }}
            className="w-20 h-20 rounded-full flex items-center justify-center shrink-0 shadow-sm relative overflow-hidden"
          >
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2027_405)">
                <path
                  d="M13.5534 5.84277C11.8245 6.55842 10.2535 7.60755 8.93005 8.93027"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.8425 13.5537C5.12455 15.28 4.75333 17.1307 4.75 19.0004"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.84253 24.4463C6.55818 26.1752 7.6073 27.7462 8.93003 29.0696"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.5542 32.1572C15.2805 32.8752 17.1312 33.2464 19.0009 33.2497"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M24.4458 32.1578C26.1747 31.4422 27.7457 30.393 29.0691 29.0703"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M32.1575 24.4467C32.8754 22.7204 33.2466 20.8696 33.25 19"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M32.1574 13.553C31.4418 11.8242 30.3927 10.2531 29.0699 8.92969"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M24.4467 5.8425C22.7204 5.12455 20.8696 4.75333 19 4.75"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.25 18.9997L17.4167 22.1663L23.75 15.833"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2027_405">
                  <rect width="38" height="38" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h4
            style={{ color: "var(--sec-title-color)" }}
            className="display-m font-bold leading-[1.1] tracking-tight"
          >
            {renderTitle(title)}
          </h4>
        </div>
      </div>
      <div className="">
        <p
          style={{ color: "var(--text-secondary)" }}
          className="body-l leading-relaxed max-w-[95%]"
        >
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

export default BenefitsSection;
