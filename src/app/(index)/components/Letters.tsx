"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import Splitting from "splitting";
gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const Letters = () => {
    const ref = useScrollAnimations();

    const containerRef = useRef<HTMLDivElement>(null)
    useLayoutEffect(() => {
        Splitting();
        let ctx = gsap.context(() => {
            const chars = document.querySelectorAll(".char");
            gsap.set(chars, {
                display: 'inline-block',
                opacity: 0.4,
            });
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                pin: true,
                scrub: 0.9,
              },
            });
            tl.to(chars, {
              opacity: 1,
              stagger: 1,
              duration: 1,
            }, 0.1);
          }, [containerRef]);
      
          return () => ctx.revert();
        
      }, []);
    
    return (
        <section ref={ref} className="relative overflow-hidden">
                
                <div ref={containerRef} className="md:mt-[160px] mt-[100px] h-screen flex flex-col justify-center items-center p-5">
                <div className="absolute inset-0 ">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
        >
          <source src="/assets/videos/end.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bg-black/80 inset-0 bg-[url(/assets/images/open-fave-bg.png)] max-md:bg-[size:360px_auto] bg-no-repeat bg-center"></div>
      </div>
                    <h4 data-splitting className="md:text-[26px] text-[20px] text-white text-center font-bold leading-[2] w-full max-w-[485px] mx-auto relative z-10">
                        あなたには、これまでにないSNS体験と新たな価値創造の場を、<br />
                        今この瞬間から味わってほしい。<br />
                        <br />
                        さあ、『OPEN FAVE』で新たな価値交換の輪へ飛び込もう。<br />
                        あなたの“いいね”が、未来を変える！
                    </h4>
                </div>
        </section>
  );
};

export default Letters;
