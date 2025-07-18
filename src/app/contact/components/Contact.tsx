import ContactForm from "@/components/pages/ContactForm";

const Contact = () => {
    
    return (
        <section className="bg-white relative pb-[30vw] md:pb-[20vw] md:px-[2vw] px-[4vw]">
            <div className="grid grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))] gap-5">
                <div className="col-span-12 md:col-span-6">
                    <div className="sticky top-10">
                        <div className="relative w-full block overflow-hidden rounded-[0.4rem] mb-5">
                            <div className="pt-[134%]"></div>
                            <img
                                src="/assets/images/Sun-bloomber-1300x0-c-default.webp"
                                alt=""
                                className="absolute top-0 left-0 w-full h-full object-cover"
                            />
                        </div>
                        <div className="mb-20 max-w-[25rem]">
                            When you send your message, Sunny's media team will get back to you within 24 hours.
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-start-[13] md:col-span-12">
                    <h2 className="mb-5 h4">What would you like to contact Sunny about? (Select one)</h2>
                    <div className="flex flex-wrap gap-2 mb-10 md:mb-12">
                        <button className="px-5 bg-[#EBEBEB] mb-5 s:mb-0 py-1.5 rounded-full inline-block transition-colors duration-300 hover:bg-black hover:text-white js-filter-btn bg-grey">Speaking</button>
                        <button className="px-5 bg-[#EBEBEB] mb-5 s:mb-0 py-1.5 rounded-full inline-block transition-colors duration-300 hover:bg-black hover:text-white js-filter-btn bg-grey">Press &amp; Media</button>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default Contact;
