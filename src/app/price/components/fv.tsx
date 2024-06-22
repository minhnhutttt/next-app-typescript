"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const FV = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative">
      <div className="bg-[url('/assets/images/price/fv.png')] md:h-[63.889vw] h-[70vw] dt:h-[920px] bg-cover bg-no-repeat bg-center">
        <div className="w-full max-w-[1440px] mx-auto relative">
            <div className="flex absolute left-0 top-0 p-2 md:p-7">
                <h1>
                    <img className="fade-up max-dt:w-[50.139vw]" src="/assets/images/price/fv-text.png" alt="" />
                </h1>
            </div>
            <div className="flex justify-end max-mx:px-5 pr-[3.889vw] dt:pr-14 pt-[1.111vw] dt:pt-4">
                <div className="flex items-end flex-col">
                    <div className="flex flex-col items-center justify-center">
                        <figure>
                            <img className="fade-up max-dt:w-[45.764vw]" src="/assets/images/price/fv-banner-01.png" alt="" />
                        </figure>
                        <figure className="fade-up py-[1.667vw] dt:py-6">
                            <img className="max-dt:w-[6.458vw]" src="/assets/images/price/fv-tri.png" alt="" />
                        </figure>
                    </div>
                    <figure>
                        <img className="fade-up max-dt:w-[57.222vw]" src="/assets/images/price/fv-banner-02.png" alt="" />
                    </figure>
                    <div className="fade-up max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:w-[calc(100vw-20px)] max-md:pl-5 md:mr-[3.889vw] dt:mr-14 md:mt-[1vw] mt-[24vw] dt:mt-6">
                        <div className=" md:w-[39.583vw] dt:w-[570px] ">
                        <p className="dt:text-[18px] md:text-[1.25vw] text-[14px] font-bold text-white text-center mb-1 max-md:text-black">＼多くの方にお問い合わせいただいています／
                        </p>
                        <a href="/" className="flex items-center justify-center w-full md:h-[6.528vw] dt:h-[94px] h-[60px] bg-[#F12929] border-2 border-white rounded-[59px] text-white md:text-[1.736vw] dt:text-[25px] text-[14px] font-bold duration-150 hover:opacity-75">
                            メモリアルモニターの枠を今すぐおさえる
                        </a>
                        <p className="w-full max-w-[320px] md:max-w-[25.417vw] dt:max-w-[366px] ml-auto md:text-[0.833vw] dt:text-[12px] text-[10px] md:mr-5 md:mt-6 mt-2">
                        モニターとして新たな供養体験へのフィードバックやSNS投稿にご協力いただく場合があります。ご協力いただけない方は、エントリープランまたはスタンダードプランをお選びください。
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="absolute bottom-[2.778vw] dt:bottom-10 left-[5.556vw] dt:left-[80px]">
            <img className="fade-up max-dt:w-[54.375vw]" src="/assets/images/price/fv-logo.png" alt="" />
        </div>
    </section>
  );
};

export default FV;
