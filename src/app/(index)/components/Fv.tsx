'use client'

export default function Fv() {
  return (
    <section className="relative h-[700px] md:h-[1008px] px-5">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url(/assets/images/fv-bg.png)] bg-cover bg-center z-10"></div>
        <video
          className="w-full h-full object-cover relative opacity-60"
          data-lazy-video=""
          data-lazy=""
          data-autoplay="true"
          preload="none"
          loop
          muted
          autoPlay
          src="/assets/videos/fv.mp4"
          playsInline
          data-loaded="true"
        ></video>
      </div>
      <div className="relative pt-[100px] md:pt-[175px] flex flex-col items-center justify-center z-10 gap-6">
        <h1 className="flex justify-center items-center"><img className="max-md:-ml-6" src="/assets/images/logo.png" alt="" /></h1>
        <p className="md:text-[24px] text-[18px] tracking-widest">DWU GATE's core governance and utility token</p>
        <p className="md:text-[16px] text-[13px] tracking-widest w-full max-w-[924px]">
          GATE Coin is a multi-functional token used on the decentralized exchange DWU GATE, which is based on the stablecoin USDT. It provides a new value exchange mechanism that allows you to benefit from DeFi (Decentralized Finance) while reducing the risk of price fluctuations.
        </p>
      </div>
    </section>
  )
}