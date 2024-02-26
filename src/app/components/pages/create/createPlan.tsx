"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import FormRadio from "../../form/formRadio";
import { useState } from "react";

export interface HandleStepProps {
  handleStep: () => void;
}
export default function Createlan({ handleStep }: HandleStepProps) {
  const animateRefs = useScrollAnimation("zoom");
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <div className="px-5 md:mb-[100px] mb-12 font-noto">
      <div
        ref={animateRefs}
        className="opacity-0 w-full max-w-[1080px] mx-auto"
      >
        <div className="bg-white md:pt-[60px] md:pb-[72px] pt-[30px] pb-10">
          <p className="text-center md:text-[28px] text-[18px] font-bold">
            プラン選択
          </p>
          <div className="flex justify-center md:pt-[72px] pt-10 w-full max-w-[240px] md:max-w-[540px] mx-auto md:pb-[72px] mb-8">
            <FormRadio
              options={[
                { label: "500枚無料プレゼント", value: "500枚無料プレゼント" },
              ]}
              checkedValue={"500枚無料プレゼント"}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleStep}
              className="bg-[#000748] border-[3px] border-white rounded-[44px] font-bold md:px-16 leading-none px-10 md:py-4 py-3 flex items-center justify-center gap-1.5 md:gap-2.5 text-white md:text-[20px] text-[16px]"
            >
              <span>STEP2へ進む</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M4.79995 14.9998C4.79995 9.3598 9.35995 4.7998 15 4.7998C20.64 4.7998 25.2 9.3598 25.2 14.9998C25.2 20.6398 20.64 25.1998 15 25.1998C9.35995 25.1998 4.79995 20.6398 4.79995 14.9998ZM24 14.9998C24 10.0198 19.98 5.9998 15 5.9998C10.02 5.9998 5.99995 10.0198 5.99995 14.9998C5.99995 19.9798 10.02 23.9998 15 23.9998C19.98 23.9998 24 19.9798 24 14.9998Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M13.9799 19.9802L18.9599 15.0002L13.9799 10.0202L14.8199 9.18018L20.6399 15.0002L14.8199 20.8202L13.9799 19.9802Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M19.8 14.3999L19.8 15.5999L9.60005 15.5999L9.60005 14.3999L19.8 14.3999Z"
                  fill="white"
                  stroke="white"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-center md:text-[16px] text-[13px] py-5 md:py-6 leading-loose">
            <p>
              ※以下の方はサポートLINEにお問い合わせ下さい。 <br />
              ☑️次世代名刺のサンプルを見たい方
              <br />
              ☑️500枚を超える枚数が必要な方
              <br />
              ☑️サポートに依頼して名刺を作成したい方
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
