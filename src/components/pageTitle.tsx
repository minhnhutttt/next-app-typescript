"use client";
import { ReactNode } from "react";
type PageTitlePropsType = {
  children: ReactNode;
};
export default function PageTitle({ children }: PageTitlePropsType) {
  return (
    <div className="flex items-center justify-center px-5 md:pt-[200px] pt-[150px] text-black">
      <p className="text-[7vw] font-bold md:text-[50px]">
        {children}
      </p>
    </div>
  );
}
