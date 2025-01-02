"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Fv = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden md:p-10 p-5 md:pb-[50px] bg-[url(/assets/images/fv-bg.png)] bg-cover bg-center"
    >
      <div className="bg-white/90 md:rounded-[100px] rounded-[60px] md:pt-[100px] pt-16 md:pb-[35px] pb-6 px-5">
        <div className="fade-up flex justify-center items-center relative">
          <div className="">
            <img className="max-md:w-[200px]" src="/assets/images/fv-check.png" alt="" />
          </div>
          <div className="text-center absolute top-0 md:pt-11 pt-6">
            <h1 className="text-[32px] md:text-[64px] xl:text-[84px] leading-[1.3]">
              AIAD Coin <br />
              Unlocking Global Markets.
            </h1>
            <p className="md:text-[20px] text-[16px] xl:text-[24px] md:pt-8 pt-5">
              Welcome to Where Every Advertiser Thrives Without Borders.
            </p>
          </div>
        </div>
        <div className="fade-up flex justify-center mt-12 md:mt-20">
          <a href="/" className="w-[280px] md:w-[320px] h-[58px] md:h-[70px] flex justify-center items-center bg-[linear-gradient(45deg,_rgba(242,12,62,1)_0%,_rgba(255,240,0,1)_100%)] rounded-[10px] p-[3px]">
            <span className="w-full h-full flex items-center justify-center md:text-[22px] text-[17px] font-bold gap-[5px] bg-white rounded-[10px] tracking-widest">
              <img src="/assets/images/ic-download.svg" alt="" />
              <span>WHITEPAPER</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Fv;
