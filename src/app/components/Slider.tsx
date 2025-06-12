// components/SplideSlider.tsx
'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'
// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';

interface SlideData {
  id: string
  src: string,
  title: ReactNode,
  text: ReactNode,
}

interface SplideSliderProps {
  slides?: SlideData[]
  autoplayInterval?: number
  className?: string
  showPagination?: boolean
  showProgress?: boolean
}

const defaultSlides: SlideData[] = [
  {
    id: '1',
    src: '/assets/images/slider-01.png',
    title: (<>オープン<br />フェイヴ？</>),
    text: (<>OPEN FAVEはソーシャルコインを取引できるサービスです。<br />ソーシャルコインをゲットして推しを応援！</>)
  },
  {
    id: '2',
    src: '/assets/images/slider-02.png',
    title: (<>応援が<br />貯まるって？</>),
    text: (<>推しの人気が出るほどソーシャルコインが新たに発行されます<br />推した気持ちがどんどん形になって溜まっていきます</>)
  },
  {
    id: '3',
    src: '/assets/images/slider-03.png',
    title: (<>ソーシャル<br />コインって？</>),
    text: (<>ソーシャルコインは自由に取引できる上限100万枚コイン。<br />コインの所有者のランキング情報で推しの応援度合いがわかります。</>)
  },
  {
    id: '4',
    src: '/assets/images/slider-04.png',
    title: (<>取引手数料が<br />かかる？</>),
    text: (<>ソーシャルコインの送信手数料は無料！<br />気軽に送りあって様々なコインをゲットしよう！</>)
  },
  {
    id: '5',
    src: '/assets/images/slider-05.png',
    title: (<>所有者に<br />特典があるの？</>),
    text: (<>持っているコインの数に応じて特別な特典ももらえるかも！？<br />FAVERによる様々な企画をお楽しみに！</>)
  }
]

