"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Pack = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative md:mt-10 px-5">
      <div className="w-full max-w-[1257px] mx-auto">
        <div className="flex max-xl:flex-wrap justify-center gap-[35px]">
            <div className="w-[350px] md:w-[611px] bg-white rounded-[26px] border-[3px] border-[#9C37DF] overflow-hidden">
                <div className="md:h-[72px] h-[44px] flex items-center justify-center bg-[url('/assets/images/price/pack-01.png')] bg-cover">
                    <img className="max-md:h-8" src="/assets/images/price/pack-title-01.png" alt="" />
                </div>
                <div className="pt-4 px-[18px] pb-5">
                    <p className="text-center font-gothic md:text-[34px] text-[20px] font-extrabold">メタバース供養所 初期費用</p>
                    <p className="text-center font-gothic md:text-[34px] text-[20px] font-extrabold">
                    定価 <span className="md:text-[48px] text-[32px]">250,000</span> 円 <span className="md:text-[26px] text-[16px]">(税抜）</span>
                    </p>
                    <figure className="mt-3 flex justify-center items-center">
                        <img src="/assets/images/price/pack-banner-01.png" alt="" />
                    </figure>
                </div>
            </div>
            <div className="w-[350px] md:w-[611px] bg-white rounded-[26px] border-[3px] border-[#9C37DF] overflow-hidden">
            <div className="md:h-[72px] h-[44px] flex items-center justify-center bg-[url('/assets/images/price/pack-01.png')] bg-cover">
                    <img className="max-md:h-8" src="/assets/images/price/pack-title-02.png" alt="" />
                </div>
                <div className="pt-4 px-[18px] pb-5">
                    <p className="text-center font-gothic md:text-[34px] text-[20px] font-extrabold">2Dアバター制作費用
                    </p>
                    <p className="text-center font-gothic md:text-[34px] text-[20px] font-extrabold">
                    定価 <span className="md:text-[48px] text-[32px]">50,000</span> 円 <span className="md:text-[26px] text-[16px]">(税抜）</span>
                    </p>
                    <figure className="mt-3 flex justify-center items-center">
                        <img src="/assets/images/price/pack-banner-02.png" alt="" />
                    </figure>
                </div>
            </div>
        </div>
        <div className="flex flex-wrap justify-center mt-[30px] gap-x-5 gap-y-7">
            <div className="w-[350px] md:w-[405px] bg-white rounded-[26px] overflow-auto border-[3px] border-[#9C37DF]">
                <div className="bg-[#9C37DF] md:h-[58px] h-10 flex items-center justify-center">
                    <img className="max-md:h-7" src="/assets/images/price/pack-title-03.png" alt="" />
                </div>
                <div className="px-5 pt-4">
                    <p className="md:text-[24px] text-[20px] font-bold text-center">
                        メタバース内に <br />
                        配置可能な2Dアイテム
                    </p>
                    <p className="md:text-[24px] text-[20px] font-bold text-center text-[#F54A25]">
                        1アイテムプレゼント
                    </p>
                    <p className="md:text-[16px] text-[13px] font-bold text-center leading-loose">
                    ※5つのアイテムからお選びいただけます。<br />
                    (2万円相当)
                    </p>
                </div>
            </div>
            <div className="w-[350px] md:w-[405px] bg-white rounded-[26px] overflow-auto border-[3px] border-[#9C37DF]">
                <div className="bg-[#9C37DF] md:h-[58px] h-10 flex items-center justify-center">
                    <img className="max-md:h-7" src="/assets/images/price/pack-title-04.png" alt="" />
                </div>
                <div className="px-5 pt-4">
                    <p className="md:text-[24px] text-[20px] font-bold text-center">
                        メタバース内 <br />
                        専用個別スペース
                    </p>
                    <p className="md:text-[24px] text-[20px] font-bold text-center text-[#F54A25]">
                        プレミアム <br />
                        カスタマイズ権
                    </p>
                    <p className="md:text-[16px] text-[13px] font-bold text-center leading-loose">
                    (3万円相当)
                    </p>
                </div>
            </div>
            <div className="w-[350px] md:w-[405px] bg-white rounded-[26px] overflow-auto border-[3px] border-[#9C37DF]">
                <div className="bg-[#9C37DF] md:h-[58px] h-10 flex items-center justify-center">
                    <img className="max-md:h-7" src="/assets/images/price/pack-title-05.png" alt="" />
                </div>
                <div className="px-5 pt-4">
                    <p className="md:text-[24px] text-[20px] font-bold text-center">
                        AI僧侶による個別法要 <br />
                        毎月実施オプション
                    </p>
                    <p className="md:text-[24px] text-[20px] font-bold text-center text-[#F54A25]">
                        <span className="md:text-[20px] text-[16px]">先着<span className="text-black">申し込みの</span>10名様<span className="text-black">は </span></span><br />
                        個別法要費無料
                    </p>
                    <p className="md:text-[16px] text-[13px] font-bold text-center leading-loose">
                    (12ヶ月分：24万円相当)
                    </p>
                </div>
            </div>
            <div className="w-[350px] md:w-[405px] bg-white rounded-[26px] overflow-auto border-[3px] border-[#9C37DF]">
                <div className="bg-[#9C37DF] md:h-[58px] h-10 flex items-center justify-center">
                    <img className="max-md:h-7" src="/assets/images/price/pack-title-06.png" alt="" />
                </div>
                <div className="px-5 pt-4">
                    <p className="md:text-[24px] text-[20px] font-bold text-center">
                        愛するペットの <br />
                        終活応援特典
                    </p>
                    <p className="md:text-[24px] text-[20px] font-bold text-center text-[#F54A25]">
                        生前から枠確保OK！
                    </p>
                    <p className="md:text-[16px] text-[13px] font-bold text-center leading-loose">
                        ※年間費用は実際にサービスを利用するまで<br />ずっと無料！(プライスレス)
                    </p>
                </div>
            </div>
            <div className="w-[350px] md:w-[405px] bg-white rounded-[26px] overflow-auto border-[3px] border-[#9C37DF]">
                <div className="bg-[#9C37DF] md:h-[58px] h-10 flex items-center justify-center">
                    <img className="max-md:h-7" src="/assets/images/price/pack-title-07.png" alt="" />
                </div>
                <div className="px-5 pt-4">
                    <p className="md:text-[24px] text-[20px] font-bold text-center">
                        没後1年以上経過している <br />
                        あの子と再会応援特典
                    </p>
                    <p className="md:text-[24px] text-[20px] font-bold text-center text-[#F54A25]">
                    写真があればご供養可能！
                    </p>
                    <p className="md:text-[16px] text-[13px] font-bold text-center leading-loose">
                    ※昔飼っていたペットの供養希望に対応いたし<br />ました！（プライスレス）
                    </p>
                </div>
            </div>
        </div>
        <div className="mt-[74px]">
            <div className="h-[71px] bg-[#9C37DF] flex items-center justify-center">
                <div className="md:text-[39px] text-[24px] font-black text-white relative h-full flex items-center justify-center">
                    <span>特典があります！</span>
                    <figure className="absolute md:top-[-50px] top-[-30px] md:right-full right-[80%] md:w-[224px] w-[130px]">
                        <img src="/assets/images/price/bubble.png" alt="" />
                    </figure>
                </div>
            </div>
            <div className="w-full max-w-[1195px] mx-auto mt-[45px] space-y-6">
                <div className="flex md:gap-8 gap-4">
                    <span className="font-bold md:text-[39px] text-[24px] text-[#9C37DF] w-[61px] text-right">8</span>
                    <span className="md:text-[39px] text-[24px] font-bold text-[#F54A25]">
                    2体目<span className="text-black md:text-[24px] text-[18px]">以降のペットを</span>同じお墓<span className="text-black">で</span><span className="text-black md:text-[24px] text-[18px]">供養OK&費用</span>30％<span className="md:text-[24px] text-[18px]">オフ</span>
                    </span>
                </div>
                <div className="flex md:gap-8 gap-4">
                    <span className="font-bold md:text-[39px] text-[24px] text-[#9C37DF] w-[61px] text-right">9</span>
                    <span className="md:text-[39px] text-[24px] font-bold text-[#F54A25]">
                        <span className="text-black">ペットの</span>気に<span className="text-black">なる</span><span className="text-black md:text-[24px] text-[18px]">アレコレ</span>相談<span className="text-black md:text-[24px] text-[18px]">通常</span><span className="text-black">5,000円</span><span className="text-black md:text-[24px] text-[18px]">(税抜)</span><span className="text-[#9C37DF]">▶️</span>無料<span className="md:text-[24px] text-[18px]"><span className="text-black">（先着</span>10名<span className="text-black">様）</span></span>
                    </span>
                </div>
                <div className="flex md:gap-8 gap-4">
                    <span className="font-bold md:text-[39px] text-[24px] text-[#9C37DF] w-[61px] text-right">10</span>
                    <span className="md:text-[39px] text-[24px] font-bold text-[#F54A25]">
                    <span className="text-black md:text-[24px] text-[18px]">誰かに</span>話し<span className="md:text-[24px] text-[18px]">たい</span><span className="text-black md:text-[24px] text-[18px]">...</span>ペットロス相談<span className="text-black md:text-[24px] text-[18px]">通常</span><span className="text-black">5,000円</span><span className="text-black md:text-[24px] text-[18px]">(税抜)</span><span className="text-[#9C37DF]">▶️</span>無料<span className="md:text-[24px] text-[18px]"><span className="text-black">（先着</span>10名<span className="text-black">様）</span></span>
                    </span>
                </div>
                <div className="flex md:gap-8 gap-4">
                    <span className="font-bold md:text-[39px] text-[24px] text-[#9C37DF] w-[61px] text-right">11</span>
                    <span className="md:text-[39px] text-[24px] font-bold text-[#F54A25]">
                        今回<span className="text-black">のキャンペーン</span><span className="md:text-[24px] text-[18px]">だけ<span className="text-black"></span>！</span>ギフト<span className="text-black">用<span className="md:text-[24px] text-[18px]">のお申し込み</span></span>OK<span className="md:text-[24px] text-[18px] text-black">特典</span>
                    </span>
                </div>
                <div className="flex md:gap-8 gap-4">
                    <span className="font-bold md:text-[39px] text-[24px] text-[#9C37DF] w-[61px] text-right">12</span>
                    <span className="md:text-[39px] text-[24px] font-bold text-[#F54A25]">
                    海外在住ペ<span className="text-black">ットオーナー様<span className="md:text-[24px] text-[18px]">からのお申し込み</span></span>OK<span className="md:text-[24px] text-[18px] text-black">特典</span>
                    </span>
                </div>
                <div className="flex md:gap-8 gap-4">
                    <span className="font-bold md:text-[39px] text-[24px] text-[#9C37DF] w-[61px] text-right">13</span>
                    <span className="md:text-[39px] text-[24px] font-bold text-[#F54A25]">
                    事前<span className="text-black">相談<span className="md:text-[24px] text-[18px]">(対面/Web)通常</span>5,000円<span className="md:text-[24px] text-[18px]">(税抜)</span></span><span className="text-[#9C37DF]">▶️</span>無料<span className="md:text-[24px] text-[18px]"><span className="text-black">（先着</span>50名<span className="text-black">様）</span></span>
                    </span>
                </div>
                <div className="flex md:gap-8 gap-4">
                    <span className="font-bold md:text-[39px] text-[24px] text-[#9C37DF] w-[61px] text-right">14</span>
                    <span className="md:text-[39px] text-[24px] font-bold text-[#F54A25]">
                    <span className="md:text-[24px] text-[18px] text-black">希望者は</span>永代<span className="text-black">供養<span className="md:text-[24px] text-[18px] text-black">可能！</span></span>
                    </span>
                </div>
                <div className="flex md:gap-8 gap-4">
                    <span className="font-bold md:text-[39px] text-[24px] text-[#9C37DF] w-[61px] text-right">15</span>
                    <span className="md:text-[39px] text-[24px] font-bold text-[#F54A25]">
                    3D<span className="text-black">アバター<span className="md:text-[24px] text-[18px] text-black">があればメタバース空間の</span></span><span className="md:text-[24px] text-[18px]">共通エリア<span className="text-black">「おもいでの庭」に</span></span><span className="text-black">アクセス<span className="md:text-[24px] text-[18px]">可能！</span></span>
                    </span>
                </div>
                <div className="flex md:gap-8 gap-4">
                    <span className="font-bold md:text-[39px] text-[24px] text-[#9C37DF] w-[61px] text-right">16</span>
                    <span className="md:text-[39px] text-[24px] font-bold text-[#F54A25]">
                        <span className="text-black">現実の供養所</span><span className="md:text-[24px] text-[18px]">初期費用<span className="text-black">通常</span></span><span className="text-black">60,000円</span><span className="md:text-[24px] text-[18px] text-black">(税抜)</span><span className="text-[#9C37DF]">▶️</span>2万円オフ<span className="md:text-[24px] text-[18px] text-black">クーポンご進呈</span>
                    </span>
                </div>
                <div className="flex md:gap-8 gap-4">
                    <span className="font-bold md:text-[39px] text-[24px] text-[#9C37DF] w-[61px] text-right">17</span>
                    <span className="md:text-[39px] text-[24px] font-bold text-[#F54A25]">
                        <span className="text-black"><span className="md:text-[24px] text-[18px]">現実の供養所</span>来訪時の</span>狩俣空き家民泊<span className="md:text-[24px] text-[18px] text-black">利用</span><span className="text-[#9C37DF]">▶️</span>3泊<span className="md:text-[24px] text-[18px]">まで</span>半額ク<span className="text-black md:text-[24px] text-[18px]">ーポンご進呈</span>
                    </span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pack;
