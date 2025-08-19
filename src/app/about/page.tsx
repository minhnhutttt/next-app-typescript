'use client';
import { Button } from '@/components/ui/Button';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import useScrollAnimations from '@/hooks/useScrollAnimations';

export default function About() {
  const ref = useScrollAnimations();
  useInfiniteScroll();
  return (
    <main ref={ref} className="overflow-hidden">
      <div className="pt-15 md:pt-20">
        <h3
          data-infinite-scroll="4:10s"
          className="font-arimo u-text-gradient-01 flex w-max text-[100px] font-bold whitespace-nowrap italic md:text-[250px]"
        >
          <span className="shrink-0">about／</span>
        </h3>
        <section className="px-5 pt-16 md:pt-24">
          <div className="mx-auto w-full max-w-[480px] md:max-w-[1250px]">
            <div>
              <p className="text-right text-[20px] font-thin md:text-[32px]">
                {`<`} <span className="font-bold">Company Profile</span> {`>`}
              </p>
              <h3 className="mt-3 text-[36px] leading-snug font-black md:mt-4 md:text-[105px]">
                会社概要
              </h3>
              <div className="mt-6 flex justify-end md:mt-19">
                <div className="w-full max-w-[920px]">
                  <p className="text-[16px] leading-[1.8] font-medium md:text-[32px]">
                    会社名：AIS Japan株式会社 <br />
                    所在地：東京都千代田区麹町3−5−2 ビュレックス205
                    <br />
                    事業内容：AIマーケティングソリューションの開発・提供
                    <br />
                    親会社：AIS Holdings Group Inc.（米国）
                  </p>
                  <div className="fade-up mt-8 flex flex-wrap gap-x-10 gap-y-5 md:mt-18 md:gap-18">
                    <Button link="#">事業内容の詳細</Button>
                    <Button link="#">SEIKAIについて</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 md:mt-57">
              <p className="text-[20px] font-thin md:text-[32px]">
                {`<`} <span className="font-bold">Corporate Message</span> {`>`}
              </p>
              <div className="mt-3 flex justify-end md:mt-6">
                <div className="w-full max-w-[920px]">
                  <h3 className="mt-3 text-[36px] leading-[1.3] font-black tracking-tighter md:mt-4 md:text-[80px] lg:text-[105px]">
                    広告運用を、
                    <br />
                    もっとシンプルに、
                    <br />
                    もっと効果的に
                  </h3>
                  <p className="mt-8 text-[17px] leading-[1.6] font-bold tracking-tighter md:mt-12 md:text-[38px]">
                    広告運用は複雑で時間がかかる作業でした。
                    <br />
                    私たちは、その常識を変えます。
                    <br />
                    AIによる完全自動化で手間をゼロに。
                    <br />
                    そして、市場の変化はLPに反映するだけで広告も追従、
                    <br />
                    実際の成果をフィードバックすることで、
                    <br />
                    さらなる成長を実現。すべての事業者が、
                    <br />
                    本業に集中しながら、変化する市場で
                    <br />
                    最高の広告成果を得られる世界を創ります。
                  </p>
                  <div className="fade-up mt-8 flex flex-wrap gap-x-10 gap-y-5 md:mt-12 md:gap-18">
                    <Button link="#">私たちのソリューション</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 md:mt-57">
              <h3 className="text-center text-[36px] leading-snug font-black tracking-tighter md:text-[105px]">
                Mission & Vision
              </h3>
              <div className="mt-10 grid gap-10 md:mt-20 md:grid-cols-2">
                <div>
                  <div className="relative text-white">
                    <img src="/assets/images/mission-img.png" alt="" />
                    <p className="ext-[20px] absolute top-7.5 left-7.5 font-thin md:text-[32px]">
                      {`<`} <span className="font-bold">Mission</span> {`>`}
                    </p>
                  </div>
                  <p className="mt-4 text-[18px] font-medium md:mt-6 md:text-[24px]">
                     AIテクノロジーを通じて、すべての事業者が公平に
                    <br className="max-md:hidden" />
                    競争できるマーケティング環境を実現する
                  </p>
                </div>
                <div>
                  <div className="relative text-white">
                    <img src="/assets/images/vision-img.png" alt="" />
                    <p className="ext-[20px] absolute top-7.5 left-7.5 font-thin md:text-[32px]">
                      {`<`} <span className="font-bold">Vision</span> {`>`}
                    </p>
                  </div>
                  <p className="mt-4 text-[18px] font-medium md:mt-6 md:text-[24px]">
                    広告運用の専門知識や高額な手数料が障壁とならない、真に民主的なデジタルマーケティングの未来
                  </p>
                </div>
              </div>
              <div className="fade-up mt-12 flex flex-wrap justify-end gap-x-10 gap-y-5 md:mt-22 md:gap-18">
                <Button link="#">ビジョンを実現するSEIKAI</Button>
              </div>
            </div>
            <div className="my-20 md:my-57">
              <p className="text-[20px] font-thin md:text-[32px]">
                {`<`} <span className="font-bold">About AIS Holdings Group</span> {`>`}
              </p>
              <div className="mt-3 flex md:mt-6">
                <div className="w-full">
                  <h3 className="mt-3 text-[36px] leading-[1.3] font-black tracking-tighter md:mt-4 md:text-[80px] lg:text-[105px]">
                    グローバルな視点、
                    <br />
                    ローカルな実行
                  </h3>
                  <p className="mt-8 text-[17px] leading-[1.6] font-bold tracking-tighter md:mt-12 md:text-[38px]">
                    AIS Holdings Group Inc.は、米国に本社を置く
                    <br className="max-md:hidden" />
                    マーケティングテクノロジー企業グループです。
                    <br />
                    「Marketing Excellence for All」をビジョンに、
                    <br className="max-md:hidden" />
                    世界中の企業にエンタープライズレベルのマーケティング能力を
                    <br className="max-md:hidden" />
                    提供することを目指しています。
                    <br />
                    AIS Japanは、そのアジア太平洋地域の戦略拠点として、
                    <br className="max-md:hidden" />
                    日本市場に最適化されたソリューションを展開しています。
                  </p>
                  <div className="fade-up mt-8 flex flex-wrap gap-x-10 gap-y-5 md:mt-12 md:gap-18">
                    <Button link="#">AIS Holdings Group サイト</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
