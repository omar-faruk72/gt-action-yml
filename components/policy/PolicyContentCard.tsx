"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { FiMail } from "react-icons/fi";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const PolicySectionCard = ({ title, description, items }: {
  title: string;
  description: string;
  items?: string[];
}) => (
  <motion.div 
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    style={{ 
      maxWidth: "1224px", 
      minHeight: "273px", 
      padding: "42px", 
      borderRadius: "40px",
      boxShadow: "0px 34px 94px 0px #EAEAFFB2" 
    }}
    className="w-full mx-auto bg-white border border-white/50 flex flex-col gap-[42px] transition-transform hover:scale-[1.01] duration-300"
  >
    <div className="space-y-5">
      <h3 className="text-[28px] md:text-[36px] text-[#1E0A52] font-medium tracking-tight">
        {title}
      </h3>
      <p className="text-[16px] md:text-[18px] text-[#52525B] leading-relaxed opacity-90">
        {description}
      </p>
      {items && (
        <ul className="space-y-4 mt-6">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-[#52525B] text-[16px] md:text-[18px]">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#1E0A52] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  </motion.div>
);

const PolicyContentCard = () => {
  const policyData = [
    {
      title: "Introduction",
      description: "At DesignFixter, we care about your privacy. This policy explains how we collect, use, and protect your information when you use our website or services.",
    },
    {
      title: "Information We Collect",
      description: "We may collect some basic information when you contact us or work with us.",
      items: ["Your name", "Email address", "Project details", "We only collect the information that is necessary."],
    },
    {
      title: "How We Use Your Information",
      description: "We use your information to:",
      items: ["Communicate with you", "Understand your project needs", "Provide better design services"],
    },
    {
      title: "Data Protection",
      description: "Your information is safe with us.",
      items: ["We use secure tools", "We do not share your data publicly", "Only our team can access your information"],
    },
  ];

  return (
    <div 
      style={{ 
        maxWidth: "1324px", 
        minHeight: "1333px",
        padding: "50px 0",
      }}
      className="w-full bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white flex flex-col gap-8 relative z-10 mx-auto items-center"
    >
      {policyData.map((section, index) => (
        <PolicySectionCard 
          key={index}
          title={section.title}
          description={section.description}
          items={section.items}
        />
      ))}


      <motion.div 
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ 
          maxWidth: "1224px", 
          minHeight: "273px", 
          padding: "42px",
          borderRadius: "40px",
          boxShadow: "0px 34px 94px 0px #EAEAFFB2" 
        }}
        className="w-full mx-auto bg-white border border-white/50 space-y-6"
      >
        <h3 className="text-[28px] md:text-[36px] text-[#1E0A52] font-bold tracking-tight">
          Contact Us
        </h3>
        <p className="text-[16px] md:text-[18px] text-[#52525B] leading-relaxed">
          If you have any questions about this Privacy Policy, feel free to contact us.
        </p>
        
        <div className="flex items-center gap-4 pt-4 group cursor-pointer w-fit">
          <div className="w-12 h-12 rounded-full bg-[#F3F4F6] flex items-center justify-center group-hover:bg-[#1E0A52]/10 transition-all duration-300">
            <FiMail className="text-[#1E0A52] text-2xl group-hover:scale-110 transition-transform" />
          </div>
          <span className="text-[16px] md:text-[18px] text-[#52525B] font-medium group-hover:text-[#1E0A52] transition-colors">
            Email: hello@designfixter.com
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default PolicyContentCard;