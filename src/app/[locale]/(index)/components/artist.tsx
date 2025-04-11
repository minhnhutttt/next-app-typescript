'use client'

import { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useTranslations } from 'next-intl'

const Artist = () => {
  const t = useTranslations('Home.Artist')
  const data = [
    {
      id: 1,
      image: '/assets/images/home/artists/artist-img-02.png',
      name: 'Quadlips',
      content: t('slide1_content'),
    },
    {
      id: 2,
      image: '/assets/images/home/artists/artist-img-01.png',
      name: 'SHEKI ARZAGA',
      content: t('slide2_content'),
    },
    {
      id: 3,
      image: '',
      name: '',
      content: <></>,
      comming: true,
    },
  ]
  const [slideHeight, setSlideHeight] = useState(0)

  useEffect(() => {
    import('splitting').then((Splitting) => {
      Splitting.default()
    })

    import('scroll-out').then((ScrollOutModule) => {
      ScrollOutModule.default({ once: true })
    })

    const calculateMaxHeight = () => {
      if (typeof window !== 'undefined') {
        const slides = document.querySelectorAll('.slide-content')
        let maxHeight = 0

        slides.forEach((slide) => {
          const height = slide.getBoundingClientRect().height
          if (height > maxHeight) {
            maxHeight = height
          }
        })

        if (maxHeight > 0 && maxHeight !== slideHeight) {
          setSlideHeight(maxHeight)
        }
      }
    }

    calculateMaxHeight()
    window.addEventListener('resize', calculateMaxHeight)

    setTimeout(calculateMaxHeight, 500)

    return () => {
      window.removeEventListener('resize', calculateMaxHeight)
    }
  }, [slideHeight])

  return (
    <section className="relative overflow-hidden">
      <div className="artist-swiper relative w-full bg-[url(/assets/images/home/artist-bg.png)] bg-cover bg-center pb-14 pt-10 md:pb-20 md:pt-[60px]">
        <Swiper
          slidesPerView={'auto'}
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={() => {
            setTimeout(() => {
              const slides = document.querySelectorAll('.slide-content')
              let maxHeight = 0

              slides.forEach((slide) => {
                const height = slide.getBoundingClientRect().height
                if (height > maxHeight) {
                  maxHeight = height
                }
              })

              if (maxHeight > 0 && maxHeight !== slideHeight) {
                setSlideHeight(maxHeight)
              }
            }, 100)
          }}
          className="w-full"
        >
          {data.map((item) => (
            <SwiperSlide
              key={item.id}
              className="relative mx-[10px] h-auto !w-[82%] overflow-hidden rounded-[10px] md:mx-[25px]"
            >
              {item.comming && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-gray-400/65 text-[40px] italic text-white md:text-[100px]">
                  Coming soon!
                </div>
              )}
              <span className="absolute inset-0 bg-[linear-gradient(109deg,_rgba(255,_255,_255,_0.10)_11.71%,_rgba(255,_255,_255,_0.10)_95.46%)] backdrop-blur-[5px] backdrop-filter"></span>
              <div
                className="slide-content relative flex items-center gap-5 px-5 py-6 max-md:flex-col md:px-10 md:py-8 xl:gap-[70px] xl:px-[64px] xl:py-[54px]"
                style={{
                  minHeight: slideHeight > 0 ? `${slideHeight}px` : 'auto',
                }}
              >
                <div className="[box-shadow:0px_4px_100px_0px_rgba(97,_169,_197,_0.25)] max-xl:w-1/2 max-md:w-full">
                  {item.image ? (
                    <img src={item.image} alt="" />
                  ) : (
                    <img src="/assets/images/dummy.png" alt="" />
                  )}
                </div>
                <div className="flex-1 text-white">
                  <p className="text-[18px] font-medium leading-[1.2] md:text-[24px]">
                    {item.name && item.name}
                  </p>
                  <p className="mt-4 text-[14px] font-medium leading-[2] md:mt-[30px] md:text-[16px]">
                    {item.content && item.content}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination mt-6"></div>
      </div>
    </section>
  )
}

export default Artist
