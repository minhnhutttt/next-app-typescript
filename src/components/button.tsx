"use client"

import { ReactNode } from "react";

interface ButtonProps {
  large?: boolean;
  children: ReactNode;
}

const Button = ({ large = false, children }: ButtonProps) => {
  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className={`sway relative bg-[#F2E206] md:rounded-[10px] rounded-[5px] border-[3px] border-[#000] flex justify-center items-center mx-auto md:h-[67px] h-14 max-w-[100%] text-[#000F12] text-center font-bold transition duration-300 tracking-wides gap-2 hover:opacity-75
      ${large ? 'md:w-[380px] w-[320px]' : 'md:w-[320px] w-[300px]'} md:text-[24px] text-[16px] 
      md:shadow-[0_5px_0_#0F0F0F] shadow-[0_2px_0_#0F0F0F]`}
    >
      {children}
      <figure>
        <img className="" src="/assets/images/ic-btn.svg" alt="Arrow" />
      </figure>
    </a>
  );
};


export default Button;
