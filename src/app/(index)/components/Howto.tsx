'use client';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const data01 = [
  {
    image: '/assets/images/slider-img-01-01.png',
    title: '来店するだけ！',
    label: 'お店で',
    text: 'チェックインボーナスでDWU',
  },
  {
    image: '/assets/images/slider-img-01-02.png',
    title: 'お買い物するだけ！',
    label: 'お店で',
    text: '金額に応じてDWU',
  },
  {
    image: '/assets/images/slider-img-01-03.png',
    title: 'カフェでコーヒー飲むだけ！',
    label: 'お店で',
    text: 'いつもの日常でDWU',
  },
];

const data02 = [
  {
    image: '/assets/images/slider-img-02-01.png',
    title: 'マップ上のNFTを見つけるだけ！',
    label: '街歩きで',
    text: '宝探し感覚でDWU',
  },
  {
    image: '/assets/images/slider-img-02-02.png',
    title: '特定の場所に行くだけ！',
    label: '街歩きで',
    text: 'お出かけのオマケにDWU',
  },
  {
    image: '/assets/images/slider-img-02-03.png',
    title: 'ミッションをクリアするだけ！',
    label: '街歩きで',
    text: 'ゲーム感覚でDWU',
  },
];

const data03 = [
  {
    image: '/assets/images/slider-img-03-01.png',
    title: '推しのFAVERが発行するソーシャルコインを購入',
  },
  {
    image: '/assets/images/slider-img-03-02.png',
    title: '限定コンテンツや特別な体験をゲット',
  },
  {
    image: '/assets/images/slider-img-03-03.png',
    title: 'FAVERのコミュニティに参加して交流',
  },
];

export default function Howto() {
  return (
    <section className="relative px-5 pt-32 md:pt-54">
      <div className="mx-auto w-full max-w-[1280px] border border-[#01FFAA] bg-black/40 pt-14 pb-16 md:pt-22 md:pb-25">
        <h4 className="fade-up">
          <p className="text-center text-[40px] leading-snug font-extrabold text-[#01FFAA] [text-shadow:0_0_100px_#01FFAA] md:text-[80px]">
            使い方
          </p>
        </h4>
        <div className="mt-15 pl-5 md:mt-26 md:pl-20">
          <div className="fade-up flex items-center gap-6 max-md:flex-wrap">
            <div className="border-t-2 border-[#01FFAA] bg-[#01FFAA]/[0.1] px-10 py-5 text-center text-[20px] leading-[1.1] font-extrabold tracking-widest md:border-t-4 md:text-[36px]">
              DWUをもらえる場所
            </div>
            <p className="text-[15px] font-medium tracking-widest md:text-[18px]">
              参加店舗やサービス拡大中！
              <br />
              このサイトでも紹介していくので、たまにチェックしてねっ
            </p>
          </div>
          <div className="fade-up mt-7 w-full md:mt-10">
            <Splide
              options={{
                pagination: false,
                arrows: false,
                autoWidth: true,
                gap: '40px',
                breakpoints: {
                  768: {
                    gap: '20px',
                  },
                },
              }}
              aria-label=""
              hasTrack={false}
              className="w-full"
            >
              <SplideTrack>
                {data01.map((slide, index) => (
                  <SplideSlide key={index}>
                    <div className="relative w-[280px] pb-10 md:w-[420px] md:pb-15">
                      <div className="flex flex-col items-center">
                        <p className="relative">
                          <img src={slide.image} alt="" />
                          <span className="absolute top-0 left-0 flex h-8 w-[72px] items-center justify-center bg-black/50 text-[14px] font-extrabold md:h-11 md:text-[16px]">
                            {slide.label}
                          </span>
                        </p>
                        <p className="mt-8 text-[16px] font-bold md:mt-12 md:text-[20px]">
                          {slide.title}
                        </p>
                        <span className="mx-auto my-2 block h-1 w-9 bg-[#01FFAA] md:my-4"></span>
                        <p className="mt-2 text-[15px] md:text-[18px]">{slide.text}</p>
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </SplideTrack>
            </Splide>
          </div>
          <div className="fade-up mt-5 w-full md:mt-7">
            <Splide
              options={{
                pagination: false,
                arrows: false,
                autoWidth: true,
                gap: '40px',
                breakpoints: {
                  768: {
                    gap: '20px',
                  },
                },
              }}
              aria-label=""
              hasTrack={false}
              className="w-full"
            >
              <SplideTrack>
                {data02.map((slide, index) => (
                  <SplideSlide key={index}>
                    <div className="relative w-[280px] pb-10 md:w-[420px] md:pb-15">
                      <div className="flex flex-col items-center">
                        <p className="relative">
                          <img src={slide.image} alt="" />
                          <span className="absolute top-0 left-0 flex h-8 w-[72px] items-center justify-center bg-black/50 text-[14px] font-extrabold md:h-11 md:text-[16px]">
                            {slide.label}
                          </span>
                        </p>
                        <p className="mt-8 text-[16px] font-bold md:mt-12 md:text-[20px]">
                          {slide.title}
                        </p>
                        <span className="mx-auto my-2 block h-1 w-9 bg-[#01FFAA] md:my-4"></span>
                        <p className="mt-2 text-[15px] md:text-[18px]">{slide.text}</p>
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </SplideTrack>
            </Splide>
          </div>
          <div className="fade-up mt-15 flex items-center gap-6 max-md:flex-wrap md:mt-26">
            <div className="border-t-2 border-[#01FFAA] bg-[#01FFAA]/[0.1] px-10 py-5 text-center text-[20px] leading-[1.1] font-extrabold tracking-widest md:border-t-4 md:text-[36px]">
              DWUを使える場所
            </div>
            <p className="text-[15px] font-medium tracking-widest md:text-[18px]">
              あなたのDWUで、推し活をもっと楽しく！
            </p>
          </div>
          <div className="fade-up mt-7 w-full md:mt-10">
            <Splide
              options={{
                pagination: false,
                arrows: false,
                autoWidth: true,
                gap: '40px',
                breakpoints: {
                  768: {
                    gap: '20px',
                  },
                },
              }}
              aria-label=""
              hasTrack={false}
              className="w-full"
            >
              <SplideTrack>
                {data03.map((slide, index) => (
                  <SplideSlide key={index}>
                    <div className="relative w-[280px] pb-10 md:w-[420px] md:pb-15">
                      <div className="flex flex-col items-center">
                        <p className="relative">
                          <img src={slide.image} alt="" />
                        </p>
                        <p className="mt-7 text-[16px] font-bold md:mt-18 md:px-10 md:text-[20px]">
                          {slide.title}
                        </p>
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </SplideTrack>
            </Splide>
          </div>

          <div className="fade-up flex items-center justify-center pr-5 md:mt-20 md:pr-20">
            <a
              href="#"
              className="flex h-15 w-[240px] items-center justify-center rounded-lg border-2 border-[#2EDCFF]/[0.5] bg-[#DB00B2] text-[16px] font-semibold md:h-[74px] md:w-[384px] md:text-[24px]"
            >
              OPEN FAVEを見てみる
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
