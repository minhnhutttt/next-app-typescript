"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useEffect, useRef } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
gsap.config({
  nullTargetWarn: false,
})
const items = [
    {
        id: '01',
        title: 'Stability and storage',
        link: '/'
    },
    {
        id: '02',
        title: 'Manufacturing costs',
        link: '/'
    },
    {
        id: '03',
        title: (<>Durability of <br />therapeutic effect</>),
        link: '/'
    }
  ]

const Technical = () => {
    const ref = useScrollAnimations();
    const containerRef = useRef<HTMLDivElement>(null)
    const sliderRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        let ctx = gsap.context(() => {
          let panels = gsap.utils.toArray('.panel')
          const sliderContainer = sliderRef.current
          if (sliderContainer) {
            gsap.to(panels, {
              x: -sliderContainer.offsetWidth + window.innerWidth,
              ease: 'none',
              scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                snap: 1 / (panels.length - 1),
                start: 'center center',
                end: () => '+=' + sliderContainer.offsetWidth / 3,
              },
            })
          }
        }, containerRef)
    
        return () => ctx.revert()
      }, [])
  return (
    <section ref={ref} className="relative overflow-hidden pt-[100px] md:pt-[148px]">
        <div ref={containerRef} className="bg-[url('/assets/images/technical-bg.png')] bg-cover bg-no-repeat md:pb-[273px] pb-[160px]">
        <div className="w-full mx-auto pt-8 md:pt-10">
          <h4 className="md:text-[64px] text-[32px] text-center font-bold">Technical Challenges and Solutions</h4>
          <div className="relative md:mt-[160px] mt-20">
          <div className="flex items-center justify-center">
            <figure className="aspect-[420/428] w-[60vw] max-w-[420px] animate-[backwards-rotation_60s_infinite_linear] md:w-[29.167vw]">
              <img src="/assets/images/image-globular.png" alt="" />
            </figure>
          </div>
          <div className="absolute inset-x-0 top-1/2 z-10 -translate-y-1/2">
            <div className="overflow-hidden">
              <div
                ref={sliderRef}
                className="flex mx-[100vw] md:w-[calc(((400px_*_3)_+_(40px_*_2))_+_200vw)] w-[calc(((300px_*_3)_+_(20px_*_2))_+_200vw)] gap-5 md:gap-10"
              >
                {items.map((item, index) => (
                  <div
                    className="panel relative size-[250px] md:size-[400px] rounded-[20px] border backdrop-filter backdrop-blur-[10px] bg-white/10 border-white/50 overflow-hidden flex w-[60vw] justify-center items-center"
                    key={index}
                  >
                    <div className="absolute size-[50px] bg-[#0C0F18] flex items-center justify-center text-[20px] top-5 right-2.5">
                        {item.id}
                    </div>
                    <div className="md:text-[32px] text-[20px] font-bold text-center">
                        {item.title}
                    </div>
                    <div className="flex justify-center absolute bottom-9">
                        <a href={item.link} className="flex items-center justify-center md:text-[20px]">
                            <span>Learn more</span>
                            <span><img src="/assets/images/arrow02.svg" alt="" /></span>
                        </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
    </section>
  );
};

export default Technical;
