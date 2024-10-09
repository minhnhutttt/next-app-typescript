"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const GatewayPageHead = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative pt-[145px] z-10">
      <div className="w-full mx-auto overflow-hidden">
        <div className="fade-up px-5 md:px-[46px] md:text-[128px] text-[50px] font-medium tracking-wide leading-none">
            What is RPC?
        </div>
        <div className="h-[560px] md:h-[804px] relative flex items-center justify-center md:-mt-8 px-5">
            <div className="absolute inset-0 z-10 h-full w-full">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover object-center opacity-30 mix-blend-plus-darker"
                >
                    <source src="/assets/videos/gateway.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="w-full max-w-[640px] mx-auto flex items-center justify-center flex-col md:gap-[60px] gap-8 relative z-10">
                <div className="fade-up md:text-[20px] text-[16px] md:p-10 p-6 bg-[#212534]/[0.1] border-[#005FD7] border [box-shadow:0px_0px_60px_0px_rgba(61,_123,_184,_0.20)] rounded-[10px]">
                    RPC (Remote Procedure Call) is a powerful interface that allows developers and projects to interact directly with the DIVER network. It's a crucial component for efficiently building and operating decentralized applications (dApps) while maximizing DIVER's innovative features. 
                </div>
                <div className="fade-up md:text-[20px] text-[16px] md:p-10 p-6 bg-[#212534]/[0.1] border-[#005FD7] border [box-shadow:0px_0px_60px_0px_rgba(61,_123,_184,_0.20)] rounded-[10px]">
                A stable connection to the DIVER network is essential for developing next-generation Web3 applications. Through the RPC Gateway, your project can fully leverage DIVER's high-speed, fee-free transaction processing capabilities.
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default GatewayPageHead;
