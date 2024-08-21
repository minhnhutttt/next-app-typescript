"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Howto = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative overflow-hidden bg-[#FA3D51] pt-9">
      <div className="w-full max-w-[1360px] mx-auto">
        <div className="w-full max-w-[1020px] h-[352px] mx-auto p-3 md:p-[20px] relative rounded-[50px] overflow-hidden">
          <span className="absolute md:animate-[rotate_30s_linear_infinite] animate-[rotate_20s_linear_infinite] w-[300vmax] -top-1/2 -left-1/2 aspect-square md:bg-[repeating-linear-gradient(_60deg,_#F30000,_#F30000_20px,_#000_20px,_#000_40px_)] bg-[repeating-linear-gradient(_60deg,_#F30000,_#F30000_15px,_#000_15px,_#000_30px_)]"></span>
          <div className="w-full h-full bg-black rounded-[50px] relative text-white font-extrabold flex items-center justify-center flex-col">
            <p className="md:text-[64px] text-[32px]">新ミッション発生中！</p>
            <p className="md:text-[42px] text-[24px]">あなたの隙間時間で近隣企業を救え</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Howto;
