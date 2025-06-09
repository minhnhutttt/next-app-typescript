"use client"
import { usePathname } from 'next/navigation'
import NavButton from './NavButton'

const Footer: React.FC = () => {
  const pathname = usePathname()
  
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 pb-10 md:pb-20 px-5 md:px-10">
      <div className="relative site-max flex justify-between items-end">
        <NavButton href="/liquid" pathname={pathname}>
          Liquid
        </NavButton>
        
        <NavButton href="/venture" pathname={pathname}>
          Venture
        </NavButton>
        
        <a
          href="mailto:INFO@ARDOREX.NET"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex text-gray transition-colors duration-300 ease-out has-hover:hover:text-yellow pointer-events-auto text-gray-300 max-md:text-[12px]"
        >
          <span>[email&nbsp;protected]</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;