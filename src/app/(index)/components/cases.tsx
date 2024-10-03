"use client";
import { ReactNode, useRef } from "react";
import { gsap } from "gsap";
import ButtonWhitePaper from "@/components/buttonWhitePaper";
import useScrollAnimations from "@/hooks/useScrollAnimations";

type CaseItemPropsType = {
  id: string;
  title: ReactNode;
  text: ReactNode;
};
const caseData: CaseItemPropsType[] = [
  {
    id: "1",
    title: "01. Smart Contract Framework",
    text: (
      <>
        DwETH is operated by a series of smart contracts that manage token issuance, redemption, and burning. These contracts are open-source and available for community review.
      </>
    ),
  },
  {
    id: "2",
    title: "02. Cross-chain Interoperability",
    text: (
      <>
        The DwETH protocol uses secure relays and oracles to manage cross-chain communication between Ethereum and DIVER Chain. It ensures that asset balances are accurately reflected on both networks.
      </>
    ),
  },
  {
    id: "3",
    title: "03. Oracles and Data Feeds",
    text: (
      <>
        Price feeds and other critical data are provided by trusted oracles. This ensures the reliability and security of DwETH.
      </>
    ),
  },
];

const data = [
    {
        image: '/assets/images/case-img-01.png',
        text: 'DeFi Applications'
    },
    {
        image: '/assets/images/case-img-02.png',
        text: (<>Cross-chain <br />Transactions</>)
    },
    {
        image: '/assets/images/case-img-03.png',
        text: 'Smart Contracts'
    }
]

function CaseItem({ id, title, text }: CaseItemPropsType) {
  const contentRef = useRef(null);
  const arrowRef = useRef(null);
  const isClosedRef = useRef(true);

  const handleExpanderClick = () => {
    const $content = contentRef.current;
    const $arrow = arrowRef.current;
    if (isClosedRef.current) {
      gsap.set($content, { height: "auto" });
      gsap.from($content, { duration: 0.2, height: 0 });
      gsap.to($arrow, { duration: 0.1, rotation: -90, transformOrigin: 'center' });
    } else {
      gsap.to($content, { duration: 0.2, height: 0 });
      gsap.to($arrow, { duration: 0.1, rotation: 0 });
    }
    isClosedRef.current = !isClosedRef.current;
  };

  return (
    <div
      className="fade-up px-3 md:px-6 border-b border-white pb-5"
    >
      <button
        type="button"
        className="flex w-full items-center justify-between duration-200 hover:opacity-75 cursor-pointer"
        onClick={handleExpanderClick}
      >
          <p className="text-left text-[24px] md:text-[36px] lg:text-[50px] xl:text-[71px] leading-[1.3] font-bold">{title}</p>
        <div
          className="relative ml-2 flex items-center justify-center duration-150 size-7 md:size-12 lg:size-[70px]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
            <rect ref={arrowRef} x="31.9999" width="6" height="70" fill="white"/>
            <rect x="70" y="32" width="6" height="70" transform="rotate(90 70 32)" fill="white"/>
            </svg>
        </div>
      </button>
      <div ref={contentRef} className="h-0 overflow-hidden">
        <p className="text-[16px] leading-[1.6] md:text-[20px] md:pl-3 pb-4">
          {text}
        </p>
      </div>
    </div>
  );
}

