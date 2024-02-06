"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
export default function Experience() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <section className="bg-[url('/images/bg-03.png')] bg-cover bg-center pt-[12vw] md:pt-[150px] md:pb-[100px] pb-[10vw] px-5">
      <div className="w-full md:max-w-[666px] max-w-[500px] mx-auto">
        <div className="flex justify-center">
          <h3 ref={animateRefs} className="opacity-0 md:text-[48px] [font-size:_clamp(24px,6vw,36px)] font-bold leading-tight rotate-[-10deg] tracking-wider">
            <p className="inline-block bg-[linear-gradient(to_top,_#F9E636_40%,_transparent_40%)]">
              こんな経験
            </p>
            <br />
            <p className="inline-block bg-[linear-gradient(to_top,_#F9E636_40%,_transparent_40%)] ml-[10vw] md:ml-[180px]">
              ありませんか？
            </p>
          </h3>
        </div>
        <div className="mt-16 md:mt-[90px] md:space-y-[30px] space-y-5">
          <div ref={animateRefs} className="opacity-0 flex items-center md:text-[24px] [font-size:_clamp(13px,3.2vw,20px)] font-medium gap-2 md:gap-4">
            <span>
              <img className="max-md:w-7" src="/images/ic-check.png" alt="" />
            </span>
            <span className="flex-1">
              クーポンを切り取ったが持ってくるのを忘れた
            </span>
          </div>
          <div ref={animateRefs} className="opacity-0 flex items-center md:text-[24px] [font-size:_clamp(13px,3.2vw,20px)] font-medium gap-2 md:gap-4">
            <span>
              <img className="max-md:w-7" src="/images/ic-check.png" alt="" />
            </span>
            <span className="flex-1">
              クーポンを使いたい時にすぐ取り出せない
            </span>
          </div>
          <div ref={animateRefs} className="opacity-0 flex items-center md:text-[24px] [font-size:_clamp(13px,3.2vw,20px)] font-medium gap-2 md:gap-4">
            <span>
              <img className="max-md:w-7" src="/images/ic-check.png" alt="" />
            </span>
            <span className="flex-1">個人情報を書かないと使えない…</span>
          </div>
          <div ref={animateRefs} className="opacity-0 flex items-center md:text-[24px] [font-size:_clamp(13px,3.2vw,20px)] font-medium gap-2 md:gap-4">
            <span>
              <img className="max-md:w-7" src="/images/ic-check.png" alt="" />
            </span>
            <span className="flex-1">
              クーポンって使うのがなんだかちょっとかっこ悪い…
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
