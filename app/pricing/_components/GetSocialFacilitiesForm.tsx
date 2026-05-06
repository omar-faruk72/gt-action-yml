"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FiCheck,
  FiX,
  FiZap,
  FiTarget,
  FiStar,
  FiShield,
  FiActivity,
} from "react-icons/fi";
import Image from "next/image";

interface ComparisonRow {
  feature: string;
  creative?: string | boolean;
  weekly?: string | boolean;
  growth?: string | boolean;
  premium?: string | boolean;
  [key: string]: any;
}

interface GetSocialFacilitiesFormProps {
  comparisonData: ComparisonRow[];
  activeTitle: string;
  activeColumn?: string | null;
}

const GetSocialFacilitiesForm: React.FC<GetSocialFacilitiesFormProps> = ({
  comparisonData,
  activeTitle,
  activeColumn,
}) => {
  const renderValue = (val: string | boolean | undefined) => {
    if (val === true) {
      return (
        <div className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center mx-auto">
          <FiCheck className="text-lg text-[#1E0A52]" />
        </div>
      );
    }
    if (val === false || val === undefined) {
      return (
        <div className="w-8 h-8 rounded-full border border-[#1E0A52] flex items-center justify-center mx-auto">
          <FiX className="text-lg text-[#1E0A52] " />
        </div>
      );
    }
    return <span className="whitespace-nowrap body-xl text-[#1E0A52]">{val}</span>;
  };

  if (!comparisonData || comparisonData.length === 0) return null;

  
  const columns = [
    { key: "creative", label: "Creative Ads", icon: FiTarget },
    { key: "weekly", label: "Weekly", icon: FiStar },
    { key: "growth", label: "Growth", icon: FiActivity },
    { key: "premium", label: "Premium", icon: FiShield },
  ];

  return (
    <section className="mt-10 md:mt-[60px] bg-white">
      <div className="container-custom">
        <div className="mb-10 md:mb-15 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="display-xxl sec-color"
          >
            Get facilities form <span className="text-gray-300">here</span>
          </motion.h2>
        </div>

        <div className="overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
         
          <table className="w-full min-w-[1000px] border-separate border-spacing-y-3">
            <thead>
              <tr className="text-left">
          

<th>
  <div className="flex items-center justify-center mb-10 gap-2">
    
    <div className="w-[50px] h-[50px] rounded-full bg-[#F1F2FF] flex items-center justify-center">
      <Image
        src="/image/pricing/Flash.svg"  
        alt="features"
        width={26}
        height={26}
      />
    </div>

    <span className="display-s sec-color ">
      Features Categories
    </span>

  </div>
</th>


{columns.map((col) => {
  const isActive = activeColumn === col.key;

  return (
    <th key={col.key} className="pb-10 px-2 text-center">
      <div className="flex justify-center items-center gap-2">
        
        <div
          className={`w-[50px] h-[50px] rounded-full flex items-center justify-center transition-all duration-300 ${
            isActive ? "bg-[#C3FF41]" : "bg-[#F1F2FF]"
          }`}
        >
          <Image
            src={`/image/pricing/Start.svg`}  
            alt={col.label}
            width={26}
            height={26}
          />
        </div>

        <span className={`display-s capitalize sec-color ${isActive ? "font-bold" : ""}`}>
          {col.label}
        </span>

      </div>
    </th>
  );
})}
              </tr>
            </thead>

            <tbody>
              {comparisonData.map((row, index) => (
                <motion.tr key={index} className="group">
                  <td className="p-6 border border-r-0 rounded-l-[24px] border-gray-200 relative bg-white">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full border border-[#1E0A52] flex items-center justify-center shrink-0">
                        <FiCheck className="text-lg text-[#1E0A52]" />
                      </div>
                      <span className="display-xs font-medium sec-color">{row.feature}</span>
                    </div>
                    <div className="absolute right-0 top-0 w-[2px] h-1/2 bg-gray-200" />
                    <div className="absolute right-0 bottom-0 w-[2px] h-1/2 bg-[#1E0A52] rounded-t-full" />
                  </td>

                  {columns.map((col, i) => (
                    <td
                      key={i}
                      className={`p-6 text-center border-y border-gray-200 bg-white relative ${
                        i === columns.length - 1 ? "border-r rounded-r-[24px]" : "border-r-0"
                      }`}
                    >
                      <div className="flex items-center justify-center">
                        {renderValue(row[col.key])}
                      </div>

                      {/* Middle Dividers Logic */}
                      {i < columns.length - 1 && (
                        <>
                          <div className="absolute right-0 top-0 w-[2px] h-1/2 bg-gray-200" />
                          <div className="absolute right-0 bottom-0 w-[2px] h-1/2 bg-[#1E0A52] rounded-t-full" />
                        </>
                      )}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default GetSocialFacilitiesForm;