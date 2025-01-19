"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Fv = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-10 md:h-[800px] bg-[linear-gradient(90deg,_#19539D_0.02%,_#627EEA_99.97%)]"
    >
      <div className="absolute inset-0">
        <video
            autoPlay
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="/assets/videos/fv.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div>
      <div className="flex justify-center items-end h-full relative z-10 px-5">
        <h1><img src="/assets/images/fv-phone.png" alt="" /></h1>
      </div>
      <div className="fade-up h-[100px] md:h-[212px] absolute bottom-0 inset-x-0 flex items-center gap-5 md:text-[300px] text-[140px] font-black">
            <div className="flex-shrink-0 flex gap-5 min-w-full animate-[scroll_30s_linear_infinite] u-transform">
                <p className="flex-[0_0_auto] u-text-gradient bg-[linear-gradient(90deg,_rgba(25,_83,_157,_0.30)_0.02%,_rgba(98,_126,_234,_0.30)_99.97%)] leading-none">ENJOY WEB 3 TO THE FULLEST WITH TOKENS</p>
                <p className="flex-[0_0_auto] u-text-gradient bg-[linear-gradient(90deg,_rgba(25,_83,_157,_0.30)_0.02%,_rgba(98,_126,_234,_0.30)_99.97%)] leading-none">ENJOY WEB 3 TO THE FULLEST WITH TOKENS</p>
            </div>
            <div className="flex-shrink-0 flex gap-5 min-w-full animate-[scroll_30s_linear_infinite] u-transform">
            <p className="flex-[0_0_auto] u-text-gradient bg-[linear-gradient(90deg,_rgba(25,_83,_157,_0.30)_0.02%,_rgba(98,_126,_234,_0.30)_99.97%)] leading-none">ENJOY WEB 3 TO THE FULLEST WITH TOKENS</p>
            <p className="flex-[0_0_auto] u-text-gradient bg-[linear-gradient(90deg,_rgba(25,_83,_157,_0.30)_0.02%,_rgba(98,_126,_234,_0.30)_99.97%)] leading-none">ENJOY WEB 3 TO THE FULLEST WITH TOKENS</p>
            </div>
        </div>
    </section>
  );
};

export default Fv;
