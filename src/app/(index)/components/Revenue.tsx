'use client'

export default function Revenue() {
  return (
    <section className="relative pt-8 md:pt-[58px] px-5 md:pb-[144px] pb-20">
        <video
          className="object-center object-cover w-full h-full top-0 left-0 opacity-70 absolute"
          data-lazy-video=""
          data-lazy=""
          data-autoplay="true"
          preload="none"
          loop
          muted
          autoPlay
          src="/assets/videos/revenue.mp4"
          playsInline
          data-loaded="true"
        ></video>
      <div className="w-full max-w-[1440px] mx-auto relative">
        <h4 className="fade-up text-center md:text-[64px] text-[32px] font-medium text-[#C8D6FF] leading-loose pt-24 md:pt-[160px] pb-[60px] px-2.5 tracking-widest">Revenue Model</h4>
        <div className="grid md:grid-cols-2 w-full md:max-w-[1190px] max-w-[440px] mx-auto gap-6 lg:gap-x-[90px] lg:gap-y-[60px]">
            {[
                {
                    title: "Storage Purchase",
                    subtitle: "( General users )",
                    text: "STRG payment based on capacity",
                    characteristics: "STRGStable demand based on utility payment based on capacity"
                },
                {
                    title: "Agent Rewards",
                    subtitle: "( Referrers )",
                    text: "STRG rewards based on performance",
                    characteristics: "Expansion through token circulation"
                },
                {
                    title: "Staking",
                    subtitle: "( Long-term holders )",
                    text: "STRG payment based on capacity",
                    characteristics: "Selling pressure suppression"
                },
                {
                    title: "Premium Features",
                    subtitle: "( Advanced users )",
                    text: "STRG payment based on capacity",
                    characteristics: "High-value demand"
                },
            ].map((item,index) => (
                <div className="fade-up flex flex-col items-center relative p-6 md:p-10 md:rounded-[60px] rounded-[30px] overflow-hidden" key={index}>
                    <span className="absolute inset-0 z-0 backdrop-filter backdrop-blur-[0px] [filter:url(#lg-dist)] isolate"></span>
                    <span className="absolute inset-0 z-[1] "></span>
                    <span className="absolute inset-0 z-[2] [border-radius:inherit] overflow-hidden [box-shadow:inset_1px_1px_0_rgba(255,_255,_255,_0.75),_inset_0_0_5px_rgba(255,_255,_255,_0.75)]"></span>
                    <div className="relative w-full leading-loose">
                        <p className="text-center md:text-[28px] text-[20px] font-bold border-b border-[#A8AABE]">{item.title}</p>
                        <div className="px-2 md:px-5 lg:px-8">
                            <div className="py-5 text-center">
                                <p className="md:text-[20px] text-[16px] text-[#688BF5] font-bold">{item.subtitle}</p>
                                <p className="md:text-[18px] text-[15px] font-medium">{item.text}</p>
                            </div>
                            <div className="bg-white/10 rounded-[30px] py-4 md:py-[30px] px-3 md:px-5 text-center">
                                <p className="md:text-[16px] text-[14px] font-bold mb-2.5">Characteristics</p>
                                <p className="md:text-[16px] text-[14px]">{item.characteristics}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}