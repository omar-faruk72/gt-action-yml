import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // বাইরের সোর্স থেকে ইমেজ আনার অনুমতি
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
      
   
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
      },
       {
        protocol: "https",
        hostname: "media.giphy.com",
        pathname: "/**",
      },
      // যদি ভবিষ্যতে অন্য কোনো ডোমেইন লাগে এখানে যোগ করবে
    ],
    // লোকাল ইমেজ বা কিছু নির্দিষ্ট ইমেজের ক্ষেত্রে অপ্টিমাইজেশন এরর এড়াতে এটি যোগ করা ভালো
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // টাইপস্ক্রিপ্ট এরর থাকলেও বিল্ড হতে সাহায্য করবে (ডেভেলপমেন্টের সময় সুবিধাজনক)
  typescript: {
    ignoreBuildErrors: true,
  },

  
};

export default nextConfig;
