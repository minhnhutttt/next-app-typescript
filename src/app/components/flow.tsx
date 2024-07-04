"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { ReactNode } from "react";

const dataRegistration = [
    {
        number: '1',
        image: '/assets/images/img-registration-01.png',
        text: 'チャットボットよりお問い合わせください。'
    },
    {
        number: '2',
        image: '/assets/images/img-registration-02.png',
        text: 'DIVER Walletの準備をお願いします。(スマートフォンまたはパソコン)'
    },
    {
        number: '3',
        image: '/assets/images/img-registration-03.png',
        text: 'Agent登録が完了しましたらDIVER Walletの対応アプリからDIVER Agentへログインしてください。'
    },
    {
        number: '4',
        image: '/assets/images/img-registration-04.png',
        text: 'ご購入数に応じてまとめてご請求させていただきます。お支払いは15日締め月末払いとなっております。'
    },
]

const dataSales = [
    {
        number: '1',
        image: '/assets/images/img-sale-01.png',
        text: '販売して費用を受け取る'
    },
    {
        number: '2',
        image: '/assets/images/img-sale-02.png',
        text: 'DIVER Walletをインストールしてもらう'
    },
    {
        number: '3',
        image: '/assets/images/img-sale-03.png',
        text: '各種サービスに沿ったフローで商品を提供する'
    },
]

export type FlowPropsType = {
    number: string
    image: string;
    sales?: boolean;
    text: ReactNode;
  };

  const Article = ({number, image, sales, text} : FlowPropsType) => {
    return (
        <div className={`fade-up relative w-[280px] md:min-h-[403px] min-h-[330px] rounded-[20px] bg-white [filter:drop-shadow(4px_4px_30px_rgba(0,_78,_143,_0.20))] border-[5px] px-6 pb-7 ${sales ? 'border-[#E6022E]' : 'border-[#0055A3]'}`}>
            <div className="flex justify-center -mt-9">
                <div className={`md:w-[76px] w-[60px] md:h-[76px] h-[60px] rounded-full flex items-center justify-center bg-white border-[4px] ${sales ? 'border-[#E6022E]' : 'border-[#0055A3]'}`}>
                    <img src={`/assets/images/flow-`+ number + '.svg'} />
                </div>
            </div>
            <figure className="flex justify-center items-center md:mt-5 mt-4">
                <img className="max-md:w-[140px]" src={image} alt="" />
            </figure>
            <p className="mt-7 md:mt-[43px] text-[18px]">{text}</p>
        </div>
    )
  }


const Flow = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative md:space-y-[193px] space-y-[100px]">
       <div className="relative">
        <div className="bg-[#18539E] absolute h-[90%] md:h-[531px] inset-x-0 md:rounded-t-[70px] rounded-t-[40px]"></div>
        <div className="relative md:pt-[120px] pt-[70px] px-5">
            <div className="fade-up text-center tracking-widest text-white">
                <p className="md:text-[24px] text-[18px] font-inter">Registration Flow</p>
                <h3 className="font-medium md:text-[56px] text-[32px] tracking-[0.1em]">エージェント登録フロー</h3>
            </div>
            <div className="flex flex-wrap justify-center md:gap-[60px] gap-12 md:mt-[140px] mt-20">
                {dataRegistration.map(({number, image, text})=>(
                    <Article number={number} image={image} text={text} key={number} />
                ))}
            </div>
        </div>
       </div>
       <div className="relative">
        <div className="bg-[#E6022E] absolute h-[90%] md:h-[531px] inset-x-0 md:rounded-t-[70px] rounded-t-[40px]"></div>
        <div className="relative md:pt-[120px] pt-[70px] px-5">
            <div className="fade-up text-center tracking-widest text-white">
                <p className="md:text-[24px] text-[18px] font-inter">Sales Flow</p>
                <h3 className="font-medium md:text-[56px] text-[32px] tracking-[0.1em]">販売フロー</h3>
            </div>
            <div className="flex flex-wrap justify-center md:gap-[60px] gap-12 md:mt-[140px] mt-20">
                {dataSales.map(({number, image, text})=>(
                    <Article sales number={number} image={image} text={text} key={number} />
                ))}
            </div>
        </div>
       </div>
    </section>
  );
};

export default Flow;
