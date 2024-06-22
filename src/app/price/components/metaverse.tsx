"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Metaverse = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="overflow-hidden md:pb-[88px] pb-14">
        <h4 className="fade-up text-center md:text-[39px] text-[28px] font-black font-serif text-[#0B1096] pb-4 border-b-2 border-[#0B1096] flex justify-center px-4">
            <span>＼</span> <span>このページからお申し込みいただいた方限定 </span><span>／</span>
        </h4>
        <div className="fade-up md:bg-[url('/assets/images/bg-title-01.png')] md:bg-cover bg-no-repeat bg-left-bottom md:h-[197px] bg-[#657FD8] relative flex items-center max-dt:pl-[361px] max-md:justify-center dt:justify-center max-md:px-5 max-md:flex-col max-md:py-10">
            <p className="font-serif text-white font-black md:text-[2.708vw] dt:text-[39px] text-[5vw] w-full md:max-w-[51.389vw] dt:max-w-[740px] text-center">
            メタバース空間で使える <br />
            お線香アイテムが一生涯無料
            </p>
            <span className="md:absolute bottom-4 right-4 dt:right-28 max-md:w-full max-md:mt-5">
            <img
                className="dt:w-[361px] md:w-[25.069vw] w-[50vw] ml-auto"
                src="/assets/images/sign-title-01.png"
                alt=""
            />
            </span>
        </div>
        <div className="mt-9 bg-[url('/assets/images/price/bg-metaverse.png')] bg-[length:100%_auto] bg-top bg-no-repeat md:py-[100px] py-16 px-5">
            <div className="fade-up flex justify-center md:mb-[150px] mb-20">
                <img src="/assets/images/price/metaverse-text.png" alt="" />
            </div>
            <div className="fade-up flex justify-center">
                  <a href="/" className="md:w-[700px] md:h-[118px] w-[320px] h-20 font-sns text-white font-bold md:text-[32px] text-[20px] flex items-center justify-center md:rounded-[60px] rounded-[40px] bg-[#F12929]  duration-150 hover:opacity-75">
                  お線香特典付きで申し込む
                  </a>
                </div>
        </div>
    </section>
  );
};

export default Metaverse;
