'use client'

import { ReactNode } from 'react'

export type PageTitlePropsType = {
  text: ReactNode
}

const Title = ({ text }: PageTitlePropsType) => {
  return (
    <h2
      className={`fade-up inter relative z-10 text-center text-[24px] font-bold tracking-[0.2em] text-black md:text-[48px]`}
    >
      {text}
    </h2>
  )
}

export default Title
