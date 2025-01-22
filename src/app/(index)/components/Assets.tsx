"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Assets = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
    >
        <div className="px-5 pt-20 md:pt-[160px] md:pb-[84px] pb-12 bg-[#F5F6F7]">
            <div className="w-full max-w-[956px] mx-auto">
                <h4 className="relative flex items-center justify-center">
                    <span className="absolute text-center md:text-[80px] text-[40px] font-bold leading-none">Supported Swap Assets</span>
                    <span><img className="max-md:w-[160px]" src="/assets/images/assets-deco.png" alt="" /></span>
                </h4>
                <div className="flex justify-between gap-5 mt-8 md:mt-14">
                    <div className="">
                        <img className="rounded-[20px] [box-shadow:0px_4px_100px_0px_rgba(0,_0,_0,_0.10)]" src="/assets/images/assets-img-01.svg" alt="" />
                    </div>
                    <div className="">
                        <img className="rounded-[20px] [box-shadow:0px_4px_100px_0px_rgba(0,_0,_0,_0.10)]" src="/assets/images/assets-img-02.svg" alt="" />
                    </div>
                </div>
                <div className="flex justify-center items-center md:mt-14 mt-8">
                    <a href="https://teleport-exchange.io/" target="_blank" className="flex items-center justify-center gap-2 border-4 border-[#18539E] rounded-[10px] w-[300px] md:w-[360px] h-[60px] md:h-[78px] bg-white md:text-[20px] text-[16px] font-extrabold text-[#18539E] tracking-widest">
                    <span><img src="/assets/images/ic-btn.svg" alt="" /></span>
                    <span>TELEPORT EXCHANGE</span>
                    </a>
                </div>
            </div>
        </div>
        <div className="pt-16 px-5">
            <p className="text-center md:text-[36px] text-[24px] font-bold mb-5">Download the App now !</p>
            <div className="rounded-[30px] bg-[linear-gradient(90deg,_#19539D_0.02%,_#627EEA_99.97%)] pt-[25px] pb-7 px-5 w-full max-w-[1008px] mx-auto">
                <p className="text-center text-white md:text-[16px] text-[14px]">If you don't have Diver Wallet Pro yet, please download it.</p>
                <div className="flex max-md:flex-col items-center gap-5 justify-between w-full max-w-[824px] mx-auto">
                    <div className="flex-1"><img src="/assets/images/logo-diver.svg" alt="" /></div>
                    <div className="md:mt-5">
                        <div className="flex gap-5">
                            <a href="https://apps.apple.com/jp/app/diver-wallet-pro/id6739527739" target="_blank" rel="noopener noreferrer" className="block hover:opacity-75 duration-150">
                            <img src="/assets/images/btn-appstore.svg" alt="" /></a>
                            <span className="block bg-[#D9D9D9] rounded-[5px] border border-[#A6A6A6]">
                            <img className="opacity-10" src="/assets/images/btn-google.svg" alt="" /></span>
                        </div>
                        <p className="text-right md:text-[13px] text-[12px] text-white mt-1">* Coming soon to googleplay</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Assets;
