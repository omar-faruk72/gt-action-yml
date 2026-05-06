"use client";
import React, { useState } from "react"; // useState add kora hoyeche
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { toast, Toaster } from "react-hot-toast"; // Toast import

const Footer = () => {
  const [email, setEmail] = useState(""); // Email state
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation Logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      toast.error("Please enter your email!");
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address!");
      return;
    }

    if (!subscribed) {
      toast.success("Subscribed successfully");
      setSubscribed(true);
    } else {
      toast.success("Unsubscribed");
      setSubscribed(false);
    }
  };

  return (
    <footer className="w-full bg-white pt-16 pb-10">
      {/* Toaster Container */}
      <Toaster position="top-center" />
      
      <div className="container-custom px-4">
        {/* Main Footer Grid */}
        <div className="flex flex-col lg:flex-row justify-between mb-8 gap-8 md:gap-15  md:mb-12">
          {/* LEFT SIDE: Logo, Text & Newsletter */}
          <div className="flex flex-col gap-6 max-w-md">
            <Link href="/" className="inline-block">
              <Image
                src="/image/footerLogo.png"
                alt="designfixter logo"
                width={180}
                height={50}
                className="object-contain"
                priority
              />
            </Link>

            <p className="body-m text-text-secondary max-w-[340px]">
              We help brands grow through high-quality UI/UX, graphic, and
              motion design that delivers real results.
            </p>

            {/* Newsletter Area */}
            <div className="mt-4 flex flex-col gap-3">
              {/* Form wrapper added for validation handling */}
              <form 
                onSubmit={handleSubscribe}
                className="relative flex items-center bg-[#F8F9FF] border border-[#E5E7EB] rounded-full w-full max-w-[400px]"
              >
                <div className="pl-4 text-text-secondary bg-white p-1.5 rounded-full">
                  <Mail size={18} />
                </div>
                <input
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="bg-transparent border-none outline-none px-3 py-2 w-full body-m text-accent-color placeholder:text-text-secondary/60"
                />
                <button 
                  type="submit"
                  className="bg-primary-color text-white px-6 py-3 rounded-full button-m hover:brightness-110 transition-all shrink-0"
                >
                  {subscribed ? "Unsubscribe" : "Subscribe"}
                </button>
              </form>
              <p className="text-[11px] text-text-secondary ml-2">
                Get design tips & updates.{" "}
                <span className="font-bold text-accent-color">No spam.</span>
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: All Links Grouped */}
          <div className="flex flex-wrap gap-12 md:gap-20 lg:gap-24">
            {/* Column 1: Main Pages */}
            <div className="flex flex-col gap-6">
              <h4 className="title-l text-[#1E0A52] font-bold">Main Pages</h4>
              <ul className="flex flex-col gap-4">
                {["Home","About-Us",  "Portfolio","Service","Pricing", "Blog", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                        className="body-m text-text-secondary hover:text-primary-color transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
            {/* Column 2: Useful Links */}
            <div className="flex flex-col gap-6">
              <h4 className="title-l text-[#1E0A52] font-bold">Useful Links</h4>
              <ul className="flex flex-col gap-4">
                {[
                  { name: "Privacy Policy", href: "/privacy-policy" },
                  { name: "Terms & Conditions", href: "/terms-conditions" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="body-m text-text-secondary hover:text-primary-color transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Social Links */}
            <div className="flex flex-col gap-6">
              <h4 className="title-l text-[#1E0A52] font-bold">Social Links</h4>
              <ul className="flex flex-col gap-4">
                {[
                  {
                    name: "Facebook",
                    url: "https://www.facebook.com/designfixter",
                  },
                  {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/company/designfixter",
                  },
                ].map((item) => (
                  <li key={item.name} className="flex items-center">
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="body-m text-text-secondary hover:text-primary-color transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-[#E5E7EB] mb-8 md:mb-12"></div>

{/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="body-m text-text-secondary">
            © 2026 DesignFixter. All rights reserved.
          </p>

          <ul className="flex items-center gap-6 md:gap-8">
            {[
              { name: "Terms Corporate", href: "/terms-conditions" },
              { name: "Privacy", href: "/privacy-policy" }
            ].map((item) => (
              <li key={item.name} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#9CA3AF] rounded-full"></span>
                <Link
                  href={item.href}
                  className="body-m text-text-secondary hover:text-accent-color transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;