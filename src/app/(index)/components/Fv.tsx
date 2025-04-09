'use client'

import { useEffect, useRef, useState } from 'react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import InfiniteImageGrid from './infiniteImageGrid'

gsap.registerPlugin(ScrollTrigger)
gsap.config({
  nullTargetWarn: false,
})

type MediaType = 'image' | 'video'
interface MediaItemData {
  type: MediaType
  src: string
}

const ALL_MEDIA_ITEMS: MediaItemData[] = [
  { type: 'image', src: '/assets/images/home/icons/fv-01.png' },
  { type: 'video', src: '/assets/videos/home/icons/fv-02.mp4' },
  { type: 'image', src: '/assets/images/home/icons/fv-03.png' },
  { type: 'video', src: '/assets/videos/home/icons/fv-04.mp4' },
  { type: 'image', src: '/assets/images/home/icons/fv-05.png' },
  { type: 'video', src: '/assets/videos/home/icons/fv-06.mp4' },
  { type: 'image', src: '/assets/images/home/icons/fv-07.png' },
  { type: 'image', src: '/assets/images/home/icons/fv-08.png' },
  { type: 'image', src: '/assets/images/home/icons/fv-09.png' },
  { type: 'video', src: '/assets/videos/home/icons/fv-10.mp4' },
  { type: 'image', src: '/assets/images/home/icons/fv-11.png' },
  { type: 'image', src: '/assets/images/home/icons/fv-12.png' },
  { type: 'image', src: '/assets/images/home/icons/fv-13.png' },
  { type: 'video', src: '/assets/videos/home/icons/fv-14.mp4' },
  { type: 'image', src: '/assets/images/home/icons/fv-15.png' },
  { type: 'image', src: '/assets/images/home/icons/fv-16.png' },
  { type: 'video', src: '/assets/videos/home/icons/fv-17.mp4' },
  { type: 'image', src: '/assets/images/home/icons/fv-18.png' },
  { type: 'video', src: '/assets/videos/home/icons/fv-19.mp4' },
  { type: 'video', src: '/assets/videos/home/icons/fv-20.mp4' },
]

const PRIORITY_MEDIA_ITEMS = ALL_MEDIA_ITEMS.slice(0, 20)

const FV = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const containerRef = useRef<HTMLDivElement>(null)
  const containerWrapRef = useRef<HTMLDivElement>(null)
  const charScrollRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [isLoading])

  useEffect(() => {
    let st: ScrollTrigger | null = null

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

        const tl = gsap.timeline({
          scrollTrigger: {
            id: 'fv-scroll-trigger',
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            pin: true,
            pinSpacing: true,
            scrub: 0.9,
            anticipatePin: 1,
          },
        })

        if (tl.scrollTrigger) {
          st = tl.scrollTrigger as ScrollTrigger
        }

        tl.to(containerWrapRef.current, {
          opacity: 1,
        }).to(
          charScroll,
          {
            stagger: 1,
            duration: 1,
            color: '#F34927',
          },
          0.1
        )

        ScrollTrigger.refresh()
      }
    }

    initAnimation()

    return () => {
      if (st) {
        st.kill()
      }
      ScrollTrigger.getById('fv-scroll-trigger')?.kill()
    }
  }, [])

  return (
    <>
      <div className="fv-section">
        <div className="h-screen min-h-screen overflow-hidden p-4">
          <div
            className="absolute inset-0 z-30 h-screen w-full overflow-hidden"
            ref={containerRef}
          >
            <div className="relative z-30 flex h-full flex-col justify-center overflow-hidden md:justify-between">
              <span className="absolute inset-0 bg-[url(/assets/images/home/svg-deco.svg)] bg-contain bg-center bg-no-repeat opacity-30"></span>
              <InfiniteImageGrid
                rowNum={5}
                imgNum={28}
                mediaItems={PRIORITY_MEDIA_ITEMS}
                onLoadComplete={() => setIsLoading(false)}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 z-40 h-screen w-full">
              <div
                ref={containerWrapRef}
                className="flex h-full flex-col items-center justify-center"
              >
                <h1
                  ref={charScrollRef}
                  data-splitting
                  className="relative z-50 text-center text-[10vw] font-bold leading-[1.8] text-[#FAE2D7] [text-shadow:2px_0_#fff,_-2px_0_#fff,_0_2px_#fff,_0_-2px_#fff,_1px_1px_#fff,_-1px_-1px_#fff,_1px_-1px_#fff,_-1px_1px_#fff] md:text-[72px]"
                >
                  Unleashing <br className="md:hidden" />
                  Global <br />
                  Entertainment <br className="md:hidden" />
                  Value <br />
                  Across Borders
                </h1>
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
