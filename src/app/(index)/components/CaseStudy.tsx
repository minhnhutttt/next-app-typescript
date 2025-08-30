'use client';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const data01 = [
  {
    image: '/assets/images/img-industry01.png',
    title: '飲食店',
    text: 'バイト定着率向上で採用コストを削減',
    link: '/',
  },
  {
    image: '/assets/images/img-industry02.png',
    title: '小売店',
    text: '接客品質向上で顧客満足度アップ',
    link: '/',
  },
  {
    image: '/assets/images/img-industry03.png',
    title: '美容室',
    text: '指名率向上でリピート客増加',
    link: '/',
  },
  {
    image: '/assets/images/img-industry04.png',
    title: 'サービス業',
    text: '顧客・スタッフ満足度の同時向上',
    link: '/',
  },
  {
    image: '/assets/images/img-industry05.png',
    title: 'その他業界',
    text: 'まだ誰もやっていない業界だからこそチャンス',
    link: '/',
  },
];
export default function CaseStudy() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const curveRef = useRef<SVGPathElement | null>(null);

  const defaultCurveValue = 400;

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const curve = curveRef.current;
    if (!section || !curve) return;

    const setPath = (curveY: number) => {
      const y = Math.max(0, Math.min(defaultCurveValue, curveY));
      const d = `M 800 300 Q 400 ${y} 0 300 L 0 0 L 800 0 L 800 300 Z`;
      gsap.set(curve, { attr: { d } });
    };

    setPath(defaultCurveValue);
    const st = ScrollTrigger.create({
      trigger: section,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        const curveY = defaultCurveValue * (1 - self.progress);
        setPath(curveY);
      },
      onEnter: () => setPath(defaultCurveValue),
      onLeave: () => setPath(0),
      onEnterBack: () => setPath(0),
      onLeaveBack: () => setPath(defaultCurveValue),
      invalidateOnRefresh: true,
    });

    return () => st.kill();
  }, []);
  return (
    <section className="relative bg-[#E7F0FB] pt-30 pb-20 md:pt-50 md:pb-88">
      <section className="absolute inset-0 flex flex-col">
        <div className="flex-1 bg-[#0046B8]"></div>
        <div ref={sectionRef} className="">
          <svg viewBox="0 0 800 400" preserveAspectRatio="none" className="w-full">
            <path
              ref={curveRef}
              id="curve"
              fill="#0046B8"
              d="M 100 75 Q 50 87.5 0 75 L 0 0 L 100 0 L 100 75 Z"
            />
          </svg>
        </div>
      </section>
      <div className="relative pl-5 md:pl-[85px]">
        <h4 className="max-w-[800px] text-[24px] font-bold tracking-wider text-white md:text-[48px]">
          あなたの業界では、どんな変化が起きるでしょう？
        </h4>
        <div className="fade-up mt-7 w-full md:mt-12">
          <Splide
            options={{
              autoWidth: true,
              type: 'loop',
              paginationDirection: 'ltr',
            }}
            aria-label=""
            hasTrack={false}
            className="w-full"
          >
            <SplideTrack>
              {data01.map((slide, index) => (
                <SplideSlide key={index} className="px-[15px] md:px-[25px]">
                  <div className="relative w-[300px] pb-10 md:w-[400px] md:pb-15">
                    <div className="flex flex-col items-center">
                      <p className="relative">
                        <img
                          className="rounded-[40px] [box-shadow:10px_10px_0_0_rgba(109,_184,_247,_0.60)] md:rounded-[80px]"
                          src={slide.image}
                          alt=""
                        />
                      </p>
                      <p className="mt-7 text-[24px] font-bold text-white md:mt-9 md:text-[32px]">
                        {slide.title}
                      </p>
                      <p className="mt-3 px-4 text-[15px] font-medium text-white md:mt-6 md:text-[20px]">
                        {slide.text}
                      </p>
                      <div className="mt-6 flex justify-center md:mt-10">
                        <a
                          href={slide.link}
                          className="relative flex h-[60px] w-[190px] items-center justify-center rounded-full bg-white text-[15px] font-medium text-[#0046B8] md:text-[20px]"
                        >
                          詳細を見る
                          <svg
                            className="absolute right-2.5"
                            width="12"
                            height="14"
                            viewBox="0 0 12 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3 13L9 7L3 1"
                              stroke="#0046B8"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
            <div className="splide__arrows flex items-center justify-end">
              <button className="splide__arrow--prev">Prev</button>
              <ul
                className="splide__pagination splide__pagination--ltr !relative"
                role="tablist"
                aria-label="Select a slide to show"
              ></ul>
              <button className="splide__arrow--next">Next</button>
            </div>
          </Splide>
        </div>
      </div>
    </section>
  );
}
