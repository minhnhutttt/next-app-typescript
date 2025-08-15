'use client'

const data = [
    {
        id: '1',
        image: '/assets/images/ic-disclaimer-01.png',
        title: 'Strict security verification by multiple auditing agencies',
    },
    {
        id: '2',
        image: '/assets/images/ic-disclaimer-02.png',
        title: 'Careful rollout with phased release of new features',
    },
    {
        id: '3',
        image: '/assets/images/ic-disclaimer-03.png',
        title: 'Emergency stop function for quick response',
    },
    {
        id: '4',
        image: '/assets/images/ic-disclaimer-04.png',
        title: 'Full preparation through the establishment of an insurance fund',
    },
]

export default function Disclaimer() {
    return (
        <section className="relative pt-[120px] md:pt-[250px] px-5">
            <div className="absolute bg-[url(/assets/images/disclaimer-bg.png)] bg-cover inset-0 mix-blend-hard-light"></div>
            <div className="w-full md:max-w-[1096px] max-w-[400px] mx-auto relative">
                <h5 className="fade-up md:text-[64px] text-[32px] text-center">Multi-layered defense system</h5>
                <div className="fade-up w-full max-w-[484px] mx-auto md:text-[24px] text-[18px] mt-10 md:mt-28 leading-snug">
                    The UGTC Protocol implements the following security measures:
                </div>
                <div className="flex justify-between md:gap-5 md:mt-20 mt-10 max-md:flex-wrap max-md:gap-y-8">
                    {data.map((item) => (
                        <div className="fade-up w-1/2 md:w-[196px] flex flex-col items-center max-md:px-4" key={item.id}>
                            <span><img src={item.image} alt="" /></span>
                            <div className="w-full md:text-[16px] text-[13px] md:mt-[18px] mt-3 px-2">
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="fade-up w-full max-w-[650px] mx-automt-16 md:mt-[130px] mx-auto pb-12">
                    <p className="md:text-[16px] text-[13px]">
                        For detailed information on GATE Coin's technical specifications, token economics, risk factors, future prospects, and collaboration plans with TEXC, please refer to the official documents below.
                    </p>
                </div>
            </div>
        </section>
    )
}