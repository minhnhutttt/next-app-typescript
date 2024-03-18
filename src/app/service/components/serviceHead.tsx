'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'
import ServiceTextSVG from './serviceTextSVG'

const ServiceHead = () => {
  const ref = useScrollAnimations()

  return (
    <div className="px-5 pb-20" ref={ref}>
      <p className="fade-down text-center text-[16px] md:text-[20px]">
        CRAFTING THE FUTURE WITH
      </p>
      <ServiceTextSVG />
      <p className="fade-down mx-auto w-full max-w-[603px] text-[16px] max-md:px-5 md:text-[18px]">
        FROM BLOCKCHAIN TO WEBSITE, APPLICATION, AND AI DEVELOPMENT, OUR
        MULTIFACETED SERVICES SUPPORT YOUR BUSINESS. UTILIZING CUTTING-EDGE
        TECHNOLOGY, WE ENSURE STABLE GLOBAL SUPPORT TO MAINTAIN THE SMOOTH
        OPERATION OF YOUR VENTURES.
      </p>
    </div>
  )
}

export default ServiceHead
