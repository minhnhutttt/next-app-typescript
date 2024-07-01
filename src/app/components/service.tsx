"use client";

const Service = () => {
  return (
    <>
      <section className="mb-[256px] max-md:mb-[82px]">
        <div className="container">
          <div className="max-w-[1200px] mx-auto text-[calc(18px_+_2vw)] text-center leading-[1.2] uppercase">
          各種調査 / 各種代行 / デジタルマーケティング / 海外人材採用支援 / ブロックチェーン解析支援 / 販売プラットフォーム出品支援
          </div>
        </div>
      </section>
      <section className="mb-[256px] max-md:mb-[82px]">
        <div className="container">
          <div className="font-anton text-[calc(24px_+_12vw)]  mb-[64px] sticky top-[3rem]">
            <h2 className="text-center uppercase leading-none" translate="no">
              our Service
            </h2>
          </div>
          <div className="flex flex-col gap-[16px]">
            <a
              className="sticky top-[10rem] block w-full p-[8%] bg-[#c9b5ab]"
              href="/research"
            >
              <div
                className="font-anton text-[calc(24px_+_2vw)] uppercase"
                translate="no"
              >
                Research
              </div>
              <div className="text-[21px] max-md:text-[18px] max-w-[600px]">
              私たちはお客様のビジネスに必要不可欠な情報の収集・分析を行い、最適なソリューションを提供します。企業分析から海外人材のバックグラウンド調査、ブロックチェーン解析など、幅広い分野に対応しています。
              </div>
            </a>
            <a
              className="sticky top-[10rem] block w-full p-[8%] bg-[#ab9247]"
              href="/agency"
            >
              <div
                className="font-anton text-[calc(24px_+_2vw)] uppercase"
                translate="no"
              >
                Agency
              </div>
              <div className="text-[21px] max-md:text-[18px] max-w-[600px]">
              私たちは代理店としての機能を持ち、Google、MetaをはじめとするWeb広告の運用代行や営業活動の代行、ECプラットフォームへの出品など、お客様の業務を代行することで、効率的かつ効果的なビジネス運営をサポートします。
              </div>
            </a>
            <a
              className="sticky top-[10rem] block w-full p-[8%] bg-[#97b0bd]"
              href="/digital-marketing"
            >
              <div
                className="font-anton text-[calc(24px_+_2vw)] uppercase"
                translate="no"
              >
                Digital marketing
              </div>
              <div className="text-[21px] max-md:text-[18px] max-w-[600px]">
              私たちはデジタル領域における様々なチャネルを活用し、お客様のビジネスの本質を論理的に捉えたプロモーション戦略を構築・実行します。
              </div>
            </a>
            <a
              className="sticky top-[10rem] block w-full p-[8%] bg-[#cbc7b7]"
              href="/research-shield-ai"
            >
              <div
                className="font-anton text-[calc(24px_+_2vw)] uppercase"
                translate="no"
              >
                Research shield+AI
              </div>
              <div className="text-[21px] max-md:text-[18px] max-w-[600px]">
              設立から9年間経験・蓄積してきた調査力を活用した新サービスです。業界を絞り、AIのパワーを加えることで、属人的なリサーチアウトプットの再現性を高めた特化型サービス「海外人材のバックグラウンド調査：Research Shield+AI」をリリースいたしました。
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
