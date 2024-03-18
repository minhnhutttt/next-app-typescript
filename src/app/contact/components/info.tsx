'use client'

import Link from 'next/link'

import useScrollAnimations from '@/hooks/useScrollAnimations'

const Info = () => {
  const ref = useScrollAnimations()

  return (
    <div className="px-5" ref={ref}>
      <div className="fade-down mt-5 text-center text-[20px] md:text-[36px]">
        E - MAIL
      </div>
      <div className="text-center">
        <Link
          href="mailto:info@fliqt.io"
          className="text-[12vw] md:text-[110px]"
        >
          info@fliqt.io
        </Link>
      </div>
    </div>
  )
}

export default Info
