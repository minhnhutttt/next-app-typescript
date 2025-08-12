import { ReactNode } from "react";

interface ButtonItemProps {
  link?: string;
  children: ReactNode;
  sm?: boolean;
  onClick?: () => void;
}

export const ButtonItem = ({ link, children, sm = false, onClick }: ButtonItemProps) => {
  const baseClass =
    `fade-up px-3 w-full flex items-center justify-center rounded-full bg-[#367F7B] shadow-[0_4px_0_0_#417370] md:text-[24px] font-bold text-white hover:!opacity-70 duration-300 ${sm ? 'h-8 max-w-[96px] md:h-[56px] md:max-w-[184px] text-[16px]' : 'md:h-[78px] h-[56px] max-w-[224px] text-[18px]'}`;

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
