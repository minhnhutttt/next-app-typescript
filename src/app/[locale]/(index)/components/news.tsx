'use client'

import { useState, useEffect } from 'react'
import { Swiper as SwiperClass } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { useTranslations, useLocale } from 'next-intl'

interface SlideItem {
  id: number
  image: string
  date: string
  title: string
  type: string
  head: string
  content: string
  link: string
  available?: boolean
}

const News = () => {
  const currentLocale = useLocale()
  const t = useTranslations('Home.News')
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const slidesData: SlideItem[] = [
    {
      id: 1,
      image: '/assets/images/home/news/news-card-b.jpg',
      date: t('slide1_date'),
      title: t('slide1_title'),
      type: 'press',
      head: t('slide1_head'),
      content: t('slide1_content'),
      link:
        currentLocale === 'jp'
          ? '/assets/pdf/Superball_The_Orchard_Press_Release_20250528.pdf'
          : '/assets/pdf/Superball_The_Orchard_press release_Eng_20250528.pdf',
      available: true,
    },
    {
      id: 2,
      image: '/assets/images/home/news/news-card.jpg',
      date: t('slide2_date'),
      title: t('slide2_title'),
      type: 'press',
      head: t('slide2_head'),
      content: t('slide2_content'),
      link: '/',
    },
    {
      id: 3,
      image: '/assets/images/home/news/news-card.jpg',
      date: t('slide3_date'),
      title: t('slide3_title'),
      type: 'press',
      head: t('slide3_head'),
      content: t('slide3_content'),
      link: '/',
    },
  ]

  // Update arrow state when swiper changes
  useEffect(() => {
    if (!swiperRef) return

    const updateArrowState = () => {
      setIsBeginning(swiperRef.isBeginning)
      setIsEnd(swiperRef.isEnd)
    }

    // Initial check
    updateArrowState()

    // Add event listeners
    swiperRef.on('slideChange', updateArrowState)
    swiperRef.on('resize', updateArrowState)

    // Clean up
    return () => {
      swiperRef.off('slideChange', updateArrowState)
      swiperRef.off('resize', updateArrowState)
    }
  }, [swiperRef])

  return (
    <div className="relative mx-auto w-full">
      <span className="absolute inset-x-0 bottom-0 h-[60%] bg-white"></span>
      <div className="px-5 md:px-[60px]">
        <h2
          data-scroll
          className="text--enter overflow-hidden text-[clamp(20px,7.5vw,60px)] font-semibold tracking-widest md:text-[64px] xl:text-[128px]"
        >
          <span data-splitting>NEWS</span>
        </h2>
      </div>
      <div
        data-scroll
        className="ani-fade-up relative mx-auto mt-[36px] w-full max-w-[1410px] pb-20 md:mt-[52px]"
      >
        <Swiper
          modules={[Navigation]}
          slidesPerView={'auto'}
          onSwiper={setSwiperRef}
          className="w-full"
        >
          {slidesData.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="mx-1.5 !w-[330px] md:mx-5 md:!w-[430px]"
            >
              <div className="relative">
                <div className="group relative overflow-hidden rounded-[30px]">
                  <div className="h-full w-full [box-shadow:0px_0px_80px_0px_rgba(250,_226,_215,_0.10)]">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute bottom-8 left-5 z-10 group-hover:opacity-0">
                    <p className="text-[13px] font-semibold text-[#F34927] md:text-[16px]">
                      {slide.date}
                    </p>
                    <p className="text-[16px] font-semibold text-[#F34927] md:text-[20px]">
                      {slide.title}
                    </p>
                    <p className="mt-3 text-[13px] font-semibold text-[#FAE2D7] md:mt-6 md:text-[16px]">
                      {slide.head}
                    </p>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 z-10 flex h-[90%] translate-y-full flex-col items-center justify-center overflow-auto rounded-[30px] bg-black/60 px-6 py-8 transition-transform duration-300 group-hover:translate-y-0 md:px-[50px]">
                    <div className="space-y-6 text-[#FAE2D7] md:space-y-10">
                      <div>
                        <p className="text-[13px] font-semibold text-[#F34927] md:text-[16px]">
                          {slide.date}
                        </p>
                        <p className="text-[16px] font-semibold text-[#F34927] md:text-[20px]">
                          {slide.title}
                        </p>
                      </div>
                      <p className="text-[16px] font-semibold text-[#F34927] md:text-[20px]">
                        {slide.head}
                      </p>
                      <p className="text-[12px] md:text-[14px]">
                        {slide.content}
                      </p>
                      {slide.available && (
                        <div className="flex">
                          <a
                            href={slide.link}
                            target="_blank"
                            className="flex items-center gap-2 border-b border-[#F34927] pr-2 text-[13px] leading-[1.8] md:text-[16px]"
                          >
                            <span className="animate-[spin_2s_linear_infinite] text-[#F34927]">
                              ★
                            </span>
                            <span>
                              {t('contact')} <br />
                            </span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="z-20 flex justify-end space-x-5 px-5 py-5 md:px-12">
          <button
            onClick={() => swiperRef?.slidePrev()}
            className={`flex size-[40px] items-center justify-center transition-colors duration-150 md:size-[72px] ${
              isBeginning ? 'pointer-events-none opacity-0' : 'opacity-100'
            }`}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="24"
                cy="24"
                r="24"
                transform="matrix(-1 0 0 1 49 1)"
                stroke="#111111"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M30.25 13.75C25.5637 18.4363 22.9363 21.0637 18.25 25.75L30.25 37.75"
                stroke="#111111"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => swiperRef?.slideNext()}
            className={`flex size-[40px] items-center justify-center transition-colors duration-150 md:size-[72px] ${
              isEnd ? 'pointer-events-none opacity-0' : 'opacity-100'
            }`}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="25"
                cy="25"
                r="24"
                stroke="#111111"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M19.75 13.75C24.4363 18.4363 27.0637 21.0637 31.75 25.75L19.75 37.75"
                stroke="#111111"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default News
