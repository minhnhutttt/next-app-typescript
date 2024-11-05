"use client"
import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [NavOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <header className=" ">
   
    </header>
  );
};

export default Header;
