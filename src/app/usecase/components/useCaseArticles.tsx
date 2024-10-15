"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface Button {
  href: string;
  buttonText: string;
}

interface Items {
  title: string;
  text: string;
  buttons: Button[];
}

const datas = [
  {
    image: "/assets/images/usecase-img-01.png",
    head: "Location-Based NFTs",
    items: [
      {
        title: "NFT Display on Maps and Direct NFT Acquisition from Maps",
        text: "This innovative feature allows for the visual display of NFTs on map interfaces, enabling users to directly acquire NFTs from these maps. This technology seamlessly integrates real-world geography with digital assets, allowing users to intuitively explore and acquire digital assets in their surroundings.",
        buttons: [
          {
            href: "/",
            buttonText: "Location-based games",
          },
          {
            href: "/",
            buttonText: "digital scavenger hunts",
          },
        ],
      },
    ],
  },
  {
    image: "/assets/images/usecase-img-02.png",
    head: "New Methods of Digital Asset Distribution",
    items: [
      {
        title: "Direct NFT Distribution via Websites or SNS Using Deep Links",
        text: "This innovative system enables direct distribution of NFTs through websites and social media platforms. Using special deep link technology, users can easily receive NFTs on platforms they use daily without going through complex procedures. This significantly simplifies the process of distributing and collecting NFTs, making them accessible to a broader user base.",
        buttons: [
          {
            href: "/",
            buttonText: "Online marketing campaigns",
          },
          {
            href: "/",
            buttonText: "digital coupon distribution",
          },
        ],
      },
      {
        title:
          "Confidential Information and Business Card NFTs through Encrypted NFTs",
        text: "This innovative solution uses advanced encryption technology to securely manage confidential information and business cards as NFTs. This technology ensures the security and authenticity of digital assets containing important information while allowing for flexible sharing and management. It greatly improves security and convenience compared to traditional physical information management methods.",
        buttons: [
          {
            href: "/",
            buttonText: "Applications: Digital identification",
          },
          {
            href: "/",
            buttonText: "secure information sharing platforms",
          },
        ],
      },
    ],
  },
  {
    image: "/assets/images/usecase-img-03.png",
    head: "New Methods of Digital Asset Distribution",
    items: [
      {
        title: "Country-Independent Remittance and Reception",
        text: "This system realizes innovative remittance and reception methods independent of borders or existing financial systems. By utilizing DIVER's decentralized technology, it significantly reduces the high fees and time constraints associated with traditional international remittances. This enables faster, cheaper, and more efficient global financial transactions.",
        buttons: [
          {
            href: "/",
            buttonText: "International remittance services",
          },
          {
            href: "/",
            buttonText: "simplification of cross-border transactions",
          },
        ],
      },
      {
        title:
          "Realization of Micropayments Without Sacrifices, Thanks to Free Fees",
        text: "DIVER's innovative fee-free system enables true micropayments that were previously difficult to realize. With zero fees regardless of transaction amount, it opens doors to new economic models such as small-scale support for content creators and automatic micropayments between IoT devices. This dramatically increases the granularity of value exchange in the digital economy, promoting more flexible and fair economic activities.",
        buttons: [
          {
            href: "/",
            buttonText: "Tipping content creators",
          },
          {
            href: "/",
            buttonText: "automatic micropayments for IoT devices",
          },
        ],
      },
    ],
  },
  {
    image: "/assets/images/usecase-img-04.png",
    head: "Distributed Infrastructure",
    items: [
      {
        title: "Storage System Utilizing Nodes Distributed Worldwide",
        text: "This provides an innovative storage solution utilizing nodes distributed worldwide. This decentralized approach significantly improves data redundancy and availability while enhancing security. Compared to traditional centralized storage, it enables more fault-tolerant and efficient data management. Furthermore, by utilizing geographically distributed nodes, it improves the speed and reliability of data access.",
        buttons: [
          {
            href: "/",
            buttonText: "Secure storage of large-volume data",
          },
          {
            href: "/",
            buttonText: "content delivery networks",
          },
        ],
      },
    ],
  },
  {
    image: "/assets/images/usecase-img-05.png",
    head: "Fusion of Physical and Digital Assets",
    items: [
      {
        title: "RWA Tags Linking Real Items with NFTs",
        text: "This offers RWA (Real World Asset) tags, an innovative technology that links real-world items with NFTs. This technology allows for attaching digital authenticity and proof of ownership to physical goods and assets. RWA tags open up new possibilities for counterfeit prevention, ownership tracking, and seamlessly bridging the digital and physical worlds.",
        buttons: [
          {
            href: "/",
            buttonText: "Authenticity verification for luxury goods",
          },
          {
            href: "/",
            buttonText: "creation of digital twins",
          },
        ],
      },
    ],
  },
  {
    image: "/assets/images/usecase-img-06.png",
    head: "Accessible NFT Creation",
    items: [
      {
        title: "NFT Mint System Enabling NFT Projects Without Developer Skills",
        text: "This is an innovative platform that allows anyone to easily launch NFT projects without technical knowledge. With an intuitive user interface and powerful automation tools, artists and creators can directly tokenize their works and deploy them to the market. This system promotes the democratization of NFT creation, fostering the formation of a more diverse and creative digital asset ecosystem.",
        buttons: [
          {
            href: "/",
            buttonText: "Direct NFT sales by artists",
          },
          {
            href: "/",
            buttonText: "community-driven NFT collections",
          },
        ],
      },
    ],
  },
  {
    image: "/assets/images/usecase-img-07.png",
    head: "New Fundraising Methods",
    items: [
      {
        title: "Project Fundraising Utilizing DRC20",
        text: "This provides an innovative fundraising method utilizing DRC20 tokens. This approach enables startups and new projects to raise funds with flexibility and transparency that was difficult with traditional fundraising methods. Leveraging the characteristics of DRC20, it can build new relationships between investors and projects, such as phased fund releases based on project progress and real-time profit returns to supporters.",
        buttons: [
          {
            href: "/",
            buttonText: "Applications: Startup fundraising",
          },
          {
            href: "/",
            buttonText: "community project support",
          },
        ],
      },
    ],
  },
];

