"use client";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-[#EC9DBC]">
          <div className="flex items-center justify-between gap-4 px-5 py-5">
            <a href="/">
              <img
                src="/assets/images/logo.png"
                alt=""
              />
            </a>
            <div>
              <img
                src="/assets/images/sign.png"
                alt=""
              />
            </div>
          </div>
        </header>
  );
};

export default Header;
