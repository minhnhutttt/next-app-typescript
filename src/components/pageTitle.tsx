"use client";
import { ReactNode } from "react";
type PageTitlePropsType = {
  children: ReactNode;
};
export default function PageTitle({ children }: PageTitlePropsType) {
  return (
    <div className="flex items-center justify-center text-center">
        <h3 className="fade-up u-text-gradient bg-[linear-gradient(90deg,_#00F4AE_0%,_#0C408C_100%)] text-[24px] font-bold md:leading-[1.1] leading-[1.3]">
        {children}
        </h3>
    </div>
  );
}
