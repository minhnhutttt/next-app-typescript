'use client'

import Artist from './artist'

const Showcase = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="px-5">
        <div className="mx-auto w-full max-w-[1300px]">
          <div className="px-5 pb-10 text-[#F34927] md:pb-16">
            <h2
              data-scroll
              className="text--enter overflow-hidden text-center text-[clamp(20px,7.5vw,60px)] font-semibold leading-[1.2] tracking-widest md:text-[64px] xl:text-[128px]"
            >
              <span data-splitting>
                IP ASSETS <br />
                SHOWCASE
              </span>
            </h2>
          </div>
        </div>
      </div>
      <Artist />
    </section>
  )
}

export default Showcase
