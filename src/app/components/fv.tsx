"use client";
import Button from "@/components/button";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
const FV = () => {
  const ref = useScrollAnimations();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
        const imagesLeft = gsap.utils.toArray('.scroll-img.scroll-left');
        imagesLeft.forEach((image: any) => {
            gsap.to(image, {
                x: -gsap.utils.random(20, 240),
          y: -gsap.utils.random(20, 240),
                ease: "Power0.easeInOut",
                scrollTrigger: {
                  trigger: '.containertriger',
                  start: 'top top',
                  scrub: true,
                }
              });
        });
        const imagesRight = gsap.utils.toArray('.scroll-img.scroll-right');
        imagesRight.forEach((image: any) => {
            gsap.to(image, {
                x: gsap.utils.random(20, 240),
          y: -gsap.utils.random(20, 240),
                ease: "Power0.easeInOut",
                scrollTrigger: {
                  trigger: '.containertriger',
                  start: 'top top',
                  scrub: true,
                }
              });
        });
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[url('/assets/images/bg-fv.png')] bg-cover md:px-5"
    >
        <div className="containertriger w-full max-w-[1440px] mx-auto px-[20px] relative md:h-[830px] py-[100px] md:pt-[200px]">
            <div className="relative z-10">
                <h1 className="font-anton md:text-[82px] text-[32px] lg:w-[980px] text-white leading-none tracking-[0.015em]">
                Preserving and connecting the value of <span className="text-[#D9B70D]">RWA</span> through the ages
                </h1>
                <p className="font-lato md:text-[20px] text-[14px] md:w-[703px] text-white leading-tight mt-5 mb-12">
                We invest in real world assets that have true scarcity value, such as whiskey and trading cards. Our mission is to protect these irreplaceable assets, which increase in value over time, and to pass them on to the next generation.
                </p>
                <Button href="/potential">
                RWA&apos;s Potentiality <br /> INSIGHT
                </Button>
            </div>
            <div className="">
                <div className="scroll-img scroll-left absolute max-md:w-[9.4vw] max-dt:w-[6.042vw] top-[6.736vw] max-md:left-[3vw] left-[22.222vw] dt:top-[97px] dt:left-[320px]">
                    <div className=" animate-[floating-x_3.2s_ease-in-out_infinite_alternate-reverse]">
                        <img className="animate-[floating-y_4.8s_ease-in-out_infinite_alternate-reverse]" src="/assets/images/fv-01.png" alt="" />
                    </div>
                </div>
                <div className="scroll-img scroll-left absolute max-md:w-[12.2vw] max-md:left-[20vw] max-dt:w-[8.194vw] top-[3.194vw] left-[41.667vw] dt:top-[46px] dt:left-[600px]">
                    <div className=" animate-[floating-x_2.5s_2s_ease-in-out_infinite_alternate-reverse]">
                        <img className="animate-[floating-y_5.1s_2s_ease-in-out_infinite_alternate-reverse]" src="/assets/images/fv-02.png" alt="" />
                    </div>
                </div>
                <div className="scroll-img scroll-left absolute max-md:w-[11.6vw] max-md:left-[45vw] max-dt:w-[8.194vw] top-[6.111vw] left-[65.972vw] dt:top-[88px] dt:left-[950px]">
                    <div className=" animate-[floating-x_1.5s_ease-in-out_infinite_alternate-reverse]">
                        <img className="animate-[floating-y_3.6s_ease-in-out_infinite_alternate-reverse]" src="/assets/images/fv-03.png" alt="" />
                    </div>
                </div>
                <div className="scroll-img scroll-right absolute max-md:w-[10.3vw] max-md:left-[65vw] max-md:top-[4vw] max-dt:w-[6.944vw] top-[11.181vw] left-[85.486vw] dt:top-[161px] dt:left-[1231px]">
                    <div className=" animate-[floating-x_3.6s_ease-in-out_infinite_alternate-reverse]">
                        <img className="animate-[floating-y_1.8s_ease-in-out_infinite_alternate-reverse]" src="/assets/images/fv-04.png" alt="" />
                    </div>
                </div>
                <div className="scroll-img scroll-right absolute max-md:w-[11.6vw] max-dt:w-[8.333vw] max-md:top-[10vw] max-md:left-[80vw] top-[19.653vw] left-[70.556vw] dt:top-[283px] dt:left-[1016px]">
                    <div className=" animate-[floating-x_2.7s_ease-in-out_infinite_alternate-reverse]">
                        <img className="animate-[floating-y_6.8s_ease-in-out_infinite_alternate-reverse]" src="/assets/images/fv-05.png" alt="" />
                    </div>
                </div>
                <div className="scroll-img scroll-right absolute max-md:w-[8.8vw] max-dt:w-[6.944vw] top-[28.819vw] left-[87.014vw] dt:top-[415px] dt:left-[1253px]">
                    <div className=" animate-[floating-x_3.4s_ease-in-out_infinite_alternate-reverse]">
                        <img className="animate-[floating-y_4.2s_ease-in-out_infinite_alternate-reverse]" src="/assets/images/fv-06.png" alt="" />
                    </div>
                </div>
                <div className="scroll-img scroll-right absolute max-md:w-[9.5vw] max-dt:w-[6.944vw] max-md:bottom-[32vw] md:top-[32.431vw] left-[68.125vw] dt:top-[467px] dt:left-[981px]">
                    <div className=" animate-[floating-x_5.2s_ease-in-out_infinite_alternate-reverse]">
                        <img className="animate-[floating-y_1.8s_ease-in-out_infinite_alternate-reverse]" src="/assets/images/fv-07.png" alt="" />
                    </div>
                </div>
                <div className="scroll-img scroll-right absolute max-md:w-[10.3vw] max-md:left-[4.5vw] max-dt:w-[6.944vw] max-md:bottom-[5vw] md:top-[46.736vw] md:left-[35.069vw] dt:top-[673px] dt:left-[505px]">
                    <div className=" animate-[floating-x_1.8s_ease-in-out_infinite_alternate-reverse]">
                        <img className="animate-[floating-y_4.8s_ease-in-out_infinite_alternate-reverse]" src="/assets/images/fv-08.png" alt="" />
                    </div>
                </div>
                <div className="scroll-img scroll-right absolute max-md:w-[9.85vw] max-md:left-[24.5vw] max-dt:w-[6.042vw] max-md:bottom-[5vw] md:top-[40.833vw] left-[40vw] md:left-[47.639vw] dt:top-[588px] dt:left-[686px]">
                    <div className=" animate-[floating-x_3.6s_ease-in-out_infinite_alternate-reverse]">
                        <img className="animate-[floating-y_4.1s_ease-in-out_infinite_alternate-reverse]" src="/assets/images/fv-09.png" alt="" />
                    </div>
                </div>
                <div className="scroll-img scroll-right absolute max-md:w-[14vw] max-md:left-[55.5vw] max-dt:w-[8.889vw] max-md:bottom-[10vw] md:top-[43.333vw] left-[59.306vw] dt:top-[624px] dt:left-[854px]">
                    <div className=" animate-[floating-x_5.9s_ease-in-out_infinite_alternate-reverse]">
                        <img className="animate-[floating-y_1.65s_ease-in-out_infinite_alternate-reverse]" src="/assets/images/fv-10.png" alt="" />
                    </div>
                </div>
                <div className="scroll-img scroll-right absolute max-md:w-[11vw] max-dt:w-[6.042vw] max-md:bottom-[8vw] md:top-[45.139vw] left-[83.333vw] dt:top-[650px] dt:left-[1200px]">
                    <div className=" animate-[floating-x_6.2s_ease-in-out_infinite_alternate-reverse]">
                        <img className="animate-[floating-y_2.8s_ease-in-out_infinite_alternate-reverse]" src="/assets/images/fv-11.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default FV;
