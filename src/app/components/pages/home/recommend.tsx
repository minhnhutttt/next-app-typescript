"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
export default function Recommend() {
  const animateRefs = useScrollAnimation("zoom");
  return (
    <section className="mt-16 md:mt-[80px] px-5 bg-[url('/images/bg-recommend.png')] bg-cover">
        <div className="w-full max-w-[1320px] mx-auto pt-7 md:pt-10 md:pb-[117px] px-14">
            <div ref={animateRefs} className="opacity-0 flex justify-center items-center relative z-10">
                <h3 className="tracking-[0.25em] text-center">
                    <div className="md:-mb-[0.694vw] min-[1440px]:mb-[-10px]">
                        <img className="min-[1440px]:w-auto md:w-[29.167vw] w-[40vw] ml-auto" src="/images/title-sub-recommend.png" alt="一度使うとやめられない" />
                    </div>
                    <span className="text-[7vw] min-[1440px]:text-[80px] font-black leading-none px-5 md:px-[11.806vw] min-[1440px]:px-[170px] whitespace-nowrap">オススメの使い方！</span>
                </h3>
            </div>
            <div ref={animateRefs} className="opacity-0 w-full md:max-w-[1050px] max-w-[440px] mx-auto flex items-center justify-between gap-8 md:gap-5 relative mt-16 md:mt-24 max-md:flex-col">
                <figure>
                    <img className="max-md:w-[76vw] max-md:max-w-[400px]" src="/images/img-recommend.png" alt="" />
                </figure>
                <div className=" max-w-[380px]">
                    <h5 className="md:text-[42px] text-[24px] font-bold mb-3 md:mb-10">私物品にピタッ！</h5>
                    <p className="md:text-[18px] text-[14px]">
                    大切な私物を落としてしまった時も、スマートに所有物の証明をすることができます。
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}
