"use client";

const Header = () => {

  return (
    <header className="absolute left-[3.333vw] dt:left-12 top-6 z-10">
        <a href="/" className="block relative duration-150 hover:opacity-75">
          <img className="max-md:w-[160px] max-dt:w-[23.75vw]" src="/assets/images/logo.svg" alt="" />
        </a>
    </header>
  );
};

export default Header;
