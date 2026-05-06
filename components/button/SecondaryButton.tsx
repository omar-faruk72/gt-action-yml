import React from 'react';

interface SecondaryButtonProps {
  children: React.ReactNode;
  className?: string;
}

const SecondaryButton = ({ children, className = "" }: SecondaryButtonProps) => {
  const textColor = "#1A093D"; 
  const blobColor = "#C3FF41"; 

  return (
    <div className={`relative -rotate-[26deg] inline-flex items-center justify-center ${className}`}>
      
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="metablob_bold">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
          </filter>
        </defs>
      </svg>

      <div 
        className="relative px-16 py-6" 
        style={{ filter: "url(#metablob_bold)" }}
      >
        <svg 
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 300 100" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M 50 10 
               L 150 25 
               L 250 10 
               A 40 40 0 0 1 250 90 
               L 150 75 
               L 50 90 
               A 40 40 0 0 1 50 10 Z" 
            fill={blobColor}
            className="transition-all duration-300 ease-in-out hover:brightness-105"
          />
        </svg>

        <button 
          className="relative flex items-center gap-3 title-l z-10" 
          style={{ color: textColor }}
        >
          <span className="inline-block">{children}</span>
          <span 
            className="w-3 h-3 absolute -right-10 rounded-full inline-block" 
            style={{ backgroundColor: textColor }}
          />
        </button>
      </div>
    </div>
  );
};

export default SecondaryButton;