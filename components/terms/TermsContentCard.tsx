"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { FiMail } from "react-icons/fi";

// অ্যানিমেশন ভেরিয়েন্ট - কার্ডগুলো নিচ থেকে স্লাইড হয়ে আসবে
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const TermsSectionCard = ({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items?: string[];
}) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    /* প্রতিটি সেকশন আলাদা কার্ড: ১২২৪px */
    style={{
      maxWidth: "1224px",
      minHeight: "273px",
      padding: "42px",
      borderRadius: "40px",
      boxShadow: "0px 34px 94px 0px #EAEAFFB2",
    }}
    className="w-full mx-auto bg-white border border-white/50 flex flex-col justify-center transition-all duration-300 hover:shadow-[0px_40px_100px_0px_#EAEAFFCF]"
  >
    <div className="space-y-5">
      <h3 className="text-[28px] md:text-[36px] text-[#1E0A52] font-bold tracking-tight">
        {title}
      </h3>
      <p className="text-[16px] md:text-[18px] text-[#52525B] leading-relaxed opacity-90">
        {description}
      </p>
      {items && (
        <ul className="space-y-3 mt-4">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-[#52525B] text-[16px] md:text-[18px]"
            >
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#1E0A52] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  </motion.div>
);

const TermsContentCard = () => {
  const termsData = [
    {
      title: "Introduction",
      description:
        "Welcome to DesignFixter. By using our website and services, you agree to follow these terms and conditions. Please read them carefully before working with us.",
    },
    {
      title: "Our Services",
      description: "DesignFixter provides design services including:",
      items: [
        "UI/UX Design",
        "Graphic Design",
        "Motion Design",
        "We aim to deliver high-quality work based on your project requirements.",
      ],
    },
    {
      title: "Project Agreement",
      description: "Before starting any project:",
      items: [
        "We will discuss your requirements",
        "Agree on scope, timeline, and pricing",
        "Once confirmed, the project will begin.",
      ],
    },
    {
      title: "Payments",
      description:
        "All payments must be made as agreed before or during the project.",
      items: [
        "Partial or full payment may be required",
        "Work delivery depends on payment completion",
      ],
    },
    {
      title: "Revisions",
      description: "We offer revisions to improve the final design.",
      items: [
        "Limited revisions may be included",
        "Extra revisions may require additional cost",
      ],
    },
    {
      title: "Project Delivery",
      description:
        "We deliver projects within the agreed timeline. Delivery time may change if:",
      items: ["Project scope changes", "Delay in feedback from client"],
    },
    {
      title: "Client Responsibility",
      description: "Clients must:",
      items: [
        "Provide clear requirements",
        "Give feedback on time",
        "Share necessary content (text, images, etc.)",
      ],
    },
    {
      title: "Intellectual Property",
      description: "After full payment:",
      items: [
        "The final design belongs to the client",
        "We may showcase the work in our portfolio",
      ],
    },
    {
      title: "Limitation of Liability",
      description: "DesignFixter is not responsible for:",
      items: ["Business losses", "Misuse of design after delivery"],
    },
    {
      title: "Changes to Terms",
      description:
        "We may update these terms at any time. Continued use of our services means you accept the updated terms.",
    },
  ];

  return (
    <div className="w-full flex justify-center px-4">
      <div
        style={{
          maxWidth: "1324px",
          minHeight: "2158px",
          padding: "60px 0",
        }}
        className="w-full bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white flex flex-col gap-8 relative z-10 items-center overflow-hidden"
      >
        {termsData.map((section, index) => (
          <TermsSectionCard
            key={index}
            title={section.title}
            description={section.description}
            items={section.items}
          />
        ))}

        {/* Contact Us কার্ড - ১২২৪px */}
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
            boxShadow: "0px 34px 94px 0px #EAEAFFB2",
          }}
          className="w-full mx-auto bg-white border border-white/50 space-y-6 flex flex-col justify-center"
        >
          <h3 className="text-[28px] md:text-[36px] text-[#1E0A52] font-bold tracking-tight">
            Contact Us
          </h3>
          <p className="text-[16px] md:text-[18px] text-[#52525B] leading-relaxed">
            If you have any questions about these Terms & Conditions, feel free
            to contact us.
          </p>

          <div className="flex items-center gap-4 pt-2 group cursor-pointer w-fit">
            <div className="w-12 h-12 rounded-full bg-[#F3F4F6] flex items-center justify-center group-hover:bg-[#1E0A52]/10 transition-all duration-300">
              <FiMail className="text-[#1E0A52] text-2xl group-hover:scale-110 transition-transform" />
            </div>
            <a
              href="mailto:contact@adsfixter.com?subject=Hello&body=I want to contact you"
              target="_blank"
            >
              <span className="text-[16px] md:text-[18px] text-[#52525B] font-medium group-hover:text-[#1E0A52] transition-colors">
                Email: designfixter@gmail.com
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsContentCard;
