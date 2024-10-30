"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Support = () => {
    const ref = useScrollAnimations();
    
    return (
        <section ref={ref} id="support" className="relative md:px-10 px-5 md:pt-[204px] pt-[100px]">
            <div className="w-full max-w-[1000px] mx-auto bg-black/90 rounded-[30px] border border-[#0321BE] xl:p-[100px] md:p-10 p-8">
                <h4 className="fade-up text-center md:text-[48px] text-[28px] font-bold">
                Centralized NFT management with multimedia support
                </h4>
                <div className="fade-up grid md:grid-cols-4 grid-cols-2 md:pt-[61px] pt-8">
                    <span><img src="/assets/images/support-img.png" alt="" /></span>
                    <span><img src="/assets/images/support-music.png" alt="" /></span>
                    <span><img src="/assets/images/support-video.png" alt="" /></span>
                    <span><img src="/assets/images/support-3d.png" alt="" /></span>
                </div>
            </div>
        </section>
  );
};

export default Support;
