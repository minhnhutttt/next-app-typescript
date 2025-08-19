'use client';
import { Button } from '@/components/ui/Button';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import useScrollAnimations from '@/hooks/useScrollAnimations';

export default function Product() {
  const ref = useScrollAnimations();
  useInfiniteScroll();

  return (
    <main ref={ref} className="overflow-hidden">
      <div className="pt-15 md:pt-20">
        <h3
          data-infinite-scroll="4:10s"
          className="font-arimo u-text-gradient-01 flex w-max text-[100px] font-bold whitespace-nowrap italic md:text-[250px]"
        >
          <span className="shrink-0">product／</span>
        </h3>
        <section className="px-5 pt-16 md:pt-24">
          <div className="mx-auto w-full max-w-[480px] md:max-w-[1250px]">
            <div>
              <p className="text-right text-[20px] font-thin md:text-[32px]">
                {`<`} <span className="font-bold">Product</span> {`>`}
              </p>
              <h3 className="mt-3 text-center text-[33px] leading-[1.3] font-black md:mt-4 md:text-[80px] lg:text-[105px]">
                完全自動化 <span className="font-thin">+</span> <br />
                成約フィードバックで
                <br />
                加速する成長
              </h3>
              <p className="mt-3 text-center text-[20px] font-semibold md:mt-6 md:text-[40px]">
                AIによる完全自動運用
              </p>
              <div className="mt-6 flex justify-between gap-10 max-lg:flex-col md:mt-32 md:gap-15 lg:gap-5">
                <div className="space-y-10 md:space-y-15 lg:w-[280px] lg:space-y-30">
                  <div className="space-y-3 md:space-y-5">
                    <p className="text-[20px] font-bold md:text-[40px]">
                      AIによる
                      <br className="max-md:hidden" />
                      完全自動運用
                    </p>
                    <p className="text-[16px] font-medium md:text-[24px]">
                      Google Ads
                      の設定、入札調整、キーワード選定、広告文作成、予算配分、すべてをAIが自動で実行。あなたは何もする必要がありません。専門知識も、運用時間も不要。それがSEIKAIの基本機能です。
                    </p>
                  </div>
                  <div className="space-y-3 md:space-y-5">
                    <p className="text-[20px] font-bold md:text-[40px]">
                      LP更新で
                      <br className="max-md:hidden" />
                      市場変化にも
                      <br className="max-md:hidden" />
                      即座に対応
                    </p>
                    <p className="text-[16px] font-medium md:text-[24px]">
                      競合の動き、季節変動、トレンドの変化など、あなたが察知した市場の変化をLPに反映。そのURLをSEIKAIに送信すれば、AIがページ内容をスキャン・解析し、広告も自動的に市場環境に最適化されます。「ビジネス判断は人間、実行はAI」の理想的な協働を実現。
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-10 max-lg:order-3 md:gap-22">
                  <div className="flex w-full gap-2 lg:mx-auto lg:max-w-[380px] lg:flex-col">
                    <span>
                      <img src="/assets/images/product-01.png" alt="" />
                    </span>
                    <span>
                      <img src="/assets/images/product-02.png" alt="" />
                    </span>
                    <span>
                      <img src="/assets/images/product-03.png" alt="" />
                    </span>
                  </div>
                  <div className="flex justify-center">
                    <Button link="/">無料相談で詳しく聞く</Button>
                  </div>
                </div>
                <div className="space-y-10 md:space-y-15 lg:w-[280px] lg:space-y-30">
                  <div className="space-y-3 md:space-y-5">
                    <p className="text-[20px] font-bold md:text-[40px]">
                      成約報告で
                      <br className="max-md:hidden" />
                      加速する最適化
                    </p>
                    <p className="text-[16px] font-medium tracking-tighter md:text-[24px]">
                      時間があるときに、実際の成約情報を簡単なフォームで報告（1分で完了）。
                      <br />
                      この情報がAIの学習を劇的に加速させ、「クリックする人」ではなく「買う人」を見つける精度が向上。報告すればするほど、広告効果が改善されます。
                    </p>
                  </div>
                  <div className="space-y-3 md:space-y-5">
                    <p className="text-[20px] font-bold md:text-[40px]">
                      Human + <br className="max-md:hidden" />
                      AI協働モデル
                      <br className="max-md:hidden" />
                      の真価
                    </p>
                    <p className="text-[16px] font-medium tracking-tighter md:text-[24px]">
                      外部環境の変化を読み取るのは人間の得意分野。その判断をLPに反映し、SEIKAIに伝えるだけで、複雑な広告調整はAIが瞬時に実行。市場の変化に素早く対応できる、これが次世代の広告運用です。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-40 md:mt-90">
          <div className="mx-auto w-full max-w-[1440px] max-md:px-5 md:pl-10 xl:pl-22">
            <div className="flex justify-between pr-10 max-xl:flex-col xl:pr-25">
              <p className="text-left text-[20px] font-thin md:text-[32px]">
                {`<`} <span className="font-bold">Platforms</span> {`>`}
              </p>
              <h3 className="mt-3 text-right text-[33px] leading-[1.2] font-black tracking-tighter md:mt-4 md:text-[80px] lg:text-[105px]">
                主要広告プラット
                <br />
                フォームに順次対応
              </h3>
            </div>
            <div className="mt-5 flex justify-between gap-5 max-md:flex-col-reverse md:mt-20 md:gap-10">
              <div className="md:w-[660px]">
                <div className="space-y-7 md:space-y-10">
                  {[
                    {
                      title: 'Google Ads（提供中）',
                      text: '検索広告に完全対応。すべての機能を自動最適化します。Google Adsに関連するディスプレイ広告、ショッピング広告、YouTube広告については順次拡大予定。',
                    },
                    {
                      title: 'Meta Ads（2026年春対応予定）',
                      text: 'Facebook、Instagram広告への対応を開発中。より幅広いユーザーへのリーチが可能になります。',
                    },
                    {
                      title: 'その他プラットフォーム（順次拡大）',
                      text: 'Yahoo!広告、LINE広告、TikTok広告など、主要プラットフォームへの対応を計画中。統合的な広告運用を実現します。',
                    },
                  ].map((item, index) => (
                    <div className="space-y-3 md:space-y-5" key={index}>
                      <p className="text-[20px] font-bold md:text-[40px]">{item.title}</p>
                      <p className="text-[16px] font-medium tracking-tighter md:text-[24px]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-12 flex md:mt-24">
                  <Button link="/">今すぐGoogle Adsで始める</Button>
                </div>
              </div>
              <div className="">
                <img src="/assets/images/product-platforms.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="mt-30 px-5 md:mt-60">
          <div className="mx-auto w-full max-w-[1250px]">
            <p className="text-center text-[20px] font-thin md:text-[32px]">
              {`<`} <span className="font-bold">features</span> {`>`}
            </p>
            <h3 className="mt-7 text-center text-[33px] leading-[1.3] font-black md:mt-11 md:text-[80px] lg:text-[105px]">
              SEIKAIが選ばれる理由
            </h3>
            <div className="mx-auto w-full max-w-[600px] space-y-6 md:mt-16 md:space-y-10">
              {[
                {
                  title: '完全自動化で手間ゼロ',
                  text: '初期設定はたった5分。あとはAIが24時間365日、休むことなく最適化を続けます。広告運用の知識も時間も不要です。',
                },
                {
                  title: '市場変化への機敏な対応力',
                  text: '競合が値下げした、新しいトレンドが生まれた、季節需要が変わった。そんな変化をLPに反映してURLを送信するだけで、広告戦略も自動的にアップデート。市場の最前線にいる事業者の判断を、即座に広告運用に反映できます。',
                },
                {
                  title: '成約報告でターボチャージ',
                  text: '基本は全自動。でも成約を報告すると、AIの学習が加速。まるでターボエンジンのように、改善サイクルが勢いよく回り始めます。',
                },
                {
                  title: '手数料わずか9%',
                  text: '業界最安水準の手数料率。一般的な代理店の20-30%と比較して、広告予算を最大限活用できます。',
                },
              ].map((item, index) => (
                <div className="space-y-3 md:space-y-5" key={index}>
                  <p className="text-[20px] font-bold md:text-[40px]">{item.title}</p>
                  <p className="text-[16px] font-medium md:text-[24px]">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center md:mt-18">
              <Button link="/">料金・導入の流れを確認</Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
