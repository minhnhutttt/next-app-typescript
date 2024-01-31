"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
export default function Price() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div id="price" className="bg-[#EDEDED]">
      <div className="flex justify-center md:text-[50px] text-[28px] text-white text-center bg-[#184E97] font-bold p-5">
        今が最安値！｜制作費
      </div>
      <div className="w-full md:max-w-[1240px] max-w-[480px] mx-auto px-5">
        <div className="flex md:items-end justify-between">
          <div className="md:mt-20 mt-6 md:px-6 relative z-10 pb-4 md:pb-6">
            <div className="max-md:flex">
              <div ref={animateRefs} className="max-md:space-y-5 relative z-10 max-md:w-1/2">
                <div>
                  <p className="xl:text-[45px] md:text-[3.125vw] text-[24px] font-bold leading-snug">
                    初期費用
                  </p>
                  <p className="text-[#B71313] font-semibold xl:text-[157px] md:text-[10.903vw] [font-size:_clamp(24px,9vw,50px)] leading-none tracking-[-0.07em]">
                    <span className="xl:text-[101px] md:text-[7.014vw] font-hiragino">
                      ￥
                    </span>
                    50,000
                  </p>
                </div>
                <div>
                  <p className="xl:text-[45px] md:text-[3.125vw] text-[24px] font-bold leading-snug">
                    管理費用
                  </p>
                  <p className="text-[#B71313] font-semibold xl:text-[157px] md:text-[10.903vw] [font-size:_clamp(24px,9vw,50px)] leading-none tracking-[-0.07em]">
                    <span className="xl:text-[101px] md:text-[7.014vw] font-hiragino">
                      ￥
                    </span>
                    10,000
                  </p>
                </div>
              </div>
              <figure ref={animateRefs} className="ml-[-3vw] relative md:hidden">
                <img src="/images/img-price.png" alt="" />
              </figure>
            </div>
            <p ref={animateRefs} className="xl:text-[30px] md:text-[2.083vw] [font-size:_clamp(16px,3.2vw,18px)] pt-1">
              価格は全て税抜です
              <br />
              6ヶ月以上のご契約が必要です
            </p>
          </div>
          <figure ref={animateRefs} className="md:ml-[-84px] ml-[-5vw] relative max-md:hidden">
            <img src="/images/img-price.png" alt="" />
          </figure>
        </div>
        <p ref={animateRefs} className="text-center font-bold md:text-[2.431vw] xl:text-[35px] [font-size:_clamp(18px,3.4vw,20px)] pt-4 pb-9">
          アップデートに伴う機能の追加により、 将来的に販売価格が上昇します。
          <br />
          今ご契約頂ければ、ずっと現在価格でご利用頂けます。
        </p>
      </div>
      <div className="w-full md:max-w-[1240px] max-w-[480px] mx-auto px-5 mt-8 pb-[60px] md:pb-[110px] md:mt-12">
        <h5 ref={animateRefs} className="text-center md:text-[50px] text-[32px] font-bold">
          オプション料金
        </h5>
        <div ref={animateRefs} className="bg-white rounded-[20px] lg:px-[50px] px-6 py-5 md:pt-3 md:pb-8 mt-10 [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
          <div className="flex items-center justify-between border-b border-[#D9D9D9] px-2 md:px-4 pb-1 pt-3 gap-3 md:gap-5 md:pt-6">
            <p className="xl:text-[40px] md:text-[24px] font-bold break-keep [font-size:_clamp(14px,3.4vw,18px)]">
              修正（月3回まで）
            </p>
            <p className="text-[#B71313] xl:text-[36px] md:text-[22px] [font-size:_clamp(14px,4vw,20px)] font-semibold">
              ￥5,000
            </p>
          </div>
          <div className="flex items-center justify-between border-b border-[#D9D9D9] px-2 md:px-4 pb-1 pt-3 gap-3 md:gap-5 md:pt-6">
            <p className="xl:text-[40px] md:text-[24px] font-bold break-keep [font-size:_clamp(14px,3.4vw,18px)]">
              メインビジュアル、バナー作成
            </p>
            <p className="text-[#B71313] xl:text-[36px] md:text-[22px] [font-size:_clamp(14px,4vw,20px)] font-semibold">
              ￥5,000
            </p>
          </div>
          <div className="flex items-center justify-between border-b border-[#D9D9D9] px-2 md:px-4 pb-1 pt-3 gap-3 md:gap-5 md:pt-6">
            <p className="xl:text-[40px] md:text-[24px] font-bold break-keep [font-size:_clamp(14px,3.4vw,18px)]">
              広告リンク削除
            </p>
            <p className="text-[#B71313] xl:text-[36px] md:text-[22px] [font-size:_clamp(14px,4vw,20px)] font-semibold">
              ￥5,000/月
            </p>
          </div>
          <div className="flex items-center justify-between border-b border-[#D9D9D9] px-2 md:px-4 pb-1 pt-3 gap-3 md:gap-5 md:pt-6">
            <p className="xl:text-[40px] md:text-[24px] font-bold break-keep [font-size:_clamp(14px,3.4vw,18px)]">
              ページ追加
            </p>
            <p className="text-[#B71313] xl:text-[36px] md:text-[22px] [font-size:_clamp(14px,4vw,20px)] font-semibold">
              ￥20,000
            </p>
          </div>
          <div className="flex items-center justify-between border-b border-[#D9D9D9] px-2 md:px-4 pb-1 pt-3 gap-3 md:gap-5 md:pt-6">
            <p className="xl:text-[40px] md:text-[24px] font-bold break-keep [font-size:_clamp(14px,3.4vw,18px)]">
              動画作成付き初期プラン S <br className="md:hidden" />
              <span className="xl:text-[28px] [font-size:_clamp(12px,2.5vw,16px)]">
                （撮影済みデータを編集 ）
              </span>
            </p>
            <p className="text-[#B71313] xl:text-[36px] md:text-[22px] [font-size:_clamp(14px,4vw,20px)] font-semibold">
              ￥80,000~
            </p>
          </div>
          <div className="flex items-center justify-between border-b border-[#D9D9D9] px-2 md:px-4 pb-1 pt-3 gap-3 md:gap-5 md:pt-6">
            <p className="xl:text-[40px] md:text-[24px] font-bold break-keep [font-size:_clamp(14px,3.4vw,18px)]">
              動画作成付き初期プラン L <br className="md:hidden" />
              <span className="xl:text-[28px] [font-size:_clamp(12px,2.5vw,16px)]">
                （ プロによる撮影・編集 ）
              </span>
            </p>
            <p className="text-[#B71313] xl:text-[36px] md:text-[22px] [font-size:_clamp(14px,4vw,20px)] font-semibold">
              ￥100,000~
            </p>
          </div>
          <div className="flex items-center justify-between border-b border-[#D9D9D9] px-2 md:px-4 pb-1 pt-3 gap-3 md:gap-5 md:pt-6">
            <p className="xl:text-[40px] md:text-[24px] font-bold break-keep [font-size:_clamp(14px,3.4vw,18px)]">
              求人特化 LP プラン
            </p>
            <p className="text-[#B71313] xl:text-[36px] md:text-[22px] [font-size:_clamp(14px,4vw,20px)] font-semibold">
              ￥100,000~
            </p>
          </div>
          <div className="flex items-center justify-between border-b border-[#D9D9D9] px-2 md:px-4 pb-1 pt-3 gap-3 md:gap-5 md:pt-6">
            <p className="xl:text-[40px] md:text-[24px] font-bold break-keep [font-size:_clamp(14px,3.4vw,18px)]">
              広告運用・SEO 対策
            </p>
            <p className="text-[#B71313] xl:text-[36px] md:text-[22px] [font-size:_clamp(14px,4vw,20px)] font-semibold">
              ￥50,000~
            </p>
          </div>
          <p className="font-bold xl:text-[24px] md:text-[18px] text-[14px] mt-6 md:mt-10">
            ※お客様のご要望に合わせて対応させていただきますので、
            <br />
            お気軽にお問い合わせください。
          </p>
        </div>
      </div>
    </div>
  );
}
