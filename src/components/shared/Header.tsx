'use client';

import Link from 'next/link';
import { useCallback, useEffect, useId, useState } from 'react';
import { usePathname } from 'next/navigation';

type NavItem = { href: string; label: string };

const NAV_LINKS: NavItem[] = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/business', label: 'business' },
  { href: '/product', label: 'product' },
  { href: '/contact', label: 'contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const navId = useId();
  const pathname = usePathname();

  const toggle = useCallback(() => setOpen((v) => !v), []);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open);
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [open]);

  const textColor = pathname === '/' ? 'text-white' : 'text-black';

  return (
    <header
      className={`absolute inset-x-0 top-0 z-50 flex items-center justify-between p-5 ${textColor}`}
    >
      <div className="mx-auto flex w-full max-w-[1240px] items-center gap-12 py-2 max-md:justify-between md:py-4 lg:gap-36">
        <a href="/" className="block text-[20px] font-black md:text-[26px]" onClick={close}>
          AIS Japan
        </a>

        {/* NAV */}
        <nav
          id={navId}
          aria-label="Main"
          className={`md:static md:block ${
            open
              ? 'text-white max-md:pointer-events-auto max-md:opacity-100'
              : 'max-md:pointer-events-none max-md:opacity-0'
          } z-[99] transition-opacity duration-300 max-md:fixed max-md:inset-0 max-md:bg-[#FF884B]/90`}
          aria-hidden={!open}
        >
          <div className="flex h-full items-center justify-center">
            <ul className="flex items-center justify-center gap-6 text-[24px] font-semibold max-md:flex-col md:gap-12 md:text-[20px]">
              {NAV_LINKS.map((item) => {
                const isActive =
                  item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

                return (
                  <li key={`${item.href}-${item.label}`}>
                    <a
                      href={item.href}
                      onClick={close}
                      className={`block transition-opacity duration-200 hover:opacity-75 ${
                        isActive ? 'border-b-2 border-current' : ''
                      }`}
                    >
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        {/* TOGGLE BUTTON */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-controls={navId}
          aria-expanded={open}
          onClick={toggle}
          data-open={open}
          className={`group z-[100] h-5 w-10 md:hidden ${
            open ? 'fixed top-5 right-5' : 'relative'
          } `}
        >
          <span
            className={`absolute top-0 left-0 block h-0.5 w-full -translate-y-1/2 rounded-full transition-all duration-300 ease-in-out group-data-[open=true]:top-1/2 group-data-[open=true]:rotate-45 group-data-[open=true]:bg-white ${pathname === '/' ? 'bg-white' : 'bg-black'}`}
          />
          <span
            className={`absolute top-[9px] left-0 block h-0.5 w-full -translate-y-1/2 rounded-full transition-opacity duration-200 group-data-[open=true]:bg-white group-data-[open=true]:opacity-0 md:top-[14px] ${pathname === '/' ? 'bg-white' : 'bg-black'}`}
          />
          <span
            className={`absolute bottom-0 left-0 block h-0.5 w-full translate-y-1/2 rounded-full transition-all duration-300 ease-in-out group-data-[open=true]:top-1/2 group-data-[open=true]:translate-y-[-50%] group-data-[open=true]:-rotate-45 group-data-[open=true]:bg-white ${pathname === '/' ? 'bg-white' : 'bg-black'}`}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
