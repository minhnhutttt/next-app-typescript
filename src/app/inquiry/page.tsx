"use client"
import { Button } from "@/components/common/Button";
import { InquiryItem } from "@/components/mypage/InquiryItem";
import { dataProducts } from "@/data";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useSearchParams } from "next/navigation";

export default function Inquiry() {

    const ref = useScrollAnimations()

    const searchParams = useSearchParams();
    const ids = searchParams.get("ids")?.split(",") || [];

    const selectedProducts = dataProducts.filter((p) => ids.includes(p.id));

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
                        <Button link="/inquiry/complete" sm type={0}>下記の商品をお問い合わせする</Button>
                    </div>
                    <div className="md:mt-[140px] mt-[60px] w-full md:max-w-[918px] max-w-[400px] mx-auto border-y border-[#666] divide-y divide-[#666]">
                        {selectedProducts.length > 0 ? (
                        selectedProducts.map((product) => (
                            <InquiryItem key={product.id} product={product} />
                        ))
                        ) : (
                        <p className="text-center py-5">商品が選択されていません</p>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
