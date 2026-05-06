
"use client"; 

import { useRouter, usePathname } from "next/navigation";
import PrimaryButton from "@/components/button/PrimaryButton";
import HeroSection from "../shared/Hero/HeroSection";

interface BlogBannerProps {
  badgeText?: string; 
}

export const BlogBanner = ({ badgeText }: BlogBannerProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = (e: React.MouseEvent) => {
    if (pathname === "/blog") {
      e.preventDefault();
      const element = document.getElementById("all-blogs");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } 
  };

  return (
    <HeroSection
      badgeIcon="/image/heroBridgeIcons/blog.svg"
    
      badgeText={badgeText || "Blog"} 
     
      title={<>Read Design Tips <br /> & Insights</>}
      description={null}
      buttons={
        <PrimaryButton 
          href="/blog#all-blogs" 
          onClick={handleScroll}
        >
          View All Blogs
        </PrimaryButton>
      }
    />
  );
};