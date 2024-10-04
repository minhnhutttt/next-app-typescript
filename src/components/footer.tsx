
const Footer = () => {
  return (
    <footer className="relative px-5 md:px-10 bg-[#2379E7] md:py-[114px] py-20">
        <div className="flex items-center justify-between w-full max-w-[1000px] mx-auto md:py-6 max-md:flex-col max-md:gap-10">
          <a href="/" className="flex max-md:-ml-5"><img src="/assets/images/logo.svg" alt="" /></a>
          <p className="flex-1 max-md:order-3 text-center text-[14px] font-medium">© 2024 DwETH</p>
          <div className="flex gap-10">
            <a href="/dashboard" className="block text-[16px] font-medium">DASHBOARD</a>
            <a href="" className="block text-[16px] font-medium">WHITEPEPAR</a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
