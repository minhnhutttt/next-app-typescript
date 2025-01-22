"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Introduction = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-5 pt-7 max-md:pb-3"
    >
      <div data-scroll className="w-full max-w-[1120px] mx-auto">
        <div className="fade-up flex justify-center items-center"><img className="max-md:w-[140px]" src="/assets/images/logo-weth.svg" alt="" /></div>
        <h2 data-splitting className="ani-char text-center xl:text-[96px] md:text-[60px] text-[30px] font-black leading-[1.3] mt-5">
        “<span className="u-text-gradient bg-[linear-gradient(90deg,_#19539D_0.02%,_#627EEA_99.97%)]">TELEPORT EXCHANGE</span>” <br />
        bridges to the DIVER Time Network by wrapping ETH in DwETH, enabling exchange between DRC20 tokens.
        </h2>
      </div>
    </section>
  );
};

export default Introduction;
