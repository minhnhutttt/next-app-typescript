'use client';
import { Button } from '@/components/ui/Button';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import useScrollAnimations from '@/hooks/useScrollAnimations';
import { useSplitTextScroll } from '@/hooks/useSplitTextScroll';

export default function Business() {
  const ref = useScrollAnimations();
  useInfiniteScroll();
  useSplitTextScroll();
  return (
    <main ref={ref} className="overflow-hidden">
      <div className="pt-15 md:pt-20">
        <h3
          data-infinite-scroll="4:10s"
          className="font-arimo u-text-gradient-01 flex w-max text-[100px] font-bold whitespace-nowrap italic md:text-[250px]"
        >
          <span className="shrink-0">busines／</span>
        </h3>
        <section className="px-5 pt-16 md:pt-24">
          <div className="mx-auto w-full max-w-[480px] md:max-w-[1250px]">
            <div>
              <p className="fade-up text-left text-[20px] font-thin md:text-[32px]">
                {`<`} <span className="font-bold">Business</span> {`>`}
              </p>
              <h3 className="fade-up mt-3 text-[36px] leading-snug font-black md:mt-4 md:text-[105px]">
                AIマーケティング
                <br />
                ソリューション事業
              </h3>
              <p className="fade-up text-[20px] font-semibold md:text-[40px]">
                テクノロジーで広告運用を革新する
              </p>
              <div className="mt-6 flex justify-end md:mt-16">
                <div className="w-full max-w-[920px]">
                  <p className="scroll-text text-[18px] leading-[1.6] font-bold tracking-tighter md:text-[38px]">
                    AIS Japanは、AI技術を活用した
                    <br className="max-md:hidden" />
                    マーケティングソリューションの
                    <br className="max-md:hidden" />
                    開発・提供を行っています。
                    <br />
                    広告運用を軸にAIを独自の観点で取り込み、
                    <br className="max-md:hidden" />
                    本来不必要な時間的・費用的コストや作業を
                    <br className="max-md:hidden" />
                    限界までカットし、残すべきものを見極めた
                    <br className="max-md:hidden" />
                    プロダクト開発を目指しています。
                    <br />
                    現在は主力サービス「SEIKAI」を中心に、
                    <br className="max-md:hidden" />
                    広告運用の自動化、最適化、効率化を推進中。
                  </p>
                </div>
              </div>
            </div>
            <div className="my-20 md:my-82">
              <div className="flex justify-end">
                <div className="fade-up w-full max-w-[920px]">
                  <div className="text-[20px] font-semibold md:text-[40px]">
                    <div className="vm-animation animation-ltr">
                      <p className="vm-animation-inner">AI広告運用サービス</p>
                    </div>
                  </div>
                  <h3 className="vm-animation animation-ltr font-hind text-[80px] leading-[1.1] font-bold delay-1 md:text-[150px] lg:text-[250px]">
                    <p className="vm-animation-inner">SEIKAI</p>
                  </h3>
                </div>
              </div>
              <div className="flex">
                <div className="scroll-text mt-4 text-[17px] leading-[1.6] font-bold tracking-tighter md:mt-7 md:text-[38px]">
                  SEIKAIは、
                  <br />
                  オンライン広告と実際のビジネス成果を <br className="max-md:hidden" />
                  結びつける革新的なAI広告運用サービスです。
                  <br />
                  店舗での購入、電話での成約、対面での契約など、
                  <br className="max-md:hidden" />
                  事業者様が報告する実際の成果を
                  <br className="max-md:hidden" />
                  AIが学習・最適化することで、
                  <br className="max-md:hidden" />
                  真のROIを実現します。
                  <div className="fade-up mt-8 flex flex-wrap justify-end gap-x-10 gap-y-5 md:mt-10 md:gap-18 xl:pr-5">
                    <Button link="#">SEIKAIの詳細を見る</Button>
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
