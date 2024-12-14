"use client";

const dataTechnicalTop = [
    {
        image: '/assets/images/technical-ic-01.png',
        text: 'Ultra-low transaction fees',
    },
    {
        image: '/assets/images/technical-ic-02.png',
        text: (<>Fast transaction processing (240,000 transactions per second)</>),
    },
    {
        image: '/assets/images/technical-ic-03.png',
        text: (<>Great scalability</>),
    },
    {
        image: '/assets/images/technical-ic-04.png',
        text: (<>Operation using environmentally friendly PoD (Proof of Democratization)</>),
    },
]

const dataTechnicalBottom = [
    {
        image: '/assets/images/technical-ic-05.png',
        text: 'Multi-layer structure',
    },
    {
        image: '/assets/images/technical-ic-06.png',
        text: (<>security design</>),
    },
    {
        image: '/assets/images/technical-ic-07.png',
        text: (<>Scalability solution</>),
    },
    {
        image: '/assets/images/technical-ic-08.png',
        text: (<>operational system</>),
    },
]

const dataSpecifications = [
    {
        technical: 'Protocol',
        value: 'DRC20 standard'
    },
    {
        technical: 'Transaction processing capacity',
        value: '24,000+ TPS'
    },
    {
        technical: 'Block generation time',
        value: '3 seconds'
    },
    {
        technical: 'Smart contract execution environment',
        value: 'EVM'
    },
    {
        technical: (<>Network latency <br />(delay in network transmission speed)</>),
        value: '100ms or less'
    },
    {
        technical: 'Data redundancy',
        value: 'Geographically distributed storage (IPDC = Inter Planetary Data Center)'
    },
]

const Technical = () => {
  return (
    <section className="relative bg-[#18539E]/[0.2]">
      <div className="h-[30px] bg-[url(/assets/images/d-line.png)] bg-cover"></div>
        <div className="w-full max-w-[1440px] mx-auto md:mt-[124px] mt-20">
            <h3 className="md:text-[64px] text-[28px] font-black leading-none text-center text-white max-w-[1105px] mx-auto tracking-widest px-5">
                Technological superiority and how to achieve it
            </h3>
            <div className="flex items-center justify-center">
                <img className="mix-blend-color-dodge" src="/assets/images/shiny.png" alt="" />
                <img className="absolute" src="/assets/images/diver-logo.png" alt="" />
            </div>

            <div className="grid lg:grid-cols-4 grid-cols-2 md:-mt-5">
                {dataTechnicalTop.map((item, index) => (
                    <div className="flex flex-col justify-between first:border-l-0 max-lg:[&:nth-child(4)]:border-t max-lg:[&:nth-child(3)]:border-t max-lg:[&:nth-child(3)]:border-l-0 border-l border-[#18539E] items-center pt-5 pb-5 lg:pb-2 px-4 h-[200px] md:h-[220px]" key={index}>
                        <figure  className="max-md:w-1/2 flex justify-center"><img src={item.image} alt="" /></figure>
                        <p className="md:text-[14px] text-[12px] leading-none text-white text-center">{item.text}</p>
                    </div>
                ))}
            </div>

            <div className="text-center flex justify-center md:text-[36px] text-[20px] font-black text-white md:mt-[160px] mt-24 tracking-widest">TECHNICAL FEATURES</div>
            <div className="grid lg:grid-cols-4 grid-cols-2 mt-10">
                {dataTechnicalBottom.map((item, index) => (
                    <div className="flex flex-col justify-between first:border-l-0 max-lg:[&:nth-child(4)]:border-t max-lg:[&:nth-child(3)]:border-t max-lg:[&:nth-child(3)]:border-l-0 border-l border-[#18539E] items-center pt-5 pb-5 lg:pb-2 px-4 h-[200px] md:h-[220px]" key={index}>
                        <figure  className="max-md:w-1/2 flex justify-center"><img src={item.image} alt="" /></figure>
                        <p className="md:text-[14px] text-[12px] leading-none text-white text-center">{item.text}</p>
                    </div>
                ))}
            </div>

            <div className="text-center flex justify-center md:text-[36px] text-[20px] font-black text-white md:mt-[160px] mt-24 tracking-widest">Specific technical specifications</div>
            <div className="w-full max-w-[1224px] mx-auto border border-white/40 divide-y divide-white/40 text-white">
                {dataSpecifications.map((item,index) =>  (
                    <div className="flex min-h-[106px] md:text-[16px] text-[14px] font-black divide-x divide-white/40 text-center" key={index}>
                        <div className="w-[694px] flex items-center justify-center p-5 bg-white/10">
                            {item.technical}
                        </div>
                        <div className="w-[694px] flex items-center justify-center p-5">
                            {item.value}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </section>
  );
};

export default Technical;
