/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import bannerPhoto from "../../public/image/mosarefvai.png"
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import { LuAward } from "react-icons/lu";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import PrimaryButton from "@/components/button/PrimaryButton";
import VisitUsSection from "@/components/contact/VisitUsSection";

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async () => {
    if (!agreed) {
      toast.error("Please agree to the privacy policy before submitting!");
      return;
    }

    if (!form.current?.checkValidity()) {
      form.current?.reportValidity();
      return;
    }

    setIsSending(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      toast.success("Message sent successfully!");
      form.current.reset();
      setAgreed(false);
    } catch (error: any) {
      toast.error("Failed to send message!");
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="bg-gradient-to-br from-[#f3f4ff] to-[#ffffff]">
      <Toaster position="top-center" reverseOrder={false} />
      <section className=" pt-10   overflow-hidden pb-2">
        <div className="container-custom relative md:px-4 lg:px-0
        ">
          {/* Hero Section Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center md-40 md:mb-[60px] relative min-h-[655.12px] mt-10 md:mt-10">
            <div
              className="absolute pointer-events-none z-0 hidden md:block"
              style={{
                width: "985px",
                height: "281.74px",
                top: "-80.83px",
                right: "-100px",
                opacity: "1",
              }}
            >
              <motion.img
                initial={{ x: 100, y: -100, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src="/image/curve-line.png"
                alt="background curve"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Left Side Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              // className="relative z-10  order-2 lg:order-1 px-4 md:px-0 mt-10 md:mt-0"
              className="relative z-10 order-2 lg:order-1 px-6 md:px-12 lg:px-0 md:mt-10 md:mt-16 lg:mt-0"
            >
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-2 mb-4"
              >
                <span className="flex items-center justify-center rounded-full overflow-hidden">
                  <span className="p-3 bg-white rounded-full shadow-sm">
                    <LuAward size={18} />
                  </span>
                </span>
                <span className="body-s font-medium sec-color">Contact Us</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="display-xxl mb-8"
                style={{ color: "var(--sec-title-color)", lineHeight: "1.1" }}
              >
                Let’s work <br /> Together
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="body-m text-gray-500 max-w-[522px] mb-[42px]"
              >
                Saasmo has modernized headless CMS, featuring an editing
                experience with every amenity.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col gap-4 mb-[42px]"
              >
                <p
                  className="title-l font-medium "
                  style={{ color: "var(--sec-title-color)" }}
                >
                  20+ Join our member
                </p>
                <div className="flex items-center">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 relative">
                        <Image
                          width={40}
                          height={40}
                          src={`https://randomuser.me/api/portraits/thumb/men/${i + 10}.jpg`}
                          alt="member"
                          className="w-10 h-10 rounded-full border-2 border-white object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-row items-center gap-4"
              >
                <PrimaryButton href="https://wa.me/8801984658743">
                  Get Started Free
                </PrimaryButton>
              </motion.div>
            </motion.div>

            {/* Right Image with Overlays */}
            <div className="relative z-10 order-1 lg:order-2 px-6 md:px-12 lg:px-0 mt-10 md:mt-16 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="rounded-[30px] md:rounded-[40px] overflow-hidden relative w-full h-[350px] md:h-[489px] md:h-[562px]"
              >
                <Image
                  src={bannerPhoto}
                  alt="Team working"
                  fill
                  className="object-cover"
                  priority
                  // sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>

              {/* Email Overlay Card */}
              <motion.a
                href="mailto:designfixter@gmail.com"
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -15, 0],
                  rotate: [-2, 2, -2],
                }}
                whileHover={{ scale: 1.05 }}
                transition={{
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 0.6, delay: 0.4 },
                  opacity: { duration: 0.6, delay: 0.4 },
                }}
                className="absolute top-15 -left-2 md:top-30 md:left-0 lg:-left-20 white-bg p-3 md:p-4  rounded-[30px] flex items-center gap-3 md:gap-4 min-w-[200px] md:min-w-[389px] md:h-[118px] z-20 scale-[0.85] md:scale-90 lg:scale-100 cursor-pointer border border-gray-100"
              >
                <div
                  className="flex items-center  justify-center shrink-0"
                  style={{ width: "46.66px", height: "39.66px" }}
                >
                  <MdEmail
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                    }}
                    className="sec-color"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[18px] md:text-[24px] font-bold text-[#0e0e2c] leading-tight antialiased">
                    Email
                  </p>
                  <p className="body-xl  text-gray-500 font-medium tracking-tight antialiased">
                    designfixter@gmail.com
                  </p>
                </div>
                <div className="ml-auto w-8 h-8 md:w-[43px] md:h-[43px] md:-mt-14 md:-mr-2 bg-[#c3ff41] rounded-full flex items-center justify-center text-black shadow-sm shrink-0">
                  <HiArrowRight size={14} />
                </div>
              </motion.a>

              {/* Rating Overlay Card */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -15, 0],
                  rotate: [2, -2, 2],
                  scale: [1, 1.02, 1],
                }}
                whileHover={{ scale: 1.05 }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.6 },

                  y: {
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  },
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  },
                }}
                className="absolute bottom-5 -right-2 md:bottom-10 md:right-0 lg:-right-20 white-bg p-4 md:p-10 rounded-2xl md:rounded-3xl  text-center z-50 scale-75 md:scale-90 lg:scale-100 border border-gray-50 transition-all duration-300"
              >
                <p className="title-l  font-medium text-var[(--sec-title-color)] mb-1 md:mb-5 antialiased">
                  5 Star Ratings
                </p>
                <div className="flex justify-center gap-1 mb-1 md:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="text-var[(--sec-title-color)] text-lg md:text-[22px]"
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="display-l font-bold sec-color leading-none antialiased">
                  5/5
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* map  */}
     
        <VisitUsSection />  
      

      {/* Form Area */}
      <section className="pb-10 md:pb-20 overflow-hidden">
        <div className="container-custom  rounded-[50px] relative md:px-4">
          <div className="md:p-5 p-5 xl:p-0">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="white-bg rounded-[30px] md:rounded-[50px] p-6 md:p-16 mx-auto relative z-10  "
            >
              <form
                ref={form}
                onSubmit={(e) => e.preventDefault()}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[32px]"
              >
                {/* Row 1: Full Name (Full Width) */}
                <div className="flex flex-col gap-3 md:col-span-2">
                  <label className="display-xs ml-2 acc-color">
                    Full Name *
                  </label>
                  <input
                    name="user_name"
                    required
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full p-5 md:px-[24px] md:py-[32px] rounded-[20px] bg-transparent border border-[var(--text-primary)] focus:border-[var(--accent-color)] outline-none body-l transition-all"
                  />
                </div>

                {/* Row 2: Email (Col 1) */}
                <div className="flex flex-col gap-3">
                  <label className="display-xs ml-2 acc-color">
                    Your Email *
                  </label>
                  <input
                    name="user_email"
                    required
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-5 md:px-[24px] md:py-[32px] rounded-[20px] bg-transparent border border-[var(--text-primary)] focus:border-[var(--accent-color)] outline-none body-l transition-all"
                  />
                </div>

                {/* Row 2: Company (Col 2) */}
                <div className="flex flex-col gap-3">
                  <label className="display-xs ml-2 acc-color">
                    Your Company *
                  </label>
                  <input
                    name="user_company"
                    type="text"
                    placeholder="Enter your company name"
                    className="w-full p-5 md:px-[24px] md:py-[32px] rounded-[20px] bg-transparent border border-[var(--text-primary)] focus:border-[var(--accent-color)] outline-none body-l transition-all"
                  />
                </div>

                {/* Row 3: Message (Full Width) */}
                <div className="flex flex-col gap-3 md:col-span-2">
                  <label className="display-xs acc-color ml-2">
                    Your Text *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Write your message"
                    className="w-full p-5 md:px-[24px] md:py-[32px] rounded-[20px] bg-transparent border border-[var(--text-primary)] focus:border-[var(--accent-color)] outline-none body-l resize-none transition-all"
                  ></textarea>
                </div>

                {/* Privacy Policy */}
                <div className="md:col-span-2 flex items-center gap-3 ">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      id="policy"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="peer appearance-none w-6 h-6 border border-[var(--text-primary)] rounded-full checked:bg-[var(--primary-color)] checked:border-[var(--primary-color)] transition-all cursor-pointer"
                    />

                    <svg
                      className="absolute w-4 h-4 white p-0.5 pointer-events-none hidden peer-checked:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <label
                    htmlFor="policy"
                    className="body-l cursor-pointer sec-color select-none"
                  >
                    I agree to the privacy policy
                  </label>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2">
                  <div onClick={handleSubmit} className="w-fit">
                    <PrimaryButton href="">
                      {isSending ? "Sending..." : "Submit the request"}
                    </PrimaryButton>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
