"use client";
import Button from "@/components/button";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Introduction = () => {
  const ref = useScrollAnimations();
  
  return (
    <section
      ref={ref}
      className="relative px-5"
    >
      <div className="w-full max-w-[1000px] mx-auto mt-10 lg:-mt-[70px]">
        <div className="flex justify-center">
            <Button href="/">
                SEIKAI広告を今すぐ試す
            </Button>
        </div>
        <div className="md:mt-[70px] mt-10">
          <div className="max-lg:px-5">
            <h3 className="flex md:text-[42px] text-[24px] font-black leading-[1.3] relative tracking-[-0.018em]">
                <span className="absolute md:left-[-40px] left-[-28px] top-1 md:top-2.5"><img className="max-md:w-6" src="/assets/images/ic-title.svg" alt="" /></span>LP訪問者の99％はコンバージョンせずに離脱します。</h3>
            <p className="text-[16px] md:text-[23px] font-bold mt-2">嘘だと思ったあなた。すでに騙されています。確認推奨。</p>
            </div>
            <div className="md:mt-10 mt-7 space-y-12">
              <div className="flex max-md:flex-col-reverse justify-center max-md:items-center md:justify-end gap-6 md:gap-10 lg:gap-[100px]">
                <div className="flex-1 md:pt-5 max-w-[447px]">
                  <p className="md:text-[25px] text-[17px] font-bold leading-[1.3] mb-4 md:mb-7">クリック数vs実際の売上。</p>
                  <p className="md:text-[19px] text-[15px] font-medium leading-[1.55]">広告代理店や広告担当者の成果報告は、クリック数やコンバージョン数ばかりに終始します。でも、あなたにとって重要なことの99%は、実際に売上があがったかどうかだけです。</p>
                </div>
                <div className="">
                  <img src="/assets/images/introduction-img-01.png" alt="" />
                </div>
              </div>
              <div className="flex max-md:flex-col-reverse flex-row-reverse justify-center max-md:items-center md:justify-end items-center gap-6 md:gap-10">
                <div className="flex-1 max-w-[447px]">
                  <p className="md:text-[25px] text-[17px] font-bold leading-[1.3] mb-4 md:mb-7">嘘の成果に騙されないでください。</p>
                  <p className="md:text-[19px] text-[15px] font-medium leading-[1.55]">あなたが成果として報告されてきたものは成果ではありません。本当の成果とは実際に売上があがったかどうかで判断するのが正解です。%は、実際に売上があがったかどうかだけです。</p>
                </div>
                <div className="">
                  <img src="/assets/images/introduction-img-02.png" alt="" />
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
