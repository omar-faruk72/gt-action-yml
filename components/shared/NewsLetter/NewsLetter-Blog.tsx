"use client";
import React from "react";
import Image from "next/image";
import { ChevronRight, Link, Send } from "lucide-react";
import { motion } from "framer-motion";

const NewsletterBlog = () => {
  return (
    <section className="container-custom py-10 md:py-15 px-4 md:px-0 flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-auto lg:h-123.5 overflow-hidden flex items-center rounded-[40px] lg:rounded-[60px] px-8 lg:px-17 py-16 lg:py-0 bg-linear-to-b from-[#1A084B] to-[#4A24A5] w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full items-center relative z-10 gap-10 lg:gap-0">
          {/* Left Side: Header & Input */}
          <div className="col-span-1 lg:col-span-5 text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="display-xxl text-white mb-6 lg:mb-10 "
            >
              Need Help <br className="hidden lg:block" /> With Your Design?
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              
              <button
                onClick={() =>
                  window.open("https://wa.me/8801984658743", "_blank")
                }
                className="bg-secondary-color w-auto py-4 px-6  rounded-3xl text-[#1E0A52] font-medium hover:brightness-110 transition-all flex items-center justify-center shrink-0"
              >
                <span className="whitespace-nowrap">Book Free Call</span>
                <ChevronRight className="ml-2" size={18} />
              </button>
            </motion.div>
          </div>

          {/* Middle Side: Image & Blob */}
          <div className="col-span-1 lg:col-span-3 relative h-75 lg:h-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative w-full lg:w-175 h-full lg:-ml-30"
            >
              <Image
                src="/image/NewsLetter/NewsLetter_Blog.png"
                alt="Smiling Man"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-contain object-bottom scale-150 lg:scale-190 mt-10 lg:mt-35"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, rotate: 15, scale: 0.5 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              className="absolute top-[20%] lg:top-[43%] -right-20 lg:right-[-54%] z-20 cursor-pointer group scale-50 lg:scale-100"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-100">
                <svg
                  width="173"
                  height="229"
                  viewBox="0 0 173 229"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M24.4711 139.973L29.1161 135.235L29.1169 135.236L29.4739 135.586L34.1197 130.848L33.7627 130.498L33.7619 130.498L38.4064 125.761L38.4072 125.761L38.7642 126.111L43.4095 121.375L43.0525 121.025L43.0517 121.025L47.6975 116.287L47.6984 116.288L48.0548 116.638L50.3777 114.27C51.303 113.326 52.1984 112.356 53.0638 111.362L52.6869 111.035L52.686 111.034C54.4096 109.055 56.0118 106.98 57.485 104.819L57.8985 105.1C59.3854 102.92 60.7422 100.652 61.9616 98.3112L61.5183 98.0804C62.7264 95.761 63.7981 93.3681 64.7277 90.914L64.729 90.9136L65.1963 91.0904C65.5463 90.1664 65.876 89.2336 66.1854 88.2929L66.4884 87.3499L67.5662 83.9024L67.0882 83.7533L69.2427 76.8599L69.244 76.8595L69.7207 77.009L71.8757 70.1148L71.3985 69.9662L71.3972 69.9665L73.5522 63.0723L73.5536 63.0719L74.0316 63.2211L76.1861 56.3277L75.7086 56.1777L77.8626 49.2852L77.864 49.2848L78.3412 49.4335L80.4957 42.5401L80.019 42.3906L80.0177 42.391L82.1727 35.4967L82.174 35.4964L82.6507 35.6459L83.7288 32.1997C84.0699 31.1085 84.4476 30.0408 84.8596 28.998L84.3946 28.8135L84.3933 28.8138C85.2471 26.6527 86.2488 24.5957 87.3801 22.6482L87.8123 22.8996C88.9613 20.9213 90.2462 19.0571 91.6501 17.315L91.2607 17.0027C92.7061 15.209 94.2761 13.5428 95.9518 12.0107L96.2891 12.3784C97.9653 10.8459 99.7494 9.44937 101.621 8.19595L101.342 7.78121C103.246 6.50628 105.24 5.3782 107.304 4.40405L107.518 4.85534C109.563 3.89014 111.678 3.07786 113.844 2.42617L113.7 1.94835C115.886 1.2907 118.122 0.795123 120.39 0.468367L120.462 0.961683C122.691 0.640507 124.951 0.484766 127.221 0.501593L127.225 0.00314687C129.495 0.0199601 131.777 0.207012 134.051 0.572346L134.052 0.571505L133.973 1.06503C136.182 1.41989 138.384 1.9445 140.562 2.64536L140.715 2.17067C142.858 2.86054 144.978 3.71841 147.059 4.75246L147.06 4.75296L146.837 5.19992C147.841 5.69905 148.836 6.23969 149.82 6.82219C150.785 7.39373 151.721 7.99493 152.625 8.6227L152.909 8.21155C154.781 9.51115 156.525 10.9263 158.138 12.4405L157.797 12.8051C159.434 14.3417 160.934 15.9816 162.294 17.707L162.686 17.3978C164.086 19.1733 165.34 21.0386 166.445 22.9749L166.012 23.2222C167.117 25.1583 168.072 27.1663 168.874 29.2273L169.339 29.0462C170.154 31.1427 170.813 33.2931 171.312 35.4781L170.825 35.5885C171.319 37.7532 171.655 39.9523 171.829 42.166L172.326 42.1269C172.502 44.361 172.514 46.6096 172.361 48.8536L171.864 48.8192C171.713 51.0256 171.401 53.2275 170.923 55.4052L171.41 55.5129C170.932 57.6903 170.293 59.8446 169.486 61.9564L169.02 61.7779C168.236 63.8307 167.292 65.8434 166.189 67.7983L166.622 68.0436C165.534 69.9697 164.293 71.8407 162.893 73.6395L162.499 73.3335C161.823 74.2024 161.11 75.0551 160.359 75.8885L158.197 78.287L158.569 78.6216L158.569 78.6225L154.245 83.4204L154.246 83.4196L153.874 83.0849L149.551 87.8828L149.922 88.2183L149.922 88.2192L145.599 93.0162L145.229 92.6821L140.906 97.48L141.276 97.8141L136.954 102.613L136.954 102.613L136.582 102.278L132.259 107.076L132.631 107.41L132.631 107.411L128.308 112.208L127.937 111.874L123.614 116.672L123.985 117.006L119.661 121.805L119.291 121.47L117.129 123.869L116.547 124.525C115.969 125.184 115.404 125.853 114.853 126.533L115.241 126.847L115.241 126.848C113.778 128.653 112.414 130.53 111.151 132.472L111.152 132.471L110.733 132.199C109.46 134.158 108.29 136.182 107.228 138.264L107.672 138.491C106.619 140.554 105.674 142.674 104.84 144.841L104.373 144.662C103.954 145.751 103.563 146.852 103.201 147.964L102.202 151.031L102.677 151.187L100.677 157.323L100.203 157.168L98.2041 163.303L98.6786 163.458L96.6808 169.595L96.2054 169.439L94.2063 175.576L94.6808 175.731L92.683 181.867L92.2076 181.711L90.2084 187.848L90.6843 188.002L88.6843 194.138L88.2098 193.983L87.2102 197.051C86.864 198.114 86.4825 199.154 86.0679 200.169L86.5304 200.358C85.6713 202.461 84.6698 204.462 83.5433 206.355L83.1144 206.1C81.9706 208.023 80.6956 209.832 79.3064 211.523L79.6928 211.841L79.6923 211.841C78.2622 213.582 76.7118 215.197 75.0602 216.682L74.7271 216.311C73.0753 217.796 71.3203 219.148 69.4808 220.361L69.7543 220.777C67.8832 222.01 65.9261 223.1 63.901 224.04L63.691 223.587C61.6847 224.518 59.6112 225.3 57.4897 225.926L57.6304 226.405C55.489 227.037 53.2991 227.51 51.0797 227.82L51.0115 227.326C48.8298 227.63 46.6193 227.773 44.3986 227.749L44.3924 228.248C42.1712 228.224 39.9397 228.034 37.7158 227.671L37.7976 227.178C35.6379 226.826 33.485 226.309 31.3566 225.621L31.2016 226.095C29.1057 225.417 27.0325 224.576 24.9987 223.564L24.9992 223.563L25.2219 223.116C24.4854 222.75 23.7541 222.36 23.0286 221.948L22.3053 221.529C21.3316 220.952 20.3888 220.346 19.4782 219.712L19.1933 220.122C17.3055 218.808 15.5516 217.375 13.9344 215.842L14.2785 215.479C12.6355 213.921 11.1345 212.257 9.77895 210.506L9.38413 210.813C7.98787 209.01 6.74408 207.115 5.65432 205.15L6.09138 204.908C5.00148 202.942 4.06793 200.904 3.29326 198.814L2.82516 198.987C2.03712 196.861 1.41145 194.682 0.951591 192.47L1.44004 192.368C0.984434 190.176 0.693328 187.953 0.56892 185.718L0.0704844 185.745C-0.0550443 183.489 -0.0124184 181.223 0.201153 178.965L0.698339 179.011C0.908338 176.792 1.28562 174.582 1.83221 172.402L1.34698 172.28C1.89352 170.1 2.60828 167.95 3.49281 165.848L3.95317 166.042C4.81192 164.002 5.83292 162.008 7.01886 160.079L6.59344 159.818C7.7608 157.919 9.0851 156.083 10.5705 154.326L10.9525 154.649C11.6691 153.801 12.4243 152.973 13.2167 152.165L15.5382 149.796L15.1813 149.447L15.1805 149.446L19.8263 144.709L19.8271 144.709L20.184 145.059L24.8294 140.323L24.4711 139.973Z"
                    stroke="white"
                    strokeWidth="1.5"
                    fill="transparent"
                    opacity="0.5"
                    strokeDasharray="7 7"
                    initial={{ strokeDashoffset: 1500, opacity: 0 }}
                    whileInView={{ strokeDashoffset: 0, opacity: 0.5 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      delay: 0.8,
                      ease: "easeInOut",
                    }}
                  />
                </svg>
              </div>

              <motion.div
                whileHover={{ scale: 1.05, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="relative  transition-transform duration-300 group-hover:scale-95 scale-100 origin-center "
              >
                <svg
                  width="236"
                  height="159"
                  viewBox="0 0 236 159"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                >
                  <path
                    d="M4.25366 132.163C-8.09275 105.737 7.61028 74.7342 36.2188 69.0523L88.2778 58.7129C98.6019 56.6625 108.292 52.1906 116.551 45.665L161.889 9.8423C184.992 -8.41219 219.078 -0.340673 231.542 26.3359C243.746 52.4556 228.978 83.2072 200.963 90.0133L138.205 105.26C129.16 107.458 120.676 111.53 113.303 117.214L72.4161 148.734C49.6287 166.301 16.433 158.231 4.25366 132.163Z"
                    fill="#C3FF41"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center  justify-center -rotate-25 text-[#1E0A52] font-medium display-xs pointer-events-none ">
                  Contact Us
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side: Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="col-span-1 lg:col-span-4 flex flex-col items-center lg:items-start gap-12 relative h-full md:ml-21 justify-center lg:-mt-70"
          >
            <p className="body-l text-white/60 text-center lg:text-left">
              Get a free consultation and see how <br></br> we  can improve your brand and website.
            </p>
          </motion.div>
        </div>

        {/* Inner Glow Decorative Element */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 w-125 h-125 bg-[#7736FF] rounded-full blur-[140px]"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default NewsletterBlog;
