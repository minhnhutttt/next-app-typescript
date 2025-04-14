'use client'

import { useEffect, useRef, useState } from 'react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLocale, useTranslations } from 'next-intl'

gsap.registerPlugin(ScrollTrigger)
gsap.config({
  nullTargetWarn: false,
})

const FV = () => {
  const t = useTranslations('Home.Fv')
  const locale = useLocale()
  const containerRef = useRef<HTMLDivElement>(null)
  const containerWrapRef = useRef<HTMLDivElement>(null)
  const anexusTop = useRef<HTMLDivElement>(null)
  const anexusMid = useRef<HTMLDivElement>(null)
  const anexusBottom = useRef<HTMLDivElement>(null)
  const anexus = useRef<HTMLDivElement>(null)
  const arrowRef = useRef<HTMLDivElement>(null)
  const charScrollRef = useRef<HTMLHeadingElement>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'

      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 1000)

      return () => {
        clearTimeout(timer)
        document.body.style.overflow = ''
        document.body.style.touchAction = ''
      }
    } else {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [isLoading])

  useEffect(() => {
    const initAnimation = async () => {
      const Splitting: { default: () => void } = await import('splitting')
      Splitting.default()

      if (charScrollRef.current) {
        const charScroll = charScrollRef.current.querySelectorAll('.char')

        if (!charScroll.length) {
          return
        }

        gsap.set(charScroll, {
          display: 'inline-block',
        })

        gsap.set(containerWrapRef.current, {
          opacity: 0,
        })

        const startTl = gsap.timeline()
        gsap.set(anexus.current, {
          opacity: 0,
        })
        gsap.set(charScroll, {
          opacity: 0,
          filter: 'blur(4px)',
        })
        gsap.set(containerWrapRef.current, {
          scale: 0.94,
        })
        if (isLoading) {
          startTl
            .to(anexus.current, {
              opacity: 1,
              duration: 1,
              delay: 1,
            })
            .to(anexusTop.current, {
              yPercent: -70,
              duration: 1,
            })
            .to(
              anexusBottom.current,
              {
                yPercent: 70,
                duration: 1,
              },
              '<'
            )
            .to(anexus.current, {
              opacity: 0.7,
              duration: 0.2,
            })
            .to(containerWrapRef.current, {
              opacity: 1,
              scale: 1,
              duration: 2,
            })
            .to(
              charScroll,
              {
                stagger: 0.04,
                opacity: 1,
                duration: 0.8,
                filter: 'blur(0px)',
              },
              '<'
            )
            .to(arrowRef.current, {
              opacity: 1,
              duration: 0.8,
            })
        }
      }
    }
    initAnimation()
  }, [])

  return (
    <>
      <div className="fv-section">
        <div className="relative h-screen min-h-screen">
          <div className="h-full w-screen overflow-hidden" ref={containerRef}>
            <div
              ref={anexus}
              className="absolute inset-0 flex items-center justify-center p-5"
            >
              <div className="relative flex h-full w-full items-center justify-center">
                <p ref={anexusTop} className="absolute">
                  <img src="/assets/images/home/anexus-top.svg" alt="" />
                </p>
                <p ref={anexusMid} className="">
                  <img src="/assets/images/home/anexus-mid.svg" alt="" />
                </p>
                <p ref={anexusBottom} className="absolute">
                  <img src="/assets/images/home/anexus-bottom.svg" alt="" />
                </p>
              </div>
            </div>
            <div className="relative h-full w-screen">
              <div
                ref={containerWrapRef}
                className="relative flex h-full w-screen flex-col items-center justify-center overflow-hidden"
              >
                <h1
                  ref={charScrollRef}
                  data-splitting
                  className="relative z-50 px-4 text-center text-[10vw] font-bold leading-[1.8] text-[#F34927] [text-shadow:2px_0_#fff,_-2px_0_#fff,_0_2px_#fff,_0_-2px_#fff,_1px_1px_#fff,_-1px_-1px_#fff,_1px_-1px_#fff,_-1px_1px_#fff] md:text-[72px]"
                >
                  {locale === 'en' ? (
                    <>
                      {t('Unleashing')}
                      <br className="md:hidden" />
                      {t('Global')}
                      <br />
                      {t('Entertainment')}
                      <br className="md:hidden" />
                      {t('Value')}
                      <br />
                      {t('AcrossBorders')}
                    </>
                  ) : (
                    <>
                      {t('Unleashing')}
                      <br className="max-lg:hidden" />
                      {t('Global')}
                      <br className="max-lg:hidden" />
                      {t('Entertainment')}
                    </>
                  )}
                </h1>
                <div
                  ref={arrowRef}
                  className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center justify-center opacity-0 md:bottom-10"
                >
                  <svg
                    className="arrows aspect-[60/72] w-10 md:w-[60px]"
                    viewBox="0 0 60 72"
                  >
                    <path
                      className="animate-[arrow_2s_infinite] fill-transparent stroke-[#F34927] stroke-1 [animation-delay:-1s]"
                      d="M0 0 L30 32 L60 0"
                    ></path>
                    <path
                      className="animate-[arrow_2s_infinite] fill-transparent stroke-[#F34927] stroke-1 [animation-delay:-0.5s]"
                      d="M0 20 L30 52 L60 20"
                    ></path>
                    <path
                      className="animate-[arrow_2s_infinite] fill-transparent stroke-[#F34927] stroke-1 [animation-delay:0s]"
                      d="M0 40 L30 72 L60 40"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
          <div className="flex flex-col items-center">
            <span className="relative inline-block size-[80px] animate-[spin_1s_linear_infinite] text-[#FFF] before:absolute before:bottom-[0] before:top-auto before:size-6 before:animate-[scale50_1s_infinite_ease-in-out] before:rounded-[50%] before:bg-[#F34927] before:[animation-delay:0.5s] after:absolute after:top-[0] after:size-6 after:animate-[scale50_1s_infinite_ease-in-out] after:rounded-[50%] after:bg-[#111] md:size-[100px] md:before:size-[36px] md:after:size-[36px]" />
          </div>
        </div>
      )}
    </>
  )
}

export default FV
