'use client';

import { ButtonOfficial } from '../ui/Button';

const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-40 flex h-25 w-full items-center justify-between gap-5 overflow-hidden px-5 md:h-[120px] md:px-10">
      <a href="/" className="block">
        <img className="max-md:max-w-[140px]" src="/assets/images/logo.svg" alt="" />
      </a>

      <div className="">
        <ButtonOfficial />
      </div>
    </header>
  );
};

export default Header;
