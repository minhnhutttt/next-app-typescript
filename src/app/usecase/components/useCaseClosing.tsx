"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        icon: '/assets/images/usecase-ic-01.svg',
        title: 'Learn More About DIVER',
        text: (<>For those who want to deeply understand <br className="max-md:hidden" />DIVER's basic concepts, features, and vision</>),
        link: '/about'
    },
    {
        icon: '/assets/images/usecase-ic-02.svg',
        title: 'Access the Developer RPC Gateway',
        text: (<>For developers who want to build their own <br className="max-md:hidden" />applications using DIVER's infrastructure</>),
        link: '/gateway'
    },
    {
        icon: '/assets/images/usecase-ic-03.svg',
        title: 'Check Technical Details',
        text: (<>For those who want to know more about <br className="max-md:hidden" />DIVER's technical specifications, <br className="max-md:hidden" />tokenomics, and roadmap</>),
        link: '/'
    }
]

const UseCaseClosing = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative px-5 md:pt-[162px] md:pb-[180px] pt-[70px] pb-[120px]">
        <div className="w-full max-w-[1280px] mx-auto flex max-lg:flex-col md:justify-between items-center xl:gap-[120px] gap-[60px]">
            <div className="">
                <h3 className="fade-up font-roboto xl:text-[112px] md:text-[80px] text-[60px] font-bold leading-[1.1]">
                INNOVATIVE <br />IDEAS <br />AWAIT YOU!
                </h3>
                <p className="fade-up md:text-[24px] text-[20px] font-medium md:mt-[25px] mt-5">Unleash your creativity in the DIVER ecosystem. </p>
            </div>
            <div className="md:space-y-[60px] space-y-10 flex-1 max-lg:flex max-lg:flex-col max-lg:items-center">
                {data.map((item, index) => (
                    <a href={item.link} className="fade-up md:min-h-[160px] py-5 bg-[#005FD7] border border-white rounded-[20px] overflow-hidden pl-5 xl:pl-[50px] inline-flex items-center md:gap-[30px] gap-[20px] duration-150 hover:opacity-75" key={index}>
                        <figure>
                            <img className="max-md:h-10" src={item.icon} alt="" />
                        </figure>
                        <div className="flex-1">
                            <p className="md:text-[24px] text-[16px] font-bold leading-none mb-1.5">{item.title}</p>
                            <p className="md:text-[15px] text-[13px]">{item.text}</p>
                        </div>
                        <div className="xl:w-[50px] w-8">
                            <img className="max-md:w-3" src="/assets/images/usecase-ic-tri.svg" alt="" />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
  );
};

export default UseCaseClosing;
