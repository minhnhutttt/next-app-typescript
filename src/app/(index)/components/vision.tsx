"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Vision = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} id="introduction" className="relative pt-[70px] bg-[url('/assets/images/bg-vision.png')] bg-center bg-[length:auto_100%] md:h-[1274px]">
        <div className="w-full max-w-[1440px] mx-auto md:pt-[50px] pt-10 px-8">
            <h5 className="md:text-[36px] text-[24px] font-semibold">
                The IPDC project aims to realize the <br />
                following innovative vision
            </h5>
        </div>
    </section>
  );
};

export default Vision;
