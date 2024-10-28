"use client";
import Title from "@/components/title";
import Button from "@/components/button";

const Plans = () => {
  const plans = [
    {
      title: "ベーシックプラン",
      price: "¥30,000",
      description: "年間パスポートNFTの作成用コンソールのご提供",
      details:
        "初期費用を抑えつつ、スムーズにサービスを開始できるため、小規模な企業や導入を検討中の企業にぴったりです。",
      bgColor: "#5DF340",
    },
    {
      title: "サポートプラン",
      price: "¥50,000",
      description: "ベーシックプラン + NFT作成サポート",
      details: (
        <>
          NFTの作成をサポートするプランです。
          <br />
          中規模企業や多くの従業員がいる企業に最適です。
        </>
      ),
      bgColor: "#F97E3C",
      popular: true,
    },
    {
      title: "フルサポートプラン",
      price: "¥100,000",
      description: "フルサポート",
      details:
        "NFT作成からお店のご紹介まで、全ての機能をフル活用できる最上位プランです。",
      bgColor: "#DF0F47",
    },
  ];

  return (
    <section className="bg-white md:ml-10 ml-5 rounded-tl-[30px] rounded-bl-[30px] md:pt-[90px] pt-[40px] md:pb-[80px] pb-[40px] max-sm:px-[20px]">
      <Title
        title="My Page Title"
        text_ja="料金プラン"
        text_en="Rate Plans"
        alignment="center"
      />
      <div className="flex justify-center items-center w-full max-w-[1220px] mx-auto md:pt-[50px] pt-[25px] md:mb-[46px] mb-[23px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
          {plans.map((plan, index) => (
            <div
              key={index}
              style={{ backgroundColor: plan.bgColor }}
              className={`text-black md:px-[20px] px-[10px] md:pt-[40px] pt-[20px] pb-[30px] md:rounded-[30px] rounded-2xl shadow-lg relative`}
            >
              {plan.popular && (
                <span className="absolute top-0 md:right-[38px] md:leading-5 leading-[14px] right-[18px] bg-[url(/assets/images/bg-no1.png);] md:w-[65px] w-[45px] md:h-[68px] h-[48px] bg-[length:100%_100%] text-black font-notoSans md:text-[18px] text-[12px] font-bold text-center md:pt-[7px] pt-[4px]">
                  人気
                  <br /> No.1
                </span>
              )}
              <h2 className="md:text-[32px] text-[24px] font-bold font-notoSans text-center mb-5">
                {plan.title}
              </h2>
              <p className="md:text-[20px] text-[18px] font-black mb-1 bg-white text-center font-notoSerif md:py-[30px] py-[15px]">
                年額{" "}
                <span className="md:text[52px] text-[28px]">{plan.price}</span>{" "}
                (税別)
              </p>
              <p className="mb-1 md:text-[18px] text-[16px] bg-white md:px-[30px] px-[15px] md:py-[20px] py-[10px] font-bold font-notoSerif flex items-center justify-center min-h-[94px]">
                {plan.description}
              </p>
              <p className="min-h-[100px] flex items-center bg-white md:text-[15px] text-[14px] md:px-[30px] px-[15px] md:py-[20px] py-[10px] font-notoSerif">
                {plan.details}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[545px] w-full relative mx-auto mb-[30px]">
        <figure className="absolute md:left-[-30px] left-[-18px] md:-top-[28%] top-[-20px] z-10">
          <img
            className="max-sm:w-1/2"
            src="/assets/images/ic-now.png"
            alt=""
          />
        </figure>
        <div className="relative box max-w-[495px] w-full border-[3px] rounded-[10px] border-[#000] mx-auto md:px-[48px] px-[26px] py-[38px]">
          <p className="md:text-[20px] text-[16px] inline bg-line-height">
            今ならベーシックプランの料金でサポートプランの利用が可能！
          </p>
        </div>
      </div>
      <Button width="320px" link="#">
        今すぐ申し込む
      </Button>
    </section>
  );
};

export default Plans;
