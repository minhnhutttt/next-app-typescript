import Link from 'next/link';
import { ButtonOfficial } from '../ui/Button';

const Footer = () => {
  return (
    <footer className="border-t border-[#01FFAA] px-5">
      <div className="mx-auto flex w-full max-w-[1012px] py-20 md:py-[147px]">
        <div className="flex items-center justify-center">
          <Link href="/">
            <img className="max-md:w-[280px]" src="/assets/images/logo.svg" alt="" />
          </Link>
        </div>
        <div className="">
          <ButtonOfficial />
        </div>
      </div>
      <p className="p-5 text-center text-[13px] md:text-[16px]">Copyright ©</p>
    </footer>
  );
};

export default Footer;
