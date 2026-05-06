

"use client";
import React from 'react';
import Link from 'next/link';

interface WhiteButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
}

const WhiteButton = ({ 
  href, 
  children, 
  className = "", 
  showArrow = true, 
  onClick 
}: WhiteButtonProps) => {
  

  const commonClasses = `
    group inline-flex items-center justify-center 
    w-[167px] h-[52px] 
    gap-[10px] 
    bg-white 
    border border-[#CCCCE9] 
    rounded-[56px] 
    text-[#1E0A52] text-[18px] font-semibold 
    transition-all duration-300 
    hover:bg-[#F8F9FF] hover:border-[#7749D8] 
    active:scale-95 
    ${className}
  `.trim();

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <span className="flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
       
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M5.5 3L10.5 8L5.5 13" 
              stroke="currentColor" 
              strokeWidth="1.4" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={commonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={commonClasses} onClick={onClick} type="button">
      {content}
    </button>
  );
};

export default WhiteButton;