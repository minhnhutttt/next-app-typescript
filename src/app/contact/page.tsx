'use client';
import { Button } from '@/components/ui/Button';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import useScrollAnimations from '@/hooks/useScrollAnimations';
import Link from 'next/link';

export default function Contact() {
  const ref = useScrollAnimations();
  useInfiniteScroll();
  return (
    <main ref={ref} className="overflow-hidden">
      <div className="pt-15 md:pt-20">
        <h3
          data-infinite-scroll="4:10s"
          className="font-arimo u-text-gradient-01 flex w-max text-[100px] font-bold whitespace-nowrap italic md:text-[250px]"
        >
          <span className="shrink-0">contact／</span>
        </h3>
        <div className="px-5">
          <div className="mx-auto w-full max-w-[1250px] pt-16 md:pt-24">
            <p className="text-left text-[20px] font-thin md:text-[32px]">
              {`<`} <span className="font-bold">Contact</span> {`>`}
            </p>
            <h5 className="fade-up text-center text-[32px] leading-snug font-bold md:text-[70px] lg:text-[80px] xl:text-[105px]">
              まずは無料相談から
            </h5>
            <p className="fade-up mt-10 text-center text-[20px] font-bold md:mt-20 md:text-[38px]">
              「本当に何もしなくていいの？」
              <br />
              「うちの業界でも効果ある？」
              <br />
              そんな疑問にお答えします。
              <br />
              <br />
              SEIKAIの自動化の仕組み、
              <br />
              成約報告による改善効果など、
              <br />
              ご利用前の不明点解消に
              <br />
              お役立てください。
            </p>
            <div className="mx-auto mt-14 mb-[130px] w-full max-w-[800px] md:mt-[90px] md:mb-[260px]">
              <iframe
                className="airtable-embed"
                src="https://airtable.com/embed/appUdqk1i991pP9Wq/pagCiKCxhyS2R1L06/form"
                frameBorder="0"
                width="100%"
                height="533"
              ></iframe>
              <div className="mt-20 md:mt-36">
                <p className="text-center text-[28px] font-bold md:text-[40px]">関連情報リンク</p>
                <div className="fade-up mt-8 flex flex-wrap justify-center gap-x-10 gap-y-5 md:mt-12 md:gap-14">
                  <Button link="/product">SEIKAIの詳細</Button>
                  <Button link="/product/#price">料金体系</Button>
                  <Button link="/product/#case">導入事例</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
