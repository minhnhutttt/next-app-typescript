"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const SunnyBook = () => {
    const ref = useScrollAnimations();
    return (
        <section ref={ref} className="bg-white relative pb-[30vw] md:pb-[20vw] md:px-[2vw] px-[4vw]">
            <div className="grid grid-cols-12 mb-4 md:mb-7">
                <div className="col-span-12 md:col-span-6">
                    <div className="js-split">Sunny’s books</div>
                </div>
                <div className="col-span-12 md:col-span-6">
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-4">
                <div className="col-span-6">
                    <a href="/" className="relative overflow-hidden block">
                        <div className="relative w-full bg-grey block rounded-[0.4rem] overflow-hidden mb-5 group bg-grey">
                            <div className="pt-[111%]"></div>
                            <img src="/assets/images/book.jpg" alt="" className="absolute top-0 left-0 w-full h-full object-cover" />
                        </div>
                        <div className="max-w-[45rem]">
                        <h2 className="h4 pb-4 block">Rare Breed: A Guide to Success for the Defiant, Dangerous, and Different (HarperCollins)</h2>
                        <p className="text-black/60">by Sunny Bonnell &amp; Ashleigh Hansberger </p>
                    </div>
                    </a>
                </div>
                <div className="col-span-6">
                    <a href="/" className="relative overflow-hidden block">
                        <div className="relative w-full bg-grey block rounded-[0.4rem] overflow-hidden mb-5 group bg-grey">
                            <div className="pt-[111%]"></div>
                            <img src="/assets/images/little_book_of_big_ideas.jpg" alt="" className="absolute top-0 left-0 w-full h-full object-cover" />
                        </div>
                        <div className="max-w-[45rem]">
                        <h2 className="h4 pb-4 block">Rare Breed: A Guide to Success for the Defiant, Dangerous, and Different (HarperCollins)</h2>
                        <p className="text-black/60">by Sunny Bonnell &amp; Ashleigh Hansberger </p>
                    </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SunnyBook;
