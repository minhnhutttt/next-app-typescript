'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const data = [
  {
    id: 1,
    image: '/assets/images/product-img-01.jpg',
    title: (
      <>
        Google Ads
        <br />
        完全自動運用
      </>
    ),
  },
  {
    id: 2,
    image: '/assets/images/product-img-02.jpg',
    title: <>LP更新時もURLを送るだけで広告が最適化</>,
  },
  {
    id: 3,
    image: '/assets/images/product-img-03.jpg',
    title: <>急な市場変化もLPに反映してAIに再学習可能</>,
  },
  {
    id: 4,
    image: '/assets/images/product-img-04.jpg',
    title: (
      <>
        24時間365日
        <br />
        休まず最適化
      </>
    ),
  },
  {
    id: 5,
    image: '/assets/images/product-img-05.jpg',
    title: <>成約報告がAIの学習を加速させる</>,
  },
  {
    id: 6,
    image: '/assets/images/product-img-06.jpg',
    title: (
      <>
        Meta Ads <br />
        2026年春対応予定
      </>
    ),
  },
];

const ProductItem = ({ image, title }: { image: string; title: React.ReactNode }) => (
  <a href="/" className="fade-up relative block aspect-[40/41] w-full">
    <img src={image} className="w-full" />
    <div className="absolute inset-0 flex items-end bg-[#1E1E1E]/[0.6] p-6 md:px-[2vw] md:py-[4vw]">
      <h4 className="font-hind text-[24px] font-bold text-white md:text-[2.5vw]">{title}</h4>
    </div>
  </a>
);

