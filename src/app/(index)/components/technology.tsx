"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Technology = () => {
    const ref = useScrollAnimations();
  return (
    <section id="technology" ref={ref} className="relative overflow-hidden bg-[url('/assets/images/technology-bg.png')] bg-cover bg-no-repeat md:px-10 px-6">
        <div className="w-full max-w-[1089px] mx-auto pt-[100px] pb-12 md:pt-[250px] md:pb-[74px]">
          <h4 className="fade-up md:text-[64px] text-[32px] text-center font-bold">Background of HGF Technology</h4>
          <p className="fade-up md:text-[40px] text-[20px] mt-12 md:mt-24 leading-[1.2] md:mb-[155px] mb-[70px]">
            HGF (Hepatocyte Growth Factor) is secreted by stromal cells and promotes growth in various tissues. It has potential applications in regenerative medicine, cancer treatment, and tissue repair.
          </p>
          <div className="fade-up flex justify-center">
            <a href="" className="w-[300px] md:w-[455px] h-20 md:h-[100px] border-2 border-[#405EFF] bg-[linear-gradient(93deg,_rgba(64,_94,_255,_0.30)_0%,_rgba(3,_33,_190,_0.30)_102.1%)] [box-shadow:0px_4px_50px_0px_rgba(137,_207,_236,_0.29)] rounded-[10px] md:text-[24px] text-[18px] flex items-center justify-center duration-150 hover:opacity-75">Learn more</a>
          </div>
        </div>
    </section>
  );
};

export default Technology;
