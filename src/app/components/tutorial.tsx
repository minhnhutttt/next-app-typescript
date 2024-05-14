"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";
import Title from "@/components/title";

export default function Tutorial() {
    const ref = useScrollAnimations();
    return (
      <section ref={ref} className="px-5 md:pt-[85px] pt-16 md:pb-[74px] pb-10">
        <div className="w-full max-w-[1293px] mx-auto bg-[url('/assets/images/tutorial-bg.png')] md:rounded-[47px] rounded-[24px] pt-7 md:pb-[97px] pb-16 md:pt-9 px-5">
          <Title>一福米の調理方法</Title>
          <div className="w-full md:max-w-[1176px] max-w-[400px] mx-auto bg-white md:py-9 p-5 md:px-[64px] md:mt-9 mt-7 grid md:grid-cols-3 lg:gap-[82px] gap-10 md:pb-20 pb-10">
            <div className="fade-up">
                <div className="font-gothicSdt font-extrabold lg:text-[32px] md:text-[22px] text-[18px]">1.開封</div>
                <figure className="md:h-[249px] flex justify-center items-center md:mt-4 mt-3">
                    <img className="max-md:max-w-[250px]" src="/assets/images/tutorial-01.png" alt="" />
                </figure>
                <div className="flex justify-center md:mt-7 mt-6">
                    <p className="font-['Inter'] md:text-[19px] text-[15px]">脱酸素剤とスプーンを取り<br />出し、袋の底を広げる</p>
                </div>
            </div>
            <div className="fade-up">
                <div className="font-gothicSdt font-extrabold lg:text-[32px] md:text-[22px] text-[18px]">2.お湯を注ぐ</div>
                <figure className="md:h-[249px] flex justify-center items-center md:mt-4 mt-3">
                    <img className="max-md:max-w-[250px]" src="/assets/images/tutorial-02.png" alt="" />
                </figure>
                <div className="flex justify-center md:mt-7 mt-6">
                    <p className="font-['Inter'] md:text-[19px] text-[15px]">袋の内側にある注水線（上220ml・下150ml）まで熱湯または水を注ぎ、よくかき混ぜる</p>
                </div>
            </div>
            <div className="fade-up">
                <div className="font-gothicSdt font-extrabold lg:text-[32px] md:text-[22px] text-[18px]">3.袋を閉めて待つ　</div>
                <figure className="md:h-[249px] flex justify-center items-center md:mt-4 mt-3">
                    <img className="max-md:max-w-[250px]" src="/assets/images/tutorial-03.png" alt="" />
                </figure>
                <div className="flex justify-center md:mt-7 mt-6 md:max-w-[250px]">
                    <p className="font-['Inter'] md:text-[19px] text-[15px]">袋のチャックを閉めて、あとは待つだけ！
   （お水で60分、お湯で15分）</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  