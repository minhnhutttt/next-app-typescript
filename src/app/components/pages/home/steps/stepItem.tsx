import { ReactNode } from "react";

export type StepItemPropsType = {
  step: string;
  title: string;
  content: ReactNode;
};

export default function StepItem({ step, title, content }: StepItemPropsType) {
  return (
    <div className="flex gap-6 lg:gap-11 max-md:flex-col">
      <div className="lg:flex-[0_0_277px] md:flex-[0_0_200px] max-md:mx-10 h-10 md:h-[50px] flex items-center justify-center bg-[#6898CC] text-white lg:text-[32px] md:text-[24px] text-[18px] relative after:absolute after:w-[17px] after:aspect-[17/20] after:bg-[url('/images/step-arrow.png')] after:bg-cover md:after:left-[calc(100%-3px)] after:left-1/2 max-md:after:top-[calc(100%-5px)] max-md:after:rotate-90 max-md:after:-translate-x-1/2">
        STEP {step}
      </div>
      <div className="flex gap-3 md:gap-4">
        <figure className="md:mt-4 mt-2">
          <img
            className="max-md:w-[64px] max-lg:w-[100px]"
            src="/images/step-line.png"
            alt=""
          />
        </figure>
        <div className="flex-1 max-md:mr-10">
          <h6 className="lg:text-[40px] md:text-[30px] text-[18px] font-bold text-[#112E77]">
            {title}
          </h6>
          <p className="text-[#502416] lg:text-[32px] md:text-[24px] text-[15px] font-inter max-md:-ml-8 max-md:mt-2">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