export default function Cases() {
  const ref = useScrollAnimations();
  return (
    <div
    ref={ref}
      id="cases"
      className="md:mt-[-150px] mt-[-80px] md:[clip-path:polygon(0_0,_100%_150px,_100%_100%,_0%_100%)] [clip-path:polygon(0_0,_100%_80px,_100%_100%,_0%_100%)] bg-[linear-gradient(163deg,_#32BCFE_6.76%,_#2AB1FF_18.1%,_#28A7FE_27.47%,_#2594F7_39.79%,_#2379E7_56.06%)] px-5 pt-[160px] md:pt-[260px] md:pb-[123px] pb-[70px]"
    >
      <div className="mx-auto w-full max-w-[1340px]">
        <h3 className="fade-up text-center text-white md:text-[58px] text-[32px] font-black tracking-[0.22em] w-full max-w-[1000px] mx-auto">
          Use Cases for DwETH on DIVER Chain
        </h3>
        <div className="flex justify-center flex-wrap w-full max-w-[1240px] mx-auto gap-7 md:gap-[85px] mt-8 md:mt-[70px]">
            <div className="fade-up flex flex-col items-center aspect-[348/388] w-[348px] bg-[url('/assets/images/case-item.png')] bg-cover drop-shadow-[0px_0px_40px_0px_rgba(38,_64,_141,_0.10)] pt-[100px]">
                <figure className="h-[135px] flex items-center justify-center relative">
                    <div className="absolute size-[84px] overflow-hidden">
                      <div className="animate-[aniDotTop_5s_linear_infinite] bg-[url('/assets/images/case-img-dots.svg')] h-[7px] absolute top-0 inset-x-0"></div>
                      <div className="animate-[aniDotRight_5s_linear_infinite] bg-[url('/assets/images/case-img-dots-v.svg')] h-[73px] w-[7px] absolute right-0 inset-y-0"></div>
                      <div className="animate-[aniDotBottom_5s_linear_infinite] bg-[url('/assets/images/case-img-dots.svg')] h-[7px] absolute bottom-0 inset-x-0"></div>
                      <div className="animate-[aniDotLeft_5s_linear_infinite] bg-[url('/assets/images/case-img-dots-v.svg')] h-[73px] w-[7px] absolute left-0 inset-y-0"></div>
                    </div>
                    <img className="relative" src={data[0].image} alt="" />
                </figure>
                <p className="text-[20px] text-black font-medium md:mt-5 flex items-center justify-center tracking-widest h-16">{data[0].text}</p>
            </div>
            <div className="fade-up flex flex-col items-center aspect-[348/388] w-[348px] bg-[url('/assets/images/case-item.png')] bg-cover drop-shadow-[0px_0px_40px_0px_rgba(38,_64,_141,_0.10)] pt-[100px]">
                <figure className="h-[135px] flex items-center justify-center relative">
                    <img className="relative animate-[rotate_5s_linear_infinite]" src={data[1].image} alt="" />
                </figure>
                <p className="text-[20px] text-black font-medium md:mt-5 flex items-center justify-center tracking-widest h-16">{data[1].text}</p>
            </div>
            <div className="fade-up flex flex-col items-center aspect-[348/388] w-[348px] bg-[url('/assets/images/case-item.png')] bg-cover drop-shadow-[0px_0px_40px_0px_rgba(38,_64,_141,_0.10)] pt-[100px]">
                <figure className="h-[135px] flex items-center justify-center relative">
                    <span className="w-[138px] h-[90px] relative">
                      <img src="/assets/images/case-img-circle.svg" className="animate-[flash_1s_infinite] absolute right-6 -top-0.5" />
                      <img src="/assets/images/case-img-circle.svg" className="animate-[flash_1s_infinite] absolute right-0.5 top-3" />
                      <img src="/assets/images/case-img-circle.svg" className="animate-[flash_1s_infinite] absolute -right-0.5 top-[38px]" />
                      <img src="/assets/images/case-img-circle.svg" className="animate-[flash_1s_infinite] absolute right-0.5 top-[60px]" />
                      <img src="/assets/images/case-img-circle.svg" className="animate-[flash_1s_infinite] absolute right-[22px] top-[76px]" />
                      <img className="relative" src={data[2].image} alt="" />
                    </span>
                </figure>
                <p className="text-[20px] text-black font-medium md:mt-5 flex items-center justify-center tracking-widest h-16">{data[2].text}</p>
            </div>
        </div>
        <div className="md:mt-[230px] mt-[100px]">
            <h3 className="fade-up text-center text-white md:text-[58px] text-[32px] font-black tracking-[0.22em] w-full max-w-[1000px] mx-auto">
            Technical Architecture
            </h3>
            <div className="mx-auto mt-5 w-full space-y-[20px] md:mt-[70px] md:space-y-[30px]">
                {caseData.map(({ id, title, text }) => (
                    <CaseItem key={id} id={id} title={title} text={text} />
                ))}
                </div>
            </div>
            <div className="fade-up flex justify-center mt-16 md:mt-[90px]">
                <ButtonWhitePaper />
            </div>
      </div>
    </div>
  );
}
