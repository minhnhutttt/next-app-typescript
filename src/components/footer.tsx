
const Footer = () => {
    return (
      <footer className="relative px-5 md:px-10 bg-[#101010] md:pt-[34px] pt-7 z-10 pb-2.5">
          <div className="flex items-center justify-between w-full max-md:flex-col max-w-[1020px] mx-auto max-md:pb-10 mb-2.5">
            <a href="/" className="flex"><img className="max-md:w-[200px]" src="/assets/images/logo-footer.svg" alt="" /></a>
            <div className="flex items-end tracking-widest max-md:mt-10">
              <a href="/" className="block text-[18px] font-medium text-white">WHITEPAPER</a>
            </div>
          </div>
          <p className="text-center text-[14px] text-white font-medium">© 2024 CIP DAO</p>
      </footer>
    );
  };
  
  export default Footer;
  