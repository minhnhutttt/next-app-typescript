"use client"
import { Button } from "@/components/common/Button";
import useScrollAnimations from "@/hooks/useScrollAnimations";

export default function Inquiry() {

    const ref = useScrollAnimations()

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
                                <p className="md:text-[40px] text-[24px] font-bold max-md:text-center">下記の商品の<br className="md:hidden" />問い合わせをいたします</p>
                                <p className="md:text-[24px] text-[18px] md:mt-10 mt-7">問い合わせをするとメーカーから登録者情報あてに連絡が届きます。<br />問い合わせた商品や対応状況はマイページから確認できます。</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center max-md:flex-col-reverse items-center md:gap-11 gap-2 md:mt-20 mt-10">
                        <a href="/" className="md:text-[24px] text-[18px] font-bold">キャンセル</a>
                        <Button link="/inquiry/certification" sm type={0}>この商品の問い合わせをする</Button>
                    </div>
                    <div className="md:mt-[140px] mt-[60px] w-full md:max-w-[918px] max-w-[400px] mx-auto border-y border-[#666] divide-y divide-[#666]">
                        <div className="md:py-[60px] py-[68px] md:gap-20 gap-8 flex items-center max-md:flex-col">
                            <span className="md:max-w-[50%]"><img className="rounded-[20px]" src="/assets/images/products/product-01.png" alt="" /></span>
                            <div className="md:space-y-8 space-y-6 max-md:text-center">
                                <p className="md:text-[40px] text-[24px] font-bold">商品名</p>
                                <p className="md:text-[24px] text-[18px]">会社名</p>
                            </div>
                        </div>
                        <div className="md:py-[60px] py-[68px] md:gap-20 gap-8 flex items-center max-md:flex-col">
                            <span className="md:max-w-[50%]"><img className="rounded-[20px]" src="/assets/images/products/product-02.png" alt="" /></span>
                            <div className="md:space-y-8 space-y-6 max-md:text-center">
                                <p className="md:text-[40px] text-[24px] font-bold">商品名</p>
                                <p className="md:text-[24px] text-[18px]">会社名</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
