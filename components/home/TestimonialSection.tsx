"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
import { HiTrendingUp } from "react-icons/hi";
import { HiArrowSmallRight, HiArrowSmallLeft } from "react-icons/hi2";
import { AiFillStar } from "react-icons/ai";
import SecondaryButton from "@/components/button/SecondaryButton";
import Image from "next/image";

import "swiper/css";

interface Testimonial {
  id: number;
  text: string;
  highlightText: string;
  author: string;
  role: string;
  image: string;
  stats: string;
  borderGradient: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "DesignFixter provided us with a complete branding solution that exceeded our expectations.",
    highlightText:
      " Their clean and modern design approach is exactly what our vision needed.",
    author: "Ariful Haque",
    role: "Startup Founder",
    image: "/image/trustedByGrowingBrands/Ariful.png",
    stats: "3x",
    borderGradient: "bg-gradient-to-b from-[#E1D3FF] to-transparent",
  },
  {
    id: 2,
    text: "The team is exceptionally creative. They handled our digital campaign designs with great ",
    highlightText:
      "professionalism and delivered everything on time. Truly a reliable partner.",
    author: "Nusrat Jahan",
    role: "Marketing Head",
    image: "/image/trustedByGrowingBrands/nusrat.png",
    stats: "5x",
    borderGradient: "bg-gradient-to-tl from-[#C3FF4180] to-transparent",
  },
  {
    id: 3,
    text: "I was impressed by their ability to understand the market. The UI/UX work ",
    highlightText:
      "they did for our platform is world-class. It's rare to find this level of quality and detail.",
    author: "Tanvir Ahmed",
    role: "E-commerce Entrepreneur",
    image: "/image/trustedByGrowingBrands/tanvir.png",
    stats: "4x",
    borderGradient: "bg-gradient-to-b from-[#E1D3FF] to-transparent",
  },
  {
    id: 4,
    text: "Working with DesignFixter was a seamless experience. They are highly responsive and their",
    highlightText:
      " attention to detail in visual identity is remarkable. Highly recommended!",
    author: "Sifat Rahman",
    role: "Managing Director",
    image: "/image/trustedByGrowingBrands/Sifat.png",
    stats: "2.5x",
    borderGradient: "bg-gradient-to-tl from-[#C3FF4180] to-transparent",
  },
];

/* ─── Card (extracted to avoid hook-inside-loop issues) ─── */
const TestimonialCard = ({ item }: { item: Testimonial }) => (
  <div
    className={`relative mx-auto rounded-[32px] md:rounded-[50px] p-[12px] md:p-[20px] ${item.borderGradient} flex flex-col h-full w-full max-w-[645px] transition-transform duration-400 hover:-translate-y-4 hover:scale-[1.02]`}
  >
    <div
      style={{
        background: "var(--white)",
        boxShadow: "0px 30px 60px rgba(30, 10, 82, 0.04)",
      }}
      className="w-full h-full flex-1 rounded-[24px] md:rounded-[40px] p-6 md:p-[32px] flex flex-col justify-between border border-white/50"
    >
      {/* Review Text */}
      <p
        style={{ color: "var(--sec-title-color)" }}
        className="display-m font-medium leading-[120%] tracking-[-2%] pb-8 md:pb-[42px]"
      >
        {item.text} <span className="opacity-30">{item.highlightText}</span>
      </p>

      <div className="mt-auto">
        {/* Author Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="border border-[var(--text-primary)] rounded-full p-1.5 shrink-0">
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.author}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 40px, 48px"
                />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-[var(--sec-title-color)] display-xs md:mb-[6px]">
                {item.author}
              </h4>
              <p className="text-gray-400 body-m">{item.role}</p>
            </div>
          </div>

          {/* Stars */}
          <div className="text-right">
            <div className="flex gap-0.5 text-[var(--sec-title-color)]">
              {[...Array(5)].map((_, i) => (
                <AiFillStar key={i} size={22} />
              ))}
            </div>
            <p className="display-s font-bold text-[var(--sec-title-color)] mt-2">
              5.0 <span className="text-gray-400 font-normal">Ratings</span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-6 md:my-[42px] flex items-center justify-center">
          <div className="absolute left-0 w-2.5 h-2.5 rounded-full bg-gray-100/60 z-10" />
          <div className="w-full h-px border-t border-gray-100" />
          <div className="absolute right-0 w-2.5 h-2.5 rounded-full bg-gray-100/60 z-10" />
        </div>

        {/* Stats Row */}
        <div className="flex items-center justify-between">
          <span className="display-xxl font-bold text-[var(--sec-title-color)] leading-none tracking-tighter">
            {item.stats}
          </span>
          <div className="text-right">
            <HiTrendingUp
              size={42}
              className="text-[var(--sec-title-color)] ml-auto"
            />
            <p className="title-l font-bold text-[var(--sec-title-color)] uppercase mt-2">
              Business Growth
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ─── Main Section ─── */
const TestimonialSection: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section style={{ background: "var(--white)" }}>
      <div className="container-custom mx-auto px-4 md:pt-[60px] pt-5 overflow-hidden">
        {/* Header */}
        <div className="relative mb-[60px] flex flex-col items-center text-center">
          <div className="relative inline-block">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[59%] left-[52%] -translate-x-1/2 -translate-y-1/2 z-20 whitespace-nowrap origin-center scale-50 md:scale-90"
            >
              <SecondaryButton>Client Reviews</SecondaryButton>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="display-xxl relative z-10"
              style={{
                color: "var(--sec-title-color)",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
              }}
            >
              Trusted by <br /> Growing Brands
            </motion.h2>
          </div>
        </div>

        {/* Swiper — NO motion.div wrapper inside slides */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={30}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 2,
                slidesPerGroup: 1,
              },
            }}
            className="mySwiper !overflow-visible py-16 px-4"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto flex">
                <TestimonialCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 md:pt-[60px]">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-16 h-16 rounded-[24px] border-2 border-[var(--primary-color)] text-[var(--primary-color)] flex items-center justify-center bg-[var(--white)] hover:bg-gray-50 transition-all active:scale-95"
          >
            <HiArrowSmallLeft size={24} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-16 h-16 rounded-[24px] bg-[var(--primary-color)] flex items-center justify-center text-[var(--white)] shadow-lg shadow-indigo-100 hover:opacity-90 transition-all active:scale-95"
          >
            <HiArrowSmallRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
