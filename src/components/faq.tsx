'use client'

import { ReactNode, useState } from 'react'

type item = {
  id?: string
  title: string
  content: ReactNode
}

type FaqPropsType = {
  items: item[]
}

const Item = ({ title, content }: item) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="hover-underline border-b border-solid border-b-[rgba(172,172,172,0.3)]">
      <div
        className="relative cursor-pointer py-[3%] pr-[32px] max-md:py-[24px]"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="text-[24px] leading-none max-md:text-[18px]">
          {title}
          <div className="absolute right-0 top-1/2 block flex aspect-square w-[1.5em] translate-y-[-50%] rotate-90 items-center justify-center rounded-full bg-black text-[21px] text-white">
            <img
              src="/assets/images/arrow-w.svg"
              className="max-h-[50%]"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className={`overflow-hidden text-[21px] max-md:text-[18px] ${
          isOpen
            ? 'h-auto border-t border-solid border-t-[rgba(172,172,172,0.3)] bg-[#eee] px-[16px] py-[24px]'
            : 'h-[0px]'
        }`}
      >
        <p>{content}</p>
      </div>
    </div>
  )
}

const Faq = ({ items }: FaqPropsType) => {
  return (
    <section className="mb-[256px] max-md:mb-[82px]">
      <div className="container">
        <div className="mb-32px font-anton text-[calc(18px_+_8vw)]">
          <h2 className="uppercase leading-[1.25]">FAQS</h2>
        </div>
        <div>
          {items.map((item) => (
            <Item title={item.title} content={item.content} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
