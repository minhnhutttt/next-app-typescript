"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
const FV = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="md:h-[760px] bg-cover relative">
      <div className="absolute inset-0 z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-bottom opacity-60"
        >
          <source src="/assets/videos/fv.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 [box-shadow:0px_4px_10px_rgba(0,_0,_0,_0.05)] bg-[url('/assets/images/fv-bg.png')] bg-center h-full bg-white/20 flex flex-col items-center justify-center py-10 md:py-[51px] px-5">
        <div className="popup w-[89.258vw] lg:w-[914px] aspect-[914/294] bg-[url('/assets/images/fv-title.png')] bg-cover flex items-center justify-center mb-7 md:mb-10">
          <h1 className="font-itim lg:text-[76px] text-[7.422vw] text-[#0F0F0F] [text-shadow:3px_3px_0px_#B70000] leading-none text-center tracking-wider">
            SANTA MEETS <br />BLOCKCHAIN MAGIC
          </h1>
        </div>
        <span className="slide-skew"><img src="/assets/images/fv-santa.png" alt="" /></span>
        <div className="absolute left-0 right-0 imageMarquee bg-[url('/assets/images/fv-m.png')] h-[165px] md:h-[330px] bg-[length:auto_100%] bottom-[100px] z-10">

        </div>
        <p className="popup text-center md:text-[24px] text-[18px] font-courgette md:mt-6 mt-4 mb-5 md:mb-8">A New Era of Giving, Where Blockchain Becomes Santa's Sleigh</p>
        <div className="popup flex justify-center">
          <a href="/" className="flex items-center justify-center w-[280px] md:w-[310px] h-[50px] md:h-[70px] bg-[#B70000] rounded-full text-white md:text-[26px] text-[20px] font-bold">
            WHITEPAPER
          </a>
        </div>
      </div>
    </section>
  );
};

export default FV;
