"use client"

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(90deg,_#00F4AE_0%,_#0C408C_100%)]">
       <div className="w-full max-w-[1440px] mx-auto md:px-[60px] px-5 flex justify-center items-center gap-5 md:gap-[60px] h-10 md:h-11">
        <p className="w-[220px] md:w-[409px] text-center text-[10px] md:text-[12px] text-white">© 2024 EXO Coin Project. All Rights Reserved.</p>
        <a href="/privacy-policy" className="block md:text-[14px] text-[12px] text-[#00F4AE]">Privacy Policy</a>
       </div>
    </footer>
  );
};

export default Footer;
