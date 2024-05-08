import { ReactNode } from "react";
export type PageTitlePropsType = {
  children: ReactNode;
};
export default function PageTitle({ children }: PageTitlePropsType) {
  return (
    <div className="pt-[180px] flex h-[100px] items-center justify-center px-5 md:pt-[290px] md:h-[172px] text-white">
      <p
        className="text-[7vw] font-bold md:text-[50px]"
      >
        {children}
      </p>
    </div>
  );
}
