"use client"
import { ReactNode} from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode
}

const Button = ({ children, href = "#" }: ButtonProps) => {

  return (
    <a href={href} className="fade-up group md:w-[473px] w-[320px] h-16 md:h-[84px] flex items-center overflow-hidden bg-[linear-gradient(90deg,_rgba(150,68,255,1)_0%,_rgba(236,98,98,1)_80%)] p-1 md:p-1.5 rounded-[42px]">
      <div className="flex w-full items-center justify-center gap-3 h-full bg-white rounded-[42px]">
        <figure className="group-hover:rotate-180 duration-500">
            <img className="max-md:w-6 animate-[rotateAnimation_4s_ease-in-out_infinite]" src="/assets/images/ic-btn.svg" alt="" />
        </figure>
        <div className="overflow-hidden relative text-[20px] md:text-[30px] text-[#4F4F4F] font-bold">
            <span data-splitting className="button-splitting whitespace-nowrap group-hover:[&_.char]:opacity-0 group-hover:[&_.char]:-translate-y-5">{children}</span>
            <span data-splitting className="absolute inset-0 button-splitting clone whitespace-nowrap group-hover:[&_.char]:opacity-100 group-hover:[&_.char]:translate-y-0">{children}</span>
            </div>
        </div>
    </a>
  );
};

export default Button;
