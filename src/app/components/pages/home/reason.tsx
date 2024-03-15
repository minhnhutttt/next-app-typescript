"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useTextAnimation from "@/app/hooks/useTextAnimation";
import useTextFolding from "@/app/hooks/useTextFolding";
gsap.registerPlugin(ScrollTrigger);

export default function Reason() {
  const animateRefs = useScrollAnimation("fadeUp");
  const textFoldingnRef = useTextFolding();


  return (
    <section className="relative px-4 md:mb-[71px] mb-9">
      <div className="w-full max-w-[1200px] mx-auto bg-[#F7F3F3] md:rounded-[50px] rounded-[32px] md:pt-[60px] md:pb-[96px] pb-12 pt-8">
        <h5
          ref={animateRefs}
          className="opacity-0 text-center font-medium md:text-[48px] text-[28px]"
        >
          証明書のデジタル化が <br />
          進まない意外な理由
        </h5>
        <div className="mt-[72px] px-5 md:space-y-[120px] space-y-[60px]">
          <div ref={animateRefs} className="opacity-0 relative">
            <div className="w-full min-[1440px]:max-w-[670px] md:max-w-[46.528vw] mx-auto rounded-[30px] overflow-hidden bg-white">
              <p className="text-block group flex flex-wrap items-center justify-center text-center md:text-[20px] text-[14px] font-bold py-2 px-6 min-h-[63px] bg-[#FF9B9B]">
                理由その１ :
                <span ref={textFoldingnRef} className="relative overflow-hidden">
                デジタル化ってなんか難しそうだから
                </span>
              </p>
              <div className="px-4 md:px-[34px]">
                <div className="w-full max-w-[582px] ml-auto py-5 md:py-7">
                  <div className="flex justify-center gap-3 font-bold md:text-[18px] text-[14px] border-b border-[#FF9B9B] pb-3">
                    <img src="/images/ic-1.svg" alt="" />
                    <span>ココがポイント!</span>
                  </div>
                  <p className="md:text-[18px] text-[14px] font-medium pt-3 px-1">
                    証明書のデジタル化に取り組むために少し調べると、公開鍵がどうとか秘密鍵がどうとか認証局がどうとか...普段聞きなれない言葉のオンパレード。とてもじゃないけど運用のイメージが持てないんです。
                    <br />
                    これが多くの組織でデジタル化が進まない原因です。
                  </p>
                </div>
              </div>
              <div className="max-md:flex max-md:justify-between max-md:items-end max-md:px-4 gap-4 max-md:max-w-[440px] max-md:mx-auto">
                <div className="md:absolute min-[1440px]:right-[calc(50%+264px)] right-[calc(50%+18.333vw)] -bottom-4 flex items-start max-md:w-[40%]">
                  <img
                    className="animate-[bounce_1s_0.3s_ease_infinite_alternate] w-[70%]"
                    src="/images/penguin-03-text.png"
                    alt="ええ〜っ！？"
                  />
                  <img
                    className="mt-6 md:mt-11 w-[34.76%]"
                    src="/images/penguin-03.png"
                    alt="ええ〜っ！？"
                  />
                </div>
                <div className="md:absolute min-[1440px]:left-[calc(50%+280px)] left-[calc(50%+19.444vw)] -top-2 flex items-start max-md:w-[60%]">
                  <img
                    className="mt-5 md:mt-10 w-[27.3%]"
                    src="/images/penguin-02.png"
                    alt="日本語でも外国語みたいに感じることあるもんね"
                  />
                  <img
                    className="md:-ml-1 animate-[bounce_1s_ease_infinite_alternate] w-[75.42%]"
                    src="/images/penguin-02-text.png"
                    alt="日本語でも外国語みたいに感じることあるもんね"
                  />
                </div>
              </div>
            </div>
          </div>
          <div ref={animateRefs} className="opacity-0 relative">
            <div className="w-full min-[1440px]:max-w-[670px] md:max-w-[46.528vw] mx-auto rounded-[30px] overflow-hidden bg-white">
              <p className="text-block group flex-wrap flex items-center justify-center text-center md:text-[20px] text-[14px] font-bold py-2 px-6 min-h-[63px] bg-[#FF9B9B]">
                理由その２ :
                <span ref={textFoldingnRef} className="relative overflow-hidden">
                    一人または自分たちだけでなんとかしようとするから...
                </span>
              </p>
              <div className="px-4 md:px-[34px]">
                <div className="w-full max-w-[582px] ml-auto py-5 md:py-7">
                  <div className="flex justify-center gap-3 font-bold md:text-[18px] text-[14px] border-b border-[#FF9B9B] pb-3">
                    <img src="/images/ic-1.svg" alt="" />
                    <span>ココがポイント!!</span>
                  </div>
                  <p className="md:text-[16px] text-[14px] font-medium pt-3 px-1">
                    デジタル化といっても、発行から導入、運用のオペレーションまで、考えることは山積みです。普段の業務もやりながら、ゼロから考えデジタル化。
                    <br />
                    果たして実現できますか？正直言って、難しいでしょう。
                  </p>
                </div>
              </div>
              <div className="max-md:flex max-md:justify-between max-md:items-end max-md:px-4 gap-4 max-md:max-w-[440px] max-md:mx-auto">
                <figure className="md:absolute min-[1440px]:right-[calc(50%+264px)] right-[calc(50%+18.333vw)] -bottom-16 flex items-start">
                  <img
                    className="animate-[bounce_1s_0.5s_ease_infinite_alternate] w-[70%]"
                    src="/images/penguin-05-text.png"
                    alt="今日も残業...?"
                  />
                  <img
                    className="mt-6 md:mt-11 w-[34.76%]"
                    src="/images/penguin-05.png"
                    alt="今日も残業...?"
                  />
                </figure>
                <div className="md:absolute z-10 min-[1440px]:left-[calc(50%+280px)] left-[calc(50%+19.444vw)] -top-5 flex items-start">
                  <img
                    className="mt-8 md:mt-16 w-[27.3%]"
                    src="/images/penguin-04.png"
                    alt="わかる〜！なんか妙な責任感が出てくるんだよねえ..."
                  />
                  <img
                    className="animate-[bounce_1s_0.7s_ease_infinite_alternate] w-[75.42%]"
                    src="/images/penguin-04-text.png"
                    alt="わかる〜！なんか妙な責任感が出てくるんだよねえ..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
