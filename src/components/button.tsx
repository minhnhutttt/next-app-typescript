"use client"
import { ReactNode} from 'react';

interface ButtonProps {
  rect?: string;
  href: string;
  children: ReactNode
}

const Button = ({ rect = '', children, href = "#" }: ButtonProps) => {

  return (
    <a href={href} target='_blank' className={`group md:w-[380px] md:h-[80px] w-[300px] h-[60px] flex items-center justify-center md:rounded-[70px] rounded-[40px] text-white font-black ${rect}`}>
      <div className="flex items-center h-full">
        <div className="overflow-hidden relative md:text-[20px] text-[16px] ">
        <span data-splitting className="button-splitting whitespace-nowrap root group-hover:[&_.char]:opacity-100 group-hover:[&_.char]:translate-y-0">{children}</span>
        <span data-splitting className="absolute inset-0 button-splitting clone whitespace-nowrap  group-hover:[&_.char]:opacity-0 group-hover:[&_.char]:translate-y-5">{children}</span>
        </div>
        </div>
    </a>
  );
};

export default Button;
