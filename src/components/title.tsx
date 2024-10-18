import { ReactNode } from "react";

interface TitleProps {
    children: ReactNode
  }
  
const Title = ({children}: TitleProps) => {
    return (
      <div className="fade-up">
        <h3 className="text-center md:text-[28px] text-[20px] font-bold">{children}</h3>
        <div className="h-[5px] bg-[linear-gradient(90deg,_#FF7DD3_0%,_#3CE8FF_100%)]"></div>
      </div>
    );
  };
  
  export default Title;
  