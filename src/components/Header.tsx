"use client";


const Header = () => {
  return (
    <header className="fixed top-0 inset-x-0 flex items-center justify-between z-30 p-5 md:p-10">
      <a href="/" className="max-md:max-w-[140px]"><img src="/assets/images/logo.svg" alt="" /></a>
      <div className="">
        <a href="" className="aspect-[193/58] flex items-center justify-center w-[144px] md:w-[193px] bg-[url(/assets/images/btn_bg.png)] bg-cover font-tomorrow md:text-[16px] text-[13px] font-bold tracking-[0.15em]">
        WHITEPAPER
        </a>
      </div>
    </header>
  );
};

export default Header;
