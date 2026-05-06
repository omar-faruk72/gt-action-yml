"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Portfolio } from "@/types/index";

interface PortfolioCardProps {
  portfolio: Portfolio;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ portfolio }) => {
  const { id, title, subtitle, thumbnail_image } = portfolio;

  return (
    <Link href={`/portfolio/${id}`} className="block group">
      <div
        className="relative  bg-[#FFFFFF] transition-all duration-500 shadow-[0px_60px_154px_0px_#E8EDFF99] hover:shadow-[0_32px_64px_-15px_rgba(119,54,255,0.18)] flex flex-col"
        style={{
          width: "426px",
          height: "430px",
          borderRadius: "30px",
          padding: "20px",
          opacity: 1,
        }}
      >
        {/* Image Wrapper */}
        <div
          className="relative overflow-hidden"
          style={{
            height: "290px",
            width: "386px",
            borderRadius: "10px",
          }}
        >
          <Image
            src={thumbnail_image}
            alt={title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        </div>

        {/* Divider (Niser Dag) */}
        <hr className="border-t-2 border-dashed border-[#F1F2FF] my-5" />

        {/* Content Section */}
        <div className="flex justify-between items-center h-[75px] gap-5">
          <div className="flex-1 pr-4">
            {/* Title: Single Line Truncate */}
            <h3 className="text-[24px] text-[#1E0A52] mb-1 truncate group-hover:text-primary-color transition-colors duration-300 font-medium leading-tight">
              {title}
            </h3>

            {/* Subtitle: Two Line Truncate (Line Clamp) */}
            <p className="text-[14px] font-normal text-[#5F5F86] opacity-80 leading-[1.4] line-clamp-2">
              {subtitle}
            </p>
          </div>

          {/* Arrow Button */}
          <div className="w-[60px] h-[60px] min-w-[60px] rounded-full border border-[#CCCCE9] bg-white flex items-center justify-center transition-all duration-500 group-hover:bg-primary-color group-hover:border-primary-color group-hover:shadow-[0_10px_20px_rgba(119,54,255,0.3)]">
            <Image
              src={"/arrow-right.png"}
              width={17}
              height={17}
              alt="arrow"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;
