'use client'
import { ReactNode } from 'react'

interface ButtonProps {
  href: string
  children: ReactNode
}

const Button = ({ children, href = '#' }: ButtonProps) => {
  return (
    <a
      href={href}
      className="fade-up group flex h-16 w-[320px] items-center overflow-hidden rounded-[42px] bg-[linear-gradient(90deg,_rgba(150,68,255,1)_0%,_rgba(236,98,98,1)_80%)] p-1 md:h-[84px] md:w-[473px] md:p-1.5"
    >
      <div className="flex h-full w-full items-center justify-center gap-3 rounded-[42px] bg-white">
        <figure className="duration-500 group-hover:rotate-180">
          <img
            className="animate-[rotateAnimation_4s_ease-in-out_infinite] max-md:w-6"
            src="/assets/images/ic-btn.svg"
            alt=""
          />
        </figure>
        <div className="relative overflow-hidden text-[20px] font-bold text-[#4F4F4F] md:text-[30px]">
          <span
            data-splitting
            className="button-splitting whitespace-nowrap group-hover:[&_.char]:-translate-y-5 group-hover:[&_.char]:opacity-0"
          >
            {children}
          </span>
          <span
            data-splitting
            className="button-splitting clone absolute inset-0 whitespace-nowrap group-hover:[&_.char]:translate-y-0 group-hover:[&_.char]:opacity-100"
          >
            {children}
          </span>
        </div>
      </div>
    </a>
  )
}

export default Button
