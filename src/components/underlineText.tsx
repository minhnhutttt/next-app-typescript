"use client";
import { ReactNode } from "react";

const UnderlineText = ({ children }: { children: ReactNode }) => {
  return (
    <span data-scroll className="group relative">
      {children}
      <span className="w-full block md:h-4 h-3 absolute top-auto md:-bottom-2 -bottom-1.5 left-[.0625rem] right-0 bg-no-repeat  bg-left bg-[url('/assets/images/underline.svg')] group-data-[scroll=in]:animate-[underlineText_1s_ease-in-out_forwards]">
       
      </span>
    </span>
  );
};

export default UnderlineText;
