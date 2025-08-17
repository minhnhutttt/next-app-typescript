'use client'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const data = [
  {
    id: '01',
    image: '/assets/images/benefits-img-01.png',
    title: <>Discounted Trading Fees</>,
    text: <>Simply holding TEXC automatically reduces your trading fees on the exchange.</>,
    note: <>Hold more = bigger discounts + VIP treatment</>
  },
  {
    id: '02',
    image: '/assets/images/benefits-img-02.png',
    title: <>Access to Exclusive Investment Pools</>,
    text: <>Join special investment pools unavailable to the general public for higher returns.</>,
    note: <>See <a href="" className='underline'>WHITEPAPER</a> for full details</>
  },
  {
    id: '03',
    image: '/assets/images/benefits-img-03.png',
    title: <>Early Access to New Tokens</>,
    text: <>Purchase trending new tokens up to 48 hours before public sale.</>,
    note: <>Get in early on popular projects</>
  },
  {
    id: '04',
    image: '/assets/images/benefits-img-04.png',
    title: <>Participate in Exchange Governance</>,
    text: <>Vote on important decisions like new token listings and fee changes.</>,
    note: <>Your voice shapes the future of the exchange</>
  },
]

export default function Benefits() {
  return (
    <section className="relative z-10 mx-auto md:pt-56 pt-28 px-5 md:pb-[140px] pb-20">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="w-full max-w-[760px] relative pt-24 md:pt-20">
            <p className="fade-up lg:text-[64px] md:text-[48px] text-[28px] font-bold italic border-b border-white tracking-tight">4 Benefits of Holding TEXC</p>
            <p className="fade-up md:text-[16px] text-[13px] lg:pt-10 md:pt-5 pt-3">
                By holding TEXC, you will have access to premium benefits that will dramatically change your investment experience.
            </p>
        </div>
        <div className="md:mt-32 mt-20 py-4 md:space-y-[105px] space-y-20 max-md:max-w-[440px] max-md:mx-auto">
            {data.map((item) => (
                <div key={item.id} className="group fade-up flex items-start lg:gap-4 lg:even:flex-row-reverse max-lg:flex-col max-lg:items-center">
                    <div className="relative"><img src={item.image} alt="" /></div>
                    <div className="max-lg:w-full lg:flex-1 max-w-[800px] h-[300px] md:h-[400px] mt-16 bg-[#31DB22]/[0.03] flex items-center justify-center flex-col p-5 text-center border border-[#31DB22] rounded-[10px] lg:group-odd:-ml-[150px] lg:group-even:-mr-[150px] max-md:-mt-10 max-lg:-mt-16">
                        <p className="md:text-[38px] text-[24px] font-bold max-w-[500px]">{item.title}</p>
                        <div className="w-full max-w-[427px] mx-auto md:mt-[30px] mt-5">
                            <p className="md:text-[20px] text-[16px] md:mb-5 mb-3">{item.text}</p>
                            <p className="md:text-[20px] text-[16px] text-[#FFFF01]">{item.note}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}