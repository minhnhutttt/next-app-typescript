"use client";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-[#EC9DBC]">
          <div className="flex items-center justify-between gap-4 px-5 py-5">
            <a href="/">
              <img
                src="/assets/images/header-logo.svg"
                className="w-[190px]"
                alt=""
              />
            </a>
            <div>
              <img
                src="/assets/images/header-msg.svg"
                className="w-[200px]"
                alt=""
              />
            </div>
          </div>
          <div className="absolute bottom-0 h-0.5 w-full bg-[linear-gradient(180deg,_rgba(236,157,188,1)_0%,_rgba(147,131,185,1)_48%,_rgba(126,202,240,1)_100%)]"></div>
        </header>
  );
};

export default Header;
