'use client'

export default function Vm() {
    return (
        <section className="relative pt-20 md:pt-[128px] md:pb-[102px] pb-16">
            <div className="vm-animation animation-ltr border-b border-[#C8D6FF]">
                <div className="w-full max-w-[1400px] mx-auto">
                    <div className="vm-animation-inner px-5 py-10 md:py-16">
                        <div className="w-full max-w-[1200px] mx-auto md:min-h-[232px] flex items-center max-md:flex-col">
                            <p className="lg:text-[96px] md:text-[72px] text-[48px] leading-loose text-[#C8D6FF] tracking-widest md:w-[350px] lg:w-[450px]">Vision</p>
                            <p className="md:text-[20px] text-[16px] leading-loose flex-1">
                                A sustainable cloud storage economic ecosystem with practical utility and community-driven scalability
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vm-animation animation-rtl border-b border-[#C8D6FF]">
                <div className="w-full max-w-[1400px] mx-auto">
                    <div className="vm-animation-inner px-5 py-10 md:py-16">
                        <div className="w-full max-w-[1200px] mx-auto md:min-h-[232px] flex items-center max-md:flex-col">
                            <p className="lg:text-[96px] md:text-[72px] text-[48px] leading-loose text-[#C8D6FF] tracking-widest md:w-[350px] lg:w-[450px]">Mission</p>
                            <ul className="md:text-[20px] text-[16px] leading-loose flex-1 list-decimal pl-5">
                                <li>Liberation from subscription dependency</li>
                                <li>Appropriate evaluation and rewards for user contributions</li>
                                <li>Construction of a decentralized storage ecosystem</li>
                                <li>Implementation of transparent DAO governance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}