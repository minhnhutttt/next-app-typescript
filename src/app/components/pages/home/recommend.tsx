"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
export default function Recommend() {
  const animateRefs = useScrollAnimation("zoom");
  return (
    <section className="mt-16 md:mt-[120px] px-5">
        <div className="w-full max-w-[1320px] mx-auto">
            <div ref={animateRefs} className="opacity-0 flex justify-center items-center relative z-10">
                <h3 className="tracking-[0.25em] text-center">
                    <div className="-mb-[1.944vw] min-[1440px]:mb-[-28px]">
                        <img className="min-[1440px]:w-auto md:w-[26.25vw] w-[55vw] ml-auto" src="/images/title-sub-recommend.png" alt="一度使うとやめられない" />
                    </div>
                    <span className="text-[7vw] min-[1440px]:text-[80px] font-black leading-none md:px-[9.722vw] min-[1440px]:px-[140px] whitespace-nowrap">オススメの使い方！</span>
                </h3>
            </div>
            <div ref={animateRefs} className="opacity-0 w-full max-w-[1180px] mx-auto md:mt-[-20px] relative">
                
            </div>
        </div>
    </section>
  );
}
