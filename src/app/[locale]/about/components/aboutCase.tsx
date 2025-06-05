'use client'

import { ReactNode, useRef, useState, useEffect } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslations } from 'next-intl'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

type CaseItemPropsType = {
  id: string
  head: string
  title: ReactNode
  text: ReactNode
}

function CaseItem({ id, head, title, text }: CaseItemPropsType) {
  const contentRef = useRef(null)
  const arrowRef = useRef(null)
  const isClosedRef = useRef(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleExpand = () => {
    const $content = contentRef.current
    const $arrow = arrowRef.current
    if (isClosedRef.current) {
      gsap.set($content, { height: 'auto' })
      gsap.from($content, { duration: 0.2, height: 0 })
      gsap.to($arrow, {
        duration: 0.1,
        rotation: 90,
        transformOrigin: 'center',
      })
    } else {
      gsap.to($content, { duration: 0.2, height: 0 })
      gsap.to($arrow, { duration: 0.1, rotation: 0 })
    }
    isClosedRef.current = !isClosedRef.current
  }

  const handleMouseEnter = () => {
    if (!isMobile && isClosedRef.current) handleExpand()
  }

  const handleMouseLeave = () => {
    if (!isMobile && !isClosedRef.current) handleExpand()
  }

  const handleClick = () => {
    if (isMobile) handleExpand()
  }

  return (
    <div
      className="fade-up w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-between border-t border-[#999] py-5 font-light hover:opacity-75 md:px-5"
        onClick={handleClick}
      >
        <div className="flex flex-wrap items-start max-md:flex-col md:items-center">
          <div className="flex items-center text-[24px] md:text-[32px] lg:text-[48px]">
            <p className="mr-5 md:mr-[50px]">{id}</p>
            <p className="mr-4 whitespace-nowrap">{head} – </p>
          </div>
          <p className="text-left text-[14px] max-md:ml-12 md:text-[32px]">
            {title}
          </p>
        </div>
        <div className="relative ml-2 flex size-7 items-center justify-center duration-150 md:size-10 lg:size-[60px]">
          <span className="h-px w-full bg-[#9C8651]"></span>
          <span
            ref={arrowRef}
            className="absolute left-1/2 top-0 h-full w-px bg-[#9C8651]"
          ></span>
        </div>
      </button>
      <div ref={contentRef} className="h-0 overflow-hidden">
        <p className="mx-auto w-full max-w-[960px] px-5 pb-8 pt-1 text-[16px] leading-[1.4] md:pb-7 md:pt-4 md:text-[28px]">
          {text}
        </p>
      </div>
    </div>
  )
}

const AboutCase = () => {
  const t = useTranslations('About.Case')
  const svgRef = useRef<SVGSVGElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const caseData: CaseItemPropsType[] = [
    {
      id: '01',
      head: 'CONNECTION',
      title: t('title1'),
      text: t('content1'),
    },
    {
      id: '02',
      head: 'GROWTH',
      title: t('title2'),
      text: t('content2'),
    },
    {
      id: '03',
      head: 'INNOVATION',
      title: t('title3'),
      text: t('content3'),
    },
    {
      id: '04',
      head: 'AUTHENTICITY',
      title: t('title4'),
      text: t('content4'),
    },
    {
      id: '05',
      head: 'IMPACT',
      title: t('title5'),
      text: t('content5'),
    },
  ]

  useEffect(() => {
    if (!svgRef.current || !sectionRef.current) return

    const svgPaths = svgRef.current.querySelectorAll('path')

    gsap.set(svgPaths, {
      fill: 'transparent',
      stroke: '#A5884D',
      strokeWidth: 1,
    })

    const triggers: ScrollTrigger[] = []

    svgPaths.forEach((path) => {
      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: `top center`,
        end: `bottom top`,
        onEnter: function () {
          gsap.fromTo(
            path,
            { fill: 'transparent', duration: 0 },
            {
              fill: '#A5884D',
              duration: 0.6,
              ease: 'power2.out',
            }
          )
        },
        onLeave: function () {
          gsap.fromTo(
            path,
            { fill: '#A5884D', duration: 0 },
            {
              fill: 'transparent',
              duration: 0.4,
              ease: 'power2.in',
            }
          )
        },
        onEnterBack: function () {
          gsap.fromTo(
            path,
            { fill: 'transparent', duration: 0 },
            {
              fill: '#A5884D',
              duration: 0.6,
              ease: 'power2.out',
            }
          )
        },
        onLeaveBack: function () {
          gsap.fromTo(
            path,
            { fill: '#A5884D', duration: 0 },
            {
              fill: 'transparent',
              duration: 0.4,
              ease: 'power2.in',
            }
          )
        },
      })

      triggers.push(trigger)
    })

    return () => {
      triggers.forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative z-10 mb-[140px] md:mb-[240px]"
    >
      <div className="relative mx-auto h-full w-full max-w-[480px] px-5 md:max-w-[1380px]">
        <h3 className="fade-up flex items-center justify-center">
          <svg
            ref={svgRef}
            className="w-[1400]"
            xmlns="http://www.w3.org/2000/svg"
            width="1400"
            height="267"
            viewBox="0 0 1400 267"
            fill="none"
          >
            <mask id="path-1-inside-1_419_57" fill="white">
              <path d="M84.1243 267H116.383L153.895 201.936L191.407 267H223.74L153.895 145.913L84.1243 267Z" />
              <path d="M313.043 0L275.531 65.0641L238.019 0H205.686L275.531 121.087L329.172 28.0117H380.964L275.531 210.977L153.895 0L0 267H32.3327L153.895 56.0233L275.531 267L429.426 0H313.043Z" />
              <path d="M468.936 228.984H492.094L518.951 182.446L545.735 228.984H568.893L518.951 142.356L468.936 228.984Z" />
              <path d="M408.783 228.984H431.942L518.951 78.1066L605.887 228.984H629.046L518.951 38.0158L408.783 228.984Z" />
              <path d="M1266.97 176.666C1266.97 195.341 1251.8 210.532 1233.16 210.532C1214.51 210.532 1199.34 195.341 1199.34 176.666V99.6711H1180.92V176.666C1180.92 205.567 1204.38 229.058 1233.23 229.058C1245.66 229.058 1257.65 224.612 1267.04 216.609V229.058H1285.47V99.597H1267.04V176.592L1266.97 176.666Z" />
              <path d="M869.506 197.934L751.126 38.0158H737.216V228.984H755.713V75.2165L869.506 228.984H887.929V38.0158H869.506V197.934Z" />
              <path d="M972.646 99.597C937.057 99.597 908.054 128.646 908.054 164.291C908.054 199.935 937.057 228.984 972.646 228.984C997.95 228.984 1020.37 214.46 1030.95 192.006H1009.42C1000.83 203.492 987.443 210.458 972.646 210.458C935.208 210.458 928.031 176.296 927.513 173.48H1036.65C1036.65 173.48 1037.24 166.44 1037.24 164.216C1037.24 141.096 1020.89 99.5229 972.646 99.5229V99.597ZM927.513 155.102C931.804 133.759 950.671 118.123 972.646 118.123C994.62 118.123 1013.49 133.759 1017.78 155.102H927.439H927.513Z" />
              <path d="M704.069 124.274H627.27V142.726H704.069V124.274Z" />
              <path d="M1138.16 99.597L1104.2 148.21L1070.24 99.597H1047.74L1092.95 164.291L1047.74 228.984H1070.24L1104.2 180.445L1138.16 228.984H1160.72L1115.44 164.291L1160.72 99.597H1138.16Z" />
              <path d="M1384.24 161.771C1378.03 157.399 1370.7 155.027 1363.08 155.027H1342.44C1332.23 155.027 1324.01 146.728 1324.01 136.575C1324.01 126.423 1332.3 118.123 1342.44 118.123H1363.08C1373.29 118.123 1381.5 126.423 1381.5 136.575H1399.93C1399.93 116.197 1383.35 99.597 1363.01 99.597H1342.36C1322.02 99.597 1305.44 116.197 1305.44 136.575C1305.44 148.58 1311.36 159.844 1321.2 166.81C1327.49 171.182 1334.74 173.554 1342.36 173.554H1363.01C1373.22 173.554 1381.43 181.853 1381.43 192.006C1381.43 202.158 1373.14 210.458 1363.01 210.458H1342.36C1332.15 210.458 1323.94 202.158 1323.94 191.932H1305.52C1305.52 212.311 1322.09 228.91 1342.44 228.91H1363.08C1383.43 228.91 1400 212.311 1400 191.932C1400 179.927 1394.08 168.589 1384.24 161.697V161.771Z" />
            </mask>
            <path
              d="M84.1243 267H116.383L153.895 201.936L191.407 267H223.74L153.895 145.913L84.1243 267Z"
              stroke="url(#paint0_linear_419_57)"
              strokeWidth="2"
              mask="url(#path-1-inside-1_419_57)"
            />
            <path
              d="M313.043 0L275.531 65.0641L238.019 0H205.686L275.531 121.087L329.172 28.0117H380.964L275.531 210.977L153.895 0L0 267H32.3327L153.895 56.0233L275.531 267L429.426 0H313.043Z"
              stroke="url(#paint1_linear_419_57)"
              strokeWidth="2"
              mask="url(#path-1-inside-1_419_57)"
            />
            <path
              d="M468.936 228.984H492.094L518.951 182.446L545.735 228.984H568.893L518.951 142.356L468.936 228.984Z"
              stroke="url(#paint2_linear_419_57)"
              strokeWidth="2"
              mask="url(#path-1-inside-1_419_57)"
            />
            <path
              d="M408.783 228.984H431.942L518.951 78.1066L605.887 228.984H629.046L518.951 38.0158L408.783 228.984Z"
              stroke="url(#paint3_linear_419_57)"
              strokeWidth="2"
              mask="url(#path-1-inside-1_419_57)"
            />
            <path
              d="M1266.97 176.666C1266.97 195.341 1251.8 210.532 1233.16 210.532C1214.51 210.532 1199.34 195.341 1199.34 176.666V99.6711H1180.92V176.666C1180.92 205.567 1204.38 229.058 1233.23 229.058C1245.66 229.058 1257.65 224.612 1267.04 216.609V229.058H1285.47V99.597H1267.04V176.592L1266.97 176.666Z"
              stroke="url(#paint4_linear_419_57)"
              strokeWidth="2"
              mask="url(#path-1-inside-1_419_57)"
            />
            <path
              d="M869.506 197.934L751.126 38.0158H737.216V228.984H755.713V75.2165L869.506 228.984H887.929V38.0158H869.506V197.934Z"
              stroke="url(#paint5_linear_419_57)"
              strokeWidth="2"
              mask="url(#path-1-inside-1_419_57)"
            />
            <path
              d="M972.646 99.597C937.057 99.597 908.054 128.646 908.054 164.291C908.054 199.935 937.057 228.984 972.646 228.984C997.95 228.984 1020.37 214.46 1030.95 192.006H1009.42C1000.83 203.492 987.443 210.458 972.646 210.458C935.208 210.458 928.031 176.296 927.513 173.48H1036.65C1036.65 173.48 1037.24 166.44 1037.24 164.216C1037.24 141.096 1020.89 99.5229 972.646 99.5229V99.597ZM927.513 155.102C931.804 133.759 950.671 118.123 972.646 118.123C994.62 118.123 1013.49 133.759 1017.78 155.102H927.439H927.513Z"
              stroke="url(#paint6_linear_419_57)"
              strokeWidth="2"
              mask="url(#path-1-inside-1_419_57)"
            />
            <path
              d="M704.069 124.274H627.27V142.726H704.069V124.274Z"
              stroke="url(#paint7_linear_419_57)"
              strokeWidth="2"
              mask="url(#path-1-inside-1_419_57)"
            />
            <path
              d="M1138.16 99.597L1104.2 148.21L1070.24 99.597H1047.74L1092.95 164.291L1047.74 228.984H1070.24L1104.2 180.445L1138.16 228.984H1160.72L1115.44 164.291L1160.72 99.597H1138.16Z"
              stroke="url(#paint8_linear_419_57)"
              strokeWidth="2"
              mask="url(#path-1-inside-1_419_57)"
            />
            <path
              d="M1384.24 161.771C1378.03 157.399 1370.7 155.027 1363.08 155.027H1342.44C1332.23 155.027 1324.01 146.728 1324.01 136.575C1324.01 126.423 1332.3 118.123 1342.44 118.123H1363.08C1373.29 118.123 1381.5 126.423 1381.5 136.575H1399.93C1399.93 116.197 1383.35 99.597 1363.01 99.597H1342.36C1322.02 99.597 1305.44 116.197 1305.44 136.575C1305.44 148.58 1311.36 159.844 1321.2 166.81C1327.49 171.182 1334.74 173.554 1342.36 173.554H1363.01C1373.22 173.554 1381.43 181.853 1381.43 192.006C1381.43 202.158 1373.14 210.458 1363.01 210.458H1342.36C1332.15 210.458 1323.94 202.158 1323.94 191.932H1305.52C1305.52 212.311 1322.09 228.91 1342.44 228.91H1363.08C1383.43 228.91 1400 212.311 1400 191.932C1400 179.927 1394.08 168.589 1384.24 161.697V161.771Z"
              stroke="url(#paint9_linear_419_57)"
              strokeWidth="2"
              mask="url(#path-1-inside-1_419_57)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_419_57"
                x1="1400"
                y1="267"
                x2="1078.58"
                y2="-453.444"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0208333" stopColor="#A5884D" />
                <stop offset="0.360577" stopColor="#EAC885" />
                <stop offset="0.519231" stopColor="#FFF2DB" />
                <stop offset="1" stopColor="#A5884D" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_419_57"
                x1="1400"
                y1="267"
                x2="1078.58"
                y2="-453.444"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0208333" stopColor="#A5884D" />
                <stop offset="0.360577" stopColor="#EAC885" />
                <stop offset="0.519231" stopColor="#FFF2DB" />
                <stop offset="1" stopColor="#A5884D" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_419_57"
                x1="1400"
                y1="267"
                x2="1078.58"
                y2="-453.444"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0208333" stopColor="#A5884D" />
                <stop offset="0.360577" stopColor="#EAC885" />
                <stop offset="0.519231" stopColor="#FFF2DB" />
                <stop offset="1" stopColor="#A5884D" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_419_57"
                x1="1400"
                y1="267"
                x2="1078.58"
                y2="-453.444"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0208333" stopColor="#A5884D" />
                <stop offset="0.360577" stopColor="#EAC885" />
                <stop offset="0.519231" stopColor="#FFF2DB" />
                <stop offset="1" stopColor="#A5884D" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_419_57"
                x1="1400"
                y1="267"
                x2="1078.58"
                y2="-453.444"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0208333" stopColor="#A5884D" />
                <stop offset="0.360577" stopColor="#EAC885" />
                <stop offset="0.519231" stopColor="#FFF2DB" />
                <stop offset="1" stopColor="#A5884D" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_419_57"
                x1="1400"
                y1="267"
                x2="1078.58"
                y2="-453.444"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0208333" stopColor="#A5884D" />
                <stop offset="0.360577" stopColor="#EAC885" />
                <stop offset="0.519231" stopColor="#FFF2DB" />
                <stop offset="1" stopColor="#A5884D" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_419_57"
                x1="1400"
                y1="267"
                x2="1078.58"
                y2="-453.444"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0208333" stopColor="#A5884D" />
                <stop offset="0.360577" stopColor="#EAC885" />
                <stop offset="0.519231" stopColor="#FFF2DB" />
                <stop offset="1" stopColor="#A5884D" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_419_57"
                x1="1400"
                y1="267"
                x2="1078.58"
                y2="-453.444"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0208333" stopColor="#A5884D" />
                <stop offset="0.360577" stopColor="#EAC885" />
                <stop offset="0.519231" stopColor="#FFF2DB" />
                <stop offset="1" stopColor="#A5884D" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_419_57"
                x1="1400"
                y1="267"
                x2="1078.58"
                y2="-453.444"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0208333" stopColor="#A5884D" />
                <stop offset="0.360577" stopColor="#EAC885" />
                <stop offset="0.519231" stopColor="#FFF2DB" />
                <stop offset="1" stopColor="#A5884D" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_419_57"
                x1="1400"
                y1="267"
                x2="1078.58"
                y2="-453.444"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0208333" stopColor="#A5884D" />
                <stop offset="0.360577" stopColor="#EAC885" />
                <stop offset="0.519231" stopColor="#FFF2DB" />
                <stop offset="1" stopColor="#A5884D" />
              </linearGradient>
            </defs>
          </svg>
        </h3>
        <div className="mx-auto mt-10 w-full max-w-[1200px]">
          <div className="">
            {caseData.map(({ id, head, title, text }) => (
              <CaseItem
                key={id}
                id={id}
                head={head}
                title={title}
                text={text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCase
