"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Fv = () => {
  const ref = useScrollAnimations();

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="flex justify-end">
        <div className="w-[80%] h-[76.923vw] md:h-[455px] relative">
          <div data-scroll="out" className="ani-slide-right overflow-hidden rounded-bl-[110px] border-b border-l border-black/30 h-full pl-2 pb-2">
            <img
              className="w-full h-full object-cover rounded-bl-[105px]"
              src="/assets/images/fv.png"
              alt=""
            />
          </div>
          <h1 data-scroll="out" className="ani-slide-top absolute md:-bottom-4 -bottom-1 md:-left-10 -left-14">
            <img
              className="max-md:w-[83.333vw]"
              src="/assets/images/we-are-rogyx.svg"
              alt="WE ARE ROGYX"
            />
          </h1>
        </div>
      </div>
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex gap-10 md:mt-10 mt-6">
          <div data-scroll className="ani-zoom-out flex items-center justify-center flex-1 max-md:hidden">
            <img src="/assets/images/join.svg" alt="" />
          </div>
          <div className="relative flex-1 flex justify-between pr-4 md:pr-[50px] max-md:pl-[10vw]">
          <div data-scroll className="ani-zoom-out absolute bottom-3 right-1 pointer-events-none flex items-center justify-center flex-1 md:hidden">
            <img className="w-[59vw]" src="/assets/images/join.svg" alt="" />
          </div>
            <div className="flex">
              <p data-scroll className="ani-slide-right [writing-mode:vertical-rl] [text-orientation:upright] text-[4.1vw] md:text-[22px] md:leading-[1.85] md:pt-10 pt-8">
                私たちの仕事は
                <br />
                美しいデザインや <br />
                便利なシステムを通じて <br />
                暮らしとビジネスを <br className="max-md:hidden" />
                より良い未来へ導くことです
                <br />
                個々のスキルとアイデアを結集し
                <br />
                一人ひとりが社会に新たな価値を生み出す場所
                <br />
                それがROGYXです
                <br />
              </p>
              <p data-scroll className="ani-slide-right [writing-mode:vertical-rl] [text-orientation:upright] text-[4.5vw] md:text-[30px] font-bold md:ml-12 ml-[10vw]">
                Webデザインと <br />
                システム開発を通じて <br />
                より便利で豊かな未来を創る。
              </p>
            </div>
            <div data-scroll className="ani-slide-top flex flex-col items-center flex-[0_0_17px] ml-5">
              <p className="mb-4">
                <img className="max-md:w-[13px]" src="/assets/images/scroll.svg" alt="" />
              </p>
              <div id="scroll-down" className="block relative pt-20">
                <span className="arrow-down block mx-auto w-2.5">
                  <span className="absolute top-0 left-2/4 -ml-px w-[2px] h-[92px] md:h-[200px] bg-black/20"></span>
                  <span className="animate-[elasticus_2s_cubic-bezier(1,_0,_0,_1)_infinite] absolute top-0 left-2/4 -ml-px w-[2px] h-[92px] md:h-[200px] bg-[#FF3030]"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fv;
