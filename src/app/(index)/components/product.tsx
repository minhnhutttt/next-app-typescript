"use client";

import Button from "@/components/button";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useEffect, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});


const ProductButton = ({href, children}: {href: string, children: ReactNode}) => {
  return (
    <Button href={href} rect="flex justify-center items-center w-[280px] md:h-[60px] h-[48px] rounded-[10px] bg-[#005FD7] text-white/90 font-medium text-[18px] [box-shadow:-3px_-4px_20px_0px_rgba(255,_255,_255,_0.15)_inset,_4px_22px_50px_0px_rgba(24,_83,_158,_0.80)] [text-shadow:1px_1px_1px_rgba(0,_0,_0,_0.25)]">
{children}
    </Button>
  )
}

const data = [
  {
    number: "/assets/images/number-01.svg",
    movie: "/assets/videos/product-01.mp4",
    subTitle: "WALLET",
    title: "MERCURY VAULT",
    text: "Next-generation wallet enabling completely free transactions. Experience DIVER's true value with high security and user-friendliness.",
    buttons: (
      <>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <img src="/assets/images/btn-appstore.png" alt="" />
        </a>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <img src="/assets/images/btn-google.png" alt="" />
        </a>
      </>
    ),
  },
  {
    number: "/assets/images/number-02.svg",
    movie: "/assets/videos/product-02.mp4",
    subTitle: "EXPLORER",
    title: "DIVER Scan",
    text: "Blockchain explorer pursuing transparency and reliability. View and analyze all DIVER network transactions for free.",
    buttons: (
      <>
        <ProductButton href="https://scan.diver.io/">Access website</ProductButton>
      </>
    ),
  },
  {
    number: "/assets/images/number-03.svg",
    movie: "/assets/videos/product-03.mp4",
    subTitle: "DOMAIN",
    title: "DIVER Domain",
    text: "Decentralized domain service obtainable on a yearly basis. Enhance DIVER's convenience by converting complex addresses to simple names.",
    buttons: (
      <>
        <ProductButton href="https://diver.domains/">Open web application</ProductButton>
      </>
    ),
  },
  {
    number: "/assets/images/number-04.svg",
    movie: "/assets/videos/product-04.mp4",
    subTitle: "DOMAIN",
    title: (<>DIVER OFFICIAL <br />Domain</>),
    text: "Official domain service for businesses and organizations. Achieve brand protection and enhance credibility on the DIVER network for free.",
    buttons: (
      <>
        <ProductButton href="mailto:info@diver.io">Apply by email</ProductButton>
      </>
    ),
  },
  {
    number: "/assets/images/number-05.svg",
    movie: "/assets/videos/product-05.mp4",
    subTitle: "MESSAGING",
    title: (<>DIVER Knock</>),
    text: "Decentralized messaging app leveraging DIVER's high security features. Realize safe and instant communication with end-to-end encryption.",
    buttons: (
        <>
        <a
          href="https://apps.apple.com/us/app/diver-knock/id6450264436"
          target="_blank"
          rel="noopener noreferrer"
          className="duration-150 hover:opacity-75"
        >
          <img src="/assets/images/btn-appstore.png" alt="" />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.bigant.diver.limited.talk.flutter_project&pcampaignid=web_share"
          target="_blank"
          rel="noopener noreferrer"
          className="duration-150 hover:opacity-75"
        >
          <img src="/assets/images/btn-google.png" alt="" />
        </a>
      </>
    ),
  },
  {
    number: "/assets/images/number-06.svg",
    movie: "/assets/videos/product-06.mp4",
    subTitle: "STORAGE",
    title: (<>DIVER Storage</>),
    text: "Low-cost cloud storage utilizing DIVER's decentralization. Provide safe and efficient data management with advanced encryption and redundancy.",
    buttons: (
      <>
        <ProductButton href="https://diver.storage/">Open web application</ProductButton>
      </>
    ),
  },
  {
    number: "/assets/images/number-07.svg",
    movie: "/assets/videos/product-07.mp4",
    subTitle: "NFT CREATION",
    title: (<>NMS<span className="md:text-[28px] text-[20px]"> (NFT Mint System)</span></>),
    text: "A system for creating, issuing and managing NFTs using DIVER's free transactions. With features such as GPS compatibility, encryption and transfer restrictions, it supports the creation of new value for companies and organizations.",
    buttons: (
      <>
        <ProductButton href="/">Access website</ProductButton>
      </>
    ),
  },
  {
    number: "/assets/images/number-08.svg",
    movie: "/assets/videos/product-08.mp4",
    subTitle: "COMING SOON",
    title: (<>Next DIVER <br />Innovations</>),
    text: "Continuously developing innovative products to further expand DIVER's possibilities. Aiming for new frontiers in completely free, high-performance blockchain experiences.",
    buttons: (
      <></>
    ),
  },
];


