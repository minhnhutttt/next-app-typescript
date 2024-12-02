"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
const data = [
  {
    id: "01",
    title: "Transparency and Reliability",
    text: (
      <>
        All transactions are recorded and publicly visible on the blockchain,
        ensuring clear tracking of point issuance and usage. This builds trust
        by minimizing fraud risks.
      </>
    ),
  },
  {
    id: "02",
    title: "Interoperability of Points",
    text: (
      <>
        As a DRC20 token, Sake Token can seamlessly integrate with other brands
        and services, allowing users to consolidate and use points across
        multiple platforms.
      </>
    ),
  },
  {
    id: "03",
    title: "Cost Reduction",
    text: (
      <>
        Smart contracts automate point management, reducing operational costs
        and simplifying integration with existing systems through the DRC20
        standard.
      </>
    ),
  },
  {
    id: "04",
    title: "Flexible Program Operations with Smart Contracts",
    text: (
      <>
        Conditions-based automatic point issuance, bonuses, and spending enable
        dynamic loyalty programs tailored to consumer behavior.
      </>
    ),
  },
  {
    id: "05",
    title: "Improved User Experience",
    text: (
      <>
        Consumers can easily manage and track points in real-time via a
        dedicated app or wallet.
      </>
    ),
  },
  {
    id: "06",
    title: " Enhanced Security",
    text: (
      <>
        Blockchain's decentralized nature ensures high resistance to fraud and
        system failures, boosting consumer trust.
      </>
    ),
  },
  {
    id: "07",
    title: "Global Compatibility",
    text: (
      <>
        Tokens issued on the blockchain can be used internationally, supporting
        global expansion and unified systems across markets.
      </>
    ),
  },
  {
    id: "08",
    title: "Marketing Flexibility",
    text: (
      <>
        Tokens can be allocated for campaigns and promotions, incentivizing
        consumer engagement through actions like sharing or reviewing products.
      </>
    ),
  },
  {
    id: "09",
    title: "Instantaneous and Accessible Transactions",
    text: (
      <>
        Blockchain allows immediate point issuance and redemption, offering
        smooth and efficient user experiences.
      </>
    ),
  },
];

const Technical = () => {
  return (
    <section className="relative h-screen bg-[url(/assets/images/technical-bg.png)] bg-cover overflow-hidden bg-center">
      <span className="ani-mix-blend absolute h-full right-0 md:w-[28%] w-[36%] bg-[#BF2A2A] mix-blend-overlay"></span>
        <div className="h-full max-md:flex max-md:flex-col max-md:justify-center relative">
        <div className="w-full max-w-[1400px] mx-auto pt-[clamp(10px,5vmin,50px)] md:pt-[clamp(20px,7.778vmin,70px)] px-5">
            <h3 className="ani-text text-[clamp(16px,10.667vmin,28px)] md:text-[clamp(28px,10.667vmin,96px)] font-medium tracking-wide text-right text-white">
            Technical Advantages
            </h3>
        </div>
        <div className="ani-content w-full max-md:pt-[clamp(10px,3vmin,30px)]">
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                pagination={{
                  dynamicBullets: false,
                }}
                modules={[Pagination]}
                className="mySwiper !pb-10"
            >
                {data.map((item, index) => (
                <SwiperSlide key={index} className="!size-[clamp(300px,55.556vmin,500px)] bg-[url('/assets/images/technical-item.png')] bg-cover">
                    <div className="size-full flex justify-center pt-[clamp(20px,16.889vmin,152px)]">
                        <div className="md:w-[clamp(20px,31.778vmin,286px)] w-[clamp(170px,44vmin,286px)]">
                            <p className="text-center w-full text-black/40 font-bold text-[clamp(15px,2.222vmin,20px)] leading-loose">{item.id}</p>
                            <h5 className="font-bold text-[clamp(14px,2.222vmin,20px)] leading-[1.3]">{item.title}</h5>
                            <p className="text-[clamp(12px,1.556vmin,14px)] leading-[1.3] mt-[clamp(5px,1.111vmin,10px)] font-medium">{item.text}</p>
                        </div>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
    </section>
  );
};

export default Technical;
