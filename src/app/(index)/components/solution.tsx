"use client";

const data = [
    'Enhanced Distributed Storage',
    'Phased Development Plan',
    'Security and Privacy',
    'Scalability',
]

const Solution = () => {
  return (
    <section id="solution" className="relative pt-20 md:pt-[60px] md:pb-10 pb-[60px] px-8 w-screen overflow-hidden mb-[50vh]">
      <div className="w-full max-w-[1310px] mx-auto">
        <h3 className="text-center font-semibold md:text-[96px] text-[32px]">IPDC Solution</h3>
        <p className="max-w-[520px] md:text-[24px] text-[18px] font-semibold mt-12 md:mt-[95px]">
            IPDC provides an innovative solution that builds upon IPFS concepts while incorporating unique improvements
        </p>
        <div className="flex justify-start mt-12 md:mt-[45px]">
            <ul className="list-decimal md:text-[36px] text-[20px] font-semibold leading-[3] pl-8">
                {data.map((item, index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Solution;
