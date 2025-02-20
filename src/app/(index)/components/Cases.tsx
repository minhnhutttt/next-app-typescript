"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
  {
    image: '/assets/images/case-img-01.png',
    title: 'Corporate Implementation',
    content: (<>
    Organizations can use CIP Coin to foster an entirely new "culture of expressing gratitude" and enhance trust relationships with employees.
    </>),
    items: ['Internal recognition system','Performance evaluation','Corporate Social Responsibility (CSR)']
  },
  {
    image: '/assets/images/case-img-02.png',
    title: (<>Educational Support and <br />Skill Development</>),
    content: (<>
    CIP Coin has the potential to revolutionize educational support and peer-to-peer skill sharing.
    </>),
    items: ['Micro-scholarships','Peer-to-peer learning support:','Skill sharing platform']
  },
  {
    image: '/assets/images/case-img-03.png',
    title: (<>Support for Creator Economy</>),
    content: (<>
    Content creators can benefit from CIP Coin's seamless micro-donation functionality.
    </>),
    items: ['Direct fan support','Subscription model','Collaborative projects']
  },
  {
    image: '/assets/images/case-img-04.png',
    title: (<>Revitalizing Local Communities</>),
    content: (<>
    Using CIP Coin can strengthen social bonds in local communities and support community revitalization.
    </>),
    items: ['Integration with local currencies','Funding for community projects','Recognition of social services']
  }
]

const dataLocal = [
  {
    image: '/assets/images/local-img-01.png',
    text: 'Integration with local currencies'
  },
  {
    image: '/assets/images/local-img-02.png',
    text: 'Funding for community projects'
  },
  {
    image: '/assets/images/local-img-03.png',
    text: 'Recognition of social services'
  }
]

const Cases = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative md:pt-[130px] pt-[100px] z-10 ">
      <div className="w-full">
        <h3 className="text-center md:text-[64px] text-[32px] font-bold leading-none">Use Cases and Potential Applications</h3>
        <div className="w-full relative border-y border-[#777] md:mt-16 mt-10">
          {data.map((item,index) => (
            <div className="w-full h-[1040px] last:h-[520px] last:mb-0 -mb-[520px] block relative border-y border-[#777] bg-[#FFFAFA]" key={index}>
              <div className="w-full h-[520px] flex max-md:flex-col max-md:items-center md:justify-between gap-5 sticky top-0 overflow-hidden">
                <div className="fade-up max-md:pr-5 pl-5 pt-[15px]">
                  <h5 className="md:text-[48px] text-[28px] font-bold leading-[1.3]">{item.title}</h5>
                  <div className="md:pl-[30px] w-full max-w-[542px] mt-5">
                    <p className="md:text-[22px] text-[18px] leading-none">{item.content}</p>
                    <div className="md:text-[18px] text-[16px] leading-none space-y-5 md:mt-10 mt-7">
                      {item.items.map((i, index)=> (
                        <p className="" key={index}>{i}</p>
                      ))}
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

export default Cases;
