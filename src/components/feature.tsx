'use client'

import { ReactNode } from 'react'

interface FeaturePropsType {
  image: string;
  children: ReactNode
}

const Feature = ({ image, children }: FeaturePropsType) => {
  return (
    <div className="fade-down relative h-[320px]">
        <div className="absolute inset-0 flex items-center justify-center font-bold md:text-[42px] text-[24px] text-white pt-12">
            <span className="[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">{children}</span>
        </div>
      <figure className="w-full h-full">
        <img className='w-full h-full object-cover' src={image} alt="" />
      </figure>

    </div>
  )
}

export default Feature
