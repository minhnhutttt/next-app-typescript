"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";

export default function FV() {
    const ref = useScrollAnimations();
    return (
      <section ref={ref} className="bg-[url('/assets/images/fv-bg.png')] bg-bottom bg-[length:100%_100%] pt-7 md:pt-[70px] pb-[30vw] md:pb-[310px] px-5">
        <div className="w-full max-w-[1556px] mx-auto relative">
            <h3 className="absolute  max-[1560px]:w-[11vw] right-[18.2%] top-0 z-10">
                <img className="fade-up" src="/assets/images/fv-label.png" alt="" />
            </h3>
            <div className="pt-[4.2%] pb-[5%]">
                <figure className="zoom-out">
                    <img src="/assets/images/fv-main.png" alt="" />
                </figure>
            </div>
            <h4 className="absolute max-[1560px]:w-[37.5vw] left-[25.4%] bottom-0 z-10">
                <img className="fade-up" src="/assets/images/fv-text.png" alt="" />
            </h4>
        </div>
      </section>
    );
  }
  