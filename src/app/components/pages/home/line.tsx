"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";

export default function Line() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <section className="relative md:bg-[url('/images/bg-line.png')] bg-[url('/images/bg-line-sp.png')] max-md:bg-white bg-bottom bg-[length:100%_100%] bg-no-repeat px-5 flex justify-center pb-6 md:pb-8 pt-20 md:pt-[240px]">
        <div ref={animateRefs} className="opacity-0">
            <p className="md:text-[48px] text-[32px] text-center text-white font-black tracking-widest">LINEで承ります</p>
            <div className="flex justify-center mt-5 md:h-[74px] h-[59px]">
                <a href="/" className="md:w-[340px] md:h-[70px] w-[280px] h-[55px] bg-white flex items-center justify-center rounded-[10px] [box-shadow:0px_5px_0px_0px_rgba(0,_88,_0,_0.70)] md:text-[22px] text-[16px] font-black gap-2 text-[#00B900] hover:mt-1 hover:[box-shadow:0px_1px_0px_0px_rgba(0,_88,_0,_0.70)] duration-300">
                    <img src="/images/ic-line.svg" alt="" />
                    <span>次世代ストレージを使う</span>
                </a>
            </div>
            <p className="text-center font-zen md:text-[14px] text-[12px] text-white mt-2 md:mt-3">※日本円、またはダイバーコインでの決済が可能です。</p>
        </div>
    </section>
  );
}
