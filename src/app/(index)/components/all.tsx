"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
const All = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative px-2 md:pb-[160px] pb-[100px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex justify-center">
            <div className="popup w-[440px] md:w-[875px] h-[160px] md:h-[310px] flex items-center justify-center relative">
                <img className="animate-[fuwafuwa_3s_0.5s_ease-in-out_infinite_alternate] max-md:w-[12%] absolute left-[1%] top-[9%]" src="/assets/images/all-ic-01.png" alt="" />
                <img className="animate-[fuwafuwa_3s_0.65s_ease-in-out_infinite_alternate] max-md:w-[12%] absolute left-0 top-[53%]" src="/assets/images/all-ic-02.png" alt="" />
                <img className="animate-[fuwafuwa_3s_1s_ease-in-out_infinite_alternate] max-md:w-[12%] absolute left-[11%] top-[74%]" src="/assets/images/all-ic-03.png" alt="" />
                <img className="animate-[fuwafuwa_3s_1.1s_ease-in-out_infinite_alternate] max-md:w-[12%] absolute right-[8%] top-[2%]" src="/assets/images/all-ic-04.png" alt="" />
                <img className="animate-[fuwafuwa_3s_0.4s_ease-in-out_infinite_alternate] max-md:w-[12%] absolute right-0 top-[34%]" src="/assets/images/all-ic-05.png" alt="" />
                <img className="animate-[fuwafuwa_3s_0.8s_ease-in-out_infinite_alternate] max-md:w-[12%] absolute right-[6%] top-[68%]" src="/assets/images/all-ic-06.png" alt="" />
                <h3 className="lg:text-[64px] md:text-[6.25vw] text-[24px] font-bold text-center leading-[1.2] tracking-wider">
                    Bringing Dreams and <br />Hope to Every Child
                </h3>
            </div>
        </div>
        <div className="popup flex justify-center mt-6 md:mt-9">
            <p className="md:text-[16px] text-[14px] max-w-[620px]">
                SANTA Coin is an innovative social project that brings Santa Claus's symbolic spirit of "unconditional love" and "gifts for children" to the blockchain. It enables transparent, direct support for children facing economic and social challenges. Starting with a pilot program in December 2024, we aim to build a comprehensive support platform through phased functional expansions.
            </p>
        </div>
        <div className="popup">
            <img src="/assets/images/all-img.png" alt="" />
        </div>
        <div className="pt-12 md:pt-20 px-5">
            <h3 className="popup text-center md:text-[48px] text-[24px] font-bold">Creating a Perpetual Gift Economy</h3>
            <div className="flex justify-between max-md:flex-col gap-10 w-full max-w-[440px] md:max-w-[1004px] mx-auto mt-10 md:mt-16">
                <div className="popup md:w-[400px] w-full">
                    <figure className="flex justify-center">
                        <img className="max-md:w-[200px]" src="/assets/images/creating-img-01.png" alt="" />
                    </figure>
                    <div className="md:mt-10 mt-7">
                        <h5 className="text-center md:text-[24px] text-[18px] font-bold leading-none">
                        The Spirit of Santa Claus and Blockchain
                        </h5>
                        <p className="md:text-[18px] text-[16px] mt-4 md:mt-5">
                        For centuries, Santa Claus has lived in children's hearts as a symbol of unconditional love and hope. SANTA Coin reinterprets this universal "spirit of giving" through modern blockchain technology
                        </p>
                    </div>
                </div>
                <div className="popup md:w-[400px] w-full">
                    <figure className="flex justify-center">
                        <img className="max-md:w-[200px]" src="/assets/images/creating-img-02.png" alt="" />
                    </figure>
                    <div className="md:mt-10 mt-7">
                        <h5 className="text-center md:text-[24px] text-[18px] font-bold leading-none">
                        Special Significance of December
                        </h5>
                        <p className="md:text-[18px] text-[16px] mt-4 md:mt-5">
                        Every December, when people worldwide think about gift-giving, SANTA Coin plays a special role
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default All;
