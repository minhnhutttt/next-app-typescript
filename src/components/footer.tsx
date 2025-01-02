"use client";

const Footer = () => {
  return (
    <footer className="bg-[#020C1A] md:pt-[144px] pt-24 pb-6">
      <div className="flex justify-center items-center gap-20 md:mb-[120px] mb-20">
        <a href="/" className="">
          <img className="max-md:w-[160px]" src="/assets/images/logo.svg" alt="" />
        </a>
        <div className="flex justify-center">
        <a href="/" className="md:text-[18px] text-[15px] text-[#fff] tracking-widest">WHITEPAPER</a>
      </div>
      </div>
      
      <p className="md:text-[13px] text-[12px] text-center">
      Copyright © 2025 EXO DAO.
      </p>
    </footer>
  );
};

export default Footer;
