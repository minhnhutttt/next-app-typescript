"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Fv = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-10 md:h-[944px] bg-[url(/assets/images/fv-bg.jpg)] bg-cover text-white"
    >
      <div className="px-10">
        <h1 className="md:text-[90px] font-bold leading-[1.2]">
          <span className="md:text-[120px]">次</span>の
          <span className="md:text-[120px]">一手</span>を
          <span className="md:text-[160px]">即答。</span>
          <br />
          <span className="md:text-[120px]">未来</span>に
          <span className="md:text-[160px]">愛</span>を
          <span className="md:text-[120px]">灯</span>す
        </h1>
        <div className="px-[100px] md:mt-[86px]">
          <div className="w-[480px]">
            <div className="flex items-center justify-center gap-5">
              <span>
                <img src="/assets/images/logo-02.svg" alt="" />
              </span>
              <span className="md:text-[20px]">
                経営人格をAIに継承！
                <br />
                次世代経営助言サービス
              </span>
            </div>
            <div className="mt-10">
              <a
                href="/"
                className="flex items-center justify-center relative w-[440px] h-[110px] before:bg-black text-white text-[36px] gap-2 before:absolute before:-skew-x-[20deg] before:w-full before:h-full before:border before:border-white"
              >
                <div className="flex justify-center items-center relative gap-2.5">
                <span>診断を受ける</span>
                <img src="/assets/images/arrow.svg" alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0">
        <img src="/assets/images/fv-img.png" alt="" />
      </div>
    </section>
  );
};

export default Fv;
