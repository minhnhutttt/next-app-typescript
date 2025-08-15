'use client'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const data = [
    {
        image: '/assets/images/img-mechanisms1.png',
        title: 'Buyback & Burn Program',
        text: 'A portion of DWU GATE’s trading fees is used to regularly buy back UGTC from the market and permanently burn it.',
        list: [
            'Increase scarcity by reducing total supply',
            'Create continuous buying pressure',
            'Promote long-term price appreciation',
        ]
    },
    {
        image: '/assets/images/img-mechanisms2.png',
        title: 'Revenue Distribution Model',
        text: 'Protocol revenue is transparently allocated across multiple purposes to enhance the overall value of the community.',
        list: [
            'Buyback & burn (value preservation)',
            'Liquidity enhancement (market stability)',
            'Development funding (feature improvements)', 
            'Staking rewards (holder incentives)', 
        ]
    },
    {
        image: '/assets/images/img-mechanisms3.png',
        title: 'veUGTC System',
        text: 'Lock UGTC for a set period to receive additional benefits.',
        list: [
            'Increased voting power based on lock period',
            'Share of protocol fees',
            'Priority access to exclusive events and airdrops', 
            'Opportunities for additional rewards', 
        ]
    },
]

export default function Mechanisms() {
    return (
        <section className="relative px-5 bg-[url(/assets/images/mechanisms-bg.png)] bg-cover md:py-[140px] py-16 lg:pl-[113px] pl-6">
            <div className="flex items-center gap-8 max-lg:flex-col">
                <div className="md:w-[450px] lg:flex-[0_0_450px]">
                    <div className="fade-up max-lg:text-center">
                        <p className="md:text-[36px] text-[22px] font-bold leading-snug">Value Creation <br />Mechanisms</p>
                        <span className="inline-block h-[3px] w-[112px] bg-[#0046B8]"></span>
                        <p className="md:text-[20px] text-[16px] text-[#F5F5F5] pt-2 max-lg:text-left">Three Strategies to Sustainably Increase the Value of UGTC</p>
                    </div>
                </div>
                <div className="lg:w-[calc(100%-450px)] w-full">
                    <Splide options={{
                        pagination: true,
                        arrows: false,
                        autoWidth: true,
                        gap: '16px'
                    }} aria-label="" hasTrack={false} className="w-full">
                        <SplideTrack>
                            {data.map((slide,index) => 
                            <SplideSlide key={index} className="space-y-4 text-center">
                                <div>
                                    <img className="max-md:w-[320px]" src={slide.image} alt={slide.title} />
                                </div>
                                <div className="px-5 space-y-4 md:max-w-[380px] max-w-[320px] leading-[1.3]">
                                    <p className="font-bold md:text-[20px] text-[16px]">{slide.title}</p>
                                    <p className="md:text-[18px] text-[14px]">
                                        {slide.text}
                                    </p>
                                    <ul className="list-disc pl-6  md:text-[16px] text-[13px] font-extralight text-left space-y-5">
                                        {slide.list.map((item) => 
                                            <li key={item}>{item}</li>
                                        )}
                                    </ul>
                                </div>
                            </SplideSlide>
                            )}
                        </SplideTrack>
                        <ul className="splide__pagination splide__pagination--ltr !bottom-[-40px] md:!bottom-[-60px]" role="tablist" aria-label="Select a slide to show"></ul>
                    </Splide>
                </div>
            </div>
        </section>
    )
}