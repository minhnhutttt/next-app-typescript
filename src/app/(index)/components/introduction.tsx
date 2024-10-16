"use client";
import Button from "@/components/button";
import UnderlineText from "@/components/underlineText";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Introduction = () => {
  const ref = useScrollAnimations();
  
  return (
    <section
      ref={ref}
      className="relative pl-5 z-20 bg-[linear-gradient(180deg,_rgba(239,222,233,1)_0%,_rgba(249,237,242,1)_35%,_rgba(253,244,245,1)_68%,_rgba(255,215,207,1)_100%)]"
    >
          <span className="absolute w-full h-full top-[-50%] left-0 bg-[url('/assets/images/bg-02.png')] bg-left-top bg-no-repeat z-10 pointer-events-none"></span>

      <div className="bg-white rounded-l-[45px] pb-14 md:pb-[155px] relative z-20">
      <div className="w-full max-w-[1000px] mx-auto">
          <div className="md:pt-[50px] pt-10 max-md:px-5">
            <div className="max-md:px-5 max-xl:px-10">
              <h3 className="fade-up md:text-[42px] text-[22px] font-black leading-[1.3] relative tracking-[-0.018em]">
                  <span className="absolute md:left-[-40px] left-[-28px] top-1 md:top-2.5"><img className="max-md:w-6" src="/assets/images/ic-title.svg" alt="" /></span>LP訪問者の99％はコンバージョンせずに<UnderlineText>離脱します。</UnderlineText></h3>
              <p className="fade-up text-[16px] md:text-[23px] font-bold mt-2">嘘だと思ったあなた。すでに騙されています。確認推奨。</p>
              </div>
              <div className="md:mt-10 mt-7 space-y-12">
                <div className="fade-up flex max-md:flex-col-reverse justify-center max-md:items-center md:justify-end gap-6 md:gap-10 lg:gap-[100px]">
                  <div className="flex-1 md:pt-5 max-w-[447px]">
                    <p className="md:text-[25px] text-[17px] font-bold leading-[1.3] mb-4 md:mb-7">クリック数vs<UnderlineText>実際の売上。</UnderlineText></p>
                    <p className="md:text-[19px] text-[15px] font-medium leading-[1.55]">広告代理店や広告担当者の成果報告は、クリック数やコンバージョン数ばかりに終始します。でも、あなたにとって重要なことの99%は、実際に売上があがったかどうかだけです。</p>
                  </div>
                  <div className="">
                    <img src="/assets/images/introduction-img-01.png" alt="" />
                  </div>
                </div>
                <div className="fade-up flex max-md:flex-col-reverse flex-row-reverse justify-center max-md:items-center md:justify-end items-center gap-6 md:gap-10">
                  <div className="flex-1 max-w-[447px]">
                    <p className="md:text-[25px] text-[17px] font-bold leading-[1.3] mb-4 md:mb-7"><UnderlineText>嘘の成果</UnderlineText>に騙されないでください。</p>
                    <p className="md:text-[19px] text-[15px] font-medium leading-[1.55]">あなたが成果として報告されてきたものは成果ではありません。本当の成果とは実際に売上があがったかどうかで判断するのが正解です。</p>
                  </div>
                  <div className="">
                    <img src="/assets/images/introduction-img-02.png" alt="" />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
