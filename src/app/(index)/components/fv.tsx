"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
const FV = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="md:h-[756px] bg-[url('/assets/images/bg-fv.png')] bg-cover relative">
      <div className="bg-[url('/assets/images/hand.png')] max-md:bg-[length:60%_auto] bg-no-repeat bg-right-bottom h-full ">
      <div className="w-full max-w-[1440px] mx-auto md:pl-[60px] pt-14 md:pt-[133px] max-md:pb-[65%]">
        <div className="md:w-[675px] w-[90%] max-md:mx-auto md:h-[480px] bg-black/80 [background-size:600%_100%] bg-[linear-gradient(-45deg,_rgba(4,4,4,0.4)_50%,_rgba(222,216,216,0.4)_60%,_rgba(4,4,4,0.4)_70%)] px-3 py-[60px] flex items-center justify-center rounded-[20px] animate-[shine_20s_linear_infinite]">
          <div className="-ml-4">
            <img src="/assets/images/fv-text.svg" alt="Your WEB3 Experience starts here" />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default FV;
