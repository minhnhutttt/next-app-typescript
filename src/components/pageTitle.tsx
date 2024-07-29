'use client'

import { ReactNode } from 'react'

export type PageTitlePropsType = {
  children: ReactNode
}

const PageTitle = ({ children }: PageTitlePropsType) => {
  return (
    <div className="flex items-center justify-center px-5 pt-[160px] text-black md:pt-[200px]">
      <p className="fade-up font-zen text-[7vw] font-bold md:text-[50px]">
        {children}
      </p>
    </div>
  )
}

export default PageTitle