const Article = ({ items }: { items: Items[] }) => (
  <Swiper
    slidesPerView={"auto"}
    loop={true}
    spaceBetween={10}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    modules={[Autoplay]}
    breakpoints={{
      768: {
        spaceBetween: 40,
      },
    }}
  >
    {items.map((item, index) => (
      <SwiperSlide
        key={index}
        className={`md:min-h-[390px] bg-white border-y border-white/40 [box-shadow:0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] md:py-[60px] py-8 md:px-10 px-6 !flex flex-col justify-between ${items.length >= 2 ? "!w-[90%]" : ""}`}
      >
        <div>
          <h5 className="md:text-[32px] text-[20px] font-bold text-[#005FD7] leading-none">
            {item.title}
          </h5>
          <p className="md:text-[16px] text-[14px] text-[#212534] leading-[1.3] md:mt-[30px] mt-5">
            {item.text}
          </p>
        </div>
        <div className="flex gap-2.5 md:mt-[30px] mt-5 max-md:flex-col max-md:items-center">
          {item.buttons.map((button, index) => (
            <a
              href={button.href}
              className="flex md:w-[250px] w-[230px] md:h-[62px] h-[44px] rounded-[2px] bg-[#005FD7]/[0.2] md:text-[16px] text-[13px] font-medium text-[#212534] md:px-5 px-3 items-center justify-center leading-none text-center duration-150 hover:opacity-75"
              key={index}
            >
              {button.buttonText}
            </a>
          ))}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

const UseCaseArticles = () => {
  const ref = useScrollAnimations();
  return (
    <section
      ref={ref}
      className="relative pt-[70px] md:pt-[130px] md:pb-[160px] pb-20 z-10 overflow-hidden"
    >
      <div className="w-full xl:max-w-[1440px] max-w-[600px] md:max-w-[880px] mx-auto px-5 md:px-[50px] overflow-hidden md:space-y-20 space-y-12">
        {datas.map((data, index) => (
          <div className="flex max-xl:flex-col max-xl:items-center" key={index}>
            <figure className="fade-up xl:flex-[0_0_500px] dt:flex-[0_0_670px]">
              <img src={data.image} alt="" />
            </figure>
            <div className="fade-up xl:mt-[60px] bg-[#005FD7]/[0.6] md:py-10 py-6 md:px-[50px] px-3 relative xl:ml-[-45px] max-xl:mt-[-40px] flex-1 max-xl:w-full xl:max-w-[820px]">
              <h3 className="md:text-[58px] text-[26px] font-bold leading-none">
                {data.head}
              </h3>
              <div className="overflow-hidden mt-4 md:mt-6">
                <Article items={data.items} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCaseArticles;
