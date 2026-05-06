"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import BackgroundCurve from "../BackgroundCurve";

const  NewsLetterPortfolio: React.FC = () => {
  return (
    <section className="container-custom py-15 px-4 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden flex flex-col lg:flex-row items-center justify-between mx-auto rounded-[50px] p-8 md:p-14 gap-10 lg:gap-30  min-h-129.25 w-full"
        style={{
          background:
            "linear-gradient(176.74deg, #1A084B -13.59%, #4A24A5 109.86%)",
        }}
      >
        {/* --- SVG Curve Shape  --- */}

        <BackgroundCurve className="absolute -right-10 -top-18 " />

        {/* Left Side Content */}
        <div className="relative z-10 flex flex-col gap-14 max-w-[627px] w-full">
          <div className="relative flex flex-col gap-10.5 ">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="display-xl text-white leading-[1.1] text-balance"
            >
              Let’s Build Your Next <br className="hidden md:block" /> Design
              Project
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-start gap-4"
            >
              <span className="mt-2.5 flex h-5.25 w-5.25 shrink-0 items-center justify-center rounded-full bg-primary-color">
                <span className="h-2 w-2 rounded-full bg-text-primary"></span>
              </span>

              <p className="body-l text-white/60 pt-2">
                We create modern and user-friendly designs that help your
                business grow and stand out.
              </p>
            </motion.div>
          </div>

          {/* Social Share Section  */}
          <div className=" w-[214.93px]">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white display-xs mb-4 font-medium"
            >
              Social Share :
            </motion.p>
            <div className="flex items-center gap-5">
              {[
                {
                  icon: (
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5204 2.25H11.7148C9.39322 2.25 7.51123 4.13199 7.51123 6.45354V15.75H10.5158V6.09071C10.5158 5.6264 10.8922 5.25 11.3565 5.25H13.5204V2.25Z"
                        fill="white"
                      />
                      <path
                        d="M4.50684 10.5H7.51142H10.516H13.5206V7.5H10.516H7.51142H4.50684V10.5Z"
                        fill="white"
                      />
                    </svg>
                  ),

                  href: "https://www.facebook.com/designfixter",
                },
                {
                  icon: (
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.3213 1.5C14.6428 1.50003 16.5244 3.38162 16.5244 5.70312V12.2959C16.5244 14.6174 14.6428 16.5 12.3213 16.5H5.70508C3.38367 16.4998 1.50195 14.6173 1.50195 12.2959V5.70312C1.50199 3.38171 3.38369 1.50017 5.70508 1.5H12.3213ZM9.01367 5.25C6.9395 5.25007 5.25781 6.92898 5.25781 9C5.25799 11.0709 6.93961 12.7499 9.01367 12.75C11.0878 12.75 12.7693 11.0709 12.7695 9C12.7695 6.92893 11.0879 5.25 9.01367 5.25ZM9.01367 6.75C10.2581 6.75018 11.2666 7.75747 11.2666 9C11.2664 10.2424 10.2579 11.2498 9.01367 11.25C7.76925 11.25 6.75995 10.2425 6.75977 9C6.75977 7.75736 7.76913 6.75 9.01367 6.75ZM13.5205 3.75C13.1057 3.75004 12.7695 4.08581 12.7695 4.5C12.7697 4.91403 13.1058 5.24996 13.5205 5.25C13.9352 5.25 14.2713 4.91405 14.2715 4.5C14.2715 4.08579 13.9354 3.75 13.5205 3.75Z"
                        fill="white"
                      />
                    </svg>
                  ),
                  href: "https://www.facebook.com/designfixter",
                },
                {
                  icon: (
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.4822 3C9.90189 3 8.62081 4.34315 8.62081 6C8.62081 6.25037 8.65006 6.49357 8.70518 6.72606C7.18567 6.72606 4.89695 6.41931 2.98551 4.5072C2.73133 4.25294 2.26264 4.42294 2.28027 4.78176C2.56355 10.547 5.03638 12.2287 6.30983 12.3333C5.48751 13.1443 4.293 13.7843 3.09101 14.0716C2.77378 14.1475 2.69541 14.4942 3.00561 14.5949C3.86569 14.8743 5.09677 14.9818 5.75942 15C10.4472 15 14.2573 11.0604 14.3421 6.16672C14.9576 5.76708 15.3518 4.89937 15.5733 4.28468C15.6273 4.13498 15.3816 3.96055 15.2345 4.0217C14.7747 4.21281 14.191 4.25811 13.6938 4.09636C13.169 3.42695 12.3732 3 11.4822 3Z"
                        fill="white"
                      />
                    </svg>
                  ),
                  href: "https://www.linkedin.com/company/designfixter",
                },
                {
                  icon: (
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.00586 14.666H1.33496V5.66602H4.00586V14.666ZM8.67969 5.66602V6.22754C9.09727 6.08018 9.54653 6.00003 10.0146 6C12.2272 6 14.0215 7.79086 14.0215 10V14.666H11.3506V10C11.3506 9.26362 10.7522 8.66602 10.0146 8.66602C9.27726 8.66615 8.67969 9.2637 8.67969 10V14.666H6.00879V5.66602H8.67969ZM2.66992 1.33301C3.40732 1.33301 4.00568 1.92979 4.00586 2.66602C4.00586 3.4024 3.40743 4 2.66992 4C1.93261 3.99978 1.33496 3.40226 1.33496 2.66602C1.33514 1.92992 1.93271 1.33323 2.66992 1.33301Z"
                        fill="white"
                      />
                    </svg>
                  ),
                  href: "https://www.linkedin.com/company/designfixter",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{
                    y: -5,
                    backgroundColor: "#FFFFFF",
                    color: "#4A24A5",
                    borderColor: "#FFFFFF",
                  }}
                  className="w-[38.67px] h-[38.67px] flex items-center justify-center text-white rounded-full border border-white/30 transition-all duration-300 active:scale-95"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side  */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative z-10 w-full lg:w-115.25 aspect-461/405 max-w-115.25"
        >
          <div className="relative w-full h-full rounded-[40px] overflow-hidden group border border-white/10">
            <Image
              src="/image/NewsLetter/newsletter.png"
              alt="Design Portfolio Showcase"
              fill
              sizes="(max-width: 1024px) 100vw, 461px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NewsLetterPortfolio;
