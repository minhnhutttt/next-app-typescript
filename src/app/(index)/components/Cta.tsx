'use client'

export default function Cta() {
  return (
    <section className="relative z-10 overflow-hidden px-5 md:px-10 u-gradient-03 md:py-20 py-16">
       <div className="fade-up w-full max-w-[655px] mx-auto flex items-center justify-center flex-col md:space-y-10 space-y-5 py-1">
        <div className="md:text-[16px] text-[13px] font-semibold">For detailed information on TEX Coin's technical specifications, token economics, risk factors, future outlook, etc., please refer to the official documents below.</div>
        <a
          href="/assets/pdf/TEX Coin (TEXC) Whitepaper.pdf"
          target="_blank"
          className="md:text-[24px] text-[18px] flex items-center justify-center w-[240px] md:w-[300px] h-[60px] md:h-[68px] rounded-[14px] u-gradient-01 p-px"
        >
          <span className="w-full h-full bg-[#010101] rounded-[14px] flex items-center justify-center tracking-widest">
          WHITEPAPER
          </span>
        </a>
       </div>
    </section>
  )
}