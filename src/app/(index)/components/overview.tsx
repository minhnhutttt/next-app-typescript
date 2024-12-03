'use client'

import { ReactNode } from 'react'

import Button from '@/components/button'
import useDarkMode from '@/hooks/useDarkMode'
import useScrollAnimations from '@/hooks/useScrollAnimations'

const sliderItems = [
  'Tak',
  'Danke',
  'ありがとう',
  'Salamat',
  'Merci',
  'Cảm ơn',
  'Dziękuję',
  'Obrigado',
  'धन्यवाद',
  'Thank you',
  'Dank je',
  '감사합니다',
  'ευχαριστώ',
  'Gracias',
  'Tack',
  'ขอบคุณ',
  '谢谢',
]

const SliderItem = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex-[0_0_auto] text-[24px] md:text-[44px]">{children}</div>
  )
}

const Step = ({
  number,
  children,
}: {
  number: string
  children: ReactNode
}) => {
  return (
    <div className="flex items-center gap-5 border-t border-[#777] py-5 pl-5 pr-5 md:gap-10 md:py-[30px] lg:pl-10">
      <span className="flex size-16 items-center justify-center rounded-full border border-black text-center text-[24px] italic leading-none md:size-20 md:text-[48px] dark:border-white">
        <span className="-ml-2">{number}</span>
      </span>
      <span className="flex-1 text-[16px] leading-[1.3] md:text-[20px] lg:text-[24px]">
        {children}
      </span>
    </div>
  )
}

const Overview = () => {
  const ref = useScrollAnimations()
  const triggerRef = useDarkMode()

  return (
    <section
      ref={ref}
      className="relative z-10 pb-[60px] pt-[100px] md:pb-[83px] md:pt-[40px] dark:text-white"
    >
      <div ref={triggerRef}>
        <div className="relative mx-auto w-full max-w-[1480px] px-5">
          <div className="flex justify-between gap-10 max-md:flex-col md:gap-[70px]">
            <div className="fade-up text-[40px] leading-[1.3] max-xl:w-1/2 max-md:w-full md:text-[80px] xl:w-[630px]">
              Project Overview
            </div>
            <div className="fade-up flex-1 pt-8">
              <p className="text-[16px] leading-[1.3] md:text-[18px] ">
                DONATION Coin (Compliment and Incentive Platform Coin) is an
                innovative project that digitizes the exchange of gratitude and
                appreciation to make society better. <br />
                <br />
                Built on the DRC20 platform, DONATION Coin utilizes blockchain
                technology.
                <br />
                <br />
                It integrates the expression of gratitude into daily life by
                digitizing it.
                <br />
                <br />
                For example, we have &quot;likes,&quot; but we want to make it
                possible to collect many of these &quot;likes&quot; and pass
                them on to others.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-8">
          <div className="fade-up flex items-center gap-5 overflow-hidden">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="u-transform flex min-w-full flex-shrink-0 animate-[scroll_40s_linear_infinite] gap-5"
              >
                {sliderItems.concat(sliderItems).map((item, idx) => (
                  <SliderItem key={idx}>{item}</SliderItem>
                ))}
              </div>
            ))}
          </div>
          <div className="fade-up flex items-center gap-5 overflow-hidden">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="u-transform flex min-w-full flex-shrink-0 animate-[scroll_40s_linear_infinite] gap-5 [animation-direction:reverse]"
              >
                {sliderItems.concat(sliderItems).map((item, idx) => (
                  <SliderItem key={idx}>{item}</SliderItem>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-10 w-full max-w-[1440px] px-5 md:mt-14">
          <div className="flex max-md:flex-col">
            <div
              data-lenis-prevent
              className="fade-up no-scrollbar overflow-auto border-r border-[#777] max-md:border-l md:h-[390px] md:w-1/2"
            >
              <Step number="1">
                Enabling &quot;small expressions of gratitude&quot; and
                &quot;frequent expressions of gratitude&quot; through fee-free
                transactions
              </Step>
              <Step number="2">
                A psychological model based on scientific evidence linking
                expressions of gratitude to individual and social well-being
              </Step>
              <Step number="3">
                A bidirectional social credit system that evaluates both givers
                and receivers
              </Step>
              <Step number="4">
                Promoting an economic support network through international
                micro-donation functionality
              </Step>
            </div>
            <div className="fade-up flex flex-col justify-between max-md:pt-6 md:w-1/2 md:pl-[45px]">
              <div className="pt-3">
                <h4 className="text-[32px] leading-[1.3] md:text-[64px]">
                  Key features of DONATION Coin
                </h4>
                <p className="pt-5 text-[14px] leading-none md:text-[18px]">
                  By eliminating transaction fees, DONATION Coin removes
                  barriers to small-scale financial transactions. <br />
                  <br />
                  It opens up new possibilities for peer-to-peer support
                  (directly from one individual to another without
                  intermediaries), rewards for content creators, and global
                  charitable activities.
                  <br />
                  <br />
                  This white paper outlines the scientific basis, technical
                  implementation, and potential social impact of the DONATION
                  Coin ecosystem.
                </p>
              </div>
              <div className="mt-5 flex justify-end">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview
