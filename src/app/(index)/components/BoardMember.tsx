'use client'

const BoardMember = () => {
  return (
    <section className="relative mt-4 overflow-hidden px-5 pb-[120px] md:mt-8 md:pb-[272px]">
      <div className="px-5 text-[#F34927]">
        <h2
          data-scroll
          className="text--enter overflow-hidden text-center text-[clamp(20px,7.5vw,60px)] font-semibold tracking-widest md:text-[64px] xl:text-[128px]"
        >
          <span data-splitting>BOARD MEMBERS</span>
        </h2>
        <p
          data-scroll
          className="ani-slide-bottom mx-auto w-full max-w-[910px] text-[16px] leading-[1.8] tracking-widest max-md:mt-5 md:text-[24px]"
        >
          Meet our visionary leadership team bringing together decades of
          experience in global entertainment markets.
        </p>
      </div>
      <div className="mx-auto mt-[100px] flex w-full max-w-[440px] items-center justify-between gap-8 max-md:flex-col-reverse md:mt-[240px] md:max-w-[1090px] xl:gap-[100px]">
        <div className="flex-1">
          <div
            data-scroll
            className="ani-slide-bottom relative flex items-center"
          >
            <div className="h-[160px] w-px origin-bottom rotate-[30deg] bg-[#F34927] md:h-[200px]"></div>
            <div className="pl-[66px] pt-12 leading-[1.2] md:pl-[88px] md:pt-16">
              <p className="mb-1 text-[clamp(15px,4vw,20px)] md:text-[18px]">
                CEO & Founder
              </p>
              <p className="font-['Inspiration'] text-[clamp(24px,10vw,44px)] font-normal tracking-widest md:text-[36px] lg:text-[48px]">
                Nariaki Terada
              </p>
            </div>
          </div>
          <p
            data-scroll
            className="ani-slide-bottom mt-12 text-[15px] leading-[1.8] tracking-widest md:mt-20 md:text-[18px]"
          >
            Meet the exceptional minds behind our vision. <br />
            From leading global entertainment companies to launching
            international icons, our board brings unmatched expertise and proven
            success. <br />
            Discover how each member is shaping the future.
          </p>
          <div
            data-scroll
            className="ani-slide-bottom mt-8 flex justify-end md:mt-12"
          >
            <a
              href="/members"
              className="flex items-center gap-2 border-b border-[#F34927] px-4 text-[20px] font-semibold tracking-widest md:text-[32px]"
            >
              <span className="animate-[spin_2s_linear_infinite] text-[17px] text-[#F34927] md:text-[21px]">
                ★
              </span>
              <span>LEARN MORE</span>
            </a>
          </div>
        </div>
        <div
          data-scroll
          className="ani-slide-bottom relative overflow-hidden rounded-[20px] max-lg:w-1/2 max-md:w-full"
        >
          <img
            className="w-full max-w-[480px]"
            src="/assets/images/members/ceo.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export default BoardMember
