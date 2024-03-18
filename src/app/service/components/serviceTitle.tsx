'use client'

import useSplitTextAnimation from '@/hooks/useSplitTextAnimation'
import ServiceBackground from './serviceBackground'

const ServiceTitle = () => {
  useSplitTextAnimation()

  return (
    <div className="relative mb-[90px] mt-[135px] flex h-[423px] items-center justify-center overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 z-10 -translate-y-1/2">
        <ServiceBackground />
      </div>
      <div className="relative z-20 text-center font-solaris leading-[1.1] [font-size:_clamp(30px,10vw,90px)] md:[font-size:_clamp(60px,8.333vw,120px)]">
        <p data-split-text data-delay="1">
          <span>WE ARE YOUR</span>
        </p>
        <p data-split-text data-delay="2">
          <span>ARCHITECT OF</span>
        </p>
        <p data-split-text data-delay="3">
          <span>DIGITAL EXPERIENCES</span>
        </p>
      </div>
    </div>
  )
}

export default ServiceTitle