export default function SplideSlider({ 
  slides = defaultSlides, 
}: SplideSliderProps) {
  const splideRef = useRef<Splide>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progressPercentage, setProgressPercentage] = useState(0)

  useEffect(() => {
    const splide = splideRef.current?.splide
    const button = buttonRef.current

    if (!splide || !button) return

    const pausedClass = 'is-paused'

    const handleAutoplayPlay = () => {
      button.classList.remove(pausedClass)
    }

    const handleAutoplayPause = () => {
      button.classList.add(pausedClass)
    }

    const handleButtonClick = () => {
      const flag = 99
      const Autoplay = splide.Components.Autoplay
      
      if (button.classList.contains(pausedClass)) {
        Autoplay.play(flag)
      } else {
        Autoplay.pause(flag)
      }
    }

    const handleSlideChange = () => {
      setCurrentSlide(splide.index)
      setProgressPercentage(0)
      
      const allPaginationButtons = document.querySelectorAll('.splide__pagination__page') as NodeListOf<HTMLElement>
      allPaginationButtons.forEach(button => {
        button.style.setProperty('--progress', '0%')
      })
    }

    const handleSlideWillMove = (newIndex: number) => {
      setCurrentSlide(newIndex)
      setProgressPercentage(0)
      
      const paginationButtons = document.querySelectorAll('.splide__pagination__page') as NodeListOf<HTMLElement>
      paginationButtons.forEach((button, index) => {
        if (index === newIndex) {
          button.classList.add('is-active')
          button.style.setProperty('--progress', '0%')
        } else {
          button.classList.remove('is-active')
          button.style.setProperty('--progress', '0%')
        }
      })
    }

    const handleAutoplayProgress = (rate: number) => {
      const progressPercent = Math.round(rate * 100)
      setProgressPercentage(progressPercent)
      
      const activePaginationButton = document.querySelector('.splide__pagination__page.is-active') as HTMLElement
      if (activePaginationButton) {
        activePaginationButton.style.setProperty('--progress', `${progressPercent}%`)
      }
    }

    splide.on('autoplay:play', handleAutoplayPlay)
    splide.on('autoplay:pause', handleAutoplayPause)
    splide.on('move', handleSlideWillMove)
    splide.on('moved', handleSlideChange) 
    splide.on('autoplay:playing', handleAutoplayProgress)
    button.addEventListener('click', handleButtonClick)

    return () => {
      splide.off('autoplay:play', handleAutoplayPlay)
      splide.off('autoplay:pause', handleAutoplayPause)
      splide.off('move', handleSlideWillMove)
      splide.off('moved', handleSlideChange)
      splide.off('autoplay:playing', handleAutoplayProgress)
      button.removeEventListener('click', handleButtonClick)
    }
  }, [])

  useEffect(() => {
    const splide = splideRef.current?.splide
    if (!splide) return

    const paginationContainer = document.querySelector('.splide__pagination')
    if (paginationContainer) {
      paginationContainer.innerHTML = ''
      
      slides.forEach((_, index) => {
        const button = document.createElement('button')
        button.className = `splide__pagination__page ${index === 0 ? 'is-active' : ''}`
        button.setAttribute('type', 'button')
        button.setAttribute('aria-label', `Go to slide ${index + 1}`)
        button.setAttribute('data-slide', index.toString())
        button.style.setProperty('--progress', index === 0 ? `${progressPercentage}%` : '0%')
        
        button.addEventListener('click', () => {
          splide.go(index)
        })
        
        paginationContainer.appendChild(button)
      })
    }
  }, [slides])

  useEffect(() => {
    const paginationButtons = document.querySelectorAll('.splide__pagination__page') as NodeListOf<HTMLElement>
    paginationButtons.forEach((button, index) => {
      if (index === currentSlide) {
        button.classList.add('is-active')
        button.style.setProperty('--progress', `${progressPercentage}%`)
      } else {
        button.classList.remove('is-active')
        button.style.setProperty('--progress', '0%')
      }
    })
  }, [currentSlide, progressPercentage])

  const splideOptions = {
    type: 'loop',
    autoplay: true,
    perMove: 1,
    interval: 5000,
    autoWidth: true,
    resetProgress: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,
    focus: 'center',
    pagination: true,
    rewind: true,
    rewindSpeed: 1000,
    speed: 1000,
    gap: 50
  }

  return (
    <div className="splide-container py-20">
      <Splide
        ref={splideRef}
        options={splideOptions}
        hasTrack={false}
      >
        <SplideTrack>
          {slides.map((slide) => (
            <SplideSlide key={slide.id} className="md:w-[600px] w-[300px] flex items-center justify-center flex-col">
                <div className="mb-10">
                    <p className="md:text-[36px] text-[20px] font-bold">{slide.title}</p>
                    <p className="md:text-[24px] text-[16px] font-medium">{slide.text}</p>
                </div>
            <p className='w-full'>
              <img 
                className='w-full h-[300px] object-cover'
                src={slide.src} 
                alt={`Slide ${slide.id}`}
              /></p>
            </SplideSlide>
          ))}
        </SplideTrack>

        <div className="flex justify-center items-center gap-5 mt-10">
          <div className="splide__optional-button-container">
            <button 
              ref={buttonRef}
              className="splide__play-pause bg-gray-200 rounded-full size-14 flex items-center justify-center group" 
              aria-controls="splide-track"
              type="button"
            >
              <svg className="size-10 group-[:not(.is-paused)]:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56">
                <path d="m23.7555 36.6237c.4478 0 .8598-.1343 1.4241-.4568l10.9178-6.3322c.8598-.5016 1.3614-1.021 1.3614-1.8361 0-.8061-.5016-1.3255-1.3614-1.8271l-10.9178-6.3322c-.5643-.3314-.9762-.4657-1.4241-.4657-.9315 0-1.7555.7165-1.7555 1.9435v13.3629c0 1.227.824 1.9435 1.7555 1.9435z"></path>
              </svg>
              <svg className="size-10 group-[.is-paused]:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56">
                <path d="m21.7334 36.67h2.5342c1.1483 0 1.7324-.5796 1.7324-1.7193v-13.9015c0-1.12-.5841-1.6898-1.7324-1.7193h-2.5342c-1.1483 0-1.7324.5698-1.7324 1.7193v13.9015c-.0297 1.1396.5544 1.7193 1.7324 1.7193zm9.9992 0h2.5347c1.1485 0 1.7327-.5796 1.7327-1.7193v-13.9015c0-1.12-.5842-1.7193-1.7327-1.7193h-2.5347c-1.1485 0-1.7327.5698-1.7327 1.7193v13.9015c0 1.1396.5545 1.7193 1.7327 1.7193z"></path>
              </svg>
            </button>
          </div>
          <div className="p-5 bg bg-gray-200 rounded-full">
            <ul className="splide__pagination splide__pagination--ltr"></ul>
          </div>
        </div>
      </Splide>
    </div>
  )
}