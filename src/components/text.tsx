'use client'

import { ReactNode } from 'react'

type PageTextPropsType = {
  children: ReactNode
}

const Text = ({ children }: PageTextPropsType) => {
  return (
    <p className="fade-up max-w-[600px] text-[14px] text-black md:text-[18px] md:leading-[27px]">
      {children}
    </p>
  )
}

export default Text
