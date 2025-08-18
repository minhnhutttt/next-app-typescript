'use client'

const data = [
    {
        id: '1',
        title: 'Foundation Building',
        list: [
            'Launch of UGTC token',
            'Implementation of core DEX functionalities',
            'Securing initial liquidity',
            'Community formation',
        ]
    },
    {
        id: '2',
        title: 'Feature Expansion',
        list: [
            'Introduction of tiered fee discount system',
            'Launch of premium features',
            'Partnership expansion',
            'User interface improvements',
        ]
    },
    {
        id: '3',
        title: 'Value Creation',
        list: [
            'Launch of buyback & burn program',
            'Implementation of veUGTC system',
            'Development of additional revenue streams',
        ]
    },
    {
        id: '4',
        title: 'Ecosystem Expansion',
        list: [
            'Full transition to DAO governance',
            'Integration with other protocols',
            'Introduction of new financial products',
            'Strategic partnerships with TEXC',
        ]
    }
]

export default function Roadmap() {
    return (
        <section className="relative pt-[120px] md:pt-[250px]">
            <div className="w-full">
                <h5 className="md:text-[64px] text-[32px] text-center">Development Roadmap</h5>
                <div className="md:mt-[45px] mt-8 relative pb-[120px] md:pb-[250px] md:pt-[220px] pt-10">
                    <div className="absolute w-1/2 top-0 right-0 bottom-0 bg-[url(/assets/images/roadmap-bg.png)] bg-[size:100%_100%] max-md:hidden"></div>
                    <div className="relative md:space-y-[100px] space-y-16 w-full max-w-[440px] md:max-w-[1240px] mx-auto px-5">
                    {data.map((road) => (
                        <div key={road.id} className="fade-up flex items-center justify-center gap-5 relative max-md:flex-wrap">
                            <div className="md:flex-1 max-md:w-full">
                                <div className="md:pl-10 xl:pl-40">
                                    <p className="md:text-[20px] text-[16px] font-light">Phase {road.id}</p>
                                    <p className="md:text-[32px] text-[20px] font-semibold">{road.title}</p>
                                </div>
                            </div>
                            <p className="size-11 rounded-full bg-white flex items-center justify-center border border-[#0046B8] font-['Arial'] md:text-[26px] text-[20px] text-[#0046B8] font-bold">{road.id}</p>
                            <div className="flex-1">
                                <ul className="text-[#6DB8F7] md:text-[18px] text-[14px] leading-loose list-disc pl-6 xl:pl-14">
                                {road.list.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    )
}