'use client'

import { ReactNode, useEffect, useLayoutEffect, useRef } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslations } from 'next-intl'
import AboutCase from './aboutCase'
import { useGradientText } from '@/hooks/useGradientText'

gsap.registerPlugin(ScrollTrigger)
gsap.config({
  nullTargetWarn: false,
})

const AboutItem = ({
  title,
  content,
  image,
  even = false,
}: {
  title: ReactNode
  content: ReactNode
  image: string
  even?: boolean
}) => {
  const titleRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useGradientText(titleRef)

  useEffect(() => {
    if (typeof window === 'undefined' || !titleRef.current) return

    import('splitting').then((Splitting) => {
      requestAnimationFrame(() => {
        Splitting.default()

        const chars = titleRef.current?.querySelectorAll('.char')
        if (chars && chars.length > 0) {
          gsap.set(chars, {
            opacity: 0,
            display: 'inline-block',
            y: '150%',
          })

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          })

          chars.forEach((char, index) => {
            tl.to(
              char,
              {
                opacity: 1,
                y: 0,
                duration: 0.25,
                delay: 0.25 + index * 0.1,
                ease: 'power2.out',
              },
              0
            )
          })

          if (imageRef.current) {
            tl.fromTo(
              imageRef.current,
              { opacity: 0, filter: 'blur(10px)' },
              {
                opacity: 1,
                filter: 'blur(0px)',
                duration: 1,
              }
            )
          }

          if (contentRef.current) {
            tl.fromTo(
              contentRef.current,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
              },
              0.5
            )
          }
        }
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [title, content, image])

  return (
    <div className="mx-auto w-full max-w-[1440px]">
      <h2
        ref={titleRef}
        className="text-[12vw] font-semibold leading-[0.88] md:ml-[-12px] md:text-[18vw] xl:ml-[-24px] xl:text-[240px] u-text-gradient u-gradient-02"
        data-splitting
      >
        {title}
      </h2>
      <div
        className={`-mt-[3vw] flex gap-7 max-xl:flex-col-reverse max-xl:items-center max-xl:justify-center md:-mt-[5vw] md:gap-10 xl:-mt-[110px] ${
          even ? 'flex-row-reverse xl:pr-[100px]' : 'xl:pl-[100px]'
        }`}
      >
        <div className="flex-1 xl:pt-[260px]">
          <div
            ref={contentRef}
            className="w-full max-w-[860px] text-[16px] font-medium leading-loose max-xl:px-5 md:text-[20px] xl:max-w-[440px]"
          >
            {content}
          </div>
        </div>
        <div ref={imageRef} className="w-full max-w-[860px] xl:w-[65%]">
          <img
            src={image}
            alt=""
            className={`h-auto w-full rounded-[20px] md:rounded-[40px]`}
          />
        </div>
      </div>
    </div>
  )
}

const AboutContent = () => {
  const t = useTranslations('About')
  const tTrends = useTranslations('About.Trends')
  const tBusinesss = useTranslations('About.Business')
  const animationRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  const trends = [
    {
      title: tTrends('ContentConvergence'),
      description: tTrends('ContentConvergenceDescription'),
    },
    {
      title: tTrends('DigitalTransformation'),
      description: tTrends('DigitalTransformationDescription'),
    },
    {
      title: tTrends('CrossCulturalAppeal'),
      description: tTrends('CrossCulturalAppealDescription'),
    },
    {
      title: tTrends('EmergingMarkets'),
      description: tTrends('EmergingMarketsDescription'),
    },
  ]

  const business = [
    {
      id: 1,
      title: tBusinesss('RightsAcquisitionManagement'),
      description: tBusinesss('RightsAcquisitionManagementDescription'),
    },
    {
      id: 2,
      title: tBusinesss('CrossPlatformDistribution'),
      description: tBusinesss('CrossPlatformDistributionDescription'),
    },
    {
      id: 3,
      title: tBusinesss('ProductionServices'),
      description: tBusinesss('ProductionServicesDescription'),
    },
    {
      id: 4,
      title: tBusinesss('MarketAccess'),
      description: tBusinesss('MarketAccessDescription'),
    },
    {
      id: 5,
      title: tBusinesss('BrandDevelopment'),
      description: tBusinesss('BrandDevelopmentDescription'),
    },
    {
      id: 6,
      title: tBusinesss('TechnologyIntegration'),
      description: tBusinesss('TechnologyIntegrationDescription'),
    },
  ]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>('.panel')
      const sliderContainer = sliderRef.current
      const container = containerRef.current

      if (!sliderContainer || !container) return

      const endValue = () => '+=' + sliderContainer.offsetWidth

      gsap.to(panels, {
        left: 0,
        scrollTrigger: {
          trigger: animationRef.current,
          start: 'top top',
        },
      })

      gsap.to(panels, {
        x: -sliderContainer.offsetWidth + window.innerWidth,
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: 'center center',
          end: endValue,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div>
      <div className="mb-[110px] md:mb-[210px]">
        <AboutItem
          title={
            <>
              COMPANY <br />
              VISION
            </>
          }
          content={<p>{t('CompanyVision')}</p>}
          image="/assets/images/about/about-01.png"
        />
      </div>
      <AboutCase />
      <div className="mb-[110px] md:mb-[210px]">
        <AboutItem
          title={
            <>
              MARKET <br />
              OVERVIEW
            </>
          }
          content={<p>{t('MarketOverview')}</p>}
          image="/assets/images/about/about-02.png"
          even
        />
        <div className="mx-auto mt-10 max-w-[1120px] px-5 md:mt-16">
          <div
            data-scroll="out"
            className="ani-fade-up border border-[#111]/[0.2]"
          >
            {trends.map((trend, index) => (
              <div
                key={index}
                className="flex border-b border-[#111]/[0.2] last:border-b-0"
              >
                <div className="flex min-h-[94px] w-[120px] items-center justify-center border-r border-[#111]/[0.2] bg-[#EEEEEE] p-5 text-center text-[14px] font-bold md:w-[280px] md:text-[18px] xl:w-[400px]">
                  {trend.title}
                </div>
                <div className="flex max-w-[680px] flex-1 items-center p-5 text-[14px] md:text-[18px]">
                  {trend.description}
                </div>
              </div>
            ))}
          </div>

          <div
            data-scroll="out"
            className="ani-fade-up mt-8 text-center text-[18px] font-bold md:mt-[60px] md:text-[24px]"
          >
            <p>{tTrends('Text')}</p>
          </div>
        </div>
      </div>
      <div className="mb-[210px]">
        <AboutItem
          title={
            <>
              BUSINESS <br />
              APPROACH
            </>
          }
          content={<p>{t('BusinessApproach')}</p>}
          image="/assets/images/about/about-03.png"
        />
        <div className="relative mt-12 w-full pb-20 md:mt-[-60px]">
          <div
            ref={animationRef}
            className="overflow-hidden pt-[3em] md:pt-[9em]"
          >
            <div ref={containerRef} className="flex items-center">
              <div className="relative">
                <div
                  ref={sliderRef}
                  className="mx-[10vw] my-[7rem] flex h-[60rem] max-h-[calc(100vh-8rem)] w-[calc(((350px_*_6)_+_(4vw_*_5))_+_41vw)] items-center gap-[4vw] md:max-h-[calc(100vh-10rem)] md:w-[calc(((564px_*_6)_+_(3vw_*_5))_+_80vw)] md:gap-[3vw]"
                >
                  {business.map((item) => (
                    <div
                      key={item.id}
                      className="panel mx-2.5 !h-[350px] !w-[330px] rounded-[30px] bg-[#EEEEEE] md:!h-[472px] md:!w-[564px]"
                    >
                      <div className="relative p-5 md:p-[30px]">
                        <div className="relative flex h-[90px] w-16 justify-between md:h-[167px] md:w-[130px]">
                          <span className="text-[50px] font-medium leading-none text-black md:text-[120px]">
                            {item.id}
                          </span>
                          <span className="absolute left-4 top-0 h-[80px] w-px origin-bottom rotate-[30deg] bg-[#111] md:left-10 md:h-[160px]"></span>
                          <span className="flex items-end pb-3 text-[32px] font-medium leading-none md:text-[64px]">
                            {business.length}
                          </span>
                        </div>
                        <div className="px-2 py-5 md:px-[18px] md:py-10">
                          <p className="text-center text-[20px] font-semibold md:text-[24px]">
                            {item.title}
                          </p>
                          <p className="mt-[20px] text-[15px] md:mt-[30px] md:text-[18px]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
