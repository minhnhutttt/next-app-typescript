"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";

type StepPropsType = {
    step: number;
};

export default function ContactHead({step}: StepPropsType) {
  const animateRefs = useScrollAnimation("zoom");
  return (
    <div className="md:mt-[170px] mt-[120px] px-5 md:mb-[96px] mb-[60px]">
        <div className="w-full md:max-w-[1106px] max-w-[480px] mx-auto">
            <h3 ref={animateRefs} className="opacity-0 text-center md:text-[42px] text-[24px] font-bold">次世代名刺作成フォーム</h3>
            <div ref={animateRefs} className="opacity-0 md:mt-[70px] mt-10 px-5">
                <div className="w-full max-w-[1080px] mx-auto flex max-md:flex-col justify-center">
                    <div className={`text-center md:flex-[0_0_26.389vw] min-[1440px]:flex-[0_0_380px] md:h-[100px] max-md:bg-bottom max-md:p-8 md:px-5 bg-[length:100%_100%] flex flex-col items-center justify-center relative z-30 ${step === 1 ? "md:bg-[url('/images/step-01-active.png')] bg-[url('/images/step-01-active-sp.png')] text-white" : "max-md:bg-[#F5F5F5] md:bg-[url('/images/step-01.png')] text-[#999]"}`}>
                        <p className="md:text-[22px] text-[16px] font-bold max-md:mt-2">STEP 1</p>
                        <p className="md:text-[14px] text-[12px]">プラン選択</p>
                    </div>
                    <div className={`text-center md:flex-[0_0_26.389vw] min-[1440px]:flex-[0_0_380px] md:h-[100px] max-md:bg-bottom max-md:p-8 md:px-5 bg-[length:100%_100%] flex flex-col items-center justify-center relative max-md:mt-[-20px] md:ml-[-1.875vw] min-[1440px]:ml-[-27px]z-20 ${step === 2 ? "md:bg-[url('/images/step-02-active.png')] bg-[url('/images/step-02-active-sp.png')] text-white z-50" : "max-md:bg-[#F5F5F5] md:bg-[url('/images/step-02.png')] text-[#999]"}`}>
                        <p className="md:text-[22px] text-[16px] font-bold max-md:mt-2">STEP 2</p>
                        <p className="md:text-[14px] text-[12px]">メディアと名刺受取りアドレスのご提出</p>
                    </div>
                    <div className={`text-center md:flex-[0_0_26.389vw] min-[1440px]:flex-[0_0_380px] md:h-[100px] max-md:bg-top max-md:p-8 md:px-5 bg-[length:100%_100%] flex flex-col items-center justify-center relative max-md:mt-[-20px] md:ml-[-1.875vw] min-[1440px]:ml-[-27px] ${step === 3 ? "md:bg-[url('/images/step-03-active.png')] bg-[url('/images/step-03-active-sp.png')] text-white z-40" : "max-md:bg-[#F5F5F5] md:bg-[url('/images/step-03.png')] text-[#999] z-10"}`}>
                        <p className="md:text-[22px] text-[16px] font-bold max-md:mt-2">STEP 3</p>
                        <p className="md:text-[14px] text-[12px]">名刺情報の入力</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
