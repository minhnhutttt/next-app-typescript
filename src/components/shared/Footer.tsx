import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="px-5">
      <div className="mx-auto w-full max-w-[1260px]">
        <div className="flex items-center justify-center py-20 md:py-[147px]">
          <Link href="/">
            <img className="max-md:w-[280px]" src="/assets/images/logo.svg" alt="" />
          </Link>
        </div>
      </div>
      <p className="p-5 text-center text-[13px] md:text-[16px]">Copyright ©</p>
    </footer>
  );
};

export default Footer;
