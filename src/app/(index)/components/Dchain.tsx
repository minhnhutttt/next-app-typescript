'use client'

export default function DChain() {
  return (
    <section className="relative z-10 md:pt-[230px] pt-[100px]">
       <div className="w-full max-w-[1440px] mx-auto md:pl-10 lg:pl-[122px] md:pr-10 px-5">
          <div className="flex items-end justify-end relative">
            <div className="fade-up flex items-center md:gap-7 gap-5 absolute top-0 left-0 max-md:max-w-[340px]">
                <p className="[filter:drop-shadow(0_0_331.867px_rgba(24,_103,_255,_0.60))]"><img src="/assets/images/logo-d.png" alt="" /></p>
                <p className="[filter:drop-shadow(0_0_331.867px_rgba(24,_103,_255,_0.60))] "><img src="/assets/images/diver.png" alt="" /></p>
            </div>
            <div className="fade-up w-full max-w-[760px] relative pt-24 md:pt-20">
                <p className="lg:text-[64px] md:text-[48px] text-[28px] font-bold italic border-b border-white tracking-tight">DIVER Chain's advantages</p>
                <p className="md:text-[16px] text-[13px] lg:pt-10 md:pt-5 pt-3">
                  There are no fees for sending or receiving tokens through DIVER Wallet Pro, so you can use it for small or frequent transactions without worrying about costs. It also has high-speed processing, allowing for quick transaction confirmation, making it easy to use even for beginners.
                </p>
            </div>
          </div>
       </div>
    </section>
  )
}