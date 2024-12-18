
const Footer = () => {
    return (
      <footer className="relative px-5 md:px-9 bg-[#060607] md:pt-[90px] pt-[60px] pb-5 border-t border-[#CE0016] text-white">
          <div className="flex items-center max-w-[1000px] mx-auto w-full md:gap-[220px] gap-12 md:mb-11 mb-7">
            <a href="/" className="flex duration-150 hover:opacity-70"><img className="max-md:w-[200px]" src="/assets/images/footer-logo.svg" alt="" /></a>
            <ul className="md:text-[20px] text-[16px] text-wrap list-disc">
              <li>
                <a href="/" className="duration-150 hover:opacity-70">Whitepaper</a>
              </li>
            </ul>
          </div>
          <p className="text-right text-[13px] text-white">Copyright © 2024 RIDE Coin.</p>
      </footer>
    );
  };
  
  export default Footer;
  