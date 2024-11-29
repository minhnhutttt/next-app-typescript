
const Footer = () => {
    return (
      <footer className="relative px-5 md:px-10 bg-[url('/assets/images/footer-bg.png')] md:pt-[72px] pt-16 pb-5">
          <div className="flex items-center justify-center w-full md:mb-[54px] mb-10">
            <a href="/" className="flex duration-300 hover:opacity-70"><img className="max-md:w-[160px]" src="/assets/images/footer-logo.svg" alt="" /></a>
          </div>
          <p className="text-center text-[14px] text-white font-medium">Copyright © BGT Coin</p>
      </footer>
    );
  };
  
  export default Footer;
  