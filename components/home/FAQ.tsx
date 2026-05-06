"use client";
import PrimaryButton from "@/components/button/PrimaryButton";
import SecondaryButton from "@/components/button/SecondaryButton";
import { FAQs, FAQS } from "@/constants/faq-data";
import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);
  const [faqs, setFaqs] = useState<FAQs[]>(FAQS);

  return (
    <section className="container-custom py-15 px-4 md:px-0">
      <div className="bg-[linear-gradient(to_bottom_right,#F3F4FF_20%,rgba(243,244,255,0.8)_40%,transparent_70%),linear-gradient(to_left,rgba(243,244,255,0.5)_0%,transparent_0%)] rounded-4xl">
        <div className="py-8 px-4 md:p-15 ">
          <div className="md:flex justify-between gap-6 md:gap-30 mb-10 md:mb-16 ">
            <div className=" relative flex flex-col items-start justify-center">
              <div className="relative inline-block mb-4 md:mb-0">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-11 md:top-20 left-3 md:left-21 -translate-y-1/2 z-10 scale-60 md:scale-100"
                >
                  <SecondaryButton>Questions</SecondaryButton>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 1,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="display-xxl pl-2.5"
                  style={{
                    color: "var(--sec-title-color)",
                  }}
                >
                  Frequently <br></br> Asked Question
                </motion.h2>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className=" flex flex-col justify-end items-start gap-10.5 md:w-135"
            >
              <p
                className="body-l"
                style={{ color: "var(--text-secondary)" }}
              >
                Have questions about our design services? Here are some common
                queries to help you understand how we work and what you can
                expect.
              </p>
              <PrimaryButton href="https://wa.me/8801727841588">
                Get Started
              </PrimaryButton>
            </motion.div>
          </div>

          <div className="flex flex-col gap-5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-4xl  transition-all duration-300"
                  style={{
                    
                    borderColor: isOpen ? "" : "#F1F1F1",
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-8 text-left"
                  >
                    <span
                      className="display-s font-medium"
                      style={{ color: "var(--sec-title-color)" }}
                    >
                      {faq.question}
                    </span>

                    {/* Toggle Icon */}
                    <div
                      className="w-10.5 h-10.5 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        backgroundColor: isOpen
                          ? "var(--primary-color)"
                          : "transparent",
                        border: isOpen ? "none" : "1px solid #E5E7EB",
                        color: isOpen ? "white" : "black",
                      }}
                    >
                      {isOpen ? (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.16626 10H15.8329"
                            stroke="white"
                            stroke-width="1.4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 4.16699V15.8337"
                            stroke="#1E0A52"
                            stroke-width="1.4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.16626 10H15.8329"
                            stroke="#1E0A52"
                            stroke-width="1.4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </button>

                  {/* Animated Answer Box */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "max-h-75 opacity-100 pb-8.5 px-6"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p
                      className="body-l"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
