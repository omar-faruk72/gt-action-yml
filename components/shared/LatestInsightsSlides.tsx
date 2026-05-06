/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Mousewheel, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/autoplay";
// import Image from "next/image";
// import Link from "next/link";
// import { blogsData } from "@/constants/blog-data";

// const LatestInsightsSlides = () => {
//   const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
//   const [progress, setProgress] = useState(0);

//   const totalSlides = blogsData.length;

//   const customCursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 64 64' fill='none'><circle cx='32' cy='32' r='28' fill='%237736FF'/><g transform='translate(24, 24) scale(0.7)' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><path d='M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2'/><path d='M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2'/><path d='M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8'/><path d='M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15'/></g></svg>") 40 40, auto`;

//   return (
//     <section className="py-16">
//       <Swiper
//         slidesPerView={"auto"}
//         // spaceBetween={48}
//         freeMode={true}
//         loop={true}
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true,
//         }}
//         mousewheel={{ forceToAxis: true }}
//         modules={[FreeMode, Mousewheel, Autoplay]}
//         className="overflow-visible!"
//         onSlideChange={(swiper) => {
//           const currentIndex = swiper.realIndex + 1;
//           setProgress(currentIndex / totalSlides);
//         }}
//         onInit={(swiper) => {
//           setProgress(1 / totalSlides);
//         }}
//         breakpoints={{
//           320: { spaceBetween: 10 },
//           1024: { spaceBetween: 48 },
//         }}
//       >
//         {blogsData.map((blog, index) => (
//           <SwiperSlide key={blog.slug} className="w-fit!">
//             <Link href={`/blog/${blog.slug}`} className="block">
//               <div
//                 className="relative flex flex-col md:flex-row items-center bg-white transition-all duration-500 ease-in-out gap-[48px] py-[18px] px-4.5 md:pr-16"
//                 style={{
//                   width: "min(90vw, 906px)",
//                   height: "auto",
//                   minHeight: "449px",
//                   borderRadius: "50px",
//                   cursor: hoveredCardId === blog.slug ? customCursor : "grab",
//                 }}
//                 onMouseEnter={() => setHoveredCardId(blog.slug)}
//                 onMouseLeave={() => setHoveredCardId(null)}
//               >
//                 {/* 1. Card Image */}
//                 <div className="relative w-full md:w-106.5 aspect-square md:h-103.25 rounded-[30px] md:rounded-[40px] overflow-hidden shrink-0">
//                   <Image
//                     src={blog.bannerImage}
//                     alt={blog.title}
//                     fill
//                     sizes="(max-width: 768px) 100vw, 426px"
//                     className={`object-cover transition-transform duration-700 ${
//                       hoveredCardId === blog.slug ? "scale-105" : "scale-100"
//                     }`}
//                   />
//                 </div>

//                 {/* 2. Content Area */}
//                 <div className="grow  flex-col justify-between w-full">
//                   <div>
//                     <div
//                       className="w-12 h-12 md:w-20 md:h-20 rounded-full border flex items-center justify-center mb-6 text-[16px] md:text-[20px] font-semibold"
//                       style={{
//                         borderColor: "var(--text-primary)",
//                         color: "var(--sec-title-color)",
//                       }}
//                     >
//                       {String(index + 1).padStart(2, "0")}
//                     </div>

//                     <h3
//                       className="display-m leading-[1.2] max-w-full md:max-w-85 mb-6"
//                       style={{ color: "var(--sec-title-color)" }}
//                     >
//                       {blog.title}
//                     </h3>
//                   </div>

//                   <div className="pt-6 relative">
//                     <div
//                       className="absolute top-0 left-0 w-full h-[1px]"
//                       style={{
//                         backgroundImage: `linear-gradient(to right, #CCCCE9 50%, rgba(255,255,255,0) 0%)`,
//                         backgroundPosition: "top",
//                         backgroundSize: "10px 1px",
//                         backgroundRepeat: "repeat-x",
//                       }}
//                     ></div>

//                     <div className="flex items-center gap-4 mb-6">
//                       <div className="relative w-10 h-10 md:w-12.5 md:h-12.5 rounded-full overflow-hidden shrink-0 border border-gray-100">
//                         <Image
//                           src={blog.authorImage}
//                           alt={blog.authorName}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>

