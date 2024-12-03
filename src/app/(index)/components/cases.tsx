'use client'

import Button from '@/components/button'
import ImageHover from '@/components/imageHover'
import useScrollAnimations from '@/hooks/useScrollAnimations'

const data = [
  {
    image: '/assets/images/case-img-01.png',
    title: 'Corporate Implementation',
    content: (
      <>
        Organizations can use DONATION Coin to foster an entirely new
        &quot;culture of expressing gratitude&quot; and enhance trust
        relationships with employees.
      </>
    ),
    items: [
      'Internal recognition system',
      'Performance evaluation',
      'Corporate Social Responsibility (CSR)',
    ],
  },
  {
    image: '/assets/images/case-img-02.png',
    title: (
      <>
        Educational Support and <br />
        Skill Development
      </>
    ),
    content: (
      <>
        DONATION Coin has the potential to revolutionize educational support and
        peer-to-peer skill sharing.
      </>
    ),
    items: [
      'Micro-scholarships',
      'Peer-to-peer learning support:',
      'Skill sharing platform',
    ],
  },
  {
    image: '/assets/images/case-img-03.png',
    title: <>Support for Creator Economy</>,
    content: (
      <>
        Content creators can benefit from DONATION Coin&apos;s seamless
        micro-donation functionality.
      </>
    ),
    items: [
      'Direct fan support',
      'Subscription model',
      'Collaborative projects',
    ],
  },
  {
    image: '/assets/images/case-img-04.png',
    title: <>Revitalizing Local Communities</>,
    content: (
      <>
        Using DONATION Coin can strengthen social bonds in local communities and
        support community revitalization.
      </>
    ),
    items: [
      'Integration with local currencies',
      'Funding for community projects',
      'Recognition of social services',
    ],
  },
]

const dataLocal = [
  {
    image: '/assets/images/local-img-01.png',
    text: 'Integration with local currencies',
  },
  {
    image: '/assets/images/local-img-02.png',
    text: 'Funding for community projects',
  },
  {
    image: '/assets/images/local-img-03.png',
    text: 'Recognition of social services',
  },
]

const Cases = () => {
  const ref = useScrollAnimations()

  return (
    <section ref={ref} className="relative z-10 pt-[100px] md:pt-[130px] ">
      <div className="w-full">
        <h3 className="text-center text-[32px] font-bold leading-none md:text-[64px]">
          Use Cases and Potential Applications
        </h3>
        <div className="relative mt-10 w-full border-y border-[#777] md:mt-16">
          {data.map((item, index) => (
            <div
              className="relative -mb-[520px] block h-[1040px] w-full border-y border-[#777] bg-[#FFFAFA] last:mb-0 last:h-[520px]"
              key={index}
            >
              <div className="sticky top-0 flex h-[520px] w-full gap-5 overflow-hidden max-md:flex-col max-md:items-center md:justify-between">
                <div className="fade-up pl-5 pt-[15px] max-md:pr-5">
                  <h5 className="text-[28px] font-bold leading-[1.3] md:text-[48px]">
                    {item.title}
                  </h5>
                  <div className="mt-5 w-full max-w-[542px] md:pl-[30px]">
                    <p className="text-[18px] leading-none md:text-[22px]">
                      {item.content}
                    </p>
                    <div className="mt-7 space-y-5 text-[16px] leading-none md:mt-10 md:text-[18px]">
                      {item.items.map((i, index) => (
                        <p className="" key={index}>
                          {i}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <figure className="fade-up relative bottom-[-30px] flex items-end pt-6 max-md:max-w-[400px] md:right-[-30px] md:pt-[60px]">
                  <ImageHover image={item.image} />
                </figure>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center md:mt-[72px]">
          <Button />
        </div>
      </div>
      <div className="mx-auto mt-16 w-full max-w-[1440px] px-5 md:mt-[90px]">
        <h3 className="fade-up text-center text-[32px] font-bold leading-none md:text-[64px]">
          Revitalizing Local Communities
        </h3>
        <p className="fade-up mt-4 text-center text-[15px] font-medium md:mt-6 md:text-[18px]">
          Using DONATION Coin can strengthen social bonds in local communities
          and support community revitalization.
        </p>
        <div className="mx-auto grid w-full max-w-[960px] divide-[#D8D8D8] max-md:divide-y md:mt-20 md:grid-cols-3 md:divide-x">
          {dataLocal.map((item, index) => (
            <div
              className="fade-up flex h-[260px] flex-col items-center px-5 pt-[55px] md:px-[30px]"
              key={index}
            >
              <figure>
                <img src={item.image} alt="" />
              </figure>
              <p className="texxt-[16px] mt-3 md:text-[18px]">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="relative mt-16 grid grid-cols-2 gap-x-5 gap-y-[30px] md:mt-28 md:grid-cols-3 lg:grid-cols-4">
          <span className="absolute inset-0 z-10 bg-[radial-gradient(circle,_rgba(255,255,255,0)_46%,_rgba(255,255,255,0.5)_100%)]"></span>
          <p className="fade-up overflow-hidden rounded-[23px]">
            <img src="/assets/images/gallery-01.png" alt="" />
          </p>
          <p className="fade-up overflow-hidden rounded-[23px]">
            <img src="/assets/images/gallery-02.png" alt="" />
          </p>
          <p className="fade-up overflow-hidden rounded-[23px]">
            <img src="/assets/images/gallery-03.png" alt="" />
          </p>
          <p className="fade-up overflow-hidden rounded-[23px]">
            <img src="/assets/images/gallery-04.png" alt="" />
          </p>
          <p className="fade-up overflow-hidden rounded-[23px]">
            <img src="/assets/images/gallery-05.png" alt="" />
          </p>
          <p className="fade-up overflow-hidden rounded-[23px]">
            <img src="/assets/images/gallery-06.png" alt="" />
          </p>
          <p className="fade-up overflow-hidden rounded-[23px]">
            <img src="/assets/images/gallery-07.png" alt="" />
          </p>
          <p className="fade-up overflow-hidden rounded-[23px]">
            <img src="/assets/images/gallery-08.png" alt="" />
          </p>
        </div>
      </div>
    </section>
  )
}

export default Cases
