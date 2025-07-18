"use client";

const Details = () => {
    return (
        <section className="bg-white relative">
            <div className="pb-[30vw] md:pb-[20vw] gap-x-5 md:px-[2vw] px-[4vw]">
                <div className="relative md:pb-20 pb-10">
                    <div className="!absolute top-[1vw] left-0 md:pr-[15vw] pr-[30vw]">
                        <p className="js-split">(Details)</p>
                    </div>
                    <div className="h2 js-split">
                        <span className="inline-block md:w-[10vw] w-[25vw]"></span>
                        Sunny doesn’t just give talks, she creates
                        shifts. Audiences leave feeling electrified, challenged,
                        and ready to lead differently.
                    </div>
                </div>
                <div className="grid grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))] gap-x-5 md:pt-12 md:border-t md:border-gray-200">
                    <div className="col-span-12 md:col-span-6 pb-16">
                        <div className="relative w-full rounded-[0.4rem] overflow-hidden bg-gray-200">
                            <div className="pt-[126.57%]"></div>
                             <video
                                className="size-full object-cover absolute top-0 left-0 is-playing"
                                data-lazy-video=""
                                data-lazy=""
                                data-autoplay="true"
                                preload="none"
                                loop
                                muted
                                autoPlay
                                src="/assets/images/e170985f.mp4"
                                playsInline
                                data-loaded="true"
                            ></video>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-start-[13]">
                        <div className="grid grid-cols-12 pb-6 md:pb-16 mb-6 md:mb-16 border-b border-gray-200">
                            <div className="col-span-4">
                                <p>Location</p>
                            </div>
                            <div className="col-span-8">
                                <p>Virtual or in person</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 pb-6 md:pb-16 mb-6 md:mb-16 border-b border-gray-200">
                            <div className="col-span-4">
                                <p>Duration</p>
                            </div>
                            <div className="col-span-8">
                                <p>30-45 min keynote <br />15 min Q&A (optional)</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 pb-6 md:pb-16 mb-6 md:mb-16 border-b border-gray-200">
                            <div className="col-span-4">
                                <p>Built for</p>
                            </div>
                            <div className="col-span-8">
                                <p>
                                    → Leaders navigating change <br />
                                    → Teams rethinking what’s possible <br />
                                    → Organizations scaling culture and impact <br />
                                    → Conferences focused on innovation <br />
                                    → Events focused on transformation
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;