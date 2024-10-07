
const Footer = () => {
    return (
      <footer className="relative px-5 md:px-10 bg-[#00053A] md:py-5 py-8 z-10">
          <div className="flex items-center justify-between w-full max-md:flex-col max-w-[1150px] mx-auto pt-6 max-md:pb-10">
            <a href="/" className="flex max-md:ml-[-45px]"><img className="max-md:w-[240px]" src="/assets/images/logo-footer.svg" alt="" /></a>
            <div className="flex md:flex-col items-end gap-5 tracking-widest lg:pr-[76px]">
              <a href="/" className="block text-[16px] font-medium">WHITEPEPAR</a>
              <a href="/" className="block text-[16px] font-medium">CONTACT</a>
              <a href="/" className=""><img src="/assets/images/ic-knock.svg" alt="" /></a>
            </div>
          </div>
          <p className="text-center text-[12px] font-medium">© Copyright 2024 DIVER.</p>
      </footer>
    );
  };
  
  export default Footer;
  