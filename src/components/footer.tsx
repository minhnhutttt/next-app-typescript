"use client";

const Footer = () => {
  return (
    <footer className="bg-[url(/assets/images/footer-bg.png)] bg-cover border-t border-[#F34927] md:pt-[132px] pt-[80px] pb-5 px-5">
      <div className="w-full max-w-[936px] mx-auto">
        <div className="flex justify-center">
          <a href="/" className=""><img src="/assets/images/logo-footer.svg" alt="" /></a>        
        </div>
        <div className="grid md:grid-cols-3 md:text-[20px] text-[18px] font-light md:mt-[60px] mt-10 md:divide-x divide-[#111111] md:pb-[185px] pb-[100px]">
          <a href="/" className="flex items-center justify-center text-center h-10 px-4">Privacy Policy</a>
          <a href="/" className="flex items-center justify-center text-center h-10 px-4">Terms of Use</a>
          <a href="/" className="flex items-center justify-center text-center h-10 px-4">Contact</a>
        </div>
      </div>
      <p className="text-center md:text-[14px] text-[12px] font-light">© 2025  A-Nexus</p>
    </footer>
    
  );
};

export default Footer;
