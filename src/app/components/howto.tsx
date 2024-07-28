"use client";

const Howto = () => {
  return (
    <section className="relative mt-8">
        <div className="w-full mx-auto max-w-[1360px] md:rounded-[70px] rounded-[44px] bg-white px-3 md:pb-[130px] pb-[60px]">
            <div className="h-px"></div>
            <div className="md:-mt-[54px] -mt-[37px] flex justify-center"><h3><img className="max-md:h-[80px]" src="/assets/images/howto-title.png" alt="使い方" /></h3></div>
            <div className="flex flex-wrap justify-center md:gap-10 gap-12 md:mt-36 mt-14">
                <div className="w-[410px]">
                    <div className="md:min-h-[453px] min-h-[400px] border-[5px] border-[#181818] rounded-[28px] md:rounded-[45px] md:px-[20px] px-4 pb-4 md:pb-6">
                        <div className="flex justify-center">
                            <p className="rounded-full md:size-[76px] size-[60px] bg-white flex place-content-center border-[5px] border-black md:text-[48px] text-[32px] font-extrabold md:-mt-[40px] -mt-[28px]">
                                1
                            </p>
                        </div>
                        <figure className="flex justify-center items-center">
                            <img src="/assets/images/howto-img-01.png" alt="" />
                        </figure>
                        <h5 className="text-center md:text-[22px] text-[18px] font-extrabold md:mt-[30px] mt-5">
                            アイドルクエスト専用アプリを <br />
                            ダウンロード
                        </h5>
                        <p className="md:text-[18px] text-[14px] text-center mt-2">
                        <span className="relative">
                                    <span data-scroll className="ani-scale !delay-300 absolute top-0 left-0 right-0 bottom-0 bg-[linear-gradient(to_top,_#FFF574_30%,_transparent_30%)]"></span><span className="relative">電話番号やメールアドレスの登録不要！</span></span>
                        </p>
                    </div>
                    <div className="flex justify-center items-center gap-5 max-md:flex-col md:mt-11 mt-7 mb-5">
                        <a href="https://apps.apple.com/jp/app/diver-wallet/id6444421722" target="_blank" rel="noopener noreferrer" className="duration-150 hover:opacity-75">
                            <img src="/assets/images/btn-appstore.png" alt="" />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.hyerdesign.diver.wallet&hl=ln" target="_blank" rel="noopener noreferrer" className="duration-150 hover:opacity-75">
                            <img src="/assets/images/btn-googleplay.png" alt="" />
                        </a>
                    </div>
                </div>
                <div className="w-[410px]">
                    <div className="md:min-h-[453px] min-h-[400px] border-[5px] border-[#181818] rounded-[28px] md:rounded-[45px] md:px-[20px] px-4 pb-4 md:pb-6">
                        <div className="flex justify-center">
                            <p className="rounded-full md:size-[76px] size-[60px] bg-white flex place-content-center border-[5px] border-black md:text-[48px] text-[32px] font-extrabold md:-mt-[40px] -mt-[28px]">
                                2
                            </p>
                        </div>
                        <figure className="flex justify-center items-center">
                            <img src="/assets/images/howto-img-02.png" alt="" />
                        </figure>
                        <h5 className="text-center md:text-[22px] text-[18px] font-extrabold md:mt-[30px] mt-5">
                        アイドルクエストを開いて <br />
                        NFTトレカがある場所まで移動する
                        </h5>
                    </div>
                </div>
                <div className="w-[410px]">
                    <div className="md:min-h-[453px] min-h-[400px] border-[5px] border-[#181818] rounded-[28px] md:rounded-[45px] md:px-[20px] px-4 pb-4 md:pb-6">
                        <div className="flex justify-center">
                            <p className="rounded-full md:size-[76px] size-[60px] bg-white flex place-content-center border-[5px] border-black md:text-[48px] text-[32px] font-extrabold md:-mt-[40px] -mt-[28px]">
                                3
                            </p>
                        </div>
                        <figure className="flex justify-center items-center">
                            <img src="/assets/images/howto-img-03.png" alt="" />
                        </figure>
                        <h5 className="text-center md:text-[22px] text-[18px] font-extrabold md:mt-[30px] mt-5">
                            限定NFTトレカを<br />
                            タップしてゲット！
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Howto;
