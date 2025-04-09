'use client'

const Showcase = () => {
  return (
    <section className="relative mt-[150px] overflow-hidden px-5 pb-[60px] md:mt-[235px] md:pb-[100px]">
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
        <div className="border-t border-[#F34927] pt-8 md:pt-12">
          <p
            data-scroll
            className="ani-slide-bottom text-center text-[20px] font-semibold tracking-widest md:text-[32px]"
          >
            Entertainment Categories
          </p>
          <div className="mx-auto mt-16 flex w-full max-w-[870px] flex-wrap justify-center gap-10 md:mt-24 md:gap-[120px]">
            <div
              data-scroll
              className="ani-slide-bottom relative w-[210px] overflow-hidden"
            >
              <div className="relative flex size-[210px] items-center justify-center overflow-hidden rounded-[44px] bg-[linear-gradient(45deg,_#FBB03B_6.65%,_#ED1E79_93.35%)]">
                <img
                  className="absolute left-[49.5px] top-[50px] origin-center animate-[spin_2s_linear_infinite]"
                  src="/assets/images/home/case-01-star.png"
                  alt=""
                />
                <img src="/assets/images/home/case-01-play.png" alt="" />
              </div>
              <span className="mt-5 block text-center text-[16px] tracking-wider md:mt-8 md:text-[20px]">
                Anime & Animation
              </span>
            </div>
            <div
              data-scroll
              className="ani-slide-bottom relative w-[210px] overflow-hidden"
            >
              <div className="relative flex size-[210px] items-center justify-center overflow-hidden rounded-[44px] bg-[linear-gradient(45deg,_#FBB03B_6.65%,_#ED1E79_93.35%)]">
                <img
                  className="absolute animate-[speech-bubble-move_2s_ease-out_infinite]"
                  src="/assets/images/home/case-02.png"
                  alt=""
                />
              </div>
              <span className="mt-5 block text-center text-[16px] tracking-wider md:mt-8 md:text-[20px]">
                Manga & Comics
              </span>
            </div>
            <div
              data-scroll
              className="ani-slide-bottom relative w-[210px] overflow-hidden"
            >
              <div className="relative flex size-[210px] items-center justify-center overflow-hidden rounded-[44px] bg-[linear-gradient(45deg,_#FBB03B_6.65%,_#ED1E79_93.35%)]">
                <img
                  className="absolute animate-[musical-notes-bounce_2s_ease-out_infinite]"
                  src="/assets/images/home/case-03.png"
                  alt=""
                />
              </div>
              <span className="mt-5 block text-center text-[16px] tracking-wider md:mt-8 md:text-[20px]">
                Music & Concerts
              </span>
            </div>
            <div
              data-scroll
              className="ani-slide-bottom relative w-[210px] overflow-hidden"
            >
              <div className="relative flex size-[210px] items-center justify-center overflow-hidden rounded-[44px] bg-[linear-gradient(45deg,_#FBB03B_6.65%,_#ED1E79_93.35%)]">
                <img
                  className="absolute animate-[scale_2s_ease-out_infinite]"
                  src="/assets/images/home/case-04.png"
                  alt=""
                />
              </div>
              <span className="mt-5 block text-center text-[16px] tracking-wider md:mt-8 md:text-[20px]">
                Film & Television
              </span>
            </div>
            <div
              data-scroll
              className="ani-slide-bottom relative w-[210px] overflow-hidden"
            >
              <div className="relative flex size-[210px] items-center justify-center overflow-hidden rounded-[44px] bg-[linear-gradient(45deg,_#FBB03B_6.65%,_#ED1E79_93.35%)]">
                <img src="/assets/images/home/case-05.png" alt="" />
                <img
                  className="absolute animate-[appear-disappear_2.5s_linear_0s_infinite]"
                  src="/assets/images/home/case-05-01.png"
                  alt=""
                />
                <img
                  className="absolute animate-[appear-disappear_2.5s_linear_0.5s_infinite]"
                  src="/assets/images/home/case-05-02.png"
                  alt=""
                />
                <img
                  className="absolute animate-[appear-disappear_2.5s_linear_1s_infinite]"
                  src="/assets/images/home/case-05-03.png"
                  alt=""
                />
                <img
                  className="absolute animate-[appear-disappear_2.5s_linear_1.5s_infinite]"
                  src="/assets/images/home/case-05-04.png"
                  alt=""
                />
              </div>
              <span className="mt-5 block text-center text-[16px] tracking-wider md:mt-8 md:text-[20px]">
                Art & Design
              </span>
            </div>
            <div
              data-scroll
              className="ani-slide-bottom relative w-[210px] overflow-hidden"
            >
              <div className="relative flex size-[210px] items-center justify-center overflow-hidden rounded-[44px] bg-[linear-gradient(45deg,_#FBB03B_6.65%,_#ED1E79_93.35%)]">
                <img
                  className="absolute animate-[bounce-left-right_2s_ease-out_infinite]"
                  src="/assets/images/home/case-06.png"
                  alt=""
                />
              </div>
              <span className="mt-5 block text-center text-[16px] tracking-wider md:mt-8 md:text-[20px]">
                Games & Interactive
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase
