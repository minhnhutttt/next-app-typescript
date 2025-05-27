import Link from 'next/link';
import { ReactNode } from 'react';

interface NavButtonProps {
  href: string;
  pathname: string;
  children: ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({ href, pathname, children }) => {
  const isActive = pathname === href;
  
  return (
    <Link
      href={href}
      className={`btn inline-flex relative py-3 px-5 leading-none md:text-[14px] text-[12px] ${
        isActive ? 'text-black' : 'text-white'
      }`}
    >
      <div className="absolute inset-0">
        <span 
          className={`absolute bg-[#D8C115] inset-0 [transition:transform_.75s_cubic-bezier(.19,1,.22,1)] ${
            isActive ? 'scale-100' : 'scale-0'
          }`}
        ></span>
        
        <div className={`absolute inset-0 overflow-hidden ${isActive ? 'opacity-0' : 'opacity-100'}`}>
          <div className="btn-line-top-l absolute left-0 top-0 right-0 border-b border-current origin-left w-4"></div>
          <div className="btn-line-side-l absolute left-0 top-0 bottom-0 border-r border-current origin-bottom"></div>
          <div className="btn-line-bottom-l absolute left-0 bottom-0 right-0 border-t border-current origin-left w-4"></div>
        </div>
        
        <div className={`absolute inset-0 overflow-hidden ${isActive ? 'opacity-0' : 'opacity-100'}`}>
          <div className="btn-line-top-r absolute right-0 top-0 border-b border-current origin-right w-4"></div>
          <div className="btn-line-side-r absolute right-0 top-0 bottom-0 border-l border-current origin-top"></div>
          <div className="btn-line-bottom-r absolute right-0 bottom-0 border-t border-current origin-right w-4"></div>
        </div>
      </div>
      
      <div className="relative z-2 uppercase">{children}</div>
    </Link>
  );
};

export default NavButton;