'use client'

import { useEffect, useRef } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Button from '@/components/button'

gsap.registerPlugin(ScrollTrigger)
gsap.config({
  nullTargetWarn: false,
})

const Contact = () => {
  const bgLineRef = useRef<HTMLDivElement>(null)
  const applyRef = useRef<HTMLElement>(null)
  const contactSectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (bgLineRef.current) {
      gsap.set(bgLineRef.current, {
        height: 0,
        opacity: 1,
      })
    }

    if (applyRef.current) {
      gsap.set(applyRef.current, {
        opacity: 0,
        scale: 0,
        yPercent: -100,
      })
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactSectionRef.current,
        start: 'top top',
        end: 'bottom top',
      },
    })

    tl.to(bgLineRef.current, {
      height: '100%',
      duration: 1,
      ease: 'power2.out',
    })
    tl.to(
      applyRef.current,
      {
        opacity: 1,
        yPercent: 0,
        scale: 1,
        duration: 1,
        ease: 'power2.in',
      },
      '-=1.1'
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <>
      <section
        ref={contactSectionRef}
        className="relative pt-[100px] md:pt-[150px]"
      >
        <div className="overflow-hidden rounded-t-[40px] bg-[#FAE2D7] pb-20 md:rounded-t-[100px] md:pb-[130px]">
          <div className="relative px-5 pt-[60px] md:pt-[130px]">
            <div
              ref={bgLineRef}
              className="absolute inset-x-0 top-0 overflow-hidden bg-[url(/assets/images/home/line-sp.svg)] bg-top bg-no-repeat max-md:bg-[size:100%_500px] md:bg-[url(/assets/images/home/line.svg)] md:bg-[position:top_40px_center]"
            ></div>
            <h2 className="overflow-hidden text-center text-[clamp(20px,7.5vw,60px)] font-semibold leading-[1.2] tracking-widest md:text-[64px] xl:text-[128px]">
              <span>CONTACT</span>
            </h2>
            <p className="mt-6 text-center text-[20px] font-semibold tracking-widest md:mt-10 md:text-[32px]">
              For Investors & Media
            </p>
            <p className="mx-auto mt-7 w-[340px] text-[15px] md:w-[640px] md:text-[18px]">
              Interested in learning more about investment opportunities or
              media inquiries? Our team is ready to assist you.
            </p>
            <div className="mt-[50px] flex justify-center md:mt-[72px]">
              <Button
                href="maito:info@a-nexus.com"
                rect="md:w-[340px] w-[300px] h-20 md:h-[110px] flex items-center justify-center bg-[#F34927] rounded-full md:text-[30px] text-[20px] text-[#FAE2D7]"
              >
                CONTACT US
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="apply"
        ref={applyRef}
        className="relative flex items-center justify-center overflow-hidden bg-[url(/assets/images/home/apply-bg.png)] bg-cover px-5 py-[100px] md:py-[178px]"
      >
        <div className="">
          <p className="text-center text-[24px] font-semibold tracking-widest text-white md:text-[32px]">
            Aspiring Artists & Performers
          </p>
          <div className="mt-[30px] flex justify-center md:mt-[60px]">
            <Button
              href="maito:info@a-nexus.com"
              rect="md:w-[340px] w-[300px] h-20 md:h-[110px] flex items-center justify-center bg-white rounded-full md:text-[30px] text-[20px] text-[#F34927]"
            >
              Apply as Artist
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
