"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Fear = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="overflow-hidden ">
      <div className="md:bg-[url('/assets/images/bg-title-01.png')]  md:bg-cover bg-no-repeat bg-left-bottom md:h-[197px] bg-[#657FD8] relative flex items-center max-dt:pl-[361px] max-md:justify-center dt:justify-center max-md:px-5 max-md:flex-col max-md:py-10">
        <p className="font-serif text-white font-black md:text-[2.708vw] dt:text-[39px] text-[5vw] w-full md:max-w-[51.389vw] dt:max-w-[740px]">
          愛するペットとの 『 おもいで 』が <br />
          少しずつ風化していく恐怖…
        </p>
        <span className="md:absolute bottom-4 right-4 dt:right-28 max-md:w-full max-md:mt-5">
          <img
            className="dt:w-[361px] md:w-[25.069vw] w-[50vw] ml-auto"
            src="/assets/images/sign-title-01.png"
            alt=""
          />
        </span>
      </div>
      <div className="w-full max-w-[1440px] mx-auto mt-4 pr-7">
        <div className="bg-[#DBF3FF]">
          <div className="w-full max-w-[1000px] py-8 border-b border-black/50 text-[#5F5F5F] md:text-[28px] text-[20px] font-semibold font-serif pl-24">
            ペットを亡くした悲しみは、言葉では表せないほど深いものです。
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fear;
