"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { ReactNode } from "react";


const HowtoItem = ({id, title, text, children} : {id: string, title: string, text: ReactNode, children: ReactNode}) => (
    <div className="fade-up w-[310px] md:min-h-[600px] rounded-[20px] border-[4px] border-[#19539D] bg-white [box-shadow:0px_4px_34px_0px_rgba(18,_47,_74,_0.10)] flex flex-col items-center text-center text-black px-3 py-7">
        <p className="text-[32px] md:text-[48px] font-medium">{id}</p>
        <p className="md:text-[20px] text-[18px] font-bold mt-2">{title}</p>
        <p className="md:text-[18px] text-[16px] mt-1">{text}</p>
        <div className="mt-5">
            {children}
        </div>
    </div>
)

const Howto = () => {
  const ref = useScrollAnimations();

  return (
    <section
    id="how-to-use"
      ref={ref}
      className="relative overflow-hidden"
    >
      <div className="px-5 md:pb-[160px] pb-20 pt-20 md:pt-36">
        <h4 className="fade-up text-center md:text-[80px] text-[40px] font-bold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.40)]">How to use Swap</h4>
        <div className="w-full max-w-[1070px] mx-auto flex flex-wrap justify-center mt-9 md:gap-[70px] gap-10">
            <HowtoItem id="01" title="Prepare your DIVER Wallet Pro" text="Download wallet & set up wallet">
                <div className="flex flex-col items-center justify-center">
                    <span><img src="/assets/images/ic-wallet.png" alt="" /></span>
                    <div className="space-y-7 mt-8">
                        <a href="http://" target="_blank" rel="noopener noreferrer" className="block hover:opacity-75 duration-150">
                        <img src="/assets/images/btn-appstore.png" alt="" /></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer" className="block hover:opacity-75 duration-150">
                        <img src="/assets/images/btn-google.png" alt="" /></a>
                    </div>
                    <span className="text-center md:text-[13px] text-[12px] mt-2">* Coming soon to googleplay</span>
                </div>
            </HowtoItem>
            <HowtoItem id="02" title="Exchange tokens" text={(<>&nbsp;</>)}>
                <div className="flex flex-col items-center justify-center">
                    <span><img src="/assets/images/how-to-img-01-02.png" alt="" /></span>
                </div>
            </HowtoItem>
            <HowtoItem id="03" title="Swap With Teleport Exchange" text="Easy-to-use swap">
                <div className="flex flex-col items-center justify-center">
                    <span><img src="/assets/images/how-to-img-01-03.png" alt="" /></span>
                </div>
            </HowtoItem>
        </div>
      </div>
      <div className="px-5 md:pb-[160px] pb-20  pt-20 md:pt-36 bg-[#080A1A] rounded-t-[90px]">
        <h4 className="fade-up text-center md:text-[80px] text-[40px] font-bold text-white [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.40)]">How to use Bridge</h4>
        <div className="w-full max-w-[1070px] mx-auto flex flex-wrap justify-center mt-9 md:gap-[70px] gap-10">
            <HowtoItem id="01" title="Prepare your DIVER Wallet Pro" text="Download wallet & set up wallet">
                <div className="flex flex-col items-center justify-center">
                    <span><img src="/assets/images/ic-wallet.png" alt="" /></span>
                    <div className="space-y-7 mt-8">
                        <a href="http://" target="_blank" rel="noopener noreferrer" className="block hover:opacity-75 duration-150">
                        <img src="/assets/images/btn-appstore.png" alt="" /></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer" className="block hover:opacity-75 duration-150">
                        <img src="/assets/images/btn-google.png" alt="" /></a>
                    </div>
                    <span className="text-center md:text-[13px] text-[12px] mt-2">* Coming soon to googleplay</span>
                </div>
            </HowtoItem>
            <HowtoItem id="02" title="Exchange tokens" text="Transfer currency to wallet">
                <div className="flex flex-col items-center justify-center">
                    <span><img src="/assets/images/how-to-img-02-02.png" alt="" /></span>
                </div>
            </HowtoItem>
            <HowtoItem id="03" title="Bridge with Anchor Bridge" text={(<>Bridge currencies with <br />easy operations</>)}>
                <div className="flex flex-col items-center justify-center">
                    <span><img src="/assets/images/how-to-img-02-03.png" alt="" /></span>
                </div>
            </HowtoItem>
        </div>
      </div>
    </section>
  );
};

export default Howto;
