
"use client";
import React, { useState, use, useEffect, useRef } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogsData } from "@/constants/blog-data";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock5 } from "lucide-react";
import toast from "react-hot-toast";

export default function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const blog = blogsData.find((b) => b.slug === decodeURIComponent(slug));
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  if (!blog) notFound();

  const headings = [
    { id: "heading1", ...blog.tableContent.heading1 },
    { id: "heading2", ...blog.tableContent.heading2 },
    { id: "heading3", ...blog.tableContent.heading3 },
  ];

  // --- share logic function ---
const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = blog.title;

    if (platform === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        "_blank",
        "width=600,height=400"
      );
    } else if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        "_blank"
      );
    } else if (platform === "linkedin") {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        "_blank"
      );
    } else if (platform === "instagram") {
      navigator.clipboard.writeText(url).then(() => {
        toast("Link copied to clipboard! You can now share it on Instagram.");
        window.open("https://www.instagram.com/", "_blank");
      });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: scrollContainerRef.current,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex(
            (ref) => ref === entry.target,
          );
          if (index !== -1) setActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60, scale: 0.92 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: false, margin: "-100px" },
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <div className="bg-gradient-custom md:p-15 p-6 min-h-screen">
      <div className="container-custom bg-white p-5 md:p-16 rounded-[50px] overflow-hidden">
        {/* Top Header Section */}
        <div className="flex flex-col gap-6 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm"
          >
            <div className="flex flex-col gap-3">
              <div className="text-[#5F5F86] body-l">Post by:</div>
              <div className="flex items-center gap-2 h-[50px]">
                <div className="h-[50px] w-[50px] relative shrink-0">
                  <Image
                    src={blog.authorImage}
                    alt="author"
                    fill
                    className="rounded-full object-cover border border-gray-100"
                  />
                </div>

                <div className="display-xs text-[#1E0A52] font-medium">
                  {blog.authorName}
                </div>
              </div>
            </div>
            <div className="flex gap-6 md:gap-20">
              <div className="flex flex-col gap-3">
                <div className="text-[#5F5F86] body-l">Published</div>
                <div className="display-xs text-[#1E0A52]">
                  {blog.publishedDate}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-[#5F5F86] body-l">Categories</div>
                <div className="display-xs text-[#1E0A52]">
                  {blog.categories}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-[#5F5F86] body-l">Read time</div>
                <div className="display-xs text-[#1E0A52]">{blog.readTime}</div>
              </div>
            </div>
          </motion.div>

          {/* Share & Comment Section */}
          <motion.div
            {...fadeInUp}
            className="flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <div className="display-xs text-[#1E0A52] mb-4 md:mb-0 max-w-[770.07px]">
              {blog.authorComment}
            </div>
            <div className="flex flex-col gap-4 ">
              <div className="display-xs text-[#1E0A52] block">
                Social Share :
              </div>
              <div className="flex gap-[20px]">
                {[
                  { icon: <FaFacebookF size={14} />, name: "facebook" },
                  { icon: <FaInstagram size={14} />, name: "instagram" },
                  { icon: <FaTwitter size={14} />, name: "twitter" },
                  { icon: <FaLinkedinIn size={14} />, name: "linkedin" },
                ].map((s) => (
                  <button
                    key={s.name}
                    onClick={() => handleShare(s.name)}
                    className="w-10 h-10 rounded-full bg-[#F1F2FF] flex items-center justify-center text-[#1E0A52] hover:bg-[#6343FF] hover:text-white transition-all"
                  >
                    {s.icon}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <hr className="my-10 md:my-16 opacity-50 text-gray-300" />

        {/* --- Main Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-10 md:gap-x-12 items-start">
          {/* Left Side: Table of Contents */}
          <aside className="w-full lg:col-span-2 lg:w-80 shrink-0 lg:sticky lg:top-10">
            <motion.div
              style={{
                borderRadius: "40px",
                background:
                  "linear-gradient(177deg, #1A084B -13.59%, #4A24A5 109.86%)",
              }}
              className="p-8 text-white"
            >
              <h4 className="display-s mb-8 md:mb-10 leading-tight">
                Table Of <br /> Contents
              </h4>
              <ul className="relative">
                <div className="absolute left-[16px] top-6 bottom-10 w-[1px] flex flex-col items-center">
                  <svg
                    width="1"
                    height="100%"
                    viewBox="0 0 1 100"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0.5 0L0.5 100"
                      stroke="#7952DF"
                      strokeDasharray="3 3"
                    />
                  </svg>
                </div>
                {headings.map((heading, i) => (
                  <li
                    key={i}
                    onClick={() => scrollToSection(i)}
                    className="relative cursor-pointer mb-10 last:mb-0 flex gap-5 items-start"
                  >
                    <div className="relative flex items-center justify-center w-[33px] h-[33px] shrink-0 mt-1.5 rounded-full z-10">
                      {activeIndex === i ? (
                        <>
                          <div className="w-full h-full rounded-full border border-white/30 absolute" />
                          <div className="w-1.75 h-1.75 rounded-full bg-[#D8FA50] border p-1 border-[#1E0A52]" />
                        </>
                      ) : (
                        <div className="w-full h-full rounded-full border border-white/20 flex items-center justify-center">
                          <div className="w-1.75 h-1.75 rounded-full bg-white/40" />
                        </div>
                      )}
                    </div>
                    <div
                      className={`flex flex-col flex-1 transition-all duration-300 ${activeIndex === i ? "opacity-100" : "opacity-40"}`}
                    >
                      <div className="body-m font-medium pr-4 pt-2">
                        {heading.title}
                      </div>
                      <div className="w-full max-w-[185px] mt-6">
                        <svg width="100%" height="1" preserveAspectRatio="none">
                          <path
                            d="M0 0.5H185"
                            stroke="#5C4595"
                            strokeDasharray="7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="mt-10 px-4">
              <div className="h-[2px] w-full bg-[#E8EDFF] rounded-[20px] overflow-hidden mb-6">
                <motion.div
                  className="h-full bg-[#1A084B]"
                  animate={{
                    width: `${((activeIndex + 1) / headings.length) * 100}%`,
                  }}
                />
              </div>
              <div className="flex items-center justify-center gap-2 text-[#1E0A52]">
                <Clock5 size={20} strokeWidth={1.5} />
                <span className="body-m font-medium">{blog.readTime} read</span>
              </div>
            </div>
          </aside>

          {/* Middle */}
          <div
            ref={scrollContainerRef}
            className="flex-1 lg:col-span-3 h-[800px] overflow-y-auto scrollbar-hide "
            style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {headings.map((heading, hIdx) => (
              <div
                key={heading.id}
                ref={(el) => (sectionRefs.current[hIdx] = el)}
                className="mb-20 scroll-mt-10"
              >
                <div className="flex flex-col mb-8 md:mb-12">
                  {heading.items.slice(0, 2).map((item, idx) => (
                    <div key={idx}>
                      <div className="">
                        <h2 className="display-m text-[#1E0A52] mb-4 md:mb-6 leading-tight">
                          {item.question}
                        </h2>
                        <p className="text-gray-500 body-l leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                      {idx === 0 && (
                        <div className="py-4">
                          <svg
                            width="100%"
                            height="1"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M0 0.5H506"
                              stroke="#DDDDDD"
                              strokeDasharray="5 5"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="relative h-[250px] md:h-[450px] w-full rounded-[40px] overflow-hidden mb-8 shadow-sm">
                  <Image
                    src={heading.items[0].image}
                    alt="Banner"
                    fill
                    className="object-cover"
                  />
                </div>

                <div
                  style={{
                    borderRadius: "40px",
                    background:
                      "linear-gradient(136deg, #FFF 4.19%, rgba(195, 255, 65, 0.50) 95.64%)",
                  }}
                  className="p-8 mb-12"
                >
                  <div className="text-[#1E0A52] w-8 h-8 relative mb-4">
                    <Image
                      src="/image/blog/comma.svg"
                      alt="Quote Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="body-l text-[#1E0A52] font-bold italic">
                    &quot;{heading.items[0].comment}&quot;
                  </p>
                </div>

                {heading.items[2] && (
                  <div className="mb-12">
                    <h2 className="display-m text-[#1E0A52] mb-6">
                      {heading.items[2].question}
                    </h2>
                    <p className="text-gray-500 body-l">
                      {heading.items[2].answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side */}
          <aside className="w-full lg:col-span-2 lg:w-72 shrink-0 mt-10 lg:mt-0">
            <h4 className="display-xs text-[#1E0A52] mb-6 pb-4">
              Additional Resources
            </h4>
            <div className="space-y-6 md:space-y-8">
              {blog.articles.map((art, i) => {
                const targetBlog = blogsData.find(
                  (b) => b.title.toLowerCase() === art.title.toLowerCase(),
                );

                const randomFallbackSlug = blogsData[i % blogsData.length].slug;
                const finalSlug = targetBlog
                  ? targetBlog.slug
                  : randomFallbackSlug;

                return (
                  <Link key={i} href={`/blog/${finalSlug}`}>
                    <motion.div
                      {...fadeInUp}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 group cursor-pointer mb-6  bg-white py-2 pl-4 pr-2 rounded-[24px]"
                      style={{
                        boxShadow: "0px 60px 154px 0px #E8EDFF99",
                      }}
                    >
                      <div className="flex-1">
                        <div
                          className="inline-block bg-[#F8F9FF] text-[#1E0A52] px-3 py-2 rounded-[12px] title-m mb-2 border border-white/50 z-10 transition-transform duration-300 hover:-translate-y-1"
                          style={{
                            boxShadow:
                              "0px 20px 40px 0px rgba(232, 237, 255, 0.8), 0px 10px 20px 0px rgba(0, 0, 0, 0.05)",
                          }}
                        >
                          Articles
                        </div>
                        <p className="text-[#1E0A52] title-l leading-tight group-hover:text-[#6343FF] transition-colors font-bold">
                          {art.title}
                        </p>
                      </div>
                      <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-2xl overflow-hidden shadow-sm">
                        <Image
                          src={art.articlesImage}
                          alt={art.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
