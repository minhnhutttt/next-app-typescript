"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Fv = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden  bg-[url(/assets/images/fv-bg.jpg)] bg-cover text-white"
    >
      <div className="px-7 xl:px-10 w-full max-w-[1440px] mx-auto pt-[12vw] md:pt-[125px] pb-[5vw] md:pb-[130px] relative z-10">
        <h1 className="zoom-out text-[7vw] xl:text-[90px] md:text-[50px] font-bold leading-[1.2] tracking-wider max-md:text-center">
          <span className="md:text-[80px] text-[9vw] xl:text-[120px]">次</span>の
          <span className="md:text-[80px] text-[9vw] xl:text-[120px]">一手</span>を
          <span className="md:text-[110px] text-[12vw] xl:text-[160px]">即答。</span>
          <br />
          <span className="md:text-[80px] text-[9vw] xl:text-[120px]">未来</span>に
          <span className="md:text-[110px] text-[12vw] xl:text-[160px]">愛</span>を
          <span className="md:text-[80px] text-[9vw] xl:text-[120px]">灯</span>す
        </h1>
        <div className="zoom-out xl:px-[100px] px-5 md:px-[50px] md:mt-[86px] mt-[10vw]">
          <div className="md:w-[480px]">
            <div className="flex items-center justify-center gap-5">
              <span>
                <img src="/assets/images/logo-02.svg" alt="" />
              </span>
              <span className="text-[4vw] md:text-[20px]">
                経営人格をAIに継承！
                <br />
                次世代経営助言サービス
              </span>
            </div>
            <div className="mt-[10vw] md:mt-10 max-md:flex max-md:justify-center">
              <a
                href="/"
                className="flex items-center justify-center relative w-[80vw] md:w-[440px] h-[16vw] md:h-[110px] before:bg-black font-semibold text-white text-[6vw] md:text-[36px] gap-2 before:absolute before:-skew-x-[20deg] before:w-full before:h-full before:border before:border-white after:absolute after:top-px after:left-px after:h-[calc(100%-2px)] after:bg-[#003B08] after:w-0 after:z-0 hover:after:w-[calc(100%-2px)] after:transition-[width] after:duration-200 after:-skew-x-[20deg]"
              >
                <div className="flex justify-center items-center relative gap-2.5 z-10">
                  <span>診断を受ける</span>
                  <img src="/assets/images/arrow.svg" alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="fade-left md:absolute flex justify-end items-end max-md:w-full right-0 bottom-0 max-xl:w-[600px] max-lg:w-[500px]">
        <img src="/assets/images/fv-img.png" alt="" />
      </div>
    </section>
  );
};

export default Fv;
