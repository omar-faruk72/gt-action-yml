"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import PrimaryButton from "@/components/button/PrimaryButton";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false); 

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { scrollY } = useScroll();

  const whatsappNumber = "8801805459127";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  // স্ক্রল ডিরেকশন ডিটেক্ট করার লজিক
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    // নিচে স্ক্রল করলে এবং নির্দিষ্ট পিক্সেল পার হলে হাইড হবে
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    // ব্যাকগ্রাউন্ড চেঞ্জ লজিক (Scrolled state)
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/service" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      // এনিমেশন কনফিগ: লুকানো এবং দেখানোর জন্য
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed px-5 md:px-0 top-6 max-w-[1100px] mx-auto left-0 right-0 z-50"
    >
      <div
        className={`mx-auto glass-navbar flex items-center justify-between p-2 transition-all duration-500 rounded-full ${
          isHomePage
            ? scrolled || open
              ? "bg-[#1E0A52]/60 backdrop-blur-2xl"
              : "bg-[#1E0A52]/100 backdrop-blur-lg"
            : "bg-[#1E0A52]/60 backdrop-blur-2xl"
        }`}
      >
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 pl-2">
          <Image
            src="/image/logo.png"
            alt="designfixter logo"
            width={140}
            height={35}
            className="object-contain"
            priority
          />
        </Link>

        {/* Navigation Links - Desktop */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, index) => {
            const isActive =
              pathname === link.path ||
              (link.path !== "/" && pathname.startsWith(link.path));

            return (
              <React.Fragment key={index}>
                <li>
                  <Link
                    href={link.path}
                    className={`text-[15px] px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? "text-white font-semibold bg-white/20 shadow-sm"
                        : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
                {index < navLinks.length - 1 && (
                  <span className="w-[1px] h-4 bg-white/10 mx-1"></span>
                )}
              </React.Fragment>
            );
          })}
        </ul>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <div className="hidden lg:block text-right">
            <PrimaryButton href={whatsappLink} target="_blank">
              Contact Us
            </PrimaryButton>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-4 right-4 mt-3 overflow-hidden transition-all duration-500 ease-in-out ${
          open
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-[#1E0A52] border border-white/10 rounded-[32px] p-6 shadow-2xl">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link, index) => {
              const isActive =
                pathname === link.path ||
                (link.path !== "/" && pathname.startsWith(link.path));

              return (
                <li key={index}>
                  <Link
                    href={link.path}
                    onClick={() => setOpen(false)}
                    className={`text-lg block py-2 transition-colors ${
                      isActive ? "text-[#D9FF5B] font-bold" : "text-white/90"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <li className="mt-4 pt-4 border-t border-white/10">
              <PrimaryButton
                href={whatsappLink}
                target="_blank"
                className="w-full justify-center"
              >
                Contact Us
              </PrimaryButton>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
