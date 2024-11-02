'use client'

import { ReactNode } from 'react'

export type PageTitlePropsType = {
  children: ReactNode
}

export default function PageTitle({ children }: PageTitlePropsType) {
  return (
    <div className="flex h-[320px] items-center justify-center bg-[url('/assets/images/page-title.png')] bg-cover">
      <p className="fade-up font-zen text-[5vw] font-bold text-white [text-shadow:1px_1px_0px_rgba(0,_0,_0,_0.50)] md:text-[42px]">
        {children}
      </p>
    </div>
  )
}
