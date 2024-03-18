'use client'

import { ReactNode } from 'react'

export type PageTitlePropsType = {
  title?: string
  children: ReactNode
}

export default function TextBlock({ title, children }: PageTitlePropsType) {
  return (
    <div>
      {title && <p className="text-[16px] font-bold md:text-[20px]">{title}</p>}
      <div className="mt-3 text-[14px] md:mt-[18px] md:text-[16px]">
        {children}
      </div>
    </div>
  )
}
