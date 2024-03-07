import { ReactNode } from "react";

type TextBlockPropType = {
    title: string;
    anchor?: string;
    children: ReactNode;
  };
export default function TextBlock({title, anchor, children}:TextBlockPropType) {
    return (
        <div id={anchor}>
            <div className="text-white font-bold text-[13px] md:text-[21px]">{title}</div>
            <p className="text-white text-[13px] md:text-[17px] md:leading-[2.47] mt-5 md:pl-10">
            {children}
            </p>
        </div>
    );
  }
  