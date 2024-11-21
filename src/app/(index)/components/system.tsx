'use client'

import { useEffect, useRef } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import useScrollAnimations from '@/hooks/useScrollAnimations'

gsap.registerPlugin(ScrollTrigger)
gsap.config({
  nullTargetWarn: false,
})

const data = [
  {
    movie: '/assets/videos/system-01.mp4',
    title: <>Technical Implementation</>,
    content: (
      <>
        The DRC20 adopts Proof of Contribution (PoC), an improved version of
        Proof of Staking, where rewards are distributed based on the user’s
        contributions to the network, such as transaction verification and node
        operation. Instead of transaction fees, each transaction incurs a point
        cost, and users receive a daily point allocation to facilitate their
        transactions, preventing spam attacks while maintaining zero transaction
        fees. The network employs multi-layer security protocols and
        zero-knowledge proof technology to ensure transaction validity while
        protecting privacy. <br />
        <br />
        The absence of fees addresses a major limitation in traditional
        blockchain systems, where small transactions often become economically
        unviable. This opens new opportunities for economic interactions and
        social contributions.
      </>
    ),
  },
  {
    movie: '/assets/videos/system-02.mp4',
    title: <>Token Economy Structure</>,
    content: (
      <>
        The DONATION Coin economy promotes frequent and meaningful human
        interactions. The initial issuance is set at 1 billion DONATION, with an
        annual fixed inflation rate of 2%. Newly issued tokens are distributed
        between network maintainers and the ecosystem development fund. An
        algorithmic stabilization mechanism ensures value stability by
        automatically adjusting token circulation based on market demand.
        Incentive systems encourage active participation by awarding bonus
        points for frequent transactions and contributions.
      </>
    ),
  },
  {
    movie: '/assets/videos/system-03.mp4',
    title: <>Smart Contract Implementation</>,
    content: (
      <>
        Smart contracts managing DONATION Coin are optimized for micro and
        high-frequency transactions. They allow for automated sending and
        receiving processes, with features like attaching gratitude messages or
        conditional transfers upon task completion. Additionally, they
        facilitate small and recurring donations, with tracking functionality
        for donation usage. A social credit scoring system calculates and
        updates a user’s score based on gifting and receiving patterns, serving
        as a trust indicator within the community.
      </>
    ),
  },
  {
    movie: '/assets/videos/system-04.mp4',
    title: 'Data Analytics and Continuous Improvement',
    content: (
      <>
        The DONATION Coin system incorporates advanced data analytics for refinement.
        Machine learning algorithms analyze transaction patterns to detect
        trends and anomalies, enabling fraud detection and user behavior
        predictions. Privacy-preserving analysis using differential privacy
        protects individual user data while extracting valuable insights. A
        feedback loop continuously updates system parameters based on user
        behavior and community input, dynamically adjusting the frequency and
        range of gratitude expressions and donation amounts.
      </>
    ),
  },
]

const System = () => {
  const ref = useScrollAnimations()
  const systemRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (systemRef.current) {
        const items = systemRef.current.querySelectorAll('.systerm-item')

        items.forEach((item) => {
          gsap.fromTo(
            item,
            { scale: 1 },
            {
              scale: 0.7,
              duration: 1,
              ease: 'power1.out',
              scrollTrigger: {
                trigger: item,
                start: 'top center',
                scrub: true,
              },
            }
          )
        })
      }
    })

    return () => ctx.revert()
  })

  return (
    <section ref={ref} className="relative z-10 pt-[100px] md:pt-[130px]">
      <div ref={systemRef} className="relative w-full border-b border-[#777]">
        {data.map((item, index) => (
          <div
            className="group relative -mb-[100vh] block h-[230vh] w-full px-5 pr-5 last:mb-0 last:h-[130vh] odd:bg-[#101010] odd:text-white even:bg-[#FFFAFA] even:text-black md:pr-16 xl:pr-[110px]"
            key={index}
          >
            <div className="sticky top-0 flex h-[100vh] w-full justify-between gap-5 overflow-hidden pb-6 pt-7 max-md:flex-col max-md:items-center md:gap-[50px] md:pt-[38px]">
              <div className="fade-up flex flex-col justify-between gap-5 md:gap-10 md:pl-5">
                <h5 className="text-[32px] font-bold leading-none md:text-[60px] lg:text-[98px]">
                  {item.title}
                </h5>
                <div className="flex justify-end">
                  <p className="w-full max-w-[582px] border-t px-5 py-5 text-[16px] leading-[1.3] group-odd:border-white group-even:border-black md:px-[35px] md:py-[25px] md:text-[18px]">
                    {item.content}
                  </p>
                </div>
              </div>
              <div className="fade-up relative flex w-full items-end max-md:flex-1 md:max-w-[35%]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="systerm-item w-full rounded-[30px] object-cover object-center max-md:absolute max-md:h-full md:aspect-[480/640] md:rounded-[60px]"
                >
                  <source src={item.movie} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default System
