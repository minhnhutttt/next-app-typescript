"use client";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        id: '01',
        title: 'The Unique Stories Behind RWAs',
        contents: ['Embodying craftsmanship, cultural impact, and the test of time', 'Finite quantities and irreplicable characteristics driving inherent value']
    },
    {
        id: '02',
        title: (<>Rarity and Authenticity: The Key to RWA&apos;s Charm</>),
        contents: [(<>Scarcity as a fundamental aspect of RWA&apos;s appeal</>), 'Genuine and one-of-a-kind nature of each asset']
    },
    {
        id: '03',
        title: 'Beyond Financial Merits: Emotional and Personal Value',
        contents: ['Sense of pride and satisfaction for RWA holders', 'Connecting individuals to human creativity and achievement']
    },
    {
        id: '04',
        title: 'Owning a piece of history, art, or a rare collectible',
        contents: ['RWAs in the Evolving World of Alternative Investments', 'Captivating those who seek unique, tangible assets']
    },
    {
        id: '05',
        title: 'Enduring value in the face of market volatility',
        contents: ['Testament to the enduring human spirit and pursuit of excellence', 'Timeless treasures with lasting appeal']
    },
]

const Allure = () => {
    const ref = useScrollAnimations();
  return (
    <section ref={ref} className="px-5 md:pt-[180px] pt-20">
      <div className="w-full md:max-w-[1356px] max-w-[440px] mx-auto flex gap-12 lg:gap-[72px] max-md:flex-col">
        <div className="lg:w-1/2 md:max-w-[600px]">
            <div data-scroll="out" className="md:sticky top-0 max-md:flex max-md:justify-center">
                <Title rect="lg:text-[88px] md:text-[50px] text-[40px] dark:text-white leading-[1.3] whitespace-nowrap">
                    Unveiling the <br />Allure of Real <br />World Assets
                </Title>
            </div>
        </div>
        <div className="flex-1 lg:w-1/2 md:space-y-[60px] space-y-7 md:pt-6">
            {data.map((item, index)=>(
                <div className="fade-up bg-[url('/assets/images/bg-allure.png')] bg-[length:100%_100%] lg:w-[600px] h-[240px] md:h-[356px] relative flex items-center justify-center p-6 px-10" key={index}>
                    <p className="absolute top-0 left-0 font-anton md:text-[38px] text-[24px] leading-none">{item.id}</p>
                    <div className="w-full max-w-[400px] font-lato">
                        <p className="md:text-[24px] text-[17px] font-black">{item.title}</p>
                        <ul className="md:text-[18px] text-[14px] font-medium list-disc md:mt-5 mt-3">
                            {item.contents.map((content, index)=> (
                                <li key={index}>{content}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Allure;
