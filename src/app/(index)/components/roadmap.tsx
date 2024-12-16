const dataRoadmap = [
    {
        phase: '1',
        stage: (<>2024<br />|<br />2025</>),
        title: 'Infrastructure construction',
        items: [
            'Development of basic payment system',
            'Building an initial partnership',
            'IDO to exchanges compatible with DRC20 standard',
        ],
        active: true
    },
    {
        phase: '2',
        stage: (<>2026<br />|<br />2027</>),
        title: 'Market expansion',
        items: [
            'Expansion of coverage area',
            'Advancement of reservation system',
            'Establishing a user base',
        ],
        active: false
    },
    {
        phase: '3',
        stage: (<>2028<br />|<br />2029</>),
        title: 'Global expansion',
        items: [
            'Full-scale international expansion',
            'Implementing automation with AI',
            'Development of secondary market',
        ],
        active: false
    },
    {
        phase: '4',
        stage: (<>2030<br />|<br /></>),
        title: 'Establishment of ecosystem',
        items: [
            'Global standardization',
            'Achieving full automation',
            'Integration of related services',
        ],
        active: false
    },
]

const Roadmap = () => {
    return (
      <section className="relative -mt-[120px] pt-[255px]">
        <div className="w-full max-w-[1440px] mx-auto">
            <h4 data-scroll className="fade-up text-center md:text-[64px] text-[32px] font-black leaidng-none text-white">Roadmap</h4>
            <div className="w-full max-w-[1080px] mx-auto relative md:mt-12 mt-8 space-y-12 max-md:px-3">
                <div className="absolute h-full bg-white top-0 bottom-0 left-6 w-px max-md:hidden"></div>
                {dataRoadmap.map((item,index) => (
                    <div data-scroll className="fade-up" key={index}>
                        <div className="flex items-center gap-5 tracking-widest relative max-md:mb-5">
                            <div>
                                <img className="max-md:w-10" src={item.active ? '/assets/images/roadmap-phase-active.png' : '/assets/images/roadmap-phase.png'} alt="" />
                            </div>
                            <p className="md:text-[20px] text-[16px] font-black text-white">Phase {item.phase}</p>
                        </div>
                        <div className="md:pl-[120px]">
                            <div className="bg-white flex md:min-h-[300px] min-h-[250px]">
                                <div className="bg-[url('/assets/images/roadmap-year.png')] bg-cover md:w-[180px] flex justify-center flex-col text-center text-white font-black md:text-[24px] text-[16px] bg-right p-3 pr-7 md:pr-10">
                                    {item.stage}
                                </div>
                                <div className="flex justify-center px-4 md:px-8 text-black">
                                    <div className="w-full max-w-[702px] h-full flex justify-center flex-col max-md:py-3">
                                        <p className="md:text-[32px] text-[22px] font-black md:leading-loose md:mb-5 mb-3">{item.title}</p>
                                        <ul className="md:text-[20px] text-[15px] font-black space-y-2">
                                            {item.items.map((text, index) => (
                                                <li className="flex gap-2.5" key={index}>
                                                    <span>●</span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
      </section>
    );
  };
  
  export default Roadmap;
  