"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        phase: '01',
        title: 'Foundation construction period (2024 Q2-Q3)',
        items: [
            'Token design and development',
            'Building an initial partnership',
            'Basic system development',
        ]
    },
    {
        phase: '02',
        title: (
            <>
            Pilot Program (Q4 2024) <br />
            <span className="md:text-[20px] text-[14px]">"SANTA Christmas Pilot 2024"</span>
            </>
        ),
        items: [
            'Basic token issuance and transfer',
            'Simple support system',
            'Collaboration with facilities in need and in need of urgent assistance',
            'Ensuring transparency of basic transaction records',
        ]
    },
    {
        phase: '03',
        title: 'Improvement and Expansion (2025 Q1-Q2)',
        items: [
            'Enhancements based on learnings from pilots',
            'Implementation of usage restriction function',
            'Strengthening the authentication system',
            'Establishment of community governance system',
        ]
    },
    {
        phase: '04',
        title: 'Full launch (Q3-Q4 2025)',
        items: [
            'Platform with comprehensive features',
            'Development of a wide range of support programs',
            'Full-scale start of corporate partnership',
            'Start of global expansion'
        ]
    },
]

const Roadmap = () => {
  const ref = useScrollAnimations();
  return (
    <section id="roadmap" ref={ref} className="relative px-5 bg-white bg-[url('/assets/images/roadmap-bg.png')] bg-[length:auto_100%] bg-no-repeat bg-top md:mt-20 mt-12 md:pb-[126px] pb-20">
        <div className="h-px"></div>
        <h3 className="popup md:text-[96px] text-[36px] font-bold leading-none md:-mt-[52px] -mt-[20px] md:px-5">Roadmap</h3>
        <div className="w-full max-w-[935px] mx-auto mt-16 md:mt-[106px] md:space-y-2 space-y-8">
            {data.map((phase,index) => (
                <div className="fade-up group flex md:gap-[30px] gap-5" key={index}>
                    <div className="">
                        <div className="md:w-[181px] w-[90px] aspect-[181/291] bg-[url('/assets/images/phase-bg.png')] group-last:aspect-square group-last:bg-[url('/assets/images/phase-bg-last.png')] font-bold leading-none text-center pt-5 md:pt-10 bg-no-repeat bg-cover">
                            <p className="md:text-[24px] text-[16px]">Phase</p>
                            <p className="md:text-[80px] text-[40px]">{phase.phase}</p>
                        </div>
                    </div>
                    <div className="flex-1 md:pt-7">
                        <h5 className="md:text-[32px] text-[18px] leading-none font-bold">{phase.title}</h5>
                        <ul className="list-disc md:pl-7 pl-5 md:text-[22px] text-[16px] mt-3">
                            {phase.items.map((item,index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Roadmap;
