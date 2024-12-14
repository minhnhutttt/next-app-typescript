"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        image: '/assets/images/introduction-img-01.png',
        text: (<>Realizing seamless international payments</>),
        href: "/",
    },
    {
        image: '/assets/images/introduction-img-02.png',
        text: (<>Building a smart reservation/flight management system</>),
        href: "/",
    },
    {
        image: '/assets/images/introduction-img-03.png',
        text: (<>Establishment of an ecosystem that connects users and businesses</>),
        href: "/",
    },
    {
        image: '/assets/images/introduction-img-04.png',
        text: (<>Sustainable token economy = building a currency payment zone</>),
        href: "/",
    },
]

const Introduction = () => {
  const ref = useScrollAnimations();
  return (
    <section className="bg-black pt-[140px] md:pt-[204px] text-white">
      <div className="w-full max-w-[1400px] mx-auto px-5">
        <div className="max-w-[830px]">
        <h3 data-scroll className="fade-up md:text-[64px] text-[32px] font-extrabold leading-[1.2] mb-[30px]">
            Transform the Sky 
            into Our New Highway
        </h3>
        <p data-scroll className="fade-up md:text-[32px] text-[20px] font-medium leading-[1.2]">
            RIDE creates a new payment standard in the era of flying cars.
        </p>
        </div>
      </div>
      <div className="fade-up grid md:grid-cols-4 grid-cols-2 mt-20 md:mt-[120px]">
        {data.map((item,index) => {
            return (
                <a data-scroll href={item.href} className="fade-up relative group ani-group" key={index}>
                    <div className="w-full">
                        <img className="max-w-none w-full" src={item.image} alt="" />
                    </div>
                    <div className="absolute inset-0 p-3 md:p-6 md:pb-10 pb-6 flex items-end overflow-hidden">
                        <div className="absolute h-full w-full inset-0 bg-black/70 group-hover:opacity-0 duration-1000"></div>
                        <div className="md:min-h-[120px] md:text-[24px] font-medium leading-[1.2] relative">
                            {item.text}
                        </div>
                    </div>
                </a>
            )
        })}
      </div>
    </section>
  );
};

export default Introduction;
