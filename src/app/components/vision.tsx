"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Vision = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="md:-mt-[72px] -mt-4 ">
      <div className="absolute flex justify-center items-center left-1/2 -translate-x-1/2 z-10 md:pt-16 pt-4">
        <div className="flex flex-col justify-center md:gap-[50px] gap-6 relative">
          <div className="ani-scale bottom-[-4.444vw] dt:bottom-[-64px] md:left-[-7.292vw] left-[-5.292vw] dt:-left-[105px] absolute bg-[url('/assets/images/bg-our-vision.png')] aspect-[610/345] bg-cover w-[54vw] md:w-[42.361vw] dt:w-[610px]"></div>
          <div className="relative flex flex-col items-center justify-center pt-2 w-[64px] gap-[49px]">
            <p className="md:text-[18px] text-[13px] text-white font-bold text-center tracking-widest">
              OUR <br />
              VISION
            </p>
            <div className="h-10 md:h-[84px] w-px overflow-hidden mx-auto absolute md:top-[calc(100%+49px)] top-[calc(100%+20px)]">
              <span className="w-full h-full block bg-[linear-gradient(to_bottom,_black_50%,_rgba(255,_255,_255,_0)_50%)] md:bg-[0_-84px] bg-[0_-40px] [background-size:100%_200%] md:animate-[scrolldown_2.2s_cubic-bezier(0.76,_0,_0.3,_1)_forwards_infinite] animate-[scrolldownSP_2.2s_cubic-bezier(0.76,_0,_0.3,_1)_forwards_infinite]"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="md:bg-[url('/assets/images/bg-main.png')] bg-[url('/assets/images/bg-main-sp.png')] w-full lg:aspect-[1336/892] min-h-[550px] bg-cover bg-no-repeat">
          <div className="flex md:items-center max-md:justify-center h-full max-md:pt-[160px]">
            <div className="max-md:hidden w-1/2"></div>
            <div className="fade-up md:w-1/2 lg:pl-14 pl-5 md:pl-20 pr-5">
              <div className="font-serif font-medium text-center">
                <h2 className="lg:text-[25px] text-[15px]">
                  世界に向けて、唯一無二の銘酒を作ります
                </h2>
                <p className="md:text-[18px] text-[13px]">
                  Inebriate the World with Japan&apos;s Best Sake Yet Unseen
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex-[0_0_105px] flex-[0_0_40px] bg-white flex justify-center items-start pt-[124px]">
          <img
            className="fade-up max-md:w-3 max-lg:w-3.5"
            src="/assets/images/text-seke.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Vision;
