"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PrimaryButton from "@/components/button/PrimaryButton";
import { IoMdStar } from "react-icons/io";

const Banner = () => {
  return (
    <section className="relative overflow-hidden flex flex-col items-center">
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/hero.png" 
          alt="Banner Background"
          fill
          style={{ objectFit: 'cover' }} 
          priority
          unoptimized 
        />
      </div>

      <div className="container-custom  z-10 relative  flex flex-col pt-[100px] pb-10 lg:pt-[360px] lg:py-15 ">
        
      
        <div className="w-full text-center lg:text-left">
          <div className="inline-flex glass-navbar bg-[#2C223F] py-3 px-4 items-center gap-2  rounded-full  ">
           <IoMdStar className="text-[#7736FF]" size={20} />
            <span className="body-l text-white">
              Digital Experience Agency
            </span>
          </div>

          <h1 className="display-xxxl mt-6 text-white">
            Smart Design For <br />
            <span className="text-[#C3FF41]">Growing</span> Brands
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-between">
          
          <div className="w-full lg:w-auto text-center lg:text-left">
            <p className="body-xl text-[#E1E2E5] md:w-2/3 mt-4 mb-8 lg:mb-6">
              We Help Startups And Brands Grow Through High-Quality UI/UX, Graphic, And Motion Design.
            </p>
          </div>

     
          <div className="hidden lg:flex flex-col items-center w-full  md:w-auto">
            <div className="relative flex items-center justify-center">
              <div className="absolute  lg:-left-20 transform -rotate-8 translate-y-5 z-70 transition-transform hover:scale-105 duration-300">
                <div className="rounded-[20px] overflow-hidden w-[100px] h-[150px] relative ">
                  <Image src="/image/banner/folio_social.png" alt="Portfolio 1" fill className="object-cover" />
                </div>
              </div>
              <div className="absolute  lg:right-30 transform -rotate-8 translate-y-6 z-0 transition-transform hover:scale-105 duration-300">
                <div className="rounded-[20px] overflow-hidden w-[100px] h-[100px] relative shadow-xl">
                  <Image src="/image/banner/folio_logo.png" alt="Portfolio 3" fill className="object-cover" />
                </div>
              </div>
              <div className="absolute w-[100px] h-[100px] lg:-left-25 rotate-8 -translate-y-2 -translate-x-1/2 z-30 transition-transform hover:scale-110 duration-300">
                <div className="rounded-[20px] overflow-hidden w-[100px] h-[150px] relative shadow-2xl">
                  <Image src="/image/banner/folio_website.png" alt="Portfolio 2" fill className="object-cover " />
                </div>
              </div>
            </div>
          </div>
        </div>

  
        <div className="flex   gap-6 lg:flex-row justify-center items-center md:justify-between  ">
          <div>
            <PrimaryButton href="/service">
              Get Started
            </PrimaryButton>
          </div>

          <div>
            <Link href="/portfolio" className="group flex items-center gap-3 button-l text-white hover:text-[#C3FF41] transition-all">
              <span className="">View Portfolio</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Banner;




