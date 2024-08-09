'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'

const Pack = () => {
  const ref = useScrollAnimations()
  return (
    <section ref={ref} className="relative mt-[50px] px-5 md:mt-10">
      <div className="mx-auto w-full max-w-[1257px]">
        <div className="flex justify-center gap-[35px] max-xl:flex-wrap">
          <div className="fade-up w-[350px] overflow-hidden rounded-[26px] border-[3px] border-[#9C37DF] bg-white md:w-[611px]">
            <div className="flex h-[44px] items-center justify-center bg-[url('/assets/images/price/pack-01.png')] bg-cover md:h-[72px]">
              <img
                className="max-md:h-8"
                src="/assets/images/price/pack-title-01.png"
                alt=""
              />
            </div>
            <div className="px-[18px] pb-5 pt-4 font-serifHk">
              <p className="text-center text-[20px] font-extrabold md:text-[34px]">
                メタバース供養所 初期費用
              </p>
              <p className="text-center text-[20px] font-extrabold md:text-[34px]">
                定価 <span className="text-[32px] md:text-[48px]">265,000</span>
                円 <span className="text-[16px] md:text-[26px]">(税込）</span>
              </p>
              <figure className="mt-3 flex items-center justify-center">
                <img src="/assets/images/price/pack-banner-01.png" alt="" />
              </figure>
            </div>
          </div>
          <div className="fade-up w-[350px] overflow-hidden rounded-[26px] border-[3px] border-[#9C37DF] bg-white md:w-[611px]">
            <div className="flex h-[44px] items-center justify-center bg-[url('/assets/images/price/pack-01.png')] bg-cover md:h-[72px]">
              <img
                className="max-md:h-8"
                src="/assets/images/price/pack-title-02.png"
                alt=""
              />
            </div>
            <div className="px-[18px] pb-5 pt-4 font-serifHk">
              <p className="text-center text-[20px] font-extrabold md:text-[34px]">
                2Dアバター制作費用
              </p>
              <p className="text-center text-[20px] font-extrabold md:text-[34px]">
                定価 <span className="text-[32px] md:text-[48px]">55,000</span>
                円 <span className="text-[16px] md:text-[26px]">(税込）</span>
              </p>
              <figure className="mt-3 flex items-center justify-center">
                <img src="/assets/images/price/pack-banner-02.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
        <div className="mt-[30px] flex flex-wrap justify-center gap-x-5 gap-y-7">
          <div className="fade-up w-[350px] overflow-auto rounded-[26px] border-[3px] border-[#9C37DF] bg-white md:w-[405px]">
            <div className="flex h-10 items-center justify-center bg-[#9C37DF] md:h-[58px]">
              <img
                className="max-md:h-7"
                src="/assets/images/price/pack-title-03.png"
                alt=""
              />
            </div>
            <div className="px-5 pt-4">
              <p className="text-center text-[20px] font-bold md:text-[24px]">
                メタバース内に <br />
                配置可能な2Dアイテム
              </p>
              <p className="text-center text-[20px] font-bold text-[#F54A25] md:text-[24px]">
                1アイテムプレゼント
              </p>
              <p className="text-center text-[13px] font-bold leading-loose md:text-[16px]">
                ※5つのアイテムからお選びいただけます。
                <br />
                (2.2万円相当)
              </p>
            </div>
          </div>
          <div className="fade-up w-[350px] overflow-auto rounded-[26px] border-[3px] border-[#9C37DF] bg-white md:w-[405px]">
            <div className="flex h-10 items-center justify-center bg-[#9C37DF] md:h-[58px]">
              <img
                className="max-md:h-7"
                src="/assets/images/price/pack-title-04.png"
                alt=""
              />
            </div>
            <div className="px-5 pt-4">
              <p className="text-center text-[20px] font-bold md:text-[24px]">
                メタバース内 <br />
                専用個別スペース
              </p>
              <p className="text-center text-[20px] font-bold text-[#F54A25] md:text-[24px]">
                プレミアム <br />
                カスタマイズ権
              </p>
              <p className="text-center text-[13px] font-bold leading-loose md:text-[16px]">
              (3.3万円相当)
              </p>
            </div>
          </div>
          <div className="fade-up w-[350px] overflow-auto rounded-[26px] border-[3px] border-[#9C37DF] bg-white md:w-[405px]">
            <div className="flex h-10 items-center justify-center bg-[#9C37DF] md:h-[58px]">
              <img
                className="max-md:h-7"
                src="/assets/images/price/pack-title-05.png"
                alt=""
              />
            </div>
            <div className="px-5 pt-4">
              <p className="text-center text-[20px] font-bold md:text-[24px]">
              気持ちに寄り添う<br />供養応援特典
              </p>
              <p className="text-center text-[20px] font-bold text-[#F54A25] md:text-[24px]">
                AI僧侶<span className="text-black">による</span>個別法要<span className="text-black">を</span><br />
                <span className="text-[16px] md:text-[20px]">
                  初年度費用負担なし<span className="text-black">で</span>毎月<span className="text-black">実施！</span>
                </span>
              </p>
              <p className="text-center text-[13px] font-bold leading-loose md:text-[16px]">
              (6.6万円相当)
              </p>
            </div>
          </div>
          <div className="fade-up w-[350px] overflow-auto rounded-[26px] border-[3px] border-[#9C37DF] bg-white md:w-[405px]">
            <div className="flex h-10 items-center justify-center bg-[#9C37DF] md:h-[58px]">
              <img
                className="max-md:h-7"
                src="/assets/images/price/pack-title-06.png"
                alt=""
              />
            </div>
            <div className="px-5 pt-4">
              <p className="text-center text-[20px] font-bold md:text-[24px]">
                愛するペットの <br />
                終活応援特典
              </p>
              <p className="text-center text-[20px] font-bold text-[#F54A25] md:text-[24px]">
                生前から枠確保OK！
              </p>
              <p className="text-center text-[13px] font-bold leading-loose md:text-[16px]">
                ※年間費用は実際にサービスを利用するまで
                <br />
                ずっと無料！(プライスレス)
              </p>
            </div>
          </div>
          <div className="fade-up w-[350px] overflow-auto rounded-[26px] border-[3px] border-[#9C37DF] bg-white md:w-[405px]">
            <div className="flex h-10 items-center justify-center bg-[#9C37DF] md:h-[58px]">
              <img
                className="max-md:h-7"
                src="/assets/images/price/pack-title-07.png"
                alt=""
              />
            </div>
            <div className="px-5 pt-4">
              <p className="text-center text-[20px] font-bold md:text-[24px]">
                没後1年以上経過している <br />
                あの子と再会応援特典
              </p>
              <p className="text-center text-[20px] font-bold text-[#F54A25] md:text-[24px]">
                写真があればご供養可能！
              </p>
              <p className="text-center text-[13px] font-bold leading-loose md:text-[16px]">
                ※昔飼っていたペットの供養希望に対応いたし
                <br />
                ました！（プライスレス）
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[74px]">
          <div className="fade-up flex h-[71px] items-center justify-center bg-[#9C37DF]">
            <div className="relative flex h-full items-center justify-center text-[24px] font-black text-white md:text-[39px]">
              <span>特典があります！</span>
              <figure className="absolute right-[80%] top-[-30px] w-[130px] md:right-full md:top-[-50px] md:w-[224px]">
                <img src="/assets/images/price/bubble.png" alt="" />
              </figure>
            </div>
          </div>
          <div className="mx-auto mt-[45px] w-full max-w-[1195px] space-y-6">
            <div className="fade-up flex gap-4 md:gap-8">
              <span className="w-[30px] text-right text-[24px] font-bold text-[#9C37DF] md:text-[39px]">
                8
              </span>
              <span className="flex-1 text-[24px] font-bold text-[#F54A25] md:text-[39px]">
                2体目
                <span className="text-[18px] text-black md:text-[24px]">
                  以降のペットを
                </span>
                同じお墓<span className="text-black">で</span>
                <span className="text-[18px] text-black md:text-[24px]">
                  供養OK&費用
                </span>
                30％<span className="text-[18px] md:text-[24px]">オフ</span>
              </span>
            </div>
            <div className="fade-up flex gap-4 md:gap-8">
              <span className="w-[30px] text-right text-[24px] font-bold text-[#9C37DF] md:text-[39px]">
                9
              </span>
              <span className="flex-1 text-[24px] font-bold text-[#F54A25] md:text-[39px]">
                <span className="text-black">ペットの</span>気に
                <span className="text-black">なる</span>
                <span className="text-[18px] text-black md:text-[24px]">
                  アレコレ
                </span>
                相談
                <span className="text-[18px] text-black md:text-[24px]">
                  通常
                </span>
                <span className="text-black">5,500円</span>
                <span className="text-[18px] text-black md:text-[24px]">
                  (税抜)
                </span>
                <span className="text-[#9C37DF]">▶️</span>無料
                <span className="text-[18px] md:text-[24px]">
                  <span className="text-black">（先着</span>10名
                  <span className="text-black">様）</span>
                </span>
              </span>
            </div>
            <div className="fade-up flex gap-4 md:gap-8">
              <span className="w-[30px] text-right text-[24px] font-bold text-[#9C37DF] md:text-[39px]">
                10
              </span>
              <span className="flex-1 text-[24px] font-bold text-[#F54A25] md:text-[39px]">
                <span className="text-[18px] text-black md:text-[24px]">
                  誰かに
                </span>
                話し<span className="text-[18px] md:text-[24px]">たい</span>
                <span className="text-[18px] text-black md:text-[24px]">
                  ...
                </span>
                ペットロス相談
                <span className="text-[18px] text-black md:text-[24px]">
                  通常
                </span>
                <span className="text-black">5,500円</span>
                <span className="text-[18px] text-black md:text-[24px]">
                  (税抜)
                </span>
                <span className="text-[#9C37DF]">▶️</span>無料
                <span className="text-[18px] md:text-[24px]">
                  <span className="text-black">（先着</span>10名
                  <span className="text-black">様）</span>
                </span>
              </span>
            </div>
            <div className="fade-up flex gap-4 md:gap-8">
              <span className="w-[30px] text-right text-[24px] font-bold text-[#9C37DF] md:text-[39px]">
                11
              </span>
              <span className="flex-1 text-[24px] font-bold text-[#F54A25] md:text-[39px]">
              <span className="text-[18px] md:text-[24px] text-black">
              メタでペット供養を</span>大切なあの人<span className="text-[18px] md:text-[24px] text-black">
              へ贈りたい！</span>ギフト<span className="text-black">用</span><span className="text-[18px] md:text-[24px] text-black">
              のお申し込み</span>OK<span className="text-[18px] md:text-[24px] text-black">特典</span>
              </span>
            </div>
            <div className="fade-up flex gap-4 md:gap-8">
              <span className="w-[30px] text-right text-[24px] font-bold text-[#9C37DF] md:text-[39px]">
                12
              </span>
              <span className="flex-1 text-[24px] font-bold text-[#F54A25] md:text-[39px]">
                海外在住ペ
                <span className="text-black">
                  ットオーナー様
                  <span className="text-[18px] md:text-[24px]">
                    からのお申し込み
                  </span>
                </span>
                OK
                <span className="text-[18px] text-black md:text-[24px]">
                  特典
                </span>
              </span>
            </div>
            <div className="fade-up flex gap-4 md:gap-8">
              <span className="w-[30px] text-right text-[24px] font-bold text-[#9C37DF] md:text-[39px]">
                13
              </span>
              <span className="flex-1 text-[24px] font-bold text-[#F54A25] md:text-[39px]">
                事前
                <span className="text-black">
                  相談
                  <span className="text-[18px] md:text-[24px]">
                    (対面/Web)通常
                  </span>
                  5,500円
                  <span className="text-[18px] md:text-[24px]">(税抜)</span>
                </span>
                <span className="text-[#9C37DF]">▶️</span>無料
                <span className="text-[18px] md:text-[24px]">
                  <span className="text-black">（先着</span>50名
                  <span className="text-black">様）</span>
                </span>
              </span>
            </div>
            <div className="fade-up flex gap-4 md:gap-8">
              <span className="w-[30px] text-right text-[24px] font-bold text-[#9C37DF] md:text-[39px]">
                14
              </span>
              <span className="flex-1 text-[24px] font-bold text-[#F54A25] md:text-[39px]">
                <span className="text-[18px] text-black md:text-[24px]">
                  希望者は
                </span>
                永代
                <span className="text-black">
                  供養
                  <span className="text-[18px] text-black md:text-[24px]">
                    可能！
                  </span>
                </span>
              </span>
            </div>
            <div className="fade-up flex gap-4 md:gap-8">
              <span className="w-[30px] text-right text-[24px] font-bold text-[#9C37DF] md:text-[39px]">
                15
              </span>
              <span className="flex-1 text-[24px] font-bold text-[#F54A25] md:text-[39px]">
                3D
                <span className="text-black">
                  アバター
                  <span className="text-[18px] text-black md:text-[24px]">
                    があればメタバース空間の
                  </span>
                </span>
                <span className="text-[18px] md:text-[24px]">
                  共通エリア
                  <span className="text-black">「おもいでの庭」に</span>
                </span>
                <span className="text-black">
                  アクセス
                  <span className="text-[18px] md:text-[24px]">可能！</span>
                </span>
              </span>
            </div>
            <div className="fade-up flex gap-4 md:gap-8">
              <span className="w-[30px] text-right text-[24px] font-bold text-[#9C37DF] md:text-[39px]">
                16
              </span>
              <span className="flex-1 text-[24px] font-bold text-[#F54A25] md:text-[39px]">
                <span className="text-black">現実の供養所</span>
                <span className="text-[18px] md:text-[24px]">
                  初期費用<span className="text-black">通常</span>
                </span>
                <span className="text-black">66,000円</span>
                <span className="text-[18px] text-black md:text-[24px]">
                  (税抜)
                </span>
                <span className="text-[#9C37DF]">▶️</span>2.2万円オフ
                <span className="text-[18px] text-black md:text-[24px]">
                  クーポンご進呈
                </span>
              </span>
            </div>
            <div className="fade-up flex gap-4 md:gap-8">
              <span className="w-[30px] text-right text-[24px] font-bold text-[#9C37DF] md:text-[39px]">
                17
              </span>
              <span className="flex-1 text-[24px] font-bold text-[#F54A25] md:text-[39px]">
                <span className="text-black">
                  <span className="text-[18px] md:text-[24px]">
                    現実の供養所
                  </span>
                  来訪時の
                </span>
                狩俣空き家民泊
                <span className="text-[18px] text-black md:text-[24px]">
                  利用
                </span>
                <span className="text-[#9C37DF]">▶️</span>3泊
                <span className="text-[18px] md:text-[24px]">まで</span>半額
                <span className="text-[18px] text-black md:text-[24px]">
                  クーポンご進呈
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pack
