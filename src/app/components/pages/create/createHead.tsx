"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";

type StepPropsType = {
  step: number;
};

export default function CreateHead({ step }: StepPropsType) {
  const animateRefs = useScrollAnimation("zoom");
  return (
    <div className="md:mt-[170px] mt-[120px] px-5 md:mb-[96px] mb-[60px]">
      <div className="w-full md:max-w-[1106px] max-w-[480px] mx-auto">
        <h3
          ref={animateRefs}
          className="opacity-0 text-center md:text-[42px] text-[24px] font-bold"
        >
          次世代名刺作成フォーム
        </h3>
        <div ref={animateRefs} className="opacity-0 md:mt-[70px] mt-10">
          <div className="w-full max-w-[1100px] mx-auto flex flex-wrap max-md:flex-col justify-center overflow-hidden">
            <div
              className={`h-[80px] md:h-[100px] relative w-full md:w-[33%] text-center flex flex-col items-center justify-center px-10 py-[13px] bg-[#F5F5F5] text-[#999999] after:absolute md:after:top-0 md:after:bottom-0 after:top-full md:after:left-full after:left-1/2 max-md:after:-translate-x-1/2 after:z-[2] md:after:border-[60px] after:border-[10px]  after:border-solid after:border-transparent max-md:after:border-t-[10px] md:after:border-l-[30px] max-md:after:border-t-transparent md:after:border-l-[#F5F5F5] after:m-auto max-md:before:hidden before:absolute md:before:top-0 md:before:bottom-0 before:top-full md:before:left-full before:left-1/2 max-md:before:-translate-x-1/2 before:content-[''] before:border-[60px] before:border-solid before:border-transparent md:before:border-l-[30px] max-md:before:border-t-[30px] before:z-[2] before:m-auto md:before:ml-0.5 max-md:before:mt-0.5 md:before:border-l-white max-md:before:border-t-white [&.active]:bg-[#22ABF3] [&.active]:text-white max-md:[&.active]:after:border-t-[#22ABF3] md:[&.active]:after:border-l-[#22ABF3] [&.active]:before:border-t-0 md:[&.active]:before:border-l-0 ${step === 1 && "active"}`}
            >
              <p className="md:text-[22px] text-[16px] font-bold">STEP 1</p>
              <p className="md:text-[14px] text-[12px]">プラン選択</p>
            </div>
            <div
              className={`h-[80px] md:h-[100px] relative w-full md:w-[33%] text-center flex flex-col items-center justify-center px-10 py-[13px] bg-[#F5F5F5] text-[#999999] after:absolute md:after:top-0 md:after:bottom-0 after:top-full md:after:left-full after:left-1/2 max-md:after:-translate-x-1/2 after:z-[2] md:after:border-[60px] after:border-[10px]  after:border-solid after:border-transparent max-md:after:border-t-[10px] md:after:border-l-[30px] max-md:after:border-t-transparent md:after:border-l-[#F5F5F5] after:m-auto max-md:before:hidden before:absolute md:before:top-0 md:before:bottom-0 before:top-full md:before:left-full before:left-1/2 max-md:before:-translate-x-1/2 before:content-[''] before:border-[60px] before:border-solid before:border-transparent md:before:border-l-[30px] max-md:before:border-t-[30px] before:z-[2] before:m-auto md:before:ml-0.5 max-md:before:mt-0.5 md:before:border-l-white max-md:before:border-t-white [&.active]:bg-[#22ABF3] [&.active]:text-white max-md:[&.active]:after:border-t-[#22ABF3] md:[&.active]:after:border-l-[#22ABF3] [&.active]:before:border-t-0 md:[&.active]:before:border-l-0 ${step === 2 && "active"}`}
            >
              <p className="md:text-[22px] text-[16px] font-bold">STEP 2</p>
              <p className="md:text-[14px] text-[12px]">
                メディアと名刺受取りアドレスのご提出
              </p>
            </div>
            <div
              className={`h-[80px] md:h-[100px] relative w-full md:w-[33%] text-center flex flex-col items-center justify-center px-10 py-[13px] bg-[#F5F5F5] text-[#999999] [&.active]:bg-[#22ABF3] [&.active]:text-white ${step === 3 && "active"}`}
            >
              <p className="md:text-[22px] text-[16px] font-bold">STEP 3</p>
              <p className="md:text-[14px] text-[12px]">名刺情報の入力</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
