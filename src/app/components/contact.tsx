"use client";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Contact = () => {
  const ref = useScrollAnimations();
  return (
    <section
      ref={ref}
      className="relative px-8 py-[60px] "
    >
      <div className="w-full md:max-w-[1100px] max-w-[475px] mx-auto">
            <div className="flex items-center justify-center text-center">
                <h3 className="fade-up u-text-gradient bg-[linear-gradient(90deg,_#D9748F_0%,_#0059BA_100%)] text-[36px] font-bold leading-[1.1]">
                Join iPS DAO
                </h3>
            </div>
            <p className="fade-up text-center font-roboto text-[16px] mt-6">Participate in our projects by obtaining iPS tokens</p>
        <div className="fade-up mt-10">
            <form>
                <div className="flex justify-center flex-wrap gap-10">
                <div className="w-full md:w-[530px]">
                    <label className="text-[14px] font-medium mb-1">Name</label>
                    <div className="w-full">
                        <input id="name" type="text" className="w-full text-[14px] h-10 rounded-xl bg-[#F4F4F5] [box-shadow:0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] px-3" placeholder="Enter your name" />
                    </div>
                </div>
                <div className="w-full md:w-[530px]">
                    <label className="text-[14px] font-medium mb-1">Email</label>
                    <div className="w-full">
                        <input id="email" type="email" className="w-full text-[14px] h-10 rounded-xl bg-[#F4F4F5] [box-shadow:0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] px-3" placeholder="Enter your email address" />
                    </div>
                </div>
                <div className="w-full md:w-[530px]">
                    <label className="text-[14px] font-medium mb-1">Questions/Comments</label>
                    <div className="w-full">
                        <input id="country" type="text" className="w-full text-[14px] h-10 rounded-xl bg-[#F4F4F5] [box-shadow:0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] px-3" placeholder="Write your message here" />
                    </div>
                </div>
                </div>
                <div className="flex justify-center mt-10">
                <button className="w-[180px] h-12 max-md:mx-auto flex items-center justify-center px-[22px] py-4 gap-2 rounded-xl bg-[#D9748F] text-[16px] font-semibold text-white">
                    <span><img src="/assets/images/icon-submit.svg" alt="" /></span>
                    <span>Submit</span>
                </button>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;