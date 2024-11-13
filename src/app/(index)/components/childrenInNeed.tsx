"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        id: '1',
        image: '/assets/images/children-img-01.png',
        title: (<>Children in <span className="font-bold text-black">foster care facilities</span></>)
    },
    {
        id: '2',
        image: '/assets/images/children-img-02.png',
        title: (<>Children in <span className="font-bold text-black">disability support facilities</span></>)
    },
    {
        id: '3',
        image: '/assets/images/children-img-03.png',
        title: (<>Children <span className="font-bold text-black">losing educational opportunities</span> due to economic hardship</>)
    },
    {
        id: '4',
        image: '/assets/images/children-img-04.png',
        title: (<>Children <span className="font-bold text-black">requiring medical support</span></>)
    },
    {
        id: '5',
        image: '/assets/images/children-img-05.png',
        title: (<>Children facing difficulties due to <span className="font-bold text-black">disasters or conflicts</span></>)
    },
    {
        id: '6',
        image: '/assets/images/children-img-06.png',
        title: (<>And even more cases...</>)
    },
]

const ChildrenInNeed = () => {
  const ref = useScrollAnimations();
  return (
    <section id="children-in-need" ref={ref} className="scroll-mt-16 relative px-5 bg-[url('/assets/images/children-bg.png')] bg-cover bg-center md:mt-[76px] mt-10 md:pb-[130px] pb-20">
        <div className="h-px"></div>
        <h3 className="popup md:text-[96px] text-[36px] font-bold leading-none md:-mt-[52px] -mt-[20px] md:px-5">Children in Need</h3>
        <div className="flex flex-wrap w-full max-w-[1148px] justify-center mx-auto md:gap-x-[120px] md:gap-y-20 md:mt-[88px] mt-14 md:mb-20 mb-12 max-md:gap-10">
            {data.map((item)=> (
                <div className="fade-up md:w-[300px] max-w-[300px] w-full" key={item.id}>
                    <figure className="md:mb-4 mb-3">
                        <img src={item.image} alt="" />
                    </figure>
                    <div className="md:text-[18px] text-[16px] font-bold flex justify-center mt-2 text-[#555]">
                        <p>{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="popup w-full max-w-[754px] mx-auto border border-[#005311] rounded-[20px] px-5 md:px-10 py-2.5 md:text-[16px] text-[14px]">
            Existing support systems face issues with <span className="font-bold text-black">fund transparency</span>, <span className="font-bold text-black">high management costs</span> that reduce efficiency, and <span className="font-bold text-black">difficulty in reaching children in need</span>. <span className="font-bold text-black">Securing continuous support</span> is also a challenge.
        </div>
    </section>
  );
};

export default ChildrenInNeed;
