"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { ReactNode } from "react";


export interface ImpactDataType {
  id: string,
  title: string,
  text: string,
}

const Impact = ({text, data, link} : {text: ReactNode, data: ImpactDataType[], link: ReactNode}) => {
    const ref = useScrollAnimations();
    return (
        <section ref={ref} className="bg-white relative">
            <div className="grid grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))] pb-[10rem] md:pb-[24rem] gap-x-[2vw] md:px-[2vw] px-[4vw]">
                <div className="col-span-12 pb-[8vw] md:mb-[3vw] md:pr-20 relative order-0 md:order-2">
                    <div className="relative w-full overflow-hidden rounded-[0.4rem] bg-grey">
                        <div className="pt-[146.25%]"></div>
                        <video
                            className="size-full object-cover absolute top-0 left-0 is-playing"
                            data-lazy-video=""
                            data-lazy=""
                            data-autoplay="true"
                            preload="none"
                            loop
                            muted
                            autoPlay
                            src="/assets/images/186784f4.mp4"
                            playsInline
                            data-loaded="true"
                        ></video>
                    </div>
                </div>
                <div className="col-span-12 flex flex-col overflow-hidden relative">
                    <div className="!absolute top-[1vw] left-0 md:pr-[15vw] pr-[30vw]">
                        <p className="js-split">(Impact)</p>
                    </div>
                    <div className="h2 js-split pb-[12vw] md:pb-[10vw]">
                        <span className="inline-block md:w-[10vw] w-[25vw]"></span>
                         {text}
                    </div>
                    <div className="grid grid-cols-12 gap-x-[2vw]">
                        <div className="col-span-12 flex flex-col gap-y-[8vw] md:gap-y-[5vw] mb-[10vw] md:mb-[5vw]">
                        {data.map((item, index)=> (
                            <div className="grid grid-cols-12 gap-x-[2vw]" key={index}>
                                <div className="col-span-2">({item.id})</div>
                                <div className="col-span-10 md:max-w-[43rem] flex md:gap-y-[2vw] gap-y-[3vw] flex-col">
                                    <p className="">{item.title}</p>
                                    <p className="text-black/50">{item.text}</p>
                                </div>
                            </div>
                        ))}
                        </div>
                        <div className="!col-start-3 col-span-10 md:col-span-6 pb-[0.25rem]">
                            {link}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;