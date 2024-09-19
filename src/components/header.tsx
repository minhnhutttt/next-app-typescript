"use client";

const Header = () => {

  return (
    <header className="absolute top-0 inset-x-0 flex items-center px-3 h-[84px] z-40">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="block relative duration-150 hover:opacity-75">
            <img className="max-md:w-[100px]" src="/assets/images/logo.svg" alt="" />
          </a>
        </div>
        <div className="px-2">
            <a href="/" className="text-[14px] md:text-[18px] text-white font-semibold duration-150 hover:opacity-75">WHITEPAPER</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
