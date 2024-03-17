import { ReactNode } from "react";

type PriceItemPropsType = {
    tag: string;
    gb: string;
    price: ReactNode;
};
function Price({
    tag,
    gb,
    price,
    }: PriceItemPropsType) {
    return (
        <div className="w-[300px] md:w-[26.389vw] min-[1440px]:w-[380px] relative bg-[#FFE870] md:border-[11px] border-[6px] border-[#FDD300] rounded-[30px] py-3 md:py-[1.944vw] px-[0.5vw] min-[1440px]:py-7 min-[1440px]:px-5 [box-shadow:0px_4px_30px_0px_rgba(0,_0,_0,_0.25)]">
            <div className="flex items-center justify-center gap-[0.694vw] min-[1440px]:gap-2.5 font-black leading-none">
                <div className="bg-white font-zen min-[1440px]:text-[20px] md:text-[1.389vw] text-[14px] rounded-[5px] p-2">{tag}</div>
                <div className="center min-[1440px]:text-[32px] md:text-[2.222vw] text-[20px]"><span className="min-[1440px]:text-[52px] md:text-[3.611vw] text-[32px]">{gb}</span>GBプラン</div>
            </div>
            <div className="flex items-center justify-center leading-none max-md:mt-2">
                <div className="relative font-dela">
                    <p className="absolute inset-0 text-center min-[1440px]:text-[62px] md:text-[4.306vw] text-[36px] font-bold  text-white [-webkit-text-stroke:_8px_white]">{price}</p>
                    <p className="min-[1440px]:text-[62px] md:text-[4.306vw] text-[36px] text-[#F31558] relative">{price}</p>
                </div>
                <div className="relative font-dela">
                    <div className="relative text-center">
                        <p className="absolute inset-0 text-center min-[1440px]:text-[32px] md:text-[2.222vw] text-[16px] font-bold  text-white [-webkit-text-stroke:_8px_white]">円</p>
                        <p className="min-[1440px]:text-[32px] md:text-[2.222vw] text-[16px] text-[#F31558] relative">円</p>
                    </div>
                    <div className="relative text-center">
                        <p className="absolute inset-0 text-center min-[1440px]:text-[14px] md:text-[0.972vw] text-[11px] font-bold  text-white [-webkit-text-stroke:_8px_white]">(税込)</p>
                        <p className="min-[1440px]:text-[14px] md:text-[0.972vw] text-[11px] text-[#F31558] relative mt-2 whitespace-nowrap">(税込)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function FV() {
  return (
    <section className="relative">
        <div className="md:bg-[url('/images/fv-bg.png')] bg-[url('/images/fv-bg-sp.png')] bg-[length:100%_100%] bg-bottom md:bg-center">
            <div className="bg-[url('/images/fv-deco.png')] bg-cover w-full h-full pt-28 md:pt-[165px] bg-center">
                <div className="px-5 flex justify-center max-md:flex-col items-center font-rocknRoll md:absolute inset-x-0 top-[110px] gap-5 md:gap-7">
                    <div className="flex items-center gap-5 md:gap-7">
                        <div className="bg-white text-center rounded-[20px] p-3 md:p-5 relative after:absolute after:top-1/2 after:-translate-y-1/2 after:left-full after:w-0 after:h-0 after:border-r-0 after:border-y-transparent after:border-[12px] after:border-l-[16px] after:border-l-white">
                            <span className="min-[1440px]:text-[24px] md:text-[1.667vw] [font-size:_clamp(16px,5vw,24px)] leading-none">
                                利用期間<span className="min-[1440px]:text-[34px] md:text-[2.361vw] [font-size:_clamp(16px,5vw,32px)]">「100年」</span><br />
                                家族利用<span className="min-[1440px]:text-[34px] md:text-[2.361vw] [font-size:_clamp(16px,5vw,32px)]">「OK」</span>
                            </span>
                        </div>
                        <div className="bg-white text-center rounded-[20px] p-3 md:p-5 relative after:absolute md:after:top-1/2 md:after:-translate-y-1/2 after:max-md:left-1/2 max-md:after:-translate-x-1/2 max-md:after:top-full md:after:left-full after:w-0 after:h-0 md:after:border-r-0 max-md:after:border-x-transparent md:after:border-y-transparent after:border-[12px] md:after:border-l-[16px] md:after:border-l-white max-md:after:border-b-0 max-md:after:border-t-white">
                            <span className="min-[1440px]:text-[24px] md:text-[1.667vw] [font-size:_clamp(14px,3vw,24px)] leading-none">
                                <span className="min-[1440px]:text-[50px] md:text-[3.472vw] text-[28px]">100</span><span className="min-[1440px]:text-[40px] md:text-[2.778vw] [font-size:_clamp(20px,5.7vw,36px)]">年</span><br />
                                買い切り型で
                            </span>
                        </div>
                    </div>
                    <div className="bg-white text-center rounded-[20px] p-3 md:p-5">
                        <span className="min-[1440px]:text-[24px] md:text-[1.667vw] [font-size:_clamp(16px,4vw,24px)] leading-none">
                            <span className="flex mb-1.5 justify-center">
                                <span>
                                    最安1GBあたり <br />
                                    25円から使える
                                </span>
                                <span className="min-[1440px]:text-[45px] md:text-[3.125vw] [font-size:_clamp(24px,6vw,40px)] text-[#F31558]">
                                月額費用なし
                                </span>
                            </span>
                            <span className="min-[1440px]:text-[28px] md:text-[1.944vw] [font-size:_clamp(16px,4vw,32px)]">
                            のオンラインストレージサービス！
                            </span>
                        </span>
                    </div>
                </div>
                <div className="flex justify-center h-full items-end pb-4 max-md:pt-5 md:pb-8 relative z-10">
                    <div className="w-1/3 flex justify-center pl-4 md:pl-10 pb-6">
                        <img src="/images/fv-image-01.png" alt="大容量" />
                    </div>
                    <div className="w-1/3 flex justify-center md:pr-6 pt-2">
                        <img src="/images/fv-image-02.png" alt="コスパ最強" />
                    </div>
                    <div className="w-1/3 flex justify-center pr-4 md:pr-12 pb-2">
                        <img src="/images/fv-image-03.png" alt="お試しの" />
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-wrap justify-center gap-5 md:gap-[4.444vw] min-[1440px]:gap-[64px] md:-mt-[80px] -mt-[40px] relative z-20">
            <Price tag="大容量" gb="500" price="12,650" />
            <Price tag="コスパ" gb="100" price="3,410" />
            <Price tag="お試し" gb="2" price="1,100" />
        </div>
    </section>
  );
}
