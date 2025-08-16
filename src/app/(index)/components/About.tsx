'use client'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const data = [
  {
    id: '01',
    ic: '/assets/images/about-ic-01.png',
    title: 'Trading Fee Discounts',
    text: <>Trading fees on Teleport Exchange are discounted based on the amount of coins held.</>
  },
  {
    id: '02',
    ic: '/assets/images/about-ic-02.png',
    title: 'Access to exclusive features',
    text: <>Exclusive access to special liquidity pools and new token listings unavailable to the public</>
  },
  {
    id: '03',
    ic: '/assets/images/about-ic-03.png',
    title: 'Governance Participation Rights',
    text: <>Participation in key protocol decisions</>
  },
  {
    id: '04',
    ic: '/assets/images/about-ic-04.png',
    title: 'Long-term retention incentives',
    text: <>Additional benefits according to the lock period and veToken system</>
  },
]

export default function About() {
  return (
    <section className="relative z-10 md:pl-[122px] pl-5 pt-20 md:pt-[140px]">
      <div className="">
        <div className="w-full max-w-[750px]">
            <h2 className="md:text-[64px] text-[32px] font-bold italic border-b border-white">About TEXC</h2>
            <p className="md:text-[16px] text-[13px] md:pt-10 pt-5 tracking-wider">
                TEXC will function as a central currency for transactions alongside ETH (Ethereum). It has been designed by studying and further evolving the successful model of Uniswap, and is a token with practical value that goes beyond being a mere governance token.
            </p>
        </div>
        <div className="md:mt-12 mt-8">
          <Splide options={{
                        pagination: false,
                        arrows: false,
                        autoWidth: true,
                        gap: '20px'
                    }} aria-label="" hasTrack={false} className="w-full">
                        <SplideTrack>
                            {data.map((item,index) => 
                            <SplideSlide key={index} className="border-2 border-[#89D709] md:rounded-[55px] rounded-3xl overflow-hidden [box-shadow:0_-15px_20.8px_0_rgba(0,_0,_0,_0.60)_inset,_0_0_28px_4px_rgba(216,_255,_134,_0.35)_inset,_0_12px_31.7px_-11px_rgba(229,_255,_72,_0.25)_inset]">
                              <div className="md:size-[380px] size-[320px] relative py-10 md:px-8 px-4">
                                <div className="absolute inset-0 bg-[url('/assets/images/about-bg-deco.png')] bg-cover bg-center"></div>
                                <div className="relative h-full">
                                  <div className="flex justify-end">
                                    <img className="max-md:w-[100px]" src={item.ic} alt={item.title} />
                                  </div>
                                  <div className="px-2 pt-6 text-black">
                                    <p className="text-[#E3FF3A] md:text-[31px] text-[22px] italic font-atkinson">{item.id}</p>
                                    <p className="md:text-[28px] text-[20px] leading-none mb-3">{item.title}</p>
                                    <p className="md:text-[14px] text-[13px] leading-[1.38]">{item.text}</p>
                                  </div>
                                </div>
                                </div>
                            </SplideSlide>
                            )}
                        </SplideTrack>
                    </Splide>
        </div>
      </div>
    </section>
  )
}