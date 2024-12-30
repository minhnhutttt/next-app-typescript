"use client";

import useScrollAnimations from "@/app/hooks/useScrollAnimations";

const Introduction = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative overflow-hidden md:pt-[70px] pt-[50px] px-5">
        <h3 className="text-center">
            <span className="gradient-background relative bg-[linear-gradient(to_top,_#FCF15D_20%,_transparent_20%)] bg-[size:0_100%] bg-no-repeat md:text-[24px] text-[18px] font-medium">
            ただ<span className="font-bold">"<span className="md:text-[32px] text-[24px]">見る</span>"</span>から、<span className="font-bold">"<span className="md:text-[32px] text-[24px]">所有する</span>"</span>へ
            </span>
        </h3>
        <p className="text-center md:text-[18px] text-[15px] font-medium md:mt-7 mt-5">SNSを価値ある資産のプラットフォームへ進化させる</p>
        <div className="md:mt-[52px] mt-10">
            <div className="flex">
                <span className="h-px bg-[#21012D] w-3/5"></span>
            </div>
            <div className="flex">
                <figure className="pt-[60px]">
                    <img className="border border-[#21012D] rounded-[30px]" src="/assets/images/intro-img-01.png" alt="" />
                </figure>
                <div className="[writing-mode:vertical-rl] md:text-[18px] text-[15px] font-medium leading-[1.3] flex items-center flex-1 tracking-[0.2em]">
                    <div className="">
                    <p className="">あるクリエイタ|が</p>
                    <p className="">丹精込めて生み出した作品は</p>
                    <p className="">SNS上でただ流れていくだけだった</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Introduction;
