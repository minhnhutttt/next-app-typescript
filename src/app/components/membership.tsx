"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Membership = () => {
    const ref = useScrollAnimations();
  return (
    <section id="membership" ref={ref} className="relative bg-[linear-gradient(90deg,_#00F4AE_0%,_#0C408C_100%)] px-8 py-10 md:py-[60px]">
        <div className="w-full md:max-w-[1100px] max-w-[375px] mx-auto flex items-center justify-center gap-5 md:gap-10 max-md:flex-col">
            <figure className="fade-up">
                <img src="/assets/images/avatar.svg" alt="" />
            </figure>
            <div className="fade-up flex-1 space-y-3">
                <h5 className="text-white text-[24px] font-bold font-roboto max-md:text-center">Welcome to EXO DAO: Powering the Future of Medicine</h5>
                <div className="flex max-md:justify-center gap-3">
                    <p className="px-2 rounded-lg h-7 bg-[#D4D4D8] text-[14px] text-center flex items-center justify-center leading-none">Healthcare Innovation</p>
                    <p className="px-2 rounded-lg h-7 bg-[#D4D4D8] text-[14px] text-center flex items-center justify-center leading-none">Regenerative Medicine</p>
                </div>
                <p className="text-white text-[16px] font-roboto">Learn how EXO tokens and the DAO structure are set to transform healthcare and how you can be a part of this revolutionary movement.Now is the time to take the first step toward the future.</p>
            </div>
            <div className="fade-up">
                <a href="/" className="flex items-center justify-center px-[22px] py-[14px] gap-2 rounded-xl bg-[#00F4AE] text-[18px] font-semibold">
                    <span><img className="max-md:w-5 md:w-6" src="/assets/images/icon-download.svg" alt="" /></span>
                    <span>White Paper</span>
                </a>
            </div>
        </div>
    </section>
  );
};

export default Membership;