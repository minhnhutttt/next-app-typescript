import { ReactNode } from 'react'

import Link from 'next/link'

export interface ButtonPropsType {
  href: string
  children: ReactNode
}

const Button = ({ href, children }: ButtonPropsType) => {
  return (
    <Link
      href={href}
      className="fade-up default-gradient flex h-[50px] items-center justify-center rounded-[40px] px-8 text-[16px] text-black duration-300 hover:tracking-widest md:h-[64px] md:px-[60px] md:text-[18px]"
    >
      {children}
    </Link>
  )
}

export default Button
