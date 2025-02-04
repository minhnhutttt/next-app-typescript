"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Mission = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
    >
        <div className="text-center px-5 pt-[72px] flex flex-col items-center justify-center w-full max-w-[940px] mx-auto">
            <p className="md:text-[30px] text-[20px]">ROGYXのMission</p>
            <p className="md:text-[50px] text-[32px] leading-[1.4] mt-5 max-w-[857px]">
            Webデザインとシステム開発を通じて
            より便利で豊かな未来を創る。
            </p>
            <p className="md:text-[20px] text-[16px] font-inter mt-6 leading-[1.2]">
            私たちの仕事は、美しいデザインや便利なシステムを作るだけでなく、<br className="max-md:hidden" />
それを通じて暮らしとビジネスをより良い未来へ導くことにあります。<br className="max-md:hidden" />
個々のスキルとアイデアを結集し、一人ひとりが社会に新たな価値を生み出す喜びを得られる場所<br className="max-md:hidden" />
――それがROGYXです。
            </p>
        </div>
    </section>
  );
};

export default Mission;
