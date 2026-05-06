"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogsData } from "@/constants/blog-data";
import { MdOutlineDateRange, MdOutlineAccessTime } from "react-icons/md";
import { MoveRight } from "lucide-react";
import { CiSearch } from "react-icons/ci";

const LatestBlogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // Pagination State: শুরুতে ৬টি ব্লগ দেখানোর জন্য
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredBlogs = blogsData.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // শুধুমাত্র নির্দিষ্ট সংখ্যক ব্লগ দেখানোর জন্য স্লাইস করা হয়েছে
  const displayedBlogs = filteredBlogs.slice(0, visibleCount);

  const getDaysAgo = (dateString) => {
    const published = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today - published);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "1 day ago";
    return `${diffDays} days ago`;
  };

  // View More হ্যান্ডলার
  const handleViewMore = (e) => {
    e.preventDefault();
    setVisibleCount(filteredBlogs.length);
  };

  return (
    <section className="p-2 md:p-15 bg-[#F8F9FF] overflow-hidden">
      <div className=" container-custom ">
        <div className="flex  flex-col md:flex-row justify-between items-center mt-10  md:mt-0 mb:10 md:mb-15 gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="display-xxl text-[#1E0A52] leading-tight"
          >
            Here is our <br /> latest Blogs
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full mb-8 md:mb-0 md:w-96"
          >
            <input
              type="text"
              placeholder="Search.."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-5 rounded-[16px] button-l  bg-white  outline-none focus:ring-2 focus:ring-[#6343FF]/20 transition-all"
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 ">
              <CiSearch />
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-4 md:gap-y-12">
          {displayedBlogs.map((blog, index) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 60, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.9,
                delay: (index % 3) * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -12 }}
            >
              <Link href={`/blog/${blog.slug}`} className="block group">
                <div
                  className="relative bg-[#FFFFFF] transition-all duration-500 shadow-[0px_60px_154px_0px_#E8EDFF99] hover:shadow-[0_32px_64px_-15px_rgba(119,54,255,0.18)] flex flex-col"
                  style={{
                    width: "100%", // Mobile responsive korar jonno width 100% deya bhalo
                    maxWidth: "426px",
                    height: "450px",
                    borderRadius: "30px",
                    padding: "20px",
                  }}
                >
                  {/* Image Wrapper (Portfolio style) */}
                  <div
                    className="relative overflow-hidden shrink-0"
                    style={{
                      height: "290px",
                      width: "100%",
                      borderRadius: "10px",
                    }}
                  >
                    <Image
                      src={blog.bannerImage}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    {/* Hover Overlay with Arrow/Icon logic (Optional) */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Divider (Niser Dag - Hubuhu Portfolio Card-er moto) */}
                  <hr className="border-t-2 border-dashed border-[#F1F2FF] my-5" />

                  {/* Content Section (Same as Portfolio) */}
                  <div className="flex justify-between items-center h-[75px] gap-4">
                    <div className="flex-1 pr-2 overflow-hidden">
                      {/* Blog Title */}
                      <h3 className="text-[20px] md:text-[24px] text-[#1E0A52] mb-1 truncate group-hover:text-[#6343FF] transition-colors duration-300 font-medium leading-tight">
                        {blog.title}
                      </h3>

                      {/* Meta Info (Days ago & Read time) */}
                      <div className="flex gap-3 items-center text-[13px] text-[#5F5F86] opacity-80">
                        <span className="flex items-center gap-1">
                          {getDaysAgo(blog.publishedDate)}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          {blog.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Arrow Button (Same Portfolio Style) */}
                    <div className="w-[60px] h-[60px] min-w-[60px] rounded-full border border-[#CCCCE9] bg-white flex items-center justify-center transition-all duration-500 group-hover:bg-[#6343FF] group-hover:border-[#6343FF] group-hover:shadow-[0_10px_20px_rgba(119,54,255,0.3)]">
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
            </motion.div>
          ))}
        </div>

        {/* View More Button Logic: ডাটা ৬টির বেশি থাকলে এবং সব দেখানো না হয়ে থাকলে বাটনটি দেখাবে */}
        {visibleCount < filteredBlogs.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=" mt-10 md:mt-15 flex justify-center"
          >
            <button
              onClick={handleViewMore}
              className="i button-l white border-[#7749D8] font-semibold  h-[52px] px-6 py-3 bg-primary cursor-pointer rounded-[56px] shadow-[0px_0px_0px_1.5px_#7749D8] hover:shadow-[0px_0px_5px_2px_#7749D8]
          transition-all duration-300"
            >
              View More Blog
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default LatestBlogs;
