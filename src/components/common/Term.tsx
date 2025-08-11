import { ReactNode } from "react";

export const Term = ({ title, children }: { title: string, children: ReactNode }) => {
  
  return <div className="[&_ul]:list-decimal md:[&_ul]:pl-7 [&_ul]:pl-6">
    <p className="md:text-[40px] text-[24px] font-bold md:mb-10 mb-5">{title}</p>
    <div className="md:text-[24px] text-[18px]">
        {children}
    </div>
  </div>;
};