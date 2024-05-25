"use client";

import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Articles = [
    {
      title: "重要な書類を自社でNFTに",
      image: "/assets/images/no1.png",
      text: (
        <>
          真正性が高い証明書や認定証、重要書類を第三者機関に依頼せずに発行できるので、時間もコスト削減できます。
        </>
      ),
    },
    {
      title: "管理が簡単なのに堅牢なセキュリティ",
      image: "/assets/images/no2.png",
      text: (
        <>管理も簡単で紛失するリスクもありません。NFT技術の堅牢なセキュリティで重要書類も安全に管理できます。</>
      ),
    },
    {
      title: "瞬時のアクセスと検証",
      image: "/assets/images/no3.png",
      text: (
        <>
          スマホからいつでも確認でき、NFTデータにある発行元を確認するだけで簡単に本物の書類と確認ができるので、偽造や詐欺のリスクを大幅に減少させることが可能です。
        </>
      ),
    },
    {
      title: "災害による被害から書類を守る",
      image: "/assets/images/no4.png",
      text: <>書類が破損した、PCが壊れた、管理していたサービスが終了してしまった。などのトラブルはデジタルドキュメントが全て解決！</>,
    },
    {
        title: "グローバルな取引を容易に",
        image: "/assets/images/no5.png",
        text: <>NFTはグローバルな環境でも交換や取引が可能であり、国境を越えた書類の管理や利用がスピーディーで容易になります。</>,
      },
  ];

const Solution = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="md:mt-[155px] mt-[12vw] px-5">
      <div className="w-full max-w-[1380px] mx-auto">
        <Title sub="Solution"></Title>
        <div className="fade-up w-full max-w-[876px] mx-auto md:mt-5 mt-3">
            <div className="flex justify-center md:gap-[30px] gap-5">
                <figure>
                    <img className="max-md:w-[16vw]" src="/assets/images/img-solution-ttl.png" alt="" />
                </figure>
                <h4 className="md:text-[48px] text-[5.2vw] font-semibold flex-1">デジタルドキュメント生産ロボが問題を解決！！</h4>
            </div>
            <div className="md:mt-4 mt-2">
                <img src="/assets/images/img-solution-line.png" alt="" />
            </div>
        </div>
        <div className="mt-[10px] md:pt-20 pt-10 bg-white rounded-[40px]">
            <div className="fade-up flex justify-center">
                <h5 className="text-center md:text-[32px] text-[4.4vw] font-semibold border-b-2 border-[#0D0A8E]">デジタルドキュメント（NFT）とは？</h5>
            </div>
            <div className="grid md:grid-cols-2 md:gap-10 gap-8 px-5 md:px-[30px] md:mt-20 mt-12">
                <div className="fade-up">
                    <figure>
                        <img className="[box-shadow:0px_0px_60px_0px_rgba(0,_0,_0,_0.10)] rounded-[10px]" src="/assets/images/img-solution-01.png" alt="デジタルドキュメントをNFT化！" />
                    </figure>
                    <div className="px-3 md:px-5">
                        <h5 className="md:text-[24px] text-[16px] text-center font-semibold md:py-8 py-5">デジタルドキュメントをNFT化！</h5>
                        <div className="w-full max-w-[533px] mx-auto">
                            <p className="md:text-[16px] text-[13px] leading-[1.85]">
                            重要な書類や文書をブロックチェーン技術を活用してデジタル化（NFT化）し、保管する仕組みです。暗号化されたドキュメントは所有者以外、誰からも確認できないNFTになります。これにより、書類の秘匿性と真正性、安全性が保証され、管理や取引が効率化されます。
                            </p>
                        </div>
                    </div>
                </div>
                <div className="fade-up">
                    <figure>
                        <img className="[box-shadow:0px_0px_60px_0px_rgba(0,_0,_0,_0.10)] rounded-[10px]" src="/assets/images/img-solution-02.png" alt="真正性の証明はなぜできる？" />
                    </figure>
                    <div className="px-3 md:px-5">
                        <h5 className="md:text-[24px] text-[16px] text-center font-semibold md:py-8 py-5">真正性の証明はなぜできる？</h5>
                        <div className="w-full max-w-[533px] mx-auto">
                            <p className="md:text-[16px] text-[13px] leading-[1.85]">
                            発行されたNFTは、書類と違い編集・改ざんが不可能です。NFTの発行元を確認すると公式が発行した記載が確認可能です。もし、精巧な偽物でも発行元を確認するだけで簡単に偽物を見分けることが可能です。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:mt-[90px] mt-14 md:px-[30px] px-5">
                <p className="text-center md:text-[24px] text-[16px] font-semibold">従来の問題を解決！！</p>
                <div className="md:mt-[60px] mt-9 grid grid-cols-2 md:gap-10 gap-8">
                    <figure>
                        <img className="[box-shadow:0px_0px_60px_0px_rgba(0,_0,_0,_0.10)] rounded-[10px]" src="/assets/images/img-solution.png" alt="従来の問題を解決！！" />
                    </figure>
                    <div className="border-l-[4px] border-[#060B8E] md:pl-[30px]">
                    {Articles.map((item, index) => (
                            <div
                            className="fade-down group "
                            ref={ref}
                            key={index}
                            >
                                <div className="flex items-center gap-4">
                                    <figure>
                                        <img src={item.image} alt={item.title} />
                                    </figure>
                                    <p className="md:text-[18px] text-[15px] font-semibold">{item.title}</p>
                                </div>
                                <p className="md:mt-2.5 mt-1.5 md:text-[16px] text-[14px]">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
