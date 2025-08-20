'use client';
import { Button } from '@/components/ui/Button';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import useScrollAnimations from '@/hooks/useScrollAnimations';

const ProcessItem = ({ ic, title, text }: { ic: string; title: string; text: string }) => (
  <div className="u-gradient-02 h-[300px] w-[320px] md:h-[355px] md:w-[360px]">
    <div className="flex h-full flex-col items-center px-2 pt-14 md:pt-20">
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
            <div className="">
              <p className="text-center text-[20px] font-thin md:text-[32px]">
                {`<`} <span className="font-bold">features</span> {`>`}
              </p>
              <h3 className="mt-7 text-center text-[32px] leading-[1.3] font-black md:mt-11 md:text-[80px] lg:text-[105px]">
                SEIKAIが選ばれる理由
              </h3>
              <div className="mx-auto mt-10 w-full max-w-[600px] space-y-6 md:mt-16 md:space-y-10">
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
                    <p className="text-[26px] font-bold md:text-[40px]">{item.title}</p>
                    <p className="text-[16px] font-medium md:text-[24px]">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex justify-center md:mt-18">
                <Button link="/">料金・導入の流れを確認</Button>
              </div>
            </div>
            <div className="mt-40 md:mt-70">
              <div className="flex justify-between">
                <h3 className="mt-3 text-left text-[33px] leading-[1.2] font-black tracking-tighter md:mt-4 md:text-[80px] lg:text-[105px]">
                  導入企業様の声
                </h3>
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
                  <div className="space-y-3 md:space-y-5" key={index}>
                    <p className="text-[20px] font-thin md:text-[32px]">
                      {`<`} <span className="font-bold">{item.title}</span> {`>`}
                    </p>
                    <p className="text-[16px] font-medium md:text-[24px]">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex justify-center md:mt-18">
                <Button link="/" className="max-md:text-[22px]">
                  あなたも始めてみませんか？
                </Button>
              </div>
            </div>
            <div className="mt-40 md:mt-50">
              <div className="flex justify-between max-md:flex-col-reverse">
                <h3 className="mt-3 text-left text-[33px] leading-[1.2] font-black tracking-tighter md:mt-4 md:text-[60px] xl:text-[105px]">
                  シンプルな料金と、
                  <br />
                  もっとシンプルな運用
                </h3>
                <p className="text-right text-[20px] font-thin md:text-[32px]">
                  {`<`} <span className="font-bold">pricing</span> {`>`}
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-10 md:mt-17 md:gap-x-[144px]">
                {[
                  {
                    text: 'シンプルな料金と、もっとシンプルな運用',
                  },
                  {
                    text: '初期費用、月額固定費なし最低利用期間なし',
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <p className="text-[20px] font-bold md:text-[38px]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-40 mb-24 md:mt-50 md:mb-[160px]">
              <p className="text-center text-[32px] font-black md:text-[64px]">導入の流れ</p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-5 max-md:flex-col md:mt-14 md:gap-x-10 md:gap-y-7 xl:gap-x-20 xl:gap-y-[51px]">
                <ProcessItem
                  ic="/assets/images/process-01.svg"
                  title="無料相談"
                  text="メールにてお問い合わせ"
                />
                <ProcessItem
                  ic="/assets/images/process-02.svg"
                  title="アカウント連携"
                  text="5分で完了"
                />
                <ProcessItem
                  ic="/assets/images/process-03.svg"
                  title="LP登録・初回スキャン"
                  text="URLを送信"
                />
                <ProcessItem
                  ic="/assets/images/process-04.svg"
                  title="AI自動設定"
                  text="24時間以内に完了"
                />
                <ProcessItem
                  ic="/assets/images/process-05.svg"
                  title="運用スタート"
                  text="完全自動"
                />
                <div className="space-y-8 md:space-y-10">
                  <div className="">
                    <p className="-ml-5 text-[18px] font-bold tracking-tighter md:text-[24px]">
                      【必要時】LP更新をSEIKAIに通知
                    </p>
                    <ul className="mt-2 list-disc pl-5 text-[16px] font-medium md:text-[20px]">
                      <li>更新したらURLを送信するだけ</li>
                      <li>AIが内容を解析して広告を自動調整</li>
                    </ul>
                  </div>
                  <div className="">
                    <p className="-ml-5 text-[18px] font-bold tracking-tighter md:text-[24px]">
                      【オプション】成約報告で効果倍増
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
              <div className="fade-up mt-20 flex flex-wrap justify-center gap-x-10 gap-y-5 md:mt-31 md:gap-18">
                <Button link="#">今すぐ始める</Button>
                <Button link="#">無料相談を予約</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
