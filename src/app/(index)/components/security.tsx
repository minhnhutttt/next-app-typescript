"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Security = () => {
    const ref = useScrollAnimations();
    
    return (
        <section ref={ref} id="security" className="relative bg-black md:[clip-path:polygon(0_188px,_100%_0,_100%_calc(100%-188px),_0%_100%)] [clip-path:polygon(0_88px,_100%_0,_100%_calc(100%-88px),_0%_100%)] py-10 md:py-[165px]">
            <div className="w-full max-w-[1440px] mx-auto py-24 md:py-[125px] relative bg-[url('/assets/images/bg-map.png')] bg-no-repeat bg-contain bg-center min-h-[633px]">
                <div className="flex items-center gap-9 max-md:flex-col">
                    <figure className="fade-up max-xl:w-1/2 max-md:w-full">
                        <img src="/assets/images/security-img.png" alt="" />
                    </figure>
                    <div className="flex-1 max-md:pl-5 pr-5">
                        <h4 className="fade-up md:text-[48px] text-[32px] font-bold">
                        World-class security <br />your privacy is respected
                        </h4>
                        <p className="fade-up md:text-[18px] text-[15px] font-medium md:mt-[30px] mt-5 max-w-[495px]">
                        Personally Identifiable Information, Accounts. We do not track addresses or asset balances. Strong wallet encryption ensures that your private keys remain secure and under your complete control as the sole owner.
                        </p>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default Security;
