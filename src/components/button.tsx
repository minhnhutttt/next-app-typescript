"use client"
import { ReactNode} from 'react';

interface ButtonProps {
  rect?: string;
  href: string;
  children: ReactNode
}

const Button = ({ rect, children, href = "#" }: ButtonProps) => {

  return (
    <a href={href} className="group md:w-[380px] w-[320px] h-16 md:h-20 bg-black flex items-center overflow-hidden">
      <div className="flex items-center h-full">
        <span className="px-2.5 scale-0 w-0 group-hover:w-[115px] group-hover:scale-100 duration-300 origin-left flex">
        <svg className="max-md:w-16" xmlns="http://www.w3.org/2000/svg" width="115" height="17" viewBox="0 0 115 17" fill="none">
            <line y1="15.7778" x2="115" y2="15.7778" stroke="white" strokeWidth="2"/>
            <line x1="114.071" y1="16.2633" x2="98.5147" y2="0.70691" stroke="white" strokeWidth="2"/>
        </svg>
        </span>
        <div className="overflow-hidden px-6 relative font-anton text-[14px] md:text-[18px] text-white">
        <span data-splitting className="button-splitting whitespace-nowrap group-hover:[&_.char]:opacity-0 group-hover:[&_.char]:-translate-y-5">{children}</span>
        <span data-splitting className="absolute inset-0 button-splitting clone px-6 whitespace-nowrap group-hover:[&_.char]:opacity-100 group-hover:[&_.char]:translate-y-0">{children}</span>
        </div>
        </div>
        <span className="px-2.5 group-hover:w-0 group-hover:scale-0 duration-300 origin-right flex flex-1 justify-end ">
            <svg className="max-md:w-16" xmlns="http://www.w3.org/2000/svg" width="115" height="17" viewBox="0 0 115 17" fill="none">
                <line y1="15.7778" x2="115" y2="15.7778" stroke="white" strokeWidth="2"/>
                <line x1="114.071" y1="16.2633" x2="98.5147" y2="0.70691" stroke="white" strokeWidth="2"/>
            </svg>
        </span>
    </a>
  );
};

export default Button;
