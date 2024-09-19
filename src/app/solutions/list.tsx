'use client'

import useBackground from '@/hooks/useBackground'

const List = () => {
  useBackground()
  return (
    <section className="mb-[256px] max-md:mb-[82px]">
      <div className="container">
        <h2 className="mb-[24px] border-b border-solid border-b-[rgba(172,172,172,0.3)] font-anton text-[calc(18px_+_8vw)]">
          List
        </h2>
        <div>
          <a
            className="relative z-20 mb-[64px] block flex aspect-[2.4/1] items-end overflow-hidden rounded-[12px] bg-[#eee] p-[3%] font-anton text-[calc(16px_+_4vw)] text-white max-md:aspect-[1.7/1]"
            href="/research"
          >
            Web Development
            <div className="absolute right-[2%] top-[5%] block flex aspect-square w-[2em] items-center justify-center rounded-full bg-white text-[21px]">
              <img
                src="/assets/images/arrow.svg"
                className="max-h-[50%] rotate-[-45deg]"
                alt=""
              />
            </div>
            <div className="img-container absolute bottom-[-100px] left-0 z-[-1] h-[calc(100%_+_100px)] w-[calc(100%_+_100px)] bg-[url('/assets/images/design.jpg')] bg-cover bg-center"></div>
          </a>
          <a
            className="relative z-20 mb-[64px] block flex aspect-[2.4/1] items-end overflow-hidden rounded-[12px] bg-[#eee] p-[3%] font-anton text-[calc(16px_+_4vw)] text-white max-md:aspect-[1.7/1]"
            href="/agency"
          >
            System Development
            <div className="absolute right-[2%] top-[5%] block flex aspect-square w-[2em] items-center justify-center rounded-full bg-white text-[21px]">
              <img
                src="/assets/images/arrow.svg"
                className="max-h-[50%] rotate-[-45deg]"
                alt=""
              />
            </div>
            <div className="img-container absolute bottom-[-100px] left-0 z-[-1] h-[calc(100%_+_100px)] w-[calc(100%_+_100px)] bg-[url('/assets/images/development.jpg')] bg-cover bg-center"></div>
          </a>
          <a
            className="relative z-20 mb-[64px] block flex aspect-[2.4/1] items-end overflow-hidden rounded-[12px] bg-[#eee] p-[3%] font-anton text-[calc(16px_+_4vw)] text-white max-md:aspect-[1.7/1]"
            href="/digital-marketing"
          >
            Apparel and Novelty Goods
            <div className="absolute right-[2%] top-[5%] block flex aspect-square w-[2em] items-center justify-center rounded-full bg-white text-[21px]">
              <img
                src="/assets/images/arrow.svg"
                className="max-h-[50%] rotate-[-45deg]"
                alt=""
              />
            </div>
            <div className="img-container absolute bottom-[-100px] left-0 z-[-1] h-[calc(100%_+_100px)] w-[calc(100%_+_100px)] bg-[url('/assets/images/marketing.jpg')] bg-cover bg-center"></div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default List
