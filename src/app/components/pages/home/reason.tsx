"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";

export default function Reason() {
  const animateRefs = useScrollAnimation("fadeUp");

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
              <p className="flex items-center justify-center text-center md:text-[20px] text-[14px] font-bold py-2 px-6 min-h-[63px] bg-[#FF9B9B]">
                理由その１ : デジタル化ってなんか難しそうだから...
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
              <div className="max-md:flex max-md:justify-between max-md:items-end max-md:px-4 gap-4">
                <figure className="md:absolute min-[1440px]:right-[calc(50%+264px)] right-[calc(50%+18.333vw)] -bottom-4">
                  <img src="/images/penguin-03.png" alt="ええ〜っ！？" />
                </figure>
                <figure className="md:absolute min-[1440px]:left-[calc(50%+280px)] left-[calc(50%+19.444vw)] -top-2">
                  <img
                    src="/images/penguin-02.png"
                    alt="日本語でも外国語みたいに感じることあるもんね"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div ref={animateRefs} className="opacity-0 relative">
            <div className="w-full min-[1440px]:max-w-[670px] md:max-w-[46.528vw] mx-auto rounded-[30px] overflow-hidden bg-white">
              <p className="flex items-center justify-center text-center md:text-[20px] text-[14px] font-bold py-2 px-6 min-h-[63px] bg-[#FF9B9B]">
                理由その２ : 一人または自分たちだけでなんとかしようとするから...
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
              <div className="max-md:flex max-md:justify-between max-md:items-end max-md:px-4 gap-4">
                <figure className="md:absolute min-[1440px]:right-[calc(50%+264px)] right-[calc(50%+18.333vw)] -bottom-16">
                  <img src="/images/penguin-05.png" alt="今日も残業...?" />
                </figure>
                <figure className="md:absolute min-[1440px]:left-[calc(50%+280px)] left-[calc(50%+19.444vw)] -top-5">
                  <img
                    src="/images/penguin-04.png"
                    alt="わかる〜！なんか妙な責任感が出てくるんだよねえ..."
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
