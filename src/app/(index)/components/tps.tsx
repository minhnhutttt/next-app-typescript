"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Tps = () => {
    const ref = useScrollAnimations();
    
    return (
        <section ref={ref} id="tps" className="relative md:px-10 px-5 bg-[url('/assets/images/bg-tps.png')] bg-center bg-[length:100%_100%] h-[500px] md:h-[804px]">
            <div className="w-full max-w-[1340px] mx-auto h-full flex items-center flex-col pt-[150px] md:pt-[310px]">
                <h4 className="fade-up dt:text-[200px] text-[14vw] md:text-[13.889vw] linear-wipe font-black italic leading-none text-center tracking-[-0.02em] w-full">240,000TPS</h4>
                <p className="fade-up md:text-[32px] text-[24px] text-center font-medium mt-8">A high-speed,scalable network</p>
                <p className="fade-up md:text-[24px] text-[18px] text-center font-medium mt-3 leading-none">
                Seamless transaction experience worldwide with <br className="max-md:hidden" />transaction speed 10 times faster than VISA
                </p>
            </div>
        </section>
  );
};

export default Tps;
