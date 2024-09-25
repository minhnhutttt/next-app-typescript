import { title } from "process";
import { ReactNode } from "react";

type ArticlePropsType = {
    title: ReactNode;
    text: ReactNode;
    children: ReactNode;
  };
export default function Article({title, text, children}: ArticlePropsType) {
  return (
    <div className="w-full md:w-[44.167vw] dt:w-[636px]">
    <h4 className="mb-[-2.5vw] dt:-mb-[30px] mx-auto relative pt-[0.417vw] dt:pt-1.5 font-bold flex justify-center text-[4vw] md:text-[1.736vw] dt:text-[25px] w-[80vw] md:w-[40.069vw] dt:w-[577px] text-white aspect-[577/69] bg-[url('/assets/images/title.png')] bg-cover">{title}</h4>
    <div className="bg-white border border-[#59A435] md:rounded-[43px] rounded-[22px] pt-[8vw] md:pt-[4.167vw] dt:pt-[60px] px-[2.778vw] dt:px-10 pb-[5vw] md:pb-[2.778vw] dt:pb-10 dt:min-h-[295px] text-[3.2vw] md:text-[1.389vw] dt:text-[20px]">
        <p className="font-extrabold">
        {text}
        </p>
        <p className="mt-3 md:mt-6">
        {children}
        </p>
    </div>
</div>
  );
}
