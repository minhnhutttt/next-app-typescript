"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Join = () => {
    const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative bg-[url('/assets/images/join-bg.jpg')] bg-cover px-8 py-10 md:py-[64px]">
        <div className="fade-up w-full md:max-w-[1100px] max-w-[375px] h-[293px] px-4 rounded-[12px] mx-auto flex items-center justify-center flex-col md:gap-5 gap-3 max-md:flex-col md:bg-[url('/assets/images/join-img.jpg')] bg-[url('/assets/images/join-img-sp.jpg')] bg-cover bg-center">
            <p className="fade-up text-white md:text-[20px] text-[16px] font-bold leading-[1.4] text-center">Become a part of the future of medicine with iPS DAO!</p>
            <a href="/" className="fade-up flex items-center justify-center md:px-[22px] px-3 md:py-[14px] py-2 gap-2 rounded-xl bg-[#D9748F] text-white md:text-[18px] text-[14px] font-semibold">
                <span><img className="max-md:w-5 md:w-6" src="/assets/images/plus.svg" alt="" /></span>
                <span>Join Now</span>
            </a>
        </div>
    </section>
  );
};

export default Join;