//                       <div>
//                         <p
//                           className="display-xs font-medium"
//                           style={{ color: "var(--sec-title-color)" }}
//                         >
//                           {blog.authorName}
//                         </p>
//                         <p
//                           className="body-m opacity-70"
//                           style={{ color: "var(--text-secondary)" }}
//                         >
//                           {blog.categories}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex flex-wrap items-center justify-end gap-4 text-[13px] md:text-[14px]">
//                       <div
//                         className="flex items-center gap-2"
//                         style={{ color: "var(--sec-title-color)" }}
//                       >
//                         <div className="bg-[#F1F2FF] p-2 rounded-full">
//                           <svg
//                             width="18"
//                             height="18"
//                             viewBox="0 0 18 18"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <g clipPath="url(#clip0_2036_471)">
//                               <path
//                                 d="M3.00037 5.25C3.00037 4.85218 3.1584 4.47064 3.43971 4.18934C3.72101 3.90804 4.10254 3.75 4.50037 3.75H13.5004C13.8982 3.75 14.2797 3.90804 14.561 4.18934C14.8423 4.47064 15.0004 4.85218 15.0004 5.25V14.25C15.0004 14.6478 14.8423 15.0294 14.561 15.3107C14.2797 15.592 13.8982 15.75 13.5004 15.75H4.50037C4.10254 15.75 3.72101 15.592 3.43971 15.3107C3.1584 15.0294 3.00037 14.6478 3.00037 14.25V5.25Z"
//                                 stroke="#1E0A52"
//                                 strokeWidth="1.4"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                               />
//                               <path
//                                 d="M12.0005 2.25V5.25"
//                                 stroke="#1E0A52"
//                                 strokeWidth="1.4"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                               />
//                               <path
//                                 d="M5.99951 2.25V5.25"
//                                 stroke="#1E0A52"
//                                 strokeWidth="1.4"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                               />
//                               <path
//                                 d="M3.00037 8.25H15.0004"
//                                 stroke="#1E0A52"
//                                 strokeWidth="1.4"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                               />
//                               <path
//                                 d="M5.99951 11.25H7.49951V12.75H5.99951V11.25Z"
//                                 stroke="#1E0A52"
//                                 strokeWidth="1.4"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                               />
//                             </g>
//                             <defs>
//                               <clipPath id="clip0_2036_471">
//                                 <rect width="18" height="18" fill="white" />
//                               </clipPath>
//                             </defs>
//                           </svg>
//                         </div>
//                         <span className="body-m">{blog.publishedDate}</span>
//                       </div>

//                       <div
//                         className="flex items-center gap-2"
//                         style={{ color: "var(--sec-title-color)" }}
//                       >
//                         <div className="bg-[#F1F2FF] p-2 rounded-full">
//                           <svg
//                             width="18"
//                             height="18"
//                             viewBox="0 0 18 18"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path
//                               d="M9 4.5V9H12.375M15.75 9C15.75 9.88642 15.5754 10.7642 15.2362 11.5831C14.897 12.4021 14.3998 13.1462 13.773 13.773C13.1462 14.3998 12.4021 14.897 11.5831 15.2362C10.7642 15.5754 9.88642 15.75 9 15.75C8.11358 15.75 7.23583 15.5754 6.41689 15.2362C5.59794 14.897 4.85382 14.3998 4.22703 13.773C3.60023 13.1462 3.10303 12.4021 2.76381 11.5831C2.42459 10.7642 2.25 9.88642 2.25 9C2.25 7.20979 2.96116 5.4929 4.22703 4.22703C5.4929 2.96116 7.20979 2.25 9 2.25C10.7902 2.25 12.5071 2.96116 13.773 4.22703C15.0388 5.4929 15.75 7.20979 15.75 9Z"
//                               stroke="#1E0A52"
//                               strokeWidth="1.4"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             />
//                           </svg>
//                         </div>
//                         <span className="body-m">{blog.readTime} read</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Progress Bar Area */}
//       <div className="mt-12  w-[95%] h-1 bg-gray-200 rounded-full mx-auto overflow-hidden relative">
//         <div
//           className="absolute left-0 top-0 h-full transition-all duration-500 ease-out"
//           style={{
//             backgroundColor: "var(--sec-title-color)",
//             width: `${progress * 100}%`,
//           }}
//         ></div>
//       </div>
//     </section>
//   );
// };

// export default LatestInsightsSlides;

"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import Image from "next/image";
import Link from "next/link";
import { blogsData } from "@/constants/blog-data";

