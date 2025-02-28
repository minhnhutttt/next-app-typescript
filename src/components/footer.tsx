"use client";

const Footer = () => {
  return (
    <section
      className="relative font-lalezar overflow-hidden pt-[100px] md:pt-[160px] bg-[url(/assets/images/fv-img.png)] bg-no-repeat bg-bottom bg-cover"
    >
      <div className="absolute top-0 inset-x-0 bg-[linear-gradient(180deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.6951155462184874)_65%,_rgba(255,255,255,0)_100%)] h-[40%]"></div>
        <div className="w-full max-w-[1000px] mx-auto md:pb-[200px] pb-[100px] px-5 max-md:flex flex-col items-center justify-center relative">
        <p className="mb-10"><img className="md:w-[616px]" src="/assets/images/lets-talk.svg" alt="" />
        </p>
        <a href="https://lin.ee/lJWBJmp" target="_blank" className="md:w-[428px] w-[300px] md:h-[110px] h-16 pt-2 font-lalezar md:text-[50px] text-[32px] flex justify-center items-center leading-none bg-[#00B900] rounded-[23px] text-white hover:opacity-75 duration-150">
        <span>LINE<span className="md:text-[40px] text-[24px]">で話す</span></span>
        </a>
     </div>
     <footer className="bg-black/70 md:pt-[136px] pt-20 px-5 pb-5">
      <div className="flex max-md:flex-col justify-center items-center w-full max-w-[1200px] mx-auto mb-20">
         
      </div>

      <p className="md:text-[16px] text-[14px] text-white text-center">Copyright © ROGYX Co., Ltd.All Rights Reserved.</p>
    </footer>
    </section>
    
  );
};

export default Footer;
