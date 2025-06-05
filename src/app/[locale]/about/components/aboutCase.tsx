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
          <span className="h-px w-full bg-[#F34927]"></span>
          <span
            ref={arrowRef}
            className="absolute left-1/2 top-0 h-full w-px bg-[#F34927]"
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
      stroke: '#F34927',
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
              fill: '#F34927',
              duration: 0.6,
              ease: 'power2.out',
            }
          )
        },
        onLeave: function () {
          gsap.fromTo(
            path,
            { fill: '#F34927', duration: 0 },
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
              fill: '#F34927',
              duration: 0.6,
              ease: 'power2.out',
            }
          )
        },
        onLeaveBack: function () {
          gsap.fromTo(
            path,
            { fill: '#F34927', duration: 0 },
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
            className="w-[1195px]"
            viewBox="0 0 1195 313"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M126.513 0.5L174.071 308.498H127.819L118.883 248.301L118.819 247.874H55.835L55.7715 248.301L46.835 308.498H0.580078L48.1416 0.5H126.513ZM62.9854 204.263L62.8994 204.837H111.772L111.687 204.263L87.8301 43.9297H86.8408L62.9854 204.263Z"
              stroke="#F34927"
            />
            <path
              d="M312.468 153.256V189.91H222.334V153.256H312.468Z"
              stroke="#F34927"
            />
            <path
              d="M425.776 0.5L498.97 182.521L499.934 182.335V0.5H546.59V308.498H499.771L426.578 126.477L425.614 126.663V308.498H378.958V0.5H425.776Z"
              stroke="#F34927"
            />
            <path
              d="M643.681 45.5C653.331 45.5 662.226 47.4511 670.15 51.3027L670.914 51.6807L670.917 51.6826L670.948 51.6982V51.6973C679.052 55.8028 686.042 61.5061 691.736 68.6699H691.737C703.097 84.0303 708.878 103.541 708.878 126.736V198.729H622.634V233.799C622.634 241.59 624.406 247.782 627.975 252.15L628.326 252.567C632.099 256.925 637.283 259.13 643.697 259.13C647.744 259.13 651.115 258.443 653.817 257.021C656.358 255.685 658.283 253.711 659.617 251.104L659.875 250.575L659.876 250.573C662.368 245.195 663.978 239.74 664.637 234.325L664.756 233.243L664.757 233.239L664.779 232.996H708.863V233.271C708.863 255.782 703.125 274.215 691.843 288.112L691.302 288.771L691.295 288.78C685.79 295.699 679.11 301.287 671.466 305.35L670.723 305.738C662.751 309.839 653.658 311.918 643.697 311.918C630.435 311.918 618.978 308.665 609.627 302.251L608.729 301.62L608.728 301.619L607.842 300.975C599.04 294.46 592.077 285.868 587.133 275.418L586.645 274.367V274.365L586.354 273.724C583.574 267.481 581.581 260.311 580.436 252.372L580.211 250.719L580.005 249.051C579.006 240.656 578.5 231.399 578.5 221.484V135.934C578.5 126.034 579.006 116.764 580.005 108.367L580.211 106.699C581.31 98.0999 583.383 90.3672 586.354 83.6943L586.645 83.0518V83.0508C591.615 72.1401 598.732 63.2049 607.841 56.4453L608.729 55.7979C618.257 48.9665 630.008 45.5 643.681 45.5ZM643.666 98.3027C637.464 98.3027 632.4 100.605 628.666 105.167L628.309 105.615L628.308 105.616C624.498 110.535 622.603 118.001 622.603 127.729V157.17H664.744V127.729C664.744 118.305 662.965 111.003 659.389 106.084L659.038 105.616V105.615C655.272 100.772 650.084 98.3028 643.681 98.3027H643.666Z"
              stroke="#F34927"
            />
            <path
              d="M772.478 48.1377L798.708 120.068L799.178 121.356L799.647 120.068L825.878 48.1377H872.597L872.446 48.5195L820.899 175.265L820.822 175.453L820.899 175.642L875.161 308.398H828.437L828.369 308.215L828.368 308.212L799.646 230.788L799.178 229.524L798.709 230.788L769.905 308.398H723.19L776.599 175.64L776.673 175.453L776.599 175.268L725.747 48.1377H772.478Z"
              stroke="#F34927"
            />
            <path
              d="M944.976 48.1377V228.232C944.976 237.362 946.698 244.724 950.137 250.1L950.475 250.613L950.476 250.614C954.145 256.031 959.265 258.682 966.038 258.682C970.097 258.682 973.527 257.954 976.337 256.447C979.153 254.937 981.317 252.66 982.865 249.614L982.864 249.613C985.99 243.492 987.537 234.559 987.537 223.099V48.1377H1031.64V308.398H987.537V282.596L986.604 284.222C982.307 291.705 977.157 298.007 971.283 302.979L970.712 303.456C964.297 308.75 955.992 311.453 945.99 311.453C940.922 311.453 935.766 310.471 930.676 308.515L929.658 308.11L929.657 308.109L929.15 307.897C924.098 305.733 919.496 302.239 915.436 297.501L915.031 297.023C910.894 292.064 907.51 285.663 904.976 277.964L904.733 277.215L904.497 276.46C902.099 268.606 900.872 258.932 900.872 247.682V48.1377H944.976Z"
              stroke="#F34927"
            />
            <path
              d="M1130.01 45.098C1138.55 45.098 1146.61 46.8876 1153.98 50.4213L1154.69 50.7689C1162 54.4174 1168.39 59.5663 1173.7 66.0941L1174.21 66.7299C1179.44 73.3513 1183.65 81.2525 1186.76 90.2699L1187.06 91.1459C1190.19 100.537 1191.77 110.642 1191.77 121.201V121.476H1150.22L1150.21 121.21C1149.94 112.774 1147.76 106.237 1143.65 101.834L1143.25 101.414L1142.84 101.012C1138.61 96.9281 1133.71 94.8305 1128.29 94.8304C1121.83 94.8304 1116.69 97.2978 1113.08 102.164L1112.74 102.643V102.644C1109.08 107.867 1107.23 113.939 1107.23 120.673C1107.23 125.102 1108.11 129.514 1109.83 133.79L1110.19 134.644C1112.17 139.224 1117.35 143.368 1125.41 147.039V147.04L1151.04 159.339L1151.05 159.342C1167.27 166.843 1178.58 177.238 1184.69 190.199L1185.14 189.986L1184.69 190.2L1184.7 190.21L1184.71 190.229V190.23C1190.81 203.202 1193.91 217.537 1193.91 232.87C1193.91 243.769 1192.27 254.042 1188.99 263.429C1185.82 272.503 1181.47 280.658 1176.03 287.672L1175.5 288.347C1169.98 295.282 1163.32 300.869 1155.66 304.932L1154.92 305.321H1154.91C1146.95 309.423 1138.14 311.5 1128.75 311.5C1111.38 311.5 1096.57 304.963 1084.7 292.046L1084.14 291.426L1084.13 291.42L1083.58 290.81C1078.04 284.652 1073.45 276.963 1069.92 267.924L1069.57 267.015C1065.98 257.597 1063.97 246.528 1063.58 234.069L1063.55 232.859V232.578H1105.08L1105.11 232.818V232.82C1105.92 239.714 1107.9 246.201 1110.97 252.136L1111.27 252.709C1112.89 255.752 1115.1 258.03 1117.95 259.542C1120.79 261.052 1124.24 261.784 1128.31 261.784C1134.29 261.783 1139.74 259.452 1144.52 254.89L1144.98 254.442C1149.9 249.547 1152.37 242.612 1152.37 233.894C1152.37 227.046 1150.9 221.052 1147.99 216.074L1147.71 215.595L1147.71 215.594L1147.41 215.12C1144.33 210.408 1138.97 206.246 1131.5 202.737L1130.75 202.388L1130.74 202.386L1109.84 193.174H1109.84C1096.61 187.216 1085.97 178.341 1078.22 166.786L1077.48 165.66L1077.48 165.659C1069.68 153.58 1065.7 138.619 1065.7 121.201C1065.7 110.629 1067.32 100.659 1070.52 91.5131L1070.84 90.6312V90.6302C1074.13 81.5462 1078.7 73.556 1084.41 66.851L1084.97 66.2064L1084.98 66.1976C1090.48 59.5936 1097.03 54.4234 1104.42 50.851L1105.13 50.5111L1105.13 50.5101C1112.82 46.9133 1121.19 45.098 1130.01 45.098Z"
              stroke="#F34927"
            />
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
