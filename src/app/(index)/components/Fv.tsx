'use client'

import Starfield from "./Starfield"

export default function Fv() {
  return (
    <section className="relative z-10 h-[540px] md:h-[760px] overflow-hidden px-5 md:px-10">
       <Starfield />
       <div className="beam absolute top-24 md:top-[160px] z-10 h-1.5 md:h-2.5 animate-[beamMove_2s_infinite]"></div>
       <div className="beam absolute top-[220px] md:top-[400px] z-10 h-1.5 md:h-2.5 animate-[beamMove_2.3s_1s_infinite]"></div>
       <div className="beam absolute top-[440px] md:top-[600px] z-10 h-1.5 md:h-2.5 animate-[beamMove_1.7s_1.2s_infinite]"></div>
       <div className="relative h-full pt-[150px] md:pt-[200px] max-w-[1440px] mx-auto">
          <h1><img src="/assets/images/tex-coin.svg" alt="" /></h1>
          <p className="u-text-gradient-01 md:text-[24px] text-[18px] font-black leading-none tracking-widest py-5 md:py-6">Teleport Exchange's core governance and utility token</p>
          <p className="md:text-[18px] text-[15px] max-w-[703px] tracking-widest">
            TEX Coin is a multi-functional token used on the decentralized exchange Teleport Exchange. Unlike traditional exchange tokens, it functions as a quasi-reserve currency and provides practical utility for holders.
          </p>
       </div>
    </section>
  )
}