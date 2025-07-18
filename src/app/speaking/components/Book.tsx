const Book = () => {
    return (
        <section className="bg-white relative">
            <div className="w-full grid grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))] gap-x-[2rem] md:px-[2vw] px-[4vw] pb-[30vw] md:pb-[20vw]">
                <div className="col-[span_24_/_span_24] mb-[2vw] md:col-span-9 hidden md:block">
                    <div className="js-split mb-[4vw]">(Book Buys & Signing)</div>
                </div>
                <div className="col-span-12 md:col-[span_14_/_span_14] md:pr-[2.5vw] flex flex-col gap-y-[7vw] md:gap-y-[4vw]">
                    <div className="h2 js-split">Include a book signing as part of your keynote event. Bulk book buys are available.</div>
                    <div className="relative mb-[5vw] md:mb-0">
                        <a href="/" className="u-link is-full">Inquire about book signings</a>
                    </div>
                    <div className="relative w-full bg-grey block rounded-[0.4rem] overflow-hidden mb-[6vw] md:mb-[2vw]">
                        <div className="aspect-video">
                            <video
                                className="size-full object-cover"
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
                </div>
            </div>
        </section>
    );
};

export default Book;