"use client";
import { ReactNode } from "react";

const UnderlineText = ({ children }: { children: ReactNode }) => {
  return (
    <span data-scroll className="group relative">
      {children}
      <span className="w-full block md:h-4 h-3 absolute top-auto md:-bottom-[12px] -bottom-[7px] left-[.0625rem] right-auto bg-no-repeat bg-right bg-[url('/assets/images/underline.svg')]">
       
      </span>
    </span>
  );
};

export default UnderlineText;
