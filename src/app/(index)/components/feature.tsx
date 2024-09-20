"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const Feature = () => {
    const ref = useScrollAnimations();

    useLayoutEffect(() => {
        let trigger = document.querySelector("#textSection");
        const chars = gsap.utils.toArray<HTMLElement>(".char");
        gsap.set(chars, {
            display: 'inline-block',
            opacity: 0.4,
        });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: trigger,
            start: "top top",
            end: "+=150%",
            scrub: 0.75,
            pin: true,
          },
        });
        tl.to(chars, {
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
        }, 0.01);
      
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
          tl.kill();
        };
      }, []);
      
    return (
        <section  className="relative overflow-hidden md:px-10 px-5">
            <div  id="textSection" className="w-full md:max-w-[1310px] max-w-[540px] mx-auto pt-[80px] pb-16 md:pt-[230px] md:pb-[180px]">
            <h4 data-splitting className="md:text-[64px] text-[32px] text-center font-bold leading-[1.2]">
                Biological Functions and Potential <br className="max-xl:hidden" />Applications of HGF
            </h4>
            <div className="flex md:gap-[60px] gap-[30px] mt-[60px] md:mt-[100px] max-md:flex-col max-md:items-center max-md:justify-center">
                <div className="flex-1 border-2 border-white/20 rounded-[10px] max-w-[625px] overflow-hidden flex flex-col justify-between">
                    <div>
                        <figure>
                            <img src="/assets/images/feature-img-01.png" alt="Functions of HGF" />
                        </figure>
                        <div className="md:px-6 px-4 pt-8 md:pt-12">
                            <h4 className="md:text-[32px] text-[20px] font-bold">Functions of HGF</h4>
                            <p className="md:text-[20px] text-[16px] tracking-[0.04em] mt-3 md:mt-4">
                            HGF is a growth factor that promotes liver regeneration and cell repair and prevents injured cells from apoptosis. It also creates new blood vessels and aids in muscle and organ recovery. For this reason, it plays an important role in regenerative medicine and cancer treatment.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-end mt-8 md:mt-12 md:px-6 px-4 md:pb-6 pb-4">
                        <a href="/" className="flex items-center gap-2 md:text-[20px] text-[16px] font-bold">
                        <span>Learn more</span>
                        <span><img src="/assets/images/arrow.svg" alt="" /></span>
                        </a>
                    </div>
                </div>
                <div className="flex-1 border-2 border-white/20 rounded-[10px] max-w-[625px] overflow-hidden flex flex-col justify-between">
                    <div>
                        <figure>
                            <img src="/assets/images/feature-img-02.png" alt=" Fields of application" />
                        </figure>
                        <div className="md:px-6 px-4 pt-8 md:pt-12">
                            <h4 className="md:text-[32px] text-[20px] font-bold"> Fields of application</h4>
                            <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 items-start md:text-[13px] text-[10px] font-light text-center md:mt-9 mt-4 md:px-2 gap-5 break-words">
                                <div className="flex flex-col items-center justify-center gap-1.5">
                                    <span><img src="/assets/images/feature-ic-01.png" alt="Regenerative Medicine" /></span>
                                    <span>Regenerative <br />Medicine</span>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-1.5">
                                    <span><img src="/assets/images/feature-ic-02.png" alt="Cancer Treatment" /></span>
                                    <span>Cancer <br />Treatment</span>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-1.5">
                                    <span><img src="/assets/images/feature-ic-03.png" alt="Tissue Repair" /></span>
                                    <span>Tissue Repair</span>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-1.5">
                                    <span><img src="/assets/images/feature-ic-04.png" alt="Neuroregenerative medicine" /></span>
                                    <span className="break-words md:max-w-[90px] max-w-[70px]">Neuroregenerative medicine</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex justify-end mt-8 md:mt-12 md:px-6 px-4 md:pb-6 pb-4">
                        <a href="/" className="flex items-center gap-2 md:text-[20px] text-[16px] font-bold">
                        <span>Learn more</span>
                        <span><img src="/assets/images/arrow.svg" alt="" /></span></a>
                    </div>
                </div>
            </div>
            </div>
        </section>
  );
};

export default Feature;
