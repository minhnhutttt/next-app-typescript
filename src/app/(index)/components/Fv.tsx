"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Fv = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative bg-[url(/assets/images/bg-fv.png)] bg-bottom overflow-hidden sm:pb-[140px] pb-20"
    >
      <div className="fade-up flex justify-center items-center pt-[130px] px-5">
        <h1>
          <img src="/assets/images/fv-text.svg" alt="" />
        </h1>
      </div>

      <div className="flex items-center justify-center -mt-6 relative">
        <p className="fade-up-200">
          <img src="/assets/images/fv-people-01.png" alt="" />
        </p>
        <div className="fade-up-400 max-md:w-[25vw] absolute left-0 md:bottom-[-75px] -bottom-10 z-10">
          <img src="/assets/images/fv-people-02.png" alt="" />
        </div>
        <div className="fade-up-600 max-md:w-[30vw] absolute right-[-20px] -bottom-9 md:bottom-[-70px] z-10">
          <img src="/assets/images/fv-people-03.png" alt="" />
        </div>
      </div>

      <div className="flex items-center justify-center -mt-[37vw] md:-mt-[240px] relative">
        <div className="relative">
          <p className="[filter:drop-shadow(0_4px_50px_rgba(74,_0,_39,_0.20))]">
            <img src="/assets/images/frame.png" alt="" />
          </p>
          <div className="fv-text-01 absolute inset-0 leading-[1.3] flex items-center justify-center flex-col text-center pt-5">
            <p className="md:text-[46px] text-[32px] font-bold mb-2.5">FAVERとファン</p>
            <p className="md:text-[46px] text-[32px] font-bold mb-2.5">が共創する</p>
            <p className="md:text-[58px] text-[36px] font-bold mb-3">新時代の</p>
            <p className="md:text-[58px] text-[36px] font-bold mb-3">エコシステム</p>
            <p className="md:text-[68px] text-[40px] font-black u-text-gradient">FAVE コイン</p>
          </div>
          <div className="fv-text-02 absolute inset-0 leading-[1.3] flex items-center justify-center flex-col text-center pt-5">
            <p className="md:text-[42px] text-[28px] font-bold mb-2.5">ファンの投げ銭が</p>
            <p className="md:text-[52px] text-[32px] font-bold mb-2.5">FAVERのVIP</p>
            <p className="md:text-[42px] text-[36px] font-bold mb-3">新時代の</p>
            <p className="md:text-[36px] text-[36px] font-bold mb-3">ファンに推されて<br />実現する</p>
            <p className="md:text-[68px] text-[40px] font-black u-text-gradient">新  体  験</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fv;
