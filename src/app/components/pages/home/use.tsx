import { ReactNode } from "react";

type UseItemPropsType = {
    title: ReactNode;
    children: ReactNode;
  };
  function UseItem({ title, children }: UseItemPropsType) {
    return (
      <div className="w-[300px] md:min-h-[170px] min-h-[140px] bg-[#F7F3F3] rounded-[20px] p-5 [box-shadow:4px_4px_30px_0px_rgba(0,_0,_0,_0.25)]">
        <div className="flex justify-center items-start md:h-[60px] h-[50px]">
            <p className="md:text-[22px] text-[16px] font-bold border-b-[6px] border-[#FE4848] text-center leading-[1.1] pb-1">{title}</p>
        </div>
        <p className="md:text-[16px] text-[13px]">{children}</p>
      </div>
    );
  }

export default function Use() {
    return (
      <section className="md:mb-[160px] mb-20">
        <div className="relative px-5 bg-[#F7F7F7] md:pt-[100px] md:pb-[160px] py-[60px]">
          <div className="w-full max-w-[1360px] mx-auto">
            <div className="flex justify-center">
                <div className="bg-[#FFD900] rounded-[24px] w-full max-w-[1120px] mx-auto relative text-center md:text-[48px] text-[24px] font-medium md:px-5 p-4 md:py-8 leading-tight after:absolute after:aspect-[102/59] after:left-[55%] md:after:w-[102px] after:w-[50px] after:top-full after:bg-[url('/images/use-bubble.png')] after:bg-cover">
                次世代証明書で発行されたデジタル証明書は <br />
                <p className="flex justify-center items-center">『<span className="md:text-[68px] text-[30px] font-black"> 10,000通 </span>』を突破！<img className="max-md:w-7" src="/images/ic-like.svg" alt="" /></p>
                </div>
            </div>
            <div className="bg-[linear-gradient(90deg,_#FE4848_-2.68%,_#FF9B9B_99.85%)] md:rounded-[50px] rounded-[32px] md:mt-8 mt-6 px-5">
                <div className="relative z-10 bottom-[-58px]">
                    <h4 className="md:text-[48px] text-[28px] font-medium text-center text-white">
                    導入する組織続々！<br />どんな組織で利用されているの？
                    </h4>
                    <div className="flex flex-wrap w-full max-w-[1280px] mx-auto px-2 mt-5 md:mt-7 gap-5 justify-center">
                        <UseItem title="教育機関で">
                            学生の学びや身分をサクッとデジタル証明。卒業証明や学生証もピピッと管理
                        </UseItem>
                        <UseItem title="企業で">
                        スタッフのスキルや研修をデジタルでチェック。表彰もオンラインでバッチリ
                        </UseItem>
                        <UseItem title={<>公共施設や<br />オフィスビルで</>}>
                        NFT入館証でセキュリティ万全。なりすましや偽造入館にさようなら
                        </UseItem>
                        <UseItem title="資格認定団体で">
                        認定資格の本物証明をラクラク管理
                        </UseItem>
                        <UseItem title="専門家協会で">
                        会員や専門家ライセンスを簡単に追跡。会員の成長も一目瞭然
                        </UseItem>
                        <UseItem title="非営利法人で">
                        ボランティア活動をクリアに示せて、みんなで透明性アップ
                        </UseItem>
                        <UseItem title="公的機関や自治体で">
                        公的書類や住民サービスをいつでもどこでも
                        </UseItem>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="px-3">
          <div className="flex justify-center relative mt-6">
            <figure>
                <img className="max-md:w-[120px]" src="/images/campaign-deco.png" alt="" />
            </figure>
            <div className="absolute top-2 md:top-[16px] md:text-[28px] lg:text-[36px] text-[24px] font-medium text-center">
                <div className="flex justify-center items-center md:text-[18px] text-[14px] font-medium">
                    <figure>
                        <img className="max-md:w-3" src="/images/ic-slash-l.png" alt="" />
                    </figure>
                    <span>デジタルが苦手でも安心のサポート体制</span>
                    <figure>
                        <img className="max-md:w-3" src="/images/ic-slash-r.png" alt="" />
                    </figure>
                </div>
                <p className="md:text-[32px] text-[20px] max-md:mt-2 font-medium tracking-[0.08em]">まずは気軽にチャットで相談！</p>
            </div>
          </div>
        <div className="flex items-center justify-center overflow-hidden mt-10 md:mt-8">
            <a href="#_" className="px-6 md:px-[70px] h-[60px] md:h-[92px] flex items-center justify-center bg-[#FE4848] text-white rounded-[10px] md:text-[22px] text-[14px] font-bold tracking-widest group overflow-hidden relative">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#FF9B9B] rounded-full group-hover:w-[500px] group-hover:h-[500px]"></span>
                <p className="relative flex items-center gap-2">
                    <span>導入について相談する</span>
                    <img className="max-md:w-3" src="/images/ic-tri.svg" alt="" />
                </p>
            </a>
        </div>
        </div>
      </section>

      
    );
  }
  