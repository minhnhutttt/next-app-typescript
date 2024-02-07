"use client";
import { ReactNode } from "react";
type PageContainerPropsType = {
    children: ReactNode;
};
export default function PageContainer({ children }: PageContainerPropsType) {
  return (
    <div className="pt-[120px] md:pt-[12vw] pb-20 min-[1440px]:pt-[170px] bg-[url('/images/bg.png')] bg-[length:100%_auto] bg-no-repeat bg-top overflow-hidden">
        {children}
    </div>
  );
}
