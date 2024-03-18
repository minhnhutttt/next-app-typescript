'use client'

import useSplitTextAnimation from '@/hooks/useSplitTextAnimation'
import useMarquise from '@/hooks/useMarquise'

const ContactTitle = () => {
  useSplitTextAnimation()
  const marquiseRef = useMarquise()

  return (
    <div className="mt-20 md:mt-[6vw]">
      <div className="relative">
        <div
          className="relative flex justify-center overflow-hidden pt-6 md:pt-[100px]"
          ref={marquiseRef}
        >
          <p className="marquise absolute top-0 flex whitespace-nowrap break-keep font-solaris leading-[0.75] tracking-[0.3em] text-[#1C1B1B] [font-size:_clamp(44px,28vw,160px)] md:[font-size:_clamp(200px,27.778vw,400px)]">
            HUBSHUBSHUBSHUBS
          </p>
          <div className="relative z-20 mt-10 text-center font-solaris leading-[1.1] [font-size:_clamp(30px,10vw,90px)] md:[font-size:_clamp(60px,8.333vw,120px)]">
            <p data-split-text data-delay="1">
              <span>GLOBAL</span>
            </p>
            <p data-split-text data-delay="2">
              <span>DEVELOPMENT</span>
            </p>
            <p data-split-text data-delay="3">
              <span>HUBS.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactTitle
