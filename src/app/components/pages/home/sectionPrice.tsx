import SectionWrap from "../common/sectionWrap";

export default function SectionPrice() {
    return (
        <SectionWrap anchor="price" number="3" title="PRICE" content={<>買い切り型でムダゼロ化<br />料金プランをチェック！</>}>
            <div className="w-full md:pt-12 pt-8 px-5 md:pb-[60px] pb-10">
                <div className="flex flex-wrap justify-center mb-5 md:mb-8">
                    <p className="md:text-[32px] text-[18px] font-bold bg-[#FDD300] rounded-[70px] md:px-10 px-6 py-2.5">最安1GBあたり25円(税込)〜</p>
                </div>
                <div className="flex flex-wrap justify-center gap-5 md:gap-[22px]">
                    <p className="md:text-[32px] text-[18px] font-bold bg-[#FDD300] rounded-[70px] md:px-10 px-6 py-2.5">利用期間「100年」</p>
                    <p className="md:text-[32px] text-[18px] font-bold bg-[#FDD300] rounded-[70px] md:px-10 px-6 py-2.5">家族利用「OK」</p>
                </div>
                <p className="text-center md:text-[20px] text-[14px] font-bold md:mt-16 mt-10">
                    500GB・100GB・2GBから選べる3プラン！<br />後から自由に追加購入可能！
                    <br /><br />
                    あなたのデジタルライフに合わせてコスパの良い暮らしを実現してください！
                </p>
                <div className="flex mt-[130px] lg:mt-[68px] justify-center max-lg:flex-wrap gap-[30px] px-3">
                    <div className="bg-[#4285F4] w-[280px] rounded-[10px] [box-shadow:0px_4px_20px_rgba(0,_0,_0,_0.25)] relative">
                        <figure className="absolute top-[-115px] left-[-20px] z-10">
                            <img src="/images/price-deco-01.png" alt="" />
                        </figure>
                        <div className="pt-3 pb-5 bg-[url('/images/price-line.png')] bg-no-repeat bg-bottom">
                            <div className="relative">
                                <p className="tracking-[0.3em] absolute inset-0 text-center text-[42px] font-black text-white [-webkit-text-stroke:_8px_white]">大容量</p>
                                <p className="tracking-[0.3em] text-center text-[42px] font-black relative">大容量</p>
                            </div>
                        </div>
                        <div className="text-white pt-2 pb-8 px-7">
                            <div className="relative">
                                <figure className="flex justify-center opacity-50">
                                    <img src="/images/price-ic-01.png" alt="" />
                                </figure>
                                <div className="absolute text-center inset-0 flex items-center justify-center flex-col">
                                    <p className="font-black text-[42px]">500<span className="text-[32px]">GB</span></p>
                                    <p className="text-center font-black text-[12px]">1GBあたり25円</p>
                                </div>
                            </div>
                            <div className="flex items-end justify-center">
                                <p className="font-black text-[67px] leading-none">
                                12,650
                                </p>
                                <p className="font-black text-center leading-[1.4] whitespace-nowrap">
                                    <span className="text-[24px]">円</span> <br />
                                    <span className="text-[16px]">(税込)</span>
                                </p>
                            </div>
                            <div className="text-center text-[14px] mt-7">
                                <img className="inline" src="/images/ic-check-sm.svg" alt="" /> 画像：約11.3万枚<br />
                                (1200万画素の場合)
                            </div>
                            <div className="flex justify-center mt-6">
                                <a href="/" className="text-[20px] font-black bg-white text-[#4285F4] w-[196px] h-[40px] flex items-center justify-center rounded-[10px]">
                                購入する
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#FDD300] w-[280px] rounded-[10px] [box-shadow:0px_4px_20px_rgba(0,_0,_0,_0.25)] relative">
                        <figure className="absolute top-[125px] right-[-12px] z-10">
                            <img src="/images/price-deco-02.png" alt="" />
                        </figure>
                        <div className="pt-3 pb-5 bg-[url('/images/price-line.png')] bg-no-repeat bg-bottom relative">
                            <figure className="absolute top-0 left-0">
                                <img src="/images/price-km.png" alt="一番人気！" />
                            </figure>
                            <div className="relative">
                                <p className="tracking-[0.11em] absolute inset-0 text-center text-[42px] font-black text-white [-webkit-text-stroke:_8px_white]">コスパ最強</p>
                                <p className="tracking-[0.11em] text-center text-[42px] font-black relative bg-[linear-gradient(94deg,_#FA2121_7.72%,_#E8CC37_26.18%,_#52D25F_44.63%,_#18E3FF_63.09%,_#8337FF_81.54%,_#E802DF_100%)] text-gradient">コスパ最強</p>
                            </div>
                        </div>
                        <div className="text-black pt-2 pb-8 px-7">
                            <div className="relative">
                                <figure className="flex justify-center opacity-50">
                                    <img src="/images/price-ic-01.png" alt="" />
                                </figure>
                                <div className="absolute text-center inset-0 flex items-center justify-center flex-col">
                                    <p className="font-black text-[42px]">100<span className="text-[32px]">GB</span></p>
                                    <p className="text-center font-black text-[12px]">1GBあたり34円</p>
                                </div>
                            </div>
                            <div className="flex items-end justify-center">
                                <p className="font-black text-[67px] leading-none">
                                3,410
                                </p>
                                <p className="font-black text-center leading-[1.4] whitespace-nowrap">
                                    <span className="text-[24px]">円</span> <br />
                                    <span className="text-[16px]">(税込)</span>
                                </p>
                            </div>
                            <div className="text-center text-[14px] mt-7">
                                <img className="inline" src="/images/ic-check-sm-black.svg" alt="" />  画像：約2.2万枚<br />
                                (1200万画素の場合)
                            </div>
                            <div className="flex justify-center mt-6">
                                <a href="/" className="text-[20px] font-black bg-black text-[#FDD300] w-[196px] h-[40px] flex items-center justify-center rounded-[10px]">
                                購入する
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#F77796] w-[280px] rounded-[10px] [box-shadow:0px_4px_20px_rgba(0,_0,_0,_0.25)] relative">
                        <figure className="absolute top-[15px] right-[-24px] z-10">
                            <img src="/images/price-deco-03.png" alt="" />
                        </figure>
                        <div className="pt-3 pb-5 bg-[url('/images/price-line.png')] bg-no-repeat bg-bottom relative">
                            <div className="relative">
                                <p className="tracking-[0.3em] absolute inset-0 text-center text-[42px] font-black text-white [-webkit-text-stroke:_8px_white]">お試し</p>
                                <p className="tracking-[0.3em] text-center text-[42px] font-black relative">お試し</p>
                            </div>
                        </div>
                        <div className="text-white pt-2 pb-8 px-7">
                            <div className="relative">
                                <figure className="flex justify-center opacity-50">
                                    <img src="/images/price-ic-01.png" alt="" />
                                </figure>
                                <div className="absolute text-center inset-0 flex items-center justify-center flex-col">
                                    <p className="font-black text-[42px]">2<span className="text-[32px]">GB</span></p>
                                    <p className="text-center font-black text-[12px]">1GBあたり550円</p>
                                </div>
                            </div>
                            <div className="flex items-end justify-center">
                                <p className="font-black text-[67px] leading-none">
                                1,100
                                </p>
                                <p className="font-black text-center leading-[1.4] whitespace-nowrap">
                                    <span className="text-[24px]">円</span> <br />
                                    <span className="text-[16px]">(税込)</span>
                                </p>
                            </div>
                            <div className="text-center text-[14px] mt-7">
                                <img className="inline" src="/images/ic-check-sm.svg" alt="" /> 画像：約408万枚<br />
                                (1200万画素の場合)
                            </div>
                            <div className="flex justify-center mt-6">
                                <a href="/" className="text-[20px] font-black bg-white text-[#F77796] w-[196px] h-[40px] flex items-center justify-center rounded-[10px]">
                                購入する
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrap>
    );
  }