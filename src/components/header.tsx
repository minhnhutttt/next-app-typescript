"use client"
import { useCallback, useState } from "react";

const Header = () => {
  const [NavOpen, setNavOpen] = useState(false);

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <header className="absolute top-0 inset-x-0 flex justify-between items-center py-6 px-3 md:px-7 z-[99]">
     <a href="/" className="block">
      <img className="max-md:w-[50px]" src="/assets/images/logo.png" alt="" />
     </a>
     
    </header>
  );
};

export default Header;
