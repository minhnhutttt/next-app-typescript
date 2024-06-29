"use client";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        image: '/assets/images/img-strengths-01.png',
        title: 'Expertise in RWA Selection',
        text: 'Our meticulous research and analysis enable us to identify high-quality, appreciating assets for our portfolio.'
    },
    {
        image: '/assets/images/img-strengths-02.png',
        title: 'Secure Asset Management',
        text: 'We ensure the optimal preservation of your RWAs through state-of-the-art facilities, stringent security measures, and comprehensive insurance.'
    },
    {
        image: '/assets/images/img-strengths-03.png',
        title: 'Cutting-Edge Technology',
        text: 'By leveraging blockchain integration, digital cataloging, and regular audits, we maintain transparency and traceability.'
    },
    {
        image: '/assets/images/img-strengths-04.png',
        title: 'Disciplined Investment Philosophy',
        text: 'Our investment strategy is built on a long-term, value-driven approach and diversified portfolio construction.'
    },
]

const Strengths = () => {
    const ref = useScrollAnimations();
  return (
    <section ref={ref} className="px-5 md:pt-[164px] pt-20 md:pb-[180px] pb-[60px]">
      <div className="w-full md:max-w-[1220px] max-w-[440px] mx-auto">
        <div data-scroll="out" className="flex justify-center">
            <Title rect="md:text-[128px] text-[50px] text-black dark:text-white">Our Strengths</Title>
        </div>
        <div className="grid md:grid-cols-2 lg:gap-x-[100px] md:gap-x-[40px] lg:gap-y-20 md:gap-y-8 gap-10 mt-5">
            {data.map((item,index)=> (
                <div className="fade-up bg-white max-w-[560px] [box-shadow:0px_0px_60px_0px_rgba(0,_0,_0,_0.20)]" key={index}>
                    <figure>
                        <img src={item.image} alt={item.text} />
                    </figure>
                    <div className="px-5">
                        <div className="font-lato w-full max-w-[435px] mx-auto md:pt-7 pt-5">
                            <h4 className="text-center font-black md:text-[24px] text-[18px]">
                                {item.title}
                            </h4>
                            <p className="md:text-[18px] text-[15px] font-medium md:py-7 py-5">
                                {item.text}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
