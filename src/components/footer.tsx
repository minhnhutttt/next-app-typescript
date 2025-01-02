"use client";

const Footer = () => {
  return (
    <footer className="bg-[#F2F2F2] md:pt-[124px] pt-20 pb-6">
      <div className="flex justify-center md:pb-10 pb-7">
        <a href="/" className="">
          <img className="max-md:w-[200px]" src="/assets/images/logo-footer.svg" alt="" />
        </a>
      </div>
      <div className="flex justify-center md:mb-20 mb-14">
        <a href="/" className="md:text-[18px] text-[15px] text-[#212121] tracking-widest">WHITEPAPER</a>
      </div>
      <p className="md:text-[13px] text-[12px] text-center">
      Copyright © 2025 AIAD Coin.
      </p>
    </footer>
  );
};

export default Footer;
