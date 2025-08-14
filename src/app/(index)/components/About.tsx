'use client'

import { ReactNode } from "react"


const AboutItem = ({ic, title, text, classname}: {ic: string, title: ReactNode, text: ReactNode, classname?: string}) => (
    <div className={`zoom-out relative flex items-center justify-center aspect-square max-w-[500px] w-full ${classname}`}>
        <div className="absolute inset-0 bg-[url(/assets/images/about-bg.png)] bg-[size:100%_100%] backdrop-filter backdrop-blur-[3.3949999809265137px]"></div>
        <div className="space-y-5 relative px-10 md:px-[45px] max-md:w-full">
            <p><img className="max-md:size-12" src={ic} alt="" /></p>
            <p className="md:text-[24px] text-[18px] font-bold">{title}</p>
            <p className="md:text-[18px] text-[14px]">{text}</p>
        </div>
    </div>
)

export default function About() {
  return (
    <section className="relative px-5 bg-[url(/assets/images/bg.png)] bg-cover pb-20 md:pb-[122px]">
        <div className="w-full max-w-[1440px] mx-auto">
            <div className="w-full max-w-[800px] mx-auto">
                <h2 className="fade-up md:text-[64px] text-[32px] text-center tracking-wide">About UGTC</h2>
                <p className="fade-up md:text-[16px] text-[13px] font-light tracking-wider md:mt-6">
                    UGTC is a utility-oriented token designed based on the price-stable USDT. It analyzes the success factors of Uniswap, one of the world's largest DEXs, and implements a value proposition that exceeds that of Uniswap, including a buyback and burn program, preferential treatment for long-term holders, and tiered fee discounts.
                </p>
            </div>
            <div className="w-full max-w-[400px] md:max-w-[1240px] mx-auto mt-[88px] ">
                <div className="flex justify-between gap-5 max-md:flex-col">
                    <AboutItem ic="/assets/images/ic-about-01.png" title={<>Tiered Fee Discounts</>} text={<>Tiered trading fee discounts and VIP status based on holdings</>} classname="md:size-[380px] md:ml-8" />
                    <AboutItem ic="/assets/images/ic-about-02.png" title={<>Premium Feature <br />Access</>} text={<>Priority access to limited <br className="max-md:hidden" />liquidity pools and newly listed tokens</>} classname="md:mt-[110px] md:size-[400px] md:mr-6 lg:mr-16" />
                </div>
                <div className="flex lg:ml-[320px] md:ml-[120px] mt-5">
                    <AboutItem ic="/assets/images/ic-about-03.png" title={<>Stability of stablecoin infrastructure</>} text={<>Based on USDT, it reduces the risk of sudden price fluctuations</>} classname="md:size-[435px] md:px-7" />
                </div>
                <div className="flex justify-between gap-5 max-md:flex-col max-md:mt-5">
                    <AboutItem ic="/assets/images/ic-about-04.png" title={<>Governance <br />Participation Rights</>} text={<>Participation in key protocol decisions</>} classname="md:size-[380px] md:mt-10" />
                    <AboutItem ic="/assets/images/ic-about-05.png" title={<>Long-term retention incentives</>} text={<>Additional benefits and revenue sharing through the veUGTC system</>} classname="md:size-[365px] md:mt-5 md:mr-5" />
                </div>
            </div>
        </div>
    </section>
  )
}