"use client";

import { useCallback, useState } from "react";

const Header = () => {
  const [NavOpen, setNavOpen] = useState(false);

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <header className="w-full absolute top-0 left-0">
      <div className="px-[24px] max-md:px-[16px]">
        <div className="h-[120px] max-md:h-[80px] flex justify-between items-center border-b border-solid border-b-black">
          <a
            className="font-anton text-[24px] whitespace-nowrap"
            translate="no"
            href="/"
          >
            TECHNO LLC
          </a>
          <div className="flex justify-center items-center">
            <nav className={`max-lg:absolute max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:h-screen max-lg:bg-[#eee] max-lg:z-50 max-lg:overflow-y-scroll ${NavOpen ? ' max-lg:opacity-100 max-lg:visible' : 'max-lg:opacity-0 max-lg:invisible'}`}>
              <ul className="max-lg:font-anton text-[21px] max-lg:text-[calc(16px_+_6vw)] flex gap-[8px] max-lg:flex-col max-lg:px-[5%] max-lg:pt-[20%] max-lg:pb-[10%]">
                <li className="p-[8px]">
                  <a className="hover-underline" href="/about" onClick={close}>
                    About us
                  </a>
                </li>
                <li className="p-[8px]">
                  <a className="hover-underline" href="/solutions" onClick={close}>
                    Solutions
                  </a>
                </li>
                <li className="p-[8px]">
                  <a href="/" className="hover-underline" onClick={close}>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <button
              type="button"
              className="absolute top-[20px] right-[20px] w-[40px] h-[40px] hidden max-lg:block z-50"
              onClick={() => setNavOpen((prev) => !prev)}
            >
              <div className={`flex justify-center items-center relative before:content-[''] before:absolute before:left-0  before:w-full before:h-0.5 before:bg-black after:content-[''] after:absolute after:left-0  after:w-full after:h-0.5 after:bg-black ${NavOpen ? 'after:rotate-[-20deg] before:rotate-[20deg] before:top-[50%] after:top-[50%] ' : 'before:top-[calc(50%_-_6px)] after:top-[calc(50%_+_6px)]'}`}></div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
