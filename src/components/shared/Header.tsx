'use client';

import Link from 'next/link';
import { useCallback, useEffect, useId, useState } from 'react';

type NavItem = { href: string; label: string };

const NAV_LINKS: NavItem[] = [{ href: '/', label: 'Home' }];

const Header = () => {
  const [open, setOpen] = useState(false);
  const navId = useId();

  const toggle = useCallback(() => setOpen((v) => !v), []);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open);
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [open]);

  return (
    <header className="flex items-center justify-between p-5">
      <Link href="/" className="block" onClick={close}>
        <img src="/assets/images/logo.svg" alt="" />
      </Link>

      {/* NAV */}
      <nav
        id={navId}
        aria-label="Main"
        className={`md:static md:block ${open ? 'max-md:pointer-events-auto max-md:opacity-100' : 'max-md:pointer-events-none max-md:opacity-0'} z-[99] transition-opacity duration-300 max-md:fixed max-md:inset-0 max-md:bg-white/90`}
        aria-hidden={!open}
      >
        <div className={`flex h-full items-center justify-center`}>
          <ul className="flex items-center justify-center font-bold max-md:flex-col">
            {NAV_LINKS.map((item) => (
              <li key={`${item.href}-${item.label}`}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="block transition-opacity duration-200 hover:opacity-75"
                >
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <button
        type="button"
        aria-label="Toggle navigation"
        aria-controls={navId}
        aria-expanded={open}
        onClick={toggle}
        data-open={open}
        className={`group z-[100] h-5 w-10 md:hidden ${open ? 'fixed top-5 right-5' : 'relative'} `}
      >
        <span
          className={`absolute top-0 left-0 block h-0.5 w-full -translate-y-1/2 rounded-full bg-[#3E7976] transition-all duration-300 ease-in-out group-data-[open=true]:top-1/2 group-data-[open=true]:rotate-45`}
        />
        <span
          className={`absolute top-[9px] left-0 block h-0.5 w-full -translate-y-1/2 rounded-full bg-[#3E7976] transition-opacity duration-200 group-data-[open=true]:opacity-0 md:top-[14px]`}
        />
        <span
          className={`absolute bottom-0 left-0 block h-0.5 w-full translate-y-1/2 rounded-full bg-[#3E7976] transition-all duration-300 ease-in-out group-data-[open=true]:top-1/2 group-data-[open=true]:translate-y-[-50%] group-data-[open=true]:-rotate-45`}
        />
      </button>
    </header>
  );
};

export default Header;
