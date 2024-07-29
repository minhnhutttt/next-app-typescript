'use client'

import { ReactNode } from 'react'

export type PageTitlePropsType = {
  title?: string
  children: ReactNode
}

const TextBlock = ({ title, children }: PageTitlePropsType) => {
  return (
    <div className="fade-up text-black">
      {title && <p className="text-[14px] font-bold md:text-[16px]">{title}</p>}
      <div className="mt-3 text-[14px] md:mt-[18px] md:text-[16px]">
        {children}
      </div>
    </div>
  )
}

export default TextBlock
