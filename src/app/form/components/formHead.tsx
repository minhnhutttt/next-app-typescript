"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

type StepPropsType = {
  step: number;
};

export default function FormHead({ step }: StepPropsType) {
  return (
    <div className="md:mt-[200px] mt-[120px] px-5 md:mb-[80px] mb-[60px]">
      <div className="w-full md:max-w-[1106px] max-w-[480px] mx-auto">
        <h3 className="text-center text-white md:text-[42px] text-[24px] font-bold">
          NFT名刺作成フォーム
        </h3>
        <div className="md:mt-[60px] mt-10">
          <div className="w-full max-w-[1080px] mx-auto flex flex-wrap justify-center overflow-hidden">
            <div
              className={`max-md:pl-4 h-[80px] md:h-[100px] relative w-[50%] text-center flex flex-col items-center justify-center md:px-10 px-4 py-[13px] bg-[#F5F5F5] text-[#999999] after:absolute after:top-[0] after:bottom-[0] after:left-full after:z-[2] md:after:border-[60px] after:border-[60px] after:border-solid after:border-transparent md:after:border-l-[30px] after:border-l-[14px] after:border-l-[#F5F5F5] after:m-auto before:absolute before:top-[0] before:bottom-[0] before:left-full before:content-[''] md:before:border-[60px] before:border-[60px] before:border-solid before:border-transparent md:before:border-l-[30px] before:border-l-[14px] before:z-[2] before:m-auto before:ml-0.5 before:border-l-white [&.active]:bg-[#7FFF00] [&.active]:text-black [&.active]:after:border-l-[#7FFF00] [&.active]:before:border-l-0 ${step === 1 && "active"}`}
            >
              <p className="relative max-md:left-2 md:text-[22px] text-[16px] font-bold">
                STEP 1
              </p>
              <p className="relative max-md:left-2 md:text-[14px] text-[10px]">
                メディアと名刺受取りアドレスのご提出
              </p>
            </div>
            <div
              className={`max-md:pl-4 h-[80px] md:h-[100px] relative w-[50%] text-center flex flex-col items-center justify-center md:px-10 px-4 py-[13px] bg-[#F5F5F5] text-[#999999] [&.active]:bg-[#7FFF00] [&.active]:text-black ${step === 2 && "active"}`}
            >
              <p className="md:text-[22px] text-[16px] font-bold">STEP 2</p>
              <p className="md:text-[14px] text-[10px]">名刺情報の入力</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
