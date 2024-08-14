"use client"
import { ReactNode} from 'react';


const Box = ({ children }: {children?: ReactNode}) => {

  return (
    <p className="box w-full flex items-center justify-center h-10 md:h-[80px] absolute text-[5vw] md:text-[45px] text-center font-bold opacity-0 scale-[0.5]">
        {children}
    </p>
  );
};

export default Box;
