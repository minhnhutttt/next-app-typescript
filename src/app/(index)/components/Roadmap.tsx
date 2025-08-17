'use client'

const data = [
  {
    id: '1',
    title: <>Building the foundation</>,
    list: [
        "Issuance of TEXC tokens",
        "Implementing basic exchange functionality",
        "Ensuring initial liquidity",
        "Building a community",
    ]
  },
  {
    id: '2',
    title: <>Ecosystem Expansion</>,
    list: [
        "Implementation of fee discount system",
        "Launch of exclusive pools",
        "Expanding partnerships",
        "Mobile app release",
    ]
  },
  {
    id: '3',
    title: <>Strengthening value creation</>,
    list: [
        "Launch of buyback and incineration program",
        "Introducing long-term ownership incentives",
        "Strengthening governance functions",
    ]
  },
  {
    id: '4',
    title: <>Full decentralization</>,
    list: [
        "Complete transition to DAO",
        "Community-driven",
        "Continuous development of new features",
    ]
  },
]

export default function Roadmap() {
  return (
    <section className="relative z-10 mx-auto md:pt-[232px] pt-28 px-5">
      <div className="w-full max-w-[750px] mx-auto">
        <h5 className="text-center md:text-[64px] text-[32px] font-bold italic border-b border-white w-full">Roadmap</h5>
        <div className="md:mt-[75px] mt-10 md:px-2.5 pt-6 md:pb-16 pb-10 md:pt-[55px] relative">
            <div className="absolute w-px h-full bg-[#31DB22] top-0 bottom-0 left-1.5 md:left-[160px]"></div>
            <div className="relative z-10 md:space-y-20 space-y-16">
            {data.map((item) => (
                <div className="fade-up flex gap-3 md:gap-10 max-md:flex-col" key={item.id}>
                    <p className="md:text-[20px] text-[16px] font-extrabold italic tracking-[0.15em] md:w-[95px] max-md:pl-6">Phase {item.id}</p>
                    <div className="flex gap-3 md:gap-5 flex-1">
                        <span className="max-md:mt-1"><img className="max-md:w-[100px]" src="/assets/images/ic-roadmap.png" alt="" /></span>
                        <div className="tracking-[0.17em]">
                            <p className="md:text-[20px] text-[16px] font-extrabold italic">{item.title}</p>
                            <ul className="list-disc pl-6">
                                {item.list.map((listItem, index) => (
                                    <li key={index} className="md:text-[15px] text-[12px] leading-loose">{listItem}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  )
}