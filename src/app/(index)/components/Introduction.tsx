"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Introduction = () => {
  const ref = useScrollAnimations();
  return (
    <section id="introduction" ref={ref} className="relative overflow-hidden md:pt-[70px] pt-[50px] md:pb-[90px] pb-16 px-5 bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.00)_0%,_#80BCD9_100%)]">
        <h3 className="fade-up text-center">
            <span className="gradient-background relative bg-[linear-gradient(to_top,_#FCF15D_20%,_transparent_20%)] bg-[size:0_100%] bg-no-repeat md:text-[24px] text-[18px] font-medium">
            ただ<span className="font-bold">"<span className="md:text-[32px] text-[24px]">見る</span>"</span>から、<span className="font-bold">"<span className="md:text-[32px] text-[24px]">所有する</span>"</span>へ
            </span>
        </h3>
        <p className="fade-up text-center md:text-[18px] text-[15px] font-medium md:mt-7 mt-5">SNSを価値ある資産のプラットフォームへ進化させる</p>
        <div className="md:mt-[52px] mt-10">
            <div className="fade-up flex">
                <span className="h-0.5 bg-[#21012D] w-3/5"></span>
            </div>
            <div className="md:px-5 relative w-full max-md:max-w-[400px] max-md:mx-auto">
                <div className="fade-up absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center z-10">
                    <span className="bg-[#21012D] w-[3px] -rotate-6"></span>
                    <span className="md:text-[48px] text-[32px] font-black [writing-mode:vertical-rl] [text-orientation:upright] tracking-[0.3em]">しかし!</span>
                    <span className="bg-[#21012D] w-[3px] rotate-6"></span>
                </div>
                <div className="fade-up flex gap-5 mb-3">
                    <figure className="pt-[60px] max-md:w-2/3">
                        <img className="border-2 border-[#21012D] rounded-[30px]" src="/assets/images/intro-img-01.png" alt="" />
                    </figure>
                    <div className="[writing-mode:vertical-rl] [text-orientation:upright] md:text-[18px] text-[15px] font-medium leading-[1.3] flex items-center flex-1 tracking-[0.3em]">
                        <div className="">
                            <p>あるクリエイタ|が</p>
                            <p className="mr-5">丹精込めて生み出した作品は</p>
                            <p className="mr-5">SNS上でただ流れていくだけだった</p>
                        </div>
                    </div>
                </div>
                <div className="fade-up flex gap-5 flex-row-reverse">
                    <figure className="pt-[60px] pb-10 max-md:w-2/3">
                        <img className="border-2 border-[#21012D] rounded-[30px]" src="/assets/images/intro-img-02.png" alt="" />
                    </figure>
                    <div className="[writing-mode:vertical-rl] [text-orientation:upright] md:text-[18px] text-[15px] font-medium leading-[1.3] flex items-center flex-1 tracking-[0.3em]">
                        <div className="">
                            <p>OPEN FAVEなら</p>
                            <p className="mr-5">その作品がNFTとなり</p>
                            <p className="mr-5">ファンはそれを所有することができる</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fade-up flex justify-end">
                <span className="h-0.5 bg-[#21012D] w-3/5"></span>
            </div>
        </div>
        <div className="fade-up md:mt-[90px] mt-16">
            <h5 className="text-center md:text-[24px] text-[20px] font-medium">「<span className="font-bold">消費されないSNS</span>」<br className="md:hidden" />それがOPEN FAVE</h5>
            <p className="md:text-[18px] text-[15px] font-medium md:mt-6 mt-4">
            ここでは、あなたの共感や応援が、クリエイターの未来を拓き、あなた自身もその価値の一部を手にする。<br />
            これまでにない、新しいSNS体験が、今あなたの手の中に広がります。
            </p>
        </div>
    </section>
  );
};

export default Introduction;
