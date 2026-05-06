import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const inter_tight = Inter_Tight({ 
  subsets: ['latin'],
  variable: '--font-inter', 
})

export const metadata: Metadata = {
  title: {
    default: "Design Fixter",
    template: "%s | Design Fixter"
  },
  description: "Design Fixter is a modern web design agency. We ensure your business's digital presence with Next.js, React, and cutting-edge UI/UX solutions.",
  keywords: [
    "Web Design Agency", 
    "Full-stack Development", 
    "Next.js Expert", 
    "UI/UX Design", 
    "Custom Software Solutions",
    "Digital Transformation"
  ],
  authors: [{ name: "Millon Hossen" }],
  openGraph: {
    title: "Design Fixter - We Are Committed to Building Your Dream Website",
    description: "Premium web solutions powered by modern technology and creative design.",
    url: "https://design-fixter.com", 
    siteName: "Design Fixter",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Fixter | Premium Web Solutions",
    description: "Modern web design and development with Next.js & UI/UX expertise.",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter_tight.variable} h-full antialiased`}>
     
      <body className="min-h-full flex flex-col">
        
       
        <header className="">
              <Navbar />
        </header>

       
        <main className="flex-grow">
          <ScrollProgressBar/>
          {children}
        </main>

        <Footer></Footer>
       
      </body>
    
    </html>
  );
}