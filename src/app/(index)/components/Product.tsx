import { Button } from '@/components/ui/Button';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import Link from 'next/link';

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
    title: <>LP更新時はURLを送るだけで広告も最適化</>,
  },
  {
    id: 3,
    image: '/assets/images/product-img-03.jpg',
    title: <>市場変化をLPに反映→広告も自動で追従</>,
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
    title: <>成約報告で学習が加速さらに高精度に</>,
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

export default function Product() {
  useInfiniteScroll();
  return (
    <section className="relative overflow-hidden pt-24 md:pt-40">
      <h3
        data-infinite-scroll="4:10s"
        className="font-arimo u-text-gradient-01 flex w-max text-[100px] font-bold whitespace-nowrap italic md:text-[250px]"
      >
        <span className="shrink-0">product／</span>
      </h3>
      <div className="mx-auto mt-8 w-full max-w-[440px] px-5 sm:max-w-[1380px] md:mt-12">
        <div className="md:px-5 xl:px-12">
          <p className="fade-up text-[20px] font-bold md:text-[40px]">
            完全自動<span className="font-hind text-[24px] md:text-[55px]">AI</span>広告運用
          </p>
          <h3 className="fade-up font-hind text-[110px] leading-none font-bold md:text-[250px]">
            SEIKAI
          </h3>
          <div className="flex flex-wrap justify-end gap-4">
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
            <div className="fade-up relative min-h-15 bg-[#E0E0E0] pr-3 pl-20 text-[18px] font-semibold max-md:w-full max-md:max-w-[340px] md:pr-5 md:pl-34 md:text-[28px]">
              <img
                className="absolute -top-3 left-0 max-md:max-w-[80px] md:left-6"
                src="/assets/images/img-coin.png"
                alt=""
              />
              <p className="mt-3 md:mt-1">
                手数料<span className="font-hind text-[26px] md:text-[49px]">9</span>
                ％後払いで安心。
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-x-2.5 gap-y-3 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {data.map((item) => (
            <Link href="/" key={item.id} className="fade-up relative block flex-shrink-0">
              <img src={item.image} className="w-full" />
              <div className="absolute inset-0 flex items-end bg-[#1E1E1E]/[0.6] p-6">
                <h4 className="font-hind text-[24px] font-bold text-white md:text-[36px]">
                  {item.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
        <div className="fade-up mt-8 flex flex-wrap justify-end gap-x-10 gap-y-5 px-5 md:mt-15 md:gap-18 md:px-[50px]">
          <Button link="#">SEIKAIを詳しく見る</Button>
          <Button link="#">料金を確認</Button>
        </div>
      </div>
    </section>
  );
}
