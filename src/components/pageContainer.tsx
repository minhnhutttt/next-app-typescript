"use client"

import { ReactNode } from "react";
import BarCode from "./barcode";

const PageContainer = ({ children }: {children: ReactNode}) => {

  return (
    <main>
      <div className="md:px-4 pt-3 md:pb-[500px] pb-[200px] relative">
          <h2 className="pb-4 max-md:hidden">
              <img className="dark:hidden" src="/assets/images/logo.png" alt="" />
              <img className="hidden dark:block" src="/assets/images/logo-dark.png" alt="" />
          </h2>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-8 md:gap-y-12 max-md:border-t border-black dark:border-white relative z-10">
            {children}
          </div>
          <div className="absolute bottom-8 right-0 max-md:w-[80%]">
            <figure>
            <img src="/assets/images/f-logo.png" alt="" />
            </figure>
          </div>
      </div>
      <div className="h-[324px] flex justify-end items-end p-3">
          <BarCode  />
        </div>
    </main>
  );
};

export default PageContainer;
