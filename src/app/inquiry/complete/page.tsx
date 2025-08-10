"use client"
import { Button } from "@/components/common/Button";
import useScrollAnimations from "@/hooks/useScrollAnimations";

export default function InquiryComplete() {

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
                                <p className="md:text-[40px] text-[24px] font-bold max-md:text-center">商品の問い合わせをいたしました</p>
                                <p className="md:text-[24px] text-[18px] md:mt-10 mt-7">メーカーからのご連絡をお待ちください。<br />問い合わせた商品や対応状況はマイページから確認できます。</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center max-md:flex-col-reverse items-center md:gap-11 gap-2 md:mt-20 mt-10">
                        <Button link="/mypage" sm type={2}>マイページを見る</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
