"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "../../common/sectionTitle";

export default function SectionHow() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <section className="pt-[30px] relative">
      <SectionTitle type={<span className="[font-size:_clamp(100px,21.333vw,160px)] md:text-[15.278vw] xl:text-[220px]">How</span>} title="次世代名刺の作成・受け取り方法" content="次世代名刺は「自分で作る」方法と「サポートに依頼して作る」方法があります。">
        <div className="flex max-lg:flex-wrap justify-center gap-6 xl:gap-9 pt-10 md:pt-[132px] px-6 xl:px-12">
          <div className="w-[380px] bg-white border botder-[#DBF9FF] [box-shadow:0px_4px_34px_0px_rgba(0,_0,_0,_0.10)] rounded-[20px] p-6 xl:p-10">
              <figure className="flex justify-center">
                <img src="/images/image-how-01.png" alt="自分で作る" />
              </figure>
              <h4 className="text-center text-[20px] md:text-[28px] font-medium mt-5 md:mt-9 tracking-widest min-h-[56px]">自分で作る</h4>
              <p className="text-[14px] md:text-[16px] mt-3 md:mt-6">「次世代名刺の作成・受け取りの流れ」をご確認ください。</p>
              <p className="text-center text-[18px] md:text-[20px] font-medium border-b-[3px] border-[#22ABF3] mt-3 md:mt-5 pb-2">こんな人におすすめ！</p>
              <div className="flex justify-center">
                <p className="md:text-[16px] text-[14px] py-4 leading-snug">
                  ● フォーム入力が手間ではない<br />
                  ● すぐに名刺が必要<br />
                  ● 少しの日数も待てない
                </p>
              </div>
          </div>
          <div className="w-[380px] bg-white border botder-[#DBF9FF] [box-shadow:0px_4px_34px_0px_rgba(0,_0,_0,_0.10)] rounded-[20px] p-6 xl:p-10">
              <figure className="flex justify-center">
                <img src="/images/image-how-02.png" alt="自分で作る" />
              </figure>
              <h4 className="text-center text-[20px] md:text-[28px] font-medium mt-5 md:mt-9 tracking-widest min-h-[56px] leading-tight">サポートに <br />
依頼して作る</h4>
              <p className="text-[14px] md:text-[16px] mt-3 md:mt-6">サポートLINEにて名刺に必要な情報をご確認後、1営業日以内にお届けします。</p>
              <p className="text-center text-[18px] md:text-[20px] font-medium border-b-[3px] border-[#22ABF3] mt-3 md:mt-5 pb-2">こんな人におすすめ！</p>
              <div className="flex justify-center">
                <p className="md:text-[16px] text-[14px] py-4 leading-snug">
                紙の名刺があるので全て丸投げしたい<br />少しの日数なら待てる<br />フォームの入力が面倒
                </p>
              </div>
          </div>
        </div>
      </SectionTitle>
    </section>
  );
}
