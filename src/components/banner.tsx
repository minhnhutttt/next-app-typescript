'use client'

import useBackground from '@/hooks/useBackground'
import { ReactNode } from 'react'

type BannerPropsType = {
  image: string
  children: ReactNode
}

const Banner = ({ image, children }: BannerPropsType) => {
  useBackground()
  return (
    <>
      <div className="mb-[256px] max-md:mb-[82px]">
        <div>
          <div className="relative mb-[-24px] aspect-[2.4/1] overflow-hidden max-md:mb-[-2.5em] max-md:aspect-[4/3]">
            <div
              className="img-container absolute bottom-[-100px] left-0 h-[calc(100%_+_100px)] w-[calc(100%_+_100px)] bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        </div>
      </div>
      <section className="mb-[256px] max-md:mb-[82px]">
        <div className="container">
          <div className="mx-auto max-w-[1200px] text-[24px] leading-[1.6] max-md:text-[16px]">
            {children}
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
