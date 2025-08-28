const Footer = () => {
  return (
    <footer className="border-t border-[#00B70C]/[0.2] px-5">
      <div className="mx-auto flex w-full max-w-[1200px] gap-10 py-15 max-md:flex-col max-md:items-center md:py-25 xl:gap-22">
        <div className="flex">
          <a href="/">
            <img className="max-md:w-[180px]" src="/assets/images/logo-footer.svg" alt="" />
          </a>
        </div>
        <div className="flex flex-wrap gap-1 gap-y-10">
          <div className="px-6">
            <a
              href="/about"
              className="border-l-2 border-[#2500C8] pl-3.5 text-[13px] uppercase md:text-[16px]"
            >
              Company
            </a>
            <ul className="mt-3 text-[12px] leading-[2.5] text-[#848895] md:mt-5 md:text-[15px]">
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/about/#our-purpose-and-principles">Our Mission</a>
              </li>
              <li>
                <a href="/about/#leadership">Leadership</a>
              </li>
            </ul>
          </div>
          <div className="px-6">
            <a
              href="/group"
              className="border-l-2 border-[#00B70C] pl-3.5 text-[13px] uppercase md:text-[16px]"
            >
              Group Companies
            </a>
            <ul className="mt-3 text-[12px] leading-[2.5] text-[#848895] md:mt-5 md:text-[15px]">
              <li>
                <a href="/group/#ais-japan">AIS Japan</a>
              </li>
              <li>
                <a href="/group/#seikai">SEIKAI Product</a>
              </li>
            </ul>
          </div>
          <div className="px-6">
            <a
              href="/business"
              className="border-l-2 border-[#FF884B] pl-3.5 text-[13px] uppercase md:text-[16px]"
            >
              Business Strategy
            </a>
            <ul className="mt-3 text-[12px] leading-[2.5] text-[#848895] md:mt-5 md:text-[15px]">
              <li>
                <a href="/business/#marketing-technology-innovation">
                  Marketing Technology Innovation
                </a>
              </li>
              <li>
                <a href="/business/#ai-powered-automation">AI-Powered Automation</a>
              </li>
              <li>
                <a href="/business/#strategic-global-expansion">Global Expansion</a>
              </li>
              <li>
                <a href="/business/#investment-philosophy">Investment Philosophy</a>
              </li>
            </ul>
          </div>
          <div className="px-6">
            <p className="border-l-2 border-[#EF38BE] pl-3.5 text-[13px] uppercase md:text-[16px]">
              Legal
            </p>
            <ul className="mt-3 text-[12px] leading-[2.5] text-[#848895] md:mt-5 md:text-[15px]">
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="px-6">
            <a
              href="mailto:info@ais-holdings-group.ai"
              className="border-l-2 border-[#F3FF4B] pl-3.5 text-[13px] uppercase md:text-[16px]"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <p className="p-5 text-center text-[13px] text-[#848895]">© 2025 AIS Holdings Group Inc.</p>
    </footer>
  );
};

export default Footer;
