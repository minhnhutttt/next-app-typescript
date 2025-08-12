"use client"
import { Button } from "@/components/common/Button";
import { Title } from "@/components/common/Title";
import ProductList from "@/components/product/ProductList";
import { dataProducts, dataRank } from "@/data";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { ProductSlider } from "./components/ProductSlider";
import { Search } from "./components/Search";
import { useState } from "react";
import { NewItem } from "@/components/news/NewItem";

export default function Home() {

  const ref = useScrollAnimations()

  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const handleToggleItem = (id: string) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  return (
    <main ref={ref}>
      <section className="mt-8 md:mt-[50px] px-5">
        <div className="w-full max-w-[324px] md:max-w-[906px] mx-auto flex gap-2 md:gap-5">
          <span className="fade-up"><img className="max-md:w-[74px]" src="/assets/images/girl.png" alt="" /></span>
          <div className="fade-up">
            <div className="flex mb-2 md:mb-4">
              <div className="flex flex-col">
                <div className="flex justify-center items-center"><img className="max-md:w-[40px]" src="/assets/images/sunshine.png" alt="" /></div>
                <p className="md:text-[40px] text-[16px] font-bold leading-none">AIコンシェルジュが</p>
              </div>
            </div>
            <div className="relative md:text-[56px] text-[20px] font-bold">
              <p className="relative">あなたにぴったりの逸品を <span className="absolute max-md:w-[20px] -top-2.5 md:-top-4 right-[12%]"><img src="/assets/images/blink.png" alt="" /></span></p>
              <p >ご提案いたします！</p>
            </div>
          </div>
        </div>
      </section>
      <section className="md:mt-8 mt-5 px-5">
        <div className="max-md:mb-10 mb-12">
          <Title title="AIがおすすめする逸品" icon={<><img className="max-md:w-[42px]" src="/assets/images/ic-meal.svg" alt="" /></>} />
        </div>
        <ProductList 
          products={dataProducts} 
          showCheckbox={true}
          selectedItems={selectedItems}
          onToggleItem={handleToggleItem}
        />
        <div className="flex justify-center gap-5 md:mt-8 mt-2 flex-wrap">
          <Button link="/inquiry" type={0}>選択した商品をお問い合わせする</Button>
          <Button link="/search" type={1}>一覧を見る</Button>
        </div>
      </section>
      <section className="md:mt-56 mt-20">
        <div className="max-md:mb-4">
          <Title title="人気ランキング" icon={<><img className="max-md:w-[34px]" src="/assets/images/ic-crown.svg" alt="" /></>} />
        </div>
        <div className="flex justify-center md:mt-[56px]">
          <ProductSlider products={dataRank} rank />
        </div>
      </section>
      <section className="md:mt-40 mt-20">
        <div className="max-md:mb-4">
          <Title title="新着の逸品" icon={<><img className="max-md:w-[24px]" src="/assets/images/ic-new.svg" alt="" /></>} />
        </div>
        <div className="flex justify-center md:mt-[24px]">
          <ProductSlider products={dataRank} />
        </div>
      </section>
      <section className="px-5 md:mt-44 mt-16">
        <div className="md:space-y-[90px] space-y-5">
          <Search title="ジャンルから探す" items={['お菓子','飲料','野菜','発酵食品','米','惣菜','調味料','レトルト','お菓子','飲料','野菜','発酵食品','米','惣菜','調味料','レトルト']} />
          <Search title="エリアから探す" items={['東京都','埼玉県','千葉県','神奈川県','大阪府','京都府','北海道','福岡県','東京都','埼玉県','千葉県','神奈川県','大阪府','京都府','北海道','福岡県']} />
          <Search title="キーワードから探す" items={['チーズ','醤油','冷凍','OEM','小売用','業務用','北海道','福岡県','チーズ','醤油','冷凍','OEM','小売用','業務用','北海道','福岡県']} />
        </div>
      </section>
      <section className="md:mt-[180px] mt-20 px-5">
        <div className="w-full max-w-[1320px] mx-auto grid md:grid-cols-2 gap-5 md:gap-[30px]">
          <a href="/" className="fade-up hover:!opacity-70 duration-300"><img src="/assets/images/banner-01.png" alt="" /></a>
          <a href="/" className="fade-up hover:!opacity-70 duration-300"><img src="/assets/images/banner-02.png" alt="" /></a>
        </div>
      </section>
      <section className="px-5 md:mt-[180px] mt-20">
        <a href="/" className="w-full block hover:!opacity-70 duration-300 md:max-w-[1320px] max-w-[353px] mx-auto rounded-[20px] md:bg-[url(/assets/images/service-bg.png)] bg-[url(/assets/images/service-bg-sp.png)] bg-center bg-cover md:pt-[100px] py-[74px] md:pb-16">
          <p className="fade-up text-center md:text-[72px] text-[32px] font-bold text-[#A56061] leading-none">このサービスについて</p>
          <div className="fade-up flex justify-center max-md:items-center max-md:flex-col max-md:mt-4">
            <span><img className="max-md:w-[155px]" src="/assets/images/pc.png" alt="" /></span>
            <div className="md:text-[32px] text-[18px] md:pt-20 max-md:px-8">
              <p className="relative md:-left-28 md:max-w-[410px]">
                テキストテキストテキスト
                テキストテキストテキスト
                テキストテキストテキスト
                テキストテキストテキスト
              </p>
            </div>
          </div>
        </a>
      </section>
      <section className="px-5 md:my-[180px] my-20">
        <div className="w-full md:max-w-[1320px] max-w-[353px] mx-auto">
          <div className="md:mb-10 mb-5">
            <Title title="お知らせ" icon={<><img className="max-md:w-[24px]" src="/assets/images/ic-announce.svg" alt="" /></>} />
          </div>
          <div className="border-y border-[#666] divide-y divide-[#666]">
            {[
              {
                id: '1',
                link: '/',
                date: '2025/06/20',
                title: 'タイトルが入ります。タイトルが入ります。タイトルが入ります。'
              },
              {
                id: '2',
                link: '/',
                date: '2025/06/20',
                title: 'タイトルが入ります。タイトルが入ります。タイトルが入ります。'
              },
              {
                id: '3',
                link: '/',
                date: '2025/06/20',
                title: 'タイトルが入ります。タイトルが入ります。タイトルが入ります。'
              },
            ].map((item) => (
              <NewItem link={item.link} date={item.date} title={item.title} key={item.id} />
            ))}
          </div>
          <div className="fade-up flex justify-end">
            <a href="/news" className="md:text-[24px] text-[18px] font-bold hover:opacity-70 duration-300">more {`>>`}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
