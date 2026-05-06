import React from 'react';
import Link from 'next/link';
 
interface PrimaryButtonProps {
href: string;
children: React.ReactNode;
className?: string;
target?:string
}
 
const PrimaryButton = ({ href, children, className = "" }: PrimaryButtonProps) => {
return (
<Link href={href}>
<button
className={`
button-l white border-[#7749D8] font-semibold h-[52px] px-6 py-3 bg-primary cursor-pointer rounded-[56px] shadow-[0px_0px_0px_1.5px_#7749D8] hover:shadow-[0px_0px_5px_2px_#7749D8]
transition-all duration-300
${className}
`}
>
{children}
</button>
</Link>
);
};
 
export default PrimaryButton;