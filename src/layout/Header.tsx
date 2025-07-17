"use client";

import { usePathname } from 'next/navigation'
import { useScroll } from "@/contexts/ScrollContext";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { NavLink } from '../components/NavLink';


const Header: React.FC = () => {

  const pathName = usePathname();
  const isHomePage = pathName === '/';

  const { isDarkSection } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
  const menuRef = useRef<HTMLElement>(null);
  const menuInnerRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  
  const openTl = useRef<gsap.core.Timeline | null>(null);
  const closeTl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    openTl.current = gsap.timeline({ paused: true });
    
    openTl.current
      .set(menuRef.current, { display: 'block' })
      .fromTo(menuRef.current, 
        { 
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
        },
        { 
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 0.8,
          ease: "power3.inOut"
        }
      )
      .fromTo(menuInnerRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        },
        "-=0.3"
      )
      .fromTo(menuItemsRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out"
        },
        "-=0.4"
      );

    closeTl.current = gsap.timeline({ paused: true });
    
    closeTl.current
      .to(menuRef.current, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: 0.3,
        ease: "power3.inOut"
      })
      .set(menuRef.current, { display: 'none' });

    gsap.set(menuRef.current, { display: 'none' });
    
    return () => {
      openTl.current?.kill();
      closeTl.current?.kill();
    };
  }, []);

  const toggleMenu = (): void => {
    if (isMenuOpen) {
      closeTl.current?.restart();
    } else {
      openTl.current?.restart();
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (): void => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  const setMenuItemRef = (index: number) => (el: HTMLLIElement | null): void => {
    menuItemsRef.current[index] = el;
  };

  return (
    <>
    <header className={`fixed top-0 inset-x-0 flex justify-between items-center md:h-[100px] h-20 px-5 md:px-10 z-[99] transition-colors duration-300 text-white ${!isHomePage || isDarkSection
      ? 'mix-blend-difference' : '' }`}>
      <Link href="/" className="md:text-[40px] text-[24px] font-bold">LOGO</Link>
      
      <nav aria-label="Main navigation">
        <ul className="hidden md:flex gap-x-2.5 text-[24px] font-medium">
          <li><NavLink href="/speaking" className={`u-link ${pathName === '/speaking' ? 'is-active' : ''}`}>Speaking,</NavLink></li>
          <li><NavLink href="/media" className={`u-link ${pathName === '/media' ? 'is-active' : ''}`}>Media,</NavLink></li>
          <li><NavLink href="/books" className={`u-link ${pathName === '/books' ? 'is-active' : ''}`}>Books,</NavLink></li>
          <li><NavLink href="/downloads" className={`u-link ${pathName === '/downloads' ? 'is-active' : ''}`}>Downloads,</NavLink></li>
          <li><NavLink href="/about" className={`u-link ${pathName === '/about' ? 'is-active' : ''}`}>About</NavLink></li>
        </ul>
      </nav>
      
      <a href="/" className="u-link md:text-[40px] text-[24px] font-bold hidden md:block">Contact</a>
      
      <button 
        ref={menuTriggerRef}
        aria-label="Menu" 
        className="block md:hidden menu-trigger relative overflow-hidden z-50 text-[24px] font-medium"
        onClick={toggleMenu}
      >
        <div className={`menu-trigger-menu transition-transform duration-300 ${isMenuOpen ? 'transform translate-y-[-100%]' : ''}`}>
          Menu
        </div>
        <div className={`menu-trigger-close absolute top-0 left-0 transition-transform duration-300 ${isMenuOpen ? 'transform translate-y-0' : 'transform translate-y-[100%]'}`}>
          Close
        </div>
      </button>
    </header>
    
      
      <nav 
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-full z-40 bg-black text-white overflow-hidden"
        style={{ display: 'none' }}
      >
        <div 
          ref={menuInnerRef}
          className="size-full flex flex-col justify-center px-5"
        >
          <ul className="flex flex-col space-y-0">
            <li 
              ref={setMenuItemRef(0)}
              className="overflow-hidden border-t border-white border-opacity-10"
            >
              <Link 
                href="/speaking" 
                className="block px-5 py-6 text-3xl font-medium hover:text-gray-300 transition-colors"
                onClick={handleLinkClick}
              >
                Speaking
              </Link>
            </li>
            <li 
              ref={setMenuItemRef(1)}
              className="overflow-hidden border-t border-white border-opacity-10"
            >
              <Link 
                href="/media" 
                className="block px-5 py-6 text-3xl font-medium hover:text-gray-300 transition-colors"
                onClick={handleLinkClick}
              >
                Media
              </Link>
            </li>
            <li 
              ref={setMenuItemRef(2)}
              className="overflow-hidden border-t border-white border-opacity-10"
            >
              <a 
                href="/books" 
                className="block px-5 py-6 text-3xl font-medium hover:text-gray-300 transition-colors"
                onClick={handleLinkClick}
              >
                Books
              </a>
            </li>
            <li 
              ref={setMenuItemRef(3)}
              className="overflow-hidden border-t border-white border-opacity-10"
            >
              <a 
                href="/downloads" 
                className="block px-5 py-6 text-3xl font-medium hover:text-gray-300 transition-colors"
                onClick={handleLinkClick}
              >
                Downloads
              </a>
            </li>
            <li 
              ref={setMenuItemRef(4)}
              className="overflow-hidden border-t border-white border-opacity-10 border-b"
            >
              <a 
                href="/about" 
                className="block px-5 py-6 text-3xl font-medium hover:text-gray-300 transition-colors"
                onClick={handleLinkClick}
              >
                About
              </a>
            </li>
            <li 
              ref={setMenuItemRef(5)}
              className="overflow-hidden border-t border-white border-opacity-10 border-b"
            >
              <a 
                href="/contact" 
                className="block px-5 py-6 text-3xl font-medium hover:text-gray-300 transition-colors"
                onClick={handleLinkClick}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      </>
  );
};

export default Header;