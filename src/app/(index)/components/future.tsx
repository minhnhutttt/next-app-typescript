'use client'

import { ReactNode } from 'react'

import Button from '@/components/button'
import useScrollAnimations from '@/hooks/useScrollAnimations'

const Item = ({
  number,
  children,
}: {
  number: string
  children: ReactNode
}) => (
  <div className="fade-up flex flex-col items-center">
    <div className="flex size-[55px] items-center justify-center rounded-full bg-black text-[20px] text-white md:size-[86px] md:text-[42px]">
      {number}
    </div>
    <div className="mt-3 w-[142px] text-[14px] leading-[1.3] md:mt-5 md:text-[18px]">
      {children}
    </div>
  </div>
)

const Future = () => {
  const ref = useScrollAnimations()

  return (
    <section
      ref={ref}
      className="relative z-10 pb-[120px] pt-[100px] md:pb-[214px] md:pt-[130px]"
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="mb-8 flex gap-[30px] px-5 max-lg:flex-col max-lg:items-center md:mb-[60px]">
          <div className="max-w-[463px]">
            <h4 className="fade-up text-[32px] font-medium leading-[1.3] md:text-[64px]">
              Future Vision of <br />
              the Project
            </h4>
            <p className="fade-up mt-8 text-[16px] leading-[1.3] md:mt-[42px] md:text-[18px]">
            DONATION Coin aims to digitize the expression of gratitude and
              visualize the value of social contributions. It is a project that
              aims to create a new economic system. By introducing fee-free
              transactions, a design based on scientific evidence, and a
              comprehensive social credit system, it enables a &quot;circulation
              of gratitude&quot; that was difficult to achieve in conventional
              economic systems.The future vision this project aims for is as
              follows:
            </p>
          </div>
          <div className="fade-up flex flex-1 justify-center max-lg:w-full max-lg:max-w-[510px] max-md:max-w-[330px]">
            <div className="relative w-full max-w-[510px]">
              <span className="absolute top-5 max-md:w-full md:top-10">
                <svg
                  className="max-md:w-full md:w-[511px]"
                  viewBox="0 0 511 515"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M152.358 257.885C152.358 257.885 197.86 257.885 375.261 257.885C552.662 257.885 554.109 3.73566 375.261 3.73566C196.412 3.73566 124.005 2.5778 124.005 2.5778"
                    stroke="#FB2C2B"
                    strokeWidth="4"
                  />
                  <path
                    d="M358.497 512.034C358.497 512.034 312.995 512.034 135.594 512.034C-41.807 512.034 -43.2543 257.885 135.594 257.885C314.442 257.885 386.85 256.727 386.85 256.727"
                    stroke="#FB2C2B"
                    strokeWidth="4"
                  />
                </svg>
              </span>
              <div className="relative grid grid-cols-2 gap-y-[50px] md:gap-y-[68px]">
                <Item number="1">Fostering a culture of gratitude</Item>
                <Item number="2">
                  Establishing a new value evaluation system
                </Item>
                <Item number="4">Formation of a global mutual aid network</Item>
                <Item number="3">
                  Expanding opportunities for education and self-realization
                </Item>
                <Item number="5">
                  Establishing a sustainable model for social contribution
                </Item>
                <Item number="6">Harmony between technology and humanity</Item>
              </div>
            </div>
          </div>
        </div>
        <div className="fade-up mx-auto min-h-[70vw] w-full max-w-[931px] bg-[url('/assets/images/bg-hand.png')] bg-[length:100%_auto] bg-center bg-no-repeat max-md:px-5 md:min-h-[660px] lg:bg-[length:960px_auto]">
          <div className="mx-auto w-full max-w-[720px] pt-10 md:pt-[96px]">
            <p className="text-[18px] leading-[1.3] md:text-[22px]">
              We will continue to strive towards the realization of this vision,
              always listening to the voices of users and the community, while
              flexibly responding to technological evolution and changing
              societal needs. We believe that DONATION Coin will become the
              foundation of future socio-economic systems and bring positive
              impacts to people around the world. <br />
              <br />
              <br />
              We sincerely look forward to your support and participation.
              Let&apos;s create a new society woven with gratitude and
              contribution together.
            </p>
            <div className="mt-8 flex justify-center md:mt-[60px]">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Future
