"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        id: '01',
        title: 'Developing innovative products that strengthen individual sovereignty',
        items: ["Maximizing users' right to self-determination and providing direct pathways for social participation","Designing intuitive interfaces that support individual decision-making"],
        background: '#2A5298'
    },
    {
        id: '02',
        title: 'Market-driven evolution',
        items: ["Platform evolution based on user choices and actions","Flexible development cycles that respond to diverse individual needs"],
        background: '#3366A8'
    },
    {
        id: '03',
        title: "Respecting individuals' freedom of choice",
        items: ["Emphasizing voluntary involvement rather than forced participation","Providing diverse options to promote users' autonomous decision-making"],
        background: '#3D7BB8'
    },
    {
        id: '04',
        title: 'Improvement centered on user feedback',
        items: ["Continuous evolution based on individual experiences and opinions","Directly reflecting user voices in the platform's direction"],
        background: '#468CC8'
    },
    {
        id: '05',
        title: 'Creating a virtuous cycle where individual success leads to societal development',
        items: ["Ensuring individual value creation directly contributes to the overall value of the platform and society","Promoting the ripple effect of individual success stories on society as a whole"],
        background: '#53A1D8'
    }
]

const Strategy = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative pt-20 md:pt-[160px] z-10 px-5 md:pb-[100px] pb-[60px]">
      <div className="w-full mx-auto max-w-[1363px]">
        <h3 className="text-center md:text-[64px] text-[32px] font-bold tracking-wideleading-none">DIVER's Growth Strategy</h3>
        <div className="grid md:grid-cols-2 gap-7 md:gap-[43px] md:mt-[46px]">
            {data.map((item,index)=> (
                <div className="md:min-h-[550px] rounded-[20px] py-8 md:py-[60px] px-5" style={{backgroundColor: item.background}} key={index}>
                    <div className="w-full max-w-[530px] mx-auto">
                        <div className="md:text-[24px] text-[18px] leading-none">Strategy {item.id}</div>
                        <h5 className="md:text-[32px] text-[20px] leading-[1.3] md:mt-5 mt-4 tracking-wide md:min-h-[120px]">{item.title}</h5>
                        <div className="md:mt-10 mt-6 bg-white/10 rounded-[10px] md:py-[30px] py-5 px-5 md:text-[20px] text-[16px] font-medium leading-[1.3]">
                            <ul className="w-full max-w-[400px] mx-auto list-disc md:space-y-6 space-y-4">
                                {item.items.map((text, index) => (
                                    <li className="" key={index}>
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
            <div className="md:min-h-[550px] rounded-[20px] py-8 md:py-[60px] px-5 bg-black">
                <div className="w-full max-w-[530px] mx-auto">
                    <h4 className="md:text-[45px] text-[24px] font-bold u-text-stroke">The Future DIVER Aims For</h4>
                    <div className="md:mt-10 mt-6 bg-white/10 rounded-[10px] md:py-[30px] py-5 px-5 md:text-[20px] text-[16px] font-bold leading-[1.3] h-[354px] bg-[url('/assets/images/strategy-d.png')] bg-center flex items-center justify-center">
                        <ul className="w-full max-w-[400px] mx-auto list-disc md:space-y-6 space-y-4">
                            <li>A world without economic barriers</li>
                            <li>A society where individual potential is maximized</li>
                            <li>A sustainable and equitable global economic sphere</li>
                            <li>Harmony between technology and humanity</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
