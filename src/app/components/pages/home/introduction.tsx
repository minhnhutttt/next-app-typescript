"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
export default function Introduction() {
  const animateLeftRefs = useScrollAnimation("slideLeft");
  const animateRightRefs = useScrollAnimation("slideRight");
  return (
    <section className="px-5 mt-8 md:pb-[100px] overflow-hidden">
        <div className="w-full md:max-w-[1320px] max-w-[440px] mx-auto flex max-md:flex-col max-md:items-center gap-6 lg:gap-[54px]">
            <div ref={animateLeftRefs} className="opacity-0 flex items-end max-md:-ml-2">
                <figure className="relative md:w-[16.319vw] min-[1440px]:w-auto w-[110px]">
                    <img src="/images/img-intro.png" alt="NFT×NFC" />
                </figure>
                <div className="aspect-square w-[300px] md:w-[37.917vw] min-[1440px]:w-[546px] bg-[#0055A3] rounded-full flex items-center justify-center ml-[-55px] md:ml-[-7.639vw] min-[1440px]:ml-[-110px] mb-6 md:mb-14">
                    <div className="text-white text-center font-bold leading-snug">
                        <p><span className="text-[28px] md:text-[3.333vw] min-[1440px]:text-[48px]">所有権</span><span className="text-[20px] md:text-[2.222vw] min-[1440px]:text-[32px]">を</span><span className="text-[36px] md:text-[3.889vw] min-[1440px]:text-[56px]">100</span><span className="text-[20px] md:texxt-[2.5vw] min-[1440px]:text-[36px]">%</span></p>
                        <p><span className="text-[44px] md:text-[5.556vw] min-[1440px]:text-[80px]">完全</span><span className="text-[32px] md:text-[3.611vw] min-[1440px]:text-[52px]">に</span></p>
                        <p className=""><span className="text-[32px] md:text-[4.167vw] min-[1440px]:text-[60px]"><span className="relative after:content-[''] min-[1440px]:after:w-[11px] md:after:w-[0.764vw] after:w-[6px] after:aspect-square after:bg-white after:rounded-full after:absolute after:bottom-[-10px] after:left-3.5 md:after:left-[1.389vw] min-[1440px]::after:left-5">証</span><span className="relative after:content-[''] min-[1440px]:after:w-[11px] md:after:w-[0.764vw] after:w-[6px] after:aspect-square after:bg-white after:rounded-full after:absolute after:bottom-[-10px] after:left-3.5 md:after:left-[1.944vw] min-[1440px]::after:left-7">明</span></span><span className="text-[28px] md:text-[3.611vw] min-[1440px]:text-[52px]">します</span><span className="text-[35px] md:text-[4.306vw] min-[1440px]:text-[62px]">!!</span></p>
                    </div>
                </div>
            </div>
            <div ref={animateRightRefs} className="opacity-0 pt-2 flex-1">
                <div className="md:w-[45vw] xl:w-[510px]">
                    <div className="md:pl-4">
                    <h3 className="text-[32px] md:text-[40px] min-[1440px]:text-[64px] font-black tracking-wider">
                    NFT×NFC<br />RWAタグとは？
                    </h3>
                    <p className="text-[20px] lg:text-[24px] font-bold border-l-[7px] border-[#0055A3] pl-4 mt-8 md:mt-12">所有を証明する！</p>
                    <p className="text-[16px] lg:text-[18px] mt-3 md:mt-5">
                    RWAタグとは、NFT技術を使用して、現実の資産をデジタル上で確実に追跡・管理できるようにするための、近距離無線通信（NFC）シールです。
                    </p>
                    </div>
                    <div className="flex max-md:justify-center mt-8 md:mt-14 gap-4 md:gap-6 lg:gap-10">
                        <div className="aspect-square w-[30%] max-md:max-w-[100px] md:w-[110px] lg:w-[140px] rounded-full border-2 border-[#0055A3] flex flex-col justify-end items-center pb-6 md:pb-6 lg:pb-8">
                            <div className="text-[14px] md:text-[18px] text-center font-bold pb-1 md:pb-[0.833vw] min-[1440px]:pb-3"><span className="text-[20px] md:text-[24px]">NFT</span>とは</div>
                            <figure>
                                <img className="max-md:w-[44px]" src="/images/arrow.svg" alt="" />
                            </figure>
                        </div>
                        <div className="aspect-square w-[30%] max-md:max-w-[100px] md:w-[110px] lg:w-[140px] rounded-full border-2 border-[#0055A3] flex flex-col justify-end items-center pb-6 md:pb-6 lg:pb-8">
                            <div className="text-[14px] md:text-[18px] text-center font-bold pb-1 md:pb-[0.833vw] min-[1440px]:pb-3"><span className="text-[20px] md:text-[24px]">NFC</span>とは</div>
                            <figure>
                                <img className="max-md:w-[44px]" src="/images/arrow.svg" alt="" />
                            </figure>
                        </div>
                        <div className="aspect-square w-[30%] max-md:max-w-[100px] md:w-[110px] lg:w-[140px] rounded-full border-2 border-[#0055A3] flex flex-col justify-end items-center pb-6 md:pb-6 lg:pb-8">
                            <div className="text-[14px] md:text-[18px] text-center font-bold pb-1 md:pb-[0.833vw] min-[1440px]:pb-3"><span className="text-[20px] md:text-[24px]">RWA</span>とは</div>
                            <figure>
                                <img className="max-md:w-[44px]" src="/images/arrow.svg" alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
