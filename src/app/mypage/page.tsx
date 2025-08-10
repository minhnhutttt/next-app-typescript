"use client"
import { InquiryItem } from "@/components/mypage/InquiryItem";
import { dataProducts } from "@/data";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useState } from "react";

export default function MyPage() {

    const ref = useScrollAnimations()
    const [tab, setTab] = useState<number>(0)

    return (
        <main ref={ref}>
            <section className="md:my-[180px] my-20 px-5">
                <div className="w-full max-w-[1320px] mx-auto">
                    <div className="flex items-center gap-[60px] md:gap-20 max-md:flex-col">
                        <div className="flex flex-col items-center justify-center gap-2 md:gap-2.5">
                            <p><img className="max-md:max-w-[120px]" src="/assets/images/girl-2.png" alt="" /></p>
                        </div>
                        <div className="flex-1 border-4 border-[#ccc] px-5 md:py-20 py-[52px] md:rounded-[60px] rounded-[30px] relative flex items-center justify-center md:before:aspect-[53/68] before:aspect-[83/43] md:before:bg-[url(/assets/images/sppech-bubble.png)] before:bg-[url(/assets/images/sppech-bubble-2-sp.png)] before:absolute max-md:before:bottom-full md:before:right-full before:w-[83px] md:before:w-[53px]">
                            <div className="w-full max-w-[750px] mx-auto">
                                <p className="md:text-[40px] text-[24px] font-bold max-md:text-center">おかえりなさいませ</p>
                                <p className="md:text-[24px] text-[18px] md:mt-10 mt-7">現在、新着のお知らせはございません。</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:mt-[120px] mt-20 max-md:max-w-[440px] max-md:mx-auto">
                        <div className="flex max-md:flex-wrap md:text-[24px] text-[18px] max-md:gap-y-4">
                            <button onClick={() => setTab(0)} className={`max-md:w-[203px] h-[72px] flex-1 py-5 flex items-center justify-center md:border-b-4 border-b-2 ${tab === 0 ? 'border-[#3E7976] font-bold' : 'border-[#ccc]'}`}>
                                <span className="h-8 px-3 max-md:whitespace-nowrap w-full flex items-center justify-center border-l border-[#666]">商品問い合わせ履歴</span>
                            </button>
                            <button onClick={() => setTab(1)} className={`max-md:w-[150px] h-[72px] flex-1 py-5 flex items-center justify-center md:border-b-4 border-b-2 ${tab === 1 ? 'border-[#3E7976] font-bold' : 'border-[#ccc]'}`}>
                                <span className="h-8 px-3 max-md:whitespace-nowrap w-full flex items-center justify-center max-md:border-x border-l border-[#666]">最近見た商品</span>
                            </button>
                            <button onClick={() => setTab(2)} className={`max-md:w-[176px] h-[72px] flex-1 py-5 flex items-center justify-center md:border-b-4 border-b-2 ${tab === 2 ? 'border-[#3E7976] font-bold' : 'border-[#ccc]'}`}>
                                <span className="h-8 px-3 max-md:whitespace-nowrap w-full flex items-center justify-center border-l border-[#666]">推し商品情報</span>
                            </button>
                            <button onClick={() => setTab(3)} className={`max-md:w-[176px] h-[72px] flex-1 py-5 flex items-center justify-center md:border-b-4 border-b-2 ${tab === 3 ? 'border-[#3E7976] font-bold' : 'border-[#ccc]'}`}>
                                <span className="h-8 px-3 max-md:whitespace-nowrap w-full flex items-center justify-center border-x border-[#666]">登録情報変更</span>
                            </button>
                        </div>
                        <div className="md:mt-[100px] mt-20">
                            <div className="">
                                <p className="md:text-[40px] text-[24px] font-bold">商品問い合わせ履歴</p>
                                <div className="">
                                    <div className="md:mt-10 mt-5">
                                        <div className="md:text-[24px] text-[18px] font-bold mb-2.5 md:mb-5">2025/07/31</div>
                                        <div className="border-y border-[#666] divide-y divide-[#666]">
                                        <InquiryItem product={dataProducts[0]} type="inquiry" />
                                        <InquiryItem product={dataProducts[1]} type="responses" />
                                        </div>
                                    </div>
                                    <div className="md:mt-10 mt-5">
                                        <div className="md:text-[24px] text-[18px] font-bold mb-2.5 md:mb-5">2025/01/10</div>
                                        <div className="border-y border-[#666] divide-y divide-[#666]">
                                        <InquiryItem product={dataProducts[1]} type="completion" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
