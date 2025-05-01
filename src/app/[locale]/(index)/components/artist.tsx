'use client'

import { useEffect, useState, useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useTranslations } from 'next-intl'

const Artist = () => {
  const t = useTranslations('Home.Artist')
  const data = [
    {
      id: 1,
      image: '/assets/images/home/artists/artist-img-02.jpg',
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
      content: null,
      comming: true,
    },
  ]
  const [slideHeight, setSlideHeight] = useState(0)
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false)
  const swiperRef = useRef<SwiperCore | null>(null)

  const handlePause = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay?.stop()
      setIsAutoplayPaused(true)

      document.documentElement.style.setProperty(
        '--bullet-animation-state',
        'paused'
      )
    }
  }

  const handlePlay = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay?.start()
      setIsAutoplayPaused(false)

      document.documentElement.style.setProperty(
        '--bullet-animation-state',
        'running'
      )
    }
  }

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

    document.documentElement.style.setProperty(
      '--bullet-animation-state',
      'running'
    )

    return () => {
      window.removeEventListener('resize', calculateMaxHeight)
      document.documentElement.style.removeProperty('--bullet-animation-state')
    }
  }, [slideHeight])

  useEffect(() => {
    const resetAnimation = () => {
      const activeBullet = document.querySelector(
        '.swiper-pagination-bullet-active::after'
      )
      if (activeBullet) {
        const element = activeBullet as HTMLElement
        element.style.animation = 'none'
        void element.offsetWidth
        element.style.animation = ''
      }
    }

    if (swiperRef.current) {
      swiperRef.current.on('slideChange', resetAnimation)
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.off('slideChange', resetAnimation)
      }
    }
  }, [])

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
            delay: 4500,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
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
                  {item.image && <img src={item.image} alt="" />}
                </div>
                <div className="flex-1 text-white">
                  <p className="text-[18px] font-medium leading-[1.2] md:text-[24px]">
                    {item.name && item.name}
                  </p>
                  {item.content && (
                    <p
                      className="mt-4 text-[14px] font-medium leading-[2] md:mt-[30px] md:text-[16px]"
                      dangerouslySetInnerHTML={{
                        __html: item.content,
                      }}
                    ></p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mb-2 mt-4 flex justify-center">
          <div className="flex items-center space-x-2">
            {isAutoplayPaused ? (
              <button
                onClick={handlePlay}
                className="rounded-full bg-white/20 p-2 text-white transition-all hover:bg-white/30"
                aria-label="Play slideshow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            ) : (
              <button
                onClick={handlePause}
                className="rounded-full bg-white/20 p-2 text-white transition-all hover:bg-white/30"
                aria-label="Pause slideshow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              </button>
            )}
          </div>
        </div>

        <div className="swiper-pagination mt-6"></div>
      </div>
    </section>
  )
}

export default Artist
