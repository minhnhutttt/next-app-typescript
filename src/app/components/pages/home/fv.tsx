"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";

function FVBanner() {
    const animateRefs = useScrollAnimation("fadeUp");
    return (
        <div className="px-5 flex justify-center max-md:flex-col items-center font-rocknRoll md:absolute inset-x-0 top-[110px] gap-3 md:gap-7">
            <div ref={animateRefs} className="opacity-0 flex items-center gap-5 md:gap-7">
                <div className="bg-white text-center md:rounded-[20px] rounded-[10px] p-3 md:p-5 relative after:absolute after:top-1/2 after:-translate-y-1/2 after:left-full after:w-0 after:h-0 after:border-r-0 after:border-y-transparent md:after:border-[12px] after:border-[8px] md:after:border-l-[16px] after:border-l-[10px] after:border-l-white">
                    <span className="min-[1440px]:text-[24px] md:text-[1.667vw] [font-size:_clamp(14px,3.816vw,24px)] leading-none">
                        利用期間<span className="min-[1440px]:text-[34px] md:text-[2.361vw] [font-size:_clamp(16px,5.405vw,32px)]">「100年」</span><br />
                        家族利用<span className="min-[1440px]:text-[34px] md:text-[2.361vw] [font-size:_clamp(16px,5.405vw,32px)]">「OK」</span>
                    </span>
                </div>
                <div className="bg-white text-center md:rounded-[20px] rounded-[10px] p-3 md:p-5 relative after:absolute md:after:top-1/2 md:after:-translate-y-1/2 after:max-md:left-1/2 max-md:after:-translate-x-1/2 max-md:after:top-full md:after:left-full after:w-0 after:h-0 md:after:border-r-0 max-md:after:border-x-transparent md:after:border-y-transparent md:after:border-[12px] after:border-[8px] max-md:after:border-t-[10px] md:after:border-l-[16px] md:after:border-l-white max-md:after:border-b-0 max-md:after:border-t-white">
                    <span className="min-[1440px]:text-[24px] md:text-[1.667vw] [font-size:_clamp(14px,3vw,24px)] leading-none">
                        <span className="min-[1440px]:text-[50px] md:text-[3.472vw] text-[7.949vw]">100</span><span className="min-[1440px]:text-[40px] md:text-[2.778vw] [font-size:_clamp(20px,6.36vw,36px)]">年</span><br />
                        買い切り型で
                    </span>
                </div>
            </div>
            <div ref={animateRefs} className="opacity-0 max-md:w-full bg-white text-center md:rounded-[20px] rounded-[10px] py-2 px-3 md:p-5">
                <span className="min-[1440px]:text-[24px] md:text-[1.667vw] [font-size:_clamp(13px,3.816vw,24px)] leading-none">
                    <span className="flex mb-1.5 justify-center">
                        <span>
                            最安1GBあたり <br />
                            25円から使える
                        </span>
                        <span className="min-[1440px]:text-[45px] md:text-[3.125vw] [font-size:_clamp(24px,7.155vw,40px)] text-[#F31558]">
                            月額費用なし
                        </span>
                    </span>
                    <span className="min-[1440px]:text-[28px] md:text-[1.944vw] [font-size:_clamp(16px,4.451vw,32px)]">
                        のオンラインストレージサービス！
                    </span>
                </span>
            </div>
        </div>
    )
}

export default function FV() {
    const animateRefs = useScrollAnimation("fadeUp");
    const animateZoomRefs = useScrollAnimation("zoom");
    return (
        <>
            <section className="relative max-md:bg-[#00B900]">
                <div className="md:bg-[url('/images/fv-bg.png')] bg-[url('/images/fv-bg-sp.png')] bg-[length:100%_100%] bg-bottom md:bg-center">
                    <div className="bg-[url('/images/fv-deco.png')] bg-cover w-full h-full pt-[9.6vw] md:pt-[165px] bg-center">
                        <div className="max-md:hidden">
                            <FVBanner />
                        </div>
                        <div className="flex justify-center h-full items-end max-md:pb-[60px] max-md:pt-5 md:pb-8 relative z-10">
                            <div ref={animateZoomRefs} className="max-md:absolute max-md:bottom-0 max-md:left-[12px] opacity-0 max-md:flex-[0_0_38.685vw] max-md:w-[38.685vw] md:w-1/3 flex justify-center max-md:pt-[75px] md:pl-10 pb-6">
                                <img src="/images/fv-image-01.png" alt="大容量" />
                            </div>
                            <div ref={animateZoomRefs} className="opacity-0 max-md:flex-[0_0_35.28vw] max-md:w-[35.28vw] md:w-1/3 flex justify-center md:pr-6 pt-2">
                                <img className="" src="/images/fv-image-02.png" alt="コスパ最強" />
                            </div>
                            <div ref={animateZoomRefs} className="max-md:absolute max-md:bottom-[10px] max-md:right-[15px] max-md:flex-[0_0_37.251vw] max-md:w-[37.251vw] opacity-0 md:w-1/3 flex justify-center md:pr-12 pb-2">
                                <img src="/images/fv-image-03.png" alt="お試しの" />
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={animateRefs} className="opacity-0 flex justify-center gap-2 md:gap-[4.444vw] min-[1440px]:gap-[64px] md:absolute md:inset-x-0 md:-mt-[80px] -mt-[3vw] relative z-20 px-2">
                    <figure className="drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]">
                        <img className="max-md:hidden" src="/images/plan-01.png" alt="" />
                        <img className="md:hidden" src="/images/plan-01-sp.png" alt="" />
                    </figure>
                    <figure className="drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]">
                        <img className="max-md:hidden" src="/images/plan-02.png" alt="" />
                        <img className="md:hidden" src="/images/plan-02-sp.png" alt="" />
                    </figure>
                    <figure className="drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]">
                        <img className="max-md:hidden" src="/images/plan-03.png" alt="" />
                        <img className="md:hidden" src="/images/plan-03-sp.png" alt="" />
                    </figure>
                </div>
            </section>
            <section className="relative md:bg-[url('/images/bg-line.png')] max-md:bg-[#00B900] bg-bottom bg-[length:100%_100%] bg-no-repeat md:px-5 flex justify-center pb-6 md:pb-8 pt-5 md:pt-[240px]">
                <div ref={animateRefs} className="opacity-0">
                    <div className="md:hidden">
                        <FVBanner />
                    </div>
                    <p className="md:text-[48px] text-[27px] text-center text-white font-black tracking-widest max-md:mt-4">LINEで承ります</p>
                    <div className="flex justify-center mt-2 md:mt-5 md:h-[74px] h-[44px]">
                        <a href="https://lin.ee/Nj3eFy0" target="_blank" className="md:w-[340px] md:h-[70px] w-[195px] h-[40px] bg-white flex items-center justify-center md:rounded-[10px] rounded-[5px] [box-shadow:0px_5px_0px_0px_rgba(0,_88,_0,_0.70)] md:text-[22px] text-[12.6px] font-black gap-2 text-[#00B900] hover:mt-1 hover:[box-shadow:0px_1px_0px_0px_rgba(0,_88,_0,_0.70)] duration-300">
                            <img className="max-md:w-4" src="/images/ic-line.svg" alt="" />
                            <span>次世代ストレージを使う</span>
                        </a>
                    </div>
                    <p className="text-center font-zen md:text-[14px] text-[12px] text-white mt-2 md:mt-3">※日本円、またはダイバーコインでの決済が可能です。</p>
                </div>
            </section>
        </>
    );
}
