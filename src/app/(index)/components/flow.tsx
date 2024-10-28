"use client";
import Title from "@/components/title";

const steps = [
    {
      number: 1,
      title: "お問い合わせ",
      content:
        "まずは、お気軽にお問い合わせください。企業の福利厚生制度や従業員数に応じて、最適な導入プランをご提案するために、ヒアリングを行います。お問い合わせはLINEで承っております。",
    },
    {
      number: 2,
      title: "最適なプランのご提案",
      content:
        "お客様のニーズや状況に基づき、最適な料金プランと機能を詳しくご提案いたします。企業規模や福利厚生サービスの種類、従業員の利用シーンを考慮して、コストパフォーマンスの高いプランをご用意します。",
    },
    {
      number: 3,
      title: "ご契約",
      content:
        "プラン内容にご納得いただけましたら、ご契約へと進みます。契約手続きは簡単で、短期間で完了します。ご契約後、迅速にサービス導入に向けた準備を開始します。",
    },
    {
        number: 4,
        title: "初期設定サポート",
        content:
          "導入が決まった後、当社のサポートチームが初期設定をお手伝いします。企業ごとのカスタマイズや、従業員が使いやすい環境を整えるための設定を行います。",
      },
      {
        number: 5,
        title: "サービス利用開始",
        content:
          "すべての設定が完了し次第、福利厚生クエストのサービス利用を開始できます。従業員は年間パスポートNFTを所持し、地図上から近隣の福利厚生サービスを簡単に見つけ、利用することができます。導入後もサポートチームが運用に関するご質問やトラブル対応を継続してサポートします。",
      },
  ];

const Flow = () => {
  return (
    <section className="relative bg-cover bg-center bg-[url(/assets/images/bg-flow.jpg);] md:pt-[80px] pt-[40px]">
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <Title
          text_ja="ご利用の流れ"
          text_en="Flow of Use"
          alignment="center"
          titleColor="white"
        />
        <div className="md:mt-[77px] pt-[30px] mt-[35px] text-black rounded-lg shadow-lg max-w-[560px] mx-auto h-[529px] overflow-y-scroll max-sm:px-4 no-scrollbar">
          {steps.map((step, index) => (
            <div className="group mb-[120px] relative flow-arrow last:mb-0 bg-[rgba(255,255,255,0.9)] px-[20px] pb-[30px] pt-[40px] rounded-[20px]" key={index}>
              <div className="group-last:hidden bg-[url(/assets/images/arrow-down.png)] bg-no-repeat w-[30px] h-[53px] [background-size:30px_53px] absolute -bottom-[70px] left-2/4 -translate-x-1/2"></div>
              <div className="w-[60px] h-[60px] text-[25px] bg-white text-black rounded-full border-[#73E3DC] border-[6px] text-center absolute top-[-30px] left-1/2 -translate-x-1/2">
                {step.number}
              </div>
              <h3 className="text-center font-bold text-[20px] border-dashed border-b-2 border-[rgba(0, 0, 0, 0.20)] py-[10px] mb-[20px]">
                {step.title}
              </h3>
              <p className="md:text-[16px] text-[14px]">{step.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Flow;
