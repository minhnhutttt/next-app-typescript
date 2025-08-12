"use client"
import { Button } from "@/components/common/Button";
import useScrollAnimations from "@/hooks/useScrollAnimations";

export default function InquiryCertification() {

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
                                <p className="md:text-[40px] text-[24px] font-bold max-md:text-center">あともう少しでご登録完了です</p>
                                <p className="md:text-[24px] text-[18px] md:mt-10 mt-7">
                                    フードバイヤーズハブのAIコンシェルジュです。<br />
                                    以降どうぞよろしくお願いします。<br />
                                    下記の基本情報登録をお願いします。<br />
                                    メーカーからのご連絡の際にご利用いたします。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:mt-[120px] pt-[60px]">
                        <div className="w-full md:max-w-[740px] max-w-[500px] mx-auto border-4 border-[#ccc] md:rounded-[60px] rounded-[30px] md:py-[100px] py-[60px] px-4">
                            <div className="w-full md:max-w-[500px] max-w-[361px] mx-auto">
                                <div className="md:text-[24px] text-[18px] font-bold md:space-y-11 space-y-8">
                                <div className="space-y-3">
                                    <div className="flex">
                                        <label htmlFor="" className="px-2 md:px-4">お名前</label>
                                        <p className="md:h-10 h-[30px] w-[60px] md:w-20 flex items-center justify-center bg-[#D43A3A] text-white md:px-4 rounded-[10px]">必須</p>
                                    </div>
                                    <div className=""><input type="text" className="w-full border-2 border-[#ccc] rounded-[10px] h-[50px] md:h-[60px] font-normal md:px-4 px-3" placeholder="山田　太郎" /></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex">
                                        <label htmlFor="" className="px-2 md:px-4">お電話番号(ハイフンなし)</label>
                                        <p className="md:h-10 h-[30px] w-[60px] md:w-20 flex items-center justify-center bg-[#D43A3A] text-white md:px-4 rounded-[10px]">必須</p>
                                    </div>
                                    <div className=""><input type="text" className="w-full border-2 border-[#ccc] rounded-[10px] h-[50px] md:h-[60px] font-normal md:px-4 px-3" placeholder="00011112222" /></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex">
                                        <label htmlFor="" className="px-2 md:px-4">会社名・屋号</label>
                                        <p className="md:h-10 h-[30px] w-[60px] md:w-20 flex items-center justify-center bg-[#D43A3A] text-white md:px-4 rounded-[10px]">必須</p>
                                    </div>
                                    <div className=""><input type="text" className="w-full border-2 border-[#ccc] rounded-[10px] h-[50px] md:h-[60px] font-normal md:px-4 px-3" placeholder="株式会社ジャポリス" /></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex">
                                        <label htmlFor="" className="px-2 md:px-4">業種・業態</label>
                                        <p className="md:h-10 h-[30px] w-[60px] md:w-20 flex items-center justify-center bg-[#D43A3A] text-white md:px-4 rounded-[10px]">必須</p>
                                    </div>
                                    <div className=""><input type="text" className="w-full border-2 border-[#ccc] rounded-[10px] h-[50px] md:h-[60px] font-normal md:px-4 px-3" placeholder="飲食業" /></div>
                                </div>
                                <div className="">
                                    <div className="px-2 md:px-4">
                                        <p>ご興味のある商品ジャンル</p>
                                        <p className="font-normal">※ご興味に基づいてご提案します</p>
                                    </div>
                                    <div className="grid md:grid-cols-4 grid-cols-3 md:gap-4 gap-2 mt-4">
                                    {["商品タグ", "商品タグ", "商品タグ", "商品タグ", "商品タグ", "商品タグ", "商品タグ", "商品タグ", "商品タグ", "商品タグ", "商品タグ", "商品タグ",].map((tag) => (
                                        <label
                                            key={tag}
                                            className="cursor-pointer"
                                        >
                                            <input
                                                type="checkbox"
                                                name="tags"
                                                value={tag}
                                                className="peer hidden"
                                            />
                                            <span className="flex items-center justify-center w-[96px] md:w-[112px] h-10 rounded-full text-center text-[16px] font-bold bg-[#EBEBEB] peer-checked:bg-[#3E7976] peer-checked:text-white  duration-300 hover:opacity-70
                                        ">
                                                {tag}
                                            </span>
                                        </label>
                                    ))}
                                    </div>
                                </div>
                                </div>
                                <div className="flex items-center justify-center mt-[60px] md:mt-[100px]">
                                    <Button link="/inquiry/complete/" sm type={0}>上記内容で登録する</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
