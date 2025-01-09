"use client";

const Footer = () => {
  return (
    <footer className="bg-[#1B1B2E] md:pt-[105px] pt-20 pb-6 px-5">
      <div className=" =w-full max-w-[780px] mx-auto pb-5">
        <div className="flex items-center md:pb-10 pb-7 max-md:flex-col max-md:gap-12">
          <a href="/" className="flex-1 hover:opacity-75 duration-150">
            <img
              className="max-md:w-[90px]"
              src="/assets/images/logo-footer.svg"
              alt=""
            />
          </a>
          <div className="flex justify-center">
            <a
              href="/"
              className="md:text-[18px] text-[15px] text-white tracking-widest hover:opacity-75 duration-150"
            >
              WHITEPAPER
            </a>
          </div>
          <div className="flex-1 max-md:hidden"></div>
        </div>
      </div>
      
      <p className="md:text-[13px] text-[12px] text-center text-white tracking-widest">
          Copyright © 2025 BYT Coin.
        </p>
    </footer>
  );
};

export default Footer;
