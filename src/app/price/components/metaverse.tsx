"use client";
import Button from "@/components/button";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Metaverse = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="overflow-hidden md:pb-[88px] pb-14">
        <h4 className="fade-up text-center md:text-[39px] text-[28px] font-black font-serif text-[#0B1096] pb-4 flex justify-center px-4">
            <span>＼</span> <span>このページからお申し込みいただいた方限定 </span><span>／</span>
        </h4>
        <div className="fade-up bg-[url('/assets/images/bg-title-06.png')] bg-[length:auto_100%] md:bg-cover bg-no-repeat bg-[center_left_-100px] md:bg-center h-[100px] md:h-[197px] bg-[#0B1096] relative flex items-center justify-center dt:justify-center max-md:px-5 max-md:flex-col max-md:py-10 border-t-2 border-[#0B1096]">
            <p className="font-serif text-white font-black md:text-[2.708vw] dt:text-[39px] text-[clamp(14px,3.8vw,20px)] w-full md:max-w-[51.389vw] dt:max-w-[740px] text-center">
            メタバース空間で使える <br />
            お線香アイテムが一生涯無料
            </p>
            <span className="md:absolute bottom-4 right-4 dt:right-28 max-md:w-full max-md:mt-5 max-md:hidden">
            <img
                className="dt:w-[361px] md:w-[25.069vw] w-[50vw] ml-auto"
                src="/assets/images/sign-title-01.png"
                alt=""
            />
            </span>
        </div>
        <div className="mt-9 bg-[url('/assets/images/price/bg-metaverse.png')] bg-[length:100%_auto] bg-top bg-no-repeat md:py-[100px] py-16 px-5">
            <div className="fade-up flex flex-col items-center md:mb-[150px] mb-20">
                <figure className="fade-up">
                    <img src="/assets/images/price/metaverse-text_01.png" alt="" />
                </figure>
                <figure className="fade-up">
                    <img src="/assets/images/price/metaverse-text_02.png" alt="" />
                </figure>
                <figure className="fade-up">
                    <img src="/assets/images/price/metaverse-text_03.png" alt="" />
                </figure>
                <figure className="fade-up">
                    <img src="/assets/images/price/metaverse-text_04.png" alt="" />
                </figure>
                <figure className="fade-up">
                    <img src="/assets/images/price/metaverse-text_05.png" alt="" />
                </figure>
                <figure className="fade-up">
                    <img src="/assets/images/price/metaverse-text_06.png" alt="" />
                </figure>
                <figure className="fade-up">
                    <img src="/assets/images/price/metaverse-text_07.png" alt="" />
                </figure>
            </div>
            <div className="fade-up flex justify-center">
                <Button href="#" rect="md:w-[700px] md:h-[118px] w-[320px] h-20 font-sns text-white font-bold md:text-[32px] text-[20px] flex items-center justify-center md:rounded-[60px] rounded-[40px] bg-[#F12929]">
                お線香特典付きで申し込む
                </Button>
            </div>
        </div>
    </section>
  );
};

export default Metaverse;
