'use client'

import { ReactNode } from 'react'

interface ButtonProps {
  large?: boolean
  children: ReactNode
}

const Button = ({ large = false, children }: ButtonProps) => {
  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className={`sway tracking-wides relative mx-auto flex h-14 max-w-[100%] items-center justify-center gap-2 rounded-[5px] border-[3px] border-[#000] bg-[#F2E206] text-center font-bold text-[#000F12] transition duration-300 hover:opacity-75 md:h-[67px] md:rounded-[10px]
      ${
        large ? 'w-[320px] md:w-[380px]' : 'w-[300px] md:w-[320px]'
      } text-[16px] shadow-[0_2px_0_#0F0F0F] 
      md:text-[24px] md:shadow-[0_5px_0_#0F0F0F]`}
    >
      {children}
      <figure>
        <img className="" src="/assets/images/ic-btn.svg" alt="Arrow" />
      </figure>
    </a>
  )
}

export default Button
