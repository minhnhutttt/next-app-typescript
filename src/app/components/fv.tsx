"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const FV = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative overflow-hidden">
        <div className="absolute inset-0">
                <video autoPlay muted loop className="w-full h-full object-cover">
                <source src="/assets/videos/fv.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        <div className="w-full max-w-[1440px] mx-auto md:pt-[143px] pt-[40vw] pb-12 md:pb-[124px] px-10">
            <h1 className="zoom-in"><img src="/assets/images/fv-text.png" alt="タイパ最強！空いた時間で稼ぎまくれ！" /></h1>
        </div>
        <div className="absolute inset-x-0 -bottom-0.5 flex z-10">
            <img className="w-full" src="/assets/images/fv-line.png" alt="" />
        </div>
    </section>
  );
};

export default FV;
