"use client";

import { ReactNode } from "react";

const data = [
    {
        id: '1',
        title: '基本情報',
        text: (<>氏名、生年月日、国籍、現住所</>)
    },
    {
        id: '2',
        title: '学歴',
        text: (<>出身校、学位、専攻、卒業年月<br className="max-md:hidden" />学歴の真偽検証結果</>)
    },
    {
        id: '3',
        title: '職歴',
        text: (<>企業名、職種、雇用期間、役職<br className="max-md:hidden" />職歴の真偽検証結果</>)
    },
]


const Case = () => {
  return (
    <section className="md:mt-[200px]">
        <div className="flex justify-center">
            <div className="flex justify-center items-center relative flex-col">
                <span className="md:absolute left-[-24.512vw] lg:left-[-256px] max-md:w-full md:top-[-60px] max-md:ml-[-20vw]">
                    <img className="max-md:w-[40vw] max-lg:w-[24.512vw]" src="/assets/images/case-bubble.png" alt="導入の決め手は何？Research Shield+AIの特徴をご紹介" />
                </span>
                <h3 className="lg:text-[48px] md:text-[3vw] text-[6vw] font-black tracking-[0.2em] px-5 max-md:pt-2">導入事例</h3>
            </div>
            </div>
    </section>
  );
};

export default Case;
