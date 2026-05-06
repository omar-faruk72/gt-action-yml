import React from 'react';

interface BackgroundCurveProps {
  className?: string;
  strokeColor?: string;
  opacity?: number;
}

const BackgroundCurve: React.FC<BackgroundCurveProps> = ({ 
  className = "", 
  strokeColor = "white", 
  opacity = 0.03 
}) => {
  return (
    <div className={`absolute pointer-events-none z-0 select-none ${className}`}>
      <svg
        width="891"
        height="328"
        viewBox="0 0 891 328"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity={opacity}
          d="M2.54937 308.276C66.1764 325.05 193.172 329.975 192.137 215.491C190.844 72.3846 368.554 48.385 418.631 145.366C484.145 272.241 612.542 248.448 641.931 81.6984C663.153 -38.7173 814.32 18.235 884.876 67.4793"
          stroke={strokeColor}
          strokeWidth="20"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default BackgroundCurve;