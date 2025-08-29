'use client';

import Link from 'next/link';
import { useCallback, useEffect, useId, useState } from 'react';

type NavItem = { href: string; label: string };

const NAV_LINKS: NavItem[] = [
  { href: '/', label: '選ばれる理由' },
  { href: '/', label: '体験イメージ' },
  { href: '/', label: '導入ステップ' },
  { href: '/', label: '事例紹介' },
  { href: '/', label: 'よくある質問' },
];

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
    <header className="fixed inset-x-0 top-0 z-40 flex h-20 items-center justify-between bg-white px-5 md:h-25 md:px-7.5">
      <Link href="/" className="block" onClick={close}>
        <img className="max-md:w-[120px]" src="/assets/images/logo.svg" alt="" />
      </Link>

      {/* NAV */}
      <nav
        id={navId}
        aria-label="Main"
        className={`xl:static xl:block ${open ? 'max-xl:pointer-events-auto max-xl:opacity-100' : 'max-xl:pointer-events-none max-xl:opacity-0'} z-[99] transition-opacity duration-300 max-xl:fixed max-xl:inset-0 max-xl:bg-white/90`}
        aria-hidden={!open}
      >
        <div className="flex h-full items-center justify-center gap-10 max-xl:flex-col min-[1440px]:gap-[128px]">
          <ul className="flex items-center justify-center gap-7 text-[20px] font-bold max-md:flex-col md:gap-10 md:text-[18px]">
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
          <div className="">
            <a
              href="/"
              className="flex h-14 w-[220px] items-center justify-center gap-2.5 rounded-full border-2 border-[#0046B8] bg-white text-[16px] font-bold tracking-wider text-[#0046B8] [box-shadow:0_6px_8px_0_rgba(0,_70,_184,_0.20)] md:h-[70px] md:w-[294px] md:text-[20px]"
            >
              <span>
                <img src="/assets/images/ic-content.svg" alt="" />
              </span>
              無料相談はこちら
            </a>
          </div>
        </div>
      </nav>

      <button
        type="button"
        aria-label="Toggle navigation"
        aria-controls={navId}
        aria-expanded={open}
        onClick={toggle}
        data-open={open}
        className={`group z-[100] flex rounded-lg border-2 border-[#0046B8] p-2 md:p-3 xl:hidden ${open ? 'fixed top-5 right-5 md:top-6.5 md:right-7.5' : 'relative'} `}
      >
        <div className="relative h-5 w-8 md:w-10">
          <span
            className={`absolute top-0 left-0 block h-0.5 w-full -translate-y-1/2 rounded-full bg-[#0046B8] transition-all duration-300 ease-in-out group-data-[open=true]:top-1/2 group-data-[open=true]:rotate-45`}
          />
          <span
            className={`absolute top-[10px] left-0 block h-0.5 w-full -translate-y-1/2 rounded-full bg-[#0046B8] transition-opacity duration-200 group-data-[open=true]:opacity-0 xl:top-[15px]`}
          />
          <span
            className={`absolute bottom-0 left-0 block h-0.5 w-full translate-y-1/2 rounded-full bg-[#0046B8] transition-all duration-300 ease-in-out group-data-[open=true]:top-1/2 group-data-[open=true]:translate-y-[-50%] group-data-[open=true]:-rotate-45`}
          />
        </div>
      </button>
    </header>
  );
};

export default Header;
