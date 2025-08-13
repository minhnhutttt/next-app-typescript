"use client"
import { Button } from "@/components/common/Button";
import { InquiryGroup, InquiryHistory } from "@/components/mypage/InquiryHistory";
import { InquiryItemCardList } from "@/components/mypage/InquiryItemCardList";
import ProductList from "@/components/product/ProductList";
import { dataProducts } from "@/data";
import { dataItems } from "@/data/Items";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useState } from "react";

const inquiryData: InquiryGroup[] = [
  {
    date: "2025/07/31",
    items: [
      { product: dataProducts[0], type: "inquiry" },
      { product: dataProducts[1], type: "responses" },
    ],
  },
  {
    date: "2025/01/10",
    items: [{ product: dataProducts[1], type: "completion" }],
  },
  {
    date: "2024/12/05",
    items: [
      { product: dataProducts[2], type: "inquiry" },
      { product: dataProducts[3], type: "responses" },
    ],
  },
  {
    date: "2024/11/20",
    items: [{ product: dataProducts[4], type: "completion" }],
  },
  {
    date: "2024/12/05",
    items: [
      { product: dataProducts[2], type: "inquiry" },
      { product: dataProducts[3], type: "responses" },
    ],
  },
  {
    date: "2024/11/20",
    items: [{ product: dataProducts[4], type: "completion" }],
  },
];


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
                            {tab === 0 &&
                                <div>
                                    <p className="md:text-[40px] text-[24px] font-bold">商品問い合わせ履歴</p>
                                    <InquiryHistory data={inquiryData} />
                                </div>
                            }
                            {tab === 1 &&
                                <div>
                                    <p className="md:text-[40px] text-[24px] font-bold">最近見た商品</p>
                                    <InquiryHistory data={inquiryData} />
                                </div>
                            }
                            {tab === 2 &&
                            <div>
                                    <p className="md:text-[40px] text-[24px] font-bold">推し商品情報</p>
                                    <InquiryHistory data={inquiryData} />
                                </div>
                            }
                            {tab === 3 &&
                            <div>
                                    <p className="md:text-[40px] text-[24px] font-bold">登録情報変更</p>
                                    <InquiryHistory data={inquiryData} />
                                </div>
                            }
                        </div>
                    </div>
                    <div className="md:mt-[200px] mt-[176px]">
                        <p className="md:text-[40px] text-[24px] font-bold">最近見た商品</p>
                        <div className="md:mt-10 mt-5">
                            <InquiryItemCardList products={dataItems} />
                        </div>
                    </div>
                    <div className="md:mt-[180px] mt-[100px]">
                        <p className="md:text-[40px] text-[24px] font-bold">AIコンシェルジュの最近の推し商品</p>
                        <div className="md:mt-10 mt-5">
                            <ProductList products={dataProducts.slice(0,3)} />
                        </div>
                    </div>
                    <div className="md:mt-[180px] mt-20">
                        <div className="w-full max-w-[500px] mx-auto">
                            <p className="md:text-[40px] text-[24px] font-bold max-md:text-center">登録情報変更</p>
                            <div className="w-full md:mt-10 mt-5">
                                <div className="md:text-[24px] text-[18px] font-bold md:space-y-11 space-y-8">
                                <div className="space-y-3">
                                    <div className="flex">
                                        <label htmlFor="" className="px-2 md:px-4">メールアドレス</label>
                                    </div>
                                    <div className=""><input type="text" className="w-full border-2 border-[#ccc] rounded-[10px] h-[50px] md:h-[60px] font-normal md:px-4 px-3" placeholder="sample@example.com" /></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex">
                                        <label htmlFor="" className="px-2 md:px-4">お電話番号(ハイフンなし)</label>
                                    </div>
                                    <div className=""><input type="text" className="w-full border-2 border-[#ccc] rounded-[10px] h-[50px] md:h-[60px] font-normal md:px-4 px-3" placeholder="00011112222" /></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex">
                                        <label htmlFor="" className="px-2 md:px-4">お名前</label>
                                    </div>
                                    <div className=""><input type="text" className="w-full border-2 border-[#ccc] rounded-[10px] h-[50px] md:h-[60px] font-normal md:px-4 px-3" placeholder="山田　太郎" /></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex">
                                        <label htmlFor="" className="px-2 md:px-4">会社名・屋号</label>
                                    </div>
                                    <div className=""><input type="text" className="w-full border-2 border-[#ccc] rounded-[10px] h-[50px] md:h-[60px] font-normal md:px-4 px-3" placeholder="株式会社ジャポリス" /></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex">
                                        <label htmlFor="" className="px-2 md:px-4">会社郵便番号(ハイフンなし)</label>
                                    </div>
                                    <div className=""><input type="text" className="w-full border-2 border-[#ccc] rounded-[10px] h-[50px] md:h-[60px] font-normal md:px-4 px-3" placeholder="0001111" /></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex">
                                        <label htmlFor="" className="px-2 md:px-4">会社住所</label>
                                    </div>
                                    <div className=""><input type="text" className="w-full border-2 border-[#ccc] rounded-[10px] h-[50px] md:h-[60px] font-normal md:px-4 px-3" placeholder="東京都千代田区丸の内1-1-1" /></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex">
                                        <label htmlFor="" className="px-2 md:px-4">業種・業態</label>
                                    </div>
                                    <div className=""><input type="text" className="w-full border-2 border-[#ccc] rounded-[10px] h-[50px] md:h-[60px] font-normal md:px-4 px-3" placeholder="飲食業" /></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex">
                                        <label htmlFor="" className="px-2 md:px-4">会社ホームページ</label>
                                    </div>
                                    <div className=""><input type="text" className="w-full border-2 border-[#ccc] rounded-[10px] h-[50px] md:h-[60px] font-normal md:px-4 px-3" placeholder="https://www" /></div>
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
                                            <span className="flex items-center justify-center w-[96px] md:w-[112px] h-10 rounded-full text-center text-[16px] font-bold bg-[#EBEBEB] peer-checked:bg-[#3E7976] peer-checked:text-white
                                        ">
                                                {tag}
                                            </span>
                                        </label>
                                    ))}
                                    </div>
                                </div>
                                 <div className="space-y-3">
                                    <div className="flex">
                                        <label htmlFor="" className="px-2 md:px-4">パスワード変更</label>
                                    </div>
                                    <div className=""><input type="text" className="w-full border-2 border-[#ccc] rounded-[10px] h-[50px] md:h-[60px] font-normal md:px-4 px-3" placeholder="" /></div>
                                </div>
                                </div>
                                <div className="flex items-center justify-center mt-[60px] md:mt-[100px]">
                                    <Button link="/inquiry/complete/" sm type={0}>上記の内容で登録する</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
