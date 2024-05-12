import { ReactNode } from "react";

interface TitlePropsType {
    children: ReactNode;
  };
export default function Title({ children }: TitlePropsType) {
    return (
      <div className="md:bg-[url('/assets/images/bg-title.png')] bg-[url('/assets/images/bg-title_sp.png')] bg-[length:100%_100%] max-md:pl-20 h-[61px] md:w-[102px] w-[330px] md:h-[452px] flex items-center md:pt-8 text-[21px] md:text-[29px] font-semibold font-mincho md:[writing-mode:_vertical-rl]">
        {children}
      </div>
    );
  }
  