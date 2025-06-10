"use client";

import Button from "./Button";

const Header = () => {
  return (
    <header className="flex justify-between items-center md:h-[100px] h-20 px-5 md:px-10 z-[99] bg-black">
      <a href="/" className="block">
        <img
          className=" max-md:hidden"
          src="/assets/images/logo.svg"
          alt=""
        />
        <img
          className="max-md:w-[100px] md:hidden"
          src="/assets/images/logo3.svg"
          alt=""
        />
      </a>
      <div className="">
        <Button size="sm" />
      </div>
    </header>
  );
};

export default Header;
