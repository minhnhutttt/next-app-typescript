'use client';
import { Button } from '@/components/ui/Button';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import useScrollAnimations from '@/hooks/useScrollAnimations';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const ProcessItem = ({ ic, title, text }: { ic: string; title: string; text: string }) => (
  <div className="u-gradient-02 relative aspect-[355/360] w-full">
    <div className="flex h-full flex-col items-center justify-center px-2">
      <div className="mb-3 flex h-[100px] items-center md:h-[130px]">
        <img src={ic} alt="" className="max-md:max-w-[100px]" />
      </div>
      <h4 className="mb-2 text-center text-[24px] font-bold tracking-tight md:text-[34px]">
        {title}
      </h4>
      <p className="text-center text-[18px] font-bold md:text-[24px]">{text}</p>
    </div>
  </div>
);

export default function Product() {
  const ref = useScrollAnimations();
  const productContainerRef = useRef<HTMLDivElement>(null);

  useInfiniteScroll();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.horizontal-section',
            start: 'top +=150%',
            end: 'bottom 150%',
            scrub: 1,
            invalidateOnRefresh: true,
          },
        })
        .to('.js-card-inner-01', {
          scale: 0.666667,
          x: 0,
          top: '100vh',
          left: '-32.633vw',
        })
        .to(
          '.js-card-inner-02',
          {
            scale: 0.666667,
            top: '100vh',
            left: '0',
          },
          '<',
        )
        .to(
          '.js-card-inner-03',
          {
            scale: 0.666667,
            x: 0,
            top: '100vh',
            left: '32.633vw',
          },
          '<',
        )
        .to(
          '.js-card-inner-04',
          {
            scale: 0.666667,
            x: 0,
            top: 'calc(100vh + 33vw)',
            left: '-32.633vw',
          },
          '<',
        )
        .to(
          '.js-card-inner-05',
          {
            scale: 0.666667,
            top: 'calc(100vh + 33vw)',
            left: '0',
          },
          '<',
        )
        .to(
          '.js-card-inner-06',
          {
            scale: 0.666667,
            x: 0,
            top: 'calc(100vh + 33vw)',
            left: '32.633vw',
          },
          '<',
        );

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <main ref={ref} className="">
      <div className="pt-15 md:pt-20">
        <div className="overflow-hidden">
          <h3
            data-infinite-scroll="4:10s"
            className="font-arimo u-text-gradient-01 flex w-max text-[100px] font-bold whitespace-nowrap italic md:text-[250px]"
          >
            <span className="shrink-0">product／</span>
          </h3>
        </div>
        <section className="px-5 pt-16 md:pt-24">
          <div className="mx-auto w-full max-w-[480px] md:max-w-[1250px]">
            <div>
              <p className="fade-up text-right text-[20px] font-thin md:text-[32px]">
                {`<`} <span className="font-bold">Product</span> {`>`}
              </p>
              <h3 className="fade-up mt-3 text-center text-[33px] leading-[1.3] font-black md:mt-4 md:text-[80px] lg:text-[105px]">
                AIによる自動化
                <br />
                <span className="font-thin">+</span>成約フィードバック
                <br />
                で加速する成長
              </h3>
              <p className="fade-up mt-3 text-center text-[20px] font-semibold md:mt-6 md:text-[40px]">
                SEIKAIが全事業者の悩みを解消
              </p>
              <div className="mt-6 flex justify-between gap-10 max-lg:flex-col md:mt-32 md:gap-15 lg:gap-5">
                <div className="space-y-10 md:space-y-15 lg:w-[280px] lg:space-y-30">
                  <div className="fade-up space-y-3 md:space-y-5">
                    <p className="fade-up text-[20px] font-bold md:text-[40px]">
                      AIによる
                      <br className="max-md:hidden" />
                      完全自動運用
                    </p>
                    <p className="fade-up text-[16px] font-medium md:text-[24px]">
                      Google Ads
                      の設定、入札調整、キーワード選定、広告文作成、予算配分、すべてをAIが自動で実行。あなたは何もする必要がありません。専門知識も、運用時間も不要。
                    </p>
                  </div>
                  <div className="fade-up space-y-3 md:space-y-5">
                    <p className="fade-up text-[20px] font-bold md:text-[40px]">
                      LP更新で
                      <br className="max-md:hidden" />
                      市場変化にも
                      <br className="max-md:hidden" />
                      即座に対応
                    </p>
                    <p className="fade-up text-[16px] font-medium md:text-[24px]">
                      競合の動き、季節変動、トレンドの変化など、あなたが察知した市場の変化をLPに反映しましょう。そのURLをSEIKAIに送信するだけで広告を自動最適化。
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-10 max-lg:order-3 md:gap-22">
                  <div className="fade-up flex w-full gap-2 lg:mx-auto lg:max-w-[380px] lg:flex-col">
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
                  <div className="fade-up flex justify-center">
                    <Button link="/">無料相談で詳しく聞く</Button>
                  </div>
                </div>
                <div className="space-y-10 md:space-y-15 lg:w-[280px] lg:space-y-30">
                  <div className="fade-up space-y-3 md:space-y-5">
                    <p className="fade-up text-[20px] font-bold md:text-[40px]">
                      成約報告で
                      <br className="max-md:hidden" />
                      加速する最適化
                    </p>
                    <p className="fade-up text-[16px] font-medium tracking-tighter md:text-[24px]">
                      時間があるときに成約情報を報告してください。AIの学習を劇的に加速させ、クリックする人ではなく買う人を見つける精度が向上します。報告すればするほど広告効果が改善されます。
                    </p>
                  </div>
                  <div className="fade-up space-y-3 md:space-y-5">
                    <p className="fade-up text-[20px] font-bold md:text-[40px]">
                      Human + <br className="max-md:hidden" />
                      AI協働モデル
                      <br className="max-md:hidden" />
                      の真価
                    </p>
                    <p className="fade-up text-[16px] font-medium tracking-tighter md:text-[24px]">
                      環境の変化を読み取るのは人間の得意分野。複雑な広告調整はAIが瞬時に実行。把握はHuman、実行はAIの理想的な協働を実現。これが次世代のAI活用モデルとして真価を発揮します。
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
              <p className="fade-up text-left text-[20px] font-thin md:text-[32px]">
                {`<`} <span className="font-bold">Platforms</span> {`>`}
              </p>
              <div className="mt-3 text-right text-[33px] leading-[1.2] font-black tracking-tighter md:mt-4 md:text-[80px] lg:text-[105px]">
                <div className="vm-animation animation-ltr">
                  <p className="vm-animation-inner">主要広告プラット</p>
                </div>
                <div className="vm-animation animation-ltr delay-1">
                  <p className="vm-animation-inner">フォームに順次対応</p>
                </div>
              </div>
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
                    <div className="fade-up space-y-3 md:space-y-5" key={index}>
                      <p className="text-[20px] font-bold md:text-[40px]">{item.title}</p>
                      <p className="text-[16px] font-medium tracking-tighter md:text-[24px]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="fade-up mt-12 flex md:mt-24">
                  <Button link="/">今すぐGoogle Adsで始める</Button>
                </div>
              </div>
              <div className="fade-up">
                <img src="/assets/images/product-platforms.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="mt-30 px-5 md:mt-60">
          <div className="mx-auto w-full max-w-[1250px]">
            <div className="">
              <p className="fade-up text-center text-[20px] font-thin md:text-[32px]">
                {`<`} <span className="font-bold">features</span> {`>`}
              </p>
              <div className="fade-up mt-7 text-center text-[32px] leading-[1.3] font-black md:mt-11 md:text-[80px] lg:text-[105px]">
                <div className="vm-animation animation-ltr">
                  <p className="vm-animation-inner">SEIKAIが</p>
                </div>
                <div className="vm-animation animation-ltr delay-1">
                  <p className="vm-animation-inner">選ばれる理由</p>
                </div>
              </div>
              <div className="mx-auto mt-10 w-full max-w-[600px] space-y-6 md:mt-16 md:space-y-10">
                {[
                  {
                    title: '完全自動化で手間ゼロ',
                    text: '初期設定はたった5分。あとはAIが24時間365日、休むことなく最適化を続けます。広告運用の知識も時間も不要です。',
                  },
                  {
                    title: '市場変化への機敏な対応力',
                    text: '変化をLPに反映してURLを送信するだけで、広告戦略も自動的にアップデート。市場の最前線にいる事業者の判断を、即座に広告運用に反映できます。',
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
                  <div className="fade-up space-y-3 md:space-y-5" key={index}>
                    <p className="text-[26px] font-bold md:text-[40px]">{item.title}</p>
                    <p className="text-[16px] font-medium md:text-[24px]">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="fade-up mt-12 flex justify-center md:mt-18">
                <Button link="/">料金・導入の流れを確認</Button>
              </div>
            </div>
            <div className="mt-40 md:mt-70">
              <div className="fade-up flex justify-between">
                <div className="vm-animation animation-ltr mt-3 text-left text-[33px] leading-[1.2] font-black tracking-tighter delay-1 md:mt-4 md:text-[80px] lg:text-[105px]">
                  <h3 className="vm-animation-inner">導入企業様の声</h3>
                </div>
                <p className="text-left text-[20px] font-thin md:text-[32px]">
                  {`<`} <span className="font-bold">cases</span> {`>`}
                </p>
              </div>
              <div className="mt-10 grid gap-6 md:mt-17 md:grid-cols-2 md:gap-x-10 md:gap-y-[75px]">
                {[
                  {
                    title: '地域密着型サービス業',
                    text: '「広告のことは全くわからないので、完全自動化は本当に助かります。たまに成約報告をするだけで、予約数が2倍に。こんなに簡単でいいの？と驚いています。」',
                  },
                  {
                    title: '地域密着型飲食店',
                    text: '「競合店の動きや地域イベントに合わせてLPを更新。SEIKAIがその変更を読み取って広告を調整してくれるので、地域の状況に合った集客ができています。」',
                  },
                  {
                    title: 'アパレルEC',
                    text: '「トレンドの変化が激しい業界ですが、新商品追加や季節キャンペーンをLPに反映してURLを送るだけで、SEIKAIが広告を最適化。市場の変化に乗り遅れることがなくなりました。」',
                  },
                  {
                    title: 'BtoB企業（IT）',
                    text: '「最初は完全お任せでスタート。2週間後から成約報告を始めたら、リード品質が劇的に向上。手間はほぼゼロなのに、CPAが60%も改善しました。」',
                  },
                ].map((item, index) => (
                  <div className="fade-up space-y-3 md:space-y-5" key={index}>
                    <p className="text-[20px] font-thin md:text-[32px]">
                      {`<`} <span className="font-bold">{item.title}</span> {`>`}
                    </p>
                    <p className="text-[16px] font-medium md:text-[24px]">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="fade-up mt-12 flex justify-center md:mt-18">
                <Button link="/" className="max-md:text-[22px]">
                  あなたも始めてみませんか？
                </Button>
              </div>
            </div>
            <div className="mt-40 md:mt-50">
              <div className="flex justify-between max-md:flex-col-reverse">
                <div className="fade-up mt-3 text-left text-[33px] leading-[1.2] font-black tracking-tighter md:mt-4 md:text-[60px] xl:text-[105px]">
                  <div className="vm-animation animation-ltr">
                    <p className="vm-animation-inner">シンプルな料金設定。</p>
                  </div>
                  <div className="vm-animation animation-ltr delay-1">
                    <p className="vm-animation-inner">事業者のことを考えた</p>
                  </div>
                  <div className="vm-animation animation-ltr delay-2">
                    <p className="vm-animation-inner">完全後払い。</p>
                  </div>
                </div>
                <p className="fade-up text-right text-[20px] font-thin md:text-[32px]">
                  {`<`} <span className="font-bold">pricing</span> {`>`}
                </p>
              </div>
              <div className="fade-up mt-10 grid grid-cols-2 gap-10 md:mt-17 md:gap-x-[144px]">
                {[
                  {
                    text: (
                      <>
                        月間広告費用の9%だけ。
                        <br />
                        完全後払いだから気軽に運用。
                      </>
                    ),
                  },
                  {
                    text: (
                      <>
                        初期費用なし。
                        <br />
                        固定費なし。
                        <br />
                        最低利用期間もなし。
                      </>
                    ),
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <p className="text-[20px] font-bold md:text-[38px]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mt-40 mb-24 md:mt-50 md:mb-[160px]">
          <p className="fade-up text-center text-[32px] font-black md:text-[64px]">導入の流れ</p>
          <div ref={productContainerRef} className="explore relative mt-10 flex w-full flex-col">
            <div className="relative w-full">
              <div className="flex w-full flex-col items-center justify-center px-[4vw] md:gap-[40vw] md:px-[2vw]">
                <div className="trigger-01 card js-card pointer-events-none mb-[5vw] flex w-full items-start justify-center md:sticky md:top-0 md:mb-0 md:h-screen">
                  <div className="relative w-full md:max-w-[45vw]">
                    <div className="pt-[106.5%]"></div>
                    <div className="js-card-inner-01 scale-sp absolute top-[0] left-[0] z-[3] flex h-full w-full origin-top items-center justify-center overflow-hidden bg-white max-md:!top-0 max-md:!left-0">
                      <ProcessItem
                        ic="/assets/images/process-01.svg"
                        title="無料相談"
                        text="メールにてお問い合わせ"
                      />
                    </div>
                  </div>
                </div>
                <div className="trigger-02 card js-card pointer-events-none mb-[5vw] flex w-full items-start justify-center md:sticky md:top-0 md:mb-0 md:h-screen">
                  <div className="relative w-full md:max-w-[45vw]">
                    <div className="pt-[106.5%]"></div>
                    <div className="js-card-inner-02 scale-sp absolute top-[0] left-[0] z-[3] flex h-full w-full origin-top items-center justify-center overflow-hidden bg-white max-md:!top-0 max-md:!left-0">
                      <ProcessItem
                        ic="/assets/images/process-02.svg"
                        title="アカウント連携"
                        text="5分で完了"
                      />
                    </div>
                  </div>
                </div>
                <div className="trigger-03 card js-card pointer-events-none mb-[5vw] flex w-full items-start justify-center md:sticky md:top-0 md:mb-0 md:h-screen">
                  <div className="relative w-full md:max-w-[45vw]">
                    <div className="pt-[106.5%]"></div>
                    <div className="js-card-inner-03 scale-sp absolute top-[0] left-[0] z-[3] flex h-full w-full origin-top items-center justify-center overflow-hidden bg-white max-md:!top-0 max-md:!left-0">
                      <ProcessItem
                        ic="/assets/images/process-03.svg"
                        title="LP登録・初回スキャン"
                        text="URLを送信"
                      />
                    </div>
                  </div>
                </div>
                <div className="trigger-04 card js-card pointer-events-none mb-[5vw] flex w-full items-start justify-center md:sticky md:top-0 md:mb-0 md:h-screen">
                  <div className="relative w-full md:max-w-[45vw]">
                    <div className="pt-[106.5%]"></div>
                    <div className="js-card-inner-04 scale-sp absolute top-[0] left-[0] z-[3] flex h-full w-full origin-top items-center justify-center overflow-hidden bg-white max-md:!top-0 max-md:!left-0">
                      <ProcessItem
                        ic="/assets/images/process-04.svg"
                        title="AI自動設定"
                        text="完了後は即Googleの審査へ"
                      />
                    </div>
                  </div>
                </div>
                <div className="trigger-05 card js-card pointer-events-none mb-[5vw] flex w-full items-start justify-center md:sticky md:top-0 md:mb-0 md:h-screen">
                  <div className="relative w-full md:max-w-[45vw]">
                    <div className="pt-[106.5%]"></div>
                    <div className="js-card-inner-05 scale-sp absolute top-[0] left-[0] z-[3] flex h-full w-full origin-top items-center justify-center overflow-hidden bg-white max-md:!top-0 max-md:!left-0">
                      <ProcessItem
                        ic="/assets/images/process-05.svg"
                        title="運用スタート"
                        text="AIが24/365体制で働きます"
                      />
                    </div>
                  </div>
                </div>
                <div className="trigger-06 card js-card pointer-events-none mb-[5vw] flex w-full items-start justify-center md:sticky md:top-0 md:mb-0 md:h-screen">
                  <div className="relative w-full md:max-w-[45vw]">
                    <div className="pt-[106.5%]"></div>
                    <div className="js-card-inner-06 scale-sp absolute top-[0] left-[0] z-[3] flex h-full w-full origin-top items-center justify-center overflow-hidden bg-white max-md:!top-0 max-md:!left-0">
                      <div className="space-y-8 md:space-y-10">
                        <div className="fade-up">
                          <p className="-ml-5 text-[18px] font-bold tracking-tighter md:text-[24px]">
                            LPの内容が変わったらSEIKAIに通知
                          </p>
                          <ul className="mt-2 list-disc pl-5 text-[16px] font-medium md:text-[20px]">
                            <li>更新したらURLを送信するだけ</li>
                            <li>AIが内容を解析して広告を自動調整</li>
                          </ul>
                        </div>
                        <div className="fade-up">
                          <p className="-ml-5 text-[18px] font-bold tracking-tighter md:text-[24px]">
                            広告経由の成約報告で効果倍増
                          </p>
                          <ul className="mt-2 list-disc pl-5 text-[16px] font-medium md:text-[20px]">
                            <li>時間があるときに1分で報告</li>
                            <li>AIが学習して自動的に改善</li>
                            <li>報告すればするほど賢くなる</li>
                            <li>LP単位でAI広告エージェントを育成</li>
                            <li>最大効率の広告運用を実現</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="horizontal-section pointer-events-auto relative z-[3] hidden opacity-0 hover:opacity-100 md:-mt-[10vw] md:block md:py-[10vw]">
            <div className="flex flex-wrap justify-between gap-[2vw] px-[4vw] md:px-[2vw]">
              <div className="js-target-position pointer-events-auto relative aspect-[355/360] w-[30vw] overflow-hidden"></div>
              <div className="js-target-position pointer-events-auto relative aspect-[355/360] w-[30vw] overflow-hidden"></div>
              <div className="js-target-position pointer-events-auto relative aspect-[355/360] w-[30vw] overflow-hidden"></div>
              <div className="js-target-position pointer-events-auto relative aspect-[355/360] w-[30vw] overflow-hidden"></div>
              <div className="js-target-position pointer-events-auto relative aspect-[355/360] w-[30vw] overflow-hidden"></div>
              <div className="js-target-position pointer-events-auto relative aspect-[355/360] w-[30vw] overflow-hidden"></div>
            </div>
          </div>
          <div className="fade-up flex flex-wrap justify-center gap-x-10 gap-y-5 max-md:mt-10 md:gap-18">
            <Button link="#">今すぐ始める</Button>
            <Button link="#">無料相談を予約</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
