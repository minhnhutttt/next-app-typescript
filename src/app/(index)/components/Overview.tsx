'use client'

export default function Overview() {
  return (
    <section className="relative pt-8 md:pt-[58px] px-5">
      <div className="w-full max-w-[1440px] mx-auto">
        <h2 className="fade-up text-center md:text-[64px] text-[32px] font-medium text-[#C8D6FF] leading-loose py-5 px-2.5 tracking-widest">Overview</h2>
        <p className="fade-up w-full max-w-[800px] mx-auto font-light leading-loose md:text-[20px] text-[16px] tracking-widest">
            Storage Coin (STRG) is a utility token that enables capacity purchases, reward acquisition, and growth participation in the cloud storage service "DIVER Storage."
        </p>
        <div className="grid lg:grid-cols-4 grid-cols-2 w-full max-w-[1300px] mx-auto gap-6 lg:gap-[50px] md:mt-[60px] mt-10">
            {[
                {
                    image: '/assets/images/ic-capacity.png',
                    title: <>One-time Capacity Purchase</>,
                    content: <>A perpetual usage model breaking away from subscription-based systems</>,
                },
                {
                    image: '/assets/images/ic-agent.png',
                    title: <>Agent rewards</>,
                    content: <>Graduated reward acquisition through referral activities</>,
                },
                {
                    image: '/assets/images/ic-staking.png',
                    title: <>Multi-layered utility</>,
                    content: <>Staking, premium features, distributed participation</>,
                },
                {
                    image: '/assets/images/ic-infinite.png',
                    title: <>One-time Capacity Purchase</>,
                    content: <>Community-driven decision making</>,
                },
            ].map((item,index) => (
                <div className="fade-up flex flex-col items-center md:tracking-widest" key={index}>
                    <span><img src={item.image} alt="" /></span>
                    <p className="text-center md:text-[18px] text-[15px] font-bold md:mt-8 mt-4 md:min-h-[54px] min-h-[40px]">{item.title}</p>
                    <p className="md:text-[18px] text-[15px] md:mt-5 mt-2">{item.content}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}