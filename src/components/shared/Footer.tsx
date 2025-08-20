import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="px-5">
      <div className="mx-auto flex w-full max-w-[1200px] items-center gap-10 py-15 max-md:flex-col md:py-25 xl:gap-22">
        <div className="flex">
          <Link href="/">
            <img className="max-md:w-[180px]" src="/assets/images/logo-footer.svg" alt="" />
          </Link>
        </div>
        <div className="flex flex-wrap gap-1 gap-y-10">
          <div className="px-6">
            <p className="border-l-2 border-[#2500C8] pl-3.5 text-[13px] uppercase md:text-[16px]">
              Company
            </p>
            <ul className="mt-3 text-[12px] leading-[2.5] text-[#848895] md:mt-5 md:text-[15px]">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/">Our Mission</Link>
              </li>
              <li>
                <Link href="/">Leadership</Link>
              </li>
            </ul>
          </div>
          <div className="px-6">
            <p className="border-l-2 border-[#00B70C] pl-3.5 text-[13px] uppercase md:text-[16px]">
              Group Companies
            </p>
            <ul className="mt-3 text-[12px] leading-[2.5] text-[#848895] md:mt-5 md:text-[15px]">
              <li>
                <Link href="/">AIS Japan</Link>
              </li>
              <li>
                <Link href="/">SEIKAI Product</Link>
              </li>
            </ul>
          </div>
          <div className="px-6">
            <p className="border-l-2 border-[#FF884B] pl-3.5 text-[13px] uppercase md:text-[16px]">
              Business Strategy
            </p>
            <ul className="mt-3 text-[12px] leading-[2.5] text-[#848895] md:mt-5 md:text-[15px]">
              <li>
                <Link href="/">Innovation Focus</Link>
              </li>
              <li>
                <Link href="/">Global Expansion</Link>
              </li>
            </ul>
          </div>
          <div className="px-6">
            <p className="border-l-2 border-[#EF38BE] pl-3.5 text-[13px] uppercase md:text-[16px]">
              Legal
            </p>
            <ul className="mt-3 text-[12px] leading-[2.5] text-[#848895] md:mt-5 md:text-[15px]">
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/">Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div className="px-6">
            <p className="border-l-2 border-[#F3FF4B] pl-3.5 text-[13px] uppercase md:text-[16px]">
              Contact
            </p>
            <ul className="mt-3 text-[12px] leading-[2.5] text-[#848895] md:mt-5 md:text-[15px]">
              <li>
                <Link href="/">Headquarters</Link>
              </li>
              <li>
                <Link href="/">Inquiries</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="p-5 text-center text-[13px] text-[#848895]">© 2025 AIS Holdings Group Inc.</p>
    </footer>
  );
};

export default Footer;
