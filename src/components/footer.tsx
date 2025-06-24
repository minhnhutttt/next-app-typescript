"use client";

const Footer = () => {
  return (
    <footer className="border-t border-white pb-5">
      <div className="flex justify-center items-center py-20">
        <a href="/" className="block hover:opacity-75 duration-150 transition-opacity">
          <img
            className="max-md:w-[160px]"
            src="/assets/images/logo.svg"
            alt=""
          />
        </a>
      </div>

      <ul className="flex flex-col items-center justify-center md:text-[16px] text-[14px] font-bold gap-[30px] pb-16 md:pb-[116px]">
        <li>
          <a href="/terms" className="hover:opacity-75 duration-150 transition-opacity">利用規約</a>
        </li>
        <li>
          <a href="/privacy" className="hover:opacity-75 duration-150 transition-opacity">プライバシーポリシー</a>
        </li>
      </ul>

      <p className="md:text-[16px] text-[12px] text-white text-center">
        Copyright 2025 KEI-AI
      </p>
    </footer>
  );
};

export default Footer;
