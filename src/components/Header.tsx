"use client";

import { useScroll } from "@/contexts/ScrollContext";


const Header = () => {
  const { isDarkSection } = useScroll();

  return (
    <header className={`fixed top-0 inset-x-0 flex justify-between items-center md:h-[100px] h-20 px-5 md:px-10 z-[99] transition-colors duration-300 text-white  ${
      isDarkSection 
        ? 'mix-blend-difference' 
        : ''
    }`}>
      <a href="/" className="md:text-[40px] text-[24px] font-bold">LOGO</a>
      <a href="/" className="u-link md:text-[40px] text-[24px] font-bold">Contact</a>
    </header>
  );
};

export default Header;