const ProductItem = ({
  number,
  movie,
  subTitle,
  title,
  text,
  children,
}: {
  number: string;
  movie: string;
  subTitle: string;
  title: ReactNode;
  text: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={`product-item relative flex max-lg:flex-col items-center md:gap-[60px] gap-6 max-md:pb-[60px] md:py-16 lg:py-[130px] md:px-[45px] border border-[#005FD7] rounded-[20px] [box-shadow:0px_4px_50px_0px_rgba(34,_143,_206,_0.20)] even:bg-[linear-gradient(145deg,_rgba(86,_184,_255,_0.90)_33.61%,_rgba(0,_119,_186,_0.90)_79.25%)] odd:bg-[linear-gradient(145deg,_#5F93FF_33.61%,_#0B3FAD_79.25%)]`}
    >
      <div className="max-w-[660px] max-lg:w-full max-xl:w-1/2">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-left aspect-[660/350]"
        >
          <source src={movie} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 max-lg:px-10 max-md:px-5">
        <p className="md:text-[24px] text-[16px] mb-3">{subTitle}</p>
        <h4 className="md:text-[48px] text-[28px] font-bold leading-none">{title}</h4>
        <p className="md:text-[18px] text-[14px] font-medium max-w-[550px] tracking-wide mt-4">{text}</p>
        <div className="mt-6 md:mt-10 flex gap-5">{children}</div>
      </div>
      <div className="absolute right-0 bottom-0">
        <img className="max-lg:h-[160px]" src={number} alt="" />
      </div>
    </div>
  );
};

const Product = () => {
  const ref = useScrollAnimations();
  const waveRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      if (waveRef.current) {
        gsap.fromTo(
          waveRef.current,
          { height: "100%" },
          {
            height: "0%",
            scrollTrigger: {
              trigger: waveRef.current,
              start: "top +=70%",
              scrub: true,
            },
          }
        );
      }
      if (containerRef.current) {
        const items = containerRef.current.querySelectorAll(".product-item");

        items.forEach((item) => {
          gsap.fromTo(
            item,
            { scale: 0.8 },
            {
              scale: 1,
              opacity: 1,
              duration: 1,
              ease: "power1.out",
              scrollTrigger: {
                trigger: item,
                start: "top 80%", 
                scroller: containerRef.current,
              },
            }
          );
        });
      }
    });

    return () => ctx.revert();
  });
  return (
    <section ref={ref} className="relative pb-16">
      <div className="w-full h-[331px] flex items-end -mb-px">
        <div ref={waveRef} className="w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            viewBox="0 0 1440 331"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M38.5629 0.00135041C504.65 -0.875764 538.893 246.5 908.5 246.5C1150.39 246.5 1339 193.5 1440 151.5V330.5H949.5H1.13809e-05L0 1.22801C13.115 0.440251 25.9736 0.025039 38.5629 0.00135041Z"
              fill="url(#paint0_linear_15_38)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_15_38"
                x1="491.531"
                y1="416.898"
                x2="927.863"
                y2="1128.77"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3371F2" />
                <stop offset="1" stopColor="#0B3FAD" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="bg-[url('/assets/images/bg-product.png')] bg-[length:100%_100%] pt-10 md:px-10 px-6">
        <div className="fade-up flex flex-col items-center justify-center">
          <figure>
            <img src="/assets/images/product-logo.png" alt="" />
          </figure>
          <h5 className="text-center md:text-[48px] text-[36px] font-bold text-white leading-[1.3] mt-5">
            DIVER Ecosystem
          </h5>
          <p className="text-center text-[20px] md:text-[32px] flex items-center gap-2">
            <span>-</span>Product list transforming DIVER&apos;s features into value<span>-</span>
          </p>
        </div>
        <div ref={containerRef} className="fade-up w-full md:max-w-[1360px] max-w-[440px] mx-auto mt-5 space-y-[30px] h-[972px] overflow-auto no-scrollbar rounded-[20px]">
          {data.map((item, index)=>(
            <ProductItem
            number={item.number}
            movie={item.movie}
            subTitle={item.subTitle}
            title={item.title}
            text={item.text}
            key={index}
          >
            {item.buttons}
          </ProductItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
