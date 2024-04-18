const Present = () => {

  return (
    <section className="pt-[120px]">
        <div className="relative">
            <div className="flex items-center justify-center">
                <div className="flex justify-center md:text-[24px] text-[14px] font-black pt-5 relative">
                    <img src="/images/bg-title.png" alt="" />
                    <span className="absolute top-0">ユニークな印象を与え効率が良い</span>
                </div>
            </div>
            <div className="relative">
                <h4 className="text-center md:text-[32px] text-[20px] font-black tracking-widest">
                    新時代の名刺コミュニケーションを <br />
                    求めるあなたへ！
                </h4>
                <span className="absolute top-0 inset-x-0 flex justify-center">
                    <img src="/images/present-text.png" alt="" />
                </span>
                <div className="relative mt-28">
                    <div className="flex items-center justify-center relative">
                        <figure>
                            <img src="/images/present-img.png" alt="" />
                        </figure>
                    </div>
                    <div className="absolute inset-0 top-0 pt-6">
                        <div className="md:text-[20px] text-[14px] font-bold text-center">＼毎日先着50名様限定で／</div>
                        <div className="w-[290px] mx-auto p-5">
                            <div className="flex justify-center items-center gap-3 md:text-[24px] text-[16px] font-black"><span className="flex-1 h-px bg-black"></span><span className="">NFT名刺</span><span className="flex-1 h-px bg-black"></span></div>
                            <div className="flex gap-2">
                                <div className="bg-[#7FFF00] md:text-[48px] text-[24px] font-black leading-[1.2]">
                                    <p className="">無</p>
                                    <p className="">料</p>
                                </div>
                                <div className="font-black">
                                    <p className="md:text-[73px] text-[36px] leading-none">200<span className="md:text-[46px] text-[23px]">枚</span></p>
                                    <p className="md:text-[28px] text-[14px]">プレゼント中!!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Present
