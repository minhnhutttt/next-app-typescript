'use client';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const data = [
  {
    image: '/assets/images/value-ic-01.png',
    title: 'Accessibility',
    text: 'Breaking down barriers to advanced technology',
  },
  {
    image: '/assets/images/value-ic-02.png',
    title: 'Innovation',
    text: 'Continuous advancement in AI and automation',
  },
  {
    image: '/assets/images/value-ic-03.png',
    title: 'Transparency',
    text: 'Clear pricing, honest partnerships',
  },
  {
    image: '/assets/images/value-ic-04.png',
    title: 'Accessibility',
    text: 'Breaking down barriers to advanced technology',
  },
];

export default function Philosophy() {
  return (
    <section className="relative z-10 px-5">
      <div
        id="our-purpose-and-principles"
        className="relative mx-auto w-full max-w-[1400px] pt-25 md:pt-50"
      >
        <div className="fade-up border-b border-white pb-8 md:pb-[60px]">
          <h2 className="text-center text-[28px] leading-[1.3] font-bold tracking-wider md:text-[46px]">
            Our Purpose and Principles
          </h2>
        </div>
        <div className="mt-7 md:mt-12">
          <div className="relative">
            <p className="fade-up text-[21vw] leading-[0.9] font-extrabold text-[#362F55]/[0.3] uppercase italic md:-ml-10 md:text-[366px]">
              Mission
            </p>
            <div className="fade-up inset-0 flex items-center px-5 text-[18px] tracking-wider max-md:-mt-[9vw] md:absolute md:px-24 md:text-[24px]">
              <p className="max-w-[900px]">
                To democratize access to world-class marketing technology through AI innovation,
                enabling every business to reach its full potential regardless of size or expertise.
              </p>
            </div>
          </div>
          <div className="relative">
            <p className="fade-up text-[21vw] leading-[0.9] font-extrabold text-[#2F5541]/[0.3] uppercase italic md:-ml-20 md:text-[366px]">
              VISION
            </p>
            <div className="fade-up inset-0 flex items-center px-5 text-[18px] tracking-wider max-md:-mt-[9vw] md:absolute md:px-24 md:text-[24px]">
              <p className="max-w-[940px]">
                A world where sophisticated marketing capabilities are fundamental business
                infrastructure, accessible to all companies competing in the digital economy.
              </p>
            </div>
          </div>
          <div className="relative">
            <p className="fade-up text-[21vw] leading-[0.9] font-extrabold text-[#552F44]/[0.3] uppercase italic md:-ml-20 md:text-[340px]">
              CORE
            </p>
          </div>
          <div className="relative">
            <p className="fade-up text-right text-[21vw] leading-[0.9] font-extrabold text-[#552F44]/[0.3] uppercase italic md:-mt-13 md:pb-24 md:text-[340px]">
              VALUES
            </p>
            <div className="fade-up inset-0 -mr-5 flex items-center justify-end text-[18px] tracking-wider max-md:-mt-[9vw] md:absolute md:text-[24px]">
              <div className="w-full max-w-[1280px]">
                <Splide
                  options={{
                    pagination: false,
                    arrows: false,
                    autoWidth: true,
                    gap: '16px',
                  }}
                  aria-label=""
                  hasTrack={false}
                  className="w-full"
                >
                  <SplideTrack>
                    {data.map((slide, index) => (
                      <SplideSlide key={index}>
                        <div className="relative size-[306px] p-10">
                          <div className="absolute inset-0 rounded-[16px] border border-[#2500C8] bg-[#2500C8]/[0.1] backdrop-blur-[5px] backdrop-filter md:rounded-[32px]"></div>
                          <div className="relative">
                            <p>
                              <img src={slide.image} alt="" />
                            </p>
                            <p className="mt-5 text-[22px] font-semibold md:mt-8 md:text-[24px]">
                              {slide.title}
                            </p>
                            <p className="mt-2 text-[15px] font-light md:text-[16px]">
                              {slide.text}
                            </p>
                          </div>
                        </div>
                      </SplideSlide>
                    ))}
                  </SplideTrack>
                </Splide>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
