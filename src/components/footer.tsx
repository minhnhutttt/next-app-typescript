"use client";

const Footer = () => {
  return (
    <footer className="bg-black px-5 pt-20 md:pt-[100px] pb-5 relative z-50">
      <div className="max-w-[900px] w-full md:pl-[13px] md:pr-[40px] gap-16 md:gap-20 px-3 mx-auto text-white flex max-md:flex-col max-md:justify-center justify-between items-center mb-10 md:mb-[50px] max-md:text-center">
      <a
        href="/"
        className="block"
      >
        <img src="/assets/images/logo.svg" alt="" />
      </a>
      <div className="flex items-center justify-end max-md:flex-col">
      <ul className="flex items-center max-md:flex-col text-[18px] gap-10 md:mr-10 max-md:mb-10">
          <li>
            <a
              href="/"
              className=""
            >
              ISSUES
            </a>
          </li>
          <li>
            <a
              href="/"
              className=""
            >
              IPDC SOLUTION
            </a>
          </li>
          <li>
            <a
              href="/"
              className=""
            >
              TOKENOMICS
            </a>
          </li>
          <li>
            <a
              href="/"
              className=""
            >
              ROADMAP
            </a>
          </li>
        </ul>
        <a href="" className="flex items-center justify-center text-[18px] u-text-gradient bg-[linear-gradient(90deg,_#4AC7FA_0%,_#E649F5_100%)]">WHITEPAPER</a>
        </div>
      </div>
      <p className="md:text-[14px] text-[12px] text-white font-notoSerif text-center font-light">
      Copyright © 2024 IPDC.
      </p>
    </footer>
  );
};

export default Footer;
