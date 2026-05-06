import React from 'react';
import Link from 'next/link';

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?:string
}

const ServiceBtn = ({ href, children, className = "" }: PrimaryButtonProps) => {
  return (
    <Link href={href}>
      <button
 className={`
        relative flex items-center justify-center font-semibold
        w-[212px] h-[52px] px-[24px] py-[13px] gap-[8px]
        bg-[#7736FF] text-white cursor-pointer transition-all duration-300
        rounded-[56px] overflow-hidden
        /* External Glow/Border Shadow */
        shadow-[0px_0px_0px_1.5px_#7749D8]
        active:scale-95
        ${className}
      `}
      style={{
        border: '1px solid transparent',
        backgroundImage: 'linear-gradient(#7736FF, #7736FF), linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
      }}
>
  {children}
</button>
    </Link>
  );
};

export default ServiceBtn;