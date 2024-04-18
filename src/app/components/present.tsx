const Present = () => {

  return (
    <section className="pt-[70px] md:pt-[120px] bg-white md:pb-[78px] pb-[50px]">
        <div className="relative">
            <div className="flex items-center justify-center">
                <div className="flex justify-center md:text-[24px] text-[16px] font-black pt-2 md:pt-5 relative">
                    <img className="max-md:w-[300px]" src="/images/bg-title.png" alt="" />
                    <span className="absolute top-0">ユニークな印象を与え効率が良い</span>
                </div>
            </div>
            <div className="relative">
                <h4 className="text-center md:text-[32px] text-[20px] font-black tracking-widest">
                    新時代の名刺コミュニケーションを <br />
                    求めるあなたへ！
                </h4>
                <span className="absolute top-10 md:top-0 inset-x-0 flex justify-center">
                    <img src="/images/present-text.png" alt="" />
                </span>
                <div className="relative mt-10 md:mt-28">
                    <div className="flex items-center justify-center relative max-md:mx-[-100px]">
                        <figure>
                            <img className="max-md:max-w-[550px]" src="/images/present-img.png" alt="" />
                        </figure>
                    </div>
                    <div className="absolute inset-0 top-0 pt-3 md:pt-6">
                        <div className="md:text-[20px] text-[16px] font-bold text-center">＼毎日先着50名様限定で／</div>
                        <div className="w-[200px] md:w-[290px] mx-auto p-5">
                            <div className="flex justify-center items-center gap-3 md:text-[24px] text-[16px] font-black"><span className="flex-1 h-px bg-black"></span><span className="">NFT名刺</span><span className="flex-1 h-px bg-black"></span></div>
                            <div className="flex gap-2">
                                <div className="bg-[#7FFF00] md:text-[48px] text-[28px] font-black leading-[1.2]">
                                    <p className="">無</p>
                                    <p className="">料</p>
                                </div>
                                <div className="font-black">
                                    <p className="md:text-[73px] text-[40px] leading-none">200<span className="md:text-[46px] text-[28px]">枚</span></p>
                                    <p className="md:text-[28px] text-[18px]">プレゼント中!!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center md:mt-10">
                    <a className="flex items-center justify-center md:w-[360px] w-[200px] h-[44px] md:h-[80px] rounded-[50px] bg-[#101010] md:text-[24px] text-[15px] font-black text-[#7FFF00] outline-1 outline outline-[#7FFF00] md:outline-offset-[-5px] outline-offset-[-3px] [box-shadow:0px_0px_30px_0px_rgba(127,_255,_0,_0.30)] gap-2 tracking-[0.15em] md:tracking-[0.3em]" href="#">
                        <span>今すぐGET</span>
                        <img className="max-md:w-5" src="/images/arrow.svg" alt="" />
                    </a>
                </div>
                <div className="flex justify-center md:mt-8 mt-5 px-5">
                    <p className="md:text-[16px] text-[13px] text-center">
                    ※1:NFT名刺の画像とアプリ「DIVER Biz」のウォレットアドレスが必要です。<br />※2:名刺情報のフォーム入力が必要です。<br />※3:無料プレゼントキャンペーンは2024年12月末までを予定しています。
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Present
