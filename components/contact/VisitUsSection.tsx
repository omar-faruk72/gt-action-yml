
"use client";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import SecondaryButton from "@/components/button/SecondaryButton";
import { LuClock3, LuGlobe, LuMail, LuPhone } from "react-icons/lu";

const VisitUsSection = () => {
  const mapDirectionUrl =
    "https://www.google.com/maps/dir//Rafiq+Place,+BM+College+Rd,+Barishal";

  return (
    <section className="w-full white-bg  mx-auto px-5 py-5 md:py-0  md:px-5 xl:px-0  flex justify-center md:mb-[60px] mb-10 mt-10 md:mt-0 font-['Inter_Tight'] relative overflow-visible ">
      {/* Main Container - Responsive flex flow */}
      <div className=" w-full mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-center relative z-10  container-custom  p-0  lg:py-[60px] rounded-[50px]">
        {/* Map Card */}
        <div
          className="relative w-full lg:flex-1 h-85 rounded-[40px] bg-white p-4 md:p-6 overflow-visible shrink-0 lg:shrink"
          style={{
            boxShadow: "0px 60px 154px 0px #E8EDFF99",
          }}
        >
        

          <div className="w-full h-full rounded-[30px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.5843440478147!2d90.35824531496403!3d22.701002085111162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755341a99242d5f%3A0xc0f19c968f44d8b5!2sBM+College+Rd%2C+Barisal!5e0!3m2!1sen!2sbd!4v1712546400000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Details Card */}
        <div
          className="w-full  relative lg:flex-1 h-85 rounded-[40px] bg-white p-10 md:p-8 flex flex-col  border border-white shrink-0 lg:shrink relative"
          style={{
            boxShadow: "0px 60px 154px 0px #E8EDFF99",
          }}
        >
          {/* SecondaryButton Badge Container */}
          <div
            className="absolute 
      w-[160px] h-[60px] 
     -top-4 -left-5 md:-top-7 md:-left-15  md:w-[240px] md:h-[80px] 
     z-30 pointer-events-none  overflow-visible flex items-center justify-center "
            style={{
              transform: "rotate(10deg)",
              transformOrigin: "center center",
            }}
          >
            <SecondaryButton className="text-[10px] py-2 px-4 md:text-[14px] md:py-3 md:px-8 scale-60 xl:scale-80 whitespace-nowrap">
              Our Location
            </SecondaryButton>
          </div>
          <div className="space-y-0.5 border-b border-dashed border-gray-200 pb-[10px]">
            <h2 className=" display-xs font-medium text-[#1E0A52]">
              Visit Our Office
            </h2>
            <p className="text-[#5F5F86] font-normal body-s">
              Barishal, Bangladesh
            </p>
          </div>

          {/* <div className="w-full h-px border-t border-dashed border-gray-200 " /> */}
          

          <div className="flex flex-col pt-[10px] gap-y-1 h-full">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt
                  className=" text-red-500 mt-1 shrink-0"
                  size={18}
                />
                <p className="text-[#1E0A52] font-normal text-[15px] md:text-[16px]">
                  Level 1, Rafiq Place, BM College Rd
                </p>
              </div>

              <div className="flex items-center gap-3">
                <LuClock3 className="text-black shrink-0" size={18} />
                <p className="text-[#1E0A52] font-normal text-[15px] md:text-[16px]">
                  Open 24 Hours
                </p>
              </div>

              <div className="flex items-center gap-3">
                <LuPhone className=" shrink-0" size={18} />
                <p className="text-[#1E0A52] font-normal text-[15px] md:text-[16px]">
                  +880 1805-459127
                </p>
              </div>

              <div className="flex items-center gap-3">
                <LuMail className="text-[#1192c5] shrink-0" size={18} />
                <a
                  href="mailto:contact@adsfixter.com?subject=Hello&body=I want to contact you"
                  target="_blank"
                  className="text-[#1E0A52] font-normal border-b border-[#1E0A52] hover:text-[#7736FF] transition-colors text-[15px] md:text-[16px]"
                >
                 designfixter@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-auto ">
              <a
                href={mapDirectionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#7736FF] text-white px-8 py-3 rounded-full font-semibold text-[16px] inline-block hover:scale-105 transition-transform shadow-lg shadow-purple-100"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUsSection;
