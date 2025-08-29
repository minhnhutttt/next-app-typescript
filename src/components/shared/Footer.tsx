import Link from 'next/link';
import { ButtonOfficial } from '../ui/Button';

const Footer = () => {
  return (
    <footer className="border-t border-[#01FFAA] px-5">
      <div className="mx-auto flex w-full max-w-[1012px] justify-center gap-10 py-20 max-lg:flex-col max-lg:items-center md:gap-20 md:py-[160px] lg:gap-[120px]">
        <div className="flex flex-1 justify-end">
          <Link href="/">
            <img className="max-md:w-[240px]" src="/assets/images/logo.svg" alt="" />
          </Link>
        </div>
        <div className="flex-1">
          <div className="max-lg:flex max-lg:justify-center">
            <ButtonOfficial />
          </div>
          <ul className="mt-5 flex flex-wrap gap-10 text-[16px] tracking-widest max-md:justify-center md:gap-15">
            <li>
              <a href="/">運営会社</a>
            </li>
            <li>
              <a href="/terms-of-service">運営会社</a>
            </li>
            <li>
              <a href="/privacy-policy">プライバシーポリシー</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="p-5 text-center text-[13px]">Copyright © 2025 COIN TOGETHER.</p>
    </footer>
  );
};

export default Footer;
