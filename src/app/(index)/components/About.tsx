const About = () => {
    return (
        <section className="bg-white relative md:pt-[8rem] pt-[2rem]">
            <div className="w-full grid grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))] gap-x-[2rem] md:px-[2vw] px-[4vw] pb-[30vw] md:pb-[20vw]">
                <div className="col-span-12 md:col-span-6 hidden md:block md:text-[6vw] leading-[0.8]">
                    <div className="js-split">→</div>
                </div>
                <div className="col-span-12 md:col-[span_18_/_span_18] flex flex-col gap-y-[4rem] md:gap-y-[9.5rem] pr-[1rem] relative">
                    <div className="!absolute top-0 md:top-[1vw] left-0 js-split pt-[0.25rem] text-[6vw] md:text-[2vw] md:pr-[15vw] pr-[30vw]">
                        <div className="js-split">(About)</div>
                    </div>
                    <div className="overflow-hidden md:text-[4vw] text-[8.8vw] leading-[1.3] font-medium tracking-tighter">
                        <div className="js-split">
                            <span className="md:w-[15vw] w-[30vw] inline-block"></span>
                            Sunny Bonnell is a visionary
                            voice in modern leadership. She
                            believes vision is more than words—it’s
                            the engine that powers the world's most
                            innovative cultures and brands.
                        </div>
                    </div>
                    <div className="flex">
                        <div className="js-split flex py-[1em]">
                            <a href="/" className="u-link is-full md:text-[1.2vw] text-[4vw] font-medium inline-block">Explore Sunny’s talks</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;