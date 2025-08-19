'use client';
import { Button } from '@/components/ui/Button';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import useScrollAnimations from '@/hooks/useScrollAnimations';

export default function Business() {
  const ref = useScrollAnimations();
  useInfiniteScroll();
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
              <p className="text-left text-[20px] font-thin md:text-[32px]">
                {`<`} <span className="font-bold">Business</span> {`>`}
              </p>
              <h3 className="mt-3 text-[36px] leading-snug font-black md:mt-4 md:text-[105px]">
                AIマーケティング
                <br />
                ソリューション事業
              </h3>
              <p className="text-[20px] font-semibold md:text-[40px]">
                テクノロジーで広告運用を革新する
              </p>
              <div className="mt-6 flex justify-end md:mt-16">
                <div className="w-full max-w-[920px]">
                  <p className="text-[18px] leading-[1.6] font-bold tracking-tighter md:text-[38px]">
                    AIS Japanは、AI技術を活用したマーケティング
                    <br className="max-md:hidden" />
                    ソリューションの開発・提供を行っています。
                    <br />
                    主力サービス「SEIKAI」を中心に、広告運用の自動化、
                    <br className="max-md:hidden" />
                    最適化、効率化を実現。
                    <br />
                    特に、オフラインコンバージョンの報告による
                    <br className="max-md:hidden" />
                    最適化という独自の強みで、従来の広告運用の
                    <br className="max-md:hidden" />
                    限界を突破します。
                  </p>
                  <div className="fade-up mt-8 flex flex-wrap gap-x-10 gap-y-5 md:mt-12 md:gap-18">
                    <Button link="#">SEIKAIを詳しく見る</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-20 md:my-82">
              <div className="flex justify-end">
                <div className="w-full max-w-[920px]">
                  <p className="text-[20px] font-semibold md:text-[40px]">AI広告運用サービス</p>
                  <h3 className="font-hind text-[80px] leading-[1.1] font-bold md:text-[150px] lg:text-[250px]">
                    SEIKAI
                  </h3>
                </div>
              </div>
              <div className="flex">
                <div className="mt-4 text-[17px] leading-[1.6] font-bold tracking-tighter md:mt-7 md:text-[38px]">
                  SEIKAIは、オンライン広告と実際のビジネス成果を <br className="max-md:hidden" />
                  結びつける革新的なAI広告運用サービスです。
                  <br />
                  店舗での購入、電話での成約、対面での契約など、
                  <br className="max-md:hidden" />
                  事業者様が報告する実際の成果をAIが学習・最適化することで、
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
