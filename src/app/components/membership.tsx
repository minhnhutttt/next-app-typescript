"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Membership = () => {
    const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative bg-[linear-gradient(90deg,_#00F4AE_0%,_#0C408C_100%)] px-8 py-10 md:py-[60px]">
        <div className="w-full md:max-w-[1100px] max-w-[375px] mx-auto flex items-center justify-center gap-5 md:gap-10 max-md:flex-col">
            <figure className="fade-up">
                <img src="/assets/images/avatar.png" alt="" />
            </figure>
            <div className="fade-up flex-1 space-y-3">
                <h5 className="text-white text-[24px] font-bold font-roboto max-md:text-center">EXO DAO Membership</h5>
                <div className="flex max-md:justify-center gap-3">
                    <p className="px-2 rounded-lg h-7 bg-[#D4D4D8] text-[14px]">Innovator</p>
                    <p className="px-2 rounded-lg h-7 bg-[#D4D4D8] text-[14px]">Revolutionary</p>
                </div>
                <p className="text-white text-[16px] font-roboto">Join the global community of EXO <br className="md:hidden" />enthusiasts and contribute to a sustainable future</p>
            </div>
            <a href="/" className="fade-up flex items-center justify-center px-[22px] py-[14px] gap-2 rounded-xl bg-[#00F4AE] text-[18px] font-semibold">
                <span><img src="/assets/images/plus.svg" alt="" /></span>
                <span>Join Now</span>
            </a>
        </div>
    </section>
  );
};

export default Membership;
