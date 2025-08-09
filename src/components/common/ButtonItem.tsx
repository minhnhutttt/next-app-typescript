import { ReactNode } from "react";

interface ButtonItemProps {
  link?: string;
  children: ReactNode;
  onClick?: () => void;
}

export const ButtonItem = ({ link, children, onClick }: ButtonItemProps) => {
  const baseClass =
    "fade-up h-[56px] max-md:w-[172px] md:h-[78px] px-4 max-w-[224px] w-full md:px-16 flex items-center justify-center rounded-full bg-[#367F7B] shadow-[0_4px_0_0_#417370] md:text-[24px] font-bold text-[18px] text-white hover:!opacity-70 duration-300";

  return link ? (
    <a href={link} className={baseClass}>
      {children}
    </a>
  ) : (
    <button type="button" onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
};
