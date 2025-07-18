import { ReactNode } from "react";

const Speaking = ({ left, center, right, video }: { left: ReactNode, center: ReactNode, right: ReactNode, video: string }) => {
    return (
        <section className="bg-white relative md:pb-[20vw] pb-[25vw]">
            <div className="rounded-[0.4rem] w-full h-full relative bg-[#000000] overflow-hidden">
                <div className="pt-[62.5%]"></div>
                <video
                    className="size-full object-cover absolute top-0 left-0 is-playing"
                    data-lazy-video=""
                    data-lazy=""
                    data-autoplay="true"
                    preload="none"
                    loop
                    muted
                    autoPlay
                    src={video}
                    playsInline
                    data-loaded="true"
                ></video>
            </div>
            <div className="grid grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))] md:gap-y-[4rem] gap-y-[2vw] md:gap-[2rem] py-[1.5rem] md:px-[2vw] px-[4vw]">
                <div className="col-span-12 md:col-span-6 hidden md:block md:text-[1.2vw] font-semibold">
                    <div className="js-split">{left}</div>
                </div>
                <div className="col-span-12 md:col-span-9 md:text-[1.2vw] text-[4.3vw] font-semibold">
                    <div className="js-split">{center}</div>
                </div>
                <div className="md:col-start-[20] col-span-12 md:col-span-5 md:text-right flex justify-end">
                    <div className="js-split flex pb-[1vw] items-start">
                        {right}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Speaking;