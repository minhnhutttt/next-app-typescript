"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { ReactNode } from "react";

const Roadlabel = ({children} : {children: ReactNode}) => {
    return (
        <div className="pt-[50px] flex items-center">
            <span className="rounded-full size-10 md:size-[60px] flex items-center justify-center border border-white md:text-[20px] text-[16px]">
                {children}
            </span>
            <figure>
                <img className="max-md:hidden" src="/assets/images/ic-road.png" alt="" />
                <img className="md:hidden w-10" src="/assets/images/ic-road-sp.png" alt="" />
            </figure>
        </div>
    )
}

const RoadContainer = ({children, last} : {children: ReactNode, last?: boolean}) => {
    return (
        <div className={`flex-1 border-t-2 border-white md:py-8 py-7 lg:pl-[110px] md:pl-10 pl-5 relative md:ml-[-38px] ml-[-16px] ${last && 'border-b-2'}`}>
            <span className="absolute top-0 left-0 h-full w-[3px] bg-[#005FD7] [box-shadow:0px_4px_50px_0px_#FFF]"></span>
            <div className="divide-y divide-white w-full max-w-[480px]">
                {children}
            </div>
        </div>
    )
}

const RoadTitle = ({title, children} : {title: string, children?: ReactNode}) => {
    return (
        <div>
            <div className="md:text-[20px] text-[16px] font-bold leading-none md:pt-[30px] md:pb-6 pt-6 pb-5 tracking-widest">{title}</div>
            {children && <div>{children}</div>}
        </div>
    )
}

const Roadmap = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative px-5 md:pb-[242px] pb-[120px]">
      <div className="w-full max-w-[1300px] mx-auto md:rounded-[60px] rounded-[30px] [box-shadow:0px_4px_10px_0px_rgba(0,_0,_0,_0.25)] bg-black/80 md:pt-[110px] pt-[60px] md:pb-[108px] pb-16 px-4">
        <h3 className="fade-up text-center md:text-[48px] text-[32px] font-bold tracking-wider">ROADMAP</h3>
        <div className="w-full max-w-[975px] mx-auto md:mt-[95px] mt-12">
            <div className="fade-up flex items-start">
                <Roadlabel>1Q</Roadlabel>
                <RoadContainer>
                    <RoadTitle title="DIVER Wallet (iOS, Android) release">
                        <div className="md:text-[18px] text-[16px] leading-none tracking-widest pb-6">
                            <p>
                            The wallet is be available through Google chrome <br />
                            extensions as well as Android and iOS apps
                            </p>
                            <ul className="list-disc list-inside mt-6 leading-[1.2]">
                                <li>Android APP</li>
                                <li>iOS APP</li>
                                <li>Chrome extension</li>
                            </ul>
                        </div>
                    </RoadTitle>
                    <RoadTitle title="DIVER Wallet (iOS, Android) release"></RoadTitle>
                    <RoadTitle title="DIVER Pool (web) released"></RoadTitle>
                </RoadContainer>
            </div>
            <div className="fade-up flex items-start">
                <Roadlabel>2Q</Roadlabel>
                <RoadContainer>
                    <RoadTitle title="DIVER Wallet (Chrome extension) released"></RoadTitle>
                    <RoadTitle title="DIVER Connect (Web) released"></RoadTitle>
                    <RoadTitle title="DIVER Tag (iOS, Android) releas"></RoadTitle>
                    <RoadTitle title="DIVER Art (Web) released"></RoadTitle>
                </RoadContainer>
            </div>
            <div className="fade-up flex items-start">
                <Roadlabel>3Q</Roadlabel>
                <RoadContainer>
                    <RoadTitle title="DIVER Knock (iOS, Android) released"></RoadTitle>
                    <RoadTitle title="DIVER Storage (Web) released"></RoadTitle>
                    <RoadTitle title="DIVER Market (Web) released"></RoadTitle>
                </RoadContainer>
            </div>
            <div className="fade-up flex items-start">
                <Roadlabel>4Q</Roadlabel>
                <RoadContainer>
                    <RoadTitle title="DIVER Mint (iOS, Android) released"></RoadTitle>
                    <RoadTitle title="DIVER Sign (Web, iOS, Android) released"></RoadTitle>
                    <RoadTitle title="DIVER BIz (iOS, Android) released"></RoadTitle>
                    <RoadTitle title="DIVER Agent (Web) Released"></RoadTitle>
                </RoadContainer>
            </div>
            <div className="fade-up flex items-start">
                <Roadlabel>2024</Roadlabel>
                <RoadContainer last>
                    <RoadTitle title="Oceans Rare (Web) released"></RoadTitle>
                    <RoadTitle title="Official domain released"></RoadTitle>
                    <RoadTitle title="DIVER Storage (iOS, Android) released"></RoadTitle>
                </RoadContainer>
            </div>
        </div>
        <div className="fade-up flex justify-center md:mt-[90px] mt-14">
            <p className="w-full max-w-[490px] mx-auto md:text-[16px] text-[14px] leading-[1.3] tracking-widest">
            As time flows from the past to the present, and from the present to the future, we will continue to be a DIVER into a new era, and will never stop evolving and deepening.
            </p>
        </div>
        <div className="fade-up flex justify-center md:mt-[44px] mt-8">
            <a href="/" className="md:text-[20px] text-[16px] font-semibold leading-none md:w-[320px] w-[280px] h-[60px] md:h-[70px] flex justify-center items-center [text-shadow:1px_1px_1px_rgba(0,_0,_0,_0.25)] bg-white text-[#005FD7] [box-shadow:-3px_-4px_20px_0px_rgba(255,_255,_255,_0.15)_inset,_4px_10px_30px_0px_rgba(24,_83,_158,_0.50)] rounded-[80px] tracking-widest">View roadmap</a>
          </div>
      </div>
    </section>
  );
};

export default Roadmap;
