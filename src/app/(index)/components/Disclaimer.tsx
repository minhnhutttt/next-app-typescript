'use client'


export default function Disclaimer() {
  return (
    <section className="relative z-10 md:py-[80px] py-12 px-5">
       <div className="fade-up w-full max-w-[713px] mx-auto bg-white/10 rounded-[10px] md:p-[30px] p-5 space-y-2.5">
        <p className="text-center md:text-[15px] text-[13px] font-extrabold">Disclaimer</p>
        <p className="md:text-[15px] text-[13px] font-light">
            This page is for informational purposes only and does not constitute investment advice. Investing in cryptocurrencies involves high risks. Please make investment decisions at your own risk after reviewing detailed information.
        </p>
       </div>
    </section>
  )
}