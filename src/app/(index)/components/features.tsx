"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Title from "@/components/title";
import useScrollAnimations from '@/hooks/useScrollAnimations';
const data = [
  {
    class: "#EC9DBC",
    icon: "/assets/images/features_icon1.png",
    ttl1: "Privacy Protection",
    text: `Fave Coin thoroughly protects privacy by not collecting users' personal information and utilizing blockchain technology and end-to-end encryption. Users can use the platform anonymously and manage their own data.`,
  },
  {
    class: "#7ECAF0",
    icon: "/assets/images/features_icon2.png",
    ttl1: "Ownership and sale of access",
    text: `On the Fave Coin platform, NFTs provide access to exclusive content and act as tradeable membership tokens. Unlike regular subscriptions, these NFTs are assets you can own and sell.`,
  },
  {
    class: "#8E81B9",
    icon: "/assets/images/features_icon3.png",
    ttl1: "Monetization Opportunities",
    text: `Users can earn rewards for their "likes" and posts. Fave Coin tokens can be acquired through these activities and used freely within the platform.`,
  },
  {
    class: "#3CD796",
    icon: "/assets/images/features_icon4.png",
    ttl1: "Decentralized Governance",
    text: `The Fave Coin platform adopts decentralized governance by token holders, making platform operation decisions as a whole community. This allows users to influence the direction of the platform.`,
  },
  {
    class: "#F0E57E",
    icon: "/assets/images/features_icon5.png",
    ttl1: "Security and Privacy Protection",
    text: `The Fave Coin platform protects data with end-to-end encryption, ensures anonymity with zero-knowledge proofs, and puts users in control of their data with account recovery phrases.`,
  },
  {
    class: "#EC9DBC",
    icon: "/assets/images/features_icon1.png",
    ttl1: "Privacy Protection",
    text: `Fave Coin thoroughly protects privacy by not collecting users' personal information and utilizing blockchain technology and end-to-end encryption. Users can use the platform anonymously and manage their own data.`,
  },
  {
    class: "#7ECAF0",
    icon: "/assets/images/features_icon2.png",
    ttl1: "Ownership and sale of access",
    text: `On the Fave Coin platform, NFTs provide access to exclusive content and act as tradeable membership tokens. Unlike regular subscriptions, these NFTs are assets you can own and sell.`,
  },
  {
    class: "#8E81B9",
    icon: "/assets/images/features_icon3.png",
    ttl1: "Monetization Opportunities",
    text: `Users can earn rewards for their "likes" and posts. Fave Coin tokens can be acquired through these activities and used freely within the platform.`,
  },
  {
    class: "#3CD796",
    icon: "/assets/images/features_icon4.png",
    ttl1: "Decentralized Governance",
    text: `The Fave Coin platform adopts decentralized governance by token holders, making platform operation decisions as a whole community. This allows users to influence the direction of the platform.`,
  },
  {
    class: "#F0E57E",
    icon: "/assets/images/features_icon5.png",
    ttl1: "Security and Privacy Protection",
    text: `The Fave Coin platform protects data with end-to-end encryption, ensures anonymity with zero-knowledge proofs, and puts users in control of their data with account recovery phrases.`,
  },
];
const Features = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="md:pt-[170px] pt-16 md:pl-[80px]">
      <div className="max-md:pl-[20px]">
        <Title alignment="left">Features of Fave Coin</Title>
      </div>
      <div className="fade-up flex py-10 overflow-hidden">
      <Swiper
      loop={true}
                        slidesPerView={'auto'}
                        className=""
                    >
                        {data.map((item, index) =>(
                            <SwiperSlide
                            key={index}
                            className="md:!w-[400px] !w-[280px] md:!h-[445px] !h-[305px] flex justify-end" 
                          >
                            <div className="ml-auto md:!w-[440px] !w-[300px] relative md:h-[440px] h-[300px] !flex items-center md:px-0 px-7 rounded-full shadow-[4px_4px_0_#000000]" style={{ backgroundColor: item.class }}>
                              <div className="md:max-w-[314px] w-full mx-auto">
                                <figure className="">
                                  <img className="md:w-auto w-1/6" src={item.icon} alt="" />
                                </figure>
                                <h3 className="md:text-[24px] text-[16px] font-bold mt-1">
                                  {item.ttl1}
                                </h3>
                                <p className="md:text-[16px] text-[12px] font-normal mt-2">
                                  {item.text}
                                </p>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                        
                    </Swiper>
      </div>
    </section>
  );
};

export default Features;
