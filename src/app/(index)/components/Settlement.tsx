"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";


const Settlement = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative px-5"
    >
      <div className="w-full max-w-[1360px] mx-auto md:rounded-[100px] rounded-[60px] px-5 bg-white/90 md:pb-[82px] pb-14 [box-shadow:0px_4px_100px_0px_rgba(0,_0,_0,_0.10)] md:pt-[90px] pt-10">
        <h3 className="fade-up text-center md:text-[32px] text-[20px] font-bold">Payment system integration</h3>
        <p className="fade-up text-center md:text-[16px] text-[13px]">Easy and accurate payment of subscription fees in AIAD coins</p>
        <div className="w-full max-w-[1200px] mx-auto md:mt-12 mt-8">
            <div className="grid md:grid-cols-2 gap-10 md:mb-11 mb-7">
                <div className="fade-up lg:w-[580px] bg-[#FFFA99]/[0.5] rounded-[30px] lg:p-[60px] md:p-10 p-6 divide-y divide-[#D7D7D7]">
                    <div className="min-h-[90px] pb-5">
                        <p className="text-center md:text-[24px] text-[18px] font-bold leading-none">Payment process</p>
                        <p className="text-center font-medium md:text-[18px] text-[15px] leading-none pt-2">
                        We provide a mechanism for smooth payment of usage fees for the AI ​​advertising agent system
                        </p>
                    </div>
                    <div className="md:pt-10 pt-8 md:pb-[30px] pb-6">
                        <p className="text-center md:text-[20px] text-[16px] font-bold leading-none">Usage fee calculation system</p>
                        <ul className="text-center md:text-[16px] text-[13px] leading-none list-decimal list-inside mt-4 space-y-5">
                            <li>Automatic calculation of monthly advertising expenses</li>
                            <li>Calculation of 3.99% usage fee</li>
                            <li>Automatic exchange rate reflection</li>
                            <li>AIAD coin conversion of bill amount</li>
                        </ul>
                    </div>
                    <div className="md:pt-10 pt-8">
                        <p className="text-center md:text-[20px] text-[16px] font-bold leading-none">Payment flow</p>
                        <ul className="text-center md:text-[16px] text-[13px] leading-none list-decimal list-inside mt-4 space-y-5">
                            <li>Automatic calculation of monthly usage fee</li>
                            <li>Payment notification with AIAD coin</li>
                            <li>Automatic payment processing using smart contract</li>
                            <li>Confirmation and recording of payment completion</li>
                        </ul>
                    </div>
                </div>
                <div className="fade-up lg:w-[580px] bg-[#FFFA99]/[0.5] rounded-[30px] lg:p-[60px] md:p-10 p-6 divide-y divide-[#D7D7D7]">
                    <div className="min-h-[90px] pb-5">
                        <p className="text-center md:text-[24px] text-[18px] font-bold leading-none">User interface</p>
                        <p className="text-center font-medium md:text-[18px] text-[15px] leading-none pt-2">
                        We offer an intuitive and easy-to-use payment system
                        </p>
                    </div>
                    <div className="md:pt-10 pt-8 md:pb-[30px] pb-6">
                        <p className="text-center md:text-[20px] text-[16px] font-bold leading-none">Admin dashboard</p>
                        <ul className="text-center md:text-[16px] text-[13px] leading-none list-decimal list-inside mt-4 space-y-5">
                            <li>Viewing monthly advertising costs</li>
                            <li>Display of usage fee details</li>
                            <li>Check AIAD coin balance</li>
                            <li>Check payment history</li>
                        </ul>
                    </div>
                    <div className="md:pt-10 pt-8">
                        <p className="text-center md:text-[20px] text-[16px] font-bold leading-none">Payment function</p>
                        <ul className="text-center md:text-[16px] text-[13px] leading-none list-decimal list-inside mt-4 space-y-5">
                            <li>AIAD coin wallet cooperation</li>
                            <li>One-click payment</li>
                            <li>Automatic payment settings</li>
                            <li>Real-time confirmation of payment status</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-[#EDEDED] rounded-[20px] flex max-md:flex-col py-[22px]">
                <div className="fade-up leading-none md:px-8 px-5 flex justify-center flex-col md:w-[354px] w-full max-md:p-5">
                    <p className="text-[18px] font-bold md:text-[24px]">Payment support</p>
                    <p className="md:text-[18px] text-[15px] font-medium mt-3">
                    Establishing a system to support smooth payment processing
                    </p>
                </div>
                <div className="fade-up grid md:grid-cols-2 leading-none md:px-8 px-5 md:gap-[35px] gap-6 py-8 md:py-5 max-md:border-t md:border-l border-white">
                    <div>
                        <p className="text-center md:text-[20px] text-[16px] font-bold">Technical support</p>
                        <ul className="list-disc pl-6 md:text-[16px] text-[13px] space-y-5 md:py-[30px] py-5">
                            <li>Wallet setup guide</li>
                            <li>Technical support for payment processing</li>
                            <li>troubleshooting</li>
                            <li>Monitoring system status</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-center md:text-[20px] text-[16px] font-bold">Customer support</p>
                        <ul className="list-disc pl-6 md:text-[16px] text-[13px] space-y-5 md:py-[30px] py-5">
                            <li>Multilingual support</li>
                            <li>Responding to inquiries regarding billing details</li>
                            <li>Dealing with payment-related questions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Settlement;
