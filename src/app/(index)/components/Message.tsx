'use client'

import { useEffect } from 'react'

const Message = () => {
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
    <section className="relative overflow-hidden md:h-[833px]">
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
      <div className="relative flex h-full justify-center bg-[linear-gradient(0deg,_rgba(250,_226,_215,_0.60)_0%,_rgba(250,_226,_215,_0.60)_100%)] p-5">
        <div className="mx-auto w-full max-w-[886px] max-md:py-[150px] md:pt-[285px]">
          <p
            data-scroll
            className="ani-slide-bottom text-[20px] tracking-widest md:text-[36px]"
          >
            A NEXUS offers comprehensive production and promotion services, from
            stage design to  original content creation and global marketing
            campaigns.
          </p>
          <div
            data-scroll
            className="ani-slide-bottom mt-8 flex justify-end md:mt-12"
          >
            <a
              href="/about"
              className="flex items-center gap-2 border-b border-[#F34927] px-4 text-[20px] font-semibold tracking-widest md:text-[32px]"
            >
              <span className="animate-[spin_2s_linear_infinite] text-[17px] text-[#F34927] md:text-[21px]">
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
