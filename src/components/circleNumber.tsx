'use client'

import { ReactNode } from 'react'

export interface CircleNumberPropsType {
  size: 'sm' | 'lg'
  children: ReactNode
}

const CircleNumber = ({ size = 'lg', children }: CircleNumberPropsType) => {
  return (
    <div className="fade-down relative">
      <div
        className={`aspect-square animate-[backwards-rotation_60s_infinite_linear] bg-[url('/assets/images/circle.png')] bg-cover ${
          size === 'sm' && 'max-w-[200px] md:max-w-[324px]'
        } ${size === 'lg' && 'w-[240px] md:w-[360px]'}`}
      ></div>
      <span
        className={`absolute inset-0 flex items-center justify-center font-solaris text-white  ${
          size === 'sm' && 'text-[32px] md:text-[48px] lg:text-[64px]'
        } ${size === 'lg' && 'text-[40px] md:text-[80px]'}`}
      >
        {children}
      </span>
    </div>
  )
}

export default CircleNumber
