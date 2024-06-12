const Produce = () => {
  return (
    <section className="px-5 bg-[#F5F5F5] md:py-[150px] py-20">
        <div className="w-full xl:max-w-[1350px] max-w-[900px] max-xl:flex-col mx-auto flex xl:gap-[110px] gap-10">
            <div className="">
                <div className="flex items-center max-xl:justify-center xl:pl-3 gap-1">
                    <figure>
                        <img className="max-md:w-[30vw]" src="/assets/images/produce-01.png" alt="" />
                    </figure>
                    <p className="md:text-[22px] text-[clamp(13px,3.2vw,18px)] font-bold text-gradient-03 leading-[2.2]">
                        まぶたを閉じれば <br />
                        浮かんでくる愛らしい姿を、<br />
                        『 メタでペット供養 』が永遠に。
                    </p>
                </div>
                <div className="gradient border border-[#E0C3FC] rounded-[20px] md:mt-[77px] mt-[50px] pt-8 md:pt-10 md:pb-[62px] pb-10 px-6">
                    <div className="relative flex justify-center items-center">
                        <h4 className="relative text-gradient-03 md:text-[24px] text-[clamp(16px,3.5vw,20px)] font-bold tracking-widest">
                            <span className="absolute right-full bottom-0 size-20 md:size-[100px]">
                                <img src="/assets/images/produce-bubble.png" alt="先着50名様限定" />
                            </span>
                            メモリアルモニター受付中
                            <span className="gradient-03 h-0.5 w-full block"></span>
                        </h4>
                    </div>
                    <div className="flex justify-center md:mt-8 mt-6">
                        <p className="max-w-[435px] md:text-[16px] text-[13px] font-mediuml leading-[1.8]">
                        今ならモニターとしての参加で、先行利用特典や初期費用・年会費の割引クーポンをご提供！供養の新たな選択肢に魅力を感じるあなたを全面的にバックアップいたします。
                        </p>
                    </div>
                    <div className="flex justify-center md:gap-[26px] gap-5 md:mt-[26px] mt-5 max-md:flex-col max-md:items-center">
                        <a href="/" className="flex items-center justify-center md:w-[270px] w-[240px] h-16 md:h-20 bg-[#2E8DEC] [box-shadow:0px_0px_40px_0px_rgba(100,_0,_136,_0.20)] border border-white rounded-[70px] md:text-[16px] text-[14px] font-bold text-white gap-2">
                            <figure>
                                <img className="md:size-[51px] size-[41px]" src="/assets/images/ic-btn-01.png" alt="" />
                            </figure>
                            <span>
                            メモリアルモニター <br />
                            として参加する
                            </span>
                        </a>
                        <a href="/" className="flex items-center justify-center md:w-[270px] w-[240px] h-16 md:h-20 bg-[#C985FF] [box-shadow:0px_0px_40px_0px_rgba(100,_0,_136,_0.20)] border border-white rounded-[70px] md:text-[16px] text-[14px] font-bold text-white gap-2">
                            <figure>
                                <img className="md:size-[51px] size-[41px]" src="/assets/images/ic-btn-02.png" alt="" />
                            </figure>
                            <span>
                                メモリアルモニター <br />
                                の詳細が知りたい
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex-1 md:pt-8 pt-4">
                <div className="flex justify-center items-center gap-6 md:gap-8">
                    <span className="flex-1 h-px gradient-03"></span>
                    <span className="md:text-[28px] text-[20px] text-gradient-03 font-noto tracking-widest">PRODUCED by</span>
                    <span className="flex-1 h-px gradient-03"></span>
                </div>
                <div className="md:pt-10 pt-8 w-full max-md:max-w-[440px] max-xl:max-w-[600px] max-xl:mx-auto">
                    <div className="flex md:gap-10 gap-8">
                        <div className="">
                            <figure className="h-[110px] md:h-[180px] flex items-center">
                                <img src="/assets/images/produce-by-01.png" alt="" />
                            </figure>
                            <p className="text-center font-medium md:text-[14px] text-[12px] mt-2.5 md:mt-[15px]">狩俣自治会</p>
                        </div>
                        <div className="">
                            <figure className="h-[110px] md:h-[180px] flex items-center">
                                <img src="/assets/images/produce-by-02.png" alt="" />
                            </figure>
                            <p className="text-center font-medium md:text-[14px] text-[12px] mt-2.5 md:mt-[15px]">琉球大学島嶼地域科学研究所</p>
                        </div>
                    </div>
                    <div className="flex md:gap-[67px] gap-5 md:pt-8 pt-5 md:pl-5">
                        <div className="">
                            <figure className="h-[130px] md:h-[172px] flex items-end">
                                <img src="/assets/images/produce-by-03.png" alt="" />
                            </figure>
                            <p className="text-center font-medium md:text-[14px] text-[12px] mt-2.5 md:mt-[15px]">株式会社んみゃーち</p>
                       </div>
                        <div className="">
                            <figure className="h-[130px] md:h-[172px] flex items-center">
                                <img src="/assets/images/produce-by-04.png" alt="" />
                            </figure>
                            <p className="text-center font-medium md:text-[14px] text-[12px] mt-2.5 md:mt-[15px]">株式会社メタロポリス</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Produce;
