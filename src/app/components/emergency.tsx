"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Emergency = () => {
    const ref = useScrollAnimations();
    return (
        <section ref={ref} className="relative overflow-hidden bg-black">
            <div className="w-full max-w-[1440px] mx-auto">
                <div className="relative">
                    <img src="/assets/images/bg-emergency.png" alt="" />
                </div>
                <div data-scroll className="ani-fade-up absolute inset-0">
                    <div className="w-[70vw] md:w-[56.25vw] dt:w-[810px] mx-auto md:pt-[19.306vw] pt-[16vw] dt:pt-[278px]">
                        <div>
                            <span className="block h-[2.083vw] dt:h-[30px] md:bg-[repeating-linear-gradient(_-45deg,_#FEC800,_#FEC800_10px,_#000_10px,_#000_20px_)] bg-[repeating-linear-gradient(_-60deg,_#FEC800,_#FEC800_5px,_#000_5px,_#000_10px_)]"></span>
                                <h3 className="text-[5vw] md:text-[4.444vw] dt:text-[64px] font-black text-white text-center">
                                    緊急クエスト発生！
                                </h3>
                            <span className="block h-[2.083vw] dt:h-[30px] md:bg-[repeating-linear-gradient(_-45deg,_#FEC800,_#FEC800_10px,_#000_10px,_#000_20px_)] bg-[repeating-linear-gradient(_-60deg,_#FEC800,_#FEC800_5px,_#000_5px,_#000_10px_)]"></span>
                        </div>
                        <p className="md:text-[2.222vw] text-[2.8vw] dt:text-[32px] font-medium text-white pl-[2.778vw] dt:pl-10 py-[2.5vw] dt:py-9 leading-loose">
                            隙間時間で近所の企業を救え！ <br />
                            バイトクエストで、人手不足の近隣企業を助けて、<br />
                            報酬と感謝をゲットしよう！
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Emergency;
