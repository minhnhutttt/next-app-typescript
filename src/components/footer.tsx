"use client";

const Footer = () => {
  return (
    <footer className="bg-[#080A1A] md:pt-[90px] pt-20 pb-6">
      <div className="flex max-md:flex-col justify-center items-center md:pb-10 pb-7 md:gap-[55px] gap-10 md:mb-12 mb-8">
        <a href="/" className="">
          <img
            className="max-md:w-[200px]"
            src="/assets/images/logo.svg"
            alt=""
          />
        </a>
        <div className="flex justify-center">
          <ul className="text-white md:text-[16px] text-[14px] font-medium md:pr-9">
            <li>
              <a href="/#features" className="block px-6 py-[5px]">
                Features
              </a>
            </li>
            <li>
              <a href="/#how-to-use" className="block px-6 py-[5px]">
                How to use
              </a>
            </li>
            <li>
              <a href="/#faq" className="block px-6 py-[5px]">
                FAQ
              </a>
            </li>
            <li>
              <a href="mailto:info@teleport-exchange.io" className="block px-6 py-[5px]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="">
          <a
            href="https://teleport-exchange.io/"
            target="_blank"
            className="w-[240px] md:h-[55px] h-12 rounded-[10px] flex justify-center items-center font-extrabold text-[20px] text-white tracking-[0.2em] bg-[linear-gradient(90deg,_#19539D_0.02%,_#627EEA_99.97%)]"
          >
            EXCHANGE
          </a>
        </div>
      </div>

      <p className="md:text-[16px] text-[12px] text-white text-center">
        Copyright © 2025 TELEPORT EXCHANGE
      </p>
    </footer>
  );
};

export default Footer;
