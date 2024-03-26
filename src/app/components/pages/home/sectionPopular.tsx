import SectionWrap from "../common/sectionWrap";

export default function SectionPopular() {
    return (
        <SectionWrap anchor="popular" number="4" title="POPULAR" content={<>人気のプラン大解剖<br />コスパが決め手！100GBプラン</>}>
            <div className="w-full md:pt-14 pt-8 md:pb-[90px] pb-16">
                <div className="px-5">
                    <div className="flex justify-center">
                        <div className="p-[3px] font-bold md:text-[32px] text-[20px] text-center bg-black [clip-path:polygon(0_2%,_100%_0,_98.5%_100%,_0_97.5%)]">
                            <div className="bg-white py-4 px-7 w-full h-full inset-0 flex items-center justify-center [clip-path:polygon(0_2%,_100%_0,_98.5%_100%,_0_97.5%)]">どうして100GBプランがコスパ最強なの？
                            </div>
                        </div>
                    </div>
                    <div className="text-center font-bold md:text-[32px] text-[20px] mt-6 md:mt-10">
                    単純比較は...<br />500GB：1GBあたり25円<br />100GB：1GBあたり34円
                    </div>
                </div>
                <div className="mt-[55px] md:mt-[75px]">
                    <div className="flex justify-center md:-mb-10 -mb-6 relative z-10">
                    <div className="p-[3px] font-bold md:text-[32px] text-[20px] text-center bg-black [clip-path:polygon(0_2%,_100%_0,_98.5%_100%,_0_92%)]">
                            <div className="bg-white py-4 px-7 w-full h-full inset-0 flex items-center justify-center [clip-path:polygon(0_2%,_100%_0,_98.5%_100%,_0_92%)]">でも冷静に考えてみよう！
                            </div>
                        </div>
                        </div>
                    <div className="flex flex-wrap max-md:max-w-[400px] max-md:mx-auto">
                        <div className="w-full md:w-1/2 bg-[url('/images/popular-bg-01.png')] bg-cover bg-center md:pt-16 md:pb-[75px] pt-10 pb-14 relative">
                            <div className="w-full">
                                <h5 className="text-center font-black md:text-[32px] text-[20px] leading-tight">
                                    <span className="md:text-[42px] text-[28px]">500</span>GBって <br />
                                    こんなに大容量！
                                </h5>
                                <div className="w-full max-w-[245px] mx-auto bg-white rounded-[10px] py-3.5 px-5 mt-5 space-y-3">
                                    <div className="flex gap-2.5 items-center">
                                        <figure>
                                            <img className="w-4 md:w-5" src="/images/ic-check.svg" alt="" />
                                        </figure>
                                        <p className="flex-1 md:text-[18px] text-[14px] font-medium">画像約11.3万枚</p>
                                    </div>
                                    <div className="flex gap-2.5 items-center">
                                        <figure>
                                            <img className="w-4 md:w-5" src="/images/ic-check.svg" alt="" />
                                        </figure>
                                        <p className="flex-1 md:text-[18px] text-[14px] font-medium">5分の動画約625本</p>
                                    </div>
                                    <div className="flex gap-2.5 items-center">
                                        <figure>
                                            <img className="w-4 md:w-5" src="/images/ic-check.svg" alt="" />
                                        </figure>
                                        <p className="flex-1 md:text-[18px] text-[14px] font-medium">音楽データ約11万曲</p>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <img src="/images/arrow-down.png" alt="" />
                                </div>
                                <p className="text-center font-black md:text-[24px] text-[14px]">本当に必要かな？</p>
                            </div>
                            <figure className="absolute right-[calc(50%+85px)] bottom-[88px]">
                                <img className="animate-[bounce_1s_0.5s_ease_infinite_alternate]" src="/images/deco-cloud-01.png" alt="" />
                            </figure>
                        </div>
                        <div className="w-full md:w-1/2 bg-[url('/images/popular-bg-02.png')] bg-cover bg-center md:pt-16 md:pb-[75px] pt-10 pb-14 relative">
                            <div className="w-full">
                                <h5 className="text-center font-black md:text-[32px] text-[20px] leading-tight">
                                    <span className="md:text-[42px] text-[28px]">100</span>GBなら <br />
                                    ちょうどいい！
                                </h5>
                                <div className="w-full max-w-[245px] mx-auto bg-white rounded-[10px] py-3.5 px-5 mt-5 space-y-3">
                                    <div className="flex gap-2.5 items-center">
                                        <figure>
                                            <img className="w-4 md:w-5" src="/images/ic-check.svg" alt="" />
                                        </figure>
                                        <p className="flex-1 md:text-[18px] text-[14px] font-medium">画像約2.2万枚</p>
                                    </div>
                                    <div className="flex gap-2.5 items-center">
                                        <figure>
                                            <img className="w-4 md:w-5" src="/images/ic-check.svg" alt="" />
                                        </figure>
                                        <p className="flex-1 md:text-[18px] text-[14px] font-medium">5分の動画約125本</p>
                                    </div>
                                    <div className="flex gap-2.5 items-center">
                                        <figure>
                                            <img className="w-4 md:w-5" src="/images/ic-check.svg" alt="" />
                                        </figure>
                                        <p className="flex-1 md:text-[18px] text-[14px] font-medium">音楽データ約2.5万曲</p>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <img src="/images/arrow-down.png" alt="" />
                                </div>
                                <p className="text-center font-black md:text-[24px] text-[14px]">これだけあれば十分だね！</p>
                            </div>
                            <figure className="absolute left-[calc(50%+75px)] bottom-[100px]">
                                <img className="animate-[bounce_1s_0.2s_ease_infinite_alternate]" src="/images/deco-cloud-02.png" alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="px-5">
                    <div className="w-full max-w-[602px] mx-auto mt-8 border-[3px] bg-[#F3F3F3] p-5 border-[#CACACA] rounded-[20px] [box-shadow:0px_4px_20px_0px_rgba(0,_0,_0,_0.10)]">
                        <div className="flex justify-center">
                            <p className="md:text-[24px] text-[18px] md:w-[130px] w-[110px] aspect-square bg-[url('/images/bg-point.png')] bg-cover bg-center text-center font-black flex items-center justify-center leading-none">
                                ココが<br />
                                ポイント！
                            </p>
                        </div>
                        <h5 className="font-bold md:text-[20px] text-[14px] text-center md:pb-3 pb-2 md:border-b-[3px] border-b-[2px] border-black mt-4">コスパは必要性と合わせて<br className="md:hidden" />考えるのが大事！</h5>
                        <p className="md:text-center md:text-[16px] text-[13px] leading-tight md:mt-5 mt-4">
                        それに、容量問題は100GBあれば解決できることが多いんですね。<br /><br />もし将来的に足りなくなってもそのタイミングで追加購入すればOK！<br />もちろん将来を見越して初めから500GB確保しておくのも賢い買い方です。<br /><br />あなたのデジタルライフを快適にする容量を選びましょう！
                        </p>
                    </div>
                    <div className="flex justify-center md:mt-[88px] mt-16">
                        <div className="p-[3px] font-bold md:text-[32px] text-[20px] text-center bg-black [clip-path:polygon(0_2%,_100%_0,_98.5%_100%,_0_97.5%)]">
                            <div className="bg-white py-4 px-6 md:px-10 w-full h-full inset-0 flex items-center justify-center [clip-path:polygon(0_2%,_100%_0,_98.5%_100%,_0_97.5%)]">100GBプラン<br className="md:hidden" />1日あたりコストはいくら？
                            </div>
                        </div>
                    </div>
                    <div className="md:mt-10 mt-7 md:mb-[60px] mb-16">
                        <h5 className="text-center md:text-[32px] text-[20px] font-bold">
                        100GB購入後20年使用する場合<br />1日あたりのコストは<br className="md:hidden" />なんと約0.47円！！
                        </h5>
                        <div className="flex justify-center">
                            <p className="md:text-center md:text-[16px] text-[13px] mt-3 leading-snug bg-[#F5F5F5] rounded-[10px] py-2.5 px-[30px]">
                            ※利用期間を日数で計算 (2024年1月1日から20年)<br className="max-md:hidden" />うるう年を考慮して、20年間の日数を計算<br className="max-md:hidden" />2024, 2028, 2032, 2036, 2040, 2044 はうるう年
                            </p>
                        </div>
                    </div>
                    <div className="w-full max-w-[740px] mx-auto border-t-2 border-dashed border-black relative md:pt-10 pt-[12vw]">
                        <figure className="absolute md:top-[-18%] top-[-12vw] lg:top-[-100px] left-[-20px] lg:left-[-60px] max-md:w-[40%] max-lg:w-[30%] animate-[bounce_1s_0.1s_ease_infinite_alternate]">
                            <img src="/images/bubble-save.png" alt="" />
                        </figure>
                        <h5 className="text-center md:text-[32px] text-[20px] font-bold">
                            倍の40年の場合は約0.23円！<br />60年なら約0.16円！！
                        </h5>
                        <div className="flex justify-center">
                            <p className="text-center md:text-[16px] text-[13px] mt-3 leading-snug bg-[#F5F5F5] rounded-[10px] py-2.5 px-[30px]">
                            ※20年の場合と同じ方法で計算
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-6 md:mt-8">
                            <figure className="md:mb-[-20px] mb-[-10px] relative animate-[bounce_1s_0.3s_ease_infinite_alternate] flex justify-center">
                                <img className="max-md:w-[80%]" src="/images/bubble-subscription.png" alt="サブスク" />
                            </figure>
                            <div className="flex justify-center">
                                <p className="font-bold md:text-[18px] text-[14px] text-center bg-[#FDD300] rounded-[40px] md:p-8 md:py-9 p-4">
                                    サブスクで毎月数百円でも<br className="md:hidden" />支払っているアナタ！<br />60年使えば、<br className="md:hidden" />1ヶ月5円以下で使えますよ〜！
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center gap-2.5 mt-5 w-full max-w-[496px] mx-auto">
                            <figure className="max-md:w-[30%]">
                                <img src="/images/baby.png" alt="" />
                            </figure>
                            <div className="md:text-[16px] text-[13px] font-medium flex-1 leading-snug">
                            サブスクがいかに<span className="text-[#F31558] font-bold">もったいないか</span>がわかりますね。<br /><br />ちなみに今から100年生きる長生きさんなら1日あたり約0.09円です。1ヶ月で3円以下という最高コスパな人生を送れますよ！
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrap>
    );
  }