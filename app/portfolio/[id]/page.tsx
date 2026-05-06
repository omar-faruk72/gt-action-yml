/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Portfolios } from "@/constants/portfolio-data";

import * as motion from "framer-motion/client";
import NewsLetterPortfolio from "@/components/shared/NewsLetter/NewsLetter-Portfolio";
import FAQ from "@/components/home/FAQ";
import { PortFolioHero } from "@/components/portfolio/PortFolioHero";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const getYouTubeEmbedUrl = (url: string) => {
  if (!url) return "";
  const regExp =
    /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
  const match = url.match(regExp);
  const videoId = match && match[1].length === 11 ? match[1] : null;

  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
  }
  return url;
};

export default async function PortfolioDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const portfolio = Portfolios.find((item) => item.id === id);

  if (!portfolio) {
    notFound();
  }

  const isVideoCategory = portfolio.category === "Video & Motion";

  return (
    <main className="min-h-screen bg-white">
      <PortFolioHero project={portfolio} />

      <section className="w-full bg-[#FFFFFF] py-[60px] max-w-[1440px] mx-auto px-5 md:px-[60px]">
        <div className="w-full flex flex-col items-center">
          {isVideoCategory && portfolio.video_items ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1320px]">
              {portfolio.video_items.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-[40px] p-5  group transition-all duration-500 flex flex-col h-full"
                  style={{
                    boxShadow: "0px 60px 154px 0px #E8EDFF99",
                  }}
                >
                  {/* Video Area */}
                  <div className="relative aspect-[9/16] rounded-[30px] overflow-hidden bg-black mb-6 w-full">
                    <iframe
                      src={getYouTubeEmbedUrl(item.video_url)}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0"
                    ></iframe>
                  </div>

                  <div
                    className="w-full mb-6"
                    style={{
                      borderTop: "2px dashed #f1f2ff",
                      height: "0px",
                    }}
                  ></div>

                  {/* Text Content */}
                  <div className="px-2 pb-4">
                    <h4 className="text-[24px] font-medium text-[#1E0A52] mb-2 leading-[-1%">
                      {item.title}
                    </h4>
                    <p className="text-[14px] text-[#5f5f86] leading-1.4">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Standard Gallery Layout */
            <div className="flex flex-col items-center w-full">
              {portfolio.gallery_images?.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                  className="relative w-full flex justify-center mb-10 last:mb-0"
                >
                  <div className="relative overflow-hidden group w-full max-w-[1150px]">
                    <Image
                      src={img}
                      alt={`${portfolio.title} detail ${index + 1}`}
                      width={1150}
                      height={800}
                      className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                      sizes="(max-width: 1440px) 100vw, 1150px"
                      priority={index === 0}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <NewsLetterPortfolio />
      <FAQ />
    </main>
  );
}
