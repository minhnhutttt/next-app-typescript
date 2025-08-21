'use client';

import Link from 'next/link';
import { useCallback, useEffect, useId, useState } from 'react';
import { usePathname } from 'next/navigation';

type NavItem = { href: string; label: string };

const NAV_LINKS: NavItem[] = [
  { href: '/about/', label: 'About Us' },
  { href: '/group/', label: 'Group Companies' },
  { href: '/business/', label: 'Business strategy' },
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

  return (
    <header className="absolute inset-x-0 top-0 w-full bg-white/5 p-4">
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between">
        <Link href="/" className="block" onClick={close}>
          <img src="/assets/images/logo.svg" alt="" />
        </Link>

        {/* NAV */}
        <nav
          id={navId}
          aria-label="Main"
          className={`text-white lg:static lg:block lg:flex-1 ${
            open
              ? 'max-lg:pointer-events-auto max-lg:opacity-100'
              : 'max-lg:pointer-events-none max-lg:opacity-0'
          } z-[99] transition-opacity duration-300 max-lg:fixed max-lg:inset-0 max-lg:bg-black/90`}
          aria-hidden={!open}
        >
          <div className={`flex h-full items-center justify-center max-lg:flex-col`}>
            <ul className="flex items-center justify-center gap-8 text-[20px] font-bold max-lg:mb-10 max-lg:flex-col lg:flex-1 lg:text-[16px]">
              {NAV_LINKS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={`${item.href}-${item.label}`}>
                    <Link
                      href={item.href}
                      onClick={close}
                      className={`block border-b-2 transition-opacity duration-200 hover:opacity-75 ${
                        isActive ? 'border-[#00B70C]' : 'border-transparent'
                      }`}
                    >
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/"
              className="flex h-12 w-[160px] justify-center rounded-full bg-[linear-gradient(135deg,_#00B70C_0%,_#00D1C3_49.04%,_#2500C8_100%)] p-0.5"
            >
              <span className="flex h-full w-full items-center justify-center rounded-full bg-black text-[13px] md:text-[16px]">
                CONTACT
              </span>
            </Link>
          </div>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-controls={navId}
          aria-expanded={open}
          onClick={toggle}
          data-open={open}
          className={`group z-[100] h-5 w-10 lg:hidden ${
            open ? 'fixed top-5 right-5' : 'relative'
          } `}
        >
          <span
            className={`absolute top-0 left-0 block h-0.5 w-full -translate-y-1/2 rounded-full bg-[#00B70C] transition-all duration-300 ease-in-out group-data-[open=true]:top-1/2 group-data-[open=true]:rotate-45`}
          />
          <span
            className={`absolute top-[10px] left-0 block h-0.5 w-full -translate-y-1/2 rounded-full bg-[#00B70C] transition-opacity duration-200 group-data-[open=true]:opacity-0`}
          />
          <span
            className={`absolute bottom-0 left-0 block h-0.5 w-full translate-y-1/2 rounded-full bg-[#00B70C] transition-all duration-300 ease-in-out group-data-[open=true]:top-1/2 group-data-[open=true]:translate-y-[-50%] group-data-[open=true]:-rotate-45`}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
