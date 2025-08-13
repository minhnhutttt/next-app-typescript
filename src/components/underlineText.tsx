'use client'
import { ReactNode } from 'react'

const UnderlineText = ({ children }: { children: ReactNode }) => {
  return (
    <span data-scroll className="group relative">
      {children}
      <span className="absolute -bottom-1.5 left-[.0625rem] right-0 top-auto block h-3 w-full bg-[url('/assets/images/underline.svg')] bg-left bg-no-repeat  group-data-[scroll=in]:animate-[underlineText_1s_ease-in-out_forwards] md:-bottom-2 md:h-4"></span>
    </span>
  )
}

export default UnderlineText
