"use client";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Contact = () => {
  const ref = useScrollAnimations();
  return (
    <section
      ref={ref}
      className="relative px-8 pt-10 pb-8 md:py-[60px] "
    >
      <div className="w-full md:max-w-[1100px] max-w-[475px] mx-auto flex max-md:flex-col items-center justify-center md:gap-10 gap-8">
        <div className="flex-1">
            <Title left>
            Join EXO DAO
            </Title>
            <p className="fade-up font-roboto text-[16px] mt-6">Become a member and be part of a revolutionary community.</p>
            <div className="flex gap-2 text-[16px] font-roboto items-center mt-2">
                <figure>
                    <img src="/assets/images/icon-mail.svg" alt="" />
                </figure>
                info@exodao.com
            </div>
        </div>
        <div className="fade-up max-md:w-[326px] flex-1">
            <form className="md:space-y-10 space-y-7">
                <div>
                    <label className="text-[14px] font-medium mb-1">Full Name</label>
                    <div className="w-full">
                        <input id="name" type="text" className="w-full text-[14px] h-10 rounded-xl bg-[#F4F4F5] [box-shadow:0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] px-3" placeholder="Enter your full name" />
                    </div>
                </div>
                <div>
                    <label className="text-[14px] font-medium mb-1">Email</label>
                    <div className="w-full">
                        <input id="email" type="email" className="w-full text-[14px] h-10 rounded-xl bg-[#F4F4F5] [box-shadow:0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] px-3" placeholder="Enter your email address" />
                    </div>
                </div>
                <div>
                    <label className="text-[14px] font-medium mb-1">Country</label>
                    <div className="w-full">
                        <input id="country" type="email" className="w-full text-[14px] h-10 rounded-xl bg-[#F4F4F5] [box-shadow:0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] px-3" placeholder="Select your country" />
                    </div>
                </div>
                <div>
                <button className="w-[180px] h-12 max-md:mx-auto flex items-center justify-center px-[22px] py-4 gap-2 rounded-xl bg-[#00F4AE] text-[16px] font-semibold">
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
