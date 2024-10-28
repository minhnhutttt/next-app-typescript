"use client"

import { ReactNode } from "react";

interface ButtonProps {
  large?: boolean;
  link?: string;
  children: ReactNode;
}

const Button = ({ large = false, link = '#', children }: ButtonProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`fade-up relative bg-[#73E3DC] md:rounded-[20px] rounded-[10px] flex justify-center items-center mx-auto md:h-20 h-16 max-w-[100%] text-[#000F12] text-center font-bold transition duration-300 tracking-wides gap-2 hover:opacity-75
      ${large ? 'md:w-[380px] w-[320px]' : 'md:w-[320px] w-[300px]'} md:text-[20px] text-[16px] 
      md:shadow-[0_4px_4px_#00000040] shadow-[0_2px_2px_#00000040]`}
    >
       <figure>
        <img className="" src="/assets/images/ic-line.svg" alt="Arrow" />
      </figure>
      {children}
    </a>
  );
};


export default Button;
