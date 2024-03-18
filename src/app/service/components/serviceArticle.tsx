'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'
import CircleNumber from '@/components/circleNumber'
import ServiceTitle from './serviceTitle'

const Articles1 = [
  {
    number: 'I',
    type: 'INNOVATION',
    title: 'BLOCKCHAIN DEVELOPMENT',
    children: (
      <>
        Dive into the world of blockchain with our comprehensive solutions. We
        specialize in developing robust platforms, crafting smart contracts, and
        creating decentralized applications (DApps) to transform your business
        operations.
      </>
    ),
  },
  {
    number: 'II',
    type: 'ENGAGEMENT',
    title: 'WEBSITE DEVELOPMENT',
    children: (
      <>
        Elevate your online presence with our website development services. From
        captivating front-end designs to powerful back-end functionalities, we
        ensure your website stands out and performs impeccably.
      </>
    ),
  },
]

const Articles2 = [
  {
    number: 'III',
    type: 'INTEGRATION',
    title: 'APPLICATION DEVELOPMENT',
    children: (
      <>
        Bring your app ideas to life with our end-to-end application development
        services. We excel in creating intuitive mobile apps and seamlessly
        integrating systems to provide a smooth user experience across various
        platforms.
      </>
    ),
  },
  {
    number: 'IV',
    type: 'INTELLIGENCE',
    title: 'AI DEVELOPMENT',
    children: (
      <>
        Step into the future with our AI development services. Harness the power
        of machine learning, natural language processing, and image & voice
        recognition to unlock new insights and automate complex processes.
      </>
    ),
  },
]

const ServiceArticle = () => {
  const ref = useScrollAnimations()

  return (
    <div ref={ref}>
      <div className="space-y-12 px-5">
        {Articles1.map((item, index) => (
          <div
            className="fade-down group mx-auto flex w-full max-w-[1040px] items-center gap-7 max-md:flex-col md:items-end md:gap-16 md:pl-5 md:even:flex-row-reverse"
            key={index}
          >
            <CircleNumber size="lg">{item.number}</CircleNumber>
            <div className="flex-1 md:mb-11">
              <h5 className="border-b border-white text-[21px] leading-relaxed md:text-[28px]">
                {item.type}
              </h5>
              <p className="mt-3 text-[18px] md:text-[20px]">{item.title}</p>
              <p className="text-[16px]">{item.children}</p>
            </div>
          </div>
        ))}
      </div>
      <ServiceTitle />
      <div className="space-y-12 px-5">
        {Articles2.map((item, index) => (
          <div
            className="fade-down group mx-auto flex w-full max-w-[1040px] items-center gap-7 max-md:flex-col md:items-end md:gap-16 md:pl-5 md:even:flex-row-reverse"
            key={index}
          >
            <CircleNumber size="lg">{item.number}</CircleNumber>
            <div className="flex-1 md:mb-11">
              <h5 className="border-b border-white text-[20px] leading-relaxed md:text-[28px]">
                {item.type}
              </h5>
              <p className="mt-3 text-[18px] md:text-[20px]">{item.title}</p>
              <p className="text-[16px]">{item.children}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceArticle
