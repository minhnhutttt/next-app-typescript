"use client";

import ContactForm from "./ContactForm";

const Ignite = () => {
    return (
        <section className="bg-white relative">
            <div className="pb-[30vw] md:pb-[20vw] md:px-[2vw] px-[4vw]">
                <div className="relative h1 pb-12 md:pb-20 font-bold uppercase leading-[0.85]">
                    <div className="flex justify-between">
                        <div className="js-split pr-4">Ignite</div>
                        <div className="flex">
                            <div className="relative w-[14vw] md:w-[12.5vw] h-full p-1 md:p-4 md:mt-[1vw]">
                                <img src="/assets/images/ignite.webp" alt="" />
                            </div>
                            <div className="js-split">And</div>
                        </div>
                    </div>
                    <div className="js-split text-center"> rally your </div>
                    <div className="js-split text-center"> people </div>
                </div>
                <div className="grid grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))] gap-x-4 md:gap-x-5 gap-y-10">
                    <div className="col-span-12">
                        <div className="h2 mb-5 js-split">Bring Sunny to your event</div>
                    </div>
                    <div className="col-span-12 md:col-start-13 md:col-span-12">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ignite;