const Product = () => {
  const productContainerRef = useRef<HTMLDivElement>(null);
  useInfiniteScroll();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.horizontal-section',
            start: 'top center',
            end: 'bottom 200%',
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
    <section className="relative bg-white pt-24 md:pt-40">
      <div className="overflow-hidden">
        <h3
          data-infinite-scroll="4:10s"
          className="font-arimo u-text-gradient-01 flex w-max text-[100px] font-bold whitespace-nowrap italic md:text-[250px]"
        >
          <span className="shrink-0">product／</span>
        </h3>
      </div>
      <div className="mx-auto mt-8 w-full max-w-[440px] px-5 sm:max-w-[1380px] md:mt-12">
        <div className="md:px-5 xl:px-12">
          <p className="fade-up text-[20px] font-bold md:text-[40px]">開発プロダクト</p>
          <h3 className="vm-animation animation-ltr font-hind text-[110px] leading-none font-bold md:text-[250px]">
            <div className="vm-animation-inner flex items-center pt-6">SEIKAI</div>
          </h3>
          <div className="mt-3 flex flex-wrap justify-end gap-4 md:mt-5">
            <div className="fade-up relative min-h-15 bg-[#E0E0E0] pr-3 pl-20 text-[18px] font-semibold max-md:w-full max-md:max-w-[340px] md:pr-5 md:text-[28px]">
              <img
                className="absolute -top-3 left-0 max-md:max-w-[70px]"
                src="/assets/images/img-time.png"
                alt=""
              />
              <p className="mt-3 md:mt-1">
                設定<span className="font-hind text-[26px] md:text-[49px]">5</span>分あとは
                <span className="font-hind text-[26px] md:text-[49px]">AI</span>にお任せ。
              </p>
            </div>
            <div className="fade-up relative min-h-15 bg-[#E0E0E0] pr-3 pl-17 text-[18px] font-semibold max-md:w-full max-md:max-w-[340px] md:pr-5 md:pl-24 md:text-[28px]">
              <img
                className="absolute -top-3 left-0 max-md:max-w-[80px] md:left-3"
                src="/assets/images/img-coin.png"
                alt=""
              />
              <p className="mt-3 md:mt-1">
                手数料は<span className="font-hind text-[26px] md:text-[49px]">9</span>
                ％、後払いで安心。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div ref={productContainerRef} className="explore relative mt-10 flex w-full flex-col">
        <div className="relative w-full">
          <div className="flex w-full flex-col items-center justify-center px-[4vw] md:gap-[40vw] md:px-[2vw]">
            <div className="trigger-01 card js-card pointer-events-none mb-[5vw] flex w-full items-start justify-center md:sticky md:top-0 md:mb-0 md:h-screen">
              <div className="relative w-full md:max-w-[45vw]">
                <div className="pt-[106.5%]"></div>
                <div className="js-card-inner-01 scale-sp absolute top-[0] left-[0] z-[3] flex h-full w-full origin-top items-center justify-center overflow-hidden max-md:!top-0 max-md:!left-0">
                  <ProductItem image={data[0].image} title={data[0].title} />
                </div>
              </div>
            </div>
            <div className="trigger-02 card js-card pointer-events-none mb-[5vw] flex w-full items-start justify-center md:sticky md:top-0 md:mb-0 md:h-screen">
              <div className="relative w-full md:max-w-[45vw]">
                <div className="pt-[106.5%]"></div>
                <div className="js-card-inner-02 scale-sp absolute top-[0] left-[0] z-[3] flex h-full w-full origin-top items-center justify-center overflow-hidden max-md:!top-0 max-md:!left-0">
                  <ProductItem image={data[1].image} title={data[1].title} />
                </div>
              </div>
            </div>
            <div className="trigger-03 card js-card pointer-events-none mb-[5vw] flex w-full items-start justify-center md:sticky md:top-0 md:mb-0 md:h-screen">
              <div className="relative w-full md:max-w-[45vw]">
                <div className="pt-[106.5%]"></div>
                <div className="js-card-inner-03 scale-sp absolute top-[0] left-[0] z-[3] flex h-full w-full origin-top items-center justify-center overflow-hidden max-md:!top-0 max-md:!left-0">
                  <ProductItem image={data[2].image} title={data[2].title} />
                </div>
              </div>
            </div>
            <div className="trigger-04 card js-card pointer-events-none mb-[5vw] flex w-full items-start justify-center md:sticky md:top-0 md:mb-0 md:h-screen">
              <div className="relative w-full md:max-w-[45vw]">
                <div className="pt-[106.5%]"></div>
                <div className="js-card-inner-04 scale-sp absolute top-[0] left-[0] z-[3] flex h-full w-full origin-top items-center justify-center overflow-hidden max-md:!top-0 max-md:!left-0">
                  <ProductItem image={data[3].image} title={data[3].title} />
                </div>
              </div>
            </div>
            <div className="trigger-05 card js-card pointer-events-none mb-[5vw] flex w-full items-start justify-center md:sticky md:top-0 md:mb-0 md:h-screen">
              <div className="relative w-full md:max-w-[45vw]">
                <div className="pt-[106.5%]"></div>
                <div className="js-card-inner-05 scale-sp absolute top-[0] left-[0] z-[3] flex h-full w-full origin-top items-center justify-center overflow-hidden max-md:!top-0 max-md:!left-0">
                  <ProductItem image={data[4].image} title={data[4].title} />
                </div>
              </div>
            </div>
            <div className="trigger-06 card js-card pointer-events-none mb-[5vw] flex w-full items-start justify-center md:sticky md:top-0 md:mb-0 md:h-screen">
              <div className="relative w-full md:max-w-[45vw]">
                <div className="pt-[106.5%]"></div>
                <div className="js-card-inner-06 scale-sp absolute top-[0] left-[0] z-[3] flex h-full w-full origin-top items-center justify-center overflow-hidden max-md:!top-0 max-md:!left-0">
                  <ProductItem image={data[5].image} title={data[5].title} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="horizontal-section pointer-events-auto relative z-[3] hidden opacity-0 hover:opacity-100 md:-mt-[10vw] md:block md:py-[10vw]">
        <div className="flex flex-wrap justify-between gap-[2vw] px-[4vw] md:px-[2vw]">
          <a
            href="/"
            className="js-target-position pointer-events-auto relative aspect-[40/41] w-[30vw] overflow-hidden"
          >
            <div className="pt-[106.5%]"></div>
          </a>
          <a
            href="/"
            className="js-target-position pointer-events-auto relative aspect-[40/41] w-[30vw] overflow-hidden"
          >
            <div className="pt-[106.5%]"></div>
          </a>
          <a
            href="/"
            className="js-target-position pointer-events-auto relative aspect-[40/41] w-[30vw] overflow-hidden"
          >
            <div className="pt-[106.5%]"></div>
          </a>
          <a
            href="/"
            className="js-target-position pointer-events-auto relative aspect-[40/41] w-[30vw] overflow-hidden"
          >
            <div className="pt-[106.5%]"></div>
          </a>
          <a
            href="/"
            className="js-target-position pointer-events-auto relative aspect-[40/41] w-[30vw] overflow-hidden"
          >
            <div className="pt-[106.5%]"></div>
          </a>
          <a
            href="/"
            className="js-target-position pointer-events-auto relative aspect-[40/41] w-[30vw] overflow-hidden"
          >
            <div className="pt-[106.5%]"></div>
          </a>
        </div>
      </div>
      <div className="fade-up flex flex-wrap justify-end gap-x-10 gap-y-5 px-5 md:gap-18 md:px-[50px]">
        <Button link="/product">SEIKAIを詳しく見る</Button>
        <Button link="/product/#price">料金を確認</Button>
      </div>
    </section>
  );
};

export default Product;
