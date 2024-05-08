export default function GoldenRatio() {
    return (
      <section className="px-5 max-md:mt-10 md:mb-[52px] mb-10">
        <div className="w-full md:max-w-[1320px] max-w-[400px] mx-auto">
            <div className="border border-[#17A9E7] md:rounded-[90px] rounded-[45px]">
                <div className="border border-[#C566FF] relative -top-1.5 md:top-[-13px] -right-2 md:right-[-16px] md:rounded-[90px] rounded-[45px] pb-6 md:pb-10">
                    <div className="flex justify-center items-center mt-[-36px]">
                        <div className="flex  bg-white md:px-9 px-4 gap-5">
                            <figure>
                                <img className="max-md:w-[50px] max-lg:w-[80px]" src="/assets/images/rice.png" alt="美味しさと健康の黄金比" />
                            </figure>
                            <h4 className="lg:text-[42px] md:text-[24px] text-[18px] font-semibold font-mincho md:mt-5">美味しさ<br className="md:hidden" />と健康の黄金比</h4>
                        </div>
                    </div>
                    <div className="flex max-md:flex-col md:px-9 px-5 max-md:relative max-md:-left-2 max-md:pt-4">
                        <div className=" max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
                            <figure>
                                <img className="max-md:w-[220px]" src="/assets/images/ratio-01.png" alt="" />
                            </figure>
                            <div className="flex justify-center">
                                <p className="lg:text-[19px] md:text-[16px] text-[14px] font-semibold">
                                    お水だけで簡単に戻せる <br />
                                    乾燥米の一種です。
                                </p>
                            </div>
                        </div>
                        <figure className="md:pt-24 pt-4 lg:px-8 px-4 flex justify-center items-start">
                            <img className="max-md:w-8" src="/assets/images/x.png" alt="" />
                        </figure>
                        <div className=" max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
                            <figure>
                                <img className="max-md:w-[220px]" src="/assets/images/ratio-02.png" alt="" />
                            </figure>
                            <div className="flex justify-center">
                                <p className="lg:text-[19px] md:text-[16px] text-[14px] font-semibold">
                                    こんにゃくでできた <br />
                                    低カロリーなお米です。　
                                </p>
                            </div>
                        </div>
                        <figure className="md:pt-24 pt-6 lg:px-8 px-4 flex justify-center items-start">
                            <img className="max-md:w-8" src="/assets/images/equal.png" alt="" />
                        </figure>
                        <div className="md:-mt-5 mt-5 max-md:px-5 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
                            <figure>
                                <img className="max-md:w-[220px]" src="/assets//images/ratio-03.png" alt="" />
                            </figure>
                            <div className="flex justify-center mt-4 mb-6">
                                <p className="lg:text-[19px] md:text-[16px] text-[14px] font-semibold max-w-[312px] leading-snug">
                                独自のブレンドでまるで<span className="text-[#FF0505]">炊き立てのご飯</span>のような味わいです。
                                </p>
                            </div>
                            <div className="border border-[#EED38E] bg-[#FCFEDF] max-w-[341px] lg:text-[19px] md:text-[16px] text-[14px] font-semibold leading-snug rounded-[26px] md:min-h-[107px] min-h-[80px] py-3 px-5">
                                通常のお米に比べ<span className="text-[#FF0505]">食物繊維が8倍
                                カルシウムは4倍</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
  }
  