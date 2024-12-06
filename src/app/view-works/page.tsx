"use client";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger)
gsap.config({
  nullTargetWarn: false,
})

const data = [
    {
        id: '01',
        client: 'Lab',
        title: 'Dracays',
        au: '(FWA) (SOTD)',
        href: "#"
    },
    {
        id: '02',
        client: 'Lab',
        title: 'Dracays',
        au: '(FWA) (SOTD)',
        href: "#"
    },
    {
        id: '03',
        client: 'Lab',
        title: 'Dracays',
        au: '(FWA) (SOTD)',
        href: "#"
    },
    {
        id: '04',
        client: 'Lab',
        title: 'Dracays',
        au: '(FWA) (SOTD)',
        href: "#"
    },
    {
        id: '05',
        client: 'Lab',
        title: 'Dracays',
        au: '(FWA) (SOTD)',
        href: "#"
    },
    {
        id: '06',
        client: 'Lab',
        title: 'Dracays',
        au: '(FWA) (SOTD)',
        href: "#"
    },
    {
        id: '07',
        client: 'Lab',
        title: 'Dracays',
        au: '(FWA) (SOTD)',
        href: "#"
    },
    {
        id: '08',
        client: 'Lab',
        title: 'Dracays',
        au: '(FWA) (SOTD)',
        href: "#"
    },
]

export default function ViewWorks() {
    const containerRef = useRef<HTMLElement>(null)
    useEffect(() => {
        const marquiseRight = document.querySelector(".marquise-right");
        let ctx = gsap.context(() => {
            gsap
            .timeline({
              scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom top',
                toggleActions: 'play pause reverse pause',
                scrub: true,
              },
            })
            .to(marquiseRight, {
              xPercent: -80,
              duration: 3,
              ease: 'linear',
            })
        });
    
        return () => ctx.revert();
      }, []);
  return (
    <main ref={containerRef} className="bg-black overflow-hidden">
        <div className="pt-[2rem]">
            <div className="flex justify-center items-center py-5">
                <a href="/" className=""><img className="w-[70px]" src="/assets/images/logo.svg" alt="" /></a>
            </div>
            <div className="mt-20 w-[140vw] max-w-none text-white font-bold text-[24vw] leading-none marquise-right">
            SHOWCASE
            </div>

            <div className="md:py-[13rem] py-[8rem] px-5 md:px-10">
                <p className="text-[1.6rem] mb-5">Selected Projects
                </p>
                <div className="border-t border-white divide-y divide-white">
                    {data.map((item,index) => (
                        <a href={item.href} className="group py-[2rem] grid items-center gap-x-[2rem] grid-cols-6 md:grid-cols-12 md:gap-x-[4.8rem] md:text-[1.6rem] text-[4vw] text-white font-bold hover:py-[3rem] duration-200" key={index}>
                            <div className="col-[1_/_span_1] max-md:hidden">{item.id}</div>
                            <div className="md:col-[2_/_span_1] col-[1_/_span_1]">{item.client}</div>
                            <div className="md:col-[3_/_span_6] col-[2_/_span_2]">{item.title}</div>
                            <div className="md:col-[9_/_span_2] col-[5_/_span_3]">{item.au}</div>
                            <div className="col-[12_/_span_1] flex items-center gap-2  max-md:hidden">
                            Launch
                            <span className="bg-white group-hover:scale-110 duration-200 group-hover:rotate-0 -rotate-45 rounded-full flex-[0_0_24px] h-6 flex items-center justify-center"><img src="/assets/images/arrow.svg" alt="" /></span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
        <div className="a"></div>
        <div className="b"></div>
        <div className="c"></div>
    </main>
  );
}
