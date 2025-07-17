"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Letter = () => {
    const ref = useScrollAnimations();
    return (
        <section
            ref={ref}
            className="bg-white relative pb-[30vw] md:pb-[20vw] md:px-[2vw] px-[4vw]"
        >
            <div className="grid grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))]">
                <div className="col-span-12 relative md:col-span-11 order-2 md:order-none">
                    <div className="relative w-full">
                        <div className="!absolute top-[0.5vw] left-0 md:pr-[15vw] pr-[30vw]">
                            <p className="js-split">(Speaking)</p>
                        </div>
                        <div className="md:text-[3vw] text-[8vw] leading-none js-split">
                            <span className="inline-block md:w-[10vw] w-[25vw]"></span>
                            Sunny Bonnell delivers unforgettable talks that do more than inspire—they equip, challenge, and transform, showing leaders how to wield vision as a force and build companies great people want to be part of.
                        </div>
                        <div className="mt-10">
                            <a href="#" className="u-link is-full">
                                See Sunny’s signature talks
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-10 md:col-start-[15] order-1 md:order-none overflow-hidden mb-10 md:mb-0">
                    <div className="relative w-full overflow-hidden rounded-[0.4rem]">
                        <div className="pt-[149.91%]"></div>
                        <img
                            src="/assets/images/sunny.png"
                            alt=""
                            className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Letter;