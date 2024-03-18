'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'
import panzoom from 'panzoom'
import useIsMobile from '@/hooks/useIsMobile'

type PinPropsType = {
  x: string
  y: string
  active?: boolean
  children: ReactNode
}

export const Pin = ({ x, y, active, children }: PinPropsType) => {
  return (
    <div
      className="absolute z-50 block w-[1.6666666666666667%]"
      style={{ top: y + '%', left: x + '%' }}
    >
      <div
        className={`group relative left-1/2 z-10 block origin-[bottom_center] -translate-x-1/2 -translate-y-full [transition:transform_550ms_cubic-bezier(.19,1,.22,1)] hover:-translate-x-1/2 hover:-translate-y-full hover:scale-[2.25] md:pt-[8px] ${
          active ? '-translate-x-1/2 -translate-y-full scale-[2.25]' : ''
        }`}
      >
        <div
          className={`pointer-events-none absolute bottom-full left-2/4 flex origin-[bottom_center] -translate-x-1/2 translate-y-[0] scale-[.444] items-center justify-center gap-[1em] rounded-[0.25em] bg-[#fff] px-5 py-[0.75em] font-normal text-[#111218] opacity-0 [transition:opacity_250ms_ease-in-out] group-hover:pointer-events-auto group-hover:opacity-100 max-md:text-[2vw] ${
            active ? 'pointer-events-auto opacity-100' : ''
          }`}
        >
          <span className="inline-block whitespace-nowrap">{children}</span>
        </div>
        <img className="" src="/assets/images/pin.svg" alt="" />
      </div>
    </div>
  )
}

const Map = () => {
  const isMobile = useIsMobile()
  const panzoomRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const [activePin, setActivePin] = useState<string | null>(null)

  useEffect(() => {
    if (panzoomRef.current && isMobile) {
      const pz = panzoom(panzoomRef.current, {
        smoothScroll: false,
        bounds: true,
        boundsPadding: 0.15,
        minZoom: 1,
        maxZoom: 3,
      })

      return () => {
        pz.dispose()
      }
    }
  }, [])

  const handleButtonClick = (location: string) => {
    setActivePin(location)
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <div
        ref={mapRef}
        className="relative mb-6 aspect-[1435/875] overflow-hidden"
      >
        <div
          ref={panzoomRef}
          style={{ width: '100%', height: '100%' }}
          className="absolute"
        >
          <Pin active={activePin === 'Tokyo'} x="83.8" y="43">
            Tokyo
          </Pin>
          <Pin active={activePin === 'Taipei'} x="78" y="49.5">
            Taipei
          </Pin>
          <Pin active={activePin === 'Hanoi'} x="73.3" y="51.6">
            Hanoi
          </Pin>
          <Pin active={activePin === 'Ho Chi Minh'} x="73.5" y="57.7">
            Ho Chi Minh
          </Pin>
          <Pin active={activePin === 'Singapore'} x="72.5" y="63">
            Singapore
          </Pin>
          <Pin active={activePin === 'Aelaide'} x="83.5" y="84">
            Aelaide
          </Pin>
          <Pin active={activePin === 'Nicosia'} x="51" y="43">
            Nicosia
          </Pin>
          <Pin active={activePin === 'London'} x="40.5" y="31.5">
            London
          </Pin>
          <Pin active={activePin === 'Wales'} x="39.4" y="31.5">
            Wales
          </Pin>
          <Pin active={activePin === 'NewYork'} x="18" y="40">
            NewYork
          </Pin>
          <Pin active={activePin === 'Toronto'} x="16.5" y="37.3">
            Toronto
          </Pin>
          <Pin active={activePin === 'Belize'} x="14.4" y="54.3">
            Belize
          </Pin>
          <Pin active={activePin === 'Nevada'} x="4.7" y="41">
            Nevada
          </Pin>
          <img className="w-full" src="/assets/images/map.png" alt="" />
        </div>
      </div>
      <div className="px-5">
        <div className="mx-auto flex w-full max-w-[1170px] justify-end">
          <div className="w-full max-w-[453px]">
            <p className="text-[18px] text-white md:text-[20px]">
              Location list
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-[14px] text-white md:mt-7 md:gap-5">
              <button
                type="button"
                onClick={() => handleButtonClick('NewYork')}
              >
                NEW YORK
              </button>
              <button type="button" onClick={() => handleButtonClick('Nevada')}>
                NEVADA
              </button>
              <button type="button" onClick={() => handleButtonClick('London')}>
                LONDON
              </button>
              <button type="button" onClick={() => handleButtonClick('Wales')}>
                WALES
              </button>
              <button
                type="button"
                onClick={() => handleButtonClick('Toronto')}
              >
                TORONTO
              </button>
              <button type="button" onClick={() => handleButtonClick('Belize')}>
                BELIZE
              </button>
              <button type="button" onClick={() => handleButtonClick('Tokyo')}>
                TOKYO
              </button>
              <button
                type="button"
                onClick={() => handleButtonClick('Aelaide')}
              >
                ADELAIDE
              </button>
              <button
                type="button"
                onClick={() => handleButtonClick('Singapore')}
              >
                SINGAPORE
              </button>
              <button
                type="button"
                onClick={() => handleButtonClick('Nicosia')}
              >
                NICOSIA
              </button>
              <button type="button" onClick={() => handleButtonClick('Taipei')}>
                TAIPEI
              </button>
              <button type="button" onClick={() => handleButtonClick('Hanoi')}>
                HANOI
              </button>
              <button
                type="button"
                onClick={() => handleButtonClick('Ho Chi Minh')}
              >
                HO CHI MINH
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Map
