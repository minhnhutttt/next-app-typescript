"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Security = () => {
    const ref = useScrollAnimations();
    
    return (
        <section ref={ref} id="security" className="relative md:px-10 px-5 bg-black [clip-path:polygon(0_200px,_100%_0,_100%_calc(100%-200px),_0%_100%)]">
            <div className="w-full max-w-[1200px] mx-auto py-[200px]">
                <figure>
                    <img src="/assets/images/bg-map.png" alt="" />
                </figure>
            </div>
        </section>
  );
};

export default Security;
