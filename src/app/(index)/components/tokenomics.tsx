"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
const Tokenomics = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} id="tokenomics" className="relative px-5 md:py-[160px] py-[100px]">
      <div className="w-full max-w-[1304px] mx-auto">
            <h4 className="popup md:text-[80px] text-[40px] text-center font-bold leading-none">Tokenomics</h4>
            <p className="popup text-center md:mt-[30px] mt-5 md:text-[20px] text-[16px] font-bold">Total number of issues: 1 billion SANTA</p>
            <div className="flex max-lg:flex-wrap justify-center xl:gap-[104px] gap-10 md:mt-[60px] mt-10">
                <div className="fade-up md:w-[600px] w-full md:rounded-[80px] rounded-[40px] bg-white md:p-[60px] p-8 [box-shadow:0px_0px_60px_0px_rgba(0,_0,_0,_0.10)]">
                    <p className="text-center md:text-[24px] text-[18px] font-bold leading-none">Initial allocation (pilot phase)</p>
                    <div className="flex justify-center md:mt-6 mt-5 pb-[30px]">
                        <figure>
                            <img src="/assets/images/graph-01.svg" alt="" />
                        </figure>
                    </div>
                    <div className="border-t border-[#B8B8B8] pt-[15px]">
                        <ul className="list-disc pl-6 text-[13px] max-w-[378px] mx-auto">
                            <li>Basic transaction record on blockchain (amount, date and time, shipping address all disclosed)</li>
                            <li>Simple approval system</li>
                            <li>Direct collaboration with selected support recipients</li>
                            <li>Oversight by management team</li>
                        </ul>
                    </div>
                </div>
                <div className="fade-up md:w-[600px] w-full md:rounded-[80px] rounded-[40px] bg-white md:p-[60px] p-8 [box-shadow:0px_0px_60px_0px_rgba(0,_0,_0,_0.10)]">
                    <p className="text-center md:text-[24px] text-[18px] font-bold leading-none">Allocation plan in full version</p>
                    <div className="flex justify-center md:mt-6 mt-5 pb-[30px]">
                        <figure>
                            <img src="/assets/images/graph-02.svg" alt="" />
                        </figure>
                    </div>
                    <div className="border-t border-[#B8B8B8] pt-[15px]">
                        <ul className="list-disc pl-6 text-[13px] max-w-[378px] mx-auto">
                            <li>Multi-signature approval system (majority approval by multiple administrators)</li>
                            <li>Advanced usage restriction function</li>
                            <li>Regular audit by a third party auditing organization</li>
                            <li>Implementation of community governance system</li>
                        </ul>
                    </div>
                </div>
            </div>
      </div>
    </section>
  );
};

export default Tokenomics;
