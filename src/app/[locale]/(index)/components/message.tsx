'use client'

import { useTranslations } from 'next-intl'
import { useEffect } from 'react'

const Message = () => {
  const t = useTranslations('Home.Message')
  useEffect(() => {
    const init = async () => {
      const Splitting = await import('splitting')
      await Splitting.default()

      const ScrollOut = (await import('scroll-out')).default
      ScrollOut({ once: true })
    }

    init()
  }, [])

  return (
    <section className="relative overflow-hidden">
      <video
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/assets/videos/about.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative flex h-full justify-center bg-[linear-gradient(0deg,_rgba(165,_136,_77,_0.60)_2.08%,_rgba(234,_200,_133,_0.60)_36.06%,_rgba(255,_242,_219,_0.60)_51.92%,_rgba(165,_136,_77,_0.60)_100%)] p-5">
        <div className="mx-auto w-full max-w-[886px] max-md:py-[150px] md:py-[150px]">
          <h2
            data-scroll
            className="text--enter mb-[3vw] overflow-hidden text-center text-[clamp(16px,6.5vw,60px)] font-semibold tracking-widest text-black md:mb-5 md:text-[50px] xl:text-[96px]"
          >
            <span data-splitting>OUR BUSINESS</span>
          </h2>
          <p
            data-scroll
            className="ani-slide-bottom font-['Font_Awesome_5_Free'] text-[16px] tracking-widest md:text-[22px]"
          >
            <span
              dangerouslySetInnerHTML={{
                __html: t('Headline'),
              }}
            ></span>
          </p>
          <div
            data-scroll
            className="ani-slide-bottom mt-8 flex justify-end md:mt-12"
          >
            <a
              href="/about"
              className="flex items-center gap-2 border-b border-black px-4 text-[20px] font-semibold tracking-widest md:text-[32px]"
            >
              <span className="animate-[spin_2s_linear_infinite] text-[17px] text-black md:text-[21px]">
                ★
              </span>
              <span>ABOUT US</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Message
