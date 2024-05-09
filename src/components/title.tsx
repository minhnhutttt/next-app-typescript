'use client'
import { ReactNode } from 'react'

interface TitlePropsType {
  children: ReactNode
}

const Title = ({ children }: TitlePropsType) => {
  return (
    <div className="flex justify-center">
        <h3 className="fade-up bg-[url('/assets/images/bg-title.png')] bg-cover md:text-[28px] text-[18px] font-mincho font-semibold w-[320px] md:w-[511px] aspect-[511/122] flex items-center justify-center">
        {children}
        </h3>
    </div>
  )
}

export default Title
