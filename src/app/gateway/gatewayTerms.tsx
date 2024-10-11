"use client";

import Button from "@/components/button";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const GatewayTerms = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative pt-[100px] md:pt-[160px] z-10 px-5 md:pb-[240px] pb-[120px]">
      <div className="w-full max-w-[1363px] mx-auto">
        <h3 className="fade-up md:text-[64px] text-[32px] font-bold leading-none tracking-wide text-center">Terms of Use</h3>
        <div className="md:mt-10 mt-7 w-full max-w-[620px] mx-auto md:space-y-20 space-y-10">
            <div className="fade-up flex items-center">
                <p className="w-[100px] md:w-[200px] md:text-[18px] text-[16px] font-semibold">Usage Conditions</p>
                <div className="flex-1 pl-8 md:pl-12 border-l border-white">
                    <ul className="list-disc md:text-[16px] text-[14px] leading-[2.5]">
                        <li>Adherence to DIVER guidelines</li>
                        <li>Regular submission of usage reports</li>
                        <li>Active contribution to the community</li>
                    </ul>
                </div>
            </div>
            <div className="fade-up flex items-center">
                <p className="w-[100px] md:w-[200px] md:text-[18px] text-[16px] font-semibold">Prohibited Activities</p>
                <div className="flex-1 pl-8 md:pl-12 border-l border-white">
                    <ul className="list-disc md:text-[16px] text-[14px] leading-[2.5]">
                        <li>Misuse of RPC or causing excessive load</li>
                        <li>Activities that compromise DIVER network stability</li>
                        <li>Providing illegal or ethically questionable services</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="fade-up flex justify-center md:mt-[80px] mt-8">
            <Button href="/" rect="md:text-[20px] text-[16px] font-semibold leading-none md:w-[360px] w-[280px] h-[60px] md:h-[70px] flex justify-center items-center [text-shadow:1px_1px_1px_rgba(0,_0,_0,_0.25)] bg-white text-[#005FD7] [box-shadow:-3px_-4px_20px_0px_rgba(255,_255,_255,_0.15)_inset,_4px_10px_30px_0px_rgba(24,_83,_158,_0.50)] rounded-[80px] tracking-widest">
            Apply for RPC Gateway
            </Button>
          </div>
          <p className="fade-up text-center md:text-[14px] text-[12px] leading-none md:mt-[31px] tracking-widest mt-5">*Click to launch your email client and send a pre-filled application email.</p>
      </div>
    </section>
  );
};

export default GatewayTerms;
