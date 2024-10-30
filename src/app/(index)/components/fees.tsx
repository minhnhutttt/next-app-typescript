"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Fees = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      id="fees"
      className="relative md:pt-[135px] pt-20 bg-[url('/assets/images/bg.png')] bg-[length:100%_auto] bg-no-repeat bg-[top_500px_center] md:pb-[211px] pb-[120px]"
    >
      <h4 className="fade-up text-center md:text-[64px] text-[28px] font-black px-4">
        NO TRANSACTION FEES
      </h4>
      <div className="md:bg-[url('/assets/images/bg-fees.png')] bg-no-repeat bg-left-bottom">
        <div className="w-full max-w-[1312px] mx-auto">
          <div className="md:pt-[80px] pt-14 w-full max-w-[1232px] mx-auto flex md:gap-12 max-md:flex-col max-md:justify-center max-md:items-center">
            <div className="max-xl:px-5 max-md:bg-[url('/assets/images/bg-fees.png')] bg-no-repeat bg-contain bg-left-bottom max-md:pb-[80%] max-md:w-full">
              <p className="fade-up max-w-[565px] md:text-[32px] text-[22px] font-bold">
                Permanently 0 fees for sending and receiving transactions
              </p>
              <span className="fade-up">
                <img
                  className="drop-shadow-[-6px_-6px_64px_rgba(0,0,0,1)]"
                  src="/assets/images/zero.png"
                  alt=""
                />
              </span>
            </div>
            <div className="md:pt-[100px]">
              <figure className="fade-up ">
                <img src="/assets/images/iphone-01.png" alt="" />
              </figure>
              <div className="md:-mt-[54px] -mt-8 max-md:px-5">
                <p className="fade-up md:text-[64px] text-[32px] font-black u-text-gradient bg-[linear-gradient(145deg,_#4FBCEC_33.61%,_#0B3FAD_79.25%)]">
                  Cross platform
                </p>
                <p className="fade-up md:text-[24px] text-[16px] font-medium max-w-[446px] px-3 py-5">
                  Available as a software mobile wallet for iOS and Android. 
                  <br />
                  Manage your software and hardware wallets in one app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-md:overflow-hidden">
      <div className="flex items-end gap-10 md:gap-16 mt-14 md:-mt-10 w-full max-w-[1312px] mx-auto max-md:flex-col relative z-20 ">
        <figure className="fade-up relative lg:ml-[120px] max-md:ml-20 max-lg:px-5">
            <img className="relative z-10 max-md:w-[85%]" src="/assets/images/iphone-02.png" alt="" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[497.226px] h-[87.893px] rotate-[0.4deg] flex-shrink-0 rounded-[497.226px] bg-[#051465] filter blur-[45px]"></span>
        </figure>
        <div className="md:flex-1 md:pb-[70px] pr-5 max-md:pl-5">
                <p className="fade-up md:text-[64px] text-[32px] font-black u-text-gradient bg-[linear-gradient(145deg,_#4FBCEC_33.61%,_#0B3FAD_79.25%)]">
                    Operate intuitively <br />
                    simple design
                </p>
                <div className="fade-up flex justify-end">
                    <p className="md:text-[24px] text-[16px] font-medium max-w-[446px] px-3 pt-10">
                        Available as a software mobile wallet for iOS and Android. <br />
                        Manage your software and hardware wallets in one app.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Fees;
