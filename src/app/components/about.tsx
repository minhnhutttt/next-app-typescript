"use client";

const About = () => {
  return (
    <section className="relative px-5">
        <div className="w-full md:max-w-[1360px] max-w-[440px] mx-auto md:pt-[20.833vw] dt:pt-[300px] pt-[140px]">
            <div className="flex justify-center">
                <div className="relative w-[350px] md:w-[41.667vw] dt:w-[600px] flex justify-end">
                    <span data-scroll className="ani-poyoyon2 animation-500 absolute w-[170px] md:w-[20.069vw] dt:w-[289px] left-6 -top-10 md:-top-[6.944vw] dt:top-[-100px]">
                        <img src="/assets/images/img-bubble-02.png" alt="そう！これらの誤解は前世代NFTの話！" />
                    </span>
                    <figure data-scroll className="ani-fade-up max-md:w-[170px] max-dt:w-[22.569vw]">
                        <img src="/assets/images/img-character-02.png" alt="" />
                    </figure>
                </div>
            </div>
            <div className="relative px-5">
                <span className="absolute inset-x-0 top-0 bg-[url('/assets/images/bg-generation.png')] bg-cover h-[calc(100%-19.931vw)] dt:h-[calc(100%-287px)] md:rounded-[60px] rounded-[32px]"></span>
                <div className="relative md:pt-[120px] pt-14">
                    <div>
                        <h3 data-scroll className="ani-fade-up text-center md:text-[48px] text-[28px] font-black">次世代NFTとは？</h3>
                        <div data-scroll className="ani-fade-up flex justify-center pt-3">
                            <p className="md:text-[18px] text-[14px] w-full max-w-[560px]">
                            次世代NFTとは、NFTをQRコードを撮影して簡単に受け取ったり、説明いらずの直感操作でNFTを送信することができるサービスです。
                            </p>
                        </div>
                    </div>
                    <div className="w-full max-w-[1240px] mx-auto flex gap-10 md:gap-[70px] pt-9 md:pt-16 max-md:flex-col max-md:items-center">
                        <figure data-scroll className="ani-slide-left max-md:w-[300px] max-dt:w-[31.25vw]">
                            <img src="/assets/images/img-generation-01.png" alt="" />
                        </figure>
                        <div data-scroll className="ani-slide-right md:pt-5 flex-1">
                            <h3 className="mb-5 max-md:flex max-md:justify-center max-md:items-center">
                                <img className="max-md:w-[300px]" src="/assets/images/bubble-03.png" alt="NFTの送受信が無料！" />
                            </h3>
                            <p className="md:text-[18px] text-[14px] max-md:text-center">
                            次世代NFTの最大の特徴は、<br className="md:hidden" />NFTの送受信が<span className="relative">
                                <span data-scroll className="ani-scale absolute top-0 left-0 right-0 bottom-0 bg-[#FEEF01]"></span><span className="relative">永年無料</span></span>であること！<br />
                            いつでもどこでも、ガス代(=手数料)を気にせずにNFTを送信することができます。
                            </p>
                            <div className="flex justify-end md:mt-20 mt-10">
                                <figure className="max-md:w-[270px] max-dt:w-[28.472vw]">
                                    <img src="/assets/images/img-generation-02.png" alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;
