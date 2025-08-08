'use client'

export default function Governance() {
  return (
    <section className="relative pt-20 md:pt-[120px] px-5 flex items-center justify-center flex-col">
        <div className="absolute bg-cover bg-center w-full z-10 pointer-events-none">
        <img className="w-full" src="/assets/images/governance-bg.png" alt="" /></div>
      <div className="w-full relative max-w-[1250px] mx-auto md:rounded-[100px] rounded-[40px] bg-[radial-gradient(50%_50%_at_50%_50%,_#353354_0%,_#0A0C2C_100%)] [box-shadow:0_4px_4px_0_rgba(0,_0,_0,_0.30)] md:pt-[70px] pt-10 md:pb-[60px] pb-8 px-5">
        <h4 className="fade-up text-center md:text-[48px] text-[24px] font-medium text-[#C8D6FF] leading-none lg:leading-normal py-5 px-2.5 tracking-widest">Governance and Risk Management</h4>
        <p className="fade-up w-full max-w-[940px] mx-auto text-center leading-loose md:text-[16px] text-[13px] tracking-widest md:mt-8 mt-5">
            Storage Coin (STRG) adopts user-centric decentralized governance (DAO). Token holders can participate in decision-making according to their token holdings and have voting rights on matters such as agent reward rates and premium feature expansions. Proposals are discussed within the community and passed by majority vote, enabling transparent and flexible operations.
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 w-full max-w-[400px] md:max-w-[987px] mx-auto gap-8 lg:gap-[30px] md:mt-[60px] mt-10">
            {[
                {
                    image: '/assets/images/ic-risk1.png',
                    title: <>Regulatory Risk</>,
                    list: [
                        "Continuous compliance with regulations in various countries",
                        "Clear positioning as a utility token",
                        "Legal advisory framework",
                    ]
                },
                {
                    image: '/assets/images/ic-risk2.png',
                    title: <>Technical Risks</>,
                    list: [
                        "Phased system expansion",
                        "Infrastructure design with redundancy",
                        "24/7 monitoring system",
                    ]
                },
                {
                    image: '/assets/images/ic-risk3.png',
                    title: <>Market Risk</>,
                    list: [
                        "Diverse demand creation mechanisms",
                        "Community-driven improvements",
                        "Flexible reward adjustment features",
                    ]
                },
            ].map((item,index) => (
                <div className="fade-up flex flex-col items-center md:tracking-widest" key={index}>
                    <span><img className="max-md:max-w-[160px]" src={item.image} alt="" /></span>
                    <p className="text-center md:text-[18px] text-[15px] font-bold md:mt-8 mt-4 mb-4">{item.title}</p>
                    <div className="w-8 mx-auto h-0.5 bg-white"></div>
                    <ul className="md:text-[16px] text-[14px] font-light leading-[1.3] list-disc pl-6 mt-4 space-y-5">
                        {item.list.map((text, index) => (
                            <li key={index}>{text}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}