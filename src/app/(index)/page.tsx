"use client"
import { Button } from "@/components/common/Button";
import { Title } from "@/components/common/Title";
import ProductList from "@/components/product/ProductList";
import useScrollAnimations from "@/hooks/useScrollAnimations";
export default function Home() {

  const ref = useScrollAnimations()
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
      <section className="md:mt-8 mt-5">
        <div className="max-md:mb-4">
          <Title title="AIがおすすめする逸品" icon={<><img className="max-md:w-[42px]" src="/assets/images/ic-meal.svg" alt="" /></>} />
        </div>
        <ProductList />
        <div className="flex justify-center gap-5 md:mt-8 mt-2 flex-wrap">
          <Button link="/" text="選択した商品をお問い合わせする" type={0} />
          <Button link="/" text="一覧を見る" type={1} />
        </div>
      </section>
    </main>
  );
}
