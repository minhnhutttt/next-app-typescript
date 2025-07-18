import { ReactNode } from "react";

export interface VistionType {
  id: string,
  title: string,
  text: string,
}

const Vision = ({title, text, list, link }: {title: ReactNode, text: ReactNode, list: VistionType[], link: ReactNode}) => {
    return (
        <section className="bg-white relative pb-[30vw] md:pb-[20vw] md:px-[2vw] px-[4vw]">
            <div className="relative w-full h-full rounded-[0.4rem] overflow-hidden bg-grey">
                <div className="pt-[68.45%]"></div>
                <video
                    className="size-full object-cover absolute top-0 left-0 is-playing"
                    data-lazy-video=""
                    data-lazy=""
                    data-autoplay="true"
                    preload="none"
                    loop
                    muted
                    autoPlay
                    src="/assets/images/01167253-2a0ecde7.mp4"
                    playsInline
                    data-loaded="true"
                ></video>
            </div>
            <div className="pt-8 md:pt-12 pb-12 md:pb-20">
                <div className="h2 js-split">{title}</div>
            </div>
            <div className="grid grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))] pb-24 md:pb-20 gap-x-5">
                <div className="col-span-12 md:col-span-10 mb-7 md:mb-0">
                    <div className="js-split h4">{text}</div>
                </div>
                <div className="col-span-12 md:col-span-10 flex flex-col gap-y-10 md:gap-y-16">
                    {list.map((item) => (
                        <div className="grid grid-cols-12 gap-x-5" key={item.id}>
                        <div className="js-split col-span-2">
                            ({item.id})
                        </div>
                        <div className="col-span-10">
                            <div className="flex flex-col gap-y-3">
                                <p className="js-split ">{item.title}</p>
                                <p className="js-split text-black/60">{item.text}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                    
                    <div className="grid grid-cols-12 gap-x-5">
                        <div className="js-split col-start-3 col-span-10">
                            {link}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vision;
