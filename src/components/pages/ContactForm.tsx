const ContactForm = () => {

    return (
        <section className="relative">
            <form action="" className="space-y-10">
                <div className="grid grid-cols-12 gap-5">
                    <div className="md:col-span-6 col-span-12">
                        <label htmlFor="input_1_1_1" className="mb-2 block">First Name *</label>
                        <input type="text" name="input_1.1" id="input_1_1_1" placeholder="First name here" className="w-full flex items-center leading-none rounded-lg h-16 md:h-20 p-3 border border-[#dfdfdf]"></input>
                    </div>
                    <div className="md:col-span-6 col-span-12">
                        <label htmlFor="input_1_1_2" className="mb-2 block">Last Name *</label>
                        <input type="text" name="input_1.2" id="input_1_1_2" placeholder="Last name here" className="w-full flex items-center leading-none rounded-lg h-16 md:h-20 p-3 border border-[#dfdfdf]"></input>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-5">
                    <div className="md:col-span-6 col-span-12">
                        <label htmlFor="input_1_1_3" className="mb-2 block">Email*</label>
                        <input type="text" name="input_1.3" id="input_1_1_3" placeholder="example@provider.com" className="w-full flex items-center leading-none rounded-lg h-16 md:h-20 p-3 border border-[#dfdfdf]"></input>
                    </div>
                    <div className="md:col-span-6 col-span-12">
                        <label htmlFor="input_1_1_4" className="mb-2 block">Company</label>
                        <input type="text" name="input_1.4" id="input_1_1_4" placeholder="Company name" className="w-full flex items-center leading-none rounded-lg h-16 md:h-20 p-3 border border-[#dfdfdf]"></input>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12">
                        <label htmlFor="" className="mb-2 block">Message (Optional)</label>
                        <textarea name="" id="" placeholder="Type here" className="w-full flex items-center leading-none rounded-lg h-[200px] md:h-[300px] p-3 border border-[#dfdfdf]"></textarea>
                    </div>
                </div>
                <div className="">
                    <button className="md:w-[450px] md:h-[100px] h-20 w-full max-md:mx-auto bg-[#1b1b1c] rounded-full flex items-center justify-center text-white border border-[#1b1b1c] hover:bg-white duration-200 hover:text-[#1b1b1c]">Send form</button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;