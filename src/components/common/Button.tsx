import { ReactNode } from "react";

interface ButtonProps {
  link?: string;
  children: ReactNode;
  type?: number;
  sm?: boolean
  onClick?: () => void;
}

export const Button = ({ link, children, type = 1, sm = false, onClick }: ButtonProps) => {
  const baseClass = `fade-up flex items-center justify-center md:text-[24px] text-[18px] font-bold border-2 px-4 rounded-[10px] hover:mt-1 duration-300 hover:shadow-none ${
    type === 0
      ? "bg-[#DF6100] border-[#B3550D] text-white shadow-[0_4px_0_0_#B3550D]"
      : "bg-white border-[#666] text-[#666] shadow-[0_4px_0_0_#666]"
  } ${sm ? 'min-w-[178px] md:min-w-[215px] h-[43px] md:h-[62px]' : 'min-w-[244px] h-[56px] md:h-[62px] '}`;

  return (
    <div className="md:h-[66px] h-[60px]">
      {link ? (
        <a href={link} className={baseClass}>
          {children}
        </a>
      ) : (
        <button onClick={onClick} className={baseClass}>
          {children}
        </button>
      )}
    </div>
  );
};
