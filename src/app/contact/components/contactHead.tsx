'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'
import ContactTextSVG from './contactTextSVG'

const ContactHead = () => {
  const ref = useScrollAnimations()

  return (
    <div className="px-5 pb-[150px]" ref={ref}>
      <div className="mt-6 text-center md:mt-10">
        <ContactTextSVG />
      </div>
      <div className="fade-down mt-5 text-center text-[20px] md:text-[36px]">
        PROJECT REQUEST
      </div>
    </div>
  )
}

export default ContactHead
