"use client";

const Footer = () => {
  return (
    <footer className="px-5 md:pt-[120px] pt-20 pb-5">
      <div className="w-full max-w-[715px] mx-auto flex items-center justify-between md:pb-[104px] pb-16 gap-8 md:gap-9 max-md:flex-col">
        <div className="flex justify-center items-center">
          <a href="/" className="block hover:opacity-75 duration-150 transition-opacity">
            <img
              className="max-md:w-[160px]"
              src="/assets/images/logo3.svg"
              alt=""
            />
          </a>
        </div>
        <span><img className="max-md:w-[200px]" src="/assets/images/line.png" alt="" /></span>
        <ul className="flex flex-col items-center justify-center md:text-[20px] text-[14px] font-light gap-[30px] text-center text-white">
          <li>
            <a href="/privacy" className="hover:opacity-75 duration-150 transition-opacity">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms" className="hover:opacity-75 duration-150 transition-opacity">利用規約</a>
          </li>
          <li>
            <a href="https://lin.ee/sQ5Hh6G" target="_blank" className="hover:opacity-75 duration-150 transition-opacity">お問い合わせ </a>
          </li>
        </ul>
      </div>

      <p className="md:text-[14px] text-[12px] font-light text-white text-center">
        ©2025  THE LETTER
      </p>
    </footer>
  );
};

export default Footer;
