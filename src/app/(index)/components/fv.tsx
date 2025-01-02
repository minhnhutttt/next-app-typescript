"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Fv = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative md:h-[800px]"
    >
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center opacity-70 mix-blend-overlay"
        >
          <source src="/assets/videos/fv.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="bg-[url(/assets/images/fv-bg.png)] bg-[size:100%_auto] bg-top h-full relative px-5 max-md:pb-20">
        <div className="w-full max-w-[1300px] mx-auto md:pt-[240px] pt-[120px]">
          <h1 className="fade-up text-white md:text-[44px] text-[32px] xl:text-[64px] font-medium text-center">Exosome - Nature's Cellular Messenger</h1>
          <p className="fade-up text-white text-center md:text-[36px] text-[24px] xl:text-[40px] md:pt-7 pt-5 md:pb-7 pb-5">Guided by Cells, Upgrading Modern Medicine</p>
          <div className="fade-up w-full max-w-[836px] mx-auto bg-white/20 rounded-[10px] border border-white xl:px-[50px] md:px-7 px-5 md:py-[40px] py-7 md:text-[18px] text-[15px] leading-loose text-white">
            EXO DAO is a decentralized autonomous organization accelerating the research, development, and commercialization of exosome technology. Through the issuance of EXO Coin, we provide an opportunity to participate in this innovative project that opens new frontiers in next-generation medicine.
          </div>
        </div>
        <div className="flex justify-center -bottom-16 md:bottom-[-100px] absolute inset-x-0">
          <a href="/" className="fade-up md:size-[169px] size-[120px] rounded-full border border-white flex items-center justify-center bg-[url(/assets/images/btn-bg.png)] bg-cover bg-center text-white text-[12px]">
          WHITEPAPER
        </a>
      </div>
      </div>
      
    </section>
  );
};

export default Fv;