const LatestInsightsSlides = () => {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const swiperRef = useRef<any>(null);
  const totalSlides = blogsData.length;

  const customCursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 64 64' fill='none'><circle cx='32' cy='32' r='28' fill='%237736FF'/><g transform='translate(24, 24) scale(0.7)' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><path d='M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2'/><path d='M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2'/><path d='M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8'/><path d='M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15'/></g></svg>") 40 40, auto`;

  return (
    <section
      className="py-16"
      onMouseEnter={() => {
        const swiper = swiperRef.current;
        if (!swiper) return;

        swiper.autoplay.stop();

        // 🔥 freeze animation instantly
        swiper.wrapperEl.style.transitionDuration = "0ms";
      }}
      onMouseLeave={() => {
        const swiper = swiperRef.current;
        if (!swiper) return;

        swiper.wrapperEl.style.transitionDuration = "8000ms";
        swiper.autoplay.start();
      }}
    >
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={"auto"}
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        loop={true}
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        mousewheel={{ forceToAxis: true }}
        modules={[FreeMode, Mousewheel, Autoplay]}
        className="overflow-visible! continuous-slider"
        onSlideChange={(swiper) => {
          const realIndex = swiper.realIndex;
          setProgress((realIndex + 1) / totalSlides);
        }}
        onAutoplayTimeLeft={(swiper, time, prog) => {
          setProgress(1 - prog);
        }}
        breakpoints={{
          320: { spaceBetween: 15 },
          1024: { spaceBetween: 48 },
        }}
      >
        {blogsData.map((blog, index) => (
          <SwiperSlide key={blog.slug} className="w-fit!">
            <Link href={`/blog/${blog.slug}`} className="block">
              <div
                className="relative flex flex-col md:flex-row items-center bg-white transition-shadow duration-500 gap-[48px] py-[18px] px-4.5 md:pr-16"
                style={{
                  width: "min(90vw, 906px)",
                  minHeight: "449px",
                  borderRadius: "50px",
                  cursor: hoveredCardId === blog.slug ? customCursor : "grab",
                }}
                onMouseEnter={() => setHoveredCardId(blog.slug)}
                onMouseLeave={() => setHoveredCardId(null)}
              >
                {/* Image */}
                <div className="relative w-full md:w-106.5 aspect-square md:h-103.25 rounded-[30px] md:rounded-[40px] overflow-hidden shrink-0">
                  <Image
                    src={blog.bannerImage}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 426px"
                    className={`object-cover transition-transform duration-1000 ease-out ${
                      hoveredCardId === blog.slug ? "scale-110" : "scale-100"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="grow flex flex-col justify-between w-full">
                  <div>
                    <div
                      className="w-12 h-12 md:w-20 md:h-20 rounded-full border flex items-center justify-center mb-6 text-[16px] md:text-[20px] font-semibold"
                      style={{
                        borderColor: "var(--text-primary)",
                        color: "#1E0A52",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3 className="display-m leading-[1.2] max-w-full md:max-w-85 mb-6 text-[#1E0A52]">
                      {blog.title}
                    </h3>
                  </div>

                  <div className="pt-6 relative">

                   
                      <div
                        className="absolute top-0 left-0 w-full h-[1px]"
                        style={{
                          backgroundImage: `linear-gradient(to right, #CCCCE9 50%, rgba(255,255,255,0) 0%)`,
                          backgroundPosition: "top",
                          backgroundSize: "10px 1px",
                          backgroundRepeat: "repeat-x",
                        }}
                      ></div>

                      <div>
                        <p className="display-xs font-medium text-[#1E0A52]">
                          {blog.authorName}
                        </p>
                        <p className="body-m opacity-70 text-[#5f5f86]">
                          {blog.categories}
                        </p>
                      </div>
                    

                    <div className="flex flex-wrap items-center justify-end gap-4 text-[13px] md:text-[14px]">
                      <div className="flex items-center gap-2 text-[#1E0A52]">
                        <div className="bg-[#F1F2FF] p-2 rounded-full">
                          <CalendarIcon />
                        </div>
                        <span className="body-m">{blog.publishedDate}</span>
                      </div>

                      <div className="flex items-center gap-2 text-[#1E0A52]">
                        <div className="bg-[#F1F2FF] p-2 rounded-full">
                          <ClockIcon />
                        </div>
                        <span className="body-m">{blog.readTime} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Progress Bar */}
      <div className="mt-12 w-[95%] h-1 bg-gray-200 rounded-full mx-auto overflow-hidden relative">
        <div
          className="absolute left-0 top-0 h-full transition-all duration-300 ease-out"
          style={{
            backgroundColor: "var(--sec-title-color)",
            width: `${progress * 100}%`,
          }}
        />
      </div>

      <style jsx global>{`
        .continuous-slider .swiper-wrapper {
          transition-timing-function: linear !important;
        }

        .continuous-slider:hover .swiper-wrapper {
          transition-duration: 0s !important;
        }
      `}</style>
    </section>
  );
};

// Icons (same)
const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M3 5.25C3 4.85 3.16 4.47 3.44 4.19C3.72 3.91 4.1 3.75 4.5 3.75H13.5C13.9 3.75 14.28 3.91 14.56 4.19C14.84 4.47 15 4.85 15 5.25V14.25C15 14.65 14.84 15.03 14.56 15.31C14.28 15.59 13.9 15.75 13.5 15.75H4.5C4.1 15.75 3.72 15.59 3.44 15.31C3.16 15.03 3 14.65 3 14.25V5.25Z"
      stroke="#1E0A52"
      strokeWidth="1.4"
    />
  </svg>
);

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M9 4.5V9H12.375M15.75 9C15.75 9.88642 15.5754 10.7642 15.2362 11.5831C14.897 12.4021 14.3998 13.1462 13.773 13.773C13.1462 14.3998 12.4021 14.897 11.5831 15.2362C10.7642 15.5754 9.88642 15.75 9 15.75C8.11358 15.75 7.23583 15.5754 6.41689 15.2362C5.59794 14.897 4.85382 14.3998 4.22703 13.773C3.60023 13.1462 3.10303 12.4021 2.76381 11.5831C2.42459 10.7642 2.25 9.88642 2.25 9C2.25 7.20979 2.96116 5.4929 4.22703 4.22703C5.4929 2.96116 7.20979 2.25 9 2.25C10.7902 2.25 12.5071 2.96116 13.773 4.22703C15.0388 5.4929 15.75 7.20979 15.75 9Z"
      stroke="#1E0A52"
      strokeWidth="1.4"
    />
  </svg>
);

export default LatestInsightsSlides